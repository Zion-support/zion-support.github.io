<<<<<<< HEAD
import React from &quot;react&quot;
import { ArrowRight } from &quot;lucide-react&quot;
interface NeonButtonProps {
  children?: React.ReactNode
  className?: string
  title?: string
  description?: string
  href?: string
  onClick?: () => void
  variant?: &quot;primary&quot; | &quot;secondary&quot; | &quot;accent&quot;
  size?: &quot;sm&quot; | &quot;md&quot; | &quot;lg&quot;
  icon?: React.ReactNode
  disabled?: boolean
=======
import React  from "react";
import { ArrowRight }  from "lucide-react";interface NeonButtonProps {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "accent"
  size?: "sm" | "md" | "lg"
  icon?: React.ReactNode;
  disabled?: boolean;
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2f6c
const NeonButton: React.FC<NeonButtonProps> = ({
<<<<<<< HEAD
  children,
  href,
  onClick,
  variant=&quot;primary&quot;,
  size=&quot;md&quot;,
  className=&quot;&quot;,
  icon,
  disabled = false
}) => {
  const baseClasses =
    &quot;relative inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100&quot;

=======
  children
  href
  onClick
  variant="primary"
  size="md"
  className=""
  icon
  disabled = false;
}) => {
  const baseClasses =
    "relative inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform hover: scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
  const benefits = [
    'Increase efficiency by up to 50%'
    'Reduce costs by 30% with automation'
    'Improve decision-making with AI insights'
    'Scale operations without proportional staff increases'
    'Gain competitive advantage with advanced technology'
  ]
}</NeonButtonProps>
  return (</NeonButtonProps>
    <>
      
      <Navigation />
<<<<<<< HEAD
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900&quot;></div>
        {/* Hero Section */}
        <section className=&quot;relative py-20 px-4 overflow-hidden&quot;></section>
          <div className=&quot;absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20&quot;></div>
          <div className=&quot;relative max-w-7xl mx-auto text-center&quot;></div>
            <h1 className=&quot;text-5xl md:text-7xl font-bold text-white mb-6 leading-tight&quot;>
              NeonButton
            </h1>
            <p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed&quot;>
              Advanced NeonButton solution for modern businesses.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
              <button className=&quot;bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center&quot;>
                Get Started
                <ArrowRight className=&quot;ml-2 h-5 w-5&quot; />
              </button>
              <button className=&quot;border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;>
                Learn More
              </button>
            </div>
          </div>
        </section>

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
=======
        </Navigation>
        </Navigation>
        </Navigation>
      </Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900"></div>
<//div>
        {/* Hero Section */
}
        <section className="relative py-20 px-4 overflow-hidden"></section>
<//section>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
<//div>
          <div className="relative max-w-7xl mx-auto text-center"></div>
<//div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
        </h1>
        </h1>
        </h1>
        </div>
        </h1>
            </h1 className="text-5xl md: text-7xl font-bold text-white mb-6 leading-tight">
              NeonButton;
            </h1>

            <//h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
        </p>
        </p>
        </p>
        </div>
        </p>
            </p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
        </div>
              Advanced NeonButton solution for modern businesses.
            </p>

            <//p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
<//div>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
        </button>
        </button>
        </button>
        </div>
        </button>
              </button className="bg-emerald-600 hover: bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Get Started;
                <ArrowRight className="ml-2 h-5 w-5" />
        </ArrowRight>
        </ArrowRight>
        </ArrowRight>
                </ArrowRight className="ml-2 h-5 w-5" />
              </button>

              <//button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
        </button>
        </button>
        </button>
        </div>
        </button>
              </button className="border border-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More;
              </button>

              <//button>
            </div>

            <//div>
          </div>

          <//div>
        </section>
    </>

        <//section>
        {
  /* Features Section */
}
        <section className="py-20 px-4"></section>
<//section>
          <div className="max-w-7xl mx-auto"></div>
<//div>
            <div className="text-center mb-16"></div>
<//div>
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
<//h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        </p>
        </p>
        </p>
        </div>
        </p>
              </p className="text-xl text-gray-300 max-w-3xl mx-auto">
        </div>
                Powerful AI-driven features designed to transform your business operations;
              </p>

              <//p>
            </div>

            <//div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
<//div>)
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"></div>
<//div>
                  <feature .icon className="h-12 w-12 text-emerald-400 mb-4" />
        </feature>
        </feature>
        </feature>
                  </feature.icon className="h-12 w-12 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
<//h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
<//p>
                  <ul className="space-y-2">
        </ul>
        </ul>
        </ul>
        </div>
        </ul>
                  </ul className="space-y-2">
        </div>
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
        </li>
        </li>
        </li>
        </div>
                      </li key={idx} className="flex items-center text-sm text-gray-300">
        </div>
                        <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
        </CheckCircle>
        </CheckCircle>
        </CheckCircle>
                        </CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {
  benefit
}
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
                      </li>

                      <//li>
                    ))}
                  </ul>

                  <//ul>
                </div>

                <//div>
              ))}
            </div>

            <//div>
          </div>

          <//div>
        </section>

<<<<<<< HEAD
        {/* Benefits Section */}
        <section className=&quot;py-20 px-4 bg-white/5&quot;></section>
          <div className=&quot;max-w-7xl mx-auto&quot;></div>
            <div className=&quot;text-center mb-16&quot;></div>
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Why Choose Our Solution</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Experience the benefits of cutting-edge AI technology
=======
        <//section>
        {
  /* Benefits Section */
}
        <section className="py-20 px-4 bg-white/5"></section>
<//section>
          <div className="max-w-7xl mx-auto"></div>
<//div>
            <div className="text-center mb-16"></div>
<//div>
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution</h2>
<//h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        </p>
        </p>
        </p>
        </div>
        </p>
              </p className="text-xl text-gray-300 max-w-3xl mx-auto">
        </div>
                Experience the benefits of cutting-edge AI technology;
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
              </p>

              <//p>
            </div>
<<<<<<< HEAD
            <div className=&quot;grid md:grid-cols-2 lg:grid-cols-3 gap-8&quot;></div>
              {benefits.map((benefit, index) => (
                <div key={index} className=&quot;flex items-start space-x-4&quot;></div>
                  <CheckCircle className=&quot;h-6 w-6 text-emerald-400 mt-1 flex-shrink-0&quot; />
                  <p className=&quot;text-gray-300 text-lg&quot;>{benefit}</p>
=======

            <//div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
<//div>
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4"></div>
<//div>
                  <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
        </CheckCircle>
        </CheckCircle>
        </CheckCircle>
                  </CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
<//p>
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
                </div>

                <//div>
              ))}
            </div>

            <//div>
          </div>

          <//div>
        </section>

<<<<<<< HEAD
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
=======
        <//section>
        {
  /* CTA Section */
}
        <section className="py-20 px-4"></section>
<//section>
          <div className="max-w-4xl mx-auto text-center"></div>
<//div>
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
<//h2>
            <p className="text-xl text-gray-300 mb-8">
        </p>
        </p>
        </p>
        </div>
        </p>
            </p className="text-xl text-gray-300 mb-8">
        </div>
              Join thousands of businesses already using our AI solutions;
            </p>

            <//p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
<//div>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
        </button>
        </button>
        </button>
        </div>
        </button>
              </button className="bg-emerald-600 hover: bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Start Free Trial;
              </button>

              <//button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
        </button>
        </button>
        </button>
        </div>
        </button>
              </button className="border border-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Contact Sales;
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
              </button>

              <//button>
            </div>

            <//div>
          </div>

          <//div>
        </section>

        <//section>
      </div>
      <Footer /></Footer>
    </>

    <//>
  );
};
;
export default NeonButtonPage;
<<<<<<< HEAD

  constvariantClasses= {primary:
     &quot;bg-gradient-to-r from-blue-600to-purple-600text-white shado w-lghover:shado w-blue-50 0/25 hover:shado w-2 xl&quot;,
    secondary:
     &quot;bg-gradient-to-r from-purple-600to-pink-600text-white shado w-lghover:shado w-purple-50 0/25 hover:shado w-2 xl&quot;,
    accent:
      &quot;bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg hover:shadow-cyan-500/25 hover:shadow-2xl&quot;
  }

  const neonEffect =
    &quot;before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-blue-400 before:to-purple-400 before:opacity-0 before:blur-sm before:transition-opacity before:duration-300 hover:before:opacity-70 before:-z-10&quot;

=======
  constvariantClasses= {
  primary: "bg-gradient-to-r from-blue-600to-purple-600text-white shado w-lghover:shado w-blue-50 0/25 hover:shado w-2 xl"
    secondary: "bg-gradient-to-r from-purple-600to-pink-600text-white shado w-lghover:shado w-purple-50 0/25 hover:shado w-2 xl"
    accent:
      "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg hover:shadow-cyan-500/25 hover:shadow-2xl"
}
  const neonEffect =
    "before: absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-blue-400 before:to-purple-400 before:opacity-0 before:blur-sm before:transition-opacity before:duration-300 hover:before:opacity-70 before:-z-10"
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${neonEffect} ${className}`
  constcontent= (
<<<<<<< HEAD
  <di v>{icon&&<spanclassName=&quot;mr-2&quot;>{icon}</spa>}
      {children}
      {!icon && <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />}
=======
  <di v>{icon&&<spanclassName="mr-2">{icon}</spa>}
      {
  children
}
      {
  !icon && <ArrowRight className="w-5 h-5 ml-2" />
        </ArrowRight>
        </ArrowRight>
        </ArrowRight>
}
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
    </div>
  )

  if (href) {}
    return ("
      <a href="{href} className="{buttonClasses}></a>
        {content}</a>
      </a>

      <//a>)
    )
  }
;
  return ("
    <button onClick="{onClick} disabled="{disabled} className="{buttonClasses}></button>
      {content}</button>
    </button>

    <//button>)
  )
}
;
export default NeonButton
  );
};
export default NeonButton;"
