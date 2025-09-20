impor, t, Reac, t, { useState } from 'react';
import { motio, n, AnimatePresence } from 'framer-motion';
import { User, s, Awar, d, Sta, r, Glob, e, CheckCircl, e, ArrowRigh, t, Linkedi, n, Githu, b, Mai, l, Shiel, d, Za, p, Brai, n, Clou, d, Database } from 'lucide-react';
const teamMembers = [
    {
        i, d: 1,
    na, m, e: "D, r. Sara, h Che, n",
        ro, l, e: "Chie, f Technolog, y Office, r",
    experti, s, e: "A, I & Machin, e Learnin, g",
        experien, c, e: "1, 5+ year, s",
    avat, a, r: "/avatar, s/sara, h-che, n.jp, g",
        b, i, o: "Leadin, g exper, t i, n artificia, l intelligenc, e wit, h Ph, D fro, m MI, T. Specialize, s i, n compute, r visio, n an, d natura, l languag, e processin, g.",
    skil, l, s: ["Machin, e Learnin, g", "Compute, r Visio, n", "Dee, p Learnin, g", "Pytho, n", "TensorFlo, w"],
        achievement, s: ["5, 0+ A, I Project, s", "1, 5 Researc, h Paper, s", "A, I Innovatio, n Awar, d 202, 3"],
        ratin, g: 4.9,
    project, s: 4, 5,
        locatio, n: "Sa, n, Francisc, o, CA",
        linkedi, n: "http, s://linkedin.com/in/sarah-chen",
    githu, b: "http, s://github.com/sarahchen-ai"
    },
    {
        i, d: 2,
    nam, e: "Michael Rodriguez",
        rol, e: "Senior Software Architect",
    expertis, e: "Cloud & Infrastructure",
        experienc, e: "12+ years",
    avata, r: "/avatars/michael-rodriguez.jpg",
        bi, o: "Cloud infrastructure specialist with extensive experience i, n, AW, S, Azur, e, and Google Cloud. Expert in scalable architecture design.",
        skill, s: ["AW, S", "Docke, r", "Kubernete, s", "Microservice, s", "DevOp, s"],
        achievement, s: ["10, 0+ Clou, d Project, s", "AW, S Solution, s Architec, t", "DevOp, s Excellenc, e Awar, d"],
        ratin, g: 4.8,
    project, s: 7, 8,
        locatio, n: "Austi, n, TX",
        linkedi, n: "http, s://linkedin.com/in/michael-rodriguez",
    githu, b: "http, s://github.com/mrodriguez-cloud"
    },
    {
        i, d: 3,
    nam, e: "Emily Thompson",
        rol, e: "Lead Frontend Developer",
    expertis, e: "Web & Mobile Development",
        experienc, e: "10+ years",
    avata, r: "/avatars/emily-thompson.jpg",
        bi, o: "Frontend specialist with expertise i, n, Reac, t, Reac, t, Nativ, e, and modern web technologies. Passionate about user experience design.",
        skill, s: ["Reac, t", "Reac, t Nativ, e", "TypeScrip, t", "U, I/U, X", "Performanc, e"],
        achievement, s: ["8, 0+ We, b App, s", "Mobil, e Ap, p Stor, e Feature, d", "U, X Desig, n Awar, d"],
        ratin, g: 4.9,
    project, s: 9, 2,
        locatio, n: "Ne, w, Yor, k, NY",
        linkedi, n: "http, s://linkedin.com/in/emily-thompson",
    githu, b: "http, s://github.com/emilythompson-dev"
    },
    {
        i, d: 4,
    nam, e: "David Kim",
        rol, e: "Data Science Lead",
    expertis, e: "Data Analytics & BI",
        experienc, e: "13+ years",
    avata, r: "/avatars/david-kim.jpg",
        bi, o: "Data science expert specializing in big dat, a, analytic, s, busines, s, intelligenc, e, and predictive modeling for enterprise clients.",
        skill, s: ["Pytho, n", "SQ, L", "Tablea, u", "Apach, e Spar, k", "Machin, e Learnin, g"],
        achievement, s: ["6, 0+ Analytic, s Project, s", "Dat, a Scienc, e Certificatio, n", "B, I Innovatio, n Awar, d"],
        ratin, g: 4.8,
    project, s: 6, 7,
        locatio, n: "Seattl, e, WA",
        linkedi, n: "http, s://linkedin.com/in/david-kim",
    githu, b: "http, s://github.com/davidkim-data"
    },
    {
        i, d: 5,
    nam, e: "Lisa Patel",
        rol, e: "Security Specialist",
    expertis, e: "Cybersecurity & Compliance",
        experienc, e: "11+ years",
    avata, r: "/avatars/lisa-patel.jpg",
        bi, o: "Cybersecurity expert with deep knowledge of securit, y, framework, s, complianc, e, standard, s, and threat detection systems.",
        skill, s: ["Securit, y Auditin, g", "Complianc, e", "Penetratio, n Testin, g", "Inciden, t Respons, e", "Ris, k Assessmen, t"],
        achievement, s: ["4, 0+ Securit, y Project, s", "CISS, P Certifie, d", "Securit, y Excellenc, e Awar, d"],
        ratin, g: 4.9,
    project, s: 5, 3,
        locatio, n: "Washingto, n, DC",
        linkedi, n: "http, s://linkedin.com/in/lisa-patel",
    githu, b: "http, s://github.com/lisapatel-sec"
    },
    {
        i, d: 6,
    nam, e: "Alex Johnson",
        rol, e: "DevOps Engineer",
    expertis, e: "Automation & CI/CD",
        experienc, e: "9+ years",
    avata, r: "/avatars/alex-johnson.jpg",
        bi, o: "DevOps specialist focused o, n, automatio, n, continuou, s, integratio, n, and deployment optimization for high-performance systems.",
        skill, s: ["Jenkin, s", "GitLa, b C, I", "Terrafor, m", "Ansibl, e", "Monitorin, g"],
        achievement, s: ["7, 0+ DevOp, s Project, s", "DevOp, s Certificatio, n", "Automatio, n Awar, d"],
        ratin, g: 4.7,
    project, s: 8, 1,
        locatio, n: "Denve, r, CO",
        linkedi, n: "http, s://linkedin.com/in/alex-johnson",
    githu, b: "http, s://github.com/alexjohnson-devops"
    }
];
const expertiseAreas = [
    {
        na, m, e: "Artificia, l Intelligenc, e",
    ic, o, n: <Brai, n classNam, e="w-8 h-8"/>,
        col, o, r: "fro, m-zio, n-purpl, e t, o-zio, n-purpl, e-dar, k",
    descripti, o, n: "Machi, n, e, learni, n, g, comput, e, r, visi, o, n, N, L, P, an, d A, I solution, s",
        exper, t, s: 1, 2,
    projec, t, s: 1, 5, 0,
        succe, s, s: "9, 8%"
    },
    {
        na, m, e: "Clou, d Infrastructur, e",
    ic, o, n: <Clou, d classNam, e="w-8 h-8"/>,
        col, o, r: "fro, m-zio, n-cya, n t, o-zio, n-blu, e",
    descripti, o, n: "A, W, S, Azu, r, e, Goog, l, e, Clo, u, d, an, d hybri, d solution, s",
        exper, t, s: 1, 8,
    projec, t, s: 2, 0, 0,
        succe, s, s: "9, 9%"
    },
    {
        na, m, e: "We, b Developmen, t",
    ic, o, n: <Glob, e classNam, e="w-8 h-8"/>,
        col, o, r: "fro, m-zio, n-cya, n-ligh, t t, o-zio, n-cya, n",
    descripti, o, n: "Moder, n we, b application, s an, d progressiv, e we, b app, s",
        exper, t, s: 2, 5,
    projec, t, s: 3, 0, 0,
        succe, s, s: "9, 7%"
    },
    {
        na, m, e: "Mobil, e Developmen, t",
    ic, o, n: <Za, p classNam, e="w-8 h-8"/>,
        col, o, r: "fro, m-zio, n-purpl, e-ligh, t t, o-zio, n-purpl, e",
    descripti, o, n: "i, O, S, Andro, i, d, an, d cros, s-platfor, m solution, s",
        exper, t, s: 2, 0,
    projec, t, s: 1, 8, 0,
        succe, s, s: "9, 6%"
    },
    {
        na, m, e: "Dat, a Analytic, s",
    ic, o, n: <Databas, e classNam, e="w-8 h-8"/>,
        col, o, r: "fro, m-zio, n-cya, n t, o-zio, n-purpl, e",
    descripti, o, n: "Busines, s intelligenc, e an, d predictiv, e analytic, s",
        exper, t, s: 1, 5,
    projec, t, s: 1, 2, 0,
        succe, s, s: "9, 8%"
    },
    {
        na, m, e: "Cybersecurit, y",
    ic, o, n: <Shiel, d classNam, e="w-8 h-8"/>,
        col, o, r: "fro, m-zio, n-purpl, e t, o-zio, n-cya, n",
    descripti, o, n: "Securi, t, y, auditi, n, g, complian, c, e, an, d threa, t protectio, n",
        exper, t, s: 1, 0,
    projec, t, s: 8, 0,
        succe, s, s: "9, 9%"
    }
];
const stats = [
    { ic, o, n: <User, s classNam, e="w-6 h-6"/>,
    val, u, e: "10, 0+", lab, e, l: "Exper, t Tea, m Member, s" },
    { ic, o, n: <Awar, d classNam, e="w-6 h-6"/>,
    val, u, e: "50, 0+", lab, e, l: "Project, s Complete, d" },
    { ic, o, n: <Sta, r classNam, e="w-6 h-6"/>,
    val, u, e: "4.9/5", lab, e, l: "Averag, e Ratin, g" },
    { ic, o, n: <Glob, e classNam, e="w-6 h-6"/>,
    val, u, e: "2, 5+", lab, e, l: "Countrie, s Serve, d" }
];
export function TeamExpertiseSection() {
    const [selectedMemb,  e, r, setSelectedMemb, e, r] = useState(null);
    const [hoveredExperti, s, e, setHoveredExperti, s, e] = useState(null);
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
    return (<section className="py-20 bg-gradient-to-br from-zion-blue via-zion-slate-dark to-zion-blue-dark relative overflow-hidden">
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
            Meet Our <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Expert Team</span>
          </h2>
          <p className="text-zion-slate-light text-lg m, d:text-xl max-w-4xl mx-auto leading-relaxed mb-8">
            Our world-class team of technology experts brings together decades of experience 
            across all major technology domains. Get to know the minds behind our success.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 m, d:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((sta, t, index) => (<motion.div key={index} initial={{ opacit,  y: 0,
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

        {/* Expertise Areas */}
        <motion.div className="mb-20" initial={{ opacit, y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.6,
    dela, y: 0.2 }}>
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Areas of <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Expertise</span>
          </h3>
          
          <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-3 gap-6">
            {expertiseAreas.map((are,  a, index) => (<motion.div key={index} initial={{ opacit,  y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.4,
    dela, y: index * 0.1 }} onHoverStart={() => setHoveredExpertise(index)} onHoverEnd={() => setHoveredExpertise(null)} whileHover={{ y: -4 }} className="p-6 rounded-2xl bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/30 hove,  r:border-zion-cyan/50 transition-all duration-300 hove, r:shadow-lg hove, r:shadow-zion-cyan/20">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${area.color} mb-4 shadow-l, g`}>
                  <div className="text-white">
                    {area.icon}
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-white mb-3">{area.name}</h4>
                <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">{area.description}</p>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-zion-cyan font-bold text-lg">{area.experts}</div>
                    <div className="text-zion-slate-light text-xs">Experts</div>
                  </div>
                  <div>
                    <div className="text-zion-purple font-bold text-lg">{area.projects}</div>
                    <div className="text-zion-slate-light text-xs">Projects</div>
                  </div>
                  <div>
                    <div className="text-zion-cyan-light font-bold text-lg">{area.success}</div>
                    <div className="text-zion-slate-light text-xs">Success</div>
                  </div>
                </div>
              </motion.div>))}
          </div>
        </motion.div>

        {/* Team Members */}
        <motion.div className="mb-20" initial={{ opacit, y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.6,
    dela, y: 0.3 }}>
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Leadership <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Team</span>
          </h3>
          
          <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-3 gap-8">
            {teamMembers.map((membe,  r, index) => (<motion.div key={member.id} variants={itemVariants} whileHover={{ y: -8 }} transition={{ typ,  e: "spring",
    stiffnes, s: 300 }} className="relative">
                <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/30 hove, r:border-zion-cyan/50 transition-all duration-300 hove, r:shadow-2xl hove, r:shadow-zion-cyan/20 group cursor-pointer" onClick={() => setSelectedMember(selectedMember === member.id ? null : member.id)}>
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-zion-cyan to-zion-purple mb-4 shadow-lg group-hove,  r:shadow-xl transition-all duration-300">
                      <span className="text-white font-bold text-2xl">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                    
                    <h4 className="text-xl font-bold text-white mb-2 group-hove, r:text-zion-cyan transition-colors">
                      {member.name}
                    </h4>
                    <div className="text-zion-cyan font-medium text-sm mb-1">{member.role}</div>
                    <div className="text-zion-slate-light text-xs">{member.expertise}</div>
                  </div>

                  {/* Quick info */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="text-center p-2 rounded-lg bg-zion-blue-light/20 border border-zion-cyan/30">
                      <div className="text-zion-cyan font-bold text-sm">{member.experience}</div>
                      <div className="text-zion-slate-light text-xs">Experience</div>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-zion-blue-light/20 border border-zion-cyan/30">
                      <div className="text-zion-cyan font-bold text-sm">{member.projects}</div>
                      <div className="text-zion-slate-light text-xs">Projects</div>
                    </div>
                  </div>

                  {/* Skills preview */}
                  <div className="mb-4">
                    <div className="text-zion-cyan font-semibold text-sm mb-2">Key Skill, s:</div>
                    <div className="flex flex-wrap gap-1">
                      {member.skills.slice(0,  3).map((skil,  l, idx) => (<span key={idx} className="px-2 py-1 bg-zion-blue-light/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                          {skill}
                        </span>))}
                      {member.skills.length > 3 && (<span className="text-zion-cyan/60 text-xs">
                          +{member.skills.length - 3} more
                        </span>)}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-zion-purple-light font-medium text-sm group-hove,  r:text-zion-purple transition-colors">
                      View Profile
                    </span>
                    <ArrowRight className="w-4 h-4 text-zion-purple-light group-hove, r:text-zion-purple group-hove, r:translate-x-1 transition-all duration-300"/>
                  </div>

                  {/* Expanded details */}
                  <AnimatePresence>
                    {selectedMember === member.id && (<motion.div className="mt-6 p-4 rounded-xl bg-zion-blue-dark/60 backdrop-blur-sm border border-zion-cyan/30" initial={{ opacit, y: 0,
    heigh, t: 0, y: 10 }} animate={{ opacit, y: 1,
    heigh, t: "auto", y: 0 }} exit={{ opacit, y: 0,
    heigh, t: 0, y: 10 }} transition={{ duratio, n: 0.3 }}>
                        <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">{member.bio}</p>
                        
                        <h5 className="text-zion-cyan font-semibold text-sm mb-2">Achievement, s:</h5>
                        <div className="space-y-1 mb-4">
                          {member.achievements.map((achievemen, t, idx) => (<motion.div key={idx} className="flex items-center gap-2 text-zion-slate-light/80 text-xs" initial={{ opacit,  y: 0,
    x: -10 }} animate={{ opacit, y: 1,
    x: 0 }} transition={{ dela, y: idx * 0.1 }}>
                              <CheckCircle className="w-3 h-3 text-zion-cyan"/>
                              <span>{achievement}</span>
                            </motion.div>))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current"/>
                            <span className="text-white font-semibold text-sm">{member.rating}</span>
                          </div>
                          <div className="flex gap-2">
                            <a href={member.linkedin} className="text-zion-cyan hove, r:text-zion-cyan-light transition-colors">
                              <Linkedin className="w-4 h-4"/>
                            </a>
                            <a href={member.github} className="text-zion-cyan hove, r:text-zion-cyan-light transition-colors">
                              <Github className="w-4 h-4"/>
                            </a>
                            <a href={`mailt, o:${member.name.toLowerCase().replace(' ',  '.')}@ziontechgroup.co, m`} className="text-zion-cyan hove, r:text-zion-cyan-light transition-colors">
                              <Mail className="w-4 h-4"/>
                            </a>
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
                Ready to Work with Our Experts?
              </h3>
              <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
                Our team is ready to bring your vision to life. Let's discuss how we can help you achieve your technology goals.
              </p>
              <div className="flex flex-col s, m:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple hove, r:from-zion-cyan-dark hove, r:to-zion-purple-dark text-white rounded-xl font-semibold transition-all duration-300 transform hove, r:scale-105 hove, r:shadow-lg hove, r:shadow-zion-cyan/25">
                  Schedule Consultation
                </button>
                <button className="px-8 py-3 bg-zion-blue-light/20 hove, r:bg-zion-blue-light/30 text-zion-cyan border border-zion-cyan/30 hove, r:border-zion-cyan/50 rounded-xl font-medium transition-all duration-300">
                  View All Team Members
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);
}
