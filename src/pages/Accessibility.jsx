import React from 'react';
import {

  Accessibility as AccessibilityIcon,
  Eye,
  Ear,
  Hand,
  Brain,
  CheckCircle,
  Info,
  Download,
  Mail,
  Phone,
  Globe,
  Users,
  Shield,'
  Heart} from 'lucide-react';

export default function Accessibility() {
  const accessibilityFeatures = [
    {

      icon: <Eye className="w-8 h-8" />,'
      title: 'Visual Accessibility',
      description:'
        'Support for screen readers, high contrast modes, and text scaling',
      features: ['
        'Screen reader compatibility (NVDA, JAWS, VoiceOver)','
        'High contrast color schemes','
        'Adjustable text sizes (up to 200%)','
        'Alternative text for images','
        'Keyboard navigation support','
        'Focus indicators and landmarks',
      ]},
    {
"
      icon: <Ear className="w-8 h-8" />,'
      title: 'Auditory Accessibility',
      description:'
        'Captions, transcripts, and audio alternatives for multimedia content',
      features: ['
        'Closed captions for videos','
        'Audio descriptions for visual content','
        'Transcripts for audio content','
        'Volume controls and audio indicators','
        'Visual alerts and notifications',
      ]},
    {
"
      icon: <Hand className="w-8 h-8" />,'
      title: 'Motor Accessibility',
      description:'
        'Keyboard navigation, voice control, and assistive technology support',
      features: ['
        'Full keyboard navigation','
        'Voice control compatibility','
        'Switch device support','
        'Customizable click targets','
        'Gesture alternatives','
        'Timing adjustments',
      ]},
    {
"
      icon: <Brain className="w-8 h-8" />,'
      title: 'Cognitive Accessibility',
      description:'
        'Clear navigation, consistent design, and simplified interfaces',
      features: ['
        'Clear and simple language','
        'Consistent navigation patterns','
        'Logical content structure','
        'Error prevention and recovery','
        'Help and support resources','
        'Minimal distractions',
      ]},
  ];

  const complianceStandards = [
    {
'
      name: 'WCAG 2.1 AA',
      description:'
        'Web Content Accessibility Guidelines 2.1 Level AA compliance','
      status: 'Compliant',"
      icon: <CheckCircle className="w-6 h-6 text-green-500" />},
    {
'
      name: 'Section 508',
      description:'
        'Federal accessibility requirements for electronic and information technology','
      status: 'Compliant',"
      icon: <CheckCircle className="w-6 h-6 text-green-500" />},
    {
'
      name: 'ADA Title III','
      description: 'Americans with Disabilities Act accessibility requirements','
      status: 'Compliant',"
      icon: <CheckCircle className="w-6 h-6 text-green-500" />},
    {
'
      name: 'EN 301 549',
      description:'
        'European accessibility requirements for ICT products and services','
      status: 'Compliant',"
      icon: <CheckCircle className="w-6 h-6 text-green-500" />},
  ];

  const accessibilityTools = [
    {
'
      title: 'Accessibility Checker','
      description: 'Built-in tool to identify and fix accessibility issues','
      link: '/accessibility-checker',"
      icon: <CheckCircle className="w-6 h-6" />},
    {
'
      title: 'High Contrast Mode','
      description: 'Toggle high contrast color schemes for better visibility','
      link: '/high-contrast',"
      icon: <Eye className="w-6 h-6" />},
    {
'
      title: 'Text Size Adjuster','
      description: 'Increase or decrease text size for better readability','
      link: '/text-size',"
      icon: <Info className="w-6 h-6" />},
    {
'
      title: 'Keyboard Navigation Guide','
      description: 'Learn how to navigate using only your keyboard','
      link: '/keyboard-guide',"
      icon: <Hand className="w-6 h-6" />},
  ];

  const assistiveTechnologies = [
    {
'
      name: 'Screen Readers','
      description: 'NVDA, JAWS, VoiceOver, TalkBack',"
      icon: <Eye className="w-6 h-6" />},
    {
'
      name: 'Voice Control','
      description: 'Dragon NaturallySpeaking, Voice Control',"
      icon: <Ear className="w-6 h-6" />},
    {
'
      name: 'Switch Devices','
      description: 'Head pointers, eye trackers, sip-and-puff',"
      icon: <Hand className="w-6 h-6" />},
    {
'
      name: 'Magnification Software','
      description: 'ZoomText, Magnifier, built-in OS tools',"
      icon: <Eye className="w-6 h-6" />},
  ];

  const contactInfo = [
    {
'
      title: 'Accessibility Support','
      email: 'accessibility@ziontechgroup.com','
      phone: '+1 302 464 0950','
      responseTime: '24-48 hours'},
    {
'
      title: 'Technical Support','
      email: 'support@ziontechgroup.com','
      phone: '+1 302 464 0950','
      responseTime: '2-4 hours'},
  ];

  return ("
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}"
      <section className="relative overflow-hidden py-20 lg:py-32">"
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10"></div>"
        <div className="container mx-auto px-4 relative z-10">"
          <div className="text-center max-w-4xl mx-auto">"
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-full border border-blue-400/30 mb-6">"
              <AccessibilityIcon className="w-5 h-5 text-blue-400 mr-2" />"
              <span className="text-blue-300 font-medium">Accessibility</span>
            </div>
"
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">"
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-green-600 bg-clip-text text-transparent">
                Accessibility
              </span>
              <br />"
              <span className="text-white">Statement</span>
            </h1>
"
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We are committed to ensuring digital accessibility for people with
              disabilities. We are continually improving the user experience for
              everyone and applying the relevant accessibility standards.
            </p>
          </div>
        </div>
      </section>

      {/* Accessibility Features */}"
      <section className="py-20">"
        <div className="container mx-auto px-4">"
          <div className="text-center mb-16">"
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Accessibility Features
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform includes comprehensive accessibility features to
              ensure an inclusive experience for all users.
            </p>
          </div>
"
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {accessibilityFeatures.map((feature, index) => (
              <div
                key={index}"
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-blue-400/30 transition-all duration-300"
              >"
                <div className="flex items-center mb-6">"
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-lg flex items-center justify-center mr-4">
                    {feature.icon}
                  </div>
                  <div>"
                    <h3 className="text-xl font-semibold text-white">
                      {feature.title}
                    </h3>"
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
"
                <ul className="space-y-3">
                  {feature.features.map((item, itemIndex) => ("
                    <li key={itemIndex} className="flex items-start">"
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />"
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}"
      <section className="py-20 bg-slate-800/30">"
        <div className="container mx-auto px-4">"
          <div className="text-center mb-16">"
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Compliance Standards
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We adhere to international accessibility standards and guidelines
              to ensure our platform meets the highest accessibility
              requirements.
            </p>
          </div>
"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceStandards.map((standard, index) => (
              <div
                key={index}"
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-400/30 transition-all duration-300"
              >"
                <div className="flex items-center mb-4">
                  {standard.icon}"
                  <span className="ml-2 px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                    {standard.status}
                  </span>
                </div>"
                <h3 className="text-lg font-semibold text-white mb-2">
                  {standard.name}
                </h3>"
                <p className="text-gray-400 text-sm">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessibility Tools */}"
      <section className="py-20">"
        <div className="container mx-auto px-4">"
          <div className="text-center mb-16">"
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Accessibility Tools
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built-in tools and features to help you customize your experience
              and access our platform more effectively.
            </p>
          </div>
"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accessibilityTools.map((tool, index) => (
              <div
                key={index}"
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-400/30 transition-all duration-300"
              >"
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  {tool.icon}
                </div>"
                <h3 className="text-lg font-semibold text-white mb-2">
                  {tool.title}
                </h3>"
                <p className="text-gray-400 text-sm mb-4">{tool.description}</p>
                <a
                  href={tool.link}"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium"
                >
                  Learn More"
                  <Info className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assistive Technologies */}"
      <section className="py-20 bg-slate-800/30">"
        <div className="container mx-auto px-4">"
          <div className="text-center mb-16">"
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Supported Assistive Technologies
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform is compatible with a wide range of assistive
              technologies to support users with different accessibility needs.
            </p>
          </div>
"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {assistiveTechnologies.map((tech, index) => (
              <div
                key={index}"
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-400/30 transition-all duration-300"
              >"
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  {tech.icon}
                </div>"
                <h3 className="text-lg font-semibold text-white mb-2">
                  {tech.name}
                </h3>"
                <p className="text-gray-400 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}"
      <section className="py-20">"
        <div className="container mx-auto px-4">"
          <div className="text-center mb-16">"
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Get Help & Support
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Need assistance with accessibility features or have feedback? Our
              accessibility team is here to help.
            </p>
          </div>
"
          <div className="max-w-4xl mx-auto">"
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contactInfo.map((contact, index) => (
                <div
                  key={index}"
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-blue-400/30 transition-all duration-300"
                >"
                  <h3 className="text-xl font-semibold text-white mb-6">
                    {contact.title}
                  </h3>
"
                  <div className="space-y-4">"
                    <div className="flex items-center">"
                      <Mail className="w-5 h-5 text-blue-400 mr-3" />"
                      <span className="text-gray-300">{contact.email}</span>
                    </div>"
                    <div className="flex items-center">"
                      <Phone className="w-5 h-5 text-blue-400 mr-3" />"
                      <span className="text-gray-300">{contact.phone}</span>
                    </div>"
                    <div className="flex items-center">"
                      <Info className="w-5 h-5 text-blue-400 mr-3" />"
                      <span className="text-gray-300">
                        Response time: {contact.responseTime}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
'"