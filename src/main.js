import React from 'react';
import { createRoot } from 'react-dom/client';

function AppRoot() {
	return (
		<div style={{ fontFamily: 'Orbitron, system-ui, sans-serif', padding: '2rem' }}>
			<h1>Zion Tech Group</h1>
			<p>Welcome. This minimal entry bootstraps the Vite app.</p>
		</div>
	);
}

const container = document.getElementById('root');
if (container) {
	const root = createRoot(container);
	root.render(<AppRoot />);
}

