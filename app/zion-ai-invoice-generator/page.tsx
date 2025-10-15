<<<<<<< HEAD
import React from 'react;'
import { ArrowRight } from 'lucide-react;'
import { CheckCircle } from 'lucide-react;'
import { Star } from 'lucide-react;'
import { Users } from 'lucide-react;'
import { Clock } from 'lucide-react;'
import { DollarSign } from 'lucide-react;'
import { Shield } from 'lucide-react;'
import { Code } from 'lucide-react;'
import { Database } from 'lucide-react;'
import { Mail } from 'lucide-react;'
import { Settings } from 'lucide-react;'
import { Target } from 'lucide-react;'
import { TrendingUp } from 'lucide-react;'
import { PieChart } from 'lucide-react;'
import { MessageSquare } from 'lucide-react;'
import { Heart } from 'lucide-react;'
import { Globe } from 'lucide-react;'
import { Smartphone } from 'lucide-react;'
import { Network } from 'lucide-react;'
import { Lock } from 'lucide-react;'
import { Cpu } from 'lucide-react;'
import { Wifi } from 'lucide-react;'
import { Building2 } from 'lucide-react;'
import { Briefcase } from 'lucide-react;'
import { Lightbulb } from 'lucide-react;'
import { Link } from 'react-router-dom;'
import EnhancedSEO from '../components/EnhancedSEO;'
const Page = () => {
  const features = [
    {
      icon: <CheckCircle className="w-8 h-8" />,""
      title: 'Advanced Features',''
      description: 'Cutting-edge technology for maximum efficiency''
    },
    {
      icon: <Shield className="w-8 h-8" />,""
      title: 'Secure & Reliable',''
      description: 'Enterprise-grade security and 99.9% uptime''
    },
    {
      icon: <Users className="w-8 h-8" />,""
      title: 'Expert Support',''
      description: '24/7 support from our team of specialists''
    }
  ];
  return (
    <>
      <EnhancedSEO
        title="Page - Zion Tech Group""
        description="Professional page services by Zion Tech Group. Expert solutions for your business needs.""
        keywords="page, business solutions, technology services, professional services""
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">""
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">""
          <div className="max-w-7xl mx-auto text-center">""
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">""
              Page
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">""
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">""
              Professional page services designed to help your business succeed and grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">""
              <Link
                to="/contact""
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group""
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />""
              </Link>
              <Link
                to="/demo""
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300""
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">""
          <div className="max-w-7xl mx-auto">""
            <div className="text-center mb-16">""
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">""
                Why Choose Our Page Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">""
                We deliver exceptional results with cutting-edge technology and expert knowledge.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">""
              {features.map((feature, index) => (
                <div key={index} className="text-center">""
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">""
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>""
                  <p className="text-gray-300">{feature.description}</p>""
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">""
          <div className="max-w-4xl mx-auto text-center">""
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">""
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">""
              Let's discuss how our page services can help your business succeed.''
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">""
              <Link
                to="/contact""
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group""
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />""
              </Link>
              <Link
                to="/services""
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300""
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
const page = React.lazy(() => import('./page'));''
export default page;
=======
import React from 'react';;';
import SEOHead from './components/SEOHead';

,
      import SEOOptimizer from "../../components/SEOOptimizer";
,
      export default function ZionAiInvoiceGenerator() {"}
        "
  const features = [",
        "
    "AI-powered invoice generation from contracts and agreements",""
    "Automated data extraction from emails and documents",""
    "Smart tax calculation with multiple jurisdictions",""
    "Customizable professional templates (50+ designs)",""
    "Multi-currency support with real-time exchange rates",""
    "Automated payment reminders and follow-ups",""
    "Integration with 100+ accounting software",""
    "Mobile app for on-the-go invoice creation",""
    "Digital signature and approval workflows",""
    "Advanced reporting and analytics dashboard",""
    "White-label solution for agencies",""
    "API access for custom integrations";
  ];
,
      const benefits = [""
    "Reduce invoice creation time by 90%",""
    "Eliminate manual data entry errors",""
    "Get paid 30% faster with automated reminders",""
    "Save 15+ hours per week on invoicing";
  ];
,
      const pricingPlans = [",
        "
    {"}
        "
      name: "Solo",""
      price: "$19",""
      period: "/month",""
      description: "Perfect for freelancers and solo entrepreneurs",",
        "
      features: [",
        "
        "Up to 50 invoices per month",""
        "Basic templates (10+)",""
        "Single currency support",""
        "Email support",""
        "Mobile app access",""
        "Basic reporting",""
        "5 client profiles";
      ],",
        "
      popular: false",
        "
    },",
        "
    {"}
        "
      name: "Business",""
      price: "$49",""
      period: "/month",""
      description: "Ideal for small to medium businesses",",
        "
      features: [",
        "
        "Up to 500 invoices per month",""
        "All templates (50+)",""
        "Multi-currency support",""
        "Priority support",""
        "Advanced reporting",""
        "Team collaboration (5 users)",""
        "Unlimited client profiles",""
        "API access",""
        "Custom branding",""
        "Automated reminders";
      ],",
        "
      popular: true",
        "
    },",
        "
    {"}
        "
      name: "Enterprise",""
      price: "$149",""
      period: "/month",""
      description: "For large organizations and accounting firms",",
        "
      features: [",
        "
        "Unlimited invoices",""
        "Custom template creation",""
        "Advanced tax calculations",""
        "24/7 dedicated support",""
        "Advanced analytics",""
        "Unlimited team members",""
        "White-label solution",""
        "Advanced API access",""
        "Custom integrations",""
        "Dedicated account manager",""
        "On-premise deployment option";
      ],",
        "
      popular: false",
        "
    };
  ];
,
      const testimonials = [",
        "
    {"}
        "
      name: "Robert Chen",""
      company: "Freelance Consultant",""
      role: "Independent Contractor",""
      content: "Zion AI Invoice Generator has transformed my business. I create professional invoices in minutes instead of hours, and my clients love the automated reminders.",",
        "
      rating: 5,",
        "
      avatar: "RC"},",
        "
    {"}
        "
      name: "Maria Rodriguez",""
      company: "Creative Agency",""
      role: "Operations Manager",""
      content: "The AI extraction from contracts is incredible. We've reduced invoice errors to zero and our payment collection time has improved by 40%.",",
        "
      rating: 5,",
        "
      avatar: "MR"},",
        "
    {"}
        "
      name: "James Wilson",""
      company: "Accounting Firm",""
      role: "Managing Partner",""
      content: "Our clients love the professional templates and automated features. We've increased our invoice processing capacity by 300% without adding staff.",",
        "
      rating: 5,",
        "
      avatar: "JW"
    },
    {}
  ];
,
      const capabilities = [",
        "
    {"}
        "
      title: "Smart Data Extraction",""
      description: "AI automatically extracts billing information from contracts, emails, and documents",""
      icon: <className="w-8 h-8" />,""
      color: "from-blue-500 to-cyan-500"},",
        "
    {"}
        "
      title: "Automated Reminders",""
      description: "Intelligent payment reminders that adapt to client behavior and preferences",""
      icon: <Bell className="w-8 h-8" />,""
      color: "from-green-500 to-emerald-500"},",
        "
    {"}
        "
      title: "Multi-Currency Support",""
      description: "Handle international clients with real-time exchange rates and tax calculations",""
      icon: <Globe className="w-8 h-8" />,""
      color: "from-purple-500 to-pink-500"},",
        "
    {"}
        "
      title: "Advanced Analytics",""
      description: "Track payment trends, client behavior, and cash flow with detailed insights",""
      icon: <className="w-8 h-8" />,""
      color: "from-orange-500 to-red-500"
    },
    {}
  ];
;
const ZionAiInvoiceGeneratorPage: React.FC = () => {""}
  return ("")
    <>{""}</>
      <SEOHead"">
        title="Page - Zion Tech Group";
        description="Professional page solutions for modern businesses";
      />""
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">""
        {/* Hero Section */};
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">""
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>""
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>""
          <div className="max-w-7xl mx-auto text-center relative z-10">""
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">""
              <className="w-4 h-4 text-cyan-400 mr-2" />""
              <span className="text-cyan-400 text-sm font-medium">AI-Powered Invoice Automation</span>",
        "
            </div>",
        "
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">",
        "
              Zion AI",
        "
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">""
                {" "}Invoice Generator",
        "
              </span>",
        "
            </h1>""
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">",
        "
              Create professional invoices instantly with AI. Automate data extraction,",
        "
              tax calculations, and payment reminders to get paid faster.",
        "
            </p>",
        "
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">",
        "
              <",>
        "
                to="/contact",
      className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105";
              >",
        "
                Start Free Trial",
        "
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />",
        "
              </>",
        "
              <"">
                to="/demo",
      className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105";
              >",
        "
                View Demo",
        "
                <className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />",
        "
              </>",
        "
            </div>""
            {/* Stats */};
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">""
              <div className="text-center group">""
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">""
                  <FileText className="w-8 h-8 text-cyan-400" />",
        "
                </div>",
        "
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">50K+</div>""
                <div className="text-gray-300 text-sm">Invoices Generated</div>",
        "
              </div>",
        "
              <div className="text-center group">""
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">""
                  <className="w-8 h-8 text-cyan-400" />",
        "
                </div>",
        "
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">90%</div>""
                <div className="text-gray-300 text-sm">Time Saved</div>",
        "
              </div>",
        "
              <div className="text-center group">""
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">""
                  <DollarSign className="w-8 h-8 text-cyan-400" />",
        "
                </div>",
        "
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">30%</div>""
                <div className="text-gray-300 text-sm">Faster Payments</div>",
        "
              </div>",
        "
              <div className="text-center group">""
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">""
                  <Award className="w-8 h-8 text-cyan-400" />",
        "
                </div>",
        "
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">4.8/5</div>""
                <div className="text-gray-300 text-sm">User Rating</div>",
        "
              </div>",
        "
            </div>",
        "
          </div>",
        "
        </section>""
        {/* Features Section */};
        <section className="py-20 px-4 sm:px-6 lg:px-8">""
          <div className="max-w-7xl mx-auto">""
            <div className="text-center mb-16">""
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">",
        "
                Powerful Invoice Automation Features",
        "
              </h2>""
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">",
        "
                Everything you need to streamline your invoicing process. From AI-powered data extraction",
        "
                to automated payment reminders, we've got you covered.",
        "
              </p>",
        "
            </div>""
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">",
        "
              {features.map((feature, index) => (",)}
        "
                <div"">
                  key={index},
      className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10";
                >""
                  <div className="flex items-center mb-4">""
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />""
                    <span className="text-white font-medium">{feature}</span>",
        "
                  </div>",
        "
                </div>",
        "
              ))};
            </div>",
        "
          </div>",
        "
        </section>",
        "
        {/* Capabilities */};
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">""
          <div className="max-w-7xl mx-auto">""
            <div className="text-center mb-16">""
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">",
        "
                Advanced Invoice Capabilities",
        "
              </h2>""
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">",
        "
                Harness the power of AI to automate every aspect of your invoicing workflow.",
        "
              </p>",
        "
            </div>",
        "
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">",
        "
              {capabilities.map((capability, index) => (",)}
        "
                <div"">
                  key={index},
      className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 text-center";
                >",
        "
                  <div",>
        "
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${capability.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`};
                  >",
        "
                    {capability.icon};
                  </div>",
        "
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">",
        "
                    {capability.title};
                  </h3>",
        "
                  <p className="text-gray-300 leading-relaxed">",
        "
                    {capability.description};
                  </p>",
        "
                </div>",
        "
              ))};
            </div>",
        "
          </div>",
        "
        </section>",
        "
        {/* Pricing Section */};
        <section className="py-20 px-4 sm:px-6 lg:px-8">""
          <div className="max-w-7xl mx-auto">""
            <div className="text-center mb-16">""
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">",
        "
                Simple, Transparent Pricing",
        "
              </h2>""
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">",
        "
                Choose the plan that fits your invoicing needs. All plans include core AI features.",
        "
              </p>",
        "
            </div>",
        "
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">",
        "
              {pricingPlans.map((plan, index) => (",)}
        "
                <div",>
        "
                  key={index},
      className={`group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative ${"}
        "
                    plan.popular ? 'ring-2 ring-cyan-400' : '';
                  }`};
                >",
        "
                  {plan.popular && (",)}
        "
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">""
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">",
        "
                        Most Popular",
        "
                      </span>",
        "
                    </div>",
        "
                  )};
;
                  <div className="text-center mb-6">""
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>""
                    <p className="text-gray-300 mb-4">{plan.description}</p>""
                    <div className="flex items-baseline justify-center">""
                      <span className="text-4xl font-bold text-white">{plan.price}</span>""
                      <span className="text-gray-400 ml-1">{plan.period}</span>",
        "
                    </div>",
        "
                  </div>""
                  <ul className="space-y-3 mb-8">",
        "
                    {plan.features.map((feature, featureIndex) => (",)}
        "
                      <li key={featureIndex} className="flex items-center text-gray-300">""
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />",
        "
                        <span>{feature}</span>",
        "
                      </li>",
        "
                    ))};
                  </ul>",
        "
                  <"">
                    to="/contact",
      className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${"}
        "
                      plan.popular",
        "
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700';
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900';
                    }`};
                  >",
        "
                    Get Started",
        "
                    <ArrowRight className="w-4 h-4 ml-2" />",
        "
                  </>",
        "
                </div>",
        "
              ))};
            </div>",
        "
          </div>",
        "
        </section>",
        "
        {/* Testimonials */};
        <section className="py-20 px-4 sm:px-6 lg:px-8">""
          <div className="max-w-7xl mx-auto">""
            <div className="text-center mb-16">""
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">",
        "
                What Our Customers Say",
        "
              </h2>""
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">",
        "
                Join thousands of businesses using our AI invoice generator to streamline their billing process.",
        "
              </p>",
        "
            </div>",
        "
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">",
        "
              {testimonials.map((testimonial, index) => (",)}
        "
                <div"">
                  key={index},
      className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10";
                >""
                  <div className="flex items-center mb-4">",
        "
                    {[...Array(testimonial.rating)].map(( i) => (",)}
        "
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />",
        "
                    ))};
                  </div>",
        "
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>""
                  <div className="flex items-center">""
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">",
        "
                      {testimonial.avatar};
                    </div>",
        "
                    <div>""
                      <div className="font-semibold text-white">{testimonial.name}</div>""
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>",
        "
                    </div>",
        "
                  </div>",
        "
                </div>",
        "
              ))};
            </div>",
        "
          </div>",
        "
        </section>""
        {/* CTA Section */};
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">""
          <div className="max-w-4xl mx-auto text-center">""
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">",
        "
              Ready to Automate Your Invoicing?",
        "
            </h2>""
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">",
        "
              Start your free trial today and experience the future of invoice automation.",
        "
              No credit card required. Cancel anytime.",
        "
            </p>",
        "
            {/* Contact Information */};
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">""
              <div className="text-center">""
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">""
                  <MessageSquare className="w-6 h-6 text-white" />",
        "
                </div>",
        "
                <h3 className="text-white font-semibold mb-2">Email</h3>""
                <p className="text-cyan-400">kleber@ziontechgroup.com</p>",
        "
              </div>",
        "
              <div className="text-center">""
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">""
                  <Phone className="w-6 h-6 text-white" />",
        "
                </div>",
        "
                <h3 className="text-white font-semibold mb-2">Phone</h3>""
                <p className="text-cyan-400">+1 302 464 0950</p>",
        "
              </div>",
        "
              <div className="text-center">""
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">""
                  <Globe className="w-6 h-6 text-white" />",
        "
                </div>",
        "
                <h3 className="text-white font-semibold mb-2">Address</h3>""
                <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>",
        "
              </div>",
        "
            </div>""
            <div className="flex flex-col sm:flex-row gap-4 justify-center">",
        "
              <",>
        "
                to="/contact",
      className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105";
              >",
        "
                Start Free Trial",
        "
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />",
        "
              </>",
        "
              <"">
                to="/contact";
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105";
              >""
                Start Free Trial""
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />""
              </>""
              <"">
                to="/demo";
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105";
              >""
                View Demo""
                <className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />""
              </>""
            </div>""
          </div>""
        </section>""
      </div>""
    </>""

;
const ZionAiInvoiceGeneratorPage: React.FC = () => {
  return (
    <>;
      <SEOHead;
        title="Zion Ai Invoice Generator - Zion Tech Group"";
        description="Professional zion ai invoice generator solutions for modern businesses";
      />";
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";
        <div className ="text-center">";
          <h1 className ="text-4xl font-bold mb-4">Zion Ai Invoice Generator</h1>";
          <p className ="text-gray-300">Professional solutions coming soon...</p>;";
        </div>;
      </div>;
    </>;
  ),
};
;
export default ZionAiInvoiceGeneratorPage;'";'";

>>>>>>> main
