import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Monitor, Users, Zap, Globe, Clock, Award, Brain, Sparkles, Eye, Hand, Layers, Share2, Video } from 'lucide-react';

export default function AIHolographicWorkspace() {
  const features = [
    {
      title: "3D Holographic Display",
      description: "Immersive 3D workspace with 4K holographic projections and spatial audio",
      icon: <Monitor className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Gesture Control",
      description: "Natural hand gestures and voice commands for intuitive interaction",
      icon: <Hand className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Remote Collaboration",
      description: "Real-time 3D collaboration with team members from anywhere in the world",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "AI-Powered Insights",
      description: "Intelligent data visualization and predictive analytics in 3D space",
      icon: <Brain className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Spatial Computing",
      description: "Advanced spatial tracking and object manipulation in 3D environment",
      icon: <Layers className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Multi-Platform Sync",
      description: "Seamless integration with existing tools and cloud platforms",
      icon: <Globe className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Individual",
      price: "$399",
      period: "/month",
      description: "Perfect for designers, architects, and creative professionals",
      features: [
        "Personal holographic workspace",
        "Basic gesture controls",
        "3D modeling tools",
        "Cloud storage (100GB)",
        "Email support",
        "Mobile app access"
      ],
      popular: false
    },
    {
      name: "Team",
      price: "$999",
      period: "/month",
      description: "Ideal for small teams and creative agencies",
      features: [
        "Up to 10 team members",
        "Advanced collaboration tools",
        "Real-time 3D meetings",
        "AI-powered insights",
        "Priority support",
        "Custom integrations",
        "Advanced analytics",
        "Team management"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,999",
      period: "/month",
      description: "For large organizations and enterprise teams",
      features: [
        "Unlimited team members",
        "Custom holographic environments",
        "Advanced AI features",
        "Dedicated account manager",
        "24/7 phone support",
        "White-label options",
        "SLA guarantee",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Alex Chen",
      company: "Architectural Design Studio",
      role: "Principal Architect",
      content: "The holographic workspace has revolutionized our design process. We can visualize and iterate on 3D models in real-time with clients.",
      rating: 5,
      avatar: "AC"
    },
    {
      name: "Sarah Johnson",
      company: "Tech Innovation Lab",
      role: "Product Manager",
      content: "This is the future of remote collaboration. Our team feels like we're working in the same room even when we're continents apart.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Rodriguez",
      company: "Medical Research Institute",
      role: "Research Director",
      content: "The 3D visualization capabilities have transformed our data analysis. We can now see complex medical data in ways never before possible.",
      rating: 5,
      avatar: "MR"
    }
  ];

  const useCases = [
    {
      title: "Architecture & Design",
      description: "3D modeling and visualization for architectural projects",
      icon: <Layers className="w-6 h-6" />
    },
    {
      title: "Medical Visualization",
      description: "3D medical imaging and surgical planning",
      icon: <Eye className="w-6 h-6" />
    },
    {
      title: "Education & Training",
      description: "Immersive learning experiences and simulations",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Data Visualization",
      description: "Complex data analysis in 3D space",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Remote Meetings",
      description: "Next-generation video conferencing",
      icon: <Video className="w-6 h-6" />
    },
    {
      title: "Gaming & Entertainment",
      description: "Immersive gaming and entertainment experiences",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const performanceMetrics = [
    {
      metric: "Resolution",
      value: "4K",
      description: "Ultra-high definition holographic display"
    },
    {
      metric: "Latency",
      value: "< 5ms",
      description: "Ultra-low latency interaction"
    },
    {
      metric: "Field of View",
      value: "120°",
      description: "Wide field of view for immersion"
    },
    {
      metric: "Collaboration",
      value: "50+",
      description: "Simultaneous users supported"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Holographic Workspace - Zion Tech Group | Immersive 3D Collaboration</title>
        <meta
          name="description"
          content="Revolutionary AI-powered holographic workspace for immersive 3D collaboration. Advanced gesture control, real-time rendering, and spatial computing for next-generation remote work."
        />
        <meta
          name="keywords"
          content="holographic workspace, 3D collaboration, spatial computing, gesture control, immersive technology, remote work, virtual reality, augmented reality, mixed reality"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-purple-400 text-sm font-medium">Next-Gen Collaboration</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              AI Holographic
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 animate-pulse">
                {" "}Workspace
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Step into the future of work with immersive 3D holographic collaboration. 
              Experience next-generation remote work with gesture control and spatial computing.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center text-green-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="text-sm">4K holographic display</span>
              </div>
              <div className="flex items-center text-green-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="text-sm">Gesture control</span>
              </div>
              <div className="flex items-center text-green-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="text-sm">Real-time collaboration</span>
              </div>
              <div className="flex items-center text-green-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="text-sm">AI-powered insights</span>
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
                <Video className="w-5 h-5 mr-2 inline" />
                Watch Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Technical Specifications
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge technology that delivers unparalleled immersive experiences.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {performanceMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
                >
                  <div className="text-4xl font-bold text-purple-400 mb-2">
                    {metric.value}
                  </div>
                  <div className="text-lg font-semibold text-white mb-2">
                    {metric.metric}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {metric.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Advanced Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Revolutionary technology that transforms how we work, collaborate, and create in 3D space.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      {feature.icon}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-purple-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-center leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Use Cases
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your industry with immersive 3D collaboration and visualization.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-purple-400 mb-4 flex justify-center">
                    {useCase.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 text-center">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 text-center text-sm">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Workspace Plans
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your team size and collaboration needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    plan.popular
                      ? 'border-purple-500/50 shadow-purple-500/20 scale-105'
                      : 'border-white/10 hover:border-purple-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-purple-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full block text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-400 hover:to-pink-400'
                        : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Customer Success Stories
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how leading organizations are transforming their workflows with holographic technology.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div className="ml-4">
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Step Into the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Experience the next generation of collaboration with AI-powered holographic workspaces.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-purple-500/25 hover:scale-105"
                >
                  Start Your Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Schedule Demo
                </Link>
              </div>
              
              <div className="mt-8 text-sm text-gray-400">
                <p>Questions? Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300">kleber@ziontechgroup.com</a> or call <a href="tel:+13024640950" className="text-purple-400 hover:text-purple-300">+1 302 464 0950</a></p>
                <p className="mt-2">Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}