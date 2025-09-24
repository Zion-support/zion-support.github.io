import React from "react"
import { RefreshCw, Zap, Users, TrendingUp, Target, BarChart3, Lightbulb, ArrowRight } from "lucide-react"
const DigitalTransformation = () => {;
  const transformationServices = [;
    {;
      title: "Process Automation",description: "Streamline workflows with intelligent automation and AI-powered solutions.",price: "From $15,000/project",;
      features: ["Workflow automation", "AI-powered decision making", "Process optimization", "Performance monitoring"],;
      icon: Zap;
    };
    {;
      title: "Legacy Modernization",description: "Update and integrate legacy systems with modern technologies.",price: "From $25,000/project",;
      features: ["System assessment", "Modernization planning", "Data migration", "Integration services"],;
      icon: RefreshCw;
    };
    {;
      title: "Change Management",description: "Guide your team through digital adoption and transformation.",price: "From $8,000/month",;
      features: ["Change strategy", "Training programs", "Communication plans", "Success measurement"],;
      icon: Users;
    };
  ];
  const transformationAreas = [;
    {;
      name: "Customer Experience",description: "Enhance customer interactions and satisfaction",icon: Target,features: ["Digital touchpoints", "Personalization", "Omnichannel strategy", "Customer analytics"]
    },;
    {;
      name: "Operations",description: "Optimize internal processes and efficiency",icon: TrendingUp,features: ["Process redesign", "Automation", "Performance metrics", "Continuous improvement"]
    },;
    {;
      name: "Technology",description: "Modernize your technology stack and infrastructure",icon: BarChart3,features: ["Cloud migration", "API integration", "Data modernization", "Security enhancement"]
    };
  ],;

  const benefits = [;
    "Increased operational efficiency and productivity",;
    "Enhanced customer experience and satisfaction",;
    "Improved data insights and decision making",;
    "Reduced operational costs and manual work",;
    "Faster time to market for new products",;
    "Better competitive positioning in the market"
  ],;

  return (
    <div className="min-h-screen bg-slate-900 text-white">;
      {/* Hero Section */};
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto text-center">;
          <div className="mb-8">;
            <div className="inline-flex items-center px-4 py-2 bg-indigo-500/10 text-indigo-400 rounded-full text-sm font-medium mb-6">;
              <[^>]*/>
              Digital Transformation;
            </[^>]*>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">;
              Digital;
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"> Transformation</[^>]*>
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">;
              Modernize your business processes and operations with cutting-edge;
              technology solutions that drive growth and innovation.;
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <a href="#services" className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">;
                Explore Services;
              </[^>]*>
              <a href="/contact" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">;
                Get Started;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Transformation Services */};
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Our Transformation Services;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">;
              Comprehensive digital transformation solutions designed to modernize;
              your business and drive sustainable growth.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {transformationServices.map((service, index) => (;
              <div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-indigo-500/50 transition-all duration-300">;
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</[^>]*>
                <p className="text-gray-300 mb-4">{service.description}</[^>]*>
                <p className="text-lg font-semibold text-indigo-400 mb-4">{service.price}</[^>]*>
                <ul className="space-y-2">;
                  {service.features.map((feature, featureIndex) => (;
                    <li key={featureIndex} className="text-sm text-gray-400 flex items-start">;
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2 mt-2 flex-shrink-0"></[^>]*>
                      {feature};
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Transformation Areas */};
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">;
        <div className="max-w-7xl mx-auto">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Areas of Transformation;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">;
              We help transform every aspect of your business to create a;
              comprehensive digital-first organization.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            {transformationAreas.map((area, index) => (;
              <div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6 text-center hover:border-indigo-500/50 transition-all duration-300">;
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-xl font-semibold text-white mb-3">{area.name}</[^>]*>
                <p className="text-gray-300 mb-4">{area.description}</[^>]*>
                <ul className="space-y-2">;
                  {area.features.map((feature, idx) => (;
                    <li key={idx} className="text-sm text-gray-400">;
                      {feature};
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Benefits Section */};
      <section className="py-16 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">;
            <div>;
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;
                Why Choose Digital Transformation?;
              </[^>]*>
              <p className="text-lg text-gray-300 mb-6">;
                Digital transformation is essential for businesses to remain;
                competitive and meet evolving customer expectations.;
              </[^>]*>
              <ul className="space-y-3">;
                {benefits.map((benefit, index) => (;
                  <li key={index} className="flex items-center text-gray-300">;
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></[^>]*>
                    {benefit};
                  </[^>]*>
                ))};
              </[^>]*>
            </[^>]*>
            <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl p-8 border border-indigo-500/30">;
              <div className="text-center">;
                <[^>]*/>
                <h3 className="text-2xl font-bold text-white mb-2">Transformation Expertise</[^>]*>
                <p className="text-gray-300 mb-6">;
                  Our team has successfully guided hundreds of organizations;
                  through their digital transformation journey.;
                </[^>]*>
                <div className="text-sm text-gray-400">;
                  <p>• Proven methodologies</[^>]*>
                  <p>• Industry experience</[^>]*>
                  <p>• Change management expertise</[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* CTA Section */};
      <section className="py-16 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-4xl mx-auto text-center">;
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;
            Transform Your Business;
          </[^>]*>
          <p className="text-xl text-gray-300 mb-8">;
            Ready to modernize your business and unlock new opportunities;
            for growth and innovation?;
          </[^>]*>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">;
              Get Started;
            </[^>]*>
            <a href="/services" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">;
              View All Services;
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};
export default DigitalTransformation;