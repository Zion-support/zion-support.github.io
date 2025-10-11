'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Eye, 
  Brain, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock,
  Target,
  Settings,
  BarChart,
  Users,
  Shield,
  Globe,
  FileText,
  Cpu,
  Heart,
  DollarSign,
  TrendingUp,
  MessageSquare,
  Mic,
  Camera,
  Volume2,
  Hand
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiHolographicAiAssistantPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const features = [
    {
      icon: <Eye className="w-6 h-6 text-cyan-400" />,
      title: "3D Holographic Display",
      description: "Life-like 3D holographic AI assistant that appears in your physical space, providing immersive and natural interaction experiences."
    },
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: "Advanced AI Personality",
      description: "Sophisticated AI personality with emotional intelligence, contextual understanding, and adaptive learning capabilities."
    },
    {
      icon: <Hand className="w-6 h-6 text-cyan-400" />,
      title: "Gesture Recognition",
      description: "Natural gesture and hand tracking for intuitive interaction with your holographic assistant using simple hand movements."
    },
    {
      icon: <Mic className="w-6 h-6 text-cyan-400" />,
      title: "Voice & Speech Synthesis",
      description: "Natural voice interaction with advanced speech recognition and realistic voice synthesis for seamless communication."
    },
    {
      icon: <Camera className="w-6 h-6 text-cyan-400" />,
      title: "Spatial Awareness",
      description: "AI assistant that understands and interacts with your physical environment, recognizing objects and spatial relationships."
    },
    {
      icon: <Zap className="w-6 h-6 text-cyan-400" />,
      title: "Real-Time Processing",
      description: "Ultra-fast processing for instant responses and smooth holographic rendering with minimal latency."
    }
  ];

  const applications = [
    {
      title: "Virtual Meetings & Collaboration",
      description: "Conduct immersive virtual meetings with holographic AI assistants that can present, analyze, and interact with meeting participants.",
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      benefits: ["Enhanced presence", "Natural interaction", "Improved engagement"]
    },
    {
      title: "Education & Training",
      description: "Revolutionary learning experiences with holographic tutors that can demonstrate complex concepts in 3D space.",
      icon: <BookOpen className="w-8 h-8 text-cyan-400" />,
      benefits: ["Immersive learning", "3D visualization", "Interactive lessons"]
    },
    {
      title: "Healthcare & Medical",
      description: "Holographic medical assistants for patient care, surgical planning, and medical training with precise 3D visualization.",
      icon: <Heart className="w-8 h-8 text-cyan-400" />,
      benefits: ["Medical visualization", "Surgical planning", "Patient interaction"]
    },
    {
      title: "Design & Engineering",
      description: "Collaborate with holographic AI assistants for 3D design, prototyping, and engineering visualization in real-time.",
      icon: <Settings className="w-8 h-8 text-cyan-400" />,
      benefits: ["3D design tools", "Real-time collaboration", "Prototype visualization"]
    }
  ];

  const pricingPlans = [
    {
      name: "Personal",
      price: "$199",
      period: "/month",
      description: "For individual users",
      features: [
        "Basic holographic display",
        "Voice interaction",
        "Simple gestures",
        "Email support",
        "5 AI personalities"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$499",
      period: "/month",
      description: "For businesses and teams",
      features: [
        "Advanced holographic display",
        "Full gesture recognition",
        "Spatial awareness",
        "Priority support",
        "Unlimited AI personalities",
        "Team collaboration",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "/month",
      description: "For large organizations",
      features: [
        "Premium holographic display",
        "Full AI capabilities",
        "Custom development",
        "Dedicated support",
        "White-label options",
        "Advanced analytics",
        "API access"
      ],
      popular: false
    }
  ];

  const capabilities = [
    {
      title: "Natural Interaction",
      description: "Communicate with your AI assistant using natural speech, gestures, and eye contact for intuitive human-like interaction.",
      icon: <MessageSquare className="w-6 h-6 text-cyan-400" />
    },
    {
      title: "3D Visualization",
      description: "Display complex data, models, and information in stunning 3D holographic format for better understanding and analysis.",
      icon: <Eye className="w-6 h-6 text-cyan-400" />
    },
    {
      title: "Multi-Modal Input",
      description: "Process voice, gesture, eye tracking, and spatial input simultaneously for comprehensive interaction capabilities.",
      icon: <Hand className="w-6 h-6 text-cyan-400" />
    },
    {
      title: "Contextual Awareness",
      description: "Understand and respond to environmental context, user emotions, and situational requirements for personalized assistance.",
      icon: <Brain className="w-6 h-6 text-cyan-400" />
    }
  ];

  const useCases = [
    {
      title: "Tech Company",
      description: "Reduced meeting time by 40% and improved team collaboration with holographic AI assistants for product design and development.",
      icon: <Cpu className="w-8 h-8 text-cyan-400" />
    },
    {
      title: "Medical School",
      description: "Enhanced anatomy education with 3D holographic models, improving student comprehension by 60% compared to traditional methods.",
      icon: <Heart className="w-8 h-8 text-cyan-400" />
    },
    {
      title: "Architecture Firm",
      description: "Streamlined client presentations with holographic 3D building models, increasing project approval rates by 35%.",
      icon: <Settings className="w-8 h-8 text-cyan-400" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Holographic AI Assistant - Next-Gen 3D AI Interaction | Zion Tech Group</title>
        <meta name="description" content="Experience the future of AI interaction with our holographic AI assistant. 3D display, gesture recognition, and natural communication for immersive AI experiences." />
        <meta name="keywords" content="holographic AI, 3D AI assistant, holographic display, AI interaction, virtual assistant, 3D visualization" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-holographic-ai-assistant" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Eye className="w-4 h-4 mr-2" />
              Next-Generation AI Interaction
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Holographic AI
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Assistant</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience the future of artificial intelligence with our revolutionary holographic AI assistant. 
              Interact with AI in 3D space using natural gestures, voice, and eye contact for unprecedented immersion.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/demo" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Experience Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Revolutionary Holographic Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge technology that brings AI assistants to life in your physical space.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Transformative Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how holographic AI assistants are revolutionizing industries and workflows.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {applications.map((app, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
                  <div className="flex items-center mb-6">
                    {app.icon}
                    <h3 className="text-2xl font-semibold text-white ml-4">
                      {app.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-6">
                    {app.description}
                  </p>
                  <div className="space-y-2">
                    {app.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-cyan-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Advanced AI Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Sophisticated AI technology that makes holographic interaction feel natural and intuitive.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
                    {capability.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {capability.title}
                  </h3>
                  <p className="text-gray-300">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Real-World Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how organizations are using holographic AI assistants to transform their operations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Holographic AI Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the holographic AI solution that fits your needs and budget.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                    plan.popular 
                      ? 'border-cyan-500 shadow-2xl shadow-cyan-500/20' 
                      : 'border-gray-700'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border border-gray-600 text-white hover:bg-gray-800'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Experience the Future of AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Step into the next generation of AI interaction with our revolutionary holographic AI assistant technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/demo" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Experience Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default AiHolographicAiAssistantPage;