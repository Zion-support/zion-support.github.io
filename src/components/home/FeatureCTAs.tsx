<<<<<<< HEAD

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, 
  Users, 
  Briefcase, 
  Settings, 
  ArrowRight,
  Sparkles,
  Zap,
  Globe
} from 'lucide-react';

const featureCTAs = [
  {
    title: 'AI Talent Matcher',
    description: 'Find the perfect match using advanced AI algorithms',
    icon: Search,
    link: '/match',
    color: 'from-zion-purple to-zion-purple-dark',
    bgColor: 'bg-zion-purple/10',
    iconColor: 'text-zion-purple',
    features: ['Smart matching', 'Skill validation', 'Instant results']
  },
  {
    title: 'Global Talent Pool',
    description: 'Access skilled professionals from around the world',
    icon: Users,
    link: '/talent',
    color: 'from-zion-cyan to-zion-blue',
    bgColor: 'bg-zion-cyan/10',
    iconColor: 'text-zion-cyan',
    features: ['150+ countries', 'Verified profiles', 'Diverse skills']
  },
  {
    title: 'IT Services Network',
    description: '24/7 global IT support and technical services',
    icon: Settings,
    link: '/it-onsite-services',
    color: 'from-zion-blue to-zion-blue-dark',
    bgColor: 'bg-zion-blue/10',
    iconColor: 'text-zion-blue',
    features: ['24/7 support', 'Global coverage', 'Certified techs']
  },
  {
    title: 'Professional Services',
    description: 'Comprehensive business and technical solutions',
    icon: Briefcase,
    link: '/services',
    color: 'from-zion-green to-zion-green-dark',
    bgColor: 'bg-zion-green/10',
    iconColor: 'text-zion-green',
    features: ['Custom solutions', 'Expert teams', 'Quality guarantee']
  }
];

export function FeatureCTAs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-zion-slate/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-zion-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-zion-cyan/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-zion-cyan text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Powerful Features</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Everything You Need to Succeed
          </h2>
          
          <p className="text-lg md:text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Discover the tools and services that make Zion the ultimate platform for 
            talent acquisition and business growth.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {featureCTAs.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="group relative"
              >
                <Link to={feature.link} className="block h-full">
                  <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-zion-purple/10">
                    {/* Background glow effect */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    
                    {/* Header with icon */}
                    <div className="relative z-10 flex items-start gap-6 mb-6">
                      <div className={`w-20 h-20 ${feature.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg`}>
                        <IconComponent className={`w-10 h-10 ${feature.iconColor}`} />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-zion-slate-light leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    {/* Feature list */}
                    <div className="relative z-10 mb-6">
                      <div className="grid grid-cols-1 gap-3">
                        {feature.features.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className={`w-2 h-2 bg-gradient-to-r ${feature.color} rounded-full`}></div>
                            <span className="text-zion-slate-light text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA button */}
                    <div className="relative z-10">
                      <div className="inline-flex items-center gap-2 text-zion-cyan font-medium group-hover:text-zion-cyan-light transition-colors duration-300">
                        <span>Explore {feature.title}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </div>

                    {/* Corner accent */}
                    <div className={`absolute top-6 right-6 w-4 h-4 bg-gradient-to-br ${feature.color} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300`}></div>
                    
                    {/* Bottom accent line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} rounded-b-3xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left`}></div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="max-w-4xl mx-auto p-10 rounded-3xl bg-gradient-to-r from-zion-purple/10 via-zion-cyan/10 to-zion-blue/10 border border-white/10 backdrop-blur-xl relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-zion-purple via-zion-cyan to-zion-blue"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Globe className="w-10 h-10 text-zion-cyan" />
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  Ready to Transform Your Business?
                </h3>
                <Zap className="w-10 h-10 text-zion-purple" />
              </div>
              
              <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto leading-relaxed">
                Join thousands of companies already using Zion to find top talent, 
                access global IT services, and scale their operations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/signup"
                  className="px-10 py-5 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white font-semibold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-purple/25 flex items-center gap-2 justify-center"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="px-10 py-5 border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark font-semibold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 justify-center"
                >
                  <span>Contact Sales</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
=======
import React from 'react';
import { ArrowRight, Play, Download, Users, Zap } from 'lucide-react';

export const FeatureCTAs: React.FC = () => {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ctaItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="group bg-slate-800/50 border border-white/10 rounded-xl p-6 text-center hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                {item.title}
              </h3>
              
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-4">
                {item.description}
              </p>
              
              <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${item.color} text-white font-medium rounded-lg hover:bg-gradient-to-r ${item.hoverColor} transition-all duration-300`}>
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
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
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};
>>>>>>> origin/cursor/website-audit-and-enhancement-438b
