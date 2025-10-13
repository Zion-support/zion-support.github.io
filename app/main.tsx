import React from 'react';

interface mainProps {

import React from "react";
import "./index.css";
import React from "react";

interface MainProps {
  className?: string;
  children?: React.ReactNode;
}
import React from 'react';
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

export default function main({ className = '', children }: mainProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
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
);
);
);
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from "./App";
);

export default function Main({ className = '', children, ...props }: MainProps) {
}
