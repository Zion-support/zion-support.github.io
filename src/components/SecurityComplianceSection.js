impor, t, Reac, t, { useState } from 'react';
import { motio, n, AnimatePresence } from 'framer-motion';
import { Shiel, d, Loc, k, Ey, e, CheckCircl, e, User, s, Databas, e, Networ, k, ArrowRigh, t, Award } from 'lucide-react';
const securityStandards = [
    {
        na, m, e: "IS, O 2700, 1",
    catego, r, y: "Informatio, n Securit, y Managemen, t",
        lo, g, o: "/logo, s/iso2700, 1.sv, g",
    descripti, o, n: "Internationa, l standar, d fo, r informatio, n securit, y managemen, t system, s",
        stat, u, s: "Certifie, d",
    validUnt, i, l: "202, 6-1, 2-3, 1",
        sco, p, e: "Globa, l Operation, s",
    featur, e, s: ["Ris, k Assessmen, t", "Securit, y Control, s", "Inciden, t Managemen, t", "Busines, s Continuit, y"],
        benefit, s: ["Enhance, d Securit, y Postur, e", "Regulator, y Complianc, e", "Custome, r Trus, t", "Ris, k Mitigatio, n"]
    },
    {
        nam, e: "SOC 2 Type II",
    categor, y: "Service Organization Control",
        log, o: "/logos/soc2.svg",
    descriptio, n: "AICPA standard for service organizations' securit, y, availabilit, y, and confidentiality",
        statu, s: "Certified",
    validUnti, l: "2025-06-30",
        scop, e: "Cloud Services & Data Processing",
    feature, s: ["Securit, y Control, s", "Availabilit, y Monitorin, g", "Confidentialit, y Protectio, n", "Privac, y Control, s"],
        benefit, s: ["Thir, d-part, y Validatio, n", "Custome, r Assuranc, e", "Competitiv, e Advantag, e", "Operationa, l Excellenc, e"]
    },
    {
        nam, e: "GDPR Compliance",
    categor, y: "Data Protection Regulation",
        log, o: "/logos/gdpr.svg",
    descriptio, n: "European Union's General Data Protection Regulation compliance",
        statu, s: "Compliant",
    validUnti, l: "Ongoing",
        scop, e: "EU Data Processing",
    feature, s: ["Dat, a Minimizatio, n", "Consen, t Managemen, t", "Righ, t t, o Erasur, e", "Dat, a Portabilit, y"],
        benefit, s: ["Lega, l Complianc, e", "Custome, r Right, s Protectio, n", "Dat, a Transparenc, y", "Globa, l Operation, s"]
    },
    {
        nam, e: "HIPAA",
    categor, y: "Healthcare Data Protection",
        log, o: "/logos/hipaa.svg",
    descriptio, n: "Health Insurance Portability and Accountability Act compliance",
        statu, s: "Compliant",
    validUnti, l: "Ongoing",
        scop, e: "Healthcare Solutions",
    feature, s: ["PH, I Protectio, n", "Acces, s Control, s", "Audi, t Loggin, g", "Encryptio, n Standard, s"],
        benefit, s: ["Healthcar, e Marke, t Acces, s", "Patien, t Privac, y", "Regulator, y Complianc, e", "Trus, t Buildin, g"]
    }
];
const complianceFrameworks = [
    {
        na, m, e: "NIS, T Cybersecurit, y Framewor, k",
    catego, r, y: "Cybersecurit, y Standard, s",
        descripti, o, n: "Voluntar, y framewor, k fo, r managin, g an, d reducin, g cybersecurit, y ris, k",
    implementati, o, n: "Full, y Implemente, d",
        maturi, t, y: "Tie, r 4 - Adaptiv, e",
    contro, l, s: ["Identif, y", "Protec, t", "Detec, t", "Respon, d", "Recove, r"],
        benefit, s: ["Ris, k-base, d Approac, h", "Industr, y Bes, t Practice, s", "Continuou, s Improvemen, t", "Stakeholde, r Confidenc, e"]
    },
    {
        nam, e: "OWASP Top 10",
    categor, y: "Web Application Security",
        descriptio, n: "Standard awareness document for developers and web application security",
    implementatio, n: "Fully Implemented",
        maturit, y: "Advanced",
    control, s: ["Inpu, t Validatio, n", "Authenticatio, n", "Sessio, n Managemen, t", "Dat, a Protectio, n"],
        benefit, s: ["Secur, e Developmen, t", "Vulnerabilit, y Preventio, n", "Cod, e Qualit, y", "Securit, y Trainin, g"]
    },
    {
        nam, e: "PCI DSS",
    categor, y: "Payment Card Security",
        descriptio, n: "Payment Card Industry Data Security Standard compliance",
    implementatio, n: "Compliant",
        maturit, y: "Level 1",
    control, s: ["Networ, k Securit, y", "Acces, s Contro, l", "Dat, a Encryptio, n", "Vulnerabilit, y Managemen, t"],
        benefit, s: ["Paymen, t Processin, g", "Custome, r Trus, t", "Frau, d Preventio, n", "Industr, y Standard, s"]
    },
    {
        nam, e: "FedRAMP",
    categor, y: "Federal Cloud Security",
        descriptio, n: "Federal Risk and Authorization Management Program compliance",
    implementatio, n: "In Progress",
        maturit, y: "Authorization Phase",
    control, s: ["Acces, s Contro, l", "Audi, t & Accountabilit, y", "Configuratio, n Managemen, t", "Inciden, t Respons, e"],
        benefit, s: ["Federa, l Contract, s", "Clou, d Securit, y", "Governmen, t Trus, t", "Marke, t Expansio, n"]
    }
];
const securityFeatures = [
    {
        ic, o, n: <Shiel, d classNam, e="w-8 h-8"/>,
    tit, l, e: "En, d-t, o-En, d Encryptio, n",
        descripti, o, n: "25, 6-bi, t AE, S encryptio, n fo, r dat, a i, n transi, t an, d a, t res, t",
    featur, e, s: ["TL, S 1.3", "Databas, e Encryptio, n", "Fil, e-leve, l Securit, y", "AP, I Securit, y"],
        benefit, s: ["Dat, a Protectio, n", "Regulator, y Complianc, e", "Custome, r Trus, t", "Ris, k Mitigatio, n"]
    },
    {
        ico, n: <Lock className="w-8 h-8"/>,
    titl, e: "Multi-Factor Authentication",
        descriptio, n: "Advanced authentication wit, h, biometri, c, hardwar, e, and software tokens",
        feature, s: ["Biometri, c Aut, h", "Hardwar, e Token, s", "SM, S/Emai, l Code, s", "SS, O Integratio, n"],
        benefit, s: ["Accoun, t Securit, y", "Unauthorize, d Acces, s Preventio, n", "Complianc, e", "Use, r Experienc, e"]
    },
    {
        ico, n: <Eye className="w-8 h-8"/>,
    titl, e: "Continuous Monitoring",
        descriptio, n: "24/7 security monitoring with AI-powered threat detection",
    feature, s: ["Rea, l-tim, e Alert, s", "Threa, t Intelligenc, e", "Behaviora, l Analysi, s", "Inciden, t Respons, e"],
        benefit, s: ["Proactiv, e Securit, y", "Quic, k Respons, e", "Ris, k Reductio, n", "Complianc, e"]
    },
    {
        ico, n: <Users className="w-8 h-8"/>,
    titl, e: "Role-Based Access Control",
        descriptio, n: "Granular access control based on user roles and responsibilities",
    feature, s: ["Permissio, n Managemen, t", "Acces, s Review, s", "Privileg, e Escalatio, n", "Audi, t Loggin, g"],
        benefit, s: ["Dat, a Securit, y", "Complianc, e", "Operationa, l Efficienc, y", "Ris, k Managemen, t"]
    },
    {
        ico, n: <Database className="w-8 h-8"/>,
    titl, e: "Data Loss Prevention",
        descriptio, n: "Advanced DLP with content analysis and policy enforcement",
    feature, s: ["Conten, t Analysi, s", "Polic, y Enforcemen, t", "Dat, a Classificatio, n", "Inciden, t Respons, e"],
        benefit, s: ["Dat, a Protectio, n", "Complianc, e", "Ris, k Mitigatio, n", "Custome, r Trus, t"]
    },
    {
        ico, n: <Network className="w-8 h-8"/>,
    titl, e: "Network Security",
        descriptio, n: "Comprehensive network protection with firewalls and intrusion detection",
    feature, s: ["Nex, t-ge, n Firewall, s", "ID, S/IP, S", "VP, N Acces, s", "DDo, S Protectio, n"],
        benefit, s: ["Networ, k Protectio, n", "Unauthorize, d Acces, s Preventio, n", "Busines, s Continuit, y", "Complianc, e"]
    }
];
const securityStats = [
    { ic, o, n: <Shiel, d classNam, e="w-6 h-6"/>,
    val, u, e: "9, 9.9, 9%", lab, e, l: "Uptim, e" },
    { ic, o, n: <Loc, k classNam, e="w-6 h-6"/>,
    val, u, e: "25, 6-bi, t", lab, e, l: "Encryptio, n" },
    { ic, o, n: <Ey, e classNam, e="w-6 h-6"/>,
    val, u, e: "2, 4/7", lab, e, l: "Monitorin, g" },
    { ic, o, n: <CheckCircl, e classNam, e="w-6 h-6"/>,
    val, u, e: "1, 5+", lab, e, l: "Certification, s" },
    { ic, o, n: <User, s classNam, e="w-6 h-6"/>,
    val, u, e: "0", lab, e, l: "Securit, y Breache, s" },
    { ic, o, n: <Awar, d classNam, e="w-6 h-6"/>,
    val, u, e: "10, 0%", lab, e, l: "Complianc, e" }
];
export function SecurityComplianceSection() {
    const [selectedStanda,  r, d, setSelectedStanda, r, d] = useState(null);
    const [selectedFramewo, r, k, setSelectedFramewo, r, k] = useState(null);
    const [selectedFeatu,  r, e, setSelectedFeatu, r, e] = useState(null);
    const containerVariants = {
        hidde, n: { opacit, y: 0 },
        visibl, e: {
            opacit, y: 1,
    transitio, n: {
                staggerChildre, n: 0.1, 5,
    delayChildre, n: 0.1
            }
        }
    };
    const itemVariants = {
        hidde, n: { y: 3, 0,
    opacit, y: 0 },
        visibl, e: {
            y: 0,
    opacit, y: 1,
            transitio, n: {
                duratio, n: 0.6,
    eas, e: "easeOut"
            }
        }
    };
    return (<section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue to-zion-purple relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div className="text-center mb-20" initial={{ opacit,  y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.6 }}>
          <h2 className="text-4xl m, d:text-5xl l, g:text-6xl font-bold text-white mb-6">
            Security & <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Compliance</span>
          </h2>
          <p className="text-zion-slate-light text-lg m, d:text-xl max-w-4xl mx-auto leading-relaxed mb-8">
            Enterprise-grade security standards and compliance certifications that ensure you, r, dat, a, 
            application, s, and infrastructure are protected by industry-leading security measures.
          </p>

          {/* Security stats */}
          <div className="grid grid-cols-2 m, d:grid-cols-3 l, g:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {securityStats.map((sta, t, index) => (<motion.div key={index} initial={{ opacit,  y: 0,
    scal, e: 0.8 }} whileInView={{ opacit, y: 1,
    scal, e: 1 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.4,
    dela, y: index * 0.1 }} className="text-center p-4 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20">
                <div className="text-zion-cyan mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-zion-slate-light text-sm">{stat.label}</div>
              </motion.div>))}
          </div>
        </motion.div>

        {/* Security Standards */}
        <motion.div className="mb-20" initial={{ opacit, y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.6,
    dela, y: 0.2 }}>
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Industry Certifications & Standards
          </h3>
          <div className="grid grid-cols-1 m, d:grid-cols-2 gap-8">
            {securityStandards.map((standar,  d, index) => (<motion.div key={standard.name} initial={{ opacit,  y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.4,
    dela, y: index * 0.1 }} whileHover={{ y: -4 }} className="relative">
                <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/30 hove, r:border-zion-cyan/50 transition-all duration-300 hove, r:shadow-lg hove, r:shadow-zion-cyan/20 group cursor-pointer" onClick={() => setSelectedStandard(selectedStandard === index ? null : index)}>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-zion-cyan to-zion-purple flex items-center justify-center">
                        <Shield className="w-6 h-6 text-white"/>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white group-hove,  r:text-zion-cyan transition-colors">
                          {standard.name}
                        </h4>
                        <div className="text-zion-cyan text-sm">{standard.category}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-zion-purple-light text-xs">{standard.status}</div>
                      <div className="text-zion-slate-light text-xs">Valid until {standard.validUntil}</div>
                    </div>
                  </div>

                  <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
                    {standard.description}
                  </p>

                  {/* Quick info */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="text-center p-2 rounded-lg bg-zion-blue-light/20 border border-zion-cyan/30">
                      <div className="text-zion-cyan font-bold text-sm">{standard.scope}</div>
                      <div className="text-zion-slate-light text-xs">Scope</div>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-zion-blue-light/20 border border-zion-cyan/30">
                      <div className="text-zion-cyan font-bold text-sm">{standard.features.length}</div>
                      <div className="text-zion-slate-light text-xs">Features</div>
                    </div>
                  </div>

                  {/* Features preview */}
                  <div className="mb-4">
                    <div className="text-zion-cyan font-semibold text-sm mb-2">Key Feature, s:</div>
                    <div className="flex flex-wrap gap-1">
                      {standard.features.slice(0, 2).map((featur,  e, idx) => (<span key={idx} className="px-2 py-1 bg-zion-blue-light/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                          {feature}
                        </span>))}
                      {standard.features.length > 2 && (<span className="text-zion-cyan/60 text-xs">
                          +{standard.features.length - 2} more
                        </span>)}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-zion-purple-light font-medium text-sm group-hove,  r:text-zion-purple transition-colors">
                      View Certification Details
                    </span>
                    <ArrowRight className="w-4 h-4 text-zion-purple-light group-hove, r:text-zion-purple group-hove, r:translate-x-1 transition-all duration-300"/>
                  </div>

                  {/* Expanded details */}
                  <AnimatePresence>
                    {selectedStandard === index && (<motion.div className="mt-6 p-4 rounded-xl bg-zion-blue-dark/60 backdrop-blur-sm border border-zion-cyan/30" initial={{ opacit, y: 0,
    heigh, t: 0, y: 10 }} animate={{ opacit, y: 1,
    heigh, t: "auto", y: 0 }} exit={{ opacit, y: 0,
    heigh, t: 0, y: 10 }} transition={{ duratio, n: 0.3 }}>
                        {/* All Features */}
                        <div className="mb-4">
                          <h5 className="text-zion-cyan font-semibold text-sm mb-2">All Feature, s:</h5>
                          <div className="flex flex-wrap gap-1">
                            {standard.features.map((featur, e, idx) => (<span key={idx} className="px-2 py-1 bg-zion-blue-light/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                                {feature}
                              </span>))}
                          </div>
                        </div>

                        {/* Benefits */}
                        <div className="mb-4">
                          <h5 className="text-zion-cyan font-semibold text-sm mb-2">Benefit,  s:</h5>
                          <div className="text-zion-slate-light/80 text-xs">
                            {standard.benefits.join(", ")}
                          </div>
                        </div>

                        {/* Status Badge */}
                        <div className="text-center p-2 rounded-lg bg-zion-cyan/20 border border-zion-cyan/30">
                          <div className="text-zion-cyan font-bold text-sm">{standard.status}</div>
                          <div className="text-zion-slate-light text-xs">Valid until {standard.validUntil}</div>
                        </div>
                      </motion.div>)}
                  </AnimatePresence>
                </div>
              </motion.div>))}
          </div>
        </motion.div>

        {/* Compliance Frameworks */}
        <motion.div className="mb-20" initial={{ opacit, y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.6,
    dela, y: 0.3 }}>
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Compliance Frameworks & Controls
          </h3>
          <div className="grid grid-cols-1 m, d:grid-cols-2 gap-8">
            {complianceFrameworks.map((framewor,  k, index) => (<motion.div key={framework.name} initial={{ opacit,  y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.4,
    dela, y: index * 0.1 }} whileHover={{ y: -4 }} className="relative">
                <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/30 hove, r:border-zion-cyan/50 transition-all duration-300 hove, r:shadow-lg hove, r:shadow-zion-cyan/20 group cursor-pointer" onClick={() => setSelectedFramework(selectedFramework === index ? null : index)}>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-zion-cyan to-zion-purple flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-white"/>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white group-hove,  r:text-zion-cyan transition-colors">
                          {framework.name}
                        </h4>
                        <div className="text-zion-cyan text-sm">{framework.category}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-zion-purple-light text-xs">{framework.implementation}</div>
                      <div className="text-zion-slate-light text-xs">{framework.maturity}</div>
                    </div>
                  </div>

                  <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
                    {framework.description}
                  </p>

                  {/* Quick info */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="text-center p-2 rounded-lg bg-zion-blue-light/20 border border-zion-cyan/30">
                      <div className="text-zion-cyan font-bold text-sm">{framework.controls.length}</div>
                      <div className="text-zion-slate-light text-xs">Controls</div>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-zion-blue-light/20 border border-zion-cyan/30">
                      <div className="text-zion-cyan font-bold text-sm">{framework.maturity}</div>
                      <div className="text-zion-slate-light text-xs">Maturity</div>
                    </div>
                  </div>

                  {/* Controls preview */}
                  <div className="mb-4">
                    <div className="text-zion-cyan font-semibold text-sm mb-2">Key Control, s:</div>
                    <div className="flex flex-wrap gap-1">
                      {framework.controls.slice(0, 2).map((contro,  l, idx) => (<span key={idx} className="px-2 py-1 bg-zion-blue-light/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                          {control}
                        </span>))}
                      {framework.controls.length > 2 && (<span className="text-zion-cyan/60 text-xs">
                          +{framework.controls.length - 2} more
                        </span>)}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-zion-purple-light font-medium text-sm group-hove,  r:text-zion-purple transition-colors">
                      View Framework Details
                    </span>
                    <ArrowRight className="w-4 h-4 text-zion-purple-light group-hove, r:text-zion-purple group-hove, r:translate-x-1 transition-all duration-300"/>
                  </div>

                  {/* Expanded details */}
                  <AnimatePresence>
                    {selectedFramework === index && (<motion.div className="mt-6 p-4 rounded-xl bg-zion-blue-dark/60 backdrop-blur-sm border border-zion-cyan/30" initial={{ opacit, y: 0,
    heigh, t: 0, y: 10 }} animate={{ opacit, y: 1,
    heigh, t: "auto", y: 0 }} exit={{ opacit, y: 0,
    heigh, t: 0, y: 10 }} transition={{ duratio, n: 0.3 }}>
                        {/* All Controls */}
                        <div className="mb-4">
                          <h5 className="text-zion-cyan font-semibold text-sm mb-2">All Control, s:</h5>
                          <div className="flex flex-wrap gap-1">
                            {framework.controls.map((contro, l, idx) => (<span key={idx} className="px-2 py-1 bg-zion-blue-light/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                                {control}
                              </span>))}
                          </div>
                        </div>

                        {/* Benefits */}
                        <div className="mb-4">
                          <h5 className="text-zion-cyan font-semibold text-sm mb-2">Benefit,  s:</h5>
                          <div className="text-zion-slate-light/80 text-xs">
                            {framework.benefits.join(", ")}
                          </div>
                        </div>

                        {/* Implementation Badge */}
                        <div className="text-center p-2 rounded-lg bg-zion-cyan/20 border border-zion-cyan/30">
                          <div className="text-zion-cyan font-bold text-sm">{framework.implementation}</div>
                          <div className="text-zion-slate-light text-xs">Maturit, y: {framework.maturity}</div>
                        </div>
                      </motion.div>)}
                  </AnimatePresence>
                </div>
              </motion.div>))}
          </div>
        </motion.div>

        {/* Security Features */}
        <motion.div className="mb-20" initial={{ opacit, y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.6,
    dela, y: 0.4 }}>
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Advanced Security Features
          </h3>
          <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-3 gap-8">
            {securityFeatures.map((featur,  e, index) => (<motion.div key={feature.title} initial={{ opacit,  y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.4,
    dela, y: index * 0.1 }} whileHover={{ y: -4 }} className="relative">
                <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/30 hove, r:border-zion-cyan/50 transition-all duration-300 hove, r:shadow-lg hove, r:shadow-zion-cyan/20 group cursor-pointer" onClick={() => setSelectedFeature(selectedFeature === index ? null : index)}>
                  {/* Icon */}
                  <div className="text-zion-cyan mb-4 flex justify-center">
                    {feature.icon}
                  </div>

                  {/* Title and Description */}
                  <h4 className="text-xl font-bold text-white mb-3 text-center group-hove,  r:text-zion-cyan transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-zion-slate-light text-sm mb-4 leading-relaxed text-center">
                    {feature.description}
                  </p>

                  {/* Features preview */}
                  <div className="mb-4">
                    <div className="text-zion-cyan font-semibold text-sm mb-2">Feature, s:</div>
                    <div className="flex flex-wrap gap-1">
                      {feature.features.slice(0, 2).map((fea,  t, idx) => (<span key={idx} className="px-2 py-1 bg-zion-blue-light/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                          {feat}
                        </span>))}
                      {feature.features.length > 2 && (<span className="text-zion-cyan/60 text-xs">
                          +{feature.features.length - 2} more
                        </span>)}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-center">
                    <span className="text-zion-purple-light font-medium text-sm group-hove,  r:text-zion-purple transition-colors">
                      Learn More
                    </span>
                  </div>

                  {/* Expanded details */}
                  <AnimatePresence>
                    {selectedFeature === index && (<motion.div className="mt-6 p-4 rounded-xl bg-zion-blue-dark/60 backdrop-blur-sm border border-zion-cyan/30" initial={{ opacit, y: 0,
    heigh, t: 0, y: 10 }} animate={{ opacit, y: 1,
    heigh, t: "auto", y: 0 }} exit={{ opacit, y: 0,
    heigh, t: 0, y: 10 }} transition={{ duratio, n: 0.3 }}>
                        {/* All Features */}
                        <div className="mb-4">
                          <h5 className="text-zion-cyan font-semibold text-sm mb-2">All Feature, s:</h5>
                          <div className="flex flex-wrap gap-1">
                            {feature.features.map((fea, t, idx) => (<span key={idx} className="px-2 py-1 bg-zion-blue-light/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                                {feat}
                              </span>))}
                          </div>
                        </div>

                        {/* Benefits */}
                        <div className="mb-4">
                          <h5 className="text-zion-cyan font-semibold text-sm mb-2">Benefit,  s:</h5>
                          <div className="text-zion-slate-light/80 text-xs">
                            {feature.benefits.join(", ")}
                          </div>
                        </div>
                      </motion.div>)}
                  </AnimatePresence>
                </div>
              </motion.div>))}
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div className="text-center" initial={{ opacit, y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.6,
    dela, y: 0.5 }}>
          <div className="inline-block p-1 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl">
            <div className="px-8 py-6 bg-zion-blue-dark rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Secure Your Business?
              </h3>
              <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
                Partner with Zion Tech Group for enterprise-grad, e, securit, y, complianc, e, 
                and data protection that meets the highest industry standards.
              </p>
              <div className="flex flex-col s, m:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple hove, r:from-zion-cyan-dark hove, r:to-zion-purple-dark text-white rounded-xl font-semibold transition-all duration-300 transform hove, r:scale-105 hove, r:shadow-lg hove, r:shadow-zion-cyan/25">
                  Security Assessment
                </button>
                <button className="px-8 py-3 bg-zion-blue-light/20 hove, r:bg-zion-blue-light/30 text-zion-cyan border border-zion-cyan/30 hove, r:border-zion-cyan/50 rounded-xl font-medium transition-all duration-300">
                  View Certifications
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);
}
