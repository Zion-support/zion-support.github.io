 const supportCategories = [ {
  const filteredCategories = selectedCategory === 'all' ? supportCategories : supportCategories.filter (cat => cat.id === selectedCategory);
> <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6" > How Can We Help? </h1> /> </div> </div> <div className="flex flex-wrap justify-center gap-6" > <div className="flex items-center gap-2 text-cyan-400" > <HelpCircle className="w-6 h-6" /> <span>24/7 Support</span> </div> <div className="flex items-center gap-2 text-purple-400" > <Users className="w-6 h-6" /> <span>Expert Team</span> </div> <div className="flex items-center gap-2 text-green-400" > <CheckCircle className="w-6 h-6" /> <span>Quick Solutions</span> </div> </div> </motion.div> </div> </section> > <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Get Help Fast </h2> <p className="text-xl text-gray-400" >Choose your preferred support method</p> </motion.div> <button className= {
  `w-full py-3 px-4 bg-gradient-to-r $ {
  action.color 
}text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300` 
}> {
  action.action 
}</button> </div> </motion.div>) ) 
}</div> </div> </section> > <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Browse Help Categories </h2> <p className="text-xl text-gray-400" >Find solutions organized by topic and service area</p> </motion.div> <button onClick= {
  () => setSelectedCategory ('all') 
}className= {
  `px-6 py-3 rounded-xl font-medium transition-all duration-300 $ {
  selectedCategory === 'all' ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white' : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50' 
}` 
}> All Categories </button> {
  supportCategories.map ( (category) => (<button key= {
  category.id 
}onClick= {
  () => setSelectedCategory (category.id) 
}className= {
  `px-6 py-3 rounded-xl font-medium transition-all duration-300 $ {
  selectedCategory === category.id ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white' : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50' 
}` 
}> {
  category.name 
}</button>) ) 
}</div> </div> </div> </div> </div> </motion.div>) ) 
}</div> </section> > <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > How Can We Help? </h2> <p className="text-xl text-gray-300" > Multiple support channels to meet your needs </p> </motion.div> </div> </div> </motion.div>) ) 
}</div> </div> </section> /> </div> </div> key= {
  category.id 
}onClick= {
  () => setSelectedCategory (category.id) 
}className= {
  `px-4 py-2 rounded-lg border transition-all duration-300 flex items-center gap-2 $ {
  selectedCategory === category.id ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400' : 'bg-gray-800/50 border-gray-600 text-gray-300 hover:bg-cyan-500/20 hover:border-cyan-500/50' 
}` 
}> </button>) ) 
}</div> </div> </div> </section> > <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Frequently Asked Questions </h2> <p className="text-xl text-gray-300" > Quick answers to common questions and solutions </p> </motion.div> <span key= {
  tag 
}className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30" > {
  tag 
}</span>) ) 
}</div> </motion.div>) ) 
}</div>) 
}</div> </section> > <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Support Resources </h2> <p className="text-xl text-gray-300" > Comprehensive documentation and learning materials </p> </motion.div> > Access </Link> </div> </motion.div>) ) 
}</div> className="text-center mb-16" > <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Popular Help Articles </h2> <p className="text-xl text-gray-400" >Most viewed and helpful support content</p> </motion.div> </span> </div> </div> <div className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" > <span className="text-sm font-medium" >Read</span> <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" /> </div> </div> </div> </motion.div>) ) 
}</div> </div> </section> <motion.div initial= {
  {
  opacity: 0, x: -20 
}
}whileInView= {
  {
  opacity: 1, x: 0 
}
}transition= {
  {
  duration: 0.8 
}
}> <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Support Hours & Availability </h2> <p className="text-xl text-gray-300 mb-8 leading-relaxed" > Our expert support team is available to help you succeed with our revolutionary technology solutions. </p> </div> <span className= {
  `px-3 py-1 rounded-full text-sm font-medium $ {
  schedule.status === 'Available' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400' 
}` 
}> {
  schedule.status 
}</span> </div>) ) 
}</div> </motion.div> <motion.div > <div className="bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-cyan-500/20" > <h3 className="text-2xl font-bold mb-4 text-white" >Need Immediate Help?</h3> <p className="text-gray-300 mb-6" > For urgent technical issues or critical support needs;
our team is available around the clock. </p> <div className="space-y-4" > <div className="flex items-center gap-3" > <Phone className="w-5 h-5 text-cyan-400" /> <span className="text-white" >+1 302 464 0950</span> </div> <div className="flex items-center gap-3" > <Mail className="w-5 h-5 text-purple-400" /> <span className="text-white" >support@ziontechgroup.com</span> </div> <div className="flex items-center gap-3" > <MessageCircle className="w-5 h-5 text-green-400" /> <span className="text-white" >Live Chat Available</span> </div> </div> <div className="mt-6 pt-6 border-t border-cyan-500/20" > <a href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300" > Contact Support <ArrowRight className="w-5 h-5" /> </Link> </div> </div> </motion.div> </div> </div> </section> <motion.div initial= {
  {
  opacity: 0, y: 20 
}
}whileInView= {
  {
  opacity: 1, y: 0 
}
}transition= {
  {
  duration: 0.8 
}
}> <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Still Need Help? </h2> <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto" > Our support team is dedicated to ensuring your success with our revolutionary technology solutions. Don't hesitate to reach out. </p> <a href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300" > Get Support <ArrowRight className="w-5 h-5" /> </Link> <a href="/resources" className="inline-flex items-center gap-2 border border-cyan-500/30 text-cyan-400 px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-500/10 transition-all duration-300" > Browse Resources </Link> </div> </motion.div> </div> </section> </div>) 
};
export default Support;
</div> </section> <motion.div initial= {
  {
  opacity: 0, y: 20 
}
}whileInView= {
  {
  opacity: 1, y: 0 
}
}transition= {
  {
  duration: 0.6 
}
}> <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Still Need Help? </h2> <p className="text-xl text-gray-300 mb-8" > Our expert support team is ready to assist you with any questions or technical issues </p> <div className="flex flex-col sm:flex-row gap-4 justify-center" > <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center" > Contact Support <ArrowRight className="w-5 h-5 ml-2" /> </Link> <a href="tel:+13024640950" className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 inline-flex items-center" > <Phone className="w-5 h-5 mr-2" /> Call Now </Link> </div> </div> </motion.div> </div> </section> </main> </Layout>) 
};
export default SupportPage;
