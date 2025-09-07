
import Head from 'next/head'''
import Link from 'next/link''
import {
  // TODO: Implement
}
  CheckCircle,
  X,
  ArrowRight,
  Star,
  Zap,
  Shield,
  Users,
  BarChart3;'
} from 'lucide-react''
const plans = [
  {'
    name: 'Starter',''
    price: '$99',''
    period: 'per month',''
    description: 'Perfect for small businesses getting started','
    features: ['
      'Basic AI integration',''
      'Cloud hosting',''
      'Email support',''
      'Standard security',''
      'Basic analytics'']
    ],
    limitations: ['
      'Limited customization',''
      'No priority support'']
    ],
    popular: false;
  },
  {'
    name: 'Professional',''
    price: '$299',''
    period: 'per month',''
    description: 'Ideal for growing businesses','
    features: ['
      'Advanced AI capabilities',''
      'Custom integrations',''
      'Priority support',''
      'Enhanced security',''
      'Advanced analytics',''
      'API access',''
      'Custom branding'']
    ],
    limitations: [],
    popular: true;
  },
  {'
    name: 'Enterprise',''
    price: 'Custom',''
    period: 'contact us',''
    description: 'For large organizations with complex needs','
    features: ['
      'Full AI suite',''
      'Custom development',''
      '24/7 dedicated support',''
      'Enterprise security',''
      'Custom analytics',''
      'Unlimited integrations',''
      'White-label solutions',''
      'Dedicated account manager'']
    ],
    limitations: [],
    popular: false;

  }
];

const addOns = [

  {'
    name: 'Additional Storage',''
    price: '$10',''
    period: 'per 100GB/month',''
    description: 'Extra cloud storage for your data''
  },
  {'
    name: 'Premium Support',''
    price: '$50',''
    period: 'per month',''
    description: '24/7 priority support and faster response times''
  },
  {'
    name: 'Custom Integrations',''
    price: '$200',''
    period: 'per integration',''
    description: 'Custom API integrations with third-party services''
  }]
]

export default function Pricing() {
  return (
    <>
      <Head>
</Head>
        <title>Pricing - Zion Tech Group</title>'
        <meta name="description" content="Transparent pricing for our technology solutions and services." />"
</meta>
      </Head>
"
      <div className="min-h-screen bg-gray-50">"
</div>"
        <div className="max-w-6xl mx-auto px-4 py-8">"
</div>"
          <div className="text-center mb-12">"
</div>"
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h1>""
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">"
</p>
            </h1>"
            <p className="text-xl text-blue-100 mb-8">"
</p>
            </p>
          </div>
"
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">"
</div>
              <motion.div;

                key={index}
                initial={{ opacity: 0, y: 20 ,}
}
                animate={{ opacity: 1, y: 0 }}

                transition={{ delay: index * 0.1 }}
                className={`relative bg-white rounded-lg shadow-md p-8 ${"
                  plan.popular ? 'ring-2 ring-blue-500 transform scale-105' : '''
                }`}
              >
</motion>'
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">"
</div>"
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">"
</span>"
                      <Star size={16} className="mr-1" />"
</Star>
                    </span>
                  </div>"
                <div className="text-center mb-6">"
</div>"
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>""
                  <p className="text-gray-600 mb-4">{plan.description}</p>""
                  <div className="mb-4">"
</div>"
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>""
                    <span className="text-gray-600 ml-2">{plan.period}</span>"
                  </div>
                </div>
"
                <ul className="space-y-3 mb-8">"
</ul>"
                    <li key={featureIndex} className="flex items-center">"
</li>"
                      <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />"
</CheckCircle>"
                      <span className="text-gray-700">{feature}</span>"
                    </li>"
                    <li key={limitationIndex} className="flex items-center">"
</li>"
                      <X size={20} className="text-red-500 mr-3 flex-shrink-0" />"
</X>"
                      <span className="text-gray-500 line-through">{limitation}</span>"
                    </li>
                </ul>

                <Link;"
                  href="/contact""
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg transition-colors ${
                    plan.popular;"
                      ? 'bg-blue-600 text-white hover:bg-blue-700'''
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200''
                  }`}
                >
</Link>'
                  <ArrowRight size={20} className="ml-2" />"
</ArrowRight>
                </Link>
              </motion.div>)
            ))}
          </div>
"
          <div className="mb-16">"
</div>"
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Add-On Services</h2>""
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">"
</div>
                <motion.div;

                  key={index}
                  initial={{ opacity: 0, y: 20 ,}
}
                  animate={{ opacity: 1, y: 0 }}

                  transition={{ delay: index * 0.1 }}"
                  className="bg-white rounded-lg shadow-md p-6""
                >
</motion>"
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{addOn.name}</h3>""
                  <p className="text-gray-600 mb-4">{addOn.description}</p>""
                  <div className="text-2xl font-bold text-blue-600">"
</div>"
                    <span className="text-sm text-gray-600 ml-1">{addOn.period}</span>"
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
"
          <div className="bg-blue-600 rounded-lg p-8 text-white text-center">"
</div>"
            <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>""
            <p className="text-lg mb-6">Contact us for a personalized quote tailored to your specific needs</p>""
            <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors">"
</Link>"
              <ArrowRight size={20} className="ml-2" />"
</ArrowRight>
            </Link>
          </div>
        </div>
      </section>"
      <section className="py-16 bg-gray-50">"
</section>"
        <div className="container mx-auto px-4">"
</div>"
          <div className="max-w-4xl mx-auto">"
</div>"
            <div className="text-center mb-12">"
</div>"
              <h2 className="text-3xl font-bold text-gray-900 mb-4">"
</h2>
              </h2>"
              <p className="text-xl text-gray-600">"
</p>
              </p>
            </div>
            "
            <div className="space-y-6">"
</div>"
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">"
</div>"
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">"
</h3>
                  </h3>"
                  <p className="text-gray-600">"
</p>
                  </p>
                </div>
            </div>
          </div>
        </div>
      </section>"
      <section className="py-16 bg-blue-900 text-white">"
</section>"
        <div className="container mx-auto px-4">"
</div>"
          <div className="max-w-4xl mx-auto text-center">"
</div>"
            <h2 className="text-3xl font-bold mb-4">"
</h2>
            </h2>"
            <p className="text-xl text-blue-100 mb-8">"
</p>
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
</div>
              <Link;"
                href="/contact"""
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center""
              >
</Link>"
                <ArrowRight className="w-5 h-5 ml-2" />"
</ArrowRight>
              </Link>
              <Link;"
                href="/contact"""
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center""
              >
</Link>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
"

