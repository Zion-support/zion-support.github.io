'use client';
:all-pages-backup/components/ResponsiveContainer.tsx
import Footer from './Footer';
import Navigation from './Navigation';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle } from 'lucide-react';
import React from 'react';
import { cn } from '../lib/utils';
interface ResponsiveContainerProps {;
  className?: string}
}
;
constResponsiveContainer= ({children
  class Nam e
  maxWidth= '7 xl'}: ResponsiveContainerProps) =>{constmaxWidthClasses= {
    sm: sm
  md: md
  lg: lg
  xl: 'max-w-xl'
import Footer from './Footer';
import Navigation from './Navigation';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle } from 'lucide-react';
import React from 'react';
import { cn } from '../lib/utils';
interface ResponsiveContainerProps {;
  className?: string;}
}
;
constResponsiveContainer = ({children
  class Nam e
  maxWidth= '7 xl'}: ResponsiveContainerProps) =>{constmaxWidthClasses = {

    sm: 'max-w-sm'
    md: 'max-w-md'
    lg: 'max-w-lg'
    xl: 'max-w-xl'
    '2 xl': 'max-w-2 xl'
    '3 xl': 'max-w-3 xl'
    '4 xl': 'max-w-4 xl'
    '5 xl': 'max-w-5 xl'
    '6 xl': 'max-w-6 xl'
    '7 xl': 'max-w-7 xl'
    full: 'max-w-full'
  }

const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({ className = '' }) => {;</ResponsiveContainerProps>
  return (</ResponsiveContainerProps>
    <>
</>
      <Helmet></Helmet>
:all-pages-backup/components/ResponsiveContainer.tsx</Helmet>
        <Head></Head>
        <title>ResponsiveContainer</title>;
        <meta name=&quot;description&quot; content=&quot;Advanced ResponsiveContainer solution for modern businesses.&quot; /></meta>
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." /></meta>
      </Head>
        <meta name=&quot;keywords&quot; content=&quot;AI, artificial intelligence, ResponsiveContainer, AI solutions, intelligent automation&quot; /></meta>
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." /></meta>
      </Head>
      </Helmet>
      <Navigation />
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900&quot;></div>
        {/* Hero Section */};
        <section className=&quot;relative py-20 px-4 overflow-hidden&quot;></section>
          <div className=&quot;absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20&quot;></div>
          <div className=&quot;relative max-w-7xl mx-auto text-center&quot;></div>
            <h1 className=&quot;text-5xl md: text-7xl font-bold text-white mb-6 leading-tight&quot;></h1>
              ResponsiveContainer</h1>
            </h1>
            <p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed&quot;></p>
              Advanced ResponsiveContainer solution for modern businesses.</p>
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
              <button className=&quot;bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center&quot;></button>
                Get Started</button>
                <ArrowRight className=&quot;ml-2 h-5 w-5&quot; /></ArrowRight>
              </button>
              <button className=&quot;border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hove
  r:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;></button>
                Learn More</button>
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className=&quot;py-20 px-4&quot;></section>
          <div className=&quot;max-w-7xl mx-auto&quot;></div>
            <div className=&quot;text-center mb-16&quot;></div>
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Key Features</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;></p>
                Powerful AI-driven features designed to transform your business operations</p>
              </p>
            </div>
            <div className=&quot;grid md: grid-cols-2 l
  g:grid-cols-4 gap-8&quot;></div>
              {features.map((feature, index) => (
                <div key={index} className=&quot;bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20&quot;></div>
                  <feature.icon className=&quot;h-12 w-12 text-emerald-400 mb-4&quot; /></feature>
                  <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>{feature.title}</h3>
                  <p className=&quot;text-gray-300 mb-4&quot;>{feature.description}</p>
                  <ul className=&quot;space-y-2&quot;></ul>
                    {feature.benefits.map((benefit, idx) => (</ul>
                      <li key={idx} className=&quot;flex items-center text-sm text-gray-300&quot;></li>
                        <CheckCircle className=&quot;h-4 w-4 text-emerald-400 mr-2 flex-shrink-0&quot; /></CheckCircle>
                        {benefit}</CheckCircle>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className=&quot;py-20 px-4 bg-white/5&quot;></section>
          <div className=&quot;max-w-7xl mx-auto&quot;></div>
            <div className=&quot;text-center mb-16&quot;></div>
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Why Choose Our Solution</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;></p>
                Experience the benefits of cutting-edge AI technology</p>
              </p>
            </div>
            <div className=&quot;grid md: grid-cols-2 l
  g:grid-cols-3 gap-8&quot;></div>
              {benefits.map((benefit, index) => (
                <div key={index} className=&quot;flex items-start space-x-4&quot;></div>
                  <CheckCircle className=&quot;h-6 w-6 text-emerald-400 mt-1 flex-shrink-0&quot; /></CheckCircle>
                  <p className=&quot;text-gray-300 text-lg&quot;>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className=&quot;py-20 px-4&quot;></section>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;></div>
            <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>Ready to Transform Your Business?</h2>
            <p className=&quot;text-xl text-gray-300 mb-8&quot;></p>
              Join thousands of businesses already using our AI solutions</p>
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
              <button className=&quot;bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;></button>
                Start Free Trial</button>
              </button>
              <button className=&quot;border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hove
  r:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;></button>
                Contact Sales</button>
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
</>
:all-pages-backup/components/ResponsiveContainer.tsx
  )};

export default ResponsiveContainerPage
  )};

export default ResponsiveContainer
    </div>
  );
}
export default ResponsiveContainerPage
  );
}
export default ResponsiveContainer