const EnhancedTestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [ {
  const renderStars = (rating: number) => {
  return Array.from ({
  length: 5 
}, (, i) => (<Star key= {
  i 
}className= {
  `w-4 h-4 $ {
  i < rating ? 'text-yellow-400 fill-current' : 'text-gray-400' 
}` 
}/>) ) 
}
return (What Our Clients Say </span> </h2> <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed" > Discover why leading companies trust Zion Tech Group to transform their business with cutting-edge technology solutions </p> </div> </div>) ) 
}</div> <div key= {
  testimonial.id 
}className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-blue-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl" > </span> </div> </div> </div>) ) 
}</div> Ready to Join Our Success Stories? </h3> <p className="text-white/70 mb-6 max-w-2xl mx-auto" > Experience the same transformative results that our clients have achieved. Let's discuss how Zion Tech Group can accelerate your innovation journey. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center" > <a href="mailto:kleber@ziontechgroup.com?subject=Client Success Story Discussion" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl" > Start Your Success Story </a> <a href="tel:+13024640950" className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10" > Schedule a Call </a> </div> </div> </div> <span>Enterprise-grade security</span> </div> <div className="flex items-center gap-2" > <TrendingUp className="w-4 h-4 text-blue-400" /> <span>Proven ROI</span> </div> <div className="flex items-center gap-2" > <Users className="w-4 h-4 text-purple-400" /> <span>Global support</span> </div> </div> </div> </div> </section>) 
}
export default EnhancedTestimonialsSection
