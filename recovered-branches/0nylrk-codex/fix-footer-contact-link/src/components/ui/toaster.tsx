
import * as React from "react";
import { Toaster as SonnerToaster } from "sonner";
export function Toaster() {
  return (
<<<<<<< HEAD
    <SonnerToaster 
      position;
=======
    <SonnerToaster
      position="top-right"
      toastOptions={{
        className: "bg-zion-blue-dark text-white border border-zion-blue-light shadow-lg shadow-zion-purple/10"
        style: {
          background: '#0a1429'
          color: '#fff'
          border: '1px solid #1e3a6f'}
        duration: 4000
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
        descriptionClassName: "text-zion-slate-light"}}
    />
  )
}