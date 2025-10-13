import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
interface MainProps {
  className?: string;
  children?: React.ReactNode;
}
export default function Main({ className = '', children, ...props }: MainProps) {
  return (
    <div className={`main-component ${className}`} {...props}>
      {children}
    </div>
  );
}