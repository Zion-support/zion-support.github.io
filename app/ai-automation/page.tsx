import React  from 'react';
import { Helmet  } from "react-helmet-async";
import { Link  } from "react-router-dom";
import { ArrowRight, Zap, Brain, Settings, Globe, Users, Star, Award, CheckCircle  } from "lucide-react";
const AIAutomationPage: React.FC = () => {
  return (
  return (
  const features = [
    {
      icon: <><Zap className="w-8h-8text-cyan-400" />,
      title: 'Workflow Automation',
      description: 'Automate complex business processes with intelligent workflow management.'
    
  );

  );
},
    {
      icon: <Brain className="w-8h-8text-purple-400" />,
      title: 'Intelligent Decision Making',
      description: 'AI-powered decision making based on data analysis and business rules.'
    },
    {
      icon: <Settings className="w-8h-8text-green-400" />,
      title: 'Custom Integrations',
      description: 'Seamlessly integrate with your existing systems and third-party applications.'
    },
    {icon: <Globe className="w-8h-8text-blue-400" />,
      title: 'Scalable Solutions',
      description: 'Automation solutions that grow with your business and adapt to changing needs.'
    }
  ];
  const useCases = [
    {
      title: 'Customer Service',
      description: 'Automate ticket routing, response generation, and issue resolution.',
      icon: <Users className="w-6h-6text-blue-400" /></Users>
    },
    {
      title: 'Data Processing',
      description: 'Automate data collection, validation, and analysis workflows.',
      icon: <Star className="w-6h-6text-yellow-400" /></Star>
    },
    {
      title: 'Marketing Automation',
      description: 'Automate email campaigns, lead scoring, and customer segmentation.',
      icon: <Award className="w-6h-6text-green-400" /></Award>
    },
    {title: 'Financial Operations',
      description: 'Automate invoice processing, expense management, and financial reporting.',
      icon: <CheckCircle className="w-6h-6text-red-400" /></CheckCircle>
    }
  ];
  const benefits = [
    'Reduce operational costs by up to 70%',
    'Increase productivity and efficiency',
    'Eliminate human errors in repetitive tasks',
    '24/7 automated operations',
    'Scalable and adaptable solutions',
    'ROI within 3-6 months'
  ];
  return (
    <>div className="min-h-screen bg-gradient-to-br from-gray-900via-blue-900to-purple-900" ></div>
      <Helmet /></Helmet>
        <title />AI Automation Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with AI-powered automation solutions. Reduce costs, increase efficiency, and eliminate manual processes." /></meta>
        <meta name="keywords" content="AI automation, business process automation, workflow automation, intelligent automation, RPA" /></meta>
      </Helmet>

      {/* Hero Section */}
    <>section className="relative py-20 px-4sm:px-6lg:px-8" />
        <div className="max-w-7xlmx-autotext-center" ></div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" /></h1>
            AI <span className="text-transparent bg-clip-text bg-gradient-to-rfrom-cyan-400to-purple-400" />Automation</span> Services;
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xlmx-auto" ></p>
              Transform your business operations with intelligent automation solutions that reduce costs, increase efficiency, and eliminate repetitive tasks.
          </p>
          <div className="flex flex-col sm:flex-rowgap-4justify-center" ></div>
            <Link to="/contact" className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-centergap-2" ></Link>
          Get Started;
          <ArrowRight className="w-5h-5" /></ArrowRight>
        </Link><Link to="/ai-services" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900transition-allduration-300" /></Link></>
              View All AI Services;
    <>/Link>
          </div>
      </section>

      {/* Features Section */}
    <>section className="py-20bg-white" />
        <div className="max-w-7xl mx-auto px-4sm:px-6lg:px-8" ></div><div className="text-centermb-16" ></div></>
            <h2 className="text-3 xl md:text-4xl font-boldtext-gray-900mb-4" />Automation Capabilities;
            </h2>
            <p className="text-xl text-gray-600 max-w-3xlmx-auto" ></p>
              Our AI automation solutions cover every aspect of your business operations;
    <>/p>
          </div>
          <>div className="grid md:grid-cols-2lg:grid-cols-4gap-8" ></div>
            {features.map((feature, index) => (
    <>div key="{index}" className="text-center" />

            {useCases.map((useCase, index) => (
    <>div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10transition-allduration-300" />
                <div className="flex items-centergap-3mb-4" ></div>
                  {useCase.icon}
    <>h3 className="text-lgfont-semiboldtext-white" >{useCase.title}</h3>
                </div>
                <p className="text-gray-300" ></p>
              {useCase.description}</p>
              </div>
            ))}
    <>/div>
      </section>

      {/* Benefits Section */}
    <>section className="py-20 px-4sm:px-6lg:px-8" />
        <div className="max-w-7xlmx-auto" ></div><div className="grid lg:grid-cols-2gap-12items-center" ></div></>
            <>div /></div>
              <h2 className="text-4xl font-bold text-white mb-6" />Why Choose Our AI Automation?</h2>
              <p className="text-lg text-gray-300 mb-8" ></p>
              Our AI automation solutions deliver measurable results that transform your business operations and drive growth.
              </p>
              <ul className="space-y-4" /></ul>
                {benefits.map((benefit, index) => (
                  <li key="{index}" className="flex items-centerspace-x-3" /></li>
                    <><CheckCircle className="w-6 h-6text-cyan-400flex-shrink-0" /></CheckCircle>
                    <span className="text-gray-300" />{benefit}</span>
                  </li>
                ))}
    <>/ul>
            </div><div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-2xl p-8borderborder-cyan-500/30" ></div></>
              <h3 className="text-2xl font-bold text-white mb-4" />Ready to Automate?</h3>
              <p className="text-gray-300 mb-6" ></p>
              Let our AI experts help you identify automation opportunities and implement solutions that deliver immediate value.
              </p>
              <Link to="/contact" className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 inline-flex items-centergap-2" ></Link>
          Start Your Automation Journey;
          <ArrowRight className="w-5h-5" /></ArrowRight>
        </Link>
            <>div className="relative" ></div><div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-2 xl p-8 backdrop-blur-smborderborder-white/10" ></div></>
                <>div className="text-center" ></div><div className="text-4xl font-bold text-white mb-2" />70%</div></>
                  <>div className="text-gray-300 mb-6" />Average Cost Reduction</div><div className="text-4xl font-bold text-white mb-2" />3-6</div></>
                  <>div className="text-gray-300 mb-6" />Months to ROI</div><div className="text-4xl font-bold text-white mb-2" />24/7</div></>
                  <div className="text-gray-300" />Automated Operations</div>
              </div>
              <h3 className="text-xl font-semiboldtext-gray-900mb-3" />Optimization</h3>
              <p className="text-gray-600" ></p>
              Continuously monitor and optimize automation performance;
              </p>
            </div>
        </div>
      </section>

      {/* CTA Section */}
    <>section className="py-20 px-4sm:px-6lg:px-8" />
        <div className="max-w-4xlmx-autotext-center" ></div>
          <h2 className="text-3xl font-bold text-white mb-6" /></h2>
            Transform Your Business with AI Automation;
    <>/h2>
          <p className="text-gray-300text-lgmb-8" ></p>
              Join hundreds of companies that have already revolutionized their operations with our AI automation solutions.
          </p>
          <div className="flex flex-col sm:flex-rowgap-4justify-center" ></div>
            <Link to="/contact" className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-centerjustify-centergap-2" ></Link>
          Get Started Today;
          <ArrowRight className="w-5h-5" /></ArrowRight>
        </Link><Link to="/about" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900transition-allduration-300" /></Link></>
              Learn More About Us;
    <>/Link>
          </div>
      </section>
    </div>
  );
};

export default AIAutomationPage;
    </>
          </div></div></div></div></div></div>
}))