'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
<<<<<<< HEAD
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Settings, Smartphone, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart } from 'lucide-react';

const PagePage: React.FC = () => {
=======
import { BarChart, TrendingUp, PieChart, ArrowRight, CheckCircle, Zap, Shield, Target } from 'lucide-react';

const WebDevelopmentPage: React.FC = () => {
  const features = [
    {
<<<<<<< HEAD
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'AI-powered insights to optimize your business performance.',
      benefits: ['Predictive analytics', 'Trend analysis', 'Performance metrics', 'Growth forecasting']
    },
    {
      icon: PieChart,
      title: 'Data Visualization',
      description: 'Transform complex data into clear, actionable insights.',
      benefits: ['Interactive charts', 'Custom reports', 'Data export', 'Visual storytelling']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    }
  ];

  const benefits = [
    'Increase efficiency by up to 80%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Real-time processing and analysis',
    'Seamless integration with existing systems'
  ];

>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
<<<<<<< HEAD
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Page
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover our comprehensive solutions designed to transform your business.
              </p>
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              Web Development
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
              <p className="text-xl text-gray-300">Everything you need to succeed with AI</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-cyan-400 mb-4">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
            </div>
=======
      title: 'Frontend Development',
      description: 'Modern, responsive web applications with cutting-edge technologies',
      icon: Code,
      price: '$1,200/month',
      features: ['React/Next.js', 'Vue.js/Angular', 'Responsive Design', 'PWA Development'],
      benefits: ['50% faster load times', 'Mobile-first approach', 'SEO optimized'],
      color: 'text-blue-400',},
    {title: 'Backend Development',
      description: 'Scalable server-side solutions and API development',
      icon: Database,
      price: '$1,500/month',
      features: ['Node.js/Python', 'RESTful APIs', 'Microservices', 'Database Design'],
      benefits: ['99.9% uptime', 'Scalable architecture', 'Secure APIs'],
      color: 'text-green-400',},
    {title: 'Full-Stack Development',
      description: 'Complete web solutions from frontend to backend',
      icon: Globe,
      price: '$2,200/month',
      features: ['End-to-end development', 'Cloud deployment', 'DevOps integration', 'Testing & QA'],
      benefits: ['Unified solution', 'Faster development', 'Better performance'],
      color: 'text-purple-400',},
    {title: 'E-commerce Development',
      description: 'Custom e-commerce platforms and online stores',
      icon: Smartphone,
      price: '$1,800/month',
      features: ['Custom platforms', 'Payment integration', 'Inventory management', 'Analytics'],
      benefits: ['Higher conversion rates', 'Mobile optimized', 'Secure payments'],
      color: 'text-orange-400',},
    {title: 'Maintenance & Support',
      description: 'Ongoing maintenance and support for your web applications',
      icon: Users,
      price: '$500/month',
      features: ['24/7 Support', 'Regular Updates', 'Bug Fixes', 'Performance Monitoring'],
  const technologies = [
    {name: 'React/Next.js', icon: Code, description: 'Modern frontend frameworks' ,},
    {name: 'Node.js', icon: Database, description: 'Server-side JavaScript' ,},
    {name: 'Python/Django', icon: Globe, description: 'Backend development' ,},
    {name: 'MongoDB/PostgreSQL', icon: Database, description: 'Database solutions' ,},
    {name: 'AWS/Azure', icon: Cloud, description: 'Cloud platforms' ,},
    {name: 'Docker/Kubernetes', icon: Shield, description: 'Containerization' ,}];
  const process = [
    {step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a detailed project plan',
      icon: BarChart;,},
    {step: '02',
      title: 'Design & Prototyping',
      description: 'Create wireframes and prototypes to visualize your solution',
      icon: Code;,},
    {step: '03',
      title: 'Development',
      description: 'Build your web application using modern technologies and best practices',
      icon: Globe;,},
    {step: '04',
      title: 'Testing & Launch',
      description: 'Thorough testing and deployment with ongoing support',
        title="Web Development Services - Zion Tech Group"
        description="Professional web development services including frontend, backend, full-stack, and e-commerce solutions. Modern technologies and best practices."
              >Call +1 302 464 0950</a>
              >
                Start Your Project;
              </a>
              </a>
            </div>,
          </section>,
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div></div>
        <Navigation />
        <main className="container mx-auto px-4 py-16 pt-24"></main></main>{/* Hero Section */</main>} <section className="text-center mb-16"></section></section>
            <h1 className="text-4xl md: text-5xl lg:text-6xl font-bold text-white mb-6 neon-text"></h1></h1>,</h1>
              Web Development Services;
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p></p>Build modern, scalable, and high-performance web applications with our expert development team.</p>
              From frontend to backend, we deliver solutions that drive business growth.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div></div>,</div>
              <a;
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover: scale-105 transition-all duration-300",
              ></a>
                Start Your Project;
              </a>
              <a;
                href="tel: +13024640950",
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover: bg-cyan-400 hover:text-slate-900 transition-all duration-300",
              ></a>
                Call +1 302 464 0950;
              </a>
            </div>
          </section>

            </h2>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8"></div></div>,</div>
              {webServices.map((service, index) => (
                <div key={index}className="cyber-card p-8 hover: scale-105 transition-all duration-300"></div></div>,</div>
                  <div className="flex items-center mb-6"></div></div>
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mr-4"></div></div>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
</div>
                      <h3 className="text-2xl font-bold text-white mb-2 neon-text"></h3></h3>{service.title}</h3>
                      <div className="{`font-semibold" ${service.color}`}></div></div>{service.price</div&gt;}</div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed"></p></p>{service.description</p&gt;}</p>

          <section className="py-20 px-4"></section></section>
          <div className="max-w-7xl mx-auto"></div></div>
            <div className="text-center mb-16"></div></div>
              <h2 className="text-4xl font-bold text-white mb-4"></h2></h2>Section Title</h2>
              <p className="text-xl text-gray-300"></p></p>Section description</p>
            </div>
          </div>
        </section>
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-12 text-center neon-text"></h2></h2>Our Web Development Services<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div></div>{,</div&gt;
    webServices.map((service, index) =&gt; (</div&gt;} <div key={index}className="cyber-card p-8 hover: scale-105 transition-all duration-300"></div></div></div>,
                  <div className="flex items-center mb-6"></div></div></div>
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mr-4"></div></div></div>
                      <service />
                    <div />
                      <h3 className="text-2xl font-bold text-white mb-2 neon-text"></h3></h3>{service.title}<div className="{`font-semibold" ${service.color}`}></div></div>{service.price</div&gt;}<p className="text-gray-300 mb-6 leading-relaxed"></p></p>{service.description</p&gt;}</p>
            <h2>Our Web Development Services;)</h2>
            </h2>);
);
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8"></div></div>),</div>
              {webServices.map((service, index) =&gt; (</div&gt;} <div key={index}className="cyber-card p-8 hover: scale-105 transition-all duration-300"></div></div></div>,
                  <div className="flex items-center mb-6"></div></div>,</div>
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mr-4"></div></div>,</div>
                      <service.icon className="w-8 h-8 text-white" />,
                    </div>,
                    <div>,</div>
                      <h3 className="text-2xl font-bold text-white mb-2 neon-text"></h3></h3>{service.title}</h3>
                >Call +1 302 464 0950</a>
                >
                  Start Your Project;
                </a>
              </div>
            ))}
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd
          </div>
        </section>

<<<<<<< HEAD
        {/* Content Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Coming Soon
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                This page is under development. Please check back soon for updates.
              </p>
              <button className="cyber-button">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
=======
        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our AI Solutions?</h2>
              <p className="text-xl text-gray-300">Transform your business with intelligent automation</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <Zap className="h-6 w-6 text-cyan-400" />
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Sales
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
              </button>
            </div>
          </div>
        </section>
<<<<<<< HEAD
<<<<<<< HEAD
      </div>
      
=======
      </main>

>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
      <Footer />
=======
      </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd
    </>
  );
};

<<<<<<< HEAD
<<<<<<< HEAD
export default PagePage;
=======
export default WebDevelopmentPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
=======
export default WebDevelopmentPage;
      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8"></section></section>
        <div className="max-w-4xl mx-auto text-center"></div></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2></h2>
            Start Your Web Project
          </h2>
          <p className="text-xl text-gray-300 mb-8"></p></p>
            Let us help you build the perfect website for your business.
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center mx-auto"></button>
            <ArrowRight className="w-5 h-5 mr-2" />
            Get Started
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default WebDevelopmentPage
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd
