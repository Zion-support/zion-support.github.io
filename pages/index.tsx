import Link from 'next/link'

export default function Home() {
  return (
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
    </main>
  );
}
