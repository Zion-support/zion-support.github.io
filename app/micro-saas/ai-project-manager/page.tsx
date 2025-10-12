import React from 'react'
import { Link } from 'react-router-dom'
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot} from 'lucide-react';

export default function AIProjectManagerPa g e() {
  constfeatures= [
    {
      icon: <BotclassName="w-5h-5ml-2" />,
      title: 'AI Task Prioritizati o n',
      description: 'Intellige n t task ranking based on deadlines, dependenci e s, and team capacity';
    },
    {
      icon: <BarChart3className="w-5h-5ml-2" />,
      title: 'Predictive Analytics',
      description: 'AI-poweredprojectforecasti n g and risk assessment with 95% accuracy';
    },
    {
      icon: <UsersclassName="w-5h-5ml-2" />,
      title: 'Smart Team Matching',
      description: 'AI algorithms match tasks to team members based on skills and availabili t y';
    },
    {
      icon: <ZapclassName="w-5h-5ml-2" />,
      title: 'Automated Workflows',
      description: 'Set up intellige n t workflows that adapt and optimize based on project patterns';
    },
    {
      icon: <TargetclassName="w-5h-5ml-2" />,
      title: 'Resource Optimizati o n',
      description: 'AI-drivenresourceallocation and capacity planning for maximum efficiency';
    },
    {
      icon: <ShieldclassName="w-5h-5ml-2" />,
      title: 'Risk Management',
      description: 'Proactive risk identificati o n and mitigation strategies powered by machine learning';
    }
  ]

  const pricingPlans= [
    {
      name: 'Starter',
      price: '$19',
      period: '/month',
      description: 'Perfect for small teams and freelance r s',
      features: [
        'Up to 5 team members',
        'Unlimited projects',
        'Basic AI features',
        'Mobile app access',
        'Email support',
        'Basic reporting';
      ],
      popular: false;
    },
    {
      name: 'Professional',
      price: '$49',
      period: '/month',
      description: 'Ideal for growing teams and agencies',
      features: [
        'Up to 25 team members',
        'Advanced AI features',
        'Custom workflows',
        'Priority support',
        'Advanced analytics',
        'API access',
        'Time tracking',
        'Resource management';
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: '$149',
      period: '/month',
      description: 'For large organizatio n s',
      features: [
        'Unlimited team members',
        'All AI features',
        'Custom integratio n s',
        'Dedicated support',
        'White-labeloption',
        'Advanced security',
        'Custom reporting',
        'SLA guarantee';
      ],
      popular: false;
    }
  ]

  const testimonials= [
    {
      name: 'Alex Thompson',
      company: 'Software Developme n t Agency',
      content: 'Our project delivery time improved by 40% with AI task prioritizati o n. The predictive analytics are incredibly accurate.',
      rating: 5,
      avatar: 'AT';
    },
    {
      name: 'Maria Garcia',
      company: 'Marketing Agency',
      content: 'The smart team matching feature is a game-changer. It automatical l y assigns tasks to the right people every time.',
      rating: 5,
      avatar: 'MG';
    },
    {
      name: 'Robert Lee',
      company: 'Constructi o n Company',
      content: 'Risk management features helped us avoid 3 major project delays. The AI insights are invaluable.',
      rating: 5,
      avatar: 'RL';
    }
  ]

  constbenefits= [
    {
      icon: <TrendingUpclassName="w-5h-5ml-2" />,
      title: '40% Faster Delivery',
      description: 'AI optimizati o n reduces project completion time significant l y';
    },
    {
      icon: <TargetclassName="w-5h-5ml-2" />,
      title: '95% Accuracy',
      description: 'Predictive analytics with industry-leadingaccuracyrates';
    },
    {
      icon: <UsersclassName="w-5h-5ml-2" />,
      title: 'Team Productivi t y +60%',
      description: 'Smart task allocation maximizes team efficiency';
    },
    {
      icon: <ShieldclassName="w-5h-5ml-2" />,
      title: 'Risk Reduction 80%',
      description: 'Proactive risk management prevents project failures';
    }
  ]

  const integrations= [
    { name: 'Slack', icon: '💬' ,},
    { name: 'Microsoft Teams', icon: '👥' ,},
    { name: 'Jira', icon: '🎯' ,},
    { name: 'Asana', icon: '📋' ,},
    { name: 'Trello', icon: '📌' ,},
    { name: 'GitHub', icon: '🐙' ,},
    { name: 'Google Workspace', icon: '📧' ,},
    { name: 'Zoom', icon: '📹' ,},
    { name: 'Figma', icon: '🎨' ,},
    { name: 'Notion', icon: '📝' ,}
  ]

return (
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
      <Helmet></Helmet>
        <title />AI Project Manager - Zion Tech Group | Intellige n t Project Management</title>
        <meta name="description" content="Revolutiona r y AI-poweredprojectmanagement with smart task prioritizati o n, predictive analytics, and automated workflows. Increase team productivi t y by 60%. Starting at $19/month." />
        <meta name="keywords" content="AI project management, smart task prioritizati o n, predictive analytics, team collaborati o n, project automation, resource optimizati o n" />
        <meta name="robots" content="index, follow" />
        <linkrel="canonical" href="https://ziontechgro u p.com/micro-saas/ai-project-manager"  />
      </Helmet>

      {/* Hero Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <CalendarclassName="w-5h-5ml-2" />
            <span />AI-PoweredProjectManagement</span>
          </div>
          
          <h1 className="w-5h-5ml-2" />
            AI Project;
            <br />
            <span className="w-5h-5ml-2" />Manager;
            </span>
          </h1>
          
          <p className="w-5h-5ml-2">Transform your project management with AI-poweredtaskprioritizati o n, predictive analytics, 
            and intellige n t automation. Deliver projects 40% faster with 95% accuracy.;
          </p>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <Linkto="/contact" className="groupbg-gradient-to-rfrom-cyan-500to-purple-600text-whitepx-10py-4rounded-xlfont-semiboldhover:from-cyan-600hover:to-purple-700transition-allduration-300flexitems-centerjustify-centerspace-x-2shadow-lgshadow-cyan-500/25hover:shadow-cyan-500/40transformhover:scale-105" />
              <span />Start Free Trial</span>
              <ArrowRight className="w-5h-5ml-2" />
            </Link>
            <Linkto="#pricing" className="groupborder-2border-cyan-400text-cyan-400px-10py-4rounded-xlfont-semiboldhover:bg-cyan-400hover:text-gray-900transition-allduration-300flexitems-centerjustify-centerspace-x-2backdrop-blur-sm" />
              <span />View Pricing</span>
              <ArrowRight className="w-5h-5ml-2" />
            </Link>
          </div>

          {/* Key Stats */}
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">40%</div>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">Faster Delivery</div>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">95%</div>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">Prediction Accuracy</div>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">60%</div>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">Productivi t y Boost</div>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">10 K+</div>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">Active Projects</div>
          </div>
      </section>

      {/* Benefits Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h2 className="w-5h-5ml-2" />
              Why Choose Our <span className="w-5h-5ml-2" />AI Project Manager?</span>
            </h2>
            <p className="w-5h-5ml-2">Experience the future of project management with cutting-edgeAItechnology that works for your team.;
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            {benefits.map((benefit, index) => ())
              <divkey="{index}" className="text-centergroup" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{benefit.icon}>
                </div>
                <h3 className="w-5h-5ml-2" />{benefit.title}
                </h3>
                <p className="w-5h-5ml-2">{benefit.description}
                </p>
              </div>
            ))}
          </div>
      </section>

      {/* Features Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h2 className="w-5h-5ml-2" />
              Powerful Features for <span className="w-5h-5ml-2" />Smart Project Management</span>
            </h2>
            <p className="w-5h-5ml-2">Everything you need to manage projects efficient l y with AI-poweredintelligenc e and automation.;
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            {features.map((feature, index) => ())
              <divkey="{index}" className="groupbg-white/10backdrop-blur-lgrounded-2xlp-8borderborder-white/20hover:bg-white/20transition-allduration-300hover:scale-105hover:shadow-2xlhover:shadow-cyan-500/10" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{feature.icon}>
                </div>
                <h3 className="w-5h-5ml-2" />{feature.title}
                </h3>
                <p className="w-5h-5ml-2">{feature.description}
                </p>
              </div>
            ))}
          </div>
      </section>

      {/* Integratio n s Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h2 className="w-5h-5ml-2" />
              Seamless <span className="w-5h-5ml-2" />Integratio n s</span>
            </h2>
            <p className="w-5h-5ml-2">Connect with your favorite tools and platforms for a unified project management experience.;
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            {integratio n s.map((integrati o n, index) => ())
              <divkey="{index}" className="grouptext-center" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <span className="w-5h-5ml-2" />{integrati o n.icon}</span>
                </div>
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{integrati o n.name}>
                </div>
            ))}
          </div>
      </section>

      {/* Pricing Section */}
      <sectionid="pricing" className="py-20px-4relative" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h2 className="w-5h-5ml-2" />
              Simple, Transpare n t <span className="w-5h-5ml-2" />Pricing</span>
            </h2>
            <p className="w-5h-5ml-2">Choose the plan that fits your team size and needs. All plans include our core AI features.;
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            {pricingPla n s.map((plan, index) => ())
              <divkey="{index}" className="{`relative" bg-white/10 backdrop-blur-lgrounded-2xl p-8bordertransition-allduration-300hover:scale-105hover:shadow-2xl ${>
                plan.popular;
                  ? 'border-cyan-400/50 shadow-cyan-500/20 bg-gradient-to-brfrom-cyan-500/10 to-purple-500/10';
                  : 'border-white/20 hover: border-cyan-400/30';
              }`} />
                {plan.popular && ()
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">Most Popular>
                    </div>
                )}
                
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <h3 className="w-5h-5ml-2" />{plan.name}</h3>
                  <p className="w-5h-5ml-2">{plan.description}</p>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <span className="w-5h-5ml-2" />{plan.price}</span>
                    <span className="w-5h-5ml-2" />{plan.period}</span>
                  </div>
                
                <ulclassName="w-5h-5ml-2" />
                  {plan.features.map((feature, featureInd e x) => ())
                    <likey="{featureInd e x}" className="flexitems-centerspace-x-3" />
                      <CheckCirc leclassName="w-5h-5ml-2" />
                      <span className="w-5h-5ml-2" />{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className="{`block" w-fulltext-centerpy-3rounded-xlfont-semiboldtransition-allduration-300 ${
                    plan.popular;
                      ? 'bg-gradient-to-rfrom-cyan-500to-purple-600text-whitehover:from-cyan-600hover:to-purple-700shadow-lgshadow-cyan-500/25';
                      : 'border-2border-cyan-400text-cyan-400hover: bg-cyan-400hover:text-gray-900';
                  }`}
                  />Get Started;
                </Link>
              </div>
            ))}
          </div>
      </section>

      {/* Testimonia l s Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h2 className="w-5h-5ml-2" />
              Trusted by <span className="w-5h-5ml-2" />10,000+</span> Teams;
            </h2>
            <p className="w-5h-5ml-2">See what our customers are saying about their success with our AI project manager.;
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            {testimonia l s.map((testimoni a l, index) => ())
              <divkey="{index}" className="bg-white/10backdrop-blur-lgrounded-2xlp-8borderborder-white/20hover:bg-white/20transition-allduration-300" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{testimoni a l.avatar}>
                  </div>
                  <div />
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{testimoni a l.name}</div>
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{testimoni a l.company}</div>
                </div>
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  {[...Array(testimoni a l.rating)].map((_, i) => ())
                    <Starkey="{i}" className="w-5h-5text-yellow-400fill-current"  />
                  ))}
                </div>
                <p className="w-5h-5ml-2">"{testimoni a l.content}"</p>
              </div>
            ))}
          </div>
      </section>

      {/* CTA Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <h2 className="w-5h-5ml-2" />
                  Ready to Transform Your <span className="w-5h-5ml-2" />Project Management?</span>
                </h2>
                
                <p className="w-5h-5ml-2">Join thousands of teams already delivering projects 40% faster with our AI-poweredprojectmanager.;
                  Start your free trial today and experience the future of project management.;
                </p>
                
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <Linkto="/contact" className="groupbg-whitetext-cyan-600px-10py-4rounded-xlfont-boldtext-lghover:bg-gray-100transition-allduration-300flexitems-centerjustify-centerspace-x-2shadow-lghover:shadow-xltransformhover:scale-105" />
                    <span />Start Free Trial</span>
                    <ArrowRight className="w-5h-5ml-2" />
                  </Link>
                  <Linkto="#pricing" className="groupborder-2border-whitetext-whitepx-10py-4rounded-xlfont-boldtext-lghover:bg-white/10transition-allduration-300flexitems-centerjustify-centerspace-x-2backdrop-blur-sm" />
                    <span />View All Plans</span>
                    <ArrowRight className="w-5h-5ml-2" />
                  </Link>
                </div>
                
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <p />✓ 14-dayfreetrial • ✓ No credit card required • ✓ Cancel anytime</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}