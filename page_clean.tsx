import React from 'react';
interface page_cleanProps {
  className?: string;
  children?: React.ReactNode;
}

export default function page_clean({ className = '', children }: page_cleanProps) {
export default function PageClean() {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
import { Link } from "react-router-dom"lucide-react";
import EnhancedSEO from ";
import FuturisticBackground from "./components/FuturisticBackground"./components/FuturisticCard";
import FuturisticButton from ";
import FuturisticText from "./components/FuturisticText"./components/ResponsiveContainer";
import ResponsiveGrid from ";
import ResponsiveText from "./components/ResponsiveText"@context": ",
    "@type"Organization",
    ": "Zion Tech Group"url": ",
    "logo"https://ziontechgroup.com/logo.svg",
    ": "Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services."address": {
      ": "PostalAddress"streetAddress": ",
      "addressLocality"Middletown",
      ": "DE"postalCode": ",
      "addressCountry"US"
    },
    ": {
      "@type"ContactPoint",
      ": "+1-302-464-0950"contactType": ",
      "email"kleber@ziontechgroup.com"
    },
    ": [
      "https://twitter.com/ziontechgroup"https://linkedin.com/company/ziontechgroup"
    ],
    ": [
      {
        "@type"Offer",
        ": "AI Solutions"description": "
      },
      {
        "@type"Offer",
        ": "Cybersecurity"description": "
      },
      {
        "@type"Offer",
        ": "Cloud Infrastructure"description": "
      }
    ]
  };
const features = [
    {,
    title: "AI-Powered Solutions"Cutting-edge artificial intelligence to transform your business operations with machine learning, natural language processing, and predictive analytics",
        icon: <Brain className="from-blue-500 to-cyan-500",
        stats: ",
        link: "/ai-services"IT Services",
        description: ",
        icon: <Shield className="w-8 h-8",
        stats: "99.9% uptime SLA"/services"
    },
    {,
    title: ",
        description: "Ready-to-use software solutions for immediate deployment including analytics, security, and productivity tools"w-8 h-8"from-purple-500 to-pink-500"50+ solutions",
        link: "
    },
    {,
    title: "5 G Solutions"Next-generation connectivity and infrastructure services for IoT, edge computing, and smart city implementations",
        icon: <Globe className="from-orange-500 to-red-500",
        stats: ",
        link: "/5 g-solutions"Zion AI Meeting Transcriber",
        description: ",
        price: "From $19/month"w-6 h-6"/zion-ai-meeting-transcriber"Zion AI Sales Predictor",
        description: ",
        price: "From $39/month"w-6 h-6"/zion-ai-sales-predictor"Zion Analytics Pro",
        description: ",
        price: "From $299/month"w-6 h-6"/zion-analytics-pro"Zion Security Shield",
        description: ",
        price: "From $499/month"w-6 h-6"/zion-security-shield"Zion Cloud Vault",
        description: ",
        price: "From $99/month"w-6 h-6"/zion-cloud-vault"Zion AI CRM Pro",
        description: ",
        price: "From $199/month"w-6 h-6"/zion-ai-crm-pro"15,000+", label: ", icon: <Users className="w-6 h-6", label: "Uptime SLA"w-6 h-6"50+"Micro SAAS Solutions", icon: <Zap className="24/7", label: ", icon: <Shield className="w-6 h-6",
        company: "TechStart Inc."CEO",
        content: ",
        rating: 5
    },
    {,
    name: "Michael Chen"E-commerce Solutions",
        role: ",
        content: "The micro SAAS solutions are incredibly powerful and easy to implement. We've saved thousands of hours with their automation tools."Emily Rodriguez",
        company: ",
        role: "Operations Director"Outstanding support and cutting-edge technology. Zion Tech Group is our trusted partner for all digital transformation needs.",
        rating: 5
    }
  ];

  return (
    <div className="Zion Tech Group - Advanced AI & IT Solutions | Transform Your Business"
        description="
        keywords="AI solutions, cybersecurity, cloud computing, digital transformation, business automation, technology consulting, micro SAAS, 5 G technology, IT services, machine learning"https://ziontechgroup.com"
      />
      <FuturisticBackground />

      {/* Hero Section */}
      <section className="absolute inset-0 overflow-hidden">
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3 xl animate-pulse delay-1000"></div>
        </div>

        <ResponsiveContainer className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="text-cyan-400 text-sm font-medium">#1 Technology Solutions Provider 2024</span>
          </div>

          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Transform Your Business with AI
            </span>
          </h1>

          <p className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="
              variant="primary"lg"
              icon={<ArrowRight className="/ai-services"
              variant="
              size="lg"w-5 h-5"grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5 xl mx-auto"text-center group"w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"text-xl md:text-2 xl lg:text-3 xl font-bold text-white mb-2"text-gray-300 text-xs md:text-sm"py-20 px-4 sm:px-6 lg:px-8"text-center mb-16"text-3 xl md:text-4 xl lg:text-5 xl font-bold text-white mb-6"text-xl text-gray-300 max-w-4 xl mx-auto leading-relaxed"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2 xl hover:shadow-cyan-500/10 cursor-pointer"block"true"text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors"text-gray-300 text-center mb-4 leading-relaxed text-sm md:text-base"text-center"inline-flex items-center px-3 py-1 rounded-full text-xs md:text-sm font-medium bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400"py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50"max-w-7 xl mx-auto"text-center mb-16"text-3 xl md:text-4 xl font-bold text-white mb-4"text-xl text-gray-300 max-w-3 xl mx-auto"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2 xl hover:shadow-cyan-500/10 relative overflow-hidden"absolute top-4 right-4"bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold"flex items-center mb-4"w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform"flex-1"text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors"text-cyan-400 font-medium"text-gray-300 text-sm leading-relaxed"mt-4 flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors"w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"text-center mt-12"/micro-saas"
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-7 xl mx-auto">
          <div className="text-3 xl md:text-4 xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-gray-300 mb-4 italic leading-relaxed">"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <h2 className="text-3 xl md:text-4 xl lg:text-5 xl font-bold text-white mb-6">
            Join thousands of businesses already using our solutions to drive growth and innovation.
            Start your digital transformation journey today.
          </p>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3" />
              </div>
              <h3 className="text-white font-semibold mb-2">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
                <Smartphone className="w-6 h-6 text-white">Phone</h3>
              <p className="text-cyan-400">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3" />
              </div>
              <h3 className="text-white font-semibold mb-2">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105" />
            </Link>
            <Link
              to="/services"border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

