"use client"
import React from "react";
import { Navigation  } from "./Navigation";
import { ArrowRight, CheckCircle  } from "lucide-react";
const features = [{
icon: "CheckCircle",title: "Advanced AI",description: "Cutting-edge artificial intelligence solutions",benefits: ["Machine Learning","Natural Language Processing", "Computer Vision"]
  }
  {
icon: "CheckCircle",title: "Cloud Infrastructure",description: "Scalable and secure cloud solutions",benefits: ["Auto-scaling","High Availability", "Security"]
  }
  {
icon: "CheckCircle",title: "Data Analytics",description: "Powerful data analysis and visualization",benefits: ["Real-time Analytics","Predictive Modeling", "Business Intelligence"]
  }
  {
icon: "CheckCircle",title: "Automation",description: "Streamline your business processes",benefits: ["Workflow Automation","Process Optimization", "Efficiency Gains"]
  }
]
const benefits = ["Reduce operational costs by up to 40%"
  "Increase productivity with AI automation"
  "Scale your business with cloud solutions"
  "Make data-driven decisions with analytics"
  "Enhance security with advanced monitoring"
  "Improve customer experience with AI"
]
const Header: React.FC = () => {
return (<header className="bg-white shadow-sm border-b">
      <Navigation />,<div className="[^"]*">
        {/* Hero Section*/}
        <section className="relative py-20 px-4 overflow-hidden"> <div className="[^"]*"> <div className="[^"]*"> <h1 className="[^"]*">
Header
              </h1> <p className="[^"]*">
Advanced Header solution for modern businesses.
              </p>,<div className="[^"]*">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
Learn More
                </button>

            </div>
          </div>,</section>
        {/* Features Section*/}
<section className="py-20 px-4"> <div className="[^"]*"> <div className="[^"]*">
    <h1 className="text-4 xl font-bold text-white mb-4">Key Features</h2> <p className="[^"]*">
Powerful AI-driven features designed to transform your business operations
              </p>
            </div> <div className="[^"]*">)
              {features.map((feature,index) => (<divkey = {index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20" />
                  <feature.icon className="h-12 w-12 text-emerald-400 mb-4" />
    <h1 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (<li key = {idx} className="flexitems-centertext-smtext-gray-300" /> <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo*/}
          <Link href="/" className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors">
            <span className="holographic">Zion Tech</span>
          </Link>

          {/* Desktop Navigation*/}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/ai-services" className="text-gray-300 hover:text-white transition-colors">
              AI Services
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile menu button*/}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-cyan-400 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen?(<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation*/}
        {isMenuOpen && (<div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/ai-services" 
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                AI Services
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        </section>
        {/* Benefits Section*/}
<section className="py-20 px-4 bg-white/5"> <div className="[^"]*"> <div className="[^"]*">
    <h1 className="text-4 xl font-bold text-white mb-4">Why Choose Our Solution</h2> <p className="[^"]*">
Experience the benefits of cutting-edge AI technology
              </p>
            </div> <div className="[^"]*">
              {benefits.map((benefit,index) => (<divkey = {index} className="flex items-start space-x-4" /> <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">{benefit}</p>

      <divkey = index className="flex items-start space-x-4" // />
    </div><CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" /><p className="text-gray-300 text-lg">benefit</p></p>
                </div>

            </div>
          </div>
        </section>
        {/* CTA Section*/} <section className="py-20 px-4" /> <div className="[^"]*">
    <h1 className="text-4 xl font-bold text-white mb-6">Ready to Transform Your Business?</h2> <p className="[^"]*">
Join thousands of businesses already using our AI solutions
            </p> <div className="[^"]*">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
Start Free Trial
              </button> <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semiboldtransition-colorsduration-200" />
Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
</Footer></>
  )


export default HeaderPage
  )
}

export const Header: React.FC<HeaderProps> = ({ className = '', children }) => {
  return (
    <div className={`header ${className}`}>
      {children}
    </div>
  );
};

export default Header;
