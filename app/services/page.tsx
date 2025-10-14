import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  ArrowRightIcon, 
  CheckIcon,
  ShieldCheckIcon,
  CloudIcon,
  CogIcon,
  ChartBarIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon
} from '@heroicons/react/24/outline';

const ServicesPage = () => {
  const serviceCategories = [
    {
      title: 'AI Services',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      icon: ChartBarIcon,
      services: [
        { 
          name: 'AI Analytics Dashboard Pro', 
          price: '$2,500/month', 
          description: 'Advanced AI-powered analytics and business intelligence platform', 
          features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards', 'Data Visualization'] 
        },
        { 
          name: 'AI Content Generation Pro', 
          price: '$1,800/month', 
          description: 'Automated content creation using cutting-edge AI technology', 
          features: ['Blog Posts', 'Social Media Content', 'Product Descriptions', 'SEO Optimization'] 
        },
        { 
          name: 'AI Customer Support Chatbot', 
          price: '$1,200/month', 
          description: 'Intelligent customer support automation with natural language processing', 
          features: ['24/7 Support', 'Multi-language', 'Context Awareness', 'Escalation Management'] 
        }
      ]
    },
    {
      title: 'Cybersecurity',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      icon: ShieldCheckIcon,
      services: [
        { 
          name: 'Security Assessment', 
          price: '$1,200/month', 
          description: 'Comprehensive security evaluation and vulnerability assessment', 
          features: ['Penetration Testing', 'Security Audit', 'Risk Assessment', 'Compliance Check'] 
        },
        { 
          name: 'Managed Security Services', 
          price: '$2,000/month', 
          description: '24/7 security monitoring and incident response', 
          features: ['24/7 Monitoring', 'Incident Response', 'Threat Detection', 'Security Updates'] 
        },
        { 
          name: 'Identity & Access Management', 
          price: '$1,500/month', 
          description: 'Secure user authentication and authorization systems', 
          features: ['Single Sign-On', 'Multi-Factor Auth', 'User Provisioning', 'Access Control'] 
        }
      ]
    },
    {
      title: 'Cloud Infrastructure',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      icon: CloudIcon,
      services: [
        { 
          name: 'Cloud Migration', 
          price: '$3,000/month', 
          description: 'Seamless migration to cloud platforms with minimal downtime', 
          features: ['Migration Planning', 'Data Transfer', 'Application Migration', 'Performance Optimization'] 
        },
        { 
          name: 'Cloud Management', 
          price: '$2,500/month', 
          description: 'Comprehensive cloud infrastructure management and optimization', 
          features: ['Resource Monitoring', 'Cost Optimization', 'Auto Scaling', 'Backup & Recovery'] 
        },
        { 
          name: 'DevOps Solutions', 
          price: '$2,200/month', 
          description: 'Automated deployment and continuous integration pipelines', 
          features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Logging', 'Performance Tuning'] 
        }
      ]
    },
    {
      title: 'Web Development',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      icon: CodeBracketIcon,
      services: [
        { 
          name: 'Custom Web Applications', 
          price: '$4,000/month', 
          description: 'Tailored web applications built with modern technologies', 
          features: ['Responsive Design', 'Performance Optimization', 'SEO Friendly', 'Cross-browser Compatibility'] 
        },
        { 
          name: 'E-commerce Solutions', 
          price: '$3,500/month', 
          description: 'Complete e-commerce platforms with payment integration', 
          features: ['Payment Processing', 'Inventory Management', 'Order Tracking', 'Analytics Dashboard'] 
        },
        { 
          name: 'API Development', 
          price: '$2,000/month', 
          description: 'RESTful and GraphQL APIs for seamless integration', 
          features: ['RESTful APIs', 'GraphQL', 'Authentication', 'Rate Limiting'] 
        }
      ]
    },
    {
      title: 'Mobile Development',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      icon: DevicePhoneMobileIcon,
      services: [
        { 
          name: 'iOS App Development', 
          price: '$5,000/month', 
          description: 'Native iOS applications with modern design and functionality', 
          features: ['Native Performance', 'App Store Optimization', 'Push Notifications', 'Offline Support'] 
        },
        { 
          name: 'Android App Development', 
          price: '$5,000/month', 
          description: 'Native Android applications with Material Design', 
          features: ['Material Design', 'Google Play Optimization', 'Push Notifications', 'Offline Support'] 
        },
        { 
          name: 'Cross-Platform Apps', 
          price: '$4,000/month', 
          description: 'React Native and Flutter applications for multiple platforms', 
          features: ['Single Codebase', 'Native Performance', 'Hot Reload', 'Platform-specific Features'] 
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Comprehensive AI and IT services including web development, cybersecurity, cloud infrastructure, and mobile app development. Transform your business with our expert solutions." />
        <meta name="keywords" content="AI services, IT services, web development, cybersecurity, cloud infrastructure, mobile development, business solutions" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive AI and IT solutions designed to transform your business and drive growth in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="flex items-center space-x-3 mb-8">
                <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                  <category.icon className={`w-6 h-6 ${category.color}`} />
                </div>
                <h2 className="text-3xl font-bold text-white">{category.title}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                    <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                          <CheckIcon className="w-4 h-4 text-green-400" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact"
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center block"
                    >
                      Get Started
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our experts help you choose the perfect solutions for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Contact Us</span>
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link to="/about"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;