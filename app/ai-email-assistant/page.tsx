<<<<<<< HEAD
import { Helmet }; from 'react-helmet-async";";";";
import { Link } from 'react-router-dom";";";";
import { Helmet } from 'react-helmet-async",";";
      export default function AiEmailAssistantPage() {";";";
  "
}";";";
        {/* Hero Section */};"
        <div className="container mx-auto px-4 py-20">""
          <div className="text-center mb-16">""
            <h1 className="text-5xl font-bold text-white mb-6">""
              AI Email <span className="text-blue-600">Assistant</span>","
        "
            </h1>","
        "
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">","
        "
              Transform your email management with AI-powered automation, _smart","
        "
              classification, and intelligent responses that boost productivity","
        "
              and improve communication.","
        "
            </p>""
            <div className="flex flex-col sm:flex-row gap-4 justify-center">","
        "
              <",>"
        "
                to="/contact","
      className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105";"
              >","
        "
                Get Started","
        "
              </>","
        "
              <",>"
        "
                to="/contact","
      className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105";"
              >","
        "
                Learn More","
        "
              </>","
        "
            </div>","
        "
          </div>""
          {/* Features Section */};"
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">","
        "
            {features.map((feature, index) => (",)}"
        "
              <div"">";";";
                key={index},"
      className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center";"
              >""
                <div className="flex justify-center mb-4">{feature.icon}</div>""
                <h3 className="text-xl font-semibold text-white mb-2">","
        "
                  {feature.title};"
                </h3>","
        "
                <p className="text-gray-300">{feature.description}</p>","
        "
              </div>","
        "
            ))};"
          </div>""
          {/* Use Cases Section */};"
          <div className="mb-16">""
            <h2 className="text-3xl font-bold text-white text-center mb-12">","
        "
              Use Cases","
        "
            </h2>""
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">","
        "
              {useCases.map((useCase, index) => (",)}"
        "
                <div"">";";";
                  key={index},"
      className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center";"
                >""
                  <div className="flex justify-center mb-4">{useCase.icon}</div>""
                  <h3 className="text-xl font-semibold text-white mb-2">","
        "
                    {useCase.title};"
                  </h3>","
        "
                  <p className="text-gray-300">{useCase.description}</p>","
        "
                </div>","
        "
              ))};"
            </div>","
        "
          </div>","
        "
          {/* Pricing Section */};"
          <div className="mb-16">""
            <h2 className="text-3xl font-bold text-white text-center mb-12">","
        "
              Pricing Plans","
        "
            </h2>""
            <div className="grid md:grid-cols-3 gap-8">","
        "
              {pricingPlans.map((plan, index) => (",)}"
        "
                <div"">";";";
                  key={index},"
      className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 relative ${plan.popular ? "ring-2 ring-cyan-500" : ""}`};"
                >","
        "
                  {plan.popular && (",)}"
        "
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">""
                      <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">","
        "
                        Most Popular","
        "
                      </span>","
        "
                    </div>","
        "
                  )};"
                  <div className="text-center mb-6">""
                    <h3 className="text-2xl font-bold text-white mb-2">","
        "
                      {plan.name};"
                    </h3>","
        "
                    <div className="text-4xl font-bold text-cyan-400 mb-2">""
                      {plan.price};"
                      <span className="text-lg text-gray-300">","
        "
                        {plan.period};"
                      </span>","
        "
                    </div>""
                    <p className="text-gray-300">{plan.description}</p>","
        "
                  </div>","
        "
                  <ul className="space-y-3 mb-8">","
        "
                    {plan.features.map((feature, featureIndex) => (",)}"
        "
                      <li"">";";";
                        key={featureIndex},"
      className="text-gray-300 flex items-center";"
                      >""
                        <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />","
        "
                        {feature};"
                      </li>","
        "
                    ))};"
                  </ul>","
        "
                  <",>"
        "
                    to="/contact","
      className={`w-full block text-center py-3 rounded-lg font-semibold transition-all duration-300 ${"}"
        "
                      plan.popular","
        "
                        ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600";"
                        : "border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10";";";";
                    }`};"
                  >","
        "
                    Get Started","
        "
                  </>","
        "
                </div>","
        "
              ))};"
            </div>","
        "
          </div>","
        "
          {/* Testimonials Section */};"
          <div className="mb-16">""
            <h2 className="text-3xl font-bold text-white text-center mb-12">","
        "
              What Our Clients Say","
        "
            </h2>""
            <div className="grid md:grid-cols-3 gap-8">","
        "
              {testimonials.map((testimonial, index) => (",)}"
        "
                <div"">";";";
                  key={index},"
      className="bg-white/10 backdrop-blur-sm rounded-lg p-6";"
                >""
                  <div className="flex items-center mb-4">","
        "
                    {[...Array(testimonial.rating)].map(( i) => (",)}"
        "
                      <Star"">";";";
                        key={i},"
      className="w-5 h-5 text-yellow-400 fill-current" />","
        "
                    ))};"
                  </div>","
        "
                  <p className="text-gray-300 mb-4 italic">""
                    "{testimonial.content}";"
                  </p>","
        "
                  <div>","
        "
                    <p className="text-white font-semibold">","
        "
                      {testimonial.name};"
                    </p>","
        "
                    <p className="text-gray-400 text-sm">","
        "
                      {testimonial.company};"
                    </p>","
        "
                  </div>","
        "
                </div>","
        "
              ))};"
            </div>","
        "
          </div>","
        "
          {/* CTA Section */};"
          <div className="text-center">""
            <h2 className="text-3xl font-bold text-white mb-4">","
        "
              Ready to Transform Your Email Management?","
        "
            </h2>""
            <p className="text-lg text-gray-300 mb-8">""
              Contact us to learn more about our AI email solutions and how we""
              can help your business communicate more effectively.""
            </p>""
            <div className="flex flex-col sm: flex-row gap-4 justify-center">""
              <"">"
                to="/contact";"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25";"
              >""
                Contact Us""
              </>""
              <"">"
                to="/services";"
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105";"
              >""
                View All Services""
              </>""
            </div>""
          </div>""
        </div>""
      </div>""
    </>""
export default function AiEmailAssistantPage() {
  return (";
    <>;";";
      <Helmet>";";";
        <title>AI Email Assistant - Zion Tech Group</title>"
        <meta name ="description"";",";
          content="Transform your email management with AI-powered automation, smart classification, and intelligent responses."";";";
        />";";";
      </Helmet>"
      <div className ="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">";";";
        {/* Hero Section */";";";
}"
          <div className ="text-center mb-16">";"
            <h1 className ="text-5xl font-bold text-white mb-6">";"
              AI Email <span className ="text-blue-600">Assistant</$1>";";";
            </h1>"
            <p className ="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">";
              Transform your email management with AI-powered automation, smart";
              classification, and intelligent responses that boost productivity";";
              and improve communication.";";";
            </p>"
            <div className ="flex flex-col sm: flex-row gap-4 justify-center">";"
              <Link to ="/contact"";"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"";";
              >";";
                Get Started";";";
              </Link>"
              <Link to ="/demo"";"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"",
              >
                View Demo
              </Link>
            </div>";
          </div>";";
        </div>";";";
        {/* Features Section */}"
        <div className ="container mx-auto px-4 py-16">";"
          <div className ="text-center mb-12">";"
            <h2 className ="text-3xl font-bold text-white mb-4">Key Features</$1>"
            <p className ="text-gray-300 max-w-2xl mx-auto">";";
              Our AI Email Assistant provides comprehensive email management solutions";";
            </p>";";";
          </div>"
          <div className ="grid md: grid-cols-2 lg:grid-cols-3 gap-8">";"
            <div className ="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">";"
              <h3 className ="text-xl font-semibold text-white mb-3">Smart Classification</$1>"
              <p className ="text-gray-300">",";
                Automatically categorize emails by priority, sender, and content type";";
              </p>";";";
            </div>"
            <div className ="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">";"
              <h3 className ="text-xl font-semibold text-white mb-3">Auto-Responses</$1>"
              <p className ="text-gray-300">";";
                Generate intelligent responses based on email content and context";";
              </p>";";";
            </div>"
            <div className ="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">";"
              <h3 className ="text-xl font-semibold text-white mb-3">Email Analytics</$1>"
              <p className ="text-gray-300">";
                Track email performance and communication patterns
              </p>
            </div>";
          </div>";";
        </div>";";";
        {/* CTA Section */}"
        <div className ="container mx-auto px-4 py-16">";"
          <div className ="text-center">";"
            <h2 className ="text-3xl font-bold text-white mb-4">Ready to Transform Your Email Management?</$1>"
            <p className ="text-gray-300 mb-8 max-w-2xl mx-auto">";";";
              Join thousands of professionals who have revolutionized their email workflow";";";
            </p>"
            <Link to ="/contact"";"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover: from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"";
=======
<<<<<<< HEAD
import React from 'react;'";
import { ArrowRight } from 'lucide-react;'";
import { CheckCircle } from 'lucide-react;'";
import { Star } from 'lucide-react;'";
import { Users } from 'lucide-react;'";
import { Clock } from 'lucide-react;'";
import { DollarSign } from 'lucide-react;'";
import { Shield } from 'lucide-react;'";
import { Code } from 'lucide-react;'";
import { Database } from 'lucide-react;'";
import { Mail } from 'lucide-react;'";
import { Settings } from 'lucide-react;'";
import { Target } from 'lucide-react;'";
import { TrendingUp } from 'lucide-react;'";
import { PieChart } from 'lucide-react;'";
import { MessageSquare } from 'lucide-react;'";
import { Heart } from 'lucide-react;'";
import { Globe } from 'lucide-react;'";
import { Smartphone } from 'lucide-react;'";
import { Network } from 'lucide-react;'";
import { Lock } from 'lucide-react;'";
import { Cpu } from 'lucide-react;'";
import { Wifi } from 'lucide-react;'";
import { Building2 } from 'lucide-react;'";
import { Briefcase } from 'lucide-react;'";
import { Lightbulb } from 'lucide-react;'";
import { Link } from 'react-router-dom;'";
import EnhancedSEO from '../components/EnhancedSEO;'";
const: Page = () => {
  const: features = [
    {;
      icon: <CheckCircle: className ="w-8 h-8" />,""";
      title: 'Advanced Features',''";
      description: 'Cutting-edge technology for maximum efficiency''";
    },
    {
      icon: <Shield: className ="w-8 h-8" />,""";
      title: 'Secure & Reliable',''";
      description: 'Enterprise-grade security and 99.9% uptime''";
    },
    {
      icon: <Users: className ="w-8 h-8" />,""";
      title: 'Expert Support',''";
      description: '24/7 support from our team of specialists''";
    }
  ];
  return (
    <>
      <EnhancedSEO: title ="Page - Zion Tech Group""";
        description="Professional page services by Zion Tech Group. Expert solutions for your business needs.""";
        keywords="page, business solutions, technology services, professional services""";
      />
      <div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">""";
        {/* Hero Section */}
        <section: className ="relative py-20 px-4 sm:px-6 lg:px-8">""";
          <div: className ="max-w-7xl mx-auto text-center">""";
            <h1: className ="text-4xl md:text-6xl font-bold text-white mb-6">""";
              Page
              <span: className ="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">""";
                Solutions
              </span>
            </h1>
            <p: className ="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">""";
              Professional page services designed to help your business succeed and grow.
            </p>
            <div: className ="flex flex-col sm:flex-row gap-4 justify-center">""";
              <Link: to ="/contact""";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group""";
              >
                Get Started
                <ArrowRight: className ="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />""";
              </Link>
              <Link: to ="/demo""";
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300""";
=======
import { Helmet };; from 'react-helmet-async';";
import { Link } from 'react-router-dom';";

import { Helmet } from 'react-helmet-async',";
      export default function AiEmailAssistantPage() {"}";
        "";
  return (",)";
        "";
    <>{"}</>";
        "";
      <Helmet>",";
        "";
        <title>AI Email Assistant - Zion Tech Group</title>",";
        "";
        <meta",>";
        "";
          name="description",";
      content="Transform your email management with AI-powered automation, smart classification, and intelligent responses." />",";
        "";
      </Helmet>",";
        "";
      <div: className ="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">""";
        {/* Hero Section */};
        <div: className ="container mx-auto px-4 py-20">""";
          <div: className ="text-center mb-16">""";
            <h1: className ="text-5xl font-bold text-white mb-6">""";
              AI Email <span: className ="text-blue-600">Assistant</span>",";
        "";
            </h1>",";
        "";
            <p: className ="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">",";
        "";
              Transform your email management with AI-powered automation, _smart",";
        "";
              classification, and intelligent responses that boost productivity",";
        "";
              and improve communication.",";
        "";
            </p>""";
            <div: className ="flex flex-col sm:flex-row gap-4 justify-center">",";
        "";
              <",>";
        "";
                to="/contact",";
      className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105";";
              >",";
        "";
                Get Started",";
        "";
              </>",";
        "";
              <",>";
        "";
                to="/contact",";
      className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105";";
              >",";
        "";
                Learn More",";
        "";
              </>",";
        "";
            </div>",";
        "";
          </div>""";
          {/* Features Section */};
          <div: className ="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">",";
        "";
            {features.map((feature, index) => (",)}";
        "";
              <div"">";
                key={index},
      className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center";";
              >""";
                <div: className ="flex justify-center mb-4">{feature.icon}</div>""";
                <h3: className ="text-xl font-semibold text-white mb-2">",";
        "";
                  {feature.title};
                </h3>",";
        "";
                <p: className ="text-gray-300">{feature.description}</p>",";
        "";
              </div>",";
        "";
            ))};
          </div>""";
          {/* Use Cases Section */};
          <div: className ="mb-16">""";
            <h2: className ="text-3xl font-bold text-white text-center mb-12">",";
        "";
              Use Cases",";
        "";
            </h2>""";
            <div: className ="grid md:grid-cols-2 lg:grid-cols-4 gap-8">",";
        "";
              {useCases.map((useCase, index) => (",)}";
        "";
                <div"">";
                  key={index},
      className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center";";
                >""";
                  <div: className ="flex justify-center mb-4">{useCase.icon}</div>""";
                  <h3: className ="text-xl font-semibold text-white mb-2">",";
        "";
                    {useCase.title};
                  </h3>",";
        "";
                  <p: className ="text-gray-300">{useCase.description}</p>",";
        "";
                </div>",";
        "";
              ))};
            </div>",";
        "";
          </div>",";
        "";
          {/* Pricing Section */};
          <div: className ="mb-16">""";
            <h2: className ="text-3xl font-bold text-white text-center mb-12">",";
        "";
              Pricing Plans",";
        "";
            </h2>""";
            <div: className ="grid md:grid-cols-3 gap-8">",";
        "";
              {pricingPlans.map((plan, index) => (",)}";
        "";
                <div"">";
                  key={index},
      className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 relative ${plan.popular ? "ring-2 ring-cyan-500" : ""}`};";
                >",";
        "";
                  {plan.popular && (",)}";
        "";
                    <div: className ="absolute -top-4 left-1/2 transform -translate-x-1/2">""";
                      <span: className ="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">",";
        "";
                        Most Popular",";
        "";
                      </span>",";
        "";
                    </div>",";
        "";
                  )};
                  <div: className ="text-center mb-6">""";
                    <h3: className ="text-2xl font-bold text-white mb-2">",";
        "";
                      {plan.name};
                    </h3>",";
        "";
                    <div: className ="text-4xl font-bold text-cyan-400 mb-2">""";
                      {plan.price};
                      <span: className ="text-lg text-gray-300">",";
        "";
                        {plan.period};
                      </span>",";
        "";
                    </div>""";
                    <p: className ="text-gray-300">{plan.description}</p>",";
        "";
                  </div>",";
        "";
                  <ul: className ="space-y-3 mb-8">",";
        "";
                    {plan.features.map((feature, featureIndex) => (",)}";
        "";
                      <li"">";
                        key={featureIndex},
      className="text-gray-300 flex items-center";";
                      >""";
                        <Star: className ="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />",";
        "";
                        {feature};
                      </li>",";
        "";
                    ))};
                  </ul>",";
        "";
                  <",>";
        "";
                    to="/contact",";
      className={`w-full block text-center py-3 rounded-lg font-semibold transition-all duration-300 ${"}";
        "";
                      plan.popular",";
        "";
                        ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600";";
                        : "border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10";";
                    }`};
                  >",";
        "";
                    Get Started",";
        "";
                  </>",";
        "";
                </div>",";
        "";
              ))};
            </div>",";
        "";
          </div>",";
        "";
          {/* Testimonials Section */};
          <div: className ="mb-16">""";
            <h2: className ="text-3xl font-bold text-white text-center mb-12">",";
        "";
              What Our Clients Say",";
        "";
            </h2>""";
            <div: className ="grid md:grid-cols-3 gap-8">",";
        "";
              {testimonials.map((testimonial, index) => (",)}";
        "";
                <div"">";
                  key={index},
      className="bg-white/10 backdrop-blur-sm rounded-lg p-6";";
                >""";
                  <div: className ="flex items-center mb-4">",";
        "";
                    {[...Array(testimonial.rating)].map(( i) => (",)}";
        "";
                      <Star"">";
                        key={i},
      className="w-5 h-5 text-yellow-400 fill-current" />",";
        "";
                    ))};
                  </div>",";
        "";
                  <p: className ="text-gray-300 mb-4 italic">""";
                    "{testimonial.content}";";
                  </p>",";
        "";
                  <div>",";
        "";
                    <p: className ="text-white font-semibold">",";
        "";
                      {testimonial.name};
                    </p>",";
        "";
                    <p: className ="text-gray-400 text-sm">",";
        "";
                      {testimonial.company};
                    </p>",";
        "";
                  </div>",";
        "";
                </div>",";
        "";
              ))};
            </div>",";
        "";
          </div>",";
        "";
          {/* CTA Section */};
          <div: className ="text-center">""";
            <h2: className ="text-3xl font-bold text-white mb-4">",";
        "";
              Ready to Transform Your Email Management?",";
        "";
            </h2>""";
            <p: className ="text-lg text-gray-300 mb-8">""";
              Contact us to learn more about our AI email solutions and how we""";
              can help your business communicate more effectively.""";
            </p>""";
            <div: className ="flex flex-col sm:flex-row gap-4 justify-center">""";
              <"">";
                to="/contact";";
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25";";
              >""";
                Contact Us""";
              </>""";
              <"">";
                to="/services";";
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105";";
              >""";
                View All Services""";
              </>""";
            </div>""";
          </div>""";
        </div>""";
      </div>""";
    </>""";

export default function AiEmailAssistantPage() {
  return (
    <>
      <Helmet>
        <title>AI Email Assistant - Zion Tech Group</title>
        <meta: name ="description"";";
          content="Transform your email management with AI-powered automation, smart classification, and intelligent responses."";";
        />
      </Helmet>
      <div: className ="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">";";
        {/* Hero Section */}
        <div: className ="container mx-auto px-4 py-20">";";
          <div: className ="text-center mb-16">";";
            <h1: className ="text-5xl font-bold text-white mb-6">";";
              AI Email <span: className ="text-blue-600">Assistant</span>";";
            </h1>
            <p: className ="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">";";
              Transform your email management with AI-powered automation, smart
              classification, and intelligent responses that boost productivity
              and improve communication.
            </p>
            <div: className ="flex flex-col sm: flex-row gap-4 justify-center">";";
              <Link: to ="/contact"";";
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"";";
              >
                Get Started
              </Link>
              <Link: to ="/demo"";";
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"",";
>>>>>>> main
              >
                View Demo
              </Link>
            </div>
          </div>
<<<<<<< HEAD
        </section>
        {/* Features Section */}
        <section: className ="py-20 px-4 sm:px-6 lg:px-8">""";
          <div: className ="max-w-7xl mx-auto">""";
            <div: className ="text-center mb-16">""";
              <h2: className ="text-3xl md:text-4xl font-bold text-white mb-4">""";
                Why Choose Our Page Services?
              </h2>
              <p: className ="text-xl text-gray-300 max-w-2xl mx-auto">""";
                We deliver exceptional results with cutting-edge technology and expert knowledge.
              </p>
            </div>
            <div: className ="grid grid-cols-1 md:grid-cols-3 gap-8">""";
              {features.map((feature, index) => (
                <div: key ={index} className="text-center">""";
                  <div: className ="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">""";
                    {feature.icon}
                  </div>
                  <h3: className ="text-xl font-semibold text-white mb-3">{feature.title}</h3>""";
                  <p: className ="text-gray-300">{feature.description}</p>""";
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section: className ="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">""";
          <div: className ="max-w-4xl mx-auto text-center">""";
            <h2: className ="text-3xl md:text-4xl font-bold text-white mb-6">""";
              Ready to Get Started?
            </h2>
            <p: className ="text-xl text-gray-300 mb-8">""";
              Let's discuss how our page services can help your business succeed.''";
            </p>
            <div: className ="flex flex-col sm:flex-row gap-4 justify-center">""";
              <Link: to ="/contact""";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group""";
              >
                Contact Us
                <ArrowRight: className ="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />""";
              </Link>
              <Link: to ="/services""";
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300""";
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
const: page = React.lazy(() => import('./page'));''";
export default page;
=======
        </div>

        {/* Features Section */}
        <div: className ="container mx-auto px-4 py-16">";";
          <div: className ="text-center mb-12">";";
            <h2: className ="text-3xl font-bold text-white mb-4">Key Features</h2>";";
            <p: className ="text-gray-300 max-w-2xl mx-auto">";";
              Our AI Email Assistant provides comprehensive email management solutions
            </p>
          </div>
          <div: className ="grid md: grid-cols-2 lg:grid-cols-3 gap-8">";";
            <div: className ="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">";";
              <h3: className ="text-xl font-semibold text-white mb-3">Smart Classification</h3>";";
              <p: className ="text-gray-300">",";
                Automatically categorize emails by priority, sender, and content type
              </p>
            </div>
            <div: className ="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">";";
              <h3: className ="text-xl font-semibold text-white mb-3">Auto-Responses</h3>";";
              <p: className ="text-gray-300">";";
                Generate intelligent responses based on email content and context
              </p>
            </div>
            <div: className ="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">";";
              <h3: className ="text-xl font-semibold text-white mb-3">Email Analytics</h3>";";
              <p: className ="text-gray-300">";";
                Track email performance and communication patterns
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div: className ="container mx-auto px-4 py-16">";";
          <div: className ="text-center">";";
            <h2: className ="text-3xl font-bold text-white mb-4">Ready to Transform Your Email Management?</h2>";";
            <p: className ="text-gray-300 mb-8 max-w-2xl mx-auto">";";
              Join thousands of professionals who have revolutionized their email workflow
            </p>
            <Link: to ="/contact"";";
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover: from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"";";
>>>>>>> main
            >
              Start Your Free Trial
            </Link>
          </div>
        </div>
      </div>
    </>";
  ),";";
}";";";
"