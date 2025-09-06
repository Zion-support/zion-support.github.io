import React from 'react';
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Zion Tech Group - Leading-Edge Technology Solutions</title>
        <meta name="description" content="Transform your business with Zion Tech Group's cutting-edge AI, quantum computing, and cybersecurity solutions. Enterprise-grade technology for the modern world." />
        <meta name="keywords" content="AI, quantum computing, cybersecurity, business intelligence, technology solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          
          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                The Future of
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Technology
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-8 leading-relaxed">
                Transform your business with cutting-edge AI, quantum computing, and cybersecurity solutions. 
                Built for the modern enterprise, powered by innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#services"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-xl text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                  Explore Services
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border-2 border-white/20 hover:border-white/40 rounded-xl text-white font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
                >
                  Get Started
                </a>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/60 text-sm">
              <span>Trusted by Fortune 500 companies</span>
              <span>•</span>
              <span>SOC 2 Type II Certified</span>
              <span>•</span>
              <span>24/7 Enterprise Support</span>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-1000" />
            <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-2000" />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                We combine cutting-edge technology with proven business expertise to deliver solutions that drive real results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Cutting-Edge Technology",
                  description: "Leverage the latest advancements in AI, quantum computing, and cybersecurity",
                  icon: "🚀"
                },
                {
                  title: "Enterprise-Grade Security",
                  description: "Bank-level security with SOC 2 compliance and regular penetration testing",
                  icon: "🛡️"
                },
                {
                  title: "Scalable Solutions",
                  description: "Built to grow with your business, from startup to enterprise",
                  icon: "📈"
                },
                {
                  title: "Expert Support",
                  description: "24/7 technical support with dedicated account managers",
                  icon: "💬"
                }
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-6 bg-slate-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Our Core Services
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your digital transformation journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "AI Business Intelligence",
                  description: "Transform data into actionable insights with AI-powered analytics",
                  icon: "🧠",
                  color: "from-purple-500 to-pink-500",
                  price: "$499/month",
                  features: ["AI-powered dashboards", "Predictive analytics", "Real-time insights"]
                },
                {
                  title: "Quantum Cybersecurity",
                  description: "Future-proof security with quantum-resistant encryption and AI threat detection",
                  icon: "🔒",
                  color: "from-red-500 to-orange-500",
                  price: "$799/month",
                  features: ["Quantum-resistant encryption", "AI threat detection", "Zero-trust architecture"]
                },
                {
                  title: "AI Customer Experience",
                  description: "Deliver personalized customer experiences with intelligent automation",
                  icon: "🤖",
                  color: "from-blue-500 to-cyan-500",
                  price: "$599/month",
                  features: ["Chatbot automation", "Personalized recommendations", "Customer journey optimization"]
                }
              ].map((service) => (
                <div
                  key={service.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 mb-6 flex items-center justify-center`}>
                      <span className="text-3xl">{service.icon}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-white/70 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="mb-6">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                      <div className="text-sm text-white/50">Starting price</div>
                    </div>
                    
                    <div className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-white/70">
                          <span className="text-cyan-400">✅</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Join hundreds of forward-thinking companies already leveraging our technology to stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-xl text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                Start Your Journey
              </a>
              <a
                href="#services"
                className="px-8 py-4 border-2 border-white/20 hover:border-white/40 rounded-xl text-white font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
              >
                Explore Services
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}