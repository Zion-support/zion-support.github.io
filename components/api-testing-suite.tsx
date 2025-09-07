



import { Code, Zap, Shield, BarChart3, CheckCircle, ArrowRight, Play, AlertTriangle, Clock, Database } from lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card;
import { Zap, Star } from lucide-react';
export default function APITestingSuitePage() {
  }
  const [isTesting, setIsTesting] = useState(false);

    }
  ];

const testTypes = [;
    {

    }
  ];

const handleTestAPI = async () => {
    }
    if (!apiEndpoint.trim());
  return;

    setIsTesting(true);
    // Simulate API testing,
setTimeout(() => {
      }
      setTestResults({

        ];
        "recommendations": [;
          'Consider implementing response caching for better performanceMonitor response times during peak usageImplement rate limiting headers for better API documentation''
];

      })setIsTesting(false)}, 3000)return (<>;
      <Head>;
        <title>API Testing Suite - Zion Tech Group | Comprehensive API Testing &;
          Monitoring Tool;

      })setIsTesting(false)}, 3000)}return (<>;
      <Head>;
<title>API Testing Suite - Zion Tech Group | Comprehensive API Testing &;
          Monitoring Tool;
        </title>;
        <meta;

      </Head>;
      {/* Hero Section */}
import { Code, Zap, Shield, BarChart3, CheckCircle, ArrowRight, Play, AlertTriangle, Clock, Database } from 'lucide-react;
export default function APITestingSuitePage() {
  const [testResults, setTestResults] = useState(null);
  const [apiEndpoint, setApiEndpoint] = useState(');
  const [apiKey, setApiKey] = useState(');


              />;
            </div>;
            <Button;
              onClick={handleTestAPI}

                  Test API Endpoint;
                </>;
              )}



            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

                      {feature.description}
              className=border-gray-500 text-gray-400 hover:bg-gray-500 hover:text-white shadow-2xl'>              href="#pricing;
              variant=outline";
              size="lg;
              className=border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white shadow-2xl";
              View Pricing;
            </Button>;
            <Button
              Our API testing suite provides everything you need to ensure your;
              APIs are reliable, performant, and secure.;
            </p>;
          </div>;
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed>
              Our API testing suite provides everything you need to ensure your APIs are reliable, performant, and secure.
            </p>
          </div>
          <div className=grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
                      className={`absolute -inset-2 bg-gradient-to-r from-transparent via-${feature && feature.gradient} to-transparent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`}
                    />;
                  </div>;
                  <div className='flex-1>;
                    <h3 className=text-2xl font-bold mb-4 text-white'>;
                      {feature && feature.title}
                    </h3>;
                    <p className='text-gray-400 leading-relaxed>                      {feature && feature.description}              Powerful Testing Features;
            </h2>;
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed>;
              Our API testing suite provides everything you need to ensure your APIs are reliable, performant, and secure.;
            </p>;
          </div>;

          <div className=grid grid-cols-1 lg:grid-cols-2 gap-8">;
            {features && features.map((feature, index) => (;
              <Card
                key={index}
                className="card-hover group border-gradient-indigo
                    </p>
                  </div>
                </div>
              </Card>
            ))}

                  {type.tests.map((test, testIndex) => (<li;
                      }
                      key={testIndex}
                      className='flex items-center text-gray-300;
                    >;
                      <CheckCircle className=w-4 h-4 text-indigo-400 mr-3 flex-shrink-0' />;
                  {type && type.tests.map((test, testIndex) => (;
                    <li key={testIndex} className=flex items-center text-gray-300">;
                      <CheckCircle className="w-4 h-4 text-indigo-400 mr-3 flex-shrink-0 />;
          </div>
        </div>
      </section>



          <div className="grid grid-cols-1 md:grid-cols-2 gap-8>
            {testTypes.map((type, index) => (
              <Card
                key={index}
                className=card-hover border-gradient-indigo"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold mb-4 text-white>{type.name}</h3>
                <p className=text-gray-400 mb-6">{type.description}</p>
                <ul className="space-y-2>
                  {type.tests.map((test, testIndex) => (
                    <li key={testIndex} className=flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-indigo-400 mr-3 flex-shrink-0 />
                      {test}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Test Results */}
      {testResults && (


                      {testResults.statusCode}
                    </span>;
                  </div>;
                </div>;
              </Card>;
              {/* Test Results */}

                  {testResults.tests.map((test, index) => (<div;
                      }
                      key={index}

                          {test.status}
                API Test Results
              </h2>
              <p className=text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
                Here's a sample API test result. Get comprehensive insights for your own API endpoints.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8>
              {/* Summary Card */}
              <Card className=border-gradient-indigo text-center">
                <h3 className="text-2xl font-bold mb-6 text-white>Test Summary</h3>
                <div className=space-y-4">
                  <div className="flex justify-between items-center>
                    <span className=text-gray-400">Status</span>
                    <span className="text-green-400 font-bold>Success</span>
                  </div>
                  <div className=flex justify-between items-center">
                    <span className="text-gray-400>Response Time</span>
                    <span className=text-indigo-400 font-bold">{testResults.responseTime}</span>
                  </div>
                  <div className="flex justify-between items-center>
                    <span className=text-gray-400">Status Code</span>
                    <span className="text-green-400 font-bold>{testResults.statusCode}</span>
                  </div>
                </div>
              </Card>


                  ))}
                </div>;
              </Card>;
              {/* Performance Metrics */}

                      {testResults.responseTime}
                    <span className=text-green-400 font-bold>24/7</span>                  </div>                  </div>
                  ))}
                        </span>
                        <span className=text-xs text-gray-400">{test.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Performance Metrics */}
              <Card className="border-gradient-indigo>
                <h3 className=text-2xl font-bold mb-6 text-white">Performance Metrics</h3>
                <div className="space-y-4>
                  <div className=flex justify-between items-center">
                    <span className="text-gray-400>Response Time</span>
                    <span className=text-indigo-400 font-bold">{testResults.responseTime}</span>
                  </div>

                  </div>
                </div>
              </Card>
            </div>

                Optimization Recommendations
              </h3>
              <div className='grid grid-cols-1 "md":grid-cols-2 gap-4'>'
                {testResults.recommendations.map((rec, index) => (


                    <span className='text-gray-300'>{rec}</span>'
                  </div>
origin/cursor/automate-test-improve-and-merge-code-2533
                    </span>;
                  </div>;
                  <div className='flex justify-between items-center'>;
                    <span className=text-gray-400>Throughput</span>;
                    <span className='text-green-400 font-bold'>High</span>;
                  </div>;
                  <div className=flex justify-between items-center>;
                    <span className='text-gray-400'>Reliability</span>;
                    <span className=text-green-400 font-bold>99.9%</span>;
                  </div>;
                  <div className='flex justify-between items-center'>;
                    <span className=text-gray-400>Uptime</span>;
                    <span className='text-green-400 font-bold'>24/7</span>                  </div>                  </div>;
                  ))}
                  <div className=flex justify-between items-center">;
                    <span className="text-gray-400>Throughput</span>;
                    <span className=text-green-400 font-bold">High</span>;
                  </div>;
                  <div className="flex justify-between items-center>;
                    <span className=text-gray-400">Reliability</span>;
                    <span className="text-green-400 font-bold>99.9%</span>;
                  </div>;
                  <div className=flex justify-between items-center">;
                    <span className="text-gray-400>Uptime</span>;
                    <span className=text-green-400 font-bold">24/7</span>;
                    <span className=text-green-400 font-bold>24/7</span>;
                  </div>;
                </div>;
              </Card>;
            </div>;
            <Card className='border-gradient-indigo'>;
            {/* Recommendations */}
<Card className=border-gradient-indigo>;
              <h3 className='text-2xl font-bold mb-6 text-white'>;
                Optimization Recommendations;
              </h3>;
              <div className=grid grid-cols-1 md:grid-cols-2 gap-4>;
                {testResults.recommendations.map((rec, index) => (<div key={index} className='flex items-start space-x-3'>;
                    <CheckCircle className=w-5 h-5 text-indigo-400 mt-1 flex-shrink-0 />;
                    <span className='text-gray-300'>{rec}</span>                  </div>;
                  </div>;
            <Card className=border-gradient-indigo>;
              <h3 className='text-2xl font-bold mb-6 text-white'>;
                Optimization Recommendations;
              </h3>;
              <div className=grid grid-cols-1 md:grid-cols-2 gap-4>;
                {testResults && testResults.recommendations.map((rec, index) => (<div key={index} className='flex items-start space-x-3'>;
                    <CheckCircle className=w-5 h-5 text-indigo-400 mt-1 flex-shrink-0 />;
                    <span className='text-gray-300'>{rec}</span>                  </div>            <Card className="border-gradient-indigo>;
              <h3 className=text-2xl font-bold mb-6 text-white">Optimization Recommendations</h3>;
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4>;
                {testResults && testResults.recommendations.map((rec, index) => (<div key={index} className=flex items-start space-x-3">;
                    <CheckCircle className="w-5 h-5 text-indigo-400 mt-1 flex-shrink-0 />;
                    <span className=text-gray-300">{rec}</span>;
                    <span className="text-gray-300>{rec}</span>;<span className=text-gray-300>{rec}</span>;
                  </div>;
                ))}
              </div>;
            </Card>;
          </div>;
        </section>;

            {/* Recommendations */}
            <Card className=border-gradient-indigo">
              <h3 className="text-2xl font-bold mb-6 text-white>Optimization Recommendations</h3>
              <div className=grid grid-cols-1 md:grid-cols-2 gap-4">
                {testResults.recommendations.map((rec, index) => (
                  <div key={index} className="flex items-start space-x-3>
                    <CheckCircle className=w-5 h-5 text-indigo-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300>{rec}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>
      )}

      )}


              Simple Pricing
      {/* Pricing Section */}

                      Most Popular;
                    </span>;
                  </div>;
                )}

                </div>
                <ul className='space-y-4 mb-8'>'
                  {plan.features.map((feature, featureIndex) => (
                    <li
}
key={featureIndex}
                      className='flex items-center text-gray-300''
                    >
                      <CheckCircle className='w-5 h-5 text-indigo-400 mr-3 flex-shrink-0' />'

                <ul className=space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                      {plan.price}</span>;
                    <span className='text-gray-400'>{plan.period}</span>;
                  </div>;
                  <p className=text-gray-400>{plan.description}</p>;
                </div>;
                <ul className='space-y-4 mb-8'>;
                  {plan.features.map((feature, featureIndex) => (<li;
                      key={featureIndex}
                      className=flex items-center text-gray-300;
                    >;
                      <CheckCircle className='w-5 h-5 text-indigo-400 mr-3 flex-shrink-0' />;
                      {feature}
                    </li>;
                  ))}

                <Button,
href='/contact''
                  size='lg''


                </Button>
              </Card>

            )
}
          </div>;
        </div>;
      </section>;
              </Card>;
            ))}
          </div>;
        </div>;
      </section>;
              </Card>;
                  className={`w-full ${plan && plan.popular ? 'bg-gradient-to-r from-indigo-500 to-purple-600 "hover": from-indigo-600 "hover":to-purple-700' : 'bg-gray-700 "hover":bg-gray-600'} text-white,'
}>

                  Get Started;
                  <ArrowRight className='w-5 h-5 ml-2' />                </Button>                  href="/contact";"
                  size="lg";"
                  className={`w-full ${plan && plan.popular ? 'bg-gradient-to-r from-indigo-500 to-purple-600 "hover": from-indigo-600 "hover":to-purple-700' : 'bg-gray-700 "hover":bg-gray-600'} text-white,'
}>

                  Get Started;
                  <ArrowRight className="w-5 h-5 ml-2" />;"
              </Card>;
            ))}
      {/* CTA Section */}

            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </>
})}
  )
}
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
