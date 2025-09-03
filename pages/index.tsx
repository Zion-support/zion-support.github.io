<<<<<<< HEAD
import Link from 'next/link'
=======
import Link from 'next/link';
import SEOHead from '../components/SEOHead';
>>>>>>> c3407f17831351e4f4cfd0efb90f6fd048cb9536

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
<<<<<<< HEAD
    <main style={{
      padding: '40px 20px',
      maxWidth: '1200px',
      margin: '0 auto',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ 
          fontSize: '3.5rem', 
          fontWeight: '800', 
          marginBottom: '20px',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}>
          Zion Tech Group
        </h1>
        <p style={{ 
          fontSize: '1.3rem', 
          marginBottom: '30px',
          opacity: 0.9,
          maxWidth: '600px',
          margin: '0 auto 30px'
        }}>
          Leading provider of innovative Micro SaaS, AI Services, and IT Solutions
        </p>
        <div style={{ 
          display: 'flex', 
          gap: '20px', 
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '40px'
        }}>
          <Link href="/services" style={{
            background: 'rgba(255,255,255,0.2)',
            color: 'white',
            padding: '15px 30px',
            borderRadius: '25px',
            textDecoration: 'none',
            fontWeight: '600',
            border: '2px solid rgba(255,255,255,0.3)',
            transition: 'all 0.3s ease'
          }}>
            View All Services
          </Link>
          <Link href="/services-catalog" style={{
            background: 'rgba(255,255,255,0.9)',
            color: '#667eea',
            padding: '15px 30px',
            borderRadius: '25px',
            textDecoration: 'none',
            fontWeight: '600',
            transition: 'all 0.3s ease'
          }}>
            Detailed Catalog
          </Link>
          <Link href="/contact" style={{
            background: 'transparent',
            color: 'white',
            padding: '15px 30px',
            borderRadius: '25px',
            textDecoration: 'none',
            fontWeight: '600',
            border: '2px solid white',
            transition: 'all 0.3s ease'
          }}>
            Get Quote
          </Link>
        </div>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '30px',
        marginBottom: '60px'
      }}>
        <div style={{
          background: 'rgba(255,255,255,0.1)',
          padding: '30px',
          borderRadius: '15px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)'
        }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#ffd700' }}>
            🚀 Micro SaaS Solutions
          </h3>
          <p style={{ marginBottom: '20px', opacity: 0.9 }}>
            Innovative, ready-to-deploy applications including AI Email Responder, E-Commerce Return Manager, 
            Video Clip Generator, and more.
          </p>
          <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>
            <strong>Starting at:</strong> $79/month
          </div>
        </div>

        <div style={{
          background: 'rgba(255,255,255,0.1)',
          padding: '30px',
          borderRadius: '15px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)'
        }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#00ff88' }}>
            🤖 AI Services & Platforms
          </h3>
          <p style={{ marginBottom: '20px', opacity: 0.9 }}>
            Advanced AI solutions including Talent Matching, Computer Vision, Document Processing, 
            Fraud Detection, and Quantum Computing.
          </p>
          <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>
            <strong>Starting at:</strong> $500/month
          </div>
        </div>

        <div style={{
          background: 'rgba(255,255,255,0.1)',
          padding: '30px',
          borderRadius: '15px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)'
        }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#ff6b6b' }}>
            ☁️ IT & Cloud Services
          </h3>
          <p style={{ marginBottom: '20px', opacity: 0.9 }}>
            Comprehensive IT solutions including DevOps, Cybersecurity, Cloud Migration, 
            API Gateways, and Disaster Recovery.
          </p>
          <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>
            <strong>Starting at:</strong> $120/hour
          </div>
        </div>
      </div>

      <div style={{ 
        textAlign: 'center', 
        background: 'rgba(255,255,255,0.1)',
        padding: '30px',
        borderRadius: '15px',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.2)'
      }}>
        <h3 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>
          Ready to Transform Your Business?
        </h3>
        <p style={{ marginBottom: '25px', opacity: 0.9, fontSize: '1.1rem' }}>
          Contact us today for a free consultation and custom quote
        </p>
        <div style={{ 
          display: 'flex', 
          gap: '15px', 
          justifyContent: 'center',
          flexWrap: 'wrap',
          fontSize: '0.9rem'
        }}>
          <a href="tel:+13024640950" style={{ color: 'white', textDecoration: 'none' }}>
            📞 +1 302 464 0950
          </a>
          <a href="mailto:kleber@ziontechgroup.com" style={{ color: 'white', textDecoration: 'none' }}>
            ✉️ kleber@ziontechgroup.com
          </a>
        </div>
        <div style={{ marginTop: '15px', fontSize: '0.8rem', opacity: 0.7 }}>
          364 E Main St STE 1008, Middletown DE 19709
        </div>
      </div>
=======
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
>>>>>>> c3407f17831351e4f4cfd0efb90f6fd048cb9536
    </main>
    </>
  );
}
