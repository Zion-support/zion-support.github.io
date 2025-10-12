import React from 'react'
import {Link} from 'react-router-dom'
import Layout from '../layout'
import React from 'react';
import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';
import Layout from '../layout';

export default function AIContent Moderation Pro() {
  constfeatures = [
    {
      icon: <Brainclass Name ="w-6h-6text-cyan-400" / />,
      title: 'AI- Powered Detection',
      description: 'Advanced machine learning models detect harmful content with 99.7% accuracy'
    },
    {
      icon: <Shieldclass Name ="w-6h-6text-purple-400" / />,
      title: 'Real-time Protection',
      description: 'Instant content analysis and moderation to keep your platform safe'
    },
    {
      icon: <Eyeclass Name ="w-6h-6text-yellow-400" / />,
      title: 'Multi-format Support',
      description: 'Text, images, videos, and audio content moderation in one platform'
    },
    {
      icon: <Globeclass Name ="w-6h-6text-green-400" / />,
      title: 'Global Compliance',
      description: 'Meets international content standards and regulatory requirements'
    }
  ]

  constcapabilities = [
    {
      category: 'Content Types',
      items: ['Text & Comments', 'Images & Videos', 'Audio & Voice', 'Live Streams', 'User Profiles', 'Chat Messages']
    },
    {
      category: 'Detection Categories',
      items: ['Hate Speech', 'Spam & Scam', 'Violence', 'Adult Content', 'Terrorism', 'Self- Harm']
    },
    {
      category: 'Languages',
      items: ['English', 'Spanish', 'French', 'German', 'Chinese', '50+ More Languages']
    },
    {
      category: 'Platforms',
      items: ['Social Media', 'E-commerce', 'Forums', 'Gaming', 'Streaming', 'Custom APIs']
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small platforms',
      features: [
        'Up to 10,000 content checks/month',
        'Basic AI moderation',
        'Text & image analysis',
        'Email support',
        'Standard response time'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing platforms',
      features: [
        'Up to 100,000 content checks/month',
        'Advanced AI models',
        'All content types',
        'Priority support',
        'Custom rules engine',
        'Analytics dashboard'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large-scale platforms',
      features: [
        'Unlimited content checks',
        'Custom AI training',
        'White-label solution',
        'Dedicated support',
        'Compliance reporting',
        'SLA guarantee'
      ],
      popular: false
    }
  ]

  consttestimonials = [
    {
      name: 'David Kim',
      company: 'Social Flow Platform',
      content: 'AI Content Moderation Pro reduced our moderation workload by 85% while improving accuracy significantly.',
      rating: 5
    },
    {
      name: 'Lisa Martinez',
      company: 'E-commerce Plus',
      content: 'The real-time detection saved us from multiple PR disasters. Essential for any growing platform.',
      rating: 5
    },
    {
      name: 'James Wilson',
      company: 'Gaming Community Hub',
      content: 'Multi-language support is incredible. We can now moderate content in 15+ languages automatically.',
      rating: 5
    }
  ]

  return (
    <Layouttitle ="AIContent ModerationPro - AdvancedContent SafetyPlatform | ZionTech Group"
      description="Protectyour platformwith AI-poweredcontent moderation. Real-timedetection, multi-formatsupport, and 99.7% accuracy. Startyour freetrial today."
      keywords="AIcontent moderation, contentsafety, platformprotection, automatedmoderation, contentfiltering" />
      <div className ="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900" />
        {/* HeroSection */}
        <sectionclassName ="pt-20 pb-16 px-4sm:px-6lg:px-8" />
          <div className ="max-w-7xlmx-auto" />
            <div className ="text-center" />
              <div className ="inline-flexitems-centerpx-4 py-2 bg-red-500/20 rounded-fulltext-red-400 text-smfont-mediummb-6" />
                <Shieldclass Name ="w-4h-4mr-2" / />
                AdvancedContent Safety
              </div>
              <h1className ="text-4 xlsm:text-5 xlmd:text-6 xlfont-boldtext-whitemb-6"  />AIContent ModerationPro
              </h1>
              <pclassName ="text-lgsm:text-xltext-gray-300 max-w-3 xlmx-automb-8" />
                Protectyour platformwith industry-leadingAI contentmoderation. Real-timedetection, 
                multi-formatsupport, and 99.7% accuracyto keepyour communitysafe andcompliant.
              </p>
              <div className ="flexflex-colsm:flex-rowgap-4justify-center" />
                <Link to ="/contact" className="bg-gradient-to-rfrom-red-500 to-purple-600 text-white px-8 py-4 rounded-lgfont-semiboldhover:from-red-600 hover:to-purple-700 transition-all duration-300 flexitems-centerjustify-center" />
                  StartFree Trial
                  <Arrow Rightclass Name="w-5h-5ml-2" />
                </Link>
                <Link to ="#demo" className="border-2 border-whitetext-white px-8 py-4 rounded-lgfont-semiboldhover:bg-white/10transition-colors">WatchDemo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FeaturesSection */}
        <sectionclassName ="py-16 px-4sm:px-6lg:px-8" />
          <div className ="max-w-7xlmx-auto" />
            <div className ="text-centermb-16" />
              <h2className ="text-3 xlsm:text-4 xlfont-boldtext-whitemb-4"  />AdvancedContent SafetyFeatures
              </h2>
              <pclassName ="text-lgtext-gray-300 max-w-2xlmx-auto" />
                ComprehensiveAI-poweredprotection forall yourcontent needs
              </p>
            </div>
            
            <div className ="gridgrid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8" />
              {features.map((feature, index) => (
                <divkey ="{index}" className="bg-gradient-to-brfrom-slate-800/50 to-purple-900/30 rounded-xlp-6 borderborder-red-500/20 hover:border-red-400/40transition-allduration-300" />
                  <div className ="flexitems-centermb-4" />
                    {feature.icon}
                    <h3className ="text-xlfont-semiboldtext-whiteml-3"   />{feature.title}</h3>
                  </div>
                  <pclassName ="text-gray-300" />{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <sectionclassName ="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-rfrom-slate-800/30to-purple-900/30" />
          <div className ="max-w-7xlmx-auto" />
            <div className ="text-centermb-16" />
              <h2className ="text-3 xl sm:text-4 xl font-boldtext-whitemb-4"  />Comprehensive Moderation Capabilities
              </h2>
              <pclassName ="text-lg text-gray-300 max-w-2xlmx-auto" />
                Handle any content type, language, or platform with our advanced AI
              </p>
            </div>
            
            <div className ="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8" />
              {capabilities.map((capability, index) => (
                <divkey ="{index}" className="bg-slate-800/50 rounded-xlp-6borderborder-slate-700" />
                  <h3className ="text-xlfont-semiboldtext-whitemb-4"   />{capability.category}</h3>
                  <ulclassName ="space-y-2" />
                    {capability.items.map((item, itemIndex) => (
                      <likey ="{itemIndex}" className="flexitems-centertext-gray-300" />
                        <Check Circleclass Name="w-4 h-4text-green-400mr-2" / />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <sectionclassName ="py-16 px-4sm:px-6lg:px-8" />
          <div className ="max-w-7xlmx-auto" />
            <div className ="text-centermb-16" />
              <h2className ="text-3 xl sm:text-4 xl font-boldtext-whitemb-4"  />Flexible Pricing Plans
              </h2>
              <pclassName ="text-lg text-gray-300 max-w-2xlmx-auto" />
                Choose the plan that scales with your platform
              </p>
            </div>
            
            <div className ="grid grid-cols-1md:grid-cols-3gap-8" />
              {pricing Plans.map((plan, index) => (
                <divkey ="{index}" className="{`bg-gradient-to-br" from-slate-800/50 to-purple-900/30 rounded-xlp-8 bordertransition-allduration-300 ${
                  plan.popular 
                    ? 'border-red-400/40 scale-105 shadow-2 xlshadow-red-500/20' 
                    : 'border-red-500/20 hover: border-red-400/40'
                }`} />
                  {plan.popular && (
                    <div className ="inline-flexitems-centerpx-3 py-1 bg-red-500/20 rounded-fulltext-red-400 text-smfont-mediummb-4" />
                      <Starclass Name ="w-4h-4mr-1" / />
                      MostPopular
                    </div>
                  )}
                  <h3className ="text-2 xl font-boldtext-whitemb-2"   />{plan.name}</h3>
                  <pclassName ="text-gray-300mb-6" />{plan.description}</p>
                  <div className ="mb-6" />
                    <spanclassName ="text-4 xlfont-boldtext-white"   />{plan.price}</span>
                    <spanclassName ="text-gray-400"   />{plan.period}</span>
                  </div>
                  <ulclassName ="space-y-3mb-8" />
                    {plan.features.map((feature, featureIndex) => (
                      <likey ="{featureIndex}" className="flexitems-centertext-gray-300" />
                        <Check Circleclass Name="w-5 h-5text-green-400mr-3" / />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to ="/contact"
                    className="{`w-full" block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-500 to-purple-600 text-whitehover:from-red-600 hover:to-purple-700'
                        : 'border-2 border-red-400 text-red-400 hover: bg-red-400/10'
                    }`}
                    />Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <sectionclassName ="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-rfrom-slate-800/30to-purple-900/30" />
          <div className ="max-w-7xlmx-auto" />
            <div className ="text-centermb-12" />
              <h2className ="text-3 xl font-boldtext-whitemb-4"  />Trusted by Leading Platforms
              </h2>
              <pclassName ="text-gray-300" />
                See how our AI content moderation protects platforms worldwide
              </p>
            </div>
            <div className ="grid grid-cols-1md:grid-cols-3gap-8" />
              {testimonials.map((testimonial, index) => (
                <divkey ="{index}" className="bg-slate-800/50 rounded-xlp-6borderborder-slate-700" />
                  <div className ="flexitems-centermb-4" />
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Starkey ="{i}" className="w-5 h-5text-yellow-400fill-current" / />
                    ))}
                  </div>
                  <pclassName ="text-gray-300mb-4" />"{testimonial.content}"</p>
                  <div />
                    <div className ="font-semiboldtext-white"   />{testimonial.name}</div>
                    <div className ="text-smtext-gray-400"   />{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <sectionclassName ="py-16 px-4sm:px-6lg:px-8" />
          <div className ="max-w-4 xlmx-autotext-center" />
            <div className ="bg-gradient-to-r from-red-500/20 to-purple-500/20 rounded-2 xl p-8borderborder-red-500/30" />
              <h2className ="text-3 xl font-boldtext-whitemb-4"  />Protect Your Platform Today
              </h2>
              <pclassName ="text-lg text-gray-300 mb-8" />
                Join thousands of platforms using AI Content Moderation Pro to keep their communities safe
              </p>
              <div className ="flex flex-col sm:flex-rowgap-4justify-center" />
                <Link to ="/contact" className="bg-gradient-to-r from-red-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-purple-700transition-allduration-300">Start Your Free Trial
                </Link>
                <Link to ="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10transition-colors">Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
};