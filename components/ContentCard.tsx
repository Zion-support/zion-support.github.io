 const ContentCard: React.FC<ContentCardProps> = ({
  title, description, href, icon, color, glow, date, category 
}) => {
  return (<Link href= {
  href 
}className= {
  `group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-500 hover-lift $ {
  glow 
}` 
}> {
  category 
}</span>) 
}</div> Read More <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300" >→</span> </div> {
  date 
}</span>) 
}</div> </Link>) 
};
