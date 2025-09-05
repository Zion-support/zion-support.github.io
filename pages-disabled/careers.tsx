import React from 'react';
import Head from 'next/head';
import {_Users, _Rocket, _Brain, _Atom, _Shield, _Cloud, _ArrowRight, _MapPin, _Clock, _DollarSign, _Star, _Zap} from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';

export default function CareersPage() {_const _openPositions = [
    {
      title: "Senior AI Engineer", _department: "AI & Machine Learning", _location: "San Francisco, _CA / Remote", _type: "Full-time", _experience: "5+ years", _salary: "$150, _000 - $200, _000", _description: "Lead the development of cutting-edge AI solutions and neural networks for enterprise clients", _requirements: [
        "Advanced degree in Computer Science, _AI, _or related field", _"Expertise in TensorFlow, _PyTorch, _and deep learning frameworks", _"Experience with large-scale AI model deployment", _"Strong background in machine learning algorithms"
      ], _benefits: ["Competitive salary", _"Equity options", _"Health insurance", _"Flexible work arrangements"], _icon: Brain, _color: "from-purple-500 to-pink-500"},
    {_title: "Quantum Computing Researcher", _department: "Quantum Computing", _location: "San Francisco, _CA / Remote", _type: "Full-time", _experience: "3+ years", _salary: "$120, _000 - $180, _000", _description: "Research and develop quantum algorithms and quantum-resistant cryptography solutions", _requirements: [
        "PhD in Physics, _Computer Science, _or related field", _"Experience with quantum computing frameworks (Qiskit, _Cirq)", _"Knowledge of quantum algorithms and cryptography", _"Strong mathematical and analytical skills"
      ], _benefits: ["Competitive salary", _"Research funding", _"Conference attendance", _"Health insurance"], _icon: Atom, _color: "from-blue-500 to-cyan-500"},
    {_title: "Cybersecurity Architect", _department: "Cybersecurity", _location: "San Francisco, _CA / Remote", _type: "Full-time", _experience: "7+ years", _salary: "$160, _000 - $220, _000", _description: "Design and implement enterprise-level security architectures and zero-trust solutions", _requirements: [
        "Bachelor's degree in Computer Science or related field", _"Expertise in security frameworks and compliance standards", _"Experience with zero-trust architecture implementation", _"Strong knowledge of threat detection and response"
      ], _benefits: ["Competitive salary", _"Security certifications", _"Health insurance", _"Remote work"], _icon: Shield, _color: "from-red-500 to-orange-500"},
    {_title: "Cloud Infrastructure Engineer", _department: "Cloud Infrastructure", _location: "San Francisco, _CA / Remote", _type: "Full-time", _experience: "4+ years", _salary: "$130, _000 - $180, _000", _description: "Build and maintain scalable cloud infrastructure and DevOps automation systems", _requirements: [
        "Bachelor's degree in Computer Science or related field", _"Expertise in AWS, _Azure, _or GCP", _"Experience with Kubernetes, _Docker, _and CI/CD", _"Strong knowledge of infrastructure as code"
      ], _benefits: ["Competitive salary", _"Cloud certifications", _"Health insurance", _"Flexible hours"], _icon: Cloud, _color: "from-emerald-500 to-teal-500"},
    {_title: "Data Scientist", _department: "Data Analytics", _location: "San Francisco, _CA / Remote", _type: "Full-time", _experience: "3+ years", _salary: "$110, _000 - $160, _000", _description: "Develop predictive analytics models and data-driven insights for business clients", _requirements: [
        "Master's degree in Data Science, _Statistics, _or related field", _"Proficiency in Python, _R, _and SQL", _"Experience with machine learning and statistical modeling", _"Strong analytical and problem-solving skills"
      ], _benefits: ["Competitive salary", _"Learning budget", _"Health insurance", _"Remote work"], _icon: Zap, _color: "from-indigo-500 to-purple-500"},
    {_title: "Product Manager", _department: "Product", _location: "San Francisco, _CA / Remote", _type: "Full-time", _experience: "5+ years", _salary: "$140, _000 - $190, _000", _description: "Lead product strategy and development for our technology solutions portfolio", _requirements: [
        "Bachelor's degree in Business, _Engineering, _or related field", _"Experience in B2B SaaS or technology products", _"Strong analytical and strategic thinking skills", _"Excellent communication and leadership abilities"
      ], _benefits: ["Competitive salary", _"Equity options", _"Health insurance", _"Professional development"], _icon: Rocket, _color: "from-yellow-500 to-orange-500"}
  ];

  const _benefits = [
    {_title: "Competitive Compensation", _description: "Above-market salaries with equity options and performance bonuses", _icon: DollarSign, _color: "from-green-500 to-emerald-500"},
    {_title: "Health & Wellness", _description: "Comprehensive health, _dental, _and vision insurance for you and your family", _icon: Star, _color: "from-blue-500 to-cyan-500"},
    {_title: "Flexible Work", _description: "Remote work options and flexible hours to support work-life balance", _icon: Clock, _color: "from-purple-500 to-pink-500"},
    {_title: "Professional Growth", _description: "Continuous learning opportunities, _conferences, _and career development", _icon: Rocket, _color: "from-orange-500 to-red-500"}
  ];

  return (_<UltraAdvancedFuturisticBackground>
      <div className="min-h-screen">
        <Head>
          <title>Careers - Zion Tech Group | Join Our Revolutionary Technology Team</title>
          <meta name="description" content="Join Zion Tech Group's team of innovators. Explore career opportunities in AI, _quantum computing, _and emerging technologies. Remote work, _competitive benefits, _and cutting-edge projects." />
        </Head>

      <EnhancedNavigation />

      {_/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Build the future of technology with cutting-edge AI, _quantum computing, _and cybersecurity solutions
            </p>
          </motion.div>

          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8, _delay: 0.2}}
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

      {_/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Why Work at Zion Tech Group?</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              We offer competitive benefits and a collaborative environment that fosters innovation and growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {_benefits.map((benefit, _index) => (
              <motion.div
                key={benefit.title}
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className={_`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{_benefit.title}</h3>
                <p className="text-white/70">{_benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* Open Positions */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Open Positions</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Join our team of innovators and help build the future of technology
            </p>
          </motion.div>

          <div className="space-y-6">
            {_openPositions.map(_(position, _index) => (_<motion.div
                key={position.title}
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={_`w-12 h-12 bg-gradient-to-br ${position.color} rounded-xl flex items-center justify-center`}>
                        <position.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{_position.title}</h3>
                        <p className="text-white/70">{_position.department}</p>
                      </div>
                    </div>
                    
                    <p className="text-white/80 mb-4">{_position.description}</p>
                    
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center gap-2 text-white/70">
                        <MapPin className="w-4 h-4" />
                        <span>{_position.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/70">
                        <Clock className="w-4 h-4" />
                        <span>{_position.type}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/70">
                        <Users className="w-4 h-4" />
                        <span>{_position.experience}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/70">
                        <DollarSign className="w-4 h-4" />
                        <span>{_position.salary}</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white/60 mb-2 uppercase tracking-wider">Requirements</h4>
                      <ul className="space-y-1">
                        {_position.requirements.map((req, _idx) => (
                          <li key={idx} className="text-sm text-white/80 flex items-center">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2" />
                            {_req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white/60 mb-2 uppercase tracking-wider">Benefits</h4>
                      <div className="flex flex-wrap gap-2">
                        {_position.benefits.map(_(benefit) => (
                          <span key={benefit} className="text-xs bg-white/5 text-white/70 px-2 py-1 rounded">
                            {_benefit}
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
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
        </motion.div>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
};

      <EnhancedFooter />
    </div>
  );
}
