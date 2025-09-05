import { motion } from 'framer-motion'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { Heart, Shield, Users, CheckCircle, ArrowRight, Stethoscope, Activity } from 'lucide-react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import {
  Heart, ;
  Stethoscope, ;
  Shield, ;
  Users, ;
  CheckCircle, ;
  TrendingUp, ;
  Clock, ;
  Activity } from 'lucide-react'
import Layout from '../components/Layout'

const healthcareSolutions = [{  }]

const benefits = [
  {
    title: 'Improved Patient Care', description: 'AI-powered tools help provide better and more accurate patient care', icon: Heart }, ;
  {
    title: 'Enhanced Security', description: 'Advanced security measures protect sensitive patient data', icon: Shield }, ;
  {
    title: 'Better Outcomes', description: 'Data-driven insights help improve treatment outcomes', icon: Activity }, ;
  {
    title: 'Operational Efficiency', description: 'Automated processes reduce administrative burden and costs', icon: CheckCircle
    title: 'Electronic Health Records', description: 'Comprehensive EHR system for managing patient data and medical records', icon: Stethoscope, features: ['Patient Records', 'Medical History', 'Prescription Management', 'Appointment Scheduling'], ;
    benefits: ['50% time savings', 'Better patient care', 'Reduced errors', 'Improved efficiency'] },;
  {
    title: 'Telemedicine Platform', description: 'Remote healthcare delivery platform for virtual consultations and care', icon: Heart, features: ['Video Consultations', 'Remote Monitoring', 'Digital Prescriptions', 'Patient Portal'], ;
    benefits: ['Increased access', 'Cost reduction', 'Better outcomes', 'Convenience'] },;
  {
    title: 'Healthcare Analytics', description: 'AI-powered analytics for improving patient outcomes and operational efficiency', icon: Activity, features: ['Predictive Analytics', 'Performance Metrics', 'Risk Assessment', 'Quality Improvement'], ;
    benefits: ['Better outcomes', 'Cost optimization', 'Risk reduction', 'Quality improvement'] }]

const healthcareBenefits = [{
    icon: Heart, title: 'Patient Outcomes', description: 'Improve patient care and health outcomes with data-driven insights.', metric: '35%' }, ;
  {
    icon: Clock, title: 'Efficiency Gains', description: 'Streamline healthcare operations and reduce administrative burden.', metric: '45%' }, ;
  {
    icon: Shield, title: 'Data Security', description: 'Protect sensitive patient data with enterprise-grade security measures.', metric: '99.9%' }]

export default function HealthcarePage() {
  return(<Layout>
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div;
              initial={{opacity: 0, y: 30 }}
              animate={{opacity: 1, y: 0 }}
              transition={{duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md: text-6xl font-bold mb-6">
      <Head>
        <title>Healthcare Solutions - Zion Tech Group</title>
        <meta name="description" content="Transform healthcare delivery with our comprehensive technology solutions for hospitals, clinics, and healthcare providers."  />
      </Head>
      <main>
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div;
              className="text-center"
              initial={{opacity: 0, y: 30 }}
              animate={{opacity: 1, y: 0 }}
              transition={{duration: 0.8 }}
            >
              <h1 className="text-4xl md: text-6xl font-bold mb-6">
                Healthcare Solutions
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
                Transform healthcare delivery with AI-powered diagnostics, integrated EHR systems, and secure telemedicine platforms.;
              </p>
                Healthcare <span className="text-blue-600">Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform healthcare delivery with AI-powered medical imaging, electronic health records, ;
                and telemedicine solutions that improve patient outcomes.;
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover: bg-blue-700 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4"  />
                </Link>
                <Link
                  href="/ai-services"
                  className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  View AI Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        { /* Solutions Section */ }
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div;
              initial={{opacity: 0, y: 20 }}
              animate={{opacity: 1, y: 0 }}
              transition={{duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md: text-4xl font-bold mb-4">Our Healthcare Solutions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive technology solutions designed specifically for healthcare providers.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              { solutions.map((solution, index) => (;
                <motion.div;
                  key={index }
                  initial={{opacity: 0, y: 20 }}
                  animate={{opacity: 1, y: 0 }}
                  transition={{duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover: shadow-xl transition-shadow p-6"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <solution.icon className="w-6 h-6 text-blue-600"  />
                    </div>
                    <h3 className="text-xl font-semibold">{ solution.title }</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{ solution.description }</p>
                  <ul className="space-y-2">
                    { solution.features.map((feature, featureIndex) => (;
                      <li key={featureIndex } className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2"  />
                        { feature }
                      </li>))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        { /* Benefits Section */ }
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div;
              initial={{opacity: 0, y: 20 }}
              animate={{opacity: 1, y: 0 }}
              transition={{duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md: text-4xl font-bold mb-4">Why Choose Our Healthcare Solutions?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our solutions are designed to address the unique challenges faced by healthcare providers.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              { benefits.map((benefit, index) => (;
                <motion.div;
                  key={index }
                  initial={{opacity: 0, y: 20 }}
                  animate={{opacity: 1, y: 0 }}
                  transition={{duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600"  />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{ benefit.title }</h3>
                  <p className="text-gray-600">{ benefit.description }</p>
                </motion.div>))}
            </div>
          </div>
        </section>
        { /* CTA Section */ }
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div;
              initial={{opacity: 0, y: 20 }}
              animate={{opacity: 1, y: 0 }}
              transition={{duration: 0.8 }}
            >
              <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">
                Ready to Transform Healthcare?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our healthcare solutions can help your organization achieve its goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4"  />
                </Link>
                <Link
                  href="/it-services"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View IT Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
            </motion.div>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Our Healthcare Solutions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                { healthcareSolutions.map((solution, index) => {
                  const IconComponent = solution.icon;
                  return(<motion.div;
                      key={index }
                      className="bg-white rounded-xl shadow-lg p-8 hover: shadow-xl transition-shadow duration-300"
                      initial={{opacity: 0, y: 30 }}
                      whileInView={{opacity: 1, y: 0 }}
                      transition={{duration: 0.8, delay: index * 0.1 }}
                      viewport={{once: true }}
                    >
                      <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                        <IconComponent className="w-8 h-8 text-blue-600"  />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{ solution.title }</h3>
                      <p className="text-gray-600 mb-6">{ solution.description }</p>
                      <div className="space-y-3 mb-6">
                        <h4 className="font-semibold text-gray-900">Key Features: </h4>
                        <ul className="space-y-2">
                          { solution.features.map((feature, featureIndex) => (;
                            <li key={featureIndex } className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"  />
                              { feature }
                            </li>))}
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900">Benefits: </h4>
                        <ul className="space-y-2">
                          { solution.benefits.map((benefit, benefitIndex) => (;
                            <li key={benefitIndex } className="flex items-center text-sm text-gray-600">
                              <TrendingUp className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0"  />
                              { benefit }
                            </li>))}
                        </ul>
                      </div>
                    </motion.div>
                  )})}
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Why Choose Our Healthcare Solutions?;
              </h2>
              <div className="grid grid-cols-1 md: grid-cols-3 gap-8">
                { healthcareBenefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return(<motion.div;
                      key={index }
                      className="bg-white rounded-lg p-8 text-center hover: shadow-lg transition-shadow duration-300"
                      initial={{opacity: 0, y: 30 }}
                      whileInView={{opacity: 1, y: 0 }}
                      transition={{duration: 0.8, delay: index * 0.1 }}
                      viewport={{once: true }}
                    >
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-green-600"  />
                      </div>
                      <div className="text-4xl font-bold text-green-600 mb-2">{ benefit.metric }</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{ benefit.title }</h3>
                      <p className="text-gray-600">{ benefit.description }</p>
                    </motion.div>)})}
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )}