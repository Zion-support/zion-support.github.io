import Link from 'next/link';
import Head from 'next/head';

export default function Blog() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  };

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: 2025 Trends and Predictions",
      excerpt: "Explore the latest AI trends shaping business operations in 2025, from automation to machine learning applications.",
      date: "2025-01-26",
      category: "AI & Technology",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Micro SaaS: Building Scalable Solutions for Modern Businesses",
      excerpt: "Learn how micro SaaS products are revolutionizing business operations and creating new opportunities for growth.",
      date: "2025-01-25",
      category: "Micro SaaS",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Cybersecurity Best Practices for Enterprise Organizations",
      excerpt: "Essential cybersecurity strategies to protect your organization from evolving threats in the digital landscape.",
      date: "2025-01-24",
      category: "Cybersecurity",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Cloud DevOps: Streamlining Development and Operations",
      excerpt: "Discover how cloud DevOps practices can accelerate your development cycles and improve operational efficiency.",
      date: "2025-01-23",
      category: "Cloud & DevOps",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "Quantum Computing: The Next Frontier in Technology",
      excerpt: "Understanding quantum computing's potential impact on various industries and business applications.",
      date: "2025-01-22",
      category: "Quantum Computing",
      readTime: "10 min read"
    }
  ];

  return (
    <>
      <Head>
        <title>Blog - Zion Tech Group | Technology Insights & Industry News</title>
        <meta name="description" content="Stay updated with the latest technology insights, industry news, and expert analysis from Zion Tech Group's blog." />
        <meta name="keywords" content="technology blog, AI insights, micro SaaS, cybersecurity, cloud computing, quantum computing" />
        <link rel="canonical" href={`${contact.site}/blog`} />
        <meta property="og:title" content="Blog - Zion Tech Group | Technology Insights & Industry News" />
        <meta property="og:description" content="Stay updated with the latest technology insights, industry news, and expert analysis from Zion Tech Group's blog." />
        <meta property="og:url" content={`${contact.site}/blog`} />
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
              Technology Blog
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: 600, margin: '0 auto' }}>
              Stay updated with the latest technology insights, industry news, and expert analysis from our team of technology professionals.
            </p>
          </div>

          <div style={{ display: 'grid', gap: 30, gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
            {blogPosts.map((post) => (
              <article key={post.id} style={{
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
                    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: 20,
                    fontSize: '0.8rem',
                    fontWeight: 600
                  }}>
                    {post.category}
                  </span>
                </div>
                
                <h2 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: 700, 
                  marginBottom: 15,
                  lineHeight: 1.3
                }}>
                  {post.title}
                </h2>
                
                <p style={{ 
                  color: '#94a3b8', 
                  marginBottom: 20, 
                  lineHeight: 1.6,
                  fontSize: '1rem'
                }}>
                  {post.excerpt}
                </p>
                
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  fontSize: '0.9rem',
                  color: '#64748b'
                }}>
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
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
              Subscribe to Our Newsletter
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}