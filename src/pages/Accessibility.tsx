import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { ; CheckCircle,; Monitor,; Volume2,; Mouse,; Smartphone,; Contrast,; ZoomIn,; Type,; Palette,; Accessibility as AccessibilityIcon,; Eye,; Ear,; Hand,; Brain,; Heart; } from 'lucide-react';
;
const Accessibility: React.FC = () => {;
  const complianceStandards = [;
    {;
      standard: 'WCAG 2.1 AA',;
      description: 'Web Content Accessibility Guidelines 2.1 Level AA compliance',;
      status: 'Fully Compliant',;
      icon: CheckCircle,;
      color: 'text-green-400';
    },;
    {;
      standard: 'Section 508',;
      description: 'Federal accessibility requirements for electronic and information technology',;
      status: 'Fully Compliant',;
      icon: CheckCircle,;
      color: 'text-green-400';
    },;
    {;
      standard: 'ADA Title III',;
      description: 'Americans with Disabilities Act requirements for public accommodations',;
      status: 'Fully Compliant',;
      icon: CheckCircle,;
      color: 'text-green-400';
    },;
    {;
      standard: 'EN 301 549',;
      description: 'European accessibility requirements for ICT products and services',;
      status: 'Fully Compliant',;
      icon: CheckCircle,;
      color: 'text-green-400';
    };
  ];
;
  const assistiveTechnologies = [;
    {;
      name: 'Screen Readers',;
      description: 'Compatible with JAWS, NVDA, VoiceOver, and TalkBack',;
      icon: Monitor,;
      examples: ['JAWS', 'NVDA', 'VoiceOver', 'TalkBack', 'Narrator'];
    },;
    {;
      name: 'Voice Control',;
      description: 'Voice recognition software support for hands-free navigation',;
      icon: Volume2,;
      examples: [;
        'Dragon NaturallySpeaking',;
        'Voice Control (macOS)',;
        'Windows Speech Recognition';
      ];
    },;
    {;
      name: 'Switch Devices',;
      description: 'Alternative input devices for users with limited mobility',;
      icon: Mouse,;
      examples: [;
        'Head switches',;
        'Eye tracking',;
        'Sip and puff devices',;
        'Foot pedals';
      ];
    },;
    {;
      name: 'Mobile Accessibility',;
      description: 'Optimized for mobile assistive technologies',;
      icon: Smartphone,;
      examples: [;
        'iOS VoiceOver',;
        'Android TalkBack',;
        'Switch Control',;
        'AssistiveTouch';
      ];
    };
  ];
;
  const accessibilityFeatures = [;
    {;
      icon: Contrast,;
      title: 'High Contrast Mode',;
      description: 'Enhanced color contrast options for better visibility',;
      benefits: ['Improved readability', 'Reduced eye strain', 'Better focus'];
    },;
    {;
      icon: ZoomIn,;
      title: 'Zoom & Scaling',;
      description: 'Text and interface scaling up to 200% without loss of functionality',;
      benefits: ['Better readability', 'Flexible viewing options', 'Maintained layout'];
    },;
    {;
      icon: Type,;
      title: 'Typography Options',;
      description: 'Customizable font sizes, spacing, and line heights',;
      benefits: ['Improved readability', 'Personalized experience', 'Better comprehension'];
    },;
    {;
      icon: Palette,;
      title: 'Color Customization',;
      description: 'Adjustable color schemes and contrast settings',;
      benefits: ['Personalized appearance', 'Reduced eye strain', 'Better accessibility'];
    };
  ];
;
  const userNeeds = [;
    {;
      icon: Eye,;
      title: 'Visual Impairments',;
      description: 'Support for users with low vision, color blindness, and blindness',;
      features: ['Screen reader compatibility', 'High contrast modes', 'Alternative text'];
    },;
    {;
      icon: Ear,;
      title: 'Hearing Impairments',;
      description: 'Accessibility features for users with hearing difficulties',;
      features: ['Closed captions', 'Visual indicators', 'Text alternatives'];
    },;
    {;
      icon: Hand,;
      title: 'Motor Impairments',;
      description: 'Support for users with limited mobility and dexterity',;
      features: ['Keyboard navigation', 'Voice control', 'Switch device support'];
    },;
    {;
      icon: Brain,;
      title: 'Cognitive Impairments',;
      description: 'Features to support users with cognitive and learning disabilities',;
      features: ['Clear navigation', 'Consistent layout', 'Readable content'];
    };
  ];
;
  return (;
    <div className="min-h-screen bg-slate-900">;""
      <SEO";""
        title="Accessibility - Zion Tech Group";""
        description="Learn about Zion Tech Group's commitment to digital accessibility and inclusive design practices.";""
        keywords="accessibility, digital accessibility, WCAG, inclusive design, assistive technology, Zion Tech Group";"
      />;""
      {/* Header */}";""
      <section className="pt-32 pb-16 px-4">";""
        <div className="max-w-7xl mx-auto text-center">;
          <motion.div;
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};"
            transition={{ duration: 0.6 }};""
          >";""
            <div className="flex items-center justify-center space-x-3 mb-6">";""
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">";""
                <AccessibilityIcon className="w-8 h-8 text-white" />;"
              </div>;""
            </div>";""
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-6">;"
              Digital Accessibility;""
            </h1>";""
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">;
              We are committed to creating inclusive digital experiences that are accessible to all users,;
              regardless of their abilities or disabilities.;
            </p>;
          </motion.div>;
        </div>;"
      </section>;""
      {/* Compliance Standards */}";""
      <section className="py-16 px-4">";""
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};"
            viewport={{ once: true }};""
            transition={{ duration: 0.6 }}";""
            className="text-center mb-16";""
          >";""
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;"
              Accessibility Compliance;""
            </h2>";""
            <p className="text-gray-300 max-w-2xl mx-auto">;
              Our platform meets and exceeds international accessibility standards to ensure;
              equal access for all users.;
            </p>;"
          </motion.div>;";""
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;
            {complianceStandards.map((standard, index) => (;
              <motion.div;
                key={standard.standard};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};"
                viewport={{ once: true }};""
                transition={{ duration: 0.6, delay: index * 0.1 }}";""
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center";""
              >";""
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">";""
                  <standard.icon className="w-8 h-8 text-white" />;""
                </div>";""
                <h3 className="text-lg font-semibold text-white mb-2">{standard.standard}</h3>";""
                <p className="text-gray-300 text-sm mb-3">{standard.description}</p>;
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${standard.color} bg-green-500/20`}>;
                  {standard.status};
                </span>;
              </motion.div>;
            ))};
          </div>;
        </div>;"
      </section>;""
      {/* Assistive Technologies */}";""
      <section className="py-16 px-4 bg-slate-800/30">";""
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};"
            viewport={{ once: true }};""
            transition={{ duration: 0.6 }}";""
            className="text-center mb-16";""
          >";""
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;"
              Assistive Technology Support;""
            </h2>";""
            <p className="text-gray-300 max-w-2xl mx-auto">;
              Our platform is designed to work seamlessly with a wide range of assistive technologies;
              and accessibility tools.;
            </p>;"
          </motion.div>;";""
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
            {assistiveTechnologies.map((tech, index) => (;
              <motion.div;
                key={tech.name};
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }};
                whileInView={{ opacity: 1, x: 0 }};"
                viewport={{ once: true }};""
                transition={{ duration: 0.6, delay: index * 0.1 }}";""
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6";""
              >";""
                <div className="flex items-center mb-4">";""
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">";""
                    <tech.icon className="w-6 h-6 text-white" />;""
                  </div>";""
                  <h3 className="text-xl font-semibold text-white">{tech.name}</h3>;""
                </div>";""
                <p className="text-gray-300 mb-4">{tech.description}</p>";""
                <div className="flex flex-wrap gap-2">;
                  {tech.examples.map((example, idx) => (;"
                    <span;""
                      key={idx}";""
                      className="px-3 py-1 bg-slate-700/50 text-cyan-400 text-sm rounded-full border border-slate-600/50";
                    >;
                      {example};
                    </span>;
                  ))};
                </div>;
              </motion.div>;
            ))};
          </div>;
        </div>;"
      </section>;""
      {/* Accessibility Features */}";""
      <section className="py-16 px-4">";""
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};"
            viewport={{ once: true }};""
            transition={{ duration: 0.6 }}";""
            className="text-center mb-16";""
          >";""
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;"
              Built-in Accessibility Features;""
            </h2>";""
            <p className="text-gray-300 max-w-2xl mx-auto">;
              Our platform includes comprehensive accessibility features designed to enhance;
              the user experience for everyone.;
            </p>;"
          </motion.div>;";""
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;
            {accessibilityFeatures.map((feature, index) => (;
              <motion.div;
                key={feature.title};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};"
                viewport={{ once: true }};""
                transition={{ duration: 0.6, delay: index * 0.1 }}";""
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6";""
              >";""
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">";""
                  <feature.icon className="w-8 h-8 text-white" />;""
                </div>";""
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>";""
                <p className="text-gray-300 text-sm mb-4">{feature.description}</p>";""
                <ul className="space-y-1">;""
                  {feature.benefits.map((benefit, idx) => (";""
                    <li key={idx} className="flex items-center text-gray-400 text-sm">";""
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />;
                      {benefit};
                    </li>;
                  ))};
                </ul>;
              </motion.div>;
            ))};
          </div>;
        </div>;"
      </section>;""
      {/* User Needs */}";""
      <section className="py-16 px-4 bg-slate-800/30">";""
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};"
            viewport={{ once: true }};""
            transition={{ duration: 0.6 }}";""
            className="text-center mb-16";""
          >";""
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;"
              Supporting Diverse User Needs;""
            </h2>";""
            <p className="text-gray-300 max-w-2xl mx-auto">;
              We design our platform to accommodate a wide range of user needs and preferences,;
              ensuring an inclusive experience for all.;
            </p>;"
          </motion.div>;";""
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
            {userNeeds.map((need, index) => (;
              <motion.div;
                key={need.title};
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }};
                whileInView={{ opacity: 1, x: 0 }};"
                viewport={{ once: true }};""
                transition={{ duration: 0.6, delay: index * 0.1 }}";""
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6";""
              >";""
                <div className="flex items-center mb-4">";""
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4">";""
                    <need.icon className="w-6 h-6 text-white" />;""
                  </div>";""
                  <h3 className="text-xl font-semibold text-white">{need.title}</h3>;""
                </div>";""
                <p className="text-gray-300 mb-4">{need.description}</p>";""
                <ul className="space-y-2">;""
                  {need.features.map((feature, idx) => (";""
                    <li key={idx} className="flex items-center text-gray-300 text-sm">";""
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />;
                      {feature};
                    </li>;
                  ))};
                </ul>;
              </motion.div>;
            ))};
          </div>;
        </div>;"
      </section>;""
      {/* Commitment Statement */}";""
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700">";""
        <div className="max-w-4xl mx-auto text-center px-4">;
          <motion.div;
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            viewport={{ once: true }};"
            transition={{ duration: 0.6 }};""
          >";""
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">";""
              <Heart className="w-10 h-10 text-white" />;""
            </div>";""
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;"
              Our Accessibility Commitment;""
            </h2>";""
            <p className="text-green-100 text-lg mb-8 max-w-3xl mx-auto">;
              We believe that digital accessibility is not just a legal requirement, but a moral imperative.;
              Our commitment to inclusive design ensures that our technology serves everyone, regardless of;"
              their abilities or disabilities.;""
            </p>";""
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">";""
              <p className="text-white text-lg font-medium">";"Accessibility is not a feature, it's a fundamental aspect of good design that benefits everyone.";
              </p>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
;
export default Accessibility;"
;";""