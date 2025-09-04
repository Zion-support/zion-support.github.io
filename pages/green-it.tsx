import Head from 'next/head';
import Link from 'next/link';

export default function GreenIT() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  };

  const greenSolutions = [
    {
      title: "Energy-Efficient Data Centers",
      description: "Design and implement sustainable data center solutions that reduce energy consumption by up to 40%.",
      benefits: ["40% energy reduction", "Renewable energy integration", "Smart cooling systems", "Carbon footprint tracking"],
      icon: "🏢"
    },
    {
      title: "Green Cloud Computing",
      description: "Migrate to environmentally friendly cloud solutions with optimized resource utilization.",
      benefits: ["Carbon-neutral hosting", "Auto-scaling efficiency", "Green energy sourcing", "Resource optimization"],
      icon: "☁️"
    },
    {
      title: "Sustainable Software Development",
      description: "Develop applications with minimal environmental impact through efficient coding practices.",
      benefits: ["Optimized algorithms", "Efficient resource usage", "Green coding standards", "Performance monitoring"],
      icon: "💻"
    },
    {
      title: "E-Waste Management",
      description: "Comprehensive electronic waste management and recycling programs for your organization.",
      benefits: ["Secure data destruction", "Responsible recycling", "Asset tracking", "Compliance reporting"],
      icon: "♻️"
    },
    {
      title: "Smart Building Integration",
      description: "IoT-powered building management systems for optimal energy efficiency and sustainability.",
      benefits: ["Automated energy control", "Real-time monitoring", "Predictive maintenance", "Cost optimization"],
      icon: "🏠"
    },
    {
      title: "Carbon Footprint Analytics",
      description: "Advanced analytics to measure, monitor, and reduce your organization's carbon footprint.",
      benefits: ["Real-time tracking", "Detailed reporting", "Reduction strategies", "Compliance monitoring"],
      icon: "📊"
    }
  ];

  const certifications = [
    { name: "ISO 14001", description: "Environmental Management Systems" },
    { name: "LEED Certified", description: "Leadership in Energy and Environmental Design" },
    { name: "Energy Star", description: "Energy Efficient Products and Buildings" },
    { name: "Green IT Certification", description: "Sustainable Technology Practices" }
  ];

  const stats = [
    { number: "40%", label: "Energy Reduction" },
    { number: "60%", label: "Carbon Footprint Decrease" },
    { number: "85%", label: "Waste Diversion Rate" },
    { number: "100%", label: "Renewable Energy Usage" }
  ];

  return (
    <>
      <Head>
        <title>Green IT Solutions - Zion Tech Group | Sustainable Technology Services</title>
        <meta name="description" content="Transform your IT infrastructure with sustainable, energy-efficient solutions. Reduce carbon footprint and achieve environmental goals with Zion Tech Group's Green IT services." />
        <meta name="keywords" content="green IT, sustainable technology, energy efficient, carbon footprint, environmental IT, green computing, sustainable software" />
        <link rel="canonical" href={`${contact.site}/green-it`} />
        <meta property="og:title" content="Green IT Solutions - Zion Tech Group | Sustainable Technology Services" />
        <meta property="og:description" content="Transform your IT infrastructure with sustainable, energy-efficient solutions. Reduce carbon footprint and achieve environmental goals with Zion Tech Group's Green IT services." />
        <meta property="og:url" content={`${contact.site}/green-it`} />
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
              background: 'linear-gradient(135deg, #10b981, #059669)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Green IT Solutions
            </h1>
            <p style={{ 
              fontSize: '1.2rem', 
              opacity: 0.8, 
              maxWidth: 600, 
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Transform your technology infrastructure with sustainable, energy-efficient solutions 
              that reduce environmental impact while improving performance.
            </p>
          </div>

          {/* Stats */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: 32,
            marginBottom: 80
          }}>
            {stats.map((stat, index) => (
              <div key={index} style={{
                background: 'rgba(16, 185, 129, 0.1)',
                borderRadius: 16,
                padding: 32,
                border: '1px solid rgba(16, 185, 129, 0.2)',
                textAlign: 'center'
              }}>
                <div style={{ 
                  fontSize: '3rem', 
                  fontWeight: 800, 
                  color: '#10b981',
                  marginBottom: 8
                }}>
                  {stat.number}
                </div>
                <div style={{ 
                  fontSize: '1.1rem', 
                  fontWeight: 600,
                  opacity: 0.9
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Green Solutions */}
          <div style={{ marginBottom: 80 }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 700, 
              textAlign: 'center',
              marginBottom: 40
            }}>
              Our Green IT Solutions
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
              gap: 32
            }}>
              {greenSolutions.map((solution, index) => (
                <div key={index} style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: 16,
                  padding: 32,
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer'
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
                    fontSize: '3rem', 
                    marginBottom: 20,
                    textAlign: 'center'
                  }}>
                    {solution.icon}
                  </div>
                  
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: 700, 
                    marginBottom: 16,
                    textAlign: 'center'
                  }}>
                    {solution.title}
                  </h3>
                  
                  <p style={{ 
                    opacity: 0.8, 
                    lineHeight: 1.6, 
                    marginBottom: 24,
                    fontSize: '1rem',
                    textAlign: 'center'
                  }}>
                    {solution.description}
                  </p>
                  
                  <ul style={{ listStyle: 'none', padding: 0, marginBottom: 24 }}>
                    {solution.benefits.map((benefit, benefitIndex) => (
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
                  
                  <div style={{ textAlign: 'center' }}>
                    <Link href="/contact" style={{
                      background: 'linear-gradient(135deg, #10b981, #059669)',
                      color: 'white',
                      padding: '10px 20px',
                      borderRadius: 8,
                      textDecoration: 'none',
                      fontWeight: 600,
                      fontSize: '0.9rem'
                    }}>
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div style={{ marginBottom: 80 }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 700, 
              textAlign: 'center',
              marginBottom: 40
            }}>
              Certifications & Standards
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: 24
            }}>
              {certifications.map((cert, index) => (
                <div key={index} style={{
                  background: 'rgba(16, 185, 129, 0.1)',
                  borderRadius: 12,
                  padding: 24,
                  border: '1px solid rgba(16, 185, 129, 0.2)',
                  textAlign: 'center'
                }}>
                  <h4 style={{ 
                    fontSize: '1.3rem', 
                    fontWeight: 700, 
                    marginBottom: 8,
                    color: '#10b981'
                  }}>
                    {cert.name}
                  </h4>
                  <p style={{ 
                    opacity: 0.8, 
                    fontSize: '0.9rem'
                  }}>
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Environmental Impact */}
          <div style={{
            background: 'rgba(16, 185, 129, 0.1)',
            borderRadius: 16,
            padding: 40,
            border: '1px solid rgba(16, 185, 129, 0.2)',
            marginBottom: 60
          }}>
            <h3 style={{ 
              fontSize: '1.8rem', 
              fontWeight: 700, 
              marginBottom: 16,
              textAlign: 'center',
              color: '#10b981'
            }}>
              Environmental Impact
            </h3>
            <p style={{ 
              opacity: 0.8, 
              marginBottom: 24,
              fontSize: '1.1rem',
              textAlign: 'center',
              maxWidth: 600,
              margin: '0 auto 24px auto'
            }}>
              Our Green IT solutions have helped organizations reduce their environmental footprint 
              while improving operational efficiency and reducing costs.
            </p>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: 24
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: 8 }}>🌱</div>
                <div style={{ fontWeight: 600, marginBottom: 4 }}>Carbon Neutral</div>
                <div style={{ opacity: 0.8, fontSize: '0.9rem' }}>100% renewable energy</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: 8 }}>♻️</div>
                <div style={{ fontWeight: 600, marginBottom: 4 }}>Zero Waste</div>
                <div style={{ opacity: 0.8, fontSize: '0.9rem' }}>Comprehensive recycling</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: 8 }}>💡</div>
                <div style={{ fontWeight: 600, marginBottom: 4 }}>Energy Efficient</div>
                <div style={{ opacity: 0.8, fontSize: '0.9rem' }}>Optimized consumption</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
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
              Start Your Green IT Journey
            </h3>
            <p style={{ 
              opacity: 0.8, 
              marginBottom: 24,
              fontSize: '1.1rem',
              maxWidth: 600,
              margin: '0 auto 24px auto'
            }}>
              Join the sustainable technology revolution. Let us help you reduce your environmental 
              impact while improving your IT infrastructure performance and efficiency.
            </p>
            <div style={{ 
              display: 'flex', 
              gap: 16, 
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <Link href="/contact" style={{
                background: 'linear-gradient(135deg, #10b981, #059669)',
                color: 'white',
                padding: '12px 24px',
                borderRadius: 8,
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1rem'
              }}>
                Get Green IT Assessment
              </Link>
              <Link href="/request-quote" style={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                padding: '12px 24px',
                borderRadius: 8,
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1rem'
              }}>
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}