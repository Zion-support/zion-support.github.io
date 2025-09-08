import React from 'react';
import Head from 'next/head';
import Link from 'next/link'} from 'lucide-react';

export default function Solutions(...args: any[]): any {
  const solutions = [
    {
      title: 'AI Content Creation',
      description:
        'Automated content generation for blogs, social media, and marketing materials',
      icon: FileText,
      href: '/solutions/ai-content-creation',
      features: [
        'Blog Post Generation',
        'Social Media Content',
        'Email Campaigns',
        'SEO Optimization' ],
      color: 'blue' }, {
      title: 'Email Automation',
      description:
        'Streamlined email workflows and automated customer communication',
      icon: Mail,
      href: '/solutions/email-automation',
      features: [
        'Drip Campaigns',
        'Welcome Sequences',
        'Abandoned Cart Recovery',
        'Newsletter Automation' ],
      color: 'green' }, {
      title: 'Customer Support Platform',
      description: 'AI-powered customer service and support ticket management',
      icon: MessageSquare,
      href: '/solutions/customer-support',
      features: [
        'Live Chat Integration',
        'Ticket Management',
        'Knowledge Base',
        'Response Automation' ],
      color: 'purple' }, {
      title: 'Event Management',
      description: 'Complete event planning and management solution',
      icon: Calendar,
      href: '/solutions/event-management',
      features: [
        'Event Registration',
        'Attendee Management',
        'Payment Processing',
        'Analytics Dashboard' ],
      color: 'orange' }, {
      title: 'Project Management',
      description:
        'Comprehensive project tracking and team collaboration tools',
      icon: Workflow,
      href: '/solutions/project-management',
      features: [
        'Task Management',
        'Team Collaboration',
        'Time Tracking',
        'Progress Reports' ],
      color: 'indigo' }, {
      title: 'Workflow Automation',
      description: 'Automate repetitive business processes and workflows',
      icon: Zap,
      href: '/solutions/workflow-automation',
      features: [
        'Process Automation',
        'Integration Management',
        'Approval Workflows',
        'Performance Monitoring' ],
      color: 'red' } ];

  const stats = [
    { number: '95%', label: 'Process Efficiency' }, { number: '60%', label: 'Time Savings' }, { number: '40%', label: 'Cost Reduction' }, { number: '99%', label: 'Customer Satisfaction' }];

  return (
    <>
      <Head>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Target className="h-8 w-8 text-blue-600 mr-3" />


              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Technology Solutions for Every Business
              </h1>"
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From startups to enterprises, we provide tailored technology
                solutions that drive growth, efficiency, and innovation.
              </p>
            </div>
          </div>
        </section>


              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We offer specialized solutions designed to meet the unique needs
                of different business types and sizes.
              </p>
            </div>

                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => ("
                      <li key={featureIndex} className="flex items-center">"
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3" />"
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  >
                    Learn More"
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>

                </div>
              ))}
            </div>
          </div>
        </section>


                  <p className="text-gray-600">{benefit.description}</p>
                </div>

              ))}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Industry Solutions
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Transform your business with our comprehensive suite of AI, cloud, and cybersecurity solutions designed for enterprise scale.
            </p>
          </div>
        </section>


                <p className="text-lg text-gray-600 mb-8">
                  Our solutions are designed to work across various industries,
                  with deep understanding of sector-specific challenges and
                  requirements.
                </p>

                      <span className="text-gray-700">{industry}</span>
                    </div>
                  ))}
                </div>
              </div>

                    <CheckCircle className="w-5 h-5 mr-3" />
                    <span>Free consultation and assessment</span>
                  </div>"
                  <div className="flex items-center">"
                    <CheckCircle className="w-5 h-5 mr-3" />
                    <span>Customized solution design</span>
                  </div>"
                  <div className="flex items-center">"
                    <CheckCircle className="w-5 h-5 mr-3" />
                    <span>Expert implementation support</span>
                  </div>
                </div>

                >
                  Get Started"
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>


            <h2 className="text-3xl font-bold text-white mb-6">
              Find Your Perfect Solution
            </h2>"
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">

                View Our Services

              </Link>
            </div>
          </div>
        </section>


