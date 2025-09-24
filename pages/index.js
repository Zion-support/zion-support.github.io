// Simple Home page
export default function Home() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ color: '#333', marginBottom: '20px' }}>Welcome to Zion Tech Group</h1>
      <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#666', marginBottom: '20px' }}>
        Leading provider of innovative technology solutions including AI, cloud computing, 
        cybersecurity, and digital transformation services.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '40px' }}>
        <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', border: '1px solid #ddd' }}>
          <h3 style={{ color: '#333', marginBottom: '10px' }}>AI Solutions</h3>
          <p style={{ color: '#666' }}>Cutting-edge artificial intelligence and machine learning services.</p>
        </div>
        <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', border: '1px solid #ddd' }}>
          <h3 style={{ color: '#333', marginBottom: '10px' }}>Cloud Services</h3>
          <p style={{ color: '#666' }}>Scalable cloud infrastructure and migration solutions.</p>
        </div>
        <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', border: '1px solid #ddd' }}>
          <h3 style={{ color: '#333', marginBottom: '10px' }}>Cybersecurity</h3>
          <p style={{ color: '#666' }}>Comprehensive security solutions to protect your business.</p>
        </div>
      </div>
    </div>
  )
}