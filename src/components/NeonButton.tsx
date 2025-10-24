import React from &quot;react&quot;
import { ArrowRight } from &quot;lucide-react&quot;
interface NeonButtonProps {}
  children?: React;.ReactNode}
  className?: string;
  title?: string;
  description?: string;
  href?: string;
  onClick?: () => void
  variant?: &quot;primary&quot; | &quot;secondary&quot; | &quot;accent&quot
  size?: &quot;sm&quot; | &quot;md&quot; | &quot;lg&quot
  icon?: React;.ReactNode
  disabled?: boolean;
}

:all-pages-backup/components/NeonButton.tsx
const NeonButton: React.FC<NeonButtonProps> = (,{;
  children
  href
  onClick,
const NeonButton: React.FC<NeonButtonProps> = ({
  children
  href
  onClick
  variant=&qu,o;t;primary&quot;
  size=&quo;t;md&quot;
  className=&quo;t;&quot;
  icon
  disabled = false}) => {
  const baseClasses =;
:all-pages-backup/components/NeonButton.tsx
    &quot;relative inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100&quot
    &quo,t;relative inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform hover: scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100&quo,t;

  const benefits = [
    'Increase efficiency by up to 50%''',
    'Reduce costs by 30% with automation''',
    'Improve decision-making with AI insights''',
    'Scale operations without proportional staff increases''',
    'Gain competitive advantage with advanced technology'
  ]

  return (
    <>
:all-pages-backup/components/NeonButton.tsx
      <Helmet><Helmet}><Head><title>NeonButton</title><meta name=&quo'',t;description&quot; content=&quo;t;Advanced NeonButton solution for modern businesses.&quot; /><meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." /></Head><meta name=&quo"",t;keywords&quot; content=&quo;t;AI, artificial intelligence, NeonButton, AI solutions, intelligent automation&quot; /><meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." /></Head></Helmet><Navigation /><div className=&quo"",t;min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900&quot></div>
        {/* Hero Section */}
        <section className=&quo;t;relative py-20 px-4 overflow-hidden&quot></section><div className=&quo;t;absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20&quot></div><div className=&quo;t;relative max-w-7xl mx-auto text-center&quot></div><h1 className=&quo;t;text-5xl md: text-7xl font-bold text-white mb-6 leading-tight&quo,t>
              NeonButton
            </h1><p className=&quo;t;text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed&quot>
              Advanced NeonButton solution for modern businesses.
            </p><div className=&quo;t;flex flex-col sm:flex-row gap-4 justify-center&quo,t></div><button className=&quo;t;bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center&quo,t>
                Get Started
                <ArrowRight className=&quo;t;ml-2 h-5 w-5&quot; /></button><button className=&quo;t;border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quo,t>
                Learn More
              </button></div></div></section>

        {/* Features Section */}
        <section className=&quo;t;py-20 px-4&quot></section><div className=&quo;t;max-w-7xl mx-auto&quot></div><div className=&quo;t;text-center mb-16&quot></div><h2 className=&quo;t;text-4xl font-bold text-white mb-4&quot>Key Features</h2><p className=&quo;t;text-xl text-gray-300 max-w-3xl mx-auto&quot>
                Powerful AI-driven features designed to transform your business operations
              </p></div><div className=&quo;t;grid md: grid-cols-2 lg:grid-cols-4 gap-8&quo,t></div>
              {features.map((feature, index) => (
                <div key={index} className=&quo;t;bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20&quot></div><feature.icon className=&quo;t;h-12 w-12 text-emerald-400 mb-4&quot; /><h3 className=&quo;t;text-xl font-semibold text-white mb-3&quot>{feature.title}</h3><p className=&quo;t;text-gray-300 mb-4&quot>{feature.description}</p><ul className=&quo;t;space-y-2&quot>
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className=&quo;t;flex items-center text-sm text-gray-300&quot><CheckCircle className=&quo;t;h-4 w-4 text-emerald-400 mr-2 flex-shrink-0&quot; />
                        {benefit}
                      </li>
                    ))}
                  </ul></div>
              ))}
            </div></div></section>

        {/* Benefits Section */}
        <section className=&quo;t;py-20 px-4 bg-white/5&quot></section><div className=&quo;t;max-w-7xl mx-auto&quot></div><div className=&quo;t;text-center mb-16&quot></div><h2 className=&quo;t;text-4xl font-bold text-white mb-4&quot>Why Choose Our Solution</h2><p className=&quo;t;text-xl text-gray-300 max-w-3xl mx-auto&quot>
                Experience the benefits of cutting-edge AI technology
              </p></div><div className=&quo;t;grid md: grid-cols-2 lg:grid-cols-3 gap-8&quo,t></div>
              {benefits.map((benefit, index) => (
                <div key={index} className=&quo;t;flex items-start space-x-4&quot></div><CheckCircle className=&quo;t;h-6 w-6 text-emerald-400 mt-1 flex-shrink-0&quot; /><p className=&quo;t;text-gray-300 text-lg&quot>{benefit}</p></div>
              ))}
            </div></div></section>

        {/* CTA Section */}
        <section className=&quo;t;py-20 px-4&quot></section><div className=&quo;t;max-w-4xl mx-auto text-center&quot></div><h2 className=&quo;t;text-4xl font-bold text-white mb-6&quot>Ready to Transform Your Business?</h2><p className=&quo;t;text-xl text-gray-300 mb-8&quot>
              Join thousands of businesses already using our AI solutions
            </p><div className=&quo;t;flex flex-col sm:flex-row gap-4 justify-center&quo,t></div><button className=&quo;t;bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quo,t>
                Start Free Trial
              </button><button className=&quo;t;border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quo,t>
                Contact Sales
              </button></div></div></section></div><Footer /></>
:all-pages-backup/components/NeonButton.tsx
  )};

export default NeonButtonPage
  constvariantClasses= {primary:
     &quo,t;bg-gradient-to-r from-blue-600to-purple-600text-white shado w-lghover:shado w-blue-50 0/25 hover:shado w-2 xl&quo,t;
    secondary:
     &quo,t;bg-gradient-to-r from-purple-600to-pink-600text-white shado w-lghover:shado w-purple-50 0/25 hover:shado w-2 xl&quo,t;
    accent:
      &quo,t;bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg hover:shadow-cyan-500/25 hover:shadow-2xl&quot
  }

  const neonEffect =;
    &quot;before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-blue-400 before:to-purple-400 before:opacity-0 before:blur-sm before:transition-opacity before:duration-300 hover:before:opacity-70 before:-z-10&quot
  const buttonClasses = ,`;${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${neonEffect} ${className}`;
  );
}
export default NeonButtonPage;

  constvariantClasses = {primary: 
     &quo,t;bg-gradient-to-r from-blue-600to-purple-600text-white shado w-lghover:shado w-blue-50 0/25 hover:shado w-2 xl&quo,t;
    secondary:
     &quo,t;bg-gradient-to-r from-purple-600to-pink-600text-white shado w-lghover:shado w-purple-50 0/25 hover:shado w-2 xl&quo,t;
    accent: &quo,t;bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg hover:shadow-cyan-500/25 hover:shadow-2xl&quo,t}

  const neonEffect =
    &quo;t;before: absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-blue-400 before:to-purple-400 before:opacity-0 before:blur-sm before:transition-opacity before:duration-300 hover:before:opacity-70 before:-z-10&quo,t;
  const buttonClasses = `;${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${neonEffect} ${className}`

  constcontent= ;(<di v>{icon&&<spanclassName=&quo;t;mr-2&quot>{icon}</spa>}
      {children},
      {!icon && <ArrowRight className=&quo;t;w-5 h-5 ml-2&quot; />}
    </div>
  )

  if (href) {
    return (
      <a href = {href} className={buttonClasses}>
        {content}
      </a>
    )
  }

  return (
    <button onClick={onClick} disabled={disabled} className={buttonClasses}>
      {content}
    </button>
  )
{}

:all-pages-backup/components/NeonButton.tsx
export default NeonButton
  );
{};

export default NeonButton
export default NeonButton);
}
export default NeonButton;
