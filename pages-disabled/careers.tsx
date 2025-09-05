import React from 'react',
import Head from 'next/head',
import { motion } from 'framer-motion',
import { 
  Users, Rocket, Brain, Atom, Shield, Cloud,
  ArrowRight, MapPin, Clock, DollarSign, Star, Zap
} from 'lucide-react',
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground',
export default function CareersPage() {
  const openPositions = [
    {
      title: &quot;Senior AI Engineer&quot;,
      department: &quot;AI & Machine Learning&quot;,
      location: &quot;San Francisco, CA / Remote&quot;,
      type: &quot;Full-time&quot;,
      experience: &quot;5+ years&quot;,
      salary: &quot;$150,000 - $200,000&quot;,
      description: &quot;Lead the development of cutting-edge AI solutions and neural networks for enterprise clients&quot;,
      requirements: [
        &quot;Advanced degree in Computer Science, AI, or related field&quot;,
        &quot;Expertise in TensorFlow, PyTorch, and deep learning frameworks&quot;,
        &quot;Experience with large-scale AI model deployment&quot;,
        &quot;Strong background in machine learning algorithms&quot;
      ],
      benefits: [&quot;Competitive salary&quot;, &quot;Equity options&quot;, &quot;Health insurance&quot;, &quot;Flexible work arrangements&quot;],
      icon: Brain,
      color: &quot;from-purple-500 to-pink-500&quot;
    },
    {
      title: &quot;Quantum Computing Researcher&quot;,
      department: &quot;Quantum Computing&quot;,
      location: &quot;San Francisco, CA / Remote&quot;,
      type: &quot;Full-time&quot;,
      experience: &quot;3+ years&quot;,
      salary: &quot;$120,000 - $180,000&quot;,
      description: &quot;Research and develop quantum algorithms and quantum-resistant cryptography solutions&quot;,
      requirements: [
        &quot;PhD in Physics, Computer Science, or related field&quot;,
        &quot;Experience with quantum computing frameworks (Qiskit, Cirq)&quot;,
        &quot;Knowledge of quantum algorithms and cryptography&quot;,
        &quot;Strong mathematical and analytical skills&quot;
      ],
      benefits: [&quot;Competitive salary&quot;, &quot;Research funding&quot;, &quot;Conference attendance&quot;, &quot;Health insurance&quot;],
      icon: Atom,
      color: &quot;from-blue-500 to-cyan-500&quot;
    },
    {
      title: &quot;Cybersecurity Architect&quot;,
      department: &quot;Cybersecurity&quot;,
      location: &quot;San Francisco, CA / Remote&quot;,
      type: &quot;Full-time&quot;,
      experience: &quot;7+ years&quot;,
      salary: &quot;$160,000 - $220,000&quot;,
      description: &quot;Design and implement enterprise-level security architectures and zero-trust solutions&quot;,
      requirements: [
        &quot;Bachelor's degree in Computer Science or related field&quot;,
        &quot;Expertise in security frameworks and compliance standards&quot;,
        &quot;Experience with zero-trust architecture implementation&quot;,
        &quot;Strong knowledge of threat detection and response&quot;
      ],
      benefits: [&quot;Competitive salary&quot;, &quot;Security certifications&quot;, &quot;Health insurance&quot;, &quot;Remote work&quot;],
      icon: Shield,
      color: &quot;from-red-500 to-orange-500&quot;
    },
    {
      title: &quot;Cloud Infrastructure Engineer&quot;,
      department: &quot;Cloud Infrastructure&quot;,
      location: &quot;San Francisco, CA / Remote&quot;,
      type: &quot;Full-time&quot;,
      experience: &quot;4+ years&quot;,
      salary: &quot;$130,000 - $180,000&quot;,
      description: &quot;Build and maintain scalable cloud infrastructure and DevOps automation systems&quot;,
      requirements: [
        &quot;Bachelor's degree in Computer Science or related field&quot;,
        &quot;Expertise in AWS, Azure, or GCP&quot;,
        &quot;Experience with Kubernetes, Docker, and CI/CD&quot;,
        &quot;Strong knowledge of infrastructure as code&quot;
      ],
      benefits: [&quot;Competitive salary&quot;, &quot;Cloud certifications&quot;, &quot;Health insurance&quot;, &quot;Flexible hours&quot;],
      icon: Cloud,
      color: &quot;from-emerald-500 to-teal-500&quot;
    },
    {
      title: &quot;Data Scientist&quot;,
      department: &quot;Data Analytics&quot;,
      location: &quot;San Francisco, CA / Remote&quot;,
      type: &quot;Full-time&quot;,
      experience: &quot;3+ years&quot;,
      salary: &quot;$110,000 - $160,000&quot;,
      description: &quot;Develop predictive analytics models and data-driven insights for business clients&quot;,
      requirements: [
        &quot;Master's degree in Data Science, Statistics, or related field&quot;,
        &quot;Proficiency in Python, R, and SQL&quot;,
        &quot;Experience with machine learning and statistical modeling&quot;,
        &quot;Strong analytical and problem-solving skills&quot;
      ],
      benefits: [&quot;Competitive salary&quot;, &quot;Learning budget&quot;, &quot;Health insurance&quot;, &quot;Remote work&quot;],
      icon: Zap,
      color: &quot;from-indigo-500 to-purple-500&quot;
    },
    {
      title: &quot;Product Manager&quot;,
      department: &quot;Product&quot;,
      location: &quot;San Francisco, CA / Remote&quot;,
      type: &quot;Full-time&quot;,
      experience: &quot;5+ years&quot;,
      salary: &quot;$140,000 - $190,000&quot;,
      description: &quot;Lead product strategy and development for our technology solutions portfolio&quot;,
      requirements: [
        &quot;Bachelor's degree in Business, Engineering, or related field&quot;,
        &quot;Experience in B2B SaaS or technology products&quot;,
        &quot;Strong analytical and strategic thinking skills&quot;,
        &quot;Excellent communication and leadership abilities&quot;
      ],
      benefits: [&quot;Competitive salary&quot;, &quot;Equity options&quot;, &quot;Health insurance&quot;, &quot;Professional development&quot;],
      icon: Rocket,
      color: &quot;from-yellow-500 to-orange-500&quot;
    }
  ],

  const benefits = [
    {
      title: &quot;Competitive Compensation&quot;,
      description: &quot;Above-market salaries with equity options and performance bonuses&quot;,
      icon: DollarSign,
      color: &quot;from-green-500 to-emerald-500&quot;
    },
    {
      title: &quot;Health & Wellness&quot;,
      description: &quot;Comprehensive health, dental, and vision insurance for you and your family&quot;,
      icon: Star,
      color: &quot;from-blue-500 to-cyan-500&quot;
    },
    {
      title: &quot;Flexible Work&quot;,
      description: &quot;Remote work options and flexible hours to support work-life balance&quot;,
      icon: Clock,
      color: &quot;from-purple-500 to-pink-500&quot;
    },
    {
      title: &quot;Professional Growth&quot;,
      description: &quot;Continuous learning opportunities, conferences, and career development&quot;,
      icon: Rocket,
      color: &quot;from-orange-500 to-red-500&quot;
    }
  ],

  return (
    <UltraAdvancedFuturisticBackground>
      <div className=&quot;min-h-screen&quot;>
        <Head>
          <title>Careers - Zion Tech Group | Join Our Revolutionary Technology Team</title>
          <meta name=&quot;description&quot; content=&quot;Join Zion Tech Group's team of innovators. Explore career opportunities in AI, quantum computing, and emerging technologies. Remote work, competitive benefits, and cutting-edge projects.&quot; />        </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className=&quot;relative pt-32 pb-20 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=&quot;mb-8&quot;          >
            <h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6&quot;>
              Join Our Team
            </h1>
            <p className=&quot;text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed&quot;>
              Build the future of technology with cutting-edge AI, quantum computing, and cybersecurity solutions            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className=&quot;mb-12&quot;          >
            <p className=&quot;text-lg text-white/70 max-w-2xl mx-auto mb-8&quot;>
              Work alongside world-class engineers and researchers to solve the most complex 
              technological challenges and shape the future of computing.
            </p>
            <button className=&quot;px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 mx-auto&quot;>
              View Open Positions
              <ArrowRight className=&quot;w-5 h-5&quot; />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className=&quot;py-20 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;          >
            <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>Why Work at Zion Tech Group?</h2>
            <p className=&quot;text-xl text-white/70 max-w-3xl mx-auto&quot;>
              We offer competitive benefits and a collaborative environment that fosters innovation and growth
            </p>
          </motion.div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300&quot;
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <benefit.icon className=&quot;w-8 h-8 text-white&quot; />
                </div>
                <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>{benefit.title}</h3>
                <p className=&quot;text-white/70&quot;>{benefit.description}</p>              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className=&quot;py-20 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;          >
            <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>Open Positions</h2>
            <p className=&quot;text-xl text-white/70 max-w-3xl mx-auto&quot;>
              Join our team of innovators and help build the future of technology
            </p>
          </motion.div>

          <div className=&quot;space-y-6&quot;>
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300&quot;
              >
                <div className=&quot;flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6&quot;>
                  <div className=&quot;flex-1&quot;>
                    <div className=&quot;flex items-center gap-4 mb-4&quot;>
                      <div className={`w-12 h-12 bg-gradient-to-br ${position.color} rounded-xl flex items-center justify-center`}>
                        <position.icon className=&quot;w-6 h-6 text-white&quot; />
                      </div>
                      <div>
                        <h3 className=&quot;text-2xl font-bold text-white&quot;>{position.title}</h3>
                        <p className=&quot;text-white/70&quot;>{position.department}</p>
                      </div>
                    </div>
                    
                    <p className=&quot;text-white/80 mb-4&quot;>{position.description}</p>
                    
                    <div className=&quot;flex flex-wrap gap-4 mb-4&quot;>
                      <div className=&quot;flex items-center gap-2 text-white/70&quot;>
                        <MapPin className=&quot;w-4 h-4&quot; />
                        <span>{position.location}</span>
                      </div>
                      <div className=&quot;flex items-center gap-2 text-white/70&quot;>
                        <Clock className=&quot;w-4 h-4&quot; />
                        <span>{position.type}</span>
                      </div>
                      <div className=&quot;flex items-center gap-2 text-white/70&quot;>
                        <Users className=&quot;w-4 h-4&quot; />
                        <span>{position.experience}</span>
                      </div>
                      <div className=&quot;flex items-center gap-2 text-white/70&quot;>
                        <DollarSign className=&quot;w-4 h-4&quot; />
                        <span>{position.salary}</span>
                      </div>
                    </div>
                    
                    <div className=&quot;mb-4&quot;>
                      <h4 className=&quot;text-sm font-semibold text-white/60 mb-2 uppercase tracking-wider&quot;>Requirements</h4>
                      <ul className=&quot;space-y-1&quot;>
                        {position.requirements.map((req, idx) => (
                          <li key={idx} className=&quot;text-sm text-white/80 flex items-center&quot;>
                            <div className=&quot;w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2&quot; />
                            {req}                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className=&quot;mb-4&quot;>
                      <h4 className=&quot;text-sm font-semibold text-white/60 mb-2 uppercase tracking-wider&quot;>Benefits</h4>
                      <div className=&quot;flex flex-wrap gap-2&quot;>
                        {position.benefits.map((benefit) => (
                          <span key={benefit} className=&quot;text-xs bg-white/5 text-white/70 px-2 py-1 rounded&quot;>
                            {benefit}                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className=&quot;lg:flex-shrink-0&quot;>
                    <button className=&quot;px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105&quot;>
                      Apply Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=&quot;py-20 px-6&quot;>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;>          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
          >
            <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>
              Don't See the Right Role?
            </h2>
            <p className=&quot;text-xl text-white/70 mb-8 max-w-2xl mx-auto&quot;>
              We're always looking for talented individuals. Send us your resume and let's discuss how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">                Send Resume
              </button>
              <button className=&quot;px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10&quot;>
                Contact Recruiting
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </UltraAdvancedFuturisticBackground>
  )
},

      <EnhancedFooter />
    </div>
  )
}
