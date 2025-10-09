import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, GitBranch, Zap, Shield, BarChart, Settings, Users } from 'lucide-react';

const DevOpsPage: React.FC = () => {
  const devOpsServices = [
    {
      title: 'CI/CD Pipeline Setup',
      description: 'Automated deployment pipelines with testing, building, and deployment automation.',
      icon: '🔄',
      price: '$1,799/month',
      features: ['Automated testing', 'Build automation', 'Deployment automation', 'Rollback capabilities', 'Environment management'],
      benefits: ['Reduce deployment time by 80%', 'Eliminate manual errors', 'Improve code quality'],
      marketPrice: '$3,000-8,000/month',
      category: 'CI/CD',
      technologies: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Azure DevOps', 'CircleCI']
    },
    {
      title: 'Infrastructure as Code',
      description: 'Manage and provision infrastructure using code with version control and automation.',
      icon: '🏗️',
      price: '$2,299/month',
      features: ['Terraform management', 'Ansible automation', 'CloudFormation', 'Version control', 'State management'],
      benefits: ['Consistent infrastructure', 'Version control', 'Automated provisioning'],
      marketPrice: '$4,000-10,000/month',
      category: 'Infrastructure',
      technologies: ['Terraform', 'Ansible', 'CloudFormation', 'Pulumi', 'Chef']
    },
    {
      title: 'Container Orchestration',
      description: 'Kubernetes and Docker container management with scaling and monitoring.',
      icon: '🐳',
      price: '$2,499/month',
      features: ['Kubernetes setup', 'Docker optimization', 'Auto-scaling', 'Service mesh', 'Monitoring'],
      benefits: ['Improve scalability', 'Reduce costs', 'Enhance reliability'],
      marketPrice: '$4,500-12,000/month',
      category: 'Containers',
      technologies: ['Kubernetes', 'Docker', 'Helm', 'Istio', 'Prometheus']
    },
    {
      title: 'Monitoring & Observability',
      description: 'Comprehensive monitoring, logging, and alerting for applications and infrastructure.',
      icon: '📊',
      price: '$1,499/month',
      features: ['Application monitoring', 'Infrastructure monitoring', 'Log aggregation', 'Alerting', 'Dashboards'],
      benefits: ['Proactive issue detection', 'Improved uptime', 'Better performance'],
      marketPrice: '$2,500-6,000/month',
      category: 'Monitoring',
      technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'New Relic', 'DataDog']
    }
  ];

  const categories = [...new Set(devOpsServices.map(service => service.category))];

  return (
    <>
      <Helmet>
        <title>DevOps Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive DevOps services including CI/CD, infrastructure as code, container orchestration, and monitoring for enterprise businesses." />
        <meta name="keywords" content="DevOps, CI/CD, infrastructure as code, Kubernetes, Docker, monitoring, automation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                DevOps Services & Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
                Accelerate your development with comprehensive DevOps services including CI/CD, automation, and monitoring
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                  Start DevOps Journey
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                  View DevOps Solutions
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
                Why Choose Our DevOps Services?
              </h2>
              <p className="text-xl text-gray-600">
                Expert DevOps solutions delivered by certified professionals with proven enterprise experience
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GitBranch className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">CI/CD Expertise</h3>
                <p className="text-gray-600">Automated pipelines that deploy code faster and more reliably</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Automation</h3>
                <p className="text-gray-600">Eliminate manual processes with intelligent automation</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Security</h3>
                <p className="text-gray-600">Secure DevOps practices with compliance and governance</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Monitoring</h3>
                <p className="text-gray-600">Comprehensive monitoring and observability solutions</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services by Category */}
        {categories.map(category => (
          <section key={category} className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {category} Solutions
                </h2>
                <p className="text-xl text-gray-600">
                  Advanced {category.toLowerCase()} services powered by state-of-the-art DevOps technology
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {devOpsServices
                  .filter(service => service.category === category)
                  .map((service, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl font-bold text-green-600">{service.price}</span>
                          <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                        </div>
                        <div className="text-sm text-green-600 font-semibold">
                          Save up to 50% vs market rates
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
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
                          {service.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Business Benefits:</h4>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                              <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                        Get DevOps Consultation
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your DevOps?
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Contact our DevOps experts for a free consultation and automation strategy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-sm text-green-200">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DevOpsPage;
