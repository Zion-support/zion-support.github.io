

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom;
import { CurrencyDollarIcon,
  CheckIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon'
} from '@heroicons/react/24/outline;

const PricingPage: React.FC = () => {
  const plans = [
    {'
      name: 'Starter','
      price: '$2,999','
      period: '/month','
          description: 'Perfect for small businesses getting started with technology solutions'
  },
      features: ['
        'Basic AI Solutions','
        'Standard Security','
        'Cloud Infrastructure','
        'Email Support','
        'Monthly Reports','
        'Basic Analytics'
      ],
      popular: false;
    },
    {'
      name: 'Professional','
      price: '$7,999','
      period: '/month','
          description: 'Ideal for growing businesses that need comprehensive technology solutions'
  },
      features: ['
        'Advanced AI Solutions','
        'Enhanced Security','
        'Scalable Cloud Infrastructure','
        'Priority Support','
        'Weekly Reports','
        'Advanced Analytics','
        'Custom Integrations','
        '24/7 Monitoring'
      ],
      popular: true;
    },
    {'
      name: 'Enterprise','
      price: 'Custom','
      period: '','
          description: 'Tailored solutions for large organizations with complex requirements'
  },
      features: ['
        'Custom AI Solutions','
        'Enterprise Security','
        'Multi-cloud Infrastructure','
        'Dedicated Support','
        'Real-time Reports','
        'Custom Analytics','
        'Full Customization','
        '24/7 Dedicated Support','
        'On-site Consulting','
        'SLA Guarantees'
      ],
      popular: false;
=======
    }
>>>>>>> origin/main
  ];
  const addOns = [
    {'
      name: 'AI Development','
      price: '$1,500','
      period: '/month','
          description: 'Additional AI model development and training'
  }
    },
    {'
      name: 'Security Audit','
      price: '$2,500','
      period: '/audit','
          description: 'Comprehensive security assessment and recommendations'
  }
    },
    {'
      name: 'Cloud Migration','
      price: '$5,000','
      period: '/project','
          description: 'Complete cloud infrastructure migration service'
  }
    },
    {'
      name: 'Training & Support','
      price: '$800','
      period: '/hour','
          description: 'Custom training sessions for your team'
  }
    }
  ];

  return (
    
    <div>
      <Helmet />
        <title>Pricing - Zion Tech Group</title>
        <meta />
        <meta />
      </Helmet>
      {/* Hero Section */}
      <section>
        <div>
    <div />
  </div>
  <div>
    <div />
            <h1>Transparent Pricing
            </h1></h1>
            <p />
              Choose the Plan That Fits Your Business
            </p>
            <p />
              Our pricing is designed to scale with your business. Start with our Starter plan 
              and upgrade as your needs grow, or go straight to Enterprise for comprehensive solutions.
            </p>
          </div>
      </section>
      {/* Pricing Plans */}
      <section>
        <div>
    <div />
            <h2 />
              Our Pricing Plans
            </h2>
            <p />
              Flexible pricing options to meet your business needs
            </p>
          </div>
          
          <div />
            {plans.map((plan, index) => ('
              <div />
                {plan.popular && (
                  <div>
    <span />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div>
    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div>
    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
<<<<<<< HEAD
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul />
                  {plan.features.map((feature, featureIndex) => (
                    <li />
                      <CheckIcon />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link />'
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </Link>
              </div>
            ))}
          </div>
      </section>
      {/* Add-ons Section */}
      <section>
        <div>
    <div />
            <h2 />
              Additional Services
            </h2>
            <p />
              Enhance your plan with these additional services
            </p>
          </div>
          
          <div />
            {addOns.map((addOn, index) => (
              <div>
    <h3 className="text-xl font-bold text-white mb-2">{addOn.name}</h3>
                <div>
    <span className="text-2xl font-bold text-purple-400">{addOn.price}</span>
                  <span className="text-gray-400 ml-1">{addOn.period}</span>
                </div>
                <p>{addOn.description}</p>"
              </div>
            ))}
          </div>
      </section>
      {/* FAQ Section */}
      <section>
        <div>
    <div />
            <h2 />
              Frequently Asked Questions
            </h2>
            <p />
              Common questions about our pricing and services
            </p>
          </div>
          
          <div>
    <div />
              <h3 className="text-xl font-bold text-white mb-4">Can I change my plan anytime?</h3>'
              <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.</p>
            </div>
            
            <div>
    <h3 className="text-xl font-bold text-white mb-4">Do you offer custom solutions?</h3>
              <p className="text-gray-300">Absolutely! Our Enterprise plan includes fully customized solutions tailored to your specific business requirements.</p>
            </div>
            
            <div />'
              <h3 className="text-xl font-bold text-white mb-4">What's included in support?</h3>
              <p className="text-gray-300">All plans include email support. Professional and Enterprise plans include priority support with faster response times and additional communication channels.</p>
            </div>
            
            <div>
    <h3 className="text-xl font-bold text-white mb-4">Is there a setup fee?</h3>
              <p className="text-gray-300">No setup fees for Starter and Professional plans. Enterprise plans may include setup costs depending on the complexity of your requirements.</p>
            </div>
        </div>
      </div>
      </section>
      {/* CTA Section */}
      <section>
        <div>
    <h2 />
            Ready to Get Started?
          </h2>
          <p />
            Contact us to discuss your specific needs and get a personalized quote
          </p>
          
          <div>
    <Link />
              Contact Sales
            </Link>
            <Link />
              Schedule Demo
            </Link>
          </div>
      </section>
        {/* Contact Info */}
        <section>
        <div>
    <h3 />
              Need Help Choosing a Plan?
            </h3>
            <div>
    <div />
                <PhoneIcon />
                <span>+1-302-464-0950</span>
              </div>
              <div>
    <EnvelopeIcon />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div>
    <MapPinIcon />
                <span>Middletown, DE</span>
              </div>
        </div>
      </div>
      </section>
      </div>
    </>
  );
};

export default PricingPage;