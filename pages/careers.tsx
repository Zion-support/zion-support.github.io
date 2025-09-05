<<<<<<< HEAD
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { MapPin, Clock, Users, Heart, Zap, Award, BookOpen, Coffee, Laptop, Globe, ArrowRight, CheckCircle } from 'lucide-react';;
=======
import React from 'react';
<<<<<<< HEAD
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, 
  Clock, 
  Users, 
  Heart, 
  Zap, 
  Award, 
  BookOpen, 
  Coffee,
  Laptop,
  Globe,
  ArrowRight,
  CheckCircle
=======
import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Users,
  MapPin,
  Clock,
  Briefcase,
  GraduationCap,
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Heart,
  Zap,
  Target,
  Award,
  Building,
  Rocket
>>>>>>> main
} from 'lucide-react';
>>>>>>> main

const jobOpenings = [
  {
<<<<<<< HEAD
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance, mental health support, and wellness programs"
  },
  {
    icon: Zap,
    title: "Flexible Work",
    description: "Remote work options, flexible hours, and work-life balance initiatives"
  },
  {
    icon: BookOpen,
    title: "Learning & Development",
    description: "Professional development budget, training programs, and conference attendance"
  },
  {
    icon: Award,
    title: "Career Growth",
    description: "Clear career paths, mentorship programs, and advancement opportunities"
  },
  {
    icon: Coffee,
    title: "Great Culture",
    description: "Inclusive environment, team events, and collaborative atmosphere"
  },
  {
    icon: Laptop,
    title: "Modern Tools",
    description: "Latest technology, equipment, and software to do your best work"
  }
;];

const openPositions = [;
  {}
    title: "Senior AI Engineer","
    department: "AI & Machine Learning","
    location: "Remote / San Francisco","
    type: "Full-time","
    experience: "5+ years","
    description: "Lead AI solution development and machine learning model implementation."";
  },
  {}
    title: "Cloud Solutions Architect","
    department: "Cloud & Infrastructure","
    location: "Remote / New York","
    type: "Full-time","
    experience: "7+ years","
    description: "Design and implement scalable cloud solutions for enterprise clients."";
  },
  {}
    title: "Cybersecurity Specialist","
    department: "Security","
    location: "Remote / Austin","
    type: "Full-time","
    experience: "4+ years","
    description: "Protect client systems and implement advanced security measures."";
  },
  {}
    title: "Frontend Developer","
    department: "Engineering","
    location: "Remote / Seattle","
    type: "Full-time","
    experience: "3+ years","
    description: "Build beautiful, responsive user interfaces for our applications.""
  },
  {}
    title: "DevOps Engineer","
    department: "Infrastructure","
    location: "Remote / Chicago","
    type: "Full-time","
    experience: "4+ years","
    description: "Automate deployment processes and maintain cloud infrastructure."";
  },
  {}
    title: "Product Manager","
    department: "Product","
    location: "Remote / Boston","
    type: "Full-time","
    experience: "5+ years","
    description: "Drive product strategy and work with cross-functional teams."";
=======
    id: 1,
    title: "Senior AI Engineer",
    department: "Engineering",
    location: "Remote / Delaware",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead the development of cutting-edge AI solutions and machine learning models.",
    requirements: [
      "Master's degree in Computer Science or related field",
      "5+ years experience in AI/ML development",
      "Proficiency in Python, TensorFlow, PyTorch",
      "Experience with cloud platforms (AWS, GCP, Azure)",
      "Strong problem-solving and communication skills"
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
    id: 2,
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Remote / Delaware",
    type: "Full-time",
    experience: "3+ years",
    description: "Build scalable web applications and microservices using modern technologies.",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "3+ years experience in full-stack development",
      "Proficiency in React, Node.js, TypeScript",
      "Experience with databases (PostgreSQL, MongoDB)",
      "Knowledge of cloud services and DevOps practices"
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
      "Proficiency in Figma, Sketch, Adobe Creative Suite",
      "Experience with user research and testing",
      "Portfolio demonstrating strong design skills"
    ],
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
>>>>>>> main
  }
;];

const values = [;
  {}
    title: "Innovation First","
    description: "We encourage creative thinking and embrace new technologies to solve complex problems."";
  },
  {}
    title: "Collaboration","
    description: "We believe in the power of teamwork and diverse perspectives to achieve great results."";
  },
  {}
    title: "Continuous Learning","
    description: "We invest in our people's growth and provide opportunities for professional development."";
  },
  {}
    title: "Client Success","
    description: "Our success is measured by our clients' success and satisfaction with our solutions."";
  }
;];

export default function CareersPage() {
<<<<<<< HEAD
  return (;
    <div className="min-h-screen bg-gray-50">";
      <Head>;
        <title>Careers - Zion Tech Group</title>;
        <meta name="description" content="Join our innovative team and build the future of technology. Explore career opportunities at Zion Tech Group." />";
      </Head>;

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">"
        <div className="container mx-auto px-4">";
          <div className="max-w-4xl mx-auto text-center">";
            <h1 className="text-5xl font-bold mb-6">");
              Join Our Team;
            </h1>;
            <p className="text-xl text-blue-100 mb-8">";
              Build the future of technology with a team that values innovation, collaboration, and growth,
            </p>;
            <div className="flex flex-wrap gap-4 justify-center">";
              <div className="flex items-center gap-2">";
                <Users className="w-5 h-5" />";
                <span>50+ Team Members</span>;
              </div>;
              <div className="flex items-center gap-2">";
                <Globe className="w-5 h-5" />";
                <span>Remote First</span>;
              </div>;
              <div className="flex items-center gap-2">";
                <Award className="w-5 h-5" />";
                <span>Great Benefits</span>;
              </div>;
            </div>;
          </div>;
        </div>;
      </section>;

      {/* Why Join Us */}
      <section className="py-16">"
        <div className="container mx-auto px-4">";
          <div className="max-w-6xl mx-auto">";
            <div className="text-center mb-12">";
              <h2 className="text-3xl font-bold text-gray-900 mb-4">";
                Why Join Zion Tech Group?;
              </h2>;
              <p className="text-xl text-gray-600">";
                We're building something special, and we want you to be part of it',
              </p>;
            </div>;

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">";
              {benefits.map((benefit, index) => (,
                <motion.div}),
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow""
                  whileHover={{ y: -5 }}
                >,
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">";
                    <benefit.icon className="w-6 h-6 text-blue-600" />";
                  </div>;
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">";
                    {benefit.title}
                  </h3>,
                  <p className="text-gray-600">";
                    {benefit.description}
                  </p>,
                </motion.div>;
              ))}
            </div>,
          </div>;
        </div>;
      </section>;

      {/* Our Values */}
      <section className="py-16 bg-white">"
        <div className="container mx-auto px-4">";
          <div className="max-w-6xl mx-auto">";
            <div className="text-center mb-12">";
              <h2 className="text-3xl font-bold text-gray-900 mb-4">";
                Our Values;
              </h2>;
              <p className="text-xl text-gray-600">";
                The principles that guide everything we do;
              </p>;
            </div>;

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">";
              {values.map((value, index) => (,
                <motion.div}),
                  key={index}
                  className="flex items-start gap-4""
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >,
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">";
                    <CheckCircle className="w-5 h-5 text-white" />";
                  </div>;
                  <div>;
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">";
                      {value.title}
                    </h3>,
                    <p className="text-gray-600">";
                      {value.description}
                    </p>,
                  </div>;
                </motion.div>;
=======
  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Join Our Team
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Be part of a dynamic team that's shaping the future of technology. 
                We're looking for passionate individuals who want to make a real impact.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
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
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg shadow-lg p-6 text-center"
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

        {/* Job Openings */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
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
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-lg shadow-lg p-6"
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
                  
                  <p className="text-gray-700 mb-6">{job.description}</p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
                </motion.div>
>>>>>>> main
              ))}
            </div>,
          </div>;
        </div>;
      </section>;

<<<<<<< HEAD
      {/* Open Positions */}
      <section className="py-16">"
        <div className="container mx-auto px-4">";
          <div className="max-w-6xl mx-auto">";
            <div className="text-center mb-12">";
              <h2 className="text-3xl font-bold text-gray-900 mb-4">";
                Open Positions;
              </h2>;
              <p className="text-xl text-gray-600">";
                Find your next opportunity with us;
              </p>;
            </div>;

            <div className="space-y-6">";
              {openPositions.map((position, index) => (,
                <motion.div}),
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow""
                  whileHover={{ y: -2 }}
                >,
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">";
                    <div className="flex-1">";
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">";
                        {position.title}
                      </h3>,
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">";
                        <span className="flex items-center gap-1">";
                          <MapPin className="w-4 h-4" />";
                          {position.location}
                        </span>,
                        <span className="flex items-center gap-1">";
                          <Clock className="w-4 h-4" />";
                          {position.type}
                        </span>,
                        <span className="flex items-center gap-1">";
                          <Users className="w-4 h-4" />";
                          {position.experience}
                        </span>,
                      </div>;
                      <p className="text-gray-600 mb-4">";
                        {position.description}
                      </p>,
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">";
                        {position.department}
                      </span>,
                    </div>;
                    <div className="mt-4 md:mt-0 md:ml-6">";
                      <Link;
                        href={`/careers/${position.title.toLowerCase().replace(/\s+/g, '-')}`}',
                        className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"";
                      >;
                        Apply Now;
                        <ArrowRight className="w-4 h-4" />";
                      </Link>;
                    </div>;
                  </div>;
                </motion.div>;
=======
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
>>>>>>> main
              ))}
            </div>,

<<<<<<< HEAD
            <div className="text-center mt-12">";
              <p className="text-gray-600 mb-4">";
                Don't see a position that fits? We're always looking for talented people.';
              </p>;
              <Link;
                href="/contact"";
                className="inline-block bg-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors"";
              >;
                Send Us Your Resume;
              </Link>;
            </div>;
          </div>;
        </div>;
      </section>;
    </div>;
=======
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Don't See Your Dream Job?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals. Send us your resume 
                and let us know how you'd like to contribute to our mission.
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
    </MainLayout>
>>>>>>> main
  );
}