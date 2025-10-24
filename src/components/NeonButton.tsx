import React from &quot;react&quot
import { ArrowRight } from &quot;lucide-react&quot
interface NeonButtonProps {


  children?: React.ReactNode
  className?: string
  title?: string
  description?: string
  href?: string
  onClick?: () => void
  variant?: &quot;primary&quot; | &quot;secondary&quot; | &quot;accent&quot
  size?: &quot;sm&quot; | &quot;md&quot; | &quot;lg&quot
  icon?: React.ReactNode
  disabled?: boolean}
}
;
:all-pages-backup/components/NeonButton.tsx
const NeonButton: React.FC<NeonButtonProps> = ({;
  children
  href</NeonButtonProps>
  onClick,</NeonButtonProps>
const NeonButton: React.FC<NeonButtonProps> = ({
  children
  href
  onClick
  variant=&quot;primary&quot
  size=&quot;md&quot
  className=&quot;&quot
  icon
  disabled = false
}) => {
  const baseClasses =;
:all-pages-backup/components/NeonButton.tsx
    &quot;relative inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100&quot
    &quot;relative inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform hover: scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hove
  r:scale-100&quot
  const benefits = [
    'Increase efficiency by up to 50%'
    'Reduce costs by 30% with automation'
    'Improve decision-making with AI insights'
    'Scale operations without proportional staff increases'
    'Gain competitive advantage with advanced technology'
  ]
</NeonButtonProps>
  return (</NeonButtonProps>
    <>
    :all-pages-backup/components/NeonButton.tsx
</>
      <Helmet>;</Helmet>
      <Helmet></Helmet>
        <Head></Head>
        <title>NeonButton</title>;
        <meta name=&quot;description&quot; content=&quot;Advanced NeonButton solution for modern businesses.&quot; /></meta>
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." /></meta>
      </Head>
        <meta name=&quot;keywords&quot; content=&quot;AI, artificial intelligence, NeonButton, AI solutions, intelligent automation&quot; /></meta>
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." /></meta>
      </Head>
      </Helmet>
      <Navigation />
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900&quot;></div>
        {/* Hero Section */};
        <section className=&quot;relative py-20 px-4 overflow-hidden&quot;></section>
          <h1 className=&quot;text-5xl md: text-7xl font-bold text-white mb-6 leading-tight&quot;></h1>
              NeonButton</h1>
            </h1>
            <p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed&quot;></p>
              Advanced NeonButton solution for modern businesses.</p>
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
:all-pages-backup/components/NeonButton.tsx
  )};

export default NeonButtonPage
  constvariantClasses = {
primary:
     &quot;bg-gradient-to-r from-blue-600to-purple-600text-white shado w-lghover:shado w-blue-50 0/25 hover:shado w-2 xl&quot
    secondary:
     &quot;bg-gradient-to-r from-purple-600to-pink-600text-white shado w-lghover:shado w-purple-50 0/25 hover:shado w-2 xl&quot
    accent:
      &quot;bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg hover:shadow-cyan-500/25 hove
  r:shadow-2xl&quot
  };

const neonEffect =;
    &quot;before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-blue-400 before:to-purple-400 before:opacity-0 before:blur-sm before:transition-opacity before:duration-300 hover:before:opacity-70 befor
  e:-z-10&quot
  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${neonEffect} ${className}`;
    </div>
  );
};

export default NeonButtonPage
  constvariantClasses = {
primary: 
     &quot;bg-gradient-to-r from-blue-600to-purple-600text-white shado w-lghover:shado w-blue-50 0/25 hover:shado w-2 xl&quot
    secondary:
     &quot;bg-gradient-to-r from-purple-600to-pink-600text-white shado w-lghover:shado w-purple-50 0/25 hover:shado w-2 xl&quot
    accent: &quot;bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg hover:shadow-cyan-500/25 hove
  r:shadow-2xl&quot
  };

const neonEffect =
    &quot;before: absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-blue-400 before:to-purple-400 before:opacity-0 before:blur-sm before:transition-opacity before:duration-300 hover:before:opacity-70 befor
  e:-z-10&quot
  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${neonEffect} ${className}`
;
  constcontent= (;
  <di v>{icon&&<spanclassName=&quot;mr-2&quot;>{icon}</spa>}
      {children}
      {!icon && <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />}</ArrowRight>
    </div>
  )

  if (href) {
    return (
    <>
      <a href = {href} className={buttonClasses}></a>
        {content}</a>
      </a>
</>
  );
  }

  return (
    <>
      <button onClick={onClick} disabled={disabled} className={buttonClasses}></button>
      {content}</button>
    </button>
</>
  );
{}

:all-pages-backup/components/NeonButton.tsx
export default NeonButton
  );
{};

export default NeonButton
export default NeonButton
  );
};

export default NeonButton