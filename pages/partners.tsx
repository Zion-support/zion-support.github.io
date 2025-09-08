import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion'


export default function Partners() {
  const title = 'Partners — Zion Tech Group'
  const description = 'Strategic partnerships with leading technology providers, cloud platforms, and cybersecurity experts to deliver comprehensive solutions.'
  
  const partnerCategories = [
    {
      icon: Cloud,
      title: 'Cloud & Infrastructure',
      description: 'Strategic partnerships with leading cloud providers and infrastructure companies.',
      partners: [
        { name: 'AWS', description: 'Amazon Web Services', logo: '☁️', tier: 'Platinum' },
        { name: 'Microsoft Azure', description: 'Cloud computing platform', logo: '🔷', tier: 'Platinum' },
        { name: 'Google Cloud', description: 'Cloud infrastructure services', logo: '🔵', tier: 'Gold' },
        { name: 'DigitalOcean', description: 'Cloud infrastructure provider', logo: '🌊', tier: 'Silver' }
      ]
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Partnerships with cutting-edge AI research and development organizations.',
      partners: [
        { name: 'OpenAI', description: 'Advanced AI research', logo: '🤖', tier: 'Gold' },
        { name: 'Anthropic', description: 'AI safety and research', logo: '🧠', tier: 'Gold' },
        { name: 'Hugging Face', description: 'Machine learning platform', logo: '🤗', tier: 'Silver' },
        { name: 'Databricks', description: 'Data and AI platform', logo: '📊', tier: 'Silver' }
      ]
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Collaborations with security experts and compliance organizations.',
      partners: [
        { name: 'CrowdStrike', description: 'Cybersecurity solutions', logo: '🦅', tier: 'Gold' },
        { name: 'Palo Alto Networks', description: 'Network security', logo: '🌲', tier: 'Gold' },
        { name: 'Rapid7', description: 'Security analytics', logo: '⚡', tier: 'Silver' },
        { name: 'Qualys', description: 'Cloud security platform', logo: '🛡️', tier: 'Silver' }
      ]
    },
    {
      icon: Database,
      title: 'Data & Analytics',
      description: 'Partnerships with data management and analytics solution providers.',
      partners: [
        { name: 'Snowflake', description: 'Data cloud platform', logo: '❄️', tier: 'Gold' },
        { name: 'Tableau', description: 'Data visualization', logo: '📈', tier: 'Silver' },
        { name: 'MongoDB', description: 'Database platform', logo: '🍃', tier: 'Silver' },
        { name: 'Elastic', description: 'Search and analytics', logo: '🔍', tier: 'Silver' }
      ]
    }
  ]

  const benefits = [
    {
      icon: Zap,
      title: 'Enhanced Capabilities',
      description: 'Access to cutting-edge technologies and expertise through our partner network.'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security solutions backed by industry-leading partners.'
    },
    {
      icon: Rocket,
      title: 'Faster Implementation',
      description: 'Accelerated delivery through proven partner integrations and best practices.'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Solutions validated by our trusted partner ecosystem.'
    }
  ]

  const partnershipLevels = [
    {
      name: 'Platinum',
      description: 'Strategic partnerships with deep integration and joint go-to-market initiatives.',
      benefits: ['Priority support', 'Joint marketing', 'Custom integrations', 'Executive alignment'],
      color: 'from-purple-600 to-pink-600'
    },
    {
      name: 'Gold',
      description: 'Preferred partnerships with significant collaboration and mutual benefits.',
      benefits: ['Enhanced support', 'Co-marketing opportunities', 'Technical collaboration', 'Training access'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'Silver',
      description: 'Standard partnerships with basic collaboration and referral programs.',
      benefits: ['Standard support', 'Referral programs', 'Documentation access', 'Community access'],
      color: 'from-gray-400 to-gray-600'
    }
  ]

const Page = () => {
  return (
    <MainLayout 
      title="Page - Zion Tech Group"
      description="Zion Tech Group page"
    >
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Page</h1>
          <p className="text-xl text-gray-600">Coming soon...</p>
        </div>
      </div>
    </MainLayout>
  );
};

        {/* Partnership Levels */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Partnership Tiers</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer different levels of partnership to accommodate various 
                collaboration needs and business objectives.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {partnershipLevels.map((level, index) => (
                <motion.div
                  key={level.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className={`bg-gradient-to-br ${level.color} text-white p-8 rounded-2xl h-full`}>
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold mb-2">{level.name}</h3>
                      <p className="text-white/90">{level.description}</p>
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {level.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center gap-3">
                          <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-sm font-bold">✓</span>
                          </div>
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Become a Partner */}
        <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Become a Partner
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-zion-slate-light mb-8"
            >
              Join our ecosystem of technology leaders and help us deliver 
              innovative solutions to businesses worldwide.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a 
                href="/contact" 
                className="px-8 py-3 bg-white text-zion-blue-dark rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
              >
                Contact Us
              </a>
              <a 
                href="mailto:partnerships@ziontechgroup.com" 
                className="px-8 py-3 border-2 border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold"
              >
                partnerships@ziontechgroup.com
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </
  )
}>