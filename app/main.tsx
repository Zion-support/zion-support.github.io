import React from "react";
import ReactDOM from "react-dom/client";
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from "./App";
=======
import App from "./App";
import "./index.css";
import { Helmet } from 'react-helmet-async';
>>>>>>> 2fda46b8c81d66ef34322b3dc826b41bdfbc86e8

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
