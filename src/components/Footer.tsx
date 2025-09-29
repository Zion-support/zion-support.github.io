import React from "react";

export default function Footer(): React.JSX.Element {
  return (
    <footer className="w-full py-6 px-6 bg-gray-900 text-white mt-12">
      <div className="container mx-auto">© {new Date().getFullYear()} Zion Tech Group</div>
    </footer>
  );
}

