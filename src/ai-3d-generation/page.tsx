import React from "react";
import { Play } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SEOOptimizer from "../components/SEOOptimizer";
import { CheckCircle, Camera, Zap } from "lucide-react";
const AI3DGenerationPage: React.FC = () => {
  const features = [
    '3D Model Generation'
    'Animation Creation'
    'Texture Mapping'
    'Rendering'
    'VR/AR Support'
    'Export Formats'
    'AI Texturing'
    'Lighting Setup'
    'Material Library'
    'Scene Composition'
  ]
  const benefits = [
    'Professional 3D content'
    'Time savings'
    'No 3D skills needed'
    'High quality output'
    'Cost-effective'
    'Scalable production'
  ]
  const pricingPlans = [
    {
      name: 'Starter'
      price: '$299'
      period: '/month'
      features: ['5 models/month', 'Basic textures', 'Standard quality', 'Email support']
      popular: false
    }
    {
      name: 'Professional'
      price: '$499'
      period: '/month'
      features: ['Unlimited models', 'Premium textures', '4K rendering', 'API access', 'Priority support']
      popular: true
    }
    {
      name: 'Enterprise'
      price: '$999'
      period: '/month'
      features: ['Everything in Pro', 'Custom models', 'White-label', 'Dedicated support', 'Commercial license']
      popular: false
    }
  ]
  return (
    <>
  </>
      <SEOOptimizer
        title="AI 3D Generation Studio - Create 3D Models & Animations with AI | ZionTechGroup"
        description="Create professional 3D models, animations, and virtual environments with AI 3D Generation Studio. No 3D skills needed, starting at $299/month."
        keywords = {
['AI 3D generation', '3D models', '3D animation', 'VR AR content', '3D automation', 'AI 3D']
};
    </div>
        canonicalUrl="https://ziontechgroup.com/ai-3d-generation"
      /></SEOOptimizer>
      <div></div>
        <Navigation></Navigation>
        <main></main>
          {/* Hero Section */}</main>
          <section></section>
            <div></div>
              <div></div>
                <div></div>
                  <Camera></Camera>
                </div>
                <h1></h1>
                  AI 3D Generation Studio</h1>
                </h1>
              </div>
              <p></p>
                Create 3D models, animations, and virtual environments with AI</p>
              </p>
              <div></div>
                <a></a>
                  Start Free Trial</a>
                </a>
                <a></a>
                  <Play></Play>
                  View Gallery</Play>
                </a>
              </div>
            </div>
          </section>
          {/* Features Section */}
          <section></section>
            <h2></h2>
              AI 3D Generation Features</h2>
            </h2>
            <div></div>
              {features.map((feature, inde, x) => (</div>
                <div></div>
                  <div></div>
                    <CheckCircle></CheckCircle>
                    <h3 className="text-lg font-semibold text-white">{feature}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
          {/* Benefits Section */}
          <section></section>
            <h2></h2>
              Why Choose AI 3D Generation Studio?</h2>
            </h2>
            <div></div>
              {benefits.map((benefit, inde, x) => (</div>
                <div></div>
                  <div></div>
                    <Zap></Zap>
                  </div>
                  <h3 className="text-lgfont-semiboldtext-whitemb-2">{benefit}</h3>
                </div>
              ))}
            </div>
          </section>
          {/* Pricing Section */}
          <section></section>
            <h2></h2>
              Simple, Transparent Pricing</h2>
            </h2>
            <div></div>
              {pricingPlans.map((plan, inde, x) => (</div>
                <div></div>
                  {plan.popular && (</div>
                    <div></div>
                      <div></div>
                        Most Popular</div>
                      </div>
                    </div>
                  )}
                  <div></div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div></div>
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul></ul>
                    {plan.features.map((feature, featureInde, x) => (</ul>
                      <li></li>
                        <CheckCircle></CheckCircle>
                        {feature}</CheckCircle>
                      </li>
                    ))}
                  </ul>
                  <a></a>
                    Get Started</a>
                  </a>
                </div>
              ))}
            </div>
          </section>
          {/* CTA Section */}
          <section></section>
            <div></div>
              <h2></h2>
                Ready to Create Amazing 3D Content?</h2>
              </h2>
              <p></p>
                Join leading companies using AI 3D generation technology</p>
              </p>
              <div></div>
                <a></a>
                  Start Your Free Trial</a>
                </a>
                <a></a>
                  <span />Call +1 302 464 0950</span>
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer></Footer>
      </div>
    </div>
  )
}
;
export default AI3DGenerationPage;