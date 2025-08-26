import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Target, Award, CheckCircle, Globe, TrendingUp, Lightbulb, MapPin, Clock } from 'lucide-react';

const Careers: React.FC = () => {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      department: 'Engineering',
      description: 'Lead development of cutting-edge AI solutions and machine learning models',
      requirements: ['5+ years AI/ML experience', 'Python, TensorFlow, PyTorch', 'PhD in Computer Science preferred']
    },
    {
      title: 'Quantum Computing Researcher',
      location: 'Remote',
      type: 'Full-time',
      department: 'Research',
      description: 'Research and develop quantum algorithms and quantum computing solutions',
      requirements: ['PhD in Physics/Computer Science', 'Quantum computing experience', 'Research publication record']
    },
    {
      title: 'DevOps Engineer',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      department: 'Engineering',
      description: 'Build and maintain cloud infrastructure and CI/CD pipelines',
      requirements: ['3+ years DevOps experience', 'AWS/Azure/GCP', 'Docker, Kubernetes, Terraform']
    },
    {
      title: 'Solutions Architect',
      location: 'Remote',
      type: 'Full-time',
      department: 'Sales',
      description: 'Design enterprise solutions and guide clients through implementation',
      requirements: ['7+ years enterprise experience', 'Strong technical background', 'Excellent communication skills']
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Career Growth',
      description: 'Continuous learning and advancement opportunities in cutting-edge technology'
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Work with brilliant minds in an inclusive and supportive environment'
    },
    {
      icon: Award,
      title: 'Competitive Benefits',
      description: 'Comprehensive health, dental, vision, and retirement benefits'
    },
    {
      icon: Globe,
      title: 'Remote Flexibility',
      description: 'Work from anywhere with flexible hours and work-life balance'
    },
    {
      icon: TrendingUp,
      title: 'Innovation Focus',
      description: 'Work on the latest AI, quantum computing, and emerging technologies'
    },
    {
      icon: Lightbulb,
      title: 'Creative Freedom',
      description: 'Autonomy to explore new ideas and push technological boundaries'
    }
  ];

  const values = [
    'Innovation First',
    'Excellence in Everything',
    'Collaboration & Teamwork',
    'Continuous Learning',
    'Customer Success',
    'Integrity & Trust'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-slate-dark to-zion-slate">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-blue/20 border border-zion-blue/30 text-zion-cyan mb-6">
              <Briefcase className="w-4 h-4 mr-2" />
              Join Our Team
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Build the Future of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
                {' '}Technology
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Join our team of innovators and help shape the future of AI, quantum computing, 
              and emerging technologies that will transform industries worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                View Open Positions
              </button>
              <button className="px-8 py-4 border border-zion-blue text-zion-cyan font-semibold rounded-lg hover:bg-zion-blue/20 transition-all duration-300">
                Learn About Culture
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              The principles that guide our work and shape our company culture
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/30 border border-zion-blue/20 rounded-lg p-4 text-center hover:border-zion-cyan/50 transition-all duration-300"
              >
                <span className="text-zion-slate-light text-sm font-medium">{value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Discover the benefits of being part of our innovative team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-blue/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Join our team and help us build the future of technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-blue/30 rounded-xl p-8 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-white">{position.title}</h3>
                  <span className="px-3 py-1 bg-zion-blue/20 border border-zion-blue/30 text-zion-cyan text-sm rounded-full">
                    {position.type}
                  </span>
                </div>
                
                <div className="flex items-center gap-4 mb-4 text-zion-slate-light">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{position.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="w-4 h-4 mr-2" />
                    <span>{position.department}</span>
                  </div>
                </div>
                
                <p className="text-zion-slate-light mb-6">{position.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        <span className="text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Don't See the Right Fit?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              We're always looking for talented individuals. Send us your resume and let's discuss opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Submit Resume
              </button>
              <button className="px-8 py-4 border border-zion-blue text-zion-cyan font-semibold rounded-lg hover:bg-zion-blue/20 transition-all duration-300">
                Contact HR
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;