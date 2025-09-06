 window.addEventListener ('scroll', handleScroll);
return () => window.removeEventListener ('scroll', handleScroll) 
}, []);
] 
}];
];
const resources = [ {
  name: 'Documentation', description: 'Comprehensive service guides', icon: <BookOpen className="w-5 h-5" />, link: '/docs' 
};
{
  name: 'Blog & Insights', description: 'Latest technology trends', icon: <FileText className="w-5 h-5" />, link: '/blog' 
};
{
  name: 'Case Studies', description: 'Real-world success stories', icon: <BarChart3 className="w-5 h-5" />, link: '/case-studies' 
};
{
  name: 'Pricing', description: 'Transparent and flexible plans', icon: <CreditCard className="w-5 h-5" />, link: '/pricing' 
};
{
  name: 'Reports', description: 'Live performance and audits', icon: <Activity className="w-5 h-5" />, link: '/reports' 
}];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 //Popular quick links to flagship services </div> <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" ></div> </div> <div className="hidden sm:block" > <div className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300" > Zion Tech Group </div> <div className="text-xs text-gray-400" >Revolutionary Technology</div> </div> </a> > <span>Services</span> <ChevronDown className= {
  `w-4 h-4 transition-transform duration-300 $ {
  activeDropdown === 'services' ? 'rotate-180' : '' 
}` 
}/> </button> </div>) ) 
}</div> </div>) ) 
}</div> <div className="mt-6 pt-6 border-t border-gray-700/50" > <div className="flex items-center justify-between" > <div className="text-gray-400 text-sm" > <span className="text-cyan-400 font-semibold" >500+</span> Revolutionary Services Available </div> <Button href="/services" variant="quantum" size="sm" > View All Services <ArrowRight className="w-4 h-4 ml-2" /> </Button> </div> </div> </div>) 
}</div> > <span>Popular</span> <ChevronDown className= {
  `w-4 h-4 transition-transform duration-300 $ {
  activeDropdown === 'popular'? 'rotate-180': '' 
}` 
}/> </button>) ) 
}</div> </div>) 
}</div>) ) 
}</div> </div>) 
}</div> </div> </button> </div> </div> <span>Services</span> <ChevronRight className= {
  `w-5 h-5 transition-transform duration-300 $ {
  activeDropdown === 'mobile-services'? 'rotate-90': '' 
}` 
}/> </button>) ) 
}</div> </div>) ) 
}<div className="pt-3" > <Button href="/services" variant="quantum" size="sm" className="w-full" > View All Services <ArrowRight className="w-4 h-4 ml-2" /> </Button> </div> </div>) 
}</div> {
  /* Company Section */ 
}<div> <span>Company</span> <ChevronRight className= {
  `w-5 h-5 transition-transform duration-300 $ {
  activeDropdown === 'mobile-company'? 'rotate-90': '' 
}` 
}/> </button>) ) 
}</div>) 
}</div> {
  /* Resources Section */ 
}<div> <span>Resources</span> <ChevronRight className= {
  `w-5 h-5 transition-transform duration-300 $ {
  activeDropdown === 'mobile-resources'? 'rotate-90': '' 
}` 
}/> </button>) ) 
}</div>) 
}</div> </div> </div> <div className="mt-6 space-y-3" > <Button href="/services" variant="quantum" size="lg" className="w-full" > Explore Services <ArrowRight className="w-5 h-5 ml-2" /> </Button> <Button href="/contact" variant="secondary" size="lg" className="w-full" > Contact Us </Button> </div> </div> </div> </div> </div>) 
}</nav>) 
}