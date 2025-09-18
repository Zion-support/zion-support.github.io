import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { createRoot } from 'react-dom/client';
<<<<<<< HEAD
import App from './App';
=======
import App from './App.tsx';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
import './index.css';
import { BrowserRouter } from 'react-router-dom';
const rootElement = document.getElementById('root');
if (!rootElement) {
    throw new Error('Root element not found');
}
const root = createRoot(rootElement);
root.render(_jsx(React.StrictMode, { children: _jsx(BrowserRouter, { children: _jsx(App, {}) }) }));
