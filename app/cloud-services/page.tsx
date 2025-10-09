import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Cloud, Shield, Zap, BarChart, Settings, Users } from 'lucide-react';

const CloudServicesPage: React.FC = () => {
  const cloudServices = [
    {
      title: 'Cloud Migration & Strategy',
      description: 'Complete cloud migration services with zero downtime and optimized cost structure.',
      icon: '☁️',
      price: '$2,999/month',
      features: ['Zero-downtime migration', 'Cost optimization', 'Security assessment', 'Performance tuning', '24/7 monitoring'],
      benefits: ['Reduce infrastructure costs by 40%', 'Improve scalability', 'Enhance security posture'],
      marketPrice: '$5,000-15,000/month',
      category: 'Migration',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Kubernetes']
    },
    {
      title: 'Cloud Infrastructure Management',
      description: 'Comprehensive cloud infrastructure management with automated scaling and monitoring.',
      icon: '🏗️',
      price: '$1,999/month',
      features: ['Auto-scaling', 'Load balancing', 'Monitoring & alerting', 'Backup & recovery', 'Disaster recovery'],
      benefits: ['99.9% uptime guarantee', 'Automated scaling', 'Reduced operational overhead'],
      marketPrice: '$3,500-10,000/month',
      category: 'Infrastructure',
      technologies: ['Docker', 'Kubernetes', 'Ansible', 'Prometheus', 'Grafana']
    },
    {
      title: 'Cloud Security & Compliance',
      description: 'Advanced cloud security services with compliance management and threat protection.',
      icon: '🔒',
      price: '$2,499/month',
      features: ['Security assessment', 'Compliance management', 'Threat detection', 'Access control', 'Audit logging'],
      benefits: ['Meet compliance requirements', 'Prevent security breaches', 'Reduce security risks'],
      marketPrice: '$4,000-12,000/month',
      category: 'Security',
      technologies: ['AWS Security', 'Azure Security', 'CloudTrail', 'CloudWatch', 'SIEM']
    },
    {
      title: 'Cloud DevOps & CI/CD',
      description: 'Automated deployment pipelines and infrastructure as code for cloud environments.',
      icon: '🔄',
      price: '$1,799/month',
      features: ['CI/CD pipelines', 'Infrastructure as Code', 'Automated testing', 'Deployment automation', 'Version control'],
      benefits: ['Faster deployments', 'Reduced errors', 'Improved collaboration'],
      marketPrice: '$3,000-8,000/month',
      category: 'DevOps',
      technologies: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Terraform', 'Ansible']
    },
    {
      title: 'Cloud Cost Optimization',
      description: 'Intelligent cost optimization and resource management for cloud environments.',
      icon: '💰',
      price: '$999/month',
      features: ['Cost analysis', 'Resource optimization', 'Right-sizing', 'Reserved instances', 'Cost forecasting'],
      benefits: ['Reduce costs by 30%', 'Optimize resource usage', 'Predict future costs'],
      marketPrice: '$1,500-5,000/month',
      category: 'Optimization',
      technologies: ['AWS Cost Explorer', 'Azure Cost Management', 'CloudHealth', 'Custom Scripts']
    },
    {
      title: 'Cloud Backup & Disaster Recovery',
      description: 'Comprehensive backup and disaster recovery solutions for cloud environments.',
      icon: '💾',
      price: '$1,299/month',
      features: ['Automated backups', 'Disaster recovery', 'Data replication', 'Recovery testing', 'Compliance backup'],
      benefits: ['Protect critical data', 'Minimize downtime', 'Ensure business continuity'],
      marketPrice: '$2,000-6,000/month',
      category: 'Backup',
      technologies: ['AWS Backup', 'Azure Backup', 'Veeam', 'Commvault', 'Custom Solutions']
    }
  ];

  const categories = [...new Set(cloudServices.map(service => service.category))];

  return (
    <>
      <Helmet>
        <title>Cloud Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud services including migration, infrastructure management, security, and cost optimization for enterprise businesses." />
        <meta name="keywords" content="cloud services, cloud migration, cloud infrastructure, cloud security, AWS, Azure, Google Cloud" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cloud Services & Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Transform your business with comprehensive cloud services including migration, management, and optimization
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Start Cloud Journey
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  View Cloud Solutions
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
                Why Choose Our Cloud Services?
              </h2>
              <p className="text-xl text-gray-600">
                Expert cloud solutions delivered by certified professionals with proven enterprise experience
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Multi-Cloud Expertise</h3>
                <p className="text-gray-600">Certified experts in AWS, Azure, and Google Cloud platforms</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security with compliance and governance</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Deployment</h3>
                <p className="text-gray-600">Deploy cloud solutions in weeks, not months</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cost Optimization</h3>
                <p className="text-gray-600">Reduce cloud costs by up to 40% through optimization</p>
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
                  Advanced {category.toLowerCase()} services powered by state-of-the-art cloud technology
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cloudServices
                  .filter(service => service.category === category)
                  .map((service, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl font-bold text-blue-600">{service.price}</span>
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
                            <span key={techIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
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

                      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                        Get Cloud Consultation
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}

        {/* Cloud Capabilities */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Cloud Capabilities
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive cloud expertise across all major platforms and technologies
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
                <Cloud className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Multi-Cloud Strategy</h3>
                <p className="text-gray-600">Expertise across AWS, Azure, and Google Cloud platforms</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg">
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Security & Compliance</h3>
                <p className="text-gray-600">Enterprise-grade security with compliance management</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg">
                <Settings className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">DevOps & Automation</h3>
                <p className="text-gray-600">Automated deployment and infrastructure management</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-100 rounded-lg">
                <BarChart className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cost Optimization</h3>
                <p className="text-gray-600">Intelligent cost management and resource optimization</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg">
                <Users className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock monitoring and support services</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-lg">
                <Zap className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Scalability</h3>
                <p className="text-gray-600">Auto-scaling solutions for growing businesses</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Move to the Cloud?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact our cloud experts for a free consultation and migration strategy
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
            <div className="mt-8 text-sm text-blue-200">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CloudServicesPage;
