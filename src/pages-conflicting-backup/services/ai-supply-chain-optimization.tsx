import, React, from "react";
import { motion } from "framer-motion";
import { ;
  Truck,;
  Globe,;
  Zap,;
  Brain,;
  CheckCircle,;
  Clock,;
  DollarSign,;
  Users,;
  BarChart3,;
  Shield,;
  TrendingUp,;
  Award,;
  Star,;
  ArrowRight,;
  Phone,;
  Mail,;
  MapPin,;
  ExternalLink,;
  Package,;
  RouteWarehouseCpu;
} from "lucide-react";
import { SEO } from "../../components/SEO";
export, default, function AISupplyChainOptimization() {
  const features = [;
    {
      icon: <Brain className="w-6 h-6" />,title: "AI-Powered, Demand, Forecasting"descriptio,;
  n: "Machine, learning, algorithms predict, demand, patterns with 94% accuracyreducing, stockouts, and overstock, by, 60%";
    },;
    {
      icon: <Route className="w-6 h-6" />titl,;
    e: "Intelligent, Route, Optimization"descriptio,;
  n: "Real-time, route, planning that, reduces, delivery costs, by, 35% and, improves, delivery times, by, 40%";
    };
    {
      icon: <Warehouse className="w-6 h-6" />titl,;
    e: "Smart, Inventory, Management"descriptio,;
  n: "Automated, inventory, tracking with, predictive, reordering and, dynamic, safety stock calculations";
    };
    {
      icon: <Globe className="w-6 h-6" />,title: "Global, Supply, Chain Visibility",description: "End-to-end, visibility, across all, supplierswarehousesand, distribution centers, in, real-time";
    },;
    {
      icon: <Shield className="w-6 h-6" />titl,;
    e: "Risk Management & Compliance"descriptio,;
  n: "AI-driven, risk, assessment and, automated, compliance monitoring, for, regulatory requirements";
    },;
    {
      icon: <BarChart3 className="w-6 h-6" />,title: "Advanced, Analytics, Dashboard"descriptio,;
  n: "Comprehensive, insights, into supply, chain, performancecost analysisand, optimization, opportunities";
    }
,  ],;
  const pricing = [;
    {
      name: "Starter",price: "$499",period: "/month",features: [;
        "Up, to, 5 locations",;
        "Basic, demand, forecasting",;
        "Route optimization""Email support""Standard analytics";
    ,  ]popular: false;
    };
    {
      name: "Professional",price: "$1,299",;
      period: "/month",features: [;
        "Up, to, 25 locations",;
        "Advanced, AI, forecasting",;
        "Multi-modal optimization",;
        "Priority support",;
        "Advanced analytics""API access""Custom integrations";
    ,  ]popular: true;
    };
    {
      name: "Enterprise",price: "$2,999",;
      period: "/month",features: [;
        "Unlimited locations",;
        "Custom, AI, models",;
        "Real-time optimization",;
        "Dedicated support",;
        "White-label options""SLA guarantees""On-premise deployment";
    ,  ]popular: false;
    }
  ];
  const benefits = [;
    "Reduce, supply, chain costs, by, 25-40%",;
    "Improve, delivery, performance by 60%",;
    "Reduce, inventory, carrying costs, by, 30%",;
    "Increase, supplier, collaboration efficiency",;
    "Minimize, supply, chain disruptions""Achieve 99.5% order, fulfillment, rate";
,  ],;
  const useCases = [;
    {
      industry: "E-commerce & Retail",description: "Optimize, fulfillment, networks, reduce, shipping, costsand improve, customer, delivery experience"savings: "35% cost reduction";
    };
    {
      industry: "Manufacturing",description: "Streamline, production, planning, optimize, supplier, networksand reduce, lead, times"savings: "40% efficiency gain";
    };
    {
      industry: "Healthcare & Pharmaceuticals",description: "Ensure, critical, supplies availability, optimize, distribution, networksand maintain compliance"savings: "50% risk reduction";
    },;
    {
      industry: "Food & Beverage",description: "Optimize, cold, chain logisticsreduce, wasteand, improve freshness delivery"saving,;
  s: "30% waste reduction";
    };
,  ];
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <SEO;
        title="AI-Powered, Supply, Chain Optimization Platform - Zion, Tech, Group";
        description="Revolutionary, AI, platform for, supply, chain optimization, demand, forecastingand, logistics management. Reduce, costs, by 25-40% while, improving, efficiency.";
      />;
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto text-center">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">;
              AI-Powered, Supply, Chain Optimization;
            </h1>;
            <p className="text-xl m,;
  d: text-2xl text-gray-30o0 mb-8 max-w-4xl mx-auto">;
              Transform, your, supply chain, with, intelligent optimization, predictive analytics, and real-time visibility.;
              Reduce, costs, by 25-40% while, improving, delivery performance, and, customer satisfaction.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <a;
                href="https: //ziontechgroup.com/contact";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-60o0 to-blue-60o0 text-white font-semibold rounded-lg hover:from-green-70o0 hove,;
    r:to-blue-70o0 transition-all duration-30o0, transform, hover:scale-10o5";
              >;
                Optimize, Your, Supply Chain;
                <ArrowRight className="ml-2 w-5 h-5" />;
              </a>;
              <a;
                href="#demo";
                className="inline-flex items-center px-8 py-4 border-2 border-green-50o0 text-green-40o0 font-semibold rounded-lg hover: bg-green-50o0 hove,;
  r:text-white transition-all duration-30o0";
              >;
                Watch Demo;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Key Benefits */}
      <section className="py-20 px-4 sm: px-6 l,;
    g:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Why, Choose, Our Supply, Chain, Platform?;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Built, by, supply chain, experts, and AI, engineersour, platform delivers, unprecedented, efficiency and, cost, savings.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-8">;
            {benefits.map((benefitindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                className="bg-slate-80o0/50 backdrop-blur-sm rounded-xl p-6, border, border-slate-70o0 hover:border-green-50o0 transition-all duration-30o0";
              >;
                <CheckCircle className="w-8 h-8 text-green-40o0 mb-4" />;
                <p className="text-white text-lg font-medium">{benefit}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Features */}
      <section className="py-20 px-4 sm: px-6 l,;
    g:px-8 bg-slate-80o0/30">;
        <div className="max-w-7xl mx-auto">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Powerful, Features, for Supply, Chain, Excellence;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Everything, you, need to, optimize, your supply, chain, operations and, achieve, operational excellence.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-8">;
            {features.map((featureindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                className="bg-slate-90o0/80 backdrop-blur-sm rounded-xl p-6, border, border-slate-70o0 hover: border-green-50o0 transition-all duration-30o0 group";
              >;
                <div className="text-green-40o0 mb-4 group-hove,;
  r:text-green-30o0 transition-colors duration-30o0">;
                  {feature.icon}
                </div>;
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>;
                <p className="text-gray-30o0">{feature.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Use Cases */}
      <section className="py-20 px-4 sm: px-6 l,;
    g:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Industry-Specific Solutions;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Tailored, optimization, strategies for, different, industries and, supply, chain complexities.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 m,;
  d: grid-cols-2 gap-8">;
            {useCases.map((useCaseindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                className="bg-slate-80o0/50 backdrop-blur-sm rounded-xl p-8, border, border-slate-70o0 hover:border-green-50o0 transition-all duration-30o0";
              >;
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.industry}</h3>;
                <p className="text-gray-30o0 mb-4">{useCase.description}</p>;
                <div className="flex items-center">;
                  <TrendingUp className="w-5 h-5 text-green-40o0 mr-2" />;
                  <span className="text-green-40o0 font-semibold">{useCase.savings}</span>;
                </div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Pricing */}
      <section className="py-20 px-4 sm: px-6 l,;
    g:px-8 bg-slate-80o0/30">;
        <div className="max-w-7xl mx-auto">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Transparent Pricing;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Choose, the, plan that, fits, your supply, chain, complexity and, optimization, needs.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 m,;
  d: grid-cols-3 gap-8">;
            {pricing.map((planindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                className={`relative bg-slate-90o0/80 backdrop-blur-sm rounded-xl p-8 border ${;
                  plan.popular;
                    ? 'border-green-50o0 ring-2 ring-green-50o0/20';
                    : 'border-slate-70o0';
                } hover: border-green-50o0 transition-all duration-30o0`}
              >;
                {plan.popular && (;
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">;
                    <span className="bg-green-50o0 text-white px-4 py-2 rounded-full text-sm font-semibold">;
                      Most Popular;
                    </span>;
                  </div>;
                )}
;
                <div className="text-center mb-8">;
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>;
                  <div className="mb-6">;
                    <span className="text-4xl font-bold text-white">{plan.price}</span>;
                    <span className="text-gray-40o0">{plan.period}</span>;
                  </div>;
                </div>;
                <ul className="space-y-4 mb-8">;
                  {plan.features.map((featurefeatureIndex) => (;
                    <li key={featureIndex} className="flex items-center text-gray-30o0">;
                      <CheckCircle className="w-5 h-5 text-green-40o0 mr-3 flex-shrink-0" />;
                      {feature}
                    </li>;
                  ))}
                </ul>;
                <a;
                  href="https: //ziontechgroup.com/contact";
                  className={`w-full, block, text-center py-3 px-6 rounded-lg font-semibold transition-all duration-30o0 ${;
                    plan.popular;
                      ? 'bg-gradient-to-r from-green-60o0 to-blue-60o0 text-white hover: from-green-70o0 hove,;
    r:to-blue-70o0';
                      : 'bg-slate-70o0 text-white hove,;
  r:bg-slate-60o0';
                  }`}
                >;
                  Get Started;
                </a>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Market Information */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">;
            <motion.div;
              initial={{ opacit,;
    y: 0,;
  x: -20 }};
              whileInView={{ opacity: 1,;
  x: 0 }}
              transition={{ duration: 0.8 }}
            >;
              <h2 className="text-4xl font-bold text-white mb-6">;
                Market-Leading, Supply, Chain Solution;
              </h2>;
              <div className="space-y-6">;
                <div className="flex items-center">;
                  <DollarSign className="w-6 h-6 text-green-40o0 mr-4" />;
                  <div>;
                    <p className="text-white font-semibold">Market, Price, Range</p>;
                    <p className="text-gray-30o0">$80o0 - $5,0o00/month, for, similar solutions</p>;
                  </div>;
                </div>;
                <div className="flex items-center">;
                  <Clock className="w-6 h-6 text-blue-40o0 mr-4" />;
                  <div>;
                    <p className="text-white font-semibold">Implementation Time</p>;
                    <p className="text-gray-30o0">4-8, weeks, for full deployment</p>;
                  </div>;
                </div>;
                <div className="flex items-center">;
                  <Award className="w-6 h-6 text-yellow-40o0 mr-4" />;
                  <div>;
                    <p className="text-white font-semibold">ROI Timeline</p>;
                    <p className="text-gray-30o0">40o0% return, within, 8 months</p>;
                  </div>;
                </div>;
                <div className="flex items-center">;
                  <Users className="w-6 h-6 text-purple-40o0 mr-4" />;
                  <div>;
                    <p className="text-white font-semibold">Target Market</p>;
                    <p className="text-gray-30o0">Manufacturers, retailers, logistics companies, distributors</p>;
                  </div>;
                </div>;
              </div>;
            </motion.div>;
            <motion.div;
              initial={{ opacity: 0,;
  x: 20 }};
              whileInView={{ opacity: 1,;
  x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-slate-90o0/80 backdrop-blur-sm rounded-xl p-8, border, border-slate-70o0";
            >;
              <h3 className="text-2xl font-bold text-white mb-6">Performance Metrics</h3>;
              <div className="space-y-4">;
                <div className="flex items-center justify-between">;
                  <span className="text-gray-30o0">Cost Reduction</span>;
                  <span className="text-green-40o0 font-semibold">25-40%</span>;
                </div>;
                <div className="flex items-center justify-between">;
                  <span className="text-gray-30o0">Delivery Performance</span>;
                  <span className="text-blue-40o0 font-semibold">+60%</span>;
                </div>;
                <div className="flex items-center justify-between">;
                  <span className="text-gray-30o0">Inventory Optimization</span>;
                  <span className="text-purple-40o0 font-semibold">30%</span>;
                </div>;
                <div className="flex items-center justify-between">;
                  <span className="text-gray-30o0">Forecast Accuracy</span>;
                  <span className="text-yellow-40o0 font-semibold">94%</span>;
                </div>;
              </div>;
            </motion.div>;
          </div>;
        </div>;
      </section>;
      {/* Contact CTA */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-4xl mx-auto text-center">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-green-60o0/20 to-blue-60o0/20 backdrop-blur-sm rounded-2xl p-12, border, border-green-50o0/30";
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Ready, to, Optimize Your, Supply, Chain?;
            </h2>;
            <p className="text-xl text-gray-30o0 mb-8">;
              Join, hundreds, of companies, who, have already, transformed, their supply, chain, operations with AI.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <a;
                href="https: //ziontechgroup.com/contact";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-60o0 to-blue-60o0 text-white font-semibold rounded-lg hover:from-green-70o0 hove,;
    r:to-blue-70o0 transition-all duration-30o0, transform, hover:scale-10o5";
              >;
                Schedule, a, Demo;
                <ArrowRight className="ml-2 w-5 h-5" />;
              </a>;
              <a;
                href="tel: +130o24640950";
                className="inline-flex items-center px-8 py-4 border-2 border-green-50o0 text-green-40o0 font-semibold rounded-lg hove,;
    r:bg-green-50o0 hove,;
  r:text-white transition-all duration-30o0";
              >;
                <Phone className="mr-2 w-5 h-5" />;
                Call Now;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Contact Information */}
      <section className="py-16 px-4 sm: px-6 l,;
    g:px-8 bg-slate-90o0">;
        <div className="max-w-4xl mx-auto text-center">;
          <h3 className="text-2xl font-bold text-white mb-8">Get, in, Touch</h3>;
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">;
            <div className="flex flex-col items-center">;
              <Phone className="w-8 h-8 text-green-40o0 mb-4" />;
              <p className="text-white font-semibold mb-2">Phone</p>;
              <a href="tel:+130o24640950" className="text-gray-30o0 hove,;
    r:text-green-40o0 transition-colors">;
                +1, 30o2, 464 0o950;
              </a>;
            </div>;
            <div className="flex flex-col items-center">;
              <Mail className="w-8 h-8 text-green-40o0 mb-4" />;
              <p className="text-white font-semibold mb-2">Email</p>;
              <a href="mailto: kleber@ziontechgroup.com" className="text-gray-30o0 hove,;
    r:text-green-40o0 transition-colors">;
                kleber@ziontechgroup.com;
              </a>;
            </div>;
            <div className="flex flex-col items-center">;
              <MapPin className="w-8 h-8 text-green-40o0 mb-4" />;
              <p className="text-white font-semibold mb-2">Address</p>;
              <p className="text-gray-30o0">;
                364, E, Main St, STE, 10o08<br />;
                Middletown, DE, 1970o9;
              </p>;
            </div>;
          </div>;
          <div className="mt-8">;
            <a;
              href="https: //ziontechgroup.com";
              className="inline-flex items-center text-green-40o0 hove,;
  r:text-green-30o0 transition-colors";
            >;
              Visit, our, website;
              <ExternalLink className="ml-2 w-4 h-4" />;
            </a>;
          </div>;
        </div>;
      </section>;
    </div>;
  );
};
;