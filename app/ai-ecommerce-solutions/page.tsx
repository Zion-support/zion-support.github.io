import React from "react";"
import { Helmet } from "react-helmet-async";"
import { CheckCircle } from "lucide-react";

// Industry stats data
const industryStats = ["
  { metric: "150%", description: "Average sales increase" },"
  { metric: "80%", description: "Reduction in stockouts" },"
  { metric: "70%", description: "Support cost reduction" },"
  { metric: "95%", description: "Customer satisfaction rate" }
];

// E-commerce services data
const ecommerceServices = [
  {"
    icon: "🤖","
    title: "AI Product Recommendations","
    description: "Personalized product suggestions that increase conversion rates by up to 300%","
    price: "$2,500/month","
    marketPrice: "$5,000","
    category: "Personalization",
    features: ["
      "Real-time product recommendations","
      "Behavioral analysis","
      "A/B testing capabilities","
      "Cross-sell and upsell optimization"
    ],
    benefits: ["
      "Increase average order value by 35%","
      "Boost conversion rates by 200%"
    ]
  },
  {"
    icon: "📊","
    title: "Smart Inventory Management","
    description: "AI-powered inventory optimization to prevent stockouts and reduce waste","
    price: "$1,800/month","
    marketPrice: "$3,500","
    category: "Operations",
    features: ["
      "Demand forecasting","
      "Automated reorder points","
      "Seasonal trend analysis","
      "Supplier performance tracking"
    ],
    benefits: ["
      "Reduce inventory costs by 25%","
      "Eliminate 90% of stockouts"
    ]
  },
  {"
    icon: "💬","
    title: "AI Customer Service","
    description: "24/7 intelligent chatbots and automated support systems","
    price: "$1,200/month","
    marketPrice: "$2,800","
    category: "Support",
    features: ["
      "Natural language processing","
      "Multi-language support","
      "Escalation to human agents","
      "Performance analytics"
    ],
    benefits: ["
      "Handle 80% of inquiries automatically","
      "Reduce response time by 90%"
    ]
  }
];

// E-commerce features data
const ecommerceFeatures = [
  {"
    icon: "⚡","
    title: "Lightning Fast","
    description: "Optimized for speed with sub-second load times"
  },
  {"
    icon: "🔒","
    title: "Secure & Compliant","
    description: "Enterprise-grade security with PCI DSS compliance"
  },
  {"
    icon: "📱","
    title: "Mobile Optimized","
    description: "Responsive design that works perfectly on all devices"
  },
  {"
    icon: "🌐","
    title: "Global Ready","
    description: "Multi-currency and multi-language support"
  }
];

const PagePage = () => {
  return (
    <>
      <Helmet>
        <title>AI E-commerce Solutions - Zion Tech Group</title>"
        <meta name="description" content="Transform your e-commerce with AI-powered solutions. Increase sales, optimize inventory, and enhance customer experience with our advanced AI technology." />
      </Helmet>
      
      {/* Hero Section */}"
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">"
        <div className="container mx-auto px-4">"
          <div className="text-center">"
            <h1 className="text-4xl font-bold text-white mb-8">AI E-commerce Solutions</h1>"
            <p className="text-gray-300 text-lg">
              Transform your online store with cutting-edge AI technology that boosts sales, optimizes operations, and delights customers.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Stats */}"
      <section className="py-16 bg-white">"
        <div className="max-w-7xl mx-auto px-4 sm: "px-6 lg:px-8">"
          <div className="text-center mb-12">"
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven Results
            </h2>
            <p>Our AI e-commerce solutions deliver measurable improvements</p>
          </div>
          "
          <div className="min-h-screen bg-white"
    ",
    d:grid-cols-4 gap-8">
            {industryStats.map((stat, index) => ("
              <div key={index} className="text-center">"
                <div className="text-4xl font-bold text-purple-600 mb-2">{stat.metric}</div>"
                <div className="text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
      </section>

      {/* Services Grid */}"
      <section className="py-16 bg-gray-50">"
        <div className="max-w-7xl mx-auto px-4 sm: "px-6 lg:px-8">"
          <div className="text-center mb-12">"
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our E-commerce Solutions
            </h2>
            <p>Comprehensive AI-powered tools for every aspect of e-commerce</p>
            </div>
          "
          <div className="min-h-screen bg-white"
    ",
    g:grid-cols-3 gap-8">
            {ecommerceServices.map((service, index) => ("
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">"
                <div className="text-4xl mb-4">{service.icon}</div>"
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>"
                <p className="text-gray-600 mb-4">{service.description}</p>
                "
                <div className="mb-4">

                "
                <div className="mb-4">"
                  <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded">
                    {service.category}
                  </span>

                "
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => ("
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">"
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                "
                <div className="space-y-2 mb-6">"
                  <h4 className="font-semibold text-gray-900">Key Benefits:</h4>
                  {service.benefits.slice(0, 2).map((benefit, benefitIndex) => ("
                    <p key={benefitIndex} className="text-sm text-gray-600">✓ {benefit}</p>
                  ))}
                </div>
                
                <a "
                  href="/contact""
                  className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-flex items-center justify-center"
                >
                  Boost Sales Now
                </a>

            ))}
          </div>
      </section>

      {/* Features Section */}"
      <section className="py-16 bg-white">"
        <div className="max-w-7xl mx-auto px-4 sm: "px-6 lg:px-8">"
          <div className="text-center mb-12">"
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our E-commerce Solutions?
            </h2>
            <p>Advanced AI technology designed specifically for e-commerce success</p>
            </div>
          "
          <div className="min-h-screen bg-white"
    ",
    g:grid-cols-4 gap-8">
            {ecommerceFeatures.map((feature, index) => ("
              <div key={index} className="text-center">"
                <div className="text-4xl mb-4">{feature.icon}</div>"
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>"
                <p className="text-gray-600">{feature.description}</p>

            ))}
          </div>
      </section>

      {/* Success Stories */}"
      <section className="py-16 bg-gray-50">"
        <div className="max-w-7xl mx-auto px-4 sm: "px-6 lg:px-8">"
          <div className="text-center mb-12">"
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p>Real results from our e-commerce clients</p>
            </div>
          "
          <div className="min-h-screen bg-white"
    ",
    d:grid-cols-3 gap-8">"
            <div className="bg-white rounded-lg p-8 shadow-lg">"
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>"
              <p className="text-gray-600 mb-4 italic">&ldquo;Zion Tech Group&apos;s AI e-commerce platform increased our online sales by 150% in just 6 months. The personalized recommendations are incredible!&rdquo;</p>"
              <div className="font-semibold text-gray-900">Sarah Johnson</div>"
              <div className="text-sm text-gray-500">CEO, Fashion Forward</div>
            </div>
            "
            <div className="bg-white rounded-lg p-8 shadow-lg">"
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>"
              <p className="text-gray-600 mb-4 italic">&ldquo;The AI inventory management system reduced our stockouts by 80% and saved us $500K annually. Highly recommended!&rdquo;</p>"
              <div className="font-semibold text-gray-900">Michael Chen</div>"
              <div className="text-sm text-gray-500">Operations Director, TechGear</div>
            </div>
            "
            <div className="bg-white rounded-lg p-8 shadow-lg">"
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>"
              <p className="text-gray-600 mb-4 italic">&ldquo;Their AI customer service automation reduced our support costs by 70% while improving customer satisfaction. Amazing results!&rdquo;</p>"
              <div className="font-semibold text-gray-900">Emily Rodriguez</div>"
              <div className="text-sm text-gray-500">Customer Success Manager, HomeDecor Plus</div>
            </div>
      </section>

      {/* Contact Section */}"
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">"
        <div className="max-w-7xl mx-auto px-4 sm: "px-6 lg:px-8 text-center">"
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your E-commerce?
          </h2>"
          <p className="text-xl mb-8">Get a free e-commerce audit and discover how AI can boost your online sales</p>"
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a "
              href="tel:+13024640950""
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              📞 +1 302 464 0950
            </a>
            <a "
              href="mailto:kleber@ziontechgroup.com""
              className="min-h-screen bg-white"
    ",
    r:text-purple-600 transition-colors"
            >
              ✉️ kleber@ziontechgroup.com
            </a>

  );
</></div></div></div></div></div></div></div></div></div></div></div></section></Helmet></title></meta></section></div></div></h1></p></section></div></div></h2></div></div></div></div></section></div></div></h2></div></div></div></h3></div></div></span></ul></li></CheckCircle></div></h4></a></section></div></div></h2></div></div></div></h3></section></div></div></h2></div></div></div></div></div></div></div></div></div></div></div></div></div></section></div></h2></div></a></a></Helmet></title></meta></section></div></div></h1></p></section></div></div></h2></div></div></div></div></section></div></div></h2></div></div></div></h3></div></div></span></ul></li></CheckCircle></div></h4></a></section></div></div></h2></div></div></div></h3></section></div></div></h2></div></div></div></div></div></div></div></div></div></div></div></div></div></section></div></h2></div></a></a>};

export default PagePage;
"