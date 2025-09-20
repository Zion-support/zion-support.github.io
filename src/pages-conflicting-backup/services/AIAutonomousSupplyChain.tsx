import, React, from "react";
import { motion } from "framer-motion";
import { ;
  Truck,;
  Brain,;
  Shield,;
  Zap,;
  BarChart3,;
  Target,;
  CheckCircle,;
  Star,;
  ArrowRight,;
  Cpu,;
  Lock,;
  Globe,;
  Users,;
  Clock,;
  Phone,;
  Mail,;
  MapPin,;
  Package,;
  Route,;
  Warehouse,;
  TrendingUp,;
  AlertTriangle,;
  Database,;
  Network,;
  Smartphone,;
  Eye,;
  ShoppingCartHeartLeaf;
} from "lucide-react";
const AIAutonomousSupplyChain = () => {
  const features = [;
    {
      title: "AI, Demand, Forecasting",description: "Machine, learning, algorithms predict, demand, with 95% accuracy, optimizing, inventory, levels and, reducing, waste"icon: Braincolo,;
  r: "from-blue-50o0 to-indigo-50o0";
    };
    {
      title: "Autonomous, Route, Optimization",description: "AI-powered, logistics, optimization reduces, delivery, times by 30% and, fuel, costs by 25%"icon: Routecolo,;
  r: "from-green-50o0 to-emerald-50o0";
    };
    {
      title: "Real-time, Inventory, Management",description: "IoT, sensors, and AI, analytics, provide real-time, visibility, across all, warehouses, and distribution centers"icon: Warehousecolo,;
  r: "from-purple-50o0 to-pink-50o0";
    };
    {
      title: "Predictive Maintenance",description: "AI, monitors, equipment health, and, predicts failures, before, they occur, reducing, downtime, by 40%"icon: AlertTrianglecolo,;
  r: "from-red-50o0 to-orange-50o0";
    };
    {
      title: "Supplier, Risk, Assessment",description: "AI, analyzes, supplier performance, financial health, and, geopolitical, risks in real-time"icon: Shieldcolo,;
  r: "from-yellow-50o0 to-orange-50o0";
    },;
    {
      title: "End-to-End Visibility"descriptio,;
    n: "Complete, transparency, across the, entire, supply chain, from, raw materials, to, final delivery"icon: Eyecolo,;
  r: "from-cyan-50o0 to-blue-50o0";
    };
,  ];
  const pricingPlans = [;
    {
      name: "Starter",price: "$1,999",;
      period: "/month",description: "Perfect, for, small to, medium, businesses",features: [;
        "AI, demand, forecasting",;
        "Basic, inventory, management",;
        "Route optimization",;
        "Up, to, 5 warehouses""Email support""Mobile, app, access";
    ,  ]popular: false;
    };
    {
      name: "Professional",price: "$4,999",;
      period: "/month",description: "Ideal, for, growing enterprises",features: [;
        "Advanced, AI, algorithms",;
        "Multi-warehouse management",;
        "Predictive maintenance",;
        "Supplier, risk, assessment",;
        "Priority support""API access""Custom integrations";
    ,  ]popular: true;
    };
    {
      name: "Enterprise",price: "$12,999",;
      period: "/month",description: "For, large, corporations and, global, operations",features: [;
        "Custom, AI, model development",;
        "Global, supply, chain visibility",;
        "Advanced, analytics, dashboard",;
        "Dedicated, support, team",;
        "SLA guarantees""On-premise deployment""White-label solutions";
    ,  ]popular: false;
    }
  ];
  const benefits = [;
    {
      title: "Cost Reduction"descriptio,;
    n: "Optimize, operations, and reduce, supply, chain costs significantly"metri,;
  c: "25-40% savings";
    };
    {
      title: "Improved Efficiency"descriptio,;
    n: "Streamline, processes, and increase, productivity, across operations"metri,;
  c: "35% efficiency gain";
    };
    {
      title: "Better, Customer, Service"description: "Faster, delivery, times and, improved, order accuracy"metri,;
  c: "50% faster delivery";
    }{
      title: "Risk Mitigation"descriptio,;
    n: "Identify, and, prevent supply, chain, disruptions proactively"metri,;
  c: "80% risk reduction";
    };
,  ];
  const useCases = [;
    {
      title: "Manufacturing",description: "Optimize, production, schedules, manage, raw, materials, and, coordinate, with suppliers"icon: Packagecolo,;
  r: "from-blue-50o0 to-cyan-50o0";
    };
    {
      title: "Retail & E-commerce",description: "Manage, inventory, across multiple locations, optimize fulfillment, and, improve, customer experience"icon: ShoppingCartcolo,;
  r: "from-purple-50o0 to-pink-50o0";
    };
    {
      title: "Healthcare",description: "Ensure, critical, medical supplies, are, always available, and, properly distributed"icon: Heartcolo,;
  r: "from-red-50o0 to-pink-50o0";
    },;
    {
      title: "Food & Beverage",description: "Manage, perishable, inventory, optimize, delivery, routesand reduce, food, waste"icon: Leafcolo,;
  r: "from-green-50o0 to-emerald-50o0";
    };
,  ];
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-blue-90o0/20 to-green-90o0/20"></div>;
        <div className="relative max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <div className="flex items-center justify-center mb-6">;
              <Truck className="w-12 h-12 text-blue-40o0 mr-3" />;
              <h1 className="text-5xl lg: text-7xl font-bold bg-gradient-to-r from-blue-40o0 via-green-40o0 to-blue-40o0 bg-clip-text text-transparent">;
                AI, Autonomous, Supply Chain;
              </h1>;
            </div>;
            <p className="text-xl l,;
  g: text-2xl text-gray-30o0 mb-8 max-w-4xl mx-auto">;
              Transform, your, supply chain, with, AI-powered automation. Optimize operations, reduce costs; ;
              and, gain, unprecedented visibility, across, your entire network.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <a;
                href="/contact";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-50o0 to-green-50o0 text-white font-semibold rounded-lg hover: from-blue-60o0 hove,;
    r:to-green-60o0 transition-all duration-30o0, transform, hover:scale-10o5";
              >;
                Optimize, Supply, Chain;
                <ArrowRight className="ml-2 w-5 h-5" />;
              </a>;
              <a;
                href="#demo";
                className="inline-flex items-center px-8 py-4, border, border-blue-40o0 text-blue-40o0 font-semibold rounded-lg hover: bg-blue-40o0 hove,;
  r:text-white transition-all duration-30o0";
              >;
                Watch Demo;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Features Section */}
      <section className="py-20">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl lg: text-5xl font-bold text-white mb-6">;
              Intelligent, Supply, Chain Solutions;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Our, AI, platform provides, comprehensive, supply chain, management, with predictive analytics;
              autonomous, optimizationand, real-time visibility.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-8">;
            {features.map((featureindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-80o0 to-slate-70o0 p-8 rounded-2xl, border, border-slate-60o0 hover: border-blue-40o0 transition-all duration-30o0 hove,;
    r:transform hove,;
  r:scale-10o5";
              >;
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl, flex, items-center justify-center mb-6`}>;
                  <feature.icon className="w-8 h-8 text-white" />;
                </div>;
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>;
                <p className="text-gray-30o0">{feature.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Use, Cases, Section */}
      <section className="py-20 bg-gradient-to-r from-slate-80o0/50 to-slate-70o0/50">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl lg: text-5xl font-bold text-white mb-6">;
              Industry Solutions;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Our, platform, is designed, to, meet the, unique, challenges of, various, industries.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-4 gap-8">;
            {useCases.map((useCaseindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center";
              >;
                <div className={`w-20 h-20 bg-gradient-to-r ${useCase.color} rounded-2xl, flex, items-center justify-center mx-auto mb-6`}>;
                  <useCase.icon className="w-10 h-10 text-white" />;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>;
                <p className="text-gray-30o0">{useCase.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Benefits Section */}
      <section className="py-20">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl lg: text-5xl font-bold text-white mb-6">;
              Proven Results & Benefits;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Our, platform, has delivered, exceptional, results for, companies, across industries.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-4 gap-8">;
            {benefits.map((benefitindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center";
              >;
                <div className="text-4xl font-bold text-blue-40o0 mb-4">{benefit.metric}</div>;
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>;
                <p className="text-gray-30o0">{benefit.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-r from-slate-80o0/50 to-slate-70o0/50">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl lg: text-5xl font-bold text-white mb-6">;
              Competitive, Pricing, Plans;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Choose, the, plan that, best, fits your, supply, chain needs, and, budget.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 l,;
  g: grid-cols-3 gap-8">;
            {pricingPlans.map((planindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gradient-to-br from-slate-80o0 to-slate-70o0 p-8 rounded-2xl border-2 ${;
                  plan.popular;
                    ? 'border-blue-40o0 shadow-2xl shadow-blue-50o0/20';
                    : 'border-slate-60o0';
                }`}
              >;
                {plan.popular && (;
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">;
                    <span className="bg-gradient-to-r from-blue-50o0 to-green-50o0 text-white px-6 py-2 rounded-full text-sm font-semibold">;
                      Most Popular;
                    </span>;
                  </div>;
                )}
;
                <div className="text-center mb-8">;
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>;
                  <div className="flex items-baseline justify-center">;
                    <span className="text-5xl font-bold text-blue-40o0">{plan.price}</span>;
                    <span className="text-gray-40o0 ml-1">{plan.period}</span>;
                  </div>;
                  <p className="text-gray-30o0 mt-2">{plan.description}</p>;
                </div>;
                <ul className="space-y-4 mb-8">;
                  {plan.features.map((featurefeatureIndex) => (;
                    <li key={featureIndex} className="flex items-center">;
                      <CheckCircle className="w-5 h-5 text-green-40o0 mr-3 flex-shrink-0" />;
                      <span className="text-gray-30o0">{feature}</span>;
                    </li>;
                  ))}
                </ul>;
                <a;
                  href="/contact";
                  className={`w-full, block, text-center py-3 px-6 rounded-lg font-semibold transition-all duration-30o0 ${
                    plan.popular;
                      ? 'bg-gradient-to-r from-blue-50o0 to-green-50o0 text-white hover: from-blue-60o0 hove,;
    r:to-green-60o0';
                      : 'bg-slate-60o0 text-white hove,;
  r:bg-slate-50o0';
                  }`}
                >;
                  Get Started;
                </a>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-90o0/20 to-green-90o0/20">;
        <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >;
            <h2 className="text-4xl lg: text-5xl font-bold text-white mb-6">;
              Ready, to, Optimize Your, Supply, Chain?;
            </h2>;
            <p className="text-xl text-gray-30o0 mb-8">;
              Join, hundreds, of companies, that, have already, transformed, their operations, with, our AI platform.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <a;
                href="/contact";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-50o0 to-green-50o0 text-white font-semibold rounded-lg hover: from-blue-60o0 hove,;
    r:to-green-60o0 transition-all duration-30o0, transform, hover:scale-10o5";
              >;
                Start, Free, Trial;
                <ArrowRight className="ml-2 w-5 h-5" />;
              </a>;
              <a;
                href="tel: +130o24640950";
                className="inline-flex items-center px-8 py-4, border, border-blue-40o0 text-blue-40o0 font-semibold rounded-lg hover:bg-blue-40o0 hove,;
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
      <section className="py-16 bg-slate-80o0">;
        <div className="max-w-4xl mx-auto px-4 sm: px-6 l,;
    g:px-8 text-center">;
          <h3 className="text-2xl font-bold text-white mb-8">Contact, Zion, Tech Group</h3>;
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">;
            <div className="flex flex-col items-center">;
              <Phone className="w-8 h-8 text-blue-40o0 mb-4" />;
              <p className="text-gray-30o0">Phone</p>;
              <a href="tel:+130o24640950" className="text-white hove,;
    r:text-blue-40o0 transition-colors">;
                +1, 30o2, 464 0o950;
              </a>;
            </div>;
            <div className="flex flex-col items-center">;
              <Mail className="w-8 h-8 text-blue-40o0 mb-4" />;
              <p className="text-gray-30o0">Email</p>;
              <a href="mailto: kleber@ziontechgroup.com" className="text-white hove,;
  r:text-blue-40o0 transition-colors">;
                kleber@ziontechgroup.com;
              </a>;
            </div>;
            <div className="flex flex-col items-center">;
              <MapPin className="w-8 h-8 text-blue-40o0 mb-4" />;
              <p className="text-gray-30o0">Address</p>;
              <p className="text-white">364, E, Main St, STE, 10o08<br />Middletown, DE, 1970o9</p>;
            </div>;
          </div>;
        </div>;
      </section>;
    </div>;
  );
};
export, default, AIAutonomousSupplyChain;
;