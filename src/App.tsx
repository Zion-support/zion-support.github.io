import React from 'react';

const App: React.FC = () => {
  return (
    <>
      <a href="#main" style={{
        position: 'absolute',
        left: -9999,
        top: 'auto',
        width: 1,
        height: 1,
        overflow: 'hidden'
      }}
      onFocus={(e) => {
        const el = e.currentTarget;
        el.style.left = '8px';
        el.style.top = '8px';
        el.style.width = 'auto';
        el.style.height = 'auto';
        el.style.padding = '8px 12px';
        el.style.background = '#111827';
        el.style.color = '#fff';
        el.style.borderRadius = '6px';
        el.style.zIndex = '10000';
      }}
      onBlur={(e) => {
        const el = e.currentTarget;
        el.style.left = '-9999px';
        el.style.top = 'auto';
        el.style.width = '1px';
        el.style.height = '1px';
        el.style.padding = '0';
        el.style.background = 'transparent';
        el.style.color = 'inherit';
        el.style.borderRadius = '0';
        el.style.zIndex = 'auto';
      }}
      >Skip to main content</a>
      <main id="main" style={{ padding: 24, fontFamily: 'sans-serif' }}>
        <h1>Zion App</h1>
        <p>Temporary minimal App to pass type-check and build while restoring routes.</p>
      </main>
    </>
  );
};

export default App;