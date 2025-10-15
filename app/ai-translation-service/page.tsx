import { Helmet } from "react-helmet-async;";,
import { Link } from "react-router-dom;
import {;
  CheckCircle,;
  Globe,;
  Zap,;
  Shield,;
  Star,;";
  ArrowRight,"
} from "lucide-react;

const AITranslationServicePage = () => {;
  const features = [
    {;
      icon: Globe,;";,
      title: "100+ Languages",;";,
      description: "Support for over 100 languages with native-level accuracy",
    },
    {;,;,;,;,
      icon: Zap,;";,
      title: "Real-time Translation",;";,
      description: "Instant translation with context-aware AI technology",
    },
    {;,;,;,;,
      icon: Shield,;";,
      title: "Enterprise Security",;";,
      description: "Bank-level security for all your translation needs",
    },
  ];
;,;,;,;,
  const pricingPlans = [
    {;";
      name: "Starter",;";,
      price: "$99",;";,
      period: "/month",;";,
      description: "Perfect for small businesses",;,;";,
      features: ["
        "Up to 10,000 words","
        "50+ languages","
        "Basic support","
        "Standard quality",
      ],;,;,;,;,
      popular: false,
    },
    {;";,
      name: "Professional",;";,
      price: "$299",;";,
      period: "/month",;";,
      description: "Ideal for growing companies",;,;";,
      features: ["
        "Up to 100,000 words","
        "100+ languages","
        "Priority support","
        "Advanced quality checks","
        "Custom integrations",
      ],;,;,;,;,
      popular: true,
    },
    {;";,
      name: "Enterprise",;";,
      price: "Custom",;";,
      period: "",;";,
      description: "Tailored for large organizations",;,;";,
      features: ["
        "Unlimited words","
        "All languages","
        "Custom AI models","
        "Dedicated support","
        "White-label options","
        "Advanced security","
        "Custom integrations",
      ],;,;,;,;,
      popular: false,
    },
  ];
;,;,;,;,
  const testimonials = [
    {;";
      name: "Sarah Johnson",;";,
      role: "Marketing Director",;";,
      company: "Global Corp",;,;";,
      content:"
        "The AI translation service has revolutionized our international marketing efforts.",;,;,;,;,
      rating: 5,
    },
    {;";,
      name: "Michael Chen",;";,
      role: "Content Manager",;";,
      company: "Tech Solutions Inc.",;,;";,
      content:"
        "Amazing accuracy and speed. Our content is now available in 20+ languages.",;,;,;,;,
      rating: 5,
    },
  ];
;,;";,
  return ("
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div><//div><///div><////div>
      <Helmet></Helmet><//Helmet><///Helmet><////Helmet>
        <title>AI Translation Service | Zion Tech Group</title><//title><///title><////title></////title>
        <meta;";
          name="description;";
          content="Professional AI-powered translation services with 100+ language support and enterprise-grade security."
        />
      </Helmet><//Helmet><///Helmet><////Helmet></////Helmet>

      {/* Hero Section */}"
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">"
        <div className="max-w-7xl mx-auto text-center">"
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">"
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"></span>;,;,;,";,
              AI Translation"
            </span><//span>"
            <br />"
            <span className="text-white">Service</span><//span>"
          </h1>"
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>;
            Break language barriers with our advanced AI translation technology.;";
            Fast, accurate, and secure translation for over 100 languages."
          </p>"
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div><//div><///div><////div>
            <Link;";,
              to="/contact;";
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            ></Link"
>;,;";,
              Get Started"
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link><//Link><///Link><////Link></////Link>
            <Link;";
              to="/contact;";
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            ></Link"
>;,;,;,;,
              Learn More
            </Link><//Link><///Link><////Link></////Link>
          </div><//div><///div><////div></////div>
        </div><//div><///div><////div></////div>
      </section><//section><///section><////section></////section>

      {/* Features Section */}"
      <section className="py-16 px-4 sm:px-6 lg:px-8">"
        <div className="max-w-7xl mx-auto">"
          <div className="text-center mb-16">"
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>;,;,;";,
              Why Choose Our AI Translation Service?"
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>;
              Our AI-powered translation solutions deliver unmatched accuracy,;";
              speed, and security."
            </p><//p>"
          </div>"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div><//div><///div><////div>
            {features.map((feature, index) => (
              <div;,;,;,;,
                key={index};";
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >"
                <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4 mx-auto">"
                  <feature.icon className="h-6 w-6 text-white" />"
                </div>"
                <h3 className="text-xl font-semibold text-white mb-3 text-center"></h3><//h3>"
                  {feature.title}"
                </h3>"
                <p className="text-gray-300 text-center"></p><//p><///p><////p>
                  {feature.description}
                </p><//p><///p><////p></////p>
              </div><//div><///div><////div></////div>
            ))}
          </div><//div><///div><////div></////div>
        </div><//div><///div><////div></////div>
      </section><//section><///section><////section></////section>

      {/* Pricing Section */}"
      <section className="py-20 px-4">"
        <div className="max-w-6xl mx-auto">"
          <div className="text-center mb-16">"
            <h2 className="text-4xl font-bold text-white mb-4"></h2>;,;,;";,
              Flexible Pricing Plans"
            </h2>"
            <p className="text-gray-300 text-lg"></p>;";
              Choose the plan that fits your translation needs"
            </p><//p>"
          </div>"
          <div className="grid md:grid-cols-3 gap-8"></div><//div><///div><////div>
            {pricingPlans.map((plan, index) => (
              <div;,;,;,;,
                key={index};";
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 relative ${plan.popular ? "border-cyan-400" : ""}`}"
              ></div"
>"
                {plan.popular && ("
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">"
                    <span className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-semibold"></span>;,;,;,;,
                      Most Popular"
                    </span><//span><///span>"
                  </div><//div>"
                )}"
                <h3 className="text-2xl font-bold text-white mb-4"></h3><//h3>"
                  {plan.name}"
                </h3>"
                <div className="text-4xl font-bold text-cyan-400 mb-2"></div>"
                  {plan.price}"
                  <span className="text-lg text-gray-400">{plan.period}</span><//span>"
                </div>"
                <p className="text-gray-300 mb-6">{plan.description}</p>"
                <ul className="space-y-3 mb-8"></ul><//ul><///ul><////ul>
                  {plan.features.map((feature, featureIndex) => (
                    <li;
                      key={featureIndex};";
                      className="flex items-center text-sm text-gray-300"
                    >"
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li><//li><///li><////li></////li>
                  ))}
                </ul><//ul><///ul><////ul></////ul>
                <Link;";
                  to="/contact;
                  className={`w-full block text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${;";
                    plan.popular"
                      ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700"
                      : "border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
                  }`}"
                ></Link"
>;,;,;,;,
                  Get Started
                </Link><//Link><///Link><////Link></////Link>
              </div><//div><///div><////div></////div>
            ))}
          </div><//div><///div><////div></////div>
        </div><//div><///div><////div></////div>
      </section><//section><///section><////section></////section>

      {/* Testimonials Section */}"
      <section className="py-16 px-4 sm:px-6 lg:px-8">"
        <div className="max-w-7xl mx-auto">"
          <div className="text-center mb-16">"
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>;,;,;";,
              What Our Clients Say"
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>;
              Join hundreds of companies already using our AI translation;";
              services."
            </p><//p>"
          </div>"
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div><//div><///div><////div>
            {testimonials.map((testimonial, index) => (
              <div;,;,;,;,
                key={index};";
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >"
                <div className="flex mb-4"></div><//div><///div><////div>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star;
                      key={i};";
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />"
                  ))}"
                </div>"
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>"
                <div className="font-semibold text-white"></div><//div>"
                  {testimonial.name}"
                </div>"
                <div className="text-sm text-gray-400">{testimonial.role}</div>"
                <div className="text-sm text-gray-500"></div><//div><///div><////div>
                  {testimonial.company}
                </div><//div><///div><////div></////div>
              </div><//div><///div><////div></////div>
            ))}
          </div><//div><///div><////div></////div>
        </div><//div><///div><////div></////div>
      </section><//section><///section><////section></////section>

      {/* CTA Section */}"
      <section className="py-20 px-4">"
        <div className="max-w-4xl mx-auto text-center">"
          <h2 className="text-4xl font-bold text-white mb-4"></h2>;";
            Ready to Break Language Barriers?"
          </h2>"
          <p className="text-gray-300 text-lg mb-8"></p>;";
            Start translating your content with AI-powered precision today"
          </p>"
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div><//div><///div><////div>
            <Link;";,
              to="/contact;";
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            ></Link"
>;,;,;,;,
              Start Your Free Trial
            </Link><//Link><///Link><////Link></////Link>
            <Link;";
              to="/contact;";
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            ></Link"
>;
              Schedule Demo
            </Link><//Link><///Link><////Link></////Link>
          </div><//div><///div><////div></////div>
        </div><//div><///div><////div></////div>
      </section><//section><///section><////section></////section>
    </div><//div><///div><////div></////div>
  );
};

export default AITranslationServicePage;
