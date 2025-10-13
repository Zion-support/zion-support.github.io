
const Main: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Main - Zion Tech Group</title>
        <meta name="description" content="Professional main services by Zion Tech Group." />
      </Helmet>

  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// Register service worker for PWA functionality
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        // Service worker registered successfully
      })
      .catch((registrationError) => {
        // Service worker registration failed
      });
  });
