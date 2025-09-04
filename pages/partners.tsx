import Head from 'next/head';
import Link from 'next/link';

export default function Partners() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  };

  const partners = [
    {
      name: "Microsoft",
      category: "Cloud & AI",
      description: "Strategic partnership for Azure cloud services and AI solutions",
      logo: "🏢"
    },
    {
      name: "Amazon Web Services",
      category: "Cloud Infrastructure",
      description: "Premier partner for AWS cloud computing and machine learning services",
      logo: "☁️"
    },
    {
      name: "Google Cloud",
      category: "AI & Analytics",
      description: "Partner for Google Cloud AI and data analytics solutions",
      logo: "🔍"
    },
    {
      name: "IBM",
      category: "Quantum Computing",
      description: "Collaboration on quantum computing research and development",
      logo: "⚛️"
    },
    {
      name: "NVIDIA",
      category: "AI Hardware",
      description: "Partnership for GPU-accelerated AI and machine learning solutions",
      logo: "🎮"
    },
    {
      name: "Salesforce",
      category: "CRM & Automation",
      description: "Integration partner for customer relationship management solutions",
      logo: "📊"
    }
  ];

  const partnershipTypes = [
    {
      title: "Technology Partners",
      description: "Strategic alliances with leading technology providers to deliver cutting-edge solutions.",
      benefits: [
        "Access to latest technologies and platforms",
        "Joint go-to-market strategies",
        "Technical support and training",
        "Co-marketing opportunities"
      ]
    },
    {
      title: "Solution Partners",
      description: "Collaborative partnerships to develop integrated solutions for complex business challenges.",
      benefits: [
        "Custom solution development",
        "Shared expertise and resources",
        "Expanded market reach",
        "Innovation collaboration"
      ]
    },
    {
      title: "Channel Partners",
      description: "Distribution partnerships to expand our reach and serve customers globally.",
      benefits: [
        "Reseller opportunities",
        "Training and certification programs",
        "Marketing support",
        "Competitive pricing"
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
        <meta name="description" content="Discover our strategic partnerships with leading technology companies. Join our partner ecosystem and grow your business with Zion Tech Group." />
        <meta name="keywords" content="partners, partnerships, technology partners, strategic alliances, Microsoft, AWS, Google Cloud, IBM, NVIDIA" />
        <link rel="canonical" href={`${contact.site}/partners`} />
        <meta property="og:title" content="Partners - Zion Tech Group | Strategic Technology Partnerships" />
        <meta property="og:description" content="Discover our strategic partnerships with leading technology companies. Join our partner ecosystem and grow your business with Zion Tech Group." />
        <meta property="og:url" content={`${contact.site}/partners`} />
        <meta property="og:type" content="website" />
      </Head>

      <div style={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #0b1220 0%, #1e293b 100%)',
        color: 'white',
        paddingTop: '80px'
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
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Our Partners
            </h1>
            <p style={{ 
              fontSize: '1.2rem', 
              opacity: 0.8, 
              maxWidth: 600, 
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Strategic partnerships with industry leaders to deliver innovative solutions 
              and drive digital transformation for our clients.
            </p>
          </div>

          {/* Partnership Types */}
          <div style={{ marginBottom: 80 }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 700, 
              textAlign: 'center',
              marginBottom: 40
            }}>
              Partnership Types
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
              gap: 32
            }}>
              {partnershipTypes.map((type, index) => (
                <div key={index} style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: 16,
                  padding: 32,
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: 700, 
                    marginBottom: 16 
                  }}>
                    {type.title}
                  </h3>
                  <p style={{ 
                    opacity: 0.8, 
                    lineHeight: 1.6, 
                    marginBottom: 24,
                    fontSize: '1rem'
                  }}>
                    {type.description}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 12,
                        marginBottom: 8,
                        fontSize: '0.9rem'
                      }}>
                        <div style={{ color: '#10b981', fontSize: '1rem' }}>✓</div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Strategic Partners */}
          <div style={{ marginBottom: 80 }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 700, 
              textAlign: 'center',
              marginBottom: 40
            }}>
              Strategic Partners
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: 32
            }}>
              {partners.map((partner, index) => (
                <div key={index} style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: 16,
                  padding: 32,
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  <div style={{ 
                    fontSize: '4rem', 
                    marginBottom: 20 
                  }}>
                    {partner.logo}
                  </div>
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: 700, 
                    marginBottom: 8 
                  }}>
                    {partner.name}
                  </h3>
                  <div style={{
                    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: 20,
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    marginBottom: 16,
                    display: 'inline-block'
                  }}>
                    {partner.category}
                  </div>
                  <p style={{ 
                    opacity: 0.8, 
                    lineHeight: 1.6,
                    fontSize: '0.9rem'
                  }}>
                    {partner.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Become a Partner */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: 16,
            padding: 40,
            textAlign: 'center',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <h3 style={{ 
              fontSize: '1.8rem', 
              fontWeight: 700, 
              marginBottom: 16 
            }}>
              Become a Partner
            </h3>
            <p style={{ 
              opacity: 0.8, 
              marginBottom: 24,
              fontSize: '1.1rem',
              maxWidth: 600,
              margin: '0 auto 24px auto'
            }}>
              Join our partner ecosystem and unlock new opportunities for growth. 
              We're looking for innovative companies that share our vision of transforming 
              businesses through technology.
            </p>
            <div style={{ 
              display: 'flex', 
              gap: 16, 
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <Link href="/contact" style={{
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                color: 'white',
                padding: '12px 24px',
                borderRadius: 8,
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1rem'
              }}>
                Partner with Us
              </Link>
              <a href="mailto:partners@ziontechgroup.com" style={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                padding: '12px 24px',
                borderRadius: 8,
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1rem'
              }}>
                Email Partners Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}