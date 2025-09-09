import React from 'react';

export default function UltraFuturisticFooter2034() {
  return (
    <footer className="relative bg-black/95 backdrop-blur-xl border-t border-cyan-500/30 overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-7 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 xl:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur-lg opacity-50" />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
                <p className="text-sm text-gray-400">Future Technology Solutions</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Pioneering the future of autonomous technology and AI-driven innovation. 
              We deliver cutting-edge solutions that transform businesses and accelerate growth.
            </p>

            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors duration-200">
                  {contactInfo.mobile}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors duration-200">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                <Globe className="w-4 h-4 text-cyan-400" />
                <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-200">
                  {contactInfo.website.replace('https://', '')}
                </a>
              </div>
            </div>
          </div>

          {/* Service Categories */}
          {serviceCategories.map((category, index) => (
            <div key={category.title} className="xl:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                {category.icon}
                <h4 className="text-lg font-semibold text-white">{category.title}</h4>
              </div>
              <ul className="space-y-2">
                {category.services.slice(0, 6).map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm hover:translate-x-1 transform transition-transform duration-200 flex items-center space-x-2"
                    >
                      <div className="w-1 h-1 bg-cyan-400 rounded-full" />
                      <span>{service.name}</span>
                    </Link>
                  </li>
                ))}
                {category.services.length > 6 && (
                  <li>
                    <Link
                      href={`/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm flex items-center space-x-2 group"
                    >
                      <span>View All {category.title}</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        {/* Quick Actions & Social */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Quick Actions */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span>Quick Actions</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {quickActions.map((action) => (
                <Link
                  key={action.name}
                  href={action.href}
                  className={`flex items-center justify-center space-x-2 px-4 py-3 text-sm font-medium text-white rounded-lg bg-gradient-to-r ${action.color} hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl`}
                >
                  {action.icon}
                  <span>{action.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
              <Globe className="w-5 h-5 text-cyan-400" />
              <span>Connect With Us</span>
            </h4>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center w-12 h-12 bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:scale-110 group ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Company & Support Links */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
              <Crown className="w-5 h-5 text-cyan-400" />
              <span>Company</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {companyLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm hover:translate-x-1 transform transition-transform duration-200 flex items-center space-x-2"
                >
                  <div className="w-1 h-1 bg-cyan-400 rounded-full" />
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
              <HelpCircle className="w-5 h-5 text-cyan-400" />
              <span>Support</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {supportLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm hover:translate-x-1 transform transition-transform duration-200 flex items-center space-x-2"
                >
                  <div className="w-1 h-1 bg-cyan-400 rounded-full" />
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700/50">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved. | 
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors duration-200 ml-2">Privacy Policy</Link> | 
              <Link href="/terms" className="hover:text-cyan-400 transition-colors duration-200 ml-2">Terms of Service</Link>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-cyan-400" />
                <span>1000+ Clients</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>99.9% Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
