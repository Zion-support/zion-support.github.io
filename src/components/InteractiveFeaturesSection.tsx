import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Zap, 
  Shield, 
  Globe, 
  Users, 
  TrendingUp, 
  Lock,
  Smartphone,
  Code,
  Database,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  Award,
  Target,
  Lightbulb,
  Rocket,
  Heart
} from 'lucide-react';

const InteractiveFeaturesSection: React.FC = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [animatedStats, setAnimatedStats] = useState({
    projects: 0,
    clients: 0,
    satisfaction: 0,
    uptime: 0
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  const features = [
    {
      id: 1,
      icon: Zap,
      title: 'Lightning Fast Performance',
      description: 'Optimized for speed with 99.9% uptime guarantee',
      details: 'Our infrastructure is designed for maximum performance with global CDN, edge computing, and automated scaling.',
      color: 'from-yellow-400 to-orange-500',
      stats: { label: 'Load Time', value: '< 1s', suffix: '' }
    },
    {
      id: 2,
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption',
      details: 'Multi-layered security approach with SOC 2 compliance, regular audits, and 24/7 monitoring.',
      color: 'from-red-500 to-pink-500',
      stats: { label: 'Security Score', value: '100', suffix: '%' }
    },
    {
      id: 3,
      icon: Globe,
      title: 'Global Scale',
      description: 'Worldwide infrastructure with local data centers',
      details: 'Deployed across 50+ countries with edge locations for optimal performance and compliance.',
      color: 'from-blue-500 to-cyan-500',
      stats: { label: 'Countries', value: '50+', suffix: '' }
    },
    {
      id: 4,
      icon: Users,
      title: '24/7 Expert Support',
      description: 'Dedicated support team available around the clock',
      details: 'Our certified experts provide instant support via chat, email, and phone with average response time under 5 minutes.',
      color: 'from-green-500 to-emerald-500',
      stats: { label: 'Response Time', value: '< 5min', suffix: '' }
    },
    {
      id: 5,
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Grows with your business from startup to enterprise',
      details: 'Auto-scaling infrastructure that adapts to your traffic patterns and business growth automatically.',
      color: 'from-purple-500 to-indigo-500',
      stats: { label: 'Scalability', value: '10x', suffix: '' }
    },
    {
      id: 6,
      icon: Lock,
      title: 'Data Privacy',
      description: 'GDPR compliant with complete data control',
      details: 'Full compliance with international privacy regulations and complete transparency in data handling.',
      color: 'from-gray-600 to-gray-800',
      stats: { label: 'Compliance', value: '100', suffix: '%' }
    }
  ];

  const benefits = [
    {
      icon: Rocket,
      title: 'Faster Time to Market',
      description: 'Launch your products 3x faster with our streamlined development process',
      metric: '3x Faster'
    },
    {
      icon: Target,
      title: 'Higher ROI',
      description: 'Average 250% ROI within the first year of implementation',
      metric: '250% ROI'
    },
    {
      icon: Heart,
      title: 'Customer Satisfaction',
      description: '98% customer satisfaction rate with our solutions and support',
      metric: '98% Happy'
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Award-winning solutions recognized by leading industry publications',
      metric: '15+ Awards'
    }
  ];

  const testimonials = [
    {
      quote: "Zion Tech Group transformed our entire digital infrastructure. The results exceeded our expectations by far.",
      author: "Sarah Johnson",
      role: "CTO",
      company: "TechCorp Inc.",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      quote: "Their AI solutions helped us automate 80% of our customer support. Incredible team and results!",
      author: "Michael Chen",
      role: "Founder",
      company: "StartupXYZ",
      rating: 5,
      avatar: "👨‍💻"
    },
    {
      quote: "Professional, reliable, and innovative. They delivered our cloud migration flawlessly.",
      author: "Emily Rodriguez",
      role: "IT Director",
      company: "Enterprise Solutions",
      rating: 5,
      avatar: "👩‍🔬"
    }
  ];

  useEffect(() => {
    if (isInView) {
      // Animate stats
      const animateValue = (key: keyof typeof animatedStats, end: number) => {
        let start = 0;
        const duration = 2000;
        const increment = end / (duration / 16);
        
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setAnimatedStats(prev => ({ ...prev, [key]: end }));
            clearInterval(timer);
          } else {
            setAnimatedStats(prev => ({ ...prev, [key]: Math.floor(start) }));
          }
        }, 16);
      };

      animateValue('projects', 500);
      animateValue('clients', 200);
      animateValue('satisfaction', 98);
      animateValue('uptime', 99);

      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2 fill-current" />
            Why Choose Zion Tech Group
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Powerful Features
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Built for Success
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference with our cutting-edge technology solutions 
            designed to accelerate your business growth and success.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {[
            { label: 'Projects Completed', value: animatedStats.projects, suffix: '+' },
            { label: 'Happy Clients', value: animatedStats.clients, suffix: '+' },
            { label: 'Satisfaction Rate', value: animatedStats.satisfaction, suffix: '%' },
            { label: 'Uptime Guarantee', value: animatedStats.uptime, suffix: '%' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid lg:grid-cols-3 gap-8 mb-20"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                className="relative group"
                onMouseEnter={() => setHoveredFeature(feature.id)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6">
                      {feature.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <div className={`text-2xl font-bold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                          {feature.stats.value}{feature.stats.suffix}
                        </div>
                        <div className="text-sm text-gray-500">{feature.stats.label}</div>
                      </div>
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                        <CheckCircle className="w-6 h-6 text-green-500" />
                      </div>
                    </div>

                    {/* Expandable Details */}
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: hoveredFeature === feature.id ? 'auto' : 0,
                        opacity: hoveredFeature === feature.id ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-gray-200">
                        <p className="text-sm text-gray-600">{feature.details}</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-12 mb-20 shadow-2xl"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Proven Business Benefits
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our solutions deliver measurable results that directly impact your bottom line
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-blue-600 mb-2">{benefit.metric}</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-12">
            Trusted by Industry Leaders
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 mb-6 italic text-lg">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl mr-4">
                    {testimonial.avatar}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveFeaturesSection;