import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ padding: '1rem', textAlign: 'center' }}>
      <small>© {new Date().getFullYear()} Zion Tech Group</small>
    </footer>
  );
};

export default Footer;

