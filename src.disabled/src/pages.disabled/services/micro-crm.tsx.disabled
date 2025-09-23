import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ;
  Users,
  CheckCircle,
  Star,
  TrendingUp,
  ArrowLeft,
  Phone,
  Mail,
  Globe,
  Shield,
  BarChart3,
  MessageSquare,
  Calendar,
  Target,
  Zap,
  Database,
  Lock,
  Eye,
  Search,
  Filter,
  Download,
  Upload,
  Settings,
  Bell,
  Award;
} from 'lucide-react';
const MicroCRM = () => {;
  const contactInfo = {;
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008, Middletown DE 19709",
    website: "https://ziontechgroup.com";
};
  const features = [;
    {;
      title: "Contact Management",
      description: "Organize and manage all your customer contacts with detailed profiles and interaction history",
      icon: Users;
},
    {;
      title: "Lead Tracking",
      description: "Track leads through your sales pipeline with automated scoring and qualification",
      icon: Target;
},
    {;
      title: "Sales Pipeline",
      description: "Visualize and manage your sales process with customizable stages and workflows",
      icon: TrendingUp;
},
    {;
      title: "Email Integration",
      description: "Seamlessly integrate with your email provider for automatic contact sync and tracking",
      icon: Mail;
},
    {;
      title: "Analytics Dashboard",
      description: "Get insights into your sales performance with real-time analytics and reports",
      icon: BarChart3;
},
    {;
      title: "Mobile Access",
      description: "Access your CRM on the go with our responsive mobile application",
      icon: Zap;
}
  ];
  const pricingPlans = [;
    {;
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [ "Up to 1,000 contacts",
        "Basic lead tracking",
        "Email integration",
        "Mobile app access",
        "Email support",
        "Basic reporting" ],
      popular: false;
},
    {;
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Ideal for growing businesses and sales teams",
      features: [ "Up to 10,000 contacts",
        "Advanced lead scoring",
        "Sales pipeline management",
        "Team collaboration",
        "Priority support",
        "Advanced analytics",
        "API access",
        "Custom fields" ],
      popular: true;
},
    {;
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations with complex sales processes",
      features: [ "Unlimited contacts",
        "Custom workflows",
        "Advanced automation",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom integrations",
        "White-label options",
        "Advanced security" ],
      popular: false;
}
  ];
  const testimonials = [;
    {;
      name: "David Thompson",
      role: "Sales Manager",
      company: "GrowthTech Inc",
      content: "The Micro CRM has streamlined our sales process completely. We've seen a 40% increase in conversion rates and our team is much more organized.",
      rating: 5;
},
    {;
      name: "Lisa Chen",
      role: "Founder",
      company: "StartupHub",
      content: "As a startup, we needed something simple but powerful. This CRM fits perfectly and has helped us scale our sales operations efficiently.",
      rating: 5;
},
    {;
      name: "Robert Martinez",
      role: "Business Development",
      company: "Innovation Labs",
      content: "The lead tracking and pipeline management features are game-changers. We can now track every interaction and optimize our sales process.",
      rating: 5;
}
  ];
  return (;
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">;
      {/* Header */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <Link ;
              to="/services" ;
              className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors mb-8">;
              <ArrowLeft className="w-4 h-4 mr-2" />;
              Back to Services;
            </Link>;
            <div className="text-center mb-12">;
              <div className="flex items-center justify-center mb-6">;
                <Users className="w-16 h-16 text-purple-400 mr-4" />;
                <h1 className="text-5xl md:text-6xl font-bold text-white">;
                  Micro CRM Platform;
                </h1>;
              </div>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">;
                Lightweight CRM solution for small businesses with essential customer management features, lead tracking, and sales pipeline management.;
              </p>;
              {/* Contact Info */}
              <div className="flex flex-wrap justify-center gap-6 mb-8">;
                <a href={`tel:${contactInfo.phone}`} className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors">;
                  <Phone className="w-5 h-5" />;
                  <span>{contactInfo.phone}</span>;
                </a>;
                <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors">;
                  <Mail className="w-5 h-5" />;
                  <span>{contactInfo.email}</span>;
                </a>;
                <a href={contactInfo.website} className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors">;
                  <Globe className="w-5 h-5" />;
                  <span>{contactInfo.website}</span>;
                </a>;
              </div>;

              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <a;
                  href={`tel:${contactInfo.phone}`}
                  className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">;
                  <Phone className="w-5 h-5 mr-2" />;
                  Get Started Today;
                </a>;
                <a;
                  href={`mailto:${contactInfo.email}`}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">;
                  <Mail className="w-5 h-5 mr-2" />;
                  Request Demo;
                </a>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-6">Essential CRM Features</h2>;
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">;
              Everything you need to manage your customer relationships and grow your business.;
            </p>;
          </motion.div>;

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {features.map((feature, index) => (;
              <motion.div;
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">;
                <div className="flex items-center mb-4">;
                  <feature.icon className="w-8 h-8 text-purple-400 mr-3" />;
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>;
                </div>;
                <p className="text-gray-300">{feature.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-cyan-900/20">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-6">Simple, Affordable Pricing</h2>;
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">;
              Choose the plan that grows with your business. No hidden fees, no surprises.;
            </p>;
          </motion.div>;

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            {pricingPlans.map((plan, index) => (;
              <motion.div;
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`bg-gray-800/50 border rounded-xl p-8 relative ${;
                  plan.popular ;
                    ? 'border-purple-500 shadow-lg shadow-purple-500/20' ;
                    : 'border-gray-700';
}`}
              >;
                {plan.popular && (;
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">;
                    <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">;
                      Most Popular;
                    </span>;
                  </div>;
                )}

                <div className="text-center mb-8">;
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>;
                  <div className="flex items-baseline justify-center mb-4">;
                    <span className="text-4xl font-bold text-white">{plan.price}</span>;
                    <span className="text-gray-400 ml-1">{plan.period}</span>;
                  </div>;
                  <p className="text-gray-300">{plan.description}</p>;
                </div>;

                <ul className="space-y-4 mb-8">;
                  {plan.features.map((feature, idx) => (;
                    <li key={idx} className="flex items-center text-gray-300">;
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />;
                      {feature}
                    </li>;
                  ))}
                </ul>;

                <a;
                  href={`tel:${contactInfo.phone}`}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center ${;
                    plan.popular;
                      ? 'bg-purple-500 hover:bg-purple-600 text-white';
                      : 'bg-gray-700 hover:bg-gray-600 text-white';
}`}
                >;
                  Get Started;
                </a>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-6">Trusted by Growing Businesses</h2>;
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">;
              See how our Micro CRM platform is helping businesses scale their sales operations.;
            </p>;
          </motion.div>;

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            {testimonials.map((testimonial, index) => (;
              <motion.div;
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">;
                <div className="flex items-center mb-4">;
                  {[...Array(testimonial.rating)].map((_, i) => (;
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />;
                  ))}
                </div>;
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>;
                <div>;
                  <p className="text-white font-semibold">{testimonial.name}</p>;
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>;
                  <p className="text-purple-400 text-sm">{testimonial.company}</p>;
                </div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-cyan-900/20">;
        <div className="max-w-4xl mx-auto text-center">;
          <motion.h2 ;
            className="text-4xl font-bold text-white mb-6";
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            Ready to Streamline Your Sales Process?;
          </motion.h2>;
          <motion.p ;
            className="text-xl text-gray-300 mb-8";
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >;
            Start managing your customer relationships more effectively today.;
          </motion.p>;
          <motion.div ;
            className="flex flex-col sm:flex-row gap-4 justify-center";
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >;
            <a;
              href={`tel:${contactInfo.phone}`}
              className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">;
              <Phone className="w-5 h-5 mr-2" />;
              Call Now;
            </a>;
            <a;
              href={`mailto:${contactInfo.email}`}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">;
              <Mail className="w-5 h-5 mr-2" />;
              Email Us;
            </a>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
export default MicroCRM;
