import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

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
