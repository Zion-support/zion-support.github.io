import React from 'react';'
import MainLayout from '../components/layout/MainLayout';'
import { motion } from 'framer-motion';'
import {
  }
  Eye,
  Ear,
  MousePointer,
  Keyboard,
  Shield,
  CheckCircle,
  ArrowRight,
  Users,
  Globe,
  Heart,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';'

const accessibilityFeatures = [;
  {
    }
    "icon": Eye,
    "title": 'Visual Accessibility','
    "description": 'High contrast modes, screen reader compatibility, and customizable text sizes.','
    "features": ['Screen reader support', 'High contrast themes', 'Text scaling', 'Color blind friendly']'
  },
  {
    }
    "icon": Ear,
    "title": 'Audio Accessibility','
    "description": 'Audio descriptions, captions, and alternative audio formats for all content.','
    "features": ['Audio descriptions', 'Closed captions', 'Transcripts', 'Volume controls']'
  },
  {
    }
    "icon": MousePointer,
    "title": 'Motor Accessibility','
    "description": 'Keyboard navigation, voice control, and assistive technology support.','
    "features": ['Keyboard navigation', 'Voice control', 'Switch control', 'Gesture alternatives']'
  },
  {
    }
    "icon": Shield,
    "title": 'Security & Privacy','
    "description": 'Secure accessibility features that protect user data and privacy.','
    "features": ['Data encryption', 'Privacy controls', 'Secure authentication', 'GDPR compliance']'

];

export default function AccessibilityPage() {
}
return (;
    <MainLayout,
title="Accessibility - Zion Tech Group""
      description="Committed to making technology accessible to everyone. Learn about our accessibility features and compliance.""
      keywords="accessibility, inclusive design, WCAG, screen reader, assistive technology""
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">"
        <div className="container mx-auto px-4 py-16">"
          <motion.div,
initial={{ "opacity": 0, "y": 20 }}
            animate={{ "opacity": 1, "y": 0 }}
            transition={{ "duration": 0.6 }}
            className="text-center mb-16""
          >
            <h1 className="text-5xl font-bold text-white mb-6">"
              Accessibility
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">"
              We believe technology should be accessible to everyone. Our solutions are designed,
with inclusivity at their core, ensuring equal access for all users.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 "md":grid-cols-2 gap-8 mb-16">"
            {accessibilityFeatures.map((feature, index) => (
              <motion.div
}
key={index}
                initial={{ "opacity": 0, "y": 20 }}
                animate={{ "opacity": 1, "y": 0 }}
                transition={{ "duration": 0.6, "delay": index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20""
              >
                <div className="flex items-center mb-4">"
                  <feature.icon className="h-8 w-8 text-blue-400 mr-3" />"
                  <h3 className="text-2xl font-bold text-white">{feature.title}</h3>"
                </div>
                <p className="text-gray-300 mb-6">{feature.description}</p>"
                <ul className="space-y-2">"
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">"
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />"
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div,
initial={{ "opacity": 0, "y": 20 }}
            animate={{ "opacity": 1, "y": 0 }}
            transition={{ "duration": 0.6, "delay": 0.8 }}
            className="bg-blue-600 rounded-xl p-8 text-center""
          >
            <h2 className="text-3xl font-bold text-white mb-4">"
              Committed to Inclusive Technology
            </h2>
            <p className="text-xl text-blue-100 mb-8">"
              Contact us to learn more about our accessibility features and how we can help make your technology more inclusive.
            </p>
            <div className="flex flex-col "sm":flex-row items-center justify-center space-y-4 "sm":space-y-0 "sm":space-x-8">"
              <div className="flex items-center text-white">"
                <Phone className="h-5 w-5 mr-2" />"
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center text-white">"
                <Mail className="h-5 w-5 mr-2" />"
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-white">"
                <MapPin className="h-5 w-5 mr-2" />"
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
