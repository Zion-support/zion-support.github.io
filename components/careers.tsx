const filteredJobs = selectedDepartment === 'all' ? jobOpenings : jobOpenings.filter (job => job.department === selectedDepartment)
> <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6" > Join Our Team </h1> </p> </motion.div> {
  /* Company Culture */
}<motion.div </div>) )
}</div> </motion.div> {
  /* Benefits */
}<motion.div </div>) )
}</div> </div> </motion.div> {
  /* Job Openings */
}<motion.div > <h2 className="text-3xl font-bold text-white text-center mb-8" >Open Positions</h2> key= {
  dept.id
}onClick= {
  () => setSelectedDepartment (dept.id)
}className= {
  `px-4 py-2 rounded-lg font-medium transition-all duration-300 $ {
  selectedDepartment === dept.id ? 'bg-blue-500 text-white' : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
}`
}> {
  dept.name
}</button>) )
}</div> > <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4" > <div> </span> </div> </div> <a > Apply Now <ArrowRight className="w-5 h-5 ml-2" /> </a> </div> </li>) )
}</ul> </div> </motion.div>) )
}</div> We don't have any open positions in this department at the moment. Check back later or send us your resume for future opportunities. </p> </div>)
}</motion.div> {
  /* General Application */ 
}<motion.div > <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 rounded-2xl border border-blue-500/20 max-w-4xl mx-auto" > <h2 className="text-2xl font-bold text-white mb-4" >Don't See the Right Fit?</h2> <p className="text-gray-300 mb-6" > We're always looking for talented individuals to join our team. Send us your resume and let's discuss how you can contribute to our mission. </p> <a href="/contact" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105" > Send Your Resume <ArrowRight className="w-5 h-5 ml-2" /> </a> <a href="/about" className="inline-flex items-center px-6 py-3 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300" > Learn More About Us </a> </div> </div> </motion.div> </div> </Layout>) 
}
export default CareersPage