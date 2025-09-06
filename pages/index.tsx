import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Zion Tech Group - AI-Powered IT Services & Solutions</title>
        <meta name="description" content="Leading provider of AI-powered IT services, cloud solutions, and cutting-edge technology consulting. Transform your business with our innovative AI solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="AI services, IT consulting, cloud solutions, technology consulting, AI automation, digital transformation" />
        <meta property="og:title" content="Zion Tech Group - AI-Powered IT Services" />
        <meta property="og:description" content="Transform your business with cutting-edge AI solutions and IT services" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
          
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            <div className="animate-fade-in">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                AI-Powered IT Services & Solutions for the Future
              </p>
              <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
                Transform your business with cutting-edge artificial intelligence, cloud solutions, and innovative technology consulting. We deliver results that matter.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="btn-primary text-lg px-8 py-4 rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300">
                  Get Started Today
                </button>
                <button className="btn-secondary text-lg px-8 py-4 rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300">
                  Explore Solutions
                </button>
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-bounce-slow"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-bounce-slow delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-500/20 rounded-full blur-xl animate-bounce-slow delay-500"></div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">AI Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI-powered solutions designed to accelerate your digital transformation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "AI Automation",
                  description: "Streamline operations with intelligent automation solutions that learn and adapt to your business needs.",
                  icon: "🤖"
                },
                {
                  title: "Cloud Solutions",
                  description: "Scalable, secure, and efficient cloud infrastructure tailored to your specific requirements.",
                  icon: "☁️"
                },
                {
                  title: "Data Analytics",
                  description: "Transform raw data into actionable insights with advanced AI-powered analytics platforms.",
                  icon: "📊"
                },
                {
                  title: "Machine Learning",
                  description: "Custom ML models and algorithms designed to solve your unique business challenges.",
                  icon: "🧠"
                },
                {
                  title: "Cybersecurity",
                  description: "Advanced AI-driven security solutions to protect your digital assets and infrastructure.",
                  icon: "🔒"
                },
                {
                  title: "Digital Transformation",
                  description: "Complete digital overhaul services to modernize your business processes and systems.",
                  icon: "🚀"
                }
              ].map((service, index) => (
                <div key={index} className="card group hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                  Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion Tech</span>?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  We combine cutting-edge AI technology with deep industry expertise to deliver solutions that drive real business value.
                </p>
                
                <div className="space-y-6">
                  {[
                    "Expert AI Engineers & Data Scientists",
                    "Proven Track Record of Success",
                    "24/7 Support & Maintenance",
                    "Scalable & Future-Proof Solutions",
                    "Competitive Pricing & ROI Focus",
                    "Industry-Leading Security Standards"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span className="text-gray-300 text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🎯</div>
                    <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform?</h3>
                    <p className="text-gray-300 mb-6">
                      Let's discuss how our AI solutions can accelerate your business growth.
                    </p>
                    <button className="btn-primary w-full">
                      Schedule Consultation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of companies already transforming their business with our AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}