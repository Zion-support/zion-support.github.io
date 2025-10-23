import React from 'react';
import {Phone, CheckCircle, Star, ArrowRight} from 'lucide-react';

export constmetadata= {title: 'Zion Tech Group - Advanced AI and IT Solutions',
  description: 'Leading provider of AI-powered enterprise solutions, automation, and digital transformation services.'};

export default function HomePage() {return (
    <divclassName="min-h-screenbg-white">{/* Header */}
    <headerclassName="bg-white border-bborder-gray-200"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="flex justify-betweenitems-centerpy-6"><divclassName="flexitems-center"><ahref="/"className="text-2 xl font-boldtext-gray-900">Zion Tech Group
            </a></di><navclassName="hiddenmd:flexspace-x-8"><ahref="/"className="text-gray-900hover:text-blue-600">Home
            </a><ahref="/services"className="text-gray-900hover:text-blue-600">Services
            </a><ahref="/blog"className="text-gray-900hover:text-blue-600">Blog
            </a><ahref="/contact"className="text-gray-900hover:text-blue-600">Contact
            </a></na></di></di></heade><mai n>{/* HeroSection */}
      <sectionclassName="bg-gradient-to-r from-blue-600to-purple-600text-whitepy-20"><divclassName="max-w-7 xl mx-auto px-4 sm:px-6lg:px-8text-center"><spanclassName="text-4 xlmd:text-6 xlfont-boldmb-6"></className="text-4 xlmd:text-6 xlfont-boldmb-6">Transform Your Business with
            <spanclassName="blocktext-blue-200">AI-PoweredSolutions</spa></h><spanclassName="text-xlmd:text-2 xl mb-8text-blue-100"></spa></className="text-xlmd:text-2 xl mb-8text-blue-100">Zion Tech Group delivers cutting-edge AI micro SaaS services, cloud automation, 
              and enterprise IT solutions that drive growth, efficiency, and innovation.
          </p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><ahref="/services"
               className="inline-flex items-center px-8 py-4 bg-white text-blue-60 0rounded-lghover:bg-blue-50transition-colorsfont-semibold"
              >Explore Our Services
              <aclassName="w-5h-5ml-2" /></a><ahref="tel:+13024640950"
               className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-whiterounded-lghover:bg-whitehover:text-blue-600transition-colorsfont-semibold"
              ><PhoneclassName="w-5h-5mr-2" />Call +1 3024640950</a></di></di></sectio>{/* FeaturesSection */}
      <sectionclassName="py-20bg-gray-50"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-centermb-16"><spanclassName="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4"></spa></className="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4">Why Choose Zion Tech Group?
            </h><spanclassName="text-xltext-gray-600"></spa></className="text-xltext-gray-600">We deliver measurable results through innovative AI solutions
            </p></di><divclassName="gridmd:grid-cols-3gap-8"><divclassName="bg-white p-8 rounded-lgshadow-lg"><divclassName="w-12h-12bg-blue-100rounded-lg flex items-centerjustify-centermb-6"><CheckCircleclassName="w-6 h-6text-blue-600" /></di><spanclassName="text-xl font-semibold text-gray-900mb-4"></spa></className="text-xl font-semibold text-gray-900mb-4">Proven Results
              </h><spanclassName="text-gray-600"></spa></className="text-gray-600">Our AI solutions have delivered300% ROI and70% cost reduction for enterprise clients.
              </p></di><divclassName="bg-white p-8 rounded-lgshadow-lg"><divclassName="w-12h-12bg-green-100rounded-lg flex items-centerjustify-centermb-6"><StarclassName="w-6 h-6text-green-600" /></di><spanclassName="text-xl font-semibold text-gray-900mb-4"></spa></className="text-xl font-semibold text-gray-900mb-4">Expert Team
              </h><spanclassName="text-gray-600"></className="text-gray-600">Our team of AI experts and engineers brings decades of experience in enterprise transformation.
              </spa></p></di><divclassName="bg-white p-8 rounded-lgshadow-lg"><divclassName="w-12h-12bg-purple-100rounded-lg flex items-centerjustify-centermb-6"><aclassName="w-6 h-6text-purple-600" /></di><spanclassName="text-xl font-semibold text-gray-900mb-4"></spa></className="text-xl font-semibold text-gray-900mb-4">Fast Implementation
              </spa></h><spanclassName="text-gray-600"></className="text-gray-600">Get your AI solutions up and running quickly with our streamlined implementation process.
              </p></di></di></di></sectio>{/* CTASection */}
      <sectionclassName="py-20bg-blue-600text-white"><divclassName="max-w-7 xl mx-auto px-4 sm:px-6lg:px-8text-center"><spanclassName="text-3 xlmd:text-4 xlfont-boldmb-6"></className="text-3 xlmd:text-4 xlfont-boldmb-6">Ready to Transform Your Business?
          </spa></h><spanclassName="text-xl mb-8text-blue-100"></className="text-xl mb-8text-blue-100">Let's discuss how our AI solutions can drive your success.
          </p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><ahref="/contact"
               className="inline-flex items-center px-8 py-4 bg-white text-blue-60 0rounded-lghover:bg-blue-50transition-colorsfont-semibold"
              >Get Started Today
              <aclassName="w-5h-5ml-2" /></a><ahref="/blog"
               className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-whiterounded-lghover:bg-whitehover:text-blue-600transition-colorsfont-semibold"
              >View Our Blog
              <ArrowRightclassName="w-5h-5ml-2" /></a></di></di></sectio></mai>{/* Footer */}
    <footerclassName="bg-gray-900text-whitepy-12"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-center"><h3className="text-2 xlfont-boldmb-4">ZionTechGroup</spa></h><spanclassName="text-gray-400mb-6"></className="text-gray-400mb-6">Advanced AI and IT Solutions for Enterprise Transformation
          </p><divclassName="flexjustify-centerspace-x-6"><ahref="/services"className="text-gray-400hover:text-white">Services</a><ahref="/about"className="text-gray-400hover:text-white">About</a><ahref="/contact"className="text-gray-400hover:text-white">Contact</a><ahref="/privacy"className="text-gray-400hover:text-white">Privacy</a></di><divclassName="mt-8 pt-8 border-tborder-gray-800"><spanclassName="text-gray-400text-sm"></className="text-gray-400text-sm">© 2026Zion Tech Group. All rights reserved.
            </spa></p></di></di></di></foote></di>
  );
};
