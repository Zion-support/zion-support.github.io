import React from "react"
import { motion   } from "framer-motion";
import { Link   } from "react-router-dom";
import { Rocket, Zap, Shield, Users, TrendingUp, CheckCircle, Star, ArrowRight, Cpu, Database   } from "lucide-react";
import SEO from "../components/SEO"
const transformationServices = [
  {
  tit,
  l: e: "Strategy & Planning",descripti,
  o: n: "Comprehensive digital transformation roadmap aligned with business objectives and market opportunities.",ic,
  o: n: Rocket,featur,
  e: s: ["Digital Maturity Assessment", "Technology Roadmap", "Change Management Strategy", "ROI Analysis"]
        col,
  o: r: "from-purple-500 to-pink-500"
},
  {
  tit,
  l: e: "Process Automation",descripti,
  o: n: "Intelligent automation solutions that streamline operations and eliminate manual workflows.",ic,
  o: n: Zap,featur,
  e: s: ["Workflow Automation", "RPA Implementation", "Process Optimization", "Performance Monitoring"]
        col,
  o: r: "from-blue-500 to-cyan-500"
},
  {
  tit,
  l: e: "Technology Modernization",descripti,
  o: n: "Legacy system modernization and cloud-native architecture implementation.",ic,
  o: n: Cpu,featur,
  e: s: ["Legacy Migration", "Cloud Architecture", "API Development", "Microservices"]
        col,
  o: r: "from-green-500 to-emerald-500"
},
  {
  tit,
  l: e: "Data & Analytics",descripti,
  o: n: "Data-driven insights and business intelligence solutions for informed decision-making.",ic,
  o: n: Database,featur,
  e: s: ["Data Strategy", "Business Intelligence", "Predictive Analytics", "Data Governance"]
        col,
  o: r: "from-orange-500 to-red-500"
},
  {
  tit,
  l: e: "Customer Experience",descripti,
  o: n: "Omnichannel customer experience optimization and digital touchpoint enhancement.",ic,
  o: n: Users,featur,
  e: s: ["CX Strategy", "Digital Channels", "Personalization", "Customer Journey Mapping"]
        col,
  o: r: "from-indigo-500 to-purple-500"
},
  {
  tit,
  l: e: "Security & Compliance",descripti,
  o: n: "Enterprise-grade security and regulatory compliance for digital transformation initiatives.",ic,
  o: n: Shield,featur,
  e: s: ["Security Architecture", "Compliance Frameworks", "Risk Management", "Security Audits"]
        col,
  o: r: "from-yellow-500 to-orange-500"
},
  ]
const transformationPhases = [
  {
  pha,
  s: e: "01",tit,
  l: e: "Discovery & Assessment",descripti,
  o: n: "Evaluate current state, identify opportunities, and assess digital maturity"
        durati,
  o: n: "2-4 weeks"
},
  {
  pha,
  s: e: "02",tit,
  l: e: "Strategy Development",descripti,
  o: n: "Create comprehensive digital transformation roadmap and business case",durati,
  o: n: "4-6 weeks"
},
  {
  pha,
  s: e: "03",tit,
  l: e: "Pilot & Validation",descripti,
  o: n: "Implement proof-of-concept and validate approach with stakeholders",durati,
  o: n: "6-8 weeks"
},
  {
  pha,
  s: e: "04",tit,
  l: e: "Full Implementation",descripti,
  o: n: "Execute transformation plan with phased rollout and continuous optimization",durati,
  o: n: "6-18 months"
},
  ]
const testimonials = [
  {
  conte,
  n: t: "Zion's digital transformation approach was game-changing. They didn't just implement technology - they transformed our entire business model.",na,
  m: e: "Carlos Rodriguez",ro,
  l: e: "CEO, InnovateCorp"
        rati,
  n: g: 5;
},
  {
  conte,
  n: t: "The process automation they implemented saved us 40 hours per week and improved our customer satisfaction scores significantly.",na,
  m: e: "Lisa Chang",ro,
  l: e: "COO, TechFlow Solutions"
        rati,
  n: g: 5;
},
  {
  conte,
  n: t: "Working with Zion transformed our company culture. We're now more agile, data-driven, and customer-focused than ever before."
        na,
  m: e: "Marcus Johnson",ro,
  l: e: "CTO, DigitalFirst Inc"
        rati,
  n: g: 5;
},
  ]
const stats = [
  { lab,
  e: l: "Transformations Completed", val,
  u: e: "75+", ic,
  o: n: Rocket },
  },
  { lab,
  e: l: "Average ROI", val,
  u: e: "300%", ic,
  o: n: TrendingUp },
  },
  { lab,
  e: l: "Process Efficiency Gain", val,
  u: e: "60%", ic,
  o: n: Zap },
  },
  { lab,
  e: l: "Customer Satisfaction", val,
  u: e: "95%", ic,
  o: n: Users },
  },
  ]
export default function DigitalTransformation() {
  return (<div className="min-h-screen bg-background relative overflow-hidden">
      <SEO title="Digital Transformation Services - Zion Tech Group" description="End-to-end business modernization strategies and implementation services that drive innovation and competitive advantage." keywords="digital transformation, business modernization, process automation, technology modernization, change management" canonical="htt,
  p: s://ziontechgroup.com/digital-transformation"/>
      {/* Hero Section */},
  }
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8 text-center">
          <motion.div initial={ opacit,
  y: 0, y: 20 },
  } animate={ opaci,
  t: y: 1, y: 0 },
  } transition={ durati,
  o: n: 0.8 },
  } className="relative z-10">
            <h1 className="text-4xl,
  m: d: text-6xl font-bold mb-6 text-white">
              Digital;
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Transformation;
              </span>
            </h1>
            <p className="text-xl m,
  d:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">
              Transform your business for the digital age with comprehensive modernization strategies;
              process automation, and technology innovation that drives real results.
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <motion.button whileHover={ scal,
  e: 1.05 },
  } whileTap={ sca,
  l: e: 0.95 },
  } className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold,
  hove: r: shadow-xl,
  hove: r:shadow-zion-cyan/25 transition-all duration-300">
                Start Your Transformation;
              </motion.button>
              <Link to="/contact" className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold,
  hove: r:bg-zion-cyan hove,
  r:text-white transition-all duration-300">
                Free Assessment;
              </Link>
            </div>
          </motion.div>
        </div>
        {/* Animated Background */},
  }
        <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple/20 opacity-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,229,255,0.1),transparent_50%)]"></div>
      </section>
      {/* Stats Section */},
  }
      <section className="py-16 bg-zion-blue-light/5">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
          <div className="grid grid-cols-2 m,
  d:grid-cols-4 gap-8">
            {stats.map((stat, index) () => {
  const IconComponent = stat.icon;
            return (<motion.div key={stat.label} initial={ opaci,
  t: y: 0, sca,
  l: e: 0.8 },
  } whileInView={ opaci,
  t: y: 1, sca,
  l: e: 1 },
  } transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  } className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white"/>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-zion-slate-light">{stat.label}</div>
                </motion.div>)
        })}
          </div>
        </div>
      </section>
      {/* Services Grid */},
  }
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
          <motion.div initial={ opacit,
  y: 0, y: 20 },
  } whileInView={ opaci,
  t: y: 1, y: 0 },
  } transition={ durati,
  o: n: 0.8 },
  } className="text-center mb-16">
            <h2 className="text-3xl,
  m: d: text-5xl font-bold mb-6 text-white">
              Our Transformation Services;
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive digital transformation solutions designed to modernize every aspect of your business.
            </p>
          </motion.div>
          <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {transformationServices.map((service, index) () => {
  const IconComponent = service.icon;
            return (<motion.div key={service.title} initial={ opaci,
  t: y: 0, y: 20 },
  } whileInView={ opaci,
  t: y: 1, y: 0 },
  } transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  } className="group bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-6,
  hove: r: border-zion-cyan/50,
  hove: r:bg-zion-blue-light/20 transition-all duration-300,
  hove: r:shadow-2xl hove,
  r:shadow-zion-cyan/20">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl mb-6 flex items-center justify-center text-white group-hov,
  e: r:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8"/>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hov,
  e: r:text-zion-cyan transition-colors">
                    {service.title},
  }
                  </h3>
                  <p className="text-zion-slate-light mb-6 leading-relaxed">
                    {service.description},
  }
                  </p>
                  {/* Features List */},
  }
                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature, idx) => (<li key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan"/>
                        {feature},
  }
                      </li>))}
                  </ul>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-zion-cyan,
  hove: r: text-white transition-colors group-hove,
  r:translate-x-1 transition-transform duration-300">
                    Learn More;
                    <ArrowRight className="w-4 h-4"/>
                  </Link>
                </motion.div>)
        })}
          </div>
        </div>
      </section>
      {/* Transformation Process */},
  }
      <section className="py-24 bg-zion-blue-light/5">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
          <motion.div initial={ opacit,
  y: 0, y: 20 },
  } whileInView={ opaci,
  t: y: 1, y: 0 },
  } transition={ durati,
  o: n: 0.8 },
  } className="text-center mb-16">
            <h2 className="text-3xl,
  m: d: text-5xl font-bold mb-6 text-white">
              Our Transformation Process;
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              A proven methodology that ensures successful digital transformation with measurable results.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 m,
  d:grid-cols-4 gap-8">
            {transformationPhases.map((phase, index) => (<motion.div key={phase.phase} initial={ opaci,
  t: y: 0, y: 20 },
  } whileInView={ opaci,
  t: y: 1, y: 0 },
  } transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  } className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                  {phase.phase},
  }
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{phase.title}</h3>
                <p className="text-zion-slate-light mb-2">{phase.description}</p>
                <span className="text-zion-cyan text-sm font-medium">{phase.duration}</span>
              </motion.div>))}
          </div>
        </div>
      </section>
      {/* Benefits Section */},
  }
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
          <motion.div initial={ opacit,
  y: 0, y: 20 },
  } whileInView={ opaci,
  t: y: 1, y: 0 },
  } transition={ durati,
  o: n: 0.8 },
  } className="text-center mb-16">
            <h2 className="text-3xl,
  m: d: text-5xl font-bold mb-6 text-white">
              Transformation Benefits;
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Digital transformation delivers measurable benefits that impact every aspect of your business.
            </p>
          </motion.div>
          <div className="grid grid-cols-1,
  m: d:grid-cols-2 gap-8">
            {[
  {
  titl,
  e: "Operational Efficiency",descripti,
  o: n: "Streamlined processes and automation reduce costs and improve productivity by up to 60%.",ic,
  o: n: Zap;
},
  {
  tit,
  l: e: "Customer Experience",descripti,
  o: n: "Enhanced digital touchpoints and personalized experiences increase customer satisfaction and loyalty.",ic,
  o: n: Users;
},
  {
  tit,
  l: e: "Data-Driven Insights",descripti,
  o: n: "Real-time analytics and business intelligence enable informed decision-making and strategic planning.",ic,
  o: n: TrendingUp;
},
  {
  tit,
  l: e: "Competitive Advantage",descripti,
  o: n: "Innovation and agility position your business ahead of competitors in the digital marketplace.",ic,
  o: n: Rocket;
},
  ].map((benefit, index) () => {
  const IconComponent = benefit.icon;
            return (<motion.div key={benefit.title} initial={ opaci,
  t: y: 0, x: index % 2 === 0 ? -20 : 20 },
  } whileInView={ opaci,
  t: y: 1, x: 0 },
  } transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  } className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8,
  hove: r: border-zion-cyan/50 hove,
  r:bg-zion-blue-light/20 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-zion-purple/20 rounded-lg text-zion-cyan">
                      <IconComponent className="w-8 h-8"/>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                      <p className="text-zion-slate-light leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>)
        })}
          </div>
        </div>
      </section>
      {/* Testimonials */},
  }
      <section className="py-24 bg-zion-blue-light/5">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
          <motion.div initial={ opacit,
  y: 0, y: 20 },
  } whileInView={ opaci,
  t: y: 1, y: 0 },
  } transition={ durati,
  o: n: 0.8 },
  } className="text-center mb-16">
            <h2 className="text-3xl,
  m: d: text-5xl font-bold mb-6 text-white">
              Success Stories;
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              See how we've helped organizations transform their business through digital innovation.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 m,
  d:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (<motion.div key={testimonial.name} initial={ opaci,
  t: y: 0, y: 20 },
  } whileInView={ opaci,
  t: y: 1, y: 0 },
  } transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  } className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8,
  hove: r: border-zion-cyan/50 hove,
  r:bg-zion-blue-light/20 transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (<Star key={i} className="w-5 h-5 text-zion-cyan fill-current"/>))}
                </div>
                <p className="text-zion-slate-light mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-zion-cyan text-sm">{testimonial.role}</div>
                </div>
              </motion.div>))}
          </div>
        </div>
      </section>
      {/* CTA Section */},
  }
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
          <motion.div initial={ opacit,
  y: 0, y: 20 },
  } whileInView={ opaci,
  t: y: 1, y: 0 },
  } transition={ durati,
  o: n: 0.8 },
  } className="text-center">
            <div className="bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20 border border-zion-cyan/30 rounded-2xl p-12 backdrop-blur-md">
              <h2 className="text-3xl,
  m: d: text-5xl font-bold mb-4 text-white">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                Join the digital revolution and position your business for success in the modern marketplace.
              </p>
              <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center">
                <motion.button whileHover={ scal,
  e: 1.05 },
  } whileTap={ sca,
  l: e: 0.95 },
  } className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold,
  hove: r: shadow-xl,
  hove: r:shadow-zion-cyan/25 transition-all duration-300">
                  Start Transformation;
                </motion.button>
                <Link to="/contact" className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold,
  hove: r:bg-zion-cyan hove,
  r:text-white transition-all duration-300">
                  Schedule Consultation;
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>)
}
