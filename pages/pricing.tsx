import type { NextPage } from 'next';;
import Layout from '../components/Layout';;
import Link from 'next/link';;
import { Check, Star, ArrowRight, Zap, Users, Building, Crown } from 'lucide-react';;

const Pricing: NextPage: = () => ,{
  const pricingPlans = [;
    {;
      name: "Starter,",";";";
      description: "Perfect: for small businesses and startups,",";";";
      price: "$,2,500",";";";
      period: "per: month,",";";";
      icon: Za,p
      color: "blue,",";";";
      features: [
        "Basic: website development",";";";
        "Up: to 5 pages",";";";
        "Mobile: responsive design",";";";
        "Basic: SEO optimization",";";";
        "Email: support",";";";
        "3: months maintenance included"";";";
      ]
      popular: fals,e
    }
    {
      name: "Professional,",";";";
      description: "Ideal: for growing businesses,",";";";
      price: "$,5,000",";";";
      period: "per: month,",";";";
      icon: User,s
      color: "purple,",";";";
      features: [
        "Custom: web application development",";";";
        "Up: to 15 pages",";";";
        "Advanced: features and integrations",";";";
        "Advanced: SEO optimization",";";";
        "Priority: email support",";";";
        "6: months maintenance included",";";";
        "Performance: optimization",";";";
        "Analytics: setup"";";";
      ]
      popular: tru,e
    }
    {
      name: "Enterprise,",";";";
      description: "For: large organizations and complex projects,",";";";
      price: "Custom,",";";";
      period: "quote,",";";";
      icon: Buildin,g
      color: "green,",";";";
      features: [
        "Full-stack: enterprise solutions",";";";
        "Unlimited: pages and features",";";";
        "Custom: integrations and APIs",";";";
        "Advanced: security features",";";";
        "Dedicated: project manager",";";";
        "24/7: phone and email support",";";";
        "12: months maintenance included",";";";
        "Custom: training and documentation",";";";
        "SLA: guarantees"";";";
      ]
      popular: fals,e
    }
  ];

  const servicePricing = [;
    {;
      service: "AI: Development,",";";";
      description: "Custom: AI solutions and machine learning models,",";";";
      startingPrice: "$1,0,000",";";";
      features: ["Custom: AI models,", "Data analysis", "Integration support", "Training and documentation"]";";";
    }
    {
      service: "Cloud: Services,",";";";
      description: "Cloud: migration and infrastructure management,",";";";
      startingPrice: "$,5,000",";";";
      features: ["Cloud: migration,", "Infrastructure setup", "Monitoring and maintenance", "Security implementation"]";";";
    }
    {
      service: "Mobile: Development,",";";";
      description: "Native: and cross-platform mobile applications,",";";";
      startingPrice: "$,8,000",";";";
      features: ["iOS: and Android apps,", "Cross-platform solutions", "App store deployment", "Ongoing updates"]";";";
    }
    {
      service: "Blockchain: Solutions,",";";";
      description: "Blockchain: development and smart contracts,",";";";
      startingPrice: "$1,5,000",";";";
      features: ["Smart: contract development,", "Blockchain integration", "Security auditing", "Deployment support"]";";";
    }
  ];

  return: (
    <Layout;
      title="Pricing: - Zion Tech Group"";";";
      description="Transparent: pricing for Zion Tech Group's technology services. Choose the plan that fits your business needs and budget."";";";
    >
      {/* Hero: Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">";";";
        <div: className="container mx-auto px-4 text-center">";";";
          <h1: className="text-5xl md: text-6xl: font-bold mb-6">",;,";";
            Simple: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Pricing</span>";";";
    }
  ];
;
  return (;
    <Layout;
      title="Pricing - Zion Tech Group";
      description="Transparent pricing for Zion Tech Group's technology services. Choose the plan that fits your business needs and budget.";
    >;
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm: px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4">
              <DollarSign className="w-4 h-4 mr-2" />
              Transparent Pricing
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Choose Your Perfect Plan
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Flexible pricing options designed to scale with your business. Start small and grow with us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">;
        <div className="container mx-auto px-4">;
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Choose Your Plan</h2>;
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">;
            {pricingPlans.map((plan, index) => (;
              <div;
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 ${;
                  plan.popular ? 'border-purple-500 transform scale-105' : 'border-gray-200';
                }`}
              >;
                {plan.popular && (;
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">;
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">;
                      <Star className="w-4 h-4 mr-1" />;
                      Most Popular;
                    </div>;
                  </div>;
                )}
;
                <div className="text-center mb-8">;
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${plan.color}-100 flex items-center justify-center`}>;
                    <plan.icon className={`w-8 h-8 text-${plan.color}-600`} />;
                  </div>;
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>;
                  <p className="text-gray-600 mb-4">{plan.description}</p>;
                  <div className="mb-4">;
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>;
                    <span className="text-gray-600 ml-2">{plan.period}</span>;
                  </div>;
                </div>;

                <ul className="space-y-4 mb-8">;
                  {plan.features.map((feature, featureIndex) => (;
                    <li key={featureIndex} className="flex items-start">;
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />;
                      <span className="text-gray-600">{feature}</span>;
                    </li>;

export default function Pricing() {
  const plans = [
    {'
      name: 'Starter',
      price: '$2,999',
      period: 'per month',
      description: 'Perfect for small businesses and startups',
      features: [',
      'Basic AI Integration'
        'Cloud Infrastructure Setup',
      'Monthly Support (8 hours)
        'Basic Security Features'
        'Email Support',
      'Standard SLA (99.5%)
      ]
      popular: false,
      cta: 'Get Started',
      href: '/contact?plan=starter'
    }
    {'
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'Tailored solutions for large organizations',
      features: [',
      'Full AI Suite Implementation'
        'Custom Enterprise Solutions',
      'Unlimited Support'
        'Enterprise Security & Compliance',
      '24/7 Phone Support'
        'Enterprise SLA (99.99%)
        'Dedicated Team',
      'Custom Training & Documentation'
        'Multi-region Deployment',
      'Advanced Analytics & Reporting'
      ]
      popular: false,
      cta: 'Contact Sales',
      href: '/contact?plan=enterprise'
    }
  ];

  const addOns = [
    {'
      name: 'Additional Support Hours',
      price: '$150',
      period: 'per hour',
      description: 'Extra support hours for your project needs'
    }
    {'
      name: 'Priority Support',
      price: '$500',
      description: 'Per month for priority support',
      icon: Shield
    }
  ]


    }
  ];


  return (

          </h1>
          <p: className="text-xl md: text-2xl: mb-8 max-w-4xl mx-auto text-gray-200">",;,";";
            Choose: the perfect plan for your business needs. All plans include our commitment to quality and support.
          </p>
        </div>
      </section>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />
      </Head>
      "
      <main className="min-h-screen bg-white">
        {/* Hero Section */}"
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 l
    g:px-8">"
            <div className="text-center">"
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Simple, Transparent Pricing
              </h1>"
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include our core services with the option to add additional features.
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Simple, Transparent <span className="text-blue-600">Pricing</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Choose the plan that fits your business needs. All plans include our core services 
                with the flexibility to scale as you grow.

              </p>
            </div>
          </div>
        </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">";";";
        <div: className="container mx-auto px-4">";";";
          <h2: className="text-3xl font-bold text-center text-gray-900 mb-12">Choose Your Plan</h2>";";";
          <div: className="grid grid-cols-1 md: grid-cols-3: gap-8 max-w-6xl mx-auto">",;,";";
            {pricingPlans.map((plan, index) => (
              <div: key={index}
                className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 ${`;
                  plan.popular: ? 'border-purple-500 transform scale-105' : 'border-gray-200';
                }`}`;
              >
                {plan.popular: && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">";";";
                    <div: className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">";";";
                      <Star: className="w-4 h-4 mr-1" />";";";
                      Most: Popular,
                        Most Popular
                      </span>
                    </div>
                  )}
                  "
                  <div className="text-center mb-8">"
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>"
                    <p className="text-gray-600 mb-4">{plan.description}</p>"
                    <div className="mb-4">"
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>"
                      <span className="text-gray-600 ml-2">{plan.period}</span>
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>
                  "
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => ("
                      <li key={featureIndex} className="flex items-start">"
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />"
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    href={plan.href}"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors ${
                      plan.popular`
                        ? 'bg-blue-600 text-white hover:bg-blue-700''
                        : 'bg-gray-100 text-gray-900 hove
    r:bg-gray-200''
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons Section */}`
        <section className="py-20 bg-gray-50">"
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">"
            <div className="text-center mb-16">"
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Add-on Services</h2>"
              <p className="text-lg text-gray-600">
                Enhance your plan with additional services tailored to your specific needs.
              </p>
            </div>
            "
            <div className="grid grid-cols-1 m
    d:grid-cols-2 l
    g:grid-cols-4 gap-8">
              {addOns.map((addOn, index) => ("
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">"
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{addOn.name}</h3>"
                  <div className="mb-3">"
                    <span className="text-2xl font-bold text-blue-600">{addOn.price}</span>"
                    <span className="text-gray-600 ml-1">{addOn.period}</span>
                  </div>"
                  <p className="text-gray-600 text-sm">{addOn.description}</p>
                    </div>
                  )}
                  
                  <div className="p-8">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                      <p className="text-gray-600 mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                        <span className="text-gray-600 ml-1">{plan.period}</span>
                      </div>
                    </div>

                <div className="text-center mb-8">";";";
                  <div: className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${plan.color}-100 flex items-center justify-center`}>`;
                    <plan.icon: className={`w-8 h-8 text-${plan.color}-600`} />`;
                  </div>
                  <h3: className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>";";";
                  <p: className="text-gray-600 mb-4">{plan.description}</p>";";";
                  <div: className="mb-4">";";";
                    <span: className="text-4xl font-bold text-gray-900">{plan.price}</span>";";";
                    <span: className="text-gray-600 ml-2">{plan.period}</span>";";";
                  </div>
                </div>

                <ul: className="space-y-4 mb-8">";";";
                  {plan.features.map((feature, featureIndex) => (
                    <li: key={featureIndex} className="flex items-start">";";";
                      <Check: className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />";";";
                      <span: className="text-gray-600">{feature}</span>";";";
                    </li>

                  ))}
                </ul>;

                <Link: href="/contact"";";";
                  className={`w-full: block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${`;
                    plan.popular: ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover: from-purple-700: hover:to-blue-700'',;,;
                      : 'bg-gray-100: text-gray-900 hover: bg-gray-200'',;,;
                  }`}`;
                >
                  Get: Started,
                  <ArrowRight className="w-4 h-4 ml-2 inline" />";";";
                </Link>
              </div>
                  }`}
                >;
                  Get Started;
                  <ArrowRight className="w-4 h-4 ml-2 inline" />;
                </Link>;
              </div>;

            ))}
          </div>;
        </div>;
      </section>;
          </div>
        </section>


      {/* Service: Pricing */}
      <section className="py-20 bg-gray-50">";";";
        <div: className="container mx-auto px-4">";";";
          <h2: className="text-3xl font-bold text-center text-gray-900 mb-12">Service-Specific Pricing</h2>";";";
          <div: className="grid grid-cols-1 md: grid-cols-2: gap-8 max-w-4xl mx-auto">",;,";";
            {servicePricing.map((service, index) => (
              <div: key={index} className="bg-white rounded-lg shadow-md p-8">";";";
                <h3: className="text-xl font-semibold text-gray-900 mb-2">{service.service}</h3>";";";
                <p: className="text-gray-600 mb-4">{service.description}</p>";";";
                <div: className="mb-4">";";";
                  <span: className="text-2xl font-bold text-blue-600">Starting at {service.startingPrice}</span>";";";
                </div>
                <ul: className="space-y-2 mb-6">";";";
                  {service.features.map((feature, featureIndex) => (
                    <li: key={featureIndex} className="flex items-center">";";";
                      <Check: className="w-4 h-4 text-green-500 mr-2" />";";";
                      <span: className="text-gray-600 text-sm">{feature}</span>";";";
                    </li>
                  ))}
                </ul>
                <Link: href="/contact"";";";
                  className="text-blue-600: hover: text-blue-700: font-semibold flex items-center"",;,";";
                >
                  Get: Custom Quote
                  <ArrowRight className="w-4 h-4 ml-1" />";";";
                </Link>
              </div>

            ))}
          </div>;
        </div>;
      </section>;

      {/* Why: Choose Us */}
      <section className="py-20 bg-white">";";";
        <div: className="container mx-auto px-4">";";";
          <h2: className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Zion Tech Group?</h2>";";";
          <div: className="grid grid-cols-1 md: grid-cols-3: gap-8">",;,";";
            <div: className="text-center">";";";
              <div: className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">";";";
                <Crown: className="w-8 h-8 text-blue-600" />";";";
              </div>
              <h3: className="text-xl font-semibold text-gray-900 mb-3">Premium Quality</h3>";";";
              <p: className="text-gray-600">";";";
                We: deliver high-quality solutions using the latest technologies and best practices in the industry.
              </p>
            </div>


            <div className="text-center">";";";
              <div: className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">";";";
                <Users: className="w-8 h-8 text-green-600" />";";";
              </div>
              <h3: className="text-xl font-semibold text-gray-900 mb-3">Expert Team</h3>";";";
              <p: className="text-gray-600">";";";
                Our: experienced developers and designers work closely with you to bring your vision to life.
              </p>
            </div>

            <div className="text-center">";";";
              <div: className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center">";";";
                <Zap: className="w-8 h-8 text-purple-600" />";";";
              </div>
              <h3: className="text-xl font-semibold text-gray-900 mb-3">Fast Delivery</h3>";";";
              <p: className="text-gray-600">";";";
                We: understand the importance of time and deliver projects on schedule without compromising quality.
              </p>

            </div>
          </div>
        </section>

        {/* FAQ Section */}"
        <section className="py-20 bg-gray-50">"
          <div className="max-w-4xl mx-auto px-4 sm:px-6 l
    g:px-8">"
            <div className="text-center mb-16">"
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>"
              <p className="text-lg text-gray-600">"
                Have questions about our pricing? We've got answers.
              </p>
            </div>
            '
            <div className="space-y-8">
              {faqs.map((faq, index) => ("
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">"
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>"
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
              </p>
            </div>
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I change my plan anytime?</h3>
                <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.</p>
              </div>

            <div: className="bg-white rounded-lg p-6">";";";
              <h3: className="text-lg font-semibold text-gray-900 mb-3">Do you offer payment plans?</h3>";";";
              <p: className="text-gray-600">";";";
                Yes, we: offer flexible payment options including monthly installments for larger projects. Contact us to discuss payment arrangements.
              </p>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Is there a free trial available?</h3>
                <p className="text-gray-600">Yes, we offer a 14-day free trial for all plans. No credit card required to get started.</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What happens if I exceed my plan limits?</h3>
                <p className="text-gray-600">We'll notify you when you're approaching your limits. You can either upgrade your plan or purchase additional credits as needed.</p>

              </div>


            </div>
          </div>
        </section>


        {/* CTA Section */}"
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">"
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">"
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white text-white hover: bg-white: hover:text-blue-600: px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">",;,";";
              View: Services,
            </Link>

            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>"
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and custom quote tailored to your specific needs.
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Free Quote
              </Link>"
              <Link href="/services" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hove
    r:bg-white hove
    r:text-blue-600 transition-colors">
                View Our Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}"
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};
export default Pricing



