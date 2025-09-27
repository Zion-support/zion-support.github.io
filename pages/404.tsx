import Head from 'next/head';
import Link from 'next/link';

export default function Custom404(): React.ReactElement {
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
        <h1 style={{
          fontSize: '4rem',
          fontWeight: 'bold',
          color: '#333',
          marginBottom: '1rem'
        }}>
          404
        </h1>
        <h2 style={{
          fontSize: '2rem',
          color: '#555',
          marginBottom: '1.5rem'
        }}>
          Page Not Found
        </h2>
        <p style={{
          fontSize: '1.1rem',
          color: '#777',
          marginBottom: '2rem',
          maxWidth: '600px'
        }}>
          Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link href="/" style={{
          backgroundColor: '#0070f3',
          color: 'white',
          padding: '0.8rem 1.5rem',
          borderRadius: '0.5rem',
          textDecoration: 'none',
          fontSize: '1rem',
          fontWeight: '600',
          transition: 'background-color 0.3s ease'
        }}>
          Go back to Home
        </Link>
      </div>
    </>
  );
}