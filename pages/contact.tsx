import Link from 'next/link';

export default function Contact() {
  return (
    <main style={{
      minHeight: 'calc(100vh - 200px)',
      background: 'linear-gradient(135deg, #0b1220 0%, #1e293b 100%)',
      color: 'white',
      padding: '60px 20px'
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: 60
        }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 800,
            marginBottom: 24,
            background: 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Contact Us
          </h1>
          <p style={{
            fontSize: '1.25rem',
            opacity: 0.9,
            maxWidth: 600,
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Ready to transform your business with innovative technology solutions? 
            Get in touch with our team of experts.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: 40,
          marginBottom: 60
        }}>
          {/* Contact Information */}
          <div style={{
            background: 'rgba(255,255,255,0.05)',
            padding: 40,
            borderRadius: 16,
            border: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)'
          }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              marginBottom: 24,
              color: '#22d3ee'
            }}>
              Get In Touch
            </h2>
            
            <div style={{ display: 'grid', gap: 20 }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                padding: 16,
                background: 'rgba(255,255,255,0.05)',
                borderRadius: 12
              }}>
                <div style={{
                  width: 48,
                  height: 48,
                  background: '#22d3ee',
                  borderRadius: 12,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem'
                }}>
                  📞
                </div>
                <div>
                  <h3 style={{ fontWeight: 600, marginBottom: 4 }}>Phone</h3>
                  <a href="tel:+13024640950" style={{
                    color: '#22d3ee',
                    textDecoration: 'none',
                    fontSize: '1.1rem'
                  }}>
                    +1 302 464 0950
                  </a>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                padding: 16,
                background: 'rgba(255,255,255,0.05)',
                borderRadius: 12
              }}>
                <div style={{
                  width: 48,
                  height: 48,
                  background: '#22d3ee',
                  borderRadius: 12,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem'
                }}>
                  ✉️
                </div>
                <div>
                  <h3 style={{ fontWeight: 600, marginBottom: 4 }}>Email</h3>
                  <a href="mailto:kleber@ziontechgroup.com" style={{
                    color: '#22d3ee',
                    textDecoration: 'none',
                    fontSize: '1.1rem'
                  }}>
                    kleber@ziontechgroup.com
                  </a>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 16,
                padding: 16,
                background: 'rgba(255,255,255,0.05)',
                borderRadius: 12
              }}>
                <div style={{
                  width: 48,
                  height: 48,
                  background: '#22d3ee',
                  borderRadius: 12,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem'
                }}>
                  📍
                </div>
                <div>
                  <h3 style={{ fontWeight: 600, marginBottom: 4 }}>Address</h3>
                  <p style={{ opacity: 0.9, lineHeight: 1.5 }}>
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Services Quick Links */}
          <div style={{
            background: 'rgba(255,255,255,0.05)',
            padding: 40,
            borderRadius: 16,
            border: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)'
          }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              marginBottom: 24,
              color: '#22d3ee'
            }}>
              Our Services
            </h2>
            
            <div style={{ display: 'grid', gap: 16 }}>
              <Link href="/services-catalog" style={{
                display: 'block',
                padding: 16,
                background: 'rgba(255,255,255,0.05)',
                borderRadius: 12,
                textDecoration: 'none',
                color: 'white',
                transition: 'all 0.2s',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <div>
                  <h3 style={{ fontWeight: 600, marginBottom: 8, color: '#22d3ee' }}>
                    AI Services & Platforms
                  </h3>
                  <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>
                    Advanced AI solutions including chatbots, computer vision, and business intelligence
                  </p>
                </div>
              </Link>

              <Link href="/services-catalog" style={{
                display: 'block',
                padding: 16,
                background: 'rgba(255,255,255,0.05)',
                borderRadius: 12,
                textDecoration: 'none',
                color: 'white',
                transition: 'all 0.2s',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <div>
                  <h3 style={{ fontWeight: 600, marginBottom: 8, color: '#22d3ee' }}>
                    Micro SaaS Products
                  </h3>
                  <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>
                    Ready-to-deploy SaaS solutions for email automation, surveys, and content creation
                  </p>
                </div>
              </Link>

              <Link href="/services-catalog" style={{
                display: 'block',
                padding: 16,
                background: 'rgba(255,255,255,0.05)',
                borderRadius: 12,
                textDecoration: 'none',
                color: 'white',
                transition: 'all 0.2s',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <div>
                  <h3 style={{ fontWeight: 600, marginBottom: 8, color: '#22d3ee' }}>
                    IT & Cloud Services
                  </h3>
                  <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>
                    Cloud migration, DevOps, cybersecurity, and infrastructure optimization
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div style={{
          background: 'rgba(34, 211, 238, 0.1)',
          padding: 40,
          borderRadius: 16,
          border: '1px solid rgba(34, 211, 238, 0.2)',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 700,
            marginBottom: 16
          }}>
            Ready to Get Started?
          </h2>
          <p style={{
            opacity: 0.9,
            marginBottom: 24,
            fontSize: '1.1rem',
            maxWidth: 600,
            margin: '0 auto 24px auto'
          }}>
            Schedule a free consultation to discuss your project requirements 
            and discover how we can help transform your business.
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
              📞 Call Now
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
              ✉️ Send Email
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
