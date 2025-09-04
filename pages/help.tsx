import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';

export default function Help() {
  const contact = { 
    phone: '+1 302 464 0950', 
    email: 'kleber@ziontechgroup.com', 
    address: '364 E Main St STE 1008 Middletown DE 19709', 
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

  const faqItems = [
    { question: "How quickly can you start working on my project?", answer: "We typically begin new projects within 1-2 weeks of contract signing depending on project complexity and current workload." },
    { question: "Do you provide ongoing support after project completion?", answer: "Yes, we offer comprehensive support packages including maintenance, updates, and technical assistance." },
    { question: "What technologies do you specialize in?", answer: "We specialize in AI/ML, cloud computing, cybersecurity, quantum computing, micro SaaS development, and digital transformation." },
    { question: "Can you work with our existing systems?", answer: "Absolutely. We have extensive experience integrating with existing systems and can work with most technology stacks." },
    { question: "Do you offer remote services?", answer: "Yes, we provide both remote and on-site services, depending on your needs and project requirements." }
  ];

  const contactMethods = [
    { method: "Phone Support", details: "+1 302 464 0950", availability: "Mon-Fri 9AM-6PM EST", icon: "📞" },
    { method: "Email Support", details: "kleber@ziontechgroup.com", availability: "24/7 Response within 24 hours", icon: "✉️" },
    { method: "Live Chat", details: "Available on website", availability: "Mon-Fri 9AM-6PM EST", icon: "💬" },
    { method: "Emergency Support", details: "Critical issues only", availability: "24/7 for urgent matters", icon: "🚨" }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredArticles = selectedCategory 
    ? helpCategories.find(cat => cat.title === selectedCategory)?.articles || []
    : helpCategories.flatMap(cat => cat.articles).filter(article => 
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.description.toLowerCase().includes(searchTerm.toLowerCase())
      );

  return (
    <>
      <Head>
        <title>Help & Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group services. Find answers to common questions, technical documentation, and contact information." />
        <link rel="canonical" href="https://ziontechgroup.com/help" />
      </Head>
      
      <div style={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #0b1220 0%, #1a1f3a 100%)', 
        color: 'white' 
      }}>
        <div style={{ 
          maxWidth: 1200, 
          margin: '0 auto', 
          padding: '40px 20px' 
        }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <h1 style={{ 
              fontSize: '3rem', 
              fontWeight: 800, 
              marginBottom: 20, 
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', 
              WebkitBackgroundClip: 'text', 
              WebkitTextFillColor: 'transparent' 
            }}>
              Help & Support
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Find answers to your questions and get the support you need.
            </p>
          </div>

          {/* Search */}
          <div style={{ 
            background: 'rgba(255, 255, 255, 0.1)', 
            padding: 30, 
            borderRadius: 12, 
            marginBottom: 40 
          }}>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                placeholder="Search for help articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '15px 20px',
                  fontSize: '1.1rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: 8,
                  color: 'white',
                  outline: 'none'
                }}
              />
              <span style={{ 
                position: 'absolute', 
                right: 15, 
                top: '50%', 
                transform: 'translateY(-50%)',
                fontSize: '1.2rem'
              }}>
                🔍
              </span>
            </div>
          </div>

          {/* Categories */}
          <div style={{ marginBottom: 60 }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 30 }}>
              Help Categories
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: 20 
            }}>
              {helpCategories.map((category, index) => (
                <div 
                  key={index}
                  onClick={() => setSelectedCategory(selectedCategory === category.title ? null : category.title)}
                  style={{ 
                    background: 'rgba(59, 130, 246, 0.1)', 
                    padding: 25, 
                    borderRadius: 12, 
                    border: '1px solid rgba(59, 130, 246, 0.2)', 
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{ fontSize: '2rem', marginBottom: 15 }}>
                    {category.icon}
                  </div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: 10 }}>
                    {category.title}
                  </h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
                    {category.articles.length} articles
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Articles */}
          <div style={{ marginBottom: 60 }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 30 }}>
              {selectedCategory ? `${selectedCategory} Articles` : 'All Articles'}
            </h2>
            <div style={{ display: 'grid', gap: 20 }}>
              {filteredArticles.map((article, index) => (
                <div 
                  key={index}
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.05)', 
                    padding: 25, 
                    borderRadius: 12, 
                    border: '1px solid rgba(255, 255, 255, 0.1)' 
                  }}
                >
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: 10 }}>
                    {article.title}
                  </h3>
                  <p style={{ color: '#94a3b8', fontSize: '1rem' }}>
                    {article.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div style={{ marginBottom: 60 }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 30 }}>
              Frequently Asked Questions
            </h2>
            <div style={{ display: 'grid', gap: 20 }}>
              {faqItems.map((item, index) => (
                <div 
                  key={index}
                  style={{ 
                    background: 'rgba(59, 130, 246, 0.1)', 
                    padding: 25, 
                    borderRadius: 12, 
                    border: '1px solid rgba(59, 130, 246, 0.2)' 
                  }}
                >
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: 10 }}>
                    {item.question}
                  </h3>
                  <p style={{ color: '#94a3b8', fontSize: '1rem' }}>
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Methods */}
          <div style={{ marginBottom: 60 }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 30 }}>
              Contact Support
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: 20 
            }}>
              {contactMethods.map((method, index) => (
                <div 
                  key={index}
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.05)', 
                    padding: 25, 
                    borderRadius: 12, 
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ fontSize: '2rem', marginBottom: 15 }}>
                    {method.icon}
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: 10 }}>
                    {method.method}
                  </h3>
                  <p style={{ color: '#3b82f6', fontSize: '1rem', marginBottom: 5 }}>
                    {method.details}
                  </p>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
                    {method.availability}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div style={{ 
            background: 'rgba(59, 130, 246, 0.1)', 
            padding: 40, 
            borderRadius: 12, 
            border: '1px solid rgba(59, 130, 246, 0.2)',
            textAlign: 'center'
          }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 20 }}>
              Still Need Help?
            </h2>
            <p style={{ fontSize: '1.1rem', marginBottom: 30, color: '#94a3b8' }}>
              Can't find what you're looking for? Contact us directly.
            </p>
            <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link 
                href="/contact" 
                style={{ 
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', 
                  color: 'white', 
                  padding: '15px 30px', 
                  textDecoration: 'none', 
                  borderRadius: 8, 
                  fontSize: '1.1rem', 
                  fontWeight: 600 
                }}
              >
                Contact Us
              </Link>
              <Link 
                href="/schedule-demo" 
                style={{ 
                  background: 'transparent', 
                  color: 'white', 
                  padding: '15px 30px', 
                  textDecoration: 'none', 
                  borderRadius: 8, 
                  fontSize: '1.1rem', 
                  fontWeight: 600, 
                  border: '2px solid rgba(59, 130, 246, 0.3)' 
                }}
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}