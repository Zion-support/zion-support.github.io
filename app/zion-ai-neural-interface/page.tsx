import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  Users, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Settings, 
  Clock,
  Award,
  Sparkles,
  Activity,
  Target,
  Eye,
  Mic,
  Monitor
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ZionAINeuralInterface = () => {
  const features = [
    {
      title: "Thought-to-Text Conversion",
      description: "Direct neural signal processing for instant thought-to-text conversion with 98% accuracy",
      icon: <Brain className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Mind Control Interface",
      description: "Control devices and applications through pure thought with advanced BCI technology",
      icon: <Zap className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Neural Data Security",
      description: "Military-grade encryption for neural data with complete privacy protection",
      icon: <Shield className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Real-time Processing",
      description: "Ultra-low latency neural signal processing for seamless user experience",
      icon: <Activity className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Explorer",
      price: "$199",
      period: "per month",
      description: "Perfect for researchers and early adopters",
      features: [
        "Basic thought-to-text",
        "Simple device control",
        "Standard neural processing",
        "Email support",
        "Mobile app access",
        "Basic analytics",
        "1 device connection"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$499",
      period: "per month",
      description: "Ideal for developers and medical professionals",
      features: [
        "Advanced thought-to-text",
        "Multi-device control",
        "High-speed neural processing",
        "Priority support",
        "API access",
        "Advanced analytics",
        "Up to 5 device connections",
        "Custom neural patterns",
        "Real-time monitoring"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "per month",
      description: "For medical institutions and research organizations",
      features: [
        "Full neural interface suite",
        "Unlimited device control",
        "Quantum neural processing",
        "24/7 dedicated support",
        "Full API access",
        "Comprehensive analytics",
        "Unlimited device connections",
        "Custom neural algorithms",
        "Real-time neural monitoring",
        "White-label solution",
        "SLA guarantee",
        "On-site training"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const applications = [
    {
      title: "Accessibility",
      description: "Enable communication and control for people with disabilities",
      icon: <Users className="w-8 h-8" />,
      details: [
        "ALS communication devices",
        "Paralysis control systems",
        "Visual impairment assistance",
        "Motor disability support",
        "Cognitive enhancement"
      ]
    },
    {
      title: "Medical Research",
      description: "Advanced brain-computer interface research and development",
      icon: <Brain className="w-8 h-8" />,
      details: [
        "Neural signal analysis",
        "Brain mapping research",
        "Cognitive function studies",
        "Therapeutic applications",
        "Medical device integration"
      ]
    },
    {
      title: "Gaming & VR",
      description: "Immersive gaming and virtual reality experiences",
      icon: <Monitor className="w-8 h-8" />,
      details: [
        "Thought-controlled games",
        "VR neural navigation",
        "Immersive experiences",
        "Gaming accessibility",
        "Virtual world interaction"
      ]
    },
    {
      title: "Productivity",
      description: "Enhanced productivity through neural interfaces",
      icon: <Target className="w-8 h-8" />,
      details: [
        "Hands-free computing",
        "Neural typing",
        "Device automation",
        "Workflow optimization",
        "Cognitive enhancement"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      company: "Neural Research Institute",
      role: "Lead Neuroscientist",
      content: "The Zion AI Neural Interface has revolutionized our research capabilities. The thought-to-text accuracy is unprecedented, and the real-time processing is remarkable.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      company: "Accessibility First",
      role: "Executive Director",
      content: "This technology has given our users with ALS a new voice. The interface is intuitive and the results are life-changing for our community.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Dr. Elena Kim",
      company: "Medical Technology Corp",
      role: "Chief Innovation Officer",
      content: "The neural data security features are outstanding. We can conduct sensitive medical research while ensuring complete patient privacy and data protection.",
      rating: 5,
      avatar: "EK"
    }
  ];

  const technicalSpecs = [
    { spec: "Neural Signal Accuracy", value: "98.5%", unit: "" },
    { spec: "Processing Latency", value: "2.3", unit: "ms" },
    { spec: "Supported Devices", value: "50+", unit: "devices" },
    { spec: "Data Encryption", value: "AES-256", unit: "" },
    { spec: "Battery Life", value: "24", unit: "hours" },
    { spec: "Wireless Range", value: "30", unit: "meters" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Zion AI Neural Interface - Revolutionary Brain-Computer Interface | Zion Tech Group"
        description="Revolutionary brain-computer interface with 98.5% thought-to-text accuracy. Mind control technology for accessibility, medical research, and productivity applications."
        keywords="brain computer interface, BCI, neural interface, thought control, accessibility technology, medical research, mind control, neural signals"
        canonical="https://ziontechgroup.com/zion-ai-neural-interface"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">98.5% Neural Signal Accuracy</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Zion AI Neural Interface
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Revolutionary brain-computer interface technology that enables thought-to-text conversion, 
            mind control, and neural data processing with unprecedented accuracy and security.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="#pricing"
              variant="primary"
              size="lg"
              icon={<Brain className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<Eye className="w-5 h-5" />}
            >
              Watch Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge neural interface technology with industry-leading performance metrics
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technicalSpecs.map((spec, index) => (
              <FuturisticCard key={index} className="text-center group hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-cyan-400 mb-2">
                  {spec.value}
                  <span className="text-lg text-gray-300">{spec.unit}</span>
                </div>
                <div className="text-gray-300 text-sm font-medium">{spec.spec}</div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Revolutionary Neural Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Advanced brain-computer interface technology that bridges the gap between mind and machine.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="text-center group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transformative Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From accessibility to medical research, our neural interface technology opens new possibilities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((application, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {application.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors text-center">
                  {application.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed text-center">
                  {application.description}
                </p>
                <div className="space-y-2">
                  {application.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="text-sm text-cyan-400 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      {detail}
                    </div>
                  ))}
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Neural Interface Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access revolutionary neural interface technology at any scale. All plans include neural data security and support.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/10' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300 hover:scale-105`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <FuturisticButton
                  href={plan.name === 'Enterprise' ? '/contact' : '#signup'}
                  variant={plan.popular ? 'primary' : 'outline'}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                </FuturisticButton>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Research Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how Zion AI Neural Interface is transforming research and accessibility
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="text-sm text-cyan-400">{testimonial.company}</div>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic leading-relaxed">"{testimonial.content}"</p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Connect Mind and Machine?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join leading research institutions and accessibility organizations using Zion AI Neural Interface 
              to unlock the power of brain-computer interaction. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="#signup"
                variant="primary"
                size="lg"
                icon={<Sparkles className="w-5 h-5" />}
              >
                Start Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="/contact"
                variant="outline"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Contact Sales
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default ZionAINeuralInterface;