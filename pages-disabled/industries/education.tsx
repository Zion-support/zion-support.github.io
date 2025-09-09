import * as React from 'react'
import Link from 'next/link'
import {
  BookOpen, 
  Brain, 
  Users, 
  CheckCircle,
  ArrowRight,
  GraduationCap,
  BarChart3,
  FileText,
  Video,
  Globe,
  Database
} from 'lucide-react'
import Layout from '../../components/Layout'

const services = [
  {
    title: 'Learning Management Systems',
    description: 'Comprehensive LMS platforms for educational institutions and corporate training.',
    icon: BookOpen,
    features: [
      'Course management',
      'Student tracking',
      'Assessment tools',
      'Progress analytics'
    ]
  },
  {
    title: 'Virtual Classrooms',
    description: 'Advanced virtual learning environments with interactive features.',
    icon: Video,
    features: [
      'Live video streaming',
      'Interactive whiteboards',
      'Breakout rooms',
      'Recording capabilities'
    ]
  },
  {
    title: 'Educational AI Tutors',
    description: 'AI-powered tutoring systems for personalized learning experiences.',
    icon: Brain,
    features: [
      'Adaptive learning paths',
      'Intelligent tutoring',
      'Performance analytics',
      'Personalized recommendations'
    ]
  },
  {
    title: 'Student Information Systems',
    description: 'Comprehensive SIS solutions for managing student data and records.',
    icon: Database,
    features: [
      'Student enrollment',
      'Grade management',
      'Attendance tracking',
      'Parent communication'
    ]
  }
];

const benefits = [
  {
    title: 'Improved Learning Outcomes',
    description: 'Technology-enhanced learning leads to better student engagement and academic performance.',
    icon: BarChart3
  },
  {
    title: 'Accessibility',
    description: 'Make education accessible to students with diverse learning needs and abilities.',
    icon: Users
  },
  {
    title: 'Cost Efficiency',
    description: 'Reduce operational costs while improving educational quality and reach.',
    icon: CheckCircle
  },
  {
    title: 'Global Reach',
    description: 'Expand educational opportunities to students worldwide through online platforms.',
    icon: Globe
  }
];

export default function EducationPage() {
  return (
    <Layout
      title="Education Technology Solutions - Zion Tech Group"
      description="Transform education with cutting-edge technology solutions including LMS, virtual classrooms, AI tutors, and student information systems."
    >
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Education Technology Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Transform education with cutting-edge technology solutions designed for modern learning environments
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Education Services
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We provide comprehensive technology solutions for educational institutions, 
                  from K-12 schools to universities and corporate training programs.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <service.icon className="w-8 h-8 text-blue-600 mr-3" />
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-500">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-2xl shadow-xl p-8 mb-16"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  Why Choose Our Education Solutions?
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="text-center">
                      <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <benefit.icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Ready to Transform Education?
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our technology solutions can enhance your educational institution's capabilities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link
                    href="/ai-services"
                    className="bg-white text-blue-600 px-8 py-4 rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
  );
};