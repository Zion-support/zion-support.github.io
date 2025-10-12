import React from 'react';
import { Download, Calendar, User, FileText, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const WhitepapersPage: React.FC = () => {
  const whitepapers = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise: A Comprehensive Guide',
      description: 'Explore the latest trends in enterprise AI adoption and how businesses are leveraging artificial intelligence to drive innovation and growth.',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-15',
      category: 'Artificial Intelligence',
      pages: 24,
      downloadCount: '2,500+',
      featured: true,
      topics: ['Machine Learning', 'Enterprise AI', 'Digital Transformation', 'ROI Analysis']
    },
    {
      id: 2,
      title: '5G Implementation: A Complete Business Guide',
      description: 'Everything you need to know about implementing 5G technology in your business, from planning to deployment and optimization.',
      author: 'Michael Chen',
      date: '2024-01-12',
      category: '5G Technology',
      pages: 18,
      downloadCount: '1,800+',
      featured: false,
      topics: ['5G Networks', 'IoT Integration', 'Edge Computing', 'Business Applications']
    },
    {
      id: 3,
      title: 'Cloud Migration Best Practices: Avoiding Common Pitfalls',
      description: 'Learn from our experience helping 500+ companies migrate to the cloud successfully. Discover the best practices and common mistakes to avoid.',
      author: 'Emily Rodriguez',
      date: '2024-01-10',
      category: 'Cloud Computing',
      pages: 22,
      downloadCount: '3,200+',
      featured: true,
      topics: ['Cloud Strategy', 'Migration Planning', 'Security', 'Cost Optimization']
    },
    {
      id: 4,
      title: 'Cybersecurity in the AI Era: Protecting Your Digital Assets',
      description: 'Comprehensive guide to cybersecurity strategies for businesses adopting AI and digital transformation technologies.',
      author: 'James Wilson',
      date: '2024-01-08',
      category: 'Cybersecurity',
      pages: 20,
      downloadCount: '2,100+',
      featured: false,
      topics: ['AI Security', 'Threat Detection', 'Compliance', 'Risk Management']
    },
    {
      id: 5,
      title: 'Data Analytics and Business Intelligence: Driving Growth',
      description: 'How to leverage data analytics and business intelligence tools to make informed decisions and drive business growth.',
      author: 'Lisa Thompson',
      date: '2024-01-05',
      category: 'Data Analytics',
      pages: 16,
      downloadCount: '1,900+',
      featured: false,
      topics: ['Data Strategy', 'BI Tools', 'Predictive Analytics', 'Data Visualization']
    },
    {
      id: 6,
      title: 'Digital Transformation: A Strategic Approach',
      description: 'A comprehensive guide to digital transformation, covering strategy, implementation, and best practices for modern businesses.',
      author: 'Robert Davis',
      date: '2024-01-03',
      category: 'Digital Transformation',
      pages: 28,
      downloadCount: '2,800+',
      featured: true,
      topics: ['Strategy', 'Change Management', 'Technology Adoption', 'ROI Measurement']
    }
  ];

  const categories = ['All', 'Artificial Intelligence', '5G Technology', 'Cloud Computing', 'Cybersecurity', 'Data Analytics', 'Digital Transformation'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Whitepapers - Zion Tech Group</title>
        <meta name="description" content="Download our comprehensive whitepapers on AI, cloud computing, 5G technology, and digital transformation. Expert insights and best practices." />
        <meta name="keywords" content="whitepapers, AI guides, cloud computing, 5G technology, cybersecurity, digital transformation, business insights" />
      </Helmet>
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expert <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Whitepapers</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Download our comprehensive guides and insights on the latest trends in AI, cloud computing, and digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {whitepapers.map((paper) => (
              <div key={paper.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <FileText className="w-6 h-6 text-purple-400" />
                    <span className="text-purple-300 text-sm font-medium">{paper.category}</span>
                  </div>
                  {paper.featured && (
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {paper.title}
                </h3>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {paper.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {paper.topics.slice(0, 3).map((topic, index) => (
                    <span key={index} className="bg-white/10 text-gray-300 text-xs px-2 py-1 rounded">
                      {topic}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {paper.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(paper.date).toLocaleDateString()}
                    </div>
                  </div>
                  <span>{paper.pages} pages</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">{paper.downloadCount} downloads</span>
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-sm flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Stay Updated with Our Latest Research</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter to receive the latest whitepapers and industry insights directly in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Subscribe Now
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WhitepapersPage;
