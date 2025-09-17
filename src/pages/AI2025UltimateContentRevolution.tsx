import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Target, TrendingUp, Users, Award, CheckCircle, Star } from 'lucide-react';

const AI2025UltimateContentRevolution = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Helmet>
        <title>AI 2025: Ultimate Content Revolution - Transform Your Business</title>
        <meta name="description" content="Discover the revolutionary AI content transformation that's generating 50,000% ROI for businesses worldwide. Join the content revolution today." />
        <meta name="keywords" content="AI content, content revolution, business transformation, ROI, 2025" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-semibold mb-6">
              <Star className="w-4 h-4 mr-2" />
              Revolutionary Content Platform
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI 2025: Ultimate
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> Content Revolution</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with our revolutionary AI content platform that's generating 
              <span className="text-yellow-400 font-bold"> 50,000% ROI</span> for enterprises worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300"
              >
                Start Your Revolution
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-all duration-300"
              >
                Watch Demo
              </motion.button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">50,000%</div>
                <div className="text-gray-300">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">10M+</div>
                <div className="text-gray-300">Content Pieces Generated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
                <div className="text-gray-300">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered content platform delivers unprecedented results with cutting-edge technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Lightning-Fast Generation",
                description: "Generate high-quality content in seconds, not hours. Our AI processes 10,000 words per minute.",
                color: "from-yellow-400 to-orange-500"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Precision Targeting",
                description: "AI-powered audience analysis ensures every piece of content hits the perfect target.",
                color: "from-blue-400 to-purple-500"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "ROI Optimization",
                description: "Real-time analytics and optimization algorithms maximize your content's performance.",
                color: "from-green-400 to-teal-500"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Multi-Channel Distribution",
                description: "Automatically distribute content across all your marketing channels simultaneously.",
                color: "from-pink-400 to-rose-500"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Award-Winning Quality",
                description: "Content that wins industry awards and drives measurable business results.",
                color: "from-purple-400 to-indigo-500"
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "100% Compliance",
                description: "Built-in compliance checks ensure all content meets industry standards and regulations.",
                color: "from-cyan-400 to-blue-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} text-white mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how leading companies are transforming their business with our AI content platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                company: "TechCorp Global",
                industry: "Technology",
                result: "300% increase in lead generation",
                quote: "This platform revolutionized our content strategy. We've never seen such consistent results.",
                author: "Sarah Johnson, CMO"
              },
              {
                company: "FinanceFirst",
                industry: "Financial Services",
                result: "500% boost in customer engagement",
                quote: "The AI understands our audience better than our human writers. Incredible technology.",
                author: "Michael Chen, VP Marketing"
              },
              {
                company: "HealthTech Solutions",
                industry: "Healthcare",
                result: "250% improvement in conversion rates",
                quote: "Compliance and quality combined with speed. This is the future of content marketing.",
                author: "Dr. Emily Rodriguez, Head of Marketing"
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/20"
              >
                <div className="text-yellow-400 font-bold text-lg mb-2">{story.result}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{story.company}</h3>
                <p className="text-gray-300 mb-6 italic">"{story.quote}"</p>
                <div className="text-sm text-gray-400">{story.author}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-400/20 to-orange-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Join the Revolution?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't let your competitors get ahead. Start your AI content transformation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-12 py-4 rounded-lg font-bold text-xl hover:shadow-2xl transition-all duration-300"
              >
                Start Free Trial
                <ArrowRight className="inline-block ml-2 w-6 h-6" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-12 py-4 rounded-lg font-bold text-xl hover:bg-white hover:text-black transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AI2025UltimateContentRevolution;