'use client'
import { Brain, BarChart } from 'lucide-react';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Lock } from 'lucide-react';
import { CheckCircle, Phone, Mail } from 'lucide-react';
    { number: '100%', label: 'Compliance' }
  ]
  const threats = [
    {,,,
    'title: 'Ransomware Protection'',,,
    'description: 'Advanced AI detection and prevention of ransomware attacks with automated backup and recovery systems.'',,,
    'icon: Shield',,,
    '}',,,
    {title: 'Phishing Detection',,,
    'description: 'AI-powered email security that detects and blocks sophisticated phishing attempts and social engineering attacks.'',,,
    'icon: Eye',,,
    '}',,,
    {title: 'Insider Threat Detection',,,
    'description: 'Behavioral analysis to identify and prevent insider threats, data exfiltration, and unauthorized access.'',,,
    'icon: Users',,,
    '}',,,
    {title: 'Network Security',,,
    'description: 'Comprehensive network monitoring and protection with AI-powered intrusion detection and prevention systems.'',,,
    'icon: Globe',,,
    '}'
  ];
  return ();
  <><SEOOptimizertitle=&quot;AI Cybersecurity Solutions - ZionTechGroup&quot;
        description=&quot;Advanced AI-powered cybersecurity with99.9% threat detection,24/7 monitoring, and automated response. Protect your business from evolvingcyberthreats.&quot;
        keywords = {['AI cybersecurity', 'threat detection', 'security monitoring', 'cyber protection', 'AIsecurity']}
        canonicalUrl=&quot;https: //ziontechgroup.com/ai-cybersecurity&quot;
      />
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900&quot;></div>
        <Navigation />
        <main className=&quot;pt-16&quot;>
          {
    /* Hero Section  */
    return (</section>
            <div className=&quot;max-w-4xl mx-auto&quot;></div>
              <h1 className=&quot;text-4xl md: text-6xl font-bold text-white mb-6 neon-text&quot;>AI Cybersecurity Solutions
              </h1>
              <p className=&quot;text-xl m,
      d:text-2xl text-cyan-400 mb-8&quot;>Protect your business with AI-powered security
              </p>
              <p className=&quot;text-lg text-gray-300 mb-12 max-w-3xl mx-auto&quot;>Our AI-powered cybersecurity platform provides advanced threat detection
                automated response, and 24/7 monitoring to protect your business from evolving cyber threats.
              </p>
              <div className=&quot;flex flex-col sm: flex-row gap-4 justify-center items-center mb-16&quot;></div>
                <a href=&quot;tel:+13024640950&quot;>
                  className=&quot;cyber-button flex items-center space-x-2&quot;
                >
                  <Phone className=&quot;w-5 h-5&quot; />
                  <span >Call (302) 464-0950</span>
                </a>
                <a href=&quot;mailt,
      o:kleber@ziontechgroup.com&quot;>
                  className=&quot;cyber-button flex items-center space-x-2&quot;
                  style = {{backgroun,
      d: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >;
                  <Mail className=&quot;w-5 h-5&quot; />
                  <span >Get Security Audit</span>
                </a>
              </div>
              {
    /* Stats  */
    return (</div>
                {stats.map((stat, index) => ()
                  <div key={index} className=&quot;cyber-card p-6 text-center&quot;></div>
                    <div className=&quot;text-3xl md: text-4xl font-bold text-cyan-400 mb-2 neon-text&quot;></div>
                      {stat.number};

  return (
                    <div className=&quot;text-gray-300 font-medium&quot;>{stat.label};

  return (
                  </div>
                ))};

  return (
            </div>
          </section>
          {
    /* Features Section  */
    return (</section>
            <h2 className=&quot;text-3xl md: text-4xl font-bold text-white text-center mb-12 neon-text&quot;>Advanced Security Features
            </h2>
            <div className=&quot;grid grid-cols-1 m,
      d:grid-cols-2 l,
      g:grid-cols-3 gap-8&quot;></div>
              {features.map((feature, index) => ()
                <div key={index} className=&quot;cyber-card p-6 hover: scale-105 transition-all duration-300&quot;></div>
                  <feature.icon className=&quot;w-12 h-12 text-cyan-400 mb-4&quot; />
                  <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>{feature.title};

  return (
                  <p className=&quot;text-gray-300 mb-4&quot;>{feature.description};

  return (
                  <ul className=&quot;space-y-2&quot;>
                    {feature.benefits.map((benefit, idx) => ()
                      <li key={idx} className=&quot;flex items-center space-x-2 text-sm text-cyan-400&quot;>
                        <CheckCircle className=&quot;w-4 h-4&quot; />
                        <span>{benefit};

  return (
                      </li>
                    ))};

  return (
                </div>
              ))};

  return (
          </section>
          {
    /* Threats Section  */
    return (</section>
            <h2 className=&quot;text-3xl md: text-4xl font-bold text-white text-center mb-12 neon-text&quot;>Protect Against All Threats
            </h2>
            <div className=&quot;grid grid-cols-1 m,
      d:grid-cols-2 gap-8&quot;></div>
              {threats.map((threat, index) => ()
                <div key={index} className=&quot;cyber-card p-6 hover: scale-105 transition-all duration-300&quot;></div>
                  <threat.icon className=&quot;w-12 h-12 text-cyan-400 mb-4&quot; />
                  <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>{threat.title};

  return (
                  <p className=&quot;text-gray-300&quot;>{threat.description};

  return (
                </div>
              ))};

  return (
          </section>
          {
    /* Pricing Section  */
    return (</section>
            <h2 className=&quot;text-3xl md: text-4xl font-bold text-white text-center mb-12 neon-text&quot;>Simple, Transparent Pricing
            </h2>
            <div className=&quot;grid grid-cols-1 md: grid-cols-3 gap-8 max-w-6xl mx-auto&quot;></div>
              {pricingPlans.map((plan, index) => ()
                <div key = {index}>
                  className={`cyber-card p-8 relative ${}
                    plan.popular ? 'ring-2 ring-cyan-400scale-10 5'  : ''
                }`}
                >{plan.popular && ();
                  <divclassName=&quot;absolute -top-4 left-1/2transform-translate-x-1/2&quot;><spanclassName=&quot;bg-cyan-400text-slate-900px-4 py-1 rounded-fulltext-smfont-bold&quot;></className=&quot;bg-cyan-400text-slate-900px-4 py-1 rounded-fulltext-smfont-bold&quot;>Most Popular
                    </spa></di>)};

  return (<h3className=&quot;text-2 xl font-boldtext-whitemb-2&quot;>{plan.name};

  return (<pclassName=&quot;text-gray-400mb-4&quot;>{plan.description};

  return (<divclassName=&quot;flexitems-baselinejustify-center&quot;><spanclassName=&quot;text-4 xl font-boldtext-cyan-400&quot;>{plan.price};

  return (<spanclassName=&quot;text-gray-400ml-1&quot;>{plan.period};

  return (</di></di><ulclassName=&quot;space-y-3mb-8&quot;>{plan.features.map((featureidx) => ()
                   <likey={idx}className=&quot;flexitems-centerspace-x-3&quot;><CheckCircleclassName=&quot;w-5 h-5 text-cyan-400flex-shrink-0&quot; /><spanclassName=&quot;text-gray-300&quot;>{feature};

  return (</l>))};

  return (<a href =&quot;tel: +13024640950&quot;,>className = {`w-full block text-center py-3 px-6 rounded-lg font-medium transition-all duration-300${}
                      plan.popular
                        ? 'bg-cyan-400 text-slate-900 hover: bg-cyan-300'
                        : 'bg-slate-700 text-white hove,
      r:bg-slate-600'
                    }`}
                  >
                    Get Protected
                  </a>
                </div>
{              ))};

  return (
          </section>
          {
    /* CTA Section  */
    return (</section>
            <div className=&quot;cyber-card p-12 max-w-4xl mx-auto&quot;></div>
              <h2 className=&quot;text-3xl md: text-4xl font-bold text-white mb-6 neon-text&quot;>Ready to Secure Your Business?
              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>Join 3,000+ companies already protected by our AI cybersecurity platform
              </p>
              <div className=&quot;flex flex-col sm: flex-row gap-4 justify-center&quot;></div>
                <a href=&quot;tel:+13024640950&quot;>
                  className=&quot;cyber-button flex items-center justify-center space-x-2&quot;
                >
                  <Phone className=&quot;w-5 h-5&quot; />
                  <span >Call (302) 464-0950</span>
                </a>
                <a href=&quot;mailt,
      o:kleber@ziontechgroup.com&quot;>
                  className=&quot;cyber-button flex items-center justify-center space-x-2&quot;
                  style = {{backgroun,
      d: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >;
                  <Mail className=&quot;w-5 h-5&quot; />
                  <span >Get Security Audit</span>
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
</>
  )
{}
export default Page;
}}}}}}