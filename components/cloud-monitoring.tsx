
import Button from '../components/ui/Button;
import { Activity, BarChart3, AlertTriangle, Clock, Database, Globe, Lock, Shield, TrendingUp, Users, Zap, ArrowRight, Play, CheckCircle, Star, Server, Cloud, Eye, Bell, Settings, Code } from lucide-react';

export default function CloudMonitoringPage() {
  const features = [
    {
      icon: <Activity className="w-8 h-8 text-white />,
      title: 'Real-time Monitoring,
      description: Monitor your entire infrastructure in real-time with sub-second latency and instant alerting.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600,
      gradient: from-green-400 to-emerald-500'},
    {
      icon: <BarChart3 className=w-8 h-8 text-white" />,
      title: 'Advanced Analytics,
      description: Deep insights into performance metrics, resource utilization, and business intelligence.';
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600,
      gradient: from-blue-400 to-cyan-500'},
    {
      icon: <AlertTriangle className="w-8 h-8 text-white />,
      title: 'Smart Alerting,
      description: AI-powered anomaly detection and intelligent alerting to prevent issues before they impact users.',
      color: 'bg-gradient-to-br from-red-500 to-pink-600,
      gradient: from-red-400 to-pink-500'},
    {
      icon: <Database className=w-8 h-8 text-white" />,
      title: 'Multi-Cloud Support,
      description: Monitor AWS, Azure, Google Cloud, and on-premises infrastructure from a single dashboard.';
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600,
      gradient: from-purple-400 to-indigo-500'},
    {
      icon: <Shield className="w-8 h-8 text-white />,
      title: 'Security Monitoring,
      description: Comprehensive security monitoring with threat detection, compliance reporting, and audit trails.';
      color: 'bg-gradient-to-br from-yellow-500 to-orange-600,
      gradient: from-yellow-400 to-orange-500'},
    {
      icon: <Zap className=w-8 h-8 text-white" />,
      title: 'Auto-scaling,
      description: Intelligent auto-scaling based on real-time metrics and predictive analytics.',
      color: 'bg-gradient-to-br from-teal-500 to-blue-600,
      gradient: from-teal-400 to-blue-500'}],


      metrics: ['CPU UsageMemory UtilizationDisk I/ONetwork PerformanceContainer Metrics]
    }

    {
      }
      "category": 'Security''
      "icon": <Shield className='w-6 h-6 text-red-400' />'
      "metrics": [


    }
  ];

const integrations = [;
    { "name": 'AWS', "icon": '☁️', "description": 'CloudWatch integration','
},
    { "name": 'Azure', "icon": '🔷', "description": 'Monitor integration','
},
    { "name": 'GCP', "icon": '☁️', "description": 'Stackdriver integration','
},
    { "name": 'Docker', "icon": '🐳', "description": 'Container monitoring','
},
    { "name": 'Kubernetes', "icon": '☸️', "description": 'K8s native support','
},
    { "name": 'Slack', "icon": '💬', "description": 'Team notifications','
},
    { "name": 'PagerDuty', "icon": '🚨', "description": 'Incident management','
},
{ "name": 'Jira', "icon": '📋', "description": 'Issue tracking','
}
  ];

const useCases = [;
    {
      }
      "title": 'DevOps Teams','
"description":
        'Monitor CI/CD pipelines, deployment success rates, and infrastructure health.','
      "icon": '🔄','
      "benefits": [
        'Faster deployments','
        'Reduced downtime','
        'Better collaboration','
        'Automated scaling','
      ]
    },
    {
      }
      "title": 'SaaS Companies','

      "description":
        'Track user experience, application performance, and business metrics.','
      "icon": '💼','
      "benefits": [
        'User satisfaction','
        'Revenue optimization','
        'Competitive advantage','
        'Customer retention','
      ]
    },
    {

      }

      "title": 'E-commerce','
      "description":
        'Monitor website performance, payment processing, and inventory systems.','
      "icon": '🛒','
      "benefits": [
        'Higher conversion','
        'Faster checkout','
        'Inventory optimization','
        'Revenue growth','
      ]
    },
    {
      }
      "title": 'Financial Services','

      "description":
        'Ensure compliance, security, and 24/7 availability of critical systems.','
      "icon": '💰','
      "benefits": [
        'Regulatory compliance','
        'Fraud detection','
        'Risk management','
        'Customer trust','
      ]

    }
  ];
return (;
    <>
      <Head>

              Everything you need to monitor and optimize your infrastructure
            </p>
          </div>


                  {feature.title}
                </h3>;
                <p className='text-gray-400 leading-relaxed>;
                <p className=text - gray - 400 leading - relaxed">;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8>
            {features.map((feature, index) => (
              <Card
                key={index}
                className=text-center group bg-gray-800/50 border border-gray-700 hover:border-green-500/30 hover:bg-gray-800/80 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${(index * 0.1) + 0.2}s` }}
              >
                <div className="relative>
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg bg-gradient-to-br ${feature.color} shadow-xl`}>
                    {feature.icon}
                  </div>
                </div>
                <h3 className=text-xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors duration-300">
                  {feature.title}
                </h3>

                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Monitoring Capabilities */}

            </p>
          </div>
          <div className='grid grid-cols-1 "md":grid-cols-2 gap-8'>'
            {monitoringCapabilities.map((capability, index) => (

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8>
            {monitoringCapabilities.map((capability, index) => (
              <Card

                          {metric}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}

                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}


              Choose the plan that fits your monitoring needs
            </p>
          </div>


                      Most Popular;
                    </span>;
                  </div>;
                )}


                <ul className="space-y-4 mb-8>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className=flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 />
                      {feature}
                    </li>
                  ))}
                <Button;
                  href='/contact';'
                  className={`w-full ${plan && plan.buttonColor} text-white`}`                  size='lg'>;'
                  Get Started;
                  <ArrowRight className='w-5 h-5 ml-2' />                </Button>                  className={`w-full ${plan && plan.buttonColor} text-white`}`                  size="lg">"

                  Get Started;
                  <ArrowRight className="w-5 h-5 ml-2" />;"
                </Button>;
              </Card>;</li>;
                  ))}

                </ul>


                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>


              Connect with your favorite tools and platforms
            </p>
          </div>


            ))}
          </div>;
        </div>;
      </section>;
            ))}
          </div>;
        </div>;
      </section>;
              </Card>
            ))}
      {/* CTA Section */}

              Watch Demo
            </Button>
          </div>
        </div>
      </section>
    </>
            <Button;
              href='/contact;
              variant=secondary';
              size='lg;
            <Button;
              href=#demo';
              variant='outline;
              size=lg';
            <Button;
              href="/contact;
              variant=secondary";
              size="lg;
            <Button
              href=/contact"
              variant="secondary
              size=lg"
              className="bg-white text-green-600 hover:bg-gray-100 shadow-2xl>;
              Start Free Trial;
              <ArrowRight className=w-5 h-5 ml-2" />;
            </Button>;
            <Button
              href="#demo
              variant=outline"
              size="lg"


              Watch Demo;
            </Button>;
          </div>;
        </div>;
      </section>;
})}
    </>)}className='border-white text-white hover:bg-white hover:text-green-600 shadow-2xl;
            >;
              <Play className=w-5 h-5 mr-2' />;
              Watch Demo;
            </Button>;
          </div>;
        </div>;
      </section>;
    </>;
}

  );
}
    </>);
}
  )}
  )
}
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
