import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Shield, Cloud, ChartBar, Globe, Code, Zap } from "lucide-react";

const ServicesPage = () => {
  const serviceCategories = [
    {
      title: 'AI Services',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      icon: <Zap className="w-6 h-6" />,
      services: [
        { 
          name: 'AI Analytics Dashboard Pro', 
          price: '$1,200/month', 
          description: 'Advanced AI-powered analytics dashboard with real-time insights',
          features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards', 'Data Visualization']
        },
        { 
          name: 'AI Content Generation Pro', 
          price: '$800/month', 
          description: 'Automated content creation using cutting-edge AI technology',
          features: ['Blog Posts', 'Social Media', 'Email Campaigns', 'Product Descriptions']
        },
        { 
          name: 'AI Cybersecurity Suite Pro', 
          price: '$2,000/month', 
          description: 'Comprehensive AI-powered cybersecurity protection',
          features: ['Threat Detection', 'Automated Response', 'Security Monitoring', 'Incident Analysis']
        }
      ]
    },
    {
      title: 'Cybersecurity',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      icon: <Shield className="w-6 h-6" />,
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
        }
      ]
    },
    {
      title: 'Cloud Infrastructure',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      icon: <Cloud className="w-6 h-6" />,
      services: [
        { 
          name: 'Cloud Migration', 
          price: '$3,000/month', 
          description: 'Seamless migration to cloud platforms with minimal downtime',
          features: ['Migration Planning', 'Data Transfer', 'Application Migration', 'Performance Optimization']
        },
        { 
          name: 'Cloud Architecture', 
          price: '$2,500/month', 
          description: 'Scalable and secure cloud infrastructure design',
          features: ['Architecture Design', 'Scalability Planning', 'Security Implementation', 'Cost Optimization']
        }
      ]
    },
    {
      title: 'Digital Transformation',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      icon: <ChartBar className="w-6 h-6" />,
      services: [
        { 
          name: 'Digital Strategy', 
          price: '$2,500/month', 
          description: 'Comprehensive digital transformation strategy and planning',
          features: ['Strategy Development', 'Technology Roadmap', 'Change Management', 'Implementation Planning']
        },
        { 
          name: 'Process Automation', 
          price: '$1,800/month', 
          description: 'Business process automation and workflow optimization',
          features: ['Process Analysis', 'Automation Design', 'Workflow Implementation', 'Performance Monitoring']
        }
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      icon: <Globe className="w-6 h-6" />,
      services: [
        { 
          name: 'Custom SaaS Development', 
          price: '$3,500/month', 
          description: 'Tailored software-as-a-service solutions for specific business needs',
          features: ['Custom Development', 'API Integration', 'User Management', 'Subscription Billing']
        },
        { 
          name: 'API Development', 
          price: '$1,500/month', 
          description: 'RESTful and GraphQL API development and management',
          features: ['API Design', 'Documentation', 'Rate Limiting', 'Analytics']
        }
      ]
    },
    {
      title: 'Web Development',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      icon: <Code className="w-6 h-6" />,
      services: [
        { 
          name: 'Custom Web Applications', 
          price: '$2,000/month', 
          description: 'Bespoke web applications tailored to your business requirements',
          features: ['Custom Development', 'Responsive Design', 'Performance Optimization', 'SEO Integration']
        },
        { 
          name: 'E-commerce Solutions', 
          price: '$2,500/month', 
          description: 'Complete e-commerce platforms with payment integration',
          features: ['Online Store', 'Payment Gateway', 'Inventory Management', 'Order Processing']
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Comprehensive AI and IT services including cybersecurity, cloud infrastructure, digital transformation, and custom software development." />
        <meta name="keywords" content="AI services, IT services, cybersecurity, cloud infrastructure, digital transformation, web development" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive AI and IT solutions designed to transform your business and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
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
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-12 h-12 rounded-lg ${category.bgColor} flex items-center justify-center`}>
                    <div className={category.color}>
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="border border-slate-700/50 rounded-lg p-4 hover:border-cyan-500/50 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-lg font-medium text-white">{service.name}</h4>
                        <span className="text-cyan-400 font-semibold">{service.price}</span>
                      </div>
                      <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                            <CheckCircle className="w-3 h-3 text-green-400" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our experts help you choose the right services for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;