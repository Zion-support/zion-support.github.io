<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';

<<<<<<< HEAD
interface mainProps {
=======


import React from "react";
import "./index.css";

interface MainProps {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
  className?: string;
  children?: React.ReactNode;
}
=======
import React from 'react';
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-07e8

export default function main({ className = '', children }: mainProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
<<<<<<< HEAD
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
=======
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c68e
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
<<<<<<< HEAD
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
=======
);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c68e
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
