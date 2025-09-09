import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Play, 
  Download, 
  Users, 
  Zap, 
  ArrowRight 
} from 'lucide-react';

export function FeatureCTAs() {
  const features = [
    {
      title: 'AI-Powered Talent Matching',
      description:
        'Connect with the perfect tech talent using our advanced AI algorithms',
      icon: (
        <Users className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700"       />
      ),
      link: '/talent',
      badge: 'Popular',
      details:
        'Our AI-driven platform matches you with verified tech professionals based on skills, experience, and project requirements.',
    },
    {
      title: 'Micro SAAS Solutions',
      description:
        'Access cutting-edge software solutions for every business need',
      icon: (
        <Cpu className="h-10 w-10 p-2 rounded-md bg-green-100 text-green-700"       />
      ),
      link: '/services',
      badge: 'New',
      details:
        'Discover innovative micro SAAS applications that can transform your business operations and boost productivity.',
    },
    {
      title: 'Enterprise IT Services',
      description:
        'Comprehensive IT solutions for large-scale business transformation',
      icon: (
        <Briefcase className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700"       />
      ),
      link: '/enterprise',
      badge: 'Enterprise',
      details:
        'End-to-end IT services including infrastructure, security, cloud migration, and digital transformation.',
    },
    {
      title: 'Cybersecurity & Compliance',
      description:
        'Protect your business with enterprise-grade security solutions',
      icon: (
        <Shield className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700"       />
      ),
      link: '/cybersecurity',
      badge: 'Critical',
      details:
        'Comprehensive security services including threat detection, compliance management, and incident response.',
    },
    {
      title: 'Quantum Computing Solutions',
      description:
        'Leverage the power of quantum computing for complex problem-solving',
      icon: (
        <Zap className="h-10 w-10 p-2 rounded-md bg-yellow-100 text-yellow-700"       />
      ),
      link: '/quantum',
      badge: 'Cutting-Edge',
      details:
        'Explore quantum computing applications for optimization, cryptography, and scientific research.',
    },
    {
      title: 'AI Recruiting Platform',
      description: 'Streamline your hiring process with intelligent automation',
      icon: (
        <Clock className="h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700"       />
      ),
      link: '/zion-hire-ai',
      badge: 'Premium',
      details:
        'Automate screening, improve candidate matching, and enhance the hiring experience with our AI recruiting solution.',
    },
  ];

  const ctaItems = [
    {
      title: "Watch Demo",
      description: "See our solutions in action",
      icon: Play,
      href: "/demo",
      color: "from-blue-600 to-cyan-600",
      hoverColor: "from-blue-700 to-cyan-700"
    },
    {
      title: "Download Brochure",
      description: "Get detailed information",
      icon: Download,
      href: "/brochure",
      color: "from-green-600 to-teal-600",
      hoverColor: "from-green-700 to-teal-700"
    },
    {
      title: "Meet Our Team",
      description: "Connect with experts",
      icon: Users,
      href: "/team",
      color: "from-purple-600 to-pink-600",
      hoverColor: "from-purple-700 to-pink-700"
    },
    {
      title: "Get Started",
      description: "Start your project today",
      icon: Zap,
      href: "/contact",
      color: "from-orange-600 to-red-600",
      hoverColor: "from-orange-700 to-red-700"
    }
  ];

  return (
    <section className="py-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose your next step and begin your journey with Zion Tech Group
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((((((((feature, index, index, index, index, index, index, index) => ({ ...((((((feature, index, index, index, index, index, index, key: index })) => ({ ...(((((feature, index, index, index, index, index, key: index })) => ({ ...((((feature, index, index, index, index, key: index })) => ({ ...(((feature, index, index, index, key: index })) => ({ ...((feature, index, index, key: index })) => ({ ...(feature, index, key: index })) => (
            <div
              key={index}
              className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-slate-300">{feature.icon}</div>
                {feature.badge && (
                  <span className="px-3 py-1 text-xs font-medium bg-zion-purple/20 text-zion-purple border border-zion-purple/30 rounded-full">
                    {feature.badge}
                  </span>
                )}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                {feature.description}
              </p>
              <p className="text-gray-400 text-sm mb-4">{feature.details}</p>
              <Link
                to={feature.link}
                className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors duration-200"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2"       />
              </Link>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ctaItems.map((((((((item, index, index, index, index, index, index, index) => ({ ...((((((item, index, index, index, index, index, index, key: index })) => ({ ...(((((item, index, index, index, index, index, key: index })) => ({ ...((((item, index, index, index, index, key: index })) => ({ ...(((item, index, index, index, key: index })) => ({ ...((item, index, index, key: index })) => ({ ...(item, index, key: index })) => (
            <Link key={index} to={item.href} className="group block">
              <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600/50 rounded-xl p-6 text-center hover:border-slate-500/50 transition-all duration-300 group-hover:scale-105">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:${item.hoverColor} transition-all duration-300`}
                >
                  <item.icon className="w-8 h-8 text-white"       />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
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
            </motion.a>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-400 mb-4">
            Have questions? Our team is here to help you succeed.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
