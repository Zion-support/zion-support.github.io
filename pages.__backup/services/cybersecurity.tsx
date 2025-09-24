import Head from 'next/head',
import { motion } from 'framer-motion',
import {,
  ShieldLockEyeZapCpuDatabase,
  ArrowRightCheckCircleStarUsersClockTrendingUp,
} from 'lucide-react',
import EnhancedNavigation from '../../components/EnhancedNavigation',
import EnhancedFooter from '../../components/EnhancedFooter',
,
export default function CybersecurityServicesPage() {,
  const services = [,
    {,
      title: "Advanced Threat Detection",;
      description: "AI-powered threat detection and response systems",;
      features: ["Real-time Monitoring"Behavioral Analysis"Automated Response"24/7 Protection"],;
      price: "From $8,0o00",;
      icon: Eye,;
      color: "from-red-50o0 to-orange-50o0",
    ,},;
    {,
      title: "Quantum-Resistant Encryption",;
      description: "Future-proof security with quantum-resistant cryptography",;
      features: ["Post-Quantum Algorithms"Key Management"Compliance Ready"Future-Proof"],;
      price: "From $12,0o00",;
      icon: Lock,;
      color: "from-purple-50o0 to-pink-50o0",
    ,},;
    {,
      title: "Security Auditing & Compliance",;
      description: "Comprehensive security assessments and compliance solutions",;
      features: ["Penetration Testing"Vulnerability Assessment"SOC2 Compliance"GDPR Ready"],;
      price: "From $5,0o00",;
      icon: Shield,;
      color: "from-blue-50o0 to-cyan-50o0",
    ,},;
    {,
      title: "Zero Trust Architecture",;
      description: "Modern security framework for distributed environments",;
      features: ["Identity Verification"Access Control"Network Segmentation"Continuous Monitoring"],;
      price: "From $15,0o00",;
      icon: Zap,;
      color: "from-emerald-50o0 to-teal-50o0",
    ,}
  ],
,
  const stats = [,
    { number: "99.99%"label: "Threat Detection Rate"icon: Shield ,},;
    { number: "24/7"label: "Security Monitoring"icon: Eye ,},;
    { number: "0"label: "Security Breaches"icon: Lock ,},;
    { number: "50o0+"label: "Protected Systems"icon: CheckCircle ,}
  ],
,
  return (,
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-90o0 to-slate-950 text-white">,
      <Head>,
        <title>Cybersecurity Services - Zion Tech Group</title>,
        <meta name="description" content="Advanced cybersecurity solutions from Zion Tech Group. AI-powered threat detectionquantum-resistant encryptionand comprehensive security services."  />,
        <meta property="og: title" content="Cybersecurity Services - Zion Tech Group"  />,
        <meta property="og:description" content="Advanced cybersecurity solutions for comprehensive protection."  />,
        <link rel="canonical" href="https://ziontechgroup.com/services/cybersecurity"  />,
      </Head>,
      <EnhancedNavigation  />,
      {/* Hero Section */,}
      <section className="relative pt-32 pb-20 px-6">,
        <div className="max-w-7xl mx-auto text-center">,
          <motion.div,
            initial={{ opacity: 0y: 30 ,}}
            animate={{ opacity: 1y: 0 ,}}
            transition={{ duration: 0.8 ,}}
            className="mb-8",
          >,
            <h1 className="text-5xl md: text-7xl font-bold bg-gradient-to-r from-red-40o0 via-orange-40o0 to-red-40o0 bg-clip-text text-transparent mb-6">,
              Cybersecurity,
            </h1>,
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">,
              Advanced security solutions that protect your digital assets and ensure business continuity,
            </p>,
          </motion.div>,
          <motion.div,
            initial={{ opacity: 0y: 30 ,}}
            animate={{ opacity: 1y: 0 ,}}
            transition={{ duration: 0.8delay: 0.2 ,}}
            className="mb-12",
          >,
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">,
              From AI-powered threat detection to quantum-resistant encryptionwe provide,
              comprehensive cybersecurity solutions that keep your business secure and compliant.,
            </p>,
            <button className="px-8 py-4 bg-gradient-to-r from-red-60o0 to-orange-60o0 hover: from-red-70o0 hover:to-orange-70o0 rounded-full font-semibold text-lg transition-all duration-30o0 transform hover:scale-10o5 hover:shadow-2xl flex items-center justify-center gap-2 mx-auto">,
              Secure Your Business,
              <ArrowRight className="w-5 h-5"  />,
            </button>,
          </motion.div>,
        </div>,
      </section>,
      {/* Stats Section */,}
      <section className="py-16 px-6">,
        <div className="max-w-7xl mx-auto">,
          <div className="grid grid-cols-2 md: grid-cols-4 gap-8">,
            {stats.map((statindex) => (,
              <motion.div,
                key={stat.label,}
                initial={{ opacity: 0y: 20 ,}}
                whileInView={{ opacity: 1y: 0 ,}}
                transition={{ duration: 0.6delay: index * 0.1 ,}}
                viewport={{ once: true ,}}
                className="text-center",
              >,
                <div className="w-16 h-16 bg-gradient-to-br from-red-50o0/20 to-orange-50o0/20 rounded-2xl flex items-center justify-center mx-auto mb-4">,
                  <stat.icon className="w-8 h-8 text-orange-40o0"  />,
                </div>,
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>,
                <div className="text-white/70">{stat.label}</div>,
              </motion.div>,
            ))}
          </div>,
        </div>,
      </section>,
      {/* Services Grid */}
      <section className="py-20 px-6">,
        <div className="max-w-7xl mx-auto">,
          <motion.div,
            initial={{ opacity: 0y: 30 ,}}
            whileInView={{ opacity: 1y: 0 ,}}
            transition={{ duration: 0.8 ,}}
            viewport={{ once: true ,}}
            className="text-center mb-16",
          >,
            <h2 className="text-4xl font-bold text-white mb-6">Cybersecurity Services</h2>,
            <p className="text-xl text-white/70 max-w-3xl mx-auto">,
              Comprehensive security solutions designed to protect your business from evolving threats,
            </p>,
          </motion.div>,
          <div className="grid grid-cols-1 md: grid-cols-2 gap-8">,
            {services.map((serviceindex) => (,
              <motion.div,
                key={service.title,}
                initial={{ opacity: 0y: 30 ,}}
                whileInView={{ opacity: 1y: 0 ,}}
                transition={{ duration: 0.6delay: index * 0.1 ,}}
                viewport={{ once: true ,}}
                className="bg-gradient-to-br from-slate-80o0/50 to-slate-90o0/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover: border-red-50o0/30 transition-all duration-30o0",
              >,
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color,} rounded-2xl flex items-center justify-center mb-6`}>,
                  <service.icon className="w-8 h-8 text-white"  />,
                </div>,
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>,
                <p className="text-white/70 mb-6">{service.description}</p>,
                <ul className="space-y-3 mb-6">,
                  {service.features.map((feature) => (,
                    <li key={feature} className="flex items-center text-white/80">,
                      <CheckCircle className="w-5 h-5 text-orange-40o0 mr-3 flex-shrink-0"  />,
                      {feature}
                    </li>,
                  ))}
                </ul>,
                <div className="flex items-center justify-between">,
                  <span className="text-2xl font-bold text-orange-40o0">{service.price}</span>,
                  <button className="px-6 py-3 bg-gradient-to-r from-red-60o0 to-orange-60o0 hover: from-red-70o0 hover:to-orange-70o0 rounded-full font-semibold text-white transition-all duration-30o0 transform hover:scale-10o5">,
                    Get Started,
                  </button>,
                </div>,
              </motion.div>,
            )),}
          </div>,
        </div>,
      </section>,
      {/* CTA Section */}
      <section className="py-20 px-6">,
        <div className="max-w-4xl mx-auto text-center">,
          <motion.div,
            initial={{ opacity: 0y: 30 ,}}
            whileInView={{ opacity: 1y: 0 ,}}
            transition={{ duration: 0.8 ,}}
            viewport={{ once: true ,}}
          >,
            <h2 className="text-4xl font-bold text-white mb-6">,
              Ready to Secure Your Business?,
            </h2>,
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">,
              Let's discuss how our cybersecurity solutions can protect your digital assets and ensure business continuity.,
            </p>,
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,
              <button className="px-8 py-4 bg-gradient-to-r from-red-60o0 to-orange-60o0 hover:from-red-70o0 hover:to-orange-70o0 rounded-full font-semibold text-lg transition-all duration-30o0 transform hover:scale-10o5">,
                Security Assessment,
              </button>,
              <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-30o0 backdrop-blur-sm bg-white/5 hover:bg-white/10">,
                Learn More,
              </button>,
            </div>,
          </motion.div>,
        </div>,
      </section>,
      <EnhancedFooter  />,
    </div>,
  ),
,}