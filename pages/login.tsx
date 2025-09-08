import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Login() {
  const contact = {
    phone: '+1-302-464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
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

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    
    if (!formData.password) newErrors.password = 'Password is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Success - redirect or show success message
      // console.log removed for production
      
    } catch (error) {
      console.error('Login error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const title = 'Sign In — Zion Tech Group'
  const description = 'Access your Zion Tech Group account to manage AI, cloud, and cybersecurity solutions.'

  return (
    <>
      <Head>
        <title>Login - Zion Tech Group | Access Your Account</title>
        <meta name="description" content="Login to your Zion Tech Group account to access your services, manage your projects, and view your account information." />
        <meta name="keywords" content="login, account, access, Zion Tech Group, services, dashboard" />
        <link rel="canonical" href={`${contact.site}/login`} />
        <meta property="og:title" content="Login - Zion Tech Group | Access Your Account" />
        <meta property="og:description" content="Login to your Zion Tech Group account to access your services, manage your projects, and view your account information." />
        <meta property="og:url" content={`${contact.site}/login`} />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>

      <div style={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
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
            <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>
              Sign in to your Zion Tech Group account
            </p>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: 12,
            padding: 40,
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)'
          }}>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: 'block', marginBottom: 8, fontWeight: 600, color: 'white' }}>
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
                    borderRadius: 8,
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    fontSize: '1rem'
                  }}
                  placeholder="Enter your email"
                />
              </div>

              <div style={{ marginBottom: 20 }}>
                <label style={{ display: 'block', marginBottom: 8, fontWeight: 600, color: 'white' }}>
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
                    borderRadius: 8,
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    fontSize: '1rem'
                  }}
                  placeholder="Enter your password"
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30 }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', color: 'white' }}>
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    style={{ margin: 0 }}
                  />
                  Remember me
                </label>
                <Link href="/forgot-password" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '12px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
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

              <div style={{ textAlign: 'center', color: '#94a3b8', fontSize: '0.9rem' }}>
                Don't have an account?{' '}
                <Link href="/register" style={{ color: '#667eea', textDecoration: 'none' }}>
                  Sign up
                </Link>
              </div>
            </form>
          </div>

          <div style={{ textAlign: 'center', marginTop: 30, color: '#94a3b8' }}>
            <p style={{ marginBottom: 10 }}>Need help? Contact us:</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 20 }}>
              <a href={`tel:${contact.phone}`} style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>
                📞 {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>
                ✉️ {contact.email}
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  {/* Removed stray closing parenthesis */}
  {/* Removed stray closing brace */}