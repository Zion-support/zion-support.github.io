import { ArrowRight } from 'lucide-react';
import { Globe } from 'lucide-react';
import { BarChart3 } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Target } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Star } from 'lucide-react';
import { Sparkles } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Smartphone } from 'lucide-react';
import { TrendingUp } from 'lucide-react;

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AISupplyChainOptimizerPage() {
  
  const features = [
    {
      icon: <Truck className="w-6 h-6 text-green-400" />'
          title: 'Route Optimization','
          description: 'AI-powered route planning to minimize delivery time and fuel costs'
  }
    },
    {
      icon: <Package className="w-6 h-6 text-blue-400" />'
          title: 'Inventory Management','
          description: 'Smart inventory tracking with predictive restocking and demand forecasting'
  }
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-purple-400" />'
          title: 'Performance Analytics','
          description: 'Real-time insights and analytics to optimize supply chain performance'
  }
    },
    {
      icon: <Shield className="w-6 h-6 text-red-400" />'
          title: 'Risk Management','
          description: 'Identify and mitigate supply chain risks with AI-powered risk assessment'
  }
    }
  ];

  const pricingPlans = [
    {'
      name: 'Starter','
      price: '$199','
      period: '/month','
          description: 'Perfect for small to medium businesses'
  },
      features: ['
        'Up to 5 warehouses','
        'Basic route optimization','
        'Inventory tracking','
        'Email support','
        'Standard analytics'
      ]
    },
    {'
      name: 'Professional','
      price: '$499','
      period: '/month','
          description: 'Ideal for growing enterprises'
  },
      features: ['
        'Up to 20 warehouses','
        'Advanced route optimization','
        'Predictive analytics','
        'Priority support','
        'Custom integrations','
        'API access'
      ],
      popular: true
    },
    {'
      name: 'Enterprise','
      price: 'Custom','
      period: '','
          description: 'Tailored for large organizations'
  },
      features: ['
        'Unlimited warehouses','
        'AI-powered optimization','
        'Real-time monitoring','
        '24/7 support','
        'Custom development','
        'Dedicated account manager'
      ]
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-6 h-6 text-green-400" />'
          title: 'Cost Reduction','
          description: 'Reduce logistics costs by up to 30% through optimized routing and inventory management'
  }
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-400" />'
          title: 'Time Savings','
          description: 'Automate manual processes and save hours of planning time every week'
  }
    },
    {
      icon: <Globe className="w-6 h-6 text-purple-400" />'
          title: 'Global Scale','
          description: 'Manage complex supply chains across multiple countries and time zones'
  }
    }
  ];

  return (
    
    <div>
    <Helmet />
        <title>AI Supply Chain Optimizer - Zion Tech Group</title>
        <meta />
        <meta />
      </Helmet>

      <div />
        {/* Hero Section */}
        <section>
        <div>
    <ResponsiveContainer />
            <div>
    <h1>AI Supply Chain Optimizer
              </h1></h1>
              <p />
                Transform your supply chain with AI-powered optimization, predictive analytics, and intelligent automation.
              </p>
              <div>
    <FuturisticButton />
                  Get Started
                </FuturisticButton>
                <FuturisticButton />
                  View Demo
                </FuturisticButton>
              </div>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Features Section */}
        <section />
          <ResponsiveContainer />
            <div>
    <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
              <p />
                Our AI-powered supply chain optimizer provides comprehensive tools to streamline your logistics operations.
              </p>
            </div>
            <div />
              {features.map((feature, index) => (
                <FuturisticCard />
                  <div />
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Benefits Section */}
        <section />
          <ResponsiveContainer />
            <div>
    <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution?</h2>
              <p />
                Experience the benefits of AI-powered supply chain optimization.
              </p>
            </div>
            <div />
              {benefits.map((benefit, index) => (
                <FuturisticCard />
                  <div />
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Pricing Section */}
        <section />
          <ResponsiveContainer />
            <div>
    <h2 className="text-4xl font-bold text-white mb-4">Pricing Plans</h2>
              <p />
                Choose the perfect plan for your business needs.
              </p>
            </div>
            <div />
              {pricingPlans.map((plan, index) => ('
                <FuturisticCard />
                  {plan.popular && (
                    <div>
    <span />
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div>
    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div />
                      {plan.price}
                      <span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  <ul />
                    {plan.features.map((feature, featureIndex) => (
                      <li />
                        <CheckCircle />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <FuturisticButton />
                    Get Started
                  </FuturisticButton>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* CTA Section */}
        <section />
          <ResponsiveContainer />
            <div>
    <h2 className="text-4xl font-bold text-white mb-4">Ready to Optimize Your Supply Chain?</h2>
              <p />
                Join thousands of businesses that have transformed their supply chain operations with our AI-powered solution.
              </p>
              <div>
    <FuturisticButton />
                  Start Free Trial
                </FuturisticButton>
                <FuturisticButton />
                  Contact Sales
                </FuturisticButton>
              </div>
            </div>
          </ResponsiveContainer>
        </section>

      </div>
    </div>
  );
}

'