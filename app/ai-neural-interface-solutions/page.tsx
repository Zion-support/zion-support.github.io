import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Zap, Shield, BarChart3, Cloud, ArrowRight, CheckCircle, Star, Users, Award, Clock, Target, Sparkles, Cpu, Database, Lock, Activity, Eye, Headphones } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';

const AINeuralInterfaceSolutions = () => {
  const features = [
    {
      title: "Brain-Computer Interface (BCI)",
      description: "Direct neural communication between human brain and AI systems for enhanced cognitive capabilities",
      icon: <Brain className="w-8 h-8" />,
      benefits: ["Thought-to-text", "Neural control", "Enhanced cognition", "Accessibility solutions"]
    },
    {
      title: "Neural Signal Processing",
      description: "Advanced AI algorithms for interpreting and processing neural signals in real-time",
      icon: <Activity className="w-8 h-8" />,
      benefits: ["Real-time processing", "Signal enhancement", "Pattern recognition", "Predictive analysis"]
    },
    {
      title: "Cognitive Enhancement",
      description: "AI-powered tools to augment human cognitive abilities and decision-making processes",
      icon: <Zap className="w-8 h-8" />,
      benefits: ["Memory enhancement", "Focus optimization", "Learning acceleration", "Decision support"]
    },
    {
      title: "Neural Rehabilitation",
      description: "AI-driven therapy and rehabilitation systems for neurological conditions and injuries",
      icon: <Shield className="w-8 h-8" />,
      benefits: ["Motor recovery", "Cognitive therapy", "Progress tracking", "Personalized treatment"]
    }
  ];

  const applications = [
    {
      category: "Healthcare & Medicine",
      services: [
        "Neurological disorder treatment",
        "Prosthetic control systems",
        "Cognitive rehabilitation",
        "Mental health monitoring",
        "Surgical assistance"
      ],
      impact: "Revolutionize medical treatment and patient care"
    },
    {
      category: "Accessibility & Inclusion",
      services: [
        "Assistive communication devices",
        "Mobility assistance systems",
        "Sensory augmentation",
        "Learning support tools",
        "Independent living solutions"
      ],
      impact: "Enable independence and inclusion for all"
    },
    {
      category: "Education & Training",
      services: [
        "Accelerated learning systems",
        "Skill acquisition platforms",
        "Cognitive training programs",
        "Memory enhancement tools",
        "Focus improvement systems"
      ],
      impact: "Transform how we learn and develop skills"
    },
    {
      category: "Workplace & Productivity",
      services: [
        "Enhanced decision making",
        "Cognitive load management",
        "Focus optimization",
        "Creative assistance",
        "Stress reduction systems"
      ],
      impact: "Maximize human potential in the workplace"
    }
  ];

  const pricing = [
    {
      name: "Neural Starter",
      price: "$1,999",
      period: "per month",
      description: "Basic neural interface solutions for individuals and small teams",
      features: [
        "Basic BCI hardware",
        "Standard neural processing",
        "Email support",
        "Basic analytics",
        "Mobile app access"
      ],
      popular: false
    },
    {
      name: "Neural Professional",
      price: "$7,999",
      period: "per month",
      description: "Advanced neural interface platform for healthcare and research",
      features: [
        "Advanced BCI systems",
        "Real-time neural processing",
        "Priority support",
        "Custom integrations",
        "Advanced analytics",
        "Research tools"
      ],
      popular: true
    },
    {
      name: "Neural Enterprise",
      price: "$39,999",
      period: "per month",
      description: "Complete neural interface ecosystem for large organizations",
      features: [
        "Enterprise BCI platform",
        "AI-powered neural processing",
        "24/7 dedicated support",
        "Custom neural solutions",
        "White-label platform",
        "On-site consultation",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "95%", label: "Accuracy Rate", icon: <Award className="w-6 h-6" /> },
    { number: "10ms", label: "Response Time", icon: <Zap className="w-6 h-6" /> },
    { number: "1000+", label: "Neural Patterns", icon: <Brain className="w-6 h-6" /> },
    { number: "24/7", label: "Monitoring", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="AI Neural Interface Solutions | Zion Tech Group - Brain-Computer Interface AI"
        description="Revolutionary AI-powered neural interface solutions for brain-computer interfaces, cognitive enhancement, and neural rehabilitation. Transform human-AI interaction."
        keywords="neural interface, brain-computer interface, BCI, cognitive enhancement, neural rehabilitation, AI brain interface, neural signal processing"
        canonical="https://ziontechgroup.com/ai-neural-interface-solutions"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative">
        <ResponsiveContainer className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 mb-6">
            <Brain className="w-4 h-4 text-pink-400 mr-2" />
            <span className="text-pink-400 text-sm font-medium">Revolutionary Neural Technology</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
              AI Neural Interface Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Bridge the gap between human consciousness and artificial intelligence with our 
            revolutionary neural interface solutions. Enhance cognition, enable direct brain-computer 
            communication, and unlock new possibilities for human potential.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-pink-500/25 hover:scale-105"
            >
              Connect Your Mind
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-pink-400 text-pink-400 px-8 py-4 rounded-lg font-semibold hover:bg-pink-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Experience Neural Demo
              <Brain className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Neural Interface Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Experience the future of human-AI interaction with our advanced neural interface technology
            </p>
          </div>
          
          <ResponsiveGrid className="gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="group">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-pink-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-cyan-400">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-pink-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Neural Interface Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform industries with neural interface technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">{app.category}</h3>
                <div className="space-y-3 mb-4">
                  {app.services.map((service, idx) => (
                    <div key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 mr-2 text-pink-400 flex-shrink-0" />
                      {service}
                    </div>
                  ))}
                </div>
                <div className="text-pink-400 font-semibold text-sm">
                  {app.impact}
                </div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Neural Interface Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect neural interface solution for your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <div key={index} className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-pink-500/50 shadow-2xl shadow-pink-500/20' 
                  : 'border-white/20 hover:border-pink-500/30'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 mr-3 text-pink-400 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700'
                      : 'border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-slate-900'
                  }`}
                >
                  Connect Now
                </Link>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-900/30 to-purple-900/30">
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Connect Your Mind?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
            Join the neural interface revolution and unlock the full potential of human-AI collaboration. 
            Contact our neural technology experts to discuss your specific requirements.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-pink-500/25 hover:scale-105"
            >
              Connect Your Mind
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-pink-400 text-pink-400 px-8 py-4 rounded-lg font-semibold hover:bg-pink-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Schedule Neural Demo
              <Brain className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default AINeuralInterfaceSolutions;