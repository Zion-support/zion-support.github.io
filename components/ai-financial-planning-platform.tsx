import React from 'react',
import Head from 'next/head';
import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, Shield, Zap, Target, BarChart3;
  CheckCircle, Star, Globe, Lock, Smartphone, Monitor;
  Award, MessageCircle, Calculator
 } from 'lucide-react';
export default function AIFinancialPlanningPlatform() {
  const features = null;
                portfolio optimization, and risk management that drives financial success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-xl font-semibold text-lg hover:from-yellow-600 hover:to-amber-700 transition-all duration-200 shadow-lg shadow-yellow-500/25"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='px-8 py-4 border-2 border-yellow-500/30 text-yellow-400 rounded-xl font-semibold text-lg hover:bg-yellow-500/10 transition-all duration-200'                >                  className="px-8 py-4 border-2 border-yellow-500/30 text-yellow-400 rounded-xl font-semibold text-lg hover:bg-yellow-500/10 transition-all duration-200"
                >
                  Watch Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className='py-20 bg-gradient-to-b from-black to-gray-900'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-center mb-16'        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-center mb-16'
            >
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
                Powerful Financial Planning Features
              </h2>
              <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
                Our AI platform combines advanced financial modeling with
                machine learning to deliver comprehensive financial planning and
                wealth management solutions.
              </p>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>              {features.map((feature, index) => (            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful Financial Planning Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our AI platform combines advanced financial modeling with machine learning to deliver 
                comprehensive financial planning and wealth management solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className='bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-yellow-500/30 transition-all duration-300 group'
                >
                  <div className='w-14 h-14 bg-gradient-to-br from-yellow-500/20 to-amber-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'>
                    <div className='text-yellow-400'>{feature.icon}</div>
                  </div>
                  <h3 className='text-xl font-semibold text-white mb-4'>
                    {feature.title}
                  </h3>
                  <p className='text-gray-400 leading-relaxed'>
                    {feature.description}
                  </p>                </motion.div>                >
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-500/20 to-amber-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-yellow-400">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className='py-20 bg-black'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-center mb-16'        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-center mb-16'
            >
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
                Transform Your Financial Future
              </h2>
              <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
                Experience dramatic improvements in financial planning
                efficiency, investment returns, and goal achievement with our
                AI-powered financial planning platform.
              </p>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>              {benefits.map((benefit, index) => (            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transform Your Financial Future
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience dramatic improvements in financial planning efficiency, investment returns, and 
                goal achievement with our AI-powered financial planning platform.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className='bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 hover:border-yellow-500/30 transition-all duration-300 group'
                >
                  <div className='flex items-center space-x-3'>
                    <CheckCircle className='w-5 h-5 text-yellow-400' />
                    <span className='text-white font-medium text-sm'>
                      {benefit}
                    </span>                  </div>                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 hover:border-yellow-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400" />
                    <span className="text-white font-medium text-sm">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className='py-20 bg-gradient-to-b from-black to-gray-900'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-center mb-16'        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-center mb-16'
            >
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
                Comprehensive Financial Planning Solutions
              </h2>
              <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
                From retirement planning to investment management, our platform
                provides AI-powered solutions for every aspect of your financial
                life.
              </p>
            </motion.div>

            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6'>              {useCases.map((useCase, index) => (            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comprehensive Financial Planning Solutions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From retirement planning to investment management, our platform provides AI-powered 
                solutions for every aspect of your financial life.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className='bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 hover:border-yellow-500/30 transition-all duration-300 group text-center'
                >
                  <div className='w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-amber-600/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
                    <Calculator className='w-6 h-6 text-yellow-400' />
                  </div>
                  <span className='text-white font-medium text-sm'>
                    {useCase}
                  </span>                </motion.div>                >
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-amber-600/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Calculator className="w-6 h-6 text-yellow-400" />
                  </div>
                  <span className="text-white font-medium text-sm">{useCase}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-20 bg-gradient-to-r from-yellow-900/20 via-amber-900/20 to-orange-900/20'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>            <motion.div        <section className="py-20 bg-gradient-to-r from-yellow-900/20 via-amber-900/20 to-orange-900/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
                Ready to Transform Your Financial Planning?
              </h2>
              <p className='text-xl text-gray-300 mb-8'>
                Join thousands of individuals that have already revolutionized
                their financial planning with AI automation. Start your free
                trial today.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-xl font-semibold text-lg hover:from-yellow-600 hover:to-amber-700 transition-all duration-200 shadow-lg shadow-yellow-500/25'                >                Ready to Transform Your Financial Planning?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of individuals that have already revolutionized their financial planning 
                with AI automation. Start your free trial today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-xl font-semibold text-lg hover:from-yellow-600 hover:to-amber-700 transition-all duration-200 shadow-lg shadow-yellow-500/25"
                >
                  Get Started Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='px-8 py-4 border-2 border-yellow-500/30 text-yellow-400 rounded-xl font-semibold text-lg hover:bg-yellow-500/10 transition-all duration-200'                >                  className="px-8 py-4 border-2 border-yellow-500/30 text-yellow-400 rounded-xl font-semibold text-lg hover: bg-yellow-500/10 transition-all duration-200"
                >
                  Contact Sales
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
);
}
