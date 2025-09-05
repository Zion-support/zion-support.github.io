<<<<<<< HEAD

const EnhancedFooter: React.FC = () => {
<<<<<<< HEAD
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'AI Development', href: '/services/ai-development' },
    { name: 'Cloud Migration', href: '/services/cloud-migration' },
    { name: 'Cybersecurity', href: '/services/cybersecurity' },
    { name: 'Mobile Apps', href: '/services/mobile-development' },
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'Data Analytics', href: '/services/data-analytics' }
  ];

  const products = [
    { name: 'ZionAI Analytics', href: '/products/zion-ai-analytics' },
    { name: 'CloudSecure Pro', href: '/products/cloudsecure-pro' },
    { name: 'DataFlow Engine', href: '/products/dataflow-engine' },
    { name: 'MobileFirst CMS', href: '/products/mobilefirst-cms' }
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook } from 'lucide-react';

const EnhancedFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const services = [
    { name: 'AI Services', href: '/ai-services' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Blockchain Solutions', href: '/blockchain-solutions' },
    { name: 'Micro SaaS', href: '/micro-saas' },
    { name: 'Security', href: '/security' },
    { name: 'Case Studies', href: '/case-studies' },
  ];

  const company = [
    { name: 'About Us', href: '/about' },
  ];

  return (
                  </Link>
                </li>
              ))}
            </ul>
          </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
=======
	return (
		<footer className="bg-gray-900 text-white py-8">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div>
						<h3 className="text-lg font-semibold mb-4">About Us</h3>
						<p className="text-gray-300">
							Leading technology solutions for modern businesses.
						</p>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4">Services</h3>
						<ul className="text-gray-300 space-y-2">
							<li><Link href="/services" className="hover:text-white">All Services</Link></li>
							<li><Link href="/services/cloud" className="hover:text-white">Cloud Solutions</Link></li>
							<li><Link href="/services/ai" className="hover:text-white">AI Services</Link></li>
							<li><Link href="/services/cybersecurity" className="hover:text-white">Cybersecurity</Link></li>
						</ul>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4">Company</h3>
						<ul className="text-gray-300 space-y-2">
							<li><Link href="/about" className="hover:text-white">About</Link></li>
							<li><Link href="/blog" className="hover:text-white">Blog</Link></li>
							<li><Link href="/contact" className="hover:text-white">Contact</Link></li>
							<li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
							<li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
							<li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
						</ul>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4">Follow Us</h3>
						<div className="flex space-x-4">
							<a href="https://www.linkedin.com/company/zion-marketplace" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">LinkedIn</a>
							<a href="https://github.com/Zion-Holdings" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">GitHub</a>
						</div>
					</div>
				</div>
				<div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
					<p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
>>>>>>> origin/chore/fix-build-nav-links
=======
 const serviceCategories = [ {
  title: 'Next-Generation AI', services: [ {
  name: 'AI Multimodal Fusion', href: '/ai-multimodal-fusion-platform' 
>>>>>>> cursor/automate-test-improve-and-merge-code-59d5
};
{
  name: 'AI Autonomous Decision Engine', href: '/ai-autonomous-decision-engine' 
};
{
  name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-platform' 
};
{
  name: 'AI Quantum Hybrid Computing', href: '/ai-quantum-hybrid-computing' 
}] 
};
{
  title: 'Cutting-Edge IT', services: [ {
  name: 'Zero Trust Architecture', href: '/zero-trust-network-architecture' 
};
{
  name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration' 
};
{
  name: '5G Private Networks', href: '/5g-private-network-solutions' 
};
{
  name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform' 
}] 
};
{
  title: 'Innovative SaaS', services: [ {
  name: 'AI Brand Personality', href: '/ai-brand-personality-generator' 
};
{
  name: 'Virtual Event Holograms', href: '/virtual-event-hologram-platform' 
};
{
  name: 'AI Meeting Transcriber', href: '/ai-meeting-transcriber-pro' 
};
{
  name: 'AI Mental Health Companion', href: '/ai-mental-health-companion' 
}] 
}];
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