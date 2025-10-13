import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, Calendar, Clock, CheckCircle, ArrowRight, Star, Brain, Shield, Zap, Globe } from 'lucide-react';

const ConsultationPage = () => {
  const consultationTypes = [
    {
      title: 'AI Strategy Consultation',
      description: 'Develop a comprehensive AI strategy for your business',
      duration: '2 hours',
      price: '$500',
      icon: <Brain className="w-8 h-8" />,
      features: [
        'AI readiness assessment',
        'Technology roadmap development',
        'ROI analysis and projections',
        'Implementation timeline',
        'Risk assessment and mitigation',
        'Follow-up support'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Technical Architecture Review',
      description: 'Evaluate and optimize your current technology infrastructure',
      duration: '3 hours',
      price: '$750',
      icon: <Shield className="w-8 h-8" />,
      features: [
        'Infrastructure assessment',
        'Security audit',
        'Performance optimization',
        'Scalability planning',
        'Integration recommendations',
        'Documentation review'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Digital Transformation Planning',
      description: 'Plan your complete digital transformation journey',
      duration: '4 hours',
      price: '$1,000',
      icon: <Zap className="w-8 h-8" />,
      features: [
        'Current state analysis',
        'Future state vision',
        'Change management strategy',
        'Technology selection',
        'Implementation roadmap',
        'Success metrics definition'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Custom Solution Design',
      description: 'Design a tailored solution for your specific needs',
      duration: '6 hours',
      price: '$1,500',
      icon: <Globe className="w-8 h-8" />,
      features: [
        'Requirements gathering',
        'Solution architecture design',
        'Technology stack selection',
        'Integration planning',
        'Implementation strategy',
        'Ongoing support planning'
      ],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Initial Discovery',
      description: 'We learn about your business, challenges, and goals through a detailed questionnaire and initial call.',
      icon: <Users className="w-6 h-6" />
    },
    {
      step: '2',
      title: 'Consultation Session',
      description: 'Interactive session with our experts to dive deep into your specific needs and requirements.',
      icon: <Calendar className="w-6 h-6" />
    },
    {
      step: '3',
      title: 'Analysis & Planning',
      description: 'We analyze your situation and develop a comprehensive plan with actionable recommendations.',
      icon: <Brain className="w-6 h-6" />
    },
    {
      step: '4',
      title: 'Delivery & Follow-up',
      description: 'Receive your detailed report and ongoing support to implement the recommendations.',
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  const benefits = [
    {
      title: 'Expert Guidance',
      description: 'Get advice from experienced AI and technology professionals',
      icon: <Star className="w-6 h-6" />
    },
    {
      title: 'Customized Solutions',
      description: 'Tailored recommendations based on your specific business needs',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'Cost Savings',
      description: 'Avoid costly mistakes and optimize your technology investments',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: 'Fast Implementation',
      description: 'Get actionable insights you can implement immediately',
      icon: <Zap className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Consultation Services - Zion Tech Group | Expert AI & Technology Consulting</title>
        <meta name="description" content="Get expert consultation on AI strategy, digital transformation, and technology architecture. Personalized guidance from our experienced team." />
        <meta name="keywords" content="AI consultation, technology consulting, digital transformation, business strategy, expert guidance" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Expert Consultation
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Get personalized guidance from our expert team to accelerate your AI and digital transformation journey. 
            Make informed decisions with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="/contact"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              <Users className="w-5 h-5 mr-2" />
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Consultation Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the consultation type that best fits your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {consultationTypes.map((consultation, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${consultation.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform`}>
                    {consultation.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{consultation.title}</h3>
                    <p className="text-gray-300">{consultation.description}</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center text-gray-400">
                    <Clock className="w-5 h-5 mr-2" />
                    {consultation.duration}
                  </div>
                  <div className="text-2xl font-bold text-cyan-400">{consultation.price}</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {consultation.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group">
                  Book This Consultation
                  <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Consultation Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A structured approach to ensure you get maximum value from your consultation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <div className="w-8 h-8 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Consultation?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get the expertise and guidance you need to succeed
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Expert Guidance?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Schedule your consultation today and take the first step towards transforming your business with AI and technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="/contact"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              <Users className="w-5 h-5 mr-2" />
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultationPage;