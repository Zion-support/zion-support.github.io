<<<<<<< HEAD
import React from 'react'
import { Link } from "react-router-dom
import { ArrowRight, CheckCircle, Star, Code, Globe, Smartphone, Database, Shield, Zap, Clock }    from "lucide-react
import EnhancedSEO from '../components/EnhancedSEO'

const WebDevelopmentPage: React.FC = () => {
  const webServices = [
    {
      title: 'Frontend Development'
      description: 'Modern, responsive web applications with cutting-edge technologies'
      icon: Code,
      price: '$1,200/month'
      features: ['React/Next.js', 'Vue.js/Angular', 'Responsive Design', 'PWA Development'
      color: 'text-blue-400'
    },
    {
      title: 'Backend Development'
      description: 'Scalable server-side solutions and API development'
      icon: Database,
      price: '$1,400/month'
      features: ['Node.js/Python', 'RESTful APIs', 'GraphQL', 'Microservices'
      color: 'text-green-400'
    },
    {
      title: 'Full-Stack Development'
      description: 'Complete web solutions from frontend to backend'
      icon: Globe,
      price: '$2,000/month'
      features: ['End-to-End Development', 'Database Design', 'Cloud Integration', 'DevOps'
      color: 'text-purple-400'
    },
    {
      title: 'E-commerce Solutions'
      description: 'Custom e-commerce platforms and online stores'
      icon: Smartphone,
      price: '$1,800/month'
      features: ['Custom Stores', 'Payment Integration', 'Inventory Management', 'Analytics'
      color: 'text-orange-400'
    },
    {
      title: 'Performance Optimization'
      description: 'Speed up your website with advanced optimization techniques'
      icon: Zap,
      price: '$800/month'
      features: ['Page Speed Optimization', 'SEO Enhancement', 'CDN Setup', 'Caching'
      color: 'text-yellow-400'
    },
    {
      title: 'Security Implementation'
      description: 'Secure your web applications with enterprise-grade security'
      icon: Shield,
      price: '$1,000/month'
      features: ['SSL Certificates', 'Security Audits', 'Penetration Testing', 'Compliance'
      color: 'text-red-400'
    },
    {
      title: 'Analytics Integration'
      description: 'Advanced analytics and tracking for your web applications'
      icon: BarChart,
      price: '$600/month'
      features: ['Google Analytics', 'Custom Dashboards', 'User Tracking', 'Conversion Optimization'
      color: 'text-cyan-400'
    },
    {
      title: 'Maintenance & Support'
      description: 'Ongoing maintenance and support for your web applications'
      icon: Users,
      price: '$500/month'
      features: ['24/7 Support', 'Regular Updates', 'Bug Fixes', 'Performance Monitoring'
      color: 'text-gray-400'
    }
  ]
=======
import React from "react";
import { Helmet } from "react-helmet-async";
const PagePage = () => {
>>>>>>> cursor/fix-errors-and-merge-to-main-cbe1
  return (
    <>
      <SEOOptimizer title="Web Development Services - Zion Tech Group"
        description="Professional web development services including frontend, backend, full-stack, e-commerce, and performance optimization. Build modern, scalable web applications."
        keywords={['web development', 'frontend development', 'backend development', 'full-stack', 'e-commerce', 'web applications'
        canonicalUrl="https://ziontechgroup.com/web-development"
      />
      <PerformanceOptimizer enableImageOptimization={true}
        enableLazyLoading={true}
        enableCodeSplitting={true}
        enablePrefetching={true}
      />
      <AccessibilityEnhancer enableKeyboardNavigation={true}
        enableScreenReader={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      >
        <div></div>
      </AccessibilityEnhancer>
      <SecurityEnhancer enableCSP={true}
        enableHSTS={true}
        enableXSSProtection={true}
        enableClickjackingProtection={true}
      />
      <Analytics />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
        <Navigation />
        <main className="container mx-auto px-4 py-16 pt-24"
          {/* Hero Section */}
          <section className="text-center mb-16"
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse"
              Web Development
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium"
              Modern, Scalable Web Applications
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8"
              Build powerful, responsive web applications with our expert development team. 
              From simple websites to complex enterprise applications, we deliver solutions that drive results.
            </p>
          </section>

          {/* Services Grid */}
          <section className="mb-16"
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              {webServices.map((service, index) => (
                <article key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300"
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 mx-auto"
                    <service.icon className="w-8 h-8 text-white"
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center neon-text"
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed"
                    {service.description}
                  </p>
                  
                  <div className="mb-4"
                    <h4 className="text-sm font-semibold text-blue-400 mb-2"
                    <ul className="space-y-1"
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300"
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2 flex-shrink-0"
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center"
                    <div className={`text-lg font-bold mb-2 neon-text ${service.color}`
                    <a 
                      href="/contact"
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${service.color} border border-current hover:bg-current hover:text-slate-900`
                    >
                      Get Started
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Technology Stack */}
          <section className="mb-16"
            <div className="cyber-card p-8"
              <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text"
                Our Technology Stack
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6"
                <div className="text-center"
                  <h3 className="text-lg font-semibold text-cyan-400 mb-3"
                  <ul className="space-y-2 text-sm text-gray-300"
                    <li>React/Next.js</li>
                    <li>Vue.js/Angular</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
                <div className="text-center"
                  <h3 className="text-lg font-semibold text-purple-400 mb-3"
                  <ul className="space-y-2 text-sm text-gray-300"
                    <li>Node.js/Python</li>
                    <li>Express.js/Django</li>
                    <li>PostgreSQL/MongoDB</li>
                    <li>Redis</li>
                  </ul>
                </div>
                <div className="text-center"
                  <h3 className="text-lg font-semibold text-green-400 mb-3"
                  <ul className="space-y-2 text-sm text-gray-300"
                    <li>AWS/Azure/GCP</li>
                    <li>Docker/Kubernetes</li>
                    <li>CDN Services</li>
                    <li>CI/CD Pipelines</li>
                  </ul>
                </div>
                <div className="text-center"
                  <h3 className="text-lg font-semibold text-orange-400 mb-3"
                  <ul className="space-y-2 text-sm text-gray-300"
                    <li>Git/GitHub</li>
                    <li>Jest/Cypress</li>
                    <li>Webpack/Vite</li>
                    <li>Figma/Sketch</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center"
            <div className="cyber-card p-8 max-w-4xl mx-auto"
              <h2 className="text-3xl font-bold text-white mb-4 neon-text"
                Ready to Build Your Next Web Application?
              </h2>
              <p className="text-gray-300 mb-6 text-lg"
                Let our expert development team bring your vision to life with modern, 
                scalable web applications that deliver exceptional user experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Your Project
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5"
                  +1 302 464 0950
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};
<<<<<<< HEAD

export default WebDevelopmentPage;
>>>>>>> origin/main
>>>>>>> origin/main
=======
export default PagePage;
>>>>>>> cursor/fix-errors-and-merge-to-main-cbe1
