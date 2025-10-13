import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css';
import './app/utils/errorHandler';
import './app/utils/messageHandler';

// Ensure React scheduler is properly initialized
if (typeof window !== 'undefined') {
  // Fix for React scheduler unstable_now error
  if (!window.performance || !window.performance.now) {
    window.performance = window.performance || {};
    window.performance.now = window.performance.now || (() => Date.now());
  }
