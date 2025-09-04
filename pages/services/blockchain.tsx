import Link from 'next/link';
import Head from 'next/head';

export default function Blockchain() {
  const contact = { 
    phone: '+1 302 464 0950', 
    email: 'kleber@ziontechgroup.com', 
    address: '364 E Main St STE 1008 Middletown DE 19709', 
    site: 'https://ziontechgroup.com' 
  };

  return (
    <>
      <Head>
        <title>Blockchain Services - Zion Tech Group</title>
        <meta name="description" content="Secure blockchain solutions and decentralized applications for modern businesses." />
        <link rel="canonical" href={`${contact.site}/services/blockchain`} />
      </Head>

      <div style={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #0b1220 0%, #1a1f3a 100%)', 
        color: 'white' 
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <h1 style={{ 
              fontSize: '3rem', 
              fontWeight: 800, 
              marginBottom: 20,
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Blockchain Services
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: 600, margin: '0 auto' }}>
              Secure Decentralized Solutions for the Future
            </p>
          </div>

          <div style={{ 
            background: 'rgba(255, 255, 255, 0.05)', 
            borderRadius: 12, 
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: 40,
            marginBottom: 40
          }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 20, textAlign: 'center' }}>
              Ready to Build on the Blockchain?
            </h2>
            <p style={{ color: '#94a3b8', marginBottom: 30, textAlign: 'center', maxWidth: 600, margin: '0 auto 30px' }}>
              Let our blockchain experts help you create secure decentralized solutions.
            </p>
            <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button style={{
                background: 'white',
                color: '#3b82f6',
                padding: '12px 24px',
                borderRadius: 8,
                border: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}>
                Get Started
              </button>
              <button style={{
                background: 'transparent',
                color: 'white',
                padding: '12px 24px',
                borderRadius: 8,
                border: '2px solid white',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}>
                Learn More
              </button>
            </div>
          </div>
        </div>

        <footer style={{ 
          background: '#1f2937', 
          color: 'white', 
          padding: '48px 0',
          marginTop: 60
        }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: 32,
              marginBottom: 32
            }}>
              <div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: 16 }}>Zion Tech Group</h3>
                <p style={{ color: '#9ca3af' }}>
                  Leading provider of innovative technology solutions and services.
                </p>
              </div>
              <div>
                <h4 style={{ fontWeight: 600, marginBottom: 16 }}>Services</h4>
                <ul style={{ listStyle: 'none', padding: 0, color: '#9ca3af' }}>
                  <li style={{ marginBottom: 8 }}><Link href="/services" style={{ color: '#9ca3af', textDecoration: 'none' }}>All Services</Link></li>
                  <li style={{ marginBottom: 8 }}><Link href="/ai-services" style={{ color: '#9ca3af', textDecoration: 'none' }}>AI Services</Link></li>
                  <li style={{ marginBottom: 8 }}><Link href="/micro-saas" style={{ color: '#9ca3af', textDecoration: 'none' }}>Micro SaaS</Link></li>
                  <li style={{ marginBottom: 8 }}><Link href="/it-services" style={{ color: '#9ca3af', textDecoration: 'none' }}>IT Services</Link></li>
                </ul>
              </div>
              <div>
                <h4 style={{ fontWeight: 600, marginBottom: 16 }}>Company</h4>
                <ul style={{ listStyle: 'none', padding: 0, color: '#9ca3af' }}>
                  <li style={{ marginBottom: 8 }}><Link href="/about" style={{ color: '#9ca3af', textDecoration: 'none' }}>About Us</Link></li>
                  <li style={{ marginBottom: 8 }}><Link href="/team" style={{ color: '#9ca3af', textDecoration: 'none' }}>Team</Link></li>
                  <li style={{ marginBottom: 8 }}><Link href="/careers" style={{ color: '#9ca3af', textDecoration: 'none' }}>Careers</Link></li>
                  <li style={{ marginBottom: 8 }}><Link href="/contact" style={{ color: '#9ca3af', textDecoration: 'none' }}>Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 style={{ fontWeight: 600, marginBottom: 16 }}>Resources</h4>
                <ul style={{ listStyle: 'none', padding: 0, color: '#9ca3af' }}>
                  <li style={{ marginBottom: 8 }}><Link href="/blog" style={{ color: '#9ca3af', textDecoration: 'none' }}>Blog</Link></li>
                  <li style={{ marginBottom: 8 }}><Link href="/docs" style={{ color: '#9ca3af', textDecoration: 'none' }}>Documentation</Link></li>
                  <li style={{ marginBottom: 8 }}><Link href="/faq" style={{ color: '#9ca3af', textDecoration: 'none' }}>FAQ</Link></li>
                  <li style={{ marginBottom: 8 }}><Link href="/help" style={{ color: '#9ca3af', textDecoration: 'none' }}>Help Center</Link></li>
                </ul>
              </div>
            </div>
            <div style={{ 
              borderTop: '1px solid #374151', 
              paddingTop: 32, 
              textAlign: 'center', 
              color: '#9ca3af' 
            }}>
              <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}