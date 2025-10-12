import React from 'react'
import { Receipt, ArrowRight, Bot, RotateCcw, RotateCw } from 'lucide-react'
import { Link } from 'react-router-dom'
  )
}
import React  from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Brain, TrendingUp } from 'lucide-react';

const Page: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-12 h-12 text-cyan-400" />,
      title: "AI-Powered Analysis",
      description: "Advanced AI algorithms analyze your spending patterns and provide intelligent insights."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-purple-400" />,
      title: "Real-time Tracking",
      description: "Track your expenses in real-time with automatic categorization and smart notifications."
    },
    {
      icon: <Shield className="w-12 h-12 text-green-400" />,
      title: "Secure & Private",
      description: "Bank-level security ensures your financial data is protected and private."
    }
  ];

  return (
    <>
      <Helmet />
        <title />AI Expense Tracker - Zion Tech Group</title>
        <meta name="description" content="Professional AI expense tracking services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <meta name="keywords" content="AI expense tracking, financial management, Zion Tech Group" />
        <meta property="og:title" content="AI Expense Tracker - Zion Tech Group" />
        <meta property="og:description" content="Professional AI expense tracking services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-expense-tracker" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        {/* Hero Section */}
        <section className="py-20" />
          <div className="container mx-autopx-4 text-center">
            <h1 className="text-5 xl md:text-6 xl font-bold text-white mb-6" />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-texttext-transparent" />
                AI Expense Tracker
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3 xlmx-auto">Professional AI expense tracking services by Zion Tech Group. Expert solutions tailored to your business needs.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-centermb-12">
              <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-centerjustify-centergroup" >
          Get Started
                
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
              <Link to="/contact" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transformhover:scale-105" />
                Learn More
              </Link>
            </div>
        </section>

        {/* Features Section */}
        <section className="py-20" />
          <div className="containermx-autopx-4">
            <div className="text-centermb-16">
              <h2 className="text-4 xl font-bold text-white mb-6" />
                Why Choose Our AI Expense Tracker?
              </h2>
              <p className="text-xl text-gray-300 max-w-3 xlmx-auto">Our advanced AI technology helps you manage your finances more efficiently</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center hover:border-cyan-500/50 transition-allduration-300" />
                  <div className="flexjustify-centermb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semiboldtext-white mb-4" />{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-20" />
          <div className="containermx-autopx-4">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2 xlp-12 text-center">
              <h2 className="text-4 xl font-bold text-white mb-6" />
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2 xlmx-auto">Contact us to learn more about our solutions and how we can help your business.</p>
              <div className="flex flex-col sm:flex-rowgap-4 justify-center">
                <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lghover:shadow-cyan-500/25" />
                  Contact Us
                </Link>
                <Link to="/services" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transformhover:scale-105" />
                  View All Services
                </Link>
              </div>
          </div>
        </section>
      </div>
        </div>
      </div>
          </div>
        </div>
      </div>
        </div>
      </div>
          </div>
        </div>
      </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Page;