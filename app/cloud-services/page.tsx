import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Cloud, Zap, Shield, BarChart } from 'lucide-react';

const CloudServicesPage: React.FC = () => {
  const cloudServices = [
    {
      title: 'Cloud Migration',
      description: 'Seamless migration to AWS, Azure, or Google Cloud with zero downtime and cost optimization.',
      icon: '☁️',
      price: 'Starting at $5,000/project',
      features: ['Zero downtime migration', 'Cost optimization', 'Security enhancement', 'Scalability planning'],
      benefits: ['Reduce infrastructure costs by 40%', 'Improve scalability', 'Enhance security posture'],
      category: 'Migration'
    },
    {
      title: 'Cloud Infrastructure Management',
      description: 'Complete cloud infrastructure setup, monitoring, and optimization for your business needs.',
      icon: '🏗️',
      price: 'Starting at $2,500/month',
      features: ['Infrastructure as Code', 'Auto-scaling', 'Load balancing', 'Monitoring & alerting'],
      benefits: ['99.9% uptime guarantee', 'Automatic scaling', 'Cost optimization'],
      category: 'Infrastructure'
    },
    {
      title: 'Cloud Security Solutions',
      description: 'Comprehensive cloud security including compliance, threat detection, and data protection.',
      icon: '🔒',
      price: 'Starting at $3,500/month',
      features: ['Identity & Access Management', 'Data encryption', 'Compliance management', 'Threat detection'],
      benefits: ['Meet compliance requirements', 'Protect sensitive data', 'Prevent security breaches'],
      category: 'Security'
    },
    {
      title: 'Cloud DevOps & CI/CD',
      description: 'Automated deployment pipelines and continuous integration for faster, more reliable releases.',
      icon: '🔄',
      price: 'Starting at $2,000/month',
      features: ['CI/CD pipelines', 'Container orchestration', 'Infrastructure automation', 'Testing automation'],
      benefits: ['Deploy 10x faster', 'Reduce deployment errors', 'Improve team productivity'],
      category: 'DevOps'
    },
    {
      title: 'Cloud Data Analytics',
      description: 'Big data processing and analytics on cloud platforms for actionable business insights.',
      icon: '📊',
      price: 'Starting at $4,000/month',
      features: ['Data warehousing', 'Real-time analytics', 'Machine learning integration', 'Data visualization'],
      benefits: ['Process large datasets', 'Get real-time insights', 'Make data-driven decisions'],
      category: 'Analytics'
    },
    {
      title: 'Multi-Cloud Strategy',
      description: 'Optimize costs and performance with a multi-cloud approach across different providers.',
      icon: '🌐',
      price: 'Starting at $6,000/month',
      features: ['Multi-cloud architecture', 'Cost optimization', 'Vendor lock-in prevention', 'Disaster recovery'],
      benefits: ['Reduce vendor dependency', 'Optimize costs', 'Improve resilience'],
      category: 'Strategy'
    }
  ];

  const categories = [...new Set(cloudServices.map(service => service.category))];

  return (
    <>
      <Helmet>
        <title>Cloud Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud services including migration, infrastructure management, security, and DevOps solutions for enterprise businesses." />
        <meta name="keywords" content="cloud services, cloud migration, AWS, Azure, Google Cloud, cloud security, DevOps, cloud infrastructure" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cloud Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Transform your business with comprehensive cloud solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Get Cloud Consultation
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
                Expert cloud architects with proven experience across all major cloud platforms
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cloud Experts</h3>
                <p className="text-gray-600">Certified architects with 10+ years experience</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Deployment</h3>
                <p className="text-gray-600">Deploy cloud solutions in weeks, not months</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security and compliance</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cost Optimization</h3>
                <p className="text-gray-600">Reduce cloud costs by up to 40%</p>
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
                  Professional {category.toLowerCase()} solutions for your cloud infrastructure
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
                        <div className="text-2xl font-bold text-blue-600 mb-2">{service.price}</div>
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

                      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                        Get Cloud Consultation
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}

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
