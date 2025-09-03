import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
// framer-motion removed for build stability
import { 
  ArrowRight, 
  CheckCircle, 
  Shield, 
  Users, 
  Zap, 
  Brain, 
  Network, 
  Cloud,
  Globe
} from 'lucide-react'

const SEO = dynamic(() => import('../src/components/seo/SEO'), { ssr: false })

const Home = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
  ]
  
  const services = [
    {
      title: "AI Services",
      description: "Cutting-edge artificial intelligence solutions",
      icon: Brain,
      href: "/ai-services",
    },
    {
      title: "IT Services",
      description: "Comprehensive information technology services",
      icon: Network,
      href: "/it-services",
    },
    {
      title: "Micro SaaS",
      description: "Scalable software as a service solutions",
      icon: Cloud,
      href: "/micro-saas",
    }
  ]
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Zion Tech Group - Leading AI & Technology Solutions" 
        description="Transform your business with cutting-edge AI solutions, cloud services, and technology consulting. Expert team delivering innovative results."
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Your Business with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Cutting-Edge Technology
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Zion Tech Group delivers innovative AI solutions, cloud services, and technology consulting 
              to help businesses thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center text-lg hover:scale-105 hover:shadow-lg"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/about" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center text-lg hover:scale-105"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We provide comprehensive technology solutions to help your business thrive in the digital age. 
              From innovative micro SaaS applications to cutting-edge AI services and enterprise IT solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Micro SaaS */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="text-blue-600 mb-4 group-hover:text-purple-600 transition-colors">
                <Zap className="w-10 h-10 md:w-12 md:h-12" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Micro SaaS Solutions</h3>
              <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed">
                Innovative, focused software solutions that solve specific business problems with minimal overhead. 
                From AI-powered tools to productivity platforms.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">AI Tools</span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">Productivity</span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">Automation</span>
              </div>
              <Link href="/micro-saas" className="text-blue-600 hover:text-blue-700 font-semibold group-hover:text-purple-600 transition-colors inline-flex items-center">
                Explore Solutions <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* IT Services */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="text-blue-600 mb-4 group-hover:text-purple-600 transition-colors">
                <Shield className="w-10 h-10 md:w-12 md:h-12" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">IT Services</h3>
              <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed">
                Comprehensive IT infrastructure, cloud migration, cybersecurity, and digital transformation solutions for modern businesses.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium">Cloud Migration</span>
                <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium">Cybersecurity</span>
                <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium">DevOps</span>
              </div>
              <Link href="/it-services" className="text-blue-600 hover:text-blue-700 font-semibold group-hover:text-purple-600 transition-colors inline-flex items-center">
                Explore Services <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* AI Services */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="text-blue-600 mb-4 group-hover:text-purple-600 transition-colors">
                <Globe className="w-10 h-10 md:w-12 md:h-12" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">AI Services</h3>
              <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed">
                Cutting-edge artificial intelligence solutions including machine learning, computer vision, and predictive analytics.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">Machine Learning</span>
                <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">Computer Vision</span>
                <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">NLP</span>
              </div>
              <Link href="/ai-services" className="text-blue-600 hover:text-blue-700 font-semibold group-hover:text-purple-600 transition-colors inline-flex items-center">
                Explore AI Solutions <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We deliver exceptional results through innovative technology solutions, cutting-edge AI, and dedicated 24/7 support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Proven Expertise",
                description: "500+ successful projects with industry-leading expertise and cutting-edge technology",
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Bank-level security with 99.9% uptime guarantee and SOC 2 compliance",
              },
              {
                icon: Users,
                title: "Dedicated Support",
                description: "24/7 expert support from our experienced team of technology professionals",
              },
              {
                icon: Zap,
                title: "Fast Delivery",
                description: "Agile development with rapid deployment capabilities and continuous integration",
              }
            ].map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div
                  key={feature.title}
                  className="text-center group p-6 bg-gray-50 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-blue-100 rounded-full group-hover:bg-purple-100 transition-colors">
                      <IconComponent className="w-8 h-8 text-blue-600 group-hover:text-purple-600 transition-colors" />
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Let's discuss how we can help transform your business with cutting-edge technology solutions, 
              innovative AI services, and comprehensive IT solutions.
            </p>
            
            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-2xl mb-2">📞</div>
                <h3 className="font-semibold mb-2 text-white">Call Us</h3>
                <a href="tel:+13024640950" className="text-blue-200 hover:text-white transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-2xl mb-2">✉️</div>
                <h3 className="font-semibold mb-2 text-white">Email Us</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-blue-200 hover:text-white transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-2xl mb-2">📍</div>
                <h3 className="font-semibold mb-2 text-white">Visit Us</h3>
                <p className="text-blue-200 text-sm">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-2xl mx-auto">
              <Link 
                href="/contact" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center text-lg hover:scale-105 hover:shadow-lg"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/about" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center text-lg hover:scale-105"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
