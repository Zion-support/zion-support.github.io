
import * as React from "react";
import { Toaster as SonnerToaster } from "sonner";

export function Toaster() {
  return (
    <SonnerToaster 
      position="top-right"
      toastOptions={{
        className: "bg-zion-blue-dark text-white border border-zion-blue-light shadow-lg shadow-zion-purple/10",
        style: {
          background: '#0a1429',
          color: '#fff',
<<<<<<< HEAD
=======
          border: '1px solid #1e3a6f'},
        duration: 4000,
        descriptionClassName: "text-zion-slate-light"}}
    />
  );
}
>>>>>>> 8f0785411043 (chore: auto-resolve merge conflicts (keep incoming))
