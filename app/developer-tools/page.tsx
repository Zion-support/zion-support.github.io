import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, Zap, Shield, Cpu, Target, BarChart, Settings, Cog, Brain, Users, Globe } from 'lucide-react';

const DeveloperToolsPage: React.FC = () => {
  const developerTools = [
    {
      title: 'AI Code Assistant',
      description: 'Intelligent code completion and generation powered by advanced AI models.',
      icon: '🤖',
      price: 'Starting at $99/month',
      features: ['Code completion', 'Bug detection', 'Code generation', 'Refactoring suggestions', 'Documentation'],
      benefits: ['Increase productivity by 40%', 'Reduce bugs by 60%', 'Accelerate development'],
      marketPrice: '$200-500/month',
      category: 'AI Tools',
      technologies: ['OpenAI GPT', 'GitHub Copilot', 'Custom Models', 'VS Code', 'JetBrains']
    },
    {
      title: 'Automated Testing Suite',
      description: 'Comprehensive testing automation with AI-powered test generation and execution.',
      icon: '🧪',
      price: 'Starting at $199/month',
      features: ['Unit testing', 'Integration testing', 'E2E testing', 'Performance testing', 'Security testing'],
      benefits: ['Reduce testing time by 70%', 'Improve code quality', 'Catch bugs early'],
      marketPrice: '$400-1,000/month',
      category: 'Testing',
      technologies: ['Jest', 'Cypress', 'Selenium', 'Playwright', 'Custom Frameworks']
    },
    {
      title: 'Code Quality Analyzer',
      description: 'Advanced code analysis and quality metrics with automated recommendations.',
      icon: '📊',
      price: 'Starting at $149/month',
      features: ['Code metrics', 'Complexity analysis', 'Security scanning', 'Performance analysis', 'Best practices'],
      benefits: ['Improve code quality', 'Reduce technical debt', 'Enhance maintainability'],
      marketPrice: '$300-800/month',
      category: 'Quality',
      technologies: ['SonarQube', 'ESLint', 'Prettier', 'Custom Rules', 'CI/CD Integration']
    },
    {
      title: 'API Development Platform',
      description: 'Complete API development and management platform with automated documentation.',
      icon: '🔌',
      price: 'Starting at $299/month',
      features: ['API design', 'Mock servers', 'Documentation', 'Testing', 'Monitoring'],
      benefits: ['Accelerate API development', 'Improve documentation', 'Enhance collaboration'],
      marketPrice: '$600-1,500/month',
      category: 'API Tools',
      technologies: ['OpenAPI', 'Swagger', 'Postman', 'GraphQL', 'REST']
    },
    {
      title: 'DevOps Automation',
      description: 'Comprehensive DevOps automation with CI/CD pipelines and infrastructure management.',
      icon: '⚙️',
      price: 'Starting at $399/month',
      features: ['CI/CD pipelines', 'Infrastructure as Code', 'Monitoring', 'Deployment automation', 'Security scanning'],
      benefits: ['Reduce deployment time', 'Improve reliability', 'Enhance security'],
      marketPrice: '$800-2,000/month',
      category: 'DevOps',
      technologies: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'AWS/Azure']
    },
    {
      title: 'Database Management Tools',
      description: 'Advanced database development and management tools with AI-powered optimization.',
      icon: '🗄️',
      price: 'Starting at $199/month',
      features: ['Query optimization', 'Schema management', 'Migration tools', 'Performance monitoring', 'Backup automation'],
      benefits: ['Optimize database performance', 'Simplify migrations', 'Ensure data integrity'],
      marketPrice: '$400-1,200/month',
      category: 'Database',
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Custom Tools']
    },
    {
      title: 'Frontend Development Kit',
      description: 'Complete frontend development toolkit with modern frameworks and AI assistance.',
      icon: '🎨',
      price: 'Starting at $149/month',
      features: ['Component library', 'Design system', 'State management', 'Testing tools', 'Build optimization'],
      benefits: ['Accelerate frontend development', 'Ensure consistency', 'Improve user experience'],
      marketPrice: '$300-800/month',
      category: 'Frontend',
      technologies: ['React', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS']
    },
    {
      title: 'Mobile Development Suite',
      description: 'Comprehensive mobile app development tools with cross-platform capabilities.',
      icon: '📱',
      price: 'Starting at $249/month',
      features: ['Cross-platform development', 'Native performance', 'Testing tools', 'Deployment automation', 'Analytics'],
      benefits: ['Reduce development time', 'Reach more platforms', 'Improve performance'],
      marketPrice: '$500-1,500/month',
      category: 'Mobile',
      technologies: ['React Native', 'Flutter', 'Xamarin', 'NativeScript', 'Custom Tools']
    },
    {
      title: 'Security Testing Tools',
      description: 'Advanced security testing and vulnerability assessment tools for applications.',
      icon: '🔒',
      price: 'Starting at $299/month',
      features: ['Vulnerability scanning', 'Penetration testing', 'Code analysis', 'Dependency checking', 'Compliance'],
      benefits: ['Identify security issues', 'Ensure compliance', 'Protect applications'],
      marketPrice: '$600-2,000/month',
      category: 'Security',
      technologies: ['OWASP', 'SAST', 'DAST', 'Dependency Scanning', 'Custom Rules']
    },
    {
      title: 'Performance Monitoring',
      description: 'Real-time application performance monitoring with AI-powered insights and alerts.',
      icon: '📈',
      price: 'Starting at $199/month',
      features: ['Real-time monitoring', 'Performance metrics', 'Error tracking', 'User analytics', 'Alerting'],
      benefits: ['Improve performance', 'Reduce downtime', 'Enhance user experience'],
      marketPrice: '$400-1,200/month',
      category: 'Monitoring',
      technologies: ['APM', 'Log Analysis', 'Metrics', 'Alerting', 'Dashboards']
    },
    {
      title: 'Documentation Generator',
      description: 'Automated documentation generation and maintenance for code and APIs.',
      icon: '📚',
      price: 'Starting at $99/month',
      features: ['Code documentation', 'API documentation', 'User guides', 'Technical specs', 'Maintenance'],
      benefits: ['Improve documentation quality', 'Reduce maintenance effort', 'Enhance collaboration'],
      marketPrice: '$200-600/month',
      category: 'Documentation',
      technologies: ['JSDoc', 'OpenAPI', 'Markdown', 'Custom Generators', 'CI/CD Integration']
    },
    {
      title: 'Code Review Assistant',
      description: 'AI-powered code review tool with automated suggestions and best practices.',
      icon: '👀',
      price: 'Starting at $149/month',
      features: ['Automated reviews', 'Best practices', 'Security checks', 'Performance analysis', 'Team collaboration'],
      benefits: ['Improve code quality', 'Reduce review time', 'Share knowledge'],
      marketPrice: '$300-800/month',
      category: 'Code Review',
      technologies: ['AI Analysis', 'Git Integration', 'Custom Rules', 'Team Tools', 'Reporting']
    }
  ];

  const categories = [...new Set(developerTools.map(tool => tool.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Developer Tools
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              AI-powered development tools and platforms to accelerate your software development
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Get Developer Tools
              </Link>
              <Link 
                to="/micro-saas"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Micro SAAS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Developer Tools?
            </h2>
            <p className="text-xl text-gray-600">
              AI-powered tools designed to accelerate development and improve code quality
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered</h3>
              <p className="text-gray-600">Intelligent tools that learn and adapt to your development workflow</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Productivity Boost</h3>
              <p className="text-gray-600">Increase development speed and efficiency with automated tools</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Focus</h3>
              <p className="text-gray-600">Ensure code quality and security with automated analysis and testing</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Integration</h3>
              <p className="text-gray-600">Seamlessly integrate with your existing development environment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools by Category */}
      {categories.map(category => (
        <section key={category} className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {category} Tools
              </h2>
              <p className="text-xl text-gray-600">
                Specialized {category.toLowerCase()} solutions for modern development
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {developerTools
                .filter(tool => tool.category === category)
                .map((tool, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="text-4xl mb-4">{tool.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{tool.title}</h3>
                    <p className="text-gray-600 mb-4">{tool.description}</p>
                    
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl font-bold text-blue-600">{tool.price}</span>
                        <span className="text-sm text-gray-500">Market: {tool.marketPrice}</span>
                      </div>
                      <div className="text-sm text-green-600 font-semibold">
                        Save up to 50% vs market rates
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {tool.features.map((feature, featureIndex) => (
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
                        {tool.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Developer Benefits:</h4>
                      <ul className="space-y-1">
                        {tool.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                            <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link 
                      to="/contact"
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
                    >
                      Get Developer Tools
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </section>
      ))}

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Accelerate Your Development?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Our developer tools can help you build faster, better, and more secure applications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              📞 +1 302 464 0950
            </Link>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-blue-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeveloperToolsPage;
