import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Target, Users, BarChart, Shield, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITConsultingPage: React.FC = () => {
  const consultingServices = [
    {
      title: 'IT Strategy & Planning',
      description: 'Comprehensive IT strategy development aligned with business objectives',
      icon: Target,
      features: ['Technology Assessment', 'Roadmap Development', 'Budget Planning', 'Vendor Evaluation'],
      benefits: ['Align IT with Business Goals', 'Optimize Technology Investments', 'Reduce IT Costs by 30%', 'Improve ROI'],
      price: 'Starting at $2,500/month'
    },
    {
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation consulting and implementation',
      icon: Zap,
      features: ['Process Analysis', 'Technology Selection', 'Change Management', 'Implementation Support'],
      benefits: ['Accelerate Digital Adoption', 'Improve Operational Efficiency', 'Enhance Customer Experience', 'Future-proof Business'],
      price: 'Starting at $3,500/month'
    },
    {
      title: 'Cloud Strategy & Migration',
      description: 'Strategic cloud planning and seamless migration services',
      icon: BarChart,
      features: ['Cloud Assessment', 'Migration Planning', 'Cost Optimization', 'Security Implementation'],
      benefits: ['Reduce Infrastructure Costs by 40%', 'Improve Scalability', 'Enhance Security', 'Increase Agility'],
      price: 'Starting at $2,800/month'
    },
    {
      title: 'Cybersecurity Consulting',
      description: 'Comprehensive security assessment and strategy development',
      icon: Shield,
      features: ['Security Audit', 'Risk Assessment', 'Compliance Review', 'Security Strategy'],
      benefits: ['Strengthen Security Posture', 'Achieve Compliance', 'Reduce Security Risks', 'Protect Business Assets'],
      price: 'Starting at $2,200/month'
    },
    {
      title: 'IT Governance & Compliance',
      description: 'Establish effective IT governance and ensure regulatory compliance',
      icon: Users,
      features: ['Governance Framework', 'Policy Development', 'Compliance Monitoring', 'Audit Support'],
      benefits: ['Improve IT Governance', 'Ensure Compliance', 'Reduce Audit Risks', 'Enhance Accountability'],
      price: 'Starting at $1,800/month'
    },
    {
      title: 'Technology Integration',
      description: 'Seamless integration of new technologies with existing systems',
      icon: TrendingUp,
      features: ['System Integration', 'API Development', 'Data Migration', 'Testing & Validation'],
      benefits: ['Improve System Connectivity', 'Reduce Integration Costs', 'Enhance Data Flow', 'Minimize Downtime'],
      price: 'Starting at $2,000/month'
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Consulting Services - Zion Tech Group</title>
        <meta name="description" content="Strategic IT consulting services including digital transformation, cloud strategy, cybersecurity, and technology integration. Expert guidance for your IT initiatives." />
        <meta name="keywords" content="IT consulting, digital transformation, cloud strategy, cybersecurity consulting, IT governance, technology integration" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              IT Consulting Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Strategic IT guidance to transform your business and optimize your technology investments
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-cyan-400 mb-2">15+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-green-400 mb-2">200+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-orange-400 mb-2">$50M+</div>
                <div className="text-gray-300">Cost Savings</div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span className="text-white font-medium">+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span className="text-white font-medium">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span className="text-white font-medium">Middletown, DE</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Our IT Consulting Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {consultingServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-green-600 mb-4">{service.price}</div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-sm text-gray-600 flex items-center">
                          <TrendingUp className="w-3 h-3 text-blue-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-center">
                    <a
                      href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all inline-block"
                    >
                      Get Started Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your IT Strategy?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Let our IT consulting experts help you develop a winning technology strategy.
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

        <Footer />
      </div>
    </>
  );
};

export default ITConsultingPage;