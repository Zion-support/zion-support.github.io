import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD

=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CompliancePage() {
=======
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
export default PageFixedPage;
'use client';
const PageFixedPage: React.FC = () => {
    const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Advanced AI algorithms provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis'],
  },
    {
    icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics'],
  },
    {
    icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics'],
  },
    {
    icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization'],
  }
    ]
return (
    <div>Content</div>
  );
    <></>
      <Helmet  > </Helmet><title>Page Fixed - Zion Tech Group</title>
        <meta /></meta>
      </Helmet>
      <Navigation /></Navigation>
      <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        {/* Hero Section */}
        <section className="py-20px-4"  > </section><div className="</div><divclassName="text-center mb-16"  > </div><h2 className="text-4xl font-bold text-white mb-4"  >Section Title</h2>
              <p className="text-xltext-gray-300">Section description</p>
            </div>
        </section>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="absoluteinset-0bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)]animate-pulse" style="{{" animationDelay: '1 s' }}  /></div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>;
            <h1 />Page Fixed;
            </h1>
            <p></p>
              Advanced page fixed solutions powered by AI technology.
            </p>
            <div className = "flexflex-col sm: flex-rowgap-4 justify-center" /  /></div>
              <button /></button>;
                Get Started;
              </button>
              <button /></button>
                Learn More,
              </button>
            </div>
        </section>
        <section className = "w-5h-5ml-2" /></section>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="absoluteinset-0bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)]animate-pulse" style="{{" animationDelay: '1 s' }}  /></div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>;
            <h1 className="w-5h-5ml-2" />Page Fixed;
            <p className = "w-5h-5ml-2" /></p>
              Advanced page fixed solutions powered by AI technology.
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>;
              <button className="w-5h-5ml-2" />Get Started;
              <button className="w-5h-5ml-2" />Learn More;
        {/* Features Section */}
        <section className = "py-20px-4"  > </section><div className="</div><divclassName="text-center mb-16"  > </div><h2 className="text-4xl font-bold text-white mb-4"  >Section Title</h2>
              <p className="text-xltext-gray-300">Section description</p>
            </div>
        </section>
          <div className="max-w-7xlmx-auto" /  /></div>
            <div className="text-centermb-16" /  /></div>
              <h2 /></h2>;
                Key Features;
              </h2>
              <p></p>
                Powerful AI technology that drives results;
              </p>
            </div>
            <div className = "min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5backdrop-blur-sm rounded-2 xl p-8 hover:bg-white/10 transition-all duration-300group" /></div>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                    <feature /></feature>
                  <h3 className="text-xlfont-bold text-white mb-4"  >{feature.title}</h3>
                  <p className="text-gray-300mb-4">{feature.description}</p>
                  {;
    feature.benefits && (;
                    <ul />{feature.benefits.map((benefit, idx) => (
  }
                        </ul><li  > </li><CheckCircle /></CheckCircle>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
        </section>
          <div className = "min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>;
              <h2 className="w-5h-5ml-2" />Key Features;
              <p className="text-xltext-gray-300 max-w-3xl mx-auto">Powerful AI technology that drives results;
            <div className = "min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5backdrop-blur-sm rounded-2 xl p-8 hover:bg-white/10 transition-all duration-300group" /></div>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                    <feature.icon className="w-8 h-8text-white"  /></feature>
                  <h3 className="w-5h-5ml-2" />{feature.title}
                  <p className="text-gray-300mb-4">{feature.description}
                  {feature.benefits && (
                    <ul className="w-5h-5ml-2" /></ul>
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-centertext-sm text-gray-400" /></li>
                          <CheckCircle className="w-5h-5ml-2" /></CheckCircle>
                          {benefit}
                      ))}
                  )}
              ))}
        {/* CTA Section */}
        <section className="py-20px-4"  > </section><div className="</div><divclassName="text-center mb-16"  > </div><h2 className="text-4xl font-bold text-white mb-4"  >Section Title</h2>
              <p className="text-xltext-gray-300">Section description</p>
            </div>
        </section>
          <div className="max-w-4xlmx-auto text-center" /  /></div>
            <div className="bg-white/5backdrop-blur-sm rounded-3xlp-12" /  /></div>
              <h2 /></h2>
                Ready to Get Started?
              </h2>
              <p></p>
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flexflex-col sm: flex-rowgap-4 justify-center" /  /></div>
                <button /></button>;
                  Contact Us;
                </button>
                <button /></button>
                  Learn More;
                </button>
              </div>
          </div>
        </section>
      </div>
      <Footer />    </Footer>
</>
  ),
};
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
export default function PageFixedPage() {
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
  return (
    <div>Content</div>
  );
    <div>Component content</div>
  );
}
  return (
    <div>Content</div>
  );
    <>
<<<<<<< HEAD
      <Helmet>
        <title>Compliance - Zion Tech Group</title>
        <meta name="description" content="Professional compliance services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Compliance</h1>
          <p className="text-lg text-gray-300 mb-8">Professional compliance services coming soon.</p>
          <Link
=======
      <Helmet >
        <title>Fixed - Zion Tech Group</title>
        <meta name = "description" content="Professional fixed by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Fixed</h1>
          <p className="text-lg text-gray-300 mb-8">Professional fixed coming soon.</p>
          <Link >
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>;
  );
<<<<<<< HEAD
}
>>>>>>> cursor/fix-errors-and-merge-to-main-d941
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
