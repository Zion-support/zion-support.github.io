<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
const AiPoweredEmailAnalyzerPage: React.FC = () => {}
  const features = [
    {}
      name: "Smart Email Classification",
      description: "Automatically categorize emails by type, priority, and content using advanced AI algorithms.",
      features: ["Priority scoring", "Category detection", "Sentiment analysis", "Spam filtering", "Auto-tagging", "Smart routing"],
      price: "From $1,999",
      marketPrice: "$3,999-14,999",
      popular: true,
      icon: <Mail className="w-8 h-8" />,
      benefits: "Process 10,000+ emails per hour with 98% accuracy"
    },
    {}
      name: "Advanced Threat Detection",
      description: "AI-powered security analysis to detect phishing, malware, and other email threats.",
      features: ["Phishing detection", "Malware scanning", "URL analysis", "Attachment inspection", "Sender verification", "Real-time alerts"],
      price: "From $2,999",
      marketPrice: "$5,999-19,999",
      popular: false,
      icon: <className="w-8 h-8" />,
      benefits: "Block 99.9% of malicious emails before they reach users"
    },
    {}
      name: "Email Analytics & Insights",
      description: "Comprehensive analytics and reporting on email patterns, trends, and performance.",
      features: ["Usage analytics", "Performance metrics", "Trend analysis", "Custom reports", "Data visualization", "Export capabilities"],
      price: "From $1,499",
      marketPrice: "$2,999-9,999",
      popular: true,
      icon: <className="w-8 h-8" />,
      benefits: "Gain insights that improve email efficiency by 60%"
    }
  ];

  return ()
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100">
      <Helmet>
        <title>AI-Powered Email Analyzer - Zion Tech Group</title>
        <meta name="description" content="Advanced AI email analysis solutions for classification, threat detection, and analytics to optimize your email workflow." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI-Powered Email Analyzer
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your email management with intelligent analysis. Automatically classify, 
            secure, and optimize your email workflow with cutting-edge AI technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => ()}
            <div key={index} className={`bg-white rounded-2xl shadow-xl p-8 relative ${feature.popular ? 'ring-2 ring-orange-500' : ''}`}>
              {feature.popular && ()}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{feature.name}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-3xl font-bold text-orange-600">{feature.price}</span>
                  <span className="text-gray-500 line-through ml-2">{feature.marketPrice}</span>
                </div>
                <p className="text-sm text-orange-600 font-semibold text-center">{feature.benefits}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {feature.features.map((item, itemIndex) => ()}
                  <li key={itemIndex} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />

=======
import React from 'react';;
import SEOHead from '../components/SEOHead';

const AiPoweredEmailAnalyzerPage: React.FC = () => {
  return (
    <>
      <SEOHead title ="AI-Powered Email Analyzer - Zion Tech Group"",
        description="Revolutionize your email communication with our AI-powered email analyzer. Get sentiment analysis, smart suggestions, and performance insights."";
        keywords="AI email analyzer, email sentiment analysis, email optimization, AI email tools, email analytics"";
      />
      <div className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white">";
        <div className ="min-h-screen flex items-center justify-center">";
          <div className ="text-center max-w-4xl mx-auto px-4">";
            <h1 className ="text-5xl md: text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">";
              AI-Powered Email Analyzer
            </h1>
            <p className ="text-xl text-gray-300 mb-8">",
              Revolutionize your email communication with our AI-powered email analyzer. Get sentiment analysis, smart suggestions, and performance insights.
            </p>
            <div className ="flex flex-col sm: flex-row gap-4 justify-center">";
              <button className ="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">";
                Coming Soon
              </button>
              <button className ="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">";
                Learn More
>>>>>>> main
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  ),
};

export default AiPoweredEmailAnalyzerPage;