import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Building,
  Users,
  Target,
  Award,
  Globe,
  Rocket,
  Brain,
  Shield,
  Cloud,
  Server,
  TrendingUp,
  Heart,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Users as UsersIcon,
  Briefcase,
  FileText,
  Video,
  BookOpen,
  Zap,
  Cpu,
  Database,
  Network,
  Palette,
  Smartphone,
  BarChart3,
  Lock,
  Atom,
  Globe as GlobeIcon
} from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { label: 'Years of Experience', value: '15+', icon: Calendar },
    { label: 'Projects Completed', value: '500+', icon: CheckCircle },
    { label: 'Team Members', value: '100+', icon: UsersIcon },
    { label: 'Countries Served', value: '25+', icon: Globe },
    { label: 'Client Satisfaction', value: '98%', icon: Star },
    { label: 'Technologies', value: '50+', icon: Zap }
  ];

  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, constantly exploring emerging technologies and creative solutions.'
    },
    {
      icon: Heart,
      title: 'Client Success',
      description: 'Your success is our success. We\'re committed to delivering solutions that drive real business value.'
    },
    {
      icon: Shield,
      title: 'Quality & Security',
      description: 'We maintain the highest standards of quality and security in everything we deliver.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and building strong partnerships with our clients.'
    }
  ];

  const services = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Cutting-edge artificial intelligence solutions that transform business operations.',
      href: '/services/ai'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure and streamlined development operations.',
      href: '/services/cloud'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      href: '/services/cybersecurity'
    },
    {
      icon: Server,
      title: 'Infrastructure',
      description: 'Robust IT infrastructure that supports your business growth.',
      href: '/services/infrastructure'
    }
  ];

  const timeline = [
    {
      year: '2010',
      title: 'Company Founded',
      description: 'Zion Tech Group was established with a vision to revolutionize technology consulting.'
    },
    {
      year: '2015',
      title: 'AI Division Launch',
      description: 'Launched our AI and machine learning services division.'
    },
    {
      year: '2018',
      title: 'Global Expansion',
      description: 'Expanded operations to serve clients across 25+ countries.'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Pioneered comprehensive digital transformation solutions.'
    },
    {
      year: '2023',
      title: 'Innovation Hub',
      description: 'Established our innovation hub for cutting-edge technology research.'
    },
    {
      year: '2025',
      title: 'Future Forward',
      description: 'Leading the charge in next-generation technology solutions.'
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue-dark">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-purple/20 via-zion-blue-dark to-zion-cyan/20" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-zion-cyan">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              We are a forward-thinking technology company dedicated to empowering businesses 
              through innovative solutions, cutting-edge AI technology, and strategic digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan/80 transition-all duration-300 hover:scale-105"
              >
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-3 border border-zion-purple/30 text-zion-cyan font-semibold rounded-lg hover:bg-zion-purple/10 transition-all duration-300"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-zion-cyan/20 border border-zion-cyan/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-zion-slate-light">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Our <span className="text-zion-cyan">Mission</span>
              </h2>
              <p className="text-lg text-zion-slate-light mb-6 leading-relaxed">
                To democratize access to cutting-edge technology solutions, enabling businesses 
                of all sizes to thrive in the digital age through innovation, expertise, and 
                unwavering commitment to client success.
              </p>
              <p className="text-lg text-zion-slate-light leading-relaxed">
                We believe that technology should be an enabler, not a barrier, and we're 
                committed to making advanced solutions accessible, understandable, and 
                implementable for our clients.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="w-full h-80 bg-gradient-to-br from-zion-purple/20 to-zion-cyan/20 rounded-2xl border border-zion-purple/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Building className="w-24 h-24 text-zion-cyan mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white">Building Tomorrow's Technology</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our <span className="text-zion-cyan">Values</span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
              These core values guide everything we do and shape how we work with our clients, 
              partners, and each other.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-zion-blue-dark border border-zion-purple/30 rounded-xl hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-zion-cyan/20 border border-zion-cyan/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-zion-slate-light leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              What We <span className="text-zion-cyan">Do</span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
              We offer a comprehensive range of technology services designed to meet the 
              evolving needs of modern businesses.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-zion-blue-dark border border-zion-purple/30 rounded-xl hover:border-zion-cyan/50 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-zion-cyan/20 border border-zion-cyan/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-zion-cyan" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-zion-slate-light mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <Link
                      to={service.href}
                      className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our <span className="text-zion-cyan">Journey</span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
              From our humble beginnings to becoming a leading technology company, 
              here's the story of our growth and evolution.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px w-0.5 h-full bg-zion-purple/30" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-zion-cyan rounded-full border-4 border-zion-blue-dark z-10" />
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="p-6 bg-zion-blue-dark border border-zion-purple/30 rounded-xl">
                      <div className="text-2xl font-bold text-zion-cyan mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-zion-slate-light">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-zion-slate-light mb-8 leading-relaxed">
              Let's discuss how our technology solutions can help you achieve your goals 
              and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan/80 transition-all duration-300 hover:scale-105"
              >
                Start a Conversation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center px-8 py-3 border border-zion-purple/30 text-zion-cyan font-semibold rounded-lg hover:bg-zion-purple/10 transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
