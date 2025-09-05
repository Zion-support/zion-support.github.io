import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { 
  Users, 
  ArrowRight,
  CheckCircle,
  Star,
  MapPin,
  Clock,
  Briefcase,
  GraduationCap,
  Globe,
  Heart,
  Zap,
  Target,
  Award,
  Building,
  Rocket,
  Shield,
  Code,
  Brain,
  Cloud,
  Settings,
  BarChart3,
  MessageSquare,
  Phone,
  Mail
} from 'lucide-react';
=======
import { MapPin, Clock, Users, ArrowRight, CheckCircle, Star } from 'lucide-react';
import Layout from '../components/Layout';
>>>>>>> main

const jobOpenings = [
  {
    id: 1,
<<<<<<< HEAD
    title: "Senior AI Engineer",
    department: "Engineering",
    location: "Remote / Delaware",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead the development of cutting-edge AI solutions and machine learning models.",
=======
    title: "Senior AI/ML Engineer",
    department: "AI Services",
    location: "Remote",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead the development of cutting-edge AI solutions and machine learning models for our clients.",
>>>>>>> main
    requirements: [
      "Master's degree in Computer Science or related field",
      "5+ years experience in AI/ML development",
      "Proficiency in Python, TensorFlow, PyTorch",
      "Experience with cloud platforms (AWS, GCP, Azure)",
      "Strong problem-solving and communication skills"
    ],
<<<<<<< HEAD
    benefits: [
      "Competitive salary and equity",
      "Health, dental, and vision insurance",
      "Flexible work arrangements",
      "Professional development budget",
      "401(k) with company matching"
    ]
  },
  {
    id: 2,
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Remote / Delaware",
    type: "Full-time",
    experience: "3+ years",
    description: "Build scalable web applications and microservices using modern technologies.",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
=======
    benefits: ["Competitive salary", "Health insurance", "Remote work", "Professional development"]
  },
  {
    id: 2,
    title: "Full-Stack Developer",
    department: "Micro SaaS",
    location: "New York, NY",
    type: "Full-time",
    experience: "3+ years",
    description: "Build scalable web applications and microservices for our SaaS solutions.",
    requirements: [
<<<<<<< HEAD
=======
      "Bachelor's degree in Computer Science or related field",
>>>>>>> cursor/website-audit-and-update-with-deployment-9cae
>>>>>>> main
      "3+ years experience in full-stack development",
      "Proficiency in React, Node.js, TypeScript",
      "Experience with databases (PostgreSQL, MongoDB)",
      "Knowledge of cloud services and DevOps practices"
    ],
<<<<<<< HEAD
    benefits: [
      "Competitive salary and equity",
      "Health, dental, and vision insurance",
      "Flexible work arrangements",
      "Professional development budget",
      "401(k) with company matching"
    ]
  },
  {
    id: 3,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote / Delaware",
    type: "Full-time",
    experience: "4+ years",
    description: "Design and maintain cloud infrastructure and CI/CD pipelines.",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "4+ years experience in DevOps/Infrastructure",
      "Proficiency in AWS, Docker, Kubernetes",
      "Experience with Terraform, Ansible",
      "Knowledge of monitoring and logging tools"
    ],
    benefits: [
      "Competitive salary and equity",
      "Health, dental, and vision insurance",
      "Flexible work arrangements",
      "Professional development budget",
      "401(k) with company matching"
    ]
  },
  {
    id: 4,
    title: "Product Manager",
    department: "Product",
    location: "Remote / Delaware",
    type: "Full-time",
    experience: "4+ years",
    description: "Drive product strategy and roadmap for our AI and technology solutions.",
    requirements: [
      "Bachelor's degree in Business, Engineering, or related field",
      "4+ years experience in product management",
      "Experience with AI/ML products preferred",
      "Strong analytical and communication skills",
      "Experience with agile development methodologies"
    ],
    benefits: [
      "Competitive salary and equity",
      "Health, dental, and vision insurance",
      "Flexible work arrangements",
      "Professional development budget",
      "401(k) with company matching"
    ]
  },
  {
    id: 5,
    title: "Sales Engineer",
    department: "Sales",
    location: "Remote / Delaware",
    type: "Full-time",
    experience: "3+ years",
    description: "Help clients understand and implement our technology solutions.",
    requirements: [
      "Bachelor's degree in Engineering or related field",
      "3+ years experience in technical sales",
      "Strong technical background in AI/ML",
      "Excellent presentation and communication skills",
      "Experience with enterprise sales processes"
    ],
    benefits: [
      "Competitive salary and commission",
      "Health, dental, and vision insurance",
      "Flexible work arrangements",
      "Professional development budget",
      "401(k) with company matching"
    ]
  },
  {
    id: 6,
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote / Delaware",
    type: "Full-time",
    experience: "3+ years",
    description: "Create intuitive and engaging user experiences for our digital products.",
    requirements: [
      "Bachelor's degree in Design or related field",
      "3+ years experience in UX/UI design",
=======
    benefits: ["Competitive salary", "Health insurance", "Flexible hours", "Stock options"]
  },
  {
    id: 3,
    title: "Cloud Solutions Architect",
    department: "IT Services",
    location: "Remote",
    type: "Full-time",
    experience: "7+ years",
    description: "Design and implement cloud infrastructure solutions for enterprise clients.",
    requirements: [
<<<<<<< HEAD
=======
      "Bachelor's degree in Computer Science or related field",
>>>>>>> cursor/website-audit-and-update-with-deployment-9cae
      "7+ years experience in cloud architecture",
      "AWS/Azure/GCP certifications preferred",
      "Experience with containerization (Docker, Kubernetes)",
      "Strong understanding of security best practices"
    ],
    benefits: ["Competitive salary", "Health insurance", "Remote work", "Certification support"]
  },
  {
    id: 4,
    title: "Cybersecurity Specialist",
    department: "Security",
    location: "San Francisco, CA",
    type: "Full-time",
    experience: "4+ years",
    description: "Protect our clients' digital assets and implement security best practices.",
    requirements: [
<<<<<<< HEAD
=======
      "Bachelor's degree in Cybersecurity or related field",
>>>>>>> cursor/website-audit-and-update-with-deployment-9cae
      "4+ years experience in cybersecurity",
      "Certifications (CISSP, CISM, CEH) preferred",
      "Experience with security tools and frameworks",
      "Knowledge of compliance standards (SOC 2, ISO 27001)"
    ],
    benefits: ["Competitive salary", "Health insurance", "Flexible hours", "Professional development"]
  },
  {
    id: 5,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Austin, TX",
    type: "Full-time",
    experience: "3+ years",
    description: "Streamline our development and deployment processes with modern DevOps practices.",
    requirements: [
<<<<<<< HEAD
=======
      "Bachelor's degree in Computer Science or related field",
>>>>>>> cursor/website-audit-and-update-with-deployment-9cae
      "3+ years experience in DevOps",
      "Proficiency in CI/CD pipelines",
      "Experience with infrastructure as code (Terraform, CloudFormation)",
      "Knowledge of monitoring and logging tools"
    ],
    benefits: ["Competitive salary", "Health insurance", "Remote work", "Learning budget"]
  },
  {
    id: 6,
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    experience: "2+ years",
    description: "Create intuitive and beautiful user experiences for our digital products.",
    requirements: [
<<<<<<< HEAD
=======
      "Bachelor's degree in Design or related field",
>>>>>>> cursor/website-audit-and-update-with-deployment-9cae
      "2+ years experience in UX/UI design",
>>>>>>> main
      "Proficiency in Figma, Sketch, Adobe Creative Suite",
      "Experience with user research and testing",
      "Portfolio demonstrating strong design skills"
    ],
<<<<<<< HEAD
    benefits: [
      "Competitive salary and equity",
      "Health, dental, and vision insurance",
      "Flexible work arrangements",
      "Professional development budget",
      "401(k) with company matching"
    ]
  }
];

const companyValues = [
  {
    icon: Heart,
    title: "People First",
    description: "We believe our team is our greatest asset and invest in their growth and well-being."
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We encourage creative thinking and embrace new technologies to solve complex problems."
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for the highest quality in everything we do and continuously improve our processes."
  },
  {
    icon: Globe,
    title: "Impact",
    description: "We build solutions that make a real difference in the world and help our clients succeed."
  }
];

const benefits = [
  {
    category: "Health & Wellness",
    items: [
      "Comprehensive health, dental, and vision insurance",
      "Mental health support and counseling services",
      "Gym membership reimbursement",
      "Flexible work arrangements and remote work options"
    ]
  },
  {
    category: "Professional Development",
    items: [
      "Annual learning and development budget",
      "Conference and training attendance",
      "Mentorship programs",
      "Internal knowledge sharing sessions"
    ]
  },
  {
    category: "Work-Life Balance",
    items: [
      "Unlimited paid time off",
      "Flexible working hours",
      "Parental leave and family support",
      "Company retreats and team building events"
    ]
  },
  {
    category: "Financial Benefits",
    items: [
      "Competitive salary and equity packages",
      "401(k) with company matching",
      "Performance bonuses",
      "Stock option programs"
    ]
  }
=======
    benefits: ["Competitive salary", "Health insurance", "Remote work", "Design tools budget"]
  }
];

const benefits = [
  {
    title: "Competitive Compensation",
    description: "We offer competitive salaries and performance-based bonuses",
    icon: Star
  },
  {
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs",
    icon: Users
  },
  {
    title: "Flexible Work",
    description: "Remote work options and flexible schedules",
    icon: Clock
  },
  {
    title: "Professional Growth",
    description: "Learning opportunities and career development support",
    icon: ArrowRight
  }
];

const values = [
  "Innovation and creativity",
  "Collaboration and teamwork",
  "Continuous learning",
  "Work-life balance",
  "Diversity and inclusion",
  "Client success focus"
>>>>>>> main
];

export default function TalentPage() {
  return (
<<<<<<< HEAD
    <MainLayout>
=======
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Join Our Team - Zion Tech Group</title>
        <meta name="description" content="Join our team of talented professionals and help us build the future of technology." />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-blue-100">
              We're looking for talented individuals who share our passion for innovation and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Open Positions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={job.id}
=======
    <Layout 
      title="Careers - Zion Tech Group"
      description="Join our team of talented professionals and help shape the future of technology. Explore career opportunities at Zion Tech Group."
      keywords="careers, jobs, employment, technology careers, AI engineer, developer, cloud architect"
    >
>>>>>>> main
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
              className="text-center"
=======
              className="text-center max-w-4xl mx-auto"
>>>>>>> main
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Join Our Team
              </h1>
<<<<<<< HEAD
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Be part of a dynamic team that's shaping the future of technology. 
                We're looking for passionate individuals who want to make a real impact.
=======
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Be part of a team that's shaping the future of technology and helping businesses transform digitally
>>>>>>> main
              </p>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Company Values */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
=======
        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
>>>>>>> main
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
<<<<<<< HEAD
              className="text-center mb-12"
=======
>>>>>>> main
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
<<<<<<< HEAD
                These core values guide everything we do and shape our company culture.
=======
                We're building a culture of innovation, collaboration, and growth where talented individuals can thrive
>>>>>>> main
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
<<<<<<< HEAD
                    key={value.title}
=======
                    key={index}
                    className="text-center p-6"
>>>>>>> main
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
<<<<<<< HEAD
                    className="bg-white rounded-lg shadow-lg p-6 text-center"
=======
>>>>>>> main
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Job Openings */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
=======
        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
>>>>>>> main
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
<<<<<<< HEAD
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
=======
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The principles that guide our work and shape our company culture
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg"
>>>>>>> cursor/website-audit-and-update-with-deployment-9cae
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
<<<<<<< HEAD
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {job.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {job.department} • {job.location} • {job.type}
                  </p>
                  <p className="text-gray-700 mb-4">
                    {job.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      {job.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                    Apply Now
                  </button>
=======
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-900 font-medium">{value}</span>
                  </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-9cae
                </motion.div>
              ))}
            </div>
          </div>
<<<<<<< HEAD
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Work With Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
=======
        </section>

        {/* Job Openings Section */}
        <section id="openings" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
>>>>>>> main
                Open Positions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our current job openings and find the perfect role for your career.
              </p>
            </motion.div>
            <div className="space-y-8">
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={job.id}
<<<<<<< HEAD
=======
                  className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
>>>>>>> cursor/website-audit-and-update-with-deployment-9cae
>>>>>>> main
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
<<<<<<< HEAD
                  className="bg-gray-50 rounded-lg shadow-lg p-6"
=======
<<<<<<< HEAD
                  className="bg-white rounded-lg shadow-lg p-6 text-center"
                >
                  <benefit.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
=======
>>>>>>> main
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {job.department}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <GraduationCap className="w-4 h-4 mr-1" />
                          {job.experience}
                        </div>
                      </div>
                    </div>
                    <button className="mt-4 lg:mt-0 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                      Apply Now
                    </button>
                  </div>
<<<<<<< HEAD
                  
                  <p className="text-gray-700 mb-6">{job.description}</p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
=======
                  <p className="text-gray-600 mb-6">
                    {job.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
>>>>>>> main
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {job.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start text-sm text-gray-700">
                            <Star className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-9cae
                </motion.div>
              ))}
            </div>
          </div>
<<<<<<< HEAD
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Don't See Your Role?
            </h2>
            <p className="text-xl mb-8">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Send Resume
            </button>
          </div>
        </div>
      </section>
    </div>
=======
        </section>

        {/* Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Benefits & Perks
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We offer comprehensive benefits and perks to support our team members 
                both professionally and personally.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg p-6"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.category}</h3>
                  <ul className="space-y-3">
                    {benefit.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
<<<<<<< HEAD
              <h2 className="text-3xl font-bold mb-6">
                Don't See Your Dream Job?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals. Send us your resume 
                and let us know how you'd like to contribute to our mission.
=======
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Don't See the Right Role?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute.
>>>>>>> main
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Send Resume
                </a>
                <a
                  href="/about"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  Learn About Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
>>>>>>> cursor/website-audit-and-update-with-deployment-9cae
  );
}