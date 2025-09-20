import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const About: React.FC = () => {
  const [activeSection, setActiveSection] = useState("mission");
  const [stats, setStats] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    countries: 0
  });

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Animate stats on mount
  useEffect(() => {
    const animateStats = () => {
      const targetStats = { projects: 1000, clients: 500, years: 8, countries: 25 };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setStats({
          projects: Math.floor(targetStats.projects * progress),
          clients: Math.floor(targetStats.clients * progress),
          years: Math.floor(targetStats.years * progress),
          countries: Math.floor(targetStats.countries * progress)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setStats(targetStats);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    };

    const timer = setTimeout(animateStats, 500);
    return () => clearTimeout(timer);
  }, []);

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const sections = {
    mission: {
      title: "Our Mission",
      content: "To empower businesses with cutting-edge technology solutions that drive innovation, efficiency, and sustainable growth. We believe in the transformative power of technology to solve complex challenges and create opportunities for organizations worldwide.",
      icon: "🎯"
    },
    vision: {
      title: "Our Vision",
      content: "To be the global leader in transformative technology solutions, pioneering the future of AI, quantum computing, and space technology. We envision a world where technology seamlessly integrates with human potential to create unprecedented possibilities.",
      icon: "🚀"
    },
    values: {
      title: "Our Values",
      content: "Innovation, integrity, and excellence drive everything we do. We are committed to delivering solutions that not only meet but exceed expectations, while maintaining the highest standards of ethical practice and environmental responsibility.",
      icon: "⭐"
    }
  };

  const team = [
    { name: "Dr. Sarah Chen", role: "Chief Technology Officer", expertise: "AI & Machine Learning", avatar: "👩‍💼" },
    { name: "Marcus Rodriguez", role: "Head of Quantum Computing", expertise: "Quantum Algorithms", avatar: "👨‍🔬" },
    { name: "Dr. Aisha Patel", role: "Space Technology Director", expertise: "Aerospace Engineering", avatar: "👩‍🚀" },
    { name: "David Kim", role: "Cybersecurity Lead", expertise: "Quantum Security", avatar: "👨‍💻" }
  ];

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Animated background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10"
        style={{ y }}
      />

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Zion
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We are pioneers in the next generation of technology, pushing the boundaries of what's possible 
            with artificial intelligence, quantum computing, and space technology.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Projects Completed", value: stats.projects, suffix: "+" },
              { label: "Happy Clients", value: stats.clients, suffix: "+" },
              { label: "Years of Excellence", value: stats.years, suffix: "" },
              { label: "Countries Served", value: stats.countries, suffix: "+" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-gray-400 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission, Vision, Values */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {Object.entries(sections).map(([key, section]) => (
              <motion.div
                key={key}
                className={`p-8 rounded-xl border transition-all duration-300 cursor-pointer ${
                  activeSection === key
                    ? 'bg-purple-600/20 border-purple-400 shadow-lg shadow-purple-500/25'
                    : 'bg-gray-800/50 border-purple-500/30 hover:bg-gray-700/50'
                }`}
                onClick={() => setActiveSection(key)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="text-4xl mb-4">{section.icon}</div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {section.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in cutting-edge technology fields.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="text-center group"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {member.avatar}
                </div>
                <h4 className="text-xl font-bold mb-2 text-white">
                  {member.name}
                </h4>
                <p className="text-purple-400 font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-gray-400 text-sm">
                  {member.expertise}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technology Stack
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Artificial Intelligence", icon: "🤖", description: "Machine Learning, NLP, Computer Vision" },
              { name: "Quantum Computing", icon: "⚛️", description: "Quantum Algorithms, Cryptography" },
              { name: "Space Technology", icon: "🚀", description: "Satellite Systems, Orbital Mechanics" },
              { name: "Blockchain", icon: "🔗", description: "Smart Contracts, DeFi Solutions" },
              { name: "Cybersecurity", icon: "🛡️", description: "Quantum Security, Threat Detection" },
              { name: "Cloud Computing", icon: "☁️", description: "Scalable Infrastructure, DevOps" },
              { name: "IoT & Edge", icon: "🌐", description: "Connected Devices, Edge Analytics" },
              { name: "Data Science", icon: "📊", description: "Analytics, Predictive Modeling" }
            ].map((tech, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 text-center group hover:bg-gray-700/50 transition-all duration-300"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                style={{ perspective: "1000px" }}
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h4 className="text-lg font-bold mb-2 text-white">
                  {tech.name}
                </h4>
                <p className="text-gray-400 text-sm">
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div variants={itemVariants} className="text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies that have already revolutionized their operations with our cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
              </motion.button>
              <motion.button
                className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Case Studies
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
