import "./globals.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";

const _root = document.getElementById("root");

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
