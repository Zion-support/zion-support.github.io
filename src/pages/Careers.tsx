import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign, 
  Heart, 
  Zap, 
  Globe, 
  Award,
  ArrowRight,
  CheckCircle,
  Star,
  Building2,
  GraduationCap,
  Users2,
  Target,
  Lightbulb,
  Shield,
  Code,
  Brain
} from 'lucide-react';

const Careers: React.FC = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Senior AI Engineer",
      department: "Artificial Intelligence",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      salary: "$120,000 - $180,000",
      experience: "5+ years",
      description: "Lead the development of cutting-edge AI solutions and autonomous business platforms.",
      requirements: [
        "Expert in Python, TensorFlow, PyTorch",
        "Experience with large language models",
        "Strong background in machine learning",
        "Experience with cloud platforms (AWS, Azure, GCP)"
      ]
    },
    {
      id: 2,
      title: "Full-Stack Developer",
      department: "Software Development",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      salary: "$90,000 - $140,000",
      experience: "3+ years",
      description: "Build scalable web applications and microservices using modern technologies.",
      requirements: [
        "Proficient in React, Node.js, TypeScript",
        "Experience with cloud-native development",
        "Knowledge of microservices architecture",
        "Experience with CI/CD pipelines"
      ]
    },
    {
      id: 3,
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      salary: "$100,000 - $150,000",
      experience: "4+ years",
      description: "Design and maintain scalable cloud infrastructure and deployment pipelines.",
      requirements: [
        "Expert in AWS, Docker, Kubernetes",
        "Experience with Terraform and Ansible",
        "Strong knowledge of CI/CD tools",
        "Experience with monitoring and logging"
      ]
    },
    {
      id: 4,
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      salary: "$110,000 - $160,000",
      experience: "4+ years",
      description: "Protect our systems and clients with advanced security solutions.",
      requirements: [
        "Certified in CISSP, CEH, or similar",
        "Experience with penetration testing",
        "Knowledge of compliance frameworks",
        "Experience with security tools and automation"
      ]
    },
    {
      id: 5,
      title: "Business Development Manager",
      department: "Sales & Marketing",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      salary: "$80,000 - $120,000 + Commission",
      experience: "3+ years",
      description: "Drive business growth through strategic partnerships and client acquisition.",
      requirements: [
        "Proven track record in B2B sales",
        "Experience in technology services",
        "Strong communication and presentation skills",
        "Experience with CRM systems"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, dental, vision, and wellness programs"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Flexible Work",
      description: "Remote work options, flexible hours, and unlimited PTO"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Learning & Growth",
      description: "Professional development budget, conferences, and certifications"
    },
    {
      icon: <Users2 className="w-6 h-6" />,
      title: "Team Culture",
      description: "Collaborative environment, team events, and mentorship programs"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Career Advancement",
      description: "Clear career paths, promotion opportunities, and skill development"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Recognition",
      description: "Performance bonuses, awards, and recognition programs"
    }
  ];

  const values = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Innovation First",
      description: "We push boundaries and embrace cutting-edge technologies"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "People-Centric",
      description: "Our team is our greatest asset and we invest in their growth"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Excellence",
      description: "We deliver exceptional quality in everything we do"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Impact",
      description: "We solve real-world problems that make a difference"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Build the future of technology with a team that values innovation, 
              creativity, and making a real impact in the world.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <Users className="w-4 h-4" />
                <span>50+ Team Members</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <Globe className="w-4 h-4" />
                <span>Remote First</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <Award className="w-4 h-4" />
                <span>Industry Leader</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Culture & Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              At Zion Tech Group, we believe in fostering an environment where 
              innovation thrives and every team member can reach their full potential.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600 dark:text-blue-400">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Why Work With Us
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We offer competitive benefits and a supportive environment that 
              helps you thrive both personally and professionally.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-blue-600 dark:text-blue-400">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Ready to join our team? Explore our current openings and find 
              the perfect role for your skills and career goals.
            </p>
          </motion.div>

          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {job.title}
                      </h3>
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm px-3 py-1 rounded-full">
                        {job.department}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-4 h-4" />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Briefcase className="w-4 h-4" />
                        <span>{job.experience}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {job.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Key Requirements:
                      </h4>
                      <ul className="space-y-1">
                        {job.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="lg:flex-shrink-0">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2">
                      <span>Apply Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Don't see a position that fits? We're always looking for talented individuals!
            </p>
            <button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors">
              Send Open Application
            </button>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Join Our Team?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how you can contribute to our mission of 
              revolutionizing technology and making a global impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors">
                Schedule a Call
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-medium transition-colors">
                Send Resume
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
