import Link from 'next/link';
import SEOHead from '../components/SEOHead';

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": "Leading technology solutions provider specializing in AI development, cloud architecture, and digital transformation for modern businesses.",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/favicon.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://ziontechgroup.com"
    ],
    "service": [
      {
        "@type": "Service",
        "name": "AI Development",
        "description": "Custom AI solutions, machine learning models, and intelligent automation systems."
      },
      {
        "@type": "Service", 
        "name": "Cloud Services",
        "description": "AWS, Azure, and GCP architecture, migration, and optimization services."
      },
      {
        "@type": "Service",
        "name": "Micro SaaS",
        "description": "Scalable software-as-a-service solutions and digital product development."
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Zion Tech Group - Leading Technology Solutions Provider"
        description="Leading technology solutions provider specializing in AI development, cloud architecture, and digital transformation for modern businesses."
        structuredData={structuredData}
      />
    <main>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #0b1220 0%, #1e293b 100%)',
        color: 'white',
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h1 style={{ 
            fontSize: '3.5rem', 
            fontWeight: 800, 
            marginBottom: '1.5rem',
            background: 'linear-gradient(45deg, #22d3ee, #3b82f6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Zion Tech Group
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            marginBottom: '2rem', 
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto 2rem auto'
          }}>
            Leading technology solutions provider specializing in AI development, cloud architecture, 
            and digital transformation for modern businesses.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/services" style={{
              background: '#22d3ee',
              color: '#0b1220',
              padding: '12px 24px',
              borderRadius: '8px',
              fontWeight: 600,
              textDecoration: 'none',
              display: 'inline-block'
            }}>
              Explore Services
            </Link>
            <Link href="/contact" style={{
              background: 'transparent',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '8px',
              fontWeight: 600,
              textDecoration: 'none',
              display: 'inline-block',
              border: '2px solid #22d3ee'
            }}>
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section style={{ padding: '80px 20px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 700, 
            textAlign: 'center', 
            marginBottom: '3rem',
            color: '#0b1220'
          }}>
            Our Core Services
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem' 
          }}>
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e2e8f0'
            }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: '#0b1220' }}>
                AI Development
              </h3>
              <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>
                Custom AI solutions, machine learning models, and intelligent automation systems.
              </p>
              <Link href="/services" style={{ 
                color: '#22d3ee', 
                fontWeight: 600, 
                textDecoration: 'none' 
              }}>
                Learn More →
              </Link>
            </div>
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e2e8f0'
            }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: '#0b1220' }}>
                Cloud Services
              </h3>
              <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>
                AWS, Azure, and GCP architecture, migration, and optimization services.
              </p>
              <Link href="/services" style={{ 
                color: '#22d3ee', 
                fontWeight: 600, 
                textDecoration: 'none' 
              }}>
                Learn More →
              </Link>
            </div>
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e2e8f0'
            }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: '#0b1220' }}>
                Micro SaaS
              </h3>
              <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>
                Scalable software-as-a-service solutions and digital product development.
              </p>
              <Link href="/services" style={{ 
                color: '#22d3ee', 
                fontWeight: 600, 
                textDecoration: 'none' 
              }}>
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, #1e293b 0%, #0b1220 100%)',
        color: 'white',
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>
            Ready to Transform Your Business?
          </h2>
          <p style={{ fontSize: '1.125rem', marginBottom: '2rem', opacity: 0.9 }}>
            Let&apos;s discuss how our technology solutions can drive your digital transformation.
          </p>
          <Link href="/contact" style={{
            background: '#22d3ee',
            color: '#0b1220',
            padding: '16px 32px',
            borderRadius: '8px',
            fontWeight: 600,
            textDecoration: 'none',
            display: 'inline-block',
            fontSize: '1.125rem'
          }}>
            Start Your Project
          </Link>
        </div>
      </section>
    </main>
    </>
  );
}
