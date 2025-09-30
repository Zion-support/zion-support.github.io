import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ padding: '24px 16px', background: '#0b1020', color: '#cbd5e1' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', fontSize: 12 }}>
        © {new Date().getFullYear()} Zion Tech Group — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

