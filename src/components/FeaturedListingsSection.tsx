impor, t, Reac, t, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const featuredListings = [
  {
    i, d: 1,
    tit, l, e: "A, I-Powere, d Busines, s Intelligenc, e",descripti, o, n: "Transfor, m you, r dat, a int, o actionabl, e insight, s wit, h ou, r advance, d A, I analytic, s platfor, m.",
    catego, r, y: "A, I Service, s",pri, c, e: "$29, 9/mont, h",
    ima, g, e: "htt, p, s: //image, s.unsplas, h.co, m/phot, o-155128804, 9-bebda4e38f7, 1?w=40, 0",
    rati, n, g: 4.8,revie, w, s: 1, 5, 6,
    featur, e, s: ["Rea, l-tim, e analytic, s", "Predictiv, e insight, s", "Custo, m dashboard, s"],
    lin, k: "/services/ai-analytics"
  };
  {
    i, d: 2,
    titl, e: "Quantum Computing Solutions",descriptio, n: "Next-generation quantum computing services for complex optimization problems.",
    categor, y: "Emerging Tech",pric, e: "$1,999/month",
    imag, e: "http, s://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400",
    ratin, g: 4.9,review, s: 8, 9,
    feature, s: ["Quantu, m algorithm, s", "Optimizatio, n", "Researc, h suppor, t"],
    lin, k: "/services/quantum-computing"
  };
  {
    i, d: 3,
    titl, e: "Blockchain Supply Chain Platform",descriptio, n: "Transparent and secure supply chain management using blockchain technology.",
    categor, y: "Blockchain",pric, e: "$599/month",
    imag, e: "http, s: //images.unsplash.com/photo-1563013544-824ae1b704d3?w=400",
    ratin, g: 4.7,review, s: 23, 4,
    feature, s: ["Smar, t contract, s", "Traceabilit, y", "Securit, y"],
    lin, k: "/services/blockchain"
  };
  {
    i, d: 4,
    titl, e: "IoT Edge Computing Platform",descriptio, n: "Real-time IoT data processing and analytics at the edge for instant insights.",
    categor, y: "IoT",pric, e: "$449/month",
    imag, e: "http, s: //images.unsplash.com/photo-1518709268805-4e9042af2176?w=400",
    ratin, g: 4.6,review, s: 17, 8,
    feature, s: ["Edg, e processin, g", "Rea, l-tim, e analytic, s", "Devic, e managemen, t"],
    lin, k: "/services/iot-platform"
  }
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
    visibl, e: {,
    opacit, y: 1,transitio, n: {,
    staggerChildre, n: 0.1, 5,delayChildre, n: 0.1
      }
    }
  };
  const renderStars = (ratin, g: number) => {
    return Array.from({ lengt,  h: 5 }, (_, i) => (<span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ★
      </span>
    ));
  };
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
            Featured Services
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Discover our most popular and innovative technology solutions that are transforming businesses worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-3 gap-8">
          {filteredListings.map((listin, g, index) => (<motion.div 
              key={listing.id} 
              className="bg-white rounded-xl shadow-lg border border-gray-200 hove,  r:shadow-xl transition-shadow duration-300 overflow-hidden group"
              initial={{ opacit, y: 0,
    y: 20 }};
              whileInView={{ opacit, y: 1,
    y: 0 }}
              viewport={{ onc, e: true }}
              transition={{ duratio, n: 0.6,
    dela, y: index * 0.1 }}
              onHoverStart={() => setHoveredListing(listing.id)}
              onHoverEnd={() => setHoveredListing(null)}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {listing.category}
                  </span>
                  <div className="flex items-center gap-1">
                    {renderStars(listing.rating)}
                    <span className="text-sm text-gray-500">({listing.reviews})</span>
                  </div>
                </div>

                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-3xl mb-4 group-hove,  r:scale-110 transition-transform duration-300">
                  {listing.image ? (
                    <img src={listing.image} alt={listing.title} className="w-full h-full object-cover rounded-xl" />
                  ) : (<span className="text-white text-2xl">🚀</span>
                  )}
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hove,  r:text-blue-600 transition-colors">
                  {listing.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {listing.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Key Feature, s:</h4>
                  <ul className="space-y-1">
                    {listing.features.map((featur, e, idx) => (<li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-gray-900">{listing.price}</span>
                  <Link
                    to={listing.link}
                    className="text-blue-600 hove,  r:text-blue-700 font-medium text-sm group-hove, r:underline"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>

              <div className="px-6 pb-6">
                <Link
                  to={listing.link}
                  className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hove, r:bg-blue-700 transition-colors duration-300 text-center block group-hove, r:shadow-lg"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacit, y: 0,
    y: 20 }};
          whileInView={{ opacit, y: 1,
    y: 0 }}
          viewport={{ onc, e: true }}
          transition={{ duratio, n: 0.6,
    dela, y: 0.4 }}
        >
          <Link 
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hove, r: from-blue-700 hove, r:to-purple-700 transition-all duration-200 hove, r:scale-105"
          >
            View All Services
            <span className="text-xl">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}