import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Briefcase, 
  Users, 
  Globe, 
  Zap, 
  Heart, 
  Award,
  ArrowRight,
  MapPin,
  Clock,
  DollarSign,
  Brain,
  Shield,
  Cloud,
  Database,
  Target,
  CheckCircle,
  Mail,
  Phone,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Careers() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments', count: 12 },
    { id: 'engineering', name: 'Engineering', count: 5 },
    { id: 'sales', name: 'Sales & Business Development', count: 3 },
    { id: 'marketing', name: 'Marketing', count: 2 },
    { id: 'operations', name: 'Operations', count: 2 }
  ];

  const jobListings = [
    {
      id: 1,
      title: "Senior AI Engineer",
      department: "Artificial Intelligence",
      location: "Remote / San Francisco",
      type: "Full-time",
      experience: "5+ years",
      salary: "$120,000 - $180,000",
      description: "Lead development of cutting-edge AI solutions for enterprise clients.",
      requirements: [
        "PhD in Computer Science or related field",
        "5+ years of machine learning experience",
        "Expertise in Python, TensorFlow, PyTorch",
        "Experience with large language models",
        "Strong background in NLP and computer vision"
      ],
      benefits: ["Competitive salary", "Health insurance", "Remote work", "AI research opportunities"],
      category: "ai"
    },
    {
      id: 2,
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "Remote / New York",
      type: "Full-time",
      experience: "3+ years",
      salary: "$90,000 - $140,000",
      description: "Protect our clients' digital assets with advanced security solutions.",
      requirements: [
        "Bachelor's degree in Cybersecurity or related field",
        "3+ years of security experience",
        "Certifications: CISSP, CEH, or similar",
        "Experience with penetration testing",
        "Knowledge of compliance frameworks"
      ],
      benefits: ["Competitive salary", "Health insurance", "Professional development", "Security training"],
      category: "security"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Positions', count: jobListings.length },
    { id: 'ai', name: 'AI & ML', count: jobListings.filter(job => job.category === 'ai').length },
    { id: 'security', name: 'Security', count: jobListings.filter(job => job.category === 'security').length },
    { id: 'cloud', name: 'Cloud & DevOps', count: jobListings.filter(job => job.category === 'cloud').length },
    { id: 'engineering', name: 'Engineering', count: jobListings.filter(job => job.category === 'engineering').length },
    { id: 'data', name: 'Data & Analytics', count: jobListings.filter(job => job.category === 'data').length },
    { id: 'product', name: 'Product', count: jobListings.filter(job => job.category === 'product').length }
  ];

  const filteredJobs = selectedCategory === 'all'
    ? jobListings: jobListings.filter(job => job.category === selectedCategory);

  const companyValues = [
    {
      icon: <Zap className="w-8 h-8 text-zion-cyan" />,
      title: 'Innovation First',
      description: 'We push boundaries and embrace cutting-edge technologies to solve complex problems.'
    },
    {
      icon: <Users className="w-8 h-8 text-zion-cyan" />,
      title: 'Collaboration',
      description: 'We believe in the power of diverse teams working together to achieve extraordinary results.'
    },
    {
      icon: <Heart className="w-8 h-8 text-zion-cyan" />,
      title: 'Customer Focus',
      description: 'Our customers\' success is our success. We build solutions that truly make a difference.'
    },
    {
      icon: <Globe className="w-8 h-8 text-zion-cyan" />,
      title: 'Global Impact',
      description: 'We\'re committed to creating technology that benefits society and the environment.'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Cutting-Edge Technology",
      description: "Work with the latest AI, quantum computing, and emerging technologies"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Solve real-world problems for Fortune 500 companies worldwide"
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health coverage, mental health support, and wellness programs"
    },
    {
      icon: Award,
      title: "Career Growth",
      description: "Continuous learning, mentorship, and clear career progression paths"
    }
  ];

  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case 'ai':
        return Brain;
      case 'security':
        return Shield;
      case 'cloud':
        return Cloud;
      case 'engineering':
        return Target;
      case 'data':
        return Database;
      case 'product':
        return Target;
      default:
        return Briefcase;
    }
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'General';
  };

  return (
    <>
      <SEO 
        title="Careers - Zion Tech Group"
        description="Join our team of technology experts and help shape the future of AI-powered business solutions."
        keywords="careers, job opportunities, AI jobs, cybersecurity jobs, cloud jobs, Zion Tech Group, technology careers"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-blue/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-purple/20 border border-zion-purple/30 mb-6">
                <Briefcase className="w-5 h-5 text-zion-purple mr-2" />
                <span className="text-zion-purple font-medium">Join Our Team</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Build the Future with Us
              </h1>
              
              <p className="text-xl md:text-2xl text-zion-cyan-light max-w-4xl mx-auto leading-relaxed mb-8">
                Join our team of technology experts and help shape the future of AI-powered 
                business solutions. We're looking for passionate innovators who want to make a difference.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-zion-purple to-zion-blue hover:from-zion-purple/80 hover:to-zion-blue/80 text-white">
                  <Briefcase className="w-5 h-5 mr-2" />
                  View Open Positions
                </Button>
                
                <Button
                  variant="outline"
                  className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Recruiting
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-zion-purple text-white shadow-lg'
                      : 'bg-white/10 text-zion-cyan-light hover:bg-white/20 border border-white/20'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                  <span className="text-sm opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {filteredJobs.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <Briefcase className="w-16 h-16 text-zion-cyan-light mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No positions found</h3>
                <p className="text-zion-cyan-light">
                  Try adjusting your category filter or check back later for new opportunities.
                </p>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 lg: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8">
                {filteredJobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <Card className="h-full bg-white/5 backdrop-blur-sm border-white/20 hover:border-zion-purple/50 transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-4">
                          <div className="inline-flex items-center px-3 py-1 rounded-full bg-zion-purple/20 border border-zion-purple/30">
                            <span className="text-zion-purple text-sm font-medium">
                              {getCategoryName(job.category)}
                            </span>
                          </div>
                          <div className="text-zion-cyan font-medium">
                            {job.salary}
                          </div>
                        </div>
                        
                        <CardTitle className="text-xl font-bold text-white group-hover:text-zion-purple transition-colors duration-300 mb-3">
                          {job.title}
                        </CardTitle>
                        
                        <CardDescription className="text-zion-cyan-light leading-relaxed mb-4">
                          {job.description}
                        </CardDescription>
                        
                        <div className="flex items-center space-x-4 text-sm text-zion-cyan-light mb-4">
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{job.experience}</span>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="mb-6">
                          <h4 className="text-white font-semibold mb-3">Requirements:</h4>
                          <ul className="space-y-2">
                            {job.requirements.map((requirement, reqIndex) => (
                              <li key={reqIndex} className="flex items-start space-x-2 text-sm">
                                <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                                <span className="text-zion-cyan-light">{requirement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="mb-6">
                          <h4 className="text-white font-semibold mb-3">Benefits:</h4>
                          <div className="flex flex-wrap gap-2">
                            {job.benefits.map((benefit, benefitIndex) => (
                              <span
                                key={benefitIndex}
                                className="px-2 py-1 bg-white/10 rounded text-xs text-zion-cyan-light border border-white/20"
                              >
                                {benefit}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex space-x-2">
                          <Button className="flex-1 bg-gradient-to-r from-zion-purple to-zion-blue hover:from-zion-purple/80 hover:to-zion-blue/80 text-white">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Apply Now
                          </Button>
                          
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark"
                          >
                            <Mail className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}

          </div>
        </section>

        {/* Application Process */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Application Process</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Our streamlined process ensures a smooth experience from application to offer.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: '1',
                  title: 'Apply',
                  description: 'Submit your resume and cover letter through our portal'
                },
                {
                  step: '2',
                  title: 'Review',
                  description: 'Our team reviews your application within 48 hours'
                },
                {
                  step: '3',
                  title: 'Interview',
                  description: 'Multiple rounds including technical and cultural fit'
                },
                {
                  step: '4',
                  title: 'Offer',
                  description: 'Receive your offer and join the Zion Tech family'
                }
              ].map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-zion-cyan text-slate-900 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Company Values
              </h2>
              <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
                These core values guide everything we do and shape our company culture.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-4 gap-6">
              {companyValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-white/5 backdrop-blur-sm border-white/20 hover:border-zion-purple/50 transition-all duration-300 text-center">
                    <CardContent className="p-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zion-purple/20 border border-zion-purple/30 mb-4">
                        <value.icon className="w-8 h-8 text-zion-purple" />
                      </div>
                      
                      <h3 className="text-lg font-semibold text-white mb-3">
                        {value.title}
                      </h3>
                      
                      <p className="text-zion-cyan-light text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Work at Zion Tech Group?
              </h2>
              <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
                We offer competitive benefits and a supportive environment where you can thrive and grow.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-white/5 backdrop-blur-sm border-white/20">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-xl bg-zion-purple/20 border border-zion-purple/30">
                          <benefit.icon className="w-6 h-6 text-zion-purple" />
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">
                            {benefit.title}
                          </h3>
                          
                          <p className="text-zion-cyan-light text-sm leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Join Our Team?
              </h2>
              <p className="text-xl text-zion-cyan-light mb-8 max-w-3xl mx-auto">
                Don't see a position that fits? We're always looking for talented individuals 
                who share our passion for innovation and technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-zion-purple to-zion-blue hover:from-zion-purple/80 hover:to-zion-blue/80 text-white">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Your Resume
                </Button>
                
                <Button
                  variant="outline"
                  className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Us
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}