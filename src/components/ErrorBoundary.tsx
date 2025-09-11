import React from 'react';

type ErrorBoundaryProps = { children: React.ReactNode };

type ErrorBoundaryState = { hasError: boolean };

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(): ErrorBoundaryState {
		return { hasError: true };
	}

	componentDidCatch(error: unknown, errorInfo: unknown) {
		// eslint-disable-next-line no-console
		console.error('Error caught by boundary:', error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return (
				<div className="min-h-screen flex items-center justify-center p-8">
					<div className="text-center max-w-md">
						<h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h2>
						<p className="text-gray-600 mb-4">Please refresh the page to try again.</p>
						<button
							onClick={() => (typeof window !== 'undefined' ? window.location.reload() : undefined)}
							className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
						>
							Refresh Page
						</button>
					</div>
				</div>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
