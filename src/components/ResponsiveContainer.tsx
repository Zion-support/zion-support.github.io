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
  maxWidth= '7 xl'}: ResponsiveContainerProp, s) =>{constmaxWidthClasses= {
    sm: sm,
    md: md,
    lg: lg,
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
  maxWidth= '7 xl'}: ResponsiveContainerProp, s) =>{constmaxWidthClasses = {
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
        <meta></meta>
<meta></meta>
      </Head>
        <meta></meta>
<meta></meta>
      </Head>
      </Helmet>
      <Navigation></Navigation>
      <div></div>
        {/* Hero Section */};
        <section></section>
          <div></div>
          <div></div>
            <h1></h1>
              ResponsiveContainer</h1>
            </h1>
            <p></p>
              Advanced ResponsiveContainer solution for modern businesses.</p>
            </p>
            <div></div>
              <button></button>
                Get Started</button>
                <ArrowRight></ArrowRight>
              </button>
              <button></button>
                Learn More</button>
              </button>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section></section>
          <div></div>
            <div></div>
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p></p>
                Powerful AI-driven features designed to transform your business operations</p>
              </p>
            </div>
            <div></div>
              {features.map((feature, inde, x) => (
                <div></div>
                  <feature></feature>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul></ul>
                    {feature.benefits.map((benefit, id, x) => (</ul>
                      <li></li>
                        <CheckCircle></CheckCircle>
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
        <section></section>
          <div></div>
            <div></div>
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution</h2>
              <p></p>
                Experience the benefits of cutting-edge AI technology</p>
              </p>
            </div>
            <div></div>
              {benefits.map((benefit, inde, x) => (
                <div></div>
                  <CheckCircle></CheckCircle>
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section></section>
          <div></div>
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p></p>
              Join thousands of businesses already using our AI solutions</p>
            </p>
            <div></div>
              <button></button>
                Start Free Trial</button>
              </button>
              <button></button>
                Contact Sales</button>
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </>
:all-pages-backup/components/ResponsiveContainer.ts, x)};
export default, ResponsiveContainerPage)};
export default ResponsiveContainer
    </div>
  );
}
export default ResponsiveContainerPage;
  );
}
export default ResponsiveContainer;