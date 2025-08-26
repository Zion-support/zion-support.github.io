import React from 'react';
import SEOHead from '@/components/SEOHead';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Briefcase, 
  MapPin, 
  Clock, 
  Star, 
  Heart, 
  Zap, 
  Globe,
  Code,
  Brain,
  Shield,
  Cloud
} from 'lucide-react';

export default function Careers() {
  const openPositions = [
    {
      title: "Senior AI Engineer",
      department: "Artificial Intelligence",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead development of AI autonomous systems and machine learning models",
      skills: ["Python", "TensorFlow", "PyTorch", "MLOps", "Cloud Computing"],
      icon: Brain
    },
    {
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      description: "Implement and maintain advanced security solutions for enterprise clients",
      skills: ["SIEM", "Penetration Testing", "Incident Response", "Compliance", "Network Security"],
      icon: Shield
    },
    {
      title: "Cloud Solutions Architect",
      department: "Cloud & DevOps",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "7+ years",
      description: "Design and implement scalable cloud infrastructure solutions",
      skills: ["AWS", "Azure", "Kubernetes", "Terraform", "Docker"],
      icon: Cloud
    },
    {
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      description: "Build innovative web applications and microservices",
      skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "Redis"],
      icon: Code
    },
    {
      title: "IT Infrastructure Engineer",
      department: "Infrastructure",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "4+ years",
      description: "Design and maintain enterprise IT infrastructure",
      skills: ["VMware", "Active Directory", "Networking", "Storage", "Backup"],
      icon: Globe
    },
    {
      title: "Digital Transformation Consultant",
      department: "Consulting",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "6+ years",
      description: "Guide clients through digital transformation initiatives",
      skills: ["Change Management", "Process Optimization", "Strategy", "Stakeholder Management"],
      icon: Zap
    }
  ];

  const benefits = [
    {
      title: "Competitive Compensation",
      description: "Above-market salaries with performance bonuses and equity options",
      icon: Star
    },
    {
      title: "Remote-First Culture",
      description: "Work from anywhere with flexible hours and work-life balance",
      icon: Globe
    },
    {
      title: "Professional Growth",
      description: "Continuous learning with training budgets and conference attendance",
      icon: Users
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs",
      icon: Heart
    },
    {
      title: "Innovation Time",
      description: "20% time for personal projects and innovation initiatives",
      icon: Zap
    },
    {
      title: "Modern Tech Stack",
      description: "Work with cutting-edge technologies and tools",
      icon: Code
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We push boundaries and embrace new technologies to solve complex problems",
      icon: Zap
    },
    {
      title: "Client Success",
      description: "Our success is measured by our clients' success and satisfaction",
      icon: Star
    },
    {
      title: "Collaboration",
      description: "We believe in the power of diverse teams working together",
      icon: Users
    },
    {
      title: "Continuous Learning",
      description: "We foster a culture of growth and continuous improvement",
      icon: Brain
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEOHead
        title="Careers - Our Team"
        description="Join our team of innovators and problem solvers. We're hiring for roles in AI, cybersecurity, and digital transformation."
        keywords="careers, jobs, employment, AI engineer, cybersecurity specialist, cloud solutions architect, full stack developer, IT infrastructure engineer, digital transformation consultant"
      />
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join Our
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {" "}Team
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Be part of a team that's shaping the future of technology. 
              Work on cutting-edge AI, cybersecurity, and digital transformation solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#open-positions"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                View Open Positions
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border border-slate-600 text-base font-medium rounded-lg text-slate-300 hover:text-white hover:border-slate-500 transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Company Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/30"
            >
              <value.icon className="h-16 w-16 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">
                {value.title}
              </h3>
              <p className="text-slate-300">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Why Work With Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/30 hover:border-cyan-500/30 transition-all duration-300"
            >
              <benefit.icon className="h-12 w-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-slate-300">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Open Positions */}
      <div id="open-positions" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Open Positions
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {openPositions.map((position, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="flex items-start mb-6">
                <position.icon className="h-12 w-12 text-cyan-400 mt-1" />
                <div className="ml-4 flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {position.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 text-sm text-slate-400">
                    <span className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-1" />
                      {position.department}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {position.location}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {position.type}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-slate-300 mb-4">
                {position.description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-white font-medium mb-2">Required Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {position.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-slate-700/50 text-cyan-400 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-slate-400 text-sm">
                  Experience: {position.experience}
                </span>
                <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-lg transition-all duration-200">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 text-center border border-cyan-500/30">
          <h2 className="text-3xl font-bold text-white mb-4">
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. 
            Send us your resume and let's discuss how you can contribute to our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              Send Resume
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-3 border border-slate-600 text-base font-medium rounded-lg text-slate-300 hover:text-white hover:border-slate-500 transition-all duration-200"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
