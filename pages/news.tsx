import Head from 'next/head';
import Link from 'next/link';

export default function News() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  };

  const newsItems = [
    {
      id: 1,
      title: "Zion Tech Group Launches Revolutionary Quantum Computing Platform",
      excerpt: "Our new quantum computing platform is set to revolutionize how businesses approach complex problem-solving and data analysis.",
      date: "2025-01-26",
      category: "Product Launch",
      readTime: "3 min read",
      featured: true
    },
    {
      id: 2,
      title: "Partnership with Microsoft Expands AI Capabilities",
      excerpt: "Strategic partnership with Microsoft brings advanced AI solutions to our clients, enhancing automation and decision-making processes.",
      date: "2025-01-25",
      category: "Partnership",
      readTime: "2 min read",
      featured: false
    },
    {
      id: 3,
      title: "Zion Tech Group Recognized as Top AI Innovation Company",
      excerpt: "Industry recognition for our groundbreaking work in artificial intelligence and machine learning solutions.",
      date: "2025-01-24",
      category: "Awards",
      readTime: "2 min read",
      featured: false
    },
    {
      id: 4,
      title: "New Micro SaaS Products Drive Digital Transformation",
      excerpt: "Launch of five new micro SaaS products designed to accelerate digital transformation for small and medium businesses.",
      date: "2025-01-23",
      category: "Product Launch",
      readTime: "4 min read",
      featured: false
    },
    {
      id: 5,
      title: "Cybersecurity Solutions Enhanced with AI-Powered Threat Detection",
      excerpt: "Advanced AI algorithms now power our cybersecurity solutions, providing real-time threat detection and response.",
      date: "2025-01-22",
      category: "Technology",
      readTime: "3 min read",
      featured: false
    },
    {
      id: 6,
      title: "Zion Tech Group Expands Global Operations",
      excerpt: "Opening new offices in Europe and Asia to better serve our international clients and partners.",
      date: "2025-01-21",
      category: "Company News",
      readTime: "2 min read",
      featured: false
    }
  ];

  const categories = ["All", "Product Launch", "Partnership", "Awards", "Technology", "Company News"];

  return (
    <>
      <Head>
        <title>News - Zion Tech Group | Latest Updates & Company News</title>
        <meta name="description" content="Stay updated with the latest news, product launches, partnerships, and company updates from Zion Tech Group." />
        <meta name="keywords" content="news, updates, product launch, partnerships, awards, technology news, company news" />
        <link rel="canonical" href={`${contact.site}/news`} />
        <meta property="og:title" content="News - Zion Tech Group | Latest Updates & Company News" />
        <meta property="og:description" content="Stay updated with the latest news, product launches, partnerships, and company updates from Zion Tech Group." />
        <meta property="og:url" content={`${contact.site}/news`} />
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
              Latest News
            </h1>
            <p style={{ 
              fontSize: '1.2rem', 
              opacity: 0.8, 
              maxWidth: 600, 
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Stay informed about our latest product launches, partnerships, 
              awards, and company milestones.
            </p>
          </div>

          {/* Featured News */}
          {newsItems.filter(item => item.featured).map((item) => (
            <div key={item.id} style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: 16,
              padding: 40,
              border: '1px solid rgba(255, 255, 255, 0.1)',
              marginBottom: 40,
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: 20,
                right: 20,
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                color: 'white',
                padding: '4px 12px',
                borderRadius: 20,
                fontSize: '0.8rem',
                fontWeight: 600
              }}>
                Featured
              </div>
              
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'flex-start',
                marginBottom: 20,
                flexWrap: 'wrap',
                gap: 16
              }}>
                <div style={{ flex: 1, minWidth: 300 }}>
                  <div style={{
                    background: 'rgba(59, 130, 246, 0.2)',
                    color: '#93c5fd',
                    padding: '4px 12px',
                    borderRadius: 20,
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    display: 'inline-block',
                    marginBottom: 12
                  }}>
                    {item.category}
                  </div>
                  <h2 style={{ 
                    fontSize: '2rem', 
                    fontWeight: 700, 
                    marginBottom: 16,
                    lineHeight: 1.3
                  }}>
                    {item.title}
                  </h2>
                  <p style={{ 
                    opacity: 0.8, 
                    lineHeight: 1.6, 
                    marginBottom: 20,
                    fontSize: '1.1rem'
                  }}>
                    {item.excerpt}
                  </p>
                </div>
              </div>
              
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 16
              }}>
                <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
                  <span style={{ opacity: 0.6, fontSize: '0.9rem' }}>
                    {new Date(item.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <span style={{ opacity: 0.6, fontSize: '0.9rem' }}>
                    {item.readTime}
                  </span>
                </div>
                <Link href={`/news/${item.id}`} style={{
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                  color: 'white',
                  padding: '10px 20px',
                  borderRadius: 8,
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '0.9rem'
                }}>
                  Read Full Story
                </Link>
              </div>
            </div>
          ))}

          {/* News Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: 32,
            marginBottom: 60
          }}>
            {newsItems.filter(item => !item.featured).map((item) => (
              <article key={item.id} style={{
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
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  marginBottom: 16
                }}>
                  <span style={{
                    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: 20,
                    fontSize: '0.8rem',
                    fontWeight: 600
                  }}>
                    {item.category}
                  </span>
                  <span style={{ opacity: 0.6, fontSize: '0.9rem' }}>
                    {item.readTime}
                  </span>
                </div>
                
                <h3 style={{ 
                  fontSize: '1.3rem', 
                  fontWeight: 700, 
                  marginBottom: 16,
                  lineHeight: 1.3
                }}>
                  {item.title}
                </h3>
                
                <p style={{ 
                  opacity: 0.8, 
                  lineHeight: 1.6, 
                  marginBottom: 20,
                  fontSize: '0.95rem'
                }}>
                  {item.excerpt}
                </p>
                
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center'
                }}>
                  <span style={{ opacity: 0.6, fontSize: '0.9rem' }}>
                    {new Date(item.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                  <Link href={`/news/${item.id}`} style={{
                    color: '#3b82f6',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '0.9rem'
                  }}>
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
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
              Stay Updated
            </h3>
            <p style={{ 
              opacity: 0.8, 
              marginBottom: 24,
              fontSize: '1.1rem'
            }}>
              Subscribe to our newsletter for the latest news, product updates, and industry insights.
            </p>
            <div style={{ 
              display: 'flex', 
              gap: 12, 
              maxWidth: 400, 
              margin: '0 auto',
              flexWrap: 'wrap'
            }}>
              <input 
                type="email" 
                placeholder="Enter your email"
                style={{
                  flex: 1,
                  minWidth: 250,
                  padding: '12px 16px',
                  borderRadius: 8,
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  fontSize: '1rem'
                }}
              />
              <button style={{
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                color: 'white',
                padding: '12px 24px',
                borderRadius: 8,
                border: 'none',
                fontWeight: 600,
                cursor: 'pointer',
                fontSize: '1rem'
              }}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}