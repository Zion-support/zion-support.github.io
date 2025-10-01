import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={{ padding: '12px 16px', background: '#0f172a', color: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontWeight: 700 }}>Zion Tech Group</div>
        <nav aria-label="primary" style={{ fontSize: 14, opacity: 0.9 }}>AI • Cloud • Security</nav>
      </div>
    </header>
  );
};

export default Header;

