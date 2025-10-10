'use client';
import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Zap, 
  Target, 
  BarChart, 
  Shield, 
  Users, 
  Globe, 
  Lock, 
  Settings, 
  FileText,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Award,
  Stethoscope,
  Truck,
  Rocket,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  TrendingUp,
  Activity,
  Cpu,
  Database,
  Wifi,
  Smartphone,
  Eye,
  Headphones,
  Mic,
  Camera,
  Monitor,
  Keyboard,
  Mouse,
  Gamepad2,
  Heart,
  Brain as BrainIcon,
  Zap as Lightning,
  Target as Crosshair,
  Shield as Security,
  Users as People,
  Star as StarIcon,
  CheckCircle as Check,
  ArrowRight as Arrow,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as Location,
  Truck as TruckIcon,
  Smartphone as SmartphoneIcon,
  ChefHat,
  Rocket as RocketIcon,
  Sprout,
  Scale as ScaleIcon
} from 'lucide-react';

const AINeuralInterfaceProPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'Brain-Computer Interface',
      description: 'Direct neural communication with AI systems through advanced BCI technology',
      capabilities: [
        'Neural signal processing',
        'Thought-to-text conversion',
        'Mental command recognition',
        'Cognitive state monitoring'
      ]
    },
    {
      icon: Eye,
      title: 'Eye Tracking Integration',
      description: 'Advanced eye movement analysis for intuitive interface control',
      capabilities: [
        'Gaze-based navigation',
        'Attention monitoring',
        'Fatigue detection',
        'Visual focus optimization'
      ]
    },
    {
      icon: Headphones,
      title: 'Audio Neural Processing',
      description: 'AI-powered audio processing with neural pattern recognition',
      capabilities: [
        'Voice command processing',
        'Emotional tone analysis',
        'Audio pattern recognition',
        'Sound-based learning'
      ]
    },
    {
      icon: Mic,
      title: 'Voice Neural Interface',
      description: 'Advanced voice recognition with neural network processing',
      capabilities: [
        'Natural language understanding',
        'Voice emotion detection',
        'Accent adaptation',
        'Multi-language support'
      ]
    },
    {
      icon: Camera,
      title: 'Visual Neural Processing',
      description: 'Computer vision enhanced with neural network analysis',
      capabilities: [
        'Facial expression recognition',
        'Gesture interpretation',
        'Visual attention tracking',
        'Object recognition'
      ]
    },
    {
      icon: Monitor,
      title: 'Haptic Feedback System',
      description: 'Tactile feedback integration for immersive neural experiences',
      capabilities: [
        'Touch sensation simulation',
        'Pressure sensitivity',
        'Texture recognition',
        'Spatial awareness'
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: '300% Faster Learning',
      description: 'Accelerated skill acquisition through neural interface technology',
      stat: '300%'
    },
    {
      icon: Clock,
      title: 'Real-time Processing',
      description: 'Instantaneous neural signal processing and response',
      stat: '< 10ms'
    },
    {
      icon: Shield,
      title: '99.9% Accuracy',
      description: 'Highly accurate neural pattern recognition and interpretation',
      stat: '99.9%'
    },
    {
      icon: Users,
      title: 'Universal Access',
      description: 'Accessible interface for users with different abilities',
      stat: '100%'
    }
  ];

  const useCases = [
    {
      title: 'Medical Rehabilitation',
      description: 'Assist patients with motor disabilities to control devices through thought',
      icon: Stethoscope,
      benefits: [
        'Motor function recovery',
        'Communication assistance',
        'Therapeutic applications',
        'Progress monitoring'
      ]
    },
    {
      title: 'Gaming & Entertainment',
      description: 'Immersive gaming experiences controlled by neural signals',
      icon: Gamepad2,
      benefits: [
        'Mind-controlled gaming',
        'Emotional response gaming',
        'Accessibility gaming',
        'Virtual reality integration'
      ]
    },
    {
      title: 'Professional Training',
      description: 'Enhanced learning and skill development through neural interfaces',
      icon: Award,
      benefits: [
        'Accelerated learning',
        'Skill assessment',
        'Personalized training',
        'Performance optimization'
      ]
    },
    {
      title: 'Accessibility Solutions',
      description: 'Empowering individuals with disabilities through neural technology',
      icon: Heart,
      benefits: [
        'Communication assistance',
        'Device control',
        'Independence enhancement',
        'Quality of life improvement'
      ]
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$2,799',
      period: '/month',
      description: 'Perfect for individual users and small projects',
      features: [
        'Basic neural interface',
        'Eye tracking support',
        'Voice commands',
        'Standard support',
        'Up to 5 devices'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$4,999',
      period: '/month',
      description: 'Advanced features for professional applications',
      features: [
        'Full neural interface suite',
        'Advanced eye tracking',
        'Haptic feedback',
        'Priority support',
        'Up to 20 devices',
        'Custom integrations',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Complete solution for large organizations',
      features: [
        'Custom neural interfaces',
        'Multi-user support',
        'Advanced analytics',
        '24/7 dedicated support',
        'Unlimited devices',
        'Custom development',
        'On-premise deployment',
        'Compliance support'
      ],
      popular: false
    }
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              AI Neural Interface Pro
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Revolutionary brain-computer interface technology that enables direct neural communication 
              with AI systems for unprecedented control and interaction capabilities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <Brain className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">Neural Interface</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Zap className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Real-time Processing</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">99.9% Accuracy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Advanced Neural Interface Features
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technology that bridges the gap between human cognition and AI systems
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.capabilities.map((capability, capIndex) => (
                    <li key={capIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose AI Neural Interface Pro?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Revolutionary technology that transforms how humans interact with AI systems
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{benefit.stat}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Real-World Applications
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Transformative applications across various industries and use cases
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{useCase.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Pricing Plans
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your neural interface needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-lg p-6 relative ${plan.popular ? 'ring-2 ring-cyan-400 neon-glow-cyan' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700' 
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-cyan-600 to-purple-700 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Experience the Future?
              </h2>
              <p className="text-xl text-cyan-100 mb-8">
                Contact our neural interface experts to discuss your project requirements
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                <p className="text-cyan-100">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-cyan-100">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                <p className="text-cyan-100">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            <div className="text-center">
              <button className="bg-white text-cyan-600 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300">
                Schedule Neural Interface Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AINeuralInterfaceProPage;