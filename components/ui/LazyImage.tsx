useEffect ( () => {
  const observer = new IntersectionObserver ( ([entry]) => {
  if (entry.isIntersecting) {
  return () => observer.disconnect () 
}, [threshold])
return (<div className= {
  `relative overflow-hidden $ {
  className 
}` 
}> {
  /* Placeholder */ 
}<img src= {
  placeholder 
}alt="" className= {
  `absolute inset-0 w-full h-full object-cover transition-opacity duration-500 $ {
  isLoaded ? 'opacity-0' : 'opacity-100' 
}` 
}style= {
  {
  width, height 
}
}/> {
  /* Actual Image */ 
}{
  isInView && (<motion.img ref= {
  imgRef 
}/>) 
}</div>) 
}
export default LazyImage