import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App(): React.ReactElement {
	return (
		<div style={{ padding: 24 }}>
			<h1>Zion</h1>
			<p>Welcome to the Zion Tech Group site.</p>
		</div>
	);
}

const container = document.getElementById("root");
if (container) {
	const root = createRoot(container);
	root.render(<App />);
}

