import Link from 'next/link'

export default function Contact() {
  return (
    <main style={{
      padding: '40px 20px',
      maxWidth: '1000px',
      margin: '0 auto',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ 
          fontSize: '3rem', 
          fontWeight: '800', 
          marginBottom: '20px',
          color: '#2d3748'
        }}>
          Contact Zion Tech Group
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          color: '#4a5568',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          Ready to transform your business with our innovative solutions? Get in touch for a free consultation.
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '30px',
        marginBottom: '50px'
      }}>
        <div style={{
          background: 'white',
          padding: '40px',
          borderRadius: '15px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '20px' }}>📞</div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#2d3748' }}>
            Phone
          </h3>
          <a href="tel:+13024640950" style={{
            color: '#3182ce',
            textDecoration: 'none',
            fontSize: '1.2rem',
            fontWeight: '600'
          }}>
            +1 302 464 0950
          </a>
          <p style={{ marginTop: '10px', color: '#718096' }}>
            Available Monday - Friday, 9 AM - 6 PM EST
          </p>
        </div>

        <div style={{
          background: 'white',
          padding: '40px',
          borderRadius: '15px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '20px' }}>✉️</div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#2d3748' }}>
            Email
          </h3>
          <a href="mailto:kleber@ziontechgroup.com" style={{
            color: '#3182ce',
            textDecoration: 'none',
            fontSize: '1.1rem',
            fontWeight: '600'
          }}>
            kleber@ziontechgroup.com
          </a>
          <p style={{ marginTop: '10px', color: '#718096' }}>
            We respond within 24 hours
          </p>
        </div>

        <div style={{
          background: 'white',
          padding: '40px',
          borderRadius: '15px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '20px' }}>📍</div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#2d3748' }}>
            Address
          </h3>
          <p style={{ color: '#4a5568', lineHeight: '1.6' }}>
            364 E Main St STE 1008<br />
            Middletown, DE 19709<br />
            United States
          </p>
        </div>
      </div>

      <div style={{
        background: 'white',
        padding: '40px',
        borderRadius: '15px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        textAlign: 'center'
      }}>
        <h3 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#2d3748' }}>
          Why Choose Zion Tech Group?
        </h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '20px',
          marginTop: '30px'
        }}>
          <div>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🚀</div>
            <h4 style={{ marginBottom: '10px', color: '#2d3748' }}>Innovation</h4>
            <p style={{ color: '#718096', fontSize: '0.9rem' }}>Cutting-edge solutions with latest technologies</p>
          </div>
          <div>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>⚡</div>
            <h4 style={{ marginBottom: '10px', color: '#2d3748' }}>Speed</h4>
            <p style={{ color: '#718096', fontSize: '0.9rem' }}>Fast delivery with transparent timelines</p>
          </div>
          <div>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>💰</div>
            <h4 style={{ marginBottom: '10px', color: '#2d3748' }}>Value</h4>
            <p style={{ color: '#718096', fontSize: '0.9rem' }}>Competitive pricing with measurable ROI</p>
          </div>
          <div>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🛡️</div>
            <h4 style={{ marginBottom: '10px', color: '#2d3748' }}>Security</h4>
            <p style={{ color: '#718096', fontSize: '0.9rem' }}>Enterprise-grade security and compliance</p>
          </div>
        </div>
      </div>

      <div style={{ 
        textAlign: 'center', 
        marginTop: '40px',
        padding: '30px',
        background: 'rgba(255,255,255,0.8)',
        borderRadius: '15px'
      }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#2d3748' }}>
          Ready to Get Started?
        </h3>
        <p style={{ marginBottom: '20px', color: '#4a5568' }}>
          Schedule a free consultation to discuss your project requirements
        </p>
        <div style={{ 
          display: 'flex', 
          gap: '15px', 
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <Link href="/services" style={{
            background: '#3182ce',
            color: 'white',
            padding: '12px 25px',
            borderRadius: '25px',
            textDecoration: 'none',
            fontWeight: '600'
          }}>
            View Services
          </Link>
          <Link href="/services-catalog" style={{
            background: 'transparent',
            color: '#3182ce',
            padding: '12px 25px',
            borderRadius: '25px',
            textDecoration: 'none',
            fontWeight: '600',
            border: '2px solid #3182ce'
          }}>
            Detailed Catalog
          </Link>
        </div>
      </div>
    </main>
  );
}
