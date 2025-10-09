import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Code, Zap, Shield, BarChart } from 'lucide-react';

const DevOpsPage: React.FC = () => {
  const devopsServices = [
    {
      title: 'CI/CD Pipeline Setup',
      description: 'Automated continuous integration and deployment pipelines for faster, more reliable releases.',
      icon: '🔄',
      price: 'Starting at $3,000/project',
      features: ['Automated testing', 'Deployment automation', 'Rollback capabilities', 'Multi-environment support'],
      benefits: ['Deploy 10x faster', 'Reduce deployment errors', 'Improve team productivity'],
      category: 'Automation'
    },
    {
      title: 'Infrastructure as Code',
      description: 'Manage and provision infrastructure using code for consistency and repeatability.',
      icon: '🏗️',
      price: 'Starting at $2,500/month',
      features: ['Terraform/CloudFormation', 'Version control', 'Environment consistency', 'Cost optimization'],
      benefits: ['Eliminate configuration drift', 'Reduce manual errors', 'Improve scalability'],
      category: 'Infrastructure'
    },
    {
      title: 'Container Orchestration',
      description: 'Docker and Kubernetes setup for scalable, containerized applications.',
      icon: '🐳',
      price: 'Starting at $4,000/month',
      features: ['Docker containerization', 'Kubernetes orchestration', 'Service mesh', 'Auto-scaling'],
      benefits: ['Improve scalability', 'Reduce resource waste', 'Simplify deployments'],
      category: 'Containers'
    },
    {
      title: 'Monitoring & Observability',
      description: 'Comprehensive monitoring, logging, and alerting for your applications and infrastructure.',
      icon: '📊',
      price: 'Starting at $2,000/month',
      features: ['Application monitoring', 'Infrastructure monitoring', 'Log aggregation', 'Alerting systems'],
      benefits: ['Prevent downtime', 'Quick issue resolution', 'Performance optimization'],
      category: 'Monitoring'
    },
    {
      title: 'Security Automation',
      description: 'Automated security scanning, compliance checks, and vulnerability management.',
      icon: '🔒',
      price: 'Starting at $3,500/month',
      features: ['SAST/DAST scanning', 'Dependency scanning', 'Compliance automation', 'Security policies'],
      benefits: ['Improve security posture', 'Automate compliance', 'Reduce security risks'],
      category: 'Security'
    },
    {
      title: 'DevOps Consulting',
      description: 'Strategic DevOps transformation and best practices implementation.',
      icon: '💡',
      price: 'Starting at $5,000/month',
      features: ['Process assessment', 'Tool selection', 'Team training', 'Implementation support'],
      benefits: ['Transform development culture', 'Improve collaboration', 'Accelerate delivery'],
      category: 'Consulting'
    }
  ];

  const categories = [...new Set(devopsServices.map(service => service.category))];

  return (
    <>
      <Helmet>
        <title>DevOps Services - Zion Tech Group</title>
        <meta name="description" content="Professional DevOps services including CI/CD, infrastructure automation, container orchestration, and monitoring solutions." />
        <meta name="keywords" content="DevOps, CI/CD, infrastructure as code, Kubernetes, Docker, monitoring, automation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                DevOps Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
                Accelerate development and deployment with modern DevOps practices
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                  Get DevOps Consultation
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
                Expert DevOps engineers with proven experience in modern development practices
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">DevOps Experts</h3>
                <p className="text-gray-600">Certified engineers with 8+ years experience</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Implementation</h3>
                <p className="text-gray-600">Deploy DevOps practices in weeks</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Security First</h3>
                <p className="text-gray-600">Built-in security and compliance</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
                <p className="text-gray-600">10x faster deployments, 99.9% uptime</p>
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
                  {category} Services
                </h2>
                <p className="text-xl text-gray-600">
                  Professional {category.toLowerCase()} solutions for your development workflow
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {devopsServices
                  .filter(service => service.category === category)
                  .map((service, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      
                      <div className="mb-4">
                        <div className="text-2xl font-bold text-green-600 mb-2">{service.price}</div>
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
              Ready to Transform Your Development Process?
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Contact our DevOps experts for a free consultation and transformation strategy
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
