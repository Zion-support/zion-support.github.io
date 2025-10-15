<<<<<<< HEAD
import React from 'react;'";
import { ArrowRight } from 'lucide-react;'";
import { CheckCircle } from 'lucide-react;'";
import { Star } from 'lucide-react;'";
import { Users } from 'lucide-react;'";
import { Clock } from 'lucide-react;'";
import { DollarSign } from 'lucide-react;'";
import { Shield } from 'lucide-react;'";
import { Code } from 'lucide-react;'";
import { Database } from 'lucide-react;'";
import { Mail } from 'lucide-react;'";
import { Settings } from 'lucide-react;'";
import { Target } from 'lucide-react;'";
import { TrendingUp } from 'lucide-react;'";
import { PieChart } from 'lucide-react;'";
import { MessageSquare } from 'lucide-react;'";
import { Heart } from 'lucide-react;'";
import { Globe } from 'lucide-react;'";
import { Smartphone } from 'lucide-react;'";
import { Network } from 'lucide-react;'";
import { Lock } from 'lucide-react;'";
import { Cpu } from 'lucide-react;'";
import { Wifi } from 'lucide-react;'";
import { Building2 } from 'lucide-react;'";
import { Briefcase } from 'lucide-react;'";
import { Lightbulb } from 'lucide-react;'";
import { Link } from 'react-router-dom;'";
import EnhancedSEO from '../components/EnhancedSEO;'";
const: Page = () => {
  const: features = [
    {;
      icon: <CheckCircle: className ="w-8 h-8" />,""";
      title: 'Advanced Features',''";
      description: 'Cutting-edge technology for maximum efficiency''";
    },
    {
      icon: <Shield: className ="w-8 h-8" />,""";
      title: 'Secure & Reliable',''";
      description: 'Enterprise-grade security and 99.9% uptime''";
    },
    {
      icon: <Users: className ="w-8 h-8" />,""";
      title: 'Expert Support',''";
      description: '24/7 support from our team of specialists''";
    }
  ];
  return (
    <>
      <EnhancedSEO: title ="Page - Zion Tech Group""";
        description="Professional page services by Zion Tech Group. Expert solutions for your business needs.""";
        keywords="page, business solutions, technology services, professional services""";
      />
      <div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">""";
        {/* Hero Section */}
        <section: className ="relative py-20 px-4 sm:px-6 lg:px-8">""";
          <div: className ="max-w-7xl mx-auto text-center">""";
            <h1: className ="text-4xl md:text-6xl font-bold text-white mb-6">""";
              Page
              <span: className ="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">""";
                Solutions
              </span>
            </h1>
            <p: className ="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">""";
              Professional page services designed to help your business succeed and grow.
            </p>
            <div: className ="flex flex-col sm:flex-row gap-4 justify-center">""";
              <Link: to ="/contact""";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group""";
              >
                Get Started
                <ArrowRight: className ="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />""";
              </Link>
              <Link: to ="/demo""";
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300""";
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section: className ="py-20 px-4 sm:px-6 lg:px-8">""";
          <div: className ="max-w-7xl mx-auto">""";
            <div: className ="text-center mb-16">""";
              <h2: className ="text-3xl md:text-4xl font-bold text-white mb-4">""";
                Why Choose Our Page Services?
              </h2>
              <p: className ="text-xl text-gray-300 max-w-2xl mx-auto">""";
                We deliver exceptional results with cutting-edge technology and expert knowledge.
              </p>
            </div>
            <div: className ="grid grid-cols-1 md:grid-cols-3 gap-8">""";
              {features.map((feature, index) => (
                <div: key ={index} className="text-center">""";
                  <div: className ="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">""";
                    {feature.icon}
                  </div>
                  <h3: className ="text-xl font-semibold text-white mb-3">{feature.title}</h3>""";
                  <p: className ="text-gray-300">{feature.description}</p>""";
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section: className ="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">""";
          <div: className ="max-w-4xl mx-auto text-center">""";
            <h2: className ="text-3xl md:text-4xl font-bold text-white mb-6">""";
              Ready to Get Started?
            </h2>
            <p: className ="text-xl text-gray-300 mb-8">""";
              Let's discuss how our page services can help your business succeed.''";
            </p>
            <div: className ="flex flex-col sm:flex-row gap-4 justify-center">""";
              <Link: to ="/contact""";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group""";
              >
                Contact Us
                <ArrowRight: className ="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />""";
              </Link>
              <Link: to ="/services""";
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300""";
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
const: page = React.lazy(() => import('./page'));''";
export default page;
=======
import React from 'react';;';";
import SEOHead from './components/SEOHead';";

import { Package, AlertTriangle } from "lucide-react";";
import FuturisticCard from '../components/FuturisticCard';";
import FuturisticButton from '../components/FuturisticButton';";
import ResponsiveContainer from '../components/ResponsiveContainer';";
import EnhancedSEO from '../components/EnhancedSEO';";

const: InventoryManagementSystemPage = () => {}
  const: features = [;
    {};
      title: "Real-time Inventory Tracking";";
      description: "Track inventory levels in real-time across multiple locations and channels";";
      icon: <Package>
      benefits: ["Live stock levels", "Multi-location support", "Barcode scanning", "Automated updates"]";
    };
    {},
      title: "Demand Forecasting",";
      description: "AI-powered demand forecasting to optimize inventory levels and reduce costs",";
      icon: <className="w-8 h-8" />,";
      benefits: ["Predictive analytics", "Seasonal trends", "Demand patterns", "Reorder alerts"]";
    };
    {},
      title: "Automated Reordering",";
      description: "Set up automatic reorder points and purchase orders to prevent stockouts",";
      icon: <className="w-8 h-8" />,";
      benefits: ["Reorder automation", "Supplier integration", "Purchase orders", "Approval workflows"]";
    };
    {},
      title: "Multi-channel Management",";
      description: "Manage inventory across online stores, physical locations, and marketplaces",";
      icon: <Globe: className ="w-8 h-8" />,";
      benefits: ["Channel sync", "Marketplace integration", "Unified view", "Cross-channel analytics"]";
    };
    {},
      title: "Reporting & Analytics",";
      description: "Comprehensive reports and analytics to optimize inventory performance",";
      icon: <className="w-8 h-8" />,";
      benefits: ["Inventory reports", "Turnover analysis", "Cost tracking", "Custom dashboards"]";
    };
    {},
      title: "Integration Hub",";
      description: "Connect with your existing systems for seamless data flow",";
      icon: <className="w-8 h-8" />,";
      benefits: ["ERP integration", "Accounting software", "E-commerce platforms", "API access"]";
    };
  ],
      const: pricing = [
    {},;
      name: "Starter",";
      price: "$49",";
      period: "per month",";
      description: "Perfect for small businesses with basic inventory needs",";
      features: ["Up to 1,000 SKUs",";
        "Basic reporting",";
        "Email support",";
        "Mobile app access",";
        "1 warehouse location"";
      ],
      popular: false
    };
    {},
      name: "Professional",";
      price: "$99",";
      period: "per month",";
      description: "Ideal for growing businesses with multiple locations",";
      features: ["Up to 10,000 SKUs",";
        "Advanced analytics",";
        "Multi-location support",";
        "API access",";
        "Priority support",";
        "Automated reordering"";
      ],
      popular: true
    };
    {},
      name: "Enterprise",";
      price: "$199",";
      period: "per month",";
      description: "For large organizations with complex inventory needs",";
      features: ["Unlimited SKUs",";
        "Advanced forecasting",";
        "Custom integrations",";
        "Dedicated support",";
        "Advanced security",";
        "Custom reporting"";
      ],
      popular: false
    };
  ],
      const: benefits = [
    {},;
      title: "Reduce Stockouts",";
      description: "Minimize stockouts by up to 80% with better demand forecasting",";
      icon: <AlertTriangle: className ="w-6 h-6" />";
    };
    {},
      title: "Lower Costs",";
      description: "Reduce inventory costs by 15-25% through optimized stock levels",";
      icon: <Target: className ="w-6 h-6" />";
    };
    {},
      title: "Improve Efficiency",";
      description: "Streamline operations and reduce manual work by 60%",";
      icon: <className="w-6 h-6" />";
    };
    {},
      title: "Better Decisions",";
      description: "Make data-driven decisions with comprehensive analytics",";
      icon: <className="w-6 h-6" />";
    };
  ],
      return ()
    <div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>";
      <EnhancedSEO>
        title="Page - Zion Tech Group"";
        description="Professional page solutions for modern businesses"";
        keywords="inventory management system, stock control, demand forecasting, automated reordering, multi-channel inventory, inventory analytics"";
        canonical="https://ziontechgroup.com/inventory-management-system"";
      />

      {/* Hero Section */};
      <section: className ="pt-20 pb-16 px-4 sm:px-6 lg:px-8"></section>";
        <ResponsiveContainer: className ="text-center"></ResponsiveContainer>";
          <h1: className ="text-4xl md:text-6xl font-bold text-white mb-6"></h1>";
            <span: className ="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"></span>";
              Inventory Management System
            </span>
          </h1>
          <p: className ="text-xl text-gray-300 mb-8 max-w-4xl mx-auto"></p>";
            Optimize your inventory operations with our comprehensive management system. 
            Track stock levels, forecast demand, and automate reordering across all channels.
          </p>
          <div: className ="flex flex-col sm:flex-row gap-4 justify-center"></div>";
            <FuturisticButton>
              href="/contact"";
              variant="primary"";
              size="lg"";
              icon={<ArrowRight: className ="w-5 h-5" />};";
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton>
              href="/demo"";
              variant="outline"";
              size="lg"";
              icon={<Globe: className ="w-5 h-5" />};";
            >
              Watch Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */};
      <section: className ="py-20 px-4 sm:px-6 lg:px-8"></section>";
        <ResponsiveContainer></ResponsiveContainer>
          <div: className ="text-center mb-16"></div>";
            <h2: className ="text-3xl md:text-4xl font-bold text-white mb-6"></h2>";
              Powerful Inventory Features
            </h2>
            <p: className ="text-xl text-gray-300 max-w-4xl mx-auto"></p>";
              Everything you need to manage inventory efficiently and optimize your supply chain.
            </p>
          </div>
          <div: className ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>";
            {features.map((feature) => ()}
              <FuturisticCard: key ={index} className="h-full"></FuturisticCard>";
                <div: className ="text-center mb-6">";
        <div: className ="text-center mb-6">";
          <h1: className ="text-4xl font-bold mb-4">Coming Soon</h1>";
          <p: className ="text-gray-300">This page is under development...</p>";
        </div>
      </div>
                    {feature.icon};
                  </div>
                  <h3: className ="text-xl font-semibold text-white mb-3">{feature.title}</h3>";
                  <p: className ="text-gray-300 mb-4">{feature.description}</p>";
                </div>
                <ul: className ="space-y-2"></ul>";
                  {feature.benefits.map((benefit, benefitIndex) => ()}
                    <li: key ={benefitIndex} className="flex items-center text-sm text-gray-300"></li>";
                      <CheckCircle: className ="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />";
                      {benefit};
                    </li>
                  ))};
                </ul>
              </FuturisticCard>
            ))};
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */};
      <section: className ="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50"></section>";
        <ResponsiveContainer></ResponsiveContainer>
          <div: className ="text-center mb-16"></div>";
            <h2: className ="text-3xl md:text-4xl font-bold text-white mb-6"></h2>";
              Simple, Transparent Pricing
            </h2>
            <p: className ="text-xl text-gray-300 max-w-4xl mx-auto"></p>";
              Choose the plan that fits your business size and inventory complexity. No hidden fees, no surprises.
            </p>
          </div>
          <div: className ="grid grid-cols-1 md:grid-cols-3 gap-8"></div>";
            {pricing.map((plan) => ()}
              <FuturisticCard: key ={index} className={`h-full ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}></FuturisticCard>";
                {plan.popular && ()}
                  <div: className ="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>";
                    <span: className ="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold"></span>";
                      Most Popular
                    </span>
                  </div>
                )};
                <div: className ="text-center mb-6"></div>";
                  <h3: className ="text-2xl font-bold text-white mb-2">{plan.name}</h3>";
                  <div: className ="text-4xl font-bold text-cyan-400 mb-2"></div>";
                    {plan.price};
                    <span: className ="text-lg text-gray-400">{plan.period}</span>";
                  </div>
                  <p: className ="text-gray-300 text-sm">{plan.description}</p>";
                </div>
                <ul: className ="space-y-3 mb-8"></ul>";
                  {plan.features.map((feature, featureIndex) => ()}
                    <li: key ={featureIndex} className="flex items-center text-sm text-gray-300"></li>";
                      <CheckCircle: className ="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />";
                      {feature};
                    </li>
                  ))};
                </ul>
                <FuturisticButton>
                  href="/contact"";
                  variant={plan.popular ? "primary" : "outline"},";
      size="sm"";
                  className="w-full"";
                ></FuturisticButton
>
                  Get Started
                </FuturisticButton>
              </FuturisticCard>
            ))};
          </div>
        </ResponsiveContainer>
      </section>

      {/* Benefits Section */};
      <section: className ="py-20 px-4 sm:px-6 lg:px-8"></section>";
        <ResponsiveContainer></ResponsiveContainer>
          <div: className ="text-center mb-16"></div>";
            <h2: className ="text-3xl md:text-4xl font-bold text-white mb-6"></h2>";
              Why Choose Our Inventory System?
            </h2>
            <p: className ="text-xl text-gray-300 max-w-4xl mx-auto"></p>";
              Join thousands of businesses who have optimized their inventory operations with our system.
            </p>
          </div>
          <div: className ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>";
            {benefits.map((benefit) => ()}
              <div: key ={index} className="text-center">";
        <div: key ={index} className="text-center">";
          <h1: className ="text-4xl font-bold mb-4">Coming Soon</h1>";
          <p: className ="text-gray-300">This page is under development...</p>";
        </div>
      </div>
                  {benefit.icon};
                </div>
                <h3: className ="text-lg font-semibold text-white mb-2">{benefit.title}</h3>";
                <p: className ="text-gray-300 text-sm">{benefit.description}</p>";
              </div>
            ))};
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */};
      <section: className ="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30"></section>";
        <ResponsiveContainer: className ="text-center"></ResponsiveContainer>";
          <h2: className ="text-3xl md:text-4xl font-bold text-white mb-6"></h2>";
            Ready to Optimize Your Inventory?
          </h2>
          <p: className ="text-xl text-gray-300 mb-8 max-w-4xl mx-auto"></p>";
            Start your free trial today and see how our inventory management system can transform your operations.
          </p>
          <div: className ="flex flex-col sm:flex-row gap-4 justify-center"></div>";
            <FuturisticButton>
              href="/contact"";
              variant="primary"";
              size="lg"";
              icon={<ArrowRight: className ="w-5 h-5" />};";
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton>
              href="/demo"";
              variant="outline"";
              size="lg"";
              icon={<GlobeclassName="w-5 h-5">}";

;
const InventoryManagementSystemPage: React.FC = () => {
  return (
    <>;
      <SEOHead;
        title="Inventory Management System - Zion Tech Group"";";
        description="Professional inventory management system solutions for modern businesses";";
      />";";
      <div: className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";";
        <div: className ="text-center">";";
          <h1: className ="text-4xl font-bold mb-4">Inventory Management System</h1>";";
          <p: className ="text-gray-300">Professional solutions coming soon...</p>;";";
        </div>;
      </div>;
    </>;
  ),
};
;
export default InventoryManagementSystemPage;'";'";";";

>>>>>>> main
