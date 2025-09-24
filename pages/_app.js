// Simple App component without problematic dependencies
export default function App({ Component, pageProps }) {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ padding: '20px', backgroundColor: '#f0f0f0', borderBottom: '1px solid #ccc' }}>
        <h1 style={{ margin: 0, color: '#333' }}>Zion Tech Group</h1>
        <nav style={{ marginTop: '10px' }}>
          <a href="/" style={{ marginRight: '20px', color: '#0066cc', textDecoration: 'none' }}>Home</a>
          <a href="/services" style={{ marginRight: '20px', color: '#0066cc', textDecoration: 'none' }}>Services</a>
          <a href="/contact" style={{ color: '#0066cc', textDecoration: 'none' }}>Contact</a>
        </nav>
      </header>
      <main style={{ padding: '20px' }}>
        <Component {...pageProps} />
      </main>
      <footer style={{ padding: '20px', backgroundColor: '#f0f0f0', borderTop: '1px solid #ccc', marginTop: 'auto' }}>
        <p style={{ margin: 0, textAlign: 'center', color: '#666' }}>&copy; 2025 Zion Tech Group. All rights reserved.</p>
      </footer>
    </div>
  )
}