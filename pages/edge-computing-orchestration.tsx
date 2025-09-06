import React from 'react',
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Cpu, Network, Zap, Shield, Database, Globe;
  ArrowRight, CheckCircle, Star, TrendingUp, Users
 } from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
export default function EdgeComputingPage() {
  const features = null;
                reduced bandwidth usage, and improved reliability for distributed applications.
              </p>
              <div className='space-y-4'>                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className='flex items-center space-x-3'
                  >
                    <CheckCircle className='w-6 h-6 text-green-500 flex-shrink-0' />
                    <span className='text-slate-700'>{benefit}</span>                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8'
            >
              <h3 className='text-2xl font-bold text-slate-900 mb-6'>
                Performance Metrics
              </h3>
              <div className='space-y-6'>
                <div className='text-center'>
                  <div className='text-4xl font-bold text-blue-600 mb-2'>
                    80-90%
                  </div>
                  <div className='text-slate-600'>Latency Reduction</div>
                </div>
                <div className='text-center'>
                  <div className='text-4xl font-bold text-green-600 mb-2'>
                    60%
                  </div>
                  <div className='text-slate-600'>Bandwidth Cost Reduction</div>
                </div>
                <div className='text-center'>
                  <div className='text-4xl font-bold text-purple-600 mb-2'>
                    99.9%
                  </div>
                  <div className='text-slate-600'>Uptime Guarantee</div>                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-6'>          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl font-bold text-slate-900 mb-6'>
              Industry Applications
            </h2>
            <p className='text-xl text-slate-600 max-w-3xl mx-auto'>
              See how businesses across different industries are leveraging edge
              computing to transform their operations.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='bg-slate-50 rounded-2xl p-8 hover:bg-slate-100 transition-all duration-300'
              >
                <h3 className='text-2xl font-bold text-slate-900 mb-4'>
                  {useCase.industry}
                </h3>
                <p className='text-slate-600 mb-4 leading-relaxed'>
                  {useCase.description}
                </p>
                <div className='bg-green-50 border border-green-200 rounded-lg p-4'>
                  <p className='text-green-800 font-medium'>
                    Results: {useCase.results}
                  </p>                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className='py-20 bg-slate-900'>
        <div className='max-w-7xl mx-auto px-6'>          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl font-bold text-white mb-6'>
              Edge Computing Architecture
            </h2>
            <p className='text-xl text-white/70 max-w-3xl mx-auto'>
              Our distributed architecture ensures optimal performance,
              reliability, and scalability.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 text-center'
            >
              <div className='w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4'>
                <Cpu className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-bold text-white mb-2'>Edge Nodes</h3>
              <p className='text-white/70 text-sm'>
                Distributed computing nodes deployed at strategic locations for
                optimal performance
              </p>            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className='bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 text-center'
            >
              <div className='w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4'>
                <Network className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-bold text-white mb-2'>
                Orchestration Layer
              </h3>
              <p className='text-white/70 text-sm'>
                Intelligent workload distribution and management across the edge
                network
              </p>            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 text-center'
            >
              <div className='w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4'>
                <Database className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-bold text-white mb-2'>
                Central Management
              </h3>
              <p className='text-white/70 text-sm'>
                Centralized control and monitoring with real-time insights and
                analytics
              </p>            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-6'>          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl font-bold text-slate-900 mb-6'>
              Edge Computing Plans
            </h2>
            <p className='text-xl text-slate-600 max-w-3xl mx-auto'>
              Choose the plan that fits your edge computing needs. All plans
              include our core orchestration features.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>            {pricing.map((plan, index) => (
              <motion.div
                key={plan.plan}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-slate-50 rounded-2xl p-8 ${
                  plan.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className='absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium'>                    Most Popular
                  </div>
                )}

                <div className='text-center mb-8'>
                  <h3 className='text-2xl font-bold text-slate-900 mb-2'>
                    {plan.plan}
                  </h3>
                  <div className='text-4xl font-bold text-slate-900 mb-2'>
                    {plan.price}
                    <span className='text-lg text-slate-600'>
                      {plan.period}
                    </span>
                  </div>
                  <p className='text-slate-600'>{plan.description}</p>
                </div>

                <ul className='space-y-4 mb-8'>
                  {plan.features.map(feature => (
                    <li key={feature} className='flex items-center space-x-3'>
                      <CheckCircle className='w-5 h-5 text-green-500 flex-shrink-0' />
                      <span className='text-slate-700'>{feature}</span>                    </li>
                  ))}
                </ul>

                <a
                  href='/contact'
                  className='block w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-center py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105'                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='py-20 bg-gradient-to-r from-blue-600 to-cyan-600'>
        <div className='max-w-4xl mx-auto px-6 text-center'>          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className='text-4xl font-bold text-white mb-6'>
              Ready to Deploy Edge Computing?
            </h2>
            <p className='text-xl text-blue-100 mb-8'>
              Join the edge computing revolution and transform your business
              with real-time processing capabilities.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='/contact'
                className='bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105'              >
                Start Free Trial
              </a>
              <a
                href='/contact'
                className='border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200'              >
                Schedule Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </>
);
