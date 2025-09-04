import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';

export default function Login() {
  const contact = { 
    phone: '+1 302 464 0950', 
    email: 'kleber@ziontechgroup.com', 
    address: '364 E Main St STE 1008 Middletown DE 19709', 
    site: 'https://ziontechgroup.com' 
  };

  const [formData, setFormData] = useState({ 
    email: '', 
    password: '',
    rememberMe: false
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
    // Handle login logic here
    console.log('Login attempt:', formData);
    alert('Login functionality will be implemented with authentication system.');
  };

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

      <div style={{ 
        minHeight: '100vh', 
        background: 'white', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}>
        <div style={{ maxWidth: 400, width: '100%', padding: '20px' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h1 style={{ 
              fontSize: '2rem', 
              fontWeight: 800, 
              marginBottom: 10,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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

          <form onSubmit={handleSubmit} style={{ 
            background: '#f8f9fa', 
            padding: 40, 
            borderRadius: 12, 
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' 
          }}>
            <div style={{ marginBottom: 20 }}>
              <label style={{ 
                display: 'block', 
                marginBottom: 8, 
                fontWeight: 600, 
                color: '#333' 
              }}>
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
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
                placeholder="Enter your email"
              />
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
          </form>

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
            marginTop: 20 
          }}>
            <Link href="/" style={{ 
              color: '#666', 
              textDecoration: 'none', 
              fontSize: '0.9rem' 
            }}>
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}