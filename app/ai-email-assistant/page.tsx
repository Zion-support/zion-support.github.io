"use client;";,
import { Helmet } from "react-helmet-async;";
import { Link } from "react-router-dom;
import {;
  MessageSquare,;
  Brain,;
  Shield,;
  Zap,;
  Star,;
  Mail,;
  BarChart3,;
  Settings,;";
  Users,"
} from "lucide-react;

export default function AIEmailAssistant() {;
  const features = [
    {;";
      icon: <Mail className="w-6 h-6 text-cyan-400" />,;";,
      title: "Smart Classification",;,;";,
      description:"
        "Automatically categorize and prioritize emails based on content and sender.",
    },
    {;";,
      icon: <MessageSquare className="w-6 h-6 text-purple-400" />,;";,
      title: "Auto-Responses",;,;";,
      description:"
        "Generate intelligent responses using AI to handle common inquiries.",
    },
    {;";,
      icon: <Brain className="w-6 h-6 text-yellow-400" />,;";,
      title: "Sentiment Analysis",;,;";,
      description:"
        "Analyze email tone and sentiment to provide better customer service.",
    },
    {;";,
      icon: <Settings className="w-6 h-6 text-green-400" />,;";,
      title: "Workflow Automation",;,;";,
      description:"
        "Create automated workflows to streamline your email management.",
    },
  ];
;,;,;,;,
  const useCases = [
    {;";
      title: "Customer Support",;,;";,
      description:"
        "Handle customer inquiries efficiently with AI-powered responses and routing.",;";,
      icon: <Users className="w-8 h-8 text-blue-400" />,
    },
    {;";,
      title: "Sales Outreach",;,;";,
      description:"
        "Generate personalized sales emails and follow-up sequences automatically.",;";,
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
    },
    {;";,
      title: "Email Marketing",;,;";,
      description:"
        "Create compelling marketing campaigns with AI-generated content and optimization.",;";,
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
    },
    {;";,
      title: "Internal Communications",;,;";,
      description:"
        "Streamline internal email processes and improve team collaboration.",;";,
      icon: <Shield className="w-8 h-8 text-purple-400" />,
    },
  ];
;,;,;,;,
  const pricingPlans = [
    {;";
      name: "Starter",;";,
      price: "$29",;";,
      period: "/month",;";,
      description: "Perfect for small teams",;,;";,
      features: ["
        "Up to 1,000 emails/month","
        "Basic AI features","
        "Email classification","
        "Auto-responses","
        "Email support","
        "Basic analytics",
      ],;,;,;,;,
      popular: false,
    },
    {;";,
      name: "Professional",;";,
      price: "$79",;";,
      period: "/month",;";,
      description: "Ideal for growing businesses",;,;";,
      features: ["
        "Up to 10,000 emails/month","
        "Advanced AI features","
        "Sentiment analysis","
        "Workflow automation","
        "Priority support","
        "Advanced analytics","
        "API access",
      ],;,;,;,;,
      popular: true,
    },
    {;";,
      name: "Enterprise",;";,
      price: "$199",;";,
      period: "/month",;";,
      description: "For large organizations",;,;";,
      features: ["
        "Unlimited emails","
        "Custom AI training","
        "White-label solution","
        "Dedicated support","
        "Custom integrations","
        "Advanced security","
        "SLA guarantee",
      ],;,;,;,;,
      popular: false,
    },
  ];
;,;,;,;,
  const testimonials = [
    {;";
      name: "Jennifer Smith",;";,
      company: "Customer Service Manager",;,;";,
      content:"
        "AI Email Assistant reduced our response time by 60% and improved customer satisfaction significantly.",;,;,;,;,
      rating: 5,
    },
    {;";,
      name: "Michael Chen",;";,
      company: "Sales Director",;,;";,
      content:"
        "The automated email generation has increased our outreach efficiency by 3x while maintaining personalization.",;,;,;,;,
      rating: 5,
    },
    {;";,
      name: "Sarah Wilson",;";,
      company: "Marketing Manager",;,;";,
      content:"
        "Our email campaigns are now more effective thanks to AI-powered content optimization and targeting.",;,;,;,;,
      rating: 5,
    },
  ];
;,;,;,;,
  return (
    <>
      <Helmet></Helmet><//Helmet><///Helmet><////Helmet>
        <title>AI Email Assistant - Zion Tech Group</title><//title><///title><////title></////title>
        <meta;";
          name="description;";
          content="Transform your email management with AI-powered automation, smart classification, and intelligent responses."
        />
      </Helmet><//Helmet><///Helmet><////Helmet></////Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"></div>"
        {/* Hero Section */}"
        <div className="container mx-auto px-4 py-20">"
          <div className="text-center mb-16">"
            <h1 className="text-5xl font-bold text-white mb-6">;";
              AI Email <span className="text-blue-600">Assistant</span><//span>"
            </h1>"
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>;
              Transform your email management with AI-powered automation, smart;
              classification, and intelligent responses that boost productivity;";
              and improve communication."
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

          {/* Use Cases Section */}"
          <div className="mb-16">"
            <h2 className="text-3xl font-bold text-white text-center mb-12"></h2>;";
              Use Cases"
            </h2>"
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"></div><//div><///div><////div>
              {useCases.map((useCase, index) => (
                <div;,;,;,;,
                  key={index};";
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
                >"
                  <div className="flex justify-center mb-4">{useCase.icon}</div>"
                  <h3 className="text-xl font-semibold text-white mb-2"></h3><//h3>"
                    {useCase.title}"
                  </h3>"
                  <p className="text-gray-300">{useCase.description}</p><//p><///p><////p></////p>
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
                        <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
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
              Ready to Transform Your Email Management?"
            </h2>"
            <p className="text-lg text-gray-300 mb-8"></p>;
              Contact us to learn more about our AI email solutions and how we;";
              can help your business communicate more effectively."
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
