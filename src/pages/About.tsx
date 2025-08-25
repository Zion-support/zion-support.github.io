import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Lightbulb, 
  Rocket,
  Shield,
  Zap,
  Heart,
  Star
} from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pushing boundaries and exploring new frontiers in technology"
    },
    {
      icon: Heart,
      title: "Excellence",
      description: "Delivering exceptional quality in everything we do"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working together to achieve extraordinary results"
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Maintaining the highest ethical standards in all our relationships"
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Zion Tech Group established with a vision for technological innovation"
    },
    {
      year: "2021",
      title: "First AI Platform",
      description: "Launched our flagship AI-powered business solutions platform"
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Expanded operations to serve clients worldwide"
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Awarded multiple industry awards for innovation and excellence"
    },
    {
      year: "2024",
      title: "Future Technologies",
      description: "Pioneering quantum computing and advanced AI solutions"
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Executive Officer",
      description: "Former AI researcher with 15+ years in technology leadership"
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Technology Officer",
      description: "Expert in emerging technologies and system architecture"
    },
    {
      name: "Dr. James Kim",
      role: "Chief Innovation Officer",
      description: "Leading research in quantum computing and AI"
    },
    {
      name: "Lisa Thompson",
      role: "Chief Operations Officer",
      description: "Specialist in scaling technology operations globally"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and commitment to technological innovation and excellence." />
        <meta name="keywords" content="about Zion Tech Group, company mission, technology innovation, AI company, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            About
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Zion Tech Group
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Pioneering the future of technology through innovation, excellence, and unwavering commitment to our clients' success.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                To accelerate human progress through cutting-edge technology solutions that solve the world's most complex challenges.
              </p>
              <p className="text-lg text-gray-400">
                We believe that technology should serve humanity, making the impossible possible and creating opportunities for growth, innovation, and positive change across all industries and communities.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto border border-purple-500/30">
                <Target className="w-32 h-32 text-purple-400" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Key milestones in our growth and development
            </p>
          </motion.div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}
              >
                <div className="lg:w-1/3 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{milestone.year}</span>
                  </div>
                </div>
                <div className="lg:w-2/3 text-center lg:text-left">
                  <h3 className="text-2xl font-semibold text-white mb-3">{milestone.title}</h3>
                  <p className="text-gray-300 text-lg">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Meet the visionaries driving our company forward
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-purple-400 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-300">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              By The Numbers
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our impact in numbers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Users, number: "500+", label: "Clients Worldwide" },
              { icon: Globe, number: "25+", label: "Countries Served" },
              { icon: Award, number: "50+", label: "Industry Awards" },
              { icon: Rocket, number: "100+", label: "Innovation Projects" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Join Us in Shaping the Future
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Be part of a team that's revolutionizing technology and making a difference in the world
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                Join Our Team
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Partner With Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
