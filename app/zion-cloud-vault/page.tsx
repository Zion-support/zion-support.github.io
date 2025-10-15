import { ArrowRight, Cloud, Lock, Shield, Zap, Globe, CheckCircle, Star, Database } from "lucide-react;";,
import { Helmet } from "react-helmet-async;";
import { Link } from "react-router-dom;

export default function ZionCloudVault() {;
  const features = [
    {;";
      icon: <Cloud className="w-6 h-6" />,;";,
      title: "Secure Cloud Storage",;";,
      description: "Enterprise-grade cloud storage with 99.999999999% durability and 99.9% availability"
    },
    {;";,
      icon: <Lock className="w-6 h-6" />,;";,
      title: "End-to-End Encryption",;";,
      description: "Military-grade AES-256 encryption for data at rest and in transit"
    },
    {;";,
      icon: <Shield className="w-6 h-6" />,;";,
      title: "Advanced Security",;";,
      description: "Multi-factor authentication, zero-knowledge architecture, and SOC 2 compliance"
    },
    {;";,
      icon: <Zap className="w-6 h-6" />,;";,
      title: "Lightning Fast Sync",;";,
      description: "Real-time file synchronization across all your devices with intelligent caching"
    },
    {;";,
      icon: <Globe className="w-6 h-6" />,;";,
      title: "Global CDN",;";,
      description: "Worldwide content delivery network for fast access from anywhere"
    },
    {;";,
      icon: <Database className="w-6 h-6" />,;";,
      title: "Unlimited Storage",;";,
      description: "Scale from GB to PB with no storage limits and automatic scaling"
    }
  ];
;,;";,
  const storageFeatures = ["
    "File Versioning & History","
    "Collaborative Workspaces","
    "Advanced Search & Filtering","
    "Mobile & Desktop Apps","
    "API & SDK Access","
    "Custom Branding","
    "Audit Logs & Reporting","
    "Backup & Recovery","
    "Compliance Tools (GDPR, HIPAA)","
    "Team Management","
    "Share Links & Permissions","
    "Integration with 100+ Apps"
  ];

  const pricingPlans = [
    {;";
      name: "Personal",;";,
      price: "$9",;";,
      period: "/month",;";,
      description: "Perfect for individuals",;,;";,
      features: ["
        "1TB storage","
        "5 devices","
        "Basic encryption","
        "Email support","
        "Mobile apps","
        "File sharing"
      ],;,;,;,;,
      popular: false
    },
    {;";,
      name: "Business",;";,
      price: "$25",;";,
      period: "/month",;";,
      description: "Most popular for teams",;,;";,
      features: ["
        "5TB storage","
        "Unlimited devices","
        "Advanced encryption","
        "Priority support","
        "Team collaboration","
        "Admin dashboard","
        "API access"
      ],;,;,;,;,
      popular: true
    },
    {;";,
      name: "Enterprise",;";,
      price: "$99",;";,
      period: "/month",;";,
      description: "For large organizations",;,;";,
      features: ["
        "Unlimited storage","
        "Advanced security","
        "Custom integrations","
        "24/7 phone support","
        "White-label solution","
        "Compliance tools","
        "Dedicated account manager"
      ],;,;,;,;,
      popular: false
    }
  ];
;,;,;,;,
  const testimonials = [
    {;";
      name: "Jennifer Adams",;";,
      company: "Creative Agency",;";,
      role: "Creative Director",;";,
      content: "Zion Cloud Vault has revolutionized our file management. The collaboration features are incredible and our team productivity has increased by 60%.",;,;,;,;,
      rating: 5
    },
    {;";,
      name: "Robert Kim",;";,
      company: "Tech Startup",;";,
      role: "CTO",;";,
      content: "The security features give us peace of mind. We can safely store sensitive client data knowing it's protected with military-grade encryption.",;,;,;,;,
      rating: 5
    },
    {;";,
      name: "Maria Garcia",;";,
      company: "Consulting Firm",;";,
      role: "Operations Manager",;";,
      content: "The sync speed is amazing. Files are available instantly across all our devices. It's like having a personal cloud that just works.",;,;,;,;,
      rating: 5
    }
  ];
;,;,;,;,
  return (
    <>
      <Helmet></Helmet><//Helmet><///Helmet><////Helmet>
        <title>Zion Cloud Vault - Secure Cloud Storage Platform | Zion Tech Group</title><//title><///title><////title></////title>
        <meta;";
          name="description;";
          content="Secure your data with Zion Cloud Vault - the ultimate cloud storage platform. End-to-end encryption, unlimited storage, and enterprise-grade security for modern businesses."
        />
        <meta;";
          name="keywords;";
          content="cloud storage, secure file sharing, data encryption, cloud backup, file synchronization, enterprise storage, data security"
        />
      </Helmet><//Helmet><///Helmet><////Helmet></////Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>"
        {/* Hero Section */}"
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">"
          <div className="max-w-7xl mx-auto text-center">"
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">"
              <Cloud className="w-4 h-4 text-blue-400 mr-2" />"
              <span className="text-blue-400 text-sm font-medium">Enterprise Cloud Storage</span><//span>"
            </div>"
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">"
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"></span>;,;,;,";,
                Zion Cloud Vault"
              </span><//span>"
            </h1>"
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>;
              Secure your most valuable data with the world's most advanced cloud storage platform. ;";
              End-to-end encryption, unlimited storage, and enterprise-grade security for modern businesses."
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12"></div><//div><///div><////div>
              <Link;";,
                to="/contact;";
                className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group"
              ></Link"
>;,;";,
                Start Free Trial"
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link><//Link><///Link><////Link></////Link>
              <Link;";,
                to="/demo;";
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
              ></Link"
>;,;,;,;,
                Watch Demo
              </Link><//Link><///Link><////Link></////Link>
            </div><//div><///div><////div></////div>

            {/* Stats */}"
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">"
              <div className="text-center">"
                <div className="text-3xl font-bold text-blue-400 mb-2">99.999999999%</div>"
                <div className="text-gray-300">Data Durability</div><//div>"
              </div>"
              <div className="text-center">"
                <div className="text-3xl font-bold text-cyan-400 mb-2">AES-256</div>"
                <div className="text-gray-300">Encryption Standard</div><//div>"
              </div>"
              <div className="text-center">"
                <div className="text-3xl font-bold text-green-400 mb-2">50,000+</div>"
                <div className="text-gray-300">Businesses Trust Us</div><//div><///div><////div></////div>
              </div><//div><///div><////div></////div>
            </div><//div><///div><////div></////div>
          </div><//div><///div><////div></////div>
        </section><//section><///section><////section></////section>

        {/* Features Section */}"
        <section className="py-16 px-4 sm:px-6 lg:px-8">"
          <div className="max-w-7xl mx-auto">"
            <div className="text-center mb-16">"
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>;,;,;";,
                Advanced Cloud Storage Features"
              </h2>"
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>;";
                Everything you need to store, sync, and secure your data in the cloud."
              </p><//p>"
            </div>"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div><//div><///div><////div>
              {features.map((feature, index) => (
                <div;,;,;,;,
                  key={index};";
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >"
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform"></div><//div>"
                    {feature.icon}"
                  </div>"
                  <h3 className="text-xl font-semibold text-white mb-3"></h3><//h3>"
                    {feature.title}"
                  </h3>"
                  <p className="text-gray-300"></p><//p><///p><////p>
                    {feature.description}
                  </p><//p><///p><////p></////p>
                </div><//div><///div><////div></////div>
              ))}
            </div><//div><///div><////div></////div>
          </div><//div><///div><////div></////div>
        </section><//section><///section><////section></////section>

        {/* Storage Features List */}"
        <section className="py-16 px-4 sm:px-6 lg:px-8">"
          <div className="max-w-7xl mx-auto">"
            <div className="text-center mb-16">"
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>;,;,;";,
                Complete Storage Solution"
              </h2>"
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>;";
                All the tools you need to manage your data effectively and securely."
              </p><//p>"
            </div>"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"></div><//div><///div><////div>
              {storageFeatures.map((feature, index) => (
                <div;,;,;,;,
                  key={index};";
                  className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >"
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />"
                  <span className="text-gray-300">{feature}</span><//span><///span><////span></////span>
                </div><//div><///div><////div></////div>
              ))}
            </div><//div><///div><////div></////div>
          </div><//div><///div><////div></////div>
        </section><//section><///section><////section></////section>

        {/* Pricing Section */}"
        <section className="py-16 px-4 sm:px-6 lg:px-8">"
          <div className="max-w-7xl mx-auto">"
            <div className="text-center mb-16">"
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>;,;,;";,
                Simple, Scalable Pricing"
              </h2>"
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>;";
                Choose the storage plan that fits your needs. All plans include 30-day free trial."
              </p><//p>"
            </div>"
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div><//div><///div><////div>
              {pricingPlans.map((plan, index) => (
                <div;,;,;,;,
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${;,;,;,;,
                    plan.popular
                      ? 'border-blue-400 bg-gradient-to-br from-blue-500/10 to-cyan-500/10'
                      : 'border-white/20 hover:border-blue-400'
                  }`}"
                ></div"
>"
                  {plan.popular && ("
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">"
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold"></span>;,;,;,;,
                        Most Popular"
                      </span><//span><///span>"
                    </div><//div>"
                  )}"
                  <div className="text-center mb-8">"
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>"
                    <p className="text-gray-300 mb-4">{plan.description}</p>"
                    <div className="flex items-baseline justify-center">"
                      <span className="text-4xl font-bold text-white">{plan.price}</span>"
                      <span className="text-gray-300 ml-1">{plan.period}</span><//span><///span>"
                    </div><//div>"
                  </div>"
                  <ul className="space-y-4 mb-8"></ul>"
                    {plan.features.map((feature, featureIndex) => ("
                      <li key={featureIndex} className="flex items-center">"
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />"
                        <span className="text-gray-300">{feature}</span><//span><///span><////span></////span>
                      </li><//li><///li><////li></////li>
                    ))}
                  </ul><//ul><///ul><////ul></////ul>
                  <Link;";
                    to="/contact;
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${;
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700'"
                        : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900'"
                    }`}"
                  ></Link"
>;,;,;,;,
                    Start Free Trial
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
                Trusted by Businesses Worldwide"
              </h2>"
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>;";
                See what our customers say about Zion Cloud Vault"
              </p><//p>"
            </div>"
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div><//div><///div><////div>
              {testimonials.map((testimonial, index) => (
                <div;,;,;,;,
                  key={index};";
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >"
                  <div className="flex items-center mb-4"></div>"
                    {[...Array(testimonial.rating)].map((_, i) => ("
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />"
                    ))}"
                  </div>"
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p><//p>"
                  <div>"
                    <div className="font-semibold text-white">{testimonial.name}</div>"
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div><//div><///div><////div></////div>
                  </div><//div><///div><////div></////div>
                </div><//div><///div><////div></////div>
              ))}
            </div><//div><///div><////div></////div>
          </div><//div><///div><////div></////div>
        </section><//section><///section><////section></////section>

        {/* CTA Section */}"
        <section className="py-16 px-4 sm:px-6 lg:px-8">"
          <div className="max-w-4xl mx-auto text-center">"
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>;,;,;";,
              Ready to Secure Your Data?"
            </h2>"
            <p className="text-xl text-gray-300 mb-8"></p>;";
              Join thousands of businesses using Zion Cloud Vault to protect their most valuable data."
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div><//div><///div><////div>
              <Link;";,
                to="/contact;";
                className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
              ></Link"
>;,;";,
                Start Your Free Trial"
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link><//Link><///Link><////Link></////Link>
              <Link;";
                to="/demo;";
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
              ></Link"
>;
                Schedule Demo
              </Link><//Link><///Link><////Link></////Link>
            </div><//div><///div><////div></////div>
          </div><//div><///div><////div></////div>
        </section><//section><///section><////section></////section>
      </div><//div><///div><////div></////div>
    </>
  );
}
