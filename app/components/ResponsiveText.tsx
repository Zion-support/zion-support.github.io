<<<<<<< HEAD
import React from 'react;'
import { Helmet } from 'react-helmet-async;'
'use client;''
const ResponsiveText: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">""
      <Helmet>
        <title>Responsive Text - Zion Tech Group</title>
        <meta name="description" content="Professional responsive text services by Zion Tech Group." />""
      </Helmet> }
      { /* Hero Section */ }""
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">""
        <div className="max-w-6xl mx-auto text-center">""
          <h1 className="text-5xl font-bold text-gray-900 mb-6">""
            Responsive Text;
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">""
            Professional responsive text services;
            designed to help your business grow and succeed.;
          </p>
        </div>
      </section>
      {/* Content Section */}
            Responsive Text</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">""
            Professional responsive text services
            designed to help your business grow and succeed.</p></div></section>{/* Content Section */}
      <section className="py-16 px-4">""
        <div className="max-w-6xl mx-auto">""
          <div className="grid md: grid-cols-2 gap-12 items-center">""
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Services</h2>""
              <p className="text-lg text-gray-600 mb-6">""
                We provide comprehensive responsive text;
                solutions tailored to your specific needs and requirements.</p>
              <ul className="space-y-3">""
                <li className="flex items-center">""
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>""
                  Custom solutions;
                </li>"""
                <li className="flex items-center">"""
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>"""
                  Expert consultation;
                </li>"""
                <li className="flex items-center">"""
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>"""
                  Ongoing support;
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white">;""
              <h3 className="text-2xl font-bold mb-4">Get Started</h3>;""
              <p className="mb-6">;""
                Ready to transform your business with our responsive text services?;
              </p>
              <a>
                href="/contact";""
                className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors";""
              >;
                Contact Us;
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600">;""
        <div className="max-w-4xl mx-auto text-center">;""
          <h2 className="text-3xl font-bold text-white mb-6">;""
            Ready to Get Started?;
          </h2>
          <p className="text-xl text-blue-100 mb-8">;""
            Let's discuss how our responsive text;''
            services can help you achieve your goals.;
          </p>
          <a>
            href="/contact";""
            className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors";""
          >;
            Get Started Today;
          </a>
        </div>
      </section>
    </div>
  );
};
      { /* CTA Section */ }"""
      <section className="py-16 px-4 bg-blue-600">"""
        <div className=max-w-4xl mx-auto text-center></div>
          <h2 className="text-3xl font-bold text-white mb-6">"""
            Ready to Get Started?;
          </h2>
          <p className="text-xl text-blue-100 mb-8">""
            Let&apos;s discuss how our responsive text
            services can help you achieve your goals.
          </p>
          <a
            href="/contact""
            className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors""
          >
            Get Started Today;
          </a>
        </div>
      </section>
    </div>
  )
}
                We provide comprehensive responsive text
                solutions tailored to your specific needs and requirements.</p>
              <ul className="space-y-3">""
                <li className="flex items-center">""
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>""
                  Custom solutions</li>
                <li className="flex items-center">""
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>""
                  Expert consultation</li>
                <li className="flex items-center">""
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>""
                  Ongoing support</li></ul></div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white">""
              <h3 className="text-2xl font-bold mb-4">Get Started</h3>""
              <p className="mb-6">""
                Ready to transform your business with our responsive text services?</p>
              <a
                href="/contact""
                className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">""
                Contact Us</a></div></div></div></section>{/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600">""
        <div className="max-w-4xl mx-auto text-center">""
          <h2 className="text-3xl font-bold text-white mb-6">""
            Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">""
            Let's discuss how our responsive text''
            services can help you achieve your goals.</p>
          <a
            href="/contact""
            className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">""
            Get Started Today</a></div></section></div>
export default ResponsiveText
'
=======
import React from 'react';;';
import SEOHead from './components/SEOHead';

import { cn } from "../lib/utils";
interface ResponsiveTextProps {},
      children: React.ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl'
  weight?: 'thin' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black'
  color?: 'white' | 'gray' | 'cyan' | 'purple' | 'pink' | 'blue' | 'green' | 'orange' | 'red' | 'yellow'
  align?: 'left' | 'center' | 'right' | 'justify'
  className?: string
},
      const ResponsiveText = (_{},)
      children, as: Component = 'p', size = 'base', weight = 'normal', color = 'white', align = 'left', className
}: ResponsiveTextProps) => {},
      const sizeClasses = {},
      xs: 'text-xs sm:text-sm',
      sm: 'text-sm sm:text-base',
      base: 'text-base sm:text-lg',
      lg: 'text-lg sm:text-xl',
      xl: 'text-xl sm:text-2xl';
    '2xl': 'text-2xl sm:text-3xl md:text-4xl';
    '3xl': 'text-3xl sm:text-4xl md:text-5xl';
    '4xl': 'text-4xl sm:text-5xl md:text-6xl';
    '5xl': 'text-5xl sm:text-6xl md:text-7xl';
    '6xl': 'text-6xl sm:text-7xl md:text-8xl';
    '7xl': 'text-7xl sm:text-8xl md:text-9xl'
  },
      const weightClasses = {},
      thin: 'font-thin',
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
      black: 'font-black'
  },
      const colorClasses = {},
      white: 'text-white',
      gray: 'text-gray-300',
      cyan: 'text-cyan-400',
      purple: 'text-purple-400',
      pink: 'text-pink-400',
      blue: 'text-blue-400',
      green: 'text-green-400',
      orange: 'text-orange-400',
      red: 'text-red-400',
      yellow: 'text-yellow-400'
  },
      const alignClasses = {},
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
      justify: 'text-justify'
  },
      return ()
    <Component>
      className={cn()}
        sizeClasses[size],
      weightClasses[weight],
      colorClasses[color],
      alignClasses[align],
      className
      )};
    ></Component
>
      {children};
    </Component>
  )
},
      export default ResponsiveText

;
const ComponentsPage: React.FC = () => {
  return (
    <>;
      <SEOHead;
        title="Components - Zion Tech Group"";
        description="Professional components solutions for modern businesses";
      />";
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";
        <div className ="text-center">";
          <h1 className ="text-4xl font-bold mb-4">Components</h1>";
          <p className ="text-gray-300">Professional solutions coming soon...</p>;";
        </div>;
      </div>;
    </>;
  ),
};
;
export default ComponentsPage;'";'";

>>>>>>> main
