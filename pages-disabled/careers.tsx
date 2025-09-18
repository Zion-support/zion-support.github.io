import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
} from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';

export default function CareersPage() {
  const openPositions = [
    {
      title: "Senior AI Engineer",
      department: "AI & Machine Learning",
      type: "Full-time",
      experience: "5+ years",
      salary: "$150,000 - $200,000",
      description: "Lead the development of cutting-edge AI solutions and neural networks for enterprise clients",
      requirements: [
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Quantum Computing Researcher",
      department: "Quantum Computing",
      type: "Full-time",
      experience: "3+ years",
      salary: "$120,000 - $180,000",
      description: "Research and develop quantum algorithms and quantum-resistant cryptography solutions",
      requirements: [
      icon: Atom,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Cybersecurity Architect",
      department: "Cybersecurity",
      type: "Full-time",
      experience: "7+ years",
      salary: "$160,000 - $220,000",
      description: "Design and implement enterprise-level security architectures and zero-trust solutions",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "Expertise in security frameworks and compliance standards",
        "Experience with zero-trust architecture implementation",
        "Strong knowledge of threat detection and response"
      ],
      icon: Shield,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Cloud Infrastructure Engineer",
      department: "Cloud Infrastructure",
      type: "Full-time",
      experience: "4+ years",
      salary: "$130,000 - $180,000",
      description: "Build and maintain scalable cloud infrastructure and DevOps automation systems",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
      icon: Cloud,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Data Scientist",
      department: "Data Analytics",
      type: "Full-time",
      experience: "3+ years",
      salary: "$110,000 - $160,000",
      description: "Develop predictive analytics models and data-driven insights for business clients",
      requirements: [
      icon: Zap,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Product Manager",
      department: "Product",
      type: "Full-time",
      experience: "5+ years",
      salary: "$140,000 - $190,000",
      description: "Lead product strategy and development for our technology solutions portfolio",
      requirements: [
        "Experience in B2B SaaS or technology products",
        "Strong analytical and strategic thinking skills",
        "Excellent communication and leadership abilities"
      ],
      icon: Rocket,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const benefits = [
    {
      title: "Competitive Compensation",
      description: "Above-market salaries with equity options and performance bonuses",
      icon: DollarSign,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Health & Wellness",
      icon: Star,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Flexible Work",
      description: "Remote work options and flexible hours to support work-life balance",
      icon: Clock,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Professional Growth",
      icon: Rocket,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <UltraAdvancedFuturisticBackground>
      <div className="min-h-screen">
        <Head>
          <title>Careers - Zion Tech Group | Join Our Revolutionary Technology Team</title>
        </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            </p>
          </motion.div>

          <motion.div
            className="mb-12"
          >
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              Work alongside world-class engineers and researchers to solve the most complex 
              technological challenges and shape the future of computing.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 mx-auto">
              View Open Positions
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Why Work at Zion Tech Group?</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              We offer competitive benefits and a collaborative environment that fosters innovation and growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-white/70">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Open Positions</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Join our team of innovators and help build the future of technology
            </p>
          </motion.div>

          <div className="space-y-6">
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${position.color} rounded-xl flex items-center justify-center`}>
                        <position.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{position.title}</h3>
                        <p className="text-white/70">{position.department}</p>
                      </div>
                    </div>
                    
                    <p className="text-white/80 mb-4">{position.description}</p>
                    
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center gap-2 text-white/70">
                        <MapPin className="w-4 h-4" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/70">
                        <Clock className="w-4 h-4" />
                        <span>{position.type}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/70">
                        <Users className="w-4 h-4" />
                        <span>{position.experience}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/70">
                        <DollarSign className="w-4 h-4" />
                        <span>{position.salary}</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white/60 mb-2 uppercase tracking-wider">Requirements</h4>
                      <ul className="space-y-1">
                          <li key={idx} className="text-sm text-white/80 flex items-center">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white/60 mb-2 uppercase tracking-wider">Benefits</h4>
                      <div className="flex flex-wrap gap-2">
                        {position.benefits.map((benefit) => (
                          <span key={benefit} className="text-xs bg-white/5 text-white/70 px-2 py-1 rounded">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:flex-shrink-0">
                    <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105">
                      Apply Now
                    </button>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and let's discuss how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Send Resume
              </button>
              <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10">
                Contact Recruiting
              </button>
            </div>
          </div>
  );
};

      <EnhancedFooter />
    </div>
  );
}
