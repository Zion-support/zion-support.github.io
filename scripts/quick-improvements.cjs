#!/usr/bin/env node

// Minimal quick improvements script: generates ErrorBoundary and LoadingSpinner components
const fs = require('fs');
const path = require('path');

function ensureDirSync(dirPath) {
	if (!fs.existsSync(dirPath)) {
		fs.mkdirSync(dirPath, { recursive: true });
	}
}

function writeFileSyncSafe(filePath, content) {
	ensureDirSync(path.dirname(filePath));
	fs.writeFileSync(filePath, content, 'utf8');
}

console.log('Creating quick improvements...');

const errorBoundaryTsx = `import React from 'react';

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
`;

const loadingSpinnerTsx = `import React from 'react';

type LoadingSpinnerProps = { text?: string };

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ text = 'Loading…' }) => (
	<div className="flex items-center justify-center p-4" role="status" aria-live="polite">
		<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
		<span className="ml-2 text-gray-600">{text}</span>
	</div>
);

export default LoadingSpinner;
`;

writeFileSyncSafe(path.join('src', 'components', 'ErrorBoundary.tsx'), errorBoundaryTsx);
writeFileSyncSafe(path.join('src', 'components', 'LoadingSpinner.tsx'), loadingSpinnerTsx);

console.log('Quick improvements completed.');
