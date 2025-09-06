 const containerVariants = {
  hidden: {
  opacity: 0, y: 20 
};
visible: {
  opacity: 1;
y: 0;
transition: {
  duration: 0.6;
ease: "easeOut" as const 
}
};
hover: {
  y: -10;
transition: {
  duration: 0.3;
ease: "easeOut" as const 
}
}
};
}
};
> {
  /* Glow Effect */ 
}<div className= {
  `absolute inset-0 rounded-2xl blur-xl transition-all duration-500 $ {
  isHovered ? 'opacity-100' : 'opacity-50' 
}` 
}style= {
  {
  background: `linear-gradient (135deg, $ {
  service.color 
}) `;
transform: isHovered ? 'scale (1.05) ' : 'scale (1) ' 
}
}/> {
  /* Main Card */ 
}<div className= {
  `relative bg-gradient-to-br $ {
  service.color 
}p-1 rounded-2xl transition-all duration-500 $ {
  isHovered ? 'shadow-2xl' : 'shadow-lg' 
}` 
}> </div> </div> {
  service.popular && (<motion.div > POPULAR </motion.div>) 
}</div> </div> </div> {
  /* Expandable Content */ 
}<AnimatePresence> {
  isExpanded && (<motion.div variants= {
  contentVariants 
}initial="hidden" animate="visible" exit="hidden" className="space-y-4" > {
  /* Description */ 
}<div> </p> </div> {
  /* Features */ 
}<div> </div>) ) 
}</div> </div> </div> </div> </div> </motion.div>) 
}</AnimatePresence> > <span>Learn More</span> <ExternalLink className="w-4 h-4" /> </motion.button> <motion.button className= {
  `px-4 py-3 rounded-lg border-2 transition-all duration-300 flex items-center justify-center $ {
  isExpanded ? 'border-gray-600 text-gray-400' : 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black' 
}` 
}whileHover= {
  {
  scale: 1.02 
}
}whileTap= {
  {
  scale: 0.98 
}
}onClick= {
  () => setIsExpanded (!isExpanded) 
}> {
  isExpanded ? 'Show Less' : 'Details' 
}</motion.button> </div> {
  /* Expand/Collapse Indicator */ 
}<motion.div > <ArrowRight className="w-5 h-5 text-gray-400" /> </motion.div> </div> </div> </motion.div>) 
};
export default UltraAdvancedServiceCard;
