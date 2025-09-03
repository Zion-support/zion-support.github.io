import React from 'react';

export default function Contact() {
  return (
    <main style={{ background: '#f8fafc', minHeight: 'calc(100vh - 120px)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 16, color: '#0b1220' }}>
            Get In Touch
          </h1>
          <p style={{ fontSize: 18, color: '#64748b', maxWidth: 600, margin: '0 auto' }}>
            Ready to transform your business? Let&apos;s discuss your project and how we can help you achieve your goals.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 40 }}>
          {/* Contact Information */}
          <div>
            <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 24, color: '#0b1220' }}>
              Contact Information
            </h2>
            
            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: '#0b1220' }}>Phone</h3>
              <p style={{ color: '#64748b', fontSize: 16 }}>
                <a href="tel:+13024640950" style={{ color: '#22d3ee', textDecoration: 'none' }}>
                  +1 302 464 0950
                </a>
              </p>
            </div>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: '#0b1220' }}>Email</h3>
              <p style={{ color: '#64748b', fontSize: 16 }}>
                <a href="mailto:kleber@ziontechgroup.com" style={{ color: '#22d3ee', textDecoration: 'none' }}>
                  kleber@ziontechgroup.com
                </a>
              </p>
            </div>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: '#0b1220' }}>Address</h3>
              <p style={{ color: '#64748b', fontSize: 16, lineHeight: 1.6 }}>
                364 E Main St STE 1008<br />
                Middletown, DE 19709
              </p>
            </div>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: '#0b1220' }}>Business Hours</h3>
              <p style={{ color: '#64748b', fontSize: 16, lineHeight: 1.6 }}>
                Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                Saturday: 10:00 AM - 4:00 PM EST<br />
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{
            background: 'white',
            borderRadius: 16,
            padding: 32,
            border: '1px solid rgba(0,0,0,0.08)',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
          }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 24, color: '#0b1220' }}>
              Send Us a Message
            </h2>
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div>
                <label style={{ display: 'block', marginBottom: 8, fontWeight: 600, color: '#0b1220' }}>
                  Name *
                </label>
                <input 
                  type="text" 
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #d1d5db',
                    borderRadius: 8,
                    fontSize: 16,
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: 8, fontWeight: 600, color: '#0b1220' }}>
                  Email *
                </label>
                <input 
                  type="email" 
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #d1d5db',
                    borderRadius: 8,
                    fontSize: 16,
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: 8, fontWeight: 600, color: '#0b1220' }}>
                  Company
                </label>
                <input 
                  type="text"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #d1d5db',
                    borderRadius: 8,
                    fontSize: 16,
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: 8, fontWeight: 600, color: '#0b1220' }}>
                  Service Interest
                </label>
                <select style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1px solid #d1d5db',
                  borderRadius: 8,
                  fontSize: 16,
                  boxSizing: 'border-box',
                  background: 'white'
                }}>
                  <option value="">Select a service</option>
                  <option value="ai-services">AI Services</option>
                  <option value="micro-saas">Micro SaaS</option>
                  <option value="it-services">IT Services</option>
                  <option value="consulting">Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: 8, fontWeight: 600, color: '#0b1220' }}>
                  Message *
                </label>
                <textarea 
                  required
                  rows={5}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #d1d5db',
                    borderRadius: 8,
                    fontSize: 16,
                    boxSizing: 'border-box',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button 
                type="submit"
                style={{
                  background: 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)',
                  color: '#0b1220',
                  padding: '14px 28px',
                  borderRadius: 8,
                  fontWeight: 600,
                  fontSize: 16,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'transform 0.2s'
                }}
                onMouseOver={(e) => e.target.style.transform = 'translateY(-1px)'}
                onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Additional Information */}
        <div style={{ 
          marginTop: 60,
          background: 'white',
          borderRadius: 16,
          padding: 32,
          border: '1px solid rgba(0,0,0,0.08)',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#0b1220' }}>
            What to Expect
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 24, marginTop: 24 }}>
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: '#0b1220' }}>Quick Response</h3>
              <p style={{ color: '#64748b', fontSize: 14 }}>We typically respond within 24 hours during business days.</p>
            </div>
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: '#0b1220' }}>Free Consultation</h3>
              <p style={{ color: '#64748b', fontSize: 14 }}>Initial consultation to understand your needs and provide recommendations.</p>
            </div>
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: '#0b1220' }}>Custom Quote</h3>
              <p style={{ color: '#64748b', fontSize: 14 }}>Tailored pricing based on your specific requirements and project scope.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
