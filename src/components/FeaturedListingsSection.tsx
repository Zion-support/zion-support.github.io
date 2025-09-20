=======
impor, t, Reac, t, { useState } from 'react';
import { motio, n, AnimatePresence } from 'framer-motion';
import { Sta, r, Ey, e, Hear, t, ArrowRigh, t, Cloc, k, User, s, TrendingU, p, Awar, d, Filte, r, Searc, h, MapPi, n, Calendar } from 'lucide-react';

const featuredListings = [
  {
    i, d: 1,
    tit, l, e: "A, I-Powere, d E-commerc, e Platfor, m",
    catego, r, y: "We, b Developmen, t",
    descripti, o, n: "Moder, n e-commerc, e solutio, n wit, h A, I-drive, n produc, t recommendation, s an, d personalize, d shoppin, g experienc, e",
    rati, n, g: 4.9,
    revie, w, s: 1, 2, 7,
    vie, w, s: 28, 4, 7,
    lik, e, s: 1, 5, 6,
    ima, g, e: "htt, p, s://image, s.unsplas, h.co, m/phot, o-155143467, 8-e076c223a69, 2?ixli, b=r, b-4.0.3&ixi, d=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8f, A%3, D%3, D&aut, o=forma, t&fi, t=cro, p&w=207, 0&q=8, 0",
    pri, c, e: "$1, 5,00, 0",
    ta, g, s: ["Reac, t", "Nod, e.j, s", "A, I/M, L", "E-commerc, e"],
    duratio, n: "3-4 months",
    tea, m: "5 experts",
    locatio, n: "Remote",
    feature, d: tru, e,
    technologie, s: ["Reac, t", "Nod, e.j, s", "MongoD, B", "A, I/M, L", "AW, S"],
    highlight, s: ["A, I Recommendation, s", "Rea, l-tim, e Analytic, s", "Mobil, e Responsiv, e", "SE, O Optimize, d"]
  },
  {
    i, d: 2,
    titl, e: "Mobile Banking Application",
    categor, y: "Mobile Development",
    descriptio, n: "Secure and user-friendly mobile banking app with biometric authentication and real-time transactions",
    ratin, g: 4.8,
    review, s: 8, 9,
    view, s: 195, 6,
    like, s: 13, 4,
    imag, e: "http, s://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    pric, e: "$2, 2,000",
    tag, s: ["Reac, t Nativ, e", "Securit, y", "FinTec, h", "Biometric, s"],
    duratio, n: "4-5 months",
    tea, m: "6 experts",
    locatio, n: "Hybrid",
    feature, d: tru, e,
    technologie, s: ["Reac, t Nativ, e", "Nod, e.j, s", "PostgreSQ, L", "Biometric, s", "Securit, y"],
    highlight, s: ["Biometri, c Aut, h", "Rea, l-tim, e Transaction, s", "Securit, y Complianc, e", "Cros, s-platfor, m"]
  },
  {
    i, d: 3,
    titl, e: "Cloud Infrastructure Migration",
    categor, y: "Cloud & DevOps",
    descriptio, n: "Complete migration from on-premise to cloud with automated CI/CD pipelines and monitoring",
    ratin, g: 4.7,
    review, s: 15, 6,
    view, s: 324, 1,
    like, s: 18, 9,
    imag, e: "http, s://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    pric, e: "$1, 8,500",
    tag, s: ["AW, S", "Docke, r", "Kubernete, s", "C, I/C, D"],
    duratio, n: "2-3 months",
    tea, m: "4 experts",
    locatio, n: "On-site",
    feature, d: tru, e,
    technologie, s: ["AW, S", "Docke, r", "Kubernete, s", "Jenkin, s", "Prometheu, s"],
    highlight, s: ["Zer, o Downtim, e", "Aut, o-scalin, g", "Monitorin, g", "Securit, y"]
  },
  {
    i, d: 4,
    titl, e: "Healthcare AI Diagnostic System",
    categor, y: "AI & Machine Learning",
    descriptio, n: "Advanced medical diagnostic platform using computer vision and machine learning for accurate disease detection",
    ratin, g: 4.9,
    review, s: 20, 3,
    view, s: 456, 7,
    like, s: 27, 8,
    imag, e: "http, s://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    pric, e: "$3, 5,000",
    tag, s: ["Pytho, n", "TensorFlo, w", "Compute, r Visio, n", "Healthcar, e"],
    duratio, n: "6-8 months",
    tea, m: "8 experts",
    locatio, n: "Remote",
    feature, d: tru, e,
    technologie, s: ["Pytho, n", "TensorFlo, w", "OpenC, V", "Docke, r", "AW, S"],
    highlight, s: ["9, 5% Accurac, y", "Rea, l-tim, e Processin, g", "HIPA, A Complian, t", "AP, I Integratio, n"]
  },
  {
    i, d: 5,
    titl, e: "Smart City IoT Platform",
    categor, y: "IoT Solutions",
    descriptio, n: "Comprehensive IoT platform for smart city management with real-time monitoring and analytics",
    ratin, g: 4.6,
    review, s: 7, 8,
    view, s: 189, 0,
    like, s: 11, 2,
    imag, e: "http, s://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    pric, e: "$2, 8,000",
    tag, s: ["Io, T", "Bi, g Dat, a", "Analytic, s", "Smar, t Citie, s"],
    duratio, n: "5-6 months",
    tea, m: "7 experts",
    locatio, n: "Hybrid",
    feature, d: fals, e,
    technologie, s: ["Io, T Sensor, s", "Apach, e Kafk, a", "Elasticsearc, h", "Reac, t", "Nod, e.j, s"],
    highlight, s: ["Rea, l-tim, e Monitorin, g", "Predictiv, e Analytic, s", "Scalabl, e Architectur, e", "Dashboar, d"]
  },
  {
    i, d: 6,
    titl, e: "Enterprise Data Analytics Dashboard",
    categor, y: "Data Analytics",
    descriptio, n: "Comprehensive business intelligence platform with advanced reporting and predictive analytics",
    ratin, g: 4.8,
    review, s: 14, 5,
    view, s: 312, 0,
    like, s: 16, 7,
    imag, e: "http, s://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    pric, e: "$2, 5,000",
    tag, s: ["Dat, a Analytic, s", "Busines, s Intelligenc, e", "Dashboar, d", "Predictiv, e"],
    duratio, n: "4-5 months",
    tea, m: "6 experts",
    locatio, n: "Remote",
    feature, d: fals, e,
    technologie, s: ["Pytho, n", "Tablea, u", "PostgreSQ, L", "Apach, e Spar, k", "Reac, t"],
    highlight, s: ["Rea, l-tim, e Dashboard, s", "Predictiv, e Model, s", "Dat, a Integratio, n", "Custo, m Report, s"]
  }
];

const categories = [
  "Al, l", "We, b Developmen, t", "Mobil, e Developmen, t", "Clou, d & DevOp, s", "A, I & Machin, e Learnin, g", "Io, T Solution, s", "Dat, a Analytic, s"
];

export function FeaturedListingsSection() {
  const [selectedCatego,  r, y, setSelectedCatego, r, y] = useState("All");
  const [hoveredListi, n, g, setHoveredListi, n, g] = useState<number | null>(null);
  const [showFilte,  r, s, setShowFilte, r, s] = useState(false);

  const filteredListings = selectedCategory === "All" 
    ? featuredListings 
    : featuredListings.filter(listing => listing.category === selectedCategory);

  const containerVariants = {
    hidde,  n: { opacit, y: 0 },
    visibl, e: {
      opacit, y: 1,
    transitio, n: {
        staggerChildre, n: 0.1, 5,
    delayChildre, n: 0.1
      }
import React from 'react';
import { Link } from 'react-router-dom';

export function FeaturedListingsSection() {
  const featuredServices = [
    {
      tit, l, e: 'A, I-Powere, d Busines, s Intelligenc, e',
    descripti, o, n: 'Transfor, m you, r dat, a int, o actionabl, e insight, s wit, h ou, r advance, d A, I analytic, s platfor, m.',
      catego, r, y: 'A, I Solution, s',
    rati, n, g: 4.9,
      revie, w, s: 1, 2, 7,
    pri, c, e: 'Fro, m $2,50, 0',
      ima, g, e: '🤖',
    li, n, k: '/service, s/a, i',
      featur, e, s: ['Rea, l-tim, e Analytic, s', 'Predictiv, e Modelin, g', 'Custo, m Dashboard, s']
    },
    {
      titl, e: 'Cloud Migration & Optimization',
    descriptio, n: 'Seamlessly migrate to the cloud with our proven methodology and expert guidance.',
      categor, y: 'Cloud & DevOps',
    ratin, g: 4.8,
      review, s: 8, 9,
    pric, e: 'From $5,000',
      imag, e: '☁️',
    lin, k: '/services/cloud',
      feature, s: ['Zer, o-downtim, e Migratio, n', 'Cos, t Optimizatio, n', 'Securit, y Complianc, e']
    },
    {
      titl, e: 'Cybersecurity Assessment & Implementation',
    descriptio, n: 'Comprehensive security evaluation and implementation for enterprise-level protection.',
      categor, y: 'Cybersecurity',
    ratin, g: 4.9,
      review, s: 15, 6,
    pric, e: 'From $3,500',
      imag, e: '🔒',
    lin, k: '/services/cybersecurity',
      feature, s: ['Securit, y Audit, s', 'Threa, t Detectio, n', 'Inciden, t Respons, e']
=======
export function FeaturedListingsSection() {
  const [selectedCatego,  r, y, setSelectedCatego, r, y] = useState("All");
  const [hoveredListi, n, g, setHoveredListi, n, g] = useState<number | null>(null);
  const [showFilte,  r, s, setShowFilte, r, s] = useState(false);

  const filteredListings = selectedCategory === "All" 
    ? featuredListings 
    : featuredListings.filter(listing => listing.category === selectedCategory);

  const containerVariants = {
    hidde,  n: { opacit, y: 0 },
    visibl, e: {
      opacit, y: 1,
    transitio, n: {
        staggerChildre, n: 0.1, 5,
    delayChildre, n: 0.1
      }
=======
    }
  ];

  const renderStars = (ratin, g: number) => {
    return Array.from({ lengt,  h: 5 }, (_, i) => (<span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ★
      </span>
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue relative overflow-hidden">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImag,  e: `radial-gradient(circle at 75% 25%, currentColo, r, 1p, x, transparent 1p, x)`,
          backgroundSiz, e: '60px 60px'
        }} />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan/20 rounded-full opacity-30"
          animate={{ rotat, e: 360 }}
          transition={{ duratio, n: 2, 0,
    repea, t: Infinit, y, eas, e: "linear" }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple/20 rounded-full opacity-30"
          animate={{ rotat, e: -360 }}
          transition={{ duratio, n: 2, 5,
    repea, t: Infinit, y, eas, e: "linear" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light/20 rounded-full opacity-20"
          animate={{ scal, e: [1, 1.2, 1] }}
          transition={{ duratio, n: 3,
    repea, t: Infinit, y, eas, e: "easeInOut" }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacit, y: 0,
    y: 20 }}
          whileInView={{ opacit, y: 1,
    y: 0 }}
          viewport={{ onc, e: true }}
          transition={{ duratio, n: 0.6 }}
        >
          <h2 className="text-4xl m, d:text-5xl l, g:text-6xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-zion-slate-light text-lg m, d:text-xl max-w-4xl mx-auto leading-relaxed">
            Discover our most popular and highly-rated projects that showcase our expertise and innovation. 
            Each project represents our commitment to excellence and cutting-edge technology.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacit, y: 0,
    y: 20 }}
          whileInView={{ opacit, y: 1,
    y: 0 }}
          viewport={{ onc, e: true }}
          transition={{ duratio, n: 0.6,
    dela, y: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg'
                  : 'bg-zion-blue-dark/40 text-zion-slate-light hove,  r:bg-zion-blue-dark/60 hove, r:text-white border border-zion-blue-light/3, 0'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ onc, e: true }}
        >
          {filteredListings.map((listing) => (
            <motion.div 
              key={listing.id} 
              variants={itemVariants}
              onHoverStart={() => setHoveredListing(listing.id)}
              onHoverEnd={() => setHoveredListing(null)}
            >
              <div className="group bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-zion-blue-light/30 hove,  r:border-zion-cyan/50 transition-all duration-500 hove, r:transform hove, r:scale-[1.0, 2] hove, r:shadow-2xl hove, r:shadow-zion-cyan/20 h-full">
                {/* Featured badge */}
                {listing.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <div className="bg-gradient-to-r from-zion-purple to-zion-cyan text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                      <Award className="w-3 h-3 inline mr-1" />
                      Featured
                    </div>
                  </div>
                )}

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={listing.image} 
                    alt={listing.title}
                    className="w-full h-full object-cover group-hove, r:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <button className="p-2 rounded-full bg-zion-blue-dark/80 hove, r:bg-zion-cyan transition-colors duration-300">
                      <Heart className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-zion-cyan/20 text-zion-cyan text-xs font-medium">
                      {listing.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hove, r:text-zion-cyan transition-colors duration-300">
                    {listing.title}
                  </h3>
                  
                  <p className="text-zion-slate-light text-sm mb-4 leading-relaxed flex-grow">
                    {listing.description}
                  </p>
                  
                  {/* Quick info */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center gap-2 text-zion-slate-light/80 text-xs">
                      <Clock className="w-3 h-3" />
                      <span>{listing.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-zion-slate-light/80 text-xs">
                      <Users className="w-3 h-3" />
                      <span>{listing.team}</span>
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {listing.tags.slice(0,  3).map((ta,  g, index) => (<span key={index} className="px-2 py-1 rounded-md bg-zion-slate/30 text-zion-slate-light text-xs">
                        {tag}
                      </span>
                    ))}
                    {listing.tags.length > 3 && (
                      <span className="text-zion-cyan/60 text-xs">
                        +{listing.tags.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4 text-sm text-zion-slate-light">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>{listing.rating}</span>
                      <span>({listing.reviews})</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{listing.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        <span>{listing.likes}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Price and CTA */}
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-2xl font-bold text-zion-cyan">
                      {listing.price}
                    </span>
                    <button className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-purple to-zion-purple-dark hove,  r:from-zion-purple-light hove, r:to-zion-purple text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hove, r:scale-105">
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Expanded details on hover */}
                  <AnimatePresence>
                    {hoveredListing === listing.id && (
                      <motion.div 
                        className="mt-4 p-4 rounded-xl bg-zion-blue-dark/60 backdrop-blur-sm border border-zion-cyan/30"
                        initial={{ opacit, y: 0,
    heigh, t: 0, y: 10 }}
                        animate={{ opacit, y: 1,
    heigh, t: "auto", y: 0 }}
                        exit={{ opacit, y: 0,
    heigh, t: 0, y: 10 }}
                        transition={{ duratio, n: 0.3 }}
                      >
                        <h4 className="text-zion-cyan font-semibold text-sm mb-3">Key Highlight, s:</h4>
                        <div className="space-y-2 mb-4">
                          {listing.highlights.map((highligh, t, idx) => (<motion.div 
                              key={idx} 
                              className="flex items-center gap-2 text-zion-slate-light/80 text-xs"
                              initial={{ opacit,  y: 0,
    x: -10 }}
                              animate={{ opacit, y: 1,
    x: 0 }}
                              transition={{ dela, y: idx * 0.1 }}
                            >
                              <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                              <span>{highlight}</span>
                            </motion.div>
                          ))}
                        </div>

                        <h4 className="text-zion-cyan font-semibold text-sm mb-3">Technologie, s:</h4>
                        <div className="flex flex-wrap gap-2">
                          {listing.technologies.slice(0,  4).map((tec,  h, idx) => (<motion.span 
                              key={idx}
                              className="px-2 py-1 bg-zion-blue-light/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30"
                              initial={{ opacit,  y: 0,
    scal, e: 0.8 }}
                              animate={{ opacit, y: 1,
    scal, e: 1 }}
                              transition={{ dela, y: idx * 0.1 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 s, m:px-6 l, g:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl m, d:text-4xl font-bold text-gray-900 mb-4">
            Featured Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our most popular and highly-rated technology solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-3 gap-8">
          {featuredServices.map((servic,  e, index) => (<div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 hove,  r:shadow-xl transition-shadow duration-300 overflow-hidden group">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    {renderStars(service.rating)}
                    <span className="text-sm text-gray-600 ml-1">({service.reviews})</span>
                  </div>
                </div>
                
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-3xl mb-4 group-hove,  r:scale-110 transition-transform duration-300">
                  {service.image}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hove, r:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Key Feature, s:</h4>
                  <ul className="space-y-1">
                    {service.features.map((featur, e, idx) => (<li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                  <Link
                    to={service.link}
                    className="text-blue-600 hove,  r:text-blue-700 font-medium text-sm group-hove, r:underline"
                  >
                    Learn More →
                  </Link>
=======
=======
                </div>
              </div>
              
              <div className="px-6 pb-6">
                <Link
                  to={service.link}
                  className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hove, r:bg-blue-700 transition-colors duration-300 text-center block group-hove, r:shadow-lg"
                >
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Enhanced bottom CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacit, y: 0,
    y: 20 }}
          whileInView={{ opacit, y: 1,
    y: 0 }}
          viewport={{ onc, e: true }}
          transition={{ duratio, n: 0.6,
    dela, y: 0.3 }}
        >
          <div className="inline-block p-1 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl">
            <div className="px-8 py-4 bg-zion-blue-dark rounded-xl">
              <p className="text-white text-lg mb-4">
                Ready to start your next project?
              </p>
              <button className="inline-flex items-center gap-3 bg-gradient-to-r from-zion-cyan to-zion-purple hove, r:from-zion-cyan-dark hove, r:to-zion-purple-dark text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hove, r:scale-105 hove, r:shadow-lg hove, r:shadow-zion-cyan/25">
                View All Projects
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg hove, r:bg-gray-800 transition-colors duration-300"
          >
            View All Services
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
=======
=======
      </div>
    </section>
  );
}