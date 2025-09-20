import { motion } from "framer-motion"
import {
  ArrowRight
  Calendar
  CheckCircle
  Clock
  Mail
  MessageCircle
  Phone
  Star
  Users
} from "lucide-react"
import React, { useState } from "react"
export,
  const: ITServiceRequestHero: React.FC = () () => {
  const [activeTab, setActiveTab] = useState('contact')
  const contactMethods = [
    {
      ic,
  o: n: Phone,tit,
  l: e: 'Call Us',descripti,
  o: n: 'Speak directly with our experts',acti,
  o: n: '+1 302 464 0950',hr,
  e: f: 'te,
  l:+13024640950',col,
  o: r: 'from-blue-500 to-cyan-500'
    }, {
      ic,
  o: n: Mail,tit,
  l: e: 'Email Us',descripti,
  o: n: 'Send us your requirements',acti,
  o: n: 'kleber@ziontechgroup.com',hr,
  e: f: 'mailt,
  o:kleber@ziontechgroup.com',col,
  o: r: 'from-purple-500 to-pink-500'
    }, {
      ic,
  o: n: MessageCircle,tit,
  l: e: 'Live Chat',descripti,
  o: n: 'Get instant support',acti,
  o: n: 'Start Chat',hr,
  e: f: '#chat',col,
  o: r: 'from-green-500 to-emerald-500'
    }
  ]
  const quickActions = [
    {
      tit,
  l: e: 'Request Quote',descripti,
  o: n: 'Get a customized quote for your project',ic,
  o: n: CheckCircle,hr,
  e: f: '/request-quote'
    }, {
      tit,
  l: e: 'Schedule Consultation',descripti,
  o: n: 'Book a free 30-minute consultation',ic,
  o: n: Calendar,hr,
  e: f: '/consultation'
    }, {
      tit,
  l: e: 'View Services',descripti,
  o: n: 'Explore our comprehensive service offerings',ic,
  o: n: Star,hr,
  e: f: '/services'
    }
  ]
  const stats = [
    { val,
  u: e: '500+', lab,
  e: l: 'Projects Completed', ic,
  o: n: CheckCircle }, { val,
  u: e: '99%', lab,
  e: l: 'Client Satisfaction', ic,
  o: n: Star }, { val,
  u: e: '24/7', lab,
  e: l: 'Support Available', ic,
  o: n: Clock }, { val,
  u: e: '50+', lab,
  e: l: 'Expert Team Members', ic,
  o: n: Users }
  ]
  return (
    <section className="py-20 px-4,
  s: m: px-6 l,
  g:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Hero Content */}
        <motion.div
          initial={ opaci,
  t: y: 0, y: 20 }
          animate={ opaci,
  t: y: 1, y: 0 }
          transition={ durati,
  o: n: 0.6 }
          className="className="text-center mb-16";"
        >
          <h1 className="text-5xl,
  m: d:text-6xl font-bold text-white mb-6">
            IT Service Request
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get expert IT support and solutions tailored to your business needs. 
            Our team is ready to help you succeed.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={ opaci,
  t: y: 0, y: 20 }
          animate={ opaci,
  t: y: 1, y: 0 }
          transition={ durati,
  o: n: 0.6, del,
  a: y: 0.1 }
          className="className="grid grid-cols-1,
  m: d:grid-cols-3 gap-8 mb-16";"
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={ opaci,
  t: y: 0, y: 20 }
              animate={ opaci,
  t: y: 1, y: 0 }
              transition={ durati,
  o: n: 0.6, del,
  a: y: 0.2 + index * 0.1 }
              className="className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center,
  hove: r: border-zion-cyan/50 transition-all duration-300,
  hove: r:transform hove,
  r:scale-105";"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${method.color} rounded-lg mb-6`}>
                {React.createElement(method.icon, { classNa,
  m: e: "w-8 h-8 text-white" })}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{method.title}</h3>
              <p className="text-gray-300 mb-4">{method.description}</p>
              <a
                href={method.href}
                className="className="inline-flex items-center px-6 py-3 bg-zion-cyan,
  hove: r:bg-zion-blue text-white font-semibold rounded-lg transition-colors";"
              >
                {method.action}
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={ opaci,
  t: y: 0, y: 20 }
          animate={ opaci,
  t: y: 1, y: 0 }
          transition={ durati,
  o: n: 0.6, del,
  a: y: 0.3 }
          className="className="grid grid-cols-1,
  m: d:grid-cols-3 gap-6 mb-16";"
        >
          {quickActions.map((action, index) => (
            <motion.div
              key={action.title}
              initial={ opaci,
  t: y: 0, y: 20 }
              animate={ opaci,
  t: y: 1, y: 0 }
              transition={ durati,
  o: n: 0.6, del,
  a: y: 0.4 + index * 0.1 }
              className="className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6,
  hove: r:border-zion-cyan/50 transition-all duration-300";"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center">
                  {React.createElement(action.icon, { classNa,
  m: e: "w-6 h-6 text-zion-cyan" })}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-1">{action.title}</h3>
                  <p className="text-gray-300 text-sm">{action.description}</p>
                </div>
                <a
                  href={action.href}
                  className="className="text-zion-cyan,
  hove: r:text-zion-blue transition-colors";"
                >
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={ opaci,
  t: y: 0, y: 20 }
          animate={ opaci,
  t: y: 1, y: 0 }
          transition={ durati,
  o: n: 0.6, del,
  a: y: 0.5 }
          className="className="grid grid-cols-2,
  m: d:grid-cols-4 gap-6";"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={ opaci,
  t: y: 0, y: 20 }
              animate={ opaci,
  t: y: 1, y: 0 }
              transition={ durati,
  o: n: 0.6, del,
  a: y: 0.6 + index * 0.1 }
              className="className="text-center";"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-zion-cyan/20 rounded-lg mb-4">
                {React.createElement(stat.icon, { classNa,
  m: e: "w-8 h-8 text-zion-cyan" })}
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}