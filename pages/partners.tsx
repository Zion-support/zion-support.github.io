import Link from 'next/link';
import Head from 'next/head';

export default function Partners() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  };

  const partnerCategories = [
    {
      title: "Technology Partners",
      description: "Leading technology companies that provide the foundation for our solutions",
      partners: [
        { name: "Microsoft Azure", logo: "🔷", description: "Cloud infrastructure and AI services" },
        { name: "Amazon Web Services", logo: "☁️", description: "Cloud computing and machine learning" },
        { name: "Google Cloud", logo: "🌐", description: "AI and data analytics platforms" },
        { name: "IBM", logo: "🔵", description: "Quantum computing and enterprise solutions" }
      ]
    },
    {
      title: "Solution Partners",
      description: "Companies that help us deliver comprehensive solutions to our clients",
      partners: [
        { name: "Salesforce", logo: "⚡", description: "CRM and business automation" },
        { name: "ServiceNow", logo: "🔧", description: "IT service management" },
        { name: "Splunk", logo: "📊", description: "Data analytics and monitoring" },
        { name: "Cisco", logo: "🌐", description: "Networking and security solutions" }
      ]
    },
    {
      title: "Channel Partners",
      description: "Resellers and integrators who help us reach new markets",
      partners: [
        { name: "CDW", logo: "💼", description: "Technology solutions provider" },
        { name: "Insight", logo: "🔍", description: "Digital transformation services" },
        { name: "SHI", logo: "🛡️", description: "Enterprise technology solutions" },
        { name: "Softchoice", logo: "💻", description: "Cloud and software solutions" }
      ]
    }
  ];

  const partnershipBenefits = [
    "Access to cutting-edge technology and resources",
    "Joint go-to-market opportunities",
    "Technical training and certification programs",
    "Co-marketing and lead sharing",
    "Dedicated partner support team",
    "Competitive pricing and incentives"
  ];

  return (
    <>
      <Head>
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
        <meta name="description" content="Discover Zion Tech Group's strategic partnerships with leading technology companies. Join our partner ecosystem for mutual growth and success." />
        <meta name="keywords" content="partners, partnerships, technology partners, solution partners, channel partners, strategic alliances" />
        <link rel="canonical" href={`${contact.site}/partners`} />
        <meta property="og:title" content="Partners - Zion Tech Group | Strategic Technology Partnerships" />
        <meta property="og:description" content="Discover Zion Tech Group's strategic partnerships with leading technology companies. Join our partner ecosystem for mutual growth and success." />
        <meta property="og:url" content={`${contact.site}/partners`} />
        <meta property="og:type" content="website" />
      </Head>

      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0b1220 0%, #1a1f3a 100%)', color: 'white' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 20px' }}>
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
            <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: 600, margin: '0 auto' }}>
              Strategic partnerships with leading technology companies to deliver innovative solutions and drive mutual success.
            </p>
          </div>

          <div style={{ marginBottom: 80 }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 40, textAlign: 'center' }}>
              Partnership Benefits
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
              {partnershipBenefits.map((benefit, index) => (
                <div key={index} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 15,
                  padding: 20,
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: 8,
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <div style={{
                    width: 8,
                    height: 8,
                    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                    borderRadius: '50%'
                  }} />
                  <span style={{ fontSize: '1rem' }}>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gap: 60 }}>
            {partnerCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 15 }}>
                  {category.title}
                </h2>
                <p style={{ color: '#94a3b8', fontSize: '1.1rem', marginBottom: 30 }}>
                  {category.description}
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
                  {category.partners.map((partner, partnerIndex) => (
                    <div key={partnerIndex} style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: 12,
                      padding: 25,
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
                      <div style={{ display: 'flex', alignItems: 'center', gap: 15, marginBottom: 15 }}>
                        <div style={{ fontSize: '2rem' }}>{partner.logo}</div>
                        <h3 style={{ fontSize: '1.3rem', fontWeight: 700 }}>
                          {partner.name}
                        </h3>
                      </div>
                      <p style={{ color: '#94a3b8', lineHeight: 1.5 }}>
                        {partner.description}
                      </p>
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
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 20 }}>
              Become a Partner
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#94a3b8', marginBottom: 30, maxWidth: 600, margin: '0 auto 30px' }}>
              Join our growing partner ecosystem and unlock new opportunities for growth, innovation, and success in the technology industry.
            </p>
            <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                color: 'white',
                padding: '15px 30px',
                textDecoration: 'none',
                borderRadius: 8,
                fontSize: '1.1rem',
                fontWeight: 600,
                display: 'inline-block'
              }}>
                Partner With Us
              </Link>
              <Link href="/contact" style={{
                background: 'transparent',
                color: 'white',
                padding: '15px 30px',
                textDecoration: 'none',
                borderRadius: 8,
                fontSize: '1.1rem',
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
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}