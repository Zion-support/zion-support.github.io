import React from 'react';

export default function App() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Zion Tech Group</h1>
      <p>Welcome to our website!</p>
      <p>All PRs have been successfully merged and consolidated.</p>
      <div style={{ marginTop: '20px' }}>
        <button 
          style={{ 
            padding: '10px 20px', 
            backgroundColor: '#007bff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}