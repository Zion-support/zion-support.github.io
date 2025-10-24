import React from 'react'
import { Phone, CheckCircle, Star, ArrowRight } from 'lucide-react'
import { CheckCircle, Star, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Zion Tech Group - Advanced AI and IT Solutions',
  description: 'Leading provider of AI-powered enterprise solutions, automation, and digital transformation services.'
}

export default function HomePage
HomePage.displayName = "HomePage"() {
  return (
    <div className="min-h-screen bg-white"></div>
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
          <div className="flex justify-between items-center py-6"></div>
            <div className="flex items-center"></div>
              <a href="/" className="text-2xl font-bold text-gray-900">
                Zion Tech Group
              </a>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-900 hover:text-blue-600">
                Home</a>
              <a href="/services" className="text-gray-900 hover:text-blue-600">
                Services</a>
              <a href="/blog" className="text-gray-900 hover:text-blue-600">
                Blog</a>
              <a href="/contact" className="text-gray-900 hover:text-blue-600">
                Contact</a>
            </nav>
          </div>
        </div>
      </header>
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20"></section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6"></h1>
              Transform Your Business with<span className="block text-blue-200">AI-Powered Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Zion Tech Group delivers cutting-edge AI micro SaaS services, cloud automation,
              and enterprise IT solutions that drive growth, efficiency, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a href="/services"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
              >
                Explore Our Services;
                <a className="w-5 h-5 ml-2" />
              </a>
              <a href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950</a>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20 bg-gray-50"></section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-600">
                We deliver measurable results through innovative AI solutions</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8"></div>
              <div className="bg-white p-8 rounded-lg shadow-lg"></div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6"></div>
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Proven Results</h3>
                <p className="text-gray-600">
                  Our AI solutions have delivered 300% ROI and 70% cost reduction for enterprise clients.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg"></div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6"></div>
                  <Star className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Expert Team</h3>
                <p className="text-gray-600">
                  Our team of AI experts and engineers brings decades of experience in enterprise transformation.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg"></div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6"></div>
                  <a className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Fast Implementation</h3>
                <p className="text-gray-600">
                  Get your AI solutions up and running quickly with our streamlined implementation process.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white"></section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Let's discuss how our AI solutions can drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
              >
                Get Started Today;
                <a className="w-5 h-5 ml-2" />
              </a>
              <a href="/blog"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
              >
                View Our Blog;
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
          <div className="text-center"></div>
            <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-400 mb-6">
              Advanced AI and IT Solutions for Enterprise Transformation
            </p>
            <div className="flex justify-center space-x-6"></div>
              <a href="/services" className="text-gray-400 hover:text-white">Services</a>
              <a href="/about" className="text-gray-400 hover:text-white">About</a>
              <a href="/contact" className="text-gray-400 hover:text-white">Contact</a>
              <a href="/privacy" className="text-gray-400 hover:text-white">Privacy</a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800"></div>
              <p className="text-gray-400 text-sm">
                © 2026 Zion Tech Group. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
>>>>>>> 33a3472fdd6542a46cedfafebd3b6b0a7cc5e02d
    </div>
  )
}
import {Phone, CheckCircle, Star, ArrowRight} from 'lucide-react';

export constmetadata= {title: 'Zion Tech Group - Advanced AI and IT Solutions',;
  description: 'Leading provider of AI-powered enterprise solutions, automation, and digital transformation services.'};

export default function HomePage() {return (
    <divclassName="min-h-screenbg-white">{/* Header */};
    <headerclassName="bg-white border-bborder-gray-200"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="flex justify-betweenitems-centerpy-6"><divclassName="flexitems-center"><ahref="/"className="text-2 xl font-boldtext-gray-900">Zion Tech Group</a></di><navclassName="hiddenmd:flexspace-x-8"><ahref="/"className="text-gray-900hover:text-blue-600">Home</a><ahref="/services"className="text-gray-900hover:text-blue-600">Services</a><ahref="/blog"className="text-gray-900hover:text-blue-600">Blog</a><ahref="/contact"className="text-gray-900hover:text-blue-600">Contact</a></na></di></di></heade><mai n>{/* HeroSection */}
      <sectionclassName="bg-gradient-to-r from-blue-600to-purple-600text-whitepy-20"><divclassName="max-w-7 xl mx-auto px-4 sm:px-6lg:px-8text-center"><spanclassName="text-4 xlmd:text-6 xlfont-boldmb-6"></className="text-4 xlmd:text-6 xlfont-boldmb-6">Transform Your Business with<spanclassName="blocktext-blue-200">AI-PoweredSolutions</spa></h><spanclassName="text-xlmd:text-2 xl mb-8text-blue-100"></spa></className="text-xlmd:text-2 xl mb-8text-blue-100">Zion Tech Group delivers cutting-edge AI micro SaaS services, cloud automation, 
              and enterprise IT solutions that drive growth, efficiency, and innovation.
          </p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><ahref="/services"
               className="inline-flex items-center px-8 py-4 bg-white text-blue-60 0rounded-lghover:bg-blue-50transition-colorsfont-semibold"
              >Explore Our Services;
              <aclassName="w-5h-5ml-2" /></a><ahref="tel:+13024640950"
               className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-whiterounded-lghover:bg-whitehover:text-blue-600transition-colorsfont-semibold"
              ><PhoneclassName="w-5h-5mr-2" />Call +1 3024640950</a></di></di></sectio>{/* FeaturesSection */}
      <sectionclassName="py-20bg-gray-50"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-centermb-16"><spanclassName="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4"></spa></className="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4">Why Choose Zion Tech Group?
            </h><spanclassName="text-xltext-gray-600"></spa></className="text-xltext-gray-600">We deliver measurable results through innovative AI solutions</p></di><divclassName="gridmd:grid-cols-3gap-8"><divclassName="bg-white p-8 rounded-lgshadow-lg"><divclassName="w-12h-12bg-blue-100rounded-lg flex items-centerjustify-centermb-6"><CheckCircleclassName="w-6 h-6text-blue-600" /></di><spanclassName="text-xl font-semibold text-gray-900mb-4"></spa></className="text-xl font-semibold text-gray-900mb-4">Proven Results</h><spanclassName="text-gray-600"></spa></className="text-gray-600">Our AI solutions have delivered300% ROI and70% cost reduction for enterprise clients.
              </p></di><divclassName="bg-white p-8 rounded-lgshadow-lg"><divclassName="w-12h-12bg-green-100rounded-lg flex items-centerjustify-centermb-6"><StarclassName="w-6 h-6text-green-600" /></di><spanclassName="text-xl font-semibold text-gray-900mb-4"></spa></className="text-xl font-semibold text-gray-900mb-4">Expert Team</h><spanclassName="text-gray-600"></className="text-gray-600">Our team of AI experts and engineers brings decades of experience in enterprise transformation.
              </spa></p></di><divclassName="bg-white p-8 rounded-lgshadow-lg"><divclassName="w-12h-12bg-purple-100rounded-lg flex items-centerjustify-centermb-6"><aclassName="w-6 h-6text-purple-600" /></di><spanclassName="text-xl font-semibold text-gray-900mb-4"></spa></className="text-xl font-semibold text-gray-900mb-4">Fast Implementation</spa></h><spanclassName="text-gray-600"></className="text-gray-600">Get your AI solutions up and running quickly with our streamlined implementation process.
              </p></di></di></di></sectio>{/* CTASection */}
      <sectionclassName="py-20bg-blue-600text-white"><divclassName="max-w-7 xl mx-auto px-4 sm:px-6lg:px-8text-center"><spanclassName="text-3 xlmd:text-4 xlfont-boldmb-6"></className="text-3 xlmd:text-4 xlfont-boldmb-6">Ready to Transform Your Business?
          </spa></h><spanclassName="text-xl mb-8text-blue-100"></className="text-xl mb-8text-blue-100">Let's discuss how our AI solutions can drive your success.
          </p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><ahref="/contact"
               className="inline-flex items-center px-8 py-4 bg-white text-blue-60 0rounded-lghover:bg-blue-50transition-colorsfont-semibold"
              >Get Started Today;
              <aclassName="w-5h-5ml-2" /></a><ahref="/blog"
               className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-whiterounded-lghover:bg-whitehover:text-blue-600transition-colorsfont-semibold"
              >View Our Blog;
              <ArrowRightclassName="w-5h-5ml-2" /></a></di></di></sectio></mai>{/* Footer */}
    <footerclassName="bg-gray-900text-whitepy-12"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-center"><h3className="text-2 xlfont-boldmb-4">ZionTechGroup</spa></h><spanclassName="text-gray-400mb-6"></className="text-gray-400mb-6">Advanced AI and IT Solutions for Enterprise Transformation</p><divclassName="flexjustify-centerspace-x-6"><ahref="/services"className="text-gray-400hover:text-white">Services</a><ahref="/about"className="text-gray-400hover:text-white">About</a><ahref="/contact"className="text-gray-400hover:text-white">Contact</a><ahref="/privacy"className="text-gray-400hover:text-white">Privacy</a></di><divclassName="mt-8 pt-8 border-tborder-gray-800"><spanclassName="text-gray-400text-sm"></className="text-gray-400text-sm">© 2026Zion Tech Group. All rights reserved.
            </spa></p></di></di></di></foote></di>
  );
};
