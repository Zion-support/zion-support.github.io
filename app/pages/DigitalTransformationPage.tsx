import React from 'react';
import { Helmet } from 'react-helmet-async';
import { RefreshCw, Users, Target, TrendingUp, Lightbulb, CheckCircle } from 'lucide-react';

const DigitalTransformationPage: React.FC = () => {
  const services = [
    {
      icon: RefreshCw,
      title: 'Process Automation',
      description: 'Streamline and automate business processes to improve efficiency and reduce manual errors.',
      features: ['Workflow Analysis', 'Process Mapping', 'Automation Implementation', 'Performance Monitoring']
    },
    {
      icon: Users,
      title: 'Change Management',
      description: 'Guide your team through digital transformation with effective change management strategies.',
      features: ['Training Programs', 'Communication Plans', 'Resistance Management', 'Success Metrics']
    },
    {
      icon: Target,
      title: 'Digital Strategy',
      description: 'Develop comprehensive digital strategies aligned with your business objectives.',
      features: ['Strategic Planning', 'Technology Roadmap', 'Digital Maturity Assessment', 'Implementation Planning']
    },
    {
      icon: TrendingUp,
      title: 'Data Analytics',
      description: 'Leverage data analytics to make informed decisions and drive business growth.',
      features: ['Data Collection', 'Analytics Implementation', 'Insight Generation', 'Performance Tracking']
    },
    {
      icon: Lightbulb,
      title: 'Innovation Consulting',
      description: 'Foster innovation and identify new opportunities for digital growth.',
      features: ['Innovation Workshops', 'Technology Scouting', 'Pilot Programs', 'Innovation Metrics']
    },
    {
      icon: CheckCircle,
      title: 'Digital Governance',
      description: 'Establish governance frameworks to ensure successful digital transformation.',
      features: ['Governance Models', 'Compliance Management', 'Risk Assessment', 'Quality Assurance']
    }
  ];

  const benefits = [
    'Increased Operational Efficiency',
    'Enhanced Customer Experience',
    'Improved Data-Driven Decision Making',
    'Reduced Operational Costs',
    'Better Employee Productivity',
    'Competitive Advantage',
    'Scalable Business Model',
    'Future-Proof Technology Stack'
  ];

  const process = [
    {
      step: 'Assessment',
      title: 'Current State Analysis',
      description: 'Evaluate your current digital maturity and identify gaps and opportunities.'
    },
    {
      step: 'Strategy',
      title: 'Digital Strategy Development',
      description: 'Create a comprehensive digital transformation roadmap aligned with business goals.'
    },
    {
      step: 'Implementation',
      title: 'Solution Implementation',
      description: 'Execute the transformation plan with minimal disruption to ongoing operations.'
    },
    {
      step: 'Optimization',
      title: 'Continuous Improvement',
      description: 'Monitor performance and continuously optimize digital solutions for better results.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <Helmet>
        <title>Digital Transformation | Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive digital transformation services including process automation, change management, and digital strategy." />
        <meta name="keywords" content="digital transformation, process automation, change management, digital strategy, business transformation" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Digital Transformation
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your business for the digital age with our comprehensive digital transformation services
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              We help businesses modernize their operations, processes, and technology stack to stay competitive 
              and thrive in the digital economy.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Digital Transformation Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions to modernize your business and drive digital growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-400 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Benefits of Digital Transformation</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business and unlock new opportunities for growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-800/30 rounded-lg p-6 text-center hover:bg-slate-800/50 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Transformation Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology to ensure successful digital transformation
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {process.map((step, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {step.step}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-900 to-emerald-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let us help you navigate the digital transformation journey and unlock your business potential.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-green-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Start Your Transformation
              </a>
              <a
                href="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-900 transition-all duration-300"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalTransformationPage;