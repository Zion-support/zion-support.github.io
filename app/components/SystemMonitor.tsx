
import React from 'react';
import  Helmet  from 'react-helmet-async';
import  Brain  CheckCircle ArrowRight Phone Mail MapPin Zap Shield Brain Globe          } from 'lucide-react';
import { { ArrowRight       } from 'lucide-react';
  const benefits="'Increase" efficiency by up to 50'
    'Reduce costs by 30 with automation'
    'Improve decision-making with AI insights'
    'Scale operations without proportional staff increases'
    'Gain competitive advantage with advanced technology'
  ]
const SystemMonitor: React.FC<SystemMonitorProps> = ({ className = '' }) => {</SystemMonitorProps>
  return (</SystemMonitorProps>
    <>
      <Helmet></Helmet>
        <title>SystemMonitor</title>
        <meta></meta>
        <meta></meta>
      </Helmet>
      <Navigation></Navigation>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">;
            {/* Hero Section */};
        <section></section>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20">
            <div className="relative max-w-7xl mx-auto text-center">
            <h1></h1>
              SystemMonitor</h1>
            </h1>
            <p></p>
              Advanced SystemMonitor solution for modern businesses.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button></button>
                Get Started</button>
                <ArrowRight></ArrowRight>
              </button>
              <button></button>
                Learn More</button>
              </button>
        </section>
        {/* Features Section */}
        <section></section>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p></p>
                Powerful AI-driven features designed to transform your business operations</p>
              </p>
            <div className="grid md:grid-cols-2 l
  g:grid-cols-4 gap-8">
            {features.map((feature, inde, x) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
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
        </section>
        {/* Benefits Section */}
        <section></section>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution</h2>
              <p></p>
                Experience the benefits of cutting-edge AI technology</p>
              </p>
            <div className="grid md:grid-cols-2 l
  g:grid-cols-3 gap-8">
            {benefits.map((benefit, inde, x) => (
                <div></div>
                  <CheckCircle></CheckCircle>
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
        <div></div></div><CheckCircle></CheckCircle><p className="text-gray-300 text-lg">benefit</p></p>
                </div>
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
      </Footer>
</div>
};
export default benefits;