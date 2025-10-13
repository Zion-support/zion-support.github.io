import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Handshake, 
  Users, 
  Award, 
  TrendingUp, 
  Shield, 
  Zap, 
  Globe, 
  BarChart3,
  ArrowRight,
  CheckCircle,
  Star,
  Mail,
  Phone
} from "lucide-react";

export default function Partners() {
  const partnerTypes = [
    {
      title: "Technology Partners",
      description: "Integrate with cutting-edge technologies and platforms",
      icon: <Zap className="w-8 h-8" />,
      benefits: [
        "Access to latest APIs and SDKs",
        "Technical support and documentation",
        "Co-marketing opportunities",
        "Revenue sharing programs"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Channel Partners",
      description: "Resell and distribute our solutions to your customers",
      icon: <Users className="w-8 h-8" />,
      benefits: [
        "Competitive pricing and margins",
        "Sales training and certification",
        "Marketing materials and support",
        "Dedicated partner success manager"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Strategic Partners",
      description: "Long-term partnerships for mutual growth and innovation",
      icon: <Handshake className="w-8 h-8" />,
      benefits: [
        "Joint product development",
        "Shared R&D resources",
        "Market expansion support",
        "Executive relationship management"
      ],
      color: "from-purple-500 to-pink-500"
    }
  ];

  const currentPartners = [
    {
      name: "Microsoft",
      logo: "M",
      description: "Cloud infrastructure and AI solutions",
      category: "Technology Partner"
    },
    {
      name: "Amazon Web Services",
      logo: "AWS",
      description: "Cloud computing and storage solutions",
      category: "Technology Partner"
    },
    {
      name: "Google Cloud",
      logo: "GCP",
      description: "AI and machine learning platforms",
      category: "Technology Partner"
    },
    {
      name: "Salesforce",
      logo: "SF",
      description: "CRM and business automation",
      category: "Strategic Partner"
    },
    {
      name: "IBM",
      logo: "IBM",
      description: "Enterprise solutions and consulting",
      category: "Strategic Partner"
    },
    {
      name: "Oracle",
      logo: "OR",
      description: "Database and enterprise software",
      category: "Technology Partner"
    }
  ];

  const benefits = [
    {
      title: "Revenue Growth",
      description: "Increase your revenue with our proven solutions",
      icon: <TrendingUp className="w-6 h-6" />,
      stat: "40% average revenue increase"
    },
    {
      title: "Market Access",
      description: "Tap into new markets and customer segments",
      icon: <Globe className="w-6 h-6" />,
      stat: "50+ countries served"
    },
    {
      title: "Technical Support",
      description: "Comprehensive support and training programs",
      icon: <Shield className="w-6 h-6" />,
      stat: "24/7 technical support"
    },
    {
      title: "Marketing Support",
      description: "Co-marketing and lead generation programs",
      icon: <BarChart3 className="w-6 h-6" />,
      stat: "1000+ leads generated monthly"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Helmet>
        <title>Partners - Zion Tech Group | Partner Program & Opportunities</title>
        <meta name="description" content="Join Zion Tech Group's partner program and grow your business with our AI and IT solutions. Technology, channel, and strategic partnership opportunities available." />
        <meta name="keywords" content="partner program, technology partners, channel partners, strategic partnerships, AI solutions, IT services" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Partner With Us
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join our global partner ecosystem and unlock new opportunities for growth, innovation, and success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 flex items-center justify-center"
            >
              Become a Partner
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/contact"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the partnership model that best fits your business goals and growth strategy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerTypes.map((type, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${type.color} flex items-center justify-center text-white mb-6 mx-auto`}>
                  {type.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{type.title}</h3>
                <p className="text-gray-300 mb-6 text-center">{type.description}</p>
                <ul className="space-y-3">
                  {type.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of successful partners who have grown their business with our solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-cyan-400">{benefit.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 mb-3">{benefit.description}</p>
                <div className="text-cyan-400 font-semibold">{benefit.stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Partners
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Trusted by leading technology companies and organizations worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {currentPartners.map((partner, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-cyan-400">{partner.logo}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{partner.name}</h3>
                <p className="text-sm text-gray-400 mb-2">{partner.description}</p>
                <div className="text-xs text-cyan-400">{partner.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Partner Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from our successful partners about their growth journey with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Partnering with Zion Tech Group has been transformative for our business. We've seen 300% growth in our AI solutions revenue.",
                author: "Sarah Johnson",
                company: "Tech Solutions Inc.",
                rating: 5
              },
              {
                quote: "The support and resources provided by Zion Tech Group have been exceptional. Our customers love the integrated solutions.",
                author: "Michael Chen",
                company: "Cloud Partners LLC",
                rating: 5
              },
              {
                quote: "The partnership program is well-structured and profitable. We've expanded to 5 new markets with their support.",
                author: "Emily Rodriguez",
                company: "Digital Innovations",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-gray-400">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our partner ecosystem and start growing your business today. Our team is ready to help you succeed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 flex items-center justify-center"
            >
              Start Partnership Application
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/contact"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
            >
              Schedule a Call
            </Link>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm text-gray-400">
            <div className="flex items-center justify-center">
              <Mail className="w-4 h-4 mr-2" />
              partners@ziontechgroup.com
            </div>
            <div className="flex items-center justify-center">
              <Phone className="w-4 h-4 mr-2" />
              +1 (302) 464-0950
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}