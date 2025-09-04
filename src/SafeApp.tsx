import React, { ReactElement } from 'react';

function SafeApp(): ReactElement {
  return (
    <div style={{ padding: 2 4, fontFamily: 'Inter, system-ui, sans-serif' }}>
      <h1 style={{ fontSize: 2 8, marginBottom: 1 2 }}>Zion App</h1>
      <p>Temporary safe shell to unblock type-check and build.</p>
    </div>
  );
}

export default SafeApp;

