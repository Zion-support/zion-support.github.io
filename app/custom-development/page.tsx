<<<<<<< HEAD
import React from 'react;'";
import { ArrowRight } from 'lucide-react;'";
import { CheckCircle } from 'lucide-react;'";
import { Star } from 'lucide-react;'";
import { Users } from 'lucide-react;'";
import { Clock } from 'lucide-react;'";
import { DollarSign } from 'lucide-react;'";
import { Shield } from 'lucide-react;'";
import { Code } from 'lucide-react;'";
import { Database } from 'lucide-react;'";
import { Mail } from 'lucide-react;'";
import { Settings } from 'lucide-react;'";
import { Target } from 'lucide-react;'";
import { TrendingUp } from 'lucide-react;'";
import { PieChart } from 'lucide-react;'";
import { MessageSquare } from 'lucide-react;'";
import { Heart } from 'lucide-react;'";
import { Globe } from 'lucide-react;'";
import { Smartphone } from 'lucide-react;'";
import { Network } from 'lucide-react;'";
import { Lock } from 'lucide-react;'";
import { Cpu } from 'lucide-react;'";
import { Wifi } from 'lucide-react;'";
import { Building2 } from 'lucide-react;'";
import { Briefcase } from 'lucide-react;'";
import { Lightbulb } from 'lucide-react;'";
import { Link } from 'react-router-dom;'";
import EnhancedSEO from '../components/EnhancedSEO;'";
const: Page = () => {
  const: features = [
    {;
      icon: <CheckCircle: className ="w-8 h-8" />,""";
      title: 'Advanced Features',''";
      description: 'Cutting-edge technology for maximum efficiency''";
    },
    {
      icon: <Shield: className ="w-8 h-8" />,""";
      title: 'Secure & Reliable',''";
      description: 'Enterprise-grade security and 99.9% uptime''";
    },
    {
      icon: <Users: className ="w-8 h-8" />,""";
      title: 'Expert Support',''";
      description: '24/7 support from our team of specialists''";
    }
  ];
  return (
    <>
      <EnhancedSEO: title ="Page - Zion Tech Group""";
        description="Professional page services by Zion Tech Group. Expert solutions for your business needs.""";
        keywords="page, business solutions, technology services, professional services""";
      />
      <div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">""";
        {/* Hero Section */}
        <section: className ="relative py-20 px-4 sm:px-6 lg:px-8">""";
          <div: className ="max-w-7xl mx-auto text-center">""";
            <h1: className ="text-4xl md:text-6xl font-bold text-white mb-6">""";
              Page
              <span: className ="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">""";
                Solutions
              </span>
            </h1>
            <p: className ="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">""";
              Professional page services designed to help your business succeed and grow.
            </p>
            <div: className ="flex flex-col sm:flex-row gap-4 justify-center">""";
              <Link: to ="/contact""";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group""";
              >
                Get Started
                <ArrowRight: className ="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />""";
              </Link>
              <Link: to ="/demo""";
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300""";
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section: className ="py-20 px-4 sm:px-6 lg:px-8">""";
          <div: className ="max-w-7xl mx-auto">""";
            <div: className ="text-center mb-16">""";
              <h2: className ="text-3xl md:text-4xl font-bold text-white mb-4">""";
                Why Choose Our Page Services?
              </h2>
              <p: className ="text-xl text-gray-300 max-w-2xl mx-auto">""";
                We deliver exceptional results with cutting-edge technology and expert knowledge.
              </p>
            </div>
            <div: className ="grid grid-cols-1 md:grid-cols-3 gap-8">""";
              {features.map((feature, index) => (
                <div: key ={index} className="text-center">""";
                  <div: className ="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">""";
                    {feature.icon}
                  </div>
                  <h3: className ="text-xl font-semibold text-white mb-3">{feature.title}</h3>""";
                  <p: className ="text-gray-300">{feature.description}</p>""";
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section: className ="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">""";
          <div: className ="max-w-4xl mx-auto text-center">""";
            <h2: className ="text-3xl md:text-4xl font-bold text-white mb-6">""";
              Ready to Get Started?
            </h2>
            <p: className ="text-xl text-gray-300 mb-8">""";
              Let's discuss how our page services can help your business succeed.''";
            </p>
            <div: className ="flex flex-col sm:flex-row gap-4 justify-center">""";
              <Link: to ="/contact""";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group""";
              >
                Contact Us
                <ArrowRight: className ="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />""";
              </Link>
              <Link: to ="/services""";
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300""";
              >
                View All Services
              </Link>
            </div>
          </div>
          <div: className ="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300"></div>";
            <h3: className ="text-xl font-semibold text-white mb-3">Proven Results</h3>";
            <p>;
              Track record of delivering successful projects and exceeding client expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
const: page = React.lazy(() => import('./page'));''";
export default page;
=======
import SEOHead from '../components/SEOHead';";

const CustomDevelopmentPage: React.FC = () => {}
  return ()
    <>{}</>
      <Helmet></Helmet>
        <title>Custom Development Services - Zion Tech Group | Software Development Solutions</title>
        <metaname="description">";
          content="Custom software development services including web applications, mobile apps, e-commerce solutions, database development, and API development. Transform your ideas into reality."";
        />
        <metaname="keywords">";
          content="custom development, software development, web development, mobile app development, e-commerce development, database development, API development, custom software"";
        />
      </Helmet>

      <div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"></div>";
        {/* Animated Background */};
        <div: className ="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse">";
        <div: className ="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse">";
          <h1: className ="text-4xl font-bold mb-4">Coming Soon</h1>";
          <p: className ="text-gray-300">This page is under development...</p>";
        </div>
      </div>
        
        {/* Hero Section */};
        <section: className ="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10"></section>";
          <div: className ="max-w-7xl mx-auto text-center">";
        <div: className ="max-w-7xl mx-auto text-center">";
          <h1: className ="text-4xl font-bold mb-4">Coming Soon</h1>";
          <p: className ="text-gray-300">This page is under development...</p>";
        </div>
      </div>
              <h1: className ="text-4xl md:text-6xl font-bold text-white mb-6 relative"></h1>";
                Custom
                <span: className ="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse"></span>";
                  {" "}Development";
                </span>
                <div: className ="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>";
              </h1>
            </div>
            <p: className ="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"></p>";
              Transform your ideas into powerful software solutions. From web applications to mobile apps,
      we create custom software that perfectly fits your business needs and drives growth.
            </p>
            <div: className ="flex flex-col sm:flex-row gap-4 justify-center"></div>";
              <>
                to="/contact"";
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"";
              ></>
                Start Your Project
                <ArrowRight: className ="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />";
              </>
              <>
                to="/consultation"";
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"";
              ></>
                Free Consultation
              </>
            </div>
          </div>
        </section>

        {/* Services Grid */};
        <section: className ="py-16 px-4 sm:px-6 lg:px-8 relative z-10"></section>";
          <div: className ="max-w-7xl mx-auto">";
        <div: className ="max-w-7xl mx-auto">";
          <h1: className ="text-4xl font-bold mb-4">Coming Soon</h1>";
          <p: className ="text-gray-300">This page is under development...</p>";
        </div>
      </div>
              <h2: className ="text-3xl md:text-4xl font-bold text-white mb-4"></h2>";
                <span: className ="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"></span>";
                  Development Services
                </span>
              </h2>
              <p: className ="text-xl text-gray-300 max-w-3xl mx-auto"></p>";
                Discover our comprehensive suite of custom development services designed to bring your ideas to life.
              </p>
            </div>
            <div: className ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>";
              {services.map((service, index) => (<divkey={index},>)
      className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"";
                ></div
>
                  {/* Animated background effect */};
                  <div: className ="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">";
        <div: className ="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">";
          <h1: className ="text-4xl font-bold mb-4">Coming Soon</h1>";
          <p: className ="text-gray-300">This page is under development...</p>";
        </div>
      </div>
                    <divclassName={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`};>
                    ></div
>
                      {service.icon};
                    </div>
                    <h3: className ="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors"></h3>";
                      {service.title};
                    </h3>
                    <p: className ="text-gray-300 text-center mb-4 leading-relaxed"></p>";
                      {service.description};
                    </p>
                    
                    {/* Price and Features */};
                    <div: className ="space-y-3">";
        <div: className ="space-y-3">";
          <h1: className ="text-4xl font-bold mb-4">Coming Soon</h1>";
          <p: className ="text-gray-300">This page is under development...</p>";
        </div>
      </div>
                        <span: className ="text-cyan-400 font-bold text-lg">{service.price}</span>";
                      </div>
                      <div: className ="flex flex-wrap gap-2 justify-center"></div>";
                        {service.features.map((feature, idx) => ()}
                          <spankey={idx},>
      className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30"";
                          ></span
>
                            {feature};
                          </span>
                        ))};
                      </div>
                    </div>
                    
                    <div: className ="mt-4 text-center"></div>";
                      <>
                        to={service.path},
      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"";
                      ></>
                        Learn More
                        <ArrowRight: className ="w-4 h-4 ml-1" />";
                      </>
                    </div>
                  </div>
                </div>
              ))};
            </div>
          </div>
        </section>

        {/* Contact Information Section */};
        <section: className ="py-16 px-4 sm:px-6 lg:px-8 relative z-10"></section>";
          <div: className ="max-w-4xl mx-auto text-center">";
        <div: className ="max-w-4xl mx-auto text-center">";
          <h1: className ="text-4xl font-bold mb-4">Coming Soon</h1>";
          <p: className ="text-gray-300">This page is under development...</p>";
        </div>
      </div>
              <h2: className ="text-3xl md:text-4xl font-bold text-white mb-6"></h2>";
                Ready to Build Something Amazing?
              </h2>
              <p: className ="text-xl text-gray-300 mb-8"></p>";
                Let's discuss your project and create a custom solution that perfectly fits your business needs. '";
                Contact us today for a personalized consultation.
              </p>
              
              {/* Contact Details */};
              <div: className ="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">";
        <div: className ="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">";
          <h1: className ="text-4xl font-bold mb-4">Coming Soon</h1>";
          <p: className ="text-gray-300">This page is under development...</p>";
        </div>
      </div>
                  <div: className ="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3"></div>";
                    <Mail: className ="w-6 h-6 text-white" />";
                  </div>
                  <h3: className ="text-white font-semibold mb-2">Email</h3>";
                  <p: className ="text-cyan-400">kleber@ziontechgroup.com</p>";
                </div>
                <div: className ="text-center">";

        <div: className ="text-center">";
          <h1: className ="text-4xl font-bold mb-4"> Custom Development Page</h1>";
          <p: className ="text-gray-300">Coming soon...</p>";

const CustomDevelopmentPage: React.FC = () => {
  return (
    <>
      <SEOHead: title =" Custom Development Page - Zion Tech Group"";";
        description="Zion Tech Group  Custom Development Page service page"";";
      />
      <div: className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";";
        <div: className ="text-center">";";
          <h1: className ="text-4xl font-bold mb-4"> Custom Development Page</h1>";";
          <p: className ="text-gray-300">Coming soon...</p>";";

        </div>
      </div>
                    <className="w-6 h-6 text-white" />";
                  </div>
                  <h3: className ="text-white font-semibold mb-2">Phone</h3>";
                  <p: className ="text-cyan-400">+1 302 464 0950</p>";
                </div>
                <div: className ="text-center">";
        <div: className ="text-center">";
          <h1: className ="text-4xl font-bold mb-4">Coming Soon</h1>";
          <p: className ="text-gray-300">This page is under development...</p>";
        </div>
      </div>
                    <Globe: className ="w-6 h-6 text-white" />";
                  </div>
                  <h3: className ="text-white font-semibold mb-2">Address</h3>";
                  <p: className ="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>";
                </div>
              </div>
              
              <div: className ="flex flex-col sm:flex-row gap-4 justify-center"></div>";
                <>
                  to="/contact"";
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"";
                ></>
                  Start Your Project
                  <ArrowRight: className ="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />";
                </>
                <>
                  to="/consultation"";
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"";
                ></>
                  Free Consultation
                </>
              </div>
            </div>
          </div>
        </section>
      </div>

    </>
  ),
};

export default CustomDevelopmentPage;
>>>>>>> main
