import React from 'react';
import { Brain, Zap, Eye, Ear, Hand, ArrowRight, Star, CheckCircle, DollarSign, Clock, Users, Cpu } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AINeuralInterfacePage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Neural Interface Solutions",
    "description": "Advanced brain-computer interface technology powered by AI for seamless human-machine interaction",
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com"
    },
    "offers": {
      "@type": "Offer",
      "price": "25000",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  const features = [
    {
      title: "Thought-to-Text",
      description: "Convert neural signals directly into text with 99.5% accuracy using advanced AI algorithms",
      icon: <Brain className="w-8 h-8" />,
      benefits: ["99.5% accuracy", "Real-time processing", "Multi-language support"]
    },
    {
      title: "Neural Control",
      description: "Control devices and applications using only your thoughts and neural signals",
      icon: <Hand className="w-8 h-8" />,
      benefits: ["Hands-free control", "Precision movement", "Accessibility focused"]
    },
    {
      title: "Visual Processing",
      description: "AI-powered visual cortex simulation for enhanced perception and object recognition",
      icon: <Eye className="w-8 h-8" />,
      benefits: ["Enhanced vision", "Object recognition", "Pattern detection"]
    },
    {
      title: "Auditory Enhancement",
      description: "Neural audio processing for improved hearing and sound interpretation",
      icon: <Ear className="w-8 h-8" />,
      benefits: ["Enhanced hearing", "Noise filtering", "Spatial audio"]
    }
  ];

  const applications = [
    {
      category: "Healthcare",
      title: "Medical Rehabilitation",
      description: "Help patients with paralysis regain control through neural interfaces",
      impact: "85% improvement in motor function recovery"
    },
    {
      category: "Accessibility",
      title: "Assistive Technology",
      description: "Enable communication and control for individuals with severe disabilities",
      impact: "100% communication restoration for locked-in patients"
    },
    {
      category: "Gaming & VR",
      title: "Immersive Gaming",
      description: "Control games and VR experiences using only your thoughts",
      impact: "Revolutionary gaming experience with zero latency"
    },
    {
      category: "Productivity",
      title: "Workplace Efficiency",
      description: "Control computers and software through neural commands",
      impact: "300% increase in productivity for power users"
    }
  ];

  const pricingPlans = [
    {
      name: "Neural Starter",
      price: "$25,000",
      period: "one-time",
      description: "Basic neural interface for personal use",
      features: [
        "Thought-to-text conversion",
        "Basic device control",
        "Standard neural sensors",
        "6 months support",
        "Training included"
      ],
      popular: false
    },
    {
      name: "Neural Professional",
      price: "$75,000",
      period: "one-time",
      description: "Advanced neural interface for professionals",
      features: [
        "All Starter features",
        "Multi-device control",
        "Advanced AI processing",
        "Custom neural patterns",
        "1 year support",
        "API access"
      ],
      popular: true
    },
    {
      name: "Neural Enterprise",
      price: "$200,000",
      period: "one-time",
      description: "Enterprise-grade neural interface solution",
      features: [
        "All Professional features",
        "Custom hardware development",
        "Team management tools",
        "Advanced analytics",
        "Lifetime support",
        "On-site installation"
      ],
      popular: false
    }
  ];

  const technicalSpecs = [
    {
      spec: "Neural Signal Processing",
      value: "1000Hz sampling rate",
      description: "High-frequency neural signal capture for precise control"
    },
    {
      spec: "AI Processing Power",
      value: "50 TOPS",
      description: "Dedicated AI processing for real-time neural interpretation"
    },
    {
      spec: "Latency",
      value: "< 10ms",
      description: "Ultra-low latency for seamless human-machine interaction"
    },
    {
      spec: "Accuracy",
      value: "99.5%",
      description: "Industry-leading accuracy in neural signal interpretation"
    },
    {
      spec: "Battery Life",
      value: "24 hours",
      description: "All-day operation with wireless charging capability"
    },
    {
      spec: "Compatibility",
      value: "Universal",
      description: "Works with all major operating systems and devices"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <EnhancedSEO
        title="AI Neural Interface Solutions | Zion Tech Group"
        description="Revolutionary brain-computer interface technology powered by AI. Control devices with your thoughts. Starting at $25,000."
        keywords="neural interface, brain computer interface, BCI, thought control, AI neural, assistive technology"
        structuredData={structuredData}
      />
      
      <ResponsiveContainer>
        {/* Hero Section */}
        <div className="text-center py-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 mb-6">
            <Star className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-blue-300 font-medium">Next-Generation Interface</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
            AI Neural Interface
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Break the barriers between mind and machine with our revolutionary AI-powered 
            neural interface technology. Control the digital world with your thoughts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
            >
              Experience Neural Control
              <ArrowRight className="w-5 h-5 ml-2" />
            </FuturisticButton>
            <FuturisticButton
              href="#pricing"
              variant="outline"
              className="border-blue-500 text-blue-300 hover:bg-blue-500/10"
            >
              View Pricing
            </FuturisticButton>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Neural Interface Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of human-computer interaction
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mb-6 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-green-400">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>

        {/* Applications Section */}
        <div className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transforming lives across multiple industries
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <FuturisticCard key={index} className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Cpu className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-medium text-blue-400">{app.category}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{app.title}</h3>
                    <p className="text-gray-300 mb-3">{app.description}</p>
                    <p className="text-green-400 font-medium">{app.impact}</p>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technology for unparalleled performance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSpecs.map((spec, index) => (
              <FuturisticCard key={index} className="p-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">{spec.value}</h3>
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">{spec.spec}</h4>
                  <p className="text-gray-300 text-sm">{spec.description}</p>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Neural Interface Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the neural interface solution that fits your needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard 
                key={index} 
                className={`relative ${plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">/{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <FuturisticButton
                    href="/contact"
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700' 
                        : 'border border-blue-500 text-blue-300 hover:bg-blue-500/10'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </FuturisticButton>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 text-center">
          <FuturisticCard className="max-w-4xl mx-auto p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Control the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Experience the next evolution of human-computer interaction. 
              Contact our neural interface specialists today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
              >
                Schedule Neural Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </FuturisticButton>
              <FuturisticButton
                href="tel:+13024640950"
                variant="outline"
                className="border-blue-500 text-blue-300 hover:bg-blue-500/10"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </FuturisticButton>
            </div>
          </FuturisticCard>
        </div>
      </ResponsiveContainer>
    </div>
  );
};

export default AINeuralInterfacePage;