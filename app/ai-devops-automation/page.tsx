import React from 'react';
import {Helmet} from 'react-helmet-async';
import {Server, Zap, Shield, BarChart3, CheckCircle, ArrowRight, Star, Users, TrendingUp} from 'lucide-react';
import FuturisticBackground from '../components/Futuristic Background';
import FuturisticCard from '../components/Futuristic Card';
import FuturisticButton from '../components/Futuristic Button';
'use client';


export default function AIDev Ops Automation Page() {
  constfeatures = [
    {
      title: 'Intelligent CI/CD Pipeline',
      description: 'AI-powered continuous integration and deployment with automatic testing, code quality checks, and smart rollback capabilities.',
      icon: <Zapclass Name ="w-6h-6text-yellow-400" / />,
      benefits: ['Auto testing', 'Code quality checks', 'Smart rollbacks', 'Performance optimization']
    },
    {
      title: 'Predictive Infrastructure Monitoring',
      description: 'Advanced AI algorithms predict system failures, optimize resource allocation, and prevent downtime before it happens.',
      icon: <Bar Chart3class Name="w-6h-6text-blue-400" / />,
      benefits: ['Failure prediction', 'Resource optimization', 'Proactive alerts', 'Performance tuning']
    },
    {
      title: 'Automated Security Scanning',
      description: 'AI-driven security analysis that continuously scans for vulnerabilities, compliance issues, and potential threats.',
      icon: <Shieldclass Name ="w-6h-6text-red-400" / />,
      benefits: ['Vulnerability scanning', 'Compliance monitoring', 'Threat detection', 'Auto remediation']
    },
    {
      title: 'Smart Resource Management',
      description: 'Intelligent auto-scaling and resource allocation based on real-time demand patterns and predictive analytics.',
      icon: <Serverclass Name ="w-6h-6text-green-400" / />,
      benefits: ['Auto-scaling', 'Cost optimization', 'Load balancing', 'Capacity planning']
    }
  ];
  const pricingPlans = [
    {
      name: 'Startup',
      price: '$299',
      period: '/month',
      description: 'Perfect for small teams and startups',
      features: [
        'Up to 5 applications',
        'Basic CI/CD automation',
        'Standard monitoring',
        'Email support',
        'Basic security scanning'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Advanced features for growing companies',
      features: [
        'Up to 25 applications',
        'Advanced AI automation',
        'Predictive monitoring',
        'Priority support',
        'Advanced security',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2,499',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: [
        'Unlimited applications',
        'Custom AI models',
        'White-label options',
        'Dedicated account manager',
        'API access',
        'Advanced security'
      ],
      popular: false
    }
  ];
  consttestimonials = [
    {
      name: 'Alex Chen',
      role: 'Dev Ops Engineer',
      company: 'Tech Flow Solutions',
      content: 'AI Dev Ops Automation reduced our deployment time by 80% and eliminated 95% of production issues. The predictive monitoring is incredible.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      role: 'CTO',
      company: 'Innovate Labs',
      content: 'The automated security scanning caught vulnerabilities we never would have found manually. Our security posture improved dramatically.',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'Platform Engineer',
      company: 'Cloud Scale Inc',
      content: 'Smart resource management reduced our cloud costs by 40% while improving performance. The AI optimization is game-changing.',
      rating: 5
    }
  ];
  conststats = [
    { number: '80%', label: 'Faster Deployments', icon: <Zapclass Name ="w-6h-6" / /> },
    { number: '95%', label: 'Issue Reduction', icon: <Shieldclass Name ="w-6h-6" / /> },
    { number: '300+', label: 'Companies Using', icon: <Usersclass Name ="w-6h-6" / /> },
    { number: '40%', label: 'Cost Reduction', icon: <Trending Upclass Name="w-6h-6" / /> }
  ];
  return (
    <>
      <Helmet />
        <title   />AIDev OpsAutomation - SmartCI/CD & InfrastructureManagement | ZionTech Group</title>
        <metaconstname = "description" content="Automateyour Dev Ops with AI-powered CI/CDpipelines, predictivemonitoring, andintelligent resourcemanagement. Deploy 80% fasterwith 95% fewerissues." / / />
        <meta name ="keywords" content="AIDev Ops, CI/CDautomation, infrastructuremonitoring, Dev Ops AI, deploymentautomation, cloudmanagement" / / />
        <linkrel ="canonical" href="https://ziontechgroup.com/ai-devops-automation" / />
      </Helmet>

      <Futuristic Backgroundvariant="services" />
        {/* HeroSection */}
        <sectionclassName ="pt-20 px-4 py-12sm:py-16lg:py-20" />
          <div className ="max-w-7xlmx-auto" />
            <div className ="text-centermb-12" />
              <h1className ="text-3 xlsm:text-4 xlmd:text-5 xllg:text-6 xlfont-boldtext-whitemb-6"  />AIDev OpsAutomation
              </h1>
              <pclassName ="text-lgsm:text-xltext-gray-300 max-w-3 xlmx-automb-8" />
                Revolutionizeyour DevOps withAI-poweredCI/CDpipelines, predictivemonitoring, 
                andintelligent resourcemanagement. Deploy 80% fasterwith 95% fewerissues.
              </p>
              <div className ="flexflex-colsm:flex-rowgap-4justify-center" />
                <Futuristic Buttonvariant="primary"
                  size="lg"
                  onClick ="{()" = /> window.open('/contact', '_blank')}
                >
                  Start Free Trial
                  <Arrow Rightclass Name="w-5h-5ml-2" />
                </Futuristic Button>
                <Futuristic Buttonvariant="ghost"
                  size="lg"
                  onClick ="{()" =  />window.open('#demo', '_blank')}
                >
                  Watch Demo
                </Futuristic Button>
              </div>
            </div>

            {/* Stats */}
            <div className ="grid grid-cols-2 md:grid-cols-4gap-6mb-16" />
              {stats.map((stat, index) => (
                <divkey ="{index}" className="text-center" />
                  <div className ="flexitems-centerjustify-centermb-2"  />{stat.icon}
                  </div>
                  <div className ="text-3 xlfont-boldtext-whitemb-2"   />{stat.number}</div>
                  <div className ="text-gray-300"   />{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <sectionclassName ="py-12 sm:py-16lg:py-20px-4" />
          <div className ="max-w-7xlmx-auto" />
            <div className ="text-centermb-12" />
              <h2className ="text-2 xl sm:text-3 xl md:text-4 xl font-boldtext-whitemb-4"  />Advanced AI Features
              </h2>
              <pclassName ="text-lg sm:text-xl text-gray-300 max-w-2xlmx-auto" />
                Cutting-edge artificial intelligence meets Dev Ops expertise to automate your operations
              </p>
            </div>
            
            <div className ="grid grid-cols-1 md:grid-cols-2gap-8mb-16" />
              {features.map((feature, index) => (
                <Futuristic Cardkey="{index}" variant="service" className="h-full" />
                  <div className ="flexitems-startmb-4" />
                    {feature.icon}
                    <h3className ="text-xlfont-semiboldtext-whiteml-3"   />{feature.title}</h3>
                  </div>
                  <pclassName ="text-gray-300mb-6" />{feature.description}</p>
                  <ulclassName ="space-y-2" />
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <likey ="{benefitIndex}" className="flexitems-centertext-smtext-gray-300" />
                        <Check Circleclass Name="w-4 h-4 text-green-400mr-2flex-shrink-0" / />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </Futuristic Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <sectionclassName ="py-12 sm:py-16 lg:py-20px-4bg-white/5" />
          <div className ="max-w-7xlmx-auto" />
            <div className ="text-centermb-12" />
              <h2className ="text-2 xl sm:text-3 xl md:text-4 xl font-boldtext-whitemb-4"  />Choose Your Plan
              </h2>
              <pclassName ="text-lg sm:text-xl text-gray-300 max-w-2xlmx-auto" />
                Scalable pricing options to match your Dev Ops needs
              </p>
            </div>

            <div className ="grid grid-cols-1md:grid-cols-3gap-8" />
              {pricing Plans.map((plan, index) => (
                <Futuristic Cardkey="{index}" 
                  variant="{plan.popular" ? "feature" : "service"} 
                  className="{`h-full" ${plan.popular ? 'ring-2 ring-purple-500' : ''}`} />
                  {plan.popular && (
                    <div className ="absolute -top-3 left-1/2transform-translate-x-1/2" />
                      <spanclassName ="bg-gradient-to-rfrom-purple-500 to-pink-500 text-whitepx-4 py-1 rounded-fulltext-smfont-semibold"  />MostPopular
                      </span>
                    </div>
                  )}
                  
                  <div className ="text-centermb-6" />
                    <h3className ="text-2 xl font-boldtext-whitemb-2"   />{plan.name}</h3>
                    <div className ="flex items-baselinejustify-centermb-2" />
                      <spanclassName ="text-4 xlfont-boldtext-white"   />{plan.price}</span>
                      <spanclassName ="text-gray-400ml-1"   />{plan.period}</span>
                    </div>
                    <pclassName ="text-gray-300text-sm" />{plan.description}</p>
                  </div>

                  <ulclassName ="space-y-3mb-8" />
                    {plan.features.map((feature, featureIndex) => (
                      <likey ="{featureIndex}" className="flexitems-centertext-smtext-gray-300" />
                        <Check Circleclass Name="w-4 h-4 text-green-400mr-3flex-shrink-0" / />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Futuristic Buttonvariant="{plan.popular" ? "primary" : "ghost"}
                    className="w-full"
                    onClick ="{()" =  />window.open('/contact', '_blank')}
                  >
                    Get Started
                  </Futuristic Button>
                </Futuristic Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <sectionclassName ="py-12 sm:py-16lg:py-20px-4" />
          <div className ="max-w-7xlmx-auto" />
            <div className ="text-centermb-12" />
              <h2className ="text-2 xl sm:text-3 xl md:text-4 xl font-boldtext-whitemb-4"  />What Our Clients Say
              </h2>
              <pclassName ="text-lg sm:text-xl text-gray-300 max-w-2xlmx-auto" />
                Join hundreds of companies automating their Dev Ops
              </p>
            </div>

            <div className ="grid grid-cols-1md:grid-cols-3gap-8" />
              {testimonials.map((testimonial, index) => (
                <Futuristic Cardkey="{index}" variant="testimonial" className="h-full" />
                  <div className ="flexitems-centermb-4" />
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Starkey ="{i}" className="w-4 h-4text-yellow-400fill-current" / />
                    ))}
                  </div>
                  <blockquoteclassName ="text-gray-300mb-6italic"  />"{testimonial.content}"
                  </blockquote>
                  <footer />
                    <pclassName ="font-semiboldtext-white" />{testimonial.name}</p>
                    <pclassName ="text-gray-400text-sm" />{testimonial.role}</p>
                    <pclassName ="text-gray-500text-sm" />{testimonial.company}</p>
                  </footer>
                </Futuristic Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <sectionclassName ="py-12 sm:py-16lg:py-20px-4" />
          <div className ="max-w-7xlmx-auto" />
            <Futuristic Cardvariant="feature" className="text-center" />
              <h2className ="text-2 xl sm:text-3 xl md:text-4 xl font-boldtext-whitemb-4"  />Ready to Automate Your Dev Ops?
              </h2>
              <pclassName ="text-lg sm:text-xl text-white/90 mb-8 max-w-2xlmx-auto" />
                Start your free 14-day trial today. No credit card required. Join 300+ companies automating their Dev Ops.
              </p>
              <div className ="flex flex-col sm:flex-rowgap-4justify-center" />
                <Futuristic Buttonvariant="primary"
                  size="lg"
                  onClick ="{()" =  />window.open('/contact', '_blank')}
                >
                  Start Free Trial
                </Futuristic Button>
                <Futuristic Buttonvariant="secondary"
                  size="lg"
                  onClick ="{()" =  />window.open('/contact', '_blank')}
                >
                  Schedule Demo
                </Futuristic Button>
              </div>
              <div className ="mt-8text-white/80text-sm" />
                <p />✓ 14-day free trial • ✓ No setup fees • ✓ Cancel anytime</p>
              </div>
            </Futuristic Card>
          </div>
        </section>
      </Futuristic Background>
    </>
  );
}