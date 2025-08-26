<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { 
  BriefcaseIcon,
  AcademicCapIcon,
  HeartIcon,
  GlobeAltIcon,
  SparklesIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';
=======
=======
import { AppLayout } from "@/layout/AppLayout";
>>>>>>> origin/cursor/website-audit-and-enhancement-ac60
=======
import React from 'react';
import { AppHeader } from "@/layout/AppHeader";
import { Footer } from "@/components/Footer";
>>>>>>> origin/cursor/website-audit-and-enhancement-b91b
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AppLayout } from "@/layout";
>>>>>>> origin/cursor/website-audit-and-enhancement-50d5

<<<<<<< HEAD
const Careers: React.FC = () => {
  const benefits = [
    {
      icon: HeartIcon,
      title: 'Health & Wellness',
      description: 'Comprehensive health coverage, mental health support, and wellness programs'
    },
    {
      icon: AcademicCapIcon,
      title: 'Learning & Development',
      description: 'Continuous learning opportunities, certifications, and career growth paths'
    },
    {
      icon: GlobeAltIcon,
      title: 'Remote First',
      description: 'Work from anywhere with flexible schedules and global collaboration'
    },
    {
      icon: SparklesIcon,
      title: 'Innovation Time',
      description: 'Dedicated time for personal projects and innovation initiatives'
    }
  ];

  const openPositions = [
    {
<<<<<<< HEAD
<<<<<<< HEAD
      title: 'Senior AI Engineer',
      department: 'AI & Machine Learning',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead development of cutting-edge AI solutions and autonomous systems'
=======
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Join our engineering team to build cutting-edge technology solutions"
>>>>>>> origin/cursor/website-audit-and-enhancement-98df
    },
    {
      title: 'Quantum Computing Specialist',
      department: 'Quantum Technology',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Research and develop quantum algorithms and quantum computing solutions'
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Build and maintain scalable cloud infrastructure and CI/CD pipelines'
    },
    {
      title: 'Cybersecurity Analyst',
      department: 'Security',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Protect our systems and clients with advanced security measures'
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Drive product strategy and execution for AI-powered solutions'
    },
    {
<<<<<<< HEAD
      title: 'Sales Engineer',
      department: 'Sales',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Bridge technical expertise with business solutions for clients'
    }
  ];

  const values = [
    {
      icon: RocketLaunchIcon,
      title: 'Innovation First',
      description: 'We push boundaries and embrace cutting-edge technology'
    },
    {
      icon: HeartIcon,
      title: 'Human Centered',
      description: 'Technology serves humanity, not the other way around'
    },
    {
      icon: GlobeAltIcon,
      title: 'Global Impact',
      description: 'We solve problems that affect people worldwide'
    },
    {
      icon: SparklesIcon,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Join Our Mission
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Help us shape the future of AI, quantum computing, and technology. 
            Work with brilliant minds on projects that change the world.
          </motion.p>
        </div>
      </div>

      {/* Company Values */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Our Values
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Why Work With Us
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Open Positions
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{position.title}</h3>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full">
                    {position.type}
                  </span>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span className="flex items-center space-x-1">
                      <BriefcaseIcon className="h-4 w-4" />
                      <span>{position.department}</span>
                    </span>
                    <span>•</span>
                    <span>{position.location}</span>
                    <span>•</span>
                    <span>{position.experience}</span>
                  </div>
                  <p className="text-gray-300">{position.description}</p>
                </div>
                
                <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Don't See the Right Role?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              We're always looking for talented individuals. Send us your resume and let's discuss how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                Send Resume
              </button>
              <button className="px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300">
                Contact Recruiting
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
=======
      title: "Product Manager",
      department: "Product",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Lead product strategy and development for our technology solutions"
=======
      title: "Senior AI Engineer",
      department: "AI Solutions",
      location: "Remote / San Francisco",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead AI/ML initiatives and develop cutting-edge machine learning solutions",
      requirements: ["Python, TensorFlow, PyTorch", "Deep Learning", "NLP/Computer Vision", "MLOps"],
      benefits: ["Competitive salary", "Health insurance", "Remote work", "Professional development"]
    },
    {
      title: "Cloud DevOps Engineer",
      department: "Cloud & DevOps",
      location: "Remote / New York",
      type: "Full-time",
      experience: "3+ years",
      description: "Build and maintain cloud infrastructure and CI/CD pipelines",
      requirements: ["AWS/Azure/GCP", "Kubernetes, Docker", "Terraform, Ansible", "CI/CD"],
      benefits: ["Competitive salary", "Health insurance", "Remote work", "Professional development"]
=======
import { Link } from 'react-router-dom';

const Careers: React.FC = () => {
  const openPositions = [
    {
      title: "Senior AI Engineer",
      department: "Artificial Intelligence",
      location: "Remote / Delaware",
      type: "Full-time",
      description: "Lead development of cutting-edge AI solutions and machine learning models."
    },
    {
      title: "Cloud Solutions Architect",
      department: "Cloud & DevOps",
      location: "Remote / Delaware",
      type: "Full-time",
      description: "Design and implement scalable cloud infrastructure solutions for enterprise clients."
>>>>>>> origin/cursor/website-audit-and-enhancement-67e4
    },
    {
      title: "Cybersecurity Specialist",
      department: "Security",
<<<<<<< HEAD
      location: "Remote / Austin",
      type: "Full-time",
      experience: "4+ years",
      description: "Protect client systems and develop security strategies",
      requirements: ["Security frameworks", "Penetration testing", "Compliance", "Incident response"],
      benefits: ["Competitive salary", "Health insurance", "Remote work", "Professional development"]
=======
      location: "Remote / Delaware",
      type: "Full-time",
      description: "Protect client systems and develop comprehensive security strategies."
>>>>>>> origin/cursor/website-audit-and-enhancement-67e4
    },
    {
      title: "Digital Transformation Consultant",
      department: "Consulting",
<<<<<<< HEAD
      location: "Remote / Chicago",
      type: "Full-time",
      experience: "6+ years",
      description: "Guide organizations through digital transformation initiatives",
      requirements: ["Strategy consulting", "Change management", "Technology expertise", "Business acumen"],
      benefits: ["Competitive salary", "Health insurance", "Remote work", "Professional development"]
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-bb5a
=======
import { Briefcase, Users, Award, Heart, MapPin, Clock, DollarSign, GraduationCap, Zap, Globe, Shield, Lightbulb } from 'lucide-react';

const Careers: React.FC = () => {
  const openPositions = [
    {
      title: "Senior AI Research Engineer",
      department: "AI & Research",
      location: "Remote / San Francisco",
      type: "Full-time",
      experience: "5+ years",
      salary: "$120K - $180K",
      description: "Lead cutting-edge AI research projects, develop neural network architectures, and contribute to autonomous systems development.",
      requirements: [
        "PhD in Computer Science, AI, or related field",
        "Strong background in deep learning and neural networks",
        "Experience with PyTorch, TensorFlow, or similar frameworks",
        "Published research in top AI conferences (NeurIPS, ICML, etc.)"
      ],
      benefits: [
        "Competitive salary and equity",
        "Flexible work arrangements",
        "Professional development budget",
        "Health, dental, and vision coverage"
      ]
    },
    {
      title: "Cybersecurity Architect",
      department: "Security",
      location: "New York / Remote",
      type: "Full-time",
      experience: "7+ years",
      salary: "$130K - $190K",
      description: "Design and implement enterprise security solutions, develop security frameworks, and lead compliance initiatives.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "CISSP, CISM, or similar certifications",
        "Experience with SOC 2, ISO 27001 compliance",
        "Expertise in threat modeling and security architecture"
      ],
      benefits: [
        "Competitive salary and equity",
        "Remote work options",
        "Security conference attendance",
        "Comprehensive benefits package"
      ]
    },
    {
      title: "Quantum Computing Researcher",
      department: "Quantum Systems",
      location: "Boston / Remote",
      type: "Full-time",
      experience: "3+ years",
      salary: "$100K - $150K",
      description: "Research quantum algorithms, develop quantum software, and contribute to quantum neural network research.",
      requirements: [
        "PhD in Physics, Computer Science, or related field",
        "Background in quantum mechanics and quantum computing",
        "Experience with Qiskit, Cirq, or similar frameworks",
        "Strong mathematical and programming skills"
      ],
      benefits: [
        "Competitive salary and equity",
        "Access to quantum computing resources",
        "Research publication support",
        "Flexible work arrangements"
      ]
    },
    {
      title: "DevOps Engineer",
      department: "Cloud & Infrastructure",
      location: "Austin / Remote",
      type: "Full-time",
      experience: "4+ years",
      salary: "$90K - $140K",
      description: "Build and maintain cloud infrastructure, automate deployment processes, and optimize CI/CD pipelines.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "Experience with AWS, Azure, or GCP",
        "Proficiency in Docker, Kubernetes, and Terraform",
        "Strong scripting skills (Python, Bash, etc.)"
      ],
      benefits: [
        "Competitive salary and equity",
        "Cloud certification support",
        "Home office setup allowance",
        "Flexible work hours"
      ]
    },
    {
      title: "Business Development Manager",
      department: "Sales & Marketing",
      location: "Chicago / Remote",
      type: "Full-time",
      experience: "5+ years",
      salary: "$80K - $120K + Commission",
      description: "Develop strategic partnerships, identify new business opportunities, and drive revenue growth.",
      requirements: [
        "Bachelor's degree in Business or related field",
        "Experience in B2B technology sales",
        "Strong relationship-building skills",
        "Understanding of AI and emerging technologies"
      ],
      benefits: [
        "Competitive base salary + commission",
        "Performance bonuses",
        "Travel and entertainment budget",
        "Professional development opportunities"
      ]
>>>>>>> origin/cursor/website-audit-and-enhancement-438b
    }
  ];

  const benefits = [
<<<<<<< HEAD
<<<<<<< HEAD
    { title: "Competitive Salary", icon: "💰", description: "Market-leading compensation packages" },
    { title: "Health Benefits", icon: "🏥", description: "Comprehensive health, dental, and vision coverage" },
    { title: "Remote Work", icon: "🏠", description: "Flexible remote and hybrid work options" },
    { title: "Professional Growth", icon: "📚", description: "Continuous learning and development opportunities" },
    { title: "Team Events", icon: "🎉", description: "Regular team building and social activities" },
    { title: "Stock Options", icon: "📈", description: "Equity participation in company growth" }
=======
    { title: "Health & Wellness", items: ["Comprehensive health insurance", "Dental and vision coverage", "Mental health support", "Wellness programs"] },
    { title: "Work-Life Balance", items: ["Flexible working hours", "Unlimited PTO", "Remote work options", "Family-friendly policies"] },
    { title: "Professional Growth", items: ["Learning budget", "Conference attendance", "Certification programs", "Mentorship opportunities"] },
    { title: "Team & Culture", items: ["Collaborative environment", "Innovation culture", "Diversity & inclusion", "Team events"] }
  ];

  const values = [
    { title: "Innovation", description: "Pushing boundaries and embracing new technologies", icon: "🚀" },
    { title: "Excellence", description: "Delivering exceptional results in everything we do", icon: "⭐" },
    { title: "Collaboration", description: "Working together to achieve common goals", icon: "🤝" },
    { title: "Integrity", description: "Maintaining the highest ethical standards", icon: "🛡️" },
    { title: "Growth", description: "Continuous learning and personal development", icon: "📈" },
    { title: "Impact", description: "Making a positive difference for our clients", icon: "💡" }
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-bb5a
  ];

  return (
    <>
<<<<<<< HEAD
      <Helmet>
        <title>Careers — Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group's innovative team. Explore career opportunities in AI, cloud, cybersecurity, and digital transformation." />
        <meta property="og:title" content="Careers — Zion Tech Group" />
        <meta property="og:description" content="Join our innovative team and help shape the future of technology." />
        <meta property="og:url" content="https://ziontechgroup.com/careers" />
        <link rel="canonical" href="https://ziontechgroup.com/careers" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
=======
      location: "Remote / Delaware",
      type: "Full-time",
      description: "Guide organizations through digital transformation initiatives."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
=======
    <AppLayout>
      <SEO
<<<<<<< HEAD
        title="Careers at Zion Tech Group - Join Our Team"
        description="Join the team building the future of AI and technology. Explore career opportunities at Zion Tech Group's innovative marketplace platform."
        keywords="Zion Tech Group careers, AI jobs, tech careers, remote work, startup jobs"
=======
        title="Careers at Zion - Join Our Team"
        description="Join the team building the future of AI and technology. Explore career opportunities at Zion's innovative marketplace platform."
        keywords="Zion careers, AI jobs, tech careers, remote work, startup jobs"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/website-audit-and-enhancement-39b5
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-35e5
=======
export default function Careers() {
  return (
    <AppLayout>
      <SEO 
        title="Careers at Zion - Join Our AI & Tech Team" 
        description="Explore career opportunities at Zion. Join our mission to democratize AI and technology access." 
        keywords="careers, jobs, Zion, AI, technology, employment"
>>>>>>> origin/cursor/website-audit-and-enhancement-ac60
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-aa85
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-beb3
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-24ce
        canonical="https://ziontechgroup.com/careers"
      />
      <AppHeader />
      <main className="min-h-screen bg-background pt-16 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> origin/cursor/website-audit-and-enhancement-50d5
          <div className="text-center mb-16">
>>>>>>> origin/cursor/website-audit-and-enhancement-67e4
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Team
              </span>
            </h1>
<<<<<<< HEAD
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
<<<<<<< HEAD
              Be part of a team that's shaping the future of technology. Work with cutting-edge 
              solutions and make a real impact on businesses worldwide.
=======
              Help us shape the future of technology. Join a team of innovators, problem-solvers, and technology enthusiasts.
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-bb5a
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#open-positions"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                View Open Positions
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center hover:border-white/40 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Work With Us?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive benefits and opportunities for growth
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((category, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Open Positions
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Join our team and help us build the future
              </p>
            </div>
            
            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                        <span>📍 {position.location}</span>
                        <span>🏢 {position.department}</span>
                        <span>⏰ {position.type}</span>
                        <span>📚 {position.experience}</span>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0">
                      <a
                        href={`mailto:careers@ziontechgroup.com?subject=Application for ${position.title}`}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{position.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-blue-400 mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, idx) => (
                          <li key={idx} className="text-sm text-gray-300 flex items-center">
                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {position.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-sm text-gray-300 flex items-center">
                            <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Application Process
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Simple steps to join our team
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Apply", description: "Submit your application with resume and cover letter" },
                { step: "2", title: "Review", description: "Our team reviews your application and experience" },
                { step: "3", title: "Interview", description: "Technical and cultural fit discussions" },
                { step: "4", title: "Offer", description: "Welcome to the team!" }
              ].map((phase, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center hover:border-white/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{phase.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{phase.title}</h3>
                  <p className="text-sm text-gray-300">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join Our Team?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't see a position that fits? Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:careers@ziontechgroup.com?subject=General Application"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Send Resume
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
<<<<<<< HEAD
>>>>>>> origin/cursor/website-audit-and-enhancement-98df
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-bb5a
=======
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision coverage for you and your family"
    },
    {
      icon: DollarSign,
      title: "Financial Security",
      description: "Competitive salary, equity options, 401(k) matching, and performance bonuses"
    },
    {
      icon: GraduationCap,
      title: "Learning & Growth",
      description: "Professional development budget, conference attendance, and continuous learning opportunities"
    },
    {
      icon: Globe,
      title: "Flexible Work",
      description: "Remote work options, flexible hours, and work-life balance initiatives"
    },
    {
      icon: Shield,
      title: "Security & Stability",
      description: "Job security, comprehensive insurance, and employee assistance programs"
    },
    {
      icon: Lightbulb,
      title: "Innovation Culture",
      description: "Work on cutting-edge technologies and contribute to groundbreaking research"
    }
  ];

  const culture = [
    "Collaborative and inclusive work environment",
    "Continuous learning and skill development",
    "Innovation-driven culture that encourages experimentation",
    "Work-life balance and flexible arrangements",
    "Diverse and international team",
    "Regular team building and social events"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6">
              <Briefcase className="w-4 h-4 mr-2" />
              Join Our Team
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Build the Future
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> With Us</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join our team of innovators, researchers, and technology experts 
              working on the cutting edge of AI, quantum computing, and emerging technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#positions"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View Open Positions
              </a>
              <a
                href="#culture"
                className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Learn About Culture
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Join Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We offer more than just a job - we provide an opportunity to shape the future of technology.
            </p>
          </div>
          
<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section id="culture" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Culture
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                At Zion Tech Group, we believe that great ideas come from diverse perspectives 
                and collaborative environments. Our culture is built on innovation, learning, and mutual respect.
              </p>
              <ul className="space-y-3">
                {culture.map((item, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-blue-500/30">
              <div className="text-center">
                <Users className="w-24 h-24 text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Diverse Team</h3>
                <p className="text-gray-300 mb-6">
                  We're committed to building a diverse and inclusive workplace 
                  where everyone feels valued and empowered to contribute.
                </p>
                <div className="text-sm text-gray-400">
                  <p>• Equal opportunity employer</p>
                  <p>• Inclusive hiring practices</p>
                  <p>• Diversity training programs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our current openings and find the perfect role for your skills and career goals.
            </p>
          </div>
          
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{position.title}</h3>
                    <p className="text-blue-400 font-medium">{position.department}</p>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <a
                      href={`/careers/apply?position=${encodeURIComponent(position.title)}`}
                      className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center text-sm text-gray-400">
                    <MapPin className="w-4 h-4 mr-2" />
                    {position.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Clock className="w-4 h-4 mr-2" />
                    {position.type}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Award className="w-4 h-4 mr-2" />
                    {position.experience}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <DollarSign className="w-4 h-4 mr-2" />
                    {position.salary}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{position.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-blue-400 font-semibold mb-2">Requirements</h4>
                    <ul className="space-y-1">
                      {position.requirements.map((req, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-start">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-blue-400 font-semibold mb-2">Benefits</h4>
                    <ul className="space-y-1">
                      {position.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-start">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            How to Apply
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our application process is designed to be simple and efficient. 
            Here's what you can expect:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                1
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Submit Application</h3>
              <p className="text-gray-300">Fill out our online application form with your details and resume</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                2
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Technical Review</h3>
              <p className="text-gray-300">Our team reviews your application and technical background</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                3
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Interview Process</h3>
              <p className="text-gray-300">Technical interviews and team discussions to assess fit</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We're always looking for talented individuals. Send us your resume 
            and we'll keep you in mind for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Send General Application
            </a>
            <a
              href="/contact"
              className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Get in Touch
            </a>
=======
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Be part of a team that's shaping the future of technology and AI innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Work at Zion Tech Group?</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold text-white">Innovation First</h3>
                    <p className="text-gray-300">Work on cutting-edge AI and technology solutions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold text-white">Remote-First Culture</h3>
                    <p className="text-gray-300">Flexible work environment with global team collaboration</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold text-white">Professional Growth</h3>
                    <p className="text-gray-300">Continuous learning and career development opportunities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold text-white">Impact-Driven</h3>
                    <p className="text-gray-300">Make a real difference in how businesses use technology</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Benefits & Perks</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Competitive salary and equity packages</li>
                <li>• Comprehensive health, dental, and vision coverage</li>
                <li>• Flexible PTO and paid holidays</li>
                <li>• Professional development budget</li>
                <li>• Home office setup allowance</li>
                <li>• Team building events and activities</li>
              </ul>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-white">{position.title}</h3>
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">{position.type}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">{position.department} • {position.location}</p>
                  <p className="text-gray-300 mb-4">{position.description}</p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    Apply Now
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Don't See the Right Fit?</h3>
              <p className="text-gray-300 mb-6">
                We're always looking for talented individuals to join our team. 
                Send us your resume and let's discuss how you can contribute to our mission.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Send Your Resume
              </Link>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-67e4
          </div>
=======
          {/* Sample job listings */}
          {(() => {
            const jobs = {
              engineering: [
                {
                  title: "Senior Frontend Engineer",
                  location: "Remote",
                  type: "Full-time",
                  department: "Engineering",
                  description: "Join our frontend team to build beautiful, responsive, and accessible user interfaces for our AI-powered marketplace."
                },
                {
                  title: "AI Research Engineer",
                  location: "San Francisco, CA",
                  type: "Full-time",
                  department: "Engineering",
                  description: "Work on cutting-edge AI technologies to power our matching algorithms and recommendation systems."
                },
                {
                  title: "Full Stack Developer",
                  location: "Remote",
                  type: "Full-time",
                  department: "Engineering",
                  description: "Develop end-to-end features across our platform, working with modern technologies like React, Node.js, and PostgreSQL."
                }
              ],
              product: [
                {
                  title: "Product Manager",
                  location: "New York, NY",
                  type: "Full-time",
                  department: "Product",
                  description: "Lead product development initiatives to enhance our marketplace experience for both talent and clients."
                },
                {
                  title: "UX/UI Designer",
                  location: "Remote",
                  type: "Full-time",
                  department: "Product",
                  description: "Create intuitive and engaging user experiences that make complex technology accessible to all users."
                }
              ],
              marketing: [
                {
                  title: "Growth Marketing Manager",
                  location: "Remote",
                  type: "Full-time",
                  department: "Marketing",
                  description: "Drive user acquisition and engagement strategies across multiple channels to grow our marketplace."
                },
                {
                  title: "Content Strategist",
                  location: "London, UK",
                  type: "Full-time",
                  department: "Marketing",
                  description: "Develop compelling content that educates and inspires our audience about the future of AI and technology."
                }
              ],
              operations: [
                {
                  title: "Community Manager",
                  location: "Remote",
                  type: "Full-time",
                  department: "Operations",
                  description: "Build and nurture our growing community of AI specialists, developers, and tech enthusiasts."
                },
                {
                  title: "Talent Acquisition Specialist",
                  location: "Remote",
                  type: "Full-time",
                  department: "Operations",
                  description: "Help connect the right talent with the right opportunities on our platform through personalized matching."
                }
              ]
            };

            // Benefits list
            const benefits = [
              {
                title: "Flexible Work",
                description: "Remote-first culture with flexible hours to support your productivity and work-life balance.",
                icon: (
                  <svg className="w-10 h-10 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                )
              },
              {
                title: "Health & Wellness",
                description: "Comprehensive health insurance and wellness programs to keep you at your best.",
                icon: (
                  <svg className="w-10 h-10 text-zion-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                )
              },
              {
                title: "Learning & Development",
                description: "Continuous learning opportunities, conference attendance, and skill development programs.",
                icon: (
                  <svg className="w-10 h-10 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                )
              },
              {
                title: "Team Events",
                description: "Regular team building activities, virtual events, and opportunities to connect with colleagues.",
                icon: (
                  <svg className="w-10 h-10 text-zion-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              }
            ];

            return (
              <>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">Why Work at Zion?</h2>
                    <p className="text-zion-slate-light text-lg mb-6">
                      At Zion, we're not just building a marketplace; we're creating a new paradigm for how AI and 
                      technology are accessed, shared, and implemented globally.
                    </p>
                    <p className="text-zion-slate-light text-lg mb-6">
                      Our team is passionate about democratizing access to cutting-edge technology and connecting 
                      talented individuals with meaningful opportunities. We value innovation, collaboration, and 
                      impact in everything we do.
                    </p>
                    <p className="text-zion-slate-light text-lg">
                      If you're excited about shaping the future of AI and technology while working in a dynamic, 
                      remote-first environment with a mission-driven team, we'd love to meet you.
                    </p>
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&h=600" 
                      alt="Team collaboration" 
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                
                <div className="mb-24">
                  <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Benefits</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="bg-zion-blue-dark p-8 rounded-lg border border-zion-blue-light">
                        <div className="bg-zion-blue inline-flex p-4 rounded-full mb-4">
                          {benefit.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                        <p className="text-zion-slate-light">{benefit.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-24">
                  <h2 className="text-3xl font-bold text-white mb-12 text-center">Open Positions</h2>
                  
                  <Tabs defaultValue="engineering" className="w-full">
                    <TabsList className="bg-zion-blue-dark border border-zion-blue-light mb-8 w-full flex flex-wrap justify-center">
                      <TabsTrigger value="engineering" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">Engineering</TabsTrigger>
                      <TabsTrigger value="product" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">Product</TabsTrigger>
                      <TabsTrigger value="marketing" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">Marketing</TabsTrigger>
                      <TabsTrigger value="operations" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">Operations</TabsTrigger>
                    </TabsList>
                    
                    {Object.entries(jobs).map(([department, jobList]) => (
                      <TabsContent key={department} value={department} className="space-y-6">
                        {jobList.map((job, index) => (
                          <Card key={index} className="bg-zion-blue-dark border border-zion-blue-light hover:border-zion-purple transition-colors">
                            <CardContent className="p-6">
                              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                <div>
                                  <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                                  <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="text-xs text-zion-slate-light bg-zion-blue px-2 py-1 rounded-full">{job.location}</span>
                                    <span className="text-xs text-zion-slate-light bg-zion-blue px-2 py-1 rounded-full">{job.type}</span>
                                    <span className="text-xs text-zion-slate-light bg-zion-blue px-2 py-1 rounded-full">{job.department}</span>
                                  </div>
                                  <p className="text-zion-slate-light mb-4">{job.description}</p>
                                </div>
                                <Button className="w-full md:w-auto mt-4 md:mt-0 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
                                  Apply Now
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </TabsContent>
                    ))}
                  </Tabs>
                </div>
                
                <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 rounded-xl p-8 md:p-12 text-center">
                  <h2 className="text-3xl font-bold text-white mb-6">Don't see the right position?</h2>
                  <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
                    We're always looking for talented individuals who are passionate about AI and technology. 
                    Send us your resume and let's start a conversation.
                  </p>
                  <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
                    Send General Application
                  </Button>
                </div>
              </>
            );
          })()}
>>>>>>> origin/cursor/website-audit-and-enhancement-ac60
        </div>
<<<<<<< HEAD
      </section>
    </div>
<<<<<<< HEAD
>>>>>>> origin/cursor/website-audit-and-enhancement-438b
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-67e4
=======
      </main>
<<<<<<< HEAD
    </AppLayout>
<<<<<<< HEAD
>>>>>>> origin/cursor/website-audit-and-enhancement-50d5
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-ac60
=======
      <Footer />
    </>
>>>>>>> origin/cursor/website-audit-and-enhancement-b91b
  );
};

export default Careers;
=======
import { Link } from 'react-router-dom';
import { CogIcon } from '@heroicons/react/24/outline';

const $page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-blue-600/20 rounded-full">
              <CogIcon className="h-12 w-12 text-blue-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            $page
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            This page is under development. Contact us for more information.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg"
          >
            Contact Us for More Information
          </Link>
        </div>
      </section>
    </div>
  );
};

export default $page;
>>>>>>> origin/cursor/website-audit-and-enhancement-56af
