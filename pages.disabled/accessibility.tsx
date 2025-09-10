import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Accessibility, Eye, Volume2, MousePointer, Keyboard, Monitor, CheckCircle } from 'lucide-react';
const AccessibilityPage: NextPage = () => {;
  const accessibilityFeatures = [;
    {;
      icon: Eye,
      title: 'Visual Accessibility',
      description: 'Features to support users with visual impairments',
      features: [;
        'High contrast mode for better visibility',
        'Text size adjustment options',
        'Screen reader compatibility',
        'Alternative text for all images',
        'Color-blind friendly color schemes',
        'Focus indicators for keyboard navigation';
      ];
},
    {;
      icon: Volume2,
      title: 'Audio Accessibility',
      description: 'Support for users with hearing impairments',
      features: [;
        'Closed captions for video content',
        'Transcripts for audio content',
        'Visual alerts for important notifications',
        'Sign language interpretation available',
        'Audio descriptions for visual content',
        'Volume control options';
      ];
},
    {;
      icon: Keyboard,
      title: 'Motor Accessibility',
      description: 'Support for users with motor impairments',
      features: [;
        'Full keyboard navigation support',
        'Large click targets for easier interaction',
        'Voice control compatibility',
        'Customizable keyboard shortcuts',
        'Switch navigation support',
        'Touch-friendly interface design';
      ];
},
    {;
      icon: Monitor,
      title: 'Cognitive Accessibility',
      description: 'Features to support users with cognitive differences',
      features: [;
        'Clear and simple language',
        'Consistent navigation patterns',
        'Progress indicators for multi-step processes',
        'Error prevention and clear error messages',
        'Help and support documentation',
        'Customizable interface complexity';
      ];
}
  ];
  const standards = [;
    {;
      name: 'WCAG 2.1 AA',
      description: 'Web Content Accessibility Guidelines 2.1 Level AA compliance',
      status: 'Compliant',
      details: 'Our website meets or exceeds WCAG 2.1 AA standards for web accessibility.';
},
    {;
      name: 'Section 508',
      description: 'U.S. federal accessibility standards for electronic and information technology',
      status: 'Compliant',
      details: 'We comply with Section 508 requirements for federal accessibility standards.';
},
    {;
      name: 'ADA Compliance',
      description: 'Americans with Disabilities Act compliance for digital accessibility',
      status: 'Compliant',
      details: 'Our digital services are designed to be accessible under ADA guidelines.';
}
  ];
  const assistiveTechnologies = [;
    {;
      name: 'Screen Readers',
      description: 'Compatible with popular screen reading software',
      technologies: ['NVDA', 'JAWS', 'VoiceOver', 'TalkBack'];
},
    {;
      name: 'Voice Control',
      description: 'Support for voice control software',
      technologies: ['Dragon NaturallySpeaking', 'Voice Control (macOS)', 'Voice Access (Android)'];
},
    {;
      name: 'Switch Navigation',
      description: 'Compatible with switch navigation devices',
      technologies: ['Switch Control (iOS)', 'Switch Access (Android)', 'External switch devices'];
},
    {;
      name: 'Magnification',
      description: 'Works with screen magnification software',
      technologies: ['ZoomText', 'MAGic', 'Built-in browser zoom', 'OS magnification tools'];
}
  ];
  return (;
    <MainLayout;
      title="Accessibility - Zion Tech Group";
      description="Learn about Zion Tech Group's commitment to digital accessibility and the features we provide to ensure our services are accessible to everyone.";
      keywords="accessibility, digital accessibility, WCAG compliance, ADA compliance, inclusive design, assistive technology">;
      <div className="min-h-screen bg-gray-50">;
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">;
          <div className="container mx-auto px-4">;
            <div className="max-w-4xl mx-auto text-center">;
              <Accessibility className="w-16 h-16 mx-auto mb-6 text-blue-400" />;
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Digital Accessibility</h1>;
              <p className="text-xl text-gray-200 mb-8">;
                We are committed to making our digital services accessible to everyone,
                regardless of ability or the technology they use.;
              </p>;
            </div>;
          </div>;
        </section>;