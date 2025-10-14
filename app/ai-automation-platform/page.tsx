import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Right, Circle, Workflow, Brain, Settings, Zap, Play, ArrowRight, CheckCircle } from "lucide-react";

const AIAutomationPlatform = () => {const features = [,

  {,

title: "Workflow Automation"}
}
      description: "Automate complex business processes with AI-powered workflows",
      icon: <Workflow className="w-6 h-6" />
      color: "from-blue-500 to-cyan-500",
    },
    {,

title: "Smart Decision Making"}
      description: "AI-driven decision making for automated business processes",
      icon: <Brain className="w-6 h-6" />
      color: "from-green-500 to-emerald-500",
    },
    {,

title: "Process Optimization"}
      description: "Continuously optimize processes using machine learning",
      icon: <Settings className="w-6 h-6" />
      color: "from-purple-500 to-pink-500",
    },
    {,

title: "Integration Hub"}
      description: "Connect all your tools and systems seamlessly",
      icon: <Zap className="w-6 h-6" />
      color: "from-orange-500 to-red-500",
    }
  ];,

  const benefits = [,

    "Reduce manual work by up to 80%",
    "Improve process efficiency by 300%",
    "Eliminate human errors completely",
    "Scale operations without additional staff",
    "24/7 automated monitoring and alerts",
    "Real-time process optimization"];,

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
    </div>
      <Helmet>
        <title>AI Automation Platform - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our AI-powered automation platform. Streamline workflows, reduce costs, and boost efficiency." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4"></section>
    </section>
        <div className="container mx-auto text-center"></div>
    </div>
          <h1 className="text-5xl font-bold text-white mb-6"></h1>
            AI Automation Platform,
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"></p>
            Transform your business operations with intelligent automation., 
            Reduce costs, eliminate errors, and scale efficiently with our AI-powered platform.,
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
              <Play className="mr-2 w-5 h-5" /></Play>
              View Demo,
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
            <h2 className="text-4xl font-bold text-white mb-4">Powerful Automation Features</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto"></p>
              Everything you need to automate and optimize your business processes,
            </p>
          </div>
    </div>
          <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8"></div>
    </div>
            {features.map((feature, index) => (

              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 hover: bg-slate-800/70 transition-all duration-300"></div>
    </div>
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-6`}></div>
    </div>
                  <div className="text-white">{feature.icon}</div>
    </div>
                </div>
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
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Platform?</h2>
              <p className="text-lg text-gray-300 mb-8"></p>
                Our AI automation platform delivers measurable results that transform your business operations., 
                See the difference automation can make in your organization.,
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
                <div className="text-6xl font-bold text-white mb-4">80%</div>
    </div>
                <div className="text-xl text-gray-300 mb-2">Reduction in Manual Work</div>
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
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Automate Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"></p>
              Join hundreds of companies already using our platform to streamline operations and boost productivity.,
            </p>
            <Link,
              to="/contact",
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover: from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            ></Link,
>
              Start Your Automation Journey,
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

export default AIAutomationPlatform;,