import { Link } from &quot;react-router-dom&quot;;
import { Brain, Shield, Zap, Globe, ArrowRight, Star, Users, Award, BarChart3, Cloud, Sparkles, Mail, Smartphone } from &quot;lucide-react&quot;;
import SEOOptimizer from &quot;./components/SEOOptimizer&quot;;

const HomePage = () => {
  const features = [
    {
      title: &quot;AI-Powered Solutions&quot;,
      description: &quot;Cutting-edge artificial intelligence to transform your business operations with machine learning, natural language processing, and predictive analytics&quot;,
      icon: <Brain className=&quot;w-8 h-8&quot; />,
      color: &quot;from-blue-500 to-cyan-500&quot;,
      stats: &quot;40% efficiency boost&quot;,
      link: &quot;/ai-services&quot;
    },
    {
      title: &quot;IT Services&quot;,
      description: &quot;Comprehensive technology solutions including cloud infrastructure, cybersecurity, and digital transformation for modern businesses&quot;,
      icon: <Shield className=&quot;w-8 h-8&quot; />,
      color: &quot;from-green-500 to-emerald-500&quot;,
      stats: &quot;99.9% uptime SLA&quot;,
      link: &quot;/services&quot;
    },
    {
      title: &quot;Micro SAAS&quot;,
      description: &quot;Ready-to-use software solutions for immediate deployment including analytics, security, and productivity tools&quot;,
      icon: <Zap className=&quot;w-8 h-8&quot; />,
      color: &quot;from-purple-500 to-pink-500&quot;,
      stats: &quot;50+ solutions&quot;,
      link: &quot;/micro-saas&quot;
    },
    {
      title: &quot;5G Solutions&quot;,
      description: &quot;Next-generation connectivity and infrastructure services for IoT, edge computing, and smart city implementations&quot;,
      icon: <Globe className=&quot;w-8 h-8&quot; />,
      color: &quot;from-orange-500 to-red-500&quot;,
      stats: &quot;10x faster speeds&quot;,
      link: &quot;/5g-solutions&quot;
    },
  ];

  const microSaasHighlights = [
    {
      name: &quot;Zion Analytics Pro&quot;,
      description: &quot;AI-powered business intelligence platform&quot;,
      price: &quot;From $29/month&quot;,
      icon: <BarChart3 className=&quot;w-6 h-6&quot; />,
      link: &quot;/zion-analytics-pro&quot;
    },
    {
      name: &quot;Zion Security Shield&quot;,
      description: &quot;Advanced cybersecurity protection&quot;,
      price: &quot;From $49/month&quot;,
      icon: <Shield className=&quot;w-6 h-6&quot; />,
      link: &quot;/zion-security-shield&quot;
    },
    {
      name: &quot;Zion Cloud Vault&quot;,
      description: &quot;Secure cloud storage solution&quot;,
      price: &quot;From $9/month&quot;,
      icon: <Cloud className=&quot;w-6 h-6&quot; />,
      link: &quot;/zion-cloud-vault&quot;
    }
  ];

  const stats = [
    { number: &quot;10,000+&quot;, label: &quot;Active Users&quot;, icon: <Users className=&quot;w-6 h-6&quot; /> },
    { number: &quot;99.9%&quot;, label: &quot;Uptime SLA&quot;, icon: <Award className=&quot;w-6 h-6&quot; /> },
    { number: &quot;50+&quot;, label: &quot;Micro SAAS Solutions&quot;, icon: <Zap className=&quot;w-6 h-6&quot; /> },
    { number: &quot;24/7&quot;, label: &quot;Support Available&quot;, icon: <Shield className=&quot;w-6 h-6&quot; /> }
  ];

  const testimonials = [
    {
      name: &quot;Sarah Johnson&quot;,
      company: &quot;TechStart Inc.&quot;,
      role: &quot;CEO&quot;,
      content: &quot;Zion Tech Group transformed our entire technology stack. The AI solutions increased our productivity by 60% in just 3 months.&quot;,
      rating: 5
    },
    {
      name: &quot;Michael Chen&quot;,
      company: &quot;E-commerce Solutions&quot;,
      role: &quot;CTO&quot;,
      content: &quot;The micro SAAS solutions are incredibly powerful and easy to implement. We've saved thousands of hours with their automation tools.&quot;,
      rating: 5
    },
    {
      name: &quot;Emily Rodriguez&quot;,
      company: &quot;Digital Marketing Agency&quot;,
      role: &quot;Operations Director&quot;,
      content: &quot;Outstanding support and cutting-edge technology. Zion Tech Group is our trusted partner for all digital transformation needs.&quot;,
      rating: 5
    }
  ];

  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900&quot;></div>
      <SEOOptimizer
        title=&quot;Zion Tech Group - Advanced AI and IT Solutions | Leading Technology Company&quot;
        description=&quot;Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses. Transform your operations with cutting-edge technology.&quot;
        keywords=&quot;AI solutions, IT services, micro SAAS, digital transformation, business automation, technology consulting, cybersecurity, cloud solutions, 5G technology, artificial intelligence, machine learning, cloud computing, data analytics, business intelligence, automation, digital transformation, technology consulting, enterprise solutions, software development, mobile applications, web development, blockchain, IoT, edge computing, smart cities, quantum computing, robotics, autonomous systems&quot;
        canonical=&quot;https://ziontechgroup.com&quot;
        ogImage=&quot;https://ziontechgroup.com/og-image.svg&quot;
        structuredData={{
          &quot;@context&quot;: &quot;https://schema.org&quot;,
          &quot;@type&quot;: &quot;Organization&quot;,
          &quot;name&quot;: &quot;Zion Tech Group&quot;,
          &quot;url&quot;: &quot;https://ziontechgroup.com&quot;,
          &quot;logo&quot;: &quot;https://ziontechgroup.com/favicon.svg&quot;,
          &quot;description&quot;: &quot;Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses.&quot;,
          &quot;address&quot;: {
            &quot;@type&quot;: &quot;PostalAddress&quot;,
            &quot;streetAddress&quot;: &quot;364 E Main St STE 1008&quot;,
            &quot;addressLocality&quot;: &quot;Middletown&quot;,
            &quot;addressRegion&quot;: &quot;DE&quot;,
            &quot;postalCode&quot;: &quot;19709&quot;,
            &quot;addressCountry&quot;: &quot;US&quot;
          },
          &quot;contactPoint&quot;: {
            &quot;@type&quot;: &quot;ContactPoint&quot;,
            &quot;telephone&quot;: &quot;+1-302-464-0950&quot;,
            &quot;contactType&quot;: &quot;customer service&quot;,
            &quot;email&quot;: &quot;kleber@ziontechgroup.com&quot;
          },
          &quot;sameAs&quot;: [
            &quot;https://www.linkedin.com/company/ziontechgroup&quot;,
            &quot;https://twitter.com/ziontechgroup&quot;
          ],
          &quot;foundingDate&quot;: &quot;2020&quot;,
          &quot;numberOfEmployees&quot;: &quot;50-100&quot;,
          &quot;industry&quot;: &quot;Technology&quot;,
          &quot;services&quot;: [
            &quot;AI Solutions&quot;,
            &quot;IT Services&quot;,
            &quot;Micro SAAS&quot;,
            &quot;Digital Transformation&quot;,
            &quot;Cloud Computing&quot;,
            &quot;Cybersecurity&quot;,
            &quot;5G Solutions&quot;
          ]
        }}
      />

      {/* Hero Section */}
      <section className=&quot;pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden&quot; role=&quot;banner&quot; aria-label=&quot;Hero section&quot;>
        {/* Animated Background Elements */}
        <div className=&quot;absolute inset-0 overflow-hidden&quot;></div>
          <div className=&quot;absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse&quot;></div>
          <div className=&quot;absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000&quot;></div>
        </div>
        
        <div className=&quot;max-w-7xl mx-auto text-center relative z-10&quot;></div>
          <div className=&quot;inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6&quot;></div>
            <Sparkles className=&quot;w-4 h-4 text-cyan-400 mr-2&quot; />
            <span className=&quot;text-cyan-400 text-sm font-medium&quot;>#1 Technology Solutions Provider 2024</span>
          </div>
          
          <h1 className=&quot;text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight&quot;>
            Welcome to
            <span className=&quot;text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse&quot;>
              {&quot; &quot;}
              Zion Tech Group
            </span>
          </h1>
          
          <p className=&quot;text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed&quot;>
            Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses. 
            Transform your operations with cutting-edge technology and innovative solutions.
          </p>
          
          <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center mb-16&quot;></div>
            <Link
              to=&quot;/contact&quot;
              className=&quot;bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105&quot;
            >
              Get Started Today
              <ArrowRight className=&quot;w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform&quot; />
            </Link>
            <Link
              to=&quot;/demo&quot;
              className=&quot;border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105&quot;
            >
              Watch Demo
              <Sparkles className=&quot;w-5 h-5 ml-2 group-hover:rotate-12 transition-transform&quot; />
            </Link>
          </div>
          
          {/* Stats */}
          <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto&quot;></div>
            {stats.map((stat, index) => (
              <div key={index} className=&quot;text-center group&quot;></div>
                <div className=&quot;w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300&quot;></div>
                  {stat.icon}
                </div>
                <div className=&quot;text-2xl md:text-3xl font-bold text-white mb-2&quot;>{stat.number}</div>
                <div className=&quot;text-gray-300 text-sm&quot;>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot; role=&quot;main&quot; aria-label=&quot;Core services&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;></div>
          <div className=&quot;text-center mb-16&quot;></div>
            <h2 className=&quot;text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6&quot;>
              Our Core Services
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed&quot;>
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation. 
              From AI-powered analytics to enterprise security, we have everything you need.
            </p>
          </div>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className=&quot;group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900&quot;
                aria-label={`Learn more about ${feature.title}`}
              >
                <div
                  className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  aria-hidden=&quot;true&quot;
                ></div>
                  {feature.icon}
                </div>
                <h3 className=&quot;text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors&quot;>
                  {feature.title}
                </h3>
                <p className=&quot;text-gray-300 text-center mb-4 leading-relaxed&quot;>
                  {feature.description}
                </p>
                <div className=&quot;text-center&quot;></div>
                  <span className=&quot;inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400&quot;>
                    {feature.stats}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Highlights */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;></div>
          <div className=&quot;text-center mb-16&quot;></div>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-4&quot;>
              Featured Micro SAAS Solutions
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              Ready-to-use software solutions that can transform your business operations immediately.
            </p>
          </div>
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;></div>
            {microSaasHighlights.map((saas, index) => (
              <Link
                key={index}
                to={saas.link}
                className=&quot;group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105&quot;
              >
                <div className=&quot;flex items-center mb-4&quot;></div>
                  <div className=&quot;w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform&quot;></div>
                    {saas.icon}
                  </div>
                  <div></div>
                    <h3 className=&quot;text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors&quot;>
                      {saas.name}
                    </h3>
                    <p className=&quot;text-cyan-400 font-medium&quot;>{saas.price}</p>
                  </div>
                </div>
                <p className=&quot;text-gray-300 text-sm leading-relaxed&quot;>
                  {saas.description}
                </p>
              </Link>
            ))}
          </div>
          <div className=&quot;text-center mt-12&quot;></div>
            <Link
              to=&quot;/micro-saas&quot;
              className=&quot;inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 group&quot;
            >
              View All Micro SAAS Solutions
              <ArrowRight className=&quot;w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform&quot; />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;></div>
          <div className=&quot;text-center mb-16&quot;></div>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-4&quot;>
              Trusted by Industry Leaders
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              See what our clients say about working with Zion Tech Group
            </p>
          </div>
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;></div>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className=&quot;group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden&quot;
              ></div>
                <div className=&quot;flex items-center mb-4&quot;></div>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className=&quot;w-5 h-5 text-yellow-400 fill-current&quot; />
                  ))}
                </div>
                <p className=&quot;text-gray-300 mb-4 italic leading-relaxed&quot;>&quot;{testimonial.content}&quot;</p>
                <div></div>
                  <div className=&quot;font-semibold text-white&quot;>{testimonial.name}</div>
                  <div className=&quot;text-sm text-gray-400&quot;>{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30&quot;>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;></div>
          <h2 className=&quot;text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6&quot;>
            Ready to Transform Your Business?
          </h2>
          <p className=&quot;text-xl text-gray-300 mb-8 leading-relaxed&quot;>
            Join thousands of businesses already using our solutions to drive growth and innovation. 
            Start your digital transformation journey today.
          </p>
          
          {/* Contact Information */}
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6 mb-8&quot;></div>
            <div className=&quot;text-center&quot;></div>
              <div className=&quot;w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3&quot;></div>
                <Mail className=&quot;w-6 h-6 text-white&quot; />
              </div>
              <h3 className=&quot;text-white font-semibold mb-2&quot;>Email</h3>
              <p className=&quot;text-cyan-400&quot;>kleber@ziontechgroup.com</p>
            </div>
            <div className=&quot;text-center&quot;></div>
              <div className=&quot;w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3&quot;></div>
                <Smartphone className=&quot;w-6 h-6 text-white&quot; />
              </div>
              <h3 className=&quot;text-white font-semibold mb-2&quot;>Phone</h3>
              <p className=&quot;text-cyan-400&quot;>+1 302 464 0950</p>
            </div>
            <div className=&quot;text-center&quot;></div>
              <div className=&quot;w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3&quot;></div>
                <Globe className=&quot;w-6 h-6 text-white&quot; />
              </div>
              <h3 className=&quot;text-white font-semibold mb-2&quot;>Address</h3>
              <p className=&quot;text-cyan-400 text-sm&quot;>364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
          
          <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
            <Link
              to=&quot;/contact&quot;
              className=&quot;bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105&quot;
            >
              Start Your Journey
              <ArrowRight className=&quot;w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform&quot; />
            </Link>
            <Link
              to=&quot;/services&quot;
              className=&quot;border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105&quot;
            >
              Explore Services
              <Sparkles className=&quot;w-5 h-5 ml-2 group-hover:rotate-12 transition-transform&quot; />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
