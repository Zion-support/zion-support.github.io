import React from 'react;
import { Helmet } from 'react-helmet-async;
import { Link } from 'react-router-dom;
import { 
  CheckCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  CurrencyDollarIcon,
  ClockIcon,
  ShieldCheckIcon,
  CogIcon;
} from '@heroicons/react/24/outline';
export default function PricingPage() {
  const pricingPlans = [{
      name: "Starter",
      description: "Perfect for small businesses getting started with AI and IT solutions",
      price: "$1,200",
      period: "/month",
      features: ["Basic AI features",
        "Email support",
        "Standard setup",
        "Monthly updates",
        "Basic analytics",
        "5 user accounts";
      ],
      color: "from-slate-600 to-slate-700",
      buttonColor: "from-slate-600 to-slate-700",
      popular: false;
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses that need advanced AI and IT capabilities",
      price: "$2,500",
      period: "/month",
      features: ["Advanced AI features",
        "Priority support",
        "Custom setup",
        "Weekly updates",
        "Advanced analytics",
        "25 user accounts",
        "API access",
        "Custom integrations";
      ],
      color: "from-purple-600 to-pink-600",
      buttonColor: "from-purple-600 to-pink-600",
      popular: true;
    },
    {
      name: "Enterprise",
      description: "Comprehensive solution for large organizations with complex needs",
      price: "Custom",
      period: "/month",
      features: ["Full AI capabilities",
        "24/7 dedicated support",
        "White-label solution",
        "Daily updates",
        "Custom analytics",
        "Unlimited users",
        "Full API access",
        "Custom integrations",
        "Dedicated account manager",
        "SLA guarantees";
      ],
      color: "from-blue-600 to-cyan-600",
      buttonColor: "from-blue-600 to-cyan-600",
      popular: false;
    }
  ];

  const microSaaSPricing = [{
      name: "AI Analytics Dashboard",
      price: "$299/month",
      setup: "$1,500",
      features: ["Real-time analytics", "Custom dashboards", "AI insights"];
    },
    {
      name: "AI Content Management",
      price: "$199/month",
      setup: "$800",
      features: ["AI content generation", "SEO optimization", "Multi-language"];
    },
    {
      name: "AI Customer Support Bot",
      price: "$149/month",
      setup: "$600",
      features: ["24/7 chatbot", "Sentiment analysis", "Multi-channel support"];
    },
    {
      name: "AI Project Management",
      price: "$249/month",
      setup: "$1,200",
      features: ["AI task optimization", "Resource allocation", "Deadline prediction"];
    },
    {
      name: "AI E-commerce Optimizer",
      price: "$399/month",
      setup: "$2,000",
      features: ["Product recommendations", "Dynamic pricing", "Inventory optimization"];
    },
    {
      name: "AI HR Management",
      price: "$179/month",
      setup: "$900",
      features: ["AI resume screening", "Employee analytics", "Performance tracking"];
    }
  ];

  return (
    <>;
      <Helmet>;
        <title>Pricing - Zion Tech Group</title>;
        <meta name="description" content="Transparent pricing for AI and IT solutions. Choose from our flexible plans designed for businesses of all sizes." />;
        <meta name="keywords" content="pricing, AI solutions pricing, IT services pricing, micro SaaS pricing, business solutions" />;
      </Helmet>;
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">;
        <div className="container mx-auto px-4">;
          <div className="max-w-4xl mx-auto text-center">;
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;
              Transparent Pricing;
            </h1>;
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">;
              Choose the perfect plan for your business needs;
            </p>;
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">;
              No hidden fees, no surprises. Our transparent pricing ensures you know exactly what you're paying for';
              and get maximum value from our AI and IT solutions.;
            </p>;
          </div>;
        </div>;
      </section>;
      {/* Main Pricing Plans */}
      <section className="py-20 bg-slate-900">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Choose Your Plan;
            </h2>;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Flexible pricing options designed to scale with your business;
            </p>;
          </div>;
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">;
            {pricingPlans.map((plan, _index) => (
              <div key={plan.name}>;
                className={`relative bg-gradient-to-br ${plan.color} p-8 rounded-xl border ${
                  plan.popular ? 'border-purple-500 scale-105' : 'border-slate-600'';
                } transition-all duration-300`}
              >;
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">;
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">;
                      Most Popular;
                    </span>;
                  </div>;
                )}
                
                <div className="text-center mb-8">;
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>;
                  <p className="text-gray-300 mb-6">{plan.description}</p>;
                  <div className="flex items-baseline justify-center">;
                    <span className="text-5xl font-bold text-white">{plan.price}</span>;
                    <span className="text-gray-300 ml-2">{plan.period}</span>;
                  </div>;
                </div>;
                <ul className="space-y-4 mb-8">;
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">;
                      <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />;
                      <span>{feature}</span>;
                    </li>;
                  ))}
                </ul>;
                <Link;
                  to="/contact";
                  className={`w-full bg-gradient-to-r ${plan.buttonColor} text-white px-6 py-3 rounded-lg font-semibold text-center hover:opacity-90 transition-all flex items-center justify-center gap-2`}
                >;
                  Get Started <ArrowRightIcon className="w-4 h-4" />;
                </Link>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Micro SaaS Pricing */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Micro SaaS Solutions;
            </h2>;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Individual micro SaaS solutions with transparent pricing;
            </p>;
          </div>;
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">;
            {microSaaSPricing.map((product, _index) => (
              <div key={product.name}>;
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300";
              >;
                <h3 className="text-xl font-bold text-white mb-4">{product.name}</h3>;
                <div className="mb-4">;
                  <div className="text-2xl font-bold text-green-400">{product.price}</div>;
                  <div className="text-sm text-gray-400">Setup: {product.setup}</div>;
                </div>;
                <ul className="space-y-2 mb-6">;
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">;
                      <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />;
                      <span>{feature}</span>;
                    </li>;
                  ))}
                </ul>;
                <Link;
                  to="/contact";
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg font-semibold text-center hover:from-purple-700 hover:to-pink-700 transition-all text-sm";
                >;
                  Learn More;
                </Link>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Why Our Pricing */}
      <section className="py-20 bg-slate-900">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Why Our Pricing Works;
            </h2>;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Transparent, flexible, and designed for your success;
            </p>;
          </div>;
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">;
            <div className="text-center">;
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">;
                <CurrencyDollarIcon className="w-10 h-10 text-white" />;
              </div>;
              <h3 className="text-2xl font-bold text-white mb-4">No Hidden Fees</h3>;
              <p className="text-gray-300">;
                What you see is what you pay. No surprise charges or hidden costs.;
              </p>;
            </div>;
            <div className="text-center">;
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">;
                <ClockIcon className="w-10 h-10 text-white" />;
              </div>;
              <h3 className="text-2xl font-bold text-white mb-4">Flexible Billing</h3>;
              <p className="text-gray-300">;
                Monthly or annual billing options with discounts for long-term commitments.;
              </p>;
            </div>;
            <div className="text-center">;
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">;
                <ShieldCheckIcon className="w-10 h-10 text-white" />;
              </div>;
              <h3 className="text-2xl font-bold text-white mb-4">Money-Back Guarantee</h3>;
              <p className="text-gray-300">;
                30-day money-back guarantee if you're not completely satisfied.';
              </p>;
            </div>;
            <div className="text-center">;
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">;
                <CogIcon className="w-10 h-10 text-white" />;
              </div>;
              <h3 className="text-2xl font-bold text-white mb-4">Easy Scaling</h3>;
              <p className="text-gray-300">;
                Upgrade or downgrade your plan anytime as your needs change.;
              </p>;
            </div>;
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">;
        <div className="container mx-auto px-4">;
          <div className="max-w-4xl mx-auto text-center">;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">;
              Ready to Get Started?;
            </h2>;
            <p className="text-xl text-gray-300 mb-12">;
              Contact us today for a free consultation and custom quote;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">;
              <Link;
                to="/contact";
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2";
              >;
                Get Free Quote;
                <ArrowRightIcon className="w-5 h-5" />;
              </Link>;
              <Link;
                to="/demo";
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2";
              >;
                Schedule Demo;
                <ArrowRightIcon className="w-5 h-5" />;
              </Link>;
            </div>;
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">;
              <div className="flex items-center gap-3">;
                <PhoneIcon className="w-6 h-6 text-purple-400" />;
                <span>+1-302-464-0950</span>;
              </div>;
              <div className="flex items-center gap-3">;
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />;
                <span>kleber@ziontechgroup.com</span>;
              </div>;
            </div>;
          </div>;
        </div>;
      </section>;
    </>;
  );
}