import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Award, Clock, Globe, TrendingUp, Code, Database, Cloud, Lock } from 'lucide-react';
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/20 rounded-full animate-pulse"></div>
            <div className="absolute top-32 right-20 w-16 h-16 bg-purple-500/20 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500/20 rounded-full animate-pulse delay-2000"></div>
          </div>
          
          <div className="container mx-auto px-4 py-24 relative z-10">
            <div className="text-center max-w-5xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 mb-6">
                <Award className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Trusted by 500+ Companies</span>
              </div>
              
              <h1 className="text-7xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in">
                Zion Tech Group
              </h1>
              
              <p className="text-2xl text-blue-100 mb-4 max-w-4xl mx-auto font-light">
                Leading provider of AI solutions, micro SaaS development, and comprehensive enterprise IT services.
              </p>
              
              <p className="text-lg text-blue-200 mb-12 max-w-3xl mx-auto">
                Transform your business with cutting-edge technology. We deliver innovative solutions that drive growth and digital transformation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Link href="/contact" className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl inline-flex items-center text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/services" className="group border-2 border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-xl inline-flex items-center text-lg transition-all duration-300 hover:bg-white/10 backdrop-blur-sm">
                  Explore Our Services
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">500+</div>
                  <div className="text-blue-200 text-sm">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                  <div className="text-blue-200 text-sm">Uptime Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
                  <div className="text-blue-200 text-sm">Support Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">5+</div>
                  <div className="text-blue-200 text-sm">Years Experience</div>
                </div>
              </div>
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Why Choose Us
              </div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Why Choose Zion Tech Group?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We deliver innovative solutions that drive business growth and digital transformation with cutting-edge technology.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group text-center p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Powered Solutions</h3>
                <p className="text-gray-600 leading-relaxed">Advanced AI and machine learning solutions that automate processes and enhance decision-making capabilities.</p>
              </div>
              
              <div className="group text-center p-8 rounded-2xl border border-gray-200 hover:border-purple-300 hover:shadow-2xl transition-all duration-300 bg-white hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Team</h3>
                <p className="text-gray-600 leading-relaxed">Experienced professionals with deep expertise in AI, cloud computing, and enterprise solutions.</p>
              </div>
              
              <div className="group text-center p-8 rounded-2xl border border-gray-200 hover:border-green-300 hover:shadow-2xl transition-all duration-300 bg-white hover:bg-gradient-to-br hover:from-green-50 hover:to-emerald-50">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Secure & Reliable</h3>
                <p className="text-gray-600 leading-relaxed">Enterprise-grade security and reliability with 99.9% uptime guarantee and 24/7 monitoring.</p>
              </div>
              
              <div className="group text-center p-8 rounded-2xl border border-gray-200 hover:border-orange-300 hover:shadow-2xl transition-all duration-300 bg-white hover:bg-gradient-to-br hover:from-orange-50 hover:to-red-50">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Fast Delivery</h3>
                <p className="text-gray-600 leading-relaxed">Rapid development and deployment with agile methodologies and continuous integration.</p>
              </div>
              
              <div className="group text-center p-8 rounded-2xl border border-gray-200 hover:border-indigo-300 hover:shadow-2xl transition-all duration-300 bg-white hover:bg-gradient-to-br hover:from-indigo-50 hover:to-blue-50">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Reach</h3>
                <p className="text-gray-600 leading-relaxed">Serving clients worldwide with scalable solutions and multi-region deployment capabilities.</p>
              </div>
              
              <div className="group text-center p-8 rounded-2xl border border-gray-200 hover:border-pink-300 hover:shadow-2xl transition-all duration-300 bg-white hover:bg-gradient-to-br hover:from-pink-50 hover:to-rose-50">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Proven Results</h3>
                <p className="text-gray-600 leading-relaxed">Track record of delivering measurable business value and ROI for our clients.</p>
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6">
                <Code className="w-4 h-4 mr-2" />
                Our Services
              </div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive technology solutions tailored to your business needs. From AI-powered tools to enterprise infrastructure.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* AI Solutions Card */}
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-300">
                <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <div className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Solutions</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">Advanced AI and machine learning solutions that transform your business operations and decision-making processes.</p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      Machine Learning Models
                    </li>
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      Natural Language Processing
                    </li>
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      Computer Vision
                    </li>
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      Predictive Analytics
                    </li>
                  </ul>
                  <Link href="/services/ai-services" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 group-hover:translate-x-1 transition-transform">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
              
              {/* Micro SaaS Card */}
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-purple-300">
                <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                <div className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Database className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Micro SaaS</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">Custom micro SaaS development and deployment services to help you build and launch successful software products.</p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      Custom Development
                    </li>
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      Cloud Deployment
                    </li>
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      Maintenance & Support
                    </li>
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      Scalable Architecture
                    </li>
                  </ul>
                  <Link href="/services/micro-saas" className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 group-hover:translate-x-1 transition-transform">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
              
              {/* IT Services Card */}
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-green-300">
                <div className="h-2 bg-gradient-to-r from-green-500 to-emerald-500"></div>
                <div className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Cloud className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">IT Services</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">Comprehensive enterprise IT infrastructure and support services to keep your business running smoothly.</p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      Cloud Migration
                    </li>
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      Cybersecurity
                    </li>
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      24/7 Support
                    </li>
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      Infrastructure Management
                    </li>
                  </ul>
                  <Link href="/services/it-services" className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 group-hover:translate-x-1 transition-transform">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Additional Services Grid */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 rounded-xl bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Lock className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Blockchain</h4>
                <p className="text-sm text-gray-600">Secure blockchain solutions</p>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-white border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Database className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Data Analytics</h4>
                <p className="text-sm text-gray-600">Advanced data insights</p>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-white border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Custom Development</h4>
                <p className="text-sm text-gray-600">Tailored software solutions</p>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-white border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Consulting</h4>
                <p className="text-sm text-gray-600">Strategic technology guidance</p>
        <section className="relative py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-500/10 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-indigo-500/5 rounded-full animate-pulse delay-2000"></div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-4 max-w-3xl mx-auto leading-relaxed">
                Let's discuss how our AI and technology solutions can help you achieve your goals and drive digital transformation.
              </p>
              <p className="text-lg text-blue-200 mb-12 max-w-2xl mx-auto">
                Join 500+ companies that trust us to deliver innovative solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Link href="/contact" className="group bg-white text-blue-900 hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl inline-flex items-center text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/about" className="group border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/60 font-semibold px-8 py-4 rounded-xl inline-flex items-center text-lg transition-all duration-300 backdrop-blur-sm">
                  Learn More About Us
                </Link>
              </div>
              
              {/* Trust indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">500+</div>
                  <div className="text-blue-200 text-sm">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">99.9%</div>
                  <div className="text-blue-200 text-sm">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">24/7</div>
                  <div className="text-blue-200 text-sm">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">5★</div>
                  <div className="text-blue-200 text-sm">Client Rating</div>
                </div>
              </div>
