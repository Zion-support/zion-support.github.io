import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

const AIEcommercePlatform: NextPage = () => {
  return (
    <Layout 
      title="AI-Powered E-commerce Platform Case Study - Zion Tech Solutions"
      description="Discover how we built a comprehensive AI-powered e-commerce platform that increased conversion rates by 300% and reduced customer service queries by 50% for TechRetail Inc."
    >
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <main className="container mx-auto px-4 py-16">
          <article className="max-w-6xl mx-auto text-white">
            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold mb-4">
                <span>🛒</span>
                <span>CASE STUDY</span>
              </div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                AI-Powered E-commerce Platform
              </h1>
              <p className="text-2xl text-gray-200 mb-8">
                How we transformed TechRetail Inc.'s online presence with cutting-edge AI technology
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-300">
                <span>Client: TechRetail Inc.</span>
                <span>Industry: E-commerce</span>
                <span>Duration: 8 months</span>
                <span>Team Size: 12 experts</span>
              </div>
            </div>

            {/* Key Results Banner */}
            <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-center mb-8 text-white">Key Results</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">300%</div>
                  <div className="text-sm text-gray-200">Increase in Conversion Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">50%</div>
                  <div className="text-sm text-gray-200">Reduction in Customer Service Queries</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">40%</div>
                  <div className="text-sm text-gray-200">Increase in Average Order Value</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">25%</div>
                  <div className="text-sm text-gray-200">Reduction in Cart Abandonment</div>
                </div>
              </div>
            </div>

            {/* Challenge Section */}
            <section className="mb-16">
              <h2 className="text-4xl font-bold mb-8 text-white">The Challenge</h2>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <p className="text-lg text-gray-200 mb-6">
                  TechRetail Inc., a mid-sized e-commerce company, was struggling with declining conversion rates, 
                  high cart abandonment, and increasing customer service costs. Their existing platform lacked 
                  personalization capabilities and couldn't scale to meet growing demand.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-white">Key Pain Points</h3>
                    <ul className="space-y-3 text-gray-200">
                      <li className="flex items-start gap-3">
                        <span className="text-red-400 mt-1">•</span>
                        <span>Low conversion rates (2.1% industry average)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-400 mt-1">•</span>
                        <span>High cart abandonment (68% rate)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-400 mt-1">•</span>
                        <span>Limited personalization capabilities</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-400 mt-1">•</span>
                        <span>Expensive customer service operations</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-400 mt-1">•</span>
                        <span>Outdated technology stack</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-white">Business Impact</h3>
                    <div className="space-y-4">
                      <div className="bg-red-600/20 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-red-400">$2.3M</div>
                        <div className="text-sm text-gray-200">Annual revenue loss from cart abandonment</div>
                      </div>
                      <div className="bg-yellow-600/20 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-yellow-400">$800K</div>
                        <div className="text-sm text-gray-200">Annual customer service costs</div>
                      </div>
                      <div className="bg-blue-600/20 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-blue-400">15%</div>
                        <div className="text-sm text-gray-200">Decline in customer satisfaction</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Solution Section */}
            <section className="mb-16">
              <h2 className="text-4xl font-bold mb-8 text-white">Our Solution</h2>
              
              <div className="space-y-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-6 text-white">AI-Powered Personalization Engine</h3>
                  <p className="text-lg text-gray-200 mb-6">
                    We developed a comprehensive AI system that analyzes customer behavior, preferences, and purchase history 
                    to deliver highly personalized shopping experiences in real-time.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-4xl mb-4">🎯</div>
                      <h4 className="text-xl font-bold mb-2 text-white">Product Recommendations</h4>
                      <p className="text-gray-300 text-sm">
                        Machine learning algorithms that suggest products based on browsing history, 
                        purchase patterns, and similar customer profiles.
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-4xl mb-4">💰</div>
                      <h4 className="text-xl font-bold mb-2 text-white">Dynamic Pricing</h4>
                      <p className="text-gray-300 text-sm">
                        AI-driven pricing optimization that adjusts prices based on demand, 
                        inventory levels, and customer segments.
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-4xl mb-4">📱</div>
                      <h4 className="text-xl font-bold mb-2 text-white">Content Personalization</h4>
                      <p className="text-gray-300 text-sm">
                        Personalized homepage layouts, product descriptions, and promotional content 
                        tailored to individual customer preferences.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-6 text-white">Intelligent Customer Service</h3>
                  <p className="text-lg text-gray-200 mb-6">
                    We implemented an AI-powered chatbot system that handles 80% of customer inquiries automatically, 
                    while seamlessly escalating complex issues to human agents.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-bold mb-4 text-white">Chatbot Capabilities</h4>
                      <ul className="space-y-3 text-gray-200">
                        <li className="flex items-start gap-3">
                          <span className="text-green-400 mt-1">✓</span>
                          <span>Natural language processing for customer queries</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-400 mt-1">✓</span>
                          <span>Order tracking and status updates</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-400 mt-1">✓</span>
                          <span>Product recommendations and comparisons</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-400 mt-1">✓</span>
                          <span>Return and refund processing</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-400 mt-1">✓</span>
                          <span>24/7 multilingual support</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-bold mb-4 text-white">Performance Metrics</h4>
                      <div className="space-y-4">
                        <div className="bg-blue-600/20 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-blue-400">80%</div>
                          <div className="text-sm text-gray-200">of queries resolved automatically</div>
                        </div>
                        <div className="bg-green-600/20 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-green-400">95%</div>
                          <div className="text-sm text-gray-200">customer satisfaction rate</div>
                        </div>
                        <div className="bg-purple-600/20 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-purple-400">3s</div>
                          <div className="text-sm text-gray-200">average response time</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-6 text-white">Predictive Analytics & Inventory Management</h3>
                  <p className="text-lg text-gray-200 mb-6">
                    Our AI system analyzes sales patterns, seasonal trends, and external factors to predict demand 
                    and optimize inventory levels, reducing stockouts and overstock situations.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-bold mb-4 text-white">Key Features</h4>
                      <ul className="space-y-3 text-gray-200">
                        <li className="flex items-start gap-3">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>Demand forecasting with 92% accuracy</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>Automated reorder point calculations</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>Seasonal trend analysis</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>Supplier performance optimization</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-bold mb-4 text-white">Business Impact</h4>
                      <div className="space-y-4">
                        <div className="bg-green-600/20 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-green-400">35%</div>
                          <div className="text-sm text-gray-200">reduction in stockouts</div>
                        </div>
                        <div className="bg-blue-600/20 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-blue-400">20%</div>
                          <div className="text-sm text-gray-200">reduction in overstock</div>
                        </div>
                        <div className="bg-purple-600/20 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-purple-400">$1.2M</div>
                          <div className="text-sm text-gray-200">annual cost savings</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Technology Stack */}
            <section className="mb-16">
              <h2 className="text-4xl font-bold mb-8 text-white">Technology Stack</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-6 text-white">Frontend & Backend</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-200">React.js with TypeScript</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="text-gray-200">Node.js with Express</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-200">Next.js for SSR/SSG</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <span className="text-gray-200">GraphQL API</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <span className="text-gray-200">Redis for caching</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-6 text-white">AI & Machine Learning</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-200">TensorFlow & PyTorch</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="text-gray-200">Scikit-learn</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-200">Apache Kafka for streaming</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <span className="text-gray-200">Elasticsearch for search</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <span className="text-gray-200">Docker & Kubernetes</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mt-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Cloud Infrastructure</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl mb-4">☁️</div>
                    <h4 className="text-xl font-bold mb-2 text-white">AWS Services</h4>
                    <p className="text-gray-300 text-sm">
                      EC2, S3, Lambda, RDS, ElastiCache, and CloudFront for scalable infrastructure
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl mb-4">🔧</div>
                    <h4 className="text-xl font-bold mb-2 text-white">DevOps Tools</h4>
                    <p className="text-gray-300 text-sm">
                      Jenkins, Terraform, and monitoring with CloudWatch and DataDog
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl mb-4">🔒</div>
                    <h4 className="text-xl font-bold mb-2 text-white">Security</h4>
                    <p className="text-gray-300 text-sm">
                      WAF, SSL certificates, and compliance with PCI DSS standards
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Implementation Process */}
            <section className="mb-16">
              <h2 className="text-4xl font-bold mb-8 text-white">Implementation Process</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">1</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-white">Discovery & Analysis (Month 1)</h3>
                    <p className="text-gray-200 mb-4">
                      We conducted a comprehensive analysis of TechRetail's existing systems, customer data, and business processes. 
                      This included user journey mapping, technical debt assessment, and stakeholder interviews.
                    </p>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Analyzed 2 years of customer behavior data</li>
                      <li>• Identified key pain points and opportunities</li>
                      <li>• Created detailed technical specifications</li>
                      <li>• Established success metrics and KPIs</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">2</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-white">AI Model Development (Months 2-4)</h3>
                    <p className="text-gray-200 mb-4">
                      Our data science team developed and trained machine learning models for personalization, 
                      demand forecasting, and customer service automation.
                    </p>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Built recommendation engine with 95% accuracy</li>
                      <li>• Developed demand forecasting models</li>
                      <li>• Created natural language processing for chatbot</li>
                      <li>• Implemented A/B testing framework</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">3</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-white">Platform Development (Months 3-6)</h3>
                    <p className="text-gray-200 mb-4">
                      We built the new e-commerce platform with modern architecture, integrating AI capabilities 
                      and ensuring scalability for future growth.
                    </p>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Developed responsive frontend with React</li>
                      <li>• Built scalable backend with microservices</li>
                      <li>• Integrated AI models into production</li>
                      <li>• Implemented comprehensive testing</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">4</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-white">Testing & Optimization (Months 6-7)</h3>
                    <p className="text-gray-200 mb-4">
                      We conducted extensive testing, performance optimization, and user acceptance testing 
                      to ensure the platform met all requirements and performance standards.
                    </p>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Load testing with 10,000+ concurrent users</li>
                      <li>• Security penetration testing</li>
                      <li>• User acceptance testing with real customers</li>
                      <li>• Performance optimization and tuning</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">5</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-white">Launch & Support (Month 8)</h3>
                    <p className="text-gray-200 mb-4">
                      We executed a smooth launch with comprehensive monitoring and provided ongoing support 
                      to ensure optimal performance and user satisfaction.
                    </p>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Phased rollout to minimize risk</li>
                      <li>• 24/7 monitoring and support</li>
                      <li>• Staff training and documentation</li>
                      <li>• Continuous optimization based on data</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Results Section */}
            <section className="mb-16">
              <h2 className="text-4xl font-bold mb-8 text-white">Results & Impact</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-6 text-white">Quantitative Results</h3>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-200">Conversion Rate</span>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-400">6.3%</div>
                        <div className="text-sm text-gray-400">from 2.1% (+300%)</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-200">Cart Abandonment</span>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-400">51%</div>
                        <div className="text-sm text-gray-400">from 68% (-25%)</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-200">Average Order Value</span>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-400">$127</div>
                        <div className="text-sm text-gray-400">from $91 (+40%)</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-200">Customer Service Queries</span>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-400">50%</div>
                        <div className="text-sm text-gray-400">reduction</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-6 text-white">Business Impact</h3>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-200">Annual Revenue</span>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-400">$8.7M</div>
                        <div className="text-sm text-gray-400">from $5.2M (+67%)</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-200">Customer Satisfaction</span>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-400">4.8/5</div>
                        <div className="text-sm text-gray-400">from 3.2/5 (+50%)</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-200">Operating Costs</span>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-400">$1.2M</div>
                        <div className="text-sm text-gray-400">saved annually</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-200">Page Load Time</span>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-400">1.2s</div>
                        <div className="text-sm text-gray-400">from 4.8s (-75%)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Client Testimonial</h3>
                <blockquote className="text-lg text-gray-200 mb-6 italic">
                  "Zion Tech Solutions transformed our entire e-commerce platform. The AI-powered personalization 
                  has been a game-changer for our business. We've seen incredible results in just 8 months, 
                  and our customers love the improved experience. The ROI has exceeded our expectations."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                    SJ
                  </div>
                  <div>
                    <div className="font-semibold text-white">Sarah Johnson</div>
                    <div className="text-sm text-gray-400">CEO, TechRetail Inc.</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Lessons Learned */}
            <section className="mb-16">
              <h2 className="text-4xl font-bold mb-8 text-white">Lessons Learned</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-6 text-white">Key Success Factors</h3>
                  <ul className="space-y-4 text-gray-200">
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span><strong>Data Quality:</strong> Clean, comprehensive data was crucial for AI model accuracy</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span><strong>User-Centric Design:</strong> Focusing on user experience drove adoption and engagement</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span><strong>Iterative Approach:</strong> Continuous testing and optimization improved results</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span><strong>Change Management:</strong> Proper training and support ensured smooth transition</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-6 text-white">Challenges Overcome</h3>
                  <ul className="space-y-4 text-gray-200">
                    <li className="flex items-start gap-3">
                      <span className="text-yellow-400 mt-1">⚠</span>
                      <span><strong>Data Integration:</strong> Legacy systems required careful data migration and mapping</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-yellow-400 mt-1">⚠</span>
                      <span><strong>Performance Optimization:</strong> AI models needed optimization for real-time processing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-yellow-400 mt-1">⚠</span>
                      <span><strong>User Adoption:</strong> Gradual rollout helped users adapt to new features</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-yellow-400 mt-1">⚠</span>
                      <span><strong>Scalability:</strong> Architecture designed for future growth and expansion</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">Ready to Transform Your E-commerce Platform?</h2>
              <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
                Let's discuss how AI-powered solutions can revolutionize your business and deliver similar results.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link 
                  href="/contact" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
                >
                  Start Your Project
                </Link>
                <Link 
                  href="/portfolio" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-10 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
                >
                  View More Case Studies
                </Link>
              </div>
            </div>
          </article>
        </main>
      </div>
    </Layout>
  );
};

export default AIEcommercePlatform;