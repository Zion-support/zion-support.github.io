import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PagePage: React.FC = () => {
  const features = [
    {
      id: 'strategy',
      name: 'IT Strategy Consultation',
      description: 'Comprehensive analysis of your current IT infrastructure and strategic planning for digital transformation.',
      duration: '2-4 hours',
      price: '$500',
      features: [
        'Current IT assessment',
        'Technology roadmap development',
        'Budget planning and optimization',
        'Risk analysis and mitigation',
        'Implementation timeline'
      ],
      popular: true
    },
    {
      id: 'cloud',
      name: 'Cloud Migration Consultation',
      description: 'Expert guidance on migrating your infrastructure to the cloud with minimal disruption.',
      duration: '3-5 hours',
      price: '$750',
      features: [
        'Cloud readiness assessment',
        'Migration strategy development',
        'Cost optimization analysis',
        'Security and compliance review',
        'Post-migration support plan'
      ],
      popular: false
    },
    {
      id: 'security',
      name: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment and recommendations to protect your digital assets.',
      duration: '4-6 hours',
      price: '$1000',
      features: [
        'Security vulnerability assessment',
        'Compliance audit (HIPAA, GDPR, etc.)',
        'Penetration testing',
        'Security policy review',
        'Incident response planning'
      ],
      popular: false
    },
    {
      id: 'ai',
      name: 'AI Implementation Strategy',
      description: 'Strategic planning for AI adoption and integration into your business processes.',
      duration: '3-4 hours',
      price: '$800',
      features: [
        'AI readiness assessment',
        'Use case identification',
        'Technology stack selection',
        'ROI analysis and projections',
        'Implementation roadmap'
      ],
      popular: true
    }
  ];

  const benefits = [
    'Expert guidance from certified professionals',
    'Tailored solutions for your specific needs',
    'Comprehensive analysis and recommendations',
    'Follow-up support and implementation guidance',
    'Cost-effective technology investments',
    'Reduced implementation risks'
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Initial Assessment',
      description: 'We analyze your current technology stack and business requirements.',
      icon: CheckCircle
    },
    {
      step: 2,
      title: 'Strategy Development',
      description: 'We create a customized technology strategy based on your goals.',
      icon: Users
    },
    {
      step: 3,
      title: 'Implementation Plan',
      description: 'We provide a detailed roadmap with timelines and milestones.',
      icon: Calendar
    },
    {
      step: 4,
      title: 'Ongoing Support',
      description: 'We offer continued guidance throughout the implementation process.',
      icon: ArrowRight
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Consultation Services | Zion Tech Group</title>
        <meta name="description" content="Expert IT consultation services to help your business make informed technology decisions. Strategic planning, cloud migration, cybersecurity, and AI implementation guidance." />
        <meta name="keywords" content="IT consultation, technology consulting, cloud migration, cybersecurity audit, AI strategy, digital transformation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">IT Consultation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Get expert guidance on your technology decisions. Our certified consultants help you navigate complex IT challenges and make informed choices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Consultation
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Consultation Types */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Consultation Services</h2>
              <p className="text-xl text-gray-300">Choose the consultation type that best fits your needs</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {consultationTypes.map((type) => (
                <div
                  key={type.id}
                  className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 border ${
                    type.popular ? 'border-purple-400 shadow-2xl shadow-purple-500/25' : 'border-white/20'
                  } hover:border-purple-400 transition-all duration-300 cursor-pointer`}
                  onClick={() => setSelectedType(type.id)}
                >
                  {type.popular && (
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-purple-400 text-sm font-semibold">Most Popular</span>
                    </div>
                  )}
                  
                  <h3 className="text-xl font-bold text-white mb-2">{type.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{type.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400 text-sm">Duration</span>
                      <span className="text-white font-semibold">{type.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Price</span>
                      <span className="text-2xl font-bold text-purple-400">{type.price}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {type.features.map((feature, index) => (
                      <li key={index} className="text-gray-300 text-sm flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300">
                    Select This Service
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Consultation Process</h2>
              <p className="text-xl text-gray-300">A structured approach to delivering expert guidance</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">Step {step.step}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Consultation Services?</h2>
              <p className="text-xl text-gray-300">Get the expertise you need to make informed technology decisions</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-white font-semibold">{benefit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Get Expert Guidance?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Schedule a consultation with our experts and take the first step towards optimizing your technology infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Consultation
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PagePage;