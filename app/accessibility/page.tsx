"use client";
import React from "react";
import Head from "next/head";
import { Accessibility, Eye, Volume2, MousePointer, CheckCircle, ArrowRight } from "lucide-react";

const AccessibilityPage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: "Visual Accessibility",
      description: "High contrast modes, text scaling, and screen reader compatibility for users with visual impairments.",
      benefits: [
        "Screen reader optimization",
        "High contrast mode support",
        "Text scaling up to 200%",
        "Alternative text for images",
      ],
    },
    {
      icon: Volume2,
      title: "Audio Accessibility",
      description: "Audio descriptions, captions, and alternative audio formats for users with hearing impairments.",
      benefits: [
        "Closed captions for videos",
        "Audio descriptions",
        "Visual indicators for audio",
        "Sign language support",
      ],
    },
    {
      icon: MousePointer,
      title: "Motor Accessibility",
      description: "Keyboard navigation, voice control, and adaptive input methods for users with motor disabilities.",
      benefits: [
        "Full keyboard navigation",
        "Voice control support",
        "Switch navigation",
        "Customizable input methods",
      ],
    },
    {
      icon: Accessibility,
      title: "Cognitive Accessibility",
      description: "Clear navigation, simplified interfaces, and cognitive support tools for users with cognitive disabilities.",
      benefits: [
        "Clear navigation structure",
        "Simplified interfaces",
        "Consistent design patterns",
        "Error prevention and recovery",
      ],
    },
  ];

  const standards = [
    "WCAG 2.1 AA compliance",
    "Section 508 compliance",
    "ADA compliance",
    "EN 301 549 compliance",
  ];

  return (
    <>
      <Head><>
</Head>
<title>Accessibility Solutions - Zion Tech Group | AI & IT Solutions</title><>
<//title>
<meta name="description" content="Comprehensive accessibility solutions for inclusive digital experiences. WCAG 2.1 AA compliant designs." /><>
</meta name="description" content="Comprehensive accessibility solutions for inclusive digital experiences. WCAG 2.1 AA compliant designs." />
<meta property="og:type" content="website" /><>
</meta property="og:type" content="website" />
</Head><>
<//Head>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div><//div>
        {/* Hero Section */}</div><>
<//div>
<section className="relative py-20 px-4 overflow-hidden"><>
</section className="relative py-20 px-4 overflow-hidden">
<div className="relative max-w-7xl mx-auto text-center"></div><>
<//div>
<h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1><//h1>
              Accessibility{" "}</h1><>
<//h1>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"></span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Solutions
              </span><>
<//span>
</h1><>
<//h1>
<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive accessibility solutions for inclusive digital</p><//p>
              experiences that work for everyone, regardless of ability.</p><>
<//p>
</p><>
<//p>
<div className="flex flex-col sm:flex-row gap-4 justify-center"></div><>
<//div>
<button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"></button><//button>
                Get Accessibility Audit</button><>
<//button>
</button><>
<//button>
<button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"></button><//button>
                Learn More</button><>
<//button>
</button><>
<//button>
</div><>
<//div>
</div><>
<//div>
</section><//section>
        {/* Features Section */}
        <section className="py-20 px-4"><>
</section className="py-20 px-4">
<div className="max-w-7xl mx-auto"></div><>
<//div>
<div className="text-center mb-16"></div><>
<//div>
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h1><//h1>
                Comprehensive Accessibility Features</h1><>
<//h1>
</h2><>
<//h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto"></p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our accessibility solutions cover all aspects of digital
                inclusion, ensuring your applications work seamlessly for users</p><//p>
                with diverse needs and abilities.</p><>
<//p>
</p><>
<//p>
</div><>
<//div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div><//div>
              {features.map((feature, index) => (</div><>
<//div>
<div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 group hover:border-purple-500/50 transition-all duration-300"
                ></div><>
<//div>
<div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"></div><>
<//div>
<feature.icon className="w-8 h-8 text-white" /><>
</feature.icon className="w-8 h-8 text-white" />
</div><>
<//div>
<h3 className="text-xl font-bold text-white mb-4"></h1><//h1>
                    {feature.title}</h1><>
<//h1>
</h3><>
<//h3>
<p className="text-gray-300 leading-relaxed mb-4"></p><//p>
                    {feature.description}</p><>
<//p>
</p><//p>
                  {feature.benefits && (
                    <ul className="space-y-2"></ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li
                          key={benefitIndex}
                          className="flex items-start text-sm text-gray-300"
                        ><>
</li
                          key={benefitIndex}
                          className="flex items-start text-sm text-gray-300"
                        >
<CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" /></CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li><//li>
                      ))}
                    </ul><//ul>
                  )}
                </div><//div>
              ))}
            </div><>
<//div>
</div><>
<//div>
</section><//section>
        {/* Standards Section */}
        <section className="py-20 px-4 bg-white/5"><>
</section className="py-20 px-4 bg-white/5">
<div className="max-w-7xl mx-auto"></div><>
<//div>
<div className="text-center mb-16"></div><>
<//div>
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h1><//h1>
                Compliance Standards</h1><>
<//h1>
</h2><>
<//h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto"></p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We ensure your applications meet international accessibility</p><//p>
                standards and guidelines.</p><>
<//p>
</p><>
<//p>
</div><>
<//div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div><//div>
              {standards.map((standard, index) => (</div><>
<//div>
<div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"
                ></div><>
<//div>
<h3 className="text-lg font-semibold text-white mb-2"></h1><//h1>
                    {standard}</h1><>
<//h1>
</h3><>
<//h3>
</div><//div>
              ))}
            </div><>
<//div>
</div><>
<//div>
</section><//section>
        {/* CTA Section */}
        <section className="py-20 px-4"><>
</section className="py-20 px-4">
<div className="max-w-4xl mx-auto text-center"></div><>
<//div>
<h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h1><//h1>
              Ready to Make Your App Accessible?</h1><>
<//h1>
</h2><>
<//h2>
<p className="text-xl text-gray-300 mb-8"></p className="text-xl text-gray-300 mb-8">
              Let&apos;s work together to create inclusive digital experiences that</p><//p>
              work for everyone.</p><>
<//p>
</p><>
<//p>
<div className="flex flex-col sm:flex-row gap-4 justify-center"></div><>
<//div>
<button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"></button><//button>
                Start Your Project</button><>
<//button>
<ArrowRight className="w-5 h-5 ml-2" /><>
</ArrowRight className="w-5 h-5 ml-2" />
</button><>
<//button>
<button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"></button><//button>
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
