import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import { Helmet } from 'react-helmet-async'; // Unused import

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
);
