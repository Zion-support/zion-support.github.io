import React from 'react';
<<<<<<< HEAD
import { Eye, Ear, Hand, Brain, Shield, Award, CheckCircle } from 'lucide-react';
const Accessibility = () => {
=======
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, Ear, Hand, Brain, Shield, Award, CheckCircle, Accessibility as AccessibilityIcon } from 'lucide-react';

export default function Accessibility() {
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
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
<<<<<<< HEAD
=======

>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
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
<<<<<<< HEAD
=======

>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
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
<<<<<<< HEAD
=======

>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
    const ongoingImprovements = [
        "Regular accessibility audits and testing",
        "User feedback integration",
        "Continuous monitoring and updates",
        "Staff accessibility training",
        "Third-party accessibility reviews",
        "Compliance monitoring and reporting"
    ];
<<<<<<< HEAD
    return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-green-500/10 text-green-400 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2"/>
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
              <a href="#features" className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Learn More
              </a>
              <a href="/contact" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
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
            {accessibilityFeatures.map((feature, index) => (<div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white"/>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (<li key={idx} className="text-sm text-gray-400 flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0"/>
                      {item}
                    </li>))}
                </ul>
              </div>))}
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
            {complianceStandards.map((standard, index) => (<div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{standard.standard}</h3>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                    {standard.status}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-2">{standard.level}</p>
                <p className="text-gray-300">{standard.description}</p>
              </div>))}
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
            {toolsAndTechnologies.map((tool, index) => (<div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6 text-center hover:border-green-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <tool.icon className="w-8 h-8 text-white"/>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{tool.name}</h3>
                <p className="text-gray-300">{tool.description}</p>
              </div>))}
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
                {ongoingImprovements.map((improvement, index) => (<li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0"/>
                    {improvement}
                  </li>))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2xl p-8 border border-green-500/30">
              <div className="text-center">
                <Award className="w-24 h-24 text-green-400 mx-auto mb-4"/>
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
            <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Contact Us
            </a>
            <a href="mailto:accessibility@ziontechgroup.com" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
              Email Accessibility Team
            </a>
          </div>
        </div>
      </section>
    </div>);
};
export default Accessibility;
=======

    return (
        <>
            <SEO 
                title="Accessibility - Zion Tech Group" 
                description="Learn about our commitment to digital accessibility and inclusive design." 
                canonical="https://ziontechgroup.com/accessibility" 
            />
            <Header />
            <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
                {/* Hero Section */}
                <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto text-center">
                        <div className="mb-8">
                            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6">
                                <AccessibilityIcon className="w-4 h-4 mr-2" />
                                Digital Accessibility
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                                Committed to
                                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Inclusive Design</span>
                            </h1>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                                We believe technology should be accessible to everyone. Our platform is designed with 
                                accessibility in mind, ensuring an inclusive experience for all users.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark">
                                    Accessibility Report
                                </Button>
                                <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                                    Contact Us
                                </Button>
                            </div>
                        </div>

                        {/* Accessibility Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-zion-cyan mb-2">WCAG 2.1</div>
                                <div className="text-zion-slate-light">AA Compliant</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-zion-cyan mb-2">100%</div>
                                <div className="text-zion-slate-light">Keyboard Accessible</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-zion-cyan mb-2">200%</div>
                                <div className="text-zion-slate-light">Text Scaling</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-zion-cyan mb-2">24/7</div>
                                <div className="text-zion-slate-light">Support Available</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Accessibility Features */}
                <section className="py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-white mb-4">Accessibility Features</h2>
                            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                                Comprehensive accessibility features designed to support users with diverse needs
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {accessibilityFeatures.map((feature, index) => (
                                <Card key={index} className="bg-zion-blue-dark border border-zion-blue-light hover:border-zion-cyan transition-all duration-300">
                                    <CardHeader>
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="w-16 h-16 bg-zion-cyan/20 rounded-lg flex items-center justify-center">
                                                <feature.icon className="w-8 h-8 text-zion-cyan" />
                                            </div>
                                            <Badge variant="outline" className="border-zion-blue-light text-zion-slate-light">
                                                {feature.title}
                                            </Badge>
                                        </div>
                                        <CardTitle className="text-xl text-white mb-2">{feature.title}</CardTitle>
                                        <CardDescription className="text-zion-slate-light">
                                            {feature.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-2">
                                            {feature.features.map((item, itemIndex) => (
                                                <div key={itemIndex} className="flex items-center text-sm text-zion-slate-light">
                                                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Compliance Standards */}
                <section className="py-16 bg-zion-blue-dark">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-white mb-4">Compliance Standards</h2>
                            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                                Our platform meets and exceeds international accessibility standards
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {complianceStandards.map((standard, index) => (
                                <Card key={index} className="bg-zion-blue-dark border border-zion-blue-light text-center">
                                    <CardHeader>
                                        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Award className="w-8 h-8 text-green-500" />
                                        </div>
                                        <CardTitle className="text-lg text-white">{standard.standard}</CardTitle>
                                        <CardDescription className="text-zion-slate-light">
                                            {standard.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Badge className="bg-green-500 text-white">
                                            {standard.status}
                                        </Badge>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Tools and Technologies */}
                <section className="py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-white mb-4">Compatible Technologies</h2>
                            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                                Our platform works seamlessly with a wide range of assistive technologies
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {toolsAndTechnologies.map((tool, index) => (
                                <Card key={index} className="bg-zion-blue-dark border border-zion-blue-light hover:border-zion-cyan transition-all duration-300">
                                    <CardHeader>
                                        <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                                            <tool.icon className="w-6 h-6 text-zion-cyan" />
                                        </div>
                                        <CardTitle className="text-lg text-white">{tool.name}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-zion-slate-light">
                                            {tool.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Ongoing Improvements */}
                <section className="py-16 bg-zion-blue-dark">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">Continuous Improvement</h2>
                        <p className="text-xl text-zion-slate-light mb-8">
                            We're committed to continuously improving our accessibility features and compliance
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            {ongoingImprovements.map((improvement, index) => (
                                <div key={index} className="flex items-center text-zion-slate-light">
                                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                                    {improvement}
                                </div>
                            ))}
                        </div>
                        
                        <Button className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark">
                            Report Accessibility Issues
                        </Button>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-zion-blue">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">Have Accessibility Questions?</h2>
                        <p className="text-zion-slate-light mb-8">
                            Our accessibility team is here to help. Contact us for support, feedback, or questions about our accessibility features.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark">
                                Contact Accessibility Team
                            </Button>
                            <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                                Download Accessibility Report
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
