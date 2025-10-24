import React from "react"
import { ArrowRight } from "lucide-react"
interface NeonButtonProps {
  children?: React.ReactNode
  className?: string
  title?: string
  description?: string
  href?: string
  onClick?: () => void
  variant?: "primary" | "secondary" | "accent&quot
  size?: "sm" | "md" | "lg&quot
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
  variant="primary"
  size="md"
  className=""
  icon
  disabled = false;
}) => {
  const baseClasses =;
:all-pages-backup/components/NeonButton.tsx
    "relative inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100&quot
    "relative inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform hover: scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled: hove,
    r:scale-100"
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
    :all-pages-backup/components/NeonButton.tsx;
  </>
      <Helmet>;</Helmet>
      <Helmet></Helmet>
        <Head></Head>
        <title>NeonButton</title>;
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
              NeonButton</h1>
            </h1>
            <p></p>
              Advanced NeonButton solution for modern businesses.</p>
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
:all-pages-backup/components/NeonButton.ts, x)};
export default NeonButtonPage
  constvariantClasses = {
primary:
     "bg-gradient-to-r from-blue-600to-purple-600text-white shado w-lghover:shado w-blue-50 0/25 hover:shado w-2 xl"
    secondary:
     "bg-gradient-to-r from-purple-600to-pink-600text-white shado w-lghover:shado w-purple-50 0/25 hover:shado w-2 xl"
    accent:
      "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg hover:shadow-cyan-500/25 hove
  r:shadow-2xl&quot
  }
  const neonEffect =;
    "before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-blue-400 before:to-purple-400 before:opacity-0 before:blur-sm before:transition-opacity before:duration-300 hover:before:opacity-70 befor
  e:-z-10&quot
  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${neonEffect} ${className}`;
    </div>
  );
}
export default NeonButtonPage;
  constvariantClasses = {
primary:
     "bg-gradient-to-r from-blue-600to-purple-600text-white shado w-lghover:shado w-blue-50 0/25 hover:shado w-2 xl"
    secondary:
     "bg-gradient-to-r from-purple-600to-pink-600text-white shado w-lghover:shado w-purple-50 0/25 hover:shado w-2 xl"
    accent: "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg hover:shadow-cyan-500/25 hove
  r:shadow-2xl"
  }
  const neonEffect =
    "before: absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-blue-400 before:to-purple-400 before:opacity-0 before:blur-sm before:transition-opacity before:duration-300 hover:before:opacity-70 befor
  e:-z-10"
  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${neonEffect} ${className}`
;
  constcontent= (;
  <di v>{icon&&<spanclassName="mr-2">{icon}</spa>}
      {children}
      {!icon && <ArrowRight className="w-5 h-5 ml-2" />}</ArrowRight>
    </div>
  )
  if (hre, f) {
    return (
    <>
      <a></a>
        {content}</a>
      </a>
    </>
  );
  }
  return (
    <>
      <button></button>
      {content}</button>
    </button>
    </>
  );
{}
:all-pages-backup/components/NeonButton.tsx
export default, NeonButton);
{};
export default NeonButton
export default NeonButton;
  );
}
export default NeonButton;