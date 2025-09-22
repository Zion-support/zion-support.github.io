import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

function About() {
  return (
    <div>
      <Head>
        <title>About Us — Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, expertise, and commitment to delivering world-class IT and AI solutions." />
      </Head>
      <main style={{ 
        padding: '2rem', 
        fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
        maxWidth: '800px',
        margin: '0 auto',
        lineHeight: '1.6'
      }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 'bold', 
          marginBottom: '2rem',
          color: '#333'
        }}>
          About Zion Tech Group
        </h1>
        
        <div style={{ marginBottom: '2rem' }}>
          <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '1.5rem' }}>
            At Zion Tech Group, we are dedicated to transforming businesses through innovative 
            technology solutions. Our team of expert professionals combines deep industry knowledge 
            with cutting-edge AI and IT expertise to deliver results that drive growth and efficiency.
          </p>
          
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>
            Our Mission
          </h2>
          <p style={{ color: '#666', marginBottom: '1.5rem' }}>
            To empower businesses with advanced technology solutions that enhance productivity, 
            streamline operations, and unlock new opportunities for growth in the digital age.
          </p>
          
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>
            Our Expertise
          </h2>
          <ul style={{ color: '#666', paddingLeft: '1.5rem' }}>
            <li>Artificial Intelligence & Machine Learning</li>
            <li>Cloud Infrastructure & Migration</li>
            <li>Cybersecurity Solutions</li>
            <li>Data Analytics & Business Intelligence</li>
            <li>Digital Transformation</li>
            <li>Custom Software Development</li>
          </ul>
        </div>
        
        <div style={{ 
          padding: '1.5rem',
          backgroundColor: '#f8f9fa',
          border: '1px solid #e1e5e9',
          borderRadius: '8px',
          marginTop: '2rem'
        }}>
          <h3 style={{ marginBottom: '1rem', color: '#333' }}>Ready to Get Started?</h3>
          <p style={{ color: '#666', marginBottom: '1rem' }}>
            Discover how our services can transform your business operations.
          </p>
          <Link href="/services" style={{ 
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            backgroundColor: '#667eea',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '6px',
            fontWeight: '500',
            transition: 'background-color 0.2s'
          }}>
            Explore Our Services
          </Link>
        </div>
      </main>
    </div>
  )
}

export default About
