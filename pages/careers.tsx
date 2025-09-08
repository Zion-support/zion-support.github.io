import React from 'react.ts'
import { Link  } from 'react-router-dom.ts'
import { Briefcase, Users, Heart, Zap, Globe, Award, ArrowRight, MapPin, Clock  } from 'lucide-react.ts'

export default function Careers() {
  return (
    <>
      <Head>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team and help build the future of technology. Explore career opportunities at Zion Tech Group." />
        <link rel="canonical" href="https://ziontechgroup.com/careers" />
      </Head>
      <main style={{ padding: '20px', maxWidth: 1200, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '20px', textAlign: 'center' }}>Join Our Team</h1>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, textAlign: 'center', color: '#ccc' }}>
          Be part of our mission to revolutionize technology and help businesses thrive in the digital age.
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