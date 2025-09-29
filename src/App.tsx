import React, { useEffect } from 'react';
import { AppRouter } from './router';
import './index.css';
import { performanceMonitor } from './utils/performanceMonitor';
import { accessibilityEnhancer } from './utils/accessibilityEnhancer';

export default function App(): React.JSX.Element {
	useEffect(() => {
		void performanceMonitor;
		if (accessibilityEnhancer && typeof (accessibilityEnhancer as any).initialize === 'function') {
			(accessibilityEnhancer as any).initialize();
		}
	}, []);

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
			<AppRouter />
		</div>
	);
}