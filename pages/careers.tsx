import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Users,
  MapPin,
  Clock,
  DollarSign,
  ArrowRight,
  Heart,
  Star,
  Award,
  Coffee,
  Zap,
  Shield,
  Briefcase,
  GraduationCap,
  Globe,
  CheckCircle
} from 'lucide-react';
import MainLayout from '../src/components/layout/MainLayout';

const jobOpenings = [
  {
    id: 1,
    title: "Senior AI Engineer",
    department: "AI & Machine Learning",
    location: "Remote / New York, NY",
    type: "Full-time",
    experience: "5+ years",
    salary: "$120,000 - $180,000",
    description: "Lead development of cutting-edge AI solutions and machine learning models",
    requirements: [
      "Master's degree in Computer Science or related field",
      "5+ years experience with Python, TensorFlow, PyTorch",
      "Experience with cloud platforms (AWS, Azure, GCP)",
      "Strong background in NLP, computer vision, or deep learning",
      "Experience with MLOps and model deployment"
    ],
    benefits: [
      "Competitive salary and equity",
      "Health, dental, and vision insurance",
      "401(k) with company matching",
      "Flexible work arrangements",
      "Professional development budget"
    ]
  },
  {
    id: 2,
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Remote / San Francisco, CA",
    type: "Full-time",
    experience: "3+ years",
    salary: "$90,000 - $140,000",
    description: "Build scalable web applications and microservices",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "3+ years experience with React, Node.js, TypeScript",
      "Experience with databases (PostgreSQL, MongoDB)",
      "Knowledge of cloud platforms and DevOps practices",
      "Strong problem-solving and communication skills"
    ],
    benefits: [
      "Competitive salary and equity",
      "Health, dental, and vision insurance",
      "401(k) with company matching",
      "Flexible work arrangements",
      "Professional development budget"
    ]
  },
  {
    id: 3,
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote / Austin, TX",
    type: "Full-time",
    experience: "4+ years",
    salary: "$100,000 - $150,000",
    description: "Manage cloud infrastructure and deployment pipelines",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "4+ years experience with AWS, Azure, or GCP",
      "Experience with Docker, Kubernetes, Terraform",
      "Knowledge of CI/CD pipelines and monitoring",
      "Strong scripting skills (Python, Bash)"
    ],
    benefits: [
      "Competitive salary and equity",
      "Health, dental, and vision insurance",
      "401(k) with company matching",
      "Flexible work arrangements",
      "Professional development budget"
    ]
  },
  {
    id: 4,
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote / Seattle, WA",
    type: "Full-time",
    experience: "3+ years",
    salary: "$80,000 - $120,000",
    description: "Design intuitive and accessible user experiences",
    requirements: [
      "Bachelor's degree in Design or related field",
      "3+ years experience with Figma, Sketch, Adobe Creative Suite",
      "Portfolio demonstrating user-centered design",
      "Experience with design systems and accessibility",
      "Strong collaboration and communication skills"
    ],
    benefits: [
      "Competitive salary and equity",
      "Health, dental, and vision insurance",
      "401(k) with company matching",
      "Flexible work arrangements",
      "Professional development budget"
    ]
  }
];

const companyValues = [
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork and open communication"
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We encourage creative thinking and embrace new technologies"
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We maintain the highest ethical standards in everything we do"
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We're passionate about technology and making a positive impact"
  }
];

const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Compensation",
    description: "Market-leading salaries and equity participation"
  },
  {
    icon: Shield,
    title: "Health & Wellness",
    description: "Comprehensive health, dental, and vision insurance"
  },
  {
    icon: Clock,
    title: "Work-Life Balance",
    description: "Flexible hours and remote work options"
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description: "Professional development budget and conference attendance"
  },
  {
    icon: Coffee,
    title: "Office Perks",
    description: "Free meals, snacks, and team building activities"
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Work on projects that make a difference worldwide"
  }
];

export default function CareersPage() {
  return (
    <MainLayout
      title="Careers - Zion Tech Group"
      description="Join our team of talented professionals building the future of technology. Explore career opportunities at Zion Tech Group."
      keywords="careers, jobs, employment, technology careers, AI jobs, software engineering jobs"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Join Our{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Amazing Team
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Build the future of technology with us. We're looking for passionate, 
                talented individuals who want to make a real impact in the world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#jobs" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  View Open Positions
                </Link>
                <Link href="#culture" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Learn About Culture
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Company Values Section */}
        <section id="culture" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Values
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                These core values guide everything we do and shape our company culture.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-blue-600 mb-4 flex justify-center">
                      <IconComponent className="w-12 h-12" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Benefits & Perks
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We offer comprehensive benefits and perks to support our team members 
                both personally and professionally.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-purple-600 mb-4">
                      <IconComponent className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Job Openings Section */}
        <section id="jobs" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Open Positions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our current job openings and find the perfect role for you.
              </p>
            </motion.div>

            <div className="space-y-8">
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={job.id}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-2" />
                          {job.department}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 mr-2" />
                          {job.experience}
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="w-4 h-4 mr-2" />
                          {job.salary}
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{job.description}</p>
                    </div>
                    <div className="lg:ml-8">
                      <Link
                        href={`/contact?subject=Application for ${job.title}`}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                      >
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Requirements</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Benefits</h4>
                      <ul className="space-y-2">
                        {job.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
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
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Don't See the Right Role?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals. Send us your resume 
                and let us know how you'd like to contribute to our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="text-center sm:text-left">
                  <p className="text-blue-100 mb-1">📧 <strong>Email:</strong> careers@ziontechgroup.com</p>
                  <p className="text-blue-100">📞 <strong>Call:</strong> +1 302 464 0950</p>
                </div>
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Send Resume
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}