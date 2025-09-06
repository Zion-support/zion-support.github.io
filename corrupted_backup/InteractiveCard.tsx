 return (<Link href= {
  href 
}className= {
  `group block p-8 rounded-2xl border border-white/10 hover:border-white/30 bg-black/20 hover:bg-black/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm hover-lift $ {
  className 
}` 
}onMouseEnter= {
  () => setIsHovered (true) 
}onMouseLeave= {
  () => setIsHovered (false) 
}aria-label= {
  `Navigate to $ {
  title 
}page` 
}> <div className= {
  `absolute inset-0 bg-gradient-to-r $ {
  color 
}rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl` 
}/> </svg> </div>) 
}</div> {
  /* Hover effect overlay */ 
}<div className= {
  `absolute inset-0 border-2 border-transparent rounded-xl bg-gradient-to-r $ {
  color 
}opacity-0 group-hover:opacity-20 transition-opacity duration-500` 
}style= {
  {
  background: `linear-gradient (45deg, var (--$ {
  color.split ('-') [1] 
}-500), var (--$ {
  color.split ('-') [3] 
}-500) ) ` 
}

