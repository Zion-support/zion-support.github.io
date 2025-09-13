import React from "react";
import Head from "next/head";
import Link from "next/link";
import {};
} from "lucide-react";

export default function AICustomerInsightsPlatform() {};
  return null;
}
},;
    {};
},;
    {};
}
  ];

  const useCases = [;
    {};
},;
    {};
},;
    {};
}
  ];

  const industries = [;
    { name: "E-commerce", customers: "500+", growth: "+25%" },;
    { name: "SaaS", customers: "300+", growth: "+40%" },;
    { name: "Retail", customers: "200+", growth: "+30%" },;
    { name: "Healthcare", customers: "150+", growth: "+35%" },;
    { name: "Financial Services", customers: "100+", growth: "+45%" },;
    { name: "Education", customers: "80+", growth: "+20%" }
  ];

  return (;
    <>;
      <Head>;
        <title>AI Customer Insights Platform - Zion Tech Group</title>;
        <meta name="description" content="Advanced AI-powered customer analytics platform that predicts behavior, prevents churn, and maximizes customer lifetime value with 95% accuracy." />;
        <meta name="keywords" content="AI customer analytics, customer insights, churn prediction, personalization, customer behavior, CRM analytics" />;
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-customer-insights-platform" />;
      </Head>;

      <div className="min-h-screen bg-white">;
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 py-20 text-center">;
          <div className="max-w-6xl mx-auto px-6">;
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">;
              <BarChart3 className="w-4 h-4 mr-2" />;
              AI-Powered Customer Intelligence;
            </div>;
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">;
              AI Customer Insights Platform;
            </h1>;
            <p className="text-emerald-100 text-xl max-w-3xl mx-auto mb-8">;
              Transform customer data into actionable insights with AI-powered analytics that predict behavior, ;
              prevent churn, and maximize customer lifetime value.;
            </p>;
            <div className="flex flex-wrap justify-center gap-4">;
              <Link href="#pricing" className="px-8 py-4 bg-white text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors inline-flex items-center font-semibold">;
                View Pricing <ArrowRight className="w-4 h-4 ml-2" />;
              </Link>;
              <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors inline-flex items-center">;
                Schedule Demo <Phone className="w-4 h-4 ml-2" />;
              </Link>;
            </div>;
          </div>;
        </section>;

        {/* Features Section */}
        <section className="py-16 max-w-6xl mx-auto px-6">;
          <div className="text-center mb-12">;
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced AI Capabilities</h2>;
            <p className="text-gray-600 text-lg">Powered by machine learning and behavioral analytics</p>;
          </div>;

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">;
            {};
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">;
                <div className="flex items-center mb-3">;
                  <Brain className="w-6 h-6 text-emerald-600 mr-3" />;
                  <h3 className="font-semibold text-gray-900">{feature}</h3>;
                </div>;
                <p className="text-gray-600 text-sm">;
                  {feature === "Real-time Customer Analytics" && "Live customer behavior tracking and instant insights across all touchpoints"}
                  {feature === "Predictive Behavior Modeling" && "ML models predict future customer actions with 95% accuracy"}
                  {feature === "Sentiment Analysis Engine" && "Analyze customer feedback and communication sentiment in real-time"}
                  {feature === "Customer Journey Mapping" && "Visualize complete customer journeys and identify optimization opportunities"}
                  {feature === "Churn Prediction & Prevention" && "Early warning system with automated retention campaigns"}
                  {feature === "Personalization Engine" && "AI-driven personalization for products, content, and experiences"}
                  {feature === "Multi-channel Data Integration" && "Unified view from web, mobile, email, social, and offline channels"}
                  {feature === "Advanced Reporting Dashboard" && "Interactive dashboards with customizable KPIs and automated insights"}
                </p>;
              </div>;
            ))}
          </div>;
        </section>;

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">;
          <div className="max-w-6xl mx-auto px-6">;
            <div className="text-center mb-12">;
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Business Impact</h2>;
              <p className="text-gray-600 text-lg">Real results from our customer success stories</p>;
            </div>;

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;
              {};
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">;
                  <div className="flex items-center mb-3">;
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />;
                    <h3 className="font-semibold text-gray-900">{benefit}</h3>;
                  </div>;
                </div>;
              ))}
            </div>;
          </div>;
        </section>;

        {/* Industry Success */}
        <section className="py-16 max-w-6xl mx-auto px-6">;
          <div className="text-center mb-12">;
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>;
            <p className="text-gray-600 text-lg">Serving customers across multiple industries</p>;
          </div>;

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">;
            {};
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 text-center">;
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{industry.name}</h3>;
                <div className="text-2xl font-bold text-emerald-600 mb-1">{industry.customers}</div>;
                <div className="text-sm text-gray-600">Active Customers</div>;
                <div className="text-sm text-green-600 font-semibold mt-2">{industry.growth} Growth</div>;
              </div>;
            ))}
          </div>;
        </section>;

        {/* Use Cases Section */}
        <section className="py-16 bg-gray-50">;
          <div className="max-w-6xl mx-auto px-6">;
            <div className="text-center mb-12">;
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Perfect For</h2>;
              <p className="text-gray-600 text-lg">Ideal solutions for different business scenarios</p>;
            </div>;

            <div className="grid md:grid-cols-3 gap-8">;
              {};
                <div key={index} className="text-center">;
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;
                    <useCase.icon className="w-8 h-8 text-emerald-600" />;
                  </div>;
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>;
                  <p className="text-gray-600">{useCase.description}</p>;
                </div>;
              ))}
            </div>;
          </div>;
        </section>;

        {/* Pricing Section */}
        <section id="pricing" className="py-16 bg-white">;
          <div className="max-w-6xl mx-auto px-6">;
            <div className="text-center mb-12">;
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Flexible Pricing Plans</h2>;
              <p className="text-gray-600 text-lg">Scale with your business needs</p>;
            </div>;

            <div className="grid md:grid-cols-3 gap-8">;
              {};
                <div key={index} className={`bg-white rounded-xl p-8 shadow-lg border ${tier.name === 'Professional' ? 'ring-2 ring-emerald-500 relative' : ''}`}>;
                  {};
                  )}
                  <div className="text-center mb-6">;
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>;
                    <div className="text-4xl font-bold text-emerald-600 mb-2">{tier.price}</div>;
                    <p className="text-gray-600">per month</p>;
                  </div>;
                  <ul className="space-y-3 mb-8">;
                    {};
                      <li key={detailIndex} className="flex items-start">;
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />;
                        <span className="text-gray-700">{detail}</span>;
                      </li>;
                    ))}
                  </ul>;
                  <Link href="/contact" className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors inline-flex items-center justify-center font-semibold">;
                    Get Started <ArrowRight className="w-4 h-4 ml-2" />;
                  </Link>;
                </div>;
              ))}
            </div>;
          </div>;
        </section>;

        {/* Contact Section */}
        <section className="py-16 bg-emerald-600 text-white">;
          <div className="max-w-4xl mx-auto px-6 text-center">;
            <h2 className="text-3xl font-bold mb-4">Ready to Unlock Customer Insights?</h2>;
            <p className="text-emerald-100 text-lg mb-8">;
              Join industry leaders using AI to understand and grow their customer base.;
            </p>;
            <div className="flex flex-wrap justify-center gap-6 mb-8">;
              <div className="flex items-center">;
                <Phone className="w-5 h-5 mr-2" />;
                <span>+1 302 464 0950</span>;
              </div>;
              <div className="flex items-center">;
                <Mail className="w-5 h-5 mr-2" />;
                <span>kleber@ziontechgroup.com</span>;
              </div>;
              <div className="flex items-center">;
                <MapPin className="w-5 h-5 mr-2" />;
                <span>364 E Main St STE 1008, Middletown DE 19709</span>;
              </div>;
            </div>;
            <Link href="/contact" className="px-8 py-4 bg-white text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors inline-flex items-center font-semibold">;
              Contact Us Today <ArrowRight className="w-4 h-4 ml-2" />;
            </Link>;
          </div>;
        </section>;
      </div>;
    </>;
  )}