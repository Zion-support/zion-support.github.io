import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, Zap, Brain, Atom, 
];

const serviceCategories = [
  {
    services: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-platform' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-platform' },
      { name: 'AI Creativity Orchestrator', href: '/ai-creativity-orchestrator' },
      { name: 'AI Autonomous Business Manager', href: '/ai-autonomous-business-manager' }
  {
    title: '🏙️ 2032 Enterprise IT Solutions',
    services: [
      { name: 'Autonomous DevOps', href: '/autonomous-devops-platform' },
      { name: 'Zero Trust Architecture', href: '/zero-trust-network-architecture' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration' },
      { name: 'AI IT Operations Center', href: '/ai-powered-it-operations-center' }
      { name: 'Swarm Robotics', href: '/swarm-robotics-orchestration' }
    ]
  }
];
  { name: 'About Us', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'Press', href: '/press' },
  { name: 'Partners', href: '/partners' },
  { name: 'Support', href: '/support' },
  { name: 'Status', href: '/status' }
];


const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
            {/* Company Info */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
                  <Rocket className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-cyan-300 font-medium">2032 Future Technology</p>
                </div>
              </div>
              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-slate-300 hover:text-cyan-300 transition-colors">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-300 transition-colors">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-slate-300 hover:text-cyan-300 transition-colors">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-300 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>{contactInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300 hover:text-cyan-300 transition-colors">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors">
                    {contactInfo.website}
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="lg:col-span-2">
              <h3 className="text-xl font-semibold text-white mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Our Revolutionary Services
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {serviceCategories.map((category, index) => (
                  <div key={index} className="space-y-4">
                    <h4 className="text-lg font-medium text-white">{category.title}</h4>
                    <ul className="space-y-2">
                      {category.services.map((service, serviceIndex) => (
                        <li key={serviceIndex}>
                          <Link
                            href={service.href}
                            className="text-slate-300 hover:text-cyan-300 transition-colors duration-200 text-sm hover:translate-x-1 inline-block transform transition-transform"
                          >
                            {service.name}
                          </Link>
                        </li>
              {/* Quick Links */}
              <div className="mb-8">
                <h4 className="text-lg font-medium text-white mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                  {companyInfo.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-slate-300 hover:text-purple-300 transition-colors duration-200 text-sm"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-medium text-white mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-lg flex items-center justify-center text-cyan-400 hover:text-cyan-300 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20"
                    >
                      <social.icon className="w-5 h-5" />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center text-white"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowRight className="w-6 h-6 transform rotate-[-90deg]" />
        </motion.button>
      </div>
    </footer>
