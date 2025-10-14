import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, PenTool, FileText, Zap, Target, CheckCircle, Users } from "lucide-react";

const AIContentWriterPage = () => {

  const features = [,

  {,

icon: <PenTool className="w-8 h-8 text-blue-500" />
  }
}
      title: 'AI-Powered Writing',
      description: 'Generate high-quality content using advanced AI that understands your brand voice and tone.',
    },
    {,

icon: <FileText className="w-8 h-8 text-green-500" />
}
      title: 'Multiple Formats',
      description: 'Create blogs, articles, social media posts, emails, and more with specialized templates.',
    },
    {,

icon: <Zap className="w-8 h-8 text-purple-500" />
}
      title: 'Instant Generation',
      description: 'Produce content in seconds, not hours. Get your ideas down quickly and efficiently.',
    },
    {,

icon: <Target className="w-8 h-8 text-orange-500" />
}
      title: 'SEO Optimized',
      description: 'Create content that ranks well with built-in SEO optimization and keyword suggestions.',
    }
  ];,

  const benefits = [,

    'Save 80% of your writing time',
    'Generate unlimited content ideas',
    'Maintain consistent brand voice',
    'Optimize for search engines',
    'Scale content production',
    'Improve content quality'];,

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
    </div>
      <Helmet>
        <title>AI Content Writer - Zion Tech Group</title>
        <meta name="description" content="Create high-quality content with our AI-powered writing assistant. Generate blogs, articles, and marketing copy effortlessly." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4"></section>
    </section>
        <div className="container mx-auto text-center"></div>
    </div>
          <h1 className="text-5xl font-bold text-white mb-6"></h1>
            AI Content Writer,
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"></p>
            Create compelling, high-quality content with our AI-powered writing assistant., 
            Generate blogs, articles, social media posts, and marketing copy in minutes.,
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
    </div>
            <Link,
              to="/contact",
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover: from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            ></Link,
>
              Start Writing,
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
            <h2 className="text-4xl font-bold text-white mb-4">Powerful Writing Features</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto"></p>
              Everything you need to create exceptional content,
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
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our AI Writer?</h2>
              <p className="text-lg text-gray-300 mb-8"></p>
                Our AI content writer understands context, maintains your brand voice, 
                and produces content that engages your audience and drives results.,
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
                <div className="text-xl text-gray-300 mb-2">Time Saved</div>
    </div>
                <div className="text-gray-400">Average writing time reduction</div>
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
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Content?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"></p>
              Start creating compelling content that engages your audience and drives business growth.,
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

export default AIContentWriterPage;,