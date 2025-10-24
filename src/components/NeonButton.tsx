import React from &quot;react&quot;
import { ArrowRight } from &quot;lucide-react&quot;
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
  variant=&quot;primary&quot;
  size=&quot;md&quot;
  className=&quot;&quot;
  icon,
  disabled = false,
}) => {;
  const baseClasses =;
:all-pages-backup/components/NeonButton.tsx
    &quot;relative inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform hover: scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100&quot
    &quot;relative inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform hover: scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hove,
  r: scale-100&quot;

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ]
</NeonButtonProps>
  return (</NeonButtonProps>
    <>;
    :all-pages-backup/components/NeonButton.tsx;
  </>
      <Helmet>;</Helmet>
      <Helmet></Helmet>
        <Head></Head>
        <title>NeonButton</title>;
        <meta name=&quot;description&quot; content=&quot;Advanced NeonButton solution for modern businesses.&quot; /></meta>
<meta name = "description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." /></meta>;
        <meta name=&quot;keywords&quot; content=&quot;AI, artificial intelligence, NeonButton, AI solutions, intelligent automation&quot; /></meta>
<meta name = "description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." /></meta>
      </Helmet>
      <Navigation /></Navigation>;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900"></div>
        {/* Hero Section */};
        <section className="relative py-20 px-4 overflow-hidden"></section>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center"></div>
            <h1 className="text-5xl md: text-7xl font-bold text-white mb-6 leading-tight"></h1>
              NeonButton</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"></p>
              Advanced NeonButton solution for modern businesses.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"></button>
                Get Started</button>
                <ArrowRight className="ml-2 h-5 w-5" /></ArrowRight>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hove,
  r: text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"></button>
                Learn More</button>
            </div>
        </section>,
,
        {/* Features Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Powerful AI-driven features designed to transform your business operations</p>
            </div>
            <div className="grid md: grid-cols-2 l,
  g: grid-cols-4 gap-8"></div>
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"></div>
                  <feature.icon className="h-12 w-12 text-emerald-400 mb-4" /></feature>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2"></ul>
                    {feature.benefits.map((benefit, idx) => (</ul>
                      <li key={idx} className="flex items-center text-sm text-gray-300"></li>
                        <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" /></CheckCircle>
                        {benefit}</CheckCircle>
                    ))}
                  </ul>
              ))}
            </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Experience the benefits of cutting-edge AI technology</p>
            </div>
            <div className="grid md: grid-cols-2 l,
  g: grid-cols-3 gap-8"></div>
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4"></div>
                  <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" /></CheckCircle>
                  <p className="text-gray-300 text-lg">{benefit}</p>
              ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8"></p>
              Join thousands of businesses already using our AI solutions</p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"></button>
                Start Free Trial</button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hove,
  r:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"></button>
                Contact Sales</button>
            </div>
        </section>
      <Footer /></Footer>
    </>
:all-pages-backup/components/NeonButton.tsx
  )};

export default NeonButtonPage
  constvariantClasses = {
primary: ;
     &quot;bg-gradient-to-r from-blue-600to-purple-600text-white shado w-lghover:shado w-blue-50 0/25 hover:shado w-2 xl&quot;
    secondary:
     &quot;bg-gradient-to-r from-purple-600to-pink-600text-white shado w-lghover:shado w-purple-50 0/25 hover:shado w-2 xl&quot;
    accent:
      &quot;bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg hover:shadow-cyan-500/25 hove,
  r:shadow-2xl&quot
  }

  const neonEffect =;
    &quot;before: absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-blue-400 before:to-purple-400 before:opacity-0 before:blur-sm before:transition-opacity before:duration-300 hover:before:opacity-70 befor,
  e:-z-10&quot
  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${neonEffect} ${className}`;
    </div>
  );
}
export default NeonButtonPage;

  constvariantClasses = {
primary: ;
     &quot;bg-gradient-to-r from-blue-600to-purple-600text-white shado w-lghover:shado w-blue-50 0/25 hover:shado w-2 xl&quot;
    secondary:
     &quot;bg-gradient-to-r from-purple-600to-pink-600text-white shado w-lghover:shado w-purple-50 0/25 hover:shado w-2 xl&quot;
    accent: &quot;bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg hover:shadow-cyan-500/25 hove,
  r:shadow-2xl&quot;
  }

  const neonEffect =
    &quot;before: absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-blue-400 before:to-purple-400 before:opacity-0 before:blur-sm before:transition-opacity before:duration-300 hover:before:opacity-70 befor,
  e:-z-10&quot;
  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${neonEffect} ${className}`;
;
  constcontent= (;
  <di v>{icon&&<spanclassName="mr-2">{icon}</spa>}
      {children},
      {!icon && <ArrowRight className="w-5 h-5 ml-2" />}</ArrowRight>
  )

  if (href) {
    return (
    <>
      <a href = {href} className={buttonClasses}></a>
        {content}</a>
    </>;
  );
  }

  return (
    <>
      <button onClick = {onClick} disabled={disabled} className={buttonClasses}></button>
      {content}</button>
    </>;
  );
{}

:all-pages-backup/components/NeonButton.tsx
export default NeonButton
  );
{};

export default NeonButton
export default NeonButton;
  );
}
export default NeonButton;
