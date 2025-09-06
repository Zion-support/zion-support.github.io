 const UltraFuturisticServiceCard2026: React.FC<ServiceCardProps> = ({
  service, variant = 'default' 
}) => {
  const getVariantStyles = () => {
  switch (variant) {
  case 'ai': return {
  

};
{
  /* Popular Badge */ 
}{
  service.popular && (<motion.div > <Star className="w-4 h-4 inline mr-1" /> Popular </motion.div>) 
}Key Features </h4> {
  service.features.slice (0, 6) .map ( (feature, idx) => (<motion.div key= {
  idx 
}</motion.div>) ) 
}</div> 
}</div>) 

}</div>) 
}</div>) ) 
}</div> </div>) 
}<motion.button whileHover= {
  {
  scale: 1.02 

}whileTap= {
  {
  scale: 0.98 

}className= {
  `w-full py-3 px-6 rounded-lg bg-gradient-to-r $ {
  styles.gradient 
}text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-$ {
  styles.textColor 
}/25 border border-white/20 hover:border-white/40` 
}> Get Started </motion.button> </div> export default UltraFuturisticServiceCard2026;
