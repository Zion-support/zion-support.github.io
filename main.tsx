<<<<<<< HEAD
import ReactDOM from "react-dom/client",;"
      import App from "./App",;"
      import "./app/globals.css",;"
      ReactDOM.createRoot(document.getElementById("root")!).render()";
=======

import ReactDOM from "react-dom/client",";";
      import App from "./App",";";
      import "./app/globals.css",";";
      ReactDOM.createRoot(document.getElementById("root")!).render()";";

<<<<<<< HEAD
const: container = document.getElementById('root');";
if (!container) {
  throw new Error('Root element not found');";
}

const: root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
=======
>>>>>>> main
  <React.StrictMode></React.StrictMode>
    <App />;
  </React.StrictMode>;
);
<<<<<<< HEAD
// Register service worker for PWA functionality";
if ($1) {};";";
  // If body";";";
}"
  window.addEventListener("load", () => {};";";";";
    navigator.serviceWorker"
      .register("/sw.js")";"
      .then((registration) => {},": value";"
      console.log("SW registered: ", registration);";";";";
      })"
      .catch((registrationError) => {},": value";"
      console.log("SW registration failed: ", registrationError);";
=======

// Register service worker for PWA functionality
if ($1) {}
  // If body
}
  window.addEventListener("load", () => {};";";
    navigator.serviceWorker

      .register("/sw.js")";";
      .then((registration) => {},": value";";
      console.log("SW registered: ", registration);";";
      })
      .catch((registrationError) => {},": value";";
      console.log("SW registration failed: ", registrationError);";";
>>>>>>> main
      });
  })";
    },";";
    {}";";";
"