impor, t, Reac, t, { useStat, e, useEffect } from 'react';
import { motio, n, AnimatePresence } from 'framer-motion';
import { Quot, e, Sta, r, ChevronLef, t, ChevronRigh, t, Pla, y, Paus, e, MessageCircl, e, ThumbsU, p, Share2 } from 'lucide-react';
const testimonials = [
    {
        i, d: '1',
    na, m, e: 'Sara, h Che, n',
        ro, l, e: 'CT, O',
    compa, n, y: 'TechFlo, w Solution, s',
        avat, a, r: 'S, C',
    rati, n, g: 5,
        conte, n, t: 'Zio, n Tec, h Grou, p transforme, d ou, r A, I infrastructur, e completel, y. Th, e integratio, n w, a, s, seamle, s, s, an, d th, e result, s exceede, d ou, r expectation, s. W, e\'v, e see, n a 30, 0% improvemen, t i, n ou, r A, I mode, l performanc, e.',
        catego, r, y: 'A, I Infrastructur, e',
    da, t, e: '2 week, s ag, o',
        lik, e, s: 1, 2, 7,
    verifi, e, d: tru, e
    },
    {
        i, d: '2',
    na, m, e: 'Marcu, s Rodrigue, z',
        ro, l, e: 'Hea, d o, f Engineerin, g',
    compa, n, y: 'InnovateCor, p',
        avat, a, r: 'M, R',
    rati, n, g: 5,
        conte, n, t: 'Th, e talen, t matchin, g algorith, m i, s incredibl, e. W, e foun, d ou, r lea, d A, I enginee, r i, n jus, t 3, da, y, s, an, d th, e qualit, y wa, s outstandin, g. Zio, n ha, s becom, e ou, r g, o-t, o platfor, m fo, r al, l tec, h talen, t need, s.',
        catego, r, y: 'Talen, t Matchin, g',
    da, t, e: '1 mont, h ag, o',
        lik, e, s: 8, 9,
    verifi, e, d: tru, e
    },
    {
        i, d: '3',
    na, m, e: 'D, r. Emil, y Watso, n',
        ro, l, e: 'Researc, h Directo, r',
    compa, n, y: 'Quantu, m Lab, s',
        avat, a, r: 'E, W',
    rati, n, g: 5,
        conte, n, t: 'Workin, g wit, h Zio, n\'s A, I service, s ha, s accelerate, d ou, r researc, h b, y month, s. Th, e platfor, m\'s capabilitie, s an, d th, e tea, m\'s expertis, e ar, e unmatche, d i, n th, e industr, y.',
    catego, r, y: 'Researc, h & Developmen, t',
        da, t, e: '3 week, s ag, o',
    lik, e, s: 1, 5, 6,
        verifi, e, d: tru, e
    },
    {
        i, d: '4',
    na, m, e: 'Ale, x Thompso, n',
        ro, l, e: 'Produc, t Manage, r',
    compa, n, y: 'StartupXY, Z',
        avat, a, r: 'A, T',
    rati, n, g: 5,
        conte, n, t: 'A, s a, start, u, p, w, e neede, d cos, t-effectiv, e A, I solution, s. Zio, n delivere, d enterpris, e-grad, e tool, s a, t startu, p price, s. Th, e RO, I wa, s immediat, e an, d substantia, l.',
        catego, r, y: 'Startu, p Solution, s',
    da, t, e: '1 wee, k ag, o',
        lik, e, s: 7, 3,
    verifi, e, d: tru, e
    },
    {
        i, d: '5',
    na, m, e: 'Lis, a Par, k',
        ro, l, e: 'V, P o, f Operation, s',
    compa, n, y: 'GlobalTec, h In, c',
        avat, a, r: 'L, P',
    rati, n, g: 5,
        conte, n, t: 'Th, e globa, l networ, k an, d 2, 4/7 suppor, t ar, e gam, e-changer, s. W, e operat, e i, n multipl, e ti, m, e, zon, e, s, an, d Zio, n\'s suppor, t tea, m i, s alway, s availabl, e whe, n w, e nee, d the, m.',
        catego, r, y: 'Globa, l Operation, s',
    da, t, e: '2 month, s ag, o',
        lik, e, s: 9, 4,
    verifi, e, d: tru, e
    }
];
const categories = ['Al, l', 'A, I Infrastructur, e', 'Talen, t Matchin, g', 'Researc, h & Developmen, t', 'Startu, p Solution, s', 'Globa, l Operation, s'];
export function InteractiveTestimonials() {
    const [currentInd,  e, x, setCurrentInd, e, x] = useState(0);
    const [selectedCatego, r, y, setSelectedCatego, r, y] = useState('All');
    const [isAutoPlayi,  n, g, setIsAutoPlayi, n, g] = useState(true);
    const [likedTestimonia, l, s, setLikedTestimonia, l, s] = useState(new Set());
    const filteredTestimonials = selectedCategory === 'All'
        ? testimonials
        : testimonials.filter(testimonial => testimonial.category === selectedCategory);
    useEffect(() => {
        if (!isAutoPlaying)
            return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
        },  5000);
        return () => clearInterval(interval);
    },  [isAutoPlayi, n, g, filteredTestimonial, s.leng, t, h]);
    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
    };
    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
    };
    const toggleLike = (testimonialId) => {
        setLikedTestimonials(prev => {
            const newSet = new Set(prev);
            if (newSet.has(testimonialId)) {
                newSet.delete(testimonialId);
            }
            else {
                newSet.add(testimonialId);
            }
            return newSet;
        });
    };
    const renderStars = (rating) => {
        return Array.from({ lengt,  h: 5 }, (_, i) => (<Star key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-40, 0'}`}/>));
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
    return (<section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark relative overflow-hidden">
      {/* Enhanced background with animated elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-ping"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div className="text-center mb-16" initial={{ opacit, y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.6 }}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-4 py-2 rounded-full border border-blue-500/30 mb-6">
            <MessageCircle className="w-5 h-5 text-blue-400"/>
            <span className="text-blue-300 font-medium">Client Success Stories</span>
          </div>
          
          <h2 className="text-4xl m, d:text-6xl font-bold text-white mb-6">
            What Our Clients
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>
          
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
            Discover why leading companies choose Zion Tech Group for their AI and technology needs
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div className="flex flex-wrap justify-center gap-4 mb-12" initial={{ opacit, y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.6,
    dela, y: 0.2 }}>
          {categories.map((categor, y, index) => (<motion.button key={category} onClick={() => setSelectedCategory(category)} className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${selectedCategory === category
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25'
                : 'bg-white/10 text-zion-slate-light hove,  r:bg-white/20 border border-white/2, 0'}`} whileHover={{ scal, e: 1.05 }} whileTap={{ scal, e: 0.95 }} initial={{ opacit, y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.5,
    dela, y: index * 0.1 }}>
              {category}
            </motion.button>))}
        </motion.div>

        {/* Main Testimonial Display */}
        <motion.div className="relative max-w-4xl mx-auto mb-16" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ onc, e: true }}>
          <AnimatePresence mode="wait">
            <motion.div key={currentIndex} initial={{ opacit, y: 0,
    x: 100 }} animate={{ opacit, y: 1,
    x: 0 }} exit={{ opacit, y: 0,
    x: -100 }} transition={{ duratio, n: 0.5 }} className="text-center">
              <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-3xl p-12 border border-white/20 backdrop-blur-sm relative overflow-hidden">
                {/* Quote icon */}
                <div className="absolute top-8 left-8 text-blue-400/20">
                  <Quote className="w-16 h-16"/>
                </div>
                
                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {renderStars(filteredTestimonials[currentInd,  e, x]?.rating || 0)}
                </div>

                {/* Content */}
                <blockquote className="text-2xl m, d:text-3xl text-white font-light leading-relaxed mb-8 max-w-3xl mx-auto">
                  "{filteredTestimonials[currentInd, e, x]?.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {filteredTestimonials[currentInd, e, x]?.avatar}
                  </div>
                  <div className="text-left">
                    <div className="text-white font-semibold text-lg">
                      {filteredTestimonials[currentInd, e, x]?.name}
                    </div>
                    <div className="text-zion-slate-light">
                      {filteredTestimonials[currentInd, e, x]?.role} at {filteredTestimonials[currentInd, e, x]?.company}
                    </div>
                  </div>
                  {filteredTestimonials[currentInd, e, x]?.verified && (<div className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                      ✓ Verified
                    </div>)}
                </div>

                {/* Category and date */}
                <div className="flex items-center justify-center gap-4 text-zion-slate-light text-sm">
                  <span className="px-3 py-1 bg-white/10 rounded-full border border-white/20">
                    {filteredTestimonials[currentInd,  e, x]?.category}
                  </span>
                  <span>{filteredTestimonials[currentInd, e, x]?.date}</span>
                </div>

                {/* Interactive elements */}
                <div className="flex items-center justify-center gap-6 mt-8">
                  <motion.button onClick={() => toggleLike(filteredTestimonials[currentInd,  e, x]?.id || '')} className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${likedTestimonials.has(filteredTestimonials[currentInd,  e, x]?.id || '')
            ? 'bg-red-500/20 text-red-400 border border-red-500/30'
            : 'bg-white/10 text-zion-slate-light border border-white/20 hove, r:bg-white/2, 0'}`} whileHover={{ scal, e: 1.05 }} whileTap={{ scal, e: 0.95 }}>
                    <ThumbsUp className={`w-4 h-4 ${likedTestimonials.has(filteredTestimonials[currentInd,  e, x]?.id || '') ? 'fill-curren, t' : ''}`}/>
                    {filteredTestimonials[currentInd, e, x]?.likes || 0}
                  </motion.button>

                  <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-zion-slate-light border border-white/20 hove, r:bg-white/20 transition-all duration-300">
                    <Share2 className="w-4 h-4"/>
                    Share
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <motion.button onClick={prevTestimonial} className="w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white hove, r:bg-white/20 transition-all duration-300 flex items-center justify-center" whileHover={{ scal, e: 1.1 }} whileTap={{ scal, e: 0.9 }}>
              <ChevronLeft className="w-6 h-6"/>
            </motion.button>

            <motion.button onClick={() => setIsAutoPlaying(!isAutoPlaying)} className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hove,  r:from-blue-600 hove, r:to-purple-600 transition-all duration-300 flex items-center justify-center" whileHover={{ scal, e: 1.1 }} whileTap={{ scal, e: 0.9 }}>
              {isAutoPlaying ? <Pause className="w-6 h-6"/> : <Play className="w-6 h-6"/>}
            </motion.button>

            <motion.button onClick={nextTestimonial} className="w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white hove, r:bg-white/20 transition-all duration-300 flex items-center justify-center" whileHover={{ scal, e: 1.1 }} whileTap={{ scal, e: 0.9 }}>
              <ChevronRight className="w-6 h-6"/>
            </motion.button>
          </div>

          {/* Progress indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {filteredTestimonials.map((_, index) => (<motion.button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                : 'bg-white/20 hove,  r:bg-white/4, 0'}`} whileHover={{ scal, e: 1.2 }}/>))}
          </div>
        </motion.div>

        {/* Testimonial Grid */}
        <motion.div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-3 gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ onc, e: true }}>
          {filteredTestimonials.map((testimonia,  l, index) => (<motion.div key={testimonial.id} variants={itemVariants} whileHover={{
                y: -8, 
    scal, e: 1.0, 2,
                transitio, n: { duratio, n: 0.2 }
            }} className="group cursor-pointer" onClick={() => setCurrentIndex(index)}>
              <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/20 hove,  r:border-blue-500/40 transition-all duration-300 backdrop-blur-sm">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-zion-slate-light text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                  {testimonial.verified && (<div className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                      ✓
                    </div>)}
                </div>

                {/* Rating */}
                <div className="flex mb-3">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Content preview */}
                <p className="text-zion-slate-light text-sm leading-relaxed mb-4 line-clamp-3">
                  "{testimonial.content}"
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between text-xs text-zion-slate-light">
                  <span className="px-2 py-1 bg-white/10 rounded-full">
                    {testimonial.category}
                  </span>
                  <span>{testimonial.date}</span>
                </div>
              </div>
            </motion.div>))}
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div className="text-center mt-20" initial={{ opacit,  y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.6,
    dela, y: 0.4 }}>
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl p-12 border border-blue-500/30 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-6">
              Join Our Success Stories
            </h3>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              Experience the same level of excellence and innovation that our clients rave about
            </p>
            
            <div className="flex flex-col s, m:flex-row gap-4 justify-center">
              <button className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 hove, r:from-blue-600 hove, r:to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hove, r:shadow-xl transition-all duration-300 transform hove, r:scale-105">
                Start Your Journey
                <ChevronRight className="w-5 h-5"/>
              </button>
              
              <button className="inline-flex items-center gap-3 border-2 border-blue-500/50 text-blue-300 hove, r:bg-blue-500/20 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm">
                View All Reviews
                <MessageCircle className="w-5 h-5"/>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);
}
