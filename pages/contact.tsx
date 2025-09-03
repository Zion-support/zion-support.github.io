import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #0b1220 0%, #1e293b 100%)',
        color: 'white',
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: 800, 
            marginBottom: '1rem' 
          }}>
            Get In Touch
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            opacity: 0.9 
          }}>
            Ready to start your next project? Let&apos;s discuss how we can help transform your business.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section style={{ padding: '80px 20px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
            gap: '4rem' 
          }}>
            {/* Contact Form */}
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
              <h2 style={{ 
                fontSize: '1.875rem', 
                fontWeight: 700, 
                marginBottom: '1.5rem',
                color: '#0b1220'
              }}>
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: '#374151' }}>
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '1rem'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: '#374151' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '1rem'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: '#374151' }}>
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '1rem'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: '#374151' }}>
                    Service Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '1rem'
                    }}
                  >
                    <option value="">Select a service</option>
                    <option value="ai-development">AI Development</option>
                    <option value="cloud-services">Cloud Services</option>
                    <option value="micro-saas">Micro SaaS</option>
                    <option value="it-services">IT Services</option>
                    <option value="consulting">Consulting</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: '#374151' }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '1rem',
                      resize: 'vertical'
                    }}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    background: '#22d3ee',
                    color: '#0b1220',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '6px',
                    fontWeight: 600,
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1rem'
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 style={{ 
                fontSize: '1.875rem', 
                fontWeight: 700, 
                marginBottom: '1.5rem',
                color: '#0b1220'
              }}>
                Contact Information
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem', color: '#0b1220' }}>
                    Phone
                  </h3>
                  <p style={{ color: '#64748b', fontSize: '1rem' }}>
                    <a href="tel:+13024640950" style={{ color: '#22d3ee', textDecoration: 'none' }}>
                      +1 302 464 0950
                    </a>
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem', color: '#0b1220' }}>
                    Email
                  </h3>
                  <p style={{ color: '#64748b', fontSize: '1rem' }}>
                    <a href="mailto:kleber@ziontechgroup.com" style={{ color: '#22d3ee', textDecoration: 'none' }}>
                      kleber@ziontechgroup.com
                    </a>
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem', color: '#0b1220' }}>
                    Address
                  </h3>
                  <p style={{ color: '#64748b', fontSize: '1rem' }}>
                    364 E Main St STE 1008<br />
                    Middletown, DE 19709
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem', color: '#0b1220' }}>
                    Business Hours
                  </h3>
                  <p style={{ color: '#64748b', fontSize: '1rem' }}>
                    Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                    Saturday: 10:00 AM - 4:00 PM EST<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
