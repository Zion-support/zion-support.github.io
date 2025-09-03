import: React from 'react';';
import: { motion } from 'framer-motion';';
import: SEO from '../components/SEO';';
import: { Button } from '../components/ui/Button';';
import: { Card } from '../components/ui/Card';';
import: { Badge } from '../components/ui/Badge';';
import: {
  CheckCircle,
  // Star,
  // Zap,
  // Shield,
  // Users,
  // Globe,
  // Phone,
  // Mail,
  // ArrowRight,
  // DollarSign,
  TrendingUp,
  // Award,
  Clock,
  // Target,
  Brain,
  // Server,
  // Cloud,
  Database,
  // Lock,
  // BarChart3,
  // Rocket,
  // Heart,
  // Sparkles,
  Calculator,
  // BookOpen,
  Lightbulb,
  HelpCircle,


const: PricingGuide: React.FC: = () => {
  const pricingFactors = [

      factor: 'Project Complexity',
      description:
        'The complexity of your AI solution directly impacts development time and cost',
      details: [

      ],
      icon: Brain,
      color: 'from-blue-500 to-cyan-500' }, {'
      factor: 'Data Requirements',
      description:'
        'Amount and quality of data needed for training and implementation',

        'Medium datasets: $3,000 - $8,000',
        'Large datasets: $8,000 - $20,000+' ],
      icon: Database,
      color: 'from-green-500 to-emerald-500' }, {'
      factor: 'Integration Needs',
      description:'
        'Complexity of integrating with existing systems and platforms',

        'Complex integrations: $4,000 - $10,000',
        'Enterprise integrations: $10,000 - $25,000+' ],
      icon: Network,
      color: 'from-purple-500 to-pink-500' }, {'
      factor: 'Timeline Requirements',
      description: 'How quickly you need the solution delivered',

        'Rush delivery (50% faster): +30% cost',
        'Emergency delivery (75% faster): +50% cost' ],
      icon: Clock,
      color: 'from-orange-500 to-red-500' } ];

  const pricingExamples = [


      scenario: 'Small Business Automation',
      description:'
        'AI-powered customer service chatbot for a small e-commerce business',

        'Natural language processing',
        'Basic customer support automation',
        'Integration with existing CRM',
        'Monthly maintenance included' ],
      price: '$3,500 - $5,500',
      timeline: '4-6 weeks',
      roi: '300% ROI within 6 months' }, {'
      scenario: 'Enterprise AI Platform',
      description: 'Comprehensive AI platform for large manufacturing company',

        'Custom machine learning models',
        'Predictive maintenance system',
        'Real-time analytics dashboard',
        'Multi-site deployment',
        '24/7 support and monitoring' ],
      price: '$25,000 - $75,000',
      timeline: '12-16 weeks',
      roi: '500% ROI within 12 months' }, {'
      scenario: 'Healthcare AI Solution',
      description: 'AI-powered diagnostic tool for medical practice',

        'Medical image analysis',
        'Patient data integration',
        'HIPAA compliance',
        'Clinical decision support',
        'Training and certification' ],
      price: '$15,000 - $35,000',
      timeline: '8-12 weeks',
      roi: '400% ROI within 8 months' } ];

  const costSavingTips = [


      tip: 'Start with MVP',
      description:'
        'Begin with a minimum viable product and iterate based on results',
      savings: 'Save 40-60% on initial development' }, {'
      tip: 'Use Existing Frameworks',
      description: 'Leverage our pre-built AI frameworks and templates',
      savings: 'Reduce development time by 50%' }, {'
      tip: 'Phased Implementation',
      description: 'Implement solution in phases to spread costs over time',
      savings: 'Improve cash flow and reduce risk' }, {'
      tip: 'Long-term Partnership',
      description: 'Sign annual contracts for ongoing development and support',
      savings: 'Get 20% discount on all services' },

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO"
        title="Pricing Guide - Zion Tech Group""
        description="Comprehensive guide to understanding AI solution pricing. Learn about cost factors, get estimates, and find the best pricing strategy for your project."
      />
      {/* Hero Section */}"
      <section className="relative py-20 px-4 sm: px-6 l,
    g:px-8">"
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacit,
    y: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Understand the factors that influence AI solution costs and get
              accurate estimates for your project.

            </p>
          </motion.div>
        </div>
      </section>

                  <div className="flex items-start mb-6">
                    <div"
                      className={`p-3 rounded-lg bg-gradient-to-r ${factor.color} mr-4`}
                    >`
                      <factor.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>"
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {factor.factor}
                      </h3>"
                      <p className="text-gray-300">{factor.description}</p>
                    </div>
                  </div>"
                  <ul className="space-y-3">
                    {factor.details.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}"
                        className="flex items-center text-gray-300"
                      >"
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />

                        {detail}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

                      {example.roi}
                    </Badge>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

                        {tip.savings}
                      </Badge>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button"
                size="lg""
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white"
              >"
                <Calculator className="w-5 h-5 mr-2" />

                <HelpCircle className="w-5 h-5 mr-2" />
                Ask Questions

              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )};


