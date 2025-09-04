import Head from 'next/head';
import Link from 'next/link';

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
      excerpt: "Explore how artificial intelligence is transforming business operations and what to expect in 2025.",
      date: "2025-01-26",
      category: "AI & Technology",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Quantum Computing: Breaking Down the Barriers",
      excerpt: "Understanding quantum computing fundamentals and its practical applications in modern business.",
      date: "2025-01-25",
      category: "Quantum Computing",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Micro SaaS: The New Era of Software Solutions",
      excerpt: "How micro SaaS products are revolutionizing the software industry and creating new opportunities.",
      date: "2025-01-24",
      category: "Micro SaaS",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Cybersecurity Best Practices for 2025",
      excerpt: "Essential cybersecurity strategies to protect your business in an increasingly digital world.",
      date: "2025-01-23",
      category: "Cybersecurity",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "Cloud DevOps: Streamlining Development Workflows",
      excerpt: "Best practices for implementing DevOps in cloud environments for maximum efficiency.",
      date: "2025-01-22",
      category: "Cloud DevOps",
      readTime: "6 min read"
    }
  ];

  return (
    <>
      <Head>
        <title>Blog - Zion Tech Group | Technology Insights & Industry News</title>
        <meta name="description" content="Stay updated with the latest technology trends, AI insights, and industry news from Zion Tech Group's expert team." />
        <meta name="keywords" content="technology blog, AI insights, quantum computing, micro SaaS, cybersecurity, cloud DevOps, tech trends" />
        <link rel="canonical" href={`${contact.site}/blog`} />
        <meta property="og:title" content="Blog - Zion Tech Group | Technology Insights & Industry News" />
        <meta property="og:description" content="Stay updated with the latest technology trends, AI insights, and industry news from Zion Tech Group's expert team." />
        <meta property="og:url" content={`${contact.site}/blog`} />
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
              Technology Blog
            </h1>
            <p style={{ 
              fontSize: '1.2rem', 
              opacity: 0.8, 
              maxWidth: 600, 
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Stay ahead with the latest insights, trends, and innovations in AI, quantum computing, 
              and cutting-edge technology solutions.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: 32,
            marginBottom: 60
          }}>
            {blogPosts.map((post) => (
              <article key={post.id} style={{
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
                    {post.category}
                  </span>
                  <span style={{ opacity: 0.6, fontSize: '0.9rem' }}>
                    {post.readTime}
                  </span>
                </div>
                
                <h2 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: 700, 
                  marginBottom: 16,
                  lineHeight: 1.3
                }}>
                  {post.title}
                </h2>
                
                <p style={{ 
                  opacity: 0.8, 
                  lineHeight: 1.6, 
                  marginBottom: 20,
                  fontSize: '1rem'
                }}>
                  {post.excerpt}
                </p>
                
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center'
                }}>
                  <span style={{ opacity: 0.6, fontSize: '0.9rem' }}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <Link href={`/blog/${post.id}`} style={{
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
              Subscribe to our newsletter for the latest technology insights and industry updates.
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