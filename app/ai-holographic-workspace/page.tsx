import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, ArrowRight, CheckCircle, Shield, BarChart3, Users, Eye, Hand, Star } from 'lucide-react';

const AIHolographicWorkspace = () => {
  const features = [
    {
      title: "3D Holographic Display",
      description: "Immersive 3D holographic interface that projects data and applications into your physical space.",
      icon: <Monitor className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Remote Collaboration",
      description: "Seamless collaboration with team members in shared holographic workspaces from anywhere in the world.",
      icon: <Users className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Data Visualization",
      description: "Transform complex data into interactive 3D visualizations that you can manipulate with gestures.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Gesture Control",
      description: "Control your holographic workspace with natural hand gestures and eye tracking technology.",
      icon: <Hand className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const capabilities = [
    "3D holographic projection technology",
    "Real-time remote collaboration tools",
    "Gesture and eye-tracking controls",
    "Interactive 3D data visualization",
    "Spatial audio and haptic feedback",
    "Multi-user virtual meeting rooms",
    "3D file and document management",
    "Augmented reality integration",
    "Virtual whiteboard and sketching",
    "3D model manipulation and editing",
    "Spatial computing applications",
    "Immersive presentation capabilities"
  ];

  const pricingPlans = [
    {
      name: "Holographic Starter",
      price: "$399",
      period: "/month",
      description: "Perfect for individuals exploring holographic workspace technology",
      features: [
        "Basic 3D holographic display",
        "Single-user workspace",
        "Gesture control interface",
        "Basic data visualization",
        "Email support",
        "10GB holographic storage"
      ],
      popular: false
    },
    {
      name: "Holographic Professional",
      price: "$799",
      period: "/month",
      description: "Advanced features for teams and professionals",
      features: [
        "All Starter features",
        "Multi-user collaboration",
        "Advanced 3D visualization",
        "Spatial audio integration",
        "Priority support",
        "100GB holographic storage",
        "API access",
        "Custom workspace templates"
      ],
      popular: true
    },
    {
      name: "Holographic Enterprise",
      price: "$1,599",
      period: "/month",
      description: "Complete solution for large organizations",
      features: [
        "All Professional features",
        "Unlimited users",
        "Custom holographic applications",
        "White-label interface",
        "Dedicated support team",
        "Unlimited holographic storage",
        "Advanced security protocols",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Alex Thompson",
      company: "Future Tech Labs",
      role: "Research Director",
      content: "The holographic workspace has revolutionized how we collaborate. The 3D data visualization capabilities are absolutely mind-blowing.",
      rating: 5,
      avatar: "AT"
    },
    {
      name: "Maria Rodriguez",
      company: "Design Innovation Co.",
      role: "Creative Director",
      content: "Working in 3D space has completely changed our design process. We can now visualize and iterate on concepts in ways we never thought possible.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "James Chen",
      company: "Global Engineering Solutions",
      role: "CTO",
      content: "The remote collaboration features are incredible. Our distributed team feels like they're working in the same room, even across continents.",
      rating: 5,
      avatar: "JC"
    }
  ];

  const stats = [
    { number: "360°", label: "Field of View", icon: <Eye className="w-6 h-6" /> },
    { number: "4K", label: "Holographic Resolution", icon: <Monitor className="w-6 h-6" /> },
    { number: "50+", label: "Concurrent Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* SEO Meta Tags */}
      <title>AI Holographic Workspace - 3D Immersive Collaboration | Zion Tech Group</title>
      <meta name="description" content="3D holographic interface for immersive remote collaboration and data visualization. Transform your workspace with cutting-edge holographic technology." />
      <meta name="keywords" content="holographic workspace, 3D collaboration, immersive technology, remote work, data visualization, gesture control, spatial computing" />
      <link rel="canonical" href="https://ziontechgroup.com/ai-holographic-workspace" />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Monitor className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Next-Gen Holographic Technology</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Holographic Workspace
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            3D holographic interface for immersive remote collaboration and data visualization. 
            Transform your workspace with cutting-edge holographic technology that brings the future to your present.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Experience Holographic Future
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Watch Holographic Demo
              <Eye className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Revolutionary Holographic Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Experience the future of workspace technology with our cutting-edge holographic interface.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Holographic Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Unlock the full potential of holographic workspace technology with our comprehensive feature set.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {capabilities.slice(0, 6).map((capability, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{capability}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {capabilities.slice(6, 12).map((capability, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Holographic Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Select the perfect plan for your holographic workspace needs and step into the future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.popular
                    ? 'border-cyan-500/50 shadow-cyan-500/20 scale-105'
                    : 'border-white/10 hover:border-cyan-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
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
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-400 hover:to-purple-400'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Hear from professionals who are already using our holographic workspace technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Step Into the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Transform your workspace with holographic technology and experience collaboration like never before. 
            Start your holographic journey today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Your Holographic Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/pricing"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View All Plans
              <Monitor className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIHolographicWorkspace;