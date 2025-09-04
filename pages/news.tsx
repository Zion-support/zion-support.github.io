import Link from 'next/link';
import Head from 'next/head';

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
      title: "Zion Tech Group Launches Revolutionary AI-Powered Micro SaaS Platform",
      excerpt: "New platform combines artificial intelligence with micro SaaS architecture to deliver unprecedented business automation capabilities.",
      date: "2025-01-26",
      category: "Product Launch",
      image: "🚀",
      readTime: "3 min read"
    },
    {
      id: 2,
      title: "Partnership with Leading Cloud Provider Expands Global Reach",
      excerpt: "Strategic alliance enables Zion Tech Group to deliver enhanced cloud solutions to enterprise clients worldwide.",
      date: "2025-01-25",
      category: "Partnership",
      image: "🤝",
      readTime: "2 min read"
    },
    {
      id: 3,
      title: "Quantum Computing Research Breakthrough Announced",
      excerpt: "Our research team achieves significant milestone in quantum algorithm optimization for business applications.",
      date: "2025-01-24",
      category: "Research",
      image: "⚛️",
      readTime: "4 min read"
    },
    {
      id: 4,
      title: "Cybersecurity Solutions Recognized by Industry Leaders",
      excerpt: "Zion Tech Group's advanced cybersecurity platform receives top industry awards for innovation and effectiveness.",
      date: "2025-01-23",
      category: "Awards",
      image: "🏆",
      readTime: "3 min read"
    },
    {
      id: 5,
      title: "Expansion into European Markets Accelerates Growth",
      excerpt: "New European operations center opens to serve growing demand for AI and cloud solutions across the region.",
      date: "2025-01-22",
      category: "Expansion",
      image: "🌍",
      readTime: "2 min read"
    },
    {
      id: 6,
      title: "Green IT Initiative Reduces Carbon Footprint by 40%",
      excerpt: "Sustainable technology practices and renewable energy adoption significantly improve environmental impact.",
      date: "2025-01-21",
      category: "Sustainability",
      image: "🌱",
      readTime: "3 min read"
    }
  ];

  const categories = ["All", "Product Launch", "Partnership", "Research", "Awards", "Expansion", "Sustainability"];

  return (
    <>
      <Head>
        <title>News - Zion Tech Group | Latest Company Updates & Industry News</title>
        <meta name="description" content="Stay updated with the latest news, announcements, and developments from Zion Tech Group. Industry insights and company updates." />
        <meta name="keywords" content="news, announcements, company updates, technology news, AI news, cloud computing news" />
        <link rel="canonical" href={`${contact.site}/news`} />
        <meta property="og:title" content="News - Zion Tech Group | Latest Company Updates & Industry News" />
        <meta property="og:description" content="Stay updated with the latest news, announcements, and developments from Zion Tech Group. Industry insights and company updates." />
        <meta property="og:url" content={`${contact.site}/news`} />
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
              Latest News
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: 600, margin: '0 auto' }}>
              Stay informed with the latest developments, announcements, and insights from Zion Tech Group and the technology industry.
            </p>
          </div>

          <div style={{ marginBottom: 40 }}>
            <div style={{ 
              display: 'flex', 
              gap: 15, 
              flexWrap: 'wrap', 
              justifyContent: 'center',
              marginBottom: 40
            }}>
              {categories.map((category) => (
                <button key={category} style={{
                  background: category === 'All' ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)' : 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: 25,
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (category !== 'All') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (category !== 'All') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  }
                }}>
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gap: 30, gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
            {newsItems.map((item) => (
              <article key={item.id} style={{
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
                <div style={{ display: 'flex', alignItems: 'center', gap: 15, marginBottom: 20 }}>
                  <div style={{ fontSize: '2.5rem' }}>{item.image}</div>
                  <div>
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
                  </div>
                </div>
                
                <h2 style={{ 
                  fontSize: '1.4rem', 
                  fontWeight: 700, 
                  marginBottom: 15,
                  lineHeight: 1.3
                }}>
                  {item.title}
                </h2>
                
                <p style={{ 
                  color: '#94a3b8', 
                  marginBottom: 20, 
                  lineHeight: 1.6,
                  fontSize: '1rem'
                }}>
                  {item.excerpt}
                </p>
                
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  fontSize: '0.9rem',
                  color: '#64748b'
                }}>
                  <span>{item.date}</span>
                  <span>{item.readTime}</span>
                </div>
              </article>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 60 }}>
            <Link href="/contact" style={{
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              color: 'white',
              padding: '15px 30px',
              textDecoration: 'none',
              borderRadius: 8,
              fontSize: '1.1rem',
              fontWeight: 600,
              display: 'inline-block',
              transition: 'transform 0.3s ease'
            }}>
              Subscribe to News Updates
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}