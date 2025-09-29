import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 px-6 border-t border-white/10 mt-16">
      <div className="max-w-7xl mx-auto text-sm text-gray-400">
        © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

