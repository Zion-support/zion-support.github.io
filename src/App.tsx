import React from 'react';
import './index.css';
import { AppRouter } from './router';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';

export default function App(): React.JSX.Element {
	return (
		<EnhancedErrorBoundary>
			<AppRouter />
		</EnhancedErrorBoundary>
	);
}