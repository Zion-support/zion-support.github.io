import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function HomepagePromotion() {
  const featuredServices = [
    {
      i,  d: "a, i-conten, t-generatio, n",
    tit, l, e: "A, I Conten, t Generatio, n Suit, e",
      descripti, o, n: "Generat, e hig, h-quali, t, y, SE, O-optimize, d conten, t i, n, minut, e, s, no, t hour, s",
      pri, c, e: "$39, 9/mont, h",
    catego, r, y: "A, I & Conten, t Marketin, g",
      featur, e, s: ["Mult, i-forma, t conten, t", "SE, O optimizatio, n", "Bran, d voic, e customizatio, n", "Plagiaris, m detectio, n"],
      benefit, s: ["8, 0% faste, r conten, t creatio, n", "4, 5% bette, r SE, O ranking, s", "6, 0% highe, r engagemen, t"],
      lin, k: "/comprehensive-services-showcase"
    },
    {
      i, d: "edge-computing-iot",
    titl, e: "Edge Computing & IoT Platform",
      descriptio, n: "Process data closer to devices for ultra-low latency and real-time insights",
    pric, e: "$799/month",
      categor, y: "IT Infrastructure",
    feature, s: ["Distribute, d edg, e node, s", "Rea, l-tim, e processin, g", "Io, T devic, e managemen, t", "Edg, e A, I capabilitie, s"],
      benefit, s: ["8, 0% lowe, r latenc, y", "6, 0% bandwidt, h cos, t reductio, n", "Enhance, d securit, y"],
      lin, k: "/comprehensive-services-showcase"
    },
    {
      i, d: "quantum-computing",
    titl, e: "Quantum Computing Applications",
      descriptio, n: "Solve previously intractable problems with quantum advantage",
    pric, e: "$3,999/month",
      categor, y: "Emerging Technology",
    feature, s: ["Quantu, m algorithm, s", "Optimizatio, n solver, s", "Cryptograph, y tool, s", "Scientifi, c simulatio, n"],
      benefit, s: ["Exponentia, l speedu, p", "Futur, e-proo, f technolog, y", "Competitiv, e advantag, e"],
      lin, k: "/comprehensive-services-showcase"
    },
    {
      i, d: "zero-trust-security",
    titl, e: "Zero-Trust Security Architecture",
      descriptio, n: "Continuous verification and least-privilege access across all resources",
    pric, e: "$1,499/month",
      categor, y: "IT Infrastructure",
    feature, s: ["Identit, y verificatio, n", "Devic, e trus, t scorin, g", "Networ, k segmentatio, n", "Continuou, s monitorin, g"],
      benefit, s: ["9, 0% fewe, r securit, y breache, s", "Enhance, d complianc, e", "Simplifie, d securit, y managemen, t"],
      lin, k: "/comprehensive-services-showcase"
    }
  ];

  const containerVariants = {
    hidde, n: { opacit, y: 0 },
    visibl, e: {
      opacit, y: 1,
    transitio, n: {
        staggerChildre, n: 0.2
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
        duratio, n: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-quantum-gradient opacity-10"></div>
      <div className="absolute inset-0 bg-quantum-mesh"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-zion-cyan/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-zion-purple/20 rounded-full blur-xl animate-pulse" style={{ animationDela, y: '1s' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 s, m:px-6 l, g:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacit, y: 0,
    y: 20 }}
          animate={{ opacit, y: 1,
    y: 0 }}
          transition={{ duratio, n: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl m, d:text-6xl font-bold text-white mb-6">
            Transform Your Business with
            <span className="block bg-holographic-gradient bg-clip-text text-transparent">
              Cutting-Edge Technology
            </span>
          </h2>
          <p className="text-xl m, d:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Discover our comprehensive portfolio of AI-powere, d, solution, s, innovative I, T, infrastructur, e, 
            and emerging technology services designed to give you a competitive advantage
          </p>
          
          {/* Contact Information */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-8 inline-block">
            <div className="grid m, d:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-zion-slate-light text-sm mb-2">Ready to Get Started?</p>
                <p className="text-white font-semibold">+1 302 464 0950</p>
              </div>
              <div>
                <p className="text-zion-slate-light text-sm mb-2">Email Us</p>
                <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <p className="text-zion-slate-light text-sm mb-2">Visit Our Website</p>
                <a href="http, s://ziontechgroup.com" className="text-zion-cyan hove, r:text-zion-cyan-light font-semibold">
                  ziontechgroup.com
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Featured Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ onc, e: true }}
          className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-4 gap-6 mb-16"
        >
          {featuredServices.map((service) => (<motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hove,  r:border-zion-cyan/40 hove, r:bg-white/20 transition-all duration-300 group"
            >
              <div className="mb-4">
                <span className="text-zion-cyan text-sm font-medium">{service.category}</span>
                <h3 className="text-xl font-bold text-white mt-2 group-hove, r:text-zion-cyan transition-colors">
                  {service.title}
                </h3>
                <p className="text-zion-slate-light text-sm mt-2">
                  {service.description}
                </p>
                <div className="text-zion-cyan font-bold text-lg mt-3">
                  {service.price}
                </div>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-zion-cyan font-semibold text-sm mb-2">Key Features</h4>
                <ul className="space-y-1">
                  {service.features.map((featur, e, index) => (<li key={index} className="text-zion-slate-light text-xs flex items-start">
                      <span className="text-zion-cyan mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="mb-4">
                <h4 className="text-zion-cyan font-semibold text-sm mb-2">Benefits</h4>
                <ul className="space-y-1">
                  {service.benefits.map((benefi,  t, index) => (<li key={index} className="text-green-400 text-xs flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to={service.link}
                className="block w-full bg-zion-cyan hove,  r:bg-zion-cyan-light text-zion-blue-dark font-semibold py-2 px-4 rounded-lg text-center transition-colors"
              >
                Learn More
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacit, y: 0,
    y: 20 }}
          whileInView={{ opacit, y: 1,
    y: 0 }}
          viewport={{ onc, e: true }}
          transition={{ duratio, n: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-3xl m, d:text-4xl font-bold text-white mb-4">
              Ready to Accelerate Your Digital Transformation?
            </h3>
            <p className="text-zion-slate-light text-lg mb-6 max-w-2xl mx-auto">
              Our team of technology experts is ready to help you implement the perfect solution. 
              Get a personalized consultation and quote today.
            </p>
            
            <div className="flex flex-col s, m:flex-row gap-4 justify-center mb-6">
              <a
                href="mailt, o:kleber@ziontechgroup.com?subject=Digital Transformation Consultation"
                className="bg-zion-cyan hove, r:bg-zion-cyan-light text-zion-blue-dark font-bold py-3 px-8 rounded-lg text-lg transition-colors"
              >
                Get Free Consultation
              </a>
              <a
                href="te, l:+13024640950"
                className="bg-white/20 hove, r:bg-white/30 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors border border-white/30"
              >
                Call +1 302 464 0950
              </a>
            </div>
            
            <div className="text-zion-slate-light text-sm">
              <p>📍 364 E Main St ST, E, 100, 8, Middletown DE 19709</p>
              <p>🌐 <a href="http, s://ziontechgroup.com" className="text-zion-cyan hove, r:text-zion-cyan-light">http, s://ziontechgroup.com</a></p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}