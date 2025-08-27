
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
<<<<<<< HEAD
  Target, 
  Award, 
  CheckCircle,
  ArrowRight,
  Globe,
  Zap,
  Heart
} from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Zap,
      title: "Innovation",
      description: "We push boundaries and embrace cutting-edge technology to solve complex challenges"
    },
    {
      icon: Heart,
      title: "Customer Success",
      description: "Your success is our success. We're committed to delivering exceptional results"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "We work with clients worldwide to create positive change through technology"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards of quality in everything we do"
    }
  ];

  const stats = [
    { value: "500+", label: "Global Clients" },
    { value: "25+", label: "Countries" },
    { value: "1000+", label: "Projects Delivered" },
    { value: "99.9%", label: "Client Satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-6">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              About Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Pioneering the future with AI-powered solutions, quantum technology, and innovative IT services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/services" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Our Services
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                To empower businesses with cutting-edge technology solutions that drive innovation, 
                efficiency, and growth in an increasingly digital world.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                We believe that technology should be accessible, scalable, and transformative. 
                Our team of experts works tirelessly to deliver solutions that not only meet 
                today's challenges but anticipate tomorrow's opportunities.
              </p>
              <Link 
                to="/services"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
              >
                Explore Our Services <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 p-8 rounded-xl border border-slate-700"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Why Choose Us?</h3>
              <div className="space-y-4">
                {[
                  "Expert team with decades of experience",
                  "Cutting-edge AI and machine learning",
                  "Global reach and local expertise",
                  "Proven track record of success",
                  "Innovative problem-solving approach"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide our work and shape our culture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              By the Numbers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our impact and reach across the globe
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-lg text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
=======
  Award, 
  Target, 
  Globe, 
  Shield, 
  Zap, 
  Heart, 
  Building, 
  Cpu, 
  Lock, 
  Star, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  ExternalLink,
  Lightbulb,
  Rocket,
  Eye,
  Handshake,
  Code,
  Cloud,
  Brain,
  Database,
  Network,
  Smartphone,
  Server,
  Monitor,
  ShieldCheck,
  Globe2,
  Zap as Lightning,
  Users2,
  Award as Trophy,
  Clock,
  MapPin,
  Mail,
  Phone,
  MessageCircle
} from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  expertise: string[];
  avatar: string;
  linkedin?: string;
  github?: string;
}

interface Achievement {
  title: string;
  value: string;
  description: string;
  icon: any;
  color: string;
}

interface Value {
  title: string;
  description: string;
  icon: any;
  color: string;
}

interface Service {
  title: string;
  description: string;
  icon: any;
  color: string;
  features: string[];
}

const achievements: Achievement[] = [
  {
    title: 'Projects Completed',
    value: '150+',
    description: 'Successfully delivered projects across various industries',
    icon: CheckCircle,
    color: 'from-green-500 to-emerald-600'
  },
  {
    title: 'Happy Clients',
    value: '80+',
    description: 'Satisfied customers worldwide',
    icon: Heart,
    color: 'from-red-500 to-pink-600'
  },
  {
    title: 'Team Members',
    value: '50+',
    description: 'Expert professionals and innovators',
    icon: Users,
    color: 'from-blue-500 to-cyan-600'
  },
  {
    title: 'Years Experience',
    value: '5+',
    description: 'Deep expertise in cutting-edge technologies',
    icon: Award,
    color: 'from-yellow-500 to-orange-600'
  }
];

const values: Value[] = [
  {
    title: 'Innovation First',
    description: 'We constantly push the boundaries of what\'s possible, embracing emerging technologies and creative solutions.',
    icon: Lightbulb,
    color: 'from-yellow-500 to-orange-500'
  },
  {
    title: 'Excellence',
    description: 'We maintain the highest standards in everything we do, from code quality to customer service.',
    icon: Star,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Integrity',
    description: 'We build trust through transparency, honesty, and ethical business practices.',
    icon: Shield,
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and partnership to achieve extraordinary results.',
    icon: Users2,
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Customer Success',
    description: 'Your success is our success. We\'re committed to delivering value that drives your business forward.',
    icon: Target,
    color: 'from-red-500 to-pink-500'
  },
  {
    title: 'Continuous Learning',
    description: 'We stay ahead of the curve by constantly learning and adapting to new technologies and methodologies.',
    icon: Rocket,
    color: 'from-indigo-500 to-purple-500'
  }
];

const services: Service[] = [
  {
    title: 'AI & Machine Learning',
    description: 'Cutting-edge artificial intelligence solutions that transform business operations',
    icon: Brain,
    color: 'from-purple-500 to-pink-600',
    features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Automated Decision Making']
  },
  {
    title: 'Cloud & DevOps',
    description: 'Scalable cloud infrastructure and streamlined development operations',
    icon: Cloud,
    color: 'from-blue-500 to-cyan-600',
    features: ['Cloud Migration', 'Container Orchestration', 'CI/CD Pipelines', 'Infrastructure as Code']
  },
  {
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets',
    icon: ShieldCheck,
    color: 'from-green-500 to-emerald-600',
    features: ['Threat Detection', 'Vulnerability Assessment', 'Compliance Management', 'Incident Response']
  },
  {
    title: 'IoT & Edge Computing',
    description: 'Connected devices and edge computing solutions for the modern world',
    icon: Network,
    color: 'from-orange-500 to-red-600',
    features: ['Smart Devices', 'Edge Analytics', 'Real-time Processing', 'Sensor Networks']
  }
];

const teamMembers: TeamMember[] = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief Technology Officer',
    expertise: ['AI/ML', 'Quantum Computing', 'Research & Development'],
    avatar: 'SC',
    linkedin: '#',
    github: '#'
  },
  {
    name: 'Michael Rodriguez',
    role: 'Head of Engineering',
    expertise: ['Cloud Architecture', 'DevOps', 'System Design'],
    avatar: 'MR',
    linkedin: '#',
    github: '#'
  },
  {
    name: 'Dr. James Thompson',
    role: 'Chief Security Officer',
    expertise: ['Cybersecurity', 'Compliance', 'Risk Management'],
    avatar: 'JT',
    linkedin: '#',
    github: '#'
  },
  {
    name: 'Emily Watson',
    role: 'Head of AI Solutions',
    expertise: ['Machine Learning', 'Data Science', 'AI Strategy'],
    avatar: 'EW',
    linkedin: '#',
    github: '#'
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-24">
      <div className="container-responsive">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-zion-slate-light text-lg max-w-4xl mx-auto leading-relaxed">
            We are a forward-thinking technology company dedicated to transforming businesses through 
            innovative AI solutions, cutting-edge cybersecurity, and scalable cloud infrastructure. 
            Our mission is to empower organizations to thrive in the digital age.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-3xl p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-zion-slate-light leading-relaxed">
                To democratize advanced technology and make cutting-edge AI, cybersecurity, and cloud solutions 
                accessible to businesses of all sizes. We believe that every organization deserves the tools 
                to compete and thrive in the digital economy.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-3xl p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-2xl flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-zion-slate-light leading-relaxed">
                To be the leading force in technological innovation, creating a future where businesses 
                seamlessly integrate AI, security, and cloud technologies to achieve unprecedented growth 
                and operational excellence.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <achievement.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{achievement.value}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{achievement.title}</h3>
                <p className="text-zion-slate-light text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-4`}>
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">{value.title}</h3>
                <p className="text-zion-slate-light leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Overview */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">What We Do</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-xl mb-2">{service.title}</h3>
                    <p className="text-zion-slate-light">{service.description}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-zion-cyan" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Meet Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  {member.avatar}
                </div>
                <h3 className="text-white font-semibold text-lg mb-1">{member.name}</h3>
                <p className="text-zion-cyan font-medium mb-3">{member.role}</p>
                <div className="space-y-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-block px-2 py-1 bg-white/10 rounded-lg text-zion-slate-light text-xs mr-2 mb-2"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-3 mt-4">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 text-zion-cyan" />
                    </a>
                  )}
                  {member.github && (
                    <a
                      href={member.github}
                      className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                    >
                      <Code className="h-4 w-4 text-zion-cyan" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company Stats */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <div className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Company Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-zion-cyan mb-2">2020</div>
                <p className="text-zion-slate-light">Founded</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-zion-cyan mb-2">15+</div>
                <p className="text-zion-slate-light">Countries Served</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-zion-cyan mb-2">99.9%</div>
                <p className="text-zion-slate-light">Uptime SLA</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-zion-cyan mb-2">24/7</div>
                <p className="text-zion-slate-light">Support Available</p>
              </div>
            </div>
>>>>>>> cursor/expand-services-and-deploy-updates-fd31
          </div>
        </motion.div>

<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help transform your business with innovative technology solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/services"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
=======
        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-3xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Work Together?</h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how Zion Tech Group can help transform your business with cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/services"
                className="inline-flex items-center border border-zion-cyan text-zion-cyan px-8 py-4 rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Explore Services
              </a>
            </div>
          </div>
        </motion.div>
      </div>
>>>>>>> cursor/expand-services-and-deploy-updates-fd31
    </div>
  );
}
