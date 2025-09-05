import { motion } from 'framer-motion'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { ShoppingCart, CheckCircle, ArrowRight, Package, Users, Database, TrendingUp } from 'lucide-react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { ShoppingCart, Users, Package, CheckCircle } from 'lucide-react'
import Layout from '../components/Layout'

const solutions = [
  {
    title: 'E-commerce Platform', description: 'Modern e-commerce solutions with AI-powered recommendations.', icon: ShoppingCart, features: ['AI Recommendations', 'Mobile Optimization', 'Payment Integration'] },;
  {
    title: 'Customer Analytics', description: 'Understand customers with advanced analytics and personalization.', icon: Users, features: ['Customer Segmentation', 'Behavior Analysis', 'Personalization'] },;
  {
    title: 'Inventory Management', description: 'Optimize inventory with smart forecasting and automation.', icon: Package, features: ['Demand Forecasting', 'Automated Reordering', 'Real-time Tracking'] }]

const benefits = [{
    icon: TrendingUp, title: 'Increased Sales', description: 'AI-powered personalization and optimization drive higher conversion rates' }, ;
  {
    title: 'Better Customer Experience', description: 'Personalized recommendations and seamless shopping experience', icon: Users }, ;
  {
    title: 'Optimized Operations', description: 'Automated inventory management and demand forecasting reduce costs', icon: CheckCircle }, ;
  {
    title: 'Data-Driven Insights', description: 'Comprehensive analytics help make informed business decisions', icon: Database }]

export default function RetailPage() {
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
                Retail <span className="text-blue-600">Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform retail operations with e-commerce platforms, inventory management systems, ;
                and AI-powered customer analytics.;
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
              <h2 className="text-3xl md: text-4xl font-bold mb-4">Our Retail Solutions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive technology solutions designed specifically for retail businesses.
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
              <h2 className="text-3xl md: text-4xl font-bold mb-4">Why Choose Our Retail Solutions?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our solutions are designed to address the unique challenges faced by retail businesses.
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
                Ready to Transform Retail?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our retail solutions can help your business achieve its goals.
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
      <Head>
        <title>Retail Solutions - Zion Tech Group</title>
        <meta name="description" content="Transform retail with comprehensive e-commerce and customer analytics solutions."  />
      </Head>
      <main>
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{opacity: 0, y: 30 }}
              animate={{opacity: 1, y: 0 }}
              transition={{duration: 0.8 }}
            >
              <h1 className="text-4xl md: text-6xl font-bold mb-6">
                Retail Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform retail with comprehensive e-commerce and customer analytics solutions.
              </p>
            </motion.div>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                { solutions.map((solution, index) => {
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
                      <ul className="space-y-2">
                        { solution.features.map((feature, featureIndex) => (;
                          <li key={featureIndex } className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"  />
                            { feature }
                          </li>))}
                      </ul>
                    </motion.div>
                  )})}
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )}