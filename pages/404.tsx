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
        backgroundColor: '#f8fafc'
      }}>
        <h1 style={{ fontSize: '6rem', fontWeight: 'bold', color: '#3b82f6', margin: 0 }}>
          404
        </h1>
        <h2 style={{ fontSize: '2rem', fontWeight: 'semibold', color: '#374151', margin: '1rem 0' }}>
          Page Not Found
        </h2>
        <p style={{ color: '#6b7280', marginBottom: '2rem', textAlign: 'center' }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/" style={{
          backgroundColor: '#3b82f6',
          color: 'white',
          padding: '0.75rem 1.5rem',
          borderRadius: '0.5rem',
          textDecoration: 'none',
          fontWeight: 'semibold'
        }}>
          Go Back Home
        </Link>
      </div>
    </>
  );
}