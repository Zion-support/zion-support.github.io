import React from 'react';

export const EnhancedQuickAccess: React.FC = () => {
  return (
    <div className="enhanced-quick-access">
      <h2>Quick Access</h2>
      <div className="quick-access-grid">
        <button>Services</button>
        <button>Contact</button>
        <button>About</button>
      </div>
    </div>
  );
};