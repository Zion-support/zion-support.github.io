'use client';
import React from 'react';
import { RefreshCw, Target, Users, BarChart, Cloud, Shield, Zap, ArrowRight, CheckCircle, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const DigitalTransformationPage: React.FC = () => {
  const phases = [
    {
      title: 'Assessment & Strategy',
      description: 'Comprehensive analysis of current state and digital readiness',
      icon: Target,
      duration: '2-4 weeks',
      deliverables: [
        'Digital maturity assessment',
        'Technology gap analysis',
        'Strategic roadmap development',
        'ROI projections'
      ]
    },
    {
      title: 'Planning & Design',
      description: 'Detailed planning and architecture design for transformation',
      icon: Users,
      duration: '3-6 weeks',
      deliverables: [
        'Solution architecture design',
        'Implementation timeline',
        'Change management plan',
        'Resource allocation strategy'
      ]
    },
    {
      title: 'Implementation',
      description: 'Phased implementation of digital solutions and processes',
      icon: Cloud,
      duration: '8-16 weeks',
      deliverables: [
        'System integration',
        'Process automation',
        'User training',
        'Performance monitoring'
      ]
    },
    {
      title: 'Optimization',
      description: 'Continuous improvement and optimization of digital systems',
      icon: TrendingUp,
      duration: 'Ongoing',
      deliverables: [
        'Performance optimization',
        'User feedback integration',
        'Technology updates',
        'Continuous monitoring'
      ]
    }
  ];

  const solutions = [
    {
      title: 'Process Automation',
      description: 'Automate repetitive tasks and streamline workflows',
      benefits: ['50% time savings', 'Reduced errors', 'Improved efficiency'],
      icon: Zap
    },
    {
      title: 'Cloud Migration',
      description: 'Move to cloud infrastructure for scalability and flexibility',
      benefits: ['Cost reduction', 'Better scalability', 'Enhanced security'],
      icon: Cloud
    },
    {
      title: 'Data Analytics',
      description: 'Implement advanced analytics for data-driven decisions',
      benefits: ['Better insights', 'Predictive analytics', 'Improved forecasting'],
      icon: BarChart
    },
    {
      title: 'Security Enhancement',
      description: 'Strengthen cybersecurity and compliance measures',
      benefits: ['Enhanced protection', 'Compliance assurance', 'Risk mitigation'],
      icon: Shield
    }
  ];

  const benefits = [
    {
      title: 'Increased Efficiency',
      description: 'Streamline operations and reduce manual work by up to 70%',
      metric: '70% efficiency gain'
    },
    {
      title: 'Cost Reduction',
      description: 'Reduce operational costs through automation and optimization',
      metric: '40% cost savings'
    },
    {
      title: 'Better Customer Experience',
      description: 'Improve customer satisfaction with faster, more reliable services',
      metric: '85% customer satisfaction'
    },
    {
      title: 'Competitive Advantage',
      description: 'Stay ahead of competitors with modern digital capabilities',
      metric: '3 x faster innovation'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">{/* Hero Section */}</div>
      <div className="container mx-auto px-4 py-16"></div>
        <div className="text-center mb-16"></div>
          <h1 className="text-5 xl font-bold text-white mb-6"></h1></<<<h1>Digital</h1></h1> <span className="text-cyan-400"></span></<<<span>Transformation</span></span><p className="text-xl text-gray-300 max-w-3 xl mx-auto mb-8">Transform your business with cutting-edge digital solutions. Our comprehensive approach helps you modernize operations,</p></<<<p>improve</p></<<p>efficiency</p>, and stay competitive in the digital age.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            ></Lin>
              <RefreshCw className="w-5 h-5 mr-2" >Start Transformation</RefreshC>
            </RefreshCw>
            <Link
              href="/consultation"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            ></Lin>
              <Target className="w-5 h-5 mr-2" >Free Assessment</Targe>
            </Target>
          </div>
        </div>

        {/* Transformation Phases */}
        <div className="mb-16"></div>
          <h2 className="text-3 xl font-bold text-white text-center mb-12"></h2></<<<h2>Our</h2></h2> <span className="text-cyan-400">Transformation</span></<<<span>Process</span></span>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">{phases.map((phase, index) => (</div>
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2 xl p-6 border border-gray-600 hover:border-cyan-400/50 transition-all duration-300"
              ></div>
                <div className="p-3 bg-cyan-400 rounded-lg w-fit mb-4"></div>
                  <phase.icon className="w-6 h-6 text-white" /></phase>
                <h3 className="text-xl font-semibold text-white mb-3">{phase.title}</h>
                <p className="text-gray-300 mb-4"></p>{phase.description}<div className="text-cyan-400 text-sm font-medium mb-4"></div></<<<div>Duration</div></div>: {phase.duration}<ul className="space-y-2">{phase.deliverables.map((deliverable, deliverableIndex) => (</u>
                    <li key={deliverableIndex} className="flex items-center text-sm text-gray-300"></l>
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" >{deliverable}</CheckCircl>
                    </CheckCircle>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Solutions Section */}
        <div className="mb-16"></div>
          <h2 className="text-3 xl font-bold text-white text-center mb-12"></h2></<<<h2>Digital</h2></h2> <span className="text-cyan-400"></span></<<<span>Solutions</span></span><div className="grid md:grid-cols-2 gap-8">{solutions.map((solution, index) => (</div>
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-gray-600 hover:border-cyan-400/50 transition-all duration-300"
              ></div>
                <div className="flex items-start space-x-4"></div>
                  <div className="p-3 bg-cyan-400 rounded-lg"></div>
                    <solution.icon className="w-6 h-6 text-white" /></solutio>
                  </div>
                  <div className="flex-1"></div>
                    <h3 className="text-2 xl font-semibold text-white mb-4"></h>{solution.title}<p className="text-gray-300 mb-6"></p>{solution.description}<ul className="space-y-2">{solution.benefits.map((benefit, benefitIndex) => (</u>
                        <li key={benefitIndex} className="flex items-center text-cyan-400"></l>
                          <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" >{benefit}</CheckCircl>
                        </CheckCircle>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16"></div>
          <h2 className="text-3 xl font-bold text-white text-center mb-12"></h2></<<<h2>Transformation</h2></h2> <span className="text-cyan-400"></span></<<<span>Benefits</span></span><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">{benefits.map((benefit, index) => (</div>
              <div key={index} className="text-center"></div>
                <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-fit mx-auto mb-4"></div>
                  <TrendingUp className="w-8 h-8 text-white" /></TrendingU>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h>
                <p className="text-gray-300 mb-4"></p>{benefit.description}<div className="text-cyan-400 font-bold text-lg">{benefit.metric}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Focus */}
        <div className="mb-16"></div>
          <h2 className="text-3 xl font-bold text-white text-center mb-12"></h2></<<<h2>Industry</h2></h2> <span className="text-cyan-400">Expertise</spa>
          </h2>
          <div className="grid md:grid-cols-3 gap-8"></div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2 xl p-8 text-center"></div>
              <h3 className="text-xl font-semibold text-white mb-4"></h3></<<<h3>Healthcare</h3></h3><p className="text-gray-300 mb-4">HIPAA-compliant digital solutions for healthcare providers</p>
              <ul className="text-sm text-cyan-400 space-y-1"></u>
                <li>• Electronic Health Records</li><li>• Telemedicine Platforms</li><li>• Patient Management Systems</l>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2 xl p-8 text-center"></div>
              <h3 className="text-xl font-semibold text-white mb-4"></h3></<<<h3>Finance</h3></h3><p className="text-gray-300 mb-4">Secure financial technology solutions and compliance</p>
              <ul className="text-sm text-cyan-400 space-y-1"></u>
                <li>• Banking Systems</li><li>• Payment Processing</li><li>• Risk Management</l>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2 xl p-8 text-center"></div>
              <h3 className="text-xl font-semibold text-white mb-4"></h3></<<<h3>Manufacturing</h3></h3><p className="text-gray-300 mb-4">Industry 4.0 solutions for smart manufacturing</p>
              <ul className="text-sm text-cyan-400 space-y-1"></u>
                <li>• IoT Integration</li><li>• Predictive Maintenance</li><li>• Supply Chain Optimization</l>
              </ul>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-16"></div>
          <h2 className="text-3 xl font-bold text-white text-center mb-12"></h2></<<<h2>Success</h2></h2> <span className="text-cyan-400">Stories</spa>
          </h2>
          <div className="grid md:grid-cols-2 gap-8"></div>
            <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2 xl p-8"></div>
              <h3 className="text-2 xl font-semibold text-white mb-4"></h3></<<<h3>Manufacturing</h3></<<h3>Company</h3><p className="text-gray-300 mb-4">"Zion Tech Group helped us implement IoT sensors and predictive analytics,</p></<<<p>reducing</p></<<p>equipment</p> downtime by 60% and increasing production efficiency by 40%."<div className="text-cyan-400 font-semibold">- CEO, Tech Manufacturing Inc.</div>
            </div>
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2 xl p-8"></div>
              <h3 className="text-2 xl font-semibold text-white mb-4"></h3></<<<h3>Healthcare</h3></<<h3>Provider</h3><p className="text-gray-300 mb-4">"Their digital transformation solution streamlined our patient management,</p></<<<p>reducing</p></<<p>administrative</p> overhead by 50% and improving patient satisfaction scores."<div className="text-purple-400 font-semibold">- CTO, Regional Medical Center</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2 xl p-12 text-center"></div>
          <h2 className="text-3 xl font-bold text-white mb-4"></h2></<<<h2>Ready</h2></<<h2>to</h2> Transform Your Business?<p className="text-xl text-gray-300 mb-8 max-w-2 xl mx-auto">Join hundreds of businesses that have successfully transformed their operations with our digital solutions.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            ></Lin>
              <ArrowRight className="w-5 h-5 mr-2" >Start Your Transformation</ArrowRigh>
            </ArrowRight>
            <Link
              href="/case-studies"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            ></Lin>
              <BarChart className="w-5 h-5 mr-2" >View Case Studies</BarChar>
            </BarChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalTransformationPage;