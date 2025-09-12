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
      description: "Protect our systems and data from cyber threats and ensure compliance.",
      requirements: [
        "Bachelor's degree in Cybersecurity or related field",
        "3+ years of security experience",
        "Knowledge of security frameworks and compliance",
        "Experience with penetration testing",
        "Strong analytical and problem-solving skills"
      ],
      benefits: ["Competitive salary", "Health insurance", "Remote work", "Security certifications"],
      category: "security"
    },
    {
      id: 3,
      title: "Cloud Solutions Architect",
      department: "Cloud Infrastructure",
      location: "Remote / Austin",
      type: "Full-time",
      experience: "4+ years",
      salary: "$110,000 - $160,000",
      description: "Design and implement scalable cloud solutions for enterprise clients.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "4+ years of cloud architecture experience",
        "Expertise in AWS, Azure, or GCP",
        "Experience with infrastructure as code",
        "Strong communication and leadership skills"
      ],
      benefits: ["Competitive salary", "Health insurance", "Remote work", "Cloud certifications"],
      category: "cloud"
    }
  ];

  const companyValues = [
    {
      icon: Brain,
      title: "Innovation First",
      description: "We push the boundaries of what's possible in technology"
    },
    {
      icon: Heart,
      title: "People Matter",
      description: "Our team is our greatest asset and we invest in their growth"
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "We build secure, reliable solutions that our clients can depend on"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "We solve problems that affect people worldwide"
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Compensation",
      description: "Above-market salaries with performance bonuses and equity options"
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision coverage for you and your family"
    },
    {
      icon: Globe,
      title: "Remote First",
      description: "Work from anywhere with flexible hours and location independence"
    },
    {
      icon: Award,
      title: "Learning & Development",
      description: "Continuous learning opportunities, conferences, and skill development"
    },
    {
      icon: Users,
      title: "Team Culture",
      description: "Collaborative environment with smart, passionate colleagues"
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Regular recognition and rewards for outstanding contributions"
    }
  ];

  const filteredJobs = jobListings.filter(job => 
    selectedCategory === 'all' || job.category === selectedCategory
  );

  return (
    <>
      <SEO 
        title="Careers - Zion Tech Group"
        description="Join our team of innovators and help shape the future of technology. Explore exciting career opportunities at Zion Tech Group."
        keywords="careers, jobs, employment, Zion Tech Group, technology careers"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-black text-white">
        {/* Header Section */}
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl mb-6">
              <Briefcase className="w-10 h-10 text-blue-400" />
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Join Our Team
            </h1>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Help us build the future of technology. Join a team of innovators, problem-solvers, 
              and visionaries who are transforming industries through AI and cutting-edge solutions.
            </p>
          </motion.div>

          {/* Company Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {companyValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-sm text-zinc-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Work With Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mb-4">
                    <benefit.icon className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-sm text-zinc-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Job Listings */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white">Open Positions</h2>
              <div className="flex gap-2">
                {departments.map((dept) => (
                  <button
                    key={dept.id}
                    onClick={() => setSelectedCategory(dept.id === 'all' ? 'all' : dept.id)}
                    className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
                      selectedCategory === (dept.id === 'all' ? 'all' : dept.id)
                        ? 'bg-blue-500 border-blue-500 text-white'
                        : 'border-white/20 text-zinc-300 hover:border-blue-400 hover:text-white'
                    }`}
                  >
                    {dept.name} ({dept.count})
                  </button>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{job.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-zinc-300 mb-3">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {job.experience}
                        </span>
                      </div>
                      <p className="text-zinc-300 mb-4">{job.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="text-white font-medium mb-2">Requirements:</h4>
                        <ul className="space-y-1">
                          {job.requirements.map((req, idx) => (
                            <li key={idx} className="text-sm text-zinc-300 flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-400" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-white font-medium mb-2">Benefits:</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.benefits.map((benefit, idx) => (
                            <span key={idx} className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="ml-6 text-right">
                      <div className="text-2xl font-bold text-green-400 mb-2">{job.salary}</div>
                      <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Don't See the Right Fit?</h2>
            <p className="text-zinc-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team. 
              Send us your resume and let's discuss how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3">
                <Mail className="w-4 h-4 mr-2" />
                Send Resume
              </Button>
              <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-3">
                <Phone className="w-4 h-4 mr-2" />
                Contact HR
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
