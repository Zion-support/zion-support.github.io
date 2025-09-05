 const filteredServices = allInnovativeServices.filter (service => {
  const matchesCategory = selectedCategory === 'all' || service.category.toLowerCase () .includes (selectedCategory) || (selectedCategory === 'ai' && (service.category.includes ('AI') || service.category.includes ('Machine Learning') ) ) || (selectedCategory === 'it' && (service.category.includes ('IT') || service.category.includes ('Infrastructure') ) ) || (selectedCategory === 'cybersecurity' && service.category.includes ('Security') ) || (selectedCategory === 'cloud' && (service.category.includes ('Cloud') || service.category.includes ('FinOps') ) ) || (selectedCategory === 'developer' && service.category.includes ('Developer') );
const matchesSearch = service.name.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.description.toLowerCase () .includes (searchTerm.toLowerCase () ) || (service as any) .tagline?.toLowerCase () .includes (searchTerm.toLowerCase () );
];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 
};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 const staggerContainer = {
  animate: {
  transition: {
  staggerChildren: 0.1 
}
}
};
return (<> <Head> <title>Innovative 2025 Services Showcase - Zion Tech Group</title> <meta name="description" content="Discover Zion Tech Group's innovative 2025 services including AI-powered solutions, advanced IT infrastructure, and cutting-edge micro SAAS platforms. Transform your business with our revolutionary technology solutions." /> <meta name="keywords" content="innovative services 2025, AI services, IT infrastructure, micro SAAS, cybersecurity, cloud solutions, Zion Tech Group" /> <meta name="viewport" content="width=device-width, initial-scale=1" /> <link rel="canonical" href="https://ziontechgroup.com/innovative-2025-services-showcase" /> </Head> left: `$ {
  Math.random () * 100 
}%`;
top: `$ {
  Math.random () * 100 
}%`;
animationDelay: `$ {
  Math.random () * 2 
}s`;
animationDuration: `$ {
  2 + Math.random () * 3 
}s` 
}
}/>) ) 
}</div> </div> > <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent" > Innovative 2025 </span> <br /> <span className="text-white" >Services Showcase</span> </motion.h1> <motion.p > Experience the future of technology with our revolutionary AI platforms, quantum computing solutions;
autonomous systems, and innovative micro SAAS services that are transforming industries worldwide. </motion.p> <motion.div /> <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" /> </div> </div> key= {
  category.id 
}onClick= {
  () => setSelectedCategory (category.id) 
}className= {
  `flex items-center space-x-2 px-6 py-3 rounded-xl border transition-all duration-300 $ {
  selectedCategory === category.id ? 'border-purple-500 bg-purple-500/20 text-purple-300': 'border-gray-700 text-gray-300 hover:border-gray-600 hover:text-white' 
}` 
}> </span> </button>) ) 
}</div> </div> </motion.section> {
  /* Services Grid */ 
}<motion.section POPULAR </div>) 
}</div> + {
  service.features.length - 5 
}more features </div>) 
}</div> </div> </div> {
  /* CTA Button */ 
}<Link > <span>Learn More</span> <ArrowRight className="w-5 h-5" /> </Link> </div> </div> </motion.div>) ) 
}</div> > <div className="text-6xl mb-6" >🔍</div> <h3 className="text-2xl font-bold text-white mb-4" >No services found</h3> <p className="text-gray-400 mb-8" > Try adjusting your search terms or category filters </p> <button > Clear Filters </button> </motion.div>) 
}</div> </motion.section> {
  /* Contact Section */ 
}<motion.section > <div className="max-w-4xl mx-auto text-center" > <h2 className="text-4xl md:text-5xl font-bold mb-8" > Ready to Transform Your Business? </h2> <p className="text-xl text-gray-300 mb-12" > Get in touch with our team to learn more about our innovative 2025 services and how they can revolutionize your operations. </p> <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12" > <div className="text-center" > <Phone className="w-8 h-8 text-purple-400 mx-auto mb-4" /> <h3 className="text-lg font-semibold text-white mb-2" >Phone</h3> <p className="text-gray-300" >+1 302 464 0950</p> </div> <div className="text-center" > <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" /> <h3 className="text-lg font-semibold text-white mb-2" >Email</h3> <p className="text-gray-300" >kleber@ziontechgroup.com</p> </div> <div className="text-center" > <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-4" /> <h3 className="text-lg font-semibold text-white mb-2" >Address</h3> <p className="text-gray-300" >364 E Main St STE 1008<br />Middletown DE 19709</p> </div> </div> <div className="flex flex-col sm:flex-row gap-4 justify-center" > <Link href="/contact" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105" > Contact Us Today </Link> <Link href="/services" className="border border-gray-600 text-white px-8 py-4 rounded-xl font-semibold hover:border-gray-500 transition-all duration-300" > View All Services </Link> </div> </div> </motion.section> {
  /* Footer */ 
}<motion.footer > <div> <div className="flex items-center space-x-2 mb-4" > <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center" > <Zap className="w-5 h-5 text-white" /> </div> <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent" > Zion Tech Group </span> </div> <p className="text-gray-400 text-sm" > Transforming businesses with innovative technology solutions for the future. </p> </div> <div> <h3 className="text-white font-semibold mb-4" >Services</h3> <ul className="space-y-2 text-sm text-gray-400" > <li><Link href="/services" className="hover:text-white transition-colors" >AI Services</Link></li> <li><Link href="/services" className="hover:text-white transition-colors" >IT Infrastructure</Link></li> <li><Link href="/services" className="hover:text-white transition-colors" >Micro SAAS</Link></li> <li><Link href="/services" className="hover:text-white transition-colors" >Cybersecurity</Link></li> </ul> </div> <div> <h3 className="text-white font-semibold mb-4" >Company</h3> <ul className="space-y-2 text-sm text-gray-400" > <li><Link href="/about" className="hover:text-white transition-colors" >About Us</Link></li> <li><Link href="/team" className="hover:text-white transition-colors" >Our Team</Link></li> <li><Link href="/careers" className="hover:text-white transition-colors" >Careers</Link></li> <li><Link href="/news" className="hover:text-white transition-colors" >News</Link></li> </ul> </div> <div> <h3 className="text-white font-semibold mb-4" >Connect</h3> <ul className="space-y-2 text-sm text-gray-400" > <li><Link href="/contact" className="hover:text-white transition-colors" >Contact</Link></li> <li><Link href="/support" className="hover:text-white transition-colors" >Support</Link></li> <li><Link href="/blog" className="hover:text-white transition-colors" >Blog</Link></li> <li><Link href="/resources" className="hover:text-white transition-colors" >Resources</Link></li> </ul> </div> </div> <div className="mt-12 pt-8 border-t border-gray-800 text-center" > <p className="text-gray-400 text-sm" > © 2025 Zion Tech Group. All rights reserved. | <Link href="/privacy" className="hover:text-white transition-colors ml-2" >Privacy Policy</Link> | <Link href="/terms" className="hover:text-white transition-colors ml-2" >Terms of Service</Link> </p> </div> </div> </motion.footer> </div> </div> </>) 
};
export default Innovative2025ServicesShowcase;
