import { ArrowRight, FolderOpen, Users, Calendar, BarChart3, Zap, Shield, Globe, Star, CheckCircle, Mail, Smartphone, MapPin, Clock, Target } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionProjectMaster() {
  const features = [
    {
      title: "AI Project Planning",
      description: "Intelligent project planning with automated task breakdown, resource allocation, and timeline optimization",
      icon: <Target className="w-6 h-6" />,
      benefit: "50% faster planning"
    },
    {
      title: "Team Collaboration",
      description: "Real-time collaboration tools with comments, file sharing, and instant messaging for seamless teamwork",
      icon: <Users className="w-6 h-6" />,
      benefit: "Enhanced productivity"
    },
    {
      title: "Advanced Analytics",
      description: "Comprehensive project analytics with performance metrics, budget tracking, and predictive insights",
      icon: <BarChart3 className="w-6 h-6" />,
      benefit: "Data-driven decisions"
    },
    {
      title: "Automated Workflows",
      description: "Customizable workflows that automate repetitive tasks and streamline project management processes",
      icon: <Zap className="w-6 h-6" />,
      benefit: "Reduced manual work"
    },
    {
      title: "Resource Management",
      description: "Intelligent resource allocation with capacity planning, skill matching, and workload balancing",
      icon: <Calendar className="w-6 h-6" />,
      benefit: "Optimal resource use"
    },
    {
      title: "Global Access",
      description: "Access your projects from anywhere with mobile apps and cloud synchronization across all devices",
      icon: <Globe className="w-6 h-6" />,
      benefit: "Work from anywhere"
    }
  ];

  const projectTypes = [
    {
      name: "Agile Development",
      description: "Scrum and Kanban boards with sprint planning and retrospectives",
      icon: <FolderOpen className="w-8 h-8" />,
      efficiency: "40%"
    },
    {
      name: "Marketing Campaigns",
      description: "Campaign planning, content calendars, and performance tracking",
      icon: <Target className="w-8 h-8" />,
      efficiency: "35%"
    },
    {
      name: "Event Management",
      description: "Event planning, vendor management, and timeline coordination",
      icon: <Calendar className="w-8 h-8" />,
      efficiency: "45%"
    },
    {
      name: "Product Launches",
      description: "Launch planning, milestone tracking, and cross-team coordination",
      icon: <Zap className="w-8 h-8" />,
      efficiency: "50%"
    }
  ];

  const pricingPlans = [
    {
      name: "Team",
      price: "$29",
      period: "per month",
      description: "Perfect for small teams",
      features: [
        "Up to 10 team members",
        "Unlimited projects",
        "Basic analytics",
        "File sharing",
        "Email support",
        "Mobile apps"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "per month",
      description: "Ideal for growing teams",
      features: [
        "Up to 50 team members",
        "Advanced analytics",
        "Custom workflows",
        "Priority support",
        "API access",
        "Time tracking",
        "Resource management"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "per month",
      description: "For large organizations",
      features: [
        "Unlimited team members",
        "AI-powered insights",
        "Custom integrations",
        "Dedicated support",
        "24/7 phone support",
        "White-label options",
        "Advanced security"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Michael Rodriguez",
      company: "Software Development",
      role: "Project Manager",
      content: "Zion Project Master has transformed how we manage our development projects. The AI planning saves us hours every week.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Lisa Thompson",
      company: "Marketing Agency",
      role: "Operations Director",
      content: "The team collaboration features are incredible. We can coordinate complex campaigns across multiple teams seamlessly.",
      rating: 5,
      avatar: "LT"
    },
    {
      name: "James Wilson",
      company: "Event Management",
      role: "Event Director",
      content: "The resource management tools are game-changing. We can plan and execute events 50% more efficiently now.",
      rating: 5,
      avatar: "JW"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Project Master - AI-Powered Project Management Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Master your projects with Zion Project Master - the ultimate AI-powered project management platform. Team collaboration, advanced analytics, and automated workflows."
        />
        <meta
          name="keywords"
          content="project management, team collaboration, project planning, resource management, project analytics, workflow automation, agile development"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-project-master" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-cyan-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6">
              <FolderOpen className="w-4 h-4 text-indigo-400 mr-2" />
              <span className="text-indigo-400 text-sm font-medium">Project Management Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
                Zion Project Master
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 rounded-lg blur opacity-30 animate-pulse"></div>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              The ultimate AI-powered project management platform. Plan, execute, and deliver projects 
              with intelligent automation, team collaboration, and advanced analytics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-indigo-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <FolderOpen className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-400 mb-2">50%</div>
                <div className="text-gray-300 text-sm">Faster Planning</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">40%</div>
                <div className="text-gray-300 text-sm">Higher Efficiency</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">99%</div>
                <div className="text-gray-300 text-sm">On-time Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Team Collaboration</div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Types Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Perfect for Any Project Type
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From software development to event management, we've got you covered.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {projectTypes.map((type, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/10 text-center"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                    {type.name}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {type.description}
                  </p>
                  <div className="flex items-center justify-center text-indigo-400 text-sm font-medium">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    {type.efficiency} Efficiency
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Powerful Project Management Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to plan, execute, and deliver successful projects.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="flex items-center text-indigo-400 text-sm font-medium">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {feature.benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Choose Your Team Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Scale your project management with our flexible pricing plans.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'border-indigo-500/50 shadow-2xl shadow-indigo-500/20' 
                      : 'border-white/20 hover:border-indigo-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-indigo-400">{plan.price}</span>
                      <span className="text-gray-300 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                      plan.popular
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 shadow-lg hover:shadow-indigo-500/25'
                        : 'border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Trusted by Project Managers
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what project management professionals say about Zion Project Master
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-indigo-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Master Your Projects Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of teams using Zion Project Master to deliver projects on time and under budget. 
              Start your free trial today.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-indigo-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-indigo-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-indigo-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-indigo-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <FolderOpen className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}