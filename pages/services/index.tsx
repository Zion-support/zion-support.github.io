import Head from 'next/head';
import Link from 'next/link';
import { NextPage } from 'next';

const Services: NextPage = () => {
  const serviceCategories = [
    {
      title: "AI & Machine Learning Services",
      description: "Cutting-edge AI solutions to transform your business",
      services: [
        { name: "AI Model Development", href: "/services/ai-model-development", price: "Starting at $2,500/month" },
        { name: "Chatbot Development", href: "/services/ai-chatbot-development", price: "Starting at $1,200/month" },
        { name: "Predictive Analytics", href: "/services/predictive-analytics", price: "Starting at $3,000/month" },
        { name: "Computer Vision", href: "/services/computer-vision", price: "Starting at $4,000/month" },
        { name: "Natural Language Processing", href: "/services/nlp-services", price: "Starting at $2,800/month" }
      ]
    },
    {
      title: "Cloud & Infrastructure Services",
      description: "Scalable cloud solutions for modern businesses",
      services: [
        { name: "Cloud Migration", href: "/services/cloud-migration", price: "Starting at $5,000/project" },
        { name: "DevOps Implementation", href: "/services/devops-implementation", price: "Starting at $3,500/month" },
        { name: "Container Orchestration", href: "/services/container-orchestration", price: "Starting at $2,000/month" },
        { name: "Infrastructure as Code", href: "/services/infrastructure-as-code", price: "Starting at $1,800/month" }
      ]
    },
    {
      title: "Cybersecurity Services",
      description: "Comprehensive security solutions to protect your business",
      services: [
        { name: "Security Audit", href: "/services/security-audit", price: "Starting at $2,500/audit" },
        { name: "Penetration Testing", href: "/services/penetration-testing", price: "Starting at $3,000/test" },
        { name: "Security Monitoring", href: "/services/security-monitoring", price: "Starting at $1,500/month" },
        { name: "Compliance Consulting", href: "/services/compliance-consulting", price: "Starting at $200/hour" }
      ]
    },
    {
      title: "Blockchain & Web3 Services",
      description: "Next-generation blockchain solutions",
      services: [
        { name: "Smart Contract Development", href: "/services/smart-contract-development", price: "Starting at $4,000/project" },
        { name: "DeFi Platform Development", href: "/services/defi-platform", price: "Starting at $8,000/project" },
        { name: "NFT Marketplace Development", href: "/services/nft-marketplace", price: "Starting at $8,000/project" },
        { name: "Cryptocurrency Wallet Development", href: "/services/crypto-wallet", price: "Starting at $6,000/project" }
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including AI, cloud, cybersecurity, and blockchain solutions." />
      </Head>
      
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 'bold', 
          marginBottom: '2rem',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Our Services
        </h1>
        
        <p style={{ 
          fontSize: '1.125rem', 
          color: '#6b7280', 
          textAlign: 'center', 
          marginBottom: '3rem',
          maxWidth: '600px',
          margin: '0 auto 3rem auto'
        }}>
          We offer comprehensive technology solutions to help your business thrive in the digital age.
        </p>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          {serviceCategories.map((category, index) => (
            <div key={index} style={{
              backgroundColor: 'white',
              borderRadius: '1rem',
              padding: '2rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e5e7eb'
            }}>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600', 
                marginBottom: '1rem',
                color: '#1f2937'
              }}>
                {category.title}
              </h3>
              
              <p style={{ 
                color: '#6b7280', 
                marginBottom: '1.5rem',
                lineHeight: '1.6'
              }}>
                {category.description}
              </p>
              
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {category.services.map((service, serviceIndex) => (
                  <li key={serviceIndex} style={{ 
                    marginBottom: '0.75rem',
                    padding: '0.75rem',
                    backgroundColor: '#f9fafb',
                    borderRadius: '0.5rem',
                    border: '1px solid #e5e7eb'
                  }}>
                    <Link href={service.href} style={{
                      textDecoration: 'none',
                      color: '#3b82f6',
                      fontWeight: '500'
                    }}>
                      {service.name}
                    </Link>
                    <div style={{ 
                      fontSize: '0.875rem', 
                      color: '#6b7280', 
                      marginTop: '0.25rem' 
                    }}>
                      {service.price}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ 
          textAlign: 'center', 
          marginTop: '3rem',
          padding: '2rem',
          backgroundColor: '#f8fafc',
          borderRadius: '1rem',
          border: '1px solid #e2e8f0'
        }}>
          <h2 style={{ 
            fontSize: '1.875rem', 
            fontWeight: '600', 
            marginBottom: '1rem',
            color: '#1f2937'
          }}>
            Ready to Get Started?
          </h2>
          <p style={{ 
            color: '#6b7280', 
            marginBottom: '1.5rem',
            fontSize: '1.125rem'
          }}>
            Contact us today to discuss your project requirements and get a custom quote.
          </p>
          <Link href="/contact" style={{
            display: 'inline-block',
            backgroundColor: '#3b82f6',
            color: 'white',
            padding: '0.75rem 2rem',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            fontWeight: '600',
            transition: 'background-color 0.2s'
          }}>
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default Services;