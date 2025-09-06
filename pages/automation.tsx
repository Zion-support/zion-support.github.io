} from 'lucide-react';
export default /**
 * AutomationPage - Function description
 */
function AutomationPage() {
  const features = [;
    {
      description: 'Create complex workflows with drag-and-drop interface'
    }
    {
      icon: <Bot className='w-8 h-8 text-white' />
      title: 'AI-Powered Bots'
      description: 'Intelligent automation agents that learn and adapt'
    }
    {
      icon: <BarChart3 className='w-8 h-8 text-white' />
      title: 'Process Analytics'
      description: 'Real-time insights into your automation performance'
    }
    {
      icon: <Zap className='w-8 h-8 text-white' />
      title: 'Smart Triggers'
      description: 'Automated responses based on events and conditions'
    }
  ];
  const benefits = [
  const benefits = [;
    'Reduce manual tasks by 80%',;
    'Improve process accuracy',;
    'Scale operations efficiently',;
    '24/7 automated operations',;
    'Real-time monitoring',;
      icon: <Workflow className='w - 8 h - 8 text - white' />,
      title: 'Workflow Automation',
      description: 'Create complex workflows with drag - and - drop interface',
    },
    {
      icon: <Bot className='w - 8 h - 8 text - white' />,
      title: 'AI - Powered Bots',
      description: 'Intelligent automation agents that learn and adapt',
    },
    {
      icon: <BarChart3 className='w - 8 h - 8 text - white' />,
      title: 'Process Analytics',
      description: 'Real - time insights into your automation performance',
    },
    {
      icon: <Zap className='w - 8 h - 8 text - white' />,
      title: 'Smart Triggers',
      description: 'Automated responses based on events and conditions',
    },
  ];
;
  const benefits = [;
    'Reduce manual tasks by 80%',
    'Improve process accuracy',
    'Scale operations efficiently',
    '24 / 7 automated operations',
    'Real - time monitoring',
    'Custom integration support',  ];
;
  return (
              </a>
            </div>
          </div>
        </section>
                <div
                  key={index}
                  className='p-8 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300'>;
                  <div className='w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center'>;
                    {feature && feature.icon}
                  </div>;
                  <h3 className='text-xl font-bold text-white mb-4'>;
                    {feature && feature.title}
                  </h3>;
                  <p className='text-gray-400 leading-relaxed'>                    {feature && feature.description}
                  </p>;
                </div>;
              ))}
        {/* Benefits Section */}
        <section className='py-24 bg-gray-900'>;
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>;
              <div>;
                <h2 className='text-3xl sm:text-4xl font-bold text-white mb-8'>;
                  Transform Your Business with Automation;
                </h2>;
                <div className='space-y-6'>;
                  {benefits && benefits.map((benefit, index) => (;
                    <div key={index} className='flex items-start'>;
                      <div className='w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 mt-1'>;
                        <Check className='w-4 h-4 text-blue-500' />;
                      </div>;
                      <span className='text-gray-300 text-lg'>{benefit}</span>                    </div>;
        {/* Benefits Section */}
        <section className="py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                  Transform Your Business with Automation
                </h2>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 mt-1">
                        <Check className="w-4 h-4 text-blue-500" />
                      </div>
                      <span className="text-gray-300 text-lg">{benefit}</span>
                    </div>
                  ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
                    </div>;
                  </div>;
                </div>;
              </div>;
            </div>;
          </div>;
        </section>;
              <a
                href='/contact'
                className='bg-white text-blue-600 hover:bg-gray-100'>;
                Start Free Trial;
              </a>;
              <a
              </a>;
            </div>;
          </div>;
        </section>;
      </div>;
    </>);
;
