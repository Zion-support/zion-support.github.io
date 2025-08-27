import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Users, 
  Briefcase, 
  Cpu, 
  Shield, 
  Zap, 
  Clock,
  Rocket,
  Target,
  TrendingUp,
  Award,
  Globe
} from 'lucide-react';

export function FeatureCTAs() {
  const features = [
    {
      title: "AI-Powered Talent Matching",
      description: "Connect with the perfect tech talent using our advanced AI algorithms",
      icon: <Users className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700"/>,
      link: "/talent",
      badge: "Popular",
      details: "Our AI-driven platform matches you with verified tech professionals based on skills, experience, and project requirements."
    },
    {
      title: "Micro SAAS Solutions",
      description: "Access cutting-edge software solutions for every business need",
      icon: <Cpu className="h-10 w-10 p-2 rounded-md bg-green-100 text-green-700"/>,
      link: "/services",
      badge: "New",
      details: "Discover innovative micro SAAS applications that can transform your business operations and boost productivity."
    },
    {
      title: "Enterprise IT Services",
      description: "Comprehensive IT solutions for large-scale business transformation",
      icon: <Briefcase className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700"/>,
      link: "/enterprise",
      badge: "Enterprise",
      details: "End-to-end IT services including infrastructure, security, cloud migration, and digital transformation."
    },
    {
      title: "Cybersecurity & Compliance",
      description: "Protect your business with enterprise-grade security solutions",
      icon: <Shield className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700"/>,
      link: "/cybersecurity",
      badge: "Critical",
      details: "Comprehensive security services including threat detection, compliance management, and incident response."
    },
    {
      title: "Quantum Computing Solutions",
      description: "Leverage the power of quantum computing for complex problem-solving",
      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-yellow-100 text-yellow-700"/>,
      link: "/quantum",
      badge: "Cutting-Edge",
      details: "Explore quantum computing applications for optimization, cryptography, and scientific research."
    },
    {
      title: "AI Recruiting Platform",
      description: "Streamline your hiring process with intelligent automation",
      icon: <Clock className="h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700"/>,
      link: "/zion-hire-ai",
      badge: "Premium",
      details: "Automate screening, improve candidate matching, and enhance the hiring experience with our AI recruiting solution."
    }
  ];

  const ctaItems = [
    {
      title: "Find Talent",
      description: "Connect with verified tech professionals",
      href: "/talent",
      icon: Users,
      color: "from-blue-500 to-blue-600",
      hoverColor: "from-blue-600 to-blue-700"
    },
    {
      title: "Explore Services",
      description: "Discover innovative solutions",
      href: "/services",
      icon: Rocket,
      color: "from-purple-500 to-purple-600",
      hoverColor: "from-purple-600 to-purple-700"
    },
    {
      title: "Get Quote",
      description: "Request custom pricing",
      href: "/contact",
      icon: Target,
      color: "from-green-500 to-green-600",
      hoverColor: "from-green-600 to-green-700"
    },
    {
      title: "Learn More",
      description: "Discover our capabilities",
      href: "/about",
      icon: Globe,
      color: "from-orange-500 to-orange-600",
      hoverColor: "from-orange-600 to-orange-700"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-background/90">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-3">Discover Zion's Powerful Features</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive suite of tools designed to transform how you connect, collaborate, and create in the tech ecosystem.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-blue-300">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  {feature.icon}
                  {feature.badge && (
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                      {feature.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <p className="text-sm text-gray-500 mb-4">{feature.details}</p>
                <Link 
                  to={feature.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  Explore {feature.title}
                  <ArrowRight className="w-4 h-4 ml-2"/>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-20 bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose your next step and begin your journey with Zion Tech Group
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ctaItems.map((item, index) => (
              <a 
                key={index} 
                href={item.href} 
                className="group bg-slate-800/50 border border-white/10 rounded-xl p-6 text-center hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300`}>
                  <item.icon className="w-8 h-8 text-white"/>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-4">
                  {item.description}
                </p>
                
                <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${item.color} text-white font-medium rounded-lg hover:bg-gradient-to-r ${item.hoverColor} transition-all duration-300`}>
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2"/>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">
              Need help choosing? Our experts are here to guide you.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Talk to an Expert
              <ArrowRight className="w-5 h-5 ml-2"/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
