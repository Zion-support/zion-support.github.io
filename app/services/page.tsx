import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Brain, Cloud, Zap, Shield, Code, BarChart, Users, Settings } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const aiServices = [
    {
      icon: Brain,
      title: 'AI Analytics',
      description: 'Advanced data insights and predictive analytics powered by machine learning.',
      features: ['Predictive Analytics', 'Data Visualization', 'Real-time Insights', 'Custom Dashboards']
    },
    {
      icon: Zap,
      title: 'AI Automation',
      description: 'Streamline your business processes with intelligent automation solutions.',
      features: ['Process Automation', 'Workflow Optimization', 'Task Automation', 'Smart Scheduling']
    },
    {
      icon: Users,
      title: 'AI CRM',
      description: 'Enhance customer relationships with AI-powered customer management systems.',
      features: ['Customer Insights', 'Lead Scoring', 'Automated Follow-ups', 'Personalization']
    },
    {
      icon: Shield,
      title: 'AI Cybersecurity',
      description: 'Protect your business with advanced AI-driven security solutions.',
      features: ['Threat Detection', 'Anomaly Detection', 'Automated Response', 'Risk Assessment']
    }
  ];

  const itServices = [
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable and secure cloud infrastructure solutions for modern businesses.',
      features: ['Cloud Migration', 'Infrastructure Setup', 'Scalability', 'Security']
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications and websites built with modern technologies.',
      features: ['Custom Development', 'Responsive Design', 'Performance Optimization', 'SEO']
    },
    {
      icon: Settings,
      title: 'DevOps',
      description: 'Streamline your development and deployment processes with DevOps practices.',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring', 'Automation']
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics tools.',
      features: ['Data Processing', 'Business Intelligence', 'Reporting', 'Visualization']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive AI and IT solutions designed to transform your business and drive growth.
          </p>
        </section>

        {/* AI Services Section */}
        <section className="py-16 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">AI Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Harness the power of artificial intelligence to transform your business operations and gain competitive advantages.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="text-center mb-6">
                    <service.icon className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/ai-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block w-full text-center bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 py-2 px-4 rounded-lg transition-colors"
                  >
                    Learn More
                    <ArrowRight className="inline-block ml-2 w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Section */}
        <section className="py-16 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">IT Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT solutions to support your business infrastructure and technology needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="text-center mb-6">
                    <service.icon className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block w-full text-center bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 py-2 px-4 rounded-lg transition-colors"
                  >
                    Learn More
                    <ArrowRight className="inline-block ml-2 w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We follow a proven methodology to ensure successful project delivery and maximum value.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery', description: 'We analyze your business needs and challenges to understand your requirements.' },
                { step: '02', title: 'Planning', description: 'We create a detailed project plan with timelines, milestones, and deliverables.' },
                { step: '03', title: 'Development', description: 'Our team builds and implements the solution using cutting-edge technologies.' },
                { step: '04', title: 'Deployment', description: 'We deploy the solution and provide ongoing support and maintenance.' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and explore how our solutions can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicesPage;