 const filteredProducts = selectedCategory === 'all' ? products : products.filter (product => product.category === selectedCategory);
return (<> <Head> <title>Micro SaaS Products - Zion Tech Group</title> <h1 className= {
  `text-5xl md:text-6xl font-extrabold tracking-tight mb-6 transition-all duration-1000 $ {
  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8' 
}` 
}> Micro SaaS Products </h1> <p className= {
  `text-xl md:text-2xl text-slate-300 mb-8 transition-all duration-1000 delay-200 $ {
  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8' 
}` 
}> 150+ Innovative Solutions for Modern Businesses </p> <p className= {
  `text-lg text-slate-400 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-400 $ {
  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8' 
}` 
}> Discover our comprehensive collection of micro SaaS products designed to solve specific business challenges with focused, efficient, and cost-effective solutions. </p> </div> </section> key= {
  category.id 
}onClick= {
  () => setSelectedCategory (category.id) 
}className= {
  `px-6 py-3 rounded-lg font-semibold transition-all duration-300 $ {
  selectedCategory === category.id ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700' 
}` 
}> {
  category.name 
}({
  category.count 
}) </button>) ) 
}</div> </div> </section> <div key= {
  product.id 
}className= {
  `p-6 bg-slate-900/60 rounded-xl border border-white/10 hover:border-blue-500/40 transition-all duration-300 hover:scale-105 $ {
  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8' 
}` 
}style= {
  {
  transitionDelay: `$ {
  index * 100 
}ms` 
}
}> Popular </div>) 
}</li>) ) 
}</ul> </div> </div> <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors" > Learn More </button> </div>) ) 
}</div> </div> </section> </svg> </div> <h3 className="text-xl font-bold mb-2" >Lightning Fast</h3> <p className="text-slate-400" >Quick setup and deployment in minutes, not months</p> </div> </svg> </div> <h3 className="text-xl font-bold mb-2" >Cost Effective</h3> <p className="text-slate-400" >Affordable pricing with no hidden costs or long-term contracts</p> </div> </svg> </div> <h3 className="text-xl font-bold mb-2" >Focused Solutions</h3> <p className="text-slate-400" >Specialized tools that solve specific business problems</p> </div> </svg> </div> <h3 className="text-xl font-bold mb-2" >Easy Integration</h3> <p className="text-slate-400" >Seamless integration with your existing tools and workflows</p> </div> </div> </div> </section> Ready to Get Started? </h2> <p className="text-lg text-slate-300 mb-8" > Contact our experts to discuss which micro SaaS products are right for your business and get started with a free trial. </p> <div className="flex flex-col sm:flex-row items-center justify-center gap-4" > <Link href="/contact" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors" > Get Free Trial </Link> <a 
}