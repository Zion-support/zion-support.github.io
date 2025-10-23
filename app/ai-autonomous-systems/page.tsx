"use client";
import React from "react";
import Head from "next/head";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { CheckCircle, ArrowRight } from "lucide-react";
const PagePage: React.FC = () => {
  const features = [
    {
      title: "Feature 1",
      description: "Description of feature 1",
      benefits: ["Benefit 1", "Benefit 2", "Benefit 3"],
    },
    {
      title: "Feature 2",
      description: "Description of feature 2",
      benefits: ["Benefit 1", "Benefit 2", "Benefit 3"],
    },
    {
      title: "Feature 3",
      description: "Description of feature 3",
      benefits: ["Benefit 1", "Benefit 2", "Benefit 3"],
    },
  ];

  const benefits = [
    "Benefit 1",
    "Benefit 2",
    "Benefit 3",
    "Benefit 4",
    "Benefit 5",
    "Benefit 6",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div><>
<//div>
<Head><>
</Head>
<title>Page | Zion Tech Group</title><>
<//title>
</Head><>
<//Head>
<Navigation /></Navigation />
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden"><>
</section className="relative py-20 px-4 overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" /></div><>
<//div>
</div><>
<//div>
<div className="relative max-w-7xl mx-auto text-center"></div><>
<//div>
<h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"></h1><//h1>
            Page</h1><>
<//h1>
<span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"></span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Solutions
            </span><>
<//span>
</h1><>
<//h1>
<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"></p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Professional page solutions by Zion Tech Group. Advanced AI and IT</p><//p>
            solutions for your business.</p><>
<//p>
</p><>
<//p>
<div className="flex flex-col sm:flex-row gap-4 justify-center"></div><>
<//div>
<button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"></button><//button>
              Get Started Today</button><>
<//button>
<ArrowRight className="inline-block ml-2 w-5 h-5" /><>
</ArrowRight className="inline-block ml-2 w-5 h-5" />
</button><>
<//button>
<button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"></button><//button>
              View Demo</button><>
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
<h2 className="text-4xl font-bold text-white mb-4"></h1><//h1>
              Page Features</h1><>
<//h1>
</h2><>
<//h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto"></p><//p>
              Advanced solutions designed for modern business needs</p><>
<//p>
</p><>
<//p>
<button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"></button><//button>
              Start Your Free Trial</button><>
<//button>
</button><>
<//button>
</div><>
<//div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div><//div>
            {features.map((feature, index) => (</div><>
<//div>
<div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 group hover:bg-white/10 transition-all duration-300"></div><>
<//div>
<div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"></div><>
<//div>
<CheckCircle className="w-6 h-6 text-white" /><>
</CheckCircle className="w-6 h-6 text-white" />
</div><>
<//div>
<h3 className="text-xl font-semibold text-white mb-3"></h1><//h1>
                  {feature.title}</h1><>
<//h1>
</h3><>
<//h3>
<p className="text-gray-300 mb-4">{feature.description}</p><>
<//p>
<ul className="space-y-2"></ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start text-sm text-gray-300"><>
</li key={benefitIndex} className="flex items-start text-sm text-gray-300">
<CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" /></CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li><//li>
                  ))}
                </ul><>
<//ul>
</div><//div>
            ))}
          </div><>
<//div>
</div><>
<//div>
</section><//section>
      {/* Benefits Section */}
      <section className="py-20 px-4"><>
</section className="py-20 px-4">
<div className="max-w-7xl mx-auto"></div><>
<//div>
<div className="text-center mb-16"></div><>
<//div>
<h2 className="text-4xl font-bold text-white mb-4"></h1><//h1>
              Why Choose Our Page?</h1><>
<//h1>
</h2><>
<//h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto"></p><//p>
              Experience the benefits of our proven solutions</p><>
<//p>
</p><>
<//p>
</div><>
<//div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div><//div>
            {benefits.map((benefit, index) => (</div><>
<//div>
<div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center"></div><>
<//div>
<div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center"></div><>
<//div>
<CheckCircle className="w-8 h-8 text-white" /><>
</CheckCircle className="w-8 h-8 text-white" />
</div><>
<//div>
<h3 className="text-lg font-semibold text-white">{benefit}</h3><>
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
<h2 className="text-4xl font-bold text-white mb-6"></h1><//h1>
            Ready to Get Started?</h1><>
<//h1>
</h2><>
<//h2>
<p className="text-xl text-gray-300 mb-8"></p><//p>
            Transform your business with our page solutions today</p><>
<//p>
</p><>
<//p>
<div className="flex flex-col sm:flex-row gap-4 justify-center"></div><>
<//div>
<button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button><//button>
              Start Free Trial</button><>
<//button>
</button><>
<//button>
<button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"></button><//button>
              Contact Sales</button><>
<//button>
</button><>
<//button>
</div><>
<//div>
</div><>
<//div>
</section><>
<//section>
<Footer /><>
</Footer />
</div><//div>
  );
};

export default PagePage;
