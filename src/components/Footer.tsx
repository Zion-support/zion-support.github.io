import React from 'react';
export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-4">Zion Tech Group</h3>
          <p className="text-gray-400 mb-4">
            Leading AI, Quantum Computing & Cybersecurity Solutions
          </p>
          <div className="text-sm text-gray-500">
            © 2025 Zion Tech Group. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
