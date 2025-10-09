import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Lightbulb, Target, Users, BarChart } from 'lucide-react';

const ITConsultingPage: React.FC = () => {
  const consultingServices = [
    {
      title: 'IT Strategy & Planning',
      description: 'Comprehensive IT strategy development and technology roadmap planning for digital transformation.',
      icon: '🎯',
      price: '$2,500/month',
      features: [
        'Technology Assessment',
        'Digital Transformation Roadmap',
        'IT Governance Framework',
        'Risk Analysis & Mitigation',
        'ROI Analysis',
        'Change Management'
      ],
      benefits: [
        'Align IT with business goals',
        'Reduce technology costs by 25%',
        'Improve operational efficiency by 40%',
        'Future-proof your technology stack'
      ],
      marketPrice: '$5,000-10,000/month',
      category: 'Strategic Consulting',
      technologies: ['ITIL', 'COBIT', 'Agile', 'DevOps', 'Cloud Architecture', 'Security Frameworks'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Technology Architecture Review',
      description: 'Comprehensive review and optimization of your current technology architecture and infrastructure.',
      icon: '🏗️',
      price: '$2,000/month',
      features: [
        'Architecture Assessment',
        'Performance Analysis',
        'Security Review',
        'Scalability Planning',
        'Integration Strategy',
        'Modernization Roadmap'
      ],
      benefits: [
        'Identify optimization opportunities',
        'Improve system performance by 50%',
        'Reduce technical debt',
        'Enhance security posture'
      ],
      marketPrice: '$4,000-8,000/month',
      category: 'Architecture Consulting',
      technologies: ['Microservices', 'Cloud Native', 'API Design', 'Data Architecture', 'Security Architecture'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Digital Transformation Consulting',
      description: 'End-to-end digital transformation consulting to modernize your business processes and technology.',
      icon: '🚀',
      price: '$3,000/month',
      features: [
        'Process Analysis & Optimization',
        'Technology Selection',
        'Implementation Planning',
        'Change Management',
        'Training & Support',
        'Success Metrics'
      ],
      benefits: [
        'Accelerate digital adoption by 60%',
        'Improve customer experience by 45%',
        'Increase operational efficiency by 50%',
        'Drive innovation and growth'
      ],
      marketPrice: '$6,000-15,000/month',
      category: 'Digital Transformation',
      technologies: ['Cloud Computing', 'AI/ML', 'Automation', 'Data Analytics', 'Mobile Solutions'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Consulting Services - Zion Tech Group</title>
        <meta name="description" content="Expert IT consulting services. Strategic planning, technology architecture, and digital transformation consulting for business growth." />
        <meta name="keywords" content="IT consulting, technology strategy, digital transformation, IT architecture, business technology consulting" />
        <link rel="canonical" href="https://ziontechgroup.com/it-consulting" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Consulting</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Strategic IT consulting services to help you make informed technology decisions and drive digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
                >
                  Get Started
                </a>
                <a
                  href="/demo"
                  className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
                >
                  View Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Consulting Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of IT consulting services designed to drive your business forward.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {consultingServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-purple-400">{service.price}</span>
                      <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                    </div>
                    <span className="text-sm text-green-400 bg-green-400/20 px-2 py-1 rounded">
                      {service.category}
                    </span>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <TrendingUp className="w-4 h-4 text-pink-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Methodologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm text-gray-400 mb-4">{service.contactInfo}</p>
                    <a
                      href="/contact"
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 rounded-lg font-semibold text-center block hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-500/20 to-pink-500/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your IT?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join successful businesses that trust our IT consulting expertise to drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
              >
                Start Your Consulting Journey
              </a>
              <a
                href="tel:+13024640950"
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ITConsultingPage;