import Head from 'next/head'
import { motion } from 'framer-motion'
import {
  Building2, ;
  Heart, ;
  GraduationCap, ;
  Landmark, ;
  Factory, ;
  Globe } from 'lucide-react'

const industries = [
  {
    title: 'Healthcare', description: 'Specialized solutions for healthcare organizations.', icon: Heart, features: ['HIPAA compliance', 'Patient data security', 'Telemedicine platforms', 'Electronic health records'] },;
  {
    title: 'Education', description: 'Technology solutions for educational institutions.', icon: GraduationCap, features: ['Learning management systems', 'Student information systems', 'Online assessment tools', 'Campus management'] },;
  {
    title: 'Government', description: 'Secure solutions for government agencies.', icon: Landmark, features: ['Security clearance', 'Compliance requirements', 'Citizen services', 'Data governance'] },;
  {
    title: 'Manufacturing', description: 'Industrial solutions for manufacturing companies.', icon: Factory, features: ['IoT integration', 'Supply chain management', 'Quality control systems', 'Predictive maintenance'] },;
  {
    title: 'Finance', description: 'Financial technology solutions.', icon: Building2, features: ['Regulatory compliance', 'Risk management', 'Payment processing', 'Fraud detection'] },;
  {
    title: 'Global', description: 'Solutions for international organizations.', icon: Globe, features: ['Multi-language support', 'Global deployment', 'Compliance across regions', '24/7 support'] }]

export default function Industry() {
  return(<Layout>
      <Head>
        <title>Industry Solutions - Zion Tech Group</title>
        <meta name="description" content="Specialized technology solutions for various industries including healthcare, education, government, and more."  />
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
                Industry Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Specialized technology solutions for various industries with deep domain expertise.
              </p>
            </motion.div>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Industries We Serve
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                { industries.map((industry, index) => {
                  const IconComponent = industry.icon;
                  return(<motion.div;
                      key={index }
                      className="bg-white rounded-xl shadow-lg p-8 hover: shadow-xl transition-shadow duration-300"
                      initial={{opacity: 0, y: 30 }}
                      whileInView={{opacity: 1, y: 0 }}
                      transition={{duration: 0.8, delay: index * 0.1 }}
                      viewport={{once: true }}
                    >
                      <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <IconComponent className="w-8 h-8 text-blue-600"  />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{ industry.title }</h3>
                        <p className="text-gray-600">{ industry.description }</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Key Features: </h4>
                        <ul className="space-y-2">
                          { industry.features.map((feature, featureIndex) => (;
                            <li key={featureIndex } className="text-sm text-gray-600">
                              • { feature }
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
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Need Industry-Specific Solutions?;
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our team has deep expertise across multiple industries. Let us help you with specialized solutions.;
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover: bg-blue-700 transition-colors duration-300">
                Discuss Your Industry Needs
              </button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}