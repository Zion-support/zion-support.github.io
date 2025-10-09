import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, Settings, Database, Network, Cloud } from 'lucide-react';

const ITConsultingPage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'Strategic IT Planning',
      description: 'Comprehensive IT strategy development aligned with your business objectives and growth plans.',
      features: ['Technology roadmap', 'Digital transformation strategy', 'IT governance framework', 'Risk assessment'],
      price: '$299/hour'
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Design and implement scalable cloud solutions that optimize performance and reduce costs.',
      features: ['Cloud migration planning', 'Multi-cloud strategy', 'Cost optimization', 'Security architecture'],
      price: '$399/hour'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Consulting',
      description: 'Comprehensive security assessments and implementation of enterprise-grade security solutions.',
      features: ['Security audit', 'Compliance assessment', 'Incident response planning', 'Security training'],
      price: '$349/hour'
    },
    {
      icon: Database,
      title: 'Data Strategy',
      description: 'Develop data management strategies and implement solutions for better business intelligence.',
      features: ['Data architecture', 'Analytics strategy', 'Data governance', 'BI implementation'],
      price: '$329/hour'
    },
    {
      icon: Network,
      title: 'Infrastructure Design',
      description: 'Design and optimize IT infrastructure for scalability, reliability, and performance.',
      features: ['Network design', 'Server architecture', 'Disaster recovery', 'Performance optimization'],
      price: '$279/hour'
    },
    {
      icon: Settings,
      title: 'Process Optimization',
      description: 'Streamline IT processes and implement best practices for maximum efficiency.',
      features: ['Process mapping', 'Workflow optimization', 'Automation strategy', 'Change management'],
      price: '$249/hour'
    }
  ];

  const industries = [
    { name: 'Healthcare', description: 'HIPAA-compliant solutions and medical data management' },
    { name: 'Finance', description: 'Secure financial systems and regulatory compliance' },
    { name: 'Manufacturing', description: 'IoT integration and supply chain optimization' },
    { name: 'Retail', description: 'E-commerce platforms and customer experience solutions' },
    { name: 'Education', description: 'Learning management systems and digital transformation' },
    { name: 'Government', description: 'Secure government systems and citizen services' }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Proven Expertise',
      description: '20+ years of experience with Fortune 500 companies and startups'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Bank-level security and compliance for all solutions'
    },
    {
      icon: Clock,
      title: 'Rapid Implementation',
      description: 'Fast-track projects with our proven methodologies'
    },
    {
      icon: Users,
      title: 'Dedicated Team',
      description: 'Assigned experts who understand your business'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Consulting - Zion Tech Group</title>
        <meta name="description" content="Strategic IT consulting services for digital transformation, cloud architecture, cybersecurity, and infrastructure optimization. Expert guidance starting at $249/hour." />
        <meta name="keywords" content="it consulting, digital transformation, cloud architecture, cybersecurity consulting, it strategy, infrastructure design" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            IT Consulting
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Strategic IT guidance and expertise to transform your technology infrastructure and drive business growth.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">20+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">$249</div>
              <div className="text-gray-300">Starting Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
            >
              <Phone className="w-5 h-5 inline mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com?subject=IT Consulting Inquiry"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all"
            >
              <Mail className="w-5 h-5 inline mr-2" />
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Our Consulting Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=${service.title} Consulting`}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold text-center block hover:from-cyan-600 hover:to-blue-700 transition-all"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Industries We Serve
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-3">{industry.name}</h3>
                <p className="text-gray-300 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Why Choose Our Consulting?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300">
                <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Our Consulting Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Assessment</h3>
              <p className="text-gray-300 text-sm">Comprehensive analysis of your current IT infrastructure and business needs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Strategy</h3>
              <p className="text-gray-300 text-sm">Develop a customized IT strategy aligned with your business objectives</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Implementation</h3>
              <p className="text-gray-300 text-sm">Execute the strategy with our expert team and proven methodologies</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Optimization</h3>
              <p className="text-gray-300 text-sm">Continuous monitoring and optimization for maximum performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your IT?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get expert IT consulting guidance and transform your technology infrastructure today.
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
    </div>
  );
};

export default ITConsultingPage;