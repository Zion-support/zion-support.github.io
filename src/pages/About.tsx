import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Lightbulb, 
  Shield,
  TrendingUp,
  Heart
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible in technology'
    },
    {
      icon: Shield,
      title: 'Trust',
      description: 'Building lasting relationships through transparency and reliability'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working together with clients to achieve exceptional results'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Delivering the highest quality solutions in everything we do'
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Zion Tech Group was established with a vision to revolutionize the tech industry'
    },
    {
      year: '2021',
      title: 'First AI Solution',
      description: 'Launched our first AI-powered business solution'
    },
    {
      year: '2022',
      title: 'Enterprise Expansion',
      description: 'Grew to serve 50+ enterprise clients worldwide'
    },
    {
      year: '2023',
      title: 'Global Recognition',
      description: 'Named one of the top 100 tech companies by TechReview'
    },
    {
      year: '2024',
      title: 'Market Leadership',
      description: 'Became the leading AI marketplace in North America'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="px-4 mb-20">
        <div className="container mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent"
          >
            About Zion Tech Group
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed"
          >
            We are a forward-thinking technology company dedicated to transforming businesses through innovative AI solutions, 
            cutting-edge cloud services, and comprehensive digital transformation strategies.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mr-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-lg text-zion-slate-light leading-relaxed mb-6">
                To democratize access to cutting-edge technology solutions, enabling businesses of all sizes to thrive 
                in the digital age through innovative AI, cloud, and cybersecurity services.
              </p>
              <p className="text-lg text-zion-slate-light leading-relaxed">
                We believe that every organization deserves access to enterprise-grade technology that can drive growth, 
                improve efficiency, and create competitive advantages in today's rapidly evolving marketplace.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-pink rounded-2xl flex items-center justify-center mr-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-lg text-zion-slate-light leading-relaxed mb-6">
                To become the world's leading technology marketplace, connecting innovative solutions with businesses 
                that need them, while fostering a community of technology pioneers and digital transformation experts.
              </p>
              <p className="text-lg text-zion-slate-light leading-relaxed">
                We envision a future where technology barriers are eliminated, and every business can leverage 
                the power of AI, cloud computing, and advanced cybersecurity to achieve unprecedented success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-4 mb-20 bg-zion-slate-dark py-20">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we make
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-10 h-10 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-zion-cyan transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-zion-slate-light leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="group"
            >
              <div className="text-4xl md:text-5xl font-bold text-zion-cyan mb-2 group-hover:scale-110 transition-transform duration-300">
                500+
              </div>
              <div className="text-zion-slate-light">Projects Completed</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="group"
            >
              <div className="text-4xl md:text-5xl font-bold text-zion-blue mb-2 group-hover:scale-110 transition-transform duration-300">
                50+
              </div>
              <div className="text-zion-slate-light">Enterprise Clients</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group"
            >
              <div className="text-4xl md:text-5xl font-bold text-zion-purple mb-2 group-hover:scale-110 transition-transform duration-300">
                99.9%
              </div>
              <div className="text-zion-slate-light">Client Satisfaction</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="group"
            >
              <div className="text-4xl md:text-5xl font-bold text-zion-pink mb-2 group-hover:scale-110 transition-transform duration-300">
                24/7
              </div>
              <div className="text-zion-slate-light">Support Available</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="px-4 mb-20 bg-zion-slate-dark py-20">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
              Our Journey
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              From startup to industry leader - the milestones that shaped our success
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className="flex-1 text-center">
                  <div className="inline-block bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-6 py-3 rounded-full font-bold text-lg">
                    {milestone.year}
                  </div>
                  <h3 className="text-2xl font-bold text-white mt-4 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-zion-slate-light leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
                
                <div className="mx-8">
                  <div className="w-4 h-4 bg-zion-cyan rounded-full"></div>
                </div>
                
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="px-4 mb-20">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
              Our Team Culture
            </h2>
            <p className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed mb-8">
              At Zion Tech Group, we foster a culture of innovation, collaboration, and continuous learning. 
              Our team consists of passionate technologists, creative problem-solvers, and industry experts 
              who are committed to delivering exceptional results for our clients.
            </p>
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 px-6 py-3 rounded-full border border-zion-cyan/30">
                <Heart className="w-5 h-5 text-zion-cyan" />
                <span className="text-zion-cyan font-medium">Passionate about Technology</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
