 </Head> {
  /* Hero Section */ 
}<section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8" > <div className="max-w-7xl mx-auto text-center" > <motion.h1 > <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent mb-6" > Latest News & Updates </div> <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6" > News & Press </h1> from Zion Tech Group and the technology industry. </p> </motion.div> > {
  categories.map ( (category, index) => (<button key= {
  category 
}import {
  {
  {
  Newspaper, Globe, Award, Users, Rocket, Brain;
ArrowRight, ExternalLink, Calendar, Tag, Star 
}from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
export default function NewsPage () {
  const newsItems = [ {
  title: "Zion Tech Group Named Top AI Innovation Company 2025";
category: "Awards & Recognition";
date: "January 15, 2025";
excerpt: "Zion Tech Group has been recognized as one of the top AI innovation companies of 2025 by TechCrunch, highlighting our breakthrough work in autonomous AI systems and quantum computing integration.";
image: "/api/placeholder/600/400";
source: "TechCrunch";
url: "#";
featured: true;
icon: Award;
color: "from-yellow-500 to-orange-500" 
};
{
  title: "Revolutionary Quantum AI Breakthrough Announced";
category: "Technology Innovation";
date: "January 10, 2025";
excerpt: "Zion Tech Group announces a major breakthrough in quantum AI integration, achieving unprecedented performance improvements in machine learning algorithms through quantum-enhanced neural networks.";
image: "/api/placeholder/600/400";
source: "MIT Technology Review";
url: "#";
featured: false;
icon: Brain;
color: "from-purple-500 to-pink-500" 
};
{
  title: "Partnership with Fortune 500 Financial Institution";
category: "Business Development";
date: "January 5, 2025";
excerpt: "Zion Tech Group announces strategic partnership with leading financial institution to deploy AI-powered risk assessment and fraud detection systems across their global operations.";
image: "/api/placeholder/600/400";
source: "Business Insider";
url: "#";
featured: false;
icon: Users;
color: "from-blue-500 to-cyan-500" 
};
{
  title: "New Cybersecurity Division Launch";
category: "Company News";
date: "December 28, 2024";
excerpt: "Zion Tech Group expands its service portfolio with the launch of a dedicated cybersecurity division, offering quantum-resistant encryption and AI-powered threat detection solutions.";
image: "/api/placeholder/600/400";
source: "Security Weekly";
url: "#";
featured: false;
icon: Rocket;
color: "from-red-500 to-orange-500" 
};
{
  title: "Record-Breaking AI Model Performance";
category: "Research & Development";
date: "December 20, 2024";
excerpt: "Our research team achieves record-breaking performance in natural language processing, with our latest AI model outperforming industry benchmarks by 40% in accuracy and 60% in speed.";
image: "/api/placeholder/600/400";
source: "AI Research Journal";
url: "#";
featured: false;
icon: Brain;
color: "from-emerald-500 to-teal-500" 
};
{
  title: "Global Expansion: New Office in Singapore";
category: "Company News";
date: "December 15, 2024";
excerpt: "Zion Tech Group announces the opening of its new Asia-Pacific headquarters in Singapore, expanding our global reach and strengthening partnerships in the region.";
image: "/api/placeholder/600/400";
source: "Singapore Business Times";
url: "#";
featured: false;
icon: Globe;
color: "from-indigo-500 to-purple-500" 
}];
const filteredNews = selectedCategory === "All" </Head> <EnhancedNavigation /> > <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6" > News & Press </h1> </p> </motion.div> <motion.div innovation from Zion Tech Group and our global team. </p> </motion.div> </div> </section> > <h2 className="text-3xl font-bold text-white mb-4" >Featured News</h2> <p className="text-white/70" >Latest headlines and major announcements</p> </motion.div> </span> <span className="text-xs text-white/40 bg-white/5 px-2 py-1 rounded" > Featured </span> </div> </div> </div> </div> <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2" > Read Full Article <ExternalLink className="w-4 h-4" /> </button> </div> </motion.div>) ) 
}</div> </div> </section>) 
}key= {
  category 
}onClick= {
  () => setSelectedCategory (category) 
}className= {
  `px-6 py-3 rounded-full font-semibold transition-all duration-300 $ {
  selectedCategory === category ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white' : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white' 
}` 
}> {
  category 
}</button>) ) 
}</div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-6" >Latest News</h2> <p className="text-xl text-white/70 max-w-3xl mx-auto" > Stay informed about our latest developments and industry recognition </p> </motion.div> </div> </div> <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-white text-sm transition-all duration-300 transform hover:scale-105" > Read More </button> </div> </motion.div>) ) 
}</div> </div> </section> > Read More <ArrowRight className="w-4 h-4" /> </Link> </div> </motion.div>) ) 
}</div> <p className="text-sm text-gray-400 mt-4" > No spam, unsubscribe at any time. We respect your privacy. </p> </motion.div> </div> </section> <div className="max-w-7xl mx-auto" > <motion.div > <h2 className="text-4xl font-bold mb-4" >Latest News</h2> <p className="text-xl text-gray-400 max-w-3xl mx-auto" > Stay updated with our most recent developments and announcements </p> </motion.div> </div> </div> <button className="w-full px-4 py-2 border border-cyan-500/30 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center gap-2" > Read More <ArrowRight className="w-4 h-4" /> </button> </motion.article>) ) 
}</div> </div> </section> Stay Updated </h2> <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8" > Subscribe to our newsletter for the latest news, insights, and breakthroughs in AI consciousness and quantum computing. <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30" > <div className="max-w-4xl mx-auto text-center" > <motion.div initial= {
  {
  opacity: 0, y: 20 
}
}animate= {
  {
  opacity: 1, y: 0 
}
}transition= {
  {
  duration: 0.6, delay: 0.8 
}
}> <h2 className="text-4xl font-bold mb-6" >Stay Updated</h2> <p className="text-xl text-gray-400 mb-8" > Subscribe to our newsletter for the latest news, insights, and technology updates </p> <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto" > <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50" /> <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300" > Subscribe </button> </div> </motion.div> </div> </motion.article>) ) 
}</div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-4" > News Categories </h2> <p className="text-xl text-gray-300 max-w-3xl mx-auto" > Explore news by category to find updates in your areas of interest. </p> </motion.div> </motion.div>) ) 
}</div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-4" > Recent News </h2> <p className="text-xl text-gray-300 max-w-3xl mx-auto" > Stay updated with our latest announcements and developments. </p> </motion.div> </div> </div> </motion.article>) ) 
}</div> </div> </section> <motion.div initial= {
  {
  opacity: 0, y: 30 
}
}whileInView= {
  {
  opacity: 1, y: 0 
}
}transition= {
  {
  duration: 0.8 
}
}viewport= {
  {
  once: true 
}
}> <h2 className="text-4xl font-bold text-white mb-4" > Media Inquiries </h2> <p className="text-xl text-gray-300 mb-8" > For press inquiries, media interviews, or additional information;
please contact our communications team. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center" > <a href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105" > Contact Media Team <Mic className="ml-2 w-5 h-5" /> </Link> <a href="/press" className="inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300" > Press Kit </Link> </div> </motion.div> </div> </section> </div> <motion.div initial= {
  {
  opacity: 0, y: 20 
}
}whileInView= {
  {
  opacity: 1, y: 0 
}
}transition= {
  {
  duration: 0.8 
}
}viewport= {
  {
  once: true 
}
}> <h2 className="text-4xl md:text-5xl font-bold mb-6" > Ready to Stay Informed? </h2> <p className="text-xl text-gray-300 mb-8" > Explore our latest research, industry insights, and technology breakthroughs that are shaping the future of AI and quantum computing. </p> <Link href="/blog" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105" > Explore Our Blog <ArrowRight className="w-5 h-5 ml-2" /> </Link> <Link href="/contact" className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300" > Contact Our Team </Link> </div> </motion.div> </div> </section> </div> </UltraAdvancedFuturisticBackground>) 
}<motion.div initial= {
  {
  opacity: 0, y: 20 
}
}whileInView= {
  {
  opacity: 1, y: 0 
}
}transition= {
  {
  duration: 0.8 
}
}viewport= {
  {
  once: true 
}
}> <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent" > Get in Touch </h2> <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" > Have questions about our news or want to learn more about our latest developments? Contact our team. </p> <div className="flex flex-wrap justify-center gap-4" > <a href="/contact" className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2" > <span>Contact Us</span> <ArrowRight className="w-5 h-5" /> </Link> <a href="/about" className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300" > About Zion Tech Group > <h2 className="text-4xl font-bold text-white mb-6" > Media & Press Inquiries </h2> <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto" > Journalists and media representatives can access our press kit, company information, and arrange interviews with our leadership team. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center" > <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105" > Download Press Kit </button> <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10" > Contact Media Relations </button> </div> </motion.div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-4" > Latest News </h2> <p className="text-xl text-gray-400" > Recent updates and announcements </p> </motion.div> > <div className="w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0" > <Newspaper className="w-12 h-12 text-gray-400" /> </div> </div> </div> </motion.div>) ) 
}</div> {
  filteredNews.filter (news => !news.featured) .length === 0 && (<motion.div > <p className="text-gray-400 text-lg" > No news articles match your current filters. Try adjusting your search or category selection. </p> </motion.div>) 
}</div> </section> > <h2 className="text-4xl font-bold text-white mb-4" > Press Releases </h2> <p className="text-xl text-gray-400" > Official company announcements and media releases </p> </motion.div> </span> <a href="/contact" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium" > Request Full Release </Link> </div> </motion.div>) ) 
}</div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-4" > Media Resources </h2> <p className="text-xl text-gray-400" > Downloadable assets and resources for media and journalists </p> </motion.div> </span> <span> {
  resource.size 
}</span> </div> <a > Download </Link> </div> </motion.div>) ) 
}</div> </div> </section> <motion.div initial= {
  {
  opacity: 0, y: 20 
}
}whileInView= {
  {
  opacity: 1, y: 0 
}
}transition= {
  {
  duration: 0.8 
}
}viewport= {
  {
  once: true 
}
}> <h2 className="text-4xl font-bold text-white mb-6" > Stay Updated </h2> <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" > Get the latest news, product updates, and industry insights delivered to your inbox. Never miss a breakthrough announcement. </p> <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105" > Subscribe to Updates </Link> <a href="/contact" className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300" > Media Inquiries </Link> </div> </motion.div> </div> </section> </div> </Layout>) 
}<div className="min-h-[60vh] px-6 py-24" > <SEO title="News | Zion Tech Group" description="News and press from Zion Tech Group" /> <div className="max-w-3xl mx-auto" > <h1 className="text-4xl font-bold text-white mb-4" >News & Press</h1> <p className="text-gray-300" >Press releases and announcements will appear here.</p> </div> <EnhancedFooter /> </div>) 
}