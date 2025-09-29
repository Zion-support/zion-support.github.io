import React from "react";

export default function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-zion-slate-light">
      <div className="container mx-auto px-6">
        © {new Date().getFullYear()} Zion Tech Group
      </div>
    </footer>
  );
}

