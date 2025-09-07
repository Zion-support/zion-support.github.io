<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook, ArrowRight } from 'lucide-react';

const EnhancedFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const services = [
    { name: 'AI Services', href: '/ai-services' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Micro SaaS', href: '/micro-saas' },
    { name: 'Innovative Solutions', href: '/innovative-it-services' },
    { name: 'Cybersecurity', href: '/cybersecurity' },
    { name: 'Cloud Services', href: '/cloud-devops' }
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Contact', href: '/contact' }
  ];

  const resources = [
    { name: 'FAQ', href: '/faq' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Support', href: '/support' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' }
  ];

  const solutions = [
    { name: 'AI Analytics Platform', href: '/solutions/ai-analytics' },
    { name: 'Cloud Migration', href: '/solutions/cloud-migration' },
    { name: 'Cybersecurity Suite', href: '/solutions/cybersecurity' },
    { name: 'Digital Transformation', href: '/solutions/digital-transformation' },
    { name: 'IoT Solutions', href: '/solutions/iot' },
    { name: 'Blockchain Integration', href: '/solutions/blockchain' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div>
                <div className="text-xl font-bold">Zion Tech Group</div>
                <div className="text-sm text-gray-400">Technology Solutions</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading technology solutions provider specializing in AI, cloud services, 
              and digital transformation. Empowering businesses to thrive in the digital age.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <a href="tel:+13024640950" className="text-gray-300 hover:text-white transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                <div className="text-gray-300">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </div>
              </div>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://github.com/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://facebook.com/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link href={service.href} className="text-gray-300 hover:text-white transition-colors flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3">
              {solutions.map((solution, index) => (
                <li key={index}>
                  <Link href={solution.href} className="text-gray-300 hover:text-white transition-colors flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {solution.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="text-gray-300 hover:text-white transition-colors flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <Link href={resource.href} className="text-gray-300 hover:text-white transition-colors flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Stay Updated with Our Latest Innovations</h3>
              <p className="text-gray-300">Get insights on the latest technology trends and our newest solutions delivered to your inbox.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;
=======
const serviceCategories = [ {
  title: 'Next-Generation AI', services: [ {
  name: 'AI Multimodal Fusion', href: '/ai-multimodal-fusion-platform' 

}
{
  name: 'AI Autonomous Decision Engine', href: '/ai-autonomous-decision-engine' 
}
{
  name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-platform' 
}
{
  name: 'AI Quantum Hybrid Computing', href: '/ai-quantum-hybrid-computing' 
}] 
}
{
  title: 'Cutting-Edge IT', services: [ {
  name: 'Zero Trust Architecture', href: '/zero-trust-network-architecture' 
}
{
  name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration' 
}
{
  name: '5G Private Networks', href: '/5g-private-network-solutions' 
}
{
  name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform' 
}] 
}
{
  title: 'Innovative SaaS', services: [ {
  name: 'AI Brand Personality', href: '/ai-brand-personality-generator' 
}
{
  name: 'Virtual Event Holograms', href: '/virtual-event-hologram-platform' 
}
{
  name: 'AI Meeting Transcriber', href: '/ai-meeting-transcriber-pro' 
}
{
  name: 'AI Mental Health Companion', href: '/ai-mental-health-companion' 
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
}> <div className="flex items-center space-x-3 mb-6" > <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center" > <Rocket className="w-7 h-7 text-white" /> </div> <div> <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent" > Zion Tech Group </div> <div className="text-sm text-gray-400" >Revolutionary Technology</div> </div> </div> </div> </div> </motion.div> </div> {
  /* Service Categories */ 
}{
  serviceCategories.map ( (category, index) => (<motion.div key= {
  category.title 
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
}> </a> </li>) ) 
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
}viewport= {
  {
  once: true 
}
}> > {
  link.name 
}</a> </li>) ) 
}</ul> </motion.div> <motion.div initial= {
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
}viewport= {
  {
  once: true 
}
}> > {
  link.name 
}</a> </li>) ) 
}</ul> </motion.div> </div> <motion.div initial= {
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
}viewport= {
  {
  once: true 
}
}> <h4 className="text-lg font-semibold text-white mb-4" >Our Impact</h4> <div className="grid grid-cols-2 gap-4" > <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/50" > <div className="text-2xl font-bold text-cyan-400" >600+</div> <div className="text-xs text-gray-400" >Services</div> </div> <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/50" > <div className="text-2xl font-bold text-purple-400" >1000%</div> <div className="text-xs text-gray-400" >ROI</div> </div> <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/50" > <div className="text-2xl font-bold text-green-400" >24/7</div> <div className="text-xs text-gray-400" >Support</div> </div> <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/50" > <div className="text-2xl font-bold text-pink-400" >99.9%</div> <div className="text-xs text-gray-400" >Uptime</div> </div> </div> </motion.div> <motion.div initial= {
  {
  opacity: 0, y: 20 
}
}whileInView= {
  {
  opacity: 1, y: 0 
}
}transition= {
  {
  duration: 0.6, delay: 0.5 
}
}viewport= {
  {
  once: true 
}
}> w-5 h-5"/> </a>) 
}) 
}</div> </motion.div> </div> </div> {
  /* Newsletter Signup */ 
}<motion.div > <div className=" text-center"> <h3 className=" text-2xl font-bold text-white mb-4"> Stay Updated with Latest Innovations </h3> <p className=" text-gray-400 mb-6 max-w-2xl mx-auto"> Get exclusive insights into the latest AI, quantum computing, and IT innovations. Be the first to know about new services and breakthrough technologies. </p> <div className=" flex flex-col sm:flex-row gap-4 max-w-md mx-auto"> <input type=" email"placeholder=" Enter your email"className=" flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"/> <button className=" px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"> Subscribe </button> </div> </div> </motion.div> </div> </div> Terms of Service </a> <a href=" /privacy"className=" hover:text-cyan-400 transition-colors duration-200"> Privacy Policy </a> <a href=" /cookies"className=" hover:text-cyan-400 transition-colors duration-200" > Cookie Policy </a> </div> </div> </div> </div> </footer>) 
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
