import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Zion Tech Group - Advanced IT Solutions & AI Services</title>
        <meta name="description" content="Leading provider of cutting-edge IT solutions, AI services, and innovative technology solutions for enterprises worldwide." />
        <meta name="keywords" content="IT services, AI solutions, technology consulting, enterprise software, cloud solutions" />
        <meta property="og:title" content="Zion Tech Group - Advanced IT Solutions & AI Services" />
        <meta property="og:description" content="Leading provider of cutting-edge IT solutions, AI services, and innovative technology solutions for enterprises worldwide." />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div style={{ 
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        {/* Hero Section */}
        <div style={{ 
          padding: '4rem 2rem',
          textAlign: 'center',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h1 style={{ 
            fontSize: '3.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            background: 'linear-gradient(45deg, #fff, #e0e7ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Zion Tech Group
          </h1>
          
          <p style={{ 
            fontSize: '1.5rem',
            marginBottom: '2rem',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Pioneering the future of technology with advanced IT solutions, AI services, and innovative digital transformation
          </p>
          
          <div style={{ 
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '3rem'
          }}>
            <button style={{
              background: 'rgba(255, 255, 255, 0.2)',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)'
            }}>
              Explore Services
            </button>
            <button style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)'
            }}>
              Get Started
            </button>
          </div>
        </div>

        {/* Services Section */}
        <div style={{ 
          padding: '4rem 2rem',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{ 
            maxWidth: '1200px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
            <h2 style={{ 
              fontSize: '2.5rem',
              marginBottom: '3rem',
              fontWeight: 'bold'
            }}>
              Our Core Services
            </h2>
            
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              marginTop: '2rem'
            }}>
              {[
                {
                  title: 'AI & Machine Learning',
                  description: 'Advanced AI solutions and machine learning models to transform your business operations.',
                  icon: '🤖'
                },
                {
                  title: 'Cloud Infrastructure',
                  description: 'Scalable cloud solutions and infrastructure management for modern enterprises.',
                  icon: '☁️'
                },
                {
                  title: 'Cybersecurity',
                  description: 'Comprehensive security solutions to protect your digital assets and data.',
                  icon: '🔒'
                },
                {
                  title: 'Digital Transformation',
                  description: 'End-to-end digital transformation services to modernize your business processes.',
                  icon: '🚀'
                }
              ].map((service, index) => (
                <div key={index} style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  padding: '2rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer'
                }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                    {service.icon}
                  </div>
                  <h3 style={{ 
                    fontSize: '1.5rem',
                    marginBottom: '1rem',
                    fontWeight: '600'
                  }}>
                    {service.title}
                  </h3>
                  <p style={{ 
                    opacity: 0.9,
                    lineHeight: '1.6'
                  }}>
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div style={{ 
          padding: '4rem 2rem',
          textAlign: 'center',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{ 
            fontSize: '2.5rem',
            marginBottom: '1rem',
            fontWeight: 'bold'
          }}>
            Ready to Transform Your Business?
          </h2>
          <p style={{ 
            fontSize: '1.2rem',
            marginBottom: '2rem',
            opacity: 0.9
          }}>
            Let's discuss how our cutting-edge solutions can drive your success
          </p>
          <button style={{
            background: 'linear-gradient(45deg, #ff6b6b, #ee5a24)',
            border: 'none',
            color: 'white',
            padding: '16px 32px',
            borderRadius: '8px',
            fontSize: '1.1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'transform 0.3s ease',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
          }}>
            Contact Us Today
          </button>
        </div>

        {/* Footer */}
        <div style={{ 
          padding: '2rem',
          textAlign: 'center',
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
          marginTop: '2rem'
        }}>
          <p style={{ opacity: 0.8 }}>
            © 2025 Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}