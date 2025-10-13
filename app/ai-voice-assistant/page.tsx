import { ArrowRight, Mic, CheckCircle, Star, Users, Brain, Zap, Mail, Smartphone, Globe, Volume2, MessageSquare, Clock, Shield } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AIVoiceAssistant() {
  const features = [
    {
      title: "Natural Language Processing",
      description: "Advanced NLP capabilities that understand context, intent, and emotion in human speech for natural conversations.",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Multi-language Support",
      description: "Support for 50+ languages with real-time translation and cultural context understanding.",
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      title: "Voice Recognition",
      description: "State-of-the-art speech recognition with 99.5% accuracy even in noisy environments.",
      icon: <Mic className="w-6 h-6" />
    },
    {
      title: "Real-time Processing",
      description: "Ultra-low latency voice processing for instant responses and natural conversation flow.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Custom Voice Training",
      description: "Train the assistant with your brand voice, terminology, and specific business processes.",
      icon: <Volume2 className="w-6 h-6" />
    },
    {
      title: "Enterprise Security",
      description: "End-to-end encryption, data privacy compliance, and secure voice data handling.",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const useCases = [
    {
      title: "Customer Service",
      description: "Handle customer inquiries, complaints, and support requests with intelligent voice responses.",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Sales Automation",
      description: "Qualify leads, schedule appointments, and provide product information through voice interactions.",
      icon: <MessageSquare className="w-8 h-8" />
    },
    {
      title: "Internal Operations",
      description: "Streamline internal processes with voice commands for scheduling, reporting, and task management.",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Accessibility",
      description: "Make your services accessible to users with disabilities through voice-first interfaces.",
      icon: <Volume2 className="w-8 h-8" />
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "per month",
      description: "Perfect for small businesses",
      features: [
        "Up to 1,000 voice interactions",
        "Basic NLP capabilities",
        "5 languages supported",
        "Email support",
        "Standard voice quality",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$499",
      period: "per month",
      description: "Most popular for growing businesses",
      features: [
        "Up to 10,000 voice interactions",
        "Advanced NLP with context",
        "25 languages supported",
        "Priority support",
        "High-quality voice synthesis",
        "Advanced analytics",
        "Custom voice training",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "per month",
      description: "For large organizations",
      features: [
        "Unlimited voice interactions",
        "Premium NLP capabilities",
        "50+ languages supported",
        "24/7 phone support",
        "Premium voice quality",
        "Real-time analytics",
        "Custom voice development",
        "Full API access",
        "Dedicated account manager",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "99.5%", label: "Voice Recognition Accuracy", icon: <Mic className="w-6 h-6" /> },
    { number: "50+", label: "Languages Supported", icon: <MessageSquare className="w-6 h-6" /> },
    { number: "< 200ms", label: "Response Time", icon: <Zap className="w-6 h-6" /> },
    { number: "24/7", label: "Availability", icon: <Clock className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Alex Thompson",
      company: "Call Center Solutions",
      role: "Operations Manager",
      content: "Zion AI Voice Assistant has transformed our customer service. Response times are 60% faster and customer satisfaction is up 40%.",
      rating: 5
    },
    {
      name: "Maria Garcia",
      company: "E-commerce Platform",
      role: "Customer Experience Director",
      content: "The multi-language support is incredible. We can now serve customers in their native language, which has increased our global reach significantly.",
      rating: 5
    },
    {
      name: "James Wilson",
      company: "Healthcare Services",
      role: "IT Director",
      content: "The voice assistant handles appointment scheduling and patient inquiries flawlessly. It's like having a virtual receptionist that never sleeps.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Voice Assistant - Intelligent Voice AI Solutions | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform customer interactions with our AI Voice Assistant. Natural language processing, multi-language support, and real-time voice recognition. Starting at $199/month."
        />
        <meta
          name="keywords"
          content="AI voice assistant, voice AI, natural language processing, voice recognition, conversational AI, voice automation, speech synthesis"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
                <Mic className="w-4 h-4 text-purple-400 mr-2" />
                <span className="text-purple-400 text-sm font-medium">Intelligent Voice AI Solutions</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                AI
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 animate-pulse">
                  {" "}Voice Assistant
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform customer interactions with our advanced AI Voice Assistant. Natural language processing, 
                multi-language support, and real-time voice recognition for seamless conversations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-purple-500/25 hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                >
                  Try Voice Demo
                  <Mic className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Advanced Voice AI Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge voice technology that understands, responds, and learns from every interaction.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Powerful Use Cases
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your business operations with intelligent voice automation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 text-center"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Flexible Pricing Plans
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the voice AI plan that matches your business needs. All plans include a 14-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 relative ${plan.popular ? 'ring-2 ring-purple-400/50' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                      MOST POPULAR
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-purple-400">${plan.price}</span>
                      <span className="text-gray-300 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700 shadow-lg hover:shadow-purple-500/25'
                        : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'
                    }`}
                  >
                    Start Free Trial
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Trusted by Industry Leaders
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our clients say about our AI Voice Assistant
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Voice Interactions?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already using our AI Voice Assistant to enhance customer experiences. 
              Start your free trial today.
            </p>
            
            {/* Contact Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-purple-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-purple-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-purple-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-purple-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Try Voice Demo
                <Mic className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}