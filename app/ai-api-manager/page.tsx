'use client'
import React from 'react'
import {Helmet} from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer   from '../components/Footer'
;
import {CheckCircle, ArrowRight, Settings, Zap, Shield, Users, BarChart3} from 'lucide-react'
;
const AIApiManagerPage: React.FC = () => {
  const features = [
    {
      title: 'Centralized API Control',
      description: 'Manage all your APIs from a single, intuitive dashboard with comprehensive monitoring and control capabilities.',
      benefits: ['Unified dashboard', 'Centralized control', 'Real-time monitoring', 'Easy management']},
    {title: 'Advanced Analytics',
      description: 'Get deep insights into API usage, performance metrics, and user behavior with AI-powered analytics.',
      description: 'Enterprise-grade security with automated compliance monitoring and threat detection.',
      benefits: ['Threat detection', 'Compliance monitoring', 'Security scanning', 'Access control']},
  ]
  const benefits = [
    'Centralized API management',
    'Real-time performance monitoring',
    'Advanced security features',
    'Comprehensive analytics',
    'Easy integration',
    '24/7 support'
  ]
  const stats = [
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">)</div>
      <Helmet />
        <title>AI API Manager | Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI-powered API management platform by Zion Tech Group. Centralized control, analytics, and security for all your APIs." />
        <meta name="keywords" content="API manager, API platform, API analytics, API security, centralized management, Zion Tech Group" />
      </Helmet>
      <Navigation />
      {/* Hero Section */} <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' ,}} />
        <div className="relative max-w-7xl mx-auto text-center">
</div>
          <h1 className="text-5xl md: text-7xl font-bold text-white mb-6"></h1>
            AI API Manager
          </h1>
          <p className="text-xl md: text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"></p>
            Comprehensive API management platform with AI-powered insights, security, and optimization;
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover: from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button>
              Get Started;
            </button>
            <button className="border border-blue-400 text-blue-400 hover: bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"></button>
              View Demo
  </
          </div>
        </div>
      </section>
              </div>
            ))}
          </div>
        </div>
      </section>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
                </div>
                <h3 className="text-lg font-semibold text-white"></h>{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer /></Footer>
    </div>
  ),;
}
;
export default AIApiManagerPage;
;