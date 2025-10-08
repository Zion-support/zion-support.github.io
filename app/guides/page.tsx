import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BookOpen, Code, Database, Cloud, Shield, Zap, Brain, Target } from 'lucide-react';
>>>>>>> cursor/website-audit-and-update-with-deployment-a9cd

const GuidesPage: React.FC = () => {
  const guides = [
    {
<<<<<<< HEAD
      title: 'AI 2026 Implementation Roadmap',
      description: 'Comprehensive guide to implementing AI solutions in your enterprise for 2026',
      url: '/guides/ai-2026-implementation-roadmap',
      category: 'AI Implementation'
    },
    {
      title: 'AI 2027 Implementation Roadmap',
      description: 'Advanced roadmap for AI implementation strategies in 2027',
      url: '/guides/ai-2027-implementation-roadmap',
      category: 'AI Implementation'
    },
    {
      title: 'Autonomous Business Processes Implementation Guide 2026',
      description: 'Step-by-step guide to implementing autonomous business processes',
      url: '/guides/autonomous-business-processes-implementation-guide-2026',
      category: 'Process Automation'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Technical Guides | Zion Tech Group</title>
        <meta
          name="description"
          content="Comprehensive technical guides for AI implementation, enterprise automation, and digital transformation from Zion Tech Group experts."
        />
        <meta
          name="keywords"
          content="AI implementation guide, enterprise automation guide, technical documentation, AI roadmap"
        />
        <meta property="og:title" content="Technical Guides | Zion Tech Group" />
        <meta
          property="og:description"
          content="Comprehensive technical guides for AI implementation, enterprise automation, and digital transformation."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/guides" />
      </Helmet>
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Technical Guides</h1>
            <p className="text-xl text-gray-300">
              Comprehensive guides for AI implementation and enterprise automation
            </p>
          </header>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {guides.map((guide, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
                  <div className="mb-4">
                    <span className="inline-block bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                      {guide.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {guide.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {guide.description}
                  </p>
                  <Link
                    to={guide.url}
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
=======
      title: 'AI Implementation Guide',
      description: 'Complete step-by-step guide to implementing AI solutions in your business',
      icon: <Brain className="w-8 h-8 text-purple-600" />,
      category: 'AI & Machine Learning',
      difficulty: 'Intermediate',
      duration: '45 min read',
      href: '/guides/ai-implementation',
      featured: true
    },
    {
      title: 'Digital Transformation Roadmap',
      description: 'How to successfully transform your business with modern technology',
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      category: 'Digital Transformation',
      difficulty: 'Advanced',
      duration: '60 min read',
      href: '/guides/digital-transformation',
      featured: true
    },
    {
      title: 'Cloud Migration Best Practices',
      description: 'Essential strategies for migrating your infrastructure to the cloud',
      icon: <Cloud className="w-8 h-8 text-green-600" />,
      category: 'Cloud Computing',
      difficulty: 'Intermediate',
      duration: '30 min read',
      href: '/guides/cloud-migration'
    },
    {
      title: 'Cybersecurity Framework',
      description: 'Comprehensive security framework for protecting your digital assets',
      icon: <Shield className="w-8 h-8 text-red-600" />,
      category: 'Cybersecurity',
      difficulty: 'Advanced',
      duration: '50 min read',
      href: '/guides/cybersecurity-framework'
    },
    {
      title: 'API Development Standards',
      description: 'Best practices for building robust and scalable APIs',
      icon: <Code className="w-8 h-8 text-orange-600" />,
      category: 'Software Development',
      difficulty: 'Intermediate',
      duration: '35 min read',
      href: '/guides/api-development'
    },
    {
      title: 'Data Analytics Implementation',
      description: 'How to set up effective data analytics and business intelligence',
      icon: <Database className="w-8 h-8 text-indigo-600" />,
      category: 'Data Analytics',
      difficulty: 'Intermediate',
      duration: '40 min read',
      href: '/guides/data-analytics'
    },
    {
      title: 'Automation Strategy Guide',
      description: 'Strategic approach to implementing business process automation',
      icon: <Target className="w-8 h-8 text-pink-600" />,
      category: 'Process Automation',
      difficulty: 'Beginner',
      duration: '25 min read',
      href: '/guides/automation-strategy'
    },
    {
      title: 'Quantum Computing Primer',
      description: 'Introduction to quantum computing and its business applications',
      icon: <BookOpen className="w-8 h-8 text-teal-600" />,
      category: 'Emerging Technologies',
      difficulty: 'Advanced',
      duration: '55 min read',
      href: '/guides/quantum-computing'
    }
  ];

  const categories = [...new Set(guides.map(guide => guide.category))];

  return (
    <>
      <Helmet>
        <title>Technical Guides - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technical guides covering AI implementation, digital transformation, cloud migration, and cybersecurity best practices." />
        <meta name="keywords" content="technical guides, AI implementation, digital transformation, cloud migration, cybersecurity, automation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Technical Guides
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Expert insights and step-by-step guides to help you implement cutting-edge technology solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Browse All Guides
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Download PDFs
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Guides */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Guides
              </h2>
              <p className="text-xl text-gray-600">
                Our most popular and comprehensive technical guides
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {guides.filter(guide => guide.featured).map((guide, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg p-8 border border-blue-200">
                  <div className="flex items-center mb-4">
                    {guide.icon}
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-900">{guide.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">{guide.difficulty}</span>
                        <span>{guide.duration}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{guide.description}</p>
                  <Link 
                    to={guide.href}
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
>>>>>>> cursor/website-audit-and-update-with-deployment-a9cd
                  >
                    Read Guide
                  </Link>
                </div>
              ))}
            </div>
<<<<<<< HEAD
            
            <div className="mt-12 text-center">
              <div className="bg-gray-800 rounded-lg p-8">
                <h2 className="text-2xl font-semibold mb-4">Need Custom Guidance?</h2>
                <p className="text-gray-300 mb-6">
                  Our experts can create custom implementation guides tailored to your specific needs.
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Contact Our Experts
                </Link>
              </div>
            </div>
          </div>
        </div>
=======
          </div>
        </section>

        {/* All Guides by Category */}
        {categories.map(category => (
          <section key={category} className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {category} Guides
                </h2>
                <p className="text-xl text-gray-600">
                  Comprehensive guides covering all aspects of {category.toLowerCase()}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {guides
                  .filter(guide => guide.category === category)
                  .map((guide, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                      <div className="flex items-center mb-4">
                        {guide.icon}
                        <div className="ml-3">
                          <h3 className="text-lg font-semibold text-gray-900">{guide.title}</h3>
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded">{guide.difficulty}</span>
                            <span>{guide.duration}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{guide.description}</p>
                      <Link 
                        to={guide.href}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Read Guide →
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Custom Implementation Help?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Our experts can help you implement any of these solutions in your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </section>
>>>>>>> cursor/website-audit-and-update-with-deployment-a9cd
      </div>
    </>
  );
};

export default GuidesPage;