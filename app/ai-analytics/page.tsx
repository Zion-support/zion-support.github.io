import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Brain, CheckCircle, Star, Globe, Mail, Phone, Database, Settings, Monitor, Sparkles, Lightbulb } from "lucide-react";

const AIAnalyticsPage: React.FC = () => {

  const features = [,

  {,

icon: <BarChart3 className="w-8 h-8 text-blue-500" />
  }
}
      title: 'Real-time Analytics',
      description: 'Monitor your data in real-time with advanced visualization tools and interactive dashboards.',
    },
    {,

icon: <Brain className="w-8 h-8 text-purple-500" />
}
      title: 'AI-Powered Insights',
      description: 'Get intelligent recommendations and predictions based on your data patterns and trends.',
    },
    {,

icon: <Database className="w-8 h-8 text-green-500" />
}
      title: 'Data Integration',
      description: 'Connect multiple data sources and create unified views of your business metrics.',
    },
    {,

icon: <Settings className="w-8 h-8 text-orange-500" />
}
      title: 'Custom Dashboards',
      description: 'Build personalized dashboards tailored to your specific business needs and KPIs.',
    },
    {,

icon: <Monitor className="w-8 h-8 text-red-500" />
}
      title: 'Performance Monitoring',
      description: 'Track system performance and identify bottlenecks with comprehensive monitoring tools.',
    },
    {,

icon: <Sparkles className="w-8 h-8 text-pink-500" />
}
      title: 'Predictive Analytics',
      description: 'Forecast future trends and outcomes using advanced machine learning algorithms.',
    }
  ];,

  const stats = [,

    { label: 'Data Sources Connected', value: '500+' },
    { label: 'Real-time Updates', value: '99.9%' },
    { label: 'Processing Speed', value: '< 100ms' },
    { label: 'Client Satisfaction', value: '98%' }
  ];,

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></>

      <Helmet>
        <title>AI Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered analytics solutions for data-driven business insights and real-time monitoring." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4"></section>
    </section>
        <div className="container mx-auto text-center"></div>
    </div>
          <h1 className="text-5xl font-bold text-white mb-6"></h1>
            AI-Powered Analytics Platform,
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"></p>
            Transform your data into actionable insights with our advanced AI analytics platform., 
            Get real-time monitoring, predictive analytics, and intelligent recommendations.,
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
            <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto"></p>
              Everything you need to unlock the full potential of your data,
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
      {/* CTA Section */}
      <section className="py-20 px-4"></section>
    </section>
        <div className="container mx-auto text-center"></div>
    </div>
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12"></div>
    </div>
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Data?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"></p>
              Start your journey with AI-powered analytics and unlock insights that drive business growth.,
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

export default AIAnalyticsPage;,