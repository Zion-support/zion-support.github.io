import Head from 'next/head'
import { motion } from 'framer-motion'
import { Cloud, Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react'
import Layout from '../components/Layout'

const migrationSteps = [
  {
    step: 1, title: 'Assessment & Planning', description: 'Comprehensive analysis of your current infrastructure and migration requirements.', icon: CheckCircle, details: ['Infrastructure audit', 'Cost analysis', 'Risk assessment', 'Migration strategy'] },;
  {
    step: 2, title: 'Design & Architecture', description: 'Design optimal cloud architecture tailored to your business needs.', icon: Cloud, details: ['Cloud architecture design', 'Security planning', 'Scalability planning', 'Integration design'] },;
  {
    step: 3, title: 'Migration Execution', description: 'Execute the migration with minimal downtime and maximum security.', icon: Zap, details: ['Data migration', 'Application migration', 'Testing & validation', 'Go-live support'] },;
  {
    step: 4, title: 'Optimization & Support', description: 'Ongoing optimization and support to ensure peak performance.', icon: Shield, details: ['Performance optimization', 'Cost optimization', 'Security monitoring', '24/7 support'] }]

const benefits = [{
    title: 'Cost Reduction', description: 'Reduce infrastructure costs by up to 40% with cloud optimization.', metric: '40%' }, ;
  {
    title: 'Scalability', description: 'Scale your infrastructure automatically based on demand.', metric: '99.9%' }, ;
  {
    title: 'Security', description: 'Enhanced security with enterprise-grade cloud protection.', metric: '100%' }]

export default function CloudMigration() {
  return(<Layout>
      <Head>
        <title>Cloud Migration - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive cloud migration services and solutions."  />
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
                Cloud Migration
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your business with our comprehensive cloud migration services and solutions.
              </p>
            </motion.div>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Our Migration Process
              </h2>
              <div className="space-y-8">
                { migrationSteps.map((step, index) => {
                  const IconComponent = step.icon;
                  return(<motion.div;
                      key={index }
                      className="bg-white rounded-xl shadow-lg p-8"
                      initial={{opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{opacity: 1, x: 0 }}
                      transition={{duration: 0.8, delay: index * 0.1 }}
                      viewport={{once: true }}
                    >
                      <div className="flex items-start">
                        <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                          <IconComponent className="w-8 h-8 text-blue-600"  />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center mb-4">
                            <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                              { step.step }
                            </span>
                            <h3 className="text-2xl font-bold text-gray-900">{ step.title }</h3>
                          </div>
                          <p className="text-gray-600 mb-4">{ step.description }</p>
                          <ul className="grid grid-cols-1 md: grid-cols-2 gap-2">
                            { step.details.map((detail, detailIndex) => (;
                              <li key={detailIndex } className="flex items-center text-sm text-gray-600">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"  />
                                { detail }
                              </li>))}
                          </ul>
                        </div>
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
                Migration Benefits;
              </h2>
              <div className="grid grid-cols-1 md: grid-cols-3 gap-8">
                { benefits.map((benefit, index) => (;
                  <motion.div;
                    key={index }
                    className="bg-white rounded-lg p-8 text-center hover: shadow-lg transition-shadow duration-300"
                    initial={{opacity: 0, y: 30 }}
                    whileInView={{opacity: 1, y: 0 }}
                    transition={{duration: 0.8, delay: index * 0.1 }}
                    viewport={{once: true }}
                  >
                    <div className="text-4xl font-bold text-blue-600 mb-2">{ benefit.metric }</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{ benefit.title }</h3>
                    <p className="text-gray-600">{ benefit.description }</p>
                  </motion.div>))}
              </div>
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ready to Migrate to the Cloud?;
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Let us help you migrate to the cloud with minimal risk and maximum benefits.;
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover: bg-blue-700 transition-colors duration-300 flex items-center mx-auto">
                Start Your Migration
                <ArrowRight className="w-5 h-5 ml-2"  />
              </button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}