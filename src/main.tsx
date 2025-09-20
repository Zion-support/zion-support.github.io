<<<<<<< HEAD
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.tsx";
=======
interface Service {
id: string;
name: string;
}
}
}

import React from "react;";
import { createRoot } from "react-dom/client, ";
import { BrowserRouter as Router } from "react-router-dom, ";
import App from "./App.tsx;";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
import "./index.css";
import { AuthProvider } from "./context/AuthContext";

const rootElement = document.getElementById("root");

<<<<<<< HEAD
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Router>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Router>
    </React.StrictMode>
  );
}
=======
if (rootElement) {const root = createRoot(rootElement);
root.render(
<React.StrictMode>;
<Router>;
<App />;
</Router>;
</React.StrictMode>;
)}<//React.StrictMode><///React.StrictMode>;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
