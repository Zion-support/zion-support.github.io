<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook, ArrowRight } from 'lucide-react';
=======
ursor/automate-test-fix-improve-and-merge-code-48f3
return (    <footer className='bg-gray-900 text-white'    />
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7

const EnhancedFooter: React.FC = () => {;
  const currentYear = new Date().getFullYear();

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Globe;
  Twitter, Linkedin, Facebook, Instagram;
  ArrowRight, Rocket, Brain, Cpu, Shield;
  Star, Users, TrendingUp, Zap
 } from 'lucide-react';
const contactInfo = null;
  ];

  const company = null;
  ];

  const resources = null;
  ];

  const socialLinks = null;

const EnhancedFooter: React.FC = () => {const currentYear = new Date().getFullYear();
import React from 'react';
import { motion } from 'framer-motion';
import {
  Phone, Mail, MapPin, Globe
  Twitter, Linkedin, Facebook, Instagram
  ArrowRight, Rocket, Brain, Cpu, Shield
  Star, Users, TrendingUp, Zap
} from 'lucide-react'
const contactInfo = {
  mobile: '+1 302 464 0950'
  email: 'kleber@ziontechgroup.com'
  address: '364 E Main St STE 1008 Middletown DE 19709'
  website: 'https://ziontechgroup.com'
}
const serviceCategories = [
  {
    title: 'Next-Generation AI'
    services: [
      { name: 'AI Multimodal Fusion', href: '/ai-multimodal-fusion-platform' }
      { name: 'AI Autonomous Decision Engine', href: '/ai-autonomous-decision-engine' }
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-platform' }
      { name: 'AI Quantum Hybrid Computing', href: '/ai-quantum-hybrid-computing' }
    ]
  }
  {
    title: 'Cutting-Edge IT'
    services: [
      { name: 'Zero Trust Architecture', href: '/zero-trust-network-architecture' }
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration' }
      { name: '5G Private Networks', href: '/5g-private-network-solutions' }
      { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform' }
    ]
  }
  {
    title: 'Innovative SaaS'
    services: [
      { name: 'AI Brand Personality', href: '/ai-brand-personality-generator' }
      { name: 'Virtual Event Holograms', href: '/virtual-event-hologram-platform' }
      { name: 'AI Meeting Transcriber', href: '/ai-meeting-transcriber-pro' }
      { name: 'AI Mental Health Companion', href: '/ai-mental-health-companion' }
    ]
  }
]
const companyLinks = [
  { name: 'About Us', href: '/about' }
  { name: 'Careers', href: '/careers' }
  { name: 'News', href: '/news' }
  { name: 'Case Studies', href: '/case-studies' }
  { name: 'Blog', href: '/blog' }
  { name: 'Resources', href: '/resources' }
]
const supportLinks = [
  { name: 'Contact Support', href: '/contact' }
  { name: 'Documentation', href: '/docs' }
  { name: 'API Reference', href: '/api' }
  { name: 'Status Page', href: '/status' }
  { name: 'Security', href: '/security' }
  { name: 'Privacy Policy', href: '/privacy' }
]
const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/zion-tech-group', icon: Linkedin }
  { name: 'Instagram', href: 'https://www.instagram.com/ziontechgroup', icon: Instagram }
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Globe }]
export default function EnhancedFooter() {
  const currentYear = new Date().getFullYear()
  const services = [
    { name: 'AI Services', href: '/ai-services' }
    { name: 'IT Services', href: '/it-services' }
    { name: 'Blockchain Solutions', href: '/blockchain-solutions' }
    { name: 'Micro SaaS', href: '/micro-saas' }
    { name: 'Security', href: '/security' }
    { name: 'Case Studies', href: '/case-studies' }
  ];
  const company = [
    { name: 'About Us', href: '/about' }
    { name: 'Our Team', href: '/team' }
    { name: 'Careers', href: '/careers' }
    { name: 'News', href: '/news' }
    { name: 'Partners', href: '/partners' }
  ];
  const resources = [
    { name: 'Blog', href: '/blog' }
    { name: 'Documentation', href: '/docs' }
    { name: 'Support', href: '/support' }
    { name: 'FAQ', href: '/faq' }
  ];
  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech-group', icon: Linkedin }
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter }
    { name: 'GitHub', href: 'https://github.com/zion-tech-group', icon: Github }

  ];

  return (
    <footer className;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 bg-gray-800/50 border border-gray-700/50 rounded-lg flex items-center justify-center text-gray-400 hover: text-cyan-400 hover:border-cyan-500/50 transition-all duration-200"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 pt-12 border-t border-gray-700/50"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Latest Innovations
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Get exclusive insights into the latest AI, quantum computing, and IT innovations. 
              Be the first to know about new services and breakthrough technologies.
            </p>
            <div className='flex space-x-4'    />
              <a href='https: //linkedin.com' target='_blank' rel='noopener noreferrer' className='text-gray-300 hover:text-blue-400 transition-colors'    />
                <Linkedin className='w-5 h-5'    />
              </a>
              <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='text-gray-300 hover:text-blue-400 transition-colors'    />
                <Twitter className='w-5 h-5'    />
              </a>
              <a href='https://github.com' target='_blank' rel='noopener noreferrer' className='text-gray-300 hover:text-blue-400 transition-colors'    />
                <Github className='w-5 h-5'    />
              </a>
              <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='text-gray-300 hover:text-blue-400 transition-colors'    />
                <Facebook className='w-5 h-5'    />
              </a>
            </div>
          </div>
          {/* Services */}
          <div    />
            <h3 className='text-lg font-semibold mb-4'    />Services</h3>
            <ul className='space-y-2'    />
              <li    />
                <Link href='/services/ai-services' className='text-gray-300 hover:text-white transition-colors'    />
                  AI Services
                </Link>              </li>
              <li    />
                <Link href='/services/it-services' className='text-gray-300 hover:text-white transition-colors'    />
                  IT Services
                </Link>
              </li>
              <li    />
                <Link href='/services/micro-saas' className='text-gray-300 hover:text-white transition-colors'    />
                  Micro SaaS
                </Link>
              </li>
              <li    />
                <Link href='/services/ai-ops-copilot' className='text-gray-300 hover:text-white transition-colors'    />
                  AI Ops Copilot
                </Link>
              </li>
              <li    />
                <Link href='/services/security-copilot' className='text-gray-300 hover:text-white transition-colors'    />
                  Security Copilot
                </Link>
              </li>
              <li    />
                <Link href='/services/data-platform' className='text-gray-300 hover:text-white transition-colors'    />
                  Data Platform
                </Link>
              </li>
              <li    />
                <Link href='/services/martech-automation' className='text-gray-300 hover:text-white transition-colors'    />
                  MarTech Automation
                </Link>
              </li>
            </ul>
          </div>
          {/* Solutions */}
          <div    />
            <h3 className='text-lg font-semibold mb-4'    />Solutions</h3>
            <ul className='space-y-2'    />
              <li    />
                <Link href='/solutions/enterprise' className='text-gray-300 hover:text-white transition-colors'    />
                  Enterprise Solutions
                </Link>              </li>
              <li    />
                <Link href='/solutions/small-business' className='text-gray-300 hover:text-white transition-colors'    />
                  Small Business
                </Link>
              </li>
              <li    />
                <Link href='/solutions/startups' className='text-gray-300 hover:text-white transition-colors'    />
                  Startups
                </Link>
              </li>
              <li    />
                <Link href='/solutions' className='text-gray-300 hover:text-white transition-colors'    />
                  Solutions Overview
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div    />
            <h3 className='text-lg font-semibold mb-4'    />Company</h3>
            <ul className='space-y-2 mb-6'    />
              <li    />
                <Link href='/about' className='text-gray-300 hover:text-white transition-colors'    />
                  About Us
                </Link>              </li>
              <li    />
                <Link href='/careers' className='text-gray-300 hover:text-white transition-colors'    />
                  Careers
                </Link>
              </li>
              <li    />
                <Link href='/blog' className='text-gray-300 hover:text-white transition-colors'    />
                  Blog
                </Link>
              </li>
              <li    />
                <Link href='/products' className='text-gray-300 hover:text-white transition-colors'    />
                  Products
                </Link>
              </li>
            </ul>
            <h3 className='text-lg font-semibold mb-4'    />Contact</h3>
            <div className='space-y-3'    />
              <div className='flex items-center space-x-2'    />
                <Mail className='w-4 h-4 text-blue-400'    />
                <a href='mailto:info@ziontechgroup.com' className='text-gray-300 hover:text-white transition-colors'    />
                  info@ziontechgroup.com
                </a>
              </div>
              <div className='flex items-center space-x-2'    />
                <Phone className='w-4 h-4 text-blue-400'    />
                <span className='text-gray-300'    />+1 (555) 123-4567</span>
              </div>
              <div className='flex items-start space-x-2'    />
                <MapPin className='w-4 h-4 text-blue-400 mt-1'    />
                <span className='text-gray-300'    />123 Tech Street<br    />San Francisco, CA 94105</span>
              </div>
            </div>
          </div>
        </div>
      {/* Newsletter Section */}
      <div className='border-t border-gray-700 py-8'    />
        <div className='container mx-auto px-4'    />
          <div className='text-center'    />
            <h3 className='text-lg font-semibold mb-2'    />Stay Updated</h3>
            <p className='text-gray-300 mb-4'    />Subscribe to our newsletter for the latest tech insights and updates.</p>
            <div className='flex max-w-md mx-auto'    />
              <input
                type='email'
                placeholder='Enter your email'
                className='flex-1 px-4 py-2 rounded-l-lg text-gray-900 focus: outline-none focus:ring-2 focus:ring-blue-500'
                 />
              <button className='bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-r-lg font-semibold transition-colors'    />
                Subscribe
              </button>
            </div>          </div>
        </div>
      </div>
      {/* Bottom Footer */}

      <div className = 'border-t border-gray-700 py-6'    />
        <div className='container mx-auto px-4'    />
          <div className='flex flex-col md: flex-row justify-between items-center'    />
            <p className='text-gray-300 text-sm'    />
              &copy 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className='flex space-x-6 mt-4 md:mt-0'    />
              <Link href='/privacy' className='text-gray-300 hover:text-white text-sm transition-colors'    />
                Privacy Policy
              </Link>
              <Link href='/terms' className='text-gray-300 hover:text-white text-sm transition-colors'    />
                Terms of Service
              </Link>
              <Link href='/sitemap' className='text-gray-300 hover:text-white text-sm transition-colors'    />
                Sitemap
              </Link>
            </div>          </div>
        </div>
      </div>
    </footer>
  )

  const EnhancedFooter: React.FC = () => {
const currentYear = new Date().getFullYear()
const company = null
]
const EnhancedFooter: React.FC = () => {
  const currentYear = new Date().getFullYear()
  const company = null
  ]
  const resources = null
  ]
  const socialLinks = null
          {" "}
          {/* Company Info */}"
          <div className="space-y-4">"
            <div className="text-2xl font-bold text-blue-400 mb-4">
              Zion Tech Group
            </div>"
            <p className="text-gray-300 mb-6">
              Leading technology solutions provider helping businesses transform
              their digital presence."
    <footer className="bg-gray-900 text-white">;"
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">;"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;"
          {" "}
          {/* Company Info */}"
          <div className="space-y-4">;"
            <div className="text-2xl font-bold text-blue-400 mb-4">
              Zion Tech Group
            </div>;"
            <p className="text-gray-300 mb-6">
              Leading technology solutions provider helping businesses transform
              their digital presence.
            </p>;"
            <div className="flex space-x-4">
              <a"
                href="#""
                className="text-gray-400 hover:text-white transition-colors">;"
                <Linkedin className="h-5 w-5" />
              </a>
              <a"
                href="#""
                className="text-gray-400 hover:text-white transition-colors">;"
                <Twitter className="h-5 w-5" />
              </a>
              <a"
                href="#""
                className="text-gray-400 hover:text-white transition-colors">;"
                <Github className="h-5 w-5" />;'
import React from './react';'
import Link from './next / link';'
import { Mail, Phone, MapPin, Linkedin, Twitter, Github  } from './lucide-react'
const EnhancedFooter: React.FC = () => {}
  const current_year = new Date ().getFullYear ();'
import React from 'react','
import { motion } from 'framer-motion',
import {}
  Phone, Mail, MapPin, Globe,
  Twitter, Linkedin, Facebook, Instagram,
  ArrowRight, Rocket, Brain, Cpu, Shield,
  Star, Users, TrendingUp, Zap;'
} from 'lucide-react',
const contact_info = {'
  mobile: '+1 302 464 0950','
  email: 'kleber@ziontechgroup.com','
  address: '364 E Main St STE 1008 Middletown DE 19709','
  website: 'https://ziontechgroup.com'
},
  { name: 'IT Services'}
  href: '/it-services'}
},
  { name: 'Blockchain Solutions'}
  href: '/blockchain-solutions'}
},
  { name: 'Micro SaaS'}
  href: '/micro-saas'}
},
  { name: 'Security'}
  href: '/security'}
},
  { name: 'Case Studies'}
  href: '/case-studies'}

]
const company = [
  { name: 'About Us'}
  href: '/about'}

    { name: 'Our Team'}
  href: '/team'}

    { name: 'Careers'}
  href: '/careers'}

    { name: 'News'}
  href: '/news'}

    { name: 'Partners'}
  href: '/partners'}

  ]
const resources = [
  { name: 'Blog'}
  href: '/blog'}

    { name: 'Documentation'}
  href: '/docs'}

    { name: 'Support'}
  href: '/support'}

    { name: 'FAQ'}
  href: '/faq'}

  ]
const socialLinks = [
  { name: 'LinkedIn'}
  href: 'https://linkedin.com/company/zion-tech-group', icon: Linkedin}

    { name: 'Twitter'}
  href: 'https://twitter.com/ziontechgroup', icon: Twitter}

    { name: 'GitHub'}
  href: 'https://github.com/zion-tech-group', icon: Github}

  ]
  const company = [;'
    { name: 'About Us', href: '/about' },'
    { name: 'Our Team', href: '/team' },'
    { name: 'Careers', href: '/careers' },'
    { name: 'News', href: '/news' },'
    { name: 'Partners', href: '/partners' },
  ]
  const resources = [;'
    { name: 'Blog', href: '/blog' },'
    { name: 'Documentation', href: '/docs' },'
    { name: 'Support', href: '/support' },'
    { name: 'FAQ', href: '/faq' },
  ]
  const social_links = [;'
    { name: 'LinkedIn', href: 'https://linkedin.com / company / zion - tech - group', icon: Linkedin },'
    { name: 'Twitter', href: 'https://twitter.com / ziontechgroup', icon: Twitter },'
    { name: 'GitHub', href: 'https://github.com / zion - tech - group', icon: Github },
  ]
              </a>
            </div>
          </div>
          {/* Services */}
                  Web Development
                </Link>
              </li>
              <li    />
                  Mobile Apps
                </Link>
              </li>
              <li    />
                  AI Solutions
                </Link>
              </li>
              <li    />
                  Cloud Services
                </Link>
              </li>
            </ul>
          </div>
          {/* Company */}

              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
<<<<<<< HEAD
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
=======
}
export default EnhancedFooter;
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
