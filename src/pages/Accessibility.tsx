import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Eye, 
  Ear, 
  MousePointer, 
  Keyboard, 
  Brain, 
  Heart,
  CheckCircle,
  AlertCircle,
  Info,
  ArrowRight,
  Accessibility,
  Users,
  Shield,
  Globe,
  Settings
} from 'lucide-react';

export default function AccessibilityPage() {
  const accessibilityFeatures = [
    {
      icon: Eye,
      title: "Visual Accessibility",
      description: "High contrast modes, scalable fonts, and screen reader compatibility for users with visual impairments.",
      features: [
        "High contrast color schemes",
        "Adjustable font sizes",
        "Screen reader optimization",
        "Alternative text for images",
        "Focus indicators"
      ]
    },
    {
      icon: Ear,
      title: "Auditory Accessibility",
      description: "Captions, transcripts, and audio alternatives for users with hearing difficulties.",
      features: [
        "Video captions and transcripts",
        "Audio descriptions",
        "Visual alerts and notifications",
        "Volume controls",
        "Audio alternatives for content"
      ]
    },
    {
      icon: MousePointer,
      title: "Motor Accessibility",
      description: "Keyboard navigation, voice control, and assistive technologies for users with motor impairments.",
      features: [
        "Full keyboard navigation",
        "Voice control compatibility",
        "Large click targets",
        "Customizable mouse settings",
        "Assistive device support"
      ]
    },
    {
      icon: Brain,
      title: "Cognitive Accessibility",
      description: "Clear navigation, consistent design, and simplified interfaces for users with cognitive challenges.",
      features: [
        "Clear and simple language",
        "Consistent navigation patterns",
        "Logical content structure",
        "Reduced distractions",
        "Step-by-step instructions"
      ]
    }
  ];

  const complianceStandards = [
    {
      standard: "WCAG 2.1",
      level: "AA",
      status: "Compliant",
      description: "Web Content Accessibility Guidelines 2.1 Level AA compliance ensures our website meets international accessibility standards."
    },
    {
      standard: "Section 508",
      level: "Federal",
      status: "Compliant",
      description: "Section 508 compliance ensures our digital services are accessible to federal employees and the public."
    },
    {
      standard: "ADA Title III",
      level: "Legal",
      status: "Compliant",
      description: "Americans with Disabilities Act compliance ensures equal access to our digital services."
    },
    {
      standard: "EN 301 549",
      level: "European",
      status: "Compliant",
      description: "European standard for digital accessibility ensuring compliance with EU regulations."
    }
  ];

  const accessibilityTools = [
    {
      icon: Settings,
      title: "Accessibility Controls",
      description: "Customize your browsing experience with our built-in accessibility tools.",
      link: "/accessibility-controls"
    },
    {
      icon: Globe,
      title: "Language Options",
      description: "Multiple language support with accessibility considerations for each locale.",
      link: "/language-support"
    },
    {
      icon: Users,
      title: "User Preferences",
      description: "Save your accessibility preferences for a personalized experience.",
      link: "/user-preferences"
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "Learn about how we protect your accessibility preferences and data.",
      link: "/privacy"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-zion-blue via-zion-purple to-zion-cyan text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Accessibility className="w-12 h-12 text-zion-cyan mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-zion-cyan bg-clip-text text-transparent">
                Accessibility
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Committed to making our digital services accessible to everyone. 
              We believe technology should empower all users, regardless of their abilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-zion-blue px-8 py-4 rounded-lg font-semibold hover:bg-zion-slate-light transition-all duration-300 transform hover:scale-105"
              >
                Report Accessibility Issue
              </Link>
              <Link
                to="/accessibility-controls"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-zion-blue transition-all duration-300"
              >
                Accessibility Tools
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-zion-cyan/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-zion-purple/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Our Commitment to Accessibility
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              At Zion Tech Group, we believe that digital accessibility is not just a legal requirement, 
              but a fundamental human right. We are committed to creating inclusive digital experiences 
              that work for everyone, regardless of their abilities or disabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-gradient-to-br from-zion-blue/10 to-zion-cyan/10 rounded-2xl border border-zion-blue/20">
              <div className="flex items-center mb-4">
                <Heart className="w-8 h-8 text-zion-blue mr-3" />
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                  Inclusive Design
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                We design our digital services with accessibility in mind from the very beginning, 
                ensuring that all users can access and benefit from our technology solutions.
              </p>
            </div>
            
            <div className="p-8 bg-gradient-to-br from-zion-purple/10 to-zion-cyan/10 rounded-2xl border border-zion-purple/20">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-zion-purple mr-3" />
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                  User-Centered Approach
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                We actively engage with users who have disabilities to understand their needs 
                and continuously improve our accessibility features and services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Features Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Accessibility Features
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Our comprehensive accessibility features ensure that everyone can access and use our digital services effectively.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {accessibilityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-600"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-zion-blue to-zion-cyan rounded-2xl flex items-center justify-center mr-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-slate-700 dark:text-slate-300">
                        <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance Standards Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Accessibility Compliance
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              We maintain compliance with international accessibility standards to ensure our services 
              meet the highest levels of accessibility requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {complianceStandards.map((standard, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-700 dark:to-slate-800 rounded-xl border border-slate-200 dark:border-slate-600"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {standard.standard}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Level {standard.level}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">
                      {standard.status}
                    </span>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  {standard.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessibility Tools Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Accessibility Tools & Resources
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Access our built-in accessibility tools and resources to customize your experience 
              and get the support you need.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accessibilityTools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={index}
                  to={tool.link}
                  className="group p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 dark:border-slate-600"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-blue to-zion-cyan rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    {tool.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                    {tool.description}
                  </p>
                  <div className="flex items-center text-zion-cyan group-hover:text-zion-purple transition-colors">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Report Issues Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Help Us Improve
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              We're committed to continuously improving our accessibility. If you encounter any accessibility issues 
              or have suggestions for improvement, please let us know.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-xl border border-red-200 dark:border-red-700">
                <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">
                  Report Issues
                </h3>
                <p className="text-red-600 dark:text-red-300 text-sm">
                  Let us know about any accessibility problems you encounter
                </p>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl border border-blue-200 dark:border-blue-700">
                <Info className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">
                  Request Features
                </h3>
                <p className="text-blue-600 dark:text-blue-300 text-sm">
                  Suggest new accessibility features you'd like to see
                </p>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl border border-green-200 dark:border-green-700">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">
                  Provide Feedback
                </h3>
                <p className="text-green-600 dark:text-green-300 text-sm">
                  Share your experience and help us improve our services
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-zion-blue to-zion-cyan text-white px-8 py-4 rounded-lg font-semibold hover:from-zion-blue-dark hover:to-zion-cyan-dark transition-all duration-300 transform hover:scale-105"
              >
                Report Accessibility Issue
              </Link>
              <Link
                to="/contact"
                className="border-2 border-zion-blue text-zion-blue px-8 py-4 rounded-lg font-semibold hover:bg-zion-blue hover:text-white transition-all duration-300"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}