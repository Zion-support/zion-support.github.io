import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, Brain, Target, Shield, Clock, Users, ArrowRight } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const ITConsultingPage: React.FC = () => {
  const consultingServices = [
    {
      title: 'IT Strategy & Planning',
      description: 'Comprehensive IT strategy development to align technology with business goals and drive digital transformation.',
      icon: '🎯',
      price: '$2,500/month',
      features: [
        'IT Roadmap Development',
        'Technology Assessment',
        'Digital Transformation Planning',
        'ROI Analysis',
        'Risk Assessment',
        'Implementation Planning'
      ],
      benefits: [
        'Align IT with business goals',
        'Reduce technology costs by 30%',
        'Improve operational efficiency',
        'Future-proof your technology'
      ],
      marketPrice: '$5,000-10,000/month',
      category: 'Strategic Planning',
      technologies: ['Enterprise Architecture', 'Cloud Strategy', 'Security Planning', 'Digital Transformation', 'Business Analysis', 'Project Management'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Cloud Migration Consulting',
      description: 'Expert guidance for migrating your infrastructure to the cloud with minimal disruption and maximum benefits.',
      icon: '☁️',
      price: '$3,000/month',
      features: [
        'Cloud Readiness Assessment',
        'Migration Strategy',
        'Cost Optimization',
        'Security & Compliance',
        'Performance Optimization',
        'Training & Support'
      ],
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improve scalability and flexibility',
        'Enhance security posture',
        'Enable remote work capabilities'
      ],
      marketPrice: '$6,000-12,000/month',
      category: 'Cloud Migration',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Migration Tools', 'Security Tools', 'Monitoring Solutions'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Cybersecurity Consulting',
      description: 'Comprehensive cybersecurity assessment and strategy development to protect your organization from threats.',
      icon: '🔒',
      price: '$2,000/month',
      features: [
        'Security Assessment',
        'Vulnerability Analysis',
        'Compliance Review',
        'Security Strategy',
        'Incident Response Planning',
        'Security Training'
      ],
      benefits: [
        'Reduce security risks by 80%',
        'Achieve compliance requirements',
        'Protect sensitive data',
        'Improve security awareness'
      ],
      marketPrice: '$4,000-8,000/month',
      category: 'Cybersecurity',
      technologies: ['Security Frameworks', 'Penetration Testing', 'Compliance Tools', 'Security Monitoring', 'Risk Management', 'Incident Response'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  const industries = [
    {
      title: 'Healthcare',
      description: 'HIPAA-compliant IT consulting for medical facilities',
      icon: '🏥',
      results: ['HIPAA compliance', 'Patient data security', 'Operational efficiency']
    },
    {
      title: 'Financial Services',
      description: 'Regulatory-compliant IT consulting for financial institutions',
      icon: '🏦',
      results: ['Regulatory compliance', 'Risk mitigation', 'Operational excellence']
    },
    {
      title: 'Manufacturing',
      description: 'Industrial IT consulting for manufacturing operations',
      icon: '🏭',
      results: ['Process optimization', 'Cost reduction', 'Quality improvement']
    },
    {
      title: 'Education',
      description: 'Educational IT consulting for schools and universities',
      icon: '🎓',
      results: ['Student experience', 'Administrative efficiency', 'Cost optimization']
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Consulting Services - Zion Tech Group</title>
        <meta name="description" content="Expert IT consulting services for strategy, cloud migration, and cybersecurity. Align technology with business goals and drive digital transformation." />
        <meta name="keywords" content="IT consulting, technology strategy, cloud migration, cybersecurity consulting, digital transformation, IT planning" />
        <link rel="canonical" href="https://ziontechgroup.com/it-consulting" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Consulting</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Expert IT consulting services to align your technology with business goals and drive successful digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-16 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">IT Consulting Services</h2>
              <p className="text-xl text-gray-300">Strategic technology guidance for modern businesses</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {consultingServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-3xl font-bold text-cyan-400">${service.price.replace('$', '').replace('/month', '')}</span>
                      <span className="text-sm text-gray-400">/month</span>
                    </div>
                    <div className="text-sm text-gray-400 line-through">Market: {service.marketPrice}</div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
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
                          <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm text-gray-400 mb-4">{service.contactInfo}</p>
                    <a
                      href="tel:+13024640950"
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-center block"
                    >
                      Get Started Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Industries Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Industry Expertise</h2>
              <p className="text-xl text-gray-300">Specialized IT consulting for various industries</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-3xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{industry.title}</h3>
                  <p className="text-gray-300 mb-4">{industry.description}</p>
                  <ul className="space-y-2">
                    {industry.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="text-sm text-cyan-400 flex items-center">
                        <ArrowRight className="w-3 h-3 mr-2" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your IT Strategy?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our expert IT consultants help you align technology with business goals and drive successful digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default ITConsultingPage;