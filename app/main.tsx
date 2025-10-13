import React from 'react';

<<<<<<< HEAD
interface mainProps {
  className?: string;
  children?: React.ReactNode;
}

export default function main({ className = '', children }: mainProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
=======
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
