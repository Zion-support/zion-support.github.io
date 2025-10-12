'use client';
import React from 'react';
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {ArrowRight, CheckCircle, Zap, Shield, Brain} from 'lucide-react';

const Page: React.FC = () => {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Ideal for small teams',
      features: [
        'Up to 10 projects',
        'Basic task management',
        'Email support',
        'Basic analytics'
      ]
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Perfect for growing teams',
      features: [
        'Up to 50 projects',
        'Advanced project management',
        'Priority support',
        'Advanced analytics',
        'Team collaboration tools'
      ]
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited projects',
        'Custom workflows',
        '24/7 dedicated support',
        'Custom integrations',
        'White-label options'
      ]
    }
  ];

  return (
    <>
      <Helmet />
        <title />AIProject ManagementPro - ZionTech Group</title>
        <meta name ="description" content="Professional AI projectmanagement servicesby Zion Tech Group. Expertsolutions tailoredto yourbusiness needs." />
        <meta name ="keywords" content="AIproject management, productivity, Zion Tech Group" />
        <metaproperty ="og:title" content="AIProject Management Pro - Zion Tech Group" />
        <metaproperty ="og:description" content="Professional AI projectmanagement servicesby Zion Tech Group. Expertsolutions tailoredto yourbusiness needs." />
        <metaproperty ="og:type" content="website" />
        <metaproperty ="og:url" content="https://ziontechgroup.com/ai-project-management-pro" />
      </Helmet>

      <div className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-16" />
        {/* HeroSection */}
        <sectionclassName ="py-20" />
          <div className ="containermx-autopx-4text-center" />
            <h1className ="text-5xlmd:text-6xlfont-boldtext-whitemb-6" />
              <spanclassName ="bg-gradient-to-rfrom-cyan-400 via-purple-400 to-pink-400bg-clip-texttext-transparent" />
                AIProject ManagementPro
              </span>
            </h1>
            <pclassName ="text-xltext-gray-300 mb-8max-w-3xlmx-auto" />
              ProfessionalAI projectmanagement servicesby ZionTech Group. Expertsolutions tailoredto yourbusiness needs.
            </p>
            <div className ="flexflex-colsm:flex-rowgap-4justify-centermb-12" />
              <Link to ="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lgfont-semiboldtext-lghover:from-cyan-600 hover:to-purple-600 transition-allduration-300 transformhover:scale-105 shadow-lghover:shadow-cyan-500/25 flexitems-centerjustify-centergroup" />
                GetStarted
                <Arrow Rightclass Name="ml-2group-hover:translate-x-1transition-transform" />
              </Link>
              <Link to ="/contact" className="borderborder-cyan-500 text-cyan-400 px-8 py-4 rounded-lgfont-semiboldtext-lghover:bg-cyan-500/10 transition-allduration-300transformhover:scale-105" />
                LearnMore
              </Link>
            </div>
          </div>
        </section>

        {/* FeaturesSection */}
        <sectionclassName ="py-20" />
          <div className ="containermx-autopx-4" />
            <div className ="text-centermb-16" />
              <h2className ="text-4xl font-bold text-white mb-6" />
                WhyChoose OurAI ProjectManagement?
              </h2>
              <pclassName ="text-xltext-gray-300max-w-3xlmx-auto" />
                Ouradvanced AItechnology helpsyou manageprojects moreefficiently
              </p>
            </div>
            
            <div className ="gridgrid-cols-1md:grid-cols-3gap-8" />
              {[
                {
                  icon: <Brainclass Name ="w-12h-12text-cyan-400" />,
                  title: "AI- PoweredPlanning",
                  description: "Advancedmachine learningalgorithms helpoptimize projecttimelines andresource allocation."
                },
                {
                  icon: <Zapclass Name ="w-12h-12text-purple-400" />,
                  title: "Real-timeTracking",
                  description: "Getinstant insightsinto projectprogress andteam performancewith ourcomprehensive dashboard."
                },
                {
                  icon: <Shieldclass Name ="w-12h-12text-green-400" />,
                  title: "Secure & Reliable",
                  description: "Enterprise-gradesecurity ensuresyour projectdata isprotected whilemaintaining 99.9% uptime."
                }
              ].map((feature, index) => (
                <divkey ={index} className="bg-slate-800/50 backdrop-blur-smborder border-slate-700 rounded-xlp-8 text-centerhover:border-cyan-500/50transition-allduration-300" />
                  <div className ="flexjustify-centermb-4" />
                    {feature.icon}
                  </div>
                  <h3className ="text-xlfont-semiboldtext-whitemb-4" />{feature.title}</h3>
                  <pclassName ="text-gray-300" />{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <sectionclassName ="py-20" />
          <div className ="containermx-autopx-4" />
            <div className ="text-centermb-16" />
              <h2className ="text-4xl font-boldtext-whitemb-6" />
                Choose Your Plan
              </h2>
              <pclassName ="text-xl text-gray-300max-w-3xlmx-auto" />
                Flexible pricing options to fit your team's needs
              </p>
            </div>
            
            <div className ="grid grid-cols-1md:grid-cols-3gap-8" />
              {pricing Plans.map((plan, index) => (
                <divkey ={index} className="bg-slate-800/50 backdrop-blur-smborder border-slate-700 rounded-xlp-8 hover:border-cyan-500/50transition-allduration-300" />
                  <div className ="text-centermb-8" />
                    <h3className ="text-2xlfont-boldtext-whitemb-2" />{plan.name}</h3>
                    <div className ="text-4xlfont-boldtext-cyan-400mb-2" />
                      {plan.price}
                      <spanclassName ="text-lgtext-gray-400" />{plan.period}</span>
                    </div>
                    <pclassName ="text-gray-300" />{plan.description}</p>
                  </div>
                  
                  <ulclassName ="space-y-4mb-8" />
                    {plan.features.map((feature, featureIndex) => (
                      <likey ={featureIndex} className="flexitems-centertext-gray-300" />
                        <Check Circleclass Name="w-5 h-5 text-green-400mr-3flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link to ="/contact" className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 rounded-lg font-semibold text-center block hover:from-cyan-600 hover:to-purple-600transition-allduration-300" />
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <sectionclassName ="py-20" />
          <div className ="containermx-autopx-4" />
            <div className ="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xlp-12text-center" />
              <h2className ="text-4xl font-boldtext-whitemb-6" />
                Ready to Get Started?
              </h2>
              <pclassName ="text-xl text-gray-300 mb-8max-w-2xlmx-auto" />
                Contact us to learn more about our solutions and how we can help your business.
              </p>
              <div className ="flex flex-col sm:flex-rowgap-4justify-center" />
                <Link to ="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-cyan-500/25" />
                  Contact Us
                </Link>
                <Link to ="/services" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105" />
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;
;
