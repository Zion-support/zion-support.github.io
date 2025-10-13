import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Play, 
  Video, 
  BarChart3, 
  Shield, 
  Users, 
  Brain, 
  ArrowRight, 
  Sparkles,
  CheckCircle,
  Star,
  Target,
  Globe,
  Smartphone,
  Monitor,
  Headphones,
  Settings,
  Cloud,
  Zap,
  TrendingUp,
  Heart,
  Receipt,
  Package,
  Code,
  Bot,
  Wifi,
  Cpu,
  Network,
  HardDrive,
  Phone,
  Laptop,
  Rocket,
  Mail,
  Database,
  Lock,
  Award,
  Clock,
  FileText,
  Calendar,
  Eye,
  AlertTriangle,
  DollarSign
} from "lucide-react";

export default function DemoPage() {
  const demoCategories = [
    {
      name: "AI Services",
      description: "Experience our AI-powered solutions in action",
      icon: <Brain className="w-8 h-8" />,
      demos: [
        {
          title: "Zion AI Analytics Pro",
          description: "See how AI analytics can transform your business intelligence",
          duration: "5 min",
          features: ["Real-time dashboards", "Predictive analytics", "Custom reports"],
          videoUrl: "#",
          interactive: true
        },
        {
          title: "Zion AI Video Generator Pro",
          description: "Create professional videos with AI in minutes",
          duration: "3 min",
          features: ["Script generation", "Voice synthesis", "Auto editing"],
          videoUrl: "#",
          interactive: true
        },
        {
          title: "Zion AI HR Suite Pro",
          description: "Streamline your HR processes with AI automation",
          duration: "7 min",
          features: ["Resume screening", "Performance analytics", "Employee engagement"],
          videoUrl: "#",
          interactive: true
        }
      ]
    },
    {
      name: "Cybersecurity",
      description: "Protect your organization with advanced security solutions",
      icon: <Shield className="w-8 h-8" />,
      demos: [
        {
          title: "Zion AI Cybersecurity Monitor Pro",
          description: "Real-time threat detection and automated response",
          duration: "6 min",
          features: ["Threat detection", "Incident response", "Compliance monitoring"],
          videoUrl: "#",
          interactive: true
        },
        {
          title: "Zion Security Shield Pro",
          description: "Comprehensive security protection for your business",
          duration: "4 min",
          features: ["24/7 monitoring", "Vulnerability assessment", "Security training"],
          videoUrl: "#",
          interactive: false
        }
      ]
    },
    {
      name: "Financial Analytics",
      description: "Make data-driven financial decisions with AI insights",
      icon: <DollarSign className="w-8 h-8" />,
      demos: [
        {
          title: "Zion AI Financial Analytics Pro",
          description: "Advanced financial forecasting and investment analytics",
          duration: "8 min",
          features: ["Financial forecasting", "Risk assessment", "Portfolio optimization"],
          videoUrl: "#",
          interactive: true
        }
      ]
    },
    {
      name: "IT Services",
      description: "Comprehensive IT solutions and infrastructure management",
      icon: <Settings className="w-8 h-8" />,
      demos: [
        {
          title: "Cloud Migration Services",
          description: "Seamless cloud migration and infrastructure optimization",
          duration: "5 min",
          features: ["Migration planning", "Infrastructure setup", "Performance optimization"],
          videoUrl: "#",
          interactive: false
        },
        {
          title: "DevOps Automation",
          description: "Streamline your development and deployment processes",
          duration: "6 min",
          features: ["CI/CD pipelines", "Automated testing", "Deployment optimization"],
          videoUrl: "#",
          interactive: true
        }
      ]
    }
  ];

  const interactiveFeatures = [
    {
      title: "Live Dashboard",
      description: "Interact with real-time data and analytics",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "AI Chat Assistant",
      description: "Ask questions and get instant AI-powered responses",
      icon: <Bot className="w-6 h-6" />
    },
    {
      title: "Custom Configuration",
      description: "Configure settings and see immediate results",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Real-time Monitoring",
      description: "Monitor systems and processes in real-time",
      icon: <Eye className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "The demo was incredibly impressive. We could see exactly how the AI analytics would work for our business. The interactive features made it easy to understand the value proposition.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The cybersecurity demo showed us exactly how the threat detection works. The real-time monitoring capabilities are exactly what we need for our organization.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Financial Services",
      role: "CFO",
      content: "The financial analytics demo was eye-opening. We could see how the AI forecasting would help us make better investment decisions and manage risk more effectively.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Interactive Demos - Zion Tech Group | Experience Our Solutions</title>
        <meta
          name="description"
          content="Experience our AI services, IT solutions, and micro SAAS products through interactive demos. See how our technology can transform your business operations."
        />
        <meta
          name="keywords"
          content="interactive demos, AI services demo, IT solutions demo, micro SAAS demo, technology demonstration, business solutions demo"
        />
        <link rel="canonical" href="https://ziontechgroup.com/demo" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
                <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-cyan-400 text-sm font-medium">Interactive Technology Demos</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                  Experience Our Solutions
                </span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
                See our AI services, IT solutions, and micro SAAS products in action. 
                Interactive demos that let you experience the power of our technology firsthand.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Schedule Live Demo
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/pricing"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                >
                  View Pricing
                  <DollarSign className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Interactive Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-16">
              {interactiveFeatures.map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div className="text-sm font-semibold text-white mb-2">{feature.title}</div>
                  <div className="text-xs text-gray-300">{feature.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Interactive Demo Categories
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our solutions through hands-on interactive demonstrations
              </p>
            </div>
            
            <div className="space-y-16">
              {demoCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-6">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">{category.name}</h3>
                      <p className="text-gray-300 text-lg">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.demos.map((demo, demoIndex) => (
                      <div
                        key={demoIndex}
                        className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {demo.title}
                          </h4>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30">
                              {demo.duration}
                            </span>
                            {demo.interactive && (
                              <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full border border-green-500/30">
                                Interactive
                              </span>
                            )}
                          </div>
                        </div>
                        
                        <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                          {demo.description}
                        </p>
                        
                        <ul className="space-y-2 mb-6">
                          {demo.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div className="flex space-x-3">
                          <button className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group">
                            <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                            Watch Demo
                          </button>
                          {demo.interactive && (
                            <button className="flex-1 border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                              Try Live
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
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
                What Our Clients Say About Our Demos
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how our interactive demos have helped businesses understand our solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Experience Our Solutions?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Schedule a personalized demo with our experts. See how our technology 
              can transform your business operations and drive growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Schedule Live Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/pricing"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View Pricing Plans
                <DollarSign className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}