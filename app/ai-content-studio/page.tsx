"use client";
import React from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { ArrowRight, CheckCircle } from "lucide-react";
const AiContentStudioPage: React.FC = () => {
  const features = [
    {
      title: "AI Content Generation",
      description: "Generate high-quality content using advanced AI algorithms",
      benefits: [
        "Automated writing",
        "Content optimization",
        "Multi-language support",
      ],
    },
    {
      title: "Design Tools",
      description: "Professional design tools for creating stunning visuals",
      benefits: ["Templates", "Custom designs", "Brand consistency"],
    },
    {
      title: "Collaboration",
      description: "Work together with your team on content projects",
      benefits: ["Real-time editing", "Comments", "Version control"],
    },
  ];

  const benefits = [
    "Increase content production by 10x",
    "Improve engagement by 200%",
    "Save 50+ hours per week",
    "Reduce content costs by 70%",
    "Enable consistent branding",
    "Automate content workflows",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>AI Content Studio | Zion Tech Group</title>

      </Helmet>

      <Navigation />

      {/* Hero Section */}
      
          </div><section className="relative py-20 px-4 overflow-hidden">
        
        </section><div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
        
          </div><div className="relative max-w-7xl mx-auto text-center">
          <h$1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI Content Studio
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          
          </div><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Create stunning content with our AI Content Studio. Advanced design
            tools, content generation, and collaboration features for better
            content creation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
              Get Started Today
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View Demo
            </button>
        </div>
      </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        
        </section><div className="max-w-7xl mx-auto">
        
          </div><div className="text-center mb-16">
          <h$1 className="text-4xl font-bold text-white mb-4">
              AI Content Studio Features
            </h2>
          
          </div><p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced solutions designed for modern business needs
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Start Your Free Trial
            </button>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
          </div><div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-6 h-6 text-white" />
          <h$1 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
          
          </div><p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">

                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        
        </section><div className="max-w-7xl mx-auto">
        
          </div><div className="text-center mb-16">
          <h$1 className="text-4xl font-bold text-white mb-4">
              Why Choose Our AI Content Studio?
            </h2>
          
          </div><p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of our proven solutions
            </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
          </div><div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
          <h$1 className="text-lg font-semibold text-white">{benefit}</h3>
              </div>
            ))}
        </div>
      </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        
        </section><div className="max-w-4xl mx-auto text-center">
          <h$1 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          
          </div><p className="text-xl text-gray-300 mb-8">
            Transform your content creation with our AI Content Studio solutions
            today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Contact Sales
            </button>
        </div>
      </div>
      </section>

      <Footer />
    </div>
  );
};

export default AiContentStudioPage;
