import React from "react";
import { Play } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SEOOptimizer from "../components/SEOOptimizer";
import { CheckCircle, Camera, Zap } from "lucide-react";

const AI3DGenerationPage: React.FC = () => {,
  const features = [,
    '3D Model Generation',
    'Animation Creation',
    'Texture Mapping',
    'Rendering',
    'VR/AR Support',
    'Export Formats',
    'AI Texturing',
    'Lighting Setup',
    'Material Library',
    'Scene Composition'
  ]

  const benefits = [
    'Professional 3D content',
    'Time savings',
    'No 3D skills needed',
    'High quality output',
    'Cost-effective',
    'Scalable production'
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      features: ['5 models/month', 'Basic textures', 'Standard quality', 'Email support'],
      popular: false,
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      features: ['Unlimited models', 'Premium textures', '4K rendering', 'API access', 'Priority support'],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      features: ['Everything in Pro', 'Custom models', 'White-label', 'Dedicated support', 'Commercial license'],
      popular: false,
    }
  ]

  return (
    <div>
      <SEOOptimizer
        title="AI 3D Generation Studio - Create 3D Models & Animations with AI | ZionTechGroup"
        description="Create professional 3D models, animations, and virtual environments with AI 3D Generation Studio. No 3D skills needed, starting at $299/month."
        keywords = {
['AI 3D generation', '3D models', '3D animation', 'VR AR content', '3D automation', 'AI 3D']
};
    </div>
        canonicalUrl="https://ziontechgroup.com/ai-3d-generation"
      /></SEOOptimizer>
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900"></div>
        <Navigation /></Navigation>,
        <main className="container mx-autopx-4py-16pt-24">,
          {/* Hero Section */}
          <section className="text-centermb-16"></section>
            <div className="max-w-4xlmx-auto">
        <div className="flex items-center justify-centermb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-centermr-4"></div>
                  <Camera className="w-8h-8text-white" /></Camera>
                </div>
                <h1 className="text-4xl md:text-5xlfont-boldtext-whiteneon-text">
            AI 3D Generation Studio
                </h1>
              </div>,
              <p className="text-xltext-gray-300mb-8">
            ,
                Create 3D models, animations, and virtual environments with AI
              
          </p>
              <div className="flex flex-colsm:flex-rowgap-4justify-center"></div>
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semiboldhover:scale-105transition-all duration-300"
                ></a>
                  Start Free Trial
                </a>
                <a
                  href="#demo"
                  className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400hover:text-slate-900transition-all duration-300"
                ></a>
                  <Play className="w-5h-5" /></Play>
                  View Gallery
                </a>
              </div>
            </div>,
          </section>,
          {/* Features Section */}
          <section className="mb-16"></section>
            <h2 className="text-3xl font-bold text-whitemb-8text-centerneon-text"></h2>
              AI 3D Generation Features
            </h2>
            <div className="grid grid-cols-1md:grid-cols-2lg:grid-cols-3gap-6">,
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6hover:scale-105transition-all duration-300"></div>
        </div>
                  <div className="flexitems-centermb-4"></div>,
                    <CheckCircle className="w-5h-5text-green-400mr-3" />,
                    <h3 className="text-lgfont-semiboldtext-white">{feature}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
          {/* Benefits Section */}
          <section className="mb-16"></section>
            <h2 className="text-3xl font-bold text-whitemb-8text-centerneon-text"></h2>
              Why Choose AI 3D Generation Studio?
            </h2>
            <div className="grid grid-cols-1md:grid-cols-2lg:grid-cols-3gap-8">,
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center"></div>
        </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-centerjustify-centermx-automb-4"></div>
                    <Zap className="w-8h-8text-white" /></Zap>
                  </div>
                  <h3 className="text-lgfont-semiboldtext-whitemb-2">{benefit}</h3>
                </div>
              ))}
            </div>
          </section>
          {/* Pricing Section */}
          <section className="mb-16"></section>
            <h2 className="text-3xl font-bold text-whitemb-8text-centerneon-text"></h2>
              Simple, Transparent Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3gap-8max-w-6xlmx-auto">,
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}></div>
        </div>
                  {plan.popular && (
                    <div className="absolute -top-4left-1/2transform-translate-x-1/2">
        <div className="bg-cyan-400 text-slate-900 px-4 py-1rounded-fulltext-smfont-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="text-centermb-6"></div>
                    <h3 className="text-2xlfont-boldtext-whitemb-2">{plan.name}</h3>
                    <div className="flexitems-baselinejustify-center"></div>
                      <span className="text-4xlfont-boldtext-cyan-400">{plan.price}</span>
                      <span className="text-gray-400ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3mb-8"></ul>
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flexitems-centertext-gray-300"></li>
                        <CheckCircle className="w-4 h-4text-green-400mr-3flex-shrink-0" /></CheckCircle>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? "cyber-button"
                        : "border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900",
                    }`}
                  ></a>
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </section>
          {/* CTA Section */}
          <section className="text-centermb-16"></section>
            <div className="cyber-cardp-12max-w-4xlmx-auto"></div>
              <h2 className="text-3xl font-boldtext-whitemb-4neon-text"></h2>
                Ready to Create Amazing 3D Content?
              </h2>
              <p className="text-xltext-gray-300mb-8">
            Join leading companies using AI 3D generation technology
              </p>
              <div className="flex flex-colsm:flex-rowgap-4justify-center"></div>
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semiboldhover:scale-105transition-all duration-300"
                ></a>
                  Start Your Free Trial
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400hover:text-slate-900transition-all duration-300"
                ></a>
                  <span />Call +1 302 464 0950</span>
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>,
  ),
}

export default AI3DGenerationPage;