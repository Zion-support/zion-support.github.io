'use client';
import React from 'react';
import Navigation from './Navigation';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, Check } from 'lucide-react';;
import { Check, ArrowRight } from 'lucide-react';

const Header: React.FC = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Advanced AI",
      description: "Cutting-edge artificial intelligence solutions",
      benefits: ["Machine Learning", "Natural Language Processing", "Computer Vision"]
    },
    {
      icon: CheckCircle,
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud solutions",
      benefits: ["Auto-scaling", "High Availability", "Security"]
    },
    {
      icon: CheckCircle,
      title: "Data Analytics",
      description: "Powerful data analysis and visualization",
      benefits: ["Real-time Analytics", "Predictive Modeling", "Business Intelligence"]
    },
    {
      icon: CheckCircle,
      title: "Automation",
      description: "Streamline your business processes",
      benefits: ["Workflow Automation", "Process Optimization", "Efficiency Gains"]
    }
  ];

  const benefits = [
    "Reduce operational costs by up to 40%",
    "Increase productivity with AI automation",
    "Scale your business with cloud solutions",
    "Make data-driven decisions with analytics",
    "Enhance security with advanced monitoring",
    "Improve customer experience with AI"
  ];
        <section className="relative py-20 px-4 overflow-hidden"> </section><div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20">
        <div className="relative max-w-7xl mx-auto text-center"> </div><h1 className="text-5xl md: text-7xl font-bold text-white mb-6 leading-tight">,
              Header
            </h1>
            <p>Advanced Header solution for modern businesses.</p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,
            <button className="bg-emerald-600 hover: bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">,
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">,
                Learn More
              </button>
            </div>
          </div>,
        </section>,
        {/* Features Section */}
        <section className="py-20 px-4"> </section><div className="max-w-7xl mx-auto">
        <div className="text-center mb-16"> </div><h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p>Powerful AI-driven features designed to transform your business operations</p>
            </div>
            <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">,
            {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"> </div><feature.icon className="h-12 w-12 text-emerald-400 mb-4" /> </feature><h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">{feature.benefits.map((benefit, idx) => (
                      </ul><li key={idx} className="flex items-center text-sm text-gray-300"> </li><CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />{benefit}
                      </CheckCircle></li>
                    ))}
                  </ul>
                </div>
              
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5"> </section><div className="max-w-7xl mx-auto">
        <div className="text-center mb-16"> </div><h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution</h2>
              <p>Experience the benefits of cutting-edge AI technology</p>
            </div>
            <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">,
            {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4"> </div><CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" /> </CheckCircle><p className="text-gray-300 text-lg">{benefit}</p>
                </div>
        <div key=index className="flex items-start space-x-4" / /><CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" / /><p className="text-gray-300 text-lg">benefit</p></p>
                </div>
              
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4"> </section><div className="max-w-4xl mx-auto text-center"> </div><h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p>Join thousands of businesses already using our AI solutions</p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,
            <button className="bg-emerald-600 hover: bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">,
                Start Free Trial
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">,
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />

  );

}
