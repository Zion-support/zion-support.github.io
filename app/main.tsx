<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
=======
);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
=======
);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
=======
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from "./App";
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
