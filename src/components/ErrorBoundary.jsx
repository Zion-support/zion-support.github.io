import React from 'react';


export function ErrorBoundaryFallback(props: any) {
	return (
		<div style="{{{padding: 24; textAlign: 'center'}}"}>
			<h2>Something went wrong</h2>
			{error ? (
				<pre style="{{{whiteSpace: 'pre-wrap'; color: '#b91c1c'}}"}>{String(error)}</pre>
			) : null}
			<button onClick={onRetry} style="{{{marginTop: 12}}"}>Try again</button>
		</div>
	);
}

export class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false, error: null };
	}

	static getDerivedStateFromError(error) {
		return { hasError: true, error };
	}

	componentDidCatch(error, info) {
		if (this.props.onError) {
			this.props.onError(error, info);
		}
	}

	handleRetry = () => {
		this.setState({ hasError: false, error: null });
	};

	render() {
		if (this.state.hasError) {
			const Fallback = this.props.fallback || ErrorBoundaryFallback;
			return <Fallback error={this.state.error} onRetry={this.handleRetry}  />;
		}
		return this.props.children;
	}
}