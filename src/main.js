import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
<<<<<<< HEAD
import ReactDOM from 'react-dom/client';
=======
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
ReactDOM.createRoot(document.getElementById('root')).render(_jsx(React.StrictMode, { children: _jsx(BrowserRouter, { children: _jsx(App, {}) }) }));
