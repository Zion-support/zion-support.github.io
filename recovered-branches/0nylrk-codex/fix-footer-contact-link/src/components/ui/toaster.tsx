
import * as React from "react",
import { Toaster as SonnerToaster } from "sonner",export function Toaster() {
  return (
import * as React from "react";

export function Toaster() {_return (
    <SonnerToaster 
      position=&quot;top-right&quot;
      toastOptions={{
        className: &quot;bg-zion-blue-dark text-white border border-zion-blue-light shadow-lg shadow-zion-purple/10&quot;,
        style: {
          background: '#0a1429',
          color: '#fff',
          border: '1px solid #1e3a6f'},        duration: 4000,
        descriptionClassName: &quot;text-zion-slate-light&quot;}}
    />
  )
}
