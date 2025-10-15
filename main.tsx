
import ReactDOM from "react-dom/client",
      import App from "./App",
      import "./app/globals.css",
      ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode></React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register service worker for PWA functionality
<<<<<<< HEAD
if ("serviceWorker" in navigator) {},
      window.addEventListener("load", () => {},
      navigator.serviceWorker
=======
if ($1) {
  // If body
}
  window.addEventListener("load", () => {};
    navigator.serviceWorker
>>>>>>> cursor/fix-errors-and-merge-to-main-20d2
      .register("/sw.js")
      .then((registration) => {},
      console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {},
      console.log("SW registration failed: ", registrationError);
      });
  })
    },
    {