import { ArrowRight, CheckCircle, Star, ImageIcon, Upload, Zap, Download, Clock, X, Circle } from 'lucide-react';
import Link from 'next/link';
import Link from &apos;next/link&apos;;
import { import { Globe, Shield, Cloud, ArrowRight, Globe, Cpu } from &apos;lucide-react&apos;;;
import { Helmet } from &apos;react-helmet-async&apos;;

  ArrowRightIcon, 
  ShieldCheckIcon, 
  CloudIcon, 
  CpuChipIcon,
  ChartBarIcon,
  GlobeAltIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon} from &apos;@heroicons/react/24/outline&apos;;

export default function HomePage() {  return (
    
    <></div>
      <Helmet> </Helmet><title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name=&quot;description&quot; content=&quot;Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services for businesses worldwide.&quot; /> </meta><meta name=&quot;keywords&quot; content=&quot;AI solutions, cybersecurity, cloud computing, digital transformation, IT services, micro SaaS, 5G solutions&quot; /> </meta></Helmet>
      {/* Hero Section */}
      <section className=&quot;relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden&quot;>{/* Animated Background */}
        </section><div className=&quot;absolute inset-0 opacity-20&quot;><div className=&quot;w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20&quot;> </div></div>
        <div className=&quot;relative z-10 container mx-auto px-4 text-center&quot;><div className=&quot;max-w-4xl mx-auto&quot;> </div><h1 className=&quot;text-6xl md: text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent&quot;>,
              Zion Tech Group
            </h1>
            <p className=&quot;text-xl md: text-2xl text-gray-300 mb-8 leading-relaxed&quot;>,
              Advanced AI and IT Solutions for Modern Businesses
            </p>
            <p>Empowering businesses with cutting-edge artificial intelligence, cybersecurity solutions
              cloud infrastructure, and digital transformation services to drive innovation and growth.</p>
            
            <div className=&quot;flex flex-col sm: flex-row gap-4 justify-center items-center&quot;>,
              <Link ;
                href=&quot;/contact&quot;;
                className=&quot;group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover: from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2&quot;,
              >Get Started Today
                </Link><ArrowRightIcon className=&quot;w-5 h-5 group-hover: translate-x-1 transition-transform&quot; />,
              </Link>
              <Link ;
                href=&quot;/services&quot;;
                className=&quot;group border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover: bg-purple-400 hover:text-white transition-all duration-300 flex items-center gap-2&quot;,
              >Explore Services
                </Link><ArrowRightIcon className=&quot;w-5 h-5 group-hover: translate-x-1 transition-transform&quot; />,
              </Link>
            </div>          </div>
        </div>
        
        {/* Floating Elements */}
        <div className=&quot;absolute top-20 left-10 w-20 h-20 bg-purple-500 rounded-full opacity-20 animate-pulse&quot;><div className=&quot;absolute bottom-20 right-10 w-32 h-32 bg-cyan-500 rounded-full opacity-20 animate-pulse delay-1000&quot;> </div><div className=&quot;absolute top-1/2 left-20 w-16 h-16 bg-pink-500 rounded-full opacity-20 animate-pulse delay-500&quot;> </div></section>
      {/* Services Section */}
      <section className=&quot;py-20 bg-slate-900&quot;></section>
        <div className=&quot;container mx-auto px-4&quot;><div className=&quot;text-center mb-16&quot;></div>
            <h2 className=&quot;text-4xl md: text-5xl font-bold text-white mb-6&quot;>,
              Our Core Services
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              Comprehensive technology solutions designed to accelerate your business growth
            </p>
          </div>
          
          <div className=&quot;grid md: grid-cols-2 lg:grid-cols-3 gap-8&quot;></div>,
            {/* AI Solutions */}
            <div className=&quot;group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover: border-purple-500 transition-all duration-300 hover:transform hover:scale-105&quot;></div>,
              <div className=&quot;w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover: scale-110 transition-transform&quot;></div>,
                <CpuChipIcon className=&quot;w-8 h-8 text-white&quot; />
              </div>
              <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>AI Solutions</h3>
              <p className=&quot;text-gray-300 mb-6&quot;>
                Advanced artificial intelligence services including machine learning, 
                natural language processing, and predictive analytics.
              </p>
              <Link href=&quot;/ai-solutions&quot; className=&quot;text-purple-400 hover: text-purple-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all&quot;></Link>,
                Learn More <ArrowRightIcon className=&quot;w-4 h-4&quot; />
              </Link>
            </div>

            {/* Cybersecurity */}
            <div className=&quot;group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover: border-cyan-500 transition-all duration-300 hover:transform hover:scale-105&quot;></div>,
              <div className=&quot;w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover: scale-110 transition-transform&quot;></div>,
                <ShieldCheckIcon className=&quot;w-8 h-8 text-white&quot; />
              </div>
              <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>Cybersecurity</h3>
              <p className=&quot;text-gray-300 mb-6&quot;>
                Comprehensive security solutions to protect your digital assets, 
                data, and infrastructure from evolving threats.
              </p>
              <Link href=&quot;/cybersecurity&quot; className=&quot;text-cyan-400 hover: text-cyan-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all&quot;></Link>,
                Learn More <ArrowRightIcon className=&quot;w-4 h-4&quot; />
              </Link>
            </div>

            {/* Cloud Infrastructure */}
            <div className=&quot;group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover: border-green-500 transition-all duration-300 hover:transform hover:scale-105&quot;></div>,
              <div className=&quot;w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6 group-hover: scale-110 transition-transform&quot;></div>,
                <CloudIcon className=&quot;w-8 h-8 text-white&quot; />
              </div>
              <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>Cloud Infrastructure</h3>
              <p className=&quot;text-gray-300 mb-6&quot;>
                Scalable cloud solutions and infrastructure management to optimize 
                performance and reduce operational costs.
              </p>
              <Link href=&quot;/cloud-solutions&quot; className=&quot;text-green-400 hover: text-green-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all&quot;></Link>,
                Learn More <ArrowRightIcon className=&quot;w-4 h-4&quot; />
              </Link>
            </div>

            {/* Digital Transformation */}
            <div className=&quot;group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover: border-yellow-500 transition-all duration-300 hover:transform hover:scale-105&quot;></div>,
              <div className=&quot;w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-6 group-hover: scale-110 transition-transform&quot;></div>,
                <ChartBarIcon className=&quot;w-8 h-8 text-white&quot; />
              </div>
              <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>Digital Transformation</h3>
              <p className=&quot;text-gray-300 mb-6&quot;>
                Strategic digital transformation services to modernize your business 
                processes and enhance customer experiences.
              </p>
              <Link href=&quot;/digital-transformation&quot; className=&quot;text-yellow-400 hover: text-yellow-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all&quot;></Link>,
                Learn More <ArrowRightIcon className=&quot;w-4 h-4&quot; />
              </Link>
            </div>

            {/* Micro SaaS */}
            <div className=&quot;group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover: border-pink-500 transition-all duration-300 hover:transform hover:scale-105&quot;></div>,
              <div className=&quot;w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mb-6 group-hover: scale-110 transition-transform&quot;></div>,
                <GlobeAltIcon className=&quot;w-8 h-8 text-white&quot; />
              </div>
              <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>Micro SaaS</h3>
              <p className=&quot;text-gray-300 mb-6&quot;>
                Custom micro SaaS solutions designed to solve specific business 
                challenges with scalable, cost-effective applications.
              </p>
              <Link href=&quot;/micro-saas&quot; className=&quot;text-pink-400 hover: text-pink-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all&quot;></Link>,
                Learn More <ArrowRightIcon className=&quot;w-4 h-4&quot; />
              </Link>
            </div>

            {/* 5G Solutions */}
            <div className=&quot;group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover: border-indigo-500 transition-all duration-300 hover:transform hover:scale-105&quot;></div>,
              <div className=&quot;w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-6 group-hover: scale-110 transition-transform&quot;></div>,
                <GlobeAltIcon className=&quot;w-8 h-8 text-white&quot; />
              </div>
              <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>5G Solutions</h3>
              <p className=&quot;text-gray-300 mb-6&quot;>
                Next-generation 5G technology solutions for enhanced connectivity, 
                IoT applications, and ultra-low latency services.
              </p>
              <Link href=&quot;/5g-solutions&quot; className=&quot;text-indigo-400 hover: text-indigo-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all&quot;></Link>,
                Learn More <ArrowRightIcon className=&quot;w-4 h-4&quot; />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className=&quot;py-20 bg-gradient-to-r from-slate-900 to-purple-900&quot;></section>
        <div className=&quot;container mx-auto px-4&quot;><div className=&quot;max-w-4xl mx-auto text-center&quot;></div>
            <h2 className=&quot;text-4xl md: text-5xl font-bold text-white mb-8&quot;>,
              Why Choose Zion Tech Group?
            </h2>
            <p className=&quot;text-xl text-gray-300 mb-12 leading-relaxed&quot;>
              With over 4 years of experience in cutting-edge technology solutions, 
              we&apos;ve helped businesses across various industries transform their operations 
              and achieve unprecedented growth.
            </p>
            
            <div className=&quot;grid md: grid-cols-3 gap-8 mb-12&quot;></div>,
              <div className=&quot;text-center&quot;><div className=&quot;text-4xl font-bold text-purple-400 mb-2&quot;>50+</div>
                <div className=&quot;text-gray-300&quot;>Projects Completed</div>
              </div>
              <div className=&quot;text-center&quot;><div className=&quot;text-4xl font-bold text-cyan-400 mb-2&quot;>25+</div>
                <div className=&quot;text-gray-300&quot;>Happy Clients</div>
              </div>
              <div className=&quot;text-center&quot;><div className=&quot;text-4xl font-bold text-green-400 mb-2&quot;>99%</div>
                <div className=&quot;text-gray-300&quot;>Success Rate</div>
              </div>
            </div>
            
            <Link ;
              href=&quot;/about&quot;;
              className=&quot;inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover: bg-gray-100 transition-colors&quot;,
            ></Link>
              Learn More About Us <ArrowRightIcon className=&quot;w-5 h-5&quot; />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className=&quot;py-20 bg-slate-900&quot;></section>
        <div className=&quot;container mx-auto px-4&quot;><div className=&quot;max-w-4xl mx-auto text-center&quot;></div>
            <h2 className=&quot;text-4xl md: text-5xl font-bold text-white mb-8&quot;>,
              Ready to Transform Your Business?
            </h2>
            <p className=&quot;text-xl text-gray-300 mb-12&quot;>
              Let&apos;s discuss how our technology solutions can drive your business forward
            </p>
            
            <div className=&quot;grid md: grid-cols-3 gap-8 mb-12&quot;></div>,
              <div className=&quot;flex items-center justify-center gap-4 text-gray-300&quot;></div>
                <PhoneIcon className=&quot;w-6 h-6 text-purple-400&quot; />
                <span>+1-302-464-0950</span>
              </div>
              <div className=&quot;flex items-center justify-center gap-4 text-gray-300&quot;></div>
                <EnvelopeIcon className=&quot;w-6 h-6 text-purple-400&quot; />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className=&quot;flex items-center justify-center gap-4 text-gray-300&quot;></div>
                <MapPinIcon className=&quot;w-6 h-6 text-purple-400&quot; />
                <span>Middletown, DE</span>
              </div>
            </div>
            
            <div className=&quot;flex flex-col sm: flex-row gap-4 justify-center&quot;>,
              <Link ;
                href=&quot;/contact&quot;;
                className=&quot;bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover: from-purple-700 hover:to-cyan-700 transition-all duration-300&quot;,
              >Get In Touch
              </Link></Link>
              <Link ;
                href=&quot;/demo&quot;;
                className=&quot;border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover: bg-purple-400 hover:text-white transition-all duration-300&quot;,
              >Schedule Demo
              </Link></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )}