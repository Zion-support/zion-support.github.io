import React from 'react';
import { Metadata } from 'next';
import { motion } from 'framer-motion';
import { 
  Brain, Users, TrendingUp, Clock, Globe, Shield, Zap, 
  ArrowRight, Calendar, User, Tag, Clock as ClockIcon,
  Target, BarChart3, Lightbulb, Rocket, CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const metadata: Metadata = {
  title: 'AI 2025: The Future of Work Revolution - Complete Transformation Guide',
  description: 'Discover how AI is revolutionizing the future of work in 2025. Learn about autonomous workflows, human-AI collaboration, and the transformation of traditional job roles.',
  keywords: 'AI future of work, workplace transformation, human-AI collaboration, autonomous workflows, job automation, workforce evolution',
  openGraph: {
    title: 'AI 2025: The Future of Work Revolution',
    description: 'Complete guide to understanding how AI is transforming the workplace and creating new opportunities for human-AI collaboration.',
    type: 'article',
    publishedTime: '2025-01-27T00:00:00.000Z',
    authors: ['Zion Tech Group'],
  },
};

const AIFutureOfWork2025 = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const keyInsights = [
    {
      icon: Brain,
      title: "Autonomous Workflows",
      description: "AI agents handling complex decision-making processes autonomously",
      impact: "85% reduction in manual tasks"
    },
    {
      icon: Users,
      title: "Human-AI Collaboration",
      description: "Seamless integration between human creativity and AI efficiency",
      impact: "300% productivity increase"
    },
    {
      icon: TrendingUp,
      title: "Skill Evolution",
      description: "New roles emerging focused on AI oversight and creative problem-solving",
      impact: "2.3M new jobs created"
    },
    {
      icon: Shield,
      title: "Ethical AI Governance",
      description: "Comprehensive frameworks ensuring responsible AI deployment",
      impact: "99.9% compliance rate"
    }
  ];

  const transformationAreas = [
    {
      title: "Manufacturing & Production",
      description: "Fully autonomous production lines with predictive maintenance",
      technologies: ["Computer Vision", "Predictive Analytics", "Robotic Process Automation"],
      benefits: ["60% cost reduction", "Zero downtime", "Quality assurance"]
    },
    {
      title: "Healthcare & Medical",
      description: "AI-assisted diagnosis and personalized treatment plans",
      technologies: ["Medical AI", "Neural Networks", "Predictive Medicine"],
      benefits: ["90% accuracy improvement", "Faster diagnosis", "Personalized care"]
    },
    {
      title: "Financial Services",
      description: "Autonomous trading, fraud detection, and risk management",
      technologies: ["Algorithmic Trading", "Risk Analytics", "Fraud Detection"],
      benefits: ["Real-time decisions", "99.9% fraud prevention", "Enhanced security"]
    },
    {
      title: "Customer Service",
      description: "Intelligent chatbots and virtual assistants handling complex queries",
      technologies: ["Natural Language Processing", "Sentiment Analysis", "Knowledge Graphs"],
      benefits: ["24/7 availability", "Instant responses", "Human escalation"]
    }
  ];

  const futureRoles = [
    {
      title: "AI Ethics Officer",
      description: "Ensuring responsible AI deployment and governance",
      skills: ["Ethics", "AI Governance", "Risk Assessment"],
      demand: "High"
    },
    {
      title: "Human-AI Interaction Designer",
      description: "Designing seamless collaboration interfaces",
      skills: ["UX Design", "AI Systems", "Human Psychology"],
      demand: "Very High"
    },
    {
      title: "AI Training Specialist",
      description: "Teaching AI systems and improving their performance",
      skills: ["Machine Learning", "Data Science", "Training Methods"],
      demand: "High"
    },
    {
      title: "Autonomous Systems Manager",
      description: "Overseeing and optimizing AI-powered workflows",
      skills: ["Systems Management", "AI Operations", "Performance Optimization"],
      demand: "Very High"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-3 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-8">
              <Calendar className="w-4 h-4" />
              <span>January 27, 2025</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                AI 2025: The Future of Work
              </span>
              <br />
              <span className="text-white">Revolution</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
              Discover how artificial intelligence is fundamentally transforming the workplace, creating new opportunities for human-AI collaboration, and reshaping the future of employment.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>By Zion Tech Group</span>
              </div>
              <div className="flex items-center space-x-2">
                <ClockIcon className="w-4 h-4" />
                <span>15 min read</span>
              </div>
              <div className="flex items-center space-x-2">
                <Tag className="w-4 h-4" />
                <span>AI, Future of Work, Automation</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Insights */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Key Insights: The Work Revolution
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Four critical areas where AI is reshaping how we work and collaborate
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {keyInsights.map((insight, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-8 border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mb-6">
                  <insight.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {insight.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {insight.description}
                </p>
                <div className="text-cyan-400 font-semibold text-sm">
                  {insight.impact}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industry Transformations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Industry Transformations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              How different industries are leveraging AI to revolutionize their operations
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {transformationAreas.map((area, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-8 border border-gray-700/30"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {area.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {area.description}
                    </p>
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-cyan-400 font-semibold mb-2">Key Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {area.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-cyan-400 font-semibold mb-4">Key Benefits:</h4>
                    <div className="space-y-2">
                      {area.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Future Roles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Emerging Job Roles
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              New career opportunities created by the AI revolution
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {futureRoles.map((role, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-8 border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">
                    {role.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    role.demand === 'Very High' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {role.demand}
                  </span>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {role.description}
                </p>
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-2">Required Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {role.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Workforce?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Discover how our AI solutions can revolutionize your organization and prepare your team for the future of work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services/ai-automation"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center space-x-2"
              >
                <span>Explore AI Solutions</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="border border-cyan-500/50 text-cyan-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-cyan-500/10 hover:border-cyan-500 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Get Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIFutureOfWork2025;