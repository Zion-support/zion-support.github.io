<<<<<<< HEAD
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
=======
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
import { Helmet } from 'react-helmet-async';

interface MainProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Main({ className = '', children, ...props }: MainProps) {
  return (
    <div className={`main-component ${className}`} {...props}>
      {children}
    </div>
  );
}
>>>>>>> origin/main
