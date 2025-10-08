import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BookOpen, Code, Database, Cloud, Shield, Zap, Brain, Target } from 'lucide-react';

const GuidesPage: React.FC = () => {
  const guides = [
    {
      title: 'AI Implementation Guide',
      description: 'Complete guide to implementing AI solutions in your business, from strategy to deployment.',
      icon: Brain,
      category: 'AI & Machine Learning',
      readTime: '15 min read',
      difficulty: 'Intermediate',
      lastUpdated: '2024-01-15',
      topics: ['AI Strategy', 'Model Selection', 'Data Preparation', 'Deployment', 'Monitoring']
    },
    {
      title: 'Cloud Migration Best Practices',
      description: 'Step-by-step guide to migrating your infrastructure to the cloud safely and efficiently.',
      icon: Cloud,
      category: 'Cloud Computing',
      readTime: '20 min read',
      difficulty: 'Advanced',
      lastUpdated: '2024-01-10',
      topics: ['Migration Planning', 'Security', 'Cost Optimization', 'Performance', 'Monitoring']
    },
    {
      title: 'Cybersecurity Framework',
      description: 'Comprehensive cybersecurity implementation guide for enterprise organizations.',
      icon: Shield,
      category: 'Cybersecurity',
      readTime: '25 min read',
      difficulty: 'Advanced',
      lastUpdated: '2024-01-08',
      topics: ['Risk Assessment', 'Security Policies', 'Incident Response', 'Compliance', 'Training']
    },
    {
      title: 'API Development Standards',
      description: 'Best practices for building scalable, secure, and maintainable APIs.',
      icon: Code,
      category: 'Software Development',
      readTime: '18 min read',
      difficulty: 'Intermediate',
      lastUpdated: '2024-01-12',
      topics: ['REST Design', 'Authentication', 'Documentation', 'Testing', 'Versioning']
    },
    {
      title: 'Database Optimization Guide',
      description: 'Complete guide to database performance optimization and scaling strategies.',
      icon: Database,
      category: 'Database Management',
      readTime: '22 min read',
      difficulty: 'Advanced',
      lastUpdated: '2024-01-05',
      topics: ['Query Optimization', 'Indexing', 'Scaling', 'Monitoring', 'Backup Strategies']
    },
    {
      title: 'Business Process Automation',
      description: 'Guide to identifying and automating business processes for maximum efficiency.',
      icon: Zap,
      category: 'Process Automation',
      readTime: '16 min read',
      difficulty: 'Beginner',
      lastUpdated: '2024-01-18',
      topics: ['Process Mapping', 'Automation Tools', 'ROI Calculation', 'Change Management', 'Monitoring']
    },
    {
      title: 'Digital Transformation Strategy',
      description: 'Comprehensive guide to planning and executing digital transformation initiatives.',
      icon: Target,
      category: 'Digital Transformation',
      readTime: '30 min read',
      difficulty: 'Advanced',
      lastUpdated: '2024-01-20',
      topics: ['Strategy Development', 'Technology Selection', 'Change Management', 'ROI Measurement', 'Success Metrics']
    },
    {
      title: 'DevOps Implementation',
      description: 'Complete DevOps implementation guide for modern software development teams.',
      icon: Code,
      category: 'DevOps',
      readTime: '24 min read',
      difficulty: 'Intermediate',
      lastUpdated: '2024-01-14',
      topics: ['CI/CD Pipeline', 'Infrastructure as Code', 'Monitoring', 'Security', 'Team Collaboration']
    }
  ];

  const categories = [...new Set(guides.map(guide => guide.category))];

  return (
    <>
      <Helmet>
        <title>Technical Guides - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technical guides and best practices for AI implementation, cloud migration, cybersecurity, and digital transformation." />
        <meta name="keywords" content="technical guides, AI implementation, cloud migration, cybersecurity, digital transformation, best practices" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Technical Guides & Best Practices
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-indigo-100 max-w-3xl mx-auto">
                Expert guidance on AI implementation, cloud migration, cybersecurity, and digital transformation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
                  Browse All Guides
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
                  Download PDF Collection
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
                Featured Technical Guides
              </h2>
              <p className="text-xl text-gray-600">
                Expert-authored guides covering the latest technologies and best practices
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {guides.slice(0, 6).map((guide, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                      <guide.icon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <span className="text-sm text-indigo-600 font-semibold">{guide.category}</span>
                      <div className="flex items-center text-sm text-gray-500">
                        <span>{guide.readTime}</span>
                        <span className="mx-2">•</span>
                        <span>{guide.difficulty}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{guide.title}</h3>
                  <p className="text-gray-600 mb-4">{guide.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Topics Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {guide.topics.map((topic, topicIndex) => (
                        <span key={topicIndex} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Updated {guide.lastUpdated}</span>
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                      Read Guide
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Guides by Category */}
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
                        <div className="bg-indigo-100 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                          <guide.icon className="w-5 h-5 text-indigo-600" />
                        </div>
                        <div>
                          <span className="text-sm text-indigo-600 font-semibold">{guide.category}</span>
                          <div className="flex items-center text-sm text-gray-500">
                            <span>{guide.readTime}</span>
                            <span className="mx-2">•</span>
                            <span>{guide.difficulty}</span>
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{guide.title}</h3>
                      <p className="text-gray-600 mb-4 text-sm">{guide.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Updated {guide.lastUpdated}</span>
                        <button className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm">
                          Read More →
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}

        {/* Learning Paths */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Learning Paths
              </h2>
              <p className="text-xl text-gray-600">
                Structured learning paths to master specific technologies and methodologies
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-6">
                <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI & Machine Learning Path</h3>
                <p className="text-gray-600 mb-4">From basics to advanced AI implementation</p>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• AI Strategy & Planning</li>
                  <li>• Data Science Fundamentals</li>
                  <li>• Machine Learning Models</li>
                  <li>• Deep Learning & Neural Networks</li>
                  <li>• AI Deployment & Monitoring</li>
                </ul>
                <button className="text-blue-600 hover:text-blue-700 font-semibold">
                  Start Learning Path →
                </button>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg p-6">
                <Cloud className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cloud Architecture Path</h3>
                <p className="text-gray-600 mb-4">Master cloud technologies and best practices</p>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• Cloud Fundamentals</li>
                  <li>• Infrastructure as Code</li>
                  <li>• Containerization & Orchestration</li>
                  <li>• Microservices Architecture</li>
                  <li>• Cloud Security & Compliance</li>
                </ul>
                <button className="text-green-600 hover:text-green-700 font-semibold">
                  Start Learning Path →
                </button>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg p-6">
                <Shield className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cybersecurity Path</h3>
                <p className="text-gray-600 mb-4">Build robust security practices and frameworks</p>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• Security Fundamentals</li>
                  <li>• Threat Assessment & Analysis</li>
                  <li>• Security Architecture Design</li>
                  <li>• Incident Response & Recovery</li>
                  <li>• Compliance & Governance</li>
                </ul>
                <button className="text-purple-600 hover:text-purple-700 font-semibold">
                  Start Learning Path →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Custom Technical Guidance?
            </h2>
            <p className="text-xl mb-8 text-indigo-100">
              Our experts can provide personalized technical guidance and implementation support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-sm text-indigo-200">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GuidesPage;