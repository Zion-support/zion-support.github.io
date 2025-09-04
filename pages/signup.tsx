import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';

export default function Signup() {
  const contact = { phone: '+1 302 464 0950', email: 'kleber@ziontechgroup.com', address: '364 E Main St STE 1008 Middletown DE 19709', site: 'https://ziontechgroup.com'
  };

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '', email: '', company: '', phone: '', password: '',
    confirmPassword: '',
    agreeToTerms: false,
    subscribeNewsletter: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    if (!formData.agreeToTerms) {
      alert('Please agree to the Terms of Service and Privacy Policy');
      return;
    }
    
    // Handle signup logic here
    console.log('Signup attempt:', formData);
    alert('Account creation functionality will be implemented with authentication system.');
  };

  return (
    <>
      <Head>
        <title>Sign Up - Zion Tech Group | Create Your Account</title>
        <meta name="description" content="Create your Zion Tech Group account to access our technology services, manage projects, and get started with our solutions." />
        <meta name="keywords" content="sign up, create account, register, new user, account creation" />
        <link rel="canonical" href={`${contact.site}/signup`} />
        <meta property="og:title" content="Sign Up - Zion Tech Group | Create Your Account" />
        <meta property="og:description" content="Create your Zion Tech Group account to access our technology services, manage projects, and get started with our solutions." />
        <meta property="og:url" content={`${contact.site}/signup`} />
        <meta property="og:type" content="website" />
      </Head>

      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0b1220 0%, #1a1f3a 100%)', color: 'white', padding: '40px 20px' }}>
        <div style={{ maxWidth: 500, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h1 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 800, 
              marginBottom: 10, background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Create Account
            </h1>
            <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>
              Join Zion Tech Group and unlock the power of technology
            </p>
          </div>

          <div style={{ background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: 12, padding: 40, border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 15, marginBottom: 20 }}>
                <div>
                  <label style={{ display: 'block', marginBottom: 8, fontWeight: 600 }}>
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    style={{ width: '100%', padding: '12px',
                      borderRadius: 8, border: '1px solid rgba(255, 255, 255, 0.2)', background: 'rgba(255, 255, 255, 0.1)', color: 'white',
                      fontSize: '1rem'
                    }}
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: 8, fontWeight: 600 }}>
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    style={{ width: '100%', padding: '12px',
                      borderRadius: 8, border: '1px solid rgba(255, 255, 255, 0.2)', background: 'rgba(255, 255, 255, 0.1)', color: 'white',
                      fontSize: '1rem'
                    }}
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div style={{ marginBottom: 20 }}>
                <label style={{ display: 'block', marginBottom: 8, fontWeight: 600 }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  style={{ width: '100%', padding: '12px',
                    borderRadius: 8, border: '1px solid rgba(255, 255, 255, 0.2)', background: 'rgba(255, 255, 255, 0.1)', color: 'white',
                    fontSize: '1rem'
                  }}
                  placeholder="Enter your email"
                />
              </div>

              <div style={{ marginBottom: 20 }}>
                <label style={{ display: 'block', marginBottom: 8, fontWeight: 600 }}>
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  style={{ width: '100%', padding: '12px',
                    borderRadius: 8, border: '1px solid rgba(255, 255, 255, 0.2)', background: 'rgba(255, 255, 255, 0.1)', color: 'white',
                    fontSize: '1rem'
                  }}
                  placeholder="Your company name"
                />
              </div>

              <div style={{ marginBottom: 20 }}>
                <label style={{ display: 'block', marginBottom: 8, fontWeight: 600 }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  style={{ width: '100%', padding: '12px',
                    borderRadius: 8, border: '1px solid rgba(255, 255, 255, 0.2)', background: 'rgba(255, 255, 255, 0.1)', color: 'white',
                    fontSize: '1rem'
                  }}
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 15, marginBottom: 20 }}>
                <div>
                  <label style={{ display: 'block', marginBottom: 8, fontWeight: 600 }}>
                    Password *
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    style={{ width: '100%', padding: '12px',
                      borderRadius: 8, border: '1px solid rgba(255, 255, 255, 0.2)', background: 'rgba(255, 255, 255, 0.1)', color: 'white',
                      fontSize: '1rem'
                    }}
                    placeholder="Create password"
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: 8, fontWeight: 600 }}>
                    Confirm Password *
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                    style={{ width: '100%', padding: '12px',
                      borderRadius: 8, border: '1px solid rgba(255, 255, 255, 0.2)', background: 'rgba(255, 255, 255, 0.1)', color: 'white',
                      fontSize: '1rem'
                    }}
                    placeholder="Confirm password"
                  />
                </div>
              </div>

              <div style={{ marginBottom: 20 }}>
                <label style={{ display: 'flex', alignItems: 'flex-start', gap: 10, cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    required
                    style={{ width: 16, height: 16, marginTop: 2 }}
                  />
                  <span style={{ fontSize: '0.9rem', lineHeight: 1.4 }}>
                    I agree to the{' '}
                    <Link href="/terms" style={{ color: '#3b82f6', textDecoration: 'none' }}>
                      Terms of Service
                    </Link>
                    {' '}and{' '}
                    <Link href="/privacy" style={{ color: '#3b82f6', textDecoration: 'none' }}>
                      Privacy Policy
                    </Link>
                    {' '}*
                  </span>
                </label>
              </div>

              <div style={{ marginBottom: 30 }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    name="subscribeNewsletter"
                    checked={formData.subscribeNewsletter}
                    onChange={handleInputChange}
                    style={{ width: 16, height: 16 }}
                  />
                  <span style={{ fontSize: '0.9rem' }}>
                    Subscribe to our newsletter for updates and insights
                  </span>
                </label>
              </div>

              <button
                type="submit"
                style={{ width: '100%', background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', color: 'white', padding: '15px', border: 'none',
                  borderRadius: 8,
                  fontSize: '1.1rem',
                  fontWeight: 600, cursor: 'pointer', transition: 'transform 0.3s ease',
                  marginBottom: 20
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Create Account
              </button>
            </form>

            <div style={{ textAlign: 'center', marginTop: 20 }}>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
                Already have an account?{' '}
                <Link href="/login" style={{ color: '#3b82f6', 
                  textDecoration: 'none', 
                  fontWeight: 600 
                }}>
                  Sign in here
                </Link>
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: 30 }}>
            <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: 10 }}>
              Questions about creating an account?
            </p>
            <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={`tel:${contact.phone}`} style={{ color: '#3b82f6',
                textDecoration: 'none',
                fontSize: '0.9rem'
              }}>
                📞 {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} style={{ color: '#3b82f6',
                textDecoration: 'none',
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