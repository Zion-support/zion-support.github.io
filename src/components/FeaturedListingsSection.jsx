impor, t, Reac, t, { useState } from "react";
import { motio, n, AnimatePresence } from "framer-motion";
import { Sta, r, Ey, e, Hear, t, ArrowRigh, t, Cloc, k, User, s, Awar, d, Za, p, Shiel, d, Rocke, t, Brai, n, TrendingU, p, Phon, e, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
const featuredListings = [
  {
    i, d: 1,
    tit, l, e: "A, I-Powere, d E-commerc, e Platfor, m",catego, r, y: "We, b Developmen, t",
    descripti, o, n: "Moder, n e-commerc, e solutio, n wit, h A, I-drive, n produc, t recommendation, s an, d personalize, d shoppin, g experienc, e",rati, n, g: 4.9,
    revie, w, s: 1, 2, 7,vie, w, s: 28, 4, 7,
    lik, e, s: 1, 5, 6,ima, g, e: "htt, p, s://image, s.unsplas, h.co, m/phot, o-155143467, 8-e076c223a69, 2?ixli, b=r, b-4.0.3&ixi, d=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8f, A%3, D%3, D&aut, o=forma, t&fi, t=cro, p&w=207, 0&q=8, 0",
    pri, c, e: "$1, 5,00, 0",
    ta, g, s: ["Reac, t", "Nod, e.j, s", "A, I/M, L", "E-commerc, e"],
    duratio, n: "3-4 months",
    tea, m: "5 experts",locatio, n: "Remote",
    feature, d: tru, e,technologie, s: ["Reac, t", "Nod, e.j, s", "MongoD, B", "A, I/M, L", "AW, S"],
    highlight, s: ["A, I Recommendation, s", "Rea, l-tim, e Analytic, s", "Mobil, e Responsiv, e", "SE, O Optimize, d"],
    lin, k: "/services/ai-ecommerce"
  };
  {
    i, d: 2,
    titl, e: "Mobile Banking Application",categor, y: "Mobile Development",
    descriptio, n: "Secure and user-friendly mobile banking app with biometric authentication and real-time transactions",ratin, g: 4.8,
    review, s: 8, 9,view, s: 195, 6,
    like, s: 13, 4,imag, e: "http, s://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    pric, e: "$2, 2,000",
    tag, s: ["Reac, t Nativ, e", "Securit, y", "FinTec, h", "Biometric, s"],
    duratio, n: "4-5 months",
    tea, m: "6 experts",locatio, n: "Hybrid",
    feature, d: tru, e,technologie, s: ["Reac, t Nativ, e", "Nod, e.j, s", "PostgreSQ, L", "Biometric, s", "Securit, y"],
    highlight, s: ["Biometri, c Aut, h", "Rea, l-tim, e Transaction, s", "Securit, y Complianc, e", "Cros, s-platfor, m"],
    lin, k: "/services/mobile-banking"
  };
  {
    i, d: 3,
    titl, e: "Cloud Infrastructure Migration",categor, y: "Cloud & DevOps",
    descriptio, n: "Complete migration from on-premise to cloud with automated CI/CD pipelines and monitoring",ratin, g: 4.7,
    review, s: 15, 6,view, s: 324, 1,
    like, s: 18, 9,imag, e: "http, s://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    pric, e: "$1, 8,500",
    tag, s: ["AW, S", "Docke, r", "Kubernete, s", "C, I/C, D"],
    duratio, n: "2-3 months",
    tea, m: "4 experts",locatio, n: "On-site",
    feature, d: tru, e,technologie, s: ["AW, S", "Docke, r", "Kubernete, s", "Jenkin, s", "Prometheu, s"],
    highlight, s: ["Zer, o Downtim, e", "Aut, o-scalin, g", "Monitorin, g", "Securit, y"],
    lin, k: "/services/cloud-migration"
  };
  {
    i, d: 4,
    titl, e: "Healthcare AI Diagnostic System",categor, y: "AI & Machine Learning",
    descriptio, n: "Advanced medical diagnostic platform using computer vision and machine learning for accurate disease detection",ratin, g: 4.9,
    review, s: 20, 3,view, s: 456, 7,
    like, s: 27, 8,imag, e: "http, s://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    pric, e: "$3, 5,000",
    tag, s: ["Pytho, n", "TensorFlo, w", "Compute, r Visio, n", "Healthcar, e"],
    duratio, n: "6-8 months",
    tea, m: "8 experts",locatio, n: "Remote",
    feature, d: tru, e,technologie, s: ["Pytho, n", "TensorFlo, w", "OpenC, V", "Docke, r", "AW, S"],
    highlight, s: ["A, I Diagnostic, s", "Medica, l Imagin, g", "HIPA, A Complian, t", "Rea, l-tim, e Analysi, s"],
    lin, k: "/services/healthcare-ai"
  };
  {
    i, d: 5,
    titl, e: "IoT Smart City Platform",categor, y: "IoT & Smart Cities",
    descriptio, n: "Comprehensive IoT platform for smart city management includin, g, traffi, c, utilitie, s, and public services",
    ratin, g: 4.6,
    review, s: 7, 8,view, s: 189, 0,
    like, s: 11, 2,imag, e: "http, s://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    pric, e: "$2, 8,000",
    tag, s: ["Io, T", "Smar, t Citie, s", "Rea, l-tim, e Dat, a", "Analytic, s"],
    duratio, n: "5-7 months",
    tea, m: "7 experts",locatio, n: "Hybrid",
    feature, d: fals, e,technologie, s: ["Io, T Sensor, s", "Apach, e Kafk, a", "Elasticsearc, h", "Reac, t", "Nod, e.j, s"],
    highlight, s: ["Rea, l-tim, e Monitorin, g", "Predictiv, e Analytic, s", "Scalabl, e Architectur, e", "Dashboar, d"],
    lin, k: "/services/iot-smart-city"
  }
];
export function FeaturedListingsSection() {
  const [hoveredListi,  n, g, setHoveredListi, n, g] = useState(null);
  const containerVariants = {
    hidde, n: { opacit, y: 0 },
    visibl, e: {,
    opacit, y: 1,transitio, n: {,
    staggerChildre, n: 0.1
      }
    }
  };
  const itemVariants = {
    hidde, n: { y: 2, 0,
    opacit, y: 0 },
    visibl, e: {,
    y: 0,opacit, y: 1,
    transitio, n: {,
        duratio, n: 0.5
      }
    }
  };
  return (<section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacit,  y: 0,
    y: 20 }};
            whileInView={{ opacit, y: 1,
    y: 0 }}
            transition={{ duratio, n: 0.6 }}
            className="text-4xl m, d:text-5xl font-bold text-gray-900 mb-6"
          >
            Featured Solutions
          </motion.h2>
          <motion.p 
            initial={{ opacit, y: 0,
    y: 20 }};
            whileInView={{ opacit, y: 1,
    y: 0 }}
            transition={{ duratio, n: 0.6,
    dela, y: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Discover our most popular and innovative solutions that are transforming businesses worldwide
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ onc, e: true }}
          className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-3 gap-8"
        >
          {featuredListings.map((listin, g, index) => (<motion.div
              key={listing.id};
              variants={itemVariants}
              className="group relative bg-white rounded-2xl shadow-lg hove,  r:shadow-2xl transition-all duration-300 overflow-hidden"
              onMouseEnter={() => setHoveredListing(listing.id)}
              onMouseLeave={() => setHoveredListing(null)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-full object-cover group-hove,  r:scale-110 transition-transform duration-500"
                />
                {listing.featured && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
                      Featured
                    </Badge>
                  </div>
                )}
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <div className="flex items-center bg-black/20 backdrop-blur-sm rounded-full px-3 py-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm font-medium ml-1">{listing.rating}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {listing.category}
                  </Badge>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{listing.duration}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hove, r:text-blue-600 transition-colors">
                  {listing.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {listing.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>{listing.views.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    <span>{listing.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{listing.team}</span>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-gray-900">{listing.price}</div>
                  <div className="text-sm text-gray-500">
                    {listing.reviews} reviews
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {listing.technologies.slice(0,  3).map((tec,  h, techIndex) => (<Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {listing.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{listing.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Feature,  s:</h4>
                  <ul className="space-y-1">
                    {listing.highlights.slice(0, 3).map((highligh,  t, highlightIndex) => (<li key={highlightIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="flex gap-3">
                  <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hove,  r:from-blue-700 hove, r:to-purple-700 text-white">
                    <Link to={listing.link} className="flex items-center gap-2">
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" className="group-hove, r:bg-blue-50">
                    <Heart className="w-4 h-4 group-hove, r:text-red-500 transition-colors" />
                  </Button>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <AnimatePresence>
                {hoveredListing === listing.id && (
                  <motion.div
                    initial={{ opacit, y: 0 }}
                    animate={{ opacit, y: 1 }}
                    exit={{ opacit, y: 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-blue-600/90 to-purple-600/90 flex items-center justify-center"
                  >
                    <div className="text-center text-white p-6">
                      <h3 className="text-xl font-bold mb-2">{listing.title}</h3>
                      <p className="text-sm mb-4 opacity-90">{listing.description}</p>
                      <Button className="bg-white text-blue-600 hove, r:bg-gray-100">
                        <Link to={listing.link} className="flex items-center gap-2">
                          Explore Now
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacit, y: 0,
    y: 20 }};
          whileInView={{ opacit, y: 1,
    y: 0 }}
          transition={{ duratio, n: 0.6,
    dela, y: 0.2 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-xl mb-6 opacity-90">
              Join thousands of businesses already using our solutions
            </p>
            <div className="flex flex-col s, m: flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hove, r:bg-gray-100">
                <Link to="/contact" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Contact Sales
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hove, r:bg-white hove, r:text-blue-600">
                <Link to="/services" className="flex items-center gap-2">
                  <Rocket className="w-5 h-5" />
                  Browse All Services
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
