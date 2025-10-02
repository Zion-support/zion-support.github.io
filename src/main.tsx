import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById('root');
if (container) {
	const root = createRoot(container);
	root.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	);
}

// Register service worker for basic offline support if available
if ("serviceWorker" in navigator) {
	window.addEventListener("load", () => {
		navigator.serviceWorker
			.register("/sw.js")
			.catch(() => {
				// no-op: registration failed; proceed without SW
			});
	});
}
