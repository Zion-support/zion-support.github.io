import React from 'react';,
import { Helmet } from 'react-helmet-async';,
import { Link } from 'react-router-dom';,
import { ArrowRight, MessageCircle, Bot, Zap, Settings, Users, CheckCircle } from 'lucide-react';,

export default function AiChatbotBuilder() {

  const features = [,

  {,

icon: <Bot className="w-8 h-8 text-blue-500" />
  }
}
      title: 'No-Code Builder',
      description: 'Create intelligent chatbots without any coding knowledge using our drag-and-drop interface.',
    },
    {,

icon: <MessageCircle className="w-8 h-8 text-green-500" />
}
      title: 'Natural Conversations',
      description: 'Build chatbots that understand context and engage in natural, human-like conversations.',
    },
    {,

icon: <Zap className="w-8 h-8 text-purple-500" />
}
      title: 'Instant Deployment',
      description: 'Deploy your chatbot across multiple channels instantly with one-click integration.',
    },
    {,

icon: <Settings className="w-8 h-8 text-orange-500" />
}
      title: 'Advanced Analytics',
      description: 'Track performance, analyze conversations, and optimize your chatbot with detailed insights.',
    };];,

  const benefits = [,

    'Reduce customer support costs by 60%',
    'Provide 24/7 customer assistance',
    'Handle multiple conversations simultaneously',
    'Learn and improve from every interaction',
    'Integrate with your existing systems',
    'Scale without additional staff'];,

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
    </div>
      <Helmet>
        <title>AI Chatbot Builder - Zion Tech Group</title>
        <meta name="description" content="Build intelligent chatbots without coding. Create, deploy, and manage AI-powered customer service solutions." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4"></section>
    </section>
        <div className="container mx-auto text-center"></div>
    </div>
          <h1 className="text-5xl font-bold text-white mb-6"></h1>
            AI Chatbot Builder,
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"></p>
            Create intelligent, conversational AI chatbots without any coding., 
            Build, deploy, and manage customer service solutions that work 24/7.,
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
    </div>
            <Link,
              to="/contact",
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover: from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            ></Link,
>
              Start Building,
              <ArrowRight className="ml-2 w-5 h-5" /></ArrowRight>
            </Link>
            <Link,
              to="/demo",
              className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover: bg-purple-400 hover:text-white transition-all duration-300"
            ></Link,
>
              Try Demo,
            </Link>
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
              Everything you need to build and deploy intelligent chatbots,
            </p>
          </div>
    </div>
          <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8"></div>
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
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Chatbot Builder?</h2>
              <p className="text-lg text-gray-300 mb-8"></p>
                Our platform makes it easy to create sophisticated chatbots that understand your business, 
                and provide exceptional customer experiences.,
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
                <div className="text-6xl font-bold text-white mb-4">60%</div>
    </div>
                <div className="text-xl text-gray-300 mb-2">Cost Reduction</div>
    </div>
                <div className="text-gray-400">Average customer support savings</div>
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
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Your Chatbot?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"></p>
              Start creating intelligent chatbots that will transform your customer service experience.,
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
}