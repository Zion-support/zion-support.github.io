import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Briefcase, 
  MapPin, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Globe,
  Heart,
  Zap
} from 'lucide-react';

export default function Careers() {
  const openPositions = [
    {
      title: "Senior Full Stack Developer",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      department: "Engineering",
      description: "Join our engineering team to build cutting-edge web applications and services",
      requirements: ["React/Node.js", "5+ years experience", "Cloud platforms", "Team leadership"]
    },
    {
      title: "AI/ML Engineer",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      department: "AI Research",
      description: "Develop innovative AI solutions and machine learning models",
      requirements: ["Python/TensorFlow", "3+ years experience", "ML algorithms", "Research background"]
    },
    {
      title: "DevOps Engineer",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      department: "Operations",
      description: "Build and maintain our cloud infrastructure and deployment pipelines",
      requirements: ["AWS/Azure", "Docker/Kubernetes", "CI/CD", "3+ years experience"]
    },
    {
      title: "Cybersecurity Specialist",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      department: "Security",
      description: "Protect our systems and clients with advanced security solutions",
      requirements: ["Security tools", "Incident response", "Compliance", "4+ years experience"]
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs"
    },
    {
      icon: Globe,
      title: "Remote Work",
      description: "Flexible remote work options and global team collaboration"
    },
    {
      icon: Zap,
      title: "Learning & Growth",
      description: "Continuous learning opportunities and career development"
    },
    {
      icon: Users,
      title: "Team Culture",
      description: "Collaborative environment with passionate professionals"
    }
  ];

  const values = [
    "Innovation First",
    "Customer Success",
    "Continuous Learning",
    "Team Collaboration",
    "Quality Excellence",
    "Ethical Technology"
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
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build the future of technology with a team of passionate innovators and problem solvers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#open-positions" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                View Open Positions
              </a>
              <Link 
                to="/contact" 
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide our work and shape our culture
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 text-center group hover:bg-slate-800/70"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {value}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the benefits of being part of the Zion Tech Group team
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our team and help us build the future of technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 group hover:bg-slate-800/70"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {position.title}
                  </h3>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                    {position.type}
                  </span>
                </div>
                
                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {position.location}
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="w-4 h-4 mr-1" />
                    {position.department}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{position.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  to="/contact"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                >
                  Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We're always looking for talented individuals. Send us your resume and let's discuss opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Send Your Resume
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/about"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
