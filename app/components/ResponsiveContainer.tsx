import Footer from './Footer'
import Navigation from './Navigation'
import { ArrowRight, CheckCircle } from 'lucide-react'
import React from 'react'
import { cn  } from "../lib/utils";
interface ResponsiveContainerProps {
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
}

interface ResponsiveContainerProps {
  children?: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
}

const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({ 
  children, 
  className = '', 
  maxWidth = '7xl' 
}) => {
  const maxWidthClasses = {
=======
constResponsiveContainer= ({children,
  class Nam e,
  maxWidth= '7 xl'}: ResponsiveContainerProps) =>{constmaxWidthClasses= {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9ef9
=======
}

constResponsiveContainer= ({children,
  class Nam e,
  maxWidth= '7 xl'}: ResponsiveContainerProps) =>{constmaxWidthClasses= {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e7ea
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl'
  };

const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({ className = '' }) => {
  return (
    <>
      <Helmet>
        <title>ResponsiveContainer - Zion Tech Group</title>
        <meta name="description" content="Advanced ResponsiveContainer solution for modern businesses." />
        <meta name="keywords" content="AI, artificial intelligence, ResponsiveContainer, AI solutions, intelligent automation" />
      </Helmet>
      <Navigation />
      <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${maxWidthClasses[maxWidth]} ${className}`}>
        {children}
  return (
    <><Helmet></Helmet>
        <title>ResponsiveContainer</title>
        <meta name='description' content='Advanced ResponsiveContainer solution for modern businesses.' /></meta>
        <meta name='keywords' content='AI, artificial intelligence, ResponsiveContainer, AI solutions, intelligent automation' /></meta>
      </Helmet>
      <Navigation /></Navigation>
      <div className='min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900'></div>
        {/* Hero Section */
}
        <section className='relative py-20 px-4 overflow-hidden'></section>
          <div className='absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20'></div>
          <div className='relative max-w-7xl mx-auto text-center'></div>
            <h1 className='text-5xl md: text-7xl font-bold text-white mb-6 leading-tight'></h1>
              ResponsiveContainer
            </h1>
            <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed'></p>
              Advanced ResponsiveContainer solution for modern businesses.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'></div>
              <button className='bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center'></button>
                Get Started
                <ArrowRight className='ml-2 h-5 w-5' /></ArrowRight>
              </button>
              <button className='border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200'></button>
                Learn More
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c8e5
              </button>
            </div>
          </div>
        </section>
    </>

        {/* Features Section */}
        <section className=&quot;py-20 px-4&quot;></section>
          <div className=&quot;max-w-7xl mx-auto&quot;></div>
            <div className=&quot;text-center mb-16&quot;></div>
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Key Features</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Powerful AI-driven features designed to transform your business operations
              </p>
            </div>
            <div className=&quot;grid md:grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>
              {features.map((feature, index) => (
                <div key={index} className=&quot;bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20&quot;></div>
                  <feature.icon className=&quot;h-12 w-12 text-emerald-400 mb-4&quot; />
                  <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>{feature.title}</h3>
                  <p className=&quot;text-gray-300 mb-4&quot;>{feature.description}</p>
                  <ul className=&quot;space-y-2&quot;>
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className=&quot;flex items-center text-sm text-gray-300&quot;>
                        <CheckCircle className=&quot;h-4 w-4 text-emerald-400 mr-2 flex-shrink-0&quot; />
                        {benefit}
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
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Experience the benefits of cutting-edge AI technology
              </p>
            </div>
            <div className=&quot;grid md:grid-cols-2 lg:grid-cols-3 gap-8&quot;></div>
              {benefits.map((benefit, index) => (
                <div key={index} className=&quot;flex items-start space-x-4&quot;></div>
                  <CheckCircle className=&quot;h-6 w-6 text-emerald-400 mt-1 flex-shrink-0&quot; />
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
            <p className=&quot;text-xl text-gray-300 mb-8&quot;>
              Join thousands of businesses already using our AI solutions
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
              <button className=&quot;bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;>
                Start Free Trial
              </button>
              <button className=&quot;border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;>
                Contact Sales
              </button>
            </div>
          </div>
        </section>
>>>>>>> 995b39195cc56a514459b6fa1d6f8ba8874b88ba
      </div>
      <Footer /></Footer>
    </>
  );,
};

export default ResponsiveContaine;r;
