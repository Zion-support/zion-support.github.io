import Head from 'next/head';
import Link from 'next/link';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Zion App</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Head>
      <div style={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '2rem',
        textAlign: 'center',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{ 
            fontSize: '6rem', 
            fontWeight: 'bold', 
            color: '#2563eb',
            margin: 0,
            lineHeight: 1
          }}>
            404
          </h1>
          <h2 style={{ 
            fontSize: '2rem', 
            color: '#1e293b',
            margin: '1rem 0',
            fontWeight: '500'
          }}>
            Page Not Found
          </h2>
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#64748b',
            maxWidth: '500px',
            margin: '0 auto 2rem'
          }}>
            Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>
        
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="/">
            <button style={{
              backgroundColor: '#2563eb',
              color: 'white',
              padding: '1rem 2rem',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'background-color 0.2s'
            }}>
              Go Home
            </button>
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            style={{
              backgroundColor: 'transparent',
              color: '#2563eb',
              padding: '1rem 2rem',
              border: '2px solid #2563eb',
              borderRadius: '8px',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            Go Back
          </button>
        </div>
        
        <div style={{ 
          marginTop: '3rem',
          padding: '2rem',
          backgroundColor: '#f8fafc',
          borderRadius: '12px',
          maxWidth: '600px'
        }}>
          <h3 style={{ color: '#1e293b', marginBottom: '1rem' }}>
            Need Help?
          </h3>
          <p style={{ color: '#64748b', marginBottom: '1rem' }}>
            If you believe this is an error, please contact our support team.
          </p>
          <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
            Error Code: 404 | Timestamp: {new Date().toISOString()}
          </p>
        </div>
      </div>
    </>
  )}