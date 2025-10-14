import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Heart, TrendingUp, MessageSquare, Zap, BarChart3, Users, CheckCircle, ArrowRight, Brain, Target, Globe, Smile, AlertCircle } from "lucide-react";

const AICustomerSentimentTrackerPage = () => {

  const features = [,

  {,

icon: <Brain className="w-8 h-8 text-cyan-400" />
  }
}
      title: "Real-time Sentiment Analysis",
      description: "Advanced AI analyzes customer feedback, reviews, and interactions in real-time to provide instant sentiment insights.",
    },
    {,

icon: <Target className="w-8 h-8 text-purple-400" />
}
      title: "Multi-channel Monitoring",
      description: "Track sentiment across all channels including social media, email, chat, reviews, and support tickets.",
    },
    {,

icon: <BarChart3 className="w-8 h-8 text-green-400" />
}
      title: "Advanced Analytics Dashboard",
      description: "Comprehensive dashboards with detailed metrics, trends, and actionable insights for data-driven decisions.",
    },
    {,

icon: <Zap className="w-8 h-8 text-yellow-400" />
}
      title: "Automated Alerts",
      description: "Get instant notifications when sentiment drops or critical issues arise, enabling proactive customer service.",
    },
    {,

icon: <Globe className="w-8 h-8 text-blue-400" />
}
      title: "Global Language Support",
      description: "Analyze sentiment in multiple languages with our advanced natural language processing capabilities.",
    },
    {,

icon: <Users className="w-8 h-8 text-pink-400" />
}
      title: "Team Collaboration",
      description: "Share insights across teams and departments to ensure everyone stays aligned on customer satisfaction goals.",
    }
  ];,

  const benefits = [,

    "Improve customer satisfaction by 40%",
    "Reduce customer churn by 25%",
    "Increase response time to issues by 60%",
    "Identify trends before they become problems",
    "Make data-driven customer service decisions",
    "Scale customer feedback analysis"];,

  const stats = [,

    { label: "Sentiment Accuracy", value: "95%" },
    { label: "Languages Supported", value: "50+" },
    { label: "Data Sources", value: "100+" },
    { label: "Response Time", value: "< 1min" }
  ];,

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></>

      <Helmet>
        <title>AI Customer Sentiment Tracker - Zion Tech Group</title>
        <meta name="description" content="Track and analyze customer sentiment in real-time with our AI-powered platform. Improve customer satisfaction and reduce churn." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4"></section>
    </section>
        <div className="container mx-auto text-center"></div>
    </div>
          <h1 className="text-5xl font-bold text-white mb-6"></h1>
            AI Customer Sentiment Tracker,
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"></p>
            Monitor and analyze customer sentiment across all channels in real-time., 
            Get actionable insights to improve customer satisfaction and reduce churn.,
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
    </div>
            <Link,
              to="/contact",
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover: from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            ></Link,
>
              Get Started,
              <ArrowRight className="ml-2 w-5 h-5" /></ArrowRight>
            </Link>
            <Link,
              to="/demo",
              className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover: bg-purple-400 hover:text-white transition-all duration-300"
            ></Link,
>
              View Demo,
            </Link>
          </div>
    </div>
        </div>
    </div>
      </section>

    </section>
      {/* Stats Section */}
      <section className="py-16 px-4"></section>
    </section>
        <div className="container mx-auto"></div>
    </div>
          <div className="grid grid-cols-2 md: grid-cols-4 gap-8"></div>
    </div>
            {stats.map((stat, index) => (

              <div key={index} className="text-center"></div>
    </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
    </div>
                <div className="text-gray-400">{stat.label}</div>
    </div>
              </div>
    </div>
            ))}
          </div>
    </div>
        </div>
    </div>
      </section>

    </section>
      {/* Features Section */}
      <section className="py-20 px-4"></section>
    </section>
        <div className="container mx-auto"></div>
    </div>
          <div className="text-center mb-16"></div>
    </div>
            <h2 className="text-4xl font-bold text-white mb-4">Powerful Sentiment Analysis</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto"></p>
              Everything you need to understand and improve customer sentiment,
            </p>
          </div>
    </div>
          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8"></div>
    </div>
            {features.map((feature, index) => (

              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 hover: bg-slate-800/70 transition-all duration-300"></div>
    </div>
                <div className="mb-6">{feature.icon}</div>
    </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
    </div>
            ))}
          </div>
    </div>
        </div>
    </div>
      </section>

    </section>
      {/* Benefits Section */}
      <section className="py-20 px-4"></section>
    </section>
        <div className="container mx-auto"></div>
    </div>
          <div className="grid lg: grid-cols-2 gap-12 items-center"></div>
    </div>
            <div>
    </div>
              <h2 className="text-4xl font-bold text-white mb-6">Why Track Customer Sentiment?</h2>
              <p className="text-lg text-gray-300 mb-8"></p>
                Understanding customer sentiment is crucial for business success. Our AI-powered platform, 
                helps you stay ahead of customer needs and maintain high satisfaction levels.,
              </p>
              <div className="space-y-4"></div>
    </div>
                {benefits.map((benefit, index) => (

                  <div key={index} className="flex items-center text-purple-400"></div>
    </div>
                    <CheckCircle className="w-6 h-6 mr-3" /></CheckCircle>
                    <span className="font-semibold">{benefit}</span>
                  </div>
    </div>
                ))}
              </div>
    </div>
            </div>
    </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8"></div>
    </div>
              <div className="text-center"></div>
    </div>
                <div className="text-6xl font-bold text-white mb-4">40%</div>
    </div>
                <div className="text-xl text-gray-300 mb-2">Improvement in Satisfaction</div>
    </div>
                <div className="text-gray-400">Average across all clients</div>
    </div>
              </div>
    </div>
            </div>
    </div>
          </div>
    </div>
        </div>
    </div>
      </section>

    </section>
      {/* CTA Section */}
      <section className="py-20 px-4"></section>
    </section>
        <div className="container mx-auto text-center"></div>
    </div>
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12"></div>
    </div>
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Track Customer Sentiment?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"></p>
              Start monitoring customer sentiment today and transform your customer experience.,
            </p>
            <Link,
              to="/contact",
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover: from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            ></Link,
>
              Get Started Today,
              <ArrowRight className="ml-2 w-5 h-5" /></ArrowRight>
            </Link>
          </div>
    </div>
        </div>
    </div>
      </section>
    </section>
    </div>
    </div>
  );,
};,

export default AICustomerSentimentTrackerPage;,