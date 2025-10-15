<<<<<<< HEAD
import React from 'react;'
import { Helmet } from 'react-helmet-async;'
'use client;''
export default function Page() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transform Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">AI Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join thousands of businesses that have revolutionized their operations with our cutting-edge AI and IT solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
              <Zap className="w-5 h-5" />
              Get Started Today
            </button>
            <button className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
              <ArrowRight className="w-5 h-5" />
              Learn More
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
              <div className="text-gray-500 text-xs mt-1">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center hover:border-purple-400 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Solutions?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide comprehensive AI and IT solutions that deliver real results for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join the future of business technology. Get started with our AI solutions today and see the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2">
                <Zap className="w-5 h-5" />
                <span>Start Free Trial</span>
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200">
                Schedule Demo
              </button>
            </div>          </div>
=======
    <div
      className={`relative overflow-hidden rounded-lg p-8 text-white ${getVariantStyles()} ${className}`}
    >
      <div className="relative z-10">
        <div className="flex items-center justify-center mb-4">{getIcon()}</div>
        <h2 className="text-3xl font-bold text-center mb-4">{title}</h2>
        <p className="text-lg text-center mb-6 opacity-90 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="text-center">
          <Link
            to={ctaLink}
            className="inline-flex items-center bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            {ctaText}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
>>>>>>> origin/main
=======
    <div className="min-h-screen bg-white">""
      <Helmet>
        <title>ContentPromotionBanner - Zion Tech Group</title>
        <meta name="description" content="Professional contentpromotionbanner services by Zion Tech Group." />""
      </Helmet>
      <div className="container mx-auto px-4 py-16">""
        <div className="text-center">""
          <h1 className="text-4xl font-bold text-gray-900 mb-8">""
            ContentPromotionBanner;
          </h1>
          <p className="text-xl text-gray-600 mb-8">""
            Professional contentpromotionbanner solutions tailored to your business needs.</p>
          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8 mt-12">""
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">""
              <h3 className="text-lg font-semibold text-blue-900 mb-2">""
                Expert Solutions;
              </h3>
              <p className="text-blue-700">;""
                Our team of experts delivers cutting-edge contentpromotionbanner solutions.;
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">;""
              <h3 className="text-lg font-semibold text-green-900 mb-2">;""
                Custom Implementation;
              </h3>
              <p className="text-green-700">;""
                Tailored contentpromotionbanner implementations for your specific requirements.;
              </p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">;""
              <h3 className="text-lg font-semibold text-purple-900 mb-2">;""
                24/7 Support;
              </h3>
              <p className="text-purple-700">;""
                Round-the-clock support for all your contentpromotionbanner needs.;
              </p>
            </div>
          </div>
          <div className="mt-12">;""
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">;""
              Get Started Today;
            </button>
          </div>
>>>>>>> main
        </div>
      </div>
    </div>
  );}
}''
=======
import React from 'react';;';
import SEOHead from './components/SEOHead';

interface ContentPromotionBannerProps {},
      title?: string
  description?: string
  ctaText?: string
  ctaLink?: string
  variant?: "primary" | "secondary" | "success"
  className?: string
},
      const ContentPromotionBanner: React.FC<ContentPromotionBannerProps> = ({},)
      title = "Transform Your Business with AI", description = "Discover how our cutting-edge AI solutions can revolutionize your operations and drive unprecedented growth.", ctaText = "Get Started Today", ctaLink = "/contact", variant = "primary", className = ""}) => {},
      const getVariantStyles = () => {},
      switch (variant) {},
      case "primary":
        return "bg-gradient-to-r from-cyan-500 to-purple-600"
      case "secondary":
        return "bg-gradient-to-r from-blue-500 to-indigo-600"
      case "success":
        return "bg-gradient-to-r from-green-500 to-emerald-600"
      default:
        return "bg-gradient-to-r from-cyan-500 to-purple-600"
    }
    },
    {}
  const getIcon = () => {};
}switch (variant) {},
      case "primary":
        return <className="w-6 h-6" />
      case "secondary":
        return <Star className="w-6 h-6" />
      case "success":
        return <Star className="w-6 h-6" />
      default:
        return <className="w-6 h-6" />
    }
    },
    {}
  return ()
    <divclassName={`relative overflow-hidden rounded-lg p-8 text-white ${getVariantStyles()} ${className}`};>
    ></div
>
      <div className="relative z-10"></div>
        <div className="flex items-center justify-center mb-4">{getIcon()}</div>
        <h2 className="text-3xl font-bold text-center mb-4">{title}</h2>
        <p className="text-lg text-center mb-6 opacity-90 max-w-2xl mx-auto"></p>
          {description};
        </p>
        <div className="text-center"></div>
          <>
            to={ctaLink},
      className="inline-flex items-center bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
          ></>
            {ctaText};
            <ArrowRight className="w-5 h-5 ml-2" />
          </>

        </div>
      </div>
    </>
  );

;
const ComponentsPage: React.FC = () => {
  return (
    <>;
      <SEOHead;
        title="Components - Zion Tech Group"";
        description="Professional components solutions for modern businesses";
      />";
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";
        <div className ="text-center">";
          <h1 className ="text-4xl font-bold mb-4">Components</h1>";
          <p className ="text-gray-300">Professional solutions coming soon...</p>;";
        </div>;
      </div>;
    </>;
  ),

};
;
export default ComponentsPage;'";'";
>>>>>>> main
