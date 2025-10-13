<<<<<<< HEAD
<<<<<<< HEAD
=======
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
=======
import React from "react";
import ReactDOM from "react-dom/client";
>>>>>>> cursor/fix-errors-and-merge-to-main-eba1

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
=======
import React from "react";
import "./index.css";

interface MainProps {
  className?: string;
  children?: React.ReactNode;
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b6b8

export default function Main({ className = '', children, ...props }: MainProps) {
  return (
    <div className={`main-component ${className}`} {...props}>
      {children}
    </div>
  );
}
>>>>>>> origin/main
