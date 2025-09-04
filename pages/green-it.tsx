import Link from 'next/link';
import Head from 'next/head';

export default function GreenIT() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  };

  const greenInitiatives = [
    {
      title: "Energy-Efficient Data Centers",
      description: "Optimize your infrastructure with renewable energy sources and advanced cooling systems",
      icon: "🏢",
      benefits: [
        "40% reduction in energy consumption",
        "100% renewable energy sourcing",
        "Advanced cooling optimization",
        "Carbon-neutral operations"
      ]
    },
    {
      title: "Sustainable Software Development",
      description: "Build applications with minimal environmental impact through efficient coding practices",
      icon: "💻",
      benefits: [
        "Optimized algorithms for efficiency",
        "Minimal resource consumption",
        "Green coding standards",
        "Sustainable architecture design"
      ]
    },
    {
      title: "Cloud Optimization",
      description: "Reduce your carbon footprint with intelligent cloud resource management",
      icon: "☁️",
      benefits: [
        "Smart resource allocation",
        "Automated scaling optimization",
        "Energy-efficient processing",
        "Reduced data transfer costs"
      ]
    },
    {
      title: "E-Waste Management",
      description: "Responsible disposal and recycling of electronic equipment and components",
      icon: "♻️",
      benefits: [
        "Certified e-waste disposal",
        "Equipment refurbishment programs",
        "Component recycling initiatives",
        "Circular economy practices"
      ]
    }
  ];

  const sustainabilityMetrics = [
    { metric: "40%", label: "Energy Reduction", description: "Average energy savings achieved" },
    { metric: "100%", label: "Renewable Energy", description: "Clean energy usage in data centers" },
    { metric: "75%", label: "Waste Reduction", description: "E-waste diverted from landfills" },
    { metric: "60%", label: "Carbon Neutral", description: "Operations achieving carbon neutrality" }
  ];

  const certifications = [
    { name: "ISO 14001", description: "Environmental Management System" },
    { name: "LEED Certified", description: "Leadership in Energy and Environmental Design" },
    { name: "Energy Star", description: "Energy Efficient Products and Services" },
    { name: "Green IT Certification", description: "Sustainable Technology Practices" }
  ];

  return (
    <>
      <Head>
        <title>Green IT - Zion Tech Group | Sustainable Technology Solutions</title>
        <meta name="description" content="Discover Zion Tech Group's commitment to sustainable technology. Green IT solutions, energy-efficient systems, and environmentally responsible practices." />
        <meta name="keywords" content="green IT, sustainable technology, energy efficient, carbon neutral, renewable energy, environmental responsibility" />
        <link rel="canonical" href={`${contact.site}/green-it`} />
        <meta property="og:title" content="Green IT - Zion Tech Group | Sustainable Technology Solutions" />
        <meta property="og:description" content="Discover Zion Tech Group's commitment to sustainable technology. Green IT solutions, energy-efficient systems, and environmentally responsible practices." />
        <meta property="og:url" content={`${contact.site}/green-it`} />
        <meta property="og:type" content="website" />
      </Head>

      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0b1220 0%, #1a1f3a 100%)', color: 'white' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <h1 style={{ 
              fontSize: '3rem', 
              fontWeight: 800, 
              marginBottom: 20,
              background: 'linear-gradient(135deg, #10b981, #059669)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Green IT Solutions
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: 600, margin: '0 auto' }}>
              Committed to sustainable technology practices that reduce environmental impact while delivering exceptional performance and value.
            </p>
          </div>

          <div style={{ marginBottom: 80 }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: 40, textAlign: 'center' }}>
              Our Sustainability Impact
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 30 }}>
              {sustainabilityMetrics.map((item, index) => (
                <div key={index} style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: 12,
                  padding: 30,
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  textAlign: 'center'
                }}>
                  <div style={{ 
                    fontSize: '3rem', 
                    fontWeight: 800, 
                    background: 'linear-gradient(135deg, #10b981, #059669)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    marginBottom: 10
                  }}>
                    {item.metric}
                  </div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 8 }}>
                    {item.label}
                  </h3>
                  <p style={{ color: '#94a3b8', fontSize: '1rem' }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: 80 }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: 40, textAlign: 'center' }}>
              Green IT Initiatives
            </h2>
            <div style={{ display: 'grid', gap: 30 }}>
              {greenInitiatives.map((initiative, index) => (
                <div key={index} style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: 12,
                  padding: 30,
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 20 }}>
                    <div style={{ fontSize: '3rem' }}>{initiative.icon}</div>
                    <div>
                      <h3 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: 10 }}>
                        {initiative.title}
                      </h3>
                      <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>
                        {initiative.description}
                      </p>
                    </div>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 15 }}>
                    {initiative.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 12,
                        padding: 15,
                        background: 'rgba(16, 185, 129, 0.1)',
                        borderRadius: 8,
                        border: '1px solid rgba(16, 185, 129, 0.2)'
                      }}>
                        <div style={{
                          width: 8,
                          height: 8,
                          background: 'linear-gradient(135deg, #10b981, #059669)',
                          borderRadius: '50%'
                        }} />
                        <span style={{ fontSize: '1rem' }}>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: 80 }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: 40, textAlign: 'center' }}>
              Certifications & Standards
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 25 }}>
              {certifications.map((cert, index) => (
                <div key={index} style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: 12,
                  padding: 25,
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  textAlign: 'center',
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
                  <div style={{
                    background: 'linear-gradient(135deg, #10b981, #059669)',
                    color: 'white',
                    padding: '10px 20px',
                    borderRadius: 20,
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    marginBottom: 15,
                    display: 'inline-block'
                  }}>
                    {cert.name}
                  </div>
                  <p style={{ color: '#94a3b8', fontSize: '1rem' }}>
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ 
            background: 'rgba(16, 185, 129, 0.1)',
            borderRadius: 12,
            padding: 40,
            border: '1px solid rgba(16, 185, 129, 0.2)',
            textAlign: 'center'
          }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 20 }}>
              Join Our Green Technology Mission
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#94a3b8', marginBottom: 30, maxWidth: 600, margin: '0 auto 30px' }}>
              Partner with us to implement sustainable technology solutions that benefit your business and the environment.
            </p>
            <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{
                background: 'linear-gradient(135deg, #10b981, #059669)',
                color: 'white',
                padding: '15px 30px',
                textDecoration: 'none',
                borderRadius: 8,
                fontSize: '1.1rem',
                fontWeight: 600,
                display: 'inline-block'
              }}>
                Start Your Green Journey
              </Link>
              <Link href="/request-quote" style={{
                background: 'transparent',
                color: '#10b981',
                padding: '15px 30px',
                textDecoration: 'none',
                borderRadius: 8,
                fontSize: '1.1rem',
                fontWeight: 600,
                display: 'inline-block',
                border: '2px solid #10b981',
                transition: 'background-color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(16, 185, 129, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}>
                Get Green IT Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}