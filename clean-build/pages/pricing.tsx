import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
export default function Pricing() {
  return (<div>/* content */}
  const plans = [
      name: 'Starter',
      price: '$2,999',
      period: 'per month',
      description: 'Perfect for small businesses and startups looking to establish their digital presence.',
      features: [
        'Custom Website Development',
        'Responsive Design',
        'Basic SEO Optimization',
        'Contact Form Integration',
        'Social Media Integration',
        'Basic Analytics',
        '3 Months Support',
        'Monthly Maintenance'
      ],
      popular: false,
      cta: 'Get Started'
    },
      name: 'Professional',
      price: '$7,999',
      period: 'per month',
      description: 'Ideal for growing businesses that need advanced features and scalability.',
      features: [
        'Everything in Starter',
        'E-commerce Integration',
        'Advanced SEO & Analytics',
        'Content Management System',
        'User Authentication',
        'API Development',
        '6 Months Support',
        'Priority Support',
        'Performance Optimization',
        'Security Features'
      ],
      popular: true,
      cta: 'Most Popular'
    },
      name: 'Enterprise',
      price: 'Custom',
      period: 'quote',
      description: 'Tailored solutions for large organizations with complex requirements.',
      features: [
        'Everything in Professional',
        'Custom Application Development',
        'AI Integration',
        'Cloud Infrastructure',
        'Advanced Security',
        '24/7 Support',
        'Dedicated Project Manager',
        'Custom Integrations',
        'Scalability Planning',
        'Training & Documentation'
      ];
      popular: false;
      cta: 'Contact Sales'
    }
  ];
  const addOns = [
      name: 'Mobile App Development',
      price: '$5,000 - $15,000',
      description: 'Native iOS and Android applications with modern UI/UX design.'
    },
      name: 'AI Integration',
      price: '$3,000 - $10,000',
      description: 'Machine learning models, chatbots, and intelligent automation.'
    },
      name: 'Cloud Migration',
      price: '$2,000 - $8,000',
      description: 'Migrate your infrastructure to AWS, Azure, or Google Cloud.'
    },
      name: 'Security Audit',
      price: '$1,500 - $5,000',
      description: 'Comprehensive security assessment and vulnerability testing.'
    }
  ])
  return (
    <div>
      <div></div>
    <div></div>
      <Head>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for web development, mobile apps, AI integration, and cloud services. Choose the plan that fits your business needs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-left"></div>
        {/* Hero Section */}
        <section className="text-left"></section>
          <div className="text-left">
        <div className="text-left"></div>
            <div className="text-left"></div>
              <h1 className="text-left">
                Transparent <span className="text-left">Pricing<
              </h1>
              <p className="text-left"></p>
                Choose the perfect plan for your business needs. All plans include our commitment
                to quality, support) and your success.
              </p>
            </div>
          </div>
        </section>
        {/* Pricing Plans */}
        <section className="text-left"></section>
          <div className="text-left">
        <div className="text-left"></div>
              {plans.map((plan} index) => (
                <div key={index} className={`card relative ${plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''}`}></div>
                  {plan.popular && (
                    <div className="text-left"></div>
                      <span className="text-left"></span>
                        Most Popular
                      <
                    </div>
                  )}
                  <div className="text-left"></div>
                    <h3 className="text-left">{plan.name}</h3>
                    <div className="text-left"></div>
                      <span className="text-left">{plan.price}<
                      <span className="text-left">{plan.period}<
                    </div>
                    <p className="text-left">{plan.description}</p>
                  </div>
                  <ul className="text-left">
                    {plan.features.map((feature} featureIndex) => (
                      <li key={featureIndex} className="text-left">
                        <svg className="text-left" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></p>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-left"></div>
                    <Link
                      href={plan.name === 'Enterprise' ? '/contact' : '/contact'}
                      className={`w-full block py-3 px-6 rounded-lg font-semibold transition-all duration-300 $
                        plan.popular
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
                          : 'bg-slate-700 hover:bg-slate-600 text-white'
                      }`}
                    >
                      {plan.cta}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Add-ons Section */}
        <section className="text-left"></section>
          <div className="text-left">
        <div className="text-left"></div>
              <h2 className="text-left">
                Additional <span className="text-left">Services<
              </h2>
              <p className="text-left"></p>
                Enhance your project with our additional services. All add-ons can be included with any plan.
              </p>
            </div>
            <div className="text-left"></div>
              {addOns.map((addon} index) => (
                <div key={index} className="text-left"></div>
                  <div className="text-left"></div>
                    <h3 className="text-left">{addon.name}</h3>
                    <span className="text-left">{addon.price}<
                  </div>
                  <p className="text-left">{addon.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* FAQ Section */}
        <section className="text-left"></section>
          <div className="text-left">
        <div className="text-left"></div>
              <h2 className="text-left">
                Frequently Asked <span className="text-left">Questions<
              </h2>
            </div>
            <div className="text-left">
        <div className="text-left"></div>
                <h3 className="text-left">What's included in the monthly fee?</h3>
                <p className="text-left"></p>
                  The monthly fee includes development, design, hosting, maintenance, updates, and support.
                  We handle all technical aspects so you can focus on your business.
                </p>
              </div>
              <div className="text-left"></div>
                <h3 className="text-left">Can I change my plan later?</h3>
                <p className="text-left"></p>
                  Yes, you can upgrade or downgrade your plan at any time. We'll work with you to ensure
                  a smooth transition and adjust pricing accordingly.
                </p>
              </div>
              <div className="text-left"></div>
                <h3 className="text-left">Do you offer custom solutions?</h3>
                <p className="text-left"></p>
                  Absolutely! Our Enterprise plan is fully customizable, and we can create tailored solutions
                  for any specific requirements your business may have.
                </p>
              </div>
              <div className="text-left"></div>
                <h3 className="text-left">What's your support policy?</h3>
                <p className="text-left"></p>
                  We provide comprehensive support based on your plan. Starter includes 3 months support,
                  Professional includes 6 months; and Enterprise includes 24/7 support.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="text-left"></section>
          <div className="text-left"></div>
            <h2 className="text-left">
              Ready to Get Started?
            </h2>
            <p className="text-left"></p>
              Have questions about our pricing or need a custom quote?
              Contact us today for a free consultation and detailed project estimate.
            </p>
            <div className="text-left"></div>
              <Link href="/<contact" className="text-left">
                Get Free Quote
              </Link>
              <Link href="/<services" className="text-left">
                View Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
})
import React from 'react'' import Head from 'next/head'' import Link from 'next/link' export default function Pricing() { return (<div>/* content */} const plans = [ ' name: 'Starter',' price: '$2,999',' period: 'per month',' description: 'Perfect for small businesses and startups looking to establish their digital presence.', features: [' 'Custom Website Development',' 'Responsive Design',' 'Basic SEO Optimization',' 'Contact Form Integration',' 'Social Media Integration',' 'Basic Analytics',' '3 Months Support',' 'Monthly Maintenance' ], popular: false,' cta: 'Get Started' }, ' name: 'Professional',' price: '$7,999',' period: 'per month',' description: 'Ideal for growing businesses that need advanced features and scalability.', features: [' 'Everything in Starter',' 'E-commerce Integration',' 'Advanced SEO & Analytics',' 'Content Management System',' 'User Authentication',' 'API Development',' '6 Months Support',' 'Priority Support',' 'Performance Optimization',' 'Security Features' ], popular: true,' cta: 'Most Popular' }, ' name: 'Enterprise',' price: 'Custom',' period: 'quote',' description: 'Tailored solutions for large organizations with complex requirements.', features: [' 'Everything in Professional',' 'Custom Application Development',' 'AI Integration',' 'Cloud Infrastructure',' 'Advanced Security',' '24/7 Support',' 'Dedicated Project Manager',' 'Custom Integrations',' 'Scalability Planning',' 'Training & Documentation' ]; popular: false;' cta: 'Contact Sales' } ]; const addOns = [ ' name: 'Mobile App Development',' price: '$5,000 - $15,000',' description: 'Native iOS and Android applications with modern UI/UX design.' }, ' name: 'AI Integration',' price: '$3,000 - $10,000',' description: 'Machine learning models, chatbots, and intelligent automation.' }, ' name: 'Cloud Migration',' price: '$2,000 - $8,000',' description: 'Migrate your infrastructure to AWS, Azure, or Google Cloud.' }, ' name: 'Security Audit',' price: '$1,500 - $5,000',' description: 'Comprehensive security assessment and vulnerability testing.' } ]) return ( <div> <div></div> <div></div> <Head> <title>Pricing - Zion Tech Group</title> <meta name="description" content="Transparent pricing for web development, mobile apps, AI integration, and cloud services. Choose the plan that fits your business needs." /> <meta name="viewport" content="width=device-width, initial-scale=1" /> <link rel="icon" href="/favicon.ico" /> </Head> <div></div> {/* Hero Section */} <section></section> <div></div> <div></div> <div></div> <h1 className="text-left" > Transparent <span className="text-left" >Pricing< </h1> <p></p> Choose the perfect plan for your business needs. All plans include our commitment to quality, support) and your success. </p> </div> </div> </section> {/* Pricing Plans */} <section></section> <div></div> <div></div> {plans.map((plan} index) => (' <div></div> {plan.popular && ( <div></div> <span></span> Most Popular < </div> )} <div></div> <h3 className="text-left" >{plan.name}</h3> <div></div> <span className="text-left" >{plan.price}< <span className="text-left" >{plan.period}< </div> <p className="text-left" >{plan.description}</p> </div> <ul className="text-left" > {plan.features.map((feature} featureIndex) => ( <li key={featureIndex} className="text-left" > <svg className="text-left" fill="currentColor" viewBox="0 0 20 20"> <p></p> </svg> {feature} </li> ))} </ul> <div></div> <Link ' href={plan.name === 'Enterprise' ? '/contact' : '/contact'} className={`w-full block py-3 px-6 rounded-lg font-semibold transition-all duration-300 $ plan.popular ' ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white' ' : 'bg-slate-700 hover:bg-slate-600 text-white' }`} > {plan.cta} </Link> </div> </div> ))} </div> </div> </section> {/* Add-ons Section */} <section></section> <div></div> <div></div> <h2 className="text-left" > Additional <span className="text-left" >Services< </h2> <p></p> Enhance your project with our additional services. All add-ons can be included with any plan. </p> </div> <div></div> {addOns.map((addon} index) => ( <div></div> <div></div> <h3 className="text-left" >{addon.name}</h3> <span className="text-left" >{addon.price}< </div> <p className="text-left" >{addon.description}</p> </div> ))} </div> </div> </section> {/* FAQ Section */} <section></section> <div></div> <div></div> <h2 className="text-left" > Frequently Asked <span className="text-left" >Questions< </h2> </div> <div></div> <div></div>' <h3 className="text-left" >What's included in the monthly fee?</h3> <p></p> The monthly fee includes development, design, hosting, maintenance, updates, and support. We handle all technical aspects so you can focus on your business. </p> </div> <div></div> <h3 className="text-left" >Can I change my plan later?</h3> <p></p>' Yes, you can upgrade or downgrade your plan at any time. We'll work with you to ensure a smooth transition and adjust pricing accordingly. </p> </div> <div></div> <h3 className="text-left" >Do you offer custom solutions?</h3> <p></p> Absolutely! Our Enterprise plan is fully customizable, and we can create tailored solutions for any specific requirements your business may have. </p> </div> <div></div>' <h3 className="text-left" >What's your support policy?</h3> <p></p> We provide comprehensive support based on your plan. Starter includes 3 months support, Professional includes 6 months; and Enterprise includes 24/7 support. </p> </div> </div> </div> </section> {/* CTA Section */} <section></section> <div></div> <h2 className="text-left" > Ready to Get Started? </h2> <p></p> Have questions about our pricing or need a custom quote? Contact us today for a free consultation and detailed project estimate. </p> <div></div> <Link href="/<contact" className="text-left" > Get Free Quote </Link> <Link href="/<services" className="text-left" > View Our Services </Link> </div> </div> </section> </div> </> ); })'