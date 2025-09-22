import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function HomePage() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div>
      <Head>
        <title>Zion Tech Group — Advanced IT & AI Services</title>
        <meta name="description" content="Zion Tech Group delivers advanced IT solutions and AI services for modern businesses." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ 
        padding: '2rem', 
        fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
        maxWidth: '1200px',
        margin: '0 auto',
        lineHeight: '1.6'
      }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 'bold', 
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Zion Tech Group
        </h1>
        
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#666' }}>
          Welcome to Zion Tech Group. We deliver cutting-edge IT solutions and AI services 
          that transform businesses and drive innovation.
        </p>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          <div style={{
            padding: '1.5rem',
            border: '1px solid #e1e5e9',
            borderRadius: '8px',
            backgroundColor: '#f8f9fa'
          }}>
            <h3 style={{ marginBottom: '0.5rem', color: '#333' }}>About Us</h3>
            <p style={{ color: '#666', marginBottom: '1rem' }}>
              Learn about our mission and expertise in delivering world-class technology solutions.
            </p>
            <Link href="/about" style={{ 
              color: '#667eea', 
              textDecoration: 'none',
              fontWeight: '500'
            }}>
              Learn More →
            </Link>
          </div>

          <div style={{
            padding: '1.5rem',
            border: '1px solid #e1e5e9',
            borderRadius: '8px',
            backgroundColor: '#f8f9fa'
          }}>
            <h3 style={{ marginBottom: '0.5rem', color: '#333' }}>Our Services</h3>
            <p style={{ color: '#666', marginBottom: '1rem' }}>
              Explore our comprehensive range of IT and AI services designed for modern businesses.
            </p>
            <Link href="/services" style={{ 
              color: '#667eea', 
              textDecoration: 'none',
              fontWeight: '500'
            }}>
              View Services →
            </Link>
          </div>

          <div style={{
            padding: '1.5rem',
            border: '1px solid #e1e5e9',
            borderRadius: '8px',
            backgroundColor: '#f8f9fa'
          }}>
            <h3 style={{ marginBottom: '0.5rem', color: '#333' }}>Get in Touch</h3>
            <p style={{ color: '#666', marginBottom: '1rem' }}>
              Ready to transform your business? Contact us to discuss your project needs.
            </p>
            <Link href="/contact" style={{ 
              color: '#667eea', 
              textDecoration: 'none',
              fontWeight: '500'
            }}>
              Contact Us →
            </Link>
          </div>
        </div>

        {isClient && (
          <div style={{
            padding: '1rem',
            backgroundColor: '#e8f4fd',
            border: '1px solid #b8daff',
            borderRadius: '8px',
            marginTop: '2rem'
          }}>
            <p style={{ margin: 0, color: '#004085' }}>
              🚀 <strong>Enhanced Experience:</strong> This page now includes improved styling, 
              responsive design, and client-side hydration for better performance.
            </p>
          </div>
        )}
      </main>
    </div>
  )
}