import Link from 'next/link';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import SEOHead from './components/SEOHead';

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="Zion Tech Group - Advanced AI & IT Solutions"
        description="Leading provider of AI-powered solutions, cybersecurity, and digital transformation services. Transform your business with cutting-edge technology."
        keywords="AI solutions, cybersecurity, cloud computing, digital transformation, blockchain, IT services, machine learning, artificial intelligence"
        url="https://zion.app"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Zion Tech Group",
          "description": "Advanced AI & IT Solutions for the Future",
          "url": "https://zion.app",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://zion.app/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }}
      />
      <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom right, #111827, #581c87, #111827)' }}>
        <Navigation />
        {/* Hero Section */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          {/* Animated background elements */}
          <div style={{ position: 'absolute', inset: 0 }}>
            <div style={{ 
              position: 'absolute', 
              top: '25%', 
              left: '25%', 
              width: '288px', 
              height: '288px', 
              background: 'rgba(168, 85, 247, 0.2)', 
              borderRadius: '50%', 
              filter: 'blur(48px)', 
              animation: 'pulse 3s ease-in-out infinite' 
            }}></div>
            <div style={{ 
              position: 'absolute', 
              bottom: '25%', 
              right: '25%', 
              width: '384px', 
              height: '384px', 
              background: 'rgba(34, 211, 238, 0.2)', 
              borderRadius: '50%', 
              filter: 'blur(48px)', 
              animation: 'pulse 3s ease-in-out infinite 1s' 
            }}></div>
          </div>
          
          <div style={{ 
            position: 'relative', 
            maxWidth: '1280px', 
            margin: '0 auto', 
            padding: '96px 16px',
            textAlign: 'center'
          }}>
            <h1 style={{ 
              fontSize: '3.75rem', 
              fontWeight: 'bold', 
              color: 'white', 
              marginBottom: '24px',
              animation: 'fadeIn 0.6s ease-in-out'
            }}>
              Zion Tech Group
            </h1>
            <p style={{ 
              fontSize: '1.5rem', 
              color: '#d1d5db', 
              marginBottom: '32px',
              maxWidth: '768px',
              margin: '0 auto 32px',
              animation: 'slideUp 0.6s ease-in-out'
            }}>
              Advanced AI & IT Solutions for the Future
            </p>
            <p style={{ 
              fontSize: '1.125rem', 
              color: '#9ca3af', 
              marginBottom: '48px',
              maxWidth: '1024px',
              margin: '0 auto 48px',
              animation: 'slideUp 0.6s ease-in-out 0.2s'
            }}>
              Leading provider of AI-powered solutions, cybersecurity, and digital transformation services. 
              Transform your business with cutting-edge technology.
            </p>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '16px', 
              justifyContent: 'center',
              animation: 'slideUp 0.6s ease-in-out 0.3s'
            }}>
              <Link
                href="/about"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '12px 32px',
                  border: '1px solid transparent',
                  fontSize: '1rem',
                  fontWeight: '500',
                  borderRadius: '6px',
                  color: 'white',
                  background: '#9333ea',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '12px 32px',
                  border: '1px solid white',
                  fontSize: '1rem',
                  fontWeight: '500',
                  borderRadius: '6px',
                  color: 'white',
                  background: 'transparent',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>

        {/* Services Preview */}
        <div style={{ 
          padding: '96px 0', 
          background: 'rgba(255, 255, 255, 0.05)', 
          backdropFilter: 'blur(10px)' 
        }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px' }}>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <h2 style={{ 
                fontSize: '2.25rem', 
                fontWeight: 'bold', 
                color: 'white', 
                marginBottom: '16px' 
              }}>
                Our <span className="gradient-text">Services</span>
              </h2>
              <p style={{ fontSize: '1.25rem', color: '#d1d5db' }}>
                Comprehensive technology solutions for modern businesses
              </p>
            </div>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '32px' 
            }}>
              <div style={{ 
                background: 'rgba(255, 255, 255, 0.1)', 
                backdropFilter: 'blur(10px)', 
                borderRadius: '8px', 
                padding: '24px',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  background: 'rgba(168, 85, 247, 0.2)', 
                  borderRadius: '8px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginBottom: '16px' 
                }}>
                  <svg width="24" height="24" fill="none" stroke="#a855f7" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'white', marginBottom: '12px' }}>
                  AI Solutions
                </h3>
                <p style={{ color: '#d1d5db', marginBottom: '16px' }}>
                  Advanced artificial intelligence solutions to automate and optimize your business processes.
                </p>
                <div>
                  <Link href="/ai-services" style={{ 
                    color: '#22d3ee', 
                    fontSize: '0.875rem', 
                    fontWeight: '600',
                    textDecoration: 'none'
                  }}>
                    Learn More →
                  </Link>
                </div>
              </div>
              
              <div style={{ 
                background: 'rgba(255, 255, 255, 0.1)', 
                backdropFilter: 'blur(10px)', 
                borderRadius: '8px', 
                padding: '24px',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  background: 'rgba(34, 211, 238, 0.2)', 
                  borderRadius: '8px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginBottom: '16px' 
                }}>
                  <svg width="24" height="24" fill="none" stroke="#22d3ee" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'white', marginBottom: '12px' }}>
                  Cybersecurity
                </h3>
                <p style={{ color: '#d1d5db', marginBottom: '16px' }}>
                  Comprehensive security solutions to protect your digital assets and infrastructure.
                </p>
                <div>
                  <Link href="/cybersecurity" style={{ 
                    color: '#22d3ee', 
                    fontSize: '0.875rem', 
                    fontWeight: '600',
                    textDecoration: 'none'
                  }}>
                    Learn More →
                  </Link>
                </div>
              </div>
              
              <div style={{ 
                background: 'rgba(255, 255, 255, 0.1)', 
                backdropFilter: 'blur(10px)', 
                borderRadius: '8px', 
                padding: '24px',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  background: 'rgba(34, 197, 94, 0.2)', 
                  borderRadius: '8px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginBottom: '16px' 
                }}>
                  <svg width="24" height="24" fill="none" stroke="#22c55e" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'white', marginBottom: '12px' }}>
                  Cloud Computing
                </h3>
                <p style={{ color: '#d1d5db', marginBottom: '16px' }}>
                  Scalable cloud infrastructure and migration services for modern applications.
                </p>
                <div>
                  <Link href="/cloud-infrastructure" style={{ 
                    color: '#22d3ee', 
                    fontSize: '0.875rem', 
                    fontWeight: '600',
                    textDecoration: 'none'
                  }}>
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div style={{ 
          padding: '96px 0', 
          background: 'rgba(255, 255, 255, 0.05)', 
          backdropFilter: 'blur(10px)' 
        }}>
          <div style={{ 
            maxWidth: '1024px', 
            margin: '0 auto', 
            padding: '0 16px', 
            textAlign: 'center' 
          }}>
            <div className="glass-dark" style={{ 
              borderRadius: '16px', 
              padding: '48px' 
            }}>
              <h2 style={{ 
                fontSize: '2.25rem', 
                fontWeight: 'bold', 
                color: 'white', 
                marginBottom: '24px' 
              }}>
                Ready to Transform Your Business?
              </h2>
              <p style={{ 
                fontSize: '1.25rem', 
                color: '#d1d5db', 
                marginBottom: '32px' 
              }}>
                Join hundreds of companies that trust us with their digital transformation journey.
              </p>
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '16px', 
                justifyContent: 'center' 
              }}>
                <Link
                  href="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '12px 32px',
                    border: '1px solid transparent',
                    fontSize: '1rem',
                    fontWeight: '500',
                    borderRadius: '6px',
                    color: 'white',
                    background: '#9333ea',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Start Your Journey
                </Link>
                <Link
                  href="/ai-services"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '12px 32px',
                    border: '1px solid #22c55e',
                    fontSize: '1rem',
                    fontWeight: '500',
                    borderRadius: '6px',
                    color: '#22c55e',
                    background: 'transparent',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Explore AI Solutions
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}