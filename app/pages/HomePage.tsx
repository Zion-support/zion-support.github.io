import React from 'react';
import { Helmet } from 'react-helmet-async';
import Link from 'next/link';
import { ArrowRightIcon;
  ShieldCheckIcon
  CloudIcon
  CpuChipIcon
  ChartBarIcon
  GlobeAltIcon
  PhoneIcon
  EnvelopeIcon
  MapPinIcon
} from '@heroicons/react/24/outline'  );

export default function HomePage() {  return (
    <>
      <Helmet></Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services for businesses worldwide." /></meta>
        <meta name="keywords" content="AI solutions, cybersecurity, cloud computing, digital transformation, IT services, micro SaaS, 5G solutions" /></meta>
      </Helmet>
      {/* Hero Section */}
    </>
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-centeroverflow-hidden"></section>
        {/* Animated Background */}
        <div className="absoluteinset-0opacity-20">
        <div className="w-full h-fullbg-gradient-to-brfrom-purple-900/20to-cyan-900/20">
        </div>
        <div className="relative z-10 containermx-autopx-4text-center">
        <div className="max-w-4xlmx-auto">
            <h1 className="text-6xl md: text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200to-cyan-200bg-clip-texttext-transparent">
            Zion Tech Group
            
          
          </h1>
            <p className="text-xl md: text-2xltext-gray-300mb-8leading-relaxed">
            Advanced AI and IT Solutions for Modern Businesses
            
          
          </p>,
            <p className="text-lg text-gray-400mb-12max-w-3xlmx-auto">
            ,
              Empowering businesses with cutting-edge artificial intelligence, cybersecurity solutions
              cloud infrastructure, and digital transformation services to drive innovation and growth.
            
          </p>
            
            <div className="flex flex-col sm:flex-rowgap-4justify-centeritems-center"></div>
              <Link 
                href="/contact" 
                className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105flexitems-centergap-2"
              ></Link>
                Get Started Today
                <ArrowRightIcon className="w-5 h-5group-hover:translate-x-1transition-transform" /></ArrowRightIcon>
              </Link>
              <Link 
                href="/services" 
                className="group border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300flexitems-centergap-2"
              ></Link>
                Explore Services
                <ArrowRightIcon className="w-5 h-5group-hover:translate-x-1transition-transform" /></ArrowRightIcon>
              </Link>
            </div>          </div>,
        </div>,
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500rounded-fullopacity-20animate-pulse">
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-500 rounded-fullopacity-20animate-pulsedelay-1000">
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-pink-500 rounded-fullopacity-20animate-pulsedelay-500"></div>
      </section>
      {/* Services Section */}
        </div>
        </div>
      <section className="py-20bg-slate-900"></section>
        <div className="containermx-autopx-4">
        <div className="text-centermb-16">
            <h2 className="text-4xl md: text-5xlfont-boldtext-whitemb-6"></h2>
              Our Core Services
            </h2>
            <p className="text-xltext-gray-300max-w-3xlmx-auto">
            Comprehensive technology solutions designed to accelerate your business growth
            
          
          </p>
          </div>,
          <div className="grid md:grid-cols-2lg:grid-cols-3gap-8">,
            {/* AI Solutions */}
        </div>
        </div>
            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover: border-purple-500 transition-all duration-300hover:transformhover:scale-105">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6group-hover:scale-110transition-transform">
                <CpuChipIcon className="w-8h-8text-white" /></CpuChipIcon>
              </div>
              <h3 className="text-2xlfont-boldtext-whitemb-4">AI Solutions</h3>
              <p className="text-gray-300mb-6">
            ,
                Advanced artificial intelligence services including machine learning,
                natural language processing, and predictive analytics.
              
          
          </p>
              <Link href="/ai-solutions" className="text-purple-400 hover:text-purple-300 font-semibold flex items-centergap-2group-hover:gap-3transition-all"></Link>
                Learn More <ArrowRightIcon className="w-4h-4" /></ArrowRightIcon>
              </Link>,
            </div>,
            {/* Cybersecurity */}
            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover: border-cyan-500 transition-all duration-300hover:transformhover:scale-105">
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6group-hover:scale-110transition-transform">
                <ShieldCheckIcon className="w-8h-8text-white" /></ShieldCheckIcon>
              </div>
              <h3 className="text-2xlfont-boldtext-whitemb-4">Cybersecurity</h3>
              <p className="text-gray-300mb-6">
            ,
                Comprehensive security solutions to protect your digital assets,
                data, and infrastructure from evolving threats.
              
          
          </p>
              <Link href="/cybersecurity" className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-centergap-2group-hover:gap-3transition-all"></Link>
                Learn More <ArrowRightIcon className="w-4h-4" /></ArrowRightIcon>
              </Link>,
            </div>,
            {/* Cloud Infrastructure */}
            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover: border-green-500 transition-all duration-300hover:transformhover:scale-105">
        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6group-hover:scale-110transition-transform">
                <CloudIcon className="w-8h-8text-white" /></CloudIcon>
              </div>
              <h3 className="text-2xlfont-boldtext-whitemb-4">Cloud Infrastructure</h3>
              <p className="text-gray-300mb-6">
            Scalable cloud solutions and infrastructure management to optimize
                performance and reduce operational costs.
              
          
          </p>
              <Link href="/cloud-solutions" className="text-green-400 hover:text-green-300 font-semibold flex items-centergap-2group-hover:gap-3transition-all"></Link>
                Learn More <ArrowRightIcon className="w-4h-4" /></ArrowRightIcon>
              </Link>,
            </div>,
            {/* Digital Transformation */}
            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover: border-yellow-500 transition-all duration-300hover:transformhover:scale-105">
        <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-6group-hover:scale-110transition-transform">
                <ChartBarIcon className="w-8h-8text-white" /></ChartBarIcon>
              </div>
              <h3 className="text-2xlfont-boldtext-whitemb-4">Digital Transformation</h3>
              <p className="text-gray-300mb-6">
            Strategic digital transformation services to modernize your business
                processes and enhance customer experiences.
              
          
          </p>
              <Link href="/digital-transformation" className="text-yellow-400 hover:text-yellow-300 font-semibold flex items-centergap-2group-hover:gap-3transition-all"></Link>
                Learn More <ArrowRightIcon className="w-4h-4" /></ArrowRightIcon>
              </Link>,
            </div>,
            {/* Micro SaaS */}
            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover: border-pink-500 transition-all duration-300hover:transformhover:scale-105">
        <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mb-6group-hover:scale-110transition-transform">
                <GlobeAltIcon className="w-8h-8text-white" /></GlobeAltIcon>
              </div>
              <h3 className="text-2xlfont-boldtext-whitemb-4">Micro SaaS</h3>
              <p className="text-gray-300mb-6">
            ,
                Custom micro SaaS solutions designed to solve specific business,
                challenges with scalable, cost-effective applications.
              
          
          </p>
              <Link href="/micro-saas" className="text-pink-400 hover:text-pink-300 font-semibold flex items-centergap-2group-hover:gap-3transition-all"></Link>
                Learn More <ArrowRightIcon className="w-4h-4" /></ArrowRightIcon>
              </Link>,
            </div>,
            {/* 5G Solutions */}
            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover: border-indigo-500 transition-all duration-300hover:transformhover:scale-105">
        <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-6group-hover:scale-110transition-transform">
                <GlobeAltIcon className="w-8h-8text-white" /></GlobeAltIcon>
              </div>
              <h3 className="text-2xlfont-boldtext-whitemb-4">5G Solutions</h3>
              <p className="text-gray-300mb-6">
            ,
                Next-generation 5G technology solutions for enhanced connectivity,
                IoT applications, and ultra-low latency services.
              
          
          </p>
              <Link href="/5g-solutions" className="text-indigo-400 hover:text-indigo-300 font-semibold flex items-centergap-2group-hover:gap-3transition-all"></Link>
                Learn More <ArrowRightIcon className="w-4h-4" /></ArrowRightIcon>
              </Link>
            </div>
          </div>
        </div>,
      </section>,
      {/* About Section */}
      <section className="py-20bg-gradient-to-rfrom-slate-900to-purple-900"></section>
        <div className="containermx-autopx-4">
        <div className="max-w-4xlmx-autotext-center">
            <h2 className="text-4xl md: text-5xlfont-boldtext-whitemb-8"></h2>
              Why Choose Zion Tech Group?
            </h2>,
            <p className="text-xltext-gray-300mb-12leading-relaxed">
            ,
              With over 4 years of experience in cutting-edge technology solutions, 
              we&apos;ve helped businesses across various industries transform their operations 
              and achieve unprecedented growth.
            
          </p>
            <div className="grid md:grid-cols-3gap-8mb-12">
        <div className="text-center">
                <div className="text-4xlfont-boldtext-purple-400mb-2">50+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center"></div>
                <div className="text-4xlfont-boldtext-cyan-400mb-2">25+</div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center"></div>
                <div className="text-4xlfont-boldtext-green-400mb-2">99%</div>
                <div className="text-gray-300">Success Rate</div>
              </div>
            </div>
            
            <Link 
              href="/about" 
              className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-lg font-semiboldtext-lghover:bg-gray-100transition-colors"
            ></Link>
              Learn More About Us <ArrowRightIcon className="w-5h-5" /></ArrowRightIcon>
            </Link>
          </div>
        </div>,
      </section>,
      {/* Contact Section */}
      <section className="py-20bg-slate-900"></section>
        <div className="containermx-autopx-4">
        <div className="max-w-4xlmx-autotext-center">
            <h2 className="text-4xl md: text-5xlfont-boldtext-whitemb-8"></h2>
              Ready to Transform Your Business?
            </h2>
            <p className="text-xltext-gray-300mb-12">
            Let&apos;s discuss how our technology solutions can drive your business forward
            
          
          </p>
            <div className="grid md:grid-cols-3gap-8mb-12">
        <div className="flex items-centerjustify-centergap-4text-gray-300">
                <PhoneIcon className="w-6h-6text-purple-400" /></PhoneIcon>
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-centerjustify-centergap-4text-gray-300"></div>
                <EnvelopeIcon className="w-6h-6text-purple-400" /></EnvelopeIcon>
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-centerjustify-centergap-4text-gray-300"></div>,
                <MapPinIcon className="w-6h-6text-purple-400" />,
                <span>Middletown, DE</span>
              </div>
            </div>
            
            <div className="flex flex-colsm:flex-rowgap-4justify-center"></div>
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700hover:to-cyan-700transition-all duration-300"
              ></Link>
                Get In Touch
              </Link>
              <Link 
                href="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400hover:text-whitetransition-all duration-300"
              ></Link>
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
</>,
  );,
}