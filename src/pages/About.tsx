
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
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
    value: '15+',
    description: 'Decades of industry expertise',
    icon: Clock,
    color: 'from-purple-500 to-indigo-600'
  }
];

const values: Value[] = [
  {
    title: 'Innovation First',
    description: 'We push boundaries and embrace cutting-edge technologies to solve complex challenges.',
    icon: Lightbulb,
    color: 'from-yellow-400 to-orange-500'
  },
  {
    title: 'Excellence',
    description: 'We maintain the highest standards in every project, ensuring quality and reliability.',
    icon: Award,
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
    icon: Users,
    color: 'from-purple-500 to-pink-500'
  }
];

const services: Service[] = [
  {
    title: 'AI & Machine Learning',
    description: 'Cutting-edge artificial intelligence solutions that transform businesses.',
    icon: Brain,
    color: 'from-purple-500 to-indigo-600',
    features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Automated Decision Making']
  },
  {
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets.',
    icon: Shield,
    color: 'from-red-500 to-pink-600',
    features: ['Threat Detection', 'Incident Response', 'Compliance Management', 'Security Audits']
  },
  {
    title: 'Cloud & DevOps',
    description: 'Scalable cloud infrastructure and streamlined development operations.',
    icon: Cloud,
    color: 'from-blue-500 to-cyan-600',
    features: ['Cloud Migration', 'Container Orchestration', 'CI/CD Pipelines', 'Infrastructure as Code']
  },
  {
    title: 'Quantum Computing',
    description: 'Next-generation computing solutions for complex problem-solving.',
    icon: Cpu,
    color: 'from-indigo-500 to-purple-600',
    features: ['Quantum Algorithms', 'Optimization Problems', 'Cryptography', 'Research & Development']
  }
];

const teamMembers: TeamMember[] = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief Technology Officer',
    expertise: ['AI/ML', 'Quantum Computing', 'Research & Development'],
    avatar: '/avatars/sarah-chen.jpg',
    linkedin: 'https://linkedin.com/in/sarah-chen',
    github: 'https://github.com/sarah-chen'
  },
  {
    name: 'Michael Rodriguez',
    role: 'Head of Cybersecurity',
    expertise: ['Network Security', 'Threat Intelligence', 'Incident Response'],
    avatar: '/avatars/michael-rodriguez.jpg',
    linkedin: 'https://linkedin.com/in/michael-rodriguez'
  },
  {
    name: 'Dr. James Kim',
    role: 'Lead Quantum Researcher',
    expertise: ['Quantum Algorithms', 'Quantum Cryptography', 'Quantum Machine Learning'],
    avatar: '/avatars/james-kim.jpg',
    linkedin: 'https://linkedin.com/in/james-kim',
    github: 'https://github.com/james-kim'
  },
  {
    name: 'Lisa Thompson',
    role: 'VP of Engineering',
    expertise: ['Software Architecture', 'DevOps', 'Cloud Infrastructure'],
    avatar: '/avatars/lisa-thompson.jpg',
    linkedin: 'https://linkedin.com/in/lisa-thompson'
  }
];

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
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-zion-purple/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-zion-blue-light rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent animate-gradient-x"
              variants={itemVariants}
            >
              About Zion Tech Group
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed"
              variants={itemVariants}
            >
              Pioneering the future with cutting-edge technology solutions that transform businesses and drive innovation across industries.
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              variants={itemVariants}
            >
              <button className="btn-primary group">
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="btn-secondary group">
                Meet Our Team
                <Users className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid lg:grid-cols-2 gap-16 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-lg text-zion-slate-light mb-6 leading-relaxed">
                To democratize access to cutting-edge technology solutions, empowering businesses of all sizes to innovate, compete, and thrive in the digital age.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-zion-cyan mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Innovation Leadership</h4>
                    <p className="text-zion-slate-light">Leading the charge in emerging technologies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-zion-cyan mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Client Success</h4>
                    <p className="text-zion-slate-light">Ensuring measurable business outcomes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-zion-cyan mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Global Impact</h4>
                    <p className="text-zion-slate-light">Creating positive change worldwide</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-zion-purple to-zion-blue bg-clip-text text-transparent">
                Our Vision
              </h2>
              <p className="text-lg text-zion-slate-light mb-6 leading-relaxed">
                To be the world's most trusted partner for technology innovation, creating a future where advanced technology is accessible, ethical, and beneficial for all.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Target className="h-6 w-6 text-zion-purple mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Technology Democratization</h4>
                    <p className="text-zion-slate-light">Making advanced tech accessible to all</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Globe className="h-6 w-6 text-zion-purple mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Sustainable Innovation</h4>
                    <p className="text-zion-slate-light">Building a better future for generations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="h-6 w-6 text-zion-purple mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Excellence Standard</h4>
                    <p className="text-zion-slate-light">Setting industry benchmarks</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Our Achievements
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Numbers that tell the story of our success and impact in the technology industry.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                className="text-center p-6 rounded-2xl bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 group hover:scale-105"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{achievement.value}</h3>
                <h4 className="text-lg font-semibold text-zion-cyan mb-2">{achievement.title}</h4>
                <p className="text-zion-slate-light">{achievement.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-zion-purple to-zion-blue bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              The principles that guide our decisions, shape our culture, and drive our success.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="p-6 rounded-2xl bg-zion-slate-dark/30 backdrop-blur-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 group hover:scale-105"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className={`w-16 h-16 mb-4 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-zion-slate-light leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-zion-blue to-zion-cyan bg-clip-text text-transparent">
              What We Do
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive technology solutions that address the most complex challenges facing modern businesses.
            </p>
          </motion.div>

          <motion.div 
            className="grid lg:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="p-8 rounded-2xl bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 group hover:scale-105"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className={`w-20 h-20 mb-6 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{service.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-zion-cyan flex-shrink-0" />
                      <span className="text-sm text-zion-slate-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              World-class experts and innovators who are passionate about technology and committed to your success.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="text-center p-6 rounded-2xl bg-zion-slate-dark/30 backdrop-blur-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 group hover:scale-105"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-zion-cyan to-zion-purple p-1">
                  <div className="w-full h-full rounded-full bg-zion-slate-dark overflow-hidden">
                    <img 
                      src={member.avatar} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-zion-cyan font-semibold mb-3">{member.role}</p>
                <div className="space-y-2 mb-4">
                  {member.expertise.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="inline-block px-3 py-1 text-xs bg-zion-cyan/10 text-zion-cyan rounded-full mr-2 mb-2"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center space-x-3">
                  {member.linkedin && (
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-300"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                  {member.github && (
                    <a 
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-300"
                    >
                      <Code className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Join the ranks of innovative companies that trust Zion Tech Group to deliver cutting-edge solutions and drive their digital transformation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-primary group">
                Start Your Project
                <Rocket className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="btn-secondary group">
                Schedule a Consultation
                <MessageCircle className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
