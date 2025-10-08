import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BookOpen, Code, Database, Cloud, Shield, Zap, Target, CheckCircle, Star } from 'lucide-react';

const GuidesPage: React.FC = () => {
  const guides = [
    {
      title: 'AI Implementation Guide',
      description: 'Complete step-by-step guide to implementing AI solutions in your organization.',
      icon: '🤖',
      category: 'AI & Machine Learning',
      readTime: '15 min read',
      difficulty: 'Intermediate',
      features: ['Implementation roadmap', 'Best practices', 'Common pitfalls', 'ROI calculation', 'Team training'],
      benefits: ['Avoid common mistakes', 'Maximize AI success', 'Reduce implementation time'],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'AWS', 'Docker']
    },
    {
      title: 'Cloud Migration Strategy',
      description: 'Comprehensive guide to migrating your infrastructure to the cloud safely and efficiently.',
      icon: '☁️',
      category: 'Cloud Computing',
      readTime: '20 min read',
      difficulty: 'Advanced',
      features: ['Migration planning', 'Cost optimization', 'Security considerations', 'Performance tuning', 'Monitoring setup'],
      benefits: ['Reduce migration risks', 'Optimize cloud costs', 'Improve performance'],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Terraform']
    },
    {
      title: 'DevOps Best Practices',
      description: 'Essential DevOps practices for modern software development and deployment.',
      icon: '🔄',
      category: 'DevOps',
      readTime: '12 min read',
      difficulty: 'Intermediate',
      features: ['CI/CD pipelines', 'Infrastructure as code', 'Monitoring & alerting', 'Security integration', 'Team collaboration'],
      benefits: ['Deploy faster', 'Reduce errors', 'Improve team productivity'],
      technologies: ['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'Prometheus']
    },
    {
      title: 'Cybersecurity Framework',
      description: 'Complete cybersecurity framework for protecting your organization from threats.',
      icon: '🔒',
      category: 'Cybersecurity',
      readTime: '18 min read',
      difficulty: 'Advanced',
      features: ['Threat assessment', 'Security policies', 'Incident response', 'Compliance requirements', 'Training programs'],
      benefits: ['Protect against threats', 'Ensure compliance', 'Build security culture'],
      technologies: ['SIEM', 'EDR', 'Firewall', 'VPN', 'Zero Trust']
    },
    {
      title: 'Data Analytics Implementation',
      description: 'Guide to building effective data analytics and business intelligence systems.',
      icon: '📊',
      category: 'Data Analytics',
      readTime: '16 min read',
      difficulty: 'Intermediate',
      features: ['Data strategy', 'ETL processes', 'Dashboard design', 'Data governance', 'Performance optimization'],
      benefits: ['Make data-driven decisions', 'Improve business insights', 'Automate reporting'],
      technologies: ['Tableau', 'Power BI', 'Python', 'SQL', 'Apache Spark']
    },
    {
      title: 'API Development Guide',
      description: 'Best practices for designing, developing, and maintaining APIs.',
      icon: '🔌',
      category: 'API Development',
      readTime: '14 min read',
      difficulty: 'Intermediate',
      features: ['API design principles', 'Documentation standards', 'Security implementation', 'Testing strategies', 'Versioning'],
      benefits: ['Build better APIs', 'Improve developer experience', 'Ensure reliability'],
      technologies: ['REST', 'GraphQL', 'OpenAPI', 'Postman', 'Swagger']
    },
    {
      title: 'Microservices Architecture',
      description: 'Complete guide to designing and implementing microservices architecture.',
      icon: '🏗️',
      category: 'Architecture',
      readTime: '22 min read',
      difficulty: 'Advanced',
      features: ['Service design', 'Communication patterns', 'Data management', 'Deployment strategies', 'Monitoring'],
      benefits: ['Improve scalability', 'Enable rapid development', 'Reduce coupling'],
      technologies: ['Docker', 'Kubernetes', 'Istio', 'Kong', 'Consul']
    },
    {
      title: 'Database Optimization',
      description: 'Advanced techniques for optimizing database performance and scalability.',
      icon: '🗄️',
      category: 'Database',
      readTime: '13 min read',
      difficulty: 'Advanced',
      features: ['Query optimization', 'Indexing strategies', 'Partitioning', 'Caching', 'Monitoring'],
      benefits: ['Improve performance', 'Reduce costs', 'Handle more data'],
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch']
    },
    {
      title: 'Mobile App Development',
      description: 'Comprehensive guide to building cross-platform mobile applications.',
      icon: '📱',
      category: 'Mobile Development',
      readTime: '17 min read',
      difficulty: 'Intermediate',
      features: ['Platform selection', 'UI/UX design', 'Performance optimization', 'Testing strategies', 'Deployment'],
      benefits: ['Reach mobile users', 'Improve user experience', 'Reduce development time'],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin']
    },
    {
      title: 'Blockchain Development',
      description: 'Introduction to blockchain development and smart contract creation.',
      icon: '⛓️',
      category: 'Blockchain',
      readTime: '19 min read',
      difficulty: 'Advanced',
      features: ['Blockchain basics', 'Smart contracts', 'DApp development', 'Security considerations', 'Testing'],
      benefits: ['Enable decentralization', 'Improve transparency', 'Reduce intermediaries'],
      technologies: ['Ethereum', 'Solidity', 'Web3.js', 'IPFS', 'Truffle']
    },
    {
      title: 'IoT Implementation',
      description: 'Guide to implementing Internet of Things solutions for business applications.',
      icon: '📡',
      category: 'IoT',
      readTime: '16 min read',
      difficulty: 'Intermediate',
      features: ['Device selection', 'Connectivity options', 'Data processing', 'Security measures', 'Scalability planning'],
      benefits: ['Enable automation', 'Improve efficiency', 'Gather real-time data'],
      technologies: ['MQTT', 'AWS IoT', 'Azure IoT', 'Kubernetes', 'TensorFlow Lite']
    },
    {
      title: 'Quantum Computing Primer',
      description: 'Introduction to quantum computing concepts and practical applications.',
      icon: '⚛️',
      category: 'Quantum Computing',
      readTime: '21 min read',
      difficulty: 'Advanced',
      features: ['Quantum principles', 'Algorithm design', 'Hardware considerations', 'Use cases', 'Future outlook'],
      benefits: ['Understand quantum computing', 'Identify opportunities', 'Prepare for the future'],
      technologies: ['Qiskit', 'Cirq', 'PennyLane', 'Q#', 'Quantum Assembly']
    }
  ];

  const categories = [...new Set(guides.map(guide => guide.category))];

  return (
    <>
      <Helmet>
        <title>Technical Guides - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technical guides and best practices for AI, cloud computing, cybersecurity, and modern software development." />
        <meta name="keywords" content="technical guides, AI implementation, cloud migration, DevOps, cybersecurity, software development" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Technical Guides
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-indigo-100 max-w-3xl mx-auto">
                Expert guides and best practices for modern technology implementation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
                  Browse All Guides
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
                  Request Custom Guide
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Our Guides?
              </h2>
              <p className="text-xl text-gray-600">
                Expert-written guides based on real-world experience and industry best practices
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Knowledge</h3>
                <p className="text-gray-600">Written by industry experts with years of experience</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Practical Focus</h3>
                <p className="text-gray-600">Step-by-step instructions you can implement immediately</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Time-Saving</h3>
                <p className="text-gray-600">Avoid common mistakes and accelerate your learning</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Up-to-Date</h3>
                <p className="text-gray-600">Regularly updated with latest technologies and practices</p>
              </div>
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
                  Comprehensive guides for {category.toLowerCase()} implementation and best practices
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {guides
                  .filter(guide => guide.category === category)
                  .map((guide, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                      <div className="text-4xl mb-4">{guide.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{guide.title}</h3>
                      <p className="text-gray-600 mb-4">{guide.description}</p>
                      
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-gray-500">{guide.readTime}</span>
                          <span className="text-sm text-gray-500">{guide.difficulty}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">What You'll Learn:</h4>
                        <ul className="space-y-1">
                          {guide.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {guide.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                        <ul className="space-y-1">
                          {guide.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                              <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                        Read Guide
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need a Custom Guide?
            </h2>
            <p className="text-xl mb-8 text-indigo-100">
              Contact our experts to create a custom technical guide for your specific needs
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