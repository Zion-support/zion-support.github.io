import type { NextPage } from 'next';
import Layout from '../components/Layout';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import ContactForm from '../components/forms/ContactForm';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <Head>
        <title>Zion Tech Group — Leading-Edge Technology Solutions & Autonomous Innovation Platform</title>
        <meta name="description" content="Zion Tech Group delivers cutting-edge AI, quantum computing, cybersecurity, and digital transformation solutions. Leading the future of autonomous innovation." />
        <meta property="og:title" content="Zion Tech Group — Leading-Edge Technology Solutions" />
        <meta property="og:description" content="Cutting-edge AI, quantum computing, cybersecurity, and digital transformation solutions. Leading the future of autonomous innovation." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="AI, quantum computing, cybersecurity, digital transformation, autonomous systems, technology solutions" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      
        <script type="application/ld+json">{"@context":"https://schema.org","@type":"WebPage","headline":"Zion Tech Group — Leading-Edge Technology Solutions & Autonomous Innovation Platform","url":"https://ziontechgroup.com/","isPartOf":{"@type":"WebSite","name":"Zion Tech Group","url":"https://ziontechgroup.com"}}</script></Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white">
        {/* Header */}
        <header className="relative z-50 bg-slate-950/90 backdrop-blur-md border-b border-white/10">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-fuchsia-400 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h1>
                  <p className="text-sm text-white/60">Innovation • Intelligence • Impact</p>
                </div>
              </div>
              <nav className="hidden md:flex items-center space-x-8">
                <Link href="#services" className="text-white/80 hover:text-white transition-colors">Services</Link>
                <Link href="#solutions" className="text-white/80 hover:text-white transition-colors">Solutions</Link>
                <Link href="#about" className="text-white/80 hover:text-white transition-colors">About</Link>
                <Link href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</Link>
              </nav>
              <div className="flex items-center space-x-4">
                <Link 
                  href="#contact"
                  className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
          <div className="relative container mx-auto px-6 text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
                Transform Your Business
              </span>
              <br />
              <span className="text-white">With AI & Technology</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto mb-8">
              Zion Tech Group delivers cutting-edge AI solutions, innovative micro SAAS platforms, and comprehensive IT services to drive your business forward.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link 
                href="#services"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-bold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200 transform hover:scale-105"
              >
                Explore Services
              </Link>
              <Link 
                href="#contact"
                className="px-8 py-4 bg-white/10 text-white font-bold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200"
              >
                Schedule Consultation
              </Link>
            </div>
            
            {/* Hero Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {heroServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                  <p className="text-white/70 mb-4 text-sm">{service.description}</p>
                  <div className="text-2xl font-bold text-cyan-400 mb-3">{service.price}</div>
                  <ul className="space-y-1 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-xs text-white/60 flex items-center">
                        <CheckCircle className="w-3 h-3 text-cyan-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SAAS Services */}
        <section id="services" className="py-20 bg-white/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Micro SAAS Solutions
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Innovative, scalable software-as-a-service solutions designed to solve specific business challenges
              </p>
            </div>

            {microSaasServices.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16">
                <h3 className="text-2xl font-bold mb-8 text-center text-fuchsia-400">{category.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-400/20 to-fuchsia-400/20 rounded-xl flex items-center justify-center mr-4">
                          {service.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white">{service.name}</h4>
                          <div className="text-cyan-400 font-bold">{service.price}</div>
                        </div>
                      </div>
                      <p className="text-white/70 mb-4 text-sm">{service.description}</p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-white/60 flex items-center">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link 
                        href={service.link}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        Learn More <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* IT Services */}
        <section id="solutions" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
                  IT Services & Solutions
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Comprehensive IT consulting, infrastructure management, and digital transformation services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-2xl flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{service.name}</h3>
                  <p className="text-white/70 mb-6">{service.description}</p>
                  <div className="text-3xl font-bold text-blue-400 mb-6">{service.price}</div>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-white/60 flex items-center">
                        <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={service.link}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>

            {/* AI Solutions */}
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold mb-8 text-green-400">AI & Machine Learning Solutions</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {aiSolutions.map((solution, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-2xl flex items-center justify-center mb-6">
                      {solution.icon}
                    </div>
                    <h4 className="text-2xl font-bold mb-4 text-white">{solution.name}</h4>
                    <p className="text-white/70 mb-6">{solution.description}</p>
                    <div className="text-3xl font-bold text-green-400 mb-6">{solution.price}</div>
                    <ul className="space-y-3 mb-8">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-white/60 flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link 
                      href={solution.link}
                      className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors"
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  What Our Clients Say
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Trusted by businesses worldwide for innovative technology solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-white/80 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-cyan-400">{testimonial.role}</div>
                    <div className="text-white/60 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Ready to Get Started?
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Let's discuss how Zion Tech Group can transform your business with cutting-edge technology solutions
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-cyan-400">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Smartphone className="w-5 h-5 text-cyan-400 mr-3" />
                      <span className="text-white">+1 302 464 0950</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-cyan-400 mr-3" />
                      <span className="text-white">kleber@ziontechgroup.com</span>
                    </div>
                    <div className="flex items-center">
                      <Building className="w-5 h-5 text-cyan-400 mr-3" />
                      <span className="text-white">364 E Main St STE 1008<br />Middletown DE 19709</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-fuchsia-400">Quick Links</h3>
                  <div className="space-y-3">
                    <Link href="https://ziontechgroup.com" className="block text-cyan-400 hover:text-cyan-300 transition-colors">
                      Visit Our Website →
                    </Link>
                    <Link href="/ai-solutions" className="block text-cyan-400 hover:text-cyan-300 transition-colors">
                      AI Solutions →
                    </Link>
                    <Link href="/services-2024" className="block text-cyan-400 hover:text-cyan-300 transition-colors">
                      All Services →
                    </Link>
                    <Link href="/about" className="block text-cyan-400 hover:text-cyan-300 transition-colors">
                      About Us →
                    </Link>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Link 
                  href="https://ziontechgroup.com"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-bold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200 transform hover:scale-105"
                >
                  Visit Zion Tech Group
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-950/90 border-t border-white/10 py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-fuchsia-400 rounded-xl flex items-center justify-center">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>
                </div>
                <p className="text-white/60 text-sm">
                  Leading provider of AI solutions, IT services, and innovative micro SAAS platforms.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
                <ul className="space-y-2 text-sm text-white/60">
                  <li><Link href="/ai-solutions" className="hover:text-white transition-colors">AI Solutions</Link></li>
                  <li><Link href="/services-2024" className="hover:text-white transition-colors">IT Services</Link></li>
                  <li><Link href="#services" className="hover:text-white transition-colors">Micro SAAS</Link></li>
                  <li><Link href="#solutions" className="hover:text-white transition-colors">Consulting</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-white/60">
                  <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                  <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                  <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
                <div className="space-y-2 text-sm text-white/60">
                  <p>Mobile: +1 302 464 0950</p>
                  <p>Email: kleber@ziontechgroup.com</p>
                  <p>Address: 364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </div>
            <div className="border-t border-white/10 pt-8 text-center">
              <p className="text-white/60 text-sm">
                © 2024 Zion Tech Group. All rights reserved. | 
                <Link href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 ml-1">
                  ziontechgroup.com
                </Link>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
