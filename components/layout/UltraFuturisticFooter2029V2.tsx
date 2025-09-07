const serviceCategories = [ {
  title: 'AI & Consciousness', icon: Brain, color: 'from-violet-600 via-purple-600 to-indigo-600', services: [ {
  name: 'AI Consciousness Evolution', href: '/services/ai-consciousness-evolution-platform' 
}
{
  name: 'AI Emotional Intelligence', href: '/services/ai-emotional-intelligence-platform' 
}
{
  name: 'AI Creativity Orchestrator', href: '/services/ai-creativity-orchestrator' 
}
{
  name: 'AI Autonomous Business Manager', href: '/services/ai-autonomous-business-manager' 
}] 
}
{
  title: 'Quantum Technology', icon: Globe, color: 'from-indigo-600 via-blue-600 to-cyan-600', services: [ {
  name: 'Quantum Internet Security', href: '/services/quantum-internet-security-gateway' 
}
{
  name: 'Biotech DNA Computing', href: '/services/biotech-dna-computing-platform' 
}
{
  name: 'Quantum Financial Trading', href: '/services/quantum-financial-trading-platform' 
}
{
  name: 'Quantum Creativity Studio', href: '/services/quantum-creativity-studio' 
}] 
}
{
  title: 'Space & Metaverse', icon: Rocket, color: 'from-teal-600 via-emerald-600 to-green-600', services: [ {
  name: 'Space Mining Automation', href: '/services/space-mining-automation-platform' 
}
{
  name: 'Metaverse Digital Reality', href: '/services/metaverse-digital-reality-platform' 
}
{
  name: 'AI Predictive Health', href: '/services/ai-predictive-health-analytics' 
}
{
  name: 'Virtual Event Holograms', href: '/services/virtual-event-hologram-platform' 
}] 
}
{
  title: 'Enterprise IT', icon: Cpu, color: 'from-blue-600 via-cyan-600 to-teal-600', services: [ {
  name: 'AI Business Intelligence', href: '/services/ai-business-intelligence-suite' 
}
{
  name: 'Smart Supply Chain', href: '/services/smart-supply-chain-optimization' 
}
{
  name: 'Intelligent HR Management', href: '/services/intelligent-hr-management-system' 
}
{
  name: 'Smart Financial Management', href: '/services/smart-financial-management-platform' 
}] 
}]
const footerSections = [ {
  title: 'Services', links: [ {
  name: 'AI & Machine Learning', href: '/services/ai-ml' 
}
{
  name: 'Quantum Computing', href: '/services/quantum-computing' 
}
{
  name: 'Space Technology', href: '/services/space-technology' 
}
{
  name: 'Enterprise IT', href: '/services/enterprise-it' 
}
{
  name: 'Micro SAAS', href: '/services/micro-saas' 
}
{
  name: 'Cybersecurity', href: '/services/cybersecurity' 
}] 
}
{
  title: 'Solutions', links: [ {
  name: 'AI Consciousness', href: '/solutions/ai-consciousness' 
}
{
  name: 'Quantum Security', href: '/solutions/quantum-security' 
}
{
  name: 'Space Mining', href: '/solutions/space-mining' 
}
{
  name: 'Metaverse Platform', href: '/solutions/metaverse' 
}
{
  name: 'Business Intelligence', href: '/solutions/business-intelligence' 
}
{
  name: 'Supply Chain AI', href: '/solutions/supply-chain-ai' 
}] 
}
{
  title: 'Industries', links: [ {
  name: 'Healthcare', href: '/industries/healthcare' 
}
{
  name: 'Finance', href: '/industries/finance' 
}
{
  name: 'Manufacturing', href: '/industries/manufacturing' 
}
{
  name: 'Retail', href: '/industries/retail' 
}
{
  name: 'Education', href: '/industries/education' 
}
{
  name: 'Government', href: '/industries/government' 
}] 
}
{
  title: 'Resources', links: [ {
  name: 'Documentation', href: '/docs' 
}
{
  name: 'API Reference', href: '/api' 
}
{
  name: 'Case Studies', href: '/case-studies' 
}
{
  name: 'White Papers', href: '/white-papers' 
}
{
  name: 'Blog', href: '/blog' 
}
{
  name: 'Research', href: '/research' 
}] 
}]
<motion.div initial= {
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
}viewport= {
  {
  once: true 
}
}> <Link href="/" className="flex items-center space-x-3 mb-6 group" > <div className="relative" > <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300" > <Rocket className="w-7 h-7 text-white" /> </div> <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" /> </div> <div> <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" > Zion Tech Group </h3> <p className="text-sm text-gray-400" >Future Technology Solutions</p> </div> </a> </div> </div> </motion.div> </div> {
  /* Service Categories */ 
}{
  footerSections.map ( (section, index) => (<motion.div key= {
  section.title 
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
}viewport= {
  {
  once: true 
}
}> </li>) ) 
}</ul> </motion.div>) ) 
}</div> {
  /* Service Showcase */ 
}<motion.div > <h3 className="text-2xl font-bold text-white text-center mb-8" > Featured 2029 Services </h3> </li>) ) 
}</ul> </div> </motion.div>) ) 
}</div> </motion.div> </div> > © 2025 Zion Tech Group. All rights reserved. | <Link href="/privacy" className="hover:text-cyan-400 transition-colors duration-300 ml-2" >Privacy Policy</a> | <Link href="/terms" className="hover:text-cyan-400 transition-colors duration-300 ml-2" >Terms of Service</a> </motion.div> {
  /* Social Links */ 
}<motion.div > {
  socialLinks.map ( (social) => (<Link key= {
  social.name 
}> <social.icon className="w-4 h-4" /> </a>) ) 
}</motion.div> </div> </div> </div> {
  /* Newsletter Signup */ 
}<motion.div > <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" > <div className="text-center" > <h3 className="text-2xl font-bold text-white mb-4" > Stay Ahead with Future Tech </h3> <p className="text-gray-300 mb-6 max-w-2xl mx-auto" > Get the latest updates on AI breakthroughs, quantum computing advances, space technology innovations, and cutting-edge micro SAAS solutions. </p> <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50" /> <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105" > Subscribe </button> </div> </div> </div> </motion.div> </footer>) 
}