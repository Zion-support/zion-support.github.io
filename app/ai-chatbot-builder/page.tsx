"use client";
import React from "react";
import Head from "next/head";
import { MessageCircle, Bot, Zap, CheckCircle, ArrowRight } from "lucide-react";

const AIChatbotBuilderPage: React.FC = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "Intelligent Conversations",
      description: "Build chatbots with advanced natural language processing capabilities.",
    },
    {
      icon: Bot,
      title: "Easy Builder Interface",
      description: "Drag-and-drop interface for creating chatbot flows without coding.",
    },
    {
      icon: Zap,
      title: "Real-time Integration",
      description: "Seamlessly integrate with your existing systems and platforms.",
    },
  ];

  const benefits = [
    "No-code chatbot creation",
    "Multi-language support",
    "Advanced AI capabilities",
    "Real-time analytics",
    "Custom integrations",
    "24/7 customer support",
  ];

  return (
    <>
      <Head><>
</Head>
<title>AI Chatbot Builder - Zion Tech Group | AI & IT Solutions</title><>
<//title>
<meta name="description" content="Build intelligent chatbots with our AI-powered chatbot builder. No coding required, advanced features included." /><>
</meta name="description" content="Build intelligent chatbots with our AI-powered chatbot builder. No coding required, advanced features included." />
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
              AI Chatbot Builder</h1><>
<//h1>
</h1><>
<//h1>
<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build intelligent chatbots with our AI-powered builder. No coding</p><//p>
              required, advanced features included.</p><>
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
                View Demo
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
                Powerful Features</h1><>
<//h1>
</h2><>
<//h2>
<p className="text-lg text-gray-300"></p><//p>
                Everything you need to build intelligent chatbots</p><>
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
        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5"><>
</section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
<div className="max-w-7xl mx-auto"></div><>
<//div>
<div className="text-center mb-16"></div><>
<//div>
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h1><//h1>
                Why Choose Our Chatbot Builder?</h1><>
<//h1>
</h2><>
<//h2>
<p className="text-lg text-gray-300"></p><//p>
                Advanced AI technology for professional chatbot creation</p><>
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
                  Key Benefits</h1><>
<//h1>
</h3><>
<//h3>
<ul className="space-y-3"></ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-300"><>
</li key={index} className="flex items-center text-gray-300">
<CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" /></CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li><//li>
                  ))}
                </ul><>
<//ul>
</div><>
<//div>
<div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8"></div><>
<//div>
<h3 className="text-2xl font-bold text-white mb-6"></h1><//h1>
                  Use Cases</h1><>
<//h1>
</h3><>
<//h3>
<ul className="space-y-3 text-gray-300"><>
</ul className="space-y-3 text-gray-300">
<li>• Customer support automation</li><>
<//li>
<li>• Lead generation and qualification</li><>
<//li>
<li>• E-commerce assistance</li><>
<//li>
<li>• FAQ automation</li><>
<//li>
<li>• Appointment scheduling</li><>
<//li>
<li>• Multi-channel support</li><>
<//li>
</ul><>
<//ul>
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
              Ready to Build Your Chatbot?</h1><>
<//h1>
</h2><>
<//h2>
<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Start building intelligent chatbots today with our AI-powered</p><//p>
              builder platform.</p><>
<//p>
</p><>
<//p>
<div className="flex flex-col sm:flex-row gap-4 justify-center"></div><>
<//div>
<a
                href="#contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              ></a
                href="#contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Building
                <ArrowRight className="w-5 h-5 ml-2" /><>
</ArrowRight className="w-5 h-5 ml-2" />
</a><>
<//a>
<a
                href="#features"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
              ></a
                href="#features"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
              >
                Learn More
              </a><>
<//a>
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

export default AIChatbotBuilderPage;
