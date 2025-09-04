import Link from 'next/link';
import Head from 'next/head';

export default function Marketplace() {
const contact = { phone: '+1 302 464 0950', email: 'kleber@ziontechgroup.com', address: '364 E Main St STE 1008 Middletown DE 19709', site: 'https://ziontechgroup.com'
  };
  const marketplaceCategories = [
    {
      title: "Products",
      description: "Discover innovative technology products and solutions",
      icon: "🛍️",
      items: [
        { name: "AI-Powered Analytics Platform", price: "Starting at $299/month", category: "AI & Analytics" },
        { name: "Cloud Infrastructure Suite", price: "Starting at $199/month", category: "Cloud Computing" },
        { name: "Cybersecurity Monitoring Tool", price: "Starting at $149/month", category: "Security" },
        { name: "Quantum Computing Simulator", price: "Starting at $499/month", category: "Quantum Computing" }
      ]
    },
    {
      title: "Talent",
      description: "Connect with skilled technology professionals",
      icon: "👥",
      items: [
        { name: "Senior AI/ML Engineers", price: "$120-180/hour", category: "AI & Machine Learning" },
        { name: "Cloud DevOps Specialists", price: "$100-150/hour", category: "Cloud & DevOps" },
        { name: "Cybersecurity Experts", price: "$110-170/hour", category: "Cybersecurity" },
        { name: "Quantum Computing Researchers", price: "$150-250/hour", category: "Quantum Computing" }
      ]
    },
    {
      title: "Equipment",
      description: "Access cutting-edge technology equipment and hardware",
      icon: "🔧",
      items: [
        { name: "High-Performance Servers", price: "Starting at $2,999", category: "Hardware" },
        { name: "Quantum Computing Hardware", price: "Starting at $50,000", category: "Quantum Hardware" },
        { name: "Network Security Appliances", price: "Starting at $1,999", category: "Security Hardware" },
        { name: "Edge Computing Devices", price: "Starting at $499", category: "IoT & Edge" }
      ]
    },
    {
      title: "Services",
      description: "Professional technology services and consulting",
      icon: "⚙️",
      items: [
        { name: "Digital Transformation Consulting", price: "$200-300/hour", category: "Consulting" },
        { name: "Cloud Migration Services", price: "$150-250/hour", category: "Cloud Services" },
        { name: "Security Assessment & Auditing", price: "$180-280/hour", category: "Security Services" },
        { name: "Custom Software Development", price: "$120-200/hour", category: "Development" }
      ]
    }
  ];

  const featuredItems = [
    {
      name: "AI Business Intelligence Suite",
      description: "Comprehensive AI-powered analytics platform for enterprise decision making",
      price: "$299/month",
      category: "AI & Analytics",
      rating: 4.9,
      reviews: 127
    },
    {
      name: "Quantum Algorithm Development",
      description: "Expert quantum computing research and algorithm development services",
      price: "$200/hour",
      category: "Quantum Computing",
      rating: 4.8,
      reviews: 89
    },
    {
      name: "Enterprise Security Platform",
      description: "Advanced cybersecurity monitoring and threat detection system",
      price: "$199/month",
      category: "Cybersecurity",
      rating: 4.9,
      reviews: 156
    }
  ];

  return (
    <>
      <Head>
        <title>Marketplace - Zion Tech Group | Technology Products, Services & Talent</title>
        <meta name="description" content="Explore Zion Tech Group's marketplace for technology products, professional services, skilled talent, and cutting-edge equipment." />
        <meta name="keywords" content="technology marketplace, AI products, cloud services, cybersecurity tools, quantum computing, tech talent, equipment" />
        <link rel="canonical" href={`${contact.site}/marketplace`} />
        <meta property="og:title" content="Marketplace - Zion Tech Group | Technology Products, Services & Talent" />
        <meta property="og:description" content="Explore Zion Tech Group's marketplace for technology products, professional services, skilled talent, and cutting-edge equipment." />
        <meta property="og:url" content={`${contact.site}/marketplace`} />
        <meta property="og:type" content="website" />
      </Head>

      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <h1 style={{ 
              fontSize: '3rem', 
              fontWeight: 800, 
              marginBottom: 20,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Technology Marketplace
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#e2e8f0', maxWidth: 600, margin: '0 auto' }}>
              Discover innovative products, connect with skilled professionals, and access cutting-edge technology solutions all in one place.
            </p>
          </div>

          <div style={{ marginBottom: 80 }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 40, textAlign: 'center', color: 'white' }}>
              Featured Items
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 30 }}>
              {featuredItems.map((item, index) => (
                <div key={index} style={{ 
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: 12, 
                  padding: 30, 
                  border: '1px solid rgba(255, 255, 255, 0.1)', 
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease', 
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  <div style={{ marginBottom: 15 }}>
                    <span style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      padding: '8px 16px',
                      borderRadius: 20,
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: 'white'
                    }}>
                      {item.category}
                    </span>
                  </div>
                  
                  <h3 style={{ 
                    fontSize: '1.2rem', 
                    fontWeight: 700, 
                    marginBottom: 15,
                    color: 'white',
                    lineHeight: 1.3
                  }}>
                    {item.name}
                  </h3>
                  
                  <p style={{ 
                    color: '#e2e8f0',
                    marginBottom: 20, 
                    lineHeight: 1.6,
                    fontSize: '1rem'
                  }}>
                    {item.description}
                  </p>
                  
                  <div style={{ 
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 20
                  }}>
                    <div style={{ 
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>
                      {item.price}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                      <span style={{ color: '#fbbf24' }}>⭐</span>
                      <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                        {item.rating} ({item.reviews} reviews)
                      </span>
                    </div>
                  </div>
                  
                  <Link href="/contact" style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    padding: '12px 24px',
                    textDecoration: 'none',
                    borderRadius: 6,
                    fontSize: '1rem',
                    fontWeight: 600,
                    display: 'block',
                    width: '100%',
                    textAlign: 'center'
                  }}>
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 60 }}>
            {marketplaceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 30 }}>
                  <div style={{ fontSize: '3rem' }}>{category.icon}</div>
                  <div>
                    <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 10, color: 'white' }}>
                      {category.title}
                    </h2>
                    <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>
                      {category.description}
                    </p>
                  </div>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} style={{ 
                      background: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: 12, 
                      padding: 25, 
                      border: '1px solid rgba(255, 255, 255, 0.1)', 
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease', 
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}>
                      <div style={{ marginBottom: 15 }}>
                        <span style={{
                          background: '#3b82f6',
                          padding: '8px 16px',
                          borderRadius: 20,
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          color: 'white'
                        }}>
                          {item.category}
                        </span>
                      </div>
                      
                      <h3 style={{ 
                        fontSize: '1.1rem', 
                        fontWeight: 700, 
                        marginBottom: 10,
                        lineHeight: 1.3,
                        color: 'white'
                      }}>
                        {item.name}
                      </h3>
                      
                      <div style={{ 
                        fontSize: '1rem',
                        fontWeight: 600,
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}>
                        {item.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ 
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: 12,
            padding: 40,
            border: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center',
            marginTop: 80
          }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 20, color: 'white' }}>
              Ready to Explore Our Marketplace?
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#94a3b8', marginBottom: 30, maxWidth: 600, margin: '0 auto 30px' }}>
              Browse our comprehensive marketplace to find the perfect technology solutions, services, and talent for your business needs.
            </p>
            <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '12px 24px',
                textDecoration: 'none',
                borderRadius: 8,
                fontSize: '1rem',
                fontWeight: 600,
                display: 'inline-block'
              }}>
                Browse Marketplace
              </Link>
              <Link href="/request-quote" style={{
                background: 'transparent',
                color: 'white',
                padding: '12px 24px',
                textDecoration: 'none',
                borderRadius: 8,
                fontSize: '1rem',
                fontWeight: 600, 
                display: 'inline-block', 
                border: '2px solid rgba(255, 255, 255, 0.3)', 
                transition: 'border-color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#3b82f6';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              }}>
                Get Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}