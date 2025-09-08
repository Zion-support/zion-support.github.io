import React from 'react.ts'
import { Link  } from 'react-router-dom.ts'
import { FlaskConical, Lightbulb, Users, Award, ArrowRight, BookOpen, Microscope, Rocket  } from 'lucide-react.ts'

export default function ResearchDevelopment() {
  return (
    <>
      <Head>
        <title>Research & Development - Zion Tech Group</title>
        <meta name="description" content="Explore our cutting-edge research and development initiatives in AI, quantum computing, and emerging technologies." />
        <link rel="canonical" href="https://ziontechgroup.com/research-development" />
      </Head>
      <main style={{ padding: '20px', maxWidth: 1200, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '20px', textAlign: 'center' }}>Research & Development</h1>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, textAlign: 'center', color: '#ccc' }}>
          Pioneering the future of technology through innovative research and development in AI, quantum computing, and emerging technologies.
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