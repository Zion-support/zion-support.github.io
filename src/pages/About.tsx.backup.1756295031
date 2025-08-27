import React from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Lightbulb, 
  Rocket, 
  Globe, 
  Users,
  TrendingUp,
  Shield,
  Award,
  Target,
  Brain,
  Cloud,
  Zap,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Lightbulb className="w-8 h-8 text-zion-cyan" />,
      title: "Innovation First",
      description: "We push the boundaries of what's possible with cutting-edge technology"
    },
    {
      icon: <Shield className="w-8 h-8 text-zion-purple" />,
      title: "Trust & Security",
      description: "Your data and systems are protected with enterprise-grade security"
    },
    {
      icon: <Users className="w-8 h-8 text-zion-green" />,
      title: "Client Success",
      description: "Your success is our success - we're committed to your growth"
    },
    {
      icon: <Rocket className="w-8 h-8 text-zion-cyan-light" />,
      title: "Future-Ready",
      description: "We build solutions that scale and adapt to tomorrow's challenges"
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief AI Officer",
      expertise: "Machine Learning, Neural Networks",
      avatar: "/avatars/sarah.jpg"
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Cybersecurity",
      expertise: "Threat Intelligence, Zero Trust",
      avatar: "/avatars/marcus.jpg"
    },
    {
      name: "Dr. James Kim",
      role: "Quantum Computing Lead",
      expertise: "Quantum Algorithms, Qubit Systems",
      avatar: "/avatars/james.jpg"
    },
    {
      name: "Lisa Thompson",
      role: "Cloud Architecture Director",
      expertise: "Multi-Cloud, DevOps, Scalability",
      avatar: "/avatars/lisa.jpg"
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Zion Tech Group established with a vision for AI-driven innovation"
    },
    {
      year: "2021",
      title: "First AI Platform",
      description: "Launched our flagship AI-powered business intelligence platform"
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Expanded operations to 15 countries with 100+ enterprise clients"
    },
    {
      year: "2023",
      title: "Quantum Breakthrough",
      description: "Developed breakthrough quantum computing algorithms for optimization"
    },
    {
      year: "2024",
      title: "Industry Recognition",
      description: "Named Top 10 AI Companies by TechCrunch and Forbes"
    },
    {
      year: "2025",
      title: "Future Vision",
      description: "Leading the charge toward AGI and quantum supremacy"
    }
  ];

=======
export default function About() {
>>>>>>> c8f6a8c40c14e0279db0f3d243d3cf3fa516056e
  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
<<<<<<< HEAD
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="futuristic-heading mb-6">
              About <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Zion Tech Group</span>
            </h1>
            <p className="futuristic-text text-xl mb-8 max-w-3xl mx-auto">
              We are pioneers in artificial intelligence, quantum computing, and next-generation technology solutions. 
              Our mission is to transform businesses through intelligent automation and strategic innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="futuristic-button inline-flex items-center"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/careers"
                className="futuristic-button-outline inline-flex items-center"
              >
                Join Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="futuristic-heading text-3xl lg:text-4xl mb-6">
                Our Mission
              </h2>
              <p className="futuristic-text text-lg mb-6">
                To democratize access to cutting-edge technology and empower businesses of all sizes to achieve 
                digital transformation through intelligent automation and strategic innovation.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-zion-green mt-1" />
                  <span className="text-zion-slate-light">AI-powered business solutions</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-zion-green mt-1" />
                  <span className="text-zion-slate-light">Enterprise-grade security</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-zion-green mt-1" />
                  <span className="text-zion-slate-light">Global scalability</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="futuristic-card p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-zion-slate-light mb-6">
                To be the global leader in AI-driven business transformation, creating a future where technology 
                enhances human potential and drives sustainable growth across all industries.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-zion-cyan mb-1">500+</div>
                  <div className="text-sm text-zion-slate-light">Global Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-zion-purple mb-1">50+</div>
                  <div className="text-sm text-zion-slate-light">Countries</div>
                </div>
              </div>
            </motion.div>
=======
      <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue to-zion-slate-dark">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            About <span className="text-zion-cyan">Zion Tech Group</span>
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            We are a forward-thinking technology company dedicated to transforming businesses 
            through innovative AI solutions and cutting-edge technology services.
          </p>
        </div>
      </section>
      {/* Mission Section */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Our Mission</h2>
            <p className="text-lg text-zion-slate-light leading-relaxed">
              To empower businesses with cutting-edge technology solutions that drive innovation, 
              efficiency, and growth in the digital age.
            </p>
>>>>>>> c8f6a8c40c14e0279db0f3d243d3cf3fa516056e
          </div>
        </div>
      </section>
      {/* Values Section */}
<<<<<<< HEAD
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark/20 to-zion-purple/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="futuristic-heading text-3xl lg:text-4xl mb-4">
              Our Core Values
            </h2>
            <p className="futuristic-text text-lg max-w-2xl mx-auto">
              The principles that guide everything we do and every solution we create.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="futuristic-card text-center group hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-zion-slate-light">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="futuristic-heading text-3xl lg:text-4xl mb-4">
              Meet Our Leadership
            </h2>
            <p className="futuristic-text text-lg max-w-2xl mx-auto">
              World-class experts leading the charge in AI, cybersecurity, and quantum computing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="futuristic-card text-center group hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-zion-cyan text-sm font-medium mb-2">{member.role}</p>
                <p className="text-zion-slate-light text-sm">{member.expertise}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark/20 to-zion-purple/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="futuristic-heading text-3xl lg:text-4xl mb-4">
              Our Journey
            </h2>
            <p className="futuristic-text text-lg max-w-2xl mx-auto">
              From startup to global technology leader - our milestones tell the story of innovation and growth.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-zion-cyan/30 h-full"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="futuristic-card p-6">
                      <div className="text-2xl font-bold text-zion-cyan mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                      <p className="text-zion-slate-light">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-zion-cyan rounded-full border-4 border-zion-slate-dark"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-zion-slate-lighter mb-8 max-w-2xl mx-auto">
              Join hundreds of companies already transforming their business with Zion Tech Group's innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="futuristic-button inline-flex items-center"
              >
                Start Your Transformation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="futuristic-button-outline inline-flex items-center"
              >
                Explore Our Services
              </Link>
=======
      <section className="py-16 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-4">Innovation</h3>
              <p className="text-zion-slate-light">
                Constantly pushing the boundaries of what's possible with technology.
              </p>
>>>>>>> c8f6a8c40c14e0279db0f3d243d3cf3fa516056e
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-4">Excellence</h3>
              <p className="text-zion-slate-light">
                Delivering the highest quality solutions and services to our clients.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-4">Integrity</h3>
              <p className="text-zion-slate-light">
                Building trust through honest, transparent, and ethical business practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
};

export default About;
=======
}
>>>>>>> c8f6a8c40c14e0279db0f3d243d3cf3fa516056e
