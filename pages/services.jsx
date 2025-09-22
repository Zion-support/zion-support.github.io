import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function Services() {
  const services = [
    {
      title: "Artificial Intelligence Solutions",
      description: "Harness the power of AI with our machine learning, natural language processing, and computer vision solutions.",
      features: ["Machine Learning Models", "AI Chatbots", "Predictive Analytics", "Computer Vision"]
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud solutions to modernize your infrastructure and reduce costs.",
      features: ["Cloud Migration", "DevOps & CI/CD", "Container Orchestration", "Auto-scaling"]
    },
    {
      title: "Cybersecurity",
      description: "Protect your business with comprehensive security solutions and threat monitoring.",
      features: ["Security Audits", "Threat Detection", "Compliance Management", "Incident Response"]
    },
    {
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics and visualization.",
      features: ["Business Intelligence", "Data Warehousing", "Real-time Analytics", "Custom Dashboards"]
    },
    {
      title: "Digital Transformation",
      description: "Modernize your business processes with cutting-edge technology solutions.",
      features: ["Process Automation", "API Development", "Legacy System Integration", "Workflow Optimization"]
    },
    {
      title: "Custom Development",
      description: "Tailored software solutions designed to meet your unique business requirements.",
      features: ["Web Applications", "Mobile Apps", "API Development", "System Integration"]
    }
  ]

  return (
    <div>
      <Head>
        <title>Our Services — Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT and AI services including cloud infrastructure, cybersecurity, data analytics, and custom development solutions." />
      </Head>
      <main style={{ 
        padding: '2rem', 
        fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
        maxWidth: '1200px',
        margin: '0 auto',
        lineHeight: '1.6'
      }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 'bold', 
          marginBottom: '1rem',
          color: '#333'
        }}>
          Our Services
        </h1>
        
        <p style={{ 
          fontSize: '1.2rem', 
          color: '#666', 
          marginBottom: '3rem',
          maxWidth: '600px'
        }}>
          Explore our comprehensive catalog of IT and AI services designed to transform 
          your business and drive innovation.
        </p>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {services.map((service, index) => (
            <div key={index} style={{
              padding: '2rem',
              border: '1px solid #e1e5e9',
              borderRadius: '12px',
              backgroundColor: '#fff',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}>
              <h3 style={{ 
                fontSize: '1.3rem', 
                fontWeight: '600', 
                marginBottom: '1rem',
                color: '#333'
              }}>
                {service.title}
              </h3>
              
              <p style={{ 
                color: '#666', 
                marginBottom: '1.5rem',
                lineHeight: '1.5'
              }}>
                {service.description}
              </p>
              
              <div>
                <h4 style={{ 
                  fontSize: '1rem', 
                  fontWeight: '600', 
                  marginBottom: '0.75rem',
                  color: '#555'
                }}>
                  Key Features:
                </h4>
                <ul style={{ 
                  color: '#666', 
                  paddingLeft: '1.25rem',
                  margin: 0
                }}>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} style={{ marginBottom: '0.25rem' }}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div style={{ 
          padding: '2rem',
          backgroundColor: '#f8f9fa',
          border: '1px solid #e1e5e9',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <h2 style={{ 
            fontSize: '1.5rem', 
            fontWeight: '600', 
            marginBottom: '1rem',
            color: '#333'
          }}>
            Ready to Transform Your Business?
          </h2>
          <p style={{ 
            color: '#666', 
            marginBottom: '2rem',
            maxWidth: '500px',
            margin: '0 auto 2rem auto'
          }}>
            Let's discuss how our services can help you achieve your business goals 
            and drive innovation in your industry.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ 
              display: 'inline-block',
              padding: '0.75rem 2rem',
              backgroundColor: '#667eea',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '6px',
              fontWeight: '500'
            }}>
              Get Started Today
            </Link>
            <Link href="/about" style={{ 
              display: 'inline-block',
              padding: '0.75rem 2rem',
              backgroundColor: 'transparent',
              color: '#667eea',
              textDecoration: 'none',
              borderRadius: '6px',
              fontWeight: '500',
              border: '2px solid #667eea'
            }}>
              Learn More About Us
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

