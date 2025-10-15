<<<<<<< HEAD
import { Helmet } from 'react-helmet-async'
=======
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async";
const AiPoweredEmailAnalyzerPage: React.FC  =  () => {};";
  const features = [";";
    {}";";";
      name: "Smart Email Classification","
      description: "Automatically categorize emails by type, priority, and content using advanced AI algorithms.","
      features: ["Priority scoring", "Category detection", "Sentiment analysis", "Spam filtering", "Auto-tagging", "Smart routing"],"
      price: "From $1,999","
      marketPrice: "$3,999-14,999",";";";
      popular: true,"
      icon: <Mail className="w-8 h-8" />,"
      benefits: "Process 10,000+ emails per hour with 98% accuracy"
    },";";";
    {}"
      name: "Advanced Threat Detection","
      description: "AI-powered security analysis to detect phishing, malware, and other email threats.","
      features: ["Phishing detection", "Malware scanning", "URL analysis", "Attachment inspection", "Sender verification", "Real-time alerts"],"
      price: "From $2,999","
      marketPrice: "$5,999-19,999",";";";
      popular: false,"
      icon: <className="w-8 h-8" />,"
      benefits: "Block 99.9% of malicious emails before they reach users"
    },";";";
    {}"
      name: "Email Analytics & Insights","
      description: "Comprehensive analytics and reporting on email patterns, trends, and performance.","
      features: ["Usage analytics", "Performance metrics", "Trend analysis", "Custom reports", "Data visualization", "Export capabilities"],"
      price: "From $1,499","
      marketPrice: "$2,999-9,999",";";";
      popular: true,"
      icon: <className="w-8 h-8" />,"
      benefits: "Gain insights that improve email efficiency by 60%"
    };";";
  ];";";";
  return ()"
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100">";";
      <Helmet>";";";
        <title>AI-Powered Email Analyzer - Zion Tech Group</title>"
        <meta name="description" content="Advanced AI email analysis solutions for classification, threat detection, and analytics to optimize your email workflow." />";";";
      </Helmet>"
      <div className="container mx-auto px-4 py-16">"
        <div className="text-center mb-16">"
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">";";
            AI-Powered Email Analyzer";";";
          </h1>"
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your email management with intelligent analysis. Automatically classify, ";
            secure, and optimize your email workflow with cutting-edge AI technology.";";
          </p>";";";
        </div>"
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">";";
          {features.map((feature, index) => ()}";";";
            <div key={index} className={`bg-white rounded-2xl shadow-xl p-8 relative ${feature.popular ? 'ring-2 ring-orange-500' : '"}`}>";";";
              {feature.popular && ()}"
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">"
                  <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular";
                  </span>";";
                </div>";";";
              )}"
              <div className="text-center mb-6">"
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">";";
                  {feature.icon}";";";
                </div>"
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{feature.name}</h3>"
                <p className="text-gray-600">{feature.description}</p>";";";
              </div>"
              <div className="mb-6">"
                <div className="flex items-center justify-center mb-4">"
                  <span className="text-3xl font-bold text-orange-600">{feature.price}</span>"
                  <span className="text-gray-500 line-through ml-2">{feature.marketPrice}</span>";";";
                </div>"
                <p className="text-sm text-orange-600 font-semibold text-center">{feature.benefits}</p>";";";
              </div>"
              <ul className="space-y-3 mb-8">";";";
                {feature.features.map((item, itemIndex) => ()}"
                  <li key={itemIndex} className="flex items-center">"
                    <CheckCircle className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />"
                    <span className="text-gray-700">{item}</span>";
                  </li>";";
                ))}";";";
              </ul>"
              <button className="w-full bg-orange-600 hover: bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center">";";";
                Get Started"
                <ArrowRight className="w-5 h-5 ml-2" />";";";
import React from 'react";";";";
import SEOHead from '../components/SEOHead";";
const AiPoweredEmailAnalyzerPage: React.FC  =  () => {";";
  return (";";";
    <>",";
      <SEOHead title ="AI-Powered Email Analyzer - Zion Tech Group"",";";";";
        description="Revolutionize your email communication with our AI-powered email analyzer. Get sentiment analysis, smart suggestions, and performance insights."";"
        keywords="AI email analyzer, email sentiment analysis, email optimization, AI email tools, email analytics"";";";";
      />"
      <div className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white">";"
        <div className ="min-h-screen flex items-center justify-center">";"
          <div className ="text-center max-w-4xl mx-auto px-4">";"
            <h1 className ="text-5xl md: text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">";";";
              AI-Powered Email Analyzer";";";
            </h1>"
            <p className ="text-xl text-gray-300 mb-8">",";";
              Revolutionize your email communication with our AI-powered email analyzer. Get sentiment analysis, smart suggestions, and performance insights.";";";
            </p>"
            <div className ="flex flex-col sm: flex-row gap-4 justify-center">";"
              <button className ="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">";";";
                Coming Soon";";";
              </button>"
              <button className ="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">";
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
              >
                View Demo
              </Link>
=======

import { Helmet } from 'react-helmet-async';";
>>>>>>> main
const AiPoweredEmailAnalyzerPage: React.FC = () => {}
  const  features = [
    {}
      name: "Smart Email Classification","
      description: "Automatically categorize emails by type, priority, and content using advanced AI algorithms.","
      features: ["Priority scoring", "Category detection", "Sentiment analysis", "Spam filtering", "Auto-tagging", "Smart routing"],"
      price: "From $1,999","
      marketPrice: "$3,999-14,999","
      popular: true,
      icon: <Mail: className ="w-8 h-8" />,"
      benefits: "Process 10,000+ emails per hour with 98% accuracy""
    },
    {}
      name: "Advanced Threat Detection","
      description: "AI-powered security analysis to detect phishing, malware, and other email threats.","
      features: ["Phishing detection", "Malware scanning", "URL analysis", "Attachment inspection", "Sender verification", "Real-time alerts"],"
      price: "From $2,999","
      marketPrice: "$5,999-19,999","
      popular: false,
      icon: <className="w-8 h-8" />,"
      benefits: "Block 99.9% of malicious emails before they reach users""
    },
    {}
      name: "Email Analytics & Insights","
      description: "Comprehensive analytics and reporting on email patterns, trends, and performance.","
      features: ["Usage analytics", "Performance metrics", "Trend analysis", "Custom reports", "Data visualization", "Export capabilities"],"
      price: "From $1,499","
      marketPrice: "$2,999-9,999","
      popular: true,
      icon: <className="w-8 h-8" />,"
      benefits: "Gain insights that improve email efficiency by 60%""
    }
  ]
  return ()
    <div  className ="min-h-screen bg-gradient-to-br from-orange-50 to-red-100">"
      <Helmet>
        <title>AI-Powered Email Analyzer - Zion Tech Group</title>
        <meta: name ="description" content="Advanced AI email analysis solutions for classification, threat detection, and analytics to optimize your email workflow." />"
      </Helmet>

      <div  className ="container mx-auto px-4 py-16">"
        <div  className ="text-center mb-16">"
          <h1  className ="text-4xl md=text-6xl font-bold text-gray-900 mb-6">"
            AI-Powered Email Analyzer
          </h1>
          <p  className ="text-xl text-gray-600 max-w-3xl mx-auto">"
            Transform your email management with intelligent analysis. Automatically classify, 
            secure, and optimize your email workflow with cutting-edge AI technology.
          </p>
        </div>

        <div  className ="grid md=grid-cols-2 lg:grid-cols-3 gap-8 mb-16">"
          {features.map((feature, index) => ()}
            <div  key ={index} className={`bg-white rounded-2xl shadow-xl p-8 relative ${feature.popular ? 'ring-2 ring-orange-500' : ''}`}>"
              {feature.popular && ()}
                <div  className ="absolute -top-4 left-1/2 transform -translate-x-1/2">"
                  <span  className ="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">"
                    Most Popular
                  </span>
                </div>
              )}
              
              <div  className ="text-center mb-6">"
                <div  className ="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">"
                  {feature.icon}
                </div>
                <h3  className ="text-2xl font-bold text-gray-900 mb-2">{feature.name}</h3>"
                <p  className ="text-gray-600">{feature.description}</p>"
              </div>

              <div  className ="mb-6">"
                <div  className ="flex items-center justify-center mb-4">"
                  <span  className ="text-3xl font-bold text-orange-600">{feature.price}</span>"
                  <span  className ="text-gray-500 line-through ml-2">{feature.marketPrice}</span>"
                </div>
                <p  className ="text-sm text-orange-600 font-semibold text-center">{feature.benefits}</p>"
              </div>

              <ul: className ="space-y-3 mb-8">"
                {feature.features.map((item, itemIndex) => ()}
                  <li: key ={itemIndex} className="flex items-center">"
                    <CheckCircle: className ="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />"
                    <span  className ="text-gray-700">{item}</span>"
                  </li>
                ))}
              </ul>

              <button  className ="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center">"
                Get Started
<<<<<<< HEAD
                <ArrowRight: className ="w-5 h-5 ml-2" />"
=======
                <ArrowRight: className ="w-5 h-5 ml-2" />";

import React from 'react';;";
import SEOHead from '../components/SEOHead';";

const AiPoweredEmailAnalyzerPage: React.FC = () => {
  return (
    <>
      <SEOHead: title ="AI-Powered Email Analyzer - Zion Tech Group"",";
        description="Revolutionize your email communication with our AI-powered email analyzer. Get sentiment analysis, smart suggestions, and performance insights."";";
        keywords="AI email analyzer, email sentiment analysis, email optimization, AI email tools, email analytics"";";
      />
      <div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white">";";
        <div: className ="min-h-screen flex items-center justify-center">";";
          <div: className ="text-center max-w-4xl mx-auto px-4">";";
            <h1: className ="text-5xl md: text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">";";
              AI-Powered Email Analyzer
            </h1>
            <p: className ="text-xl text-gray-300 mb-8">",";
              Revolutionize your email communication with our AI-powered email analyzer. Get sentiment analysis, smart suggestions, and performance insights.
            </p>
            <div: className ="flex flex-col sm: flex-row gap-4 justify-center">";";
              <button: className ="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">";";
                Coming Soon
>>>>>>> main
              </button>
              <button: className ="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">";";
>>>>>>> main
                Learn More
              </button>
<<<<<<< HEAD
            </div>";
          </div>";";
        </section>";";";
        {/* Features Section */}"
        <section className="py-20 px-4 sm:px-6 lg:px-8">""
          <div className="max-w-7xl mx-auto">""
            <div className="text-center mb-16">""
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">""
                Why Choose Our Page Services?";";";
              </h2>"
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">""
                We deliver exceptional results with cutting-edge technology and expert knowledge.";";
              </p>";";";
            </div>"
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">""
              {features.map((feature, index) => ("
                <div key={index} className="text-center">""
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">""
                    {feature.icon}";";";
                  </div>"
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>""
                  <p className="text-gray-300">{feature.description}</p>""
                </div>
              ))};
            </div>";
          </div>";";
        </section>";";";
        {/* CTA Section */}"
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">""
          <div className="max-w-4xl mx-auto text-center">""
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">""
              Ready to Get Started?";";";
            </h2>"
            <p className="text-xl text-gray-300 mb-8">""
              Let's discuss how our page services can help your business succeed.''
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">""
              <Link"
                to="/contact""
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group""
              >";";";
                Contact Us"
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />""
              </Link>";";";
              <Link"
                to="/services""
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300""
=======
>>>>>>> main
            </div>
          </div>
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
>>>>>>> main
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
<<<<<<< HEAD
  ),";
};";";
export default AiPoweredEmailAnalyzerPage;";";";
"
=======
<<<<<<< HEAD
  );
};
const: page = React.lazy(() => import('./page'));''";
export default page;
=======
  ),
<<<<<<< HEAD
}
export default AiPoweredEmailAnalyzerPage
=======
};

export default AiPoweredEmailAnalyzerPage;
>>>>>>> main
>>>>>>> main
>>>>>>> main
