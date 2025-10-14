import React from 'react'
import { Helmet } from 'react-helmet-async'

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'ai', name: 'Artificial Intelligence' },
    { id: 'cloud', name: 'Cloud Computing' },
    { id: 'security', name: 'Cybersecurity' },
    { id: 'business', name: 'Business' },
    { id: 'technology', name: 'Technology' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest trends in artificial intelligence and how they\'re transforming businesses across industries.',
      content: 'Artificial intelligence continues to revolutionize the business landscape...',
      author: 'Kleber Santos',
      date: '2024-01-15',
      category: 'ai',
      readTime: '5 min read',
      image: '/images/blog/ai-future.jpg',
      tags: ['AI', 'Business', 'Technology', 'Future']
    },
    {
      id: 2,
      title: 'Cloud Security Best Practices: Protecting Your Data in 2024',
      excerpt: 'Learn essential cloud security practices to keep your data safe and compliant with industry standards.',
      content: 'As businesses increasingly migrate to the cloud, security becomes paramount...',
      author: 'Sarah Johnson',
      date: '2024-01-12',
      category: 'security',
      readTime: '7 min read',
      image: '/images/blog/cloud-security.jpg',
      tags: ['Security', 'Cloud', 'Data Protection', 'Compliance']
    },
    {
      id: 3,
      title: 'Micro SaaS: The Future of Software Development',
      excerpt: 'Discover how micro SaaS solutions are changing the software development landscape and creating new opportunities.',
      content: 'Micro SaaS represents a new paradigm in software development...',
      author: 'Michael Chen',
      date: '2024-01-10',
      category: 'technology',
      readTime: '6 min read',
      image: '/images/blog/micro-saas.jpg',
      tags: ['Micro SaaS', 'Software Development', 'Innovation', 'Business']
    },
    {
      id: 4,
      title: '5G Technology: Transforming Industries and Creating New Possibilities',
      excerpt: 'Explore how 5G technology is revolutionizing various industries and enabling new applications.',
      content: '5G technology promises to transform industries with ultra-low latency...',
      author: 'Emily Rodriguez',
      date: '2024-01-08',
      category: 'technology',
      readTime: '8 min read',
      image: '/images/blog/5g-technology.jpg',
      tags: ['5G', 'Technology', 'Innovation', 'Connectivity']
    },
    {
      id: 5,
      title: 'Digital Transformation: A Complete Guide for Modern Businesses',
      excerpt: 'A comprehensive guide to digital transformation, including strategies, challenges, and best practices.',
      content: 'Digital transformation is no longer optional for businesses...',
      author: 'David Kim',
      date: '2024-01-05',
      category: 'business',
      readTime: '10 min read',
      image: '/images/blog/digital-transformation.jpg',
      tags: ['Digital Transformation', 'Business Strategy', 'Technology', 'Innovation']
    },
    {
      id: 6,
      title: 'Cybersecurity Threats in 2024: What Businesses Need to Know',
      excerpt: 'Stay ahead of emerging cybersecurity threats and learn how to protect your business.',
      content: 'The cybersecurity landscape continues to evolve with new threats...',
      author: 'Lisa Wang',
      date: '2024-01-03',
      category: 'security',
      readTime: '6 min read',
      image: '/images/blog/cybersecurity-threats.jpg',
      tags: ['Cybersecurity', 'Threats', 'Security', 'Business Protection']
    }
  ];

  const featuredPost = blogPosts[0];
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const recentPosts = blogPosts.slice(0, 3);
  const popularTags = ['AI', 'Cloud Computing', 'Security', 'Digital Transformation', '5G', 'Micro SaaS']

  return (
    <React.Fragment>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Latest insights, tutorials, and news from Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Blog</h1>
          <p className="text-lg text-gray-300">
            Stay updated with the latest insights, tutorials, and news from Zion Tech Group.
          </p>
        </div>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss how our solutions can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Get in Touch
              </Link>
              <Link 
                to="/services" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;
