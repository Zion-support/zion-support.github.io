import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Zion Tech Group - Innovative IT Solutions & AI Services</title>
        <meta name="description" content="Leading provider of AI-powered IT solutions, cloud migration, and digital transformation services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1e3a8a, #7c3aed)',
        color: 'white',
        padding: '2rem 1rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              background: 'linear-gradient(90deg, white, #bfdbfe)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Zion Tech Group
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#bfdbfe', marginBottom: '2rem' }}>
              Innovative IT Solutions & AI Services
            </p>
            <p style={{ 
              fontSize: '1.125rem', 
              color: '#94a3b8', 
              marginBottom: '3rem', 
              maxWidth: '48rem', 
              margin: '0 auto 3rem auto' 
            }}>
              We deliver cutting-edge technology solutions with 200+ innovative micro SaaS products, 
              120+ advanced AI services, and 120+ comprehensive IT solutions. From AI-powered automation 
              to quantum computing, we're your trusted partner for digital transformation.
            </p>
            
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              justifyContent: 'center', 
              gap: '1rem', 
              marginBottom: '3rem' 
            }}>
              <Link href="/services" style={{
                backgroundColor: '#2563eb',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'background-color 0.2s'
              }}>
                View All Services
              </Link>
              <Link href="/contact" style={{
                backgroundColor: 'transparent',
                border: '2px solid white',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.2s'
              }}>
                Get Started
              </Link>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              marginTop: '4rem'
            }}>
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '2rem',
                borderRadius: '1rem',
                backdropFilter: 'blur(10px)'
              }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#60a5fa' }}>
                  AI Services
                </h3>
                <p style={{ color: '#cbd5e1' }}>
                  Advanced AI solutions including machine learning, natural language processing, 
                  and computer vision to automate and optimize your business processes.
                </p>
              </div>
              
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '2rem',
                borderRadius: '1rem',
                backdropFilter: 'blur(10px)'
              }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#a78bfa' }}>
                  IT Services
                </h3>
                <p style={{ color: '#cbd5e1' }}>
                  Comprehensive IT solutions including cloud migration, DevOps, cybersecurity, 
                  and infrastructure management for modern businesses.
                </p>
              </div>
              
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '2rem',
                borderRadius: '1rem',
                backdropFilter: 'blur(10px)'
              }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#34d399' }}>
                  Micro SaaS
                </h3>
                <p style={{ color: '#cbd5e1' }}>
                  Innovative micro SaaS products designed to solve specific business challenges 
                  with scalable, cost-effective solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}