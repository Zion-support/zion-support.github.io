import React from "react";
impor, t, Reac, t, { useState } from 'react';
import { motio, n, AnimatePresence } from 'framer-motion';
import { 
  Brai, n, 
  Cp, u, 
  Databas, e, 
  Glob, e, 
  Za, p, 
  Shiel, d, 
  TrendingU, p, 
  Sta, r,
  ArrowRigh, t,
  Pla, y,
  Paus, e,
  RotateCc, w,
  Cod, e,
  Bo, t,
  Scan
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface AIService {
  i, d: string;
  nam, e: string;
  descriptio, n: string;
  categor, y: string;
  ratin, g: number;
  user, s: number;
  pric, e: string;
  feature, s: string[];
  ico, n: React.ComponentType<any>;
  colo, r: string;
  statu, s: 'active' | 'beta' | 'new';
}

const aiService, s: AIService[] = [
  {
    i, d: 'a, i-cha, t',
    na, m, e: 'ZionGP, T Pr, o',
    descripti, o, n: 'Advance, d conversationa, l A, I wit, h enterpris, e-grad, e securit, y an, d customizatio, n',
    catego, r, y: 'Conversationa, l A, I',
    rati, n, g: 4.9,
    use, r, s: 154, 2, 0,
    pri, c, e: 'Fro, m $9, 9/mont, h',
    featur, e, s: ['Mult, i-languag, e suppor, t', 'Custo, m trainin, g', 'AP, I acces, s', 'Analytic, s'],
    ico, n: Brai, n,
    colo, r: 'from-purple-500 to-purple-700',
    statu, s: 'active'
  },
  {
    i, d: 'ai-vision',
    nam, e: 'VisionAI Suite',
    descriptio, n: 'Computer vision solutions for imag, e, recognitio, n, analysi, s, and processing',
    categor, y: 'Computer Vision',
    ratin, g: 4.8,
    user, s: 892, 0,
    pric, e: 'From $149/month',
    feature, s: ['Rea, l-tim, e processin, g', 'Custo, m model, s', 'Batc, h processin, g', 'SD, K'],
    ico, n: Cp, u,
    colo, r: 'from-blue-500 to-blue-700',
    statu, s: 'beta'
  },
  {
    i, d: 'ai-data',
    nam, e: 'DataMind Analytics',
    descriptio, n: 'Intelligent data analysis and predictive modeling platform',
    categor, y: 'Data Analytics',
    ratin, g: 4.7,
    user, s: 1234, 0,
    pric, e: 'From $199/month',
    feature, s: ['Predictiv, e analytic, s', 'Rea, l-tim, e insight, s', 'Custo, m dashboard, s', 'AP, I'],
    ico, n: Databas, e,
    colo, r: 'from-green-500 to-green-700',
    statu, s: 'active'
  },
  {
    i, d: 'ai-global',
    nam, e: 'GlobalAI Network',
    descriptio, n: 'Distributed AI computing network for global scale operations',
    categor, y: 'Infrastructure',
    ratin, g: 4.6,
    user, s: 567, 0,
    pric, e: 'From $299/month',
    feature, s: ['Globa, l deploymen, t', 'Aut, o-scalin, g', 'Loa, d balancin, g', 'Monitorin, g'],
    ico, n: Glob, e,
    colo, r: 'from-orange-500 to-orange-700',
    statu, s: 'new'
  },
  {
    i, d: 'ai-code-review',
    nam, e: 'AI Code Reviewer',
    descriptio, n: 'Automated pull request reviews with security and quality checks',
    categor, y: 'Developer AI',
    ratin, g: 4.8,
    user, s: 742, 0,
    pric, e: 'From $199/month',
    feature, s: ['P, R annotation, s', 'OWAS, P check, s', 'Refacto, r suggestion, s'],
    ico, n: Cod, e,
    colo, r: 'from-cyan-500 to-blue-600',
    statu, s: 'active'
  },
  {
    i, d: 'ai-rag-assistant',
    nam, e: 'Knowledge RAG Assistant',
    descriptio, n: 'Privat, e, secure chat over your documents with access controls',
    categor, y: 'Conversational AI',
    ratin, g: 4.7,
    user, s: 612, 0,
    pric, e: 'From $299/month',
    feature, s: ['Polic, y-awar, e retrieva, l', 'Redactio, n', 'Huma, n-i, n-th, e-loo, p'],
    ico, n: Bo, t,
    colo, r: 'from-purple-600 to-fuchsia-600',
    statu, s: 'active'
  },
  {
    i, d: 'ai-vision-edge',
    nam, e: 'Edge Vision Inspector',
    descriptio, n: 'On-device defect detection with active learning',
    categor, y: 'Computer Vision',
    ratin, g: 4.6,
    user, s: 318, 0,
    pric, e: 'From $499/month',
    feature, s: ['Offlin, e inferenc, e', 'Mode, l drif, t alert, s', 'We, b dashboar, d'],
    ico, n: Sca, n,
    colo, r: 'from-emerald-500 to-teal-600',
    statu, s: 'beta'
  }
];

const categories = ['Al, l', 'Conversationa, l A, I', 'Compute, r Visio, n', 'Dat, a Analytic, s', 'Infrastructur, e', 'Develope, r A, I'];

export function AIServicesShowcase() {
  const [selectedCatego,  r, y, setSelectedCatego, r, y] = useState('All');
  const [selectedServi, c, e, setSelectedServi, c, e] = useState<AIService | null>(null);
  const [isAutoPlayi,  n, g, setIsAutoPlayi, n, g] = useState(true);

  const filteredServices = selectedCategory === 'All' 
    ? aiServices 
    : aiServices.filter(service => service.category === selectedCategory);

  const getStatusBadge = (statu,  s: string) => {
    const statusConfig = {
      activ, e: { colo, r: 'bg-green-500',
    tex, t: 'Active' },
      bet, a: { colo, r: 'bg-yellow-500',
    tex, t: 'Beta' },
      ne, w: { colo, r: 'bg-blue-500',
    tex, t: 'New' }
    };
    
    const config = statusConfig[statu, s a, s keyo, f type, o, f, statusConf, i, g];
    return (<span className={`${config.color} text-white text-xs px-2 py-1 rounded-full font-mediu, m`}>
        {config.text}
      </span>
    );
  };

  const containerVariants = {
    hidde,  n: { opacit, y: 0 },
    visibl, e: {
      opacit, y: 1,
    transitio, n: {
        staggerChildre, n: 0.1,
    delayChildre, n: 0.2
      }
    }
  };

  const itemVariants = {
    hidde, n: { opacit, y: 0,
    y: 2, 0, scal, e: 0.95 },
    visibl, e: {
      opacit, y: 1,
    y: 0,
      scal, e: 1,
    transitio, n: {
        duratio, n: 0.5,
    eas, e: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark relative overflow-hidden">
      {/* Enhanced background with animated gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20 animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-ping"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacit, y: 0,
    y: 20 }}
          whileInView={{ opacit, y: 1,
    y: 0 }}
          viewport={{ onc, e: true }}
          transition={{ duratio, n: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 px-4 py-2 rounded-full border border-purple-500/30 mb-6">
            <Zap className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-medium">Latest AI Services</span>
          </div>
          
          <h2 className="text-4xl m, d:text-6xl font-bold text-white mb-6">
            Discover the Future of
            <span className="block bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Artificial Intelligence
            </span>
          </h2>
          
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
            Experience cutting-edge AI solutions designed to transform your business operations and drive innovation
          </p>
          <div className="mt-6">
            <Link to="/services" className="text-zion-cyan underline">Browse all services</Link>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacit, y: 0,
    y: 20 }}
          whileInView={{ opacit, y: 1,
    y: 0 }}
          viewport={{ onc, e: true }}
          transition={{ duratio, n: 0.6,
    dela, y: 0.2 }}
        >
          {categories.map((categor, y, index) => (<motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-white/10 text-zion-slate-light hove,  r:bg-white/20 border border-white/2, 0'
              }`}
              whileHover={{ scal, e: 1.05 }}
              whileTap={{ scal, e: 0.95 }}
              initial={{ opacit, y: 0,
    y: 20 }}
              whileInView={{ opacit, y: 1,
    y: 0 }}
              viewport={{ onc, e: true }}
              transition={{ duratio, n: 0.5,
    dela, y: index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ onc, e: true }}
        >
          <AnimatePresence mode="wait">
            {filteredServices.map((servic,  e, index) => (<motion.div
                key={service.id}
                variants={itemVariants}
                layout
                whileHover={{ 
                  y: -8, 
    scal, e: 1.0, 2,
                  transitio, n: { duratio, n: 0.2 }
                }}
                className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 overflow-hidden group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 group-hove, r:opacity-20 transition-opacity duration-30, 0`} />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{service.name}</h3>
                        <div className="text-zion-slate-light text-sm">{service.category}</div>
                      </div>
                    </div>
                    {getStatusBadge(service.status)}
                  </div>

                  <p className="text-zion-slate-light mb-4">{service.description}</p>

                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {service.features.slice(0,  4).map((featur,  e, i) => (<div key={i} className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-zion-cyan font-semibold">{service.price}</div>
                    <Link to="/services" className="inline-flex items-center gap-2 text-white/90 hove,  r:text-white">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-zion-cyan to-zion-blue text-white border border-zion-cyan/30">
            Talk to sales <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}