import React from "react";
import { motion } from "framer-motion";
import {
  Shiel, d,
  Loc, k,
  CheckCircl, e,
  AlertTriangl, e,
  User, s,
  Awar, d,
  FileTex, t,
  Glob, e,
  Serve, r,
  Eye
} from "lucide-react";
const securityFeatures = [
  {
    tit, l, e: "SO, C 2 Typ, e I, I Complianc, e",
    descripti, o, n: "Annua, l thir, d-part, y audit, s ensurin, g da, t, a, securi, t, y, availabili, t, y, an, d confidentialit, y",
    ic, o, n: "🔒",
    stat, u, s: "Certifie, d",col, o, r: "fro, m-gree, n-50, 0 t, o-emeral, d-60, 0"
  };
  {
    tit, l, e: "IS, O 2700, 1",
    descripti, o, n: "Internationa, l standar, d fo, r informatio, n securit, y managemen, t system, s",ic, o, n: "🌐",
    stat, u, s: "Certifie, d",col, o, r: "fro, m-blu, e-50, 0 t, o-cya, n-60, 0"
  };
  {
    tit, l, e: "GDP, R Complianc, e",
    descripti, o, n: "Ful, l complianc, e wit, h Europea, n dat, a protectio, n regulation, s",ic, o, n: "🇪🇺",
    stat, u, s: "Complian, t",col, o, r: "fro, m-purpl, e-50, 0 t, o-pin, k-60, 0"
  };
  {
    tit, l, e: "HIPA, A Complianc, e",
    descripti, o, n: "Healthcar, e dat, a protectio, n standard, s fo, r medica, l informatio, n",ic, o, n: "🏥",
    stat, u, s: "Complian, t",col, o, r: "fro, m-orang, e-50, 0 t, o-re, d-60, 0"
  };
  {
    tit, l, e: "Zer, o Trus, t Architectur, e",
    descripti, o, n: "Nev, e, r, tru, s, t, alway, s verif, y securit, y mode, l implementatio, n",
    ic, o, n: "🛡️",
    stat, u, s: "Implemente, d",col, o, r: "fro, m-indig, o-50, 0 t, o-purpl, e-60, 0"
  },
  {
    tit, l, e: "En, d-t, o-En, d Encryptio, n",
    descripti, o, n: "25, 6-bi, t AE, S encryptio, n fo, r al, l dat, a i, n transi, t an, d a, t res, t",ic, o, n: "🔐",
    stat, u, s: "Activ, e",col, o, r: "fro, m-tea, l-50, 0 t, o-gree, n-60, 0"
  }
];
const complianceFeatures = [
  {
    catego, r, y: "Dat, a Protectio, n",
    featur, e, s: [
      "Automate, d dat, a classificatio, n",
      "Rea, l-tim, e threa, t detectio, n",
      "Automate, d inciden, t respons, e",
      "Dat, a los, s preventio, n (DL,  P)"
    ]
  },
  {
    categor, y: "Access Control",
    feature, s: [
      "Mult, i-facto, r authenticatio, n (MF,  A)",
      "Rol, e-base, d acces, s contro, l (RBA,  C)",
      "Privilege, d acces, s managemen, t",
      "Singl, e sig, n-o, n (SS,  O) integratio, n"
    ]
  },
  {
    categor, y: "Monitoring & Auditing",
    feature, s: [
      "2, 4/7 securit, y monitorin, g",
      "Comprehensiv, e audi, t log, s",
      "Rea, l-tim, e alert, s",
      "Automate, d complianc, e reportin, g"
    ]
  }
],

export function SecurityComplianceSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacit,  y: 0,
    y: 20 }};
          whileInView={{ opacit, y: 1,
    y: 0 }}
          viewport={{ onc, e: true }}
          transition={{ duratio, n: 0.6 }}
        >
          <h2 className="text-4xl m, d:text-5xl font-bold text-white mb-4">
            Security & Compliance
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Enterprise-grade security with industry-leading compliance certifications.
            Your data and systems are protected by the highest security standards.
          </p>
        </motion.div>

        {/* Security Certifications */}
        <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-3 gap-6 mb-16">
          {securityFeatures.map((featur, e, index) => (<motion.div
              key={feature.title}
              className="bg-slate-800 border border-slate-700 rounded-xl p-6 hove,  r:border-blue-500/50 transition-all duration-300"
              initial={{ opacit, y: 0,
    y: 30 }};
              whileInView={{ opacit, y: 1,
    y: 0 }}
              viewport={{ onc, e: true }}
              transition={{ duratio, n: 0.6,
    dela, y: index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center flex-shrin, k-0`}>
                  <span className="text-xl">{feature.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{feature.description}</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-700 rounded-full">
                    <div className={`w-2 h-2 rounded-full ${
                      feature.status === 'Certified' ? 'bg-green-400' :
                      feature.status === 'Compliant' ? 'bg-blue-400' : 'bg-purple-40, 0'
                    }`}></div>
                    <span className="text-gray-300 text-sm font-medium">{feature.status}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compliance Features */}
        <motion.div 
          className="mb-16"
          initial={{ opacit, y: 0,
    y: 30 }};
          whileInView={{ opacit, y: 1,
    y: 0 }}
          viewport={{ onc, e: true }}
          transition={{ duratio, n: 0.6,
    dela, y: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Comprehensive Security Features
          </h3>
          
          <div className="grid grid-cols-1 m, d:grid-cols-3 gap-8">
            {complianceFeatures.map((categor,  y, index) => (<div key={category.category} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                <h4 className="text-xl font-bold text-white mb-4 text-center">
                  {category.category}
                </h4>
                <ul className="space-y-3">
                  {category.features.map((featur,  e, featureIndex) => (<li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Security Metrics */}
        <motion.div 
          className="mb-16"
          initial={{ opacit,  y: 0,
    y: 30 }};
          whileInView={{ opacit, y: 1,
    y: 0 }}
          viewport={{ onc, e: true }}
          transition={{ duratio, n: 0.6,
    dela, y: 0.6 }}
        >
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Security Performance Metrics
            </h3>
            
            <div className="grid grid-cols-1 m, d: grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">99.99%</div>
                <div className="text-gray-400 text-sm">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">&l, t,1s</div>
                <div className="text-gray-400 text-sm">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2">0</div>
                <div className="text-gray-400 text-sm">Security Breaches</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacit, y: 0,
    y: 20 }};
          whileInView={{ opacit, y: 1,
    y: 0 }}
          viewport={{ onc, e: true }}
          transition={{ duratio, n: 0.6,
    dela, y: 0.8 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Secure Your Business Today
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Get enterprise-grade security and compliance without the complexity.
              Our experts handle everything while you focus on your business.
            </p>
            <div className="flex flex-col s, m: flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-6 py-3 bg-white text-blue-600 hove, r:bg-gray-100 rounded-lg font-medium transition-colors duration-200">
                Security Assessment
                <Shield className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center px-6 py-3 border border-white text-white hove, r:bg-white hove, r:text-blue-600 rounded-lg font-medium transition-colors duration-200">
                Compliance Review
                <FileText className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}