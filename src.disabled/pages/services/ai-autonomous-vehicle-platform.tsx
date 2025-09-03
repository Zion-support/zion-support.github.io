:src.disabled/pages/services/ai-autonomous-vehicle-platform.tsx;
import React from;
  'react';
import { motion } from;
  'framer-motion';
import { Link } from;
  'react-router-dom';
import {
  Car,
  Brain,
  Shield,
  Zap,
  Globe,
  BarChart3,
  Users,
  CheckCircle,
  ArrowRight,
  MapPin,
  Clock,
  DollarSign,
  Star,
  Rocket,
  Target,
  Cpu,
  Network,
  Eye,
  Activity,
  TrendingUp,
  Lock,
  Smartphone,
  Cloud,
  Server,
  Database,
  Workflow,
  MessageCircle,
  Phone,
  Mail} from;
  'lucide-react';
const AIAutonomousVehiclePlatform = () => {
<<<<<<< HEAD
  const features = [{'
=======
  const features = [
  {
>>>>>>> main
      title: 'Advanced Perception Systems', description: 'Multi-sensor fusion with LiDAR, radar, cameras, and ultrasonic sensors for 360° environmental awareness', icon: Eye,
      color: 'text-blue-400'}, {'
      title: 'AI Decision Making',
      description: 'Real-time neural networks for instant decision making in complex traffic scenarios', icon: Brain,
      color: 'text-purple-400'}, {'
      title: 'Predictive Analytics',
      description: 'ML-powered prediction of traffic patterns, pedestrian behavior, and road conditions', icon: TrendingUp,
      color: 'text-green-400'}, {'
      title: 'Edge Computing',
      description: 'On-board processing for ultra-low latency responses and offline operation capability', icon: Cpu,
      color: 'text-cyan-400'}, {'
      title: 'Cybersecurity',
      description: 'Advanced threat detection and prevention for vehicle systems and communications', icon: Shield,
      color: 'text-red-400'}, {'
      title: 'Cloud Integration',
      description: 'Seamless cloud connectivity for updates, data sharing, and fleet management', icon: Cloud,
      color: 'text-indigo-400'}
'
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AIAutonomousVehiclePlatform = () => {
<<<<<<< HEAD
  const features = [{'
      title: 'Advanced Perception Systems', description: 'Multi-sensor fusion with LiDAR, radar, cameras, and ultrasonic sensors for 360° environmental awareness', icon: Eye,;
      color: 'text-blue-400'}, {';
      title: 'AI Decision Making',;
      description: 'Real-time neural networks for instant decision making in complex traffic scenarios', icon: Brain,;
      color: 'text-purple-400'}, {';
      title: 'Predictive Analytics',;
      description: 'ML-powered prediction of traffic patterns, pedestrian behavior, and road conditions', icon: TrendingUp,;
      color: 'text-green-400'}, {';
      title: 'Edge Computing',;
      description: 'On-board processing for ultra-low latency responses and offline operation capability', icon: Cpu,;
      color: 'text-cyan-400'}, {';
      title: 'Cybersecurity',;
      description: 'Advanced threat detection and prevention for vehicle systems and communications', icon: Shield,;
      color: 'text-red-400'}, {''
      title: 'Cloud Integration',;
      description: 'Seamless cloud connectivity for updates, data sharing, and fleet management', icon: Cloud,;
=======
  const features = [
  {
      title: 'Advanced Perception Systems', description: 'Multi-sensor fusion with LiDAR, radar, cameras, and ultrasonic sensors for 360° environmental awareness', icon: Eye,';
      color: 'text-blue-400'}, {';
      title: 'AI Decision Making,;
      description: 'Real-time neural networks for instant decision making in complex traffic scenarios', icon: Brain,';
      color: 'text-purple-400'}, {';
      title: 'Predictive Analytics,;
      description: 'ML-powered prediction of traffic patterns, pedestrian behavior, and road conditions', icon: TrendingUp,';
      color: 'text-green-400'}, {';
      title: 'Edge Computing,;
      description: 'On-board processing for ultra-low latency responses and offline operation capability', icon: Cpu,';
      color: 'text-cyan-400'}, {';
      title: 'Cybersecurity,;
      description: 'Advanced threat detection and prevention for vehicle systems and communications', icon: Shield,';
      color: 'text-red-400'}, {'
      title: 'Cloud Integration,;
      description: 'Seamless cloud connectivity for updates, data sharing, and fleet management', icon: Cloud,';
>>>>>>> main
      color: 'text-indigo-400'}

  return('
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900'>
      {/* Hero Section */}
      <section className='relative pt-32 pb-20 px-6 overflow-hidden>
        <div className='absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20'></div>'
        <div className='relative z-10 max-w-7xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >'
            <div className='inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium mb-8>
              <Rocket className='w-4 h-4 mr-2' />
              Revolutionary AI Autonomous Vehicle Platform
            </div>'
            <h1 className='text-5xl md:text-6xl font-bold text-white mb-6'>
              The Future of'
              <span className='block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400'>
                Autonomous Transportation
              </span>
            </h1>'
            <p className='text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed'>
              Transform your fleet with our cutting-edge AI autonomous vehicle platform.;
              Experience unprecedented safety, efficiency, and scalability in autonomous transportation.
            </p>'
            <div className='flex flex-col sm: flex-row gap-4 justify-center items-center mb-16'>
              <Link'
                to='/contact';
                className='group inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-1'>
                Get Started Today'
                <ArrowRight className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform' />
              </Link>
              <Link'
                to='/request-quote';
                className='group inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-400 border-2 border-blue-400 hover:bg-blue-400 hover:text-white rounded-xl transition-all duration-300 hove,
    r:-translate-y-1'>
                Request Custom Quote'
                <Phone className='w-5 h-5 ml-2 group-hove,
    r:scale-110 transition-transform' />
              </Link>
            </div>
            {/* Stats */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto>
              {[{ numbe,
    r: '99.9%', label: 'Safety Rate', icon: Shield }, { number: '24/7', label: 'Operation', icon: Clock },
                { number: '90%', label: 'Cost Reduction', icon: DollarSign }, { number: '1000+', label: 'Vehicles Supported', icon: Car }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className='text-center>
                  <div className='flex justify-center mb-3>
                    <stat.icon className='w-8 h-8 text-blue-400' />
                  </div>'
                  <div className='text-2xl md:text-3xl font-bold text-white mb-1'>
                    {stat.number}
                  </div>'
                  <div className='text-sm text-gray-400'>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      {/* Features Section */}
      <section className='py-20 px-6>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16>
            <h2 className='text-4xl font-bold text-white mb-4'>
              Advanced AI-Powered Features
            </h2>'
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Our platform combines cutting-edge AI, advanced sensors, and robust cybersecurity;
              to deliver the most reliable autonomous vehicle solution available.
            </p>
          </motion.div>'
          <div className='grid grid-cols-1 md: grid-cols-2 l,
    g:grid-cols-3 gap-8'>
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300>
                <div className={`w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mb-6`}>`
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>`
                <h3 className='text-xl font-semibold text-white mb-3'>{feature.title}</h3>'
                <p className='text-gray-300 text-sm leading-relaxed'>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Use Cases Section */}
      <section className='py-20 px-6 bg-slate-800/20>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16>
            <h2 className='text-4xl font-bold text-white mb-4'>
              Versatile Applications
            </h2>'
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              From urban transportation to industrial applications, our platform adapts;
              to diverse use cases and industry requirements.
            </p>
          </motion.div>'
          <div className='grid grid-cols-1 md: grid-cols-2 gap-8'>
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6>
                <div className='flex items-center space-x-4 mb-4>
                  <div className='w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center>
                    <useCase.icon className='w-8 h-8 text-blue-400' />
                  </div>
                  <div>'
                    <h3 className='text-xl font-semibold text-white'>{useCase.title}</h3>'
                    <p className='text-gray-300 text-sm'>{useCase.description}</p>
                  </div>
                </div>'
                <ul className='space-y-2'>
                  {useCase.benefits.map((benefit, benefitIndex) => ('
                    <li key={benefitIndex} className='flex items-center space-x-2 text-sm text-gray-300>
                      <CheckCircle className='w-4 h-4 text-blue-400 flex-shrink-0' />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className='py-20 px-6>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16>
            <h2 className='text-4xl font-bold text-white mb-4'>
              Transparent Pricing
            </h2>'
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Choose the perfect plan for your autonomous vehicle fleet.;
              All plans include our core AI features with no hidden fees.
            </p>
          </motion.div>'
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {pricing.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-800/30 backdrop-blur-sm border rounded-xl p-6 ${
                  tier.popular;
                    ?,`
  border-blue-500/50 shadow-lg shadow-blue-500/20': 'border-slate-700/50}`}
              >{tier.popular && (`
                  <div className='absolute -top-4 left-1/2 transform -translate-x-1/2>
                    <div className='bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2>
                      <Star className='w-4 h-4' />
                      Most Popular
                    </div>
                  </div>
                )}
                <div className='text-center mb-6>
                  <h3 className='text-2xl font-bold text-white mb-2'>{tier.name}</h3>'
                  <div className='mb-4>
                    <span className='text-4xl font-bold text-white'>{tier.price}</span>'
                    <span className='text-gray-400'>{tier.period}</span>
                  </div>'
                  <p className='text-gray-300 text-sm'>{tier.description}</p>
                </div>'
                <ul className='space-y-3 mb-8'>
                  {tier.features.map((feature, featureIndex) => ('
                    <li key={featureIndex} className='flex items-start space-x-3>
                      <CheckCircle className='w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0' />
                      <span className='text-gray-300 text-sm'>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link'
                  to={tier.name === 'Enterprise' ? '/contact' : '/signup'}
                  className={`w-full px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 ${
                    tier.popular;
                      ?,`
  bg-gradient-to-r from-blue-500 to-purple-600 text-white hover: from-blue-600 hover:to-purple-700';
                      :;
  'border border-blue-400 text-blue-400 hove,
    r:bg-blue-400 hove,
    r:text-white}`}
                >{tier.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}`
      <section className='py-20 px-6 bg-slate-800/20>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16>
            <h2 className='text-4xl font-bold text-white mb-4'>
              Why Choose Our Platform?
            </h2>'
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Experience the advantages of the most advanced autonomous vehicle platform;
              in the market.
            </p>
          </motion.div>'
          <div className='grid grid-cols-1 md:grid-cols-2 l,
    g:grid-cols-4 gap-8'>
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='text-center>
                <div className='w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6>
                  <benefit.icon className='w-8 h-8 text-blue-400' />
                </div>'
                <h3 className='text-xl font-semibold text-white mb-3'>{benefit.title}</h3>'
                <p className='text-gray-300 text-sm leading-relaxed'>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className='py-20 px-6>
        <div className='max-w-4xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >'
            <h2 className='text-4xl font-bold text-white mb-6'>
              Ready to Transform Your Fleet?
            </h2>'
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
              Join the autonomous transportation revolution. Contact us today to learn;
              how our AI platform can revolutionize your operations.
            </p>'
            <div className='flex flex-col sm: flex-row gap-4 justify-center items-center'>
              <Link'
                to='/contact';
                className='group inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-1'>
                Get Started Today'
                <ArrowRight className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform' />
              </Link>
              <Link'
                to='/request-quote';
                className='group inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-400 border-2 border-blue-400 hover:bg-blue-400 hover:text-white rounded-xl transition-all duration-300 hove,
    r:-translate-y-1'>
                Request Demo'
                <MessageCircle className='w-5 h-5 ml-2 group-hove,
    r:scale-110 transition-transform' />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Contact Info */}
      <section className='py-16 px-6 border-t border-slate-700/50>
        <div className='max-w-4xl mx-auto text-center>
          <div className='grid grid-cols-1 md: grid-cols-3 gap-8>
            <div className='flex flex-col items-center space-y-3>
              <div className='w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center>
                <Phone className='w-6 h-6 text-blue-400' />
              </div>
              <div>'
                <h3 className='text-lg font-semibold text-white mb-1'>Call Us</h3>'
                <a href='tel:+13024640950' className='text-blue-400 hover:text-blue-300 transition-colors'>
                  +1 (302) 464-0950
                </a>
              </div>
            </div>'
            <div className='flex flex-col items-center space-y-3>
              <div className='w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center>
                <Mail className='w-6 h-6 text-blue-400' />
              </div>
              <div>'
                <h3 className='text-lg font-semibold text-white mb-1'>Email Us</h3>'
                <a href='mailt,
    o: kleber@ziontechgroup.com' className='text-blue-400 hove,
    r:text-blue-300 transition-colors'>
                  kleber@ziontechgroup.com
                </a>
              </div>
            </div>'
            <div className='flex flex-col items-center space-y-3>
              <div className='w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center>
                <MapPin className='w-6 h-6 text-blue-400' />
              </div>
              <div>'
                <h3 className='text-lg font-semibold text-white mb-1'>Visit Us</h3>'
                <p className='text-blue-400'>
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
;
  return (''
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900>
      {/* Hero Section */}
      <section className='relative pt-32 pb-20 px-6 overflow-hidden>'
        <div className='absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20'></div>''
        <div className='relative z-10 max-w-7xl mx-auto text-center'>
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >''
            <div className='inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium mb-8>'
              <Rocket className='w-4 h-4 mr-2' />
              Revolutionary AI Autonomous Vehicle Platform'
            </div>''
            <h1 className='text-5xl md:text-6xl font-bold text-white mb-6>
              The Future of''
              <span className='block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400'>
                Autonomous Transportation
              </span>'
            </h1>''
            <p className='text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed'>
              Transform your fleet with our cutting-edge AI autonomous vehicle platform.;
              Experience unprecedented safety, efficiency, and scalability in autonomous transportation.'
            </p>''
            <div className='flex flex-col sm: flex-row gap-4 justify-center items-center mb-16>
              <Link''
                to='/contact'';
                className='group inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-1>
                Get Started Today''
                <ArrowRight className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform' />
              </Link>'
              <Link''
                to='/request-quote'';
                className='group inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-400 border-2 border-blue-400 hover:bg-blue-400 hover:text-white rounded-xl transition-all duration-300 hove,
    r:-translate-y-1>
                Request Custom Quote''
                <Phone className='w-5 h-5 ml-2 group-hove,
    r:scale-110 transition-transform' />
              </Link>
            </div>'
            {/* Stats */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto>
              {['{ numbe,
    r: '99.9%', label: 'Safety Rate', icon: Shield }, { number: '24/7', label: 'Operation', icon: Clock },{ number: '90%', label: 'Cost Reduction', icon: DollarSign }, { number: '1000+', label: 'Vehicles Supported', icon: Car }
              ].map((stat, index) => (
                <motion.div;
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }};
                  className='text-center>'
                  <div className='flex justify-center mb-3>'
                    <stat.icon className='w-8 h-8 text-blue-400' />
                  </div>''
                  <div className='text-2xl md:text-3xl font-bold text-white mb-1'>
                    {stat.number}
                  </div>''
                  <div className='text-sm text-gray-400'>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>'
      {/* Features Section */}
      <section className='py-20 px-6>'
        <div className='max-w-7xl mx-auto'>
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }};
            className='text-center mb-16>'
            <h2 className='text-4xl font-bold text-white mb-4'>
              Advanced AI-Powered Features'
            </h2>''
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Our platform combines cutting-edge AI, advanced sensors, and robust cybersecurity;
              to deliver the most reliable autonomous vehicle solution available.
            </p>'
          </motion.div>''
          <div className='grid grid-cols-1 md: grid-cols-2 l,
    g:grid-cols-3 gap-8'>
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }};
                className='bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300>
                <div className={`w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mb-6`}>`
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />`
                </div>''
                <h3 className='text-xl font-semibold text-white mb-3'>{feature.title}</h3>''
                <p className='text-gray-300 text-sm leading-relaxed'>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>'
      {/* Use Cases Section */}
      <section className='py-20 px-6 bg-slate-800/20>'
        <div className='max-w-7xl mx-auto'>
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }};
            className='text-center mb-16>'
            <h2 className='text-4xl font-bold text-white mb-4'>
              Versatile Applications'
            </h2>''
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              From urban transportation to industrial applications, our platform adapts;
              to diverse use cases and industry requirements.
            </p>'
          </motion.div>''
          <div className='grid grid-cols-1 md: grid-cols-2 gap-8'>
            {useCases.map((useCase, index) => (
              <motion.div;
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }};
                className='bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6>'
                <div className='flex items-center space-x-4 mb-4>'
                  <div className='w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center>'
                    <useCase.icon className='w-8 h-8 text-blue-400' />
                  </div>'
                  <div>''
                    <h3 className='text-xl font-semibold text-white'>{useCase.title}</h3>''
                    <p className='text-gray-300 text-sm'>{useCase.description}</p>
                  </div>'
                </div>''
                <ul className='space-y-2>
                  {useCase.benefits.map((benefit, benefitIndex) => (''
                    <li key={benefitIndex} className='flex items-center space-x-2 text-sm text-gray-300>'
                      <CheckCircle className='w-4 h-4 text-blue-400 flex-shrink-0' />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>'
      {/* Pricing Section */}
      <section className='py-20 px-6>'
        <div className='max-w-7xl mx-auto'>
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }};
            className='text-center mb-16>'
            <h2 className='text-4xl font-bold text-white mb-4'>
              Transparent Pricing'
            </h2>''
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Choose the perfect plan for your autonomous vehicle fleet.;
              All plans include our core AI features with no hidden fees.
            </p>'
          </motion.div>''
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {pricing.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-800/30 backdrop-blur-sm border rounded-xl p-6 ${
                  tier.popular;`
                    ? 'border-blue-500/50 shadow-lg shadow-blue-500/20';
                    : 'border-slate-700/50'}`}`
              >{tier.popular && (''
                  <div className='absolute -top-4 left-1/2 transform -translate-x-1/2>'
                    <div className='bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2>'
                      <Star className='w-4 h-4' />
                      Most Popular
                    </div>
                  </div>'
                )}
                <div className='text-center mb-6>'
                  <h3 className='text-2xl font-bold text-white mb-2'>{tier.name}</h3>''
                  <div className='mb-4>'
                    <span className='text-4xl font-bold text-white'>{tier.price}</span>''
                    <span className='text-gray-400'>{tier.period}</span>'
                  </div>''
                  <p className='text-gray-300 text-sm'>{tier.description}</p>'
                </div>''
                <ul className='space-y-3 mb-8>
                  {tier.features.map((feature, featureIndex) => (''
                    <li key={featureIndex} className='flex items-start space-x-3>'
                      <CheckCircle className='w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0' />'
                      <span className='text-gray-300 text-sm'>{feature}</span>
                    </li>
                  ))}
                </ul>'
                <Link''
                  to={tier.name === 'Enterprise' ? '/contact' : '/signup'}
                  className={`w-full px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 ${
                    tier.popular;`
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover: from-blue-600 hover:to-purple-700';
                      : 'border border-blue-400 text-blue-400 hove,
    r:bg-blue-400 hove,
    r:text-white'}`}
                >{tier.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>`
      {/* Benefits Section */}
      <section className='py-20 px-6 bg-slate-800/20>'
        <div className='max-w-7xl mx-auto'>
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }};
            className='text-center mb-16>'
            <h2 className='text-4xl font-bold text-white mb-4'>
              Why Choose Our Platform?'
            </h2>''
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Experience the advantages of the most advanced autonomous vehicle platform;
              in the market.
            </p>'
          </motion.div>''
          <div className='grid grid-cols-1 md:grid-cols-2 l,
    g:grid-cols-4 gap-8'>
            {benefits.map((benefit, index) => (
              <motion.div;
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }};
                className='text-center>'
                <div className='w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6>'
                  <benefit.icon className='w-8 h-8 text-blue-400' />
                </div>''
                <h3 className='text-xl font-semibold text-white mb-3'>{benefit.title}</h3>''
                <p className='text-gray-300 text-sm leading-relaxed'>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>'
      {/* CTA Section */}
      <section className='py-20 px-6>'
        <div className='max-w-4xl mx-auto text-center'>
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >''
            <h2 className='text-4xl font-bold text-white mb-6'>
              Ready to Transform Your Fleet?'
            </h2>''
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
              Join the autonomous transportation revolution. Contact us today to learn;
              how our AI platform can revolutionize your operations.'
            </p>''
            <div className='flex flex-col sm: flex-row gap-4 justify-center items-center>
              <Link''
                to='/contact'';
                className='group inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-1>
                Get Started Today''
                <ArrowRight className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform' />
              </Link>'
              <Link''
                to='/request-quote'';
                className='group inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-400 border-2 border-blue-400 hover:bg-blue-400 hover:text-white rounded-xl transition-all duration-300 hove,
    r:-translate-y-1>
                Request Demo''
                <MessageCircle className='w-5 h-5 ml-2 group-hove,
    r:scale-110 transition-transform' />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>'
      {/* Contact Info */}
      <section className='py-16 px-6 border-t border-slate-700/50>'
        <div className='max-w-4xl mx-auto text-center>'
          <div className='grid grid-cols-1 md: grid-cols-3 gap-8>'
            <div className='flex flex-col items-center space-y-3>'
              <div className='w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center>'
                <Phone className='w-6 h-6 text-blue-400' />
              </div>'
              <div>''
                <h3 className='text-lg font-semibold text-white mb-1'>Call Us</h3>''
                <a href='tel:+13024640950' className='text-blue-400 hover:text-blue-300 transition-colors'>
                  +1 (302) 464-0950
                </a>
              </div>'
            </div>''
            <div className='flex flex-col items-center space-y-3>'
              <div className='w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center>'
                <Mail className='w-6 h-6 text-blue-400' />
              </div>'
              <div>''
                <h3 className='text-lg font-semibold text-white mb-1'>Email Us</h3>''
                <a href='mailt,
    o: kleber@ziontechgroup.com' className='text-blue-400 hove,
    r:text-blue-300 transition-colors'>
                  kleber@ziontechgroup.com
                </a>
              </div>'
            </div>''
            <div className='flex flex-col items-center space-y-3>'
              <div className='w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center>'
                <MapPin className='w-6 h-6 text-blue-400' />
              </div>'
              <div>''
                <h3 className='text-lg font-semibold text-white mb-1'>Visit Us</h3>''
                <p className='text-blue-400'>
                  364 E Main St STE 1008<br / />
                  Middletown DE 19709
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )}
export default AIAutonomousVehiclePlatform";
"