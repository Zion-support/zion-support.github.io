import React from 'react';
import { Helmet } from 'react-helmet-async';
import { RefreshCw, Users, Target, TrendingUp, Lightbulb, CheckCircle } from 'lucide-react';

const DigitalTransformationPage: React.FC = () => {
  const services = [
    {
      icon: RefreshCw,
      title: 'Process Automation',
      description: 'Streamline and automate business processes to improve efficiency and reduce manual errors.',
      features: [
        'Workflow automation design',
        'RPA implementation',
        'Process optimization',
        'Change management'
      ]
    },
    {
      icon: Users,
      title: 'Customer Experience',
      description: 'Enhance customer interactions through digital channels and personalized experiences.',
      features: [
        'Digital customer journey mapping',
        'Omnichannel integration',
        'Customer data platform setup',
        'Personalization engines'
      ]
    },
    {
      icon: Target,
      title: 'Data Strategy',
      description: 'Develop comprehensive data strategies to drive informed business decisions.',
      features: [
        'Data architecture design',
        'Analytics platform implementation',
        'Data governance frameworks',
        'Business intelligence solutions'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Performance Analytics',
      description: 'Implement advanced analytics to measure and improve business performance.',
      features: [
        'KPI dashboard development',
        'Predictive analytics models',
        'Real-time monitoring systems',
        'Performance optimization'
      ]
    },
    {
      icon: Lightbulb,
      title: 'Innovation Consulting',
      description: 'Guide your organization through digital innovation and technology adoption.',
      features: [
        'Digital strategy development',
        'Technology roadmap planning',
        'Innovation workshops',
        'Digital culture transformation'
      ]
    },
    {
      icon: CheckCircle,
      title: 'Change Management',
      description: 'Support your team through digital transformation with effective change management.',
      features: [
        'Change impact assessment',
        'Training and development programs',
        'Communication strategies',
        'Adoption monitoring'
      ]
    }
  ];

  const benefits = [
    {
      metric: '40%',
      label: 'Average Efficiency Improvement',
      description: 'Businesses see significant efficiency gains through digital transformation'
    },
    {
      metric: '60%',
      label: 'Cost Reduction',
      description: 'Automation and optimization lead to substantial cost savings'
    },
    {
      metric: '85%',
      label: 'Customer Satisfaction',
      description: 'Improved customer experience through digital channels'
    },
    {
      metric: '3x',
      label: 'Faster Decision Making',
      description: 'Real-time data and analytics enable quicker business decisions'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Digital Transformation - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive digital transformation services. Process automation, data strategy, and innovation consulting." />
        <meta name="keywords" content="digital transformation, process automation, data strategy, innovation consulting, business optimization" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Digital Transformation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform your business for the digital age
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              We help businesses embrace digital technologies to improve operations, 
              enhance customer experiences, and drive sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Digital Transformation Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions to modernize your business operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="w-16 h-16 mb-6 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl flex items-center justify-center">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-gray-300">
                      <span className="text-purple-400 mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transformation Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See the measurable impact of digital transformation on your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-white mb-4">
                  {benefit.metric}
                </div>
                <h3 className="text-xl font-semibold text-purple-400 mb-2">
                  {benefit.label}
                </h3>
                <p className="text-gray-300 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Transformation Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology to guide your digital transformation journey
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Assessment</h3>
                <p className="text-gray-300">We analyze your current state and identify transformation opportunities.</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Strategy</h3>
                <p className="text-gray-300">We develop a comprehensive digital transformation roadmap.</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Implementation</h3>
                <p className="text-gray-300">We execute the transformation with minimal business disruption.</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Optimization</h3>
                <p className="text-gray-300">We continuously monitor and optimize your digital solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how digital transformation can drive growth and efficiency in your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center justify-center"
            >
              Start Your Transformation
            </a>
            <a 
              href="/case-studies" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-300 inline-flex items-center justify-center"
            >
              View Success Stories
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalTransformationPage;