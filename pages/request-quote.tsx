import Head from 'next/head';
import { useState } from 'react';

export default function RequestQuote() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
    description: ''
  });

  const services = [
    'AI & Machine Learning',
    'Quantum Computing',
    'Micro SaaS Development',
    'Cybersecurity',
    'Cloud DevOps',
    'Digital Transformation',
    'IT Consulting',
    'Custom Software Development'
  ];

  const budgetRanges = [
    'Under $10,000',
    '$10,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $500,000',
    'Over $500,000'
  ];

  const timelines = [
    'ASAP',
    '1-3 months',
    '3-6 months',
    '6-12 months',
    '12+ months'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your request! We will contact you within 24 hours.');
  };

  return (
    <>
      <Head>
        <title>Request Quote - Zion Tech Group | Get Your Custom Technology Solution</title>
        <meta name="description" content="Request a custom quote for AI, quantum computing, micro SaaS, cybersecurity, or other technology solutions from Zion Tech Group." />
        <meta name="keywords" content="request quote, custom quote, technology solutions, AI services, quantum computing, micro SaaS, cybersecurity" />
        <link rel="canonical" href={`${contact.site}/request-quote`} />
        <meta property="og:title" content="Request Quote - Zion Tech Group | Get Your Custom Technology Solution" />
        <meta property="og:description" content="Request a custom quote for AI, quantum computing, micro SaaS, cybersecurity, or other technology solutions from Zion Tech Group." />
        <meta property="og:url" content={`${contact.site}/request-quote`} />
        <meta property="og:type" content="website" />
      </Head>

      <div style={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #0b1220 0%, #1e293b 100%)',
        color: 'white',
        paddingTop: '80px'
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '40px 20px' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h1 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 800, 
              marginBottom: 16,
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Request a Quote
            </h1>
            <p style={{ 
              fontSize: '1.1rem', 
              opacity: 0.8, 
              lineHeight: 1.6
            }}>
              Get a customized quote for your technology needs. Our experts will review your 
              requirements and provide a detailed proposal within 24 hours.
            </p>
          </div>

          {/* Quote Form */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: 16,
            padding: 40,
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <form onSubmit={handleSubmit}>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                gap: 24,
                marginBottom: 24
              }}>
                <div>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: 8, 
                    fontWeight: 600,
                    fontSize: '0.9rem'
                  }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 8,
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: 'white',
                      fontSize: '1rem'
                    }}
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: 8, 
                    fontWeight: 600,
                    fontSize: '0.9rem'
                  }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 8,
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: 'white',
                      fontSize: '1rem'
                    }}
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: 8, 
                    fontWeight: 600,
                    fontSize: '0.9rem'
                  }}>
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 8,
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: 'white',
                      fontSize: '1rem'
                    }}
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: 8, 
                    fontWeight: 600,
                    fontSize: '0.9rem'
                  }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 8,
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: 'white',
                      fontSize: '1rem'
                    }}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: 8, 
                    fontWeight: 600,
                    fontSize: '0.9rem'
                  }}>
                    Service Needed *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 8,
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: 'white',
                      fontSize: '1rem'
                    }}
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service} style={{ background: '#1e293b', color: 'white' }}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: 8, 
                    fontWeight: 600,
                    fontSize: '0.9rem'
                  }}>
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 8,
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: 'white',
                      fontSize: '1rem'
                    }}
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range, index) => (
                      <option key={index} value={range} style={{ background: '#1e293b', color: 'white' }}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: 8, 
                    fontWeight: 600,
                    fontSize: '0.9rem'
                  }}>
                    Timeline
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 8,
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: 'white',
                      fontSize: '1rem'
                    }}
                  >
                    <option value="">Select timeline</option>
                    {timelines.map((timeline, index) => (
                      <option key={index} value={timeline} style={{ background: '#1e293b', color: 'white' }}>
                        {timeline}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: 24 }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: 8, 
                  fontWeight: 600,
                  fontSize: '0.9rem'
                }}>
                  Project Description *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 8,
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    fontSize: '1rem',
                    resize: 'vertical'
                  }}
                  placeholder="Describe your project requirements, goals, and any specific needs..."
                />
              </div>

              <div style={{ textAlign: 'center' }}>
                <button
                  type="submit"
                  style={{
                    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                    color: 'white',
                    padding: '16px 32px',
                    borderRadius: 8,
                    border: 'none',
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  Request Quote
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: 16,
            padding: 32,
            marginTop: 40,
            border: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center'
          }}>
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: 700, 
              marginBottom: 16 
            }}>
              Need Immediate Assistance?
            </h3>
            <p style={{ 
              opacity: 0.8, 
              marginBottom: 20,
              fontSize: '1rem'
            }}>
              Contact us directly for urgent inquiries or to speak with our experts.
            </p>
            <div style={{ 
              display: 'flex', 
              gap: 20, 
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <a href={`tel:${contact.phone}`} style={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                padding: '12px 20px',
                borderRadius: 8,
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.9rem'
              }}>
                📞 {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} style={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                padding: '12px 20px',
                borderRadius: 8,
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.9rem'
              }}>
                ✉️ {contact.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}