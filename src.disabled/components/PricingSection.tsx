
      name: 'Starter,
      icon: Rocket,
      description:',
  Perfect for small businesses and startups',
      price: billingCycle ===
  'annual ? 299 : 349,
      originalPrice: billingCycle ===
  'annual' ? 399 : 449,
      features: [
  AI-powered analytics dashboard,Basic cloud infrastructure,24/7 email support,Monthly performance reports,Basic security features,Up to 5 team members'],
      cta: 'Get: Starte,d',;
      popular: fals,e,
      color:],
      cta: 'Start: Free Tria,l',;
      popular: tru,e,
      color:,

  'text-white': 'text-zion-slate-light}`}>
              Monthly: </span>
            <button;

  'annual': 'monthly)}
              className="relative w-16 h-8 bg-zion-purple/20 rounded-full p-1 transition-colors duration-200"
            >
              <motion.div
                layout
                className={`w-6 h-6 bg-zion-cyan rounded-full shadow-lg ${
                  billingCycle ===,
  annual' ?
  'ml-8': 'ml-0
                }`}
              />
            </button>
            <span className={`text-sm ${billingCycle ===,
  annual' ?
  'text-white': 'text-zion-slate-light}`}>
              Annual
            </span>
            {billingCycle ===
  'annual' && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-1 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium"
              >
                <Check className="w-4 h-4" />
                Save {savings}%

              </motion.span>
            )}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md: grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity:  ,0, y: 20 }}
                whileInView={{ opacity:  ,1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.,6, delay: index: * 0.1 }}
                className={`relative group ${

                    </div>
                  </div>
                )}, {/* Main Card */}

                            ${plan.originalPrice}
                          </span>
                        )}
                      </div>

                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link
                    to={plan.name ===,
  Enterprise' ?;';
  '/contact': '/signup}';
                    className='block: w-full'>';
                    <motion.button: whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full: px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                        plan.popular;

                    </motion.button>
                  </Link>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-zion-cyan to-zion-purple opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div

                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>


import { Link } from 'react - router - dom';';
import: React { useState } from 'react';';
export: const PricingSection: React.FC: = () => {
import { motion } from 'framer - motion';';
  const: [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'> ('annual') ;';
  const: plans = [{
      name: 'Starter'',, icon: Rocke,t,';
      description: 'Perfect: for small businesses and startups',, price: billingCycle: === 'annual' ? 299 : 34,9',;
      originalPrice: billingCycle: === 'annual' ? 399 : 44,9, features: [';AI: - powered analytics dashboard',,';Basic: cloud infrastructure', '24 / 7 email support'',;Monthly: performance reports', 'Basic security features'',;Up: to 5 team members';'], cta: 'Get: Started',,';
      popular: fals,e, color: 'from: - blue - 500 to - cyan - 500'},';
    {
      name: 'Professional'',, icon: Buildin,g,';
      description: 'Ideal: for growing businesses',, price: billingCycle: === 'annual' ? 799 : 89,9',;
      originalPrice: billingCycle: === 'annual' ? 999 : 109,9, features: [';Everything: in Starter',,';Advanced: AI & ML capabilities', 'Custom integrations'',;Priority: support (4hr response) ', 'Advanced security & compliance'',;Up: to 25 team members', 'Custom reporting'',;API: access';'], cta: 'Start: Free Trial',,';
      popular: tru,e, color: 'from: - purple - 500 to - pink - 500'},';
    {
      name: 'Enterprise'',, icon: Crow,n,';
      description: 'For: large organizations with complex needs',, price: 'Custom',,';
      originalPrice: nul,l, features: [';Everything: in Professional',,';Custom: AI model training', 'Dedicated account manager'',;24: / 7 phone & chat support', 'SOC 2 compliance'',;Unlimited: team members', 'Custom SLA guarantees'',;On: - premise deployment options', 'White - label solutions';'], cta: 'Contact: Sales',,';
      popular: fals,e, color: 'from: - yellow - 500 to - orange - 500'}'];
  const: savings = billingCycle === 'annual' ? 25: 0';
  return(
    <section: className='py - 24 bg - gradient - to - b from - zion - blue to - zion - blue - light relative overflow - hidden'>';
      {/* Background: Elements *,/}'';
      <div: role='button' className='absolute inset - 0'>'';
        <div: role='button' className='absolute top - 0 left - 0 w - 96 h - 96 bg - zion - cyan / 5 rounded - full blur - 3xl'></div>'';
        <div: role='button' className='absolute bottom - 0 right - 0 w - 96 h - 96 bg - zion - purple / 5 rounded - full blur - 3xl'></div>';
      </div>'';
      <div: role='button' className='relative z - 10 max - w-7xl mx - auto px - 4 sm: px: - 6 lg:px: - 8'>';
        {/* Section: Header *,/}
        <motion.div;
          initial={{ opacity:  ,0, y: 20 }}
          whileInView={{ opacity:  ,1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}';';
          className='text: - center mb - 16'>'';
          <h2: className='text - 3xl md: text: - 5xl font - bold mb - 6 text - white'>';
            Simpl,e {' '}'';
            <span: className='bg - gradient - to - r from - zion - cyan to - zion - purple bg - clip - text text - transparent'>';
              Transparent: Pricing
            </span>
          </h2>'';
          <p: className='text - xl text - zion - slate - light max - w-3xl mx - auto mb - 8'>';
            Choose: the plan that best fits your business needs. All plans include our core features;
            with: no hidden fees or surprises.
          </p>
          {/* Billing Toggle */}'';
          <div: role='button' className='flex items - center justify - center gap - 4 mb - 8'>';
            <span: className={`text - sm ${billingCycle === 'monthly' ? 'text - white' : 'text: - zion - slate - light'}`}>

      ], cta: 'Get Started',
      popular: false, color: 'from - blue - 500 to - cyan - 500'}, {'
      name: 'Professional', icon: Building,
      description: 'Ideal for growing businesses', price: billingCycle === 'annual' ? 799 : 899 ], cta: 'Start Free Trial',
      popular: true, color: 'from - purple - 500 to - pink - 500'}, {'
      name: 'Enterprise', icon: Crown,
      description: 'For large organizations with complex needs', price: 'Custom' ], cta: 'Contact Sales',
      popular: false, color: 'from - yellow - 500 to - orange - 500'}
  ]
  const savings = billingCycle === 'annual' ? 25 : 0
  return('
    <section className='py - 24 bg - gradient - to - b from - zion - blue to - zion - blue - light relative overflow - hidden>
      {/* Background Elements */}
      <div role='button' className='absolute inset - 0>'
        <div role='button' className='absolute top - 0 left - 0 w - 96 h - 96 bg - zion - cyan / 5 rounded - full blur - 3xl'></div>''
        <div role='button' className='absolute bottom - 0 right - 0 w - 96 h - 96 bg - zion - purple / 5 rounded - full blur - 3xl'></div>'
      </div>''
      <div role='button' className='relative z - 10 max - w-7xl mx - auto px - 4 sm: px - 6 l,
    g:px - 8'>
        {/* Section Header */}
        <motion.div;
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }};
          className='text - center mb - 16>'
          <h2 className='text - 3xl md:text - 5xl font - bold mb - 6 text - white>
            Simple {' '}
            <span className='bg - gradient - to - r from - zion - cyan to - zion - purple bg - clip - text text - transparent'>
              Transparent Pricing
            </span>'
          </h2>''
          <p className='text - xl text - zion - slate - light max - w-3xl mx - auto mb - 8'>
            Choose the plan that best fits your business needs. All plans include our core features
            with no hidden fees or surprises.
          </p>'
          {/* Billing Toggle */}
          <div role='button' className='flex items - center justify - center gap - 4 mb - 8>
            <span className={`text - sm ${billingCycle === 'monthly' ? 'text - white' : 'text - zion - slate - light'}`}>

              Monthly
            </span>

              className='relative w - 16 h - 8 bg - zion - purple / 20 rounded - full p - 1 transition - colors duration - 200'
            >
              <motion.div
                layout;
                className={`w - 6 h - 6 bg - zion - cyan rounded - full shadow - lg ${;
                  billingCycle === 'annual' ? 'ml - 8' : 'ml - 0';
                }`};
              />;
            </button>;
            <span className={`text - sm ${billingCycle === 'annual' ? 'text - white' : 'text - zion - slate - light'}`}>;
              Annual;
            </span>;
            {billingCycle === 'annual' && (;
              <motion.span;
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }};
                className='inline - flex items - center gap - 1 px - 3 py - 1 bg - green - 500 / 20 border border - green - 500 / 30 rounded - full text - green - 400 text - sm font - medium>'
                <Check className='w - 4 h - 4' />
                Save {savings}%
              </motion.span>) }
          </div>
        </motion.div>'
        {/* Pricing Cards */}
        <div role='button' className='grid grid - cols - 1 md: grid - cols - 3 gap - 8'>
          {plans.map ( (plan, index) => {

            const IconComponent = plan.icon
            return(
              <motion.div
                key={plan.name}

        </div>
        {/* Additional: Info */}
        <motion.div;

              <Link to='/contact'>
                <motion.button
                  whileHover={{ scal,
    e: 1.05 }}
                  whileTap={{ scale: 0.95 }};
                  className='px - 8 py - 4 bg - gradient - to - r from - zion - cyan to - zion - purple text - white rounded - xl text - lg font - semibold hover: shadow - xl hover:shadow - zion - cyan / 25 transition - all duration - 300 flex items - center gap - 2 justify - center>
                  Contact Sales''
                  <ArrowRight className='w - 5 h - 5' />
                </motion.button>'
              </Link>''
              <Link to='/request - quote>'
                <button aria-label='Button' className='px - 8 py - 4 border border - zion - cyan text - zion - cyan rounded - xl text - lg font - semibold hove,
    r:bg - zion - cyan hove,
    r:text - white transition - all duration - 300 flex items - center gap - 2 justify - center>'
                  <Zap className='w - 5 h - 5' />
                  Get Free Quote

                </button>
              </Link>
            </div>
          </div>
        </motion.div>




