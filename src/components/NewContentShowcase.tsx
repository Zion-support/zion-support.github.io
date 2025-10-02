import React from 'react';
import { Link } from 'react-router-dom';

// Mock data
const newArticles2025 = [
  {
    id: '1',
    title: 'AI Autonomous Infrastructure Platform',
    description: 'Revolutionary self-healing infrastructure with 99.9% uptime and 85% MTTR reduction',
    category: 'AI Infrastructure',
    link: '/blog/ai-autonomous-infrastructure-platform',
    readTime: '8 min read'
  },
  {
    id: '2',
    title: 'Quantum-AI Hybrid Computing',
    description: 'Breakthrough quantum computing applications for enterprise transformation',
    category: 'Quantum Computing',
    link: '/blog/quantum-ai-hybrid-computing',
    readTime: '12 min read'
  },
  {
    id: '3',
    title: 'Zero Trust Security Framework',
    description: 'Advanced security with 99.9% threat detection accuracy and automated response',
    category: 'Cybersecurity',
    link: '/blog/zero-trust-security-framework',
    readTime: '6 min read'
  }
];

const newServices2026 = [
  {
    id: '1',
    name: 'AI Autonomous Infrastructure Platform',
    description: 'Self-healing systems with 99.9% uptime and 85% MTTR reduction',
    category: 'AI Infrastructure',
    icon: '🤖',
    link: '/services/ai-autonomous-infrastructure-platform',
    pricing: 'Starting at $5,000/month'
  },
  {
    id: '2',
    name: 'Quantum-AI Hybrid Computing',
    description: 'Revolutionary quantum computing applications for enterprise',
    category: 'Quantum Computing',
    icon: '⚛️',
    link: '/services/quantum-ai-hybrid-computing',
    pricing: 'Starting at $10,000/month'
  },
  {
    id: '3',
    name: 'Zero Trust Security Framework',
    description: 'Advanced security with 99.9% threat detection accuracy',
    category: 'Cybersecurity',
    icon: '🔒',
    link: '/services/zero-trust-security',
    pricing: 'Starting at $3,000/month'
  }
];

const NewContentShowcase: React.FC = () => {
  const topArticles = newArticles2025.slice(0, 3);
  const topServices = newServices2026.slice(0, 3);

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 font-semibold mb-4">
            🌟 JUST RELEASED
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            New Content & Services
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest breakthrough articles and revolutionary services
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Articles Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 text-indigo-600">📘</span>
              <h3 className="text-3xl font-bold text-gray-900">Latest Articles</h3>
            </div>
            <div className="space-y-4">
              {topArticles.map((article) => (
                <Link
                  key={article.id}
                  to={article.link}
                  className="block bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all hover:scale-105"
                >
                  <div className="text-sm text-indigo-600 font-semibold mb-2">{article.category}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{article.title}</h4>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{article.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{article.readTime}</span>
                    <span className="text-indigo-600 font-semibold flex items-center gap-1">
                      Read More ›
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:text-indigo-800"
              >
                View All Articles
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 text-purple-600">🚀</span>
              <h3 className="text-3xl font-bold text-gray-900">New Services</h3>
            </div>
            <div className="space-y-4">
              {topServices.map((service) => (
                <Link
                  key={service.id}
                  to={service.link}
                  className="block bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all hover:scale-105"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{service.icon}</span>
                    <span className="text-sm text-purple-600 font-semibold">{service.category}</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h4>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{service.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-700 font-semibold">{service.pricing}</span>
                    <span className="text-purple-600 font-semibold flex items-center gap-1">
                      Learn More ›
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-purple-600 font-bold hover:text-purple-800"
              >
                View All Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContentShowcase;