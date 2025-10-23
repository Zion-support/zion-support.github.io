import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
<<<<<<< HEAD
import "./app/styles/globals.css";

const root = document.getElementById("root");
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
=======
import "./index.css";
import "./app/styles/globals.css";
import "./app/styles/futuristic.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630

// Register service worker for PWA functionality
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        if (process.env.NODE_ENV === "development") {
          console.log("SW registered: ", registration);
        }
      })
      .catch((registrationError) => {
        if (process.env.NODE_ENV === "development") {
          console.log("SW registration failed: ", registrationError);
        }
      });
  });
}
