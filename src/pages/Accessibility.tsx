import React from "react";
import { motion } from "framer-motion";
import { 
  MousePointer, 
  AccessibilityIcon, 
  Ear, 
  Eye, 
  Brain, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Globe
} from "lucide-react";

const Accessibility: React.FC = () => {
  const features = [
    {
      title: "Motor Accessibility",
      icon: MousePointer,
      description: "Support for users with motor impairments",
      features: [
        "Keyboard-only navigation",
        "Voice control compatibility",
        "Large click targets",
        "Customizable interaction timeouts",
        "Switch control support"
      ]
    },
    {
      title: "Cognitive Accessibility",
      icon: Brain,
      description: "Support for users with cognitive differences",
      features: [
        "Clear and simple language",
        "Consistent navigation patterns",
        "Error prevention and recovery",
        "Progress indicators",
        "Help and support resources"
      ]
    },
    {
      title: "Auditory Accessibility",
      icon: Ear,
      description: "Support for users with hearing impairments",
      features: [
        "Visual indicators for audio content",
        "Captions and transcripts",
        "Text-based alternatives",
        "Visual alerts and notifications",
        "Sign language support where applicable"
      ]
    },
    {
      title: "Visual Accessibility",
      icon: Eye,
      description: "Support for users with visual impairments",
      features: [
        "Screen reader compatibility",
        "High contrast modes",
        "Text scaling options",
        "Alternative text for images",
        "Keyboard navigation support"
      ]
    }
  ];

  const standards = [
    "WCAG 2.1 AA compliance",
    "Section 508 compliance",
    "ADA compliance",
    "EN 301 549 compliance",
    "ISO/IEC 40500 compliance"
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <AccessibilityIcon className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Accessibility Statement</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We are committed to making our website accessible to all users, including those with disabilities.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center mb-4">
                <feature.icon className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-xl font-semibold text-gray-900">{feature.title}</h2>
              </div>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.features.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-lg shadow-lg p-6 mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Compliance Standards</h2>
          <p className="text-gray-600 mb-4">
            Our website adheres to the following accessibility standards:
          </p>
          <ul className="grid md:grid-cols-2 gap-2">
            {standards.map((standard, index) => (
              <li key={index} className="flex items-center text-sm text-gray-600">
                <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                {standard}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-4">
            If you encounter any accessibility barriers or have suggestions for improvement, please contact us:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center">
              <Phone className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <a href={`tel:${contactInfo.phone}`} className="text-blue-600 hover:text-blue-800">
                {contactInfo.phone}
              </a>
            </div>
            <div className="text-center">
              <Mail className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <a href={`mailto:${contactInfo.email}`} className="text-blue-600 hover:text-blue-800">
                {contactInfo.email}
              </a>
            </div>
            <div className="text-center">
              <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <p className="text-gray-600 text-sm">{contactInfo.address}</p>
            </div>
            <div className="text-center">
              <Globe className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <a href={contactInfo.website} className="text-blue-600 hover:text-blue-800">
                {contactInfo.website}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Accessibility;