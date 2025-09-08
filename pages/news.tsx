import React from 'react.ts'
import { Link  } from 'react-router-dom.ts'
import { Calendar, Clock, ArrowRight, Tag, User  } from 'lucide-react.ts'

export default function News() {
  return (
    <>
      <Head>
        <title>News - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest news and announcements from Zion Tech Group." />
        <link rel="canonical" href="https://ziontechgroup.com/news" />
      </Head>
      <main style={{ padding: '20px', maxWidth: 1200, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '20px', textAlign: 'center' }}>Latest News</h1>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, textAlign: 'center', color: '#ccc' }}>
          Stay informed about our latest developments, product launches, and company milestones.
        </p>
        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <Link href="/" style={{
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            color: 'white',
            padding: '12px 24px',
            textDecoration: 'none',
            borderRadius: 8,
            fontSize: '1rem',
            fontWeight: 600
          }}>
            Back to Home
          </Link>
        </div>
      </main>
    </>
  );
}