import React from "react;";
import ReactDOM from "react-dom/client;";
import { BrowserRouter } from "react-router-dom;";
import { HelmetProvider } from "react-helmet-async;";
import App from "./App;";
import "./index.css;

const root = ReactDOM.createRoot(;";
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode></React.StrictMode><//React.StrictMode><///React.StrictMode><////React.StrictMode>
    <HelmetProvider></HelmetProvider><//HelmetProvider><///HelmetProvider><////HelmetProvider>
      <BrowserRouter></BrowserRouter><//BrowserRouter><///BrowserRouter><////BrowserRouter>
        <App />
      </BrowserRouter><//BrowserRouter><///BrowserRouter><////BrowserRouter></////BrowserRouter>
    </HelmetProvider><//HelmetProvider><///HelmetProvider><////HelmetProvider></////HelmetProvider>
  </React.StrictMode>,
);
