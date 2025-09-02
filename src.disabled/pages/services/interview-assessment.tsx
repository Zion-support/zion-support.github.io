import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Brain, 
  Target, 
  BarChart3, 
  Zap, 
  ArrowRight,
  Clock,
  Star,
  Lightbulb,
  CheckCircle,
  Eye,
  Globe,
  PieChart,
  Monitor,
  FileText,
  Share2,
  Video,
  Mic
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function InterviewAssessment() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Assessment",
      description: "Advanced AI algorithms evaluate candidate responses and provide objective scoring."
    },
    {
      icon: Video,
      title: "Video Interview Analysis",
      description: "Analyze facial expressions, tone, and body language for comprehensive candidate evaluation."
    },
    {
      icon: Target,
      title: "Customizable Assessments",
      description: "Create role-specific assessments tailored to your organization's needs and requirements."
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Get detailed insights into candidate performance with comprehensive analytics and reporting."
    },
    {
      icon: Zap,
      title: "Automated Screening",
      description: "Streamline your hiring process with automated candidate screening and ranking."
    },
    {
      icon: Users,
      title: "Bias-Free Evaluation",
      description: "Ensure fair and objective candidate evaluation with AI-powered assessment tools."
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Better Hiring Decisions",
      description: "Make more informed hiring decisions with objective, data-driven candidate assessments."
    },
    {
      icon: Lightbulb,
      title: "Reduced Bias",
      description: "Eliminate unconscious bias in hiring with AI-powered objective evaluation."
    },
    {
      icon: Clock,
      title: "Faster Hiring",
      description: "Accelerate your hiring process with automated screening and assessment."
    },
    {
      icon: Star,
      title: "Improved Quality",
      description: "Hire higher-quality candidates with comprehensive assessment and evaluation."
    }
  ];

  const assessmentTypes = [
    {
      title: "Technical Skills",
      description: "Evaluate coding abilities, problem-solving skills, and technical knowledge."
    },
    {
      title: "Soft Skills",
      description: "Assess communication, teamwork, leadership, and interpersonal skills."
    },
    {
      title: "Cultural Fit",
      description: "Evaluate alignment with company values and organizational culture."
    },
    {
      title: "Role-Specific",
      description: "Custom assessments designed for specific job roles and requirements."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white/20 rounded-full">
                <Users className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Interview Assessment
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-indigo-100">
              Transform your hiring process with AI-powered interview assessment and candidate evaluation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-600 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Assessment Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform provides comprehensive interview assessment capabilities to improve your hiring process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-lg mb-6">
                  <feature.icon className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our AI Interview Assessment?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the benefits of AI-powered assessment that improves hiring quality and efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg">
                    <benefit.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Assessment Types
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform supports various assessment types to meet your hiring needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {assessmentTypes.map((assessmentType, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-xl border border-gray-200"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {assessmentType.title}
                </h3>
                <p className="text-gray-600">
                  {assessmentType.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Hiring Process?
            </h2>
            <p className="text-xl mb-8 text-indigo-100 max-w-3xl mx-auto">
              Join companies that are already leveraging AI to make better hiring decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-colors"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}