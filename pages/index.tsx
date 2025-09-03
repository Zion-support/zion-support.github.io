import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ background: '#f8fafc', minHeight: 'calc(100vh - 120px)' }}>
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #0b1220 0%, #1e293b 100%)',
        color: 'white',
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h1 style={{ fontSize: 48, fontWeight: 800, marginBottom: 24, lineHeight: 1.2 }}>
            Transform Your Business with 
            <span style={{ color: '#22d3ee' }}> Advanced Technology</span>
          </h1>
          <p style={{ fontSize: 20, opacity: 0.9, marginBottom: 32, lineHeight: 1.6 }}>
            We deliver cutting-edge AI solutions, micro SaaS products, and comprehensive IT services 
            to help your business scale and thrive in the digital age.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{
              background: '#22d3ee',
              color: '#0b1220',
              padding: '14px 28px',
              borderRadius: 8,
              fontWeight: 600,
              textDecoration: 'none',
              fontSize: 16
            }}>
              Get Started Today
            </Link>
            <Link href="/services" style={{
              background: 'transparent',
              color: 'white',
              padding: '14px 28px',
              borderRadius: 8,
              fontWeight: 600,
              textDecoration: 'none',
              fontSize: 16,
              border: '2px solid white'
            }}>
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section style={{ padding: '80px 20px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <h2 style={{ fontSize: 36, fontWeight: 700, marginBottom: 16, color: '#0b1220' }}>
            Our Core Services
          </h2>
          <p style={{ fontSize: 18, color: '#64748b', maxWidth: 600, margin: '0 auto' }}>
            Comprehensive technology solutions designed to accelerate your business growth
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 32 }}>
          <div style={{
            background: 'white',
            borderRadius: 16,
            padding: 32,
            border: '1px solid rgba(0,0,0,0.08)',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
            textAlign: 'center'
          }}>
            <div style={{ 
              width: 64, 
              height: 64, 
              background: 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)',
              borderRadius: 16,
              margin: '0 auto 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 24
            }}>🤖</div>
            <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#0b1220' }}>
              AI Services
            </h3>
            <p style={{ color: '#64748b', marginBottom: 24, lineHeight: 1.6 }}>
              Leverage artificial intelligence to automate processes, gain insights, and enhance customer experiences.
            </p>
            <Link href="/ai-services" style={{
              color: '#22d3ee',
              fontWeight: 600,
              textDecoration: 'none'
            }}>
              Learn More →
            </Link>
          </div>

          <div style={{
            background: 'white',
            borderRadius: 16,
            padding: 32,
            border: '1px solid rgba(0,0,0,0.08)',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
            textAlign: 'center'
          }}>
            <div style={{ 
              width: 64, 
              height: 64, 
              background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
              borderRadius: 16,
              margin: '0 auto 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 24
            }}>⚡</div>
            <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#0b1220' }}>
              Micro SaaS
            </h3>
            <p style={{ color: '#64748b', marginBottom: 24, lineHeight: 1.6 }}>
              Specialized software solutions that solve specific business problems with minimal overhead.
            </p>
            <Link href="/micro-saas" style={{
              color: '#8b5cf6',
              fontWeight: 600,
              textDecoration: 'none'
            }}>
              Learn More →
            </Link>
          </div>

          <div style={{
            background: 'white',
            borderRadius: 16,
            padding: 32,
            border: '1px solid rgba(0,0,0,0.08)',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
            textAlign: 'center'
          }}>
            <div style={{ 
              width: 64, 
              height: 64, 
              background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
              borderRadius: 16,
              margin: '0 auto 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 24
            }}>🛠️</div>
            <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#0b1220' }}>
              IT Services
            </h3>
            <p style={{ color: '#64748b', marginBottom: 24, lineHeight: 1.6 }}>
              Complete IT infrastructure management, cloud solutions, and cybersecurity services.
            </p>
            <Link href="/it-services" style={{
              color: '#059669',
              fontWeight: 600,
              textDecoration: 'none'
            }}>
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ 
        background: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
        padding: '80px 20px'
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 36, fontWeight: 700, marginBottom: 16, color: '#0b1220' }}>
            Why Choose Zion Tech Group?
          </h2>
          <p style={{ fontSize: 18, color: '#64748b', marginBottom: 48, maxWidth: 600, margin: '0 auto 48px' }}>
            We combine technical expertise with business acumen to deliver solutions that drive real results.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 32 }}>
            <div>
              <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12, color: '#0b1220' }}>Expert Team</h3>
              <p style={{ color: '#64748b', lineHeight: 1.6 }}>
                Certified professionals with deep expertise in AI, cloud technologies, and software development.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12, color: '#0b1220' }}>Proven Results</h3>
              <p style={{ color: '#64748b', lineHeight: 1.6 }}>
                Successfully delivered projects for businesses across various industries and scales.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12, color: '#0b1220' }}>24/7 Support</h3>
              <p style={{ color: '#64748b', lineHeight: 1.6 }}>
                Round-the-clock support and monitoring to ensure your systems run smoothly.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12, color: '#0b1220' }}>Scalable Solutions</h3>
              <p style={{ color: '#64748b', lineHeight: 1.6 }}>
                Solutions designed to grow with your business and adapt to changing needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '80px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 16, color: '#0b1220' }}>
            Ready to Transform Your Business?
          </h2>
          <p style={{ fontSize: 18, color: '#64748b', marginBottom: 32, lineHeight: 1.6 }}>
            Let&apos;s discuss how our technology solutions can help you achieve your business goals.
          </p>
          <Link href="/contact" style={{
            background: 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)',
            color: '#0b1220',
            padding: '16px 32px',
            borderRadius: 8,
            fontWeight: 600,
            textDecoration: 'none',
            fontSize: 18,
            display: 'inline-block'
          }}>
            Get Your Free Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
