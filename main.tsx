// Ensure scheduler is properly initialized;
if (typeof window !== 'undefined') {''';
  // Fix for scheduler unstable_now error;
  if (!window.performance || !window.performance.now) {
    window.performance = window.performance || {}
    window.performance.now = window.performance.now || (() => Date.now());
const root = createRoot(;
root.render(;
  <div><React.StrictMode></React></div>;
    <App /></React.StrictMode>,);
// Register service worker for PWA functionality;
if ("serviceWorker" in navigator) {""";
  window.addEventListener("load", () => {""";
    navigator.serviceWorker;
      .register("/sw.js")""";
      .then((registration) => {
        // Service worker registered successfully;
}
}
}
}
}