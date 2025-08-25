import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Brain, 
  Target, 
  Zap, 
  Shield, 
  Globe, 
  Lock,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Cpu,
  Network,
  Cloud,
  Lightbulb,
  Rocket,
  Gauge,
  Activity,
  PieChart,
  LineChart,
  Database,
  Settings,
  Monitor,
  Award,
  Clock,
  Star
} from 'lucide-react';

const AIAutonomousEducationProfessor: React.FC = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "Intelligent Curriculum Design",
      description: "AI-powered curriculum creation and adaptive learning paths"
    },
    {
      icon: BookOpen,
      title: "Personalized Learning",
      description: "Individualized education plans based on student performance and preferences"
    },
    {
      icon: Brain,
      title: "Adaptive Assessment",
      description: "Intelligent testing and evaluation with real-time feedback"
    },
    {
      icon: Users,
      title: "Student Engagement",
      description: "Interactive learning experiences and gamification elements"
    },
    {
      icon: Globe,
      title: "Global Accessibility",
      description: "Multi-language support and worldwide educational access"
    },
    {
      icon: Shield,
      title: "Academic Integrity",
      description: "Plagiarism detection and academic honesty monitoring"
    }
  ];

  const benefits = [
    "Personalized learning experiences for every student",
    "24/7 availability for continuous education",
    "Adaptive curriculum that evolves with student progress",
    "Real-time performance analytics and insights",
    "Reduced administrative workload for educators",
    "Improved student engagement and retention rates",
    "Scalable education delivery to any number of students",
    "Consistent quality across all educational content"
  ];

  const learningModules = [
    {
      title: "Core Subjects",
      description: "Mathematics, Science, Language Arts, and Social Studies",
      icon: BookOpen
    },
    {
      title: "Advanced Topics",
      description: "STEM, Computer Science, and Specialized Skills",
      icon: Brain
    },
    {
      title: "Practical Applications",
      description: "Real-world projects and hands-on learning",
      icon: Target
    },
    {
      title: "Assessment & Feedback",
      description: "Continuous evaluation and improvement tracking",
      icon: Gauge
    }
  ];

  const useCases = [
    {
      title: "K-12 Education",
      description: "Comprehensive primary and secondary education support with personalized learning paths",
      icon: "🎓"
    },
    {
      title: "Higher Education",
      description: "University-level courses and degree programs with advanced analytics",
      icon: "🏛️"
    },
    {
      title: "Corporate Training",
      description: "Professional development and skill-building for organizations",
      icon: "💼"
    },
    {
      title: "Special Needs Education",
      description: "Tailored learning experiences for students with diverse learning requirements",
      icon: "🌟"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-amber-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-700 text-white">
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
                <GraduationCap className="w-8 h-8" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI Autonomous Education Professor
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-orange-100">
              Revolutionize education with intelligent, autonomous teaching that adapts to every student's needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
                Watch Demo
              </button>
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced Educational Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI professor combines cutting-edge technology with proven educational methodologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-orange-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-orange-600" />
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

      {/* Learning Modules Section */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Learning Modules
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From foundational concepts to advanced applications, our platform covers all aspects of education
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {learningModules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                    <module.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {module.title}
                  </h3>
                </div>
                <p className="text-gray-600">
                  {module.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose AI Autonomous Education?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience unprecedented efficiency and effectiveness in educational delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Transform Your Educational Experience
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Gauge className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    Educational Performance
                  </h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Learning Speed</span>
                      <span className="font-semibold text-green-600">3x Faster</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Retention Rate</span>
                      <span className="font-semibold text-green-600">85%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Student Engagement</span>
                      <span className="font-semibold text-green-600">90%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Success Rate</span>
                      <span className="font-semibold text-green-600">95%</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Educational Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our AI professor transforms education across various settings
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{useCase.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {useCase.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  {useCase.description}
                </p>
                <button className="text-orange-600 font-semibold hover:text-orange-700 transition-colors flex items-center">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-amber-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Education?
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Join the future of intelligent, autonomous education with Zion Tech Group
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIAutonomousEducationProfessor;