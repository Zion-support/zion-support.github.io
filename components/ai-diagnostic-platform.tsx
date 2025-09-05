<<<<<<< HEAD
import React from 'react',
import Head from 'next/head',
import { motion } from 'framer-motion',
import { 
  Brain, Shield, Zap, Target, Stethoscope, 
  BarChart3, Cpu, Globe, Users, Award,
  CheckCircle, ArrowRight, Star, Phone, Mail, MapPin
} from 'lucide-react',
import Layout from '../components/layout/Layout',
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
},

const features = [
  'AI-powered medical image analysisSymptom assessment algorithmsTreatment recommendation enginePatient history integrationReal-time diagnostic updatesMulti-specialty coverageMobile app integrationHIPAA-compliant platform'
],

const pricingPlans = [
  {
    name: 'Starter',
    price: 299,
    period: 'month',
    features: ['Basic diagnostic tools3 medical specialtiesStandard reportingStandard support'],
    popular: false
  },
  {
    name: 'Professional',
    price: 799,
    period: 'month',
    features: ['Advanced AI diagnosticsAll specialtiesCustom reportingAPI accessPriority support'],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 1999,
    period: 'month',
    features: ['Custom AI modelsWhite-label solutionDedicated supportCustom integrationsTraining included'],
    popular: false
  }
],
=======
import React from 'react';
import Head from 'next/head';
import {_Brain, _Shield, _Zap, _Target, _Stethoscope, _BarChart3, _Cpu, _Globe, _Users, _Award, _CheckCircle, _ArrowRight, _Star, _Phone, _Mail, _MapPin} from 'lucide-react';
import Layout from '../components/layout/Layout';

const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

const _features = [
  'AI-powered medical image analysis',
  'Symptom assessment algorithms',
  'Treatment recommendation engine',
  'Patient history integration',
  'Real-time diagnostic updates',
  'Multi-specialty coverage',
  'Mobile app integration',
  'HIPAA-compliant platform'
];

const _pricingPlans = [
  {_name: 'Starter', _price: 299, _period: 'month', _features: ['Basic diagnostic tools', _'3 medical specialties', _'Standard reporting', _'Standard support'], _popular: false},
  {_name: 'Professional', _price: 799, _period: 'month', _features: ['Advanced AI diagnostics', _'All specialties', _'Custom reporting', _'API access', _'Priority support'], _popular: true},
  {_name: 'Enterprise', _price: 1999, _period: 'month', _features: ['Custom AI models', _'White-label solution', _'Dedicated support', _'Custom integrations', _'Training included'], _popular: false}
];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export default function AIDiagnosticPlatform() {_return (_<Layout>
      <Head>
        <title>AI Diagnostic Pro Platform | Zion Tech Group</title>
<<<<<<< HEAD
        <meta name=&quot;description&quot; content=&quot;Advanced medical diagnostic platform using AI and machine learning to provide accurate disease detection and treatment recommendations.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;AI diagnostics, medical AI, healthcare technology, medical imaging, Zion Tech Group&quot; />
        <meta property=&quot;og:title&quot; content=&quot;AI Diagnostic Pro Platform - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Advanced medical diagnostic platform with AI integration.&quot; />
        <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/ai-diagnostic-platform&quot; />
=======
        <meta name="description" content="Advanced medical diagnostic platform using AI and machine learning to provide accurate disease detection and treatment recommendations." />
        <meta name="keywords" content="AI diagnostics, _medical AI, _healthcare technology, _medical imaging, _Zion Tech Group" />
        <meta property="og:title" content="AI Diagnostic Pro Platform - Zion Tech Group" />
        <meta property="og:description" content="Advanced medical diagnostic platform with AI integration." />
        <meta property="og:url" content="https://ziontechgroup.com/ai-diagnostic-platform" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </Head>

      {/* Hero Section */}
      <section className=&quot;relative min-h-screen flex items-center justify-center overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black&quot;></div>
        
<<<<<<< HEAD
        {/* Background Elements */}
        <div className=&quot;absolute inset-0 overflow-hidden pointer-events-none&quot;>
          <div className=&quot;absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse&quot;></div>
          <div className=&quot;absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000&quot;></div>
          <div className=&quot;absolute bottom-32 left-32 w-28 h-28 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-500&quot;></div>
=======
        {_/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-32 w-28 h-28 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </div>

        <div className=&quot;relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto&quot;>
          <motion.div
<<<<<<< HEAD
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=&quot;mb-8&quot;
=======
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            className="mb-8"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <div className=&quot;inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6&quot;>
              <Stethoscope className=&quot;w-4 h-4 mr-2&quot; />
              Healthcare Technology
            </div>
            <h1 className=&quot;text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6&quot;>
              <span className=&quot;bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent&quot;>
                AI Diagnostic
              </span>
              <br />
              <span className=&quot;text-white&quot;>Pro Platform</span>
            </h1>
            <p className=&quot;text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto&quot;>
              Advanced medical diagnostic platform using AI and machine learning to provide accurate disease detection and treatment recommendations.
            </p>
          </motion.div>

          {_/* CTA Buttons */}
          <motion.div
<<<<<<< HEAD
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center&quot;
=======
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8, _delay: 0.2}}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <a
              href=&quot;#pricing&quot;
              className=&quot;inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold text-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105&quot;
            >
              <Target className=&quot;w-5 h-5 mr-2&quot; />
              Get Started
            </a>
            <a
              href=&quot;#contact&quot;
              className=&quot;inline-flex items-center px-8 py-4 rounded-full border-2 border-blue-500/30 text-blue-400 font-semibold text-lg hover:bg-blue-500/10 transition-all duration-300&quot;
            >
              <Phone className=&quot;w-5 h-5 mr-2&quot; />
              Contact Sales
            </a>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Features Section */}
      <section className=&quot;py-20 bg-gradient-to-b from-black to-slate-900&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
=======
      {_/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <h2 className=&quot;text-3xl md:text-5xl font-bold text-white mb-6&quot;>
              Revolutionary Medical Technology
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              Experience the future of medical diagnostics with AI-powered analysis and comprehensive healthcare solutions.
            </p>
          </motion.div>

<<<<<<< HEAD
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/40 transition-all duration-300&quot;
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {_features.map((feature, _index) => (
              <motion.div
                key={index}
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/40 transition-all duration-300"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                <div className=&quot;w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4&quot;>
                  <CheckCircle className=&quot;w-6 h-6 text-white&quot; />
                </div>
<<<<<<< HEAD
                <h3 className=&quot;text-lg font-semibold text-white mb-2&quot;>{feature}</h3>
=======
                <h3 className="text-lg font-semibold text-white mb-2">{_feature}</h3>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Pricing Section */}
      <section id=&quot;pricing&quot; className=&quot;py-20 bg-black&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
=======
      {_/* Pricing Section */}
      <section id="pricing" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <h2 className=&quot;text-3xl md:text-5xl font-bold text-white mb-6&quot;>
              Choose Your Plan
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              Flexible pricing options designed for healthcare providers of all sizes, from clinics to large hospital systems.
            </p>
          </motion.div>

<<<<<<< HEAD
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
            {pricingPlans.map((plan, index) => (
=======
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {_pricingPlans.map(_(plan, _index) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <motion.div
                key={index}
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className={_`relative bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-blue-500/50 scale-105' 
                    : 'border-blue-500/20'}`}
              >
<<<<<<< HEAD
                {plan.popular && (
                  <div className=&quot;absolute -top-4 left-1/2 transform -translate-x-1/2&quot;>
                    <span className=&quot;bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold&quot;>
=======
                {_plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      Most Popular
                    </span>
                  </div>
                )}
                
<<<<<<< HEAD
                <div className=&quot;text-center mb-8&quot;>
                  <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>{plan.name}</h3>
                  <div className=&quot;text-4xl font-bold text-white mb-2&quot;>
                    ${plan.price}
                    <span className=&quot;text-lg text-gray-400 font-normal&quot;>/{plan.period}</span>
                  </div>
                </div>

                <ul className=&quot;space-y-4 mb-8&quot;>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className=&quot;flex items-center text-gray-300&quot;>
                      <CheckCircle className=&quot;w-5 h-5 text-blue-400 mr-3 flex-shrink-0&quot; />
                      {feature}
=======
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{_plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-2">
                    ${_plan.price}
                    <span className="text-lg text-gray-400 font-normal">/{_plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {_plan.features.map(_(feature, _featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                      {_feature}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </li>
                  ))}
                </ul>

                <button className=&quot;w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-600 hover:to-indigo-600 transition-all duration-300&quot;>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Contact Section */}
      <section id=&quot;contact&quot; className=&quot;py-20 bg-gradient-to-b from-slate-900 to-black&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
=======
      {_/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <h2 className=&quot;text-3xl md:text-5xl font-bold text-white mb-6&quot;>
              Ready to Transform Healthcare?
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              Contact our team to learn more about how AI Diagnostic Pro Platform can revolutionize your medical practice.
            </p>
          </motion.div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
            <motion.div
<<<<<<< HEAD
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className=&quot;text-center&quot;
=======
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8, _delay: 0.1}}
              viewport={_{ once: true}}
              className="text-center"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <div className=&quot;w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4&quot;>
                <Phone className=&quot;w-8 h-8 text-white&quot; />
              </div>
<<<<<<< HEAD
              <h3 className=&quot;text-xl font-semibold text-white mb-2&quot;>Phone</h3>
              <p className=&quot;text-gray-300&quot;>{contactInfo.mobile}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className=&quot;text-center&quot;
=======
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">{_contactInfo.mobile}</p>
            </motion.div>

            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8, _delay: 0.2}}
              viewport={_{ once: true}}
              className="text-center"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <div className=&quot;w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4&quot;>
                <Mail className=&quot;w-8 h-8 text-white&quot; />
              </div>
<<<<<<< HEAD
              <h3 className=&quot;text-xl font-semibold text-white mb-2&quot;>Email</h3>
              <p className=&quot;text-gray-300&quot;>{contactInfo.email}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className=&quot;text-center&quot;
=======
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">{_contactInfo.email}</p>
            </motion.div>

            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8, _delay: 0.3}}
              viewport={_{ once: true}}
              className="text-center"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <div className=&quot;w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4&quot;>
                <MapPin className=&quot;w-8 h-8 text-white&quot; />
              </div>
<<<<<<< HEAD
              <h3 className=&quot;text-xl font-semibold text-white mb-2&quot;>Address</h3>
              <p className=&quot;text-gray-300&quot;>{contactInfo.address}</p>
=======
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300">{_contactInfo.address}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  )
}