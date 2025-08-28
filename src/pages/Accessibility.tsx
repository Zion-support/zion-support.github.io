import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Accessibility, 
  Eye, 
  Ear, 
  MousePointer, 
  Keyboard, 
  Globe, 
  Mail, 
  Phone,
  MapPin,
  Calendar,
  CheckCircle,
  AlertTriangle,
  Shield,
  Info,
  Settings,
  Users,
  Heart
} from 'lucide-react';

const Accessibility: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const accessibilityFeatures = [
    {
      category: "Visual Accessibility",
      icon: Eye,
      features: [
        "High contrast mode",
        "Adjustable font sizes",
        "Screen reader compatibility",
        "Alternative text for images",
        "Color-blind friendly design"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Auditory Accessibility",
      icon: Ear,
      features: [
        "Closed captions for videos",
        "Audio descriptions",
        "Transcripts for audio content",
        "Volume controls",
        "Hearing aid compatibility"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Motor Accessibility",
      icon: MousePointer,
      features: [
        "Keyboard navigation",
        "Voice control support",
        "Large click targets",
        "Customizable timeouts",
        "Assistive technology support"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Cognitive Accessibility",
      icon: Heart,
      features: [
        "Clear navigation structure",
        "Consistent design patterns",
        "Readable typography",
        "Logical content flow",
        "Error prevention"
      ],
      color: "from-orange-500 to-red-500"
    }
  ];

  const complianceStandards = [
    {
      standard: "WCAG 2.1 AA",
      description: "Web Content Accessibility Guidelines 2.1 Level AA compliance",
      status: "Compliant",
      color: "from-green-500 to-emerald-500"
    },
    {
      standard: "Section 508",
      description: "Federal accessibility requirements for electronic and information technology",
      status: "Compliant",
      color: "from-green-500 to-emerald-500"
    },
    {
      standard: "ADA Title III",
      description: "Americans with Disabilities Act requirements for public accommodations",
      status: "Compliant",
      color: "from-green-500 to-emerald-500"
    },
    {
      standard: "EN 301 549",
      description: "European accessibility requirements for ICT products and services",
      status: "Compliant",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO 
        title="Accessibility - Zion Tech Group" 
        description="Zion Tech Group is committed to making our website and services accessible to everyone. Learn about our accessibility features and compliance." 
        keywords="accessibility, WCAG, ADA compliance, inclusive design, Zion Tech Group"
        canonicalUrl="https://ziontechgroup.com/accessibility"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">
                <Accessibility className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Accessibility
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              We believe technology should be accessible to everyone. Our commitment to accessibility 
              ensures that all users can access and benefit from our services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <Calendar className="w-6 h-6 text-cyan-400" />
                <span>Last Updated</span>
              </h2>
              <p className="text-gray-300">This Accessibility Statement was last updated on {currentYear}.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <Info className="w-6 h-6 text-cyan-400" />
                <span>Our Commitment</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>Zion Tech Group is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.</p>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Inclusive Design</h3>
                    <p>We design our products and services with accessibility in mind from the start.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Continuous Improvement</h3>
                    <p>We regularly review and enhance our accessibility features based on user feedback.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">User Feedback</h3>
                    <p>We welcome feedback from users with disabilities to help us improve accessibility.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <Settings className="w-6 h-6 text-cyan-400" />
                <span>Accessibility Features</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {accessibilityFeatures.map((category, index) => (
                  <div key={index} className="border border-cyan-400/20 rounded-xl p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">{category.category}</h3>
                    </div>
                    <ul className="space-y-2">
                      {category.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <Shield className="w-6 h-6 text-cyan-400" />
                <span>Compliance Standards</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>Our website and services comply with international accessibility standards to ensure the highest level of accessibility for all users.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {complianceStandards.map((standard, index) => (
                    <div key={index} className="border border-cyan-400/20 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-white">{standard.standard}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${standard.color} text-white`}>
                          {standard.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400">{standard.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <Keyboard className="w-6 h-6 text-cyan-400" />
                <span>Keyboard Navigation</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>Our website supports full keyboard navigation for users who cannot use a mouse or prefer keyboard-only navigation.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">Tab Navigation</h3>
                      <p>Use Tab to navigate through interactive elements in logical order.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">Enter/Space</h3>
                      <p>Use Enter or Space to activate buttons and form controls.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">Arrow Keys</h3>
                      <p>Use arrow keys to navigate through dropdown menus and lists.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">Escape Key</h3>
                      <p>Use Escape to close modals and dropdown menus.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <Eye className="w-6 h-6 text-cyan-400" />
                <span>Visual Accessibility</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">High Contrast Mode</h3>
                      <p>Toggle high contrast mode for better visibility and reduced eye strain.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">Font Size Adjustment</h3>
                      <p>Increase or decrease text size using browser zoom or our built-in controls.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">Alternative Text</h3>
                      <p>All images include descriptive alternative text for screen readers.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">Color Independence</h3>
                      <p>Information is not conveyed solely through color, ensuring accessibility for color-blind users.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <Users className="w-6 h-6 text-cyan-400" />
                <span>Assistive Technology Support</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>Our website is designed to work seamlessly with various assistive technologies.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">Screen Readers</h3>
                      <p>Compatible with JAWS, NVDA, VoiceOver, and other screen readers.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">Voice Control</h3>
                      <p>Support for voice control software like Dragon NaturallySpeaking.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">Switch Devices</h3>
                      <p>Compatible with switch devices for users with limited mobility.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">Braille Displays</h3>
                      <p>Support for refreshable braille displays and braille output.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <AlertTriangle className="w-6 h-6 text-yellow-400" />
                <span>Known Limitations</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>While we strive for comprehensive accessibility, we acknowledge some areas may have limitations:</p>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Third-Party Content</h3>
                    <p>Some third-party integrations may not be fully accessible. We work with providers to improve accessibility.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Legacy Content</h3>
                    <p>Older content may not meet current accessibility standards. We are actively updating these materials.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Continuous Improvement</h3>
                    <p>We are committed to identifying and addressing accessibility barriers as technology evolves.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <Mail className="w-6 h-6 text-cyan-400" />
                <span>Contact Us</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>We welcome your feedback on accessibility. If you experience accessibility barriers or have suggestions for improvement, please contact us:</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <span>Email: <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <span>Phone: <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a></span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                    <span>Address: 364 E Main St STE 1008, Middletown DE 19709</span>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-400">
                  We aim to respond to accessibility feedback within 2 business days and will work with you to address any concerns.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accessibility;

