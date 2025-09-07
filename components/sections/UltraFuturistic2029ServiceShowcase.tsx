//Filter and sort services const filteredServices = services .filter (service => selectedCategory === 'all' || service.category === selectedCategory) .sort ( (a, b) => {
  switch (sortBy) {
  case 'innovation': //Default to 'Advanced' if innovationLevel is not available case 'price': return parseFloat (a.price.replace (/[^0-9.]/g, '') ) - parseFloat (b.price.replace (/[^0-9.]/g, '') )
case 'rating': return b.rating - a.rating
default: return 0
}
}) .slice (0, maxServices)
const containerVariants = {
  hidden: {
  opacity: 0 
}
visible: {
  opacity: 1, transition: {
  staggerChildren: 0.1 
}
const categoryIcons: { [key: string]: any}
} = {
  'AI & Consciousness': Brain,
  'Quantum & Neuroscience': Cpu,
  'Space Colonization': Rocket,
  'Space Mining': Zap,
  'Space Architecture': Globe,
  'Space Energy': Sparkles,
  'AI & Business': Database,
  'Quantum & Time': Timer,;}
  'AI & Augmented Reality': Eye}
}
}
    visible: {
      opacity: 1;
y: 0;
transition: {

        duration: 0.6}
ease: 'easeOut' as const}
      }
    }
  };

  return (
    <section className="py-20 relative overflow-hidden" />;
      {/* Background Elements */}

      <div className='absolute inset-0 pointer-events-none' />
        <div className='absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl' /></div>
        <div className='absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl' /></div>
        <div className='absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl' /></div>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm: px-6 lg:px-8' />
        {/* Header */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' />        {/* Header */}

        {/* Header *}
}
}
> {
  title 
}</motion.h2> <motion.p > {
  subtitle 
}</motion.p> </motion.div> {
  /* Filters and Controls */ 
}<motion.div key= {
  category 
}onClick= {
  () => setSelectedCategory (category) 
}className= {
  `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 $ {
  selectedCategory === category ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg': 'bg-gray-900/50 text-gray-300 hover:bg-purple-900/30 border border-gray-700 hover:border-purple-500/50' 
}` 
}> {
  category === 'all'? 'All Categories' : category 
}</button>) ) 
}</div> </div> > <option value="innovation" >Innovation Level</option> <option value="price" >Price</option> <option value="rating" >Rating</option> </select> </div> </motion.div> {
  /* Services Grid */ 
}<motion.div > {
  filteredServices.map ( (service, index) => (<motion.div key= {
  service.id 
}/> </motion.div>) ) 
}</motion.div> {
  /* Call to Action */ 
}<motion.div > <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-2xl p-8 backdrop-blur-sm" > <h3 className="text-3xl font-bold text-white mb-4" > Ready to Experience the Future? </h3> <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto" > Join thousands of forward-thinking companies already using our revolutionary 2029 technology solutions. </p> <div className="flex flex-col sm:flex-row items-center justify-center gap-4" > <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 text-lg font-semibold shadow-lg hover:shadow-purple-500/25" > Get Started Today </a> <a href="/pricing" className="px-8 py-4 bg-gray-900/50 text-white rounded-xl hover:bg-purple-900/30 border border-gray-700 hover:border-purple-500/50 transition-all duration-200 text-lg font-semibold" > View Pricing </a> </div> </div> </motion.div> {
  /* Innovation Stats */ 
}<motion.div </motion.div>) ) 
}</div> </motion.div> </div> </section>) 
}
export default UltraFuturistic2029ServiceShowcase