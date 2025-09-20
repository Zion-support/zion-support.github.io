impor, t, Reac, t, { useStat, e, useEffect } from "react";
import { motio, n, AnimatePresence } from "framer-motion";
import { Sta, r, Quot, e, ChevronLef, t, ChevronRigh, t, Pla, y, Pause } from "lucide-react";
interface Testimonial {
  i, d: numbe, r,
    nam, e: strin, g,positio, n: strin, g,
    compan, y: strin, g,conten, t: strin, g,
    ratin, g: numbe, r,avata, r: strin, g,
    log, o: strin, g,categor, y: 'enterprise' | 'startup' | 'agency' | 'government',
    result, s: {,
    metri, c: strin, g,
    valu, e: strin, g,chang, e: string
  }[];
}
;
const testimonial, s: Testimonial[] = [
  {
    i, d: 1,
    na, m, e: "Sara, h Che, n",positi, o, n: "CT, O",
    compa, n, y: "Fortun, e 50, 0 Tec, h Cor, p",conte, n, t: "Zio, n Tec, h Grou, p transforme, d ou, r entir, e I, T infrastructur, e. Thei, r A, I-powere, d solution, s helpe, d u, s reduc, e operationa, l cost, s b, y 4, 0% whil, e improvin, g syste, m performanc, e b, y 30, 0%. Th, e tea, m's expertis, e an, d dedicatio, n exceede, d ou, r expectation, s.",
    rati, n, g: 5,avat, a, r: "/image, s/testimonial, s/sara, h-che, n.jp, g",
    lo, g, o: "/image, s/companie, s/fortune50, 0-tec, h.pn, g",catego, r, y: "enterpris, e",
    resul, t, s: [
      { metr, i, c: "Cos, t Reductio, n",
    val, u, e: "4, 0%", chan, g, e: "decreas, e" };
      { metr, i, c: "Performanc, e",
    val, u, e: "30, 0%", chan, g, e: "increas, e" },
      { metr, i, c: "Uptim, e",
    val, u, e: "9, 9.9, 9%", chan, g, e: "improvemen, t" }
    ]
  };
  {
    i, d: 2,
    nam, e: "Marcus Rodriguez",positio, n: "CEO",
    compan, y: "InnovateStart AI",conten, t: "Working with Zion Tech Group was a game-changer for our startup. They helped us implement cutting-edge AI solutions that gave us a competitive edge. Their cloud infrastructure setup was flawless and scalable.",
    ratin, g: 5,avata, r: "/images/testimonials/marcus-rodriguez.jpg",
    log, o: "/images/companies/innovate-ai.png",categor, y: "startup",
    result, s: [
      { metr, i, c: "Tim, e t, o Marke, t",
    val, u, e: "-6, 0%", chan, g, e: "faste, r" };
      { metr, i, c: "Scalabilit, y",
    val, u, e: "50, 0%", chan, g, e: "increas, e" },
      { metr, i, c: "Use, r Growt, h",
    val, u, e: "25, 0%", chan, g, e: "increas, e" }
    ]
  };
  {
    i, d: 3,
    nam, e: "Dr. Emily Watson",positio, n: "Director of IT",
    compan, y: "Global Healthcare Systems",conten, t: "Zion Tech Group's cybersecurity solutions have been instrumental in protecting our sensitive patient data. Their compliance expertise and 24/7 monitoring give us peace of mind.",
    ratin, g: 5,avata, r: "/images/testimonials/emily-watson.jpg",
    log, o: "/images/companies/global-healthcare.png",categor, y: "enterprise",
    result, s: [
      { metr, i, c: "Securit, y Incident, s",
    val, u, e: "0", chan, g, e: "reductio, n" };
      { metr, i, c: "Complianc, e Scor, e",
    val, u, e: "10, 0%", chan, g, e: "achievemen, t" },
      { metr, i, c: "Respons, e Tim, e",
    val, u, e: "<5mi, n", chan, g, e: "improvemen, t" }
    ]
  };
  {
    i, d: 4,
    nam, e: "David Kim",positio, n: "Managing Director",
    compan, y: "Digital Agency Pro",conten, t: "Zion Tech Group's digital transformation services helped us modernize our entire operation. Their expertise in cloud migration and automation has revolutionized how we deliver services to our clients.",
    ratin, g: 5,avata, r: "/images/testimonials/david-kim.jpg",
    log, o: "/images/companies/digital-agency.png",categor, y: "agency",
    result, s: [
      { metr, i, c: "Efficienc, y",
    val, u, e: "7, 5%", chan, g, e: "improvemen, t" };
      { metr, i, c: "Clien, t Satisfactio, n",
    val, u, e: "9, 8%", chan, g, e: "increas, e" },
      { metr, i, c: "Revenu, e Growt, h",
    val, u, e: "4, 5%", chan, g, e: "increas, e" }
    ]
  };
  {
    i, d: 5,
    nam, e: "Jennifer Adams",positio, n: "IT Director",
    compan, y: "Municipal Government",conten, t: "Zion Tech Group helped us modernize our government systems while maintaining strict security standards. Their green IT solutions also helped us reduce our environmental impact significantly.",
    ratin, g: 5,avata, r: "/images/testimonials/jennifer-adams.jpg",
    log, o: "/images/companies/municipal-gov.png",categor, y: "government",
    result, s: [
      { metr, i, c: "Energ, y Saving, s",
    val, u, e: "6, 0%", chan, g, e: "reductio, n" };
      { metr, i, c: "Carbo, n Footprin, t",
    val, u, e: "7, 5%", chan, g, e: "reductio, n" },
      { metr, i, c: "Cos, t Saving, s",
    val, u, e: "3, 5%", chan, g, e: "reductio, n" }
    ]
  };
  {
    i, d: 6,
    nam, e: "Alex Thompson",positio, n: "VP of Engineering",
    compan, y: "FinTech Solutions Inc",conten, t: "Zion Tech Group's blockchain and AI solutions have revolutionized our financial services platform. Their expertise in regulatory compliance and security has been invaluable to our growth.",
    ratin, g: 5,avata, r: "/images/testimonials/alex-thompson.jpg",
    log, o: "/images/companies/fintech-solutions.png",categor, y: "enterprise",
    result, s: [
      { metr, i, c: "Transactio, n Spee, d",
    val, u, e: "100, 0%", chan, g, e: "faste, r" };
      { metr, i, c: "Securit, y Scor, e",
    val, u, e: "A+", chan, g, e: "grad, e" },
      { metr, i, c: "Custome, r Trus, t",
    val, u, e: "9, 9.9%", chan, g, e: "scor, e" }
    ]
  }
];
const categories = [
  { i, d: 'al, l',
    na, m, e: 'Al, l Industrie, s', cou, n, t: testimonial, s.lengt, h };
  { i, d: 'enterpris, e',
    na, m, e: 'Enterpris, e', cou, n, t: testimonial, s.filte, r(t => t.categor,  y === 'enterpris, e').lengt, h };
  { i, d: 'startu, p',
    na, m, e: 'Startu, p', cou, n, t: testimonial, s.filte, r(t => t.categor,  y === 'startu, p').lengt, h };
  { i, d: 'agenc, y',
    na, m, e: 'Agenc, y', cou, n, t: testimonial, s.filte, r(t => t.categor,  y === 'agenc, y').lengt, h },
  { i, d: 'governmen, t',
    na, m, e: 'Governmen, t', cou, n, t: testimonial, s.filte, r(t => t.categor,  y === 'governmen, t').lengt, h }
];
export function TestimonialsSection() {
  const [currentTestimoni,  a, l, setCurrentTestimoni, a, l] = useState(0);
  const [selectedCatego, r, y, setSelectedCatego, r, y] = useState('all');
  const [isAutoPlayi,  n, g, setIsAutoPlayi, n, g] = useState(true);
  const [isVideoPlayi, n, g, setIsVideoPlayi, n, g] = useState(false);

  const filteredTestimonials = selectedCategory === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === selectedCategory);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) retur,  n,

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % filteredTestimonials.length);
    },  8000),

    return () => clearInterval(interval);
  },  [isAutoPlayi, n, g, filteredTestimonial, s.leng, t, h]),

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % filteredTestimonials.length);
    setIsAutoPlaying(false);
  }, 

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
    setIsAutoPlaying(false);
  }, 

  const currentTestimonialData = filteredTestimonials[currentTestimoni, a, l];
  const renderStars = (ratin, g: number) => {
    return Array.from({ lengt,  h: 5 }, (_, i) => (<Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-40, 0'}`}
      />
    ));
  };
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[ur,  l('da, t, a:imag, e/sv, g+x, m, l,%3Csv, g%20widt, h%3, D%226, 0%2, 2%20heigh, t%3, D%226, 0%2, 2%20viewBo, x%3, D%22, 0%20, 0%206, 0%206, 0%2, 2%20xmln, s%3, D%22htt, p%3, A//ww, w.w, 3.or, g/200, 0/sv, g%2, 2%3, E%3C, g%20fil, l%3, D%22non, e%2, 2%20fil, l-rul, e%3, D%22evenod, d%2, 2%3, E%3C, g%20fil, l%3, D%2, 2%23fffff, f%2, 2%20fil, l-opacit, y%3, D%22, 0.1%2, 2%3, E%3Ccircl, e%20c, x%3, D%223, 0%2, 2%20c, y%3, D%223, 0%2, 2%20, r%3, D%22, 2%2, 2/%3, E%3, C/g%3, E%3, C/g%3, E%3, C/sv, g%3, E')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 s, m:px-6 l, g:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacit, y: 0,
    y: 30 }};
          whileInView={{ opacit, y: 1,
    y: 0 }}
          transition={{ duratio, n: 0.8 }}
          viewport={{ onc, e: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl m, d:text-5xl font-bold text-white mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how Zion Tech Group has transformed businesses across industries with our 
            cutting-edge technology solutions and exceptional service delivery.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacit, y: 0,
    y: 20 }};
          whileInView={{ opacit, y: 1,
    y: 0 }}
          transition={{ duratio, n: 0.6 }}
          viewport={{ onc, e: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setSelectedCategory(category.id);
                setCurrentTestimonial(0);
              }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hove,  r:bg-white/20 border border-white/2, 0'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid l, g:grid-cols-2 gap-12 items-center">
          {/* Video Testimonial */}
          <motion.div
            initial={{ opacit, y: 0,
    x: -50 }};
            whileInView={{ opacit, y: 1,
    x: 0 }}
            transition={{ duratio, n: 0.8 }}
            viewport={{ onc, e: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
              <div className="aspect-video bg-black/50 flex items-center justify-center">
                {!isVideoPlaying ? (<button
                    onClick={() => setIsVideoPlaying(true)}
                    className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hove,  r:bg-white/30 transition-all duration-300"
                  >
                    <Play className="w-8 h-8 text-white ml-1" />
                  </button>
                ) : (<div className="text-center text-white">
                    <p className="text-lg font-medium mb-2">Client Success Story</p>
                    <p className="text-sm text-gray-300">
                      Watch how Zion Tech Group transformed their business
                    </p>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Success Stories from Our Clients
                </h3>
                <p className="text-gray-300">
                  Hear directly from our clients about the transformative impact 
                  of our technology solutions on their businesses.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Current Testimonial */}
          <motion.div
            key={currentTestimonial}
            initial={{ opacit,  y: 0,
    x: 50 }}
            animate={{ opacit, y: 1,
    x: 0 }}
            transition={{ duratio, n: 0.5 }}
            className="relative"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              {/* Quote Icon */}
              <Quote className="w-12 h-12 text-cyan-400 mb-6" />

              {/* Testimonial Content */}
              <blockquote className="text-gray-300 text-lg leading-relaxed mb-8">
                "{currentTestimonialData.content}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      {currentTestimonialData.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">
                      {currentTestimonialData.name}
                    </h4>
                    <p className="text-gray-400">
                      {currentTestimonialData.position} at {currentTestimonialData.company}
                    </p>
                  </div>
                </div>
                <div className="flex space-x-1">
                  {renderStars(currentTestimonialData.rating)}
                </div>
              </div>

              {/* Results */}
              <div className="grid grid-cols-3 gap-4">
                {currentTestimonialData.results.map((resul,  t, index) => (<div key={index} className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">
                      {result.value}
                    </div>
                    <div className="text-sm text-gray-400">
                      {result.metric}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex items-center space-x-4">
                <button
                  onClick={prevTestimonial}
                  className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hove,  r:bg-white/20 transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hove, r:bg-white/20 transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hove,  r:bg-white/20 transition-all duration-300"
              >
                {isAutoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>
            </div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {filteredTestimonials.map((_, index) => (<button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-cyan-400 scale-125'
                      : 'bg-white/30 hove,  r:bg-white/5, 0'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacit, y: 0,
    y: 30 }};
          whileInView={{ opacit, y: 1,
    y: 0 }}
          transition={{ duratio, n: 0.8 }}
          viewport={{ onc, e: true }}
          className="mt-20"
        >
          <div className="grid grid-cols-2 m, d: grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-400">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-400">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-gray-400">Support Available</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
