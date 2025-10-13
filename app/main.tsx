<<<<<<< HEAD
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

=======
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
<<<<<<< HEAD
);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
=======
);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
