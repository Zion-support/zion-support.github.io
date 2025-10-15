
import React from 'react'"'
import { Helmet } from 'react-helmet-async'"'
'use client"""
const ResponsiveGrid: React.FC = () => {
  return (
    <div className ="min-h-screen bg-white">""""
      <Helmet>
        <title>Responsive Grid - Zion Tech Group</title>
        <meta name ="description" content="Professional responsive grid services by Zion Tech Group." />""""
      </Helmet> }
      { /* Hero Section */ }""""
      <section className ="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">""""
        <div className ="max-w-6xl mx-auto text-center">""""
          <h1 className ="text-5xl font-bold text-gray-900 mb-6">""";
            Responsive Grid"
          </h1>
          <p className ="text-xl text-gray-600 max-w-3xl mx-auto">""";
            Professional responsive grid services;
            designed to help your business grow and succeed."
          </p>
        </div>
      </section>
      {/* Content Section */}
            Responsive Grid</h1>
          <p className ="text-xl text-gray-600 max-w-3xl mx-auto">""""
            Professional responsive grid services
            designed to help your business grow and succeed.</p></div></section>{/* Content Section */}
      <section className ="py-16 px-4">""""
        <div className ="max-w-6xl mx-auto">""""
          <div className ="grid md: grid-cols-2 gap-12 items-center">""""
            <div>
              <h2 className ="text-3xl font-bold text-gray-900 mb-6">Our Services</h2>""""
              <p className ="text-lg text-gray-600 mb-6">""";
                We provide comprehensive responsive grid"
                solutions tailored to your specific needs and requirements.</p>
              <ul className ="space-y-3">""""
                <li className ="flex items-center">""""
                  <span className ="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>""";
                  Custom solutions"
                </li>"""""
                <li className ="flex items-center">"""""
                  <span className ="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>"""";
                  Expert consultation"
                </li>"""""
                <li className ="flex items-center">"""""
                  <span className ="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>"""";
                  Ongoing support"
                </li>
              </ul>
            </div>
            <div className ="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white">"""""
              <h3 className ="text-2xl font-bold mb-4">Get Started</h3>"""""
              <p className ="mb-6">"""";
                Ready to transform your business with our responsive grid services?"
              </p>
              <a>
                href="/contact""""""
                className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"""";
              >;
                Contact Us"
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className ="py-16 px-4 bg-blue-600">"""""
        <div className ="max-w-4xl mx-auto text-center">"""""
          <h2 className ="text-3xl font-bold text-white mb-6">"""";
            Ready to Get Started?"
          </h2>
          <p className ="text-xl text-blue-100 mb-8">""""'
            Let's discuss how our responsive grid"";
            services can help you achieve your goals."
          </p>
          <a>
            href="/contact""""""
            className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"""";
          >;
            Get Started Today;
          </a>
        </div>
      </section>
    </div>
  );
}"
      { /* CTA Section */ }"""""
      <section className ="py-16 px-4 bg-blue-600">"""""
        <div className =max-w-4xl mx-auto text-center></div>
          <h2 className ="text-3xl font-bold text-white mb-6">"""";
            Ready to Get Started?"
          </h2>
          <p className ="text-xl text-blue-100 mb-8">""";
            Let&apos"s discuss how our responsive grid
            services can help you achieve your goals.
          </p>
          <a href ="/contact""""
            className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors""";
          >
            Get Started Today"
          </a>
        </div>
      </section>
    </div>
  )
}
                We provide comprehensive responsive grid
                solutions tailored to your specific needs and requirements.</p>
              <ul className ="space-y-3">""""
                <li className ="flex items-center">""""
                  <span className ="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>""""
                  Custom solutions</li>
                <li className ="flex items-center">""""
                  <span className ="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>""""
                  Expert consultation</li>
                <li className ="flex items-center">""""
                  <span className ="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>""""
                  Ongoing support</li></ul></div>
            <div className ="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white">""""
              <h3 className ="text-2xl font-bold mb-4">Get Started</h3>""""
              <p className ="mb-6">""""
                Ready to transform your business with our responsive grid services?</p>
              <a href ="/contact""""
                className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">""""
                Contact Us</a></div></div></div></section>{/* CTA Section */}
      <section className ="py-16 px-4 bg-blue-600">""""
        <div className ="max-w-4xl mx-auto text-center">""""
          <h2 className ="text-3xl font-bold text-white mb-6">""""
            Ready to Get Started?</h2>
          <p className ="text-xl text-blue-100 mb-8">"""'
            Let's discuss how our responsive grid'""
            services can help you achieve your goals.</p>
          <a href ="/contact""""
            className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">"""'
            Get Started Today</a></div></section></div>
export default ResponsiveGrid
'"'

import React from 'react;;"
import SEOHead from './components/SEOHead'"

import { cn } from "../lib/utils"'
interface ResponsiveGridProps {},
      children: React.ReactNode
  className?: string
  cols?: {},
      default: number
    sm?: number
    md?: number
    lg?: number
    xl?: number
  },
      gap?: 'sm' | 'md' | 'lg' | 'xl'""
},
      const ResponsiveGrid = (_{},);
      children, className, cols = { default: 1, _sm: 2, _md: 3, _lg: 4 }, gap = 'md'""
}: ResponsiveGridProps) => {},
      const gapClasses = {},'
      sm: 'gap-2',"'
      md: 'gap-4',"'
      lg: 'gap-6',"'
      xl: 'gap-8'""
  },
      const gridColsClasses = {},'
      1: 'grid-cols-1',"'
      2: 'grid-cols-2',"'
      3: 'grid-cols-3',"'
      4: 'grid-cols-4',"'
      5: 'grid-cols-5',"'
      6: 'grid-cols-6'""
  },
      const responsiveClasses = []
    `grid ${gridColsClasses[cols.default]}`,
      cols.sm && `sm:${gridColsClasses[cols.sm]}`,
      cols.md && `md:${gridColsClasses[cols.md]}`,
      cols.lg && `lg:${gridColsClasses[cols.lg]}`,
      cols.xl && `xl:${gridColsClasses[cols.xl]}`,
      gapClasses[gap]'
  ].filter(Boolean).join(' ');;
  return (<div className ={cn(responsiveClasses, className)}></div>
      {children};
    </div>
  )
},
      export default ResponsiveGrid

;
const ComponentsPage: React.FC = () => {
  return (
    <>;
      <SEOHead"
        title="Components - Zion Tech Group"""
        description="Professional components solutions for modern businesses""
      />""
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">""
        <div className ="text-center">"""'
          <h1 className ="text-4xl font-bold mb-4">Components</h1>"'
          <p className ="text-gray-300">Professional solutions coming soon...</p>'
        </div>;
      </div>;
    </>;
  ),
};
"
export default ComponentsPage'"'";


