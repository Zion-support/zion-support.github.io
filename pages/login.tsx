import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';

export default function Login() {
const contact = { phone: '+1 302 464 0950', email: 'kleber@ziontechgroup.com', address: '364 E Main St STE 1008 Middletown DE 19709', site: 'https://ziontechgroup.com'
  };

  const [formData, setFormData] = useState({ email: '', password: '',
    rememberMe: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', formData);
    alert('Login functionality will be implemented with authentication system.');
  }
  return (
    <>
      <Head>
        <title>Login - Zion Tech Group | Access Your Account</title>
        <meta name="description" content="Login to your Zion Tech Group account to access your services, manage your projects, and view your account information." />
        <meta name="keywords" content="login, account access, user portal, authentication, sign in" />
        <link rel="canonical" href={`${contact.site}/login`} />
        <meta property="og:title" content="Login - Zion Tech Group | Access Your Account" />
        <meta property="og:description" content="Login to your Zion Tech Group account to access your services, manage your projects, and view your account information." />
        <meta property="og:url" content={`${contact.site}/login`} />
        <meta property="og:type" content="website" />
      </Head>

      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0b1220 0%, #1a1f3a 100%)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ maxWidth: 400, width: '100%', padding: '20px' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h1 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 800, 
              marginBottom: 10, background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Welcome Back
            </h1>
            <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>
              Sign in to your Zion Tech Group account
            </p>
          </div>

          <div style={{ background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: 12, padding: 40, border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: 'block', marginBottom: 8, fontWeight: 600 }}>
                  Email Address
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
                  }
                  placeholder="Enter your email"
                />
              </div>

              <div style={{ marginBottom: 20 }}>
                <label style={{ display: 'block', marginBottom: 8, fontWeight: 600 }}>
                  Password
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
                  }
                  placeholder="Enter your password"
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30 }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    style={{ width: 16, height: 16 }
                  />
                  <span style={{ fontSize: '0.9rem' }}>Remember me</span>
                </label>
                <Link href="/help" style={{ color: '#3b82f6', 
                  textDecoration: 'none', 
                  fontSize: '0.9rem' 
                }}>
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                style={{ width: '100%', background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', color: 'white', padding: '15px', border: 'none',
                  borderRadius: 8,
                  fontSize: '1.1rem',
                  fontWeight: 600, cursor: 'pointer', transition: 'transform 0.3s ease',
                  marginBottom: 20
                }
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }
              >
                Sign In
              </button>
            </form>

            <div style={{ textAlign: 'center', marginTop: 20 }}>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
                Don't have an account?{' '}
                <Link href="/signup" style={{ color: '#3b82f6', 
                  textDecoration: 'none', 
                  fontWeight: 600 
                }}>
                  Sign up here
                </Link>
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: 30 }}>
            <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: 10 }}>
              Need help accessing your account?
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