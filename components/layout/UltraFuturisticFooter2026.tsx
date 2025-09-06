 const serviceCategories = [ {
  title: 'AI & Automation', services: [ {
  name: 'AI Autonomous Business Processor', href: '/ai-autonomous-business-processor' 
};
{
  name: 'AI Predictive Enterprise Analytics', href: '/ai-predictive-enterprise-analytics' 
};
{
  name: 'AI Autonomous Customer Success', href: '/ai-autonomous-customer-success' 
};
{
  name: 'AI Autonomous Marketing Orchestrator', href: '/ai-autonomous-marketing-orchestrator' 
};
{
  name: 'AI Autonomous Sales Intelligence', href: '/ai-autonomous-sales-intelligence' 
}] 
};
{
  title: 'Cybersecurity & Quantum', services: [ {
  name: 'Quantum Encryption Platform', href: '/quantum-encryption-platform' 
};
{
  name: 'AI Autonomous Threat Hunter', href: '/ai-autonomous-threat-hunter' 
};
{
  name: 'Quantum Zero Trust Security', href: '/quantum-zero-trust-security' 
};
{
  name: 'AI Autonomous Vulnerability Scanner', href: '/ai-autonomous-vulnerability-scanner' 
};
{
  name: 'Quantum Secure Communication', href: '/quantum-secure-communication' 
}] 
};
{
  title: 'Fintech & Blockchain', services: [ {
  name: 'Quantum Financial Trading Platform', href: '/quantum-financial-trading-platform' 
};
{
  name: 'AI Autonomous Wealth Management', href: '/ai-autonomous-wealth-management' 
};
{
  name: 'Quantum Blockchain Finance', href: '/quantum-blockchain-finance' 
};
{
  name: 'AI Autonomous Insurance Platform', href: '/ai-autonomous-insurance-platform' 
};
{
  name: 'Quantum Payment Processing', href: '/quantum-payment-processing' 
}] 
};
{
  title: 'Healthcare & Biotech', services: [ {
  name: 'AI Autonomous Medical Diagnostics', href: '/ai-autonomous-medical-diagnostics' 
};
{
  name: 'Quantum Drug Discovery Platform', href: '/quantum-drug-discovery-platform' 
};
{
  name: 'AI Autonomous Patient Care', href: '/ai-autonomous-patient-care' 
};
{
  name: 'Quantum Genomic Analysis', href: '/quantum-genomic-analysis' 
};
{
  name: 'AI Autonomous Clinical Trials', href: '/ai-autonomous-clinical-trials' 
}] 
}];
{
  /* Background Effects */ 
}<div className="absolute inset-0 overflow-hidden" > <div className="absolute inset-0 bg-[radial-gradient (circle at 30% 20%, rgba (6, 182, 212, 0.05), transparent 50%) ]" ></div> <div className="absolute inset-0 bg-[radial-gradient (circle at 70% 80%, rgba (139, 92, 246, 0.05), transparent 50%) ]" ></div> </div> <motion.div initial= {
  {
  opacity: 0, y: 20 
}
}whileInView= {
  {
  opacity: 1, y: 0 
}
}transition= {
  {
  duration: 0.6 
}
}> <div className="flex items-center mb-6" > <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4" > <Zap className="w-6 h-6 text-white" /> </div> <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Zion Tech Group </h3> </div> <p className="text-gray-300 mb-6 leading-relaxed" > Leading provider of revolutionary AI automation, quantum cybersecurity, fintech blockchain;
and healthcare biotech solutions. Transforming businesses with cutting-edge technology. </p> </div> </div> </motion.div> </div> {
  /* Service Categories */ 
}{
  serviceCategories.map ( (category, index) => (<motion.div key= {
  index 
}initial= {
  {
  opacity: 0, y: 20 
}
}whileInView= {
  {
  opacity: 1, y: 0 
}
}transition= {
  {
  duration: 0.6, delay: index * 0.1 
}
}> </li>) ) 
}</ul> </motion.div>) ) 
}</div> <motion.div initial= {
  {
  opacity: 0, y: 20 
}
}whileInView= {
  {
  opacity: 1, y: 0 
}
}transition= {
  {
  duration: 0.6, delay: 0.2 
}
}> <h4 className="text-lg font-semibold text-white mb-4 flex items-center" > <Users className="w-5 h-5 mr-2 text-purple-400" /> Company </h4> </li>) ) 
}</ul> </motion.div> {
  /* Resources */ 
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
  duration: 0.6, delay: 0.3 
}
}> <h4 className="text-lg font-semibold text-white mb-4 flex items-center" > <Award className="w-5 h-5 mr-2 text-yellow-400" /> Resources </h4> </li>) ) 
}</ul> </motion.div> {
  /* Social Media */ 
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
  duration: 0.6, delay: 0.4 
}
}> <h4 className="text-lg font-semibold text-white mb-4 flex items-center" > <Rocket className="w-5 h-5 mr-2 text-pink-400" /> Follow Us </h4> > <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" /> </a>) ) 
}</div> </motion.div> </div> {
  /* Newsletter Signup */ 
}<motion.div > <div className="text-center" > <h3 className="text-2xl font-bold text-white mb-4" > Stay Updated with Latest Innovations </h3> <p className="text-gray-300 mb-6 max-w-2xl mx-auto" > Get exclusive access to our latest AI, quantum computing, and emerging technology insights. Be the first to know about breakthrough solutions and industry trends. </p> <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" > <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20" /> <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300" > Subscribe </button> </div> </div> </motion.div> {
  /* Bottom Bar */ 
}<motion.div > © 2026 Zion Tech Group. All rights reserved. | <Link href="/privacy" className="hover:text-cyan-400 transition-colors duration-300 ml-2" > Privacy Policy </a> <span className="mx-2" >|</span> <Link href="/terms" className="hover:text-cyan-400 transition-colors duration-300" > Terms of Service </a> </div> <div className="flex items-center space-x-2" > <div className="flex items-center text-gray-400 text-sm" > <Star className="w-4 h-4 text-yellow-400 mr-1" /> Trusted by 2500+ Companies </div> <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" ></div> <div className="text-cyan-400 text-sm font-semibold" > 99.9% Uptime </div> </div> </div> </motion.div> </div> </footer>) 
}