import React from 'react';
import { CheckCircle, Clock, Users, Award, Phone, Mail, MapPin } from 'lucide-react';

const ConsultationPage: React.FC = () => {
  const consultationTypes = [
    {
      name: 'AI Strategy Consultation',
      duration: '2 hours',
      price: 'Free',
      description: 'Comprehensive AI strategy assessment and implementation roadmap',
      features: [
        'AI readiness assessment',
        'Technology evaluation',
        'Implementation roadmap',
        'ROI analysis',
        'Risk assessment'
      ]
    },
    {
      name: 'Technical Deep Dive',
      duration: '4 hours',
      price: '$500',
      description: 'Detailed technical analysis of your current systems and AI integration opportunities',
      features: [
        'System architecture review',
        'Data quality assessment',
        'Integration planning',
        'Performance optimization',
        'Security evaluation'
      ]
    },
    {
      name: 'Executive Briefing',
      duration: '1 hour',
      price: 'Free',
      description: 'High-level overview of AI opportunities and strategic recommendations',
      features: [
        'Market analysis',
        'Competitive landscape',
        'Strategic recommendations',
        'Budget planning',
        'Timeline development'
      ]
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Initial Assessment',
      description: 'We analyze your current technology stack and business requirements',
      duration: '30 minutes'
    },
    {
      step: 2,
      title: 'Strategy Development',
      description: 'Create a customized AI strategy tailored to your business goals',
      duration: '1-2 hours'
    },
    {
      step: 3,
      title: 'Implementation Plan',
      description: 'Develop a detailed roadmap with timelines and resource requirements',
      duration: '1 hour'
    },
    {
      step: 4,
      title: 'Follow-up Support',
      description: 'Ongoing support and guidance throughout your AI journey',
      duration: 'Ongoing'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Free AI Consultation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Get expert guidance on your AI journey. Our experienced consultants will help you 
            identify opportunities, develop strategies, and create implementation plans tailored to your business.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300">Consultations</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">24h</div>
              <div className="text-gray-300">Response Time</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">Free</div>
              <div className="text-gray-300">Initial Consultation</div>
            </div>
          </div>
        </div>

        {/* Consultation Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Consultation Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {consultationTypes.map((consultation, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{consultation.name}</h3>
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <span className="text-2xl font-bold text-green-600">{consultation.price}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-600">{consultation.duration}</span>
                  </div>
                  <p className="text-gray-600">{consultation.description}</p>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {consultation.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all">
                  Schedule Consultation
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Consultation Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-slate-900">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300 mb-2">{step.description}</p>
                <div className="text-sm text-cyan-400">{step.duration}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose Our Consultation?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Expert Team</h3>
              <p className="text-gray-300">Our consultants have 10+ years of experience in AI and enterprise technology</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Proven Results</h3>
              <p className="text-gray-300">We've helped 500+ companies successfully implement AI solutions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Quick Turnaround</h3>
              <p className="text-gray-300">Get actionable insights and recommendations within 24-48 hours</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-purple-100 mb-6">
            Schedule your free consultation today and discover how AI can transform your business.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center">
              <Phone className="w-5 h-5 text-purple-200 mr-2" />
              <span className="text-purple-100">+1 (302) 464-0950</span>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="w-5 h-5 text-purple-200 mr-2" />
              <span className="text-purple-100">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="w-5 h-5 text-purple-200 mr-2" />
              <span className="text-purple-100">Middletown, DE</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call Now
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationPage;