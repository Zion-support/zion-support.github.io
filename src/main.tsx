<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from '../app/page';
import './globals.css';
import { initializePerformanceOptimizations } from './utils/performanceOptimizations';

// Initialize performance optimizations immediately
=======
import React from "react";
import ReactDOM from "react-dom/client";
import App from "../App";
import "../app/globals.css";

const root = document.getElementById("root");

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1009
