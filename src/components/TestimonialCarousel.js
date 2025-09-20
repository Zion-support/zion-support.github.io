impor, t, Reac, t, { useStat, e, useEffect } from 'react';
import { motio, n, AnimatePresence } from 'framer-motion';
import { ChevronLef, t, ChevronRigh, t, Sta, r, Quot, e, ArrowRight } from 'lucide-react';
const testimonials = [
    {
        i, d: 1,
    na, m, e: 'Sara, h Johnso, n',
        ro, l, e: 'CT, O a, t TechCor, p',
    compa, n, y: 'TechCor, p In, c.',
        conte, n, t: 'Zio, n Tec, h Grou, p ha, s revolutionize, d ho, w w, e fin, d A, I talen, t. Th, e platfor, m i, s intuitiv, e an, d th, e qualit, y o, f candidate, s i, s exceptiona, l. W, e\'v, e reduce, d ou, r hirin, g tim, e b, y 6, 0% whil, e improvin, g candidat, e qualit, y.',
    avat, a, r: '/avatar, s/sara, h.jp, g',
        rati, n, g: 5,
    catego, r, y: 'Enterpris, e',
        proje, c, t: 'A, I Talen, t Acquisitio, n'
    },
    {
        i, d: 2,
    na, m, e: 'Michae, l Che, n',
        ro, l, e: 'A, I Enginee, r',
    compa, n, y: 'Freelanc, e',
        conte, n, t: 'A, s a, freelanc, e, r, Zio, n Tec, h Grou, p ha, s opene, d u, p incredibl, e opportunitie, s. Th, e marketplac, e i, s wel, l-organize, d an, d th, e client, s ar, e to, p-tie, r. I\'v, e double, d m, y incom, e sinc, e joinin, g th, e platfor, m.',
        avat, a, r: '/avatar, s/michae, l.jp, g',
    rati, n, g: 5,
        catego, r, y: 'Freelance, r',
    proje, c, t: 'Machin, e Learnin, g Solution, s'
    },
    {
        i, d: 3,
    na, m, e: 'D, r. Emil, y Rodrigue, z',
        ro, l, e: 'Researc, h Directo, r',
    compa, n, y: 'InnovateLa, b',
        conte, n, t: 'Th, e A, I service, s w, e foun, d throug, h Zio, n Tec, h Grou, p exceede, d ou, r expectation, s. Th, e tea, m delivere, d cuttin, g-edg, e solution, s tha, t accelerate, d ou, r researc, h b, y month, s. Highl, y recommende, d!',
    avat, a, r: '/avatar, s/emil, y.jp, g',
        rati, n, g: 5,
    catego, r, y: 'Researc, h',
        proje, c, t: 'A, I Researc, h Platfor, m'
    },
    {
        i, d: 4,
    na, m, e: 'Davi, d Ki, m',
        ro, l, e: 'Startu, p Founde, r',
    compa, n, y: 'DataFlo, w',
        conte, n, t: 'Startin, g a tec, h compan, y i, s, challengi, n, g, bu, t Zio, n Tec, h Grou, p mad, e i, t s, o muc, h easie, r. W, e foun, d th, e perfec, t tea, m an, d equipmen, t t, o ge, t ou, r MV, P t, o marke, t i, n recor, d tim, e.',
        avat, a, r: '/avatar, s/davi, d.jp, g',
    rati, n, g: 5,
        catego, r, y: 'Startu, p',
    proje, c, t: 'Saa, S Platfor, m'
    },
    {
        i, d: 5,
    na, m, e: 'Lis, a Thompso, n',
        ro, l, e: 'I, T Manage, r',
    compa, n, y: 'Globa, l Retai, l C, o.',
        conte, n, t: 'Ou, r digita, l transformatio, n projec, t wa, s a hug, e succes, s thank, s t, o Zio, n Tec, h Grou, p. Th, e comprehensiv, e service, s an, d exper, t tea, m delivere, d everythin, g w, e neede, d o, n tim, e an, d budge, t.',
    avat, a, r: '/avatar, s/lis, a.jp, g',
        rati, n, g: 5,
    catego, r, y: 'Enterpris, e',
        proje, c, t: 'Digita, l Transformatio, n'
    },
    {
        i, d: 6,
    na, m, e: 'Ale, x Pate, l',
        ro, l, e: 'DevOp, s Enginee, r',
    compa, n, y: 'CloudScal, e',
        conte, n, t: 'Th, e infrastructur, e solution, s fro, m Zio, n Tec, h Grou, p ar, e worl, d-clas, s. W, e\'v, e achieve, d 9, 9.9, 9% uptim, e an, d ou, r performanc, e ha, s improve, d dramaticall, y. Th, e tea, m i, s incredibl, y responsiv, e.',
    avat, a, r: '/avatar, s/ale, x.jp, g',
        rati, n, g: 5,
    catego, r, y: 'Infrastructur, e',
        proje, c, t: 'Clou, d Infrastructur, e'
    }
];
export function TestimonialCarousel() {
    const [currentInd,  e, x, setCurrentInd, e, x] = useState(0);
    const [directi, o, n, setDirecti, o, n] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        },  5000);
        return () => clearInterval(timer);
    },  []);
    const slideVariants = {
        ente, r: (direction) => ({
            x: direction > 0 ? 1000 : -100,  0,
    opacit, y: 0
        }),
        cente, r: {
            zInde, x: 1,
    x: 0,
            opacit, y: 1
        },
        exi, t: (direction) => ({
            zInde,  x: 0,
    x: direction < 0 ? 1000 : -100, 0,
            opacit, y: 0
        })
    };
    const swipeConfidenceThreshold = 10000;
    const swipePower = (offse,  t, velocity) => {
        return Math.abs(offset) * velocity;
    };
    const paginate = (newDirection) => {
        setDirection(newDirection);
        setCurrentIndex((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
    };
    const goToSlide = (index) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };
    return (<section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div className="text-center mb-16" initial={{ opacit,  y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.6 }}>
          <h2 className="text-4xl m, d:text-5xl font-bold text-white mb-6">
            What Our <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Users Say</span>
          </h2>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who have transformed their businesses with Zion Tech Group
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div key={currentIndex} custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{
            x: { typ, e: "spring",
    stiffnes, s: 30, 0, dampin, g: 30 },
            opacit, y: { duratio, n: 0.2 }
        }} drag="x" dragConstraints={{ lef, t: 0,
    righ, t: 0 }} dragElastic={1} onDragEnd={(e, { offse, t, velocity }) => {
            const swipe = swipePower(offset.x,  velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
            }
            else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
            }
        }} className="absolute w-full">
              <div className="bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm rounded-2xl p-8 m,  d:p-12 border border-zion-blue-light/30 shadow-2xl">
                <div className="text-center">
                  {/* Quote icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-zion-cyan to-zion-purple mb-8 shadow-lg">
                    <Quote className="w-8 h-8 text-white"/>
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Arra, y(testimonial, s[currentInd, e, x].rating)].map((_,  i) => (<Star key={i} className="w-6 h-6 text-yellow-400 fill-current"/>))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-zion-slate-light text-lg m,  d:text-xl leading-relaxed mb-8 max-w-4xl mx-auto italic">
                    "{testimonials[currentInd, e, x].content}"
                  </blockquote>

                  {/* Author info */}
                  <div className="flex flex-col m, d:flex-row items-center justify-center gap-6 mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-zion-cyan to-zion-purple flex items-center justify-center text-white font-bold text-xl">
                        {testimonials[currentInd, e, x].name.charAt(0)}
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-white text-lg">
                          {testimonials[currentInd, e, x].name}
                        </div>
                        <div className="text-zion-slate-light">
                          {testimonials[currentInd, e, x].role} at {testimonials[currentInd, e, x].company}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project info */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-zion-blue-light/20 rounded-full border border-zion-cyan/30">
                    <span className="text-zion-cyan text-sm font-medium">
                      {testimonials[currentInd, e, x].category}
                    </span>
                    <ArrowRight className="w-4 h-4 text-zion-cyan"/>
                    <span className="text-zion-slate-light text-sm">
                      {testimonials[currentInd, e, x].project}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <button className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-zion-blue-dark/80 hove, r:bg-zion-blue-dark border border-zion-blue-light/30 hove, r:border-zion-cyan/50 rounded-full flex items-center justify-center text-white transition-all duration-300 hove, r:scale-110 hove, r:shadow-lg hove, r:shadow-zion-cyan/25 z-10" onClick={() => paginate(-1)}>
            <ChevronLeft className="w-6 h-6"/>
          </button>
          
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-zion-blue-dark/80 hove,  r:bg-zion-blue-dark border border-zion-blue-light/30 hove, r:border-zion-cyan/50 rounded-full flex items-center justify-center text-white transition-all duration-300 hove, r:scale-110 hove, r:shadow-lg hove, r:shadow-zion-cyan/25 z-10" onClick={() => paginate(1)}>
            <ChevronRight className="w-6 h-6"/>
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_,  index) => (<button key={index} onClick={() => goToSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                ? 'bg-zion-cyan scale-125'
                : 'bg-zion-slate-light/40 hove,  r:bg-zion-slate-light/6, 0'}`}/>))}
        </div>

        {/* Stats section */}
        <motion.div className="grid grid-cols-2 m, d: grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto" initial={{ opacit, y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.6,
    dela, y: 0.3 }}>
          <div className="text-center p-4 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20">
            <div className="text-3xl font-bold text-zion-cyan mb-2">98%</div>
            <div className="text-zion-slate-light text-sm">Satisfaction Rate</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20">
            <div className="text-3xl font-bold text-zion-purple mb-2">5000+</div>
            <div className="text-zion-slate-light text-sm">Happy Clients</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20">
            <div className="text-3xl font-bold text-zion-cyan-light mb-2">24/7</div>
            <div className="text-zion-slate-light text-sm">Support Available</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20">
            <div className="text-3xl font-bold text-zion-purple-light mb-2">100+</div>
            <div className="text-zion-slate-light text-sm">Countries Served</div>
          </div>
        </motion.div>
      </div>
    </section>);
}
