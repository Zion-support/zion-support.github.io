import React from 'react';
import { motion } from 'framer-motion';
import { 
  BriefcaseIcon, 
  AcademicCapIcon, 
  HeartIcon,
  GlobeAltIcon,
  LightBulbIcon,
  UsersIcon,
  ClockIcon,
  MapPinIcon,
  CurrencyDollarIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const Careers: React.FC = () => {
  const benefits = [
    {
      icon: HeartIcon,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and wellness programs.'
    },
    {
      icon: AcademicCapIcon,
      title: 'Learning & Development',
      description: 'Continuous learning opportunities, certifications, and professional development budgets.'
    },
    {
      icon: GlobeAltIcon,
      title: 'Remote Work',
      description: 'Flexible remote work options with home office setup support.'
    },
    {
      icon: UsersIcon,
      title: 'Team Building',
      description: 'Regular team events, hackathons, and collaborative projects.'
    },
    {
      icon: LightBulbIcon,
      title: 'Innovation Time',
      description: 'Dedicated time for personal projects and innovation initiatives.'
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Competitive Compensation',
      description: 'Attractive salary packages with equity options and performance bonuses.'
    }
  ];

  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'AI Solutions',
      location: 'Remote / Delaware, USA',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Join our AI team to develop cutting-edge machine learning models and autonomous systems.',
      requirements: [
        'Strong background in machine learning and deep learning',
        'Experience with Python, TensorFlow, PyTorch',
        'Knowledge of cloud platforms (AWS, Azure, GCP)',
        'Experience with large-scale data processing'
      ],
      responsibilities: [
        'Design and implement AI/ML solutions',
        'Collaborate with cross-functional teams',
        'Mentor junior engineers',
        'Stay current with AI research and trends'
      ]
    },
    {
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote / California, USA',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Help protect our clients and systems with advanced cybersecurity solutions.',
      requirements: [
        'Certifications: CISSP, CISM, or equivalent',
        'Experience with security tools and frameworks',
        'Knowledge of compliance standards (SOC2, ISO27001)',
        'Strong analytical and problem-solving skills'
      ],
      responsibilities: [
        'Conduct security assessments and audits',
        'Implement security controls and monitoring',
        'Respond to security incidents',
        'Develop security policies and procedures'
      ]
    },
    {
      title: 'Cloud Solutions Architect',
      department: 'Cloud & DevOps',
      location: 'Remote / Texas, USA',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: [
        'Expertise in AWS, Azure, and GCP',
        'Experience with Kubernetes and containerization',
        'Strong understanding of DevOps practices',
        'Experience with infrastructure as code'
      ],
      responsibilities: [
        'Design cloud architecture solutions',
        'Lead technical implementation projects',
        'Provide technical guidance to clients',
        'Optimize cloud costs and performance'
      ]
    },
    {
      title: 'Digital Marketing Manager',
      department: 'Marketing',
      location: 'Remote / New York, USA',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Drive our digital marketing strategy and grow our brand presence.',
      requirements: [
        'Experience with digital marketing campaigns',
        'Knowledge of SEO, SEM, and social media',
        'Experience with marketing automation tools',
        'Strong analytical and creative skills'
      ],
      responsibilities: [
        'Develop and execute marketing strategies',
        'Manage digital advertising campaigns',
        'Analyze performance metrics',
        'Collaborate with content and design teams'
      ]
    }
  ];

  const culture = [
    {
      icon: LightBulbIcon,
      title: 'Innovation First',
      description: 'We encourage creative thinking and embrace new ideas that push boundaries.'
    },
    {
      icon: UsersIcon,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives.'
    },
    {
      icon: HeartIcon,
      title: 'Passion',
      description: 'We\'re passionate about technology and its potential to change the world.'
    },
    {
      icon: SparklesIcon,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do.'
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, DollarSign, Users, Zap, Heart, Globe, Shield } from 'lucide-react';

export default function Careers() {
  const openPositions = [
    {
      id: 1,
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      salary: "$120k - $180k",
      description: "Join our AI team to build cutting-edge machine learning models and algorithms that power our marketplace recommendations.",
      requirements: ["5+ years ML/AI experience", "Python, TensorFlow, PyTorch", "PhD in Computer Science preferred"],
      posted: "2 days ago"
    },
    {
      id: 2,
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote / New York",
      type: "Full-time",
      salary: "$90k - $140k",
      description: "Build beautiful, responsive user interfaces using React and modern web technologies.",
      requirements: ["3+ years React experience", "TypeScript, Tailwind CSS", "Performance optimization skills"],
      posted: "1 week ago"
    },
    {
      id: 3,
      title: "Product Manager",
      department: "Product",
      location: "Remote / Austin",
      type: "Full-time",
      salary: "$100k - $150k",
      description: "Drive product strategy and execution for our marketplace platform.",
      requirements: ["5+ years PM experience", "Marketplace/B2B experience", "Data-driven decision making"],
      posted: "3 days ago"
    },
    {
      id: 4,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote / Seattle",
      type: "Full-time",
      salary: "$110k - $160k",
      description: "Build and maintain our cloud infrastructure and deployment pipelines.",
      requirements: ["AWS/Azure experience", "Kubernetes, Docker", "CI/CD expertise"],
      posted: "5 days ago"
    },
    {
      id: 5,
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Remote / Los Angeles",
      type: "Full-time",
      salary: "$70k - $100k",
      description: "Develop and execute marketing campaigns to grow our user base and brand awareness.",
      requirements: ["3+ years marketing experience", "Digital marketing skills", "Analytics and reporting"],
      posted: "1 week ago"
    },
    {
      id: 6,
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote / Chicago",
      type: "Full-time",
      salary: "$80k - $120k",
      description: "Ensure customer satisfaction and help users maximize value from our platform.",
      requirements: ["3+ years CS experience", "Strong communication skills", "Problem-solving mindset"],
      posted: "4 days ago"
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-zion-cyan" />,
      title: "Flexible Work",
      description: "Remote-first culture with flexible hours and unlimited PTO"
    },
    {
      icon: <Heart className="w-8 h-8 text-zion-purple" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs"
    },
    {
      icon: <Users className="w-8 h-8 text-zion-cyan" />,
      title: "Team Events",
      description: "Regular team building activities and company retreats"
    },
    {
      icon: <Globe className="w-8 h-8 text-zion-purple" />,
      title: "Global Team",
      description: "Work with talented people from around the world"
    },
    {
      icon: <Shield className="w-8 h-8 text-zion-cyan" />,
      title: "Security",
      description: "Competitive salary, equity, and retirement benefits"
=======
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Careers() {
  // Sample job listings
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
      title: "Continuous Learning",
      description: "Education stipends and dedicated learning time to help you grow professionally.",
      icon: (
        <svg className="w-10 h-10 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Competitive Compensation",
      description: "Salary packages that recognize your value, plus equity options to share in our success.",
      icon: (
        <svg className="w-10 h-10 text-zion-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
=======
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Build the future of technology with us. Join a team of innovators, problem-solvers, and visionaries.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#open-positions"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:shadow-lg"
              >
                View Open Positions
              </a>
              <a
                href="/contact"
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Work With Zion Tech Group?</h2>
            <p className="text-xl text-gray-300">Join a company that values innovation, growth, and your success</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Culture</h2>
            <p className="text-xl text-gray-300">The values that make Zion Tech Group a great place to work</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {culture.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-xl text-gray-300">Join our team and help shape the future of technology</p>
          </motion.div>
          
          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-white">{position.title}</h3>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                        {position.type}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-6 mb-4 text-gray-300">
                      <div className="flex items-center gap-2">
                        <BriefcaseIcon className="w-4 h-4" />
                        <span>{position.department}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPinIcon className="w-4 h-4" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ClockIcon className="w-4 h-4" />
                        <span>{position.experience}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed mb-6">{position.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-white font-semibold mb-3">Requirements:</h4>
                        <ul className="space-y-2">
                          {position.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-300">
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-white font-semibold mb-3">Responsibilities:</h4>
                        <ul className="space-y-2">
                          {position.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-300">
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:flex-shrink-0">
                    <a
                      href="/contact"
                      className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:shadow-lg whitespace-nowrap"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Opportunities */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Grow With Us</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                At Zion Tech Group, we believe in investing in our people. We provide continuous learning opportunities, 
                mentorship programs, and clear career progression paths.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Whether you're just starting your career or looking to take the next step, we offer the resources, 
                support, and challenges you need to succeed.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Professional development budgets</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Mentorship programs</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Conference and training opportunities</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Internal promotion paths</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Apply?</h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Don't see a position that fits? We're always looking for talented individuals. 
                  Send us your resume and let's discuss how you can contribute to our team.
                </p>
                <div className="space-y-3">
                  <a
                    href="/contact"
                    className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:shadow-lg text-center"
                  >
                    Send Your Resume
                  </a>
                  <a
                    href="/team"
                    className="block w-full border border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 text-center"
                  >
                    Meet Our Team
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Our Team?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Take the first step towards an exciting career with Zion Tech Group. 
              We can't wait to see what we can accomplish together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:shadow-lg"
              >
                Start Your Application
              </a>
              <a
                href="/about"
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Learn More About Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
    <>
      <SEO 
        title="Careers - Join Zion Tech Group" 
        description="Join our team and help build the future of AI and technology marketplace. Explore open positions and learn about our culture." 
        keywords="careers, jobs, Zion Tech Group, AI jobs, tech jobs, remote jobs"
        canonical="https://ziontechgroup.com/careers"
      />
      
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <GradientHeading>Join Our Team</GradientHeading>
            <p className="mt-6 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Help us build the world's first free marketplace dedicated to high-tech and artificial intelligence. 
              We're looking for passionate individuals who want to make a difference.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-zion-cyan bg-zion-cyan/10">
                Remote First
              </Badge>
              <Badge variant="secondary" className="text-zion-purple bg-zion-purple/10">
                AI & Tech
              </Badge>
              <Badge variant="secondary" className="text-zion-cyan bg-zion-cyan/10">
                Growth Mindset
              </Badge>
              <Badge variant="secondary" className="text-zion-purple bg-zion-purple/10">
                Innovation
              </Badge>
            </div>
          </div>

          {/* Company Culture */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Work With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="bg-zion-blue-dark border-zion-blue-light text-white">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-zion-cyan">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-zion-slate-light">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Open Positions */}
          <section>
            <h2 className="text-3xl font-bold text-white text-center mb-12">Open Positions</h2>
            <div className="space-y-6">
              {openPositions.map((position) => (
                <Card key={position.id} className="bg-zion-blue-dark border-zion-blue-light text-white hover:border-zion-cyan/50 transition-colors">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl text-zion-cyan">{position.title}</CardTitle>
                        <CardDescription className="text-zion-slate-light mt-2">
                          {position.department} • {position.location}
                        </CardDescription>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="border-zion-purple text-zion-purple">
                          {position.type}
                        </Badge>
                        <Badge variant="outline" className="border-zion-cyan text-zion-cyan">
                          {position.salary}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zion-slate-light mb-4">{position.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-white mb-2">Requirements:</h4>
                      <ul className="list-disc list-inside text-zion-slate-light space-y-1 ml-4">
                        {position.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex items-center gap-4 text-sm text-zion-slate-light">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          Posted {position.posted}
                        </span>
                      </div>
                      <Button className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-blue-dark">
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="mt-20 text-center">
            <Card className="bg-zion-blue-dark border-zion-cyan/30 text-white max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl text-zion-cyan">Don't See the Right Fit?</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  We're always looking for talented individuals to join our team. Send us your resume and let's discuss how you can contribute to our mission.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="bg-zion-purple hover:bg-zion-purple/80 text-white">
                  Send General Application
                </Button>
              </CardContent>
            </Card>
          </section>

          {/* Contact Information */}
          <section className="mt-20 text-center">
            <h2 className="text-2xl font-bold text-white mb-8">Get in Touch</h2>
            <div className="bg-zion-blue-dark p-8 rounded-lg border border-zion-blue-light max-w-2xl mx-auto">
              <p className="text-zion-slate-light mb-4">
                Questions about working at Zion Tech Group? We'd love to hear from you.
              </p>
              <div className="space-y-2 text-zion-slate-light">
                <p><strong>Email:</strong> careers@ziontechgroup.com</p>
                <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/company/zion-tech-group" className="text-zion-cyan hover:underline">Follow us on LinkedIn</a></p>
                <p><strong>Location:</strong> Remote-first, with offices in major tech hubs</p>
              </div>
            </div>
          </section>
=======
    <>
      <SEO
        title="Careers at Zion - Join Our Team"
        description="Join the team building the future of AI and technology. Explore career opportunities at Zion's innovative marketplace platform."
        keywords="Zion careers, AI jobs, tech careers, remote work, startup jobs"
        canonical="https://ziontechgroup.com/careers"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Join Our Team</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Help us build the future of AI and technology
            </p>
          </div>
          
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
        </div>
      </main>
    </>
  );
}
=======
