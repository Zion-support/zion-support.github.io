import { useTranslation } from 'react-i18next';

export default function EnhancedFooter() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900/95 backdrop-blur-md border-t border-gray-700/50">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Rocket className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-gray-400">Future Technology Solutions</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading the future with revolutionary AI consciousness, quantum computing, emerging technologies, and innovative micro SAAS solutions that transform businesses worldwide.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                  <Phone className="w-4 h-4" />
                  <a href={`tel:${contactInfo.mobile}`} className="text-sm">{contactInfo.mobile}</a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                  <Mail className="w-4 h-4" />
                  <a href={`mailto:${contactInfo.email}`} className="text-sm">{contactInfo.email}</a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Service Categories */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {serviceCategories.slice(0, 4).map((category, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                        <category.icon className="w-5 h-5" />
                      </div>
                      <h5 className="text-sm font-medium text-white">{category.name}</h5>
                    </div>
                    <ul className="space-y-2">
                      {category.services.slice(0, 3).map((service, serviceIndex) => (
                        <li key={serviceIndex}>
                          <Link 
                            href={service.href}
                            className="text-xs text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                          >
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              
              {/* Company Links */}
              <div className="mb-6">
                <h5 className="text-sm font-medium text-gray-300 mb-3">Company</h5>
                <ul className="space-y-2">
                  {companyLinks.slice(0, 4).map((link, index) => (
                    <li key={index}>
                      <Link 
                        href={link.href}
                        className="text-xs text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support Links */}
              <div>
                <h5 className="text-sm font-medium text-gray-300 mb-3">Support</h5>
                <ul className="space-y-2">
                  {supportLinks.slice(0, 4).map((link, index) => (
                    <li key={index}>
                      <Link 
                        href={link.href}
                        className="text-xs text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Additional Service Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-700/50"
        >
          <h4 className="text-lg font-semibold text-white mb-6 text-center">Advanced Technology Services</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.slice(4).map((category, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                    <category.icon className="w-5 h-5" />
                  </div>
                  <h5 className="text-sm font-medium text-white">{category.name}</h5>
                </div>
                <ul className="space-y-2">
                  {category.services.slice(0, 3).map((service, serviceIndex) => (
                    <li key={serviceIndex}>
                      <Link 
                        href={service.href}
                        className="text-xs text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <p className="text-sm text-gray-400">
                © {currentYear} Zion Tech Group. All rights reserved. | 
                <Link href="/privacy" className="ml-2 hover:text-cyan-400 transition-colors duration-200">
                  Privacy Policy
                </Link> | 
                <Link href="/terms" className="ml-2 hover:text-cyan-400 transition-colors duration-200">
                  Terms of Service
                </Link>
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/40"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      {/* Sticky mobile action bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/90 dark:bg-black/80 backdrop-blur border-t border-gray-200 dark:border-gray-800 md:hidden">
        <div className="max-w-screen-sm mx-auto px-4">
          <nav className="grid grid-cols-3 gap-2 py-2 text-sm">
            <Link href="/jobs/post">
              <a className="flex flex-col items-center justify-center py-2 rounded-md active:scale-[0.98] transition">
                <span className="text-xs">Post Job</span>
              </a>
            </Link>
            <Link href="/dashboard">
              <a className="flex flex-col items-center justify-center py-2 rounded-md active:scale-[0.98] transition">
                <span className="text-xs">Dashboard</span>
              </a>
            </Link>
            <Link href="/messages">
              <a className="flex flex-col items-center justify-center py-2 rounded-md active:scale-[0.98] transition">
                <span className="text-xs">Messages</span>
              </a>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default EnhancedFooter;
