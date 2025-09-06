import React, { useState, useEffect } from 'react',
import Layout from './layout/Layout',
import { motion, AnimatePresence } from 'framer-motion',
import { 
  ArrowRight, Play, Star, Users, Award, TrendingUp, Brain, Shield, Rocket,
  Loader2, ChevronDown, Zap, Globe, Target, Lightbulb, Code, Database,
  Cloud, Lock, ChartBar, Cpu, Atom, Satellite, Gamepad2, Palette
 from 'lucide-react',
import UltraFuturisticBackground2035 from './ui/UltraFuturisticBackground2035',
import UltraFuturisticServiceCard2035 from './ui/UltraFuturisticServiceCard2035',
import { innovative2025MicroSaasBatch } from '../data/innovative-2025-micro-saas-batch',
import { innovative2025ITEnterpriseBatch } from '../data/innovative-2025-it-enterprise-batch',
import { innovative2025AIServicesBatch } from '../data/innovative-2025-ai-services-batch',
/ Loading fallback component,
const LoadingFallback = () => (
  <div className=&quot;min-h-screen flex items-center justify-center bg-gray-900&quot;>
    <motion.div,
initial={ opacity: 0, scale: 0.5 }
      animate={ opacity: 1, scale: 1 }
      transition={ duration: 0.5 }
      className=&quot;text-center&quot;    >
      <div className=&quot;relative&quot;>
        <Loader2 className=&quot;w-16 h-16 text-cyan-400 animate-spin mx-auto mb-4&quot; />
        <div className=&quot;absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-20 animate-pulse&quot;></div>
      </div>
      <p className=&quot;text-xl text-gray-300 mb-2&quot;>Loading Zion Tech Group...</p>
      <p className=&quot;text-sm text-gray-500&quot;>Preparing your digital transformation journey</p>
    </motion.div>
  </div>
,

const Homepage2035: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true),
  const [isVisible, setIsVisible] = useState(false),
  const [activeCategory, setActiveCategory] = useState('all'),

  useEffect() => {
    const timer = setTimeout() => {
      setIsLoading(false),
      setIsVisible(true)
    }, 800),
    return () => clearTimeout(timer)
  }, []),

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }  };

  const staggerContainer = {animate: {
      transition: {
        staggerChildren: 0.1, delayChildren: 0.2}
  },

  const backgroundVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1,
      scale: 1,
      transition: { duration: 1.5, ease: &quot;easeOut&quot; as const }
  },

  const categories = [
    { id: 'all', name: 'All Services', icon: <Globe className="w-5 h-5" /> },
    { id: 'ai', name: 'AI & ML', icon: <Brain className="w-5 h-5" /> },
    { id: 'it', name: 'IT Enterprise', icon: <Cpu className="w-5 h-5" /> },
    { id: 'quantum', name: 'Quantum Tech', icon: <Atom className="w-5 h-5" /> },
    { id: 'space', name: 'Space Tech', icon: <Satellite className="w-5 h-5" /> },
    { id: 'cyber', name: 'Cybersecurity', icon: <Shield className="w-5 h-5" /> },
    { id: 'cloud', name: 'Cloud & DevOps', icon: <Cloud className="w-5 h-5" /> },
    { id: 'fintech', name: 'FinTech', icon: <ChartBar className="w-5 h-5" /> }
  ]  ];

  const allServices = [
    ...innovative2025MicroSaasBatch,
    ...innovative2025ITEnterpriseBatch,
    ...innovative2025AIServicesBatch
  ],

  const filteredServices = activeCategory = = 'all' 
    ? allServices 
    : allServices.filter(service => {
        if (activeCategory = = 'ai') return service.category.includes('AI') || service.category.includes('Machine Learning'),
        if (activeCategory = = 'it') return service.category.includes('IT') || service.category.includes('Enterprise'),
        if (activeCategory = = 'quantum') return service.name.includes('Quantum'),
        if (activeCategory = = 'space') return service.category.includes('Space'),
        if (activeCategory = = 'cyber') return service.category.includes('Security') || service.category.includes('Cybersecurity'),
        if (activeCategory = = 'cloud') return service.category.includes('Cloud') || service.category.includes('DevOps'),
        if (activeCategory = = 'fintech') return service.category.includes('Financial') || service.category.includes('Trading'),
        return true
      }),

  if (isLoading) {
    return <LoadingFallback />
  }
  return (_<Layout>
      <UltraFuturisticBackground2035>
        {/* Hero Section */}
        <section className=&quot;relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-7xl mx-auto text-center&quot;>
            <motion.div,
initial={ opacity: 0, y: 30 }
              animate={ opacity: 1, y: 0 }
              transition={ duration: 0.8 }
              className=&quot;mb-8&quot;            >
              <h1 className=&quot;text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight&quot;>
                <span className=&quot;bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>
                  Zion Tech Group
                </span>
              </h1>
              <p className=&quot;text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed&quot;>
                Pioneering the future with cutting-edge AI, Quantum Computing, and Space Technology solutions              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center&quot;>
                <motion.button,
whileHover={ scale: 1.05 }
                  whileTap={ scale: 0.95 }
                  className=&quot;bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 flex items-center space-x-2&quot;                >
                  <span>Explore Services</span>
                  <ArrowRight className=&quot;w-5 h-5&quot; />
                </motion.button>
                <motion.button,
whileHover={ scale: 1.05 }
                  whileTap={ scale: 0.95 }
                  className=&quot;border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 flex items-center space-x-2&quot;                >
                  <Play className=&quot;w-5 h-5&quot; />
                  <span>Watch Demo</span>
                </motion.button>
              </div>
            </motion.div>

            {_/* Stats */}
            <motion.div,
initial={ opacity: 0, y: 30 }
              animate={ opacity: 1, y: 0 }
              transition={ duration: 0.8, delay: 0.2 }
              className=&quot;grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto&quot;
            >
              {[
                { icon: <Users className=&quot;w-8 h-8&quot; />, value: '50K+', label: 'Happy Clients' },
                { icon: <Star className=&quot;w-8 h-8&quot; />, value: '4.9', label: 'Average Rating' },
                { icon: <Award className=&quot;w-8 h-8&quot; />, value: '200+', label: 'Services' },
                { icon: <TrendingUp className=&quot;w-8 h-8&quot; />, value: '99.9%', label: 'Uptime' }
              ].map(stat, index) => (
                <motion.div,
key={index}
                  initial={ opacity: 0, scale: 0.5 }
                  animate={ opacity: 1, scale: 1 }
                  transition={ duration: 0.5, delay: 0.3 + index * 0.1 }
                  className=&quot;text-center&quot;
                >
                  <div className=&quot;text-cyan-400 mb-2 flex justify-center&quot;>{stat.icon}</div>
                  <div className=&quot;text-3xl font-bold text-white mb-1&quot;>{stat.value}</div>
                  <div className=&quot;text-gray-400 text-sm&quot;>{stat.label}</div>                </motion.div>
              )}
            </motion.div>;
          </div>;
        </section>;

        {/* Services Section */}
        <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div,
initial={ opacity: 0, y: 30 }
              whileInView={ opacity: 1, y: 0 }
              transition={ duration: 0.8 }
              viewport={ once: true }
              className=&quot;text-center mb-16&quot;            >
              <h2 className=&quot;text-4xl sm:text-5xl font-bold text-white mb-6&quot;>
                Revolutionary Technology Solutions
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Discover our comprehensive portfolio of cutting-edge services designed to transform your business
              </p>
            </motion.div>

            {_/* Category Filter */}
            <motion.div,
initial={ opacity: 0, y: 30 }
              whileInView={ opacity: 1, y: 0 }
              transition={ duration: 0.8, delay: 0.2 }
              viewport={ once: true }
              className=&quot;flex flex-wrap justify-center gap-4 mb-12&quot;            >
              {categories.map(_(category) => (_<motion.button,
key={category.id}
                  whileHover={_{ scale: 1.05}
                  whileTap={_{ scale: 0.95}
                  onClick={_() => setActiveCategory(category.id)}
                  className={_`flex items-center space-x-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                    activeCategory = = category.id
                      ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400'
                      : 'border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400'}`}
                >
                  {category.icon}
                  <span>{category.name}</span>;
                </motion.button>;
              )}
            </motion.div>

            {_/* Services Grid */}
            <motion.div,
variants={staggerContainer}
              initial=&quot;initial&quot;
              whileInView=&quot;animate&quot;
              viewport={ once: true }
              className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;            >
              {filteredServices.map(_(service, index) => (
                <motion.div,
key={service.id}
                  variants={fadeInUp}
                  className=&quot;w-full&quot;                >
                  <UltraFuturisticServiceCard2035 service={service} />
                </motion.div>
              )}
            </motion.div>

            {_/* View All Services Button */}
            <motion.div,
initial={ opacity: 0, y: 30 }
              whileInView={ opacity: 1, y: 0 }
              transition={ duration: 0.8, delay: 0.4 }
              viewport={ once: true }
              className=&quot;text-center mt-16&quot;
            >
              <motion.button,
whileHover={ scale: 1.05 }
                whileTap={ scale: 0.95 }
                className=&quot;bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 flex items-center space-x-2 mx-auto&quot;              >
                <span>View All Services</span>
                <ArrowRight className=&quot;w-5 h-5&quot; />
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className=&quot;py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div,
initial={ opacity: 0, y: 30 }
              whileInView={ opacity: 1, y: 0 }
              transition={ duration: 0.8 }
              viewport={ once: true }
              className=&quot;text-center mb-16&quot;            >
              <h2 className=&quot;text-4xl sm:text-5xl font-bold text-white mb-6&quot;>
                Why Choose Zion Tech Group?
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                We combine innovation, expertise, and cutting-edge technology to deliver exceptional results
              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
              {[
                {
                  icon: <Brain className=&quot;w-12 h-12&quot; />,
                  title: 'AI-Powered Solutions',
                  description: 'Leverage the latest AI and machine learning technologies for intelligent automation and insights'
                },
                {
                  icon: <Shield className=&quot;w-12 h-12&quot; />,
                  title: 'Enterprise Security',
                  description: 'Military-grade security protocols and compliance standards to protect your business'
                },
                {
                  icon: <Rocket className=&quot;w-12 h-12&quot; />,
                  title: 'Space Technology',
                  description: 'Pioneering space tech solutions for the next generation of innovation'
                },
                {
                  icon: <Atom className=&quot;w-12 h-12&quot; />,
                  title: 'Quantum Computing',
                  description: 'Access to quantum computing power for complex problem-solving'
                },
                {
                  icon: <Cloud className=&quot;w-12 h-12&quot; />,
                  title: 'Cloud-Native',
                  description: 'Built for the cloud with scalability, reliability, and performance in mind'
                },
                {
                  icon: <Target className=&quot;w-12 h-12&quot; />,
                  title: 'Results-Driven',
                  description: 'Focused on delivering measurable business outcomes and ROI'
                }
              ].map(feature, index) => (
                <motion.div,
key={index}
                  initial={ opacity: 0, y: 30 }
                  whileInView={ opacity: 1, y: 0 }
                  transition={ duration: 0.8, delay: index * 0.1 }
                  viewport={ once: true }
                  className=&quot;text-center p-6 rounded-2xl bg-gray-800/50 border border-gray-700/30 hover:border-cyan-400/50 transition-all duration-300 group&quot;
                >
                  <div className=&quot;text-cyan-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300&quot;>
                    {feature.icon}
                  </div>
                  <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>{feature.title}</h3>
                  <p className=&quot;text-gray-300&quot;>{feature.description}</p>                </motion.div>
              )}
            </div>;
          </div>;
        </section>;

        {/* CTA Section */}
        <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>            <motion.div,
initial={_{ opacity: 0, y: 30}
              whileInView={_{ opacity: 1, y: 0}
              transition={_{ duration: 0.8}
              viewport={_{ once: true}
            >
              <h2 className=&quot;text-4xl sm:text-5xl font-bold text-white mb-6&quot;>
                Ready to Transform Your Business?
              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                Join thousands of companies already leveraging our cutting-edge technology solutions
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center&quot;>
                <motion.button,
whileHover={ scale: 1.05 }
                  whileTap={ scale: 0.95 }
                  className=&quot;bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 flex items-center space-x-2&quot;                >
                  <span>Get Started Today</span>
                  <ArrowRight className=&quot;w-5 h-5&quot; />
                </motion.button>
                <motion.button,
whileHover={ scale: 1.05 }
                  whileTap={ scale: 0.95 }
                  className="border border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300"                  whileHover={_{ scale: 1.05}
                  whileTap={_{ scale: 0.95}
                  className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300"
                >
                  Schedule a Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </UltraFuturisticBackground2035>
    </Layout>
  )
,

export default Homepage2035,  animate: {
  transition: {
  staggerChildren: 0.1, delayChildren: 0.2 

;
;
..innovative2025ITEnterpriseBatch;
..innovative2025AIServicesBatch ];
const filteredServices = activeCategory = = 'all' ? allServices return (<Layout> <UltraFuturisticBackground2035><h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight" > <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" > Zion Tech Group </span> </h1> </p> <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" > <motion.button > <span>Explore Services</span> <ArrowRight className="w-5 h-5" /> </motion.button> <motion.button > <Play className="w-5 h-5" /> <span>Watch Demo</span> </motion.button> </div> </motion.div> {
  /* Stats */ 
<motion.div </motion.div>) 
</motion.div> </div> </section><h2 className="text-4xl sm:text-5xl font-bold text-white mb-6" > Revolutionary Technology Solutions </h2> <p className="text-xl text-gray-300 max-w-3xl mx-auto" > Discover our comprehensive portfolio of cutting-edge services designed to transform your business </p> </motion.div> {
  /* Category Filter */ 
<motion.div > {
  categories.map (category) => (<motion.button key= {
  category.id 
whileHover= {
  scale: 1.05 

whileTap= {
  scale: 0.95 

onClick= {
  () => setActiveCategory (category.id) 
className= {
  `flex items-center space-x-2 px-6 py-3 rounded-full border transition-all duration-300 $ {
  activeCategory = = category.id ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400' : 'border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400' 
` 
> {
  category.icon 
<span> {
  category.name 
</span> </motion.button>) 
</motion.div> {
  /* Services Grid */ 
<motion.div > {
  filteredServices.map (service, index) => (<motion.div key= {
  service.id 
> <UltraFuturisticServiceCard2035 service= {
  service 
/> </motion.div>) 
</motion.div> {
  /* View All Services Button */ 
<motion.div > <span>View All Services</span> <ArrowRight className="w-5 h-5" /> </motion.button> </motion.div> </div> </section><h2 className="text-4xl sm:text-5xl font-bold text-white mb-6" > Why Choose Zion Tech Group? </h2> <p className="text-xl text-gray-300 max-w-3xl mx-auto" > We combine innovation, expertise, and cutting-edge technology to deliver exceptional results </p> </motion.div> </motion.div>) 
</div> </div> </section> <motion.div initial= {
  opacity: 0, y: 30 

whileInView= {
  opacity: 1, y: 0 

transition= {
  duration: 0.8 

viewport= {
  once: true 

> <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6" > Ready to Transform Your Business? </h2> <p className="text-xl text-gray-300 mb-8" > Join thousands of companies already leveraging our cutting-edge technology solutions </p> <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" > <motion.button > <span>Get Started Today</span> <ArrowRight className="w-5 h-5" /> </motion.button> <motion.button 
;
export default Homepage2035;
