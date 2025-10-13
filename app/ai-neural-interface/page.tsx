import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  CogIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  LightBulbIcon,
  BrainIcon,
  HeartIcon,
  HandRaisedIcon
} from '@heroicons/react/24/outline';

export default function AINeuralInterfacePage() {
  const neuralServices = [
    {
      title: "Brain-Computer Interface (BCI)",
      description: "Direct neural interface technology that allows users to control devices and applications using only their thoughts.",
      icon: BrainIcon,
      features: [
        "Neural signal processing",
        "Real-time thought recognition",
        "Device control via brainwaves",
        "Multi-channel EEG analysis",
        "Machine learning integration",
        "Accessibility applications"
      ],
      color: "from-purple-500 to-indigo-500",
      price: "Starting at $25,000/month",
      benefits: ["95% accuracy", "Real-time processing", "Non-invasive"],
      useCases: ["Accessibility", "Gaming", "Medical rehabilitation"],
      href: "/ai-bci"
    },
    {
      title: "Neural Prosthetics Control",
      description: "AI-powered neural control systems for advanced prosthetic limbs with natural movement and sensation.",
      icon: HandRaisedIcon,
      features: [
        "Neural signal interpretation",
        "Prosthetic limb control",
        "Sensory feedback simulation",
        "Machine learning adaptation",
        "Real-time responsiveness",
        "Natural movement patterns"
      ],
      color: "from-cyan-500 to-blue-500",
      price: "Starting at $35,000/month",
      benefits: ["Natural control", "Sensory feedback", "Adaptive learning"],
      useCases: ["Medical prosthetics", "Rehabilitation", "Assistive technology"],
      href: "/ai-neural-prosthetics"
    },
    {
      title: "Cognitive Enhancement AI",
      description: "AI systems that enhance human cognitive abilities through neural stimulation and brain training.",
      icon: LightBulbIcon,
      features: [
        "Cognitive performance monitoring",
        "Neural stimulation protocols",
        "Memory enhancement",
        "Focus optimization",
        "Learning acceleration",
        "Mental fatigue reduction"
      ],
      color: "from-green-500 to-emerald-500",
      price: "Starting at $15,000/month",
      benefits: ["Enhanced cognition", "Improved focus", "Better memory"],
      useCases: ["Education", "Professional training", "Medical therapy"],
      href: "/ai-cognitive-enhancement"
    },
    {
      title: "Emotional AI Recognition",
      description: "Advanced AI systems that can read and respond to human emotions through neural and facial analysis.",
      icon: HeartIcon,
      features: [
        "Emotional state detection",
        "Neural emotion mapping",
        "Real-time emotional feedback",
        "Mood prediction algorithms",
        "Therapeutic applications",
        "Social interaction enhancement"
      ],
      color: "from-pink-500 to-rose-500",
      price: "Starting at $12,000/month",
      benefits: ["Emotional intelligence", "Real-time detection", "Therapeutic value"],
      useCases: ["Mental health", "Customer service", "Education"],
      href: "/ai-emotional-recognition"
    },
    {
      title: "Neural Data Analytics",
      description: "AI-powered analysis of neural data for insights into brain function, behavior patterns, and health monitoring.",
      icon: ChartBarIcon,
      features: [
        "Neural pattern analysis",
        "Behavior prediction",
        "Health monitoring",
        "Cognitive assessment",
        "Performance optimization",
        "Risk factor identification"
      ],
      color: "from-orange-500 to-red-500",
      price: "Starting at $18,000/month",
      benefits: ["Deep insights", "Predictive analytics", "Health monitoring"],
      useCases: ["Healthcare", "Research", "Performance optimization"],
      href: "/ai-neural-analytics"
    },
    {
      title: "Telepathic Communication AI",
      description: "Revolutionary AI system that enables direct thought-to-thought communication between individuals.",
      icon: ChatBubbleLeftRightIcon,
      features: [
        "Thought transmission",
        "Neural signal translation",
        "Secure communication",
        "Multi-user networks",
        "Language translation",
        "Privacy protection"
      ],
      color: "from-teal-500 to-cyan-500",
      price: "Starting at $50,000/month",
      benefits: ["Direct communication", "Language independent", "Secure"],
      useCases: ["Military", "Emergency services", "Accessibility"],
      href: "/ai-telepathic-communication"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Neural Interface Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI neural interface solutions including brain-computer interfaces, neural prosthetics, cognitive enhancement, and telepathic communication technology." />
        <meta name="keywords" content="neural interface, brain-computer interface, BCI, neural prosthetics, cognitive enhancement, telepathic communication, AI brain technology" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        {/* Neural Network Background Animation */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-40 h-40 border-2 border-purple-500 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 border-2 border-cyan-500 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-36 h-36 border-2 border-pink-500 rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-40 right-1/3 w-28 h-28 border-2 border-indigo-500 rounded-full animate-pulse delay-700"></div>
          
          {/* Neural connections */}
          <div className="absolute top-32 left-20 w-1 h-20 bg-gradient-to-b from-purple-500 to-cyan-500 animate-pulse"></div>
          <div className="absolute top-48 right-32 w-1 h-16 bg-gradient-to-b from-cyan-500 to-pink-500 animate-pulse delay-300"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              AI Neural Interface
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              The Future of Human-AI Integration
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Breakthrough neural interface technology that creates seamless connections between 
              human minds and artificial intelligence. Experience the next evolution of human-computer 
              interaction through direct neural communication.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Explore Neural Tech
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo" 
                className="group border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                Neural Demo
                <BrainIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Neural Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Neural Interface Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionary AI-powered neural interface technology for the next generation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {neuralServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.title}
                  className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Pricing */}
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-green-400">{service.price}</span>
                  </div>
                  
                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Neural Advantages:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <span key={benefitIndex} className="text-xs bg-purple-900/30 text-purple-300 px-2 py-1 rounded-full">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Use Cases */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Perfect for:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, useCaseIndex) => (
                        <span key={useCaseIndex} className="text-xs bg-cyan-900/30 text-cyan-300 px-2 py-1 rounded-full">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex gap-2">
                    <Link 
                      to={service.href}
                      className="flex-1 inline-flex items-center justify-center gap-2 text-purple-400 hover:text-purple-300 font-semibold group-hover:gap-3 transition-all border border-current px-4 py-2 rounded-lg"
                    >
                      Learn More <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                    <Link 
                      to="/contact"
                      className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-lg font-semibold text-center hover:from-purple-700 hover:to-cyan-700 transition-all"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Neural Technology Benefits */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Neural Revolution
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              How neural interface technology will transform human capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <BrainIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Direct Mind Control</h3>
              <p className="text-gray-300">
                Control devices and applications using only your thoughts with unprecedented precision.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <HandRaisedIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enhanced Prosthetics</h3>
              <p className="text-gray-300">
                Natural control of prosthetic limbs with full sensory feedback and intuitive movement.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <LightBulbIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cognitive Enhancement</h3>
              <p className="text-gray-300">
                Boost memory, focus, and learning capabilities through AI-powered neural stimulation.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <ChatBubbleLeftRightIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Telepathic Communication</h3>
              <p className="text-gray-300">
                Direct thought-to-thought communication without the need for speech or text.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Connect Your Mind?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Experience the future of human-AI interaction today
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <GlobeAltIcon className="w-6 h-6 text-purple-400" />
                <span>ziontechgroup.com</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Schedule Neural Consultation
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Neural Interface Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}