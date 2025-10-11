'use client';
import React from 'react';
import { CheckCircle } from 'lucide-react';

<<<<<<< HEAD
const AiAnalyticsPage: React.FC = () => 
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3']} ,
    
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']} ,
    
      benefits: ['Predictive analytics', 'Trend analysis', 'Performance metrics', 'Growth forecasting']} ,
    
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']} ]
  const benefits = [
    'Increase efficiency by up to 80%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Real-time processing and analysis',
    'Seamless integration with existing systems'
=======
export default function PagePage() {
  const features = [
    {
      title: 'Expert Solutions',
      description: 'Professional page services delivered by experienced professionals.',
      benefits: ['Quality Assurance', 'Fast Delivery', '24/7 Support', 'Custom Solutions']
    },
    {
      title: 'Advanced Technology',
      description: 'Cutting-edge tools and technologies to deliver superior results.',
      benefits: ['Latest Tools', 'Modern Methods', 'Scalable Solutions', 'Future-Ready']
    },
    {
      title: 'Proven Results',
      description: 'Track record of successful projects and satisfied clients.',
      benefits: ['High Success Rate', 'Client Satisfaction', 'Ongoing Support', 'Continuous Improvement']
    }
>>>>>>> cursor/fix-errors-and-merge-to-main-dc8d
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Page
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional page services to help your business succeed and grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us today to learn more about our page services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Contact Us
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
<<<<<<< HEAD

      <Footer />
    </>

      <Footer />
    </>

      <Footer />
    </>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Analytics Features</h2>
              <p className="text-xl text-gray-300">Powerful tools for data analysis and insights</p>

      <Footer />
    </>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-cyan-400 mb-4">
                    <feature.icon className="h-8 w-8" />

      <Footer />
    </>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {benefit}
                    ))}

      <Footer />
    </>
              ))}

      <Footer />
    </>

      <Footer />
    </>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our AI Solutions?</h2>
              <p className="text-xl text-gray-300">Transform your business with intelligent automation</p>

      <Footer />
    </>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3">
                    <span className="text-lg font-medium text-gray-900">
</div>
      <Footer />
    </>
                  <p className="text-gray-300">{benefit}</p>

      <Footer />
    </>
              ))}

      <Footer />
    </>

      <Footer />
    </>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Contact us today to learn how our solutions can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Contact Us
              </button>
              <button className=">
    ,>
    r: bg-blue-600 hove, r:text-white transition-colors">
                Schedule Demo
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-dc8d
            </div>
          </div>
        </div>
      </main>
    </div>
  );
<<<<<<< HEAD
};

export default AiAnalyticsPage;
</Footer>
</Footer>
</Footer>
</Footer>
</div>
</section>
</Footer>
</Footer>
</Footer>
</p>
</Footer>
</span>
</CheckCircle>
</div>
</div>
</div>
</Footer>
</p>
</h2>
</div>
</div>
</section>
</Footer>
</Footer>
</Footer>
</CheckCircle>
</li>
</ul>
</p>
</h3>
</Footer>
</feature>
</div>
</div>
</div>
</Footer>
</p>
</h2>
</div>
</div>
</section>
</Footer>
</Footer>
</Footer>
</span>
</h1>
</div>
</div>
</section>
</div>
</Navigation>
</title>
</Helmet>
</div>
</Navigation>
</title>
</Helmet>
</button>
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-dc8d
