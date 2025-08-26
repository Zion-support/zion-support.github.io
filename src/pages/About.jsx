import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Globe, 
  Award, 
  Shield, 
  Lightbulb,
  Rocket,
  Brain,
  Cpu,
  Zap,
  CheckCircle,
  Star
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We push the boundaries of what's possible, constantly exploring new technologies and approaches to solve complex challenges."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to customer service and project delivery."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and partnerships to achieve extraordinary results that benefit everyone involved."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We operate with honesty, transparency, and ethical practices in all our business relationships and operations."
    }
  ];

  const milestones = [
    {
      year: "2025",
      title: "Global Expansion",
      description: "Expanded operations to serve clients across North America, Europe, and Asia-Pacific regions."
    },
    {
      year: "2024",
      title: "AI Breakthrough",
      description: "Launched revolutionary AI autonomous business platform, transforming how companies operate."
    },
    {
      year: "2023",
      title: "Quantum Innovation",
      description: "Developed cutting-edge quantum computing solutions for enterprise applications."
    },
    {
      year: "2022",
      title: "Company Founded",
      description: "Zion Tech Group was established with a vision to revolutionize technology solutions."
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: Target },
    { number: "50+", label: "Team Members", icon: Users },
    { number: "25+", label: "Countries Served", icon: Globe },
    { number: "99%", label: "Client Satisfaction", icon: Award }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="px-4 mb-20">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/10 text-zion-cyan rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2"/>
              About Us
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Pioneering the Future of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-blue"> Technology</span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Zion Tech Group is a leading technology company dedicated to transforming businesses through 
              innovative AI solutions, quantum computing, and cutting-edge digital technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-slate-light/20 rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white"/>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-lg text-zion-slate-light">
                To democratize advanced technology and make AI, quantum computing, and innovative solutions 
                accessible to businesses of all sizes, enabling them to thrive in the digital age.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-slate-light/20 rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-white"/>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-lg text-zion-slate-light">
                To be the global leader in transformative technology solutions, creating a future where 
                every business can harness the full potential of AI and quantum computing.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we make
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-slate-light/20 rounded-2xl p-6 text-center hover:border-zion-cyan/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-zion-slate-light">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Journey</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Key milestones that have shaped our company and our impact on the technology landscape
            </p>
          </motion.div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-zion-cyan to-zion-blue"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-slate-light/20 rounded-2xl p-6">
                      <div className="text-2xl font-bold text-zion-cyan mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
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

      {/* Stats Section */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-zion-cyan/10 to-zion-blue/10 border border-zion-cyan/20 rounded-3xl p-12"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Zion Tech Group by the Numbers
              </h2>
              <p className="text-xl text-zion-slate-light">
                Our impact and reach in the technology industry
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-zion-cyan mb-2">{stat.number}</div>
                  <p className="text-zion-slate-light">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Us in Shaping the Future
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Whether you're looking to transform your business with AI, explore quantum computing, 
              or partner with us on innovative projects, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-8 py-3 rounded-xl font-semibold hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-300 text-lg transform hover:scale-105"
              >
                Get in Touch
              </Link>
              <Link 
                to="/careers" 
                className="border border-zion-cyan/30 text-zion-cyan px-8 py-3 rounded-xl font-semibold hover:border-zion-cyan hover:bg-zion-cyan/10 transition-all duration-300 text-lg"
              >
                Join Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
