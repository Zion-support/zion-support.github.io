 
}
};
}
};
return (<motion.div > {
  /* Background Glow */ 
}<div className= {
  `absolute inset-0 bg-gradient-to-br $ {
  service.color 
}opacity-0 group-hover:opacity-10 transition-opacity duration-500` 
}style= {
  {
  background: `linear-gradient (135deg, $ {
  service.color.replace ('from-', '') .replace ('to-', '') .split (' ') .map (c => `var (--tw-$ {
  c.split ('-') [0] 
}-$ {
  c.split ('-') [1] 
}) `) .join (', ') 
}) ` 
}
}/> > <Star className="w-3 h-3 fill-current" /> POPULAR </motion.div> </div>) 
}> {
  service.icon 
}</motion.div> + {
  service.features.length - 3 
}more features </div>) 
}</div> </div> > <ExternalLink className="w-4 h-4" /> Learn More </motion.a> <motion.a > <ArrowRight className="w-4 h-4" /> </motion.a> </div> </div> </div> </div> 
};
export default EnhancedServiceCard;
