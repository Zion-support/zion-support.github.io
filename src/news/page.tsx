import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const NewsPage: React.FC = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary AI-Powered Enterprise Solutions',
      date: '2024-01-15',
      category: 'Product Launch',
      summary: 'We are excited to announce the launch of our next-generation AI platform that transforms how enterprises approach automation and intelligence.',
      image: '🚀',
      featured: true
    },
    {
      id: 2,
      title: 'Partnership with Leading Cloud Providers Expands Global Reach',
      date: '2024-01-10',
      category: 'Partnership',
      summary: 'Strategic partnerships with AWS, Azure, and Google Cloud enable us to serve clients worldwide with enhanced scalability and reliability.',
      image: '🤝',
      featured: false
    },
    {
      id: 3,
      title: 'Zion Tech Group Recognized as Top AI Company by TechCrunch',
      date: '2024-01-05',
      category: 'Award',
      summary: 'We are honored to be named one of the top 10 AI companies of 2024 by TechCrunch for our innovative solutions and industry impact.',
      image: '🏆',
      featured: false
    },
    {
      id: 4,
      title: 'New Quantum Computing Research Division Established',
      date: '2024-01-01',
      category: 'Research',
      summary: 'Our new quantum computing division will focus on developing breakthrough algorithms for next-generation AI applications.',
      image: '⚛️',
      featured: false
    },
    {
      id: 5,
      title: 'Client Success: 300% ROI Achieved for Fortune 500 Company',
      date: '2023-12-28',
      category: 'Case Study',
      summary: 'Our AI automation solution helped a Fortune 500 client achieve 300% ROI within the first year of implementation.',
      image: '📈',
      featured: false
    },
    {
      id: 6,
      title: 'Zion Tech Group Expands Team with 50 New AI Experts',
      date: '2023-12-20',
      category: 'Company',
      summary: 'We are thrilled to welcome 50 new AI experts to our team, strengthening our capabilities in machine learning and automation.',
      image: '👥',
      featured: false
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Product Launch': return <Zap className="w-4 h-4" />;
      case 'Partnership': return <Globe className="w-4 h-4" />;
      case 'Award': return <Award className="w-4 h-4" />;
      case 'Research': return <TrendingUp className="w-4 h-4" />;
      case 'Case Study': return <Users className="w-4 h-4" />;
      case 'Company': return <Star className="w-4 h-4" />;
      default: return <Star className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">News</h1>
          <p className="text-gray-300 mb-8">Coming Soon - Advanced news solutions</p>
          <Link
            to="/contact"
            className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewsPage;
