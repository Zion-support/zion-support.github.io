import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Users, 
  Rocket, 
  Heart, 
  Zap, 
  Globe, 
  Award,
  ArrowRight,
  CheckCircle,
  Briefcase
} from 'lucide-react';

const benefits = [
  {
    icon: Rocket,
    title: 'Innovation First',
    description: 'Work on cutting-edge AI and emerging technologies'
  },
  {
    icon: Users,
    title: 'Collaborative Culture',
    description: 'Join a team of passionate innovators and problem-solvers'
  },
  {
    icon: Heart,
    title: 'Work-Life Balance',
    description: 'Flexible schedules and remote work opportunities'
  },
  {
    icon: Zap,
    title: 'Fast Growth',
    description: 'Rapid career advancement in a growing company'
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Work on solutions that transform businesses worldwide'
  },
  {
    icon: Award,
    title: 'Recognition',
    description: 'Celebrate achievements and contributions'
  }
];

const openPositions = [
  {
    title: 'Senior AI Engineer',
    department: 'Engineering',
    location: 'Remote / Middletown, DE',
    type: 'Full-time',
    description: 'Lead AI solution development and machine learning implementation',
    requirements: ['5+ years AI/ML experience', 'Python, TensorFlow, PyTorch', 'Strong problem-solving skills', 'Team leadership experience']
  },
  {
    title: 'Full Stack Developer',
    department: 'Engineering',
    location: 'Remote / Middletown, DE',
    type: 'Full-time',
    description: 'Build scalable web applications and microservices',
    requirements: ['3+ years full-stack development', 'React, Node.js, TypeScript', 'Cloud platform experience', 'API design expertise']
  },
  {
    title: 'DevOps Engineer',
    department: 'Operations',
    location: 'Remote / Middletown, DE',
    type: 'Full-time',
    description: 'Optimize infrastructure and deployment processes',
    requirements: ['3+ years DevOps experience', 'AWS/Azure, Docker, Kubernetes', 'CI/CD pipeline expertise', 'Infrastructure automation']
  },
  {
    title: 'Product Manager',
    department: 'Product',
    location: 'Remote / Middletown, DE',
    type: 'Full-time',
    description: 'Drive product strategy and roadmap for AI solutions',
    requirements: ['5+ years product management', 'AI/ML product experience', 'Strong analytical skills', 'Customer-focused mindset']
  }
];

export default function Careers() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <SEO 
        title="Careers - Zion Tech Group" 
        description="Join our team of innovators at Zion Tech Group. Explore career opportunities in AI, technology, and digital transformation." 
      />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Be part of a team that's revolutionizing how businesses leverage technology. 
            Work on cutting-edge AI solutions, collaborate with brilliant minds, 
            and make a real impact in the world.
          </p>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Why Work at Zion Tech Group?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We offer an environment where innovation thrives and careers flourish.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore current opportunities to join our growing team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {openPositions.map((position, index) => (
            <motion.div
              key={position.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-semibold">{position.title}</h3>
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                  {position.type}
                </span>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                <span className="flex items-center">
                  <Briefcase className="w-4 h-4 mr-2" />
                  {position.department}
                </span>
                <span>{position.location}</span>
              </div>
              <p className="text-gray-300 mb-6">{position.description}</p>
              <div>
                <h4 className="text-lg font-semibold mb-3">Requirements:</h4>
                <ul className="space-y-2">
                  {position.requirements.map((req) => (
                    <li key={req} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Apply Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Culture Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-12 border border-cyan-500/20"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Our Culture</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              We foster a culture of innovation, collaboration, and continuous learning. 
              Our team members are passionate about technology and committed to making a difference.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Collaborative</h3>
              <p className="text-gray-300">Work together to solve complex challenges</p>
            </div>
            <div className="text-center">
              <Rocket className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Innovative</h3>
              <p className="text-gray-300">Push boundaries and explore new possibilities</p>
            </div>
            <div className="text-center">
              <Heart className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Inclusive</h3>
              <p className="text-gray-300">Diverse perspectives drive better solutions</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Mission?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Don't see a position that fits? We're always looking for talented individuals 
            who share our passion for innovation and technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Send Resume
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
