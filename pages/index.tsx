import Link from 'next/link';

export default function Home() {
  return (
    <main style={{
      minHeight: 'calc(100vh - 200px)',
      background: 'linear-gradient(135deg, #0b1220 0%, #1e293b 100%)',
      color: 'white',
      padding: '60px 20px'
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        textAlign: 'center'
      }}>
        {/* Hero Section */}
        <div style={{ marginBottom: 60 }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: 800,
            marginBottom: 24,
            background: 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1.2
          }}>
            Zion Tech Group
          </h1>
          <p style={{
            fontSize: '1.5rem',
            opacity: 0.9,
            marginBottom: 32,
            maxWidth: 800,
            margin: '0 auto 32px auto',
            lineHeight: 1.6
          }}>
            Leading provider of AI services, Micro SaaS solutions, and IT consulting. 
            Transforming businesses with innovative technology solutions.
          </p>
          <div style={{
            display: 'flex',
            gap: 16,
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: 48
          }}>
            <Link href="/services" style={{
              background: '#22d3ee',
              color: '#0b1220',
              padding: '12px 24px',
              borderRadius: 8,
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1.1rem',
              transition: 'all 0.2s'
            }}>
              Explore Services
            </Link>
            <Link href="/contact" style={{
              background: 'transparent',
              color: '#22d3ee',
              padding: '12px 24px',
              borderRadius: 8,
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1.1rem',
              border: '2px solid #22d3ee',
              transition: 'all 0.2s'
            }}>
              Get Started
            </Link>
          </div>
        </div>

        {/* Services Overview */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 32,
          marginBottom: 60
        }}>
          <div style={{
            background: 'rgba(255,255,255,0.05)',
            padding: 32,
            borderRadius: 16,
            border: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              marginBottom: 16,
              color: '#22d3ee'
            }}>
              AI Services
            </h3>
            <p style={{
              opacity: 0.8,
              lineHeight: 1.6,
              marginBottom: 20
            }}>
              Advanced AI solutions including chatbots, computer vision, 
              predictive analytics, and business intelligence.
            </p>
            <Link href="/services-catalog" style={{
              color: '#22d3ee',
              textDecoration: 'none',
              fontWeight: 600
            }}>
              Learn More →
            </Link>
          </div>

          <div style={{
            background: 'rgba(255,255,255,0.05)',
            padding: 32,
            borderRadius: 16,
            border: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              marginBottom: 16,
              color: '#22d3ee'
            }}>
              Micro SaaS
            </h3>
            <p style={{
              opacity: 0.8,
              lineHeight: 1.6,
              marginBottom: 20
            }}>
              Ready-to-deploy SaaS solutions including email automation, 
              survey platforms, and content creation tools.
            </p>
            <Link href="/services-catalog" style={{
              color: '#22d3ee',
              textDecoration: 'none',
              fontWeight: 600
            }}>
              Learn More →
            </Link>
          </div>

          <div style={{
            background: 'rgba(255,255,255,0.05)',
            padding: 32,
            borderRadius: 16,
            border: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              marginBottom: 16,
              color: '#22d3ee'
            }}>
              IT Services
            </h3>
            <p style={{
              opacity: 0.8,
              lineHeight: 1.6,
              marginBottom: 20
            }}>
              Cloud migration, DevOps, cybersecurity, and infrastructure 
              optimization for modern businesses.
            </p>
            <Link href="/services-catalog" style={{
              color: '#22d3ee',
              textDecoration: 'none',
              fontWeight: 600
            }}>
              Learn More →
            </Link>
          </div>
        </div>

        {/* Contact CTA */}
        <div style={{
          background: 'rgba(34, 211, 238, 0.1)',
          padding: 40,
          borderRadius: 16,
          border: '1px solid rgba(34, 211, 238, 0.2)'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 700,
            marginBottom: 16
          }}>
            Ready to Transform Your Business?
          </h2>
          <p style={{
            opacity: 0.9,
            marginBottom: 24,
            fontSize: '1.1rem'
          }}>
            Contact us today for a free consultation and discover how our 
            innovative solutions can drive your success.
          </p>
          <div style={{
            display: 'flex',
            gap: 16,
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a href="tel:+13024640950" style={{
              background: '#22d3ee',
              color: '#0b1220',
              padding: '12px 24px',
              borderRadius: 8,
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1.1rem'
            }}>
              📞 Call +1 302 464 0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" style={{
              background: 'transparent',
              color: '#22d3ee',
              padding: '12px 24px',
              borderRadius: 8,
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1.1rem',
              border: '2px solid #22d3ee'
            }}>
              ✉️ Email Us
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
