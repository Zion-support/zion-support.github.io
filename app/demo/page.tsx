import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Calendar, Mail, Phone, BarChart3, Shield, Brain, Cloud } from "lucide-react";
import { useState } from "react";

export default function Demo() {
  const [selectedDemo, setSelectedDemo] = useState("ai-analytics");

  const demos = [
    {
      id: "ai-analytics",
      title: "AI Analytics Dashboard",
      description: "Experience our powerful AI analytics platform with real-time data visualization and predictive insights.",
      icon: <BarChart3 className="w-8 h-8" />,
      features: ["Real-time Dashboards", "Predictive Analytics", "Custom Reports", "API Integration"],
      duration: "15 minutes"
    },
    {
      id: "ai-security",
      title: "AI Cybersecurity Suite",
      description: "See how our AI-powered security solutions protect your business from threats in real-time.",
      icon: <Shield className="w-8 h-8" />,
      features: ["Threat Detection", "Automated Response", "Compliance Monitoring", "24/7 Protection"],
      duration: "20 minutes"
    },
    {
      id: "ai-content",
      title: "AI Content Generator",
      description: "Watch our AI create high-quality content, from blog posts to marketing materials, in seconds.",
      icon: <Brain className="w-8 h-8" />,
      features: ["Content Creation", "SEO Optimization", "Brand Voice", "Multi-format Output"],
      duration: "10 minutes"
    },
    {
      id: "cloud-solutions",
      title: "Cloud Infrastructure",
      description: "Explore our cloud solutions including migration, security, and cost optimization tools.",
      icon: <Cloud className="w-8 h-8" />,
      features: ["Auto-scaling", "High Availability", "Disaster Recovery", "Cost Optimization"],
      duration: "25 minutes"
    }
  ];

  const demoTypes = [
    {
      title: "Live Demo",
      description: "Interactive demonstration with our team",
      icon: <Play className="w-6 h-6" />,
      duration: "30-45 minutes",
      features: ["Personalized walkthrough", "Q&A session", "Custom use cases", "Implementation planning"]
    },
    {
      title: "Self-Guided Demo",
      description: "Explore our solutions at your own pace",
      icon: <Calendar className="w-6 h-6" />,
      duration: "15-30 minutes",
      features: ["Pre-recorded videos", "Interactive tutorials", "Downloadable resources", "24/7 access"]
    },
    {
      title: "Pilot Program",
      description: "Try our solutions in your environment",
      icon: <Mail className="w-6 h-6" />,
      duration: "2-4 weeks",
      features: ["Full access", "Dedicated support", "Custom configuration", "ROI analysis"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Demo - Zion Tech Group</title>
        <meta
          name="description"
          content="Experience our AI and IT solutions through interactive demos. See how our technology can transform your business."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                See Our Solutions in Action
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Experience the power of our AI and IT solutions through interactive demos. 
                See how our technology can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/consultation"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Schedule Demo</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Selection */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Demo
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Select the solution you'd like to explore
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {demos.map((demo) => (
              <button
                key={demo.id}
                onClick={() => setSelectedDemo(demo.id)}
                className={`p-6 rounded-xl border transition-all duration-300 text-left ${
                  selectedDemo === demo.id
                    ? 'border-cyan-500 bg-cyan-500/10'
                    : 'border-cyan-500/20 hover:border-cyan-500/40 bg-slate-800/50'
                }`}
              >
                <div className={`mb-4 ${selectedDemo === demo.id ? 'text-cyan-400' : 'text-gray-400'}`}>
                  {demo.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {demo.title}
                </h3>
                <p className="text-sm text-gray-300 mb-3">
                  {demo.description}
                </p>
                <div className="text-xs text-cyan-400">
                  {demo.duration}
                </div>
              </button>
            ))}
          </div>

          {/* Selected Demo Details */}
          {demos.map((demo) => (
            selectedDemo === demo.id && (
              <div key={demo.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="text-cyan-400 mb-4">
                      {demo.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {demo.title}
                    </h3>
                    <p className="text-gray-300 mb-6">
                      {demo.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {demo.features.map((feature, index) => (
                        <li key={index} className="text-gray-300 flex items-center">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
                        <Play className="w-5 h-5" />
                        <span>Start Demo</span>
                      </button>
                      <Link
                        to="/consultation"
                        className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-center"
                      >
                        Schedule Live Demo
                      </Link>
                    </div>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-6 border border-gray-700">
                    <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <Play className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                        <p className="text-gray-300">Demo Video Preview</p>
                        <p className="text-sm text-gray-400 mt-2">Duration: {demo.duration}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>

        {/* Demo Types */}
        <div className="bg-slate-800/30 border-t border-cyan-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Demo Options
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Choose the demo format that works best for you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {demoTypes.map((type, index) => (
                <div
                  key={index}
                  className="bg-slate-700/30 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
                >
                  <div className="text-cyan-400 mb-4">
                    {type.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {type.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4">
                    {type.description}
                  </p>
                  
                  <div className="text-cyan-400 font-semibold mb-4">
                    {type.duration}
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-center">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300">
                    Choose This Option
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Schedule Your Demo?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team is ready to show you how our solutions can transform your business.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Schedule Online</h3>
                <p className="text-gray-300">Book a demo at your convenience</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-300">Speak with our sales team directly</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-300">Send us your requirements</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/consultation"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300 inline-flex items-center space-x-2"
              >
                <span>Schedule Demo</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}