
import * as React from "react";

export function Toaster() {_return (
    <SonnerToaster 
      position="top-right"
      toastOptions={{
        className: "bg-zion-blue-dark text-white border border-zion-blue-light shadow-lg shadow-zion-purple/10", _style: {
          background: '#0a1429', _color: '#fff', _border: '1px solid #1e3a6f'},
        duration: 4000,
        descriptionClassName: "text-zion-slate-light"}}
    />
  );
}
