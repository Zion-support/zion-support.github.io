import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet-async'
import { Shield, Eye, Zap, Lock, ArrowRight, CheckCircle, AlertTriangle, Users } from 'lucide-react'

const AICybersecurityPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'AI Threat Detection',
      description: 'Advanced AI algorithms that detect and prevent cyber threats in real-time.',
      benefits: ['Real-time monitoring', 'Threat intelligence', 'Behavioral analysis', 'Automated response']
    },
    {
      icon: Eye,
      title: 'Continuous Monitoring',
      description: '24/7 monitoring of your network, systems, and data for any suspicious activity.',
      benefits: ['Network monitoring', 'System surveillance', 'Data protection', 'Incident detection']
    },
    {
      icon: Zap,
      title: 'Instant Response',
      description: 'Automated response to security incidents with immediate threat mitigation.',
      benefits: ['Auto-blocking', 'Isolation protocols', 'Alert systems', 'Recovery procedures']
    },
    {
      icon: Lock,
      title: 'Data Encryption',
      description: 'End-to-end encryption to protect your sensitive data from unauthorized access.',
      benefits: ['Data at rest', 'Data in transit', 'Key management', 'Compliance standards']
    }
  ]

  const threats = [
    {
      type: 'Malware Detection',
      description: 'AI-powered detection of malware, ransomware, and other malicious software',
      icon: '🦠',
      protection: '99.9% accuracy'
    },
    {
      type: 'Phishing Prevention',
      description: 'Advanced email security that identifies and blocks phishing attempts',
      icon: '🎣',
      protection: '98% reduction'
    },
    {
      type: 'DDoS Mitigation',
      description: 'Intelligent traffic analysis and automated DDoS attack prevention',
      icon: '⚡',
      protection: 'Real-time blocking'
    },
    {
      type: 'Insider Threats',
      description: 'Behavioral analysis to detect and prevent insider security threats',
      icon: '👤',
      protection: 'Anomaly detection'
    }
  ]

  const benefits = [
    'Reduce security incidents by 95%',
    'Cut response time from hours to minutes',
    'Lower security costs by 40%',
    'Ensure compliance with regulations',
    'Protect against zero-day attacks',
    'Scale security with your business'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Cybersecurity - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered cybersecurity solutions to protect your business from evolving cyber threats. Real-time threat detection, automated response, and comprehensive security monitoring." />
        <meta name="keywords" content="AI cybersecurity, threat detection, cyber security, data protection, network security, automated response" />
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">Cybersecurity</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Protect your business with advanced AI-powered cybersecurity solutions. 
              Detect, prevent, and respond to cyber threats with intelligent automation and real-time monitoring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 text-lg">
                Get Security Assessment
              </button>
              <button className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-white transition-all duration-300 text-lg">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Advanced Security Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Protection */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Threat Protection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {threats.map((threat, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-6xl mb-4">{threat.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{threat.type}</h3>
                <p className="text-gray-300 mb-4">{threat.description}</p>
                <div className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-sm font-semibold">
                  {threat.protection}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Why Choose AI Cybersecurity?</h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-r from-red-500/20 to-orange-600/20 rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise-Grade Security</h3>
              <p className="text-gray-300">
                Our AI cybersecurity solutions are trusted by Fortune 500 companies and government agencies worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Security Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">95%</div>
              <p className="text-gray-300">Threat Reduction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">99.9%</div>
              <p className="text-gray-300">Uptime Guarantee</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">24/7</div>
              <p className="text-gray-300">Monitoring</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">5min</div>
              <p className="text-gray-300">Response Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Secure Your Business Today</h2>
          <p className="text-xl text-gray-300 mb-8">
            Don't wait for a cyber attack. Get comprehensive AI-powered security protection now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 text-lg flex items-center justify-center">
              Get Security Assessment
              <ArrowRight className="h-5 w-5 ml-2" />
            </button>
            <button className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-white transition-all duration-300 text-lg">
              Contact Security Expert
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AICybersecurityPage