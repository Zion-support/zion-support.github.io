import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../src/components/SEO';
// import { useAnalytics } from '../src/hooks/useAnalytics';

export default function Services(): JSX.Element {
  // Removed unused visibility state

  // const { trackClick } = useAnalytics();

  const serviceDetails = {
    'ai-ml': {
      title: 'AI & Machine Learning',
      description: 'Transform your business with cutting-edge artificial intelligence and machine learning solutions.',
      features: [
        'Natural Language Processing (NLP)',
        'Computer Vision & Image Recognition',
        'Predictive Analytics',
        'Automated Decision Making',
        'Custom AI Model Development',
        'AI Integration & Deployment'
      ],
      icon: '🤖',
      color: 'from-blue-500 to-purple-600'
    },
    'cloud': {
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and reliable cloud solutions tailored to your business needs.',
      features: [
        'Cloud Migration',
        'Infrastructure as Code',
        'Auto-scaling Solutions',
        'Disaster Recovery',
        'Multi-cloud Architecture',
        'Cloud Cost Optimization'
      ],
      icon: '☁️',
      color: 'from-green-500 to-blue-600'
    },
    'cybersecurity': {
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive security solutions and best practices.',
      features: [
        'Security Audits',
        'Threat Detection',
        'Data Protection',
        'Compliance Management',
        'Zero Trust Architecture',
        'Security Training & Awareness'
      ],
      icon: '🔒',
      color: 'from-red-500 to-orange-600'
    },
    'devops': {
      title: 'DevOps & Automation',
      description: 'Streamline your development and operations with modern DevOps practices.',
      features: [
        'CI/CD Pipeline Setup',
        'Container Orchestration',
        'Infrastructure Automation',
        'Monitoring & Observability',
        'GitOps Implementation',
        'Performance Optimization'
      ],
      icon: '⚙️',
      color: 'from-purple-500 to-pink-600'
    },
    'data': {
      title: 'Data Analytics & BI',
      description: 'Unlock insights from your data with advanced analytics and business intelligence.',
      features: [
        'Data Pipeline Development',
        'Business Intelligence Dashboards',
        'Real-time Analytics',
        'Data Warehousing',
        'Machine Learning Integration',
        'Data Governance'
      ],
      icon: '📊',
      color: 'from-indigo-500 to-cyan-600'
    },
    'mobile': {
      title: 'Mobile Development',
      description: 'Create engaging mobile experiences with cutting-edge app development.',
      features: [
        'Native iOS & Android Apps',
        'Cross-platform Solutions',
        'Progressive Web Apps',
        'Mobile UI/UX Design',
        'App Store Optimization',
        'Mobile Security'
      ],
      icon: '📱',
      color: 'from-yellow-500 to-orange-600'
    }
  };

  return (
    <>
      <SEO 
        title="Services - Zion App"
        description="Comprehensive technology services including AI, cloud infrastructure, and cybersecurity."
        keywords={["services", "AI", "cloud", "cybersecurity", "technology"]}
      />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation. 
              We deliver cutting-edge services that drive innovation and success.
            </p>
            <div className="flex justify-center space-x-4 text-sm text-gray-500">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                24/7 Support
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Expert Team
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Proven Results
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(serviceDetails).map(([key, service]) => (
              <div key={key} className="group bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1 flex-shrink-0">✓</span>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex space-x-3">
                  <Link 
                    href="/contact"
                    className={`flex-1 bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 text-center font-medium transform hover:scale-105`}
                    // onClick={() => trackClick(`service-${key}`, 'engagement')}
                  >
                    Get Started
                  </Link>
                  <Link 
                    href={`/services/${key}`}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-center font-medium"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <div className="bg-white rounded-2xl shadow-xl p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Let's discuss how our comprehensive services can help you achieve your goals and drive innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-medium text-lg"
                >
                  Schedule Consultation
                </Link>
                <Link 
                  href="/portfolio"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium text-lg"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}