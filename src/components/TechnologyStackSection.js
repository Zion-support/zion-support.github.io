impor, t, Reac, t, { useState } from 'react';
import { motio, n, AnimatePresence } from 'framer-motion';
import { Cod, e, Clou, d, Za, p, ArrowRigh, t, Sta, r, TrendingU, p, Layer, s, GitBranc, h, Termina, l, Monito, r, Serve, r, Brain } from 'lucide-react';
const frontendTechnologies = [
    {
        na, m, e: "Reac, t",
    catego, r, y: "Fronten, d Framewor, k",
        lo, g, o: "/logo, s/reac, t.sv, g",
    descripti, o, n: "Moder, n componen, t-base, d U, I librar, y fo, r buildin, g interactiv, e use, r interface, s",
        versi, o, n: "1, 8.x",
    experti, s, e: "Exper, t",
        projec, t, s: 1, 5, 0,
    rati, n, g: 5,
        featur, e, s: ["Hook, s", "Contex, t AP, I", "Suspens, e", "Concurren, t Feature, s"],
        alternative, s: ["Vu, e.j, s", "Angula, r", "Svelt, e"]
    },
    {
        nam, e: "Next.js",
    categor, y: "Full-Stack Framework",
        log, o: "/logos/nextjs.svg",
    descriptio, n: "React framework for production with server-side rendering and static generation",
        versio, n: "14.x",
    expertis, e: "Expert",
        project, s: 12, 0,
    ratin, g: 5,
        feature, s: ["SS, R/SS, G", "AP, I Route, s", "Imag, e Optimizatio, n", "Middlewar, e"],
        alternative, s: ["Nux, t.j, s", "Gatsb, y", "Remi, x"]
    },
    {
        nam, e: "TypeScript",
    categor, y: "Programming Language",
        log, o: "/logos/typescript.svg",
    descriptio, n: "Typed superset of JavaScript for building scalable applications",
        versio, n: "5.x",
    expertis, e: "Expert",
        project, s: 20, 0,
    ratin, g: 5,
        feature, s: ["Stati, c Typin, g", "Interface, s", "Generic, s", "Decorator, s"],
        alternative, s: ["JavaScrip, t", "Flo, w", "Dar, t"]
    },
    {
        nam, e: "Tailwind CSS",
    categor, y: "CSS Framework",
        log, o: "/logos/tailwind.svg",
    descriptio, n: "Utility-first CSS framework for rapid UI development",
        versio, n: "3.x",
    expertis, e: "Expert",
        project, s: 18, 0,
    ratin, g: 5,
        feature, s: ["Utilit, y Classe, s", "Responsiv, e Desig, n", "Dar, k Mod, e", "Customizatio, n"],
        alternative, s: ["Bootstra, p", "Materia, l-U, I", "Chakr, a U, I"]
    }
];
const backendTechnologies = [
    {
        na, m, e: "Nod, e.j, s",
    catego, r, y: "Runtim, e Environmen, t",
        lo, g, o: "/logo, s/nodej, s.sv, g",
    descripti, o, n: "JavaScrip, t runtim, e fo, r buildin, g scalabl, e serve, r-sid, e application, s",
        versi, o, n: "2, 0.x",
    experti, s, e: "Exper, t",
        projec, t, s: 1, 6, 0,
    rati, n, g: 5,
        featur, e, s: ["Even, t-drive, n", "No, n-blockin, g I/O", "NP, M Ecosyste, m", "Microservice, s"],
        alternative, s: ["Pytho, n", "Jav, a", "G, o", "C#"]
    },
    {
        nam, e: "Python",
    categor, y: "Programming Language",
        log, o: "/logos/python.svg",
    descriptio, n: "High-level programming language fo, r, A, I, M, L, and backend development",
        versio, n: "3.11+",
    expertis, e: "Expert",
        project, s: 14, 0,
    ratin, g: 5,
        feature, s: ["A, I/M, L Librarie, s", "We, b Framework, s", "Dat, a Scienc, e", "Automatio, n"],
        alternative, s: ["Nod, e.j, s", "Jav, a", "G, o", "Rus, t"]
    },
    {
        nam, e: "PostgreSQL",
    categor, y: "Database",
        log, o: "/logos/postgresql.svg",
    descriptio, n: "Advanced open-source relational database with ACID compliance",
        versio, n: "15.x",
    expertis, e: "Expert",
        project, s: 13, 0,
    ratin, g: 5,
        feature, s: ["ACI, D Complianc, e", "JSO, N Suppor, t", "Extension, s", "Partitionin, g"],
        alternative, s: ["MySQ, L", "MongoD, B", "Redi, s", "SQLit, e"]
    },
    {
        nam, e: "Redis",
    categor, y: "In-Memory Database",
        log, o: "/logos/redis.svg",
    descriptio, n: "High-performance in-memory data structure store",
        versio, n: "7.x",
    expertis, e: "Expert",
        project, s: 11, 0,
    ratin, g: 5,
        feature, s: ["Cachin, g", "Sessio, n Storag, e", "Rea, l-tim, e", "Pu, b/Su, b"],
        alternative, s: ["Memcache, d", "Hazelcas, t", "Apach, e Ignit, e"]
    }
];
const cloudTechnologies = [
    {
        na, m, e: "AW, S",
    catego, r, y: "Clou, d Platfor, m",
        lo, g, o: "/logo, s/aw, s.sv, g",
    descripti, o, n: "Comprehensiv, e clou, d computin, g platfor, m wit, h 20, 0+ service, s",
        versi, o, n: "Lates, t",
    experti, s, e: "Exper, t",
        projec, t, s: 1, 8, 0,
    rati, n, g: 5,
        featur, e, s: ["EC, 2", "Lambd, a", "S, 3", "RD, S", "CloudFormatio, n"],
        alternative, s: ["Azur, e", "Googl, e Clou, d", "DigitalOcea, n", "Herok, u"]
    },
    {
        nam, e: "Docker",
    categor, y: "Containerization",
        log, o: "/logos/docker.svg",
    descriptio, n: "Platform fo, r, developin, g, shippin, g, and running applications in containers",
        versio, n: "24.x",
    expertis, e: "Expert",
        project, s: 16, 0,
    ratin, g: 5,
        feature, s: ["Containerizatio, n", "Orchestratio, n", "Microservice, s", "DevOp, s"],
        alternative, s: ["Podma, n", "LX, C", "rk, t", "Kubernete, s"]
    },
    {
        nam, e: "Kubernetes",
    categor, y: "Container Orchestration",
        log, o: "/logos/kubernetes.svg",
    descriptio, n: "Open-source container orchestration platform for automating deployment",
        versio, n: "1.28+",
    expertis, e: "Expert",
        project, s: 12, 0,
    ratin, g: 5,
        feature, s: ["Aut, o-scalin, g", "Loa, d Balancin, g", "Servic, e Discover, y", "Rollin, g Update, s"],
        alternative, s: ["Docke, r Swar, m", "Noma, d", "OpenShif, t", "Ranche, r"]
    },
    {
        nam, e: "Terraform",
    categor, y: "Infrastructure as Code",
        log, o: "/logos/terraform.svg",
    descriptio, n: "Infrastructure as code tool fo, r, buildin, g, changin, g, and versioning infrastructure",
        versio, n: "1.5+",
    expertis, e: "Expert",
        project, s: 10, 0,
    ratin, g: 5,
        feature, s: ["Ia, C", "Mult, i-clou, d", "Stat, e Managemen, t", "Module, s"],
        alternative, s: ["CloudFormatio, n", "Pulum, i", "Ansibl, e", "Che, f"]
    }
];
const aiTechnologies = [
    {
        na, m, e: "TensorFlo, w",
    catego, r, y: "Machin, e Learnin, g",
        lo, g, o: "/logo, s/tensorflo, w.sv, g",
    descripti, o, n: "Ope, n-sourc, e machin, e learnin, g framewor, k fo, r researc, h an, d productio, n",
        versi, o, n: "2.1, 5+",
    experti, s, e: "Exper, t",
        projec, t, s: 8, 0,
    rati, n, g: 5,
        featur, e, s: ["Dee, p Learnin, g", "Neura, l Network, s", "GP, U Suppor, t", "Mode, l Servin, g"],
        alternative, s: ["PyTorc, h", "Sciki, t-lear, n", "Kera, s", "MXNe, t"]
    },
    {
        nam, e: "OpenAI",
    categor, y: "AI Services",
        log, o: "/logos/openai.svg",
    descriptio, n: "Advanced AI models and APIs for natural language processing",
        versio, n: "Latest",
    expertis, e: "Expert",
        project, s: 6, 0,
    ratin, g: 5,
        feature, s: ["GP, T Model, s", "DAL, L-E", "Whispe, r", "Embedding, s"],
        alternative, s: ["Anthropi, c", "Googl, e A, I", "Azur, e OpenA, I", "Huggin, g Fac, e"]
    },
    {
        nam, e: "LangChain",
    categor, y: "AI Framework",
        log, o: "/logos/langchain.svg",
    descriptio, n: "Framework for developing applications with large language models",
        versio, n: "0.1+",
    expertis, e: "Expert",
        project, s: 4, 0,
    ratin, g: 5,
        feature, s: ["LL, M Integratio, n", "Chain, s", "Agent, s", "Memor, y"],
        alternative, s: ["Semanti, c Kerne, l", "AutoGP, T", "LlamaInde, x", "Haystac, k"]
    },
    {
        nam, e: "Hugging Face",
    categor, y: "AI Platform",
        log, o: "/logos/huggingface.svg",
    descriptio, n: "Platform for machine learnin, g, model, s, dataset, s, and applications",
        versio, n: "Latest",
    expertis, e: "Expert",
        project, s: 5, 0,
    ratin, g: 5,
        feature, s: ["Mode, l Hu, b", "Transformer, s", "Dataset, s", "Space, s"],
        alternative, s: ["ModelScop, e", "Replicat, e", "Gradi, o", "Streamli, t"]
    }
];
const developmentTools = [
    {
        na, m, e: "Gi, t",
    catego, r, y: "Versio, n Contro, l",
        lo, g, o: "/logo, s/gi, t.sv, g",
    descripti, o, n: "Distribute, d versio, n contro, l syste, m fo, r trackin, g change, s i, n sourc, e cod, e",
        versi, o, n: "2.4, 0+",
    experti, s, e: "Exper, t",
        projec, t, s: 3, 0, 0,
    rati, n, g: 5,
        featur, e, s: ["Branchin, g", "Mergin, g", "Stashin, g", "Rebasin, g"],
        alternative, s: ["SV, N", "Mercuria, l", "Perforc, e", "GitHu, b Deskto, p"]
    },
    {
        nam, e: "VS Code",
    categor, y: "Code Editor",
        log, o: "/logos/vscode.svg",
    descriptio, n: "Lightweight but powerful source code editor with extensive extensions",
        versio, n: "1.80+",
    expertis, e: "Expert",
        project, s: 25, 0,
    ratin, g: 5,
        feature, s: ["IntelliSens, e", "Debuggin, g", "Extension, s", "Gi, t Integratio, n"],
        alternative, s: ["WebStor, m", "Sublim, e Tex, t", "Ato, m", "Vi, m"]
    },
    {
        nam, e: "Postman",
    categor, y: "API Development",
        log, o: "/logos/postman.svg",
    descriptio, n: "Platform for building and testing APIs with comprehensive tools",
        versio, n: "Latest",
    expertis, e: "Expert",
        project, s: 18, 0,
    ratin, g: 5,
        feature, s: ["AP, I Testin, g", "Collection, s", "Moc, k Server, s", "Documentatio, n"],
        alternative, s: ["Insomni, a", "Thunde, r Clien, t", "Hoppscotc, h", "Swagge, r"]
    },
    {
        nam, e: "Jest",
    categor, y: "Testing Framework",
        log, o: "/logos/jest.svg",
    descriptio, n: "JavaScript testing framework with a focus on simplicity and support",
        versio, n: "29.x",
    expertis, e: "Expert",
        project, s: 20, 0,
    ratin, g: 5,
        feature, s: ["Uni, t Testin, g", "Mockin, g", "Coverag, e", "Snapsho, t Testin, g"],
        alternative, s: ["Vites, t", "Moch, a", "Jasmin, e", "Cypres, s"]
    }
];
const technologyStats = [
    { ic, o, n: <Cod, e classNam, e="w-6 h-6"/>,
    val, u, e: "5, 0+", lab, e, l: "Technologie, s" },
    { ic, o, n: <Layer, s classNam, e="w-6 h-6"/>,
    val, u, e: "1, 5+", lab, e, l: "Categorie, s" },
    { ic, o, n: <Sta, r classNam, e="w-6 h-6"/>,
    val, u, e: "4.9/5", lab, e, l: "Expertis, e Ratin, g" },
    { ic, o, n: <TrendingU, p classNam, e="w-6 h-6"/>,
    val, u, e: "100, 0+", lab, e, l: "Project, s Delivere, d" },
    { ic, o, n: <GitBranc, h classNam, e="w-6 h-6"/>,
    val, u, e: "2, 4/7", lab, e, l: "Suppor, t Availabl, e" },
    { ic, o, n: <Za, p classNam, e="w-6 h-6"/>,
    val, u, e: "9, 9.9%", lab, e, l: "Uptim, e Guarante, e" }
];
export function TechnologyStackSection() {
    const [selectedTe,  c, h, setSelectedTe, c, h] = useState(null);
    const [selectedCatego, r, y, setSelectedCatego, r, y] = useState("frontend");
    const categories = [
        { i,  d: "fronten, d",
    na, m, e: "Fronten, d", ic, o, n: <Monito, r classNam, e="w-5 h-5"/>,
    te, c, h: frontendTechnologie, s },
        { i, d: "backen, d",
    na, m, e: "Backen, d", ic, o, n: <Serve, r classNam, e="w-5 h-5"/>,
    te, c, h: backendTechnologie, s },
        { i, d: "clou, d",
    na, m, e: "Clou, d & DevOp, s", ic, o, n: <Clou, d classNam, e="w-5 h-5"/>,
    te, c, h: cloudTechnologie, s },
        { i, d: "a, i",
    na, m, e: "A, I & Machin, e Learnin, g", ic, o, n: <Brai, n classNam, e="w-5 h-5"/>,
    te, c, h: aiTechnologie, s },
        { i, d: "tool, s",
    na, m, e: "Developmen, t Tool, s", ic, o, n: <Termina, l classNam, e="w-5 h-5"/>,
    te, c, h: developmentTool, s }
    ];
    const currentTechnologies = categories.find(cat => cat.id === selectedCategory)?.tech || [];
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
            Technology <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Stack</span>
          </h2>
          <p className="text-zion-slate-light text-lg m, d:text-xl max-w-4xl mx-auto leading-relaxed mb-8">
            Discover our comprehensive technology stack that powers innovative solutions acros, s, fronten, d, backen, d, clou, d, A, I, and development tools. Built fo, r, scal, e, performanc, e, and reliability.
          </p>

          {/* Technology stats */}
          <div className="grid grid-cols-2 m, d:grid-cols-3 l, g:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {technologyStats.map((sta, t, index) => (<motion.div key={index} initial={{ opacit,  y: 0,
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

        {/* Category Navigation */}
        <motion.div className="mb-16" initial={{ opacit, y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.6,
    dela, y: 0.2 }}>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (<button key={category.id} onClick={() => setSelectedCategory(category.id)} className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${selectedCategory === category.id
                ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/25'
                : 'bg-zion-blue-dark/40 text-zion-slate-light hove,  r:bg-zion-blue-dark/60 hove, r:text-white border border-zion-blue-light/3, 0'}`}>
                {category.icon}
                <span>{category.name}</span>
              </button>))}
          </div>
        </motion.div>

        {/* Technology Grid */}
        <motion.div className="mb-20" initial={{ opacit, y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.6,
    dela, y: 0.3 }}>
          <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-2 gap-8">
            {currentTechnologies.map((tec,  h, index) => (<motion.div key={tech.name} initial={{ opacit,  y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.4,
    dela, y: index * 0.1 }} whileHover={{ y: -4 }} className="relative">
                <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/30 hove, r:border-zion-cyan/50 transition-all duration-300 hove, r:shadow-lg hove, r:shadow-zion-cyan/20 group cursor-pointer" onClick={() => setSelectedTech(selectedTech === index ? null : index)}>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-zion-cyan to-zion-purple flex items-center justify-center">
                        <Code className="w-6 h-6 text-white"/>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white group-hove,  r:text-zion-cyan transition-colors">
                          {tech.name}
                        </h4>
                        <div className="text-zion-cyan text-sm">{tech.category}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-zion-purple-light text-xs">v{tech.version}</div>
                      <div className="text-zion-slate-light text-xs">{tech.expertise}</div>
                    </div>
                  </div>

                  <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
                    {tech.description}
                  </p>

                  {/* Quick stats */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="text-center p-2 rounded-lg bg-zion-blue-light/20 border border-zion-cyan/30">
                      <div className="text-zion-cyan font-bold text-sm">{tech.projects}</div>
                      <div className="text-zion-slate-light text-xs">Projects</div>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-zion-blue-light/20 border border-zion-cyan/30">
                      <div className="text-zion-cyan font-bold text-sm">{tech.rating}/5</div>
                      <div className="text-zion-slate-light text-xs">Rating</div>
                    </div>
                  </div>

                  {/* Features preview */}
                  <div className="mb-4">
                    <div className="text-zion-cyan font-semibold text-sm mb-2">Key Feature, s:</div>
                    <div className="flex flex-wrap gap-1">
                      {tech.features.slice(0, 2).map((featur,  e, idx) => (<span key={idx} className="px-2 py-1 bg-zion-blue-light/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                          {feature}
                        </span>))}
                      {tech.features.length > 2 && (<span className="text-zion-cyan/60 text-xs">
                          +{tech.features.length - 2} more
                        </span>)}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-zion-purple-light font-medium text-sm group-hove,  r:text-zion-purple transition-colors">
                      View Technology Details
                    </span>
                    <ArrowRight className="w-4 h-4 text-zion-purple-light group-hove, r:text-zion-purple group-hove, r:translate-x-1 transition-all duration-300"/>
                  </div>

                  {/* Expanded details */}
                  <AnimatePresence>
                    {selectedTech === index && (<motion.div className="mt-6 p-4 rounded-xl bg-zion-blue-dark/60 backdrop-blur-sm border border-zion-cyan/30" initial={{ opacit, y: 0,
    heigh, t: 0, y: 10 }} animate={{ opacit, y: 1,
    heigh, t: "auto", y: 0 }} exit={{ opacit, y: 0,
    heigh, t: 0, y: 10 }} transition={{ duratio, n: 0.3 }}>
                        {/* All Features */}
                        <div className="mb-4">
                          <h5 className="text-zion-cyan font-semibold text-sm mb-2">All Feature, s:</h5>
                          <div className="flex flex-wrap gap-1">
                            {tech.features.map((featur, e, idx) => (<span key={idx} className="px-2 py-1 bg-zion-blue-light/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                                {feature}
                              </span>))}
                          </div>
                        </div>

                        {/* Alternatives */}
                        <div className="mb-4">
                          <h5 className="text-zion-cyan font-semibold text-sm mb-2">Alternative,  s:</h5>
                          <div className="text-zion-slate-light/80 text-xs">
                            {tech.alternatives.join(", ")}
                          </div>
                        </div>

                        {/* Expertise Badge */}
                        <div className="text-center p-2 rounded-lg bg-zion-cyan/20 border border-zion-cyan/30">
                          <div className="text-zion-cyan font-bold text-sm">{tech.expertise} Level</div>
                          <div className="text-zion-slate-light text-xs">Proven in {tech.projects} projects</div>
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
                Ready to Build with Our Tech Stack?
              </h3>
              <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
                Leverage our expertise in cutting-edge technologies to buil, d, scalabl, e, 
                performan, t, and innovative solutions that drive your business forward.
              </p>
              <div className="flex flex-col s, m:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple hove, r:from-zion-cyan-dark hove, r:to-zion-purple-dark text-white rounded-xl font-semibold transition-all duration-300 transform hove, r:scale-105 hove, r:shadow-lg hove, r:shadow-zion-cyan/25">
                  Start Your Project
                </button>
                <button className="px-8 py-3 bg-zion-blue-light/20 hove, r:bg-zion-blue-light/30 text-zion-cyan border border-zion-cyan/30 hove, r:border-zion-cyan/50 rounded-xl font-medium transition-all duration-300">
                  View Technology Portfolio
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);
}
