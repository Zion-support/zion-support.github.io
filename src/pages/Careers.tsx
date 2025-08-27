import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, 
  Heart, 
  Zap, 
  Globe, 
  Award, 
  GraduationCap,
  Clock,
  MapPin,
  DollarSign,
  ArrowRight,
  Send,
  CheckCircle,
  Building2,
  Rocket,
  Lightbulb,
  Shield,
  Briefcase
} from 'lucide-react';

const Careers: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [isApplying, setIsApplying] = useState(false);

  const companyValues = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We push boundaries and embrace cutting-edge technologies to solve complex challenges.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives to achieve extraordinary results.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to customer service.'
    },
    {
      icon: GraduationCap,
      title: 'Continuous Growth',
      description: 'We invest in our people with ongoing learning opportunities and career development.'
    }
  ];

  const openPositions = [
    {
      title: "Senior AI Engineer",
      department: "AI & Machine Learning",
      location: "Remote / New York",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead AI initiatives and develop cutting-edge machine learning solutions",
      requirements: [
        "Advanced degree in Computer Science or related field",
        "Experience with TensorFlow, PyTorch, and cloud platforms",
        "Strong background in NLP and computer vision",
        "Experience leading technical teams"
      ]
    },
    {
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "Remote / Delaware",
      type: "Full-time",
      experience: "3+ years",
      description: "Protect our clients with advanced cybersecurity solutions",
      requirements: [
        "Certifications in CISSP, CEH, or similar",
        "Experience with penetration testing and security audits",
        "Knowledge of compliance frameworks (SOC 2, ISO 27001)",
        "Strong analytical and problem-solving skills"
      ]
    },
    {
      title: "Cloud Solutions Architect",
      department: "Cloud & Infrastructure",
      location: "Remote / Global",
      type: "Full-time",
      experience: "7+ years",
      description: "Design and implement scalable cloud solutions for enterprise clients",
      requirements: [
        "Expertise in AWS, Azure, and Google Cloud",
        "Experience with Kubernetes and containerization",
        "Strong understanding of microservices architecture",
        "Experience with infrastructure as code"
      ]
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: "Remote First",
      description: "Work from anywhere in the world"
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health coverage and wellness programs"
    },
    {
      icon: Zap,
      title: "Learning & Growth",
      description: "Continuous learning opportunities and career development"
    },
    {
      icon: Users,
      title: "Great Team",
      description: "Collaborate with talented professionals worldwide"
    }
  ];

  const handleApply = (jobId: string) => {
    setSelectedJob(jobId);
    setIsApplying(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build the future with cutting-edge technology and innovative solutions
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Join Zion Tech Group and be part of a team that's transforming businesses 
              through AI, cloud computing, and digital innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we make
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the advantages of being part of the Zion Tech Group team
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
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
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
                  <h3 className="text-2xl font-bold text-white">{position.title}</h3>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                    {position.type}
                  </span>
                </div>
                
                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Briefcase className="w-4 h-4 mr-2" />
                    {position.department}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {position.location}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {position.experience}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{position.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {position.requirements.map((req, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-center">
                        <CheckCircle className="w-3 h-3 text-cyan-400 mr-2" />
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

      {/* Application Modal */}
      {isApplying && selectedJob && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-zion-slate-dark rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">Apply for Position</h3>
              <button
                onClick={() => setIsApplying(false)}
                className="text-zion-cyan hover:text-zion-cyan/80"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-6">
              <div className="bg-zion-slate/30 rounded-lg p-4">
                <h4 className="text-lg font-bold text-white mb-2">
                  {openPositions.find(job => job.title === selectedJob)?.title}
                </h4>
                <p className="text-zion-cyan/80 text-sm">
                  {openPositions.find(job => job.title === selectedJob)?.department}
                </p>
              </div>
              
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">First Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-zion-slate/50 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-cyan/50 focus:outline-none focus:border-zion-cyan"
                      placeholder="Enter first name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Last Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-zion-slate/50 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-cyan/50 focus:outline-none focus:border-zion-cyan"
                      placeholder="Enter last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-zion-slate/50 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-cyan/50 focus:outline-none focus:border-zion-cyan"
                    placeholder="Enter email address"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-zion-slate/50 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-cyan/50 focus:outline-none focus:border-zion-cyan"
                    placeholder="Enter phone number"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">LinkedIn Profile</label>
                  <input
                    type="url"
                    className="w-full px-4 py-3 bg-zion-slate/50 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-cyan/50 focus:outline-none focus:border-zion-cyan"
                    placeholder="Enter LinkedIn URL"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Cover Letter</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-zion-slate/50 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-cyan/50 focus:outline-none focus:border-zion-cyan resize-none"
                    placeholder="Tell us why you're interested in this position and what you can bring to our team..."
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Resume/CV *</label>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    required
                    className="w-full px-4 py-3 bg-zion-slate/50 border border-zion-cyan/30 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-zion-cyan file:text-zion-slate-dark hover:file:bg-zion-cyan/80"
                  />
                </div>
                
                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark px-6 py-3 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Submit Application
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsApplying(false)}
                    className="px-6 py-3 border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark rounded-lg font-bold transition-all duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We're always looking for talented individuals. Send us your resume and let's discuss opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Send Resume
            </Link>
            <Link 
              to="/about"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
