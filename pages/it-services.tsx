 const filteredServices = selectedCategory === 'all' ? services : services.filter (service => service.category === selectedCategory);
return (<> <Head> <title>IT Services - Zion Tech Group</title> <h1 className= {
  `text-5xl md:text-6xl font-extrabold tracking-tight mb-6 transition-all duration-1000 $ {
  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8' 
}` 
}> IT Services </h1> <p className= {
  `text-xl md:text-2xl text-slate-300 mb-8 transition-all duration-1000 delay-200 $ {
  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8' 
}` 
}> 100+ Comprehensive IT Solutions </p> <p className= {
  `text-lg text-slate-400 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-400 $ {
  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8' 
}` 
}> Transform your business with our enterprise-grade IT services. From cloud infrastructure to quantum computing, we provide cutting-edge technology solutions that scale with your business and drive innovation. </p> </div> </section> key= {
  category.id 
}onClick= {
  () => setSelectedCategory (category.id) 
}className= {
  `px-6 py-3 rounded-lg font-semibold transition-all duration-300 $ {
  selectedCategory === category.id ? 'bg-green-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700' 
}` 
}> {
  category.name 
}({
  category.count 
}) </button>) ) 
}</div> </div> </section> <div key= {
  service.id 
}className= {
  `p-6 bg-slate-900/60 rounded-xl border border-white/10 hover:border-green-500/40 transition-all duration-300 hover:scale-105 $ {
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
}</ul> </div> </span>) ) 
}</div> </div> w-full py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors"> Learn More </button> </div>) ) 
}</div> </div> </section> </svg> </div> <h3 className=" text-xl font-bold mb-2">Cloud Platforms</h3> <p className=" text-slate-400">AWS, Azure, GCP, and hybrid cloud solutions</p> </div> </svg> </div> <h3 className=" text-xl font-bold mb-2">Security</h3> <p className=" text-slate-400">Zero-trust architecture and advanced threat protection</p> </div> </svg> </div> <h3 className=" text-xl font-bold mb-2">DevOps</h3> <p className=" text-slate-400">CI/CD pipelines and infrastructure automation</p> </div> </svg> </div> <h3 className=" text-xl font-bold mb-2">Blockchain</h3> <p className=" text-slate-400">Smart contracts and decentralized applications</p> </div> </div> </div> </section> Ready to Transform Your IT Infrastructure? </h2> <p className=" text-lg text-slate-300 mb-8"> Contact our IT experts to discuss how our comprehensive technology solutions can modernize your infrastructure and accelerate your digital transformation. </p> <div className=" flex flex-col sm:flex-row items-center justify-center gap-4"> <Link href=" /contact"className=" px-8 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors" > Get IT Consultation </Link> <a 
}