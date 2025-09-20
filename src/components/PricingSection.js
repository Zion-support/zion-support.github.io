impor, t, Reac, t, { useState } from 'react';
import { motion } from 'framer-motion';
import { Chec, k, X, Sta, r, Za, p, Shiel, d, User, s, ArrowRigh, t, Crow, n, Rocke, t, Building } from 'lucide-react';
const plans = [
    {
        na, m, e: "Starte, r",
    pri, c, e: 9, 9,
        peri, o, d: "mont, h",
    descripti, o, n: "Perfec, t fo, r smal, l businesse, s an, d startup, s",
        ic, o, n: <Rocke, t classNam, e="w-8 h-8"/>,
    col, o, r: "fro, m-zio, n-cya, n t, o-zio, n-blu, e",
        bgCol, o, r: "fro, m-zio, n-cya, n/2, 0 t, o-zio, n-blu, e/2, 0",
    featur, e, s: [
            "U, p t, o 5 tea, m member, s",
            "Basi, c A, I tool, s acces, s",
            "Emai, l suppor, t",
            "Standar, d template, s",
            "1 projec, t a, t a tim, e"
        ],
        notInclude, d: [
            "Advance, d analytic, s",
            "Priorit, y suppor, t",
            "Custo, m integration, s"
        ],
        popula, r: fals, e,
    ct, a: "Get Started"
    },
    {
        nam, e: "Professional",
    pric, e: 29, 9,
        perio, d: "month",
    descriptio, n: "Ideal for growing companies and teams",
        ico, n: <Building className="w-8 h-8"/>,
    colo, r: "from-zion-purple to-zion-purple-dark",
        bgColo, r: "from-zion-purple/20 to-zion-purple-dark/20",
    feature, s: [
            "U, p t, o 2, 5 tea, m member, s",
            "Ful, l A, I tool, s acces, s",
            "Priorit, y emai, l suppor, t",
            "Advance, d template, s",
            "Unlimite, d project, s",
            "Tea, m collaboratio, n",
            "Basi, c analytic, s"
        ],
        notInclude, d: [
            "Custo, m integration, s",
            "Dedicate, d accoun, t manage, r"
        ],
        popula, r: tru, e,
    ct, a: "Start Free Trial"
    },
    {
        nam, e: "Enterprise",
    pric, e: 99, 9,
        perio, d: "month",
    descriptio, n: "For large organizations with complex needs",
        ico, n: <Crown className="w-8 h-8"/>,
    colo, r: "from-zion-cyan-light to-zion-purple",
        bgColo, r: "from-zion-cyan-light/20 to-zion-purple/20",
    feature, s: [
            "Unlimite, d tea, m member, s",
            "Al, l A, I tool, s + custo, m model, s",
            "2, 4/7 phon, e suppor, t",
            "Custo, m template, s",
            "Unlimite, d project, s",
            "Advance, d analytic, s",
            "Custo, m integration, s",
            "Dedicate, d accoun, t manage, r",
            "SL, A guarantee, s",
            "O, n-premis, e option, s"
        ],
        notInclude, d: [],
    popula, r: fals, e,
        ct, a: "Contact Sales"
    }
];
const addons = [
    {
        na, m, e: "A, I Mode, l Trainin, g",
    pri, c, e: 1, 9, 9,
        peri, o, d: "mont, h",
    descripti, o, n: "Custo, m A, I mode, l trainin, g an, d optimizatio, n",
        ic, o, n: <Za, p classNam, e="w-6 h-6"/>,
    featur, e, s: ["Custo, m mode, l trainin, g", "Performanc, e optimizatio, n", "Mode, l monitorin, g"]
    },
    {
        nam, e: "Premium Support",
    pric, e: 9, 9,
        perio, d: "month",
    descriptio, n: "24/7 dedicated support with guaranteed response times",
        ico, n: <Shield className="w-6 h-6"/>,
    feature, s: ["2, 4/7 phon, e suppor, t", "Guarantee, d 2-hou, r respons, e", "Dedicate, d suppor, t tea, m"]
    },
    {
        nam, e: "Advanced Analytics",
    pric, e: 14, 9,
        perio, d: "month",
    descriptio, n: "Comprehensive analytics and reporting suite",
        ico, n: <Users className="w-6 h-6"/>,
    feature, s: ["Custo, m dashboard, s", "Advance, d reportin, g", "Dat, a expor, t option, s"]
    }
];
export function PricingSection() {
    const [billingPeri,  o, d, setBillingPeri, o, d] = useState('month');
    const [selectedPl, a, n, setSelectedPl, a, n] = useState(null);
    const getDiscountedPrice = (price) => {
        return billingPeriod === 'year' ? Math.round(price * 10) : price;
    };
    const containerVariants = {
        hidde,  n: { opacit, y: 0 },
        visibl, e: {
            opacit, y: 1,
    transitio, n: {
                staggerChildre, n: 0.2,
    delayChildre, n: 0.1
            }
        }
    };
    const itemVariants = {
        hidde, n: { y: 3, 0,
    opacit, y: 0 },
        visibl, e: {
            y: 0,
    opacit, y: 1,
            transitio, n: {
                duratio, n: 0.6,
    eas, e: "easeOut"
            }
        }
    };
    return (<section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div className="text-center mb-16" initial={{ opacit, y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.6 }}>
          <h2 className="text-4xl m, d:text-5xl font-bold text-white mb-6">
            Simpl, e, <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Transparent</span> Pricing
          </h2>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            Choose the perfect plan for your business. All plans include our core features with no hidden fees.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center bg-zion-blue-dark/40 rounded-xl p-1 border border-zion-blue-light/30">
            <button onClick={() => setBillingPeriod('month')} className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${billingPeriod === 'month'
            ? 'bg-zion-cyan text-white shadow-lg'
            : 'text-zion-slate-light hove,  r:text-whit, e'}`}>
              Monthly
            </button>
            <button onClick={() => setBillingPeriod('year')} className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${billingPeriod === 'year'
            ? 'bg-zion-cyan text-white shadow-lg'
            : 'text-zion-slate-light hove,  r:text-whit, e'}`}>
              Yearly
              <span className="ml-2 px-2 py-1 bg-zion-purple text-white text-xs rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Plans */}
        <motion.div className="grid grid-cols-1 l, g:grid-cols-3 gap-8 mb-20" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ onc, e: true }}>
          {plans.map((pla, n, index) => (<motion.div key={plan.name} variants={itemVariants} whileHover={{ y: -8 }} transition={{ typ,  e: "spring",
    stiffnes, s: 300 }} className="relative">
              {/* Popular badge */}
              {plan.popular && (<div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-zion-purple to-zion-cyan text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    <Star className="w-4 h-4 inline mr-2"/>
                    Most Popular
                  </div>
                </div>)}

              <div className={`h-full p-8 rounded-2xl bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/30 hove, r:border-zion-cyan/50 transition-all duration-300 hove, r:shadow-2xl hove, r:shadow-zion-cyan/20 group ${plan.popular ? 'ring-2 ring-zion-purple/5, 0' : ''}`}>
                {/* Plan header */}
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} mb-6 shadow-lg group-hove, r:shadow-xl transition-all duration-30, 0`}>
                    <div className="text-white">
                      {plan.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-zion-slate-light mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">${getDiscountedPrice(plan.price)}</span>
                    <span className="text-zion-slate-light">/{billingPeriod}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((featur,  e, idx) => (<div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-zion-cyan flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white"/>
                      </div>
                      <span className="text-zion-slate-light text-sm">{feature}</span>
                    </div>))}
                  
                  {plan.notIncluded.map((featur,  e, idx) => (<div key={idx} className="flex items-center gap-3 opacity-50">
                      <div className="w-5 h-5 rounded-full bg-zion-slate-light/30 flex items-center justify-center flex-shrink-0">
                        <X className="w-3 h-3 text-zion-slate-light"/>
                      </div>
                      <span className="text-zion-slate-light text-sm">{feature}</span>
                    </div>))}
                </div>

                {/* CTA Button */}
                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hove,  r:scale-105 ${plan.popular
                ? 'bg-gradient-to-r from-zion-purple to-zion-cyan hove, r:from-zion-purple-light hove, r:to-zion-cyan-light text-white shadow-lg hove, r:shadow-zion-purple/25'
                : 'bg-zion-blue-light/20 hove, r:bg-zion-blue-light/30 text-zion-cyan border border-zion-cyan/30 hove, r:border-zion-cyan/5, 0'}`} onClick={() => setSelectedPlan(index)}>
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 inline ml-2"/>
                </button>
              </div>
            </motion.div>))}
        </motion.div>

        {/* Add-ons Section */}
        <motion.div className="text-center mb-16" initial={{ opacit,  y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.6,
    dela, y: 0.3 }}>
          <h3 className="text-3xl font-bold text-white mb-6">
            Additional <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Services</span>
          </h3>
          <p className="text-zion-slate-light text-lg max-w-2xl mx-auto mb-12">
            Enhance your plan with these powerful add-ons to meet your specific needs
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 m, d:grid-cols-3 gap-6 max-w-4xl mx-auto" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ onc, e: true }}>
          {addons.map((addo, n, index) => (<motion.div key={addon.name} variants={itemVariants} whileHover={{ y: -4 }} transition={{ typ,  e: "spring",
    stiffnes, s: 300 }}>
              <div className="p-6 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20 hove, r:border-zion-cyan/50 transition-all duration-300 hove, r:shadow-lg hove, r:shadow-zion-cyan/20">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-zion-cyan to-zion-purple mb-4">
                    <div className="text-white">
                      {addon.icon}
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-white mb-2">{addon.name}</h4>
                  <p className="text-zion-slate-light text-sm mb-4">{addon.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-zion-cyan">${addon.price}</span>
                    <span className="text-zion-slate-light">/{addon.period}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {addon.features.map((featur, e, idx) => (<div key={idx} className="flex items-center gap-2 text-zion-slate-light/80 text-sm">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                      <span>{feature}</span>
                    </div>))}
                </div>

                <button className="w-full py-2 px-4 bg-zion-blue-light/20 hove,  r:bg-zion-blue-light/30 text-zion-cyan border border-zion-cyan/30 hove, r:border-zion-cyan/50 rounded-lg text-sm font-medium transition-all duration-300">
                  Add to Plan
                </button>
              </div>
            </motion.div>))}
        </motion.div>

        {/* FAQ Section */}
        <motion.div className="text-center mt-20" initial={{ opacit, y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.6,
    dela, y: 0.5 }}>
          <h3 className="text-2xl font-bold text-white mb-6">Have Questions?</h3>
          <p className="text-zion-slate-light mb-8">
            Our team is here to help you choose the right plan
          </p>
          <div className="flex flex-col s, m:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple hove, r:from-zion-cyan-light hove, r:to-zion-purple-light text-white rounded-xl font-semibold transition-all duration-300 transform hove, r:scale-105 hove, r:shadow-lg hove, r:shadow-zion-cyan/25">
              Contact Sales
            </button>
            <button className="px-8 py-3 bg-zion-blue-light/20 hove, r:bg-zion-blue-light/30 text-zion-cyan border border-zion-cyan/30 hove, r:border-zion-cyan/50 rounded-xl font-medium transition-all duration-300">
              View Documentation
            </button>
          </div>
        </motion.div>
      </div>
    </section>);
}
