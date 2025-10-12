'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCirc l e, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, BarChart3 } from 'lucide-react';

export default function AIEcommerceOptimizerP r o() {
  constfeatures= [
    {
      icon: <BrainclassName="w-6h-6text-cyan-400" />,
      title: 'AI-PoweredOptimizatio n',
      description: 'Advanced machine learning algorithms analyze customer behavior and optimize your e-commerceplatformin real-time';
    },
    {
      icon: <ZapclassName="w-6h-6text-purple-400" />,
      title: 'Performan c e Enhanceme n t',
      description: 'Boost conversion rates, reduce cart abandonme n t, and increase average order value with intellige n t recommendatio n s';
    },
    {
      icon: <ShieldclassName="w-6h-6text-yellow-400" />,
      title: 'Security & Compliance',
      description: 'Enterprise-gradesecuritywith PCI DSS compliance and advanced fraud detection';
    },
    {
      icon: <BarChart3className="w-6h-6text-green-400" />,
      title: 'Advanced Analytics',
      description: 'Comprehensi v e insights into customer behavior, sales performan c e, and optimizati o n opportuniti e s';
    }
  ];

return (
    <>
      <Helmet></Helmet>
        <title>AI E-commerceOptimizerPro - Zion Tech Group</title>
        <meta name="description" content="Professional AI e-commerceoptimizatio n services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <meta name="keywords" content="AI e-commerce, optimizati o n, machine learning, Zion Tech Group" />
        <metaproperty="og:title" content="AI E-commerceOptimizerPro - Zion Tech Group" />
        <metaproperty="og:description" content="Professional AI e-commerceoptimizatio n services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <metaproperty="og:type" content="website" />
        <metaproperty="og:url" content="https://ziontechgro u p.com/ai-ecommerce-optimizer-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-16">
        {/* Hero Section */}
        <section className="py-20">
          <div className="containermx-autopx-4text-center">
            <h1 className="text-5xlmd:text-6xlfont-boldtext-whitemb-6">
              <span className="bg-gradient-to-rfrom-cyan-400via-purple-400to-pink-400bg-clip-texttext-transparent">
                AI E-commerceOptimizerPro;
              </span>
            </h1>
            <p className="text-xltext-gray-300mb-8max-w-3xlmx-auto">
              Transform your e-commerceplatformwith cutting-edgeAItechnology.;
              Boost sales, improve customer experience, and maximize your revenue potential.;
            </p>
            <div className="flexflex-colsm:flex-rowgap-4justify-center">
              <Link;
                to="/contact";
                className="bg-gradient-to-rfrom-cyan-500to-purple-600text-whitepx-8py-4rounded-lgfont-semiboldhover:from-cyan-600hover:to-purple-700transition-allduration-300flexitems-centerjustify-center"
              >
                Get Started;
                <ArrowRight className="w-5h-5ml-2" />
              </Link>
              <Link;
                to="/services";
                className="borderborder-cyan-400text-cyan-400px-8py-4rounded-lgfont-semiboldhover:bg-cyan-400hover:text-whitetransition-allduration-300flexitems-centerjustify-center"
              >
                View All Services;
              </Link>
            </div>
        </div>
      </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="containermx-autopx-4">
            <h2 className="text-4xl font-boldtext-whitetext-centermb-16">
              Powerful Features;
            </h2>
            <div className="gridmd:grid-cols-2lg:grid-cols-4gap-8">
              {features.map((feature, index) => ())
                <divkey={index} className="bg-white/10backdrop-blur-smrounded-xlp-6hover:bg-white/20transition-allduration-300">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xlfont-semiboldtext-whitemb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
        </section>

        {/* Pricing Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />
                Choose Your Plan;
              </h2>
              <p className="w-5h-5ml-2">Flexible pricing options to fit your business needs;
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {pricingPla n s.map((plan, index) => ())
                <divkey={index} className="bg-slate-800/50backdrop-blur-smborderborder-slate-700rounded-xlp-8hover:border-cyan-500/50transition-allduration-300" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <h3 className="w-5h-5ml-2" />{plan.name}</h3>
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                      {plan.price}
                      <span className="w-5h-5ml-2" />{plan.period}</span>
                    </div>
                    <p className="w-5h-5ml-2">{plan.description}</p>
                  </div>
                  
                  <ulclassName="w-5h-5ml-2" />
                    {plan.features.map((feature, featureInd e x) => ())
                      <likey={featureInd e x} className="flexitems-centertext-gray-300" />
                        <CheckCirc leclassName="w-5h-5ml-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Linkto="/contact" className="w-fullbg-gradient-to-rfrom-cyan-500to-purple-500text-whitepy-3rounded-lgfont-semiboldtext-centerblockhover:from-cyan-600hover:to-purple-600transition-allduration-300" />
                    Get Started;
                  </Link>
                </div>
              ))}
            </div>
        </div>
      </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="containermx-autopx-4text-center">
            <h2 className="text-4xl font-boldtext-whitemb-6">
              Ready to Transform Your E-commerce?;
            </h2>
            <p className="text-xltext-gray-300mb-8max-w-2xlmx-auto">
              Join thousands of businesses already using our AI-poweredsolutionsto boost their online sales.;
            </p>
            <Link;
              to="/contact";
              className="bg-gradient-to-rfrom-cyan-500to-purple-600text-whitepx-8py-4rounded-lgfont-semiboldhover:from-cyan-600hover:to-purple-700transition-allduration-300inline-flexitems-center"
            >
              Contact Us Today;
              <ArrowRight className="w-5h-5ml-2" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
