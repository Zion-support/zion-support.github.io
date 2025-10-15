"use client;,;,;,;,
import {;
  Brain,;
  Zap,;
  CheckCircle,;
  Star,;
  BarChart3,;";
  TrendingUp,"
} from "lucide-react;";
import { Helmet } from "react-helmet-async;";
import { Link } from "react-router-dom;

export default function AIEcommerceOptimizerPro() {;
  const features = [
    {;";
      icon: <Brain className="w-6 h-6 text-cyan-400" />,;";,
      title: "AI-Powered Optimization",;,;";,
      description:"
        "Advanced machine learning algorithms analyze customer behavior and optimize your store automatically",
    },
    {;";,
      icon: <TrendingUp className="w-6 h-6 text-green-400" />,;";,
      title: "Conversion Rate Optimization",;,;";,
      description:"
        "Increase your conversion rates by up to 40% with intelligent product recommendations and layout optimization",
    },
    {;";,
      icon: <BarChart3 className="w-6 h-6 text-purple-400" />,;";,
      title: "Real-time Analytics",;,;";,
      description:"
        "Get detailed insights into customer behavior, sales patterns, and performance metrics",
    },
    {;";,
      icon: <Zap className="w-6 h-6 text-yellow-400" />,;";,
      title: "Automated A/B Testing",;,;";,
      description:"
        "Continuously test and optimize your store elements for maximum performance",
    },
  ];
;,;,;,;,
  const optimizationFeatures = [
    {;";
      category: "Product Optimization",;,;";,
      items: ["
        "Smart Product Recommendations","
        "Dynamic Pricing","
        "Inventory Management","
        "Product Search Optimization","
        "Cross-selling & Upselling","
        "Product Image Enhancement",
      ],
    },
    {;";,
      category: "Customer Experience",;,;";,
      items: ["
        "Personalized Shopping Experience","
        "Chatbot Integration","
        "Customer Journey Mapping","
        "Mobile Optimization","
        "Page Speed Optimization","
        "User Interface Enhancement",
      ],
    },
    {;";,
      category: "Marketing Automation",;,;";,
      items: ["
        "Email Campaign Optimization","
        "Social Media Integration","
        "Retargeting Campaigns","
        "SEO Enhancement","
        "Content Personalization","
        "Customer Segmentation",
      ],
    },
    {;";,
      category: "Analytics & Reporting",;,;";,
      items: ["
        "Sales Performance Tracking","
        "Customer Behavior Analysis","
        "Revenue Optimization","
        "ROI Measurement","
        "Predictive Analytics","
        "Custom Dashboards",
      ],
    },
  ];
;,;,;,;,
  const pricingPlans = [
    {;";
      name: "Starter",;";,
      price: "$99",;";,
      period: "/month",;";,
      description: "Perfect for small e-commerce stores",;,;";,
      features: ["
        "Up to 1,000 products","
        "Basic AI optimization","
        "Standard analytics","
        "Email support","
        "Mobile optimization","
        "Basic A/B testing",
      ],;,;,;,;,
      popular: false,
    },
    {;";,
      name: "Professional",;";,
      price: "$299",;";,
      period: "/month",;";,
      description: "Ideal for growing businesses",;,;";,
      features: ["
        "Up to 10,000 products","
        "Advanced AI features","
        "Real-time analytics","
        "Priority support","
        "Advanced A/B testing","
        "API access","
        "Custom integrations",
      ],;,;,;,;,
      popular: true,
    },
    {;";,
      name: "Enterprise",;";,
      price: "$799",;";,
      period: "/month",;";,
      description: "For large e-commerce operations",;,;";,
      features: ["
        "Unlimited products","
        "Custom AI training","
        "White-label solution","
        "Dedicated support","
        "Advanced analytics","
        "Custom development","
        "SLA guarantee",
      ],;,;,;,;,
      popular: false,
    },
  ];
;,;,;,;,
  const testimonials = [
    {;";
      name: "Maria Rodriguez",;";,
      company: "Fashion Store",;,;";,
      content:"
        "AI E-commerce Optimizer Pro increased our conversion rate by 35% and boosted revenue by 50% in just 3 months.",;,;,;,;,
      rating: 5,
    },
    {;";,
      name: "David Kim",;";,
      company: "Electronics Retailer",;,;";,
      content:"
        "The automated optimization features saved us hours of manual work while significantly improving our store performance.",;,;,;,;,
      rating: 5,
    },
    {;";,
      name: "Sarah Johnson",;";,
      company: "Home & Garden Store",;,;";,
      content:"
        "Our customers love the personalized shopping experience. Sales have increased dramatically since implementation.",;,;,;,;,
      rating: 5,
    },
  ];
;,;,;,;,
  return (
    <>
      <Helmet></Helmet><//Helmet><///Helmet><////Helmet>
        <title>AI E-commerce Optimizer Pro - Zion Tech Group</title><//title><///title><////title></////title>
        <meta;";
          name="description;";
          content="Transform your e-commerce business with advanced AI optimization solutions that boost sales, improve conversion rates, and maximize your online store performance."
        />
      </Helmet><//Helmet><///Helmet><////Helmet></////Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"></div>"
        {/* Hero Section */}"
        <div className="container mx-auto px-4 py-20">"
          <div className="text-center mb-16">"
            <h1 className="text-5xl font-bold text-white mb-6">;";
              AI E-commerce <span className="text-blue-600">Optimizer Pro</span><//span>"
            </h1>"
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>;
              Transform your e-commerce business with advanced AI optimization;
              solutions that boost sales, improve conversion rates, and maximize;";
              your online store performance."
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div><//div><///div><////div>
              <Link;";,
                to="/contact;";
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              ></Link"
>;,;,;,;,
                Get Started
              </Link><//Link><///Link><////Link></////Link>
              <Link;";
                to="/contact;";
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
              ></Link"
>;,;,;,;,
                Learn More
              </Link><//Link><///Link><////Link></////Link>
            </div><//div><///div><////div></////div>
          </div><//div><///div><////div></////div>

          {/* Features Section */}"
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"></div><//div><///div><////div>
            {features.map((feature, index) => (
              <div;,;,;,;,
                key={index};";
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
              >"
                <div className="flex justify-center mb-4">{feature.icon}</div>"
                <h3 className="text-xl font-semibold text-white mb-2"></h3><//h3>"
                  {feature.title}"
                </h3>"
                <p className="text-gray-300">{feature.description}</p><//p><///p><////p></////p>
              </div><//div><///div><////div></////div>
            ))}
          </div><//div><///div><////div></////div>

          {/* Optimization Features Section */}"
          <div className="mb-16">"
            <h2 className="text-3xl font-bold text-white text-center mb-12"></h2>;";
              Optimization Features"
            </h2>"
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"></div><//div><///div><////div>
              {optimizationFeatures.map((category, index) => (
                <div;,;,;,;,
                  key={index};";
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
                >"
                  <h3 className="text-xl font-semibold text-white mb-4"></h3><//h3>"
                    {category.category}"
                  </h3>"
                  <ul className="space-y-2"></ul><//ul><///ul><////ul>
                    {category.items.map((item, itemIndex) => (
                      <li;
                        key={itemIndex};";
                        className="text-gray-300 flex items-center"
                      >"
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {item}
                      </li><//li><///li><////li></////li>
                    ))}
                  </ul><//ul><///ul><////ul></////ul>
                </div><//div><///div><////div></////div>
              ))}
            </div><//div><///div><////div></////div>
          </div><//div><///div><////div></////div>

          {/* Pricing Section */}"
          <div className="mb-16">"
            <h2 className="text-3xl font-bold text-white text-center mb-12"></h2>;";
              Pricing Plans"
            </h2>"
            <div className="grid md:grid-cols-3 gap-8"></div><//div><///div><////div>
              {pricingPlans.map((plan, index) => (
                <div;,;,;,;,
                  key={index};";
                  className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 relative ${plan.popular ? "ring-2 ring-cyan-500" : ""}`}"
                ></div"
>"
                  {plan.popular && ("
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">"
                      <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold"></span>;,;,;,;,
                        Most Popular"
                      </span><//span><///span>"
                    </div><//div>"
                  )}"
                  <div className="text-center mb-6">"
                    <h3 className="text-2xl font-bold text-white mb-2"></h3><//h3>"
                      {plan.name}"
                    </h3>"
                    <div className="text-4xl font-bold text-cyan-400 mb-2"></div>"
                      {plan.price}"
                      <span className="text-lg text-gray-300"></span><//span><///span>"
                        {plan.period}"
                      </span><//span>"
                    </div>"
                    <p className="text-gray-300">{plan.description}</p><//p>"
                  </div>"
                  <ul className="space-y-3 mb-8"></ul><//ul><///ul><////ul>
                    {plan.features.map((feature, featureIndex) => (
                      <li;
                        key={featureIndex};";
                        className="text-gray-300 flex items-center"
                      >"
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li><//li><///li><////li></////li>
                    ))}
                  </ul><//ul><///ul><////ul></////ul>
                  <Link;";
                    to="/contact;
                    className={`w-full block text-center py-3 rounded-lg font-semibold transition-all duration-300 ${;";
                      plan.popular"
                        ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600"
                        : "border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
                    }`}"
                  ></Link"
>;,;,;,;,
                    Get Started
                  </Link><//Link><///Link><////Link></////Link>
                </div><//div><///div><////div></////div>
              ))}
            </div><//div><///div><////div></////div>
          </div><//div><///div><////div></////div>

          {/* Testimonials Section */}"
          <div className="mb-16">"
            <h2 className="text-3xl font-bold text-white text-center mb-12"></h2>;";
              What Our Clients Say"
            </h2>"
            <div className="grid md:grid-cols-3 gap-8"></div><//div><///div><////div>
              {testimonials.map((testimonial, index) => (
                <div;,;,;,;,
                  key={index};";
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
                >"
                  <div className="flex items-center mb-4"></div><//div><///div><////div>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star;
                        key={i};";
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />"
                    ))}"
                  </div>"
                  <p className="text-gray-300 mb-4 italic">"
                    "{testimonial.content}"
                  </p><//p>"
                  <div>"
                    <p className="text-white font-semibold"></p><//p>"
                      {testimonial.name}"
                    </p>"
                    <p className="text-gray-400 text-sm"></p><//p><///p><////p>
                      {testimonial.company}
                    </p><//p><///p><////p></////p>
                  </div><//div><///div><////div></////div>
                </div><//div><///div><////div></////div>
              ))}
            </div><//div><///div><////div></////div>
          </div><//div><///div><////div></////div>

          {/* CTA Section */}"
          <div className="text-center">"
            <h2 className="text-3xl font-bold text-white mb-4"></h2>;";
              Ready to Optimize Your E-commerce Store?"
            </h2>"
            <p className="text-lg text-gray-300 mb-8"></p>;
              Contact us to learn more about our AI optimization solutions and;";
              how we can help your business grow."
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div><//div><///div><////div>
              <Link;";,
                to="/contact;";
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              ></Link"
>;,;,;,;,
                Contact Us
              </Link><//Link><///Link><////Link></////Link>
              <Link;";
                to="/services;";
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
              ></Link"
>;
                View All Services
              </Link><//Link><///Link><////Link></////Link>
            </div><//div><///div><////div></////div>
          </div><//div><///div><////div></////div>
        </div><//div><///div><////div></////div>
      </div><//div><///div><////div></////div>
    </>
  );
}
