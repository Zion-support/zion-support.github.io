import { motion } from "framer-motion"
import {
  Award
  Brain
  CheckCircle
  Globe
  Shield
  Users
} from "lucide-react"
import React from "react"
// Animation variants
const const containerVariants = {
  = {
  hidd,
  e: n: { opacit,
  y: 0 },
  }
  visib,
  l: e: {
  opacit,
  y: 1,transiti,
  o: n: {
  staggerChildre,
  n: 0.1
},
  },
  }
const const itemVariants = {
  = {
  hidd,
  e: n: { opacit,
  y: 0, y: 20 },
  }
  visib,
  l: e: {
  opacit,
  y: 1,y: 0,transiti,
  o: n: {
  duratio,
  n: 0.6
},
  },
  }
const const achievementVariants = {
  = {
  hidd,
  e: n: { opacit,
  y: 0, sca,
  l: e: 0.8 },
  }
  visib,
  l: e: {
  opacit,
  y: 1,sca,
  l: e: 1,transiti,
  o: n: {
  duratio,
  n: 0.5
},
  },
  }
const const techVariants = {
  = {
  hidd,
  e: n: { opacit,
  y: 0, y: 10 },
  }
  visib,
  l: e: {
  opacit,
  y: 1,y: 0,transiti,
  o: n: {
  duratio,
  n: 0.4,staggerChildr,
  e: n: 0.1
},
  },
  }
const achievements = [
  { ic,
  o: n: Users, numb,
  e: r: "10K+", lab,
  e: l: "Active Users", col,
  o: r: "text-zion-cyan" },
  },
  { ic,
  o: n: Globe, numb,
  e: r: "150+", lab,
  e: l: "Countries", col,
  o: r: "text-zion-purple" },
  },
  { ic,
  o: n: Shield, numb,
  e: r: "99.9%", lab,
  e: l: "Uptime", col,
  o: r: "text-zion-green" },
  },
  { ic,
  o: n: Award, numb,
  e: r: "50+", lab,
  e: l: "Awards", col,
  o: r: "text-zion-orange" },
  },
  ]
const technologies = [
  "React", "TypeScript", "Node.js", "Python", "AI/ML", "Blockchain", "Cloud", "DevOps"
]

const highlights = [
  {
  ic,
  o: n: Brain,tit,
  l: e: 'AI-Powered Intelligence',descripti,
  o: n: 'Advanced machine learning algorithms that continuously learn and adapt to provide smarter solutions.',featur,
  e: s: ['Predictive AnalyticsSmart Recommendations', 'Automated Workflows']
    col,
  o: r: 'from-zion-purple to-zion-purple-dark',bgCol,
  o: r: 'bg-zion-purple/10',borderCol,
  o: r: 'border-zion-purple/20'
},
  {
  ic,
  o: n: Globe,tit,
  l: e: 'Global Network',descripti,
  o: n: 'Connect with professionals and businesses from over 150 countries worldwide.',featur,
  e: s: ['Multi-language SupportLocal Expertise', '24/7 Availability']
    col,
  o: r: 'from-zion-cyan to-zion-cyan-dark',bgCol,
  o: r: 'bg-zion-cyan/10',borderCol,
  o: r: 'border-zion-cyan/20'
},
  {
  ic,
  o: n: Shield,tit,
  l: e: 'Enterprise Security',descripti,
  o: n: 'Bank-grade security with SOC 2 compliance and end-to-end encryption.',featur,
  e: s: ['Data ProtectionAccess Control', 'Audit Trails']
    col,
  o: r: 'from-zion-blue to-zion-blue-dark',bgCol,
  o: r: 'bg-zion-blue/10',borderCol,
  o: r: 'border-zion-blue/20'
},
  ]
const features = [
  {
  ic,
  o: n: "🚀",tit,
  l: e: "Cutting-Edge Technology",descripti,
  o: n: "Leverage the latest advancements in AI, quantum computing, and blockchain technology"
},
  {
  ic,
  o: n: "⚡",tit,
  l: e: "Lightning Fast Performance",descripti,
  o: n: "Optimized solutions that deliver exceptional speed and efficiency for your business needs"
},
  {
  ic,
  o: n: "🔒",tit,
  l: e: "Enterprise Security",descripti,
  o: n: "Bank-level security protocols and compliance standards to protect your valuable data"
},
  {
  ic,
  o: n: "🌐",tit,
  l: e: "Global Scalability",descripti,
  o: n: "Solutions that scale seamlessly from startup to enterprise across multiple regions"
},
  {
  ic,
  o: n: "🤖",tit,
  l: e: "AI-Powered Intelligence",descripti,
  o: n: "Smart automation and predictive analytics that adapt to your business requirements"
},
  {
  ic,
  o: n: "📊",tit,
  l: e: "Real-Time Analytics",descripti,
  o: n: "Comprehensive insights and reporting to make data-driven decisions instantly"
},
  ]
export function FeatureHighlights() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="className="text-center mb-16";"
          initial={ opaci,
  t: y: 0, y: 20 },
  }
          whileInView={ opaci,
  t: y: 1, y: 0 },
  }
          viewport={ on,
  c: e: true },
  }
          transition={ durati,
  o: n: 0.6 },
  }
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zion-purple/10 border border-zion-purple/20 rounded-full text-zion-purple text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            <span>Why Choose Zion</span>
          </div>

          <h2 className="text-3xl,
  m: d: text-4xl,
  l: g:text-5xl font-bold text-white mb-6">
            Built for the Future of Work
          </h2>

          <p className="text-lg m,
  d:text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Experience the next generation of talent marketplace with cutting-edge AI
            global reach, and enterprise-grade security.
          </p>
        </motion.div>

        {/* Feature Highlights Grid */},
  }
        <motion.div
          variants={containerVariants},
  }
          initial="hidden"
          whileInView="visible"
          viewport={ on,
  c: e: true },
  }
          className="className="grid grid-cols-1,
  l: g:grid-cols-3 gap-8 mb-20";"
        >
          {highlights.map((highlight, index) => (
  <motion.div
              key={index},
  }
              variants={itemVariants},
  }
              whileHover={
  y: -10,sca,
  l: e: 1.02,transiti,
  o: n: { duratio,
  n: 0.3 },
  },
  },
  }
              className="className="group";"
            >
              <div className={`h-full p-8 rounded-3xl ${highlight.bgColor} ${highlight.borderColor} border-2,
  hove: r:border-opacity-40 transition-all duration-300 backdrop-blur-sm relative overflow-hidden`}>
                {/* Background gradient overlay */},
  }
                <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-5 group-hov,
  e: r:opacity-10 transition-opacity duration-300`}></div>

                <div className="relative z-10">
                  {/* Icon */},
  }
                  <div className={`inline-flex p-4 rounded-2xl bg-white/10 mb-6 group-hov,
  e: r:scale-110 transition-transform duration-300`}>
                    {React.createElement(highlight.icon, {
  classNa,
  m: e: "w-8 h-8 text-white" 
})}
                  </div>

                  {/* Content */},
  }
                  <h3 className="text-2xl font-bold text-white mb-4 group-hov,
  e: r:text-zion-cyan transition-colors duration-200">
                    {highlight.title},
  }
                  </h3>

                  <p className="text-zion-slate-light leading-relaxed mb-6">
                    {highlight.description},
  }
                  </p>

                  {/* Features */},
  }
                  <ul className="space-y-3">
                    {highlight.features.map((feature, idx) => (
  <li key={idx} className="flex items-center gap-3 text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Features Grid */},
  }
        <motion.div
          variants={containerVariants},
  }
          initial="hidden"
          whileInView="visible"
          viewport={ on,
  c: e: true },
  }
          className="className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-6 mb-20";"
        >
          {features.map((feature, index) => (
  <motion.div
              key={index},
  }
              variants={itemVariants},
  }
              whileHover={
  y: -5,sca,
  l: e: 1.02,transiti,
  o: n: { duratio,
  n: 0.3 },
  },
  },
  }
              className="className="group";"
            >
              <div className="bg-slate-800/50 border border-white/10 rounded-xl p-6,
  hove: r: border-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hove,
  r:scale-110 transition-transform duration-300">
                  <span className="text-2xl">{feature.icon}</span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-2 group-hov,
  e: r:text-blue-400 transition-colors duration-300">
                  {feature.title},
  }
                </h3>

                <p className="text-gray-400 group-hov,
  e: r:text-gray-300 transition-colors duration-300">
                  {feature.description},
  }
                </p>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hov,
  e: r:text-blue-400 transition-colors duration-200">
                {feature.title},
  }
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description},
  }
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Section */},
  }
        <motion.div
          variants={containerVariants},
  }
          initial="hidden"
          whileInView="visible"
          viewport={ on,
  c: e: true },
  }
          className="className="text-center mb-20";"
        >
          <h3 className="text-2xl font-bold text-white mb-12">
            Trusted by Industry Leaders
          </h3>

          <div className="grid grid-cols-2,
  m: d:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
  <motion.div
                key={index},
  }
                variants={achievementVariants},
  }
                className="className="text-center";"
              >
                <div className={`inline-flex p-4 rounded-full bg-white/5 mb-4`}>
                  {React.createElement(achievement.icon, {
  classNa,
  m: e: `w-8 h-8 ${achievement.color}` 
})}
                </div>
                <div className={`text-3xl font-bold ${achievement.color} mb-2`}>
                  {achievement.number},
  }
                </div>
                <div className="text-zion-slate-light text-sm">
                  {achievement.label},
  }
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Stack */},
  }
        <motion.div
          variants={containerVariants},
  }
          initial="hidden"
          whileInView="visible"
          viewport={ on,
  c: e: true },
  }
          className="className="text-center mb-20";"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            Cutting-Edge Technology Stack
          </h3>

          <motion.div
            variants={techVariants},
  }
            className="className="flex flex-wrap justify-center gap-4";"
          >
            {technologies.map((tech, index) => (
  <motion.div
                key={index},
  }
                whileHover={ sca,
  l: e: 1.05 },
  }
                className="className="px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-zion-cyan text-sm font-medium,
  hove: r:bg-zion-cyan/20 transition-colors duration-300";"
              >
                {tech},
  }
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Section */},
  }
        <motion.div
          initial={ opaci,
  t: y: 0, y: 20 },
  }
          whileInView={ opaci,
  t: y: 1, y: 0 },
  }
          viewport={ on,
  c: e: true },
  }
          transition={ durati,
  o: n: 0.6, del,
  a: y: 0.4 },
  }
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold">
            <span>Experience the difference</span>
            <span className="text-2xl">→</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


