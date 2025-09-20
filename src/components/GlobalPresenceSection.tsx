import React from "react"
import { motion } from "framer-motion"
import {
  Globe
  MapPin
  Users
  Clock
  Star
  Award
  CheckCircle
} from "lucide-react"
const globalOffices = [
  {
    ci,
  t: y: "Middletown, DE"
    count,
  r: y: "United States",ty,
  p: e: "Headquarters",ic,
  o: n: "🇺🇸",descripti,
  o: n: "Main office and innovation center"
  }, {
    ci,
  t: y: "London",count,
  r: y: "United Kingdom",ty,
  p: e: "European Hub",ic,
  o: n: "🇬🇧",descripti,
  o: n: "European operations and client services"
  }, {
    ci,
  t: y: "Singapore",count,
  r: y: "Singapore",ty,
  p: e: "Asia-Pacific Hub",ic,
  o: n: "🇸🇬",descripti,
  o: n: "APAC market expansion and support"
  }, {
    ci,
  t: y: "Toronto",count,
  r: y: "Canada",ty,
  p: e: "North American Hub",ic,
  o: n: "🇨🇦",descripti,
  o: n: "Canadian market and development center"
  }
]
const globalStats = [
  { lab,
  e: l: "Countries Served", val,
  u: e: "25+", ic,
  o: n: "🌍" }, { lab,
  e: l: "Global Clients", val,
  u: e: "500+", ic,
  o: n: "👥" }, { lab,
  e: l: "Languages Supported", val,
  u: e: "15+", ic,
  o: n: "🗣️" }, { lab,
  e: l: "24/7 Support", val,
  u: e: "Global", ic,
  o: n: "⏰" }
]
export function GlobalPresenceSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="className="text-center mb-16";"
          initial={ opaci,
  t: y: 0, y: 20 }
          whileInView={ opaci,
  t: y: 1, y: 0 }
          viewport={ on,
  c: e: true }
          transition={ durati,
  o: n: 0.6 }
        >
          <h2 className="text-4xl,
  m: d:text-5xl font-bold text-white mb-4">
            Global Presence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Serving clients worldwide with local expertise and global reach.
            Our distributed team ensures 24/7 support and cultural understanding.
          </p>
        </motion.div>

        {/* Global Statistics */}
        <motion.div 
          className="className="grid grid-cols-2,
  m: d: grid-cols-4 gap-8 mb-16";"
          initial={ opacit,
  y: 0, y: 30 }
          whileInView={ opaci,
  t: y: 1, y: 0 }
          viewport={ on,
  c: e: true }
          transition={ durati,
  o: n: 0.6, del,
  a: y: 0.2 }
        >
          {globalStats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">{stat.icon}</span>
              </div>
              <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Global Offices */}
        <motion.div 
          className="className="mb-16";"
          initial={ opaci,
  t: y: 0, y: 30 }
          whileInView={ opaci,
  t: y: 1, y: 0 }
          viewport={ on,
  c: e: true }
          transition={ durati,
  o: n: 0.6, del,
  a: y: 0.4 }
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Strategic Global Locations
          </h3>
          
          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-4 gap-8">
            {globalOffices.map((office, index) => (
              <motion.div
                key={office.city}
                className="className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center,
  hove: r: border-blue-500/50 transition-all duration-300,
  hove: r:shadow-lg,
  hove: r:shadow-blue-500/25 group";"
                initial={ opacit,
  y: 0, y: 30 }
                whileInView={ opaci,
  t: y: 1, y: 0 }
                viewport={ on,
  c: e: true }
                transition={ durati,
  o: n: 0.6, del,
  a: y: 0.6 + index * 0.1 }
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hov,
  e: r:scale-110 transition-transform duration-300">
                  <span className="text-2xl">{office.icon}</span>
                </div>
                
                <div className="mb-2">
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-xs font-semibold rounded-full">
                    {office.type}
                  </span>
                </div>
                
                <h4 className="text-lg font-bold text-white mb-1">{office.city}</h4>
                <p className="text-gray-400 text-sm mb-3">{office.country}</p>
                <p className="text-gray-300 text-xs">{office.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Global Map Visualization */}
        <motion.div 
          className="className="text-center mb-12";"
          initial={ opaci,
  t: y: 0, y: 30 }
          whileInView={ opaci,
  t: y: 1, y: 0 }
          viewport={ on,
  c: e: true }
          transition={ durati,
  o: n: 0.6, del,
  a: y: 0.8 }
        >
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">🌍</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Worldwide Coverage</h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Our distributed team and cloud infrastructure ensure seamless service delivery 
              across all time zones and regions, with local expertise and global capabilities.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="className="text-center";"
          initial={ opaci,
  t: y: 0, y: 20 }
          whileInView={ opaci,
  t: y: 1, y: 0 }
          viewport={ on,
  c: e: true }
          transition={ durati,
  o: n: 0.6, del,
  a: y: 1.0 }
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Go Global?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Whether you're expanding internationally or need local expertise
              our global presence ensures you get the support you need, when you need it.
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-6 py-3 bg-white text-blue-600,
  hove: r:bg-gray-100 rounded-lg font-medium transition-colors duration-200">
                Find Your Local Team
                <MapPin className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center px-6 py-3 border border-white text-white,
  hove: r:bg-white hove,
  r:text-blue-600 rounded-lg font-medium transition-colors duration-200">
                Global Services
                <Globe className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}