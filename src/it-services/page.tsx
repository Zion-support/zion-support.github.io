import { Star, CheckCircle, Phone, Mail } from 'lucide-react';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Cloud, Shield, Settings, Database, Smartphone, Lock, BarChart, Users, CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock, Star, Zap, Cpu, HardDrive, Wifi, Server, Code, Globe, Target, TrendingUp } from 'lucide-react';

interface ITService {
  title: string;
  description: string;
  icon: any; // Using any to avoid complex type issues with Lucide icons,
features: string[];
  price: string;
  category: string;
  benefits: string[];
  technologies: string[];
  contactInfo: string;
}

const ITServicesPage: React.FC = () => {
  const itServices: ITService[] = [
    // Infrastructure & Cloud Services
    {
      title: 'Cloud Services',
      description: 'Comprehensive cloud migration, setup, and optimization services for AWS, Azure, and Google Cloud.',
      icon: Cloud,
      features: ['Cloud migration', 'Infrastructure setup', 'Cost optimization', 'Security configuration', 'Monitoring', '24/7 support'],
      price: 'Starting at $1,500/month',
      category: 'Infrastructure',
      benefits: ['Scalable infrastructure', 'Reduced costs', 'Improved performance', 'Enhanced security'],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Kubernetes', 'Docker'],
      contactInfo:     ,
$4},
      title: 'Advanced Threat Protection',
      description: 'Comprehensive cybersecurity solutions with real-time threat detection and automated response.',
      icon: Shield,
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response', 'Compliance', 'Penetration Testing'],
      price: 'Starting at $1,599/month',
      category: 'Security',
      color: 'text-red-400'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamlined development workflows with automated testing, deployment, and monitoring.',
      icon: Settings,
      features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup', 'Infrastructure as Code', 'Performance Optimization'],
      price: 'Starting at $1,199/month',
      category: 'DevOps',
      color: 'text-green-400'
    },
    {
      title: 'Database Services',
      description: 'Database design, optimization, and management with AI-powered tuning and monitoring.',
      icon: Database,
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'Migration Services', 'Real-time Monitoring'],
      price: 'Starting at $899/month',
      category: 'Database',
      color: 'text-purple-400'
    },
    {
      title: 'IT Infrastructure',
      description: 'Complete IT infrastructure design, implementation, and management services.',
      icon: Server,
      features: ['Network Design', 'Server Setup', 'Storage Solutions', 'Load Balancing', 'Disaster Recovery', 'Capacity Planning'],
      price: 'Starting at $1,499/month',
      category: 'Infrastructure',
      color: 'text-cyan-400'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile application development with modern technologies.',
      icon: Smartphone,
      features: ['iOS Development', 'Android Development', 'Cross-platform', 'UI/UX Design', 'App Store Optimization', 'Maintenance'],
      price: 'Starting at $2,999/month',
      category: 'Development',
      color: 'text-orange-400'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
    { number: '50+', label: 'Expert Engineers' }
  ];

      <main className="pt-24 pb-16 px-4"></main>"
        <div className="max-w-7xl mx-auto"></div>"
          {/* Hero Section */}
          <section className="text-center mb-16"></section>"
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text"></h1>"
              IT Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>"
              Comprehensive IT solutions including infrastructure, cybersecurity, 
              database management, and DevOps services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>"
              <a,
href="tel:+13024640950""
                className="cyber-button inline-flex items-center space-x-2""
              ></a>
                <Cloud className="w-4 h-4" />"
                <span>Get Started</span>
              </a>
              <a,
href="/contact""
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300""
              ></a>
                Learn More
              </a>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-16"></section>"
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text"></h2>"
              Our IT Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>"
              {services.map((service, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300"></div>"
                  <service.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />"
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>"
                  <p className="text-gray-300 mb-4">{service.description}</p>"
                  <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>"
                  <ul className="space-y-2 mb-6"></ul>"
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300"></li>"
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />"
  // Removed unused benefits variable;
        {/* Hero Section */}
              IT Services & Infrastructure;
            Comprehensive IT solutions to support and optimize your business infrastructure.
            From cloud migration to cybersecurity, we keep your technology running smoothly.
              Get Free IT Assessment;
              (302) 464-0950;
        {/* Main Services Grid */}
          <h2 className="text-3xl font-bold text-white text-center mb-12">Core IT Services</h2>"
                  {React.createElement(service.icon, { className: "w-8 h-8"})}"
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>"
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>"
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>"
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4"></div>"
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:</h4>"
                  <ul className="text-sm text-gray-400 space-y-1"></ul>"
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx} className="flex items-center"></li>"
                        <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />"
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4"></div>"
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>"
                </div>
                <div className="mb-4"></div>"
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Technologies:</h4>"
                  <div className="flex flex-wrap gap-1"></div>"
                    {service.technologies.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded"></span>"
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>"
                <ul className="space-y-2 mb-6"></ul>"
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400"></li>"
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />"
                      {feature}
                    </li>
                  ))}
                  <div className="text-lg font-bold text-cyan-400 mb-2">{service.price}</div>"
                    Learn More <ArrowRight></ArrowRight>
  ))}

        {/* Additional Services */}
          <h2 className="text-3xl font-bold text-white text-center mb-12">Additional IT Services</h2>"
                  {React.createElement(service.icon, { className: "w-6 h-6 text-cyan-400 mr-3"})}"
                  <h3 className="text-lg font-bold text-white">{service.title}</h3>"
                <p className="text-gray-300 text-sm mb-3">{service.description}</p>"
                <div className="text-cyan-400 font-bold text-sm">{service.price}</div>"
  ))}

        {/* Support Tiers */}
        <section className="mb-16"></section>"
          <h2 className="text-3xl font-bold text-white text-center mb-12">Support Tiers</h2>"
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>"
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6"></div>"
              <h3 className="text-xl font-bold text-white mb-4">Basic Support</h3>"
              <div className="text-3xl font-bold text-cyan-400 mb-4">$199/month</div>"
              <ul className="space-y-2 mb-6"></ul>"
                <li className="flex items-center text-sm text-gray-300"></li>"
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />"
                  Business hours support
                </li>
                <li className="flex items-center text-sm text-gray-300"></li>"
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />"
                  Remote assistance
                </li>
                <li className="flex items-center text-sm text-gray-300"></li>"
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />"
                  Basic monitoring
                </li>
              </ul>
              <a,
href="/contact""
                className="block w-full text-center bg-cyan-500 text-white py-2 rounded-lg font-semibold hover:bg-cyan-600 transition-colors""
              ></a>
                Get Started
              </a>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border-2 border-cyan-500"></div>"
              <h3 className="text-xl font-bold text-white mb-4">Professional Support</h3>"
              <div className="text-3xl font-bold text-cyan-400 mb-4">$499/month</div>"
              <ul className="space-y-2 mb-6"></ul>"
                <li className="flex items-center text-sm text-gray-300"></li>"
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />"
                  24/7 support
                </li>
                <li className="flex items-center text-sm text-gray-300"></li>"
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />"
                  On-site visits
                </li>
                <li className="flex items-center text-sm text-gray-300"></li>"
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />"
                  Advanced monitoring
                </li>
                <li className="flex items-center text-sm text-gray-300"></li>"
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />"
                  Priority response
                </li>
              </ul>
              <a,
href="/contact""
                className="block w-full text-center bg-cyan-500 text-white py-2 rounded-lg font-semibold hover:bg-cyan-600 transition-colors""
              ></a>
                Get Started
              </a>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6"></div>"
              <h3 className="text-xl font-bold text-white mb-4">Enterprise Support</h3>"
              <div className="text-3xl font-bold text-cyan-400 mb-4">Custom</div>"
              <ul className="space-y-2 mb-6"></ul>"
                <li className="flex items-center text-sm text-gray-300"></li>"
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />"
                  Dedicated team
                </li>
                <li className="flex items-center text-sm text-gray-300"></li>"
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />"
                  Custom SLAs
                </li>
                <li className="flex items-center text-sm text-gray-300"></li>"
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />"
                  Proactive monitoring
                </li>
                <li className="flex items-center text-sm text-gray-300"></li>"
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />"
                  Strategic consulting
                </li>
              </ul>
              <a,
href="/contact""
                className="block w-full text-center bg-cyan-500 text-white py-2 rounded-lg font-semibold hover:bg-cyan-600 transition-colors""
              ></a>
                Contact Sales
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center"></section>"
          <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 rounded-2xl p-8"></div>"
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Optimize Your IT Infrastructure?</h2>"
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto"></p>"
              Get a free IT assessment and discover how our services can improve your technology infrastructure and reduce costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>"
              <a,
href="/contact""
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105""
              ></a>
                Get Free IT Assessment
              </a>
              <a,
href="tel:+13024640950""
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300""
              ></a>
                (302) 464-0950
              </a>
            </div>
      </main>

          {/* Services Section */}
          <section className="container mx-auto px-4 py-16"></section>"
            <div className="max-w-7xl mx-auto"></div>"
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text"></h2>"
                Our IT Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>"
                {itServices.map((service, index) => (
                  <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300"></div>"
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6"></div>"
                      <service.icon className={`w-8 h-8 ${service.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 neon-text">{service.title}</h3>"
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>"
                    <div className="mb-4"></div>"
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Features:</h4>"
                      <ul className="space-y-1"></ul>"
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-xs text-gray-300"></li>"
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />"
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="text-center"></div>"
                      <div className={`text-lg font-bold mb-2 neon-text ${service.color}`}>{service.price}</div>
                      <a,
href="/contact" "
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${service.color} border border-current hover:bg-current hover:text-slate-900`}
                      ></a>
                        Learn More
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="container mx-auto px-4 py-16"></section>"
            <div className="max-w-7xl mx-auto"></div>"
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text"></h2>"
                Why Choose Our IT Services?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>"
                {benefits.map((benefit, index) => (
                  <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300"></div>"
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto"></div>"
                      <benefit.icon className="w-8 h-8 text-white" />"
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 neon-text">{benefit.title}</h3>"
                    <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>"
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16"></section>"
            <div className="max-w-4xl mx-auto text-center"></div>"
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 neon-text"></h2>"
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-lg text-gray-300 mb-12"></p>"
                Let our expert IT team help you build a robust, secure, and scalable technology foundation for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>"
                <a,
href="tel:+13024640950""
                  className="cyber-button flex items-center justify-center space-x-2""
                ></a>
                  <Phone className="w-5 h-5" />"
                  <span>Call (302) 464-0950</span>
                </a>
                <a,
href="mailto:kleber@ziontechgroup.com""
                  className="cyber-button flex items-center justify-center space-x-2""
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                ></a>
                  <Mail className="w-5 h-5" />"
                  <span>Get Free Consultation</span>
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

export default ITServicesPage;
import { Cloud, ArrowRight } from 'lucide-react';

export default function ITServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>"
      <div className="container mx-auto px-4 py-20"></div>"
        <div className="max-w-4xl mx-auto text-center"></div>"
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6"></h1>"
            IT Services
          </h1>
          <p className="text-xl text-gray-300 mb-8"></p>"
            Comprehensive IT support and services to keep your business running smoothly.
          </p>
          <div className="bg-slate-800/50 rounded-lg p-8"></div>"
            <h2 className="text-2xl font-bold text-white mb-4">IT Services Solutions</h2>"
            <p className="text-gray-300 mb-6"></p>"
              Get expert IT support, infrastructure management, and technology consulting.
            </p>
            <a,
href="/contact""
              className="bg-cyan-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-cyan-600 transition-colors inline-flex items-center""
            ></a>
              <ArrowRight className="w-5 h-5 mr-2" />"
              Contact Us
            </a>
          </div>
        </div>

export default function ITServicesPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white"></div>"
      <div className="container mx-auto px-4 py-8"></div>"
        <h1 className="text-4xl font-bold mb-8">IT Services</h1>"
        <p className="text-lg text-gray-300">"
          Comprehensive IT solutions for your business needs.
        </p>
      </div>
    </div>
  );
}
import { Cloud, Shield, Server, Database, BarChart, Users } from 'lucide-react';
import { Cloud } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const ITServicesPage: React.FC = () => {
  const _itServices = [
    {
      title: 'Cloud Services',
      description: 'Comprehensive cloud migration, setup, and optimization services for AWS, Azure, and Google Cloud.',
      icon: Cloud,
      features: ['Cloud migration', 'Infrastructure setup', 'Cost optimization', 'Security configuration', 'Monitoring', '24/7 support'],
      price: 'Starting at $1,500/month',
      category: 'Infrastructure',
      benefits: ['Scalable infrastructure', 'Reduced costs', 'Improved performance', 'Enhanced security'],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Kubernetes', 'Docker'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Advanced Threat Protection',
      description: 'Comprehensive cybersecurity solutions with real-time threat detection and automated response.',
      icon: Shield,
      features: ['Threat detection', 'Vulnerability assessment', 'Incident response', 'Security monitoring', 'Compliance reporting', 'Penetration testing'],
      price: 'Starting at $2,000/month',
      category: 'Security',
      benefits: ['Enhanced security posture', 'Reduced risk', 'Compliance assurance', 'Peace of mind'],
      technologies: ['SIEM', 'EDR', 'XDR', 'SOAR', 'Firewalls', 'Intrusion Detection'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Infrastructure',
      description: 'Enterprise-grade IT infrastructure with 99.9% uptime guarantee and comprehensive support.',
      icon: Server,
      features: ['Network setup', 'Server management', 'Backup solutions', 'Disaster recovery', 'Performance monitoring', '24/7 support'],
      price: 'Starting at $1,200/month',
      category: 'Infrastructure',
      benefits: ['Reliable infrastructure', 'Reduced downtime', 'Improved efficiency', 'Cost savings'],
      technologies: ['Windows Server', 'Linux', 'VMware', 'Hyper-V', 'Active Directory', 'Exchange'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Database Management',
      description: 'Expert database administration, optimization, and migration services for all major database platforms.',
      icon: Database,
      features: ['Database design', 'Performance tuning', 'Migration services', 'Backup & recovery', 'Security hardening', 'Monitoring'],
      price: 'Starting at $800/month',
      category: 'Data Management',
      benefits: ['Optimized performance', 'Data security', 'Reduced costs', 'Improved reliability'],
      technologies: ['SQL Server', 'MySQL', 'PostgreSQL', 'Oracle', 'MongoDB', 'Redis'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Business Intelligence',
      description: 'Transform your data into actionable insights with our comprehensive BI and analytics solutions.',
      icon: BarChart,
      features: ['Data visualization', 'Report generation', 'Dashboard creation', 'Data warehousing', 'ETL processes', 'Predictive analytics'],
      price: 'Starting at $1,000/month',
      category: 'Analytics',
      benefits: ['Data-driven decisions', 'Improved efficiency', 'Competitive advantage', 'Cost optimization'],
      technologies: ['Power BI', 'Tableau', 'QlikView', 'SSRS', 'SSAS', 'SSIS'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Consulting',
      description: 'Strategic IT consulting to help you make informed technology decisions and optimize your IT investments.',
      icon: Users,
      features: ['Technology assessment', 'Strategic planning', 'Vendor evaluation', 'Cost analysis', 'Implementation guidance', 'Training'],
      price: 'Starting at $150/hour',
      category: 'Consulting',
      benefits: ['Strategic guidance', 'Cost optimization', 'Risk mitigation', 'Technology alignment'],
      technologies: ['IT Strategy', 'Architecture Design', 'Vendor Management', 'Project Management'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center"></div>"
      <div className="text-center"></div>"
        <h1 className="text-4xl font-bold text-white mb-4">It Services}</h1>"
        <p className="text-gray-300 mb-8">Coming Soon - Advanced it services solutions</p>"
        }<a href="/contact" className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors">"
          Contact Us
        </a>
      </div>
    }</div>;  );

  const benefits = [
    {
      icon: Star,
      title: 'Proven Expertise',
      description: '10+ years of experience with 100+ successful projects'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring'
    },
    {
      icon: ShieldCheck,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance for all solutions'
    },
    {
      icon: Award,
      title: 'Certified Professionals',
      description: 'Microsoft, AWS, and Google certified engineers'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>"
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">"
        {/* Hero Section */}
        <section className="text-center mb-16">"
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">"
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">"
              IT Services & Infrastructure
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">"
            Comprehensive IT solutions to support and optimize your business infrastructure. 
            From cloud migration to cybersecurity, we keep your technology running smoothly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>"
            <a,
href="/contact""
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105""
            >
              Get Free IT Assessment
            </a>
            <a,
href="tel:+13024640950""
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300""
            >
              (302) 464-0950
            </a>
          </div>
        </section>

        {/* Main Services Grid */}
        <section className="mb-16">"
          <h2 className="text-3xl font-bold text-white text-center mb-12">Core IT Services</h2>"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>"
            {itServices.map((service, index) => (
              <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300"></div>"
                <div className="text-cyan-400 mb-4"></div>"
                  <service.icon className="w-8 h-8" />"
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>"
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>"
                <div className="mb-4"></div>"
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>"
                  <ul className="text-sm text-gray-400 space-y-1">"
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center">"
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />"
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4"></div>"
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:</h4>"
                  <ul className="text-sm text-gray-400 space-y-1">"
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx} className="flex items-center">"
                        <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />"
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4"></div>"
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>"
                </div>
                <div className="mb-4"></div>"
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Technologies:</h4>"
                  <div className="flex flex-wrap gap-1"></div>"
                    {service.technologies.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">"
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>"
                <ul className="space-y-2 mb-6">"
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">"
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />"
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center"></div>"
                  <div className={`text-lg font-bold ${service.color} mb-2`}>{service.price}</div>
                  <a,
href="/contact""
                    className={`inline-flex items-center text-sm font-medium ${service.color} hover:opacity-80 transition-opacity`}
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />"
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Services */}
        <section className="mb-16">"
          <h2 className="text-3xl font-bold text-white text-center mb-12">Additional IT Services</h2>"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>"
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-4 hover:bg-slate-800/50 transition-all duration-300"></div>"
                <div className="flex items-center mb-3"></div>"
                  <service.icon className="w-6 h-6 text-cyan-400 mr-3" />"
                  <h3 className="text-lg font-bold text-white">{service.title}</h3>"
                </div>
                <p className="text-gray-300 text-sm mb-3">{service.description}</p>"
                <div className="text-cyan-400 font-bold text-sm">{service.price}</div>"
              </div>
            ))}
          </div>
        </section>

        {/* Support Tiers */}
        <section className="mb-16">"
          <h2 className="text-3xl font-bold text-white text-center mb-12">Support Tiers</h2>"
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>"
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6"></div>"
              <h3 className="text-xl font-bold text-white mb-4">Basic Support</h3>"
              <div className="text-3xl font-bold text-cyan-400 mb-4">$199/month</div>"
              <ul className="space-y-2 mb-6">"
                <li className="flex items-center text-sm text-gray-300">"
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />"
                  Business hours support
                </li>
                <li className="flex items-center text-sm text-gray-300">"
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />"
                  Remote assistance
                </li>
                <li className="flex items-center text-sm text-gray-300">"
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />"
                  Basic monitoring
                </li>
              </ul>
              <a,
href="/contact""
                className="block w-full text-center bg-cyan-500 text-white py-2 rounded-lg font-semibold hover:bg-cyan-600 transition-colors""
              >
                Get Started
              </a>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border-2 border-cyan-500"></div>"
              <h3 className="text-xl font-bold text-white mb-4">Professional Support</h3>"
              <div className="text-3xl font-bold text-cyan-400 mb-4">$499/month</div>"
              <ul className="space-y-2 mb-6">"
                <li className="flex items-center text-sm text-gray-300">"
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />"
                  24/7 support
                </li>
                <li className="flex items-center text-sm text-gray-300">"
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />"
                  On-site visits
                </li>
                <li className="flex items-center text-sm text-gray-300">"
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />"
                  Advanced monitoring
                </li>
                <li className="flex items-center text-sm text-gray-300">"
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />"
                  Priority response
                </li>
              </ul>
              <a,
href="/contact""
                className="block w-full text-center bg-cyan-500 text-white py-2 rounded-lg font-semibold hover:bg-cyan-600 transition-colors""
              >
                Get Started
              </a>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6"></div>"
              <h3 className="text-xl font-bold text-white mb-4">Enterprise Support</h3>"
              <div className="text-3xl font-bold text-cyan-400 mb-4">Custom</div>"
              <ul className="space-y-2 mb-6">"
                <li className="flex items-center text-sm text-gray-300">"
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />"
                  Dedicated team
                </li>
                <li className="flex items-center text-sm text-gray-300">"
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />"
                  Custom SLAs
                </li>
                <li className="flex items-center text-sm text-gray-300">"
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />"
                  Proactive monitoring
                </li>
                <li className="flex items-center text-sm text-gray-300">"
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />"
                  Strategic consulting
                </li>
              </ul>
              <a,
href="/contact""
                className="block w-full text-center bg-cyan-500 text-white py-2 rounded-lg font-semibold hover:bg-cyan-600 transition-colors""
              >
                Contact Sales
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">"
          <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 rounded-2xll p-8"></div>"
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Optimize Your IT Infrastructure?</h2>"
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">"
              Get a free IT assessment and discover how our services can improve your technology infrastructure and reduce costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>"
              <a,
href="/contact""
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105""
              >
                Get Free IT Assessment
              </a>
              <a,
href="tel:+13024640950""
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300""
              >
                (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ItServicesPage;
