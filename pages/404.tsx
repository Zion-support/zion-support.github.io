:pages/NotFound.tsx
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

import {
  Home,
  ArrowLeft,
  Phone,
  Mail,
  FileText,
  Briefcase,
  Users,
  BookOpen,
  DollarSign { name: 'Services', url: '/services', icon: Briefcase }, { name: 'Solutions', url: '/solutions', icon: Award }, { name: 'About', url: '/about', icon: Users }, { name: 'Contact', url: '/contact', icon: Phone }, { name: 'Blog', url: '/blog', icon: BookOpen }, { name: 'Careers', url: '/careers', icon: Briefcase }, { name: 'Pricing Guide', url: '/pricing-guide', icon: DollarSign }, { name: 'Help Center', url: '/help', icon: FileText },

    { name: 'Privacy Policy', url: '/privacy', icon: Shield } ];


  return (
:pages/NotFound.tsx
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Error */}
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-9xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text">
              404
            </h1>
          </motion.div>
          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >

            </p>
          </motion.div>
          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => (window.location.href = '/')}
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Button>
          </motion.div>
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Popular Pages
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={link.url}
                    href={link.url}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="flex flex-col items-center p-4 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors group"
                  >
                    <link.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 mb-2" />
                    <span className="text-gray-300 group-hover:text-white text-sm text-center">
                      {link.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </Card>
          </motion.div>
          {/* Help Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-12"
          >
            <div className="bg-slate-800/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Still Need Help?
              </h3>
              <p className="text-gray-300 mb-6">
                If you can&apos;t find what you&apos;re looking for, our team is
                here to help.
              </p>

                >
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Support
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )};

export default NotFound;

