
  CheckCircle,
  Star,
  Zap,
  Shield,
  Users,
  Globe,
  Phone,
  Mail,


  ArrowRight,
  DollarSign,
  TrendingUp,
  Award,
  Clock,
  Target,
  Brain,
  Server,
  Cloud,
  Lock,
  BarChart3,
  Rocket,
  Heart,


const Pricing: React.FC = () => {
  const pricingPlans = [
    {
      name: "Starter", price: "$299",
      period: "/month", description: "Perfect for small businesses getting started with AI",
      features: [
        'AI-powered analytics dashboard',
        'Basic automation tools',
        'Email support',
        'Up to 5 team members',
        'Standard integrations',
        'Monthly reports' ],
      popular: false,
      color: 'from-blue-500 to-cyan-500',
      buttonText: 'Get Started',
      buttonVariant: 'outline' as const }, {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        'Advanced AI analytics',
        'Custom automation workflows',
        'Priority support',
        'Up to 25 team members',
        'Advanced integrations',
        'Real-time reporting',
        'API access',
        'Custom branding' ],
      popular: true,
      color: 'from-purple-500 to-pink-500',
      buttonText: 'Start Free Trial',
      buttonVariant: 'default' as const }, {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Unlimited AI capabilities',
        'Custom AI model training',
        'Dedicated support team',
        'Unlimited team members',
        'White-label solutions',
        'Advanced security',
        'Custom integrations',
        '24/7 phone support',
        'SLA guarantee' ],
      popular: false,
      color: 'from-orange-500 to-red-500',
      buttonText: 'Contact Sales',
      buttonVariant: 'outline' as const },

            </p>
          </motion.div>
        </div>
      </section>

                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                        <Star className="w-4 h-4 mr-1" />

                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <div className='text-center mb-8>
                    <h3 className='text-2xl font-bold text-white mb-2'>{plan.name}</h3>'
                    <div className='mb-4>
                      <span className='text-4xl font-bold text-white'>{plan.price}</span>'
                      <span className='text-gray-400'>{plan.period}</span>
                    </div>'
                    <p className='text-gray-300'>{plan.description}</p>
                  </div>'
                  <ul className='space-y-4 mb-8'>
                    {plan.features.map((feature, featureIndex) => ('
                      <li key={featureIndex} className='flex items-center text-gray-300>
                        <CheckCircle className='w-5 h-5 text-green-500 mr-3 flex-shrink-0' />

                        {feature}
                      </li>
                    ))}
                  </ul>

                  </Button>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>


