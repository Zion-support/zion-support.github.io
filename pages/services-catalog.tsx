import { useState } from 'react';
import Head from 'next/head';

export default function ServicesCatalog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      id: 1,
      name: 'Cloud Cost Guard (FinOps Assistant)',
      category: 'micro-saas',
      description: 'Anomaly detection rightsizing, forecasting and budget guardrails across AWS/Azure/GCP.',
      pricing: '$299–$1499/month',
      rating: 4.9,
      delivery: '2-4 weeks',
      features: ['Anomaly Detection', 'Cost Optimization', 'Budget Alerts', 'Multi-Cloud Support']
    },
    {
      id: 2,
      name: 'LLM Evaluation & Safety Suite',
      category: 'ai-services',
      description: 'Prompt evaluation bias/toxicity checks, jailbreak tests and guardrail policies.',
      pricing: '$799–$3500/month',
      rating: 4.8,
      delivery: '3-6 weeks',
      features: ['Bias Detection', 'Safety Testing', 'Prompt Optimization', 'Compliance Monitoring']
    },
    {
      id: 3,
      name: 'Customer Feedback & NPS Micro-App',
      category: 'micro-saas',
      description: 'Embed surveys analyze sentiment and route issues to the right team automatically.',
      pricing: '$149–$799/month',
      rating: 4.7,
      delivery: '1-3 weeks',
      features: ['Survey Builder', 'Sentiment Analysis', 'Auto-Routing', 'Analytics Dashboard']
    },
    {
      id: 4,
      name: 'API Rate Limiter & Analytics',
      category: 'micro-saas',
      description: 'Intelligent rate limiting usage analytics, and API monetization for SaaS platforms.',
      pricing: '$199–$999/month',
      rating: 4.6,
      delivery: '2-4 weeks',
      features: ['Rate Limiting', 'Usage Analytics', 'Monetization', 'Security Monitoring']
    },
    {
      id: 5,
      name: 'Smart Document Processing',
      category: 'ai-services',
      description: 'AI-powered OCR data extraction, and document workflow automation for businesses.',
      pricing: '$399–$1999/month',
      rating: 4.8,
      delivery: '4-8 weeks',
      features: ['OCR Technology', 'Data Extraction', 'Workflow Automation', 'Integration APIs']
    },
    {
      id: 6,
      name: 'Social Media Scheduler Pro',
      category: 'micro-saas',
      description: 'Multi-platform scheduling content optimization, and engagement analytics.',
      pricing: '$99–$499/month',
      rating: 4.5,
      delivery: '1-2 weeks',
      features: ['Multi-Platform', 'Content Optimization', 'Analytics', 'Auto-Posting']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'micro-saas', name: 'Micro SaaS' },
    { id: 'ai-services', name: 'AI Services' },
    { id: 'it-services', name: 'IT Services' },
    { id: 'cloud', name: 'Cloud Solutions' },
    { id: 'security', name: 'Cybersecurity' }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Head>
        <title>Services Catalog - Zion Tech Group</title>
        <meta name="description" content="Browse our comprehensive catalog of technology services including AI solutions, micro SaaS products, and IT services." />
        <meta name="keywords" content="services catalog, AI services, micro SaaS, IT solutions, technology services" />
        <link rel="canonical" href="https://ziontechgroup.com/services-catalog" />
        <meta property="og:title" content="Services Catalog - Zion Tech Group" />
        <meta property="og:description" content="Browse our comprehensive catalog of technology services including AI solutions, micro SaaS products, and IT services." />
        <meta property="og:url" content="https://ziontechgroup.com/services-catalog" />
        <meta property="og:type" content="website" />
      </Head>

      <div style={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #0b1220 0%, #1a1f3a 100%)', 
        color: 'white' 
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 20px' }}>
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
              Services Catalog
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: 600, margin: '0 auto' }}>
              Explore our comprehensive portfolio of technology solutions designed to accelerate your digital transformation.
            </p>
          </div>

          {/* Search and Filter */}
          <div style={{ 
            background: 'rgba(255, 255, 255, 0.1)', 
            padding: 30, 
            borderRadius: 12, 
            border: '1px solid rgba(255, 255, 255, 0.2)',
            marginBottom: 40
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '15px 20px 15px 50px',
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
                  left: 15, 
                  top: '50%', 
                  transform: 'translateY(-50%)',
                  fontSize: '1.2rem'
                }}>
                  🔍
                </span>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    style={{
                      padding: '8px 16px',
                      background: selectedCategory === category.id 
                        ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)' 
                        : 'rgba(255, 255, 255, 0.1)',
                      color: 'white',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: 20,
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: 30 
          }}>
            {filteredServices.map((service) => (
              <div 
                key={service.id}
                style={{ 
                  background: 'rgba(255, 255, 255, 0.05)', 
                  padding: 30, 
                  borderRadius: 12, 
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ marginBottom: 20 }}>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'flex-start', 
                    marginBottom: 15 
                  }}>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: 8 }}>
                      {service.name}
                    </h3>
                    <div style={{ 
                      background: 'rgba(59, 130, 246, 0.2)', 
                      color: '#3b82f6', 
                      padding: '4px 8px', 
                      borderRadius: 12, 
                      fontSize: '0.8rem', 
                      fontWeight: 600 
                    }}>
                      {service.category}
                    </div>
                  </div>
                  
                  <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: 1.6, marginBottom: 15 }}>
                    {service.description}
                  </p>
                  
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    marginBottom: 20 
                  }}>
                    <span style={{ fontSize: '1.1rem', fontWeight: 600, color: '#10b981' }}>
                      {service.pricing}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                      <span style={{ fontSize: '1rem' }}>⭐</span>
                      <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                        {service.rating}
                      </span>
                    </div>
                  </div>
                </div>

                <div style={{ marginBottom: 20 }}>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: 10, color: '#e2e8f0' }}>
                    Key Features:
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {service.features.map((feature, index) => (
                      <span 
                        key={index}
                        style={{ 
                          background: 'rgba(59, 130, 246, 0.1)', 
                          color: '#3b82f6', 
                          padding: '4px 8px', 
                          borderRadius: 12, 
                          fontSize: '0.8rem', 
                          fontWeight: 500 
                        }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  paddingTop: 20,
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                    Delivery: {service.delivery}
                  </span>
                  <button style={{
                    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                    color: 'white',
                    padding: '8px 16px',
                    border: 'none',
                    borderRadius: 6,
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-gray-300 mb-6">Try adjusting your search terms or filters</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}