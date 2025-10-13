import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Zap, Shield, BarChart3, ArrowRight, Star, CheckCircle, Clock, Users, Award, TrendingUp, Cpu, Database, Globe, Sparkles, Eye, Layers, Monitor } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AIHolographicInterfacePage = () => {
  const features = [
    {
      title: "3D Holographic Display",
      description: "Revolutionary 3D holographic interface that projects data and applications into physical space",
      icon: <Eye className="w-6 h-6" />,
      benefits: ["True 3D visualization", "Gesture-based interaction", "Multi-user collaboration"]
    },
    {
      title: "AI-Powered Gesture Recognition",
      description: "Advanced computer vision and AI to recognize and respond to natural hand gestures and movements",
      icon: <Brain className="w-6 h-6" />,
      benefits: ["Natural interaction", "Precision tracking", "Multi-gesture support"]
    },
    {
      title: "Spatial Computing",
      description: "Process and manipulate data in 3D space with spatial awareness and context understanding",
      icon: <Layers className="w-6 h-6" />,
      benefits: ["Spatial data processing", "Context-aware computing", "Real-time rendering"]
    },
    {
      title: "Collaborative Workspace",
      description: "Multiple users can interact with the same holographic interface simultaneously from different locations",
      icon: <Users className="w-6 h-6" />,
      benefits: ["Remote collaboration", "Shared virtual space", "Real-time synchronization"]
    }
  ];

  const applications = [
    {
      title: "Medical Visualization",
      description: "3D holographic visualization of medical scans, surgical planning, and patient data",
      impact: "Improve surgical accuracy by 40%",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Architectural Design",
      description: "Walk through 3D building designs and make real-time modifications in holographic space",
      impact: "Reduce design time by 60%",
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: "Data Analytics",
      description: "Visualize complex datasets in 3D space for better insights and pattern recognition",
      impact: "Increase insights by 75%",
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: "Education & Training",
      description: "Immersive learning experiences with interactive 3D models and simulations",
      impact: "Improve learning retention by 50%",
      icon: <Award className="w-8 h-8" />
    }
  ];

  const pricingPlans = [
    {
      name: "Developer",
      price: "$199",
      period: "per month",
      description: "Perfect for developers and small teams",
      features: [
        "Single user license",
        "Basic holographic display",
        "SDK and API access",
        "Community support",
        "Basic gesture recognition",
        "Up to 5 projects"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$599",
      period: "per month",
      description: "Ideal for businesses and organizations",
      features: [
        "Up to 10 user licenses",
        "Advanced holographic display",
        "Full SDK and API access",
        "Priority support",
        "Advanced AI features",
        "Unlimited projects",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,499",
      period: "per month",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited user licenses",
        "Premium holographic display",
        "White-label solutions",
        "24/7 dedicated support",
        "Custom AI training",
        "On-premise deployment",
        "Custom development"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Maria Santos",
      company: "Advanced Medical Center",
      role: "Chief Surgeon",
      content: "The holographic interface has revolutionized our surgical planning. We can now visualize complex procedures in 3D before operating, leading to better outcomes.",
      rating: 5
    },
    {
      name: "James Wilson",
      company: "Future Architecture",
      role: "Lead Designer",
      content: "This technology has transformed how we present designs to clients. Walking through buildings in holographic space is absolutely game-changing.",
      rating: 5
    },
    {
      name: "Sarah Kim",
      company: "DataViz Solutions",
      role: "Data Scientist",
      content: "The 3D data visualization capabilities are incredible. We can now see patterns in our data that were impossible to spot in 2D.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Holographic Interface - 3D Holographic Computing Platform | Zion Tech Group"
        description="Revolutionary AI-powered holographic interface for 3D computing, gesture recognition, and spatial collaboration. Transform how you interact with data and applications."
        keywords="holographic interface, 3D computing, gesture recognition, spatial computing, holographic display, AI interface, collaborative workspace"
        canonical="https://ziontechgroup.com/ai-holographic-interface"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Next-Generation Computing Interface</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Holographic Interface
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the future of computing with our revolutionary AI-powered holographic interface. 
            Interact with data and applications in true 3D space using natural gestures and spatial awareness.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Sparkles className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              View Demo
            </FuturisticButton>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">3D</div>
              <div className="text-gray-300 text-sm">True holographic display</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">99%</div>
              <div className="text-gray-300 text-sm">Gesture recognition accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">10+</div>
              <div className="text-gray-300 text-sm">Simultaneous users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">60fps</div>
              <div className="text-gray-300 text-sm">Real-time rendering</div>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge holographic technology powered by advanced AI and spatial computing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Transformative Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how holographic computing is revolutionizing industries worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {app.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{app.title}</h3>
                <p className="text-gray-300 mb-4">{app.description}</p>
                <div className="text-cyan-400 font-semibold">{app.impact}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options for every use case
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                  <div className="text-gray-300">{plan.period}</div>
                  <p className="text-gray-400 text-sm mt-2">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full justify-center"
                >
                  Get Started
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how holographic computing is transforming businesses worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the holographic computing revolution and transform how you interact with technology
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Sparkles className="w-5 h-5" />}
              >
                Start Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={<Monitor className="w-5 h-5" />}
              >
                Schedule Demo
              </FuturisticButton>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>Contact us: <span className="text-cyan-400">kleber@ziontechgroup.com</span> | <span className="text-cyan-400">+1 302 464 0950</span></p>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default AIHolographicInterfacePage;