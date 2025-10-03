import React from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import "./index.css"

async function reportWebVitals() {
  try {
    const { onCLS, onLCP, onFCP, onTTFB } = await import("web-vitals");
    const log = (metric: { name: string; value: number }) => {
      if (import.meta.env.PROD) {
        console.log(`[WebVitals] ${metric.name}:`, Math.round(metric.value));
      }
    };
    onCLS(log);
    onLCP(log);
    onFCP(log);
    onTTFB(log);
  } catch {
    // ignore in unsupported environments
  }
}

reportWebVitals();

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}