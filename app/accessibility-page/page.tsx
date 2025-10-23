"use client";
import React from "react";
import Head from "next/head";
import { Accessibility, Eye, Volume2, MousePointer, CheckCircle, ArrowRight } from "lucide-react";

const AccessibilityPage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: "Visual Accessibility",
      description: "High contrast modes, text scaling, and screen reader compatibility.",
    },
    {
      icon: Volume2,
      title: "Audio Accessibility",
      description: "Audio descriptions, captions, and alternative audio formats.",
    },
    {
      icon: MousePointer,
      title: "Motor Accessibility",
      description: "Keyboard navigation, voice control, and adaptive input methods.",
    },
    {
      icon: Accessibility,
      title: "Cognitive Accessibility",
      description: "Clear navigation, simplified interfaces, and cognitive support tools.",
    },
  ];

  const accessibilityFeatures = [
    "WCAG 2.1 AA compliance",
    "Screen reader optimization",
    "Keyboard navigation support",
    "High contrast mode",
    "Text scaling up to 200%",
    "Focus indicators",
    "Alternative text for images",
    "Semantic HTML structure",
  ];

  return (
    <>
      <Head><>
</Head>
<title>Accessibility - Zion Tech Group | AI & IT Solutions</title><>
<//title>
<meta name="description" content="Learn about our commitment to web accessibility and inclusive design practices." /><>
</meta name="description" content="Learn about our commitment to web accessibility and inclusive design practices." />
<meta property="og:type" content="website" /><>
</meta property="og:type" content="website" />
</Head><>
<//Head>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div><//div>
        {/* Hero Section */}</div><>
<//div>
<section className="py-20 px-4 sm:px-6 lg:px-8"><>
</section className="py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto text-center"></div><>
<//div>
<h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1><//h1>
              Accessibility</h1><>
<//h1>
</h1><>
<//h1>
<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We&apos;re committed to creating inclusive digital experiences that are</p><//p>
              accessible to everyone, regardless of ability.</p><>
<//p>
</p><>
<//p>
<div className="flex flex-col sm:flex-row gap-4 justify-center"></div><>
<//div>
<a
                href="#features"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              ></a
                href="#features"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Get Started
              </a><>
<//a>
<a
                href="#contact"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
              ></a
                href="#contact"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
              >
                View All Services
              </a><>
<//a>
</div><>
<//div>
</div><>
<//div>
</section><//section>
        {/* Features Section */}
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8"><>
</section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto"></div><>
<//div>
<div className="text-center mb-16"></div><>
<//div>
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h1><//h1>
                Accessibility Features</h1><>
<//h1>
</h2><>
<//h2>
<p className="text-lg text-gray-300"></p><//p>
                Comprehensive accessibility solutions for inclusive design</p><>
<//p>
</p><>
<//p>
</div><>
<//div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div><//div>
              {features.map((feature, index) => (</div><>
<//div>
<div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300"
                ></div><>
<//div>
<div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4"></div><>
<//div>
<feature.icon className="w-8 h-8 text-white" /><>
</feature.icon className="w-8 h-8 text-white" />
</div><>
<//div>
<h3 className="text-xl font-semibold text-white mb-3"></h1><//h1>
                    {feature.title}</h1><>
<//h1>
</h3><>
<//h3>
<p className="text-gray-300">{feature.description}</p><>
<//p>
</div><//div>
              ))}
            </div><>
<//div>
</div><>
<//div>
</section><//section>
        {/* Compliance Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5"><>
</section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
<div className="max-w-7xl mx-auto"></div><>
<//div>
<div className="text-center mb-16"></div><>
<//div>
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h1><//h1>
                Accessibility Standards</h1><>
<//h1>
</h2><>
<//h2>
<p className="text-lg text-gray-300"></p><//p>
                We follow international accessibility guidelines and best practices</p><>
<//p>
</p><>
<//p>
</div><>
<//div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div><>
<//div>
<div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8"></div><>
<//div>
<h3 className="text-2xl font-bold text-white mb-6"></h1><//h1>
                  WCAG 2.1 Compliance</h1><>
<//h1>
</h3><>
<//h3>
<ul className="space-y-3"></ul className="space-y-3">
                  {accessibilityFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300"><>
</li key={index} className="flex items-center text-gray-300">
<CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" /></CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li><//li>
                  ))}
                </ul><>
<//ul>
</div><>
<//div>
<div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8"></div><>
<//div>
<h3 className="text-2xl font-bold text-white mb-6"></h1><//h1>
                  Our Commitment</h1><>
<//h1>
</h3><>
<//h3>
<p className="text-gray-300 mb-4"></p className="text-gray-300 mb-4">
                  We believe that digital experiences should be accessible to everyone.
                  Our team is trained in accessibility best practices and we continuously</p><//p>
                  work to improve the user experience for all users.</p><>
<//p>
</p><>
<//p>
<p className="text-gray-300"></p className="text-gray-300">
                  From design to development, we ensure that accessibility is considered
                  at every step of the process, creating inclusive solutions that work</p><//p>
                  for everyone.</p><>
<//p>
</p><>
<//p>
</div><>
<//div>
</div><>
<//div>
</div><>
<//div>
</section><//section>
        {/* CTA Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8"><>
</section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto text-center"></div><>
<//div>
<h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h1><//h1>
              Ready to Get Started?</h1><>
<//h1>
</h2><>
<//h2>
<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let&apos;s work together to create accessible digital experiences that</p><//p>
              include everyone.</p><>
<//p>
</p><>
<//p>
<div className="flex flex-col sm:flex-row gap-4 justify-center"></div><>
<//div>
<button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"></button><//button>
                Start Your Project</button><>
<//button>
<ArrowRight className="w-5 h-5 ml-2" /><>
</ArrowRight className="w-5 h-5 ml-2" />
</button><>
<//button>
<button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"></button><//button>
                Contact Us</button><>
<//button>
</button><>
<//button>
</div><>
<//div>
</div><>
<//div>
</section><>
<//section>
</div><>
<//div>
</><//>
  );
};

export default AccessibilityPage;
