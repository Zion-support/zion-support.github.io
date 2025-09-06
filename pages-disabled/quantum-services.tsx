 const QuantumServicesPage: React.FC = () => {
  const quantumServices = [ {
  export default function QuantumServices () {
  return (<Layout> <SEO /> <main className="relative z-10" > {
  /* Hero Section */ 
}<section className="min-h-[60vh] flex items-center justify-center px-4 py-20" > <div className="text-center max-w-4xl mx-auto" > <motion.div initial= {
  {
  opacity: 0, y: 20 

}animate= {
  {
  opacity: 1, y: 0 

}transition= {
  {
  duration: 0.8 

}> <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-600 bg-clip-text text-transparent" > Quantum Computing </h1> <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto" > Pioneering the quantum revolution with cutting-edge computing solutions that solve previously impossible problems </p> <div className="flex flex-col sm:flex-row gap-4 justify-center" > <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105" > Get Started </Link> <a href="/contact" className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-300 transform hover:scale-105" > Schedule Demo </Link> </div> </motion.div> </div> </section> > <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent" > Quantum Capabilities </h2> <p className="text-xl text-gray-300 max-w-3xl mx-auto" > Harness the power of quantum mechanics for revolutionary computing solutions </p> </motion.div> </motion.div>) ) 
}</div> </div> </section> > <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent" > Quantum Services </h2> <p className="text-xl text-gray-300 max-w-3xl mx-auto" > Choose from our comprehensive suite of quantum-powered solutions </p> </motion.div> <motion.div key= {
  service.id 
}initial= {
  {
  opacity: 0, y: 20 

}whileInView= {
  {
  opacity: 1, y: 0 

}transition= {
  {
  duration: 0.6, delay: index * 0.1 

}viewport= {
  {
  once: true 

}className= {
  `relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border transition-all duration-300 hover:scale-105 $ {
  service.popular ? 'border-blue-500 shadow-lg shadow-blue-500/25' : 'border-gray-700 hover:border-blue-500' 
}` 
}> Most Popular </span> </div>) 
}</li>) ) 
}</ul> <a href="/contact" className="w-full block text-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300" > Get Started </Link> </motion.div>) ) 
}</div> </div> </section> <motion.div initial= {
  {
  opacity: 0, y: 20 

}whileInView= {
  {
  opacity: 1, y: 0 

}transition= {
  {
  duration: 0.8 

}viewport= {
  {
  once: true 

}> Ready for the Quantum Future? </h2> <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto" > Join the quantum revolution and solve problems that were previously impossible with classical computing </p> <div className="flex flex-col sm:flex-row gap-4 justify-center" > <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105" > Start Your Quantum Journey </Link> <a href="/contact" className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-300 transform hover:scale-105" > Schedule Consultation </Link> </div> </motion.div> </div> </section> </main> </Layout>) 
};
export default QuantumServicesPage;
