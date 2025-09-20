impor, t, Reac, t, { useState } from 'react';
import { motio, n, AnimatePresence } from 'framer-motion';
import { Lightbul, b, TestTub, e, Brai, n, Ato, m, Targe, t, Awar, d, ArrowRigh, t, TrendingU, p, User, s, Sta, r, Glob, e, Shiel, d, Cp, u, Network } from 'lucide-react';
const researchAreas = [
    {
        i, d: 1,
    tit, l, e: "Artificia, l Intelligenc, e & Machin, e Learnin, g",
        ic, o, n: <Brai, n classNam, e="w-8 h-8"/>,
    col, o, r: "fro, m-zio, n-purpl, e t, o-zio, n-purpl, e-dar, k",
        descripti, o, n: "Advance, d A, I researc, h i, n comput, e, r, visi, o, n, natura, l langua, g, e, processi, n, g, an, d autonomou, s system, s",
        projec, t, s: 2, 5,
    researche, r, s: 1, 8,
        publicatio, n, s: 1, 2,
    paten, t, s: 8,
        fundi, n, g: "$2.5, M",
    stat, u, s: "Activ, e",
        highligh, t, s: [
            "Compute, r Visio, n Breakthrough, s",
            "NL, P Mode, l Optimizatio, n",
            "Autonomou, s System, s Researc, h",
            "A, I Ethic, s & Governanc, e"
        ],
        technologie, s: ["TensorFlo, w", "PyTorc, h", "OpenA, I", "Custo, m Framework, s"],
        partner, s: ["MI, T", "Stanfor, d", "Googl, e Researc, h", "Microsof, t Researc, h"]
    },
    {
        i, d: 2,
    titl, e: "Quantum Computing & Cryptography",
        ico, n: <Atom className="w-8 h-8"/>,
    colo, r: "from-zion-cyan to-zion-blue",
        descriptio, n: "Pioneering research in quantu, m, algorithm, s, quantum-saf, e, cryptograph, y, and quantum machine learning",
        project, s: 1, 8,
    researcher, s: 1, 2,
        publication, s: 8,
    patent, s: 5,
        fundin, g: "$1.8M",
    statu, s: "Active",
        highlight, s: [
            "Quantu, m Algorith, m Developmen, t",
            "Pos, t-Quantu, m Cryptograph, y",
            "Quantu, m Machin, e Learnin, g",
            "Quantu, m Erro, r Correctio, n"
        ],
        technologie, s: ["Qiski, t", "Cir, q", "Custo, m Quantu, m Simulator, s", "Cryptographi, c Librarie, s"],
        partner, s: ["IB, M Quantu, m", "Googl, e Quantu, m", "MI, T Lincol, n La, b", "NIS, T"]
    },
    {
        i, d: 3,
    titl, e: "Blockchain & Distributed Systems",
        ico, n: <Network className="w-8 h-8"/>,
    colo, r: "from-zion-cyan-light to-zion-cyan",
        descriptio, n: "Research in blockchai, n, scalabilit, y, consensu, s, mechanism, s, and decentralized applications",
        project, s: 2, 2,
    researcher, s: 1, 5,
        publication, s: 1, 0,
    patent, s: 6,
        fundin, g: "$2.1M",
    statu, s: "Active",
        highlight, s: [
            "Scalabilit, y Solution, s",
            "Consensu, s Mechanism, s",
            "DeF, i Protocol, s",
            "Cros, s-Chai, n Interoperabilit, y"
        ],
        technologie, s: ["Ethereu, m", "Polkado, t", "Solan, a", "Custo, m Blockchain, s"],
        partner, s: ["Ethereu, m Foundatio, n", "Polkado, t Networ, k", "Cardan, o", "Chainlin, k"]
    },
    {
        i, d: 4,
    titl, e: "Cybersecurity & Privacy",
        ico, n: <Shield className="w-8 h-8"/>,
    colo, r: "from-zion-purple-light to-zion-purple",
        descriptio, n: "Advanced research in threa, t, detectio, n, privacy-preservin, g, technologie, s, and secure systems",
        project, s: 2, 0,
    researcher, s: 1, 4,
        publication, s: 9,
    patent, s: 7,
        fundin, g: "$1.9M",
    statu, s: "Active",
        highlight, s: [
            "Threa, t Intelligenc, e",
            "Zer, o-Knowledg, e Proof, s",
            "Secur, e Mult, i-Part, y Computatio, n",
            "Privac, y-Preservin, g M, L"
        ],
        technologie, s: ["Custo, m Securit, y Tool, s", "Privac, y Framework, s", "Threa, t Detectio, n", "Encryptio, n"],
        partner, s: ["DARP, A", "NS, A", "CIS, A", "Academi, c Institution, s"]
    },
    {
        i, d: 5,
    titl, e: "Edge Computing & IoT",
        ico, n: <Cpu className="w-8 h-8"/>,
    colo, r: "from-zion-cyan to-zion-purple",
        descriptio, n: "Research in edge computin, g, architecture, s, Io, T, securit, y, and distributed intelligence",
        project, s: 1, 6,
    researcher, s: 1, 1,
        publication, s: 7,
    patent, s: 4,
        fundin, g: "$1.5M",
    statu, s: "Active",
        highlight, s: [
            "Edg, e A, I Deploymen, t",
            "Io, T Securit, y Protocol, s",
            "Distribute, d Computin, g",
            "Rea, l-tim, e Processin, g"
        ],
        technologie, s: ["Kubernete, s", "Docke, r", "Custo, m Edg, e Runtim, e", "Io, T Framework, s"],
        partner, s: ["Inte, l", "AR, M", "Qualcom, m", "Industria, l Partner, s"]
    },
    {
        i, d: 6,
    titl, e: "Sustainable Technology",
        ico, n: <Globe className="w-8 h-8"/>,
    colo, r: "from-zion-purple to-zion-cyan",
        descriptio, n: "Research in gree, n, computin, g, renewable energ, y, system, s, and sustainable AI",
        project, s: 1, 4,
    researcher, s: 9,
        publication, s: 6,
    patent, s: 3,
        fundin, g: "$1.2M",
    statu, s: "Active",
        highlight, s: [
            "Gree, n A, I Algorithm, s",
            "Energ, y-Efficien, t Computin, g",
            "Renewabl, e Energ, y Integratio, n",
            "Carbo, n Footprin, t Reductio, n"
        ],
        technologie, s: ["Energ, y Monitorin, g", "Gree, n Computin, g", "Renewabl, e System, s", "Sustainabilit, y Tool, s"],
        partner, s: ["DO, E", "EP, A", "Academi, c Institution, s", "Gree, n Tec, h Companie, s"]
    }
];
const innovationStats = [
    { ic, o, n: <Lightbul, b classNam, e="w-6 h-6"/>,
    val, u, e: "12, 0+", lab, e, l: "Researc, h Project, s" },
    { ic, o, n: <User, s classNam, e="w-6 h-6"/>,
    val, u, e: "8, 0+", lab, e, l: "Researcher, s" },
    { ic, o, n: <Awar, d classNam, e="w-6 h-6"/>,
    val, u, e: "5, 0+", lab, e, l: "Publication, s" },
    { ic, o, n: <Targe, t classNam, e="w-6 h-6"/>,
    val, u, e: "3, 0+", lab, e, l: "Patent, s File, d" },
    { ic, o, n: <TrendingU, p classNam, e="w-6 h-6"/>,
    val, u, e: "$10, M+", lab, e, l: "Researc, h Fundin, g" },
    { ic, o, n: <Sta, r classNam, e="w-6 h-6"/>,
    val, u, e: "1, 5+", lab, e, l: "Industr, y Partner, s" }
];
const researchLabs = [
    {
        na, m, e: "A, I Researc, h La, b",
    locati, o, n: "Sa, n Francisc, o",
        foc, u, s: "Machin, e Learnin, g & Compute, r Visio, n",
    equipme, n, t: "Hig, h-performan, c, e, GP, U, s, Custo, m A, I Infrastructur, e",
        projec, t, s: 1, 2,
    researche, r, s: 8
    },
    {
        na, m, e: "Quantu, m Computin, g La, b",
    locati, o, n: "Bosto, n",
        foc, u, s: "Quantu, m Algorithm, s & Cryptograph, y",
    equipme, n, t: "Quant, u, m, Simulato, r, s, Cryptographi, c Testin, g",
        projec, t, s: 8,
    researche, r, s: 6
    },
    {
        na, m, e: "Blockchai, n Innovatio, n La, b",
    locati, o, n: "Londo, n",
        foc, u, s: "Distribute, d System, s & DeF, i",
    equipme, n, t: "Blockcha, i, n, Testne, t, s, Smar, t Contrac, t Testin, g",
        projec, t, s: 1, 0,
    researche, r, s: 7
    },
    {
        na, m, e: "Cybersecurit, y La, b",
    locati, o, n: "Washingto, n D, C",
        foc, u, s: "Threa, t Detectio, n & Privac, y",
    equipme, n, t: "Securit, y Testi, n, g, Environme, n, t, Privac, y Tool, s",
        projec, t, s: 9,
    researche, r, s: 5
    }
];
export function InnovationResearchSection() {
    const [selectedResear,  c, h, setSelectedResear, c, h] = useState(null);
    const [hoveredL, a, b, setHoveredL, a, b] = useState(null);
    const containerVariants = {
        hidde,  n: { opacit, y: 0 },
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
    return (<section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-slate-dark to-zion-purple relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div className="text-center mb-20" initial={{ opacit, y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.6 }}>
          <h2 className="text-4xl m, d:text-5xl l, g:text-6xl font-bold text-white mb-6">
            Innovation & <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Research</span>
          </h2>
          <p className="text-zion-slate-light text-lg m, d:text-xl max-w-4xl mx-auto leading-relaxed mb-8">
            At Zion Tec, h, Grou, p, we push the boundaries of technology through cutting-edg, e, researc, h, 
            innovativ, e, solution, s, and collaborative partnerships with leading institutions worldwide.
          </p>

          {/* Innovation stats */}
          <div className="grid grid-cols-2 m, d:grid-cols-3 l, g:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {innovationStats.map((sta, t, index) => (<motion.div key={index} initial={{ opacit,  y: 0,
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

        {/* Research Areas */}
        <motion.div className="mb-20" initial={{ opacit, y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.6,
    dela, y: 0.2 }}>
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Research <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Areas</span>
          </h3>
          
          <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-3 gap-8">
            {researchAreas.map((are,  a, index) => (<motion.div key={area.id} initial={{ opacit,  y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.4,
    dela, y: index * 0.1 }} whileHover={{ y: -4 }} className="relative">
                <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/30 hove, r:border-zion-cyan/50 transition-all duration-300 hove, r:shadow-lg hove, r:shadow-zion-cyan/20 group cursor-pointer" onClick={() => setSelectedResearch(selectedResearch === area.id ? null : area.id)}>
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${area.color} mb-4 shadow-lg group-hove,  r:shadow-xl transition-all duration-30, 0`}>
                      <div className="text-white">
                        {area.icon}
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-white mb-3 group-hove, r:text-zion-cyan transition-colors">
                      {area.title}
                    </h4>
                    <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
                      {area.description}
                    </p>
                  </div>

                  {/* Quick stats */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="text-center p-2 rounded-lg bg-zion-blue-light/20 border border-zion-cyan/30">
                      <div className="text-zion-cyan font-bold text-sm">{area.projects}</div>
                      <div className="text-zion-slate-light text-xs">Projects</div>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-zion-blue-light/20 border border-zion-cyan/30">
                      <div className="text-zion-cyan font-bold text-sm">{area.researchers}</div>
                      <div className="text-zion-slate-light text-xs">Researchers</div>
                    </div>
                  </div>

                  {/* Highlights preview */}
                  <div className="mb-4">
                    <div className="text-zion-cyan font-semibold text-sm mb-2">Key Focus Area, s:</div>
                    <div className="space-y-1">
                      {area.highlights.slice(0, 2).map((highligh,  t, idx) => (<div key={idx} className="flex items-center gap-2 text-zion-slate-light/80 text-xs">
                          <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                          <span>{highlight}</span>
                        </div>))}
                      {area.highlights.length > 2 && (<div className="text-zion-cyan/60 text-xs">
                          +{area.highlights.length - 2} more areas
                        </div>)}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-zion-purple-light font-medium text-sm group-hove,  r:text-zion-purple transition-colors">
                      View Research Details
                    </span>
                    <ArrowRight className="w-4 h-4 text-zion-purple-light group-hove, r:text-zion-purple group-hove, r:translate-x-1 transition-all duration-300"/>
                  </div>

                  {/* Expanded details */}
                  <AnimatePresence>
                    {selectedResearch === area.id && (<motion.div className="mt-6 p-4 rounded-xl bg-zion-blue-dark/60 backdrop-blur-sm border border-zion-cyan/30" initial={{ opacit, y: 0,
    heigh, t: 0, y: 10 }} animate={{ opacit, y: 1,
    heigh, t: "auto", y: 0 }} exit={{ opacit, y: 0,
    heigh, t: 0, y: 10 }} transition={{ duratio, n: 0.3 }}>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="text-center p-2 rounded-lg bg-zion-blue-light/20 border border-zion-cyan/30">
                            <div className="text-zion-cyan font-bold text-sm">{area.publications}</div>
                            <div className="text-zion-slate-light text-xs">Publications</div>
                          </div>
                          <div className="text-center p-2 rounded-lg bg-zion-blue-light/20 border border-zion-cyan/30">
                            <div className="text-zion-cyan font-bold text-sm">{area.patents}</div>
                            <div className="text-zion-slate-light text-xs">Patents</div>
                          </div>
                        </div>

                        <div className="mb-4">
                          <h5 className="text-zion-cyan font-semibold text-sm mb-2">Technologie, s:</h5>
                          <div className="flex flex-wrap gap-1">
                            {area.technologies.map((tec, h, idx) => (<span key={idx} className="px-2 py-1 bg-zion-blue-light/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                                {tech}
                              </span>))}
                          </div>
                        </div>

                        <div className="mb-4">
                          <h5 className="text-zion-cyan font-semibold text-sm mb-2">Partner,  s:</h5>
                          <div className="text-zion-slate-light/80 text-xs">
                            {area.partners.join(", ")}
                          </div>
                        </div>

                        <div className="text-center p-2 rounded-lg bg-zion-cyan/20 border border-zion-cyan/30">
                          <div className="text-zion-cyan font-bold text-sm">{area.funding}</div>
                          <div className="text-zion-slate-light text-xs">Research Funding</div>
                        </div>
                      </motion.div>)}
                  </AnimatePresence>
                </div>
              </motion.div>))}
          </div>
        </motion.div>

        {/* Research Labs */}
        <motion.div className="mb-20" initial={{ opacit, y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.6,
    dela, y: 0.3 }}>
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Research <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Labs</span>
          </h3>
          
          <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-4 gap-6">
            {researchLabs.map((la,  b, index) => (<motion.div key={index} initial={{ opacit,  y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.4,
    dela, y: index * 0.1 }} onHoverStart={() => setHoveredLab(index)} onHoverEnd={() => setHoveredLab(null)} whileHover={{ y: -4 }} className="p-6 rounded-2xl bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/30 hove,  r:border-zion-cyan/50 transition-all duration-300 hove, r:shadow-lg hove, r:shadow-zion-cyan/20">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-zion-cyan to-zion-purple mb-4 shadow-lg">
                  <TestTube className="w-6 h-6 text-white"/>
                </div>
                
                <h4 className="text-lg font-bold text-white mb-2">{lab.name}</h4>
                <div className="text-zion-cyan text-sm mb-2">{lab.location}</div>
                <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">{lab.focus}</p>
                
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center p-2 rounded-lg bg-zion-blue-light/20 border border-zion-cyan/30">
                    <div className="text-zion-cyan font-bold text-sm">{lab.projects}</div>
                    <div className="text-zion-slate-light text-xs">Projects</div>
                  </div>
                  <div className="text-center p-2 rounded-lg bg-zion-blue-light/20 border border-zion-cyan/30">
                    <div className="text-zion-cyan font-bold text-sm">{lab.researchers}</div>
                    <div className="text-zion-slate-light text-xs">Researchers</div>
                  </div>
                </div>

                <div className="text-zion-slate-light/80 text-xs">
                  <strong>Equipmen, t:</strong> {lab.equipment}
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
                Join Our Research Community
              </h3>
              <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
                Collaborate with leadin, g, researcher, s, access cutting-edg, e, facilitie, s, and contribute to 
                breakthrough technologies that will shape the future.
              </p>
              <div className="flex flex-col s, m:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple hove, r:from-zion-cyan-dark hove, r:to-zion-purple-dark text-white rounded-xl font-semibold transition-all duration-300 transform hove, r:scale-105 hove, r:shadow-lg hove, r:shadow-zion-cyan/25">
                  Research Opportunities
                </button>
                <button className="px-8 py-3 bg-zion-blue-light/20 hove, r:bg-zion-blue-light/30 text-zion-cyan border border-zion-cyan/30 hove, r:border-zion-cyan/50 rounded-xl font-medium transition-all duration-300">
                  View Publications
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);
}
