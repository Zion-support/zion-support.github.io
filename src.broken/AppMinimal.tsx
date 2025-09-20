import React from 'react',

const AppMinimal: React.FC = () => {
  return (<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0b1220', color: '#fff' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>Zion App</h1>
        <p style={{ color: '#9ca3af' }}>Build sanity check</p>
      </div>
    </div>
  ),
},

export default AppMinimal,
