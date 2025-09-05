import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { MapPin, Clock, Users, Heart, Zap, Award, BookOpen, Coffee, Laptop, Globe, ArrowRight, CheckCircle } from 'lucide-react';;

const benefits = [
  {
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
];

const openPositions = [
  {
    title: "Senior AI Engineer",
    department: "AI & Machine Learning",
    location: "Remote / San Francisco",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead AI solution development and machine learning model implementation."
  },
  {
    title: "Cloud Solutions Architect",
    department: "Cloud & Infrastructure",
    location: "Remote / New York",
    type: "Full-time",
    experience: "7+ years",
    description: "Design and implement scalable cloud solutions for enterprise clients."
  },
  {
    title: "Cybersecurity Specialist",
    department: "Security",
    location: "Remote / Austin",
    type: "Full-time",
    experience: "4+ years",
    description: "Protect client systems and implement advanced security measures."
  },
  {
    title: "Frontend Developer",
    department: "Engineering",
    location: "Remote / Seattle",
    type: "Full-time",
    experience: "3+ years",
    description: "Build beautiful, responsive user interfaces for our applications."
  },
  {
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote / Chicago",
    type: "Full-time",
    experience: "4+ years",
    description: "Automate deployment processes and maintain cloud infrastructure."
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "Remote / Boston",
    type: "Full-time",
    experience: "5+ years",
    description: "Drive product strategy and work with cross-functional teams."
  }
];

const values = [
  {
    title: "Innovation First",
    description: "We encourage creative thinking and embrace new technologies to solve complex problems."
  },
  {
    title: "Collaboration",
    description: "We believe in the power of teamwork and diverse perspectives to achieve great results."
  },
  {
    title: "Continuous Learning",
    description: "We invest in our people's growth and provide opportunities for professional development."
  },
  {
    title: "Client Success",
    description: "Our success is measured by our clients' success and satisfaction with our solutions."
  }
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our innovative team and build the future of technology. Explore career opportunities at Zion Tech Group." />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Build the future of technology with a team that values innovation, collaboration, and growth
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>50+ Team Members</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                <span>Remote First</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span>Great Benefits</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Join Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-600">
                We're building something special, and we want you to be part of it
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-600">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Open Positions
              </h2>
              <p className="text-xl text-gray-600">
                Find your next opportunity with us
              </p>
            </div>

            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                  whileHover={{ y: -2 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {position.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {position.experience}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">
                        {position.description}
                      </p>
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                        {position.department}
                      </span>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6">
                      <Link
                        href={`/careers/${position.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Apply Now
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">
                Don't see a position that fits? We're always looking for talented people.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Send Us Your Resume
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}