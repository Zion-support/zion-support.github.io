import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Help() {
  const contact = {
    phone: '+1-302-464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
    site: 'https://ziontechgroup.com'
  };

  const helpCategories = [
    {
      title: "Getting Started",
      icon: "🚀",
      articles: [
        { title: "How to Get Started with Our Services", description: "Step-by-step guide to begin your technology journey" },
        { title: "Account Setup and Configuration", description: "Learn how to set up your account and configure settings" },
        { title: "Understanding Our Service Portfolio", description: "Overview of all available services and solutions" },
        { title: "Initial Consultation Process", description: "What to expect during your first consultation" }
      ]
    },
    {
      title: "Technical Support",
      icon: "🔧",
      articles: [
        { title: "Troubleshooting Common Issues", description: "Solutions to frequently encountered problems" },
        { title: "System Requirements and Compatibility", description: "Technical specifications and compatibility information" },
        { title: "Performance Optimization", description: "Tips for improving system performance" },
        { title: "Integration and API Documentation", description: "Technical documentation for integrations" }
      ]
    },
    {
      title: "Billing & Account",
      icon: "💳",
      articles: [
        { title: "Understanding Your Bill", description: "How to read and understand your service charges" },
        { title: "Payment Methods and Billing Cycles", description: "Available payment options and billing schedules" },
        { title: "Upgrading or Downgrading Services", description: "How to modify your service plan" },
        { title: "Cancellation and Refund Policy", description: "Information about service cancellation and refunds" }
      ]
    },
    {
      title: "Security & Privacy",
      icon: "🛡️",
      articles: [
        { title: "Security Best Practices", description: "Guidelines for maintaining security" },
        { title: "Data Privacy and Protection", description: "How we protect your data and privacy" },
        { title: "Two-Factor Authentication Setup", description: "How to enable 2FA for your account" },
        { title: "Reporting Security Issues", description: "How to report security concerns" }
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Help Center - Zion Tech Group</title>
        <meta name="description" content="Get help with Zion Tech Group services. Find answers to common questions, troubleshooting guides, and technical support resources." />
        <link rel="canonical" href="https://ziontechgroup.com/help" />
      </Head>
      
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ marginBottom: 40 }}>
          <h1 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 800, 
            marginBottom: 16, 
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Help Center
          </h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.8, lineHeight: 1.6 }}>
            Find answers to your questions and get the support you need.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {helpCategories.map((category, index) => (
            <div key={index} style={{ 
              background: '#f8fafc', 
              padding: 24, 
              borderRadius: 12, 
              border: '1px solid #e2e8f0' 
            }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: '1.5rem' }}>{category.icon}</span>
                {category.title}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {category.articles.map((article, articleIndex) => (
                  <div key={articleIndex} style={{ 
                    padding: 12, 
                    background: 'white', 
                    borderRadius: 8, 
                    border: '1px solid #e2e8f0',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}>
                    <h3 style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: 4, color: '#3b82f6' }}>
                      {article.title}
                    </h3>
                    <p style={{ fontSize: '0.8rem', color: '#666', lineHeight: 1.4 }}>
                      {article.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ 
          marginTop: 48, 
          padding: 32, 
          background: '#f0f9ff', 
          borderRadius: 12, 
          border: '1px solid rgba(59, 130, 246, 0.2)',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 16 }}>Still Need Help?</h2>
          <p style={{ opacity: 0.8, marginBottom: 20 }}>
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
            <Link href="/contact" style={{
              background: '#3b82f6',
              color: 'white',
              padding: '12px 24px',
              textDecoration: 'none',
              borderRadius: 8,
              fontSize: '1rem',
              fontWeight: 600
            }}>
              Contact Support
            </Link>
            <div style={{ display: 'flex', gap: 24, fontSize: '0.9rem', color: '#666' }}>
              <span>📞 {contact.phone}</span>
              <span>✉️ {contact.email}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}