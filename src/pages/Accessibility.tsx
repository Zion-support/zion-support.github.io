import React from 'react';
<<<<<<< HEAD

export default function Accessibility() {
	return (
		<div className="min-h-screen bg-background text-foreground py-16">
			<div className="container mx-auto px-4 max-w-3xl">
				<h1 className="text-3xl font-bold mb-4">Accessibility</h1>
				<p className="text-muted-foreground">
					We are committed to ensuring our website is accessible to all users. If you experience
					any difficulty accessing content, please contact us at info@ziontechgroup.com.
				</p>
			</div>
		</div>
	);
}
=======
import { Eye, Ear, Hand, Brain, Shield, Users, Globe, Zap, Target, TrendingUp, Award, CheckCircle } from 'lucide-react';

const Accessibility: React.FC = () => {
  const accessibilityFeatures = [
    {
      icon: Eye,
      title: "Visual Accessibility",
      description: "Support for users with visual impairments",
      features: ["High contrast mode", "Screen reader compatibility", "Resizable text", "Color-blind friendly design"]
    },
    {
      icon: Ear,
      title: "Auditory Accessibility",
      description: "Support for users with hearing impairments",
      features: ["Closed captions", "Audio descriptions", "Visual alerts", "Transcripts available"]
    },
    {
      icon: Hand,
      title: "Motor Accessibility",
      description: "Support for users with motor impairments",
      features: ["Keyboard navigation", "Voice control support", "Large click targets", "Customizable timing"]
    },
    {
      icon: Brain,
      title: "Cognitive Accessibility",
      description: "Support for users with cognitive impairments",
      features: ["Clear navigation", "Consistent layout", "Readable fonts", "Logical content flow"]
    }
  ];

  const complianceStandards = [
    {
      standard: "WCAG 2.1",
      level: "AA",
      description: "Web Content Accessibility Guidelines 2.1 Level AA compliance",
      status: "Compliant"
    },
    {
      standard: "Section 508",
      level: "Federal",
      description: "Federal accessibility requirements for electronic information",
      status: "Compliant"
    },
    {
      standard: "ADA Title III",
      level: "Legal",
      description: "Americans with Disabilities Act digital accessibility requirements",
      status: "Compliant"
    },
    {
      standard: "EN 301 549",
      level: "European",
      description: "European accessibility requirements for ICT products and services",
      status: "Compliant"
    }
  ];

  const toolsAndTechnologies = [
    {
      name: "Screen Readers",
      description: "Compatible with JAWS, NVDA, VoiceOver, and TalkBack",
      icon: Eye
    },
    {
      name: "Voice Control",
      description: "Support for Dragon NaturallySpeaking and built-in voice assistants",
      icon: Ear
    },
    {
      name: "Keyboard Navigation",
      description: "Full keyboard accessibility with visible focus indicators",
      icon: Hand
    },
    {
      name: "High Contrast",
      description: "High contrast mode for better visibility",
      icon: Eye
    },
    {
      name: "Text Scaling",
      description: "Text can be scaled up to 200% without loss of functionality",
      icon: Brain
    },
    {
      name: "Alternative Text",
      description: "Descriptive alt text for all images and graphics",
      icon: Eye
    }
  ];

  const ongoingImprovements = [
    "Regular accessibility audits and testing",
    "User feedback integration",
    "Continuous monitoring and updates",
    "Staff accessibility training",
    "Third-party accessibility reviews",
    "Compliance monitoring and reporting"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-green-500/10 text-green-400 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Accessibility Commitment
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Digital
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"> Accessibility</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We are committed to making our website accessible to all users, 
              regardless of their abilities or disabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#features"
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Learn More
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Report Issues
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Features */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Accessibility Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our website includes comprehensive accessibility features to ensure 
              an inclusive experience for all users.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {accessibilityFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Accessibility Compliance
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We maintain compliance with international accessibility standards 
              and regulations to ensure equal access for all users.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complianceStandards.map((standard, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{standard.standard}</h3>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                    {standard.status}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-2">{standard.level}</p>
                <p className="text-gray-300">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools and Technologies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Supported Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our website is designed to work seamlessly with a wide range of 
              assistive technologies and accessibility tools.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toolsAndTechnologies.map((tool, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 text-center hover:border-green-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <tool.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{tool.name}</h3>
                <p className="text-gray-300">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Improvements */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Continuous Improvement
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                We are committed to continuously improving the accessibility of 
                our website through regular audits, user feedback, and updates.
              </p>
              <ul className="space-y-3">
                {ongoingImprovements.map((improvement, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    {improvement}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2xl p-8 border border-green-500/30">
              <div className="text-center">
                <Award className="w-24 h-24 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Our Commitment</h3>
                <p className="text-gray-300 mb-6">
                  We believe that digital accessibility is not just a legal 
                  requirement, but a fundamental human right.
                </p>
                <div className="text-sm text-gray-400">
                  <p>• Regular accessibility testing</p>
                  <p>• User feedback integration</p>
                  <p>• Continuous improvement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Help with Accessibility?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            If you encounter any accessibility issues or have suggestions for 
            improvement, we want to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Us
            </a>
            <a
              href="mailto:accessibility@ziontechgroup.com"
              className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Email Accessibility Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accessibility;
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
