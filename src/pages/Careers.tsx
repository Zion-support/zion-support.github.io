import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Briefcase, 
  Users, 
  Globe, 
  Zap, 
  Heart, 
  Award,
  ArrowRight,
  MapPin,
  Clock,
  DollarSign
} from 'lucide-react';

const Careers: React.FC = () => {
  const openPositions = [
    {
      title: "Senior AI Engineer",
      department: "Artificial Intelligence",
      location: "Remote / San Francisco",
      type: "Full-time",
      salary: "$120K - $180K",
      description: "Lead development of cutting-edge AI solutions for enterprise clients.",
      requirements: ["PhD in Computer Science", "5+ years ML experience", "Python, TensorFlow, PyTorch"]
    },
    {
      title: "Quantum Computing Specialist",
      department: "Quantum Technologies",
      location: "New York / Remote",
      type: "Full-time",
      salary: "$150K - $220K",
      description: "Develop quantum algorithms and quantum-safe security protocols.",
      requirements: ["PhD in Physics/CS", "Quantum computing experience", "Qiskit, Cirq expertise"]
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Austin / Remote",
      type: "Full-time",
      salary: "$100K - $150K",
      description: "Build and maintain scalable cloud infrastructure and CI/CD pipelines.",
      requirements: ["3+ years DevOps", "AWS/Azure/GCP", "Kubernetes, Docker"]
    },
    {
      title: "Cybersecurity Analyst",
      department: "Security",
      location: "Washington DC / Remote",
      type: "Full-time",
      salary: "$90K - $140K",
      description: "Protect our systems and clients from emerging cyber threats.",
      requirements: ["CISSP certification", "3+ years security", "Threat hunting experience"]
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      title: "Cutting-Edge Technology",
      description: "Work with the latest AI, quantum computing, and emerging technologies"
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      title: "Global Impact",
      description: "Solve real-world problems for Fortune 500 companies worldwide"
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-400" />,
      title: "Health & Wellness",
      description: "Comprehensive health coverage, mental health support, and wellness programs"
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-400" />,
      title: "Career Growth",
      description: "Continuous learning, mentorship, and clear career progression paths"
    }
  ];

  const values = [
    "Innovation First",
    "Client Success",
    "Continuous Learning",
    "Diversity & Inclusion",
    "Ethical AI",
    "Sustainability"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Careers - Zion Tech Group"
        description="Join our team of technology experts and help shape the future of AI-powered business solutions."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Join the Future of
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Technology</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Help us revolutionize industries with AI, quantum computing, and cutting-edge solutions. 
            Work with brilliant minds on projects that matter.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Users className="w-5 h-5 text-cyan-400" />
              <span className="text-white">200+ Team Members</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Globe className="w-5 h-5 text-blue-400" />
              <span className="text-white">25+ Countries</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Briefcase className="w-5 h-5 text-green-400" />
              <span className="text-white">50+ Open Positions</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              These core principles guide everything we do and shape our company culture.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-white font-semibold">{value}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Why Work With Us?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We offer more than just a job - we offer a mission, a community, and a chance to make history.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Ready to join our mission? Check out our current openings and find your perfect role.
            </p>
          </motion.div>
          
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-8 hover:bg-white/10 transition-all duration-300 border border-white/10"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-2">{position.title}</h3>
                    <p className="text-gray-400 mb-4">{position.description}</p>
                    
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Clock className="w-4 h-4" />
                        {position.type}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <DollarSign className="w-4 h-4" />
                        {position.salary}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-white font-medium mb-2">Requirements:</h4>
                      <ul className="list-disc list-inside text-gray-400 space-y-1">
                        {position.requirements.map((req, idx) => (
                          <li key={idx}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="lg:text-right">
                    <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 group">
                      Apply Now
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Don't See Your Role?
            </h2>
            <p className="text-gray-300 mb-8">
              We're always looking for talented individuals. Send us your resume and let's discuss how you can contribute to our mission.
            </p>
            <button className="bg-white text-slate-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 mx-auto group">
              Send General Application
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
