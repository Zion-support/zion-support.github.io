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
        'Workflow Analysis',
        'Process Optimization',
        'Automation Implementation',
        'Integration Management',
        'Performance Monitoring',
        'Continuous Improvement'
      ],
      pricing: 'Starting at $4,500/month'
    },
    {
      icon: Users,
      title: 'Change Management',
      description: 'Guide your organization through digital transformation with effective change management strategies.',
      features: [
        'Change Strategy Development',
        'Stakeholder Engagement',
        'Training & Development',
        'Communication Planning',
        'Resistance Management',
        'Success Measurement'
      ],
      pricing: 'Starting at $3,200/month'
    },
    {
      icon: Target,
      title: 'Digital Strategy',
      description: 'Develop comprehensive digital strategies aligned with your business objectives and market needs.',
      features: [
        'Digital Assessment',
        'Strategy Development',
        'Technology Roadmap',
        'Implementation Planning',
        'ROI Analysis',
        'Performance Tracking'
      ],
      pricing: 'Starting at $5,500/month'
    },
    {
      icon: TrendingUp,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and business intelligence.',
      features: [
        'Data Strategy',
        'Analytics Implementation',
        'Dashboard Development',
        'Predictive Modeling',
        'Data Visualization',
        'Insight Generation'
      ],
      pricing: 'Starting at $3,800/month'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Consulting',
      description: 'Foster innovation and digital culture within your organization to drive continuous improvement.',
      features: [
        'Innovation Assessment',
        'Culture Development',
        'Technology Evaluation',
        'Innovation Labs',
        'Idea Management',
        'Innovation Metrics'
      ],
      pricing: 'Starting at $4,200/month'
    },
    {
      icon: CheckCircle,
      title: 'Digital Governance',
      description: 'Establish governance frameworks to ensure successful digital transformation and compliance.',
      features: [
        'Governance Framework',
        'Policy Development',
        'Risk Management',
        'Compliance Monitoring',
        'Quality Assurance',
        'Audit Support'
      ],
      pricing: 'Starting at $2,800/month'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Digital Transformation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive digital transformation services including process automation, change management, and innovation consulting for modern businesses." />
        <meta name="keywords" content="digital transformation, process automation, change management, digital strategy, innovation consulting" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Digital Transformation
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your business for the digital age
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Our comprehensive digital transformation services help you modernize processes, 
              embrace new technologies, and create a culture of innovation that drives growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-green-400">
                      {service.pricing}
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Digital Transformation Services */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Digital Transformation Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine strategic thinking with technical expertise to deliver transformation that works
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Strategic Approach</h3>
              <p className="text-gray-300">
                We develop comprehensive strategies that align with your business goals and market opportunities.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Change Management</h3>
              <p className="text-gray-300">
                We guide your team through transformation with effective change management and training.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Measurable Results</h3>
              <p className="text-gray-300">
                We track and measure the impact of transformation to ensure you achieve your desired outcomes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Innovation Focus</h3>
              <p className="text-gray-300">
                We help you build a culture of innovation that drives continuous improvement and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let's discuss how our digital transformation services can help you achieve your goals
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Start Your Transformation
              </a>
              <a 
                href="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalTransformationPage;