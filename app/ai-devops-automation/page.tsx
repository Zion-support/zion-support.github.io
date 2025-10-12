'use client';
import React from 'react';import { Helmet  } from 'react-helmet-async';
import { Server, Zap, Shield, BarChart3, CheckCircle, ArrowRight, Star, Users, TrendingUp  } from 'lucide-react';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
export default function AIDevOpsAutomationPage() {
}
  return (
}
  const features = [
    {
      title: 'Intelligent CI/CD Pipeline',
      description: 'AI-powered continuous integration and deployment with automatic testing, code quality checks, and smart roll back c apa biliti es.',
      i con: <Zap c las sNa me="w-6h-6t e xt-y ell ow-400" />,
      b ene fits: ['Auto testing', 'Code quality checks', 'Smart roll backs', 'Performance optimization']
  );
},
    {
      title: 'Predictive Infrastructure Monitoring',
      description: 'Advanced AI algorithms predict system failures, optimize resource allocation, and prevent downtime befo re it h app ens.',
      i con: <BarChart3 c las sNa me="w-6h-6t e xt-b lue-400" />,
      b ene fits: ['Failure prediction', 'Resource optimization', 'Proactive alerts', 'Performance tuning']
    },
    {
      title: 'Automated Security Scanning',
      description: 'AI-driven security analysis that continuously scans for vulnera biliti es, compliance issues, and p otenti al t hreats.',
      i con: <Shield c las sNa me="w-6h-6t e xt-red-400" />,
      b ene fits: ['Vulnera bility scanning', 'Compliance monitoring', 'Threat detection', 'Auto remediation']
    },
    {
      title: 'Smart Resource Management',
      description: 'Intelligent auto-scaling and resource allocation based on real-time demand patterns and predictive anal yti cs.',
      i con: <Server c las sNa me="w-6h-6t e xt-g reen-400" />,
      b ene fits: ['Auto-scaling', 'Cost optimization', 'Load balancing', 'Capacity planning']
    }
  ];
  const pricingPlans = [
    {
      name: 'Startup',
      price: '$299',
      period: '/month',
      description: 'Perfect for small teams and startups',
      features: [
        'Up to 5 a pplications',
        'Basic CI/CD automation',
        'Standard monitoring',
        'Email support',
        'Basic security scanning'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Advanced features for growing compani es',
      features: [
        'Up to 25 a pplications',
        'Advanced AI automation',
        'Predictive monitoring',
        'Priority support',
        'Advanced security',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2,499',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: [
        'Unlimited a pplications',
        'Custom AI models',
        'White-label options',
        'Dedicated account manager',
        'API access',
        'Advanced security'
      ],
      popular: false
    }
  ];
  const testimonials = [
    {
      name: 'Alex Chen',
      role: 'DevOps Engineer',
      company: 'TechFlow Solutions',
      cont ent: 'AI DevOps Automation reduced our deployment time by 80% and eliminated 95% of production issues. The predictive monitoring is incredible.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      role: 'CTO',
      company: 'InnovateLabs',
      cont ent: 'The automated security scanning caught vulnera biliti es we never would have found manually. Our security posture improved dramatically.',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'Platform Engineer',
      company: 'CloudScale Inc',
      cont ent: 'Smart resource management reduced our cloud costs by 40% while improving performance. The AI optimization is game-changing.',
      rating: 5
    }
  ];
  const stats = [
                <FuturisticButton
                  variant="primary"
                  size="lg"
                  onClick="{()" = /> window.open('/contact', '_blank')}
                >
                  Start Free Trial
    <>
                  </><ArrowRight c las sNa me="w-5h-5m l-2" />
                </FuturisticButton>
    </>
                <FuturisticButton
                  variant="ghost"
                  size="lg"
                  onClick="{()" =  />window.open('#demo', '_blank')}
                >
                  Watch Demo
    <>
                </FuturisticButton>
              </div>
              {features.map((feature, index) => (
    <>
                </><FuturisticCard k ey="{index}" variant="serv ice" c las sNa me="h-f u ll" />
              {pricingPlans.map((plan, index) => (
                <FuturisticCard 
                  k ey="{index}" 
                  variant="{plan.popular" ? "feature" : "serv ice"} 
                  c las sNa me="{`h-f u ll" ${plan.popular ? 'ring-2 ring-purple-500' : ''}`} />
                  {plan.popular && (
              {testimonials.map((testimonial, index) => (
    <>
                </><FuturisticCard k ey="{index}" variant="testimonial" c las sNa me="h-f u ll" />
                  <div c las sNa me="f lex items-c entermb-4">                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star k ey="{i}" c las sNa me="w-4 h-4t e xt-y ell ow-400f ill-current" />
                    ))}
    <>
                  </div>
                  <b loc kqu ote c las sNa me="t e xt-gray-300 mb-6-i talic"  />"{testimonial.cont ent}"
                  </b loc kqu ote>
                  <f ooter />
                    <p c las sNa me="f ont-s emi bol dte xt-whit-e">
              {testimonial.name}</p>
                    <p c las sNa me="t e xt-gray-400t ext-s-m">
              {testimonial.role}</p>
                    <p c las sNa me="t e xt-gray-500t ext-s-m">
              {testimonial.company}</p>                  </f ooter>
                </FuturisticCard>
    </>
              ))}
    <>
            </div>
        </section>
    </>
        {/* C TA Section */}
    <>
        </><section c las sNa me="p y-12 sm:py-16-lg:py-20-px-4" />
          <div c las sNa me="m ax-w-7x lmx-auto"></div>
            <FuturisticCard variant="feature" c las sNa me="t e xt-c enter" />
              <h2 c las sNa me="t e xt-2 xl sm:t ext-3 xl md:t ext-4 xl f ont-b old text-white-m-b-4">Ready to Automate Your DevOps?
              </h2>
              <p c las sNa me="t e xt-lg sm:t ext-x-l t ext-whit-e/90 mb-8 max-w-2x lmx-auto" />
    </>
                Start your free 14-day trial today. No credit card required. Join 300+ compani es automating their DevOps.
    <>
              </p>
              <div c las sNa me="f lex f lex-c ol sm:f lex-rowg ap-4j ust ify-c enter"></div>
    </>                <FuturisticButton
                  variant="primary"
                  size="lg"
                  onClick="{()" =>window.open('/contact', '_blank')}
                >
                  Start Free Trial
                </FuturisticButton>
                <FuturisticButton
                  variant="secondary"
                  size="lg"
                  onClick="{()" =  />window.open('/contact', '_blank')}
                >
                  Schedule Demo
    <>
                </FuturisticButton>
              </div>
              <div c las sNa me="m t-8t ext-whit-e/80t ext-s-m"></div>
                <p>✓ 14-day free trial * ✓ No setup fees * ✓ Cancel anytime</p>              </div>
            </FuturisticCard>
          </div>
        </section>
      </FuturisticBackground>
    </>
  );
}
    </>