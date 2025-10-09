import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const DeveloperToolsPage: React.FC = () => {
  const devTools = [
    {
      title: 'AI Code Generator',
      description: 'Generate high-quality code using advanced AI models',
      icon: Code,
      features: ['Multi-language Support', 'Code Completion', 'Bug Detection', 'Documentation Generation'],
      benefits: ['Increase Productivity by 60%', 'Reduce Coding Time by 50%', 'Improve Code Quality', 'Learn Best Practices'],
      price: 'Starting at $99/month'
    },
    {
      title: 'API Testing Suite',
      description: 'Comprehensive API testing and monitoring tools',
      icon: Zap,
      features: ['Automated Testing', 'Performance Monitoring', 'Load Testing', 'API Documentation'],
      benefits: ['Ensure API Reliability', 'Reduce Testing Time by 70%', 'Improve Performance', 'Prevent Downtime'],
      price: 'Starting at $149/month'
    },
    {
      title: 'Database Management Tool',
      description: 'Advanced database administration and optimization',
      icon: BarChart,
      features: ['Query Optimization', 'Performance Monitoring', 'Backup Management', 'Schema Design'],
      benefits: ['Improve Database Performance', 'Reduce Query Time by 80%', 'Automate Backups', 'Prevent Data Loss'],
      price: 'Starting at $199/month'
    },
    {
      title: 'DevOps Automation',
      description: 'Streamline development and deployment processes',
      icon: Target,
      features: ['CI/CD Pipelines', 'Container Management', 'Monitoring', 'Deployment Automation'],
      benefits: ['Faster Deployments', 'Reduce Errors by 90%', 'Improve Collaboration', 'Scale Efficiently'],
      price: 'Starting at $299/month'
    },
    {
      title: 'Code Review Assistant',
      description: 'AI-powered code review and quality assurance',
      icon: Users,
      features: ['Automated Reviews', 'Security Scanning', 'Code Standards', 'Team Collaboration'],
      benefits: ['Improve Code Quality', 'Catch Bugs Early', 'Enforce Standards', 'Reduce Review Time'],
      price: 'Starting at $79/month'
    },
    {
      title: 'Performance Profiler',
      description: 'Advanced application performance monitoring and optimization',
      icon: TrendingUp,
      features: ['Real-time Monitoring', 'Performance Analysis', 'Bottleneck Detection', 'Optimization Suggestions'],
      benefits: ['Improve App Performance', 'Reduce Load Times', 'Optimize Resources', 'Enhance User Experience'],
      price: 'Starting at $179/month'
    }
  ];

  return (
    <div><Helmet>
        <title>Developer Tools - Zion Tech Group</title>
        <meta name="description" content="AI-powered developer tools and productivity suites. Code generation, API testing, database management, and DevOps automation tools." />
        <meta name="keywords" content="developer tools, AI code generation, API testing, database management, DevOps automation, code review" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Developer Tools
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              AI-powered development tools that accelerate your coding workflow and improve productivity
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-cyan-400 mb-2">60%</div>
                <div className="text-gray-300">Productivity Boost</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
                <div className="text-gray-300">Tools Available</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-purple-400 mb-2">10K+</div>
                <div className="text-gray-300">Active Developers</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-orange-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime</div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span className="text-white font-medium">+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span className="text-white font-medium">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span className="text-white font-medium">Middletown, DE</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Our Developer Tools
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {devTools.map((tool, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <tool.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{tool.title}</h3>
                    <p className="text-gray-600 text-sm">{tool.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-green-600 mb-4">{tool.price}</div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {tool.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                    <ul className="space-y-1">
                      {tool.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-sm text-gray-600 flex items-center">
                          <TrendingUp className="w-3 h-3 text-blue-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-center">
                    <a
                      href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${tool.title}`}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all inline-block"
                    >
                      Get Started Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Supercharge Your Development?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join thousands of developers who have accelerated their productivity with our AI-powered tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default DeveloperToolsPage;