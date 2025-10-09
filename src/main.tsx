import ReactDOM from 'react-dom/client';
import App from './App';
import './globals.css';

// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('Service Worker registered successfully:', registration);
      })
      .catch((error) => {
        console.log('Service Worker registration failed:', error);
      });
  });
}

// Create root and render app
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);