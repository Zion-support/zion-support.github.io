import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Shield, Lock, Eye, Zap, CheckCircle } from 'lucide-react'

const solutions = [
  {
    title: "Cybersecurity Assessment", description: "Comprehensive security audits and vulnerability assessments for your infrastructure", icon: Shield, features: ["Security Audits", "Vulnerability Scanning", "Penetration Testing", "Risk Assessment"] },;
  {
    title: "Data Protection", description: "Advanced encryption and data security solutions to protect sensitive information", icon: Lock, features: ["Data Encryption", "Access Controls", "Data Loss Prevention", "Compliance Management"] },;
  {
    title: "Network Security", description: "Robust network protection with firewalls, intrusion detection, and monitoring", ;
    icon: Eye, features: ["Firewall Management", "Intrusion Detection", "Network Monitoring", "Threat Prevention"] },;
  {
    title: "Security Operations", description: "24/7 security monitoring and incident response to keep your systems safe", icon: Zap, features: ["24/7 Monitoring", "Incident Response", "Security Analytics", "Threat Intelligence"] }]

const securityFeatures = ["Multi-Factor Authentication", "Zero Trust Architecture", "Endpoint Protection", "Email Security", ;
  "Cloud Security", "Identity Management", "Security Awareness Training", "Compliance Auditing"]

export default function SecuritySolutions() {
  return(<>
      <Head>
        <title>Security Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cybersecurity solutions including data protection, network security, and security operations. Protect your business with expert security services."  />
        <meta name="keywords" content="cybersecurity, data protection, network security, security solutions, information security"  />
        <meta property="og: title" content="Security Solutions - Zion Tech Group"  />
        <meta property="og:description" content="Protect your business with comprehensive cybersecurity solutions and expert security services."  />
        <meta property="og:url" content="https://ziontechgroup.com/security-solutions"  />
        <meta property="og:type" content="website"  />
        <link rel="canonical" href="https://ziontechgroup.com/security-solutions"  />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */ }
        <section className="relative bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div;
              initial={{opacity: 0, y: 30 }}
              animate={{opacity: 1, y: 0 }}
              transition={{duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md: text-6xl font-bold mb-6">
                Advanced{ ' ' }
                <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  Security Solutions;
                </span>
              </h1>
              <p className="text-xl md: text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Protect your business with comprehensive cybersecurity solutions. From data protection
                to network security, we provide enterprise-grade security services.;
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Security Assessment
                </Link>
                <Link href="/cybersecurity" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        { /* Solutions Section */ }
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div;
              initial={{opacity: 0, y: 30 }}
              whileInView={{opacity: 1, y: 0 }}
              transition={{duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Security Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive cybersecurity solutions to protect your business from evolving threats;
              </p>
            </motion.div>
            <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">
              { solutions.map((solution, index) => (;
                <motion.div;
                  key={index }
                  initial={{opacity: 0, y: 30 }}
                  whileInView={{opacity: 1, y: 0 }}
                  transition={{duration: 0.8, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover: shadow-xl transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <solution.icon className="w-6 h-6 text-red-600"  />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{ solution.title }</h3>
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
        { /* Features Section */ }
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div;
              initial={{opacity: 0, y: 30 }}
              whileInView={{opacity: 1, y: 0 }}
              transition={{duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Security Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Advanced security features to protect your digital assets and infrastructure;
              </p>
            </motion.div>
            <div className="grid grid-cols-2 md: grid-cols-4 lg:grid-cols-8 gap-4">
              { securityFeatures.map((feature, index) => (;
                <motion.div;
                  key={index }
                  initial={{opacity: 0, scale: 0.8 }}
                  whileInView={{opacity: 1, scale: 1 }}
                  transition={{duration: 0.5, delay: index * 0.05 }}
                  className="bg-white p-4 rounded-lg shadow-md hover: shadow-lg transition-shadow duration-300 text-center"
                >
                  <span className="text-gray-800 font-medium">{ feature }</span>
                </motion.div>))}
            </div>
          </div>
        </section>
        { /* CTA Section */ }
        <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div;
              initial={{opacity: 0, y: 30 }}
              whileInView={{opacity: 1, y: 0 }}
              transition={{duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Secure Your Business Today</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Don't wait for a security breach. Let us help you implement comprehensive security solutions;
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-red-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Security Audit
                </Link>
                <Link href="/cybersecurity" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-red-600 transition-all duration-300 font-semibold">
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}