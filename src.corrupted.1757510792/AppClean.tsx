import React from 'react';

export default function App(): React.ReactElement {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #0f172a 0%, #0b1220 100%)',
      color: 'white'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Zion Tech Group</h1>
        <p style={{ color: '#9ca3af' }}>Build baseline UI loaded successfully.</p>
      </div>
    </div>
  );
}

