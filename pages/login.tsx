import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', formData);
    alert('Login functionality will be implemented with authentication system.');
  }

  return (
    <main style={{ padding: 24 }}>
      <Head>
        <title>Login - Zion Tech Group | Access Your Account</title>
        <meta name="description" content="Login to your Zion Tech Group account to access your services, manage your projects, and view your account information." />
        <meta name="keywords" content="login, sign in, account, authentication, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/login" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="noindex, nofollow" />
        {/* Open Graph */}
        <meta property="og:title" content="Login - Zion Tech Group | Access Your Account" />
        <meta property="og:description" content="Login to your Zion Tech Group account to access your services, manage your projects, and view your account information." />
        <meta property="og:url" content="https://ziontechgroup.com/login" />
        <meta property="og:type" content="website" />
      </Head>

      <div style={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #0b1220 0%, #1a1f3a 100%)', 
        color: 'white', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}>
        <div style={{ maxWidth: 400, width: '100%', padding: '20px' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h1 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 800, 
              marginBottom: 10,
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Welcome Back
            </h1>
            <p style={{ color: '#666', fontSize: '1rem' }}>
              Sign in to your Zion Tech Group account
            </p>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: 12,
            padding: 40,
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: 20 }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: 8, 
                  fontSize: '0.9rem', 
                  fontWeight: 600,
                  color: '#e2e8f0'
                }}>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: '1rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: 8,
                    color: 'white',
                    outline: 'none',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'}
                />
              </div>

              <div style={{ marginBottom: 30 }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: 8, 
                  fontSize: '0.9rem', 
                  fontWeight: 600,
                  color: '#e2e8f0'
                }}>
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: '1rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: 8,
                    color: 'white',
                    outline: 'none',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'}
                />
              </div>

              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                marginBottom: 30 
              }}>
                <label style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  fontSize: '0.9rem',
                  color: '#94a3b8',
                  cursor: 'pointer'
                }}>
                  <input 
                    type="checkbox" 
                    style={{ marginRight: 8 }}
                  />
                  Remember me
                </label>
                <Link 
                  href="/forgot-password" 
                  style={{ 
                    color: '#3b82f6', 
                    textDecoration: 'none', 
                    fontSize: '0.9rem' 
                  }}
                >
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '12px 24px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                  color: 'white',
                  border: 'none',
                  borderRadius: 8,
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(59, 130, 246, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Sign In
              </button>
            </form>

            <div style={{ 
              textAlign: 'center', 
              marginTop: 30, 
              paddingTop: 30, 
              borderTop: '1px solid rgba(255, 255, 255, 0.1)' 
            }}>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
                Don't have an account?{' '}
                <Link 
                  href="/signup" 
                  style={{ 
                    color: '#3b82f6', 
                    textDecoration: 'none', 
                    fontWeight: 600 
                  }}
                >
                  Sign up here
                </Link>
              </p>
            </div>

            <div style={{ marginBottom: 20 }}>
              <label style={{ 
                display: 'block', 
                marginBottom: 8, 
                fontWeight: 600, 
                color: '#333' 
              }}>
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ddd',
                  borderRadius: 8,
                  fontSize: '1rem',
                  boxSizing: 'border-box'
                }}
                placeholder="Enter your password"
              />
            </div>

            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              marginBottom: 20 
            }}>
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleInputChange}
                style={{ marginRight: 8 }}
              />
              <label style={{ color: '#666', fontSize: '0.9rem' }}>
                Remember me
              </label>
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '12px',
                border: 'none',
                borderRadius: 8,
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                marginBottom: 20
              }}
            >
              Sign In
            </button>

            <div style={{ textAlign: 'center' }}>
              <Link href="/forgot-password" style={{ 
                color: '#667eea', 
                textDecoration: 'none', 
                fontSize: '0.9rem' 
              }}>
                Forgot your password?
              </Link>
            </div>

          <div style={{ 
            textAlign: 'center', 
            marginTop: 20, 
            color: '#666' 
          }}>
            <p>
              Don't have an account?{' '}
              <Link href="/register" style={{ 
                color: '#667eea', 
                textDecoration: 'none', 
                fontWeight: 600 
              }}>
                Sign up here
              </Link>
            </p>
          </div>

          <div style={{ 
            textAlign: 'center', 
            marginTop: 40, 
            fontSize: '0.9rem',
            color: '#64748b'
          }}>
            <p>
              Need help? Contact us at{' '}
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                style={{ color: '#3b82f6', textDecoration: 'none' }}
              >
                kleber@ziontechgroup.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}