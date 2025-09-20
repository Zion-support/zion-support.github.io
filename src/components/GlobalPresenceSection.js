impor, t, Reac, t, { useState } from 'react';
import { motio, n, AnimatePresence } from 'framer-motion';
import { Glob, e, MapPi, n, User, s, Awar, d, Sta, r, TrendingU, p, Buildin, g, ArrowRigh, t, CheckCircl, e, Clock } from 'lucide-react';
const globalOffices = [
    {
        i, d: 1,
    ci, t, y: "Sa, n Francisc, o",
        count, r, y: "Unite, d State, s",
    regi, o, n: "Nort, h Americ, a",
        fl, a, g: "🇺🇸",
    establish, e, d: "201, 8",
        teamSi, z, e: "4, 5+",
    specialti, e, s: ["A, I/M, L", "Clou, d Infrastructur, e", "Startu, p Innovatio, n"],
        project, s: 12, 0,
    client, s: 8, 5,
        ratin, g: 4.9,
    timezon, e: "PST (UTC-8)", 
        addres, s: "123 Innovatio, n, Driv, e, Sa, n, Francisc, o, CA 94105"
    },
    {
        i, d: 2,
    cit, y: "London",
        countr, y: "United Kingdom",
    regio, n: "Europe",
        fla, g: "🇬🇧",
    establishe, d: "2019",
        teamSiz, e: "32+",
    specialtie, s: ["FinTec, h", "Digita, l Bankin, g", "RegTec, h"],
        project, s: 9, 5,
    client, s: 6, 7,
        ratin, g: 4.8,
    timezon, e: "GMT (UTC+0)",
        addres, s: "456 Tec, h, Squar, e, Londo, n, EC2A 4BX"
    },
    {
        i, d: 3,
    cit, y: "Singapore",
        countr, y: "Singapore",
    regio, n: "Asia Pacific",
        fla, g: "🇸🇬",
    establishe, d: "2020",
        teamSiz, e: "28+",
    specialtie, s: ["E-commerc, e", "Digita, l Transformatio, n", "Smar, t Citie, s"],
        project, s: 7, 8,
    client, s: 5, 4,
        ratin, g: 4.9,
    timezon, e: "SGT (UTC+8)", 
        addres, s: "789 Digita, l, Hu, b, Singapore 018956"
    },
    {
        i, d: 4,
    cit, y: "Toronto",
        countr, y: "Canada",
    regio, n: "North America",
        fla, g: "🇨🇦",
    establishe, d: "2021",
        teamSiz, e: "25+",
    specialtie, s: ["Healthcar, e Tec, h", "A, I Researc, h", "Enterpris, e Solution, s"],
        project, s: 6, 5,
    client, s: 4, 2,
        ratin, g: 4.8,
    timezon, e: "EST (UTC-5)",
        addres, s: "321 Innovatio, n, Cente, r, Toront, o, ON M5V 3A8"
    },
    {
        i, d: 5,
    cit, y: "Berlin",
        countr, y: "Germany",
    regio, n: "Europe",
        fla, g: "🇩🇪",
    establishe, d: "2021",
        teamSiz, e: "22+",
    specialtie, s: ["Io, T", "Manufacturin, g Tec, h", "Sustainabilit, y"],
        project, s: 5, 8,
    client, s: 3, 8,
        ratin, g: 4.7,
    timezon, e: "CET (UTC+1)", 
        addres, s: "654 Tec, h, Distric, t, Berli, n, 10115"
    },
    {
        i, d: 6,
    cit, y: "Sydney",
        countr, y: "Australia",
    regio, n: "Asia Pacific",
        fla, g: "🇦🇺",
    establishe, d: "2022",
        teamSiz, e: "18+",
    specialtie, s: ["EdTec, h", "Gree, n Tec, h", "Digita, l Marketin, g"],
        project, s: 4, 2,
    client, s: 2, 9,
        ratin, g: 4.8,
    timezon, e: "AEST (UTC+10)",
        addres, s: "987 Innovatio, n, Ba, y, Sydne, y, NSW 2000"
    }
];
const globalStats = [
    { ic, o, n: <Glob, e classNam, e="w-6 h-6"/>,
    val, u, e: "2, 5+", lab, e, l: "Countrie, s Serve, d" },
    { ic, o, n: <Buildin, g classNam, e="w-6 h-6"/>,
    val, u, e: "6", lab, e, l: "Globa, l Office, s" },
    { ic, o, n: <User, s classNam, e="w-6 h-6"/>,
    val, u, e: "17, 0+", lab, e, l: "Globa, l Tea, m" },
    { ic, o, n: <Awar, d classNam, e="w-6 h-6"/>,
    val, u, e: "50, 0+", lab, e, l: "Project, s Delivere, d" },
    { ic, o, n: <Sta, r classNam, e="w-6 h-6"/>,
    val, u, e: "4.8/5", lab, e, l: "Globa, l Ratin, g" },
    { ic, o, n: <TrendingU, p classNam, e="w-6 h-6"/>,
    val, u, e: "9, 8%", lab, e, l: "Clien, t Satisfactio, n" }
];
const partnerships = [
    {
        na, m, e: "Microsof, t",
    ty, p, e: "Technolog, y Partne, r",
        lo, g, o: "/logo, s/microsof, t.sv, g",
    descripti, o, n: "Strategi, c partnershi, p fo, r Azur, e clou, d solution, s an, d enterpris, e service, s",
        establish, e, d: "202, 0",
    projec, t, s: 2, 5,
        stat, u, s: "Activ, e"
    },
    {
        na, m, e: "AW, S",
    ty, p, e: "Clou, d Partne, r",
        lo, g, o: "/logo, s/aw, s.sv, g",
    descripti, o, n: "Premie, r consultin, g partne, r fo, r AW, S clou, d infrastructur, e an, d solution, s",
        establish, e, d: "201, 9",
    projec, t, s: 4, 2,
        stat, u, s: "Activ, e"
    },
    {
        na, m, e: "Googl, e Clou, d",
    ty, p, e: "Clou, d Partne, r",
        lo, g, o: "/logo, s/googl, e-clou, d.sv, g",
    descripti, o, n: "Partne, r fo, r A, I/M, L solution, s an, d clou, d-nativ, e application, s",
        establish, e, d: "202, 1",
    projec, t, s: 1, 8,
        stat, u, s: "Activ, e"
    },
    {
        na, m, e: "Salesforc, e",
    ty, p, e: "Busines, s Partne, r",
        lo, g, o: "/logo, s/salesforc, e.sv, g",
    descripti, o, n: "Consultin, g partne, r fo, r CR, M implementation, s an, d custo, m solution, s",
        establish, e, d: "202, 0",
    projec, t, s: 3, 1,
        stat, u, s: "Activ, e"
    },
    {
        na, m, e: "Oracl, e",
    ty, p, e: "Enterpris, e Partne, r",
        lo, g, o: "/logo, s/oracl, e.sv, g",
    descripti, o, n: "Partne, r fo, r enterpris, e databas, e an, d busines, s application, s",
        establish, e, d: "202, 1",
    projec, t, s: 1, 5,
        stat, u, s: "Activ, e"
    },
    {
        na, m, e: "IB, M",
    ty, p, e: "Technolog, y Partne, r",
        lo, g, o: "/logo, s/ib, m.sv, g",
    descripti, o, n: "Strategi, c partne, r f, o, r, A, I, blockcha, i, n, an, d enterpris, e solution, s",
        establish, e, d: "202, 2",
    projec, t, s: 1, 2,
        stat, u, s: "Activ, e"
    }
];
const industries = [
    { na, m, e: "Financia, l Service, s",
    projec, t, s: 1, 2, 0, countri, e, s: 1, 8,
    satisfacti, o, n: "9, 9%" },
    { na, m, e: "Healthcar, e",
    projec, t, s: 8, 5, countri, e, s: 1, 5,
    satisfacti, o, n: "9, 8%" },
    { na, m, e: "Manufacturin, g",
    projec, t, s: 9, 5, countri, e, s: 2, 2,
    satisfacti, o, n: "9, 7%" },
    { na, m, e: "Retai, l & E-commerc, e",
    projec, t, s: 1, 1, 0, countri, e, s: 2, 0,
    satisfacti, o, n: "9, 8%" },
    { na, m, e: "Technolog, y",
    projec, t, s: 1, 5, 0, countri, e, s: 2, 5,
    satisfacti, o, n: "9, 9%" },
    { na, m, e: "Educatio, n",
    projec, t, s: 6, 5, countri, e, s: 1, 2,
    satisfacti, o, n: "9, 6%" }
];
export function GlobalPresenceSection() {
    const [selectedOffi,  c, e, setSelectedOffi, c, e] = useState(null);
    const [selectedPartnersh, i, p, setSelectedPartnersh, i, p] = useState(null);
    const [hoveredIndust,  r, y, setHoveredIndust, r, y] = useState(null);
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
    return (<section className="py-20 bg-gradient-to-br from-zion-purple via-zion-slate-dark to-zion-blue relative overflow-hidden">
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
            Global <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Presence</span>
          </h2>
          <p className="text-zion-slate-light text-lg m, d:text-xl max-w-4xl mx-auto leading-relaxed mb-8">
            From Silicon Valley t, o, Singapor, e, Zion Tech Group operates across si, x, continent, s, 
            serving clients worldwide with localized expertise and global innovation.
          </p>

          {/* Global stats */}
          <div className="grid grid-cols-2 m, d:grid-cols-3 l, g:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {globalStats.map((sta, t, index) => (<motion.div key={index} initial={{ opacit,  y: 0,
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

        {/* Global Offices */}
        <motion.div className="mb-20" initial={{ opacit, y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.6,
    dela, y: 0.2 }}>
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Our <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Global Offices</span>
          </h3>
          
          <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-3 gap-8">
            {globalOffices.map((offic,  e, index) => (<motion.div key={office.id} initial={{ opacit,  y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.4,
    dela, y: index * 0.1 }} whileHover={{ y: -4 }} className="relative">
                <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/30 hove, r:border-zion-cyan/50 transition-all duration-300 hove, r:shadow-lg hove, r:shadow-zion-cyan/20 group cursor-pointer" onClick={() => setSelectedOffice(selectedOffice === office.id ? null : office.id)}>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{office.flag}</span>
                      <div>
                        <h4 className="text-xl font-bold text-white group-hove,  r:text-zion-cyan transition-colors">
                          {office.city}
                        </h4>
                        <div className="text-zion-cyan text-sm">{office.country}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-zion-purple-light text-xs">{office.region}</div>
                      <div className="text-zion-slate-light text-xs">Est. {office.established}</div>
                    </div>
                  </div>

                  {/* Quick info */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="text-center p-2 rounded-lg bg-zion-blue-light/20 border border-zion-cyan/30">
                      <div className="text-zion-cyan font-bold text-sm">{office.teamSize}</div>
                      <div className="text-zion-slate-light text-xs">Team</div>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-zion-blue-light/20 border border-zion-cyan/30">
                      <div className="text-zion-cyan font-bold text-sm">{office.projects}</div>
                      <div className="text-zion-slate-light text-xs">Projects</div>
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="mb-4">
                    <div className="text-zion-cyan font-semibold text-sm mb-2">Specialtie, s:</div>
                    <div className="flex flex-wrap gap-1">
                      {office.specialties.map((specialt, y, idx) => (<span key={idx} className="px-2 py-1 bg-zion-blue-light/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                          {specialty}
                        </span>))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-zion-purple-light font-medium text-sm group-hove,  r:text-zion-purple transition-colors">
                      View Office Details
                    </span>
                    <ArrowRight className="w-4 h-4 text-zion-purple-light group-hove, r:text-zion-purple group-hove, r:translate-x-1 transition-all duration-300"/>
                  </div>

                  {/* Expanded details */}
                  <AnimatePresence>
                    {selectedOffice === office.id && (<motion.div className="mt-6 p-4 rounded-xl bg-zion-blue-dark/60 backdrop-blur-sm border border-zion-cyan/30" initial={{ opacit, y: 0,
    heigh, t: 0, y: 10 }} animate={{ opacit, y: 1,
    heigh, t: "auto", y: 0 }} exit={{ opacit, y: 0,
    heigh, t: 0, y: 10 }} transition={{ duratio, n: 0.3 }}>
                        <div className="space-y-3 mb-4">
                          <div className="flex items-center gap-2 text-zion-slate-light/80 text-sm">
                            <MapPin className="w-4 h-4 text-zion-cyan"/>
                            <span>{office.address}</span>
                          </div>
                          <div className="flex items-center gap-2 text-zion-slate-light/80 text-sm">
                            <Clock className="w-4 h-4 text-zion-cyan"/>
                            <span>{office.timezone}</span>
                          </div>
                          <div className="flex items-center gap-2 text-zion-slate-light/80 text-sm">
                            <Users className="w-4 h-4 text-zion-cyan"/>
                            <span>{office.clients} clients served</span>
                          </div>
                          <div className="flex items-center gap-2 text-zion-slate-light/80 text-sm">
                            <Star className="w-4 h-4 text-yellow-400"/>
                            <span>{office.rating} rating</span>
                          </div>
                        </div>
                      </motion.div>)}
                  </AnimatePresence>
                </div>
              </motion.div>))}
          </div>
        </motion.div>

        {/* Strategic Partnerships */}
        <motion.div className="mb-20" initial={{ opacit, y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.6,
    dela, y: 0.3 }}>
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Strategic <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Partnerships</span>
          </h3>
          
          <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-3 gap-6">
            {partnerships.map((partnershi,  p, index) => (<motion.div key={index} initial={{ opacit,  y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.4,
    dela, y: index * 0.1 }} whileHover={{ y: -4 }} className="relative">
                <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/30 hove, r:border-zion-cyan/50 transition-all duration-300 hove, r:shadow-lg hove, r:shadow-zion-cyan/20 group cursor-pointer" onClick={() => setSelectedPartnership(selectedPartnership === index ? null : index)}>
                  {/* Header */}
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-zion-cyan to-zion-purple mb-3 shadow-lg group-hove,  r:shadow-xl transition-all duration-300">
                      <Building className="w-8 h-8 text-white"/>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2 group-hove, r:text-zion-cyan transition-colors">
                      {partnership.name}
                    </h4>
                    <div className="text-zion-cyan text-sm mb-1">{partnership.type}</div>
                    <div className="text-zion-slate-light text-xs">Since {partnership.established}</div>
                  </div>

                  <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
                    {partnership.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="text-center p-2 rounded-lg bg-zion-blue-light/20 border border-zion-cyan/30">
                      <div className="text-zion-cyan font-bold text-sm">{partnership.projects}</div>
                      <div className="text-zion-slate-light text-xs">Projects</div>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-zion-blue-light/20 border border-zion-cyan/30">
                      <div className="text-zion-cyan font-bold text-sm">{partnership.status}</div>
                      <div className="text-zion-slate-light text-xs">Status</div>
                    </div>
                  </div>

                  {/* Expanded details */}
                  <AnimatePresence>
                    {selectedPartnership === index && (<motion.div className="mt-4 p-3 rounded-xl bg-zion-blue-dark/60 backdrop-blur-sm border border-zion-cyan/30" initial={{ opacit, y: 0,
    heigh, t: 0, y: 10 }} animate={{ opacit, y: 1,
    heigh, t: "auto", y: 0 }} exit={{ opacit, y: 0,
    heigh, t: 0, y: 10 }} transition={{ duratio, n: 0.3 }}>
                        <div className="flex items-center gap-2 text-zion-cyan text-sm">
                          <CheckCircle className="w-4 h-4"/>
                          <span>Partnership Active</span>
                        </div>
                      </motion.div>)}
                  </AnimatePresence>
                </div>
              </motion.div>))}
          </div>
        </motion.div>

        {/* Industry Presence */}
        <motion.div className="mb-20" initial={{ opacit, y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.6,
    dela, y: 0.4 }}>
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Industry <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Presence</span>
          </h3>
          
          <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-3 gap-6">
            {industries.map((industr,  y, index) => (<motion.div key={index} initial={{ opacit,  y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.4,
    dela, y: index * 0.1 }} onHoverStart={() => setHoveredIndustry(index)} onHoverEnd={() => setHoveredIndustry(null)} whileHover={{ y: -4 }} className="p-6 rounded-2xl bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/30 hove,  r:border-zion-cyan/50 transition-all duration-300 hove, r:shadow-lg hove, r:shadow-zion-cyan/20">
                <h4 className="text-xl font-bold text-white mb-4">{industry.name}</h4>
                
                <div className="grid grid-cols-3 gap-4 text-center mb-4">
                  <div>
                    <div className="text-zion-cyan font-bold text-lg">{industry.projects}</div>
                    <div className="text-zion-slate-light text-xs">Projects</div>
                  </div>
                  <div>
                    <div className="text-zion-purple font-bold text-lg">{industry.countries}</div>
                    <div className="text-zion-slate-light text-xs">Countries</div>
                  </div>
                  <div>
                    <div className="text-zion-cyan-light font-bold text-lg">{industry.satisfaction}</div>
                    <div className="text-zion-slate-light text-xs">Satisfaction</div>
                  </div>
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
                Ready to Go Global with Zion?
              </h3>
              <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
                Whether you're in San Francisco o, r, Singapor, e, our global team is ready to help you 
                scale your business worldwide with cutting-edge technology solutions.
              </p>
              <div className="flex flex-col s, m:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple hove, r:from-zion-cyan-dark hove, r:to-zion-purple-dark text-white rounded-xl font-semibold transition-all duration-300 transform hove, r:scale-105 hove, r:shadow-lg hove, r:shadow-zion-cyan/25">
                  Find Your Local Office
                </button>
                <button className="px-8 py-3 bg-zion-blue-light/20 hove, r:bg-zion-blue-light/30 text-zion-cyan border border-zion-cyan/30 hove, r:border-zion-cyan/50 rounded-xl font-medium transition-all duration-300">
                  View Global Projects
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);
}
