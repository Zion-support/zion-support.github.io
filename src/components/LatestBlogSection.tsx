import React from 'react';
import BlogPost from './BlogPost';

const LatestBlogSection: React.FC = () => {
  const blogPosts = [
    {
      title: "The Future of AI in Business: 2025 Predictions and Trends",
      excerpt: "Discover how artificial intelligence is reshaping industries and what business leaders need to know to stay ahead of the curve in 2025.",
      author: "Dr. Sarah Chen",
      date: "Jan 15, 2025",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
      category: "Artificial Intelligence",
      slug: "future-ai-business-2025",
      featured: true
    },
    {
      title: "Cybersecurity Best Practices for Remote Work Environments",
      excerpt: "Learn essential security measures to protect your remote workforce and sensitive business data from evolving cyber threats.",
      author: "Michael Rodriguez",
      date: "Jan 12, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop",
      category: "Cybersecurity",
      slug: "cybersecurity-remote-work",
      featured: false
    },
    {
      title: "Cloud Migration Strategies: A Complete Guide for Enterprise",
      excerpt: "Comprehensive guide to migrating your enterprise infrastructure to the cloud with minimal disruption and maximum efficiency.",
      author: "Emily Johnson",
      date: "Jan 10, 2025",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
      category: "Cloud Computing",
      slug: "cloud-migration-guide",
      featured: false
    },
    {
      title: "Blockchain Technology: Beyond Cryptocurrency Applications",
      excerpt: "Explore real-world blockchain applications transforming supply chains, healthcare, and financial services across industries.",
      author: "David Park",
      date: "Jan 8, 2025",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop",
      category: "Blockchain",
      slug: "blockchain-beyond-crypto",
      featured: false
    },
    {
      title: "Digital Transformation: Success Stories from Fortune 500 Companies",
      excerpt: "Real case studies of how major corporations leveraged technology to achieve unprecedented growth and operational efficiency.",
      author: "Lisa Wang",
      date: "Jan 5, 2025",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=400&fit=crop",
      category: "Digital Transformation",
      slug: "digital-transformation-success",
      featured: false
    },
    {
      title: "The Rise of Edge Computing: Bringing Intelligence Closer to Data",
      excerpt: "Understanding edge computing's impact on IoT, autonomous vehicles, and real-time applications in the modern digital landscape.",
      author: "James Wilson",
      date: "Jan 3, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop",
      category: "Edge Computing",
      slug: "edge-computing-rise",
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest Insights & Updates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with our expert analysis, industry trends, and cutting-edge technology insights that drive business success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>

        <div className="text-center">
          <a
            href="/blog"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-xl transition-all duration-300 font-semibold text-lg"
          >
            View All Articles
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogSection;