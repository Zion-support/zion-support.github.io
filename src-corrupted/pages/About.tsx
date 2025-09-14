import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Award, 
  TrendingUp, 
  Globe, 
  Clock, 
  CheckCircle,
  Star,
  Zap,
  Brain,
  Cloud,
  Shield,
  Database,
  Code,
  Rocket,
  Lightbulb,
  Heart,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  FileText,
  MessageSquare,
  Settings,
  Palette,
  ArrowRight,
  ExternalLink,
  Calendar,
  MapPin,
  Building,
  Phone,
  Mail,
  MapPin as MapPinIcon,
  Eye,
  Smartphone
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function About() {
  const mission = {
    title: "Our Mission",
    description: "To democratize cutting-edge technology and make AI, cloud, and cybersecurity solutions accessible to businesses of all sizes.",
    details: "We believe that every organization, regardless of size or industry, deserves access to enterprise-grade technology solutions that can transform their operations and drive growth."
  };

  const vision = {
    title: "Our Vision",
    description: "To be the leading force in democratizing advanced technology, creating a world where innovation is accessible to all.",
    details: "We envision a future where technology barriers are eliminated, and every business can leverage the power of AI, cloud computing, and cybersecurity to achieve their full potential."
  };

  const values = [
    {
      icon: Heart,
      title: "Passion for Innovation",
      description: "We're driven by curiosity and a relentless pursuit of technological advancement.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Leaf,
      title: "Sustainable Growth",
      description: "We believe in building solutions that grow with your business and adapt to change.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Your data and business operations are protected with enterprise-grade security.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Customer Success",
      description: "Your success is our success. We're committed to your growth and satisfaction.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Rocket,
      title: "Excellence",
      description: "We strive for excellence in every solution, service, and interaction.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Brain,
      title: "Continuous Learning",
      description: "We stay ahead of technology trends to provide cutting-edge solutions.",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const achievements = [
    {
      number: "500+",
      label: "Projects Delivered",
      description: "Successfully completed projects across various industries and technologies"
    },
    {
      number: "50+",
      label: "Enterprise Clients",
      description: "Trusted by businesses ranging from startups to Fortune 500 companies"
    },
    {
      number: "99.9%",
      label: "Uptime Guarantee",
      description: "Reliable infrastructure and services with proven track record"
    },
    {
      number: "24/7",
      label: "Support Available",
      description: "Round-the-clock technical support and monitoring services"
    }
  ];

  const team = [
    {
      name: "Kleber Garcia Alcatrao",
      role: "Founder & CEO",
      expertise: "AI Strategy, Cloud Architecture, Business Development",
      experience: "15+ years in technology leadership and innovation",
      avatar: "/images/team/kleber.jpg"
    },
    {
      name: "AI Development Team",
      role: "Machine Learning Engineers",
      expertise: "Deep Learning, NLP, Computer Vision, Predictive Analytics",
      experience: "Collectively 50+ years in AI research and development",
      avatar: "/images/team/ai-team.jpg"
    },
    {
      name: "Cloud & DevOps Team",
      role: "Infrastructure Specialists",
      expertise: "AWS, Azure, Kubernetes, CI/CD, Microservices",
      experience: "Collectively 40+ years in cloud infrastructure",
      avatar: "/images/team/cloud-team.jpg"
    },
    {
      name: "Cybersecurity Team",
      role: "Security Experts",
      expertise: "Penetration Testing, Compliance, Threat Intelligence, Incident Response",
      experience: "Collectively 35+ years in cybersecurity",
      avatar: "/images/team/security-team.jpg"
    }
  ];

  const timeline = [
    {
      year: "2025",
      title: "AI-First Transformation",
      description: "Launched comprehensive AI services portfolio and expanded into emerging technologies",
      achievements: ["AI-powered business intelligence platform", "Quantum computing partnerships", "Advanced cybersecurity solutions"]
    },
    {
      year: "2024",
      title: "Cloud & Security Expansion",
      description: "Expanded cloud services and launched enterprise cybersecurity division",
      achievements: ["Multi-cloud migration services", "SOC 2 compliance solutions", "Zero-trust architecture implementation"]
    },
    {
      year: "2023",
      title: "Technology Innovation Hub",
      description: "Established research and development center for emerging technologies",
      achievements: ["IoT platform development", "Blockchain solutions", "Edge computing infrastructure"]
    },
    {
      year: "2022",
      title: "Digital Transformation Focus",
      description: "Launched comprehensive digital transformation consulting services",
      achievements: ["Process automation solutions", "Data analytics platforms", "Customer experience optimization"]
    },
    {
      year: "2021",
      title: "Company Foundation",
      description: "Founded Zion Tech Group with focus on technology consulting and development",
      achievements: ["Initial client portfolio", "Core team formation", "Service portfolio development"]
    }
  ];

  const technologies = [
    { name: "Artificial Intelligence", icon: Brain, category: "AI/ML" },
    { name: "Cloud Computing", icon: Cloud, category: "Infrastructure" },
    { name: "Cybersecurity", icon: Shield, category: "Security" },
    { name: "Data Analytics", icon: Database, category: "Analytics" },
    { name: "Web Development", icon: Code, category: "Development" },
    { name: "Mobile Apps", icon: Gamepad2, category: "Development" },
    { name: "DevOps", icon: Settings, category: "Operations" },
    { name: "Blockchain", icon: Coins, category: "Emerging Tech" },
    { name: "IoT", icon: Satellite, category: "Emerging Tech" },
    { name: "Quantum Computing", icon: Zap, category: "Future Tech" }
  ];

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008, Middletown DE 19709",
    website: "https://ziontechgroup.com"
  };

  return (
    <>
      <SEO 
        title="About Us - Zion Tech Group | AI, Cloud & Cybersecurity Innovation"
        description="Learn about Zion Tech Group's mission to democratize technology, our expert team, achievements, and commitment to driving digital transformation through AI, cloud, and cybersecurity solutions."
        canonical="/about"
        url="https://ziontechgroup.com/about"
      />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20" />
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10" />
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 text-sm font-medium px-4 py-2 rounded-full border border-blue-400/30 mb-6">
                <Building className="w-4 h-4" />
                About Zion Tech Group
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Pioneering
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {' '}Technology
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                We're a team of passionate technologists, innovators, and problem-solvers dedicated to 
                making advanced technology accessible to businesses of all sizes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="container mx-auto px-6 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">{mission.title}</h2>
              <p className="text-lg text-gray-300 mb-4">{mission.description}</p>
              <p className="text-gray-400">{mission.details}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">{vision.title}</h2>
              <p className="text-lg text-gray-300 mb-4">{vision.description}</p>
              <p className="text-gray-400">{vision.details}</p>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="container mx-auto px-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These principles guide everything we do, from how we develop solutions to how we serve our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="container mx-auto px-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Achievements</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Numbers that tell the story of our growth, impact, and commitment to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 text-center hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">{achievement.number}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{achievement.label}</h3>
                <p className="text-gray-300 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="container mx-auto px-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experienced professionals passionate about technology and committed to your success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-blue-400 font-semibold mb-3">{member.role}</p>
                    <p className="text-gray-300 mb-3">{member.expertise}</p>
                    <p className="text-gray-400 text-sm">{member.experience}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="container mx-auto px-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Journey</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From startup to technology leader - the milestones that shaped our company.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-start gap-8 mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{milestone.year}</span>
                  </div>
                </div>
                <div className={`flex-1 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  <h3 className="text-2xl font-bold text-white mb-3">{milestone.title}</h3>
                  <p className="text-gray-300 mb-4">{milestone.description}</p>
                  <ul className="space-y-2">
                    {milestone.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-400">
                        <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Technologies */}
        <section className="container mx-auto px-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Technologies We Master</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technologies and frameworks that power our innovative solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center hover:border-blue-400/50 transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <tech.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{tech.name}</h3>
                <span className="text-xs text-blue-400 bg-blue-400/20 px-2 py-1 rounded-full">
                  {tech.category}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 border border-blue-500/20 rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Let's discuss how our team can help transform your business with cutting-edge technology solutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <MapPinIcon className="w-5 h-5 text-blue-400" />
                <span className="text-center">{contactInfo.address}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-3 px-8 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 group">
                <span>Schedule a Call</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center gap-2 bg-slate-700/50 text-white font-medium py-3 px-8 rounded-xl border border-slate-600/50 hover:bg-slate-700/70 transition-all duration-300">
                <span>View Our Work</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
