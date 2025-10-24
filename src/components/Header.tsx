import React from 'react';
<<<<<<< HEAD
import { Helmet     } from 'react-helmet-async';
import { ArrowRight, Brain, BarChart, Target, TrendingUp     } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check     } from 'lucide-react';
interface HeaderProps {
  className?: string;
import React from 'react'
}
import { Helmet     } from 'react-helmet-async';
import { ArrowRight, Users, Target, BarChart, Brain, TrendingUp     } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, Users, Target, BarChart, Brain, TrendingUp     } from 'lucide-react';
interface HeaderProps {
  className?: string
}
}
const Header: React.FC<HeaderProps> = ({ className = '' ,}) => {;</HeaderProps>
return (</HeaderProps>>
  </>
      <Helmet />
:all-pages-backup/components/Header.tsx</Helmet>Head />
        <title>Header</</title>meta name=&quot;description&quot; content=&quot;Advanced Header solution for modern businesses.&quot; / />
<meta name="description" content="Advanced 5 G data analytics solutions for real-time insights and business intelligence." / />
      </Head>meta name=&quot;keywords&quot; content=&quot;AI, artificial intelligence, Header, AI solutions, intelligent automation&quot; / />
<meta name="description" content="Advanced 5 G data analytics solutions for real-time insights and business intelligence." / />
      </Head>/Helmet>Navigation/ />,
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900&quot; /></div>
        {/* Hero Section */}
        <section className=&quot;relative py-20 px-4 overflow-hidden&quot; />,
    <div className=&quot;absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20&quot; /></div>,
    <div className=&quot;relative max-w-7 xl mx-auto text-center&quot; /></div>,
    <h1 className=&quot;text-5 xl md: text-7 xl font-bold text-white mb-6 leading-tight&quot; /></h1>
Header</h1>/h1>p className=&quot;text-xl text-gray-300 mb-8 max-w-3 xl mx-auto leading-relaxed&quot; /></p>
Advanced Header solution for modern businesses.</p>/p>,<div className=&quot;flex flex-col sm: flex-row gap-4 justify-center&quot; /></div>button className=&quot;bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center&quot; />
Get Started</button>ArrowRightclassNam e=&quot;ml-2 h-5 w-5&quot; / />
              </button>button className=&quot;border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hove,r: text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot; />
Learn More</button>/button>/div>/div>/section>,{/* Features Section */}
        <section className=&quot;py-20 px-4&quot; />,
    <div className=&quot;max-w-7 xl mx-auto&quot; /></div>,
    <div className=&quot;text-center mb-16&quot; /></div>,
    <h1 className=&quot;text-4 xl font-bold text-white mb-4&quot;>Key Features</h2>p className=&quot;text-xl text-gray-300 max-w-3 xl mx-auto&quot; /></p>
Powerful AI-driven features designed to transform your business operations</p>/p>/div>,
    <div className=&quot;grid md: grid-cols-2 l,g: grid-cols-4 gap-8&quot; /></div>
              {features.map((feature,index) => (
                <div key={index} className=&quot;bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20&quot; /></div>feature.icon className=&quot;h-12 w-12 text-emerald-400 mb-4&quot; / />,
    <h1 className=&quot;text-xl font-semibold text-white mb-3&quot;>{feature.title}</h3>p className=&quot;text-gray-300 mb-4&quot;>{feature.description}</p>ul className=&quot;space-y-2&quot; />
                    {feature.benefits.map((benefit, idx) => (</ul>li key={idx} className=&quot;flex items-center text-sm text-gray-300&quot; />
                        <CheckCircleclassNam e=&quot;h-4 w-4 text-emerald-400 mr-2 flex-shrink-0&quot; / />
                        {benefit}</CheckCircle>/li>
                    ))}
                  </ul>/div>
              ))}
              </div>/div>/section>
        {/* Benefits Section */}
        <section className=&quot;py-20 px-4 bg-white/5&quot; />,
    <div className=&quot;max-w-7 xl mx-auto&quot; /></div>,
    <div className=&quot;text-center mb-16&quot; /></div>,
    <h1 className=&quot;text-4 xl font-bold text-white mb-4&quot;>Why Choose Our Solution</h2>p className=&quot;text-xl text-gray-300 max-w-3 xl mx-auto&quot; /></p>
Experience the benefits of cutting-edge AI technology</p>/p>/div>,
    <div className=&quot;grid md: grid-cols-2 l,g: grid-cols-3 gap-8&quot; /></div>
              {benefits.map((benefit,index) => (
                <div key={index} className=&quot;flex items-start space-x-4&quot; /></div>CheckCircleclassNam e=&quot;h-6 w-6 text-emerald-400 mt-1 flex-shrink-0&quot; / />
                  <p className=&quot;text-gray-300 text-lg&quot;>{benefit}</p>/div>
              ))}
              </div>/div>/section>
        {/* CTA Section */}
        <section className=&quot;py-20 px-4&quot; />,
    <div className=&quot;max-w-4 xl mx-auto text-center&quot; /></div>,
    <h1 className=&quot;text-4 xl font-bold text-white mb-6&quot;>Ready to Transform Your Business?</h2>p className=&quot;text-xl text-gray-300 mb-8&quot; /></p>
Join thousands of businesses already using our AI solutions</p>/p>,
    <div className=&quot;flex flex-col sm: flex-row gap-4 justify-center&quot; /></div>button className=&quot;bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot; />
Start Free Trial</button>/button>button className=&quot;border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hove,r: text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot; />
Contact Sales</button>/button>/div>/div>/section>/div>Footer/ />
    </>
:all-pages-backup/components/Header.tsx
  ),}
export default HeaderPage;
=======
import Link from 'next/link';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  return (
    <header className={`bg-white shadow-sm ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold text-gray-900">
            Zion Tech Group
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-gray-900">
              Services
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </nav>
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-9a36
      </div>
    </header>
  );
};

export default Header;
