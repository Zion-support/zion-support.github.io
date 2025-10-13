import React from 'react';

interface mainProps {

import React from "react";
import "./index.css";

interface MainProps {
  className?: string;
  children?: React.ReactNode;
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

export default function main({ className = '', children }: mainProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
import ReactDOM from "react-dom/client";
import App from "./App";


import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

  document.getElementById('root') as HTMLElement



root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

export default function Main({ className = '', children, ...props }: MainProps) {
