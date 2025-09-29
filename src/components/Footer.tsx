import React from "react";

export default function Footer(): React.JSX.Element {
  return (
    <footer className="py-8 text-center text-sm text-slate-500">
      © {new Date().getFullYear()} Zion Tech Group
    </footer>
  );
}

