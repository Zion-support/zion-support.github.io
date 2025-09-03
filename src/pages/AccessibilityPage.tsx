import React from 'react';
import { Link } from 'react-router-dom';
import { ;
  Accessibility,
  Eye,
  Ear,
  Hand,
  Brain,
  CheckCircle,
  ArrowRight,
  Shield,
  Globe,
  Users,
  Settings,
  Monitor,
  Smartphone,
  Volume2,
  Type,
  Contrast,
  ZoomIn,
  Keyboard,
  Mouse,
  Touchpad,
  Headphones,
  Braille,
  FileText,
  Mail,
  Phone,
  Award,
  Star,
  Heart,
  Lightbulb,
  Target,
  Zap;
} from 'lucide-react';
export function AccessibilityPage() {;
  const accessibilityFeatures = [;
    {;
      icon: Eye,
      title: 'Visual Accessibility',
      description: 'Support for users with visual impairments including screen readers, high contrast modes, and text scaling.',
      features: [;
        'Screen reader compatibility',
        'High contrast color schemes',
        'Text scaling up to 200%',
        'Alternative text for images',
        'Keyboard navigation support',
        'Focus indicators';
      ];
},
    {;
      icon: Ear,
      title: 'Auditory Accessibility',
      description: 'Features for users with hearing impairments including captions, transcripts, and visual indicators.',
      features: [;
        'Video captions and transcripts',
        'Visual audio indicators',
        'Text-based alternatives',
        'Sign language support',
        'Audio descriptions',
        'Volume controls';
      ];
},
    {;
      icon: Hand,
      title: 'Motor Accessibility',
      description: 'Support for users with motor impairments including keyboard navigation, voice control, and assistive technologies.',
      features: [;
        'Full keyboard navigation',
        'Voice control support',
        'Switch navigation',
        'Large click targets',
        'Customizable timing',
        'Assistive device support';
      ];
},
    {;
      icon: Brain,
      title: 'Cognitive Accessibility',
      description: 'Features to support users with cognitive disabilities including clear navigation, consistent design, and simplified content.',
      features: [;
        'Clear and simple language',
        'Consistent navigation',
        'Error prevention',
        'Help and support',
        'Progress indicators',
        'Memory aids';
      ];
}
  ];
  const standards = [;
    {;
      name: 'WCAG 2.1 AA',
      description: 'Web Content Accessibility Guidelines 2.1 Level AA compliance',
      status: 'Compliant',
      icon: CheckCircle,
      details: 'Our website meets all WCAG 2.1 AA success criteria for accessibility.';
},
    {;
      name: 'Section 508',
      description: 'US Federal accessibility standards compliance',
      status: 'Compliant',
      icon: CheckCircle,
      details: 'Full compliance with Section 508 of the Rehabilitation Act.';
},
    {;
      name: 'ADA Compliance',
      description: 'Americans with Disabilities Act compliance',
      status: 'Compliant',
      icon: CheckCircle,
      details: 'Our digital properties meet ADA accessibility requirements.';
},
    {;
      name: 'EN 301 549',
      description: 'European accessibility standard compliance',
      status: 'Compliant',
      icon: CheckCircle,
      details: 'Compliance with European accessibility standards.';
}
  ];
  const assistiveTechnologies = [;
    {;
      name: 'Screen Readers',
      icon: Eye,
      description: 'Compatible with popular screen readers including NVDA, JAWS, and VoiceOver.',
      supported: ['NVDA', 'JAWS', 'VoiceOver', 'TalkBack', 'Orca'];
},
    {;
      name: 'Voice Control',
      icon: Volume2,
      description: 'Full support for voice control software and voice commands.',
      supported: ['Dragon NaturallySpeaking', 'Voice Control (macOS)', 'Voice Access (Android)'];
},
    {;
      name: 'Switch Navigation',
      icon: Touchpad,
      description: 'Support for switch-based navigation devices and assistive switches.',
      supported: ['Switch Access', 'Assistive Switches', 'Eye Tracking'];
},
    {;
      name: 'Magnification',
      icon: ZoomIn,
      description: 'Compatible with screen magnification software and browser zoom.',
      supported: ['ZoomText', 'MAGic', 'Browser Zoom', 'System Magnification'];
}
  ];
  const accessibilityTools = [;
    {;
      name: 'High Contrast Mode',
      icon: Contrast,
      description: 'Toggle high contrast mode for better visibility.',
      action: 'Enable High Contrast';
},
    {;
      name: 'Text Size',
      icon: Type,
      description: 'Increase or decrease text size for better readability.',
      action: 'Adjust Text Size';
},
    {;
      name: 'Keyboard Navigation',
      icon: Keyboard,
      description: 'Navigate the entire website using only the keyboard.',
      action: 'Learn Keyboard Shortcuts';
},
    {;
      name: 'Screen Reader',
      icon: Eye,
      description: 'Optimized for screen reader compatibility.',
      action: 'Screen Reader Guide';
}
  ];
  const keyboardShortcuts = [;
    { key: 'Tab', description: 'Navigate to next interactive element' },
    { key: 'Shift + Tab', description: 'Navigate to previous interactive element' },
    { key: 'Enter', description: 'Activate buttons and links' },
    { key: 'Space', description: 'Activate buttons and checkboxes' },
    { key: 'Escape', description: 'Close modals and menus' },
    { key: 'Arrow Keys', description: 'Navigate within menus and lists' },
    { key: 'Home', description: 'Go to beginning of page' },
    { key: 'End', description: 'Go to end of page' }
  ];
  return (;
    <div className="min-h-screen bg-zion-slate-dark">;
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-darker py-20">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center max-w-4xl mx-auto">;
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">;
              Accessibility Statement;
            </h1>;
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">;
              Zion Tech Group is committed to ensuring digital accessibility for all users. ;
              We strive to provide an inclusive experience that works for everyone, regardless of ability.;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <Link;
                to="/contact";
                className="bg-zion-cyan text-white px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors">;
                Report Accessibility Issue;
              </Link>;
              <Link;
                to="/accessibility-test";
                className="border-2 border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-colors">;
                Test Accessibility;
              </Link>;
            </div>;
          </div>;
        </div>;
      </section>;

      {/* Accessibility Features */}
      <section className="py-16 bg-zion-slate-darker">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center mb-12">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Accessibility Features;
            </h2>;
            <p className="text-zion-slate-light max-w-2xl mx-auto">;
              Our website includes comprehensive accessibility features to support users with diverse needs;
            </p>;
          </div>;

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
            {accessibilityFeatures.map((feature, index) => (;
              <div key={index} className="bg-zion-slate-dark border border-zion-purple/20 rounded-lg p-6 hover:border-zion-cyan/50 transition-all duration-300">;
                <div className="flex items-center space-x-4 mb-4">;
                  <feature.icon className="w-10 h-10 text-zion-cyan" />;
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>;
                </div>;
                <p className="text-zion-slate-light mb-4 leading-relaxed">;
                  {feature.description}
                </p>;

                <ul className="space-y-2">;
                  {feature.features.map((item, itemIndex) => (;
                    <li key={itemIndex} className="flex items-center space-x-2 text-sm text-zion-slate-light">;
                      <CheckCircle className="w-4 h-4 text-zion-cyan" />;
                      <span>{item}</span>;
                    </li>;
                  ))}
                </ul>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Standards Compliance */}
      <section className="py-16 bg-zion-slate-dark">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center mb-12">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Accessibility Standards;
            </h2>;
            <p className="text-zion-slate-light max-w-2xl mx-auto">;
              We comply with international accessibility standards and guidelines;
            </p>;
          </div>;

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;
            {standards.map((standard, index) => (;
              <div key={index} className="bg-zion-slate-darker border border-zion-purple/20 rounded-lg p-6 text-center hover:border-zion-cyan/50 transition-all duration-300">;
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">;
                  <standard.icon className="w-8 h-8 text-green-400" />;
                </div>;
                <h3 className="text-lg font-semibold text-white mb-2">{standard.name}</h3>;
                <p className="text-zion-slate-light text-sm mb-3">{standard.description}</p>;
                <div className="text-green-400 font-semibold mb-2">{standard.status}</div>;
                <p className="text-xs text-zion-slate-light">{standard.details}</p>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Assistive Technologies */}
      <section className="py-16 bg-zion-slate-darker">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center mb-12">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Assistive Technology Support;
            </h2>;
            <p className="text-zion-slate-light max-w-2xl mx-auto">;
              Our website is compatible with a wide range of assistive technologies;
            </p>;
          </div>;

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
            {assistiveTechnologies.map((tech, index) => (;
              <div key={index} className="bg-zion-slate-dark border border-zion-purple/20 rounded-lg p-6 hover:border-zion-cyan/50 transition-all duration-300">;
                <div className="flex items-center space-x-4 mb-4">;
                  <tech.icon className="w-10 h-10 text-zion-cyan" />;
                  <div>;
                    <h3 className="text-xl font-semibold text-white">{tech.name}</h3>;
                    <p className="text-zion-slate-light text-sm">{tech.description}</p>;
                  </div>;
                </div>;
                <div>;
                  <h4 className="text-sm font-semibold text-zion-cyan mb-2">Supported Technologies:</h4>;
                  <div className="flex flex-wrap gap-2">;
                    {tech.supported.map((item, itemIndex) => (;
                      <span key={itemIndex} className="text-xs bg-zion-blue-dark text-zion-cyan px-2 py-1 rounded">;
                        {item}
                      </span>;
                    ))}
                  </div>;
                </div>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Accessibility Tools */}
      <section className="py-16 bg-zion-slate-dark">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center mb-12">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Accessibility Tools;
            </h2>;
            <p className="text-zion-slate-light max-w-2xl mx-auto">;
              Use these built-in tools to customize your browsing experience;
            </p>;
          </div>;

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;
            {accessibilityTools.map((tool, index) => (;
              <div key={index} className="bg-zion-slate-darker border border-zion-purple/20 rounded-lg p-6 text-center hover:border-zion-cyan/50 transition-all duration-300">;
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">;
                  <tool.icon className="w-8 h-8 text-zion-cyan" />;
                </div>;
                <h3 className="text-lg font-semibold text-white mb-2">{tool.name}</h3>;
                <p className="text-zion-slate-light text-sm mb-4">{tool.description}</p>;
                <button className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm">;
                  {tool.action}
                </button>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Keyboard Navigation */}
      <section className="py-16 bg-zion-slate-darker">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">;
            <div>;
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;
                Keyboard Navigation;
              </h2>;
              <p className="text-zion-slate-light mb-6 leading-relaxed">;
                Our website can be fully navigated using only the keyboard. Use these keyboard shortcuts ;
                to navigate efficiently through our content.;
              </p>;
              <div className="space-y-3">;
                {keyboardShortcuts.map((shortcut, index) => (;
                  <div key={index} className="flex items-center justify-between">;
                    <span className="text-zion-slate-light">{shortcut.description}</span>;
                    <kbd className="px-2 py-1 bg-zion-slate-dark border border-zion-purple/30 rounded text-sm text-zion-cyan">;
                      {shortcut.key}
                    </kbd>;
                  </div>;
                ))}
              </div>;
            </div>;

            <div className="bg-zion-slate-dark border border-zion-purple/20 rounded-lg p-8">;
              <h3 className="text-xl font-semibold text-white mb-4">Quick Tips</h3>;
              <ul className="space-y-3">;
                <li className="flex items-start space-x-3">;
                  <CheckCircle className="w-5 h-5 text-zion-cyan mt-0.5" />;
                  <span className="text-zion-slate-light">All interactive elements are keyboard accessible</span>;
                </li>;
                <li className="flex items-start space-x-3">;
                  <CheckCircle className="w-5 h-5 text-zion-cyan mt-0.5" />;
                  <span className="text-zion-slate-light">Focus indicators are clearly visible</span>;
                </li>;
                <li className="flex items-start space-x-3">;
                  <CheckCircle className="w-5 h-5 text-zion-cyan mt-0.5" />;
                  <span className="text-zion-slate-light">Skip links are available for main content</span>;
                </li>;
                <li className="flex items-start space-x-3">;
                  <CheckCircle className="w-5 h-5 text-zion-cyan mt-0.5" />;
                  <span className="text-zion-slate-light">Logical tab order throughout the site</span>;
                </li>;
              </ul>;
            </div>;
          </div>;
        </div>;
      </section>;

      {/* Contact Information */}
      <section className="py-16 bg-zion-slate-dark">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">;
            <div>;
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;
                Report Accessibility Issues;
              </h2>;
              <p className="text-zion-slate-light mb-6 leading-relaxed">;
                We are committed to continuously improving the accessibility of our website. ;
                If you encounter any accessibility barriers or have suggestions for improvement,
                please contact us.;
              </p>;
              <div className="space-y-4">;
                <div className="flex items-center space-x-3">;
                  <Mail className="w-5 h-5 text-zion-cyan" />;
                  <span className="text-zion-slate-light">accessibility@ziontechgroup.com</span>;
                </div>;
                <div className="flex items-center space-x-3">;
                  <Phone className="w-5 h-5 text-zion-cyan" />;
                  <span className="text-zion-slate-light">+1 (302) 464-0950</span>;
                </div>;
                <div className="flex items-center space-x-3">;
                  <MapPin className="w-5 h-5 text-zion-cyan" />;
                  <span className="text-zion-slate-light">364 E Main St STE 1008, Middletown DE 19709</span>;
                </div>;
              </div>;
            </div>;

            <div className="bg-zion-slate-darker border border-zion-purple/20 rounded-lg p-8">;
              <h3 className="text-xl font-semibold text-white mb-4">Accessibility Feedback Form</h3>;
              <p className="text-zion-slate-light mb-6">;
                Help us improve by reporting accessibility issues or suggesting enhancements.;
              </p>;
              <div className="space-y-4">;
                <input;
                  type="text";
                  placeholder="Your Name";
                  className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent";
                />;
                <input;
                  type="email";
                  placeholder="Email Address";
                  className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent";
                />;
                <select className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent">;
                  <option>Issue Type</option>;
                  <option>Navigation Problem</option>;
                  <option>Content Accessibility</option>;
                  <option>Visual Design</option>;
                  <option>Assistive Technology</option>;
                  <option>Other</option>;
                </select>;
                <textarea;
                  placeholder="Describe the accessibility issue or suggestion";
                  rows={4}
                  className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"></textarea>;
                <button className="w-full bg-zion-cyan text-white py-3 rounded-lg hover:bg-zion-cyan-light transition-colors">;
                  Submit Feedback;
                </button>;
              </div>;
            </div>;
          </div>;
        </div>;
      </section>;

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-zion-cyan to-zion-blue">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">;
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
            Committed to Digital Inclusion;
          </h2>;
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">;
            At Zion Tech Group, we believe that technology should be accessible to everyone. ;
            We're continuously working to improve our digital accessibility and welcome your feedback.;
          </p>;
          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <Link;
              to="/contact";
              className="bg-white text-zion-cyan px-8 py-3 rounded-lg font-semibold hover:bg-zion-slate-light transition-colors">;
              Contact Accessibility Team;
            </Link>;
            <Link;
              to="/accessibility-test";
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-zion-cyan transition-colors">;
              Test Our Accessibility;
            </Link>;
          </div>;
        </div>;
      </section>;
    </div>;
  );
}

export default AccessibilityPage;