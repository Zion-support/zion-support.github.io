<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '../components/layout/Header';
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Award, 
  Globe, 
  Heart,
  Coffee,
  Laptop,
  BookOpen,
  Zap,
  Target,
  Briefcase,
  MapPin,
  Clock
} from 'lucide-react';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "Remote / San Francisco, CA",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead the development of cutting-edge AI solutions and machine learning models",
      requirements: [
        "Master's degree in Computer Science or related field",
        "5+ years experience in AI/ML development",
        "Expertise in Python, TensorFlow, PyTorch",
        "Experience with cloud platforms (AWS, GCP, Azure)",
        "Strong problem-solving and communication skills"
      ],
      benefits: [
        "Competitive salary and equity",
        "Comprehensive health coverage",
        "Flexible work arrangements",
        "Professional development budget"
      ]
    },
    {
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "New York, NY",
      type: "Full-time",
      experience: "3+ years",
      description: "Protect our clients' digital assets with advanced security solutions",
      requirements: [
        "Bachelor's degree in Cybersecurity or related field",
        "3+ years experience in cybersecurity",
        "Certifications: CISSP, CISM, or equivalent",
        "Experience with security tools and frameworks",
        "Knowledge of compliance standards (SOC2, ISO27001)"
      ],
      benefits: [
        "Competitive salary and equity",
        "Comprehensive health coverage",
        "Flexible work arrangements",
        "Professional development budget"
      ]
    },
    {
      title: "Cloud Solutions Architect",
      department: "Engineering",
      location: "Remote / Austin, TX",
      type: "Full-time",
      experience: "7+ years",
      description: "Design and implement scalable cloud infrastructure solutions",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "7+ years experience in cloud architecture",
        "Expertise in AWS, Azure, or GCP",
        "Experience with containerization (Docker, Kubernetes)",
        "Strong leadership and mentoring skills"
      ],
      benefits: [
        "Competitive salary and equity",
        "Comprehensive health coverage",
        "Flexible work arrangements",
        "Professional development budget"
      ]
    },
    {
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Remote / Seattle, WA",
      type: "Full-time",
      experience: "3+ years",
      description: "Build modern web applications with cutting-edge technologies",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "3+ years experience in full-stack development",
        "Proficiency in React, Node.js, TypeScript",
        "Experience with databases (PostgreSQL, MongoDB)",
        "Knowledge of DevOps practices"
      ],
      benefits: [
        "Competitive salary and equity",
        "Comprehensive health coverage",
        "Flexible work arrangements",
        "Professional development budget"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision coverage for you and your family"
    },
    {
      icon: <Coffee className="h-8 w-8 text-orange-500" />,
      title: "Work-Life Balance",
      description: "Flexible hours, remote work options, and unlimited PTO"
    },
    {
      icon: <Laptop className="h-8 w-8 text-blue-500" />,
      title: "Modern Equipment",
      description: "Latest technology and tools to help you do your best work"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-green-500" />,
      title: "Learning & Growth",
      description: "Professional development budget and conference attendance"
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Innovation Time",
      description: "20% time to work on passion projects and explore new technologies"
    },
    {
      icon: <Users className="h-8 w-8 text-purple-500" />,
      title: "Great Team",
      description: "Work with talented, passionate people who love what they do"
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We encourage creative thinking and embrace new ideas that push boundaries"
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and open communication"
    },
    {
      title: "Excellence",
      description: "We strive for the highest quality in everything we do"
    },
    {
      title: "Growth",
      description: "We invest in our people's professional and personal development"
    }
  ];

  return (
    <>
      <Head>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join Zion Tech Group and help shape the future of enterprise technology. Explore career opportunities in AI, cybersecurity, cloud, and software development." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Join Our Team
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Help us build the future of enterprise technology
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#positions"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                >
                  View Open Positions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="#culture"
                  className="inline-flex items-center px-8 py-4 border border-gray-300 hover:border-white text-white font-semibold rounded-lg transition-colors"
                >
                  Learn About Our Culture
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Culture Section */}
        <section id="culture" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Culture
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're building more than just technology – we're creating an environment where innovation thrives
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-300">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Benefits & Perks
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We take care of our team so they can take care of our clients
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="positions" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Open Positions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join our team and help shape the future of enterprise technology
              </p>
            </motion.div>

            <div className="space-y-8">
              {openPositions.map((position, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-4">
                        <div className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-2" />
                          {position.department}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          {position.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2" />
                          {position.type}
                        </div>
                        <div className="flex items-center">
                          <Award className="h-4 w-4 mr-2" />
                          {position.experience}
                        </div>
                      </div>
                      <p className="text-gray-300 mb-4">
                        {position.description}
                      </p>
                    </div>
                    <div className="mt-4 lg:mt-0 lg:ml-6">
                      <a
                        href="/contact"
                        className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                      >
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start text-gray-300">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {position.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start text-gray-300">
                            <Target className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Don't See Your Role?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our mission.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Send Us Your Resume
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CareersPage;
=======
import React from 'react'; import Head from 'next/head'; import Link from 'next/link'; import { Users,MapPin,Clock,Briefcase,Heart,Zap,Brain,Shield,Cloud,Rocket } from 'lucide-react'; export default function Careers() { return ( <> <Head> <title>Careers | Zion Tech Group</title> <meta name="description" content="Join Zion Tech Group and help build the future of AI,Micro SaaS,and IT solutions." /> <link rel="canonical" href="https: </Head> <main className="min-h-screen bg-gray-50"> <div className="max-w-4xl mx-auto px-4 py-16"> <h1 className="text-4xl font-bold text-center mb-8">Join Our Team</h1> <p className="text-xl text-center text-gray-600 mb-12"> We're always looking for talented individuals to join our mission of transforming businesses through technology. </p> <div className="text-center"> <a href="mailto:careers@ziontechgroup.com" className="inline-block border border-gray-300 px-6 py-3 rounded-lg">careers@ziontechgroup.com</a> </div> </div> </main> </> ) }
>>>>>>> origin/automation-improvements
