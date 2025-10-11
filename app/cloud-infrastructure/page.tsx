'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Cloud, Server, Shield, Zap, CheckCircle, ArrowRight, Globe, Database, Settings, Users } from 'lucide-react';

const CloudInfrastructurePage: React.FC = () => {
  const features = [
    {
      icon: Cloud,
      title: 'Multi-Cloud Solutions',
      description: 'Deploy across AWS, Azure, and Google Cloud for maximum flexibility',
      benefits: ['Vendor independence', 'Cost optimization', 'High availability']
    },
    {
      icon: Server,
      title: 'Scalable Infrastructure',
      description: 'Auto-scaling solutions that grow with your business needs',
      benefits: ['Elastic scaling', 'Load balancing', 'Resource optimization']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with compliance and monitoring',
      benefits: ['Data encryption', 'Access control', 'Audit trails']
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized infrastructure for maximum speed and reliability',
      benefits: ['99.9% uptime', 'Low latency', 'Global CDN']
    }
  ];

  const services = [
    {
      title: 'Cloud Migration',
      description: 'Seamless migration to the cloud with zero downtime',
      icon: '🚀',
      features: ['Assessment & planning', 'Data migration', 'Application modernization']
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Automated deployment and continuous integration',
      icon: '⚙️',
      features: ['Pipeline automation', 'Container orchestration', 'Monitoring & logging']
    },
    {
      title: 'Database Management',
      description: 'Managed database services with high availability',
      icon: '🗄️',
      features: ['Database optimization', 'Backup & recovery', 'Performance tuning']
    },
    {
      title: 'Disaster Recovery',
      description: 'Comprehensive backup and disaster recovery solutions',
      icon: '🛡️',
      features: ['Automated backups', 'Failover systems', 'RTO/RPO optimization']
    },
    {
      title: 'Monitoring & Analytics',
      description: '24/7 monitoring with advanced analytics and alerting',
      icon: '📊',
      features: ['Real-time monitoring', 'Performance analytics', 'Predictive alerts']
    },
    {
      title: 'Cost Optimization',
      description: 'Reduce cloud costs while maintaining performance',
      icon: '💰',
      features: ['Resource optimization', 'Cost analysis', 'Right-sizing']
    }
  ];

  const cloudProviders = [
    { name: 'AWS', logo: '☁️', description: 'Amazon Web Services' },
    { name: 'Azure', logo: '🔵', description: 'Microsoft Azure' },
    { name: 'GCP', logo: '🔴', description: 'Google Cloud Platform' },
    { name: 'Hybrid', logo: '🔗', description: 'Multi-cloud solutions' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      </div><Helmet>
        </Helmet><title>Cloud Infrastructure | Zion Tech Group</title>
        <meta name="description" content="Professional Cloud Infrastructure services by Zion Tech Group. Advanced AI and IT solutions for your business." />

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with our advanced cloud infrastructure solutions. 
            Powered by cutting-edge AI technology and industry expertise.
          </p>
      {/* Features Section */}
      <section className="py-16 px-4">
        </section><div className="
          </div><div className="text-center mb-12">
            </div><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Cloud Infrastructure?
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our cloud infrastructure solutions deliver unmatched performance, security, and scalability.
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              </div><div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                </div><feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white/5">
        </section><div className="
          </div><div className="text-center mb-12">
            </div><h2 className="text-3xl md: text-4xl font-bold text-white mb-4">
              Key Benefits,
  </
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our cloud infrastructure solutions for your business.
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              </div><div key={index} className="flex items-center space-x-3">
                </div><CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Global Scale</h3>
                <p className="text-gray-300">Scale your applications globally with our worldwide infrastructure</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Managed Services</h3>
                <p className="text-gray-300">Focus on your business while we manage your cloud infrastructure</p>
              </div>
            </div>
          </div>
        </div>
            Ready to Get Started?
          <p className="text-xl text-purple-100 mb-8">
            Contact our experts to discuss your cloud infrastructure needs and get a customized solution.
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            </div><button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
              </button><Phone className="mr-2 h-5 w-5" />
              Call Now
  </
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
              </button><Mail className="mr-2 h-5 w-5" />
              Email Us
  </
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default CloudInfrastructurePage;
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
              <Mail className="mr-2 h-5 w-5" />
              Email Us
  )
}
export default CloudInfrastructurePage</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></span></button></p></p></p></p></p></h1></h2></h2></h2></h2></h3></section></section></section>
