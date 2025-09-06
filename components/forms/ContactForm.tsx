'use client';
const [isSubmitting, setIsSubmitting] = useState (false);
const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'> ('idle');
> Conversation </span> </h2> <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed" > Ready to transform your business? Get in touch with our team of experts to discuss how we can help you achieve your technology goals. </p> </motion.div> > <div> <h3 className="text-2xl font-bold text-white mb-6" >Get in Touch</h3> <p className="text-gray-300 leading-relaxed mb-8" > Our team is here to help you navigate the complex world of technology and find the perfect solutions for your business needs. Reach out to us today. </p> </div> > <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300" > <info.icon className="w-6 h-6 text-white" /> </div> <div> </p> </div> </motion.a>) ) 
}</div> {
  /* Additional Info */ 
}<motion.div > <h4 className="text-lg font-semibold text-white mb-3" >Why Choose Zion Tech?</h4> <ul className="space-y-2 text-gray-300" > <li className="flex items-center space-x-2" > <CheckCircle className="w-5 h-5 text-green-400" /> <span>Expert team with 10+ years experience</span> </li> <li className="flex items-center space-x-2" > <CheckCircle className="w-5 h-5 text-green-400" /> <span>Proven track record of successful projects</span> </li> <li className="flex items-center space-x-2" > <CheckCircle className="w-5 h-5 text-green-400" /> <span>24/7 support and maintenance</span> </li> <li className="flex items-center space-x-2" > <CheckCircle className="w-5 h-5 text-green-400" /> <span>Competitive pricing and flexible solutions</span> </li> </ul> </motion.div> </motion.div> {
  /* Contact Form */ 
}<motion.div > <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" /> <h3 className="text-2xl font-bold text-white mb-4" >Message Sent Successfully!</h3> <p className="text-gray-300 mb-6" > Thank you for reaching out. Our team will get back to you within 24 hours. </p> <button > Send Another Message </button> </motion.div> <div> <label htmlFor="name" className="block text-white font-medium mb-2" > Full Name * </label> <input required className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Enter your full name" /> </div> <div> <label htmlFor="email" className="block text-white font-medium mb-2" > Email Address * </label> <input required className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Enter your email" /> </div> </div> <div className="grid grid-cols-1 md:grid-cols-2 gap-6" > <div> <label htmlFor="company" className="block text-white font-medium mb-2" > Company </label> <input /> </div> <div> <label htmlFor="phone" className="block text-white font-medium mb-2" > Phone Number </label> <input /> </div> </div> <div> <label htmlFor="service" className="block text-white font-medium mb-2" > Service of Interest </label> <select </option>) ) 
}</select> </div> <div> <label htmlFor="message" className="block text-white font-medium mb-2" > Message * </label> <textarea /> </div> {
  submitStatus === 'error' && (<motion.div initial= {
  {
  opacity: 0, y: -10 
}
}animate= {
  {
  opacity: 1, y: 0 
}
}className="flex items-center space-x-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-4" > <AlertCircle className="w-5 h-5" /> <span>Something went wrong. Please try again.</span> </motion.div>) 
}<button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2" > {
  isSubmitting ? (<> <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> <span>Sending...</span> </>) : (<> <Send className="w-5 h-5" /> <span>Send Message</span> </>) 
}</button> </form>) 
}</motion.div> </div> </div> </section>) 
};
export default ContactForm;
