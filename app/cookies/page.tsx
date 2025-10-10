'use client';
import React from 'react';
import { Cookie, Settings, Shield, Eye, Database, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CookiesPage: React.FC = () => {
  const lastUpdated = 'January 1, 2024';

  const cookieTypes = [
    {
      title: 'Essential Cookies',
      icon: Shield,
      description: 'These cookies are necessary for the website to function and cannot be switched off in our systems.',
      examples: [
        'Authentication cookies to keep you logged in',
        'Security cookies to protect against fraud',
        'Load balancing cookies for website performance',
        'Session cookies to remember your preferences'
      ],
      necessary: true
    },
    {
      title: 'Analytics Cookies',
      icon: Database,
      description: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.',
      examples: [
        'Google Analytics to understand website usage',
        'Heat mapping tools to see how users interact with pages',
        'Performance monitoring to identify slow pages',
        'A/B testing cookies to optimize user experience'
      ],
      necessary: false
    },
    {
      title: 'Functional Cookies',
      icon: Settings,
      description: 'These cookies enable the website to provide enhanced functionality and personalization.',
      examples: [
        'Language preference cookies',
        'Theme and display settings',
        'Form data cookies to prevent data loss',
        'Chat widget cookies for customer support'
      ],
      necessary: false
    },
    {
      title: 'Marketing Cookies',
      icon: Eye,
      description: 'These cookies may be set through our site by our advertising partners to build a profile of your interests.',
      examples: [
        'Social media tracking pixels',
        'Advertising network cookies',
        'Retargeting cookies for personalized ads',
        'Conversion tracking for marketing campaigns'
      ],
      necessary: false
    }
  ];

  const cookieDetails = [
    {
      name: '_ga',
      purpose: 'Google Analytics - Distinguishes unique users',
      duration: '2 years',
      type: 'Analytics'
    },
    {
      name: '_gid',
      purpose: 'Google Analytics - Distinguishes unique users',
      duration: '24 hours',
      type: 'Analytics'
    },
    {
      name: 'session_id',
      purpose: 'Maintains user session and authentication',
      duration: 'Session',
      type: 'Essential'
    },
    {
      name: 'preferences',
      purpose: 'Stores user preferences and settings',
      duration: '1 year',
      type: 'Functional'
    },
    {
      name: 'marketing_consent',
      purpose: 'Remembers marketing cookie consent choice',
      duration: '1 year',
      type: 'Essential'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    </div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"> </div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"> </div><Navigation />

     </Navigation /> </Navigation /><main className="container mx-auto px-4 py-16 pt-24">{/* Header *</main className="container mx-auto px-4 py-16 pt-24">/</main className="container mx-auto px-4 py-16 pt-24">}</main>
       <//main> <//main><section className="text-center mb-16">
         </section className="text-center mb-16"> </section className="text-center mb-16"><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">Cookie Poli</h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">c</h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">y</h1><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">This policy explains how we use cookies and similar technologies on our website to enhance your experience</p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">.</p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"><div className="text-sm text-gray-400">Last updated: {lastUpdat</div className="text-sm text-gray-400">e</div className="text-sm text-gray-400">d</div>}</div>
        <//div> <//div> </div>
      <//div> <//div> </section>

        {/* Introduction */}
       <//section> <//section><section className="mb-16">
         </section className="mb-16"> </section className="mb-16"><div className="cyber-card p-8">
          </div className="cyber-card p-8"> </div className="cyber-card p-8"> </div><h2 className="text-2xl font-bold text-white mb-6 neon-text">What Are Cookies</h2 className="text-2xl font-bold text-white mb-6 neon-text">?</h2 className="text-2xl font-bold text-white mb-6 neon-text"><p className="text-gray-300 mb-4 leading-relaxed">Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owner</p className="text-gray-300 mb-4 leading-relaxed">s</p className="text-gray-300 mb-4 leading-relaxed">.</p>
               <//p> <//p><p className="text-gray-300 leading-relaxed">We use cookies and similar technologies to improve your browsing experience, personalize content and ads, provide social media features, and analyze our traffic. We also share information about your use of our site with our social media, advertising, and analytics partner</p className="text-gray-300 leading-relaxed">s</p className="text-gray-300 leading-relaxed">.</p>
        <//p> <//p> </div>
      <//div> <//div> </section>

        {/* Cookie Types */}
       <//section> <//section><section className="mb-16">
         </section className="mb-16"> </section className="mb-16"><h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Types of Cookies We Us</h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">e</h2 className="text-3xl font-bold text-white mb-8 text-center neon-text"><div className="grid grid-cols-1 md:grid-cols-2 gap-8">{cookieTypes.map((cookieType, index) =</div className="grid grid-cols-1 md:grid-cols-2 gap-8">></div className="grid grid-cols-1 md:grid-cols-2 gap-8"> </div>(</div>
             <//div> <//div><div key={index} className="cyber-card p-6">
               </div key={index} className="cyber-card p-6"> </div key={index} className="cyber-card p-6"><div className="flex items-center mb-4">
                </div className="flex items-center mb-4"> </div className="flex items-center mb-4"> </div><cookieType.icon className="w-8 h-8 text-cyan-400 mr-3" />
                 </cookieType.icon className="w-8 h-8 text-cyan-400 mr-3" /> </cookieType.icon className="w-8 h-8 text-cyan-400 mr-3" /><h3 className="text-xl font-bold text-white">{cookieType.titl</h3 className="text-xl font-bold text-white">e</h3 className="text-xl font-bold text-white">}</h3>
                  {cookieType.necessary && (
                   <//h3> <//h3><span className="ml-auto bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">Necess</span className="ml-auto bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">a</span className="ml-auto bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">r</span>y</span>
                  )}
               <//span> <//span><p className="text-gray-300 mb-4">{cookieType.descriptio</p className="text-gray-300 mb-4">n</p className="text-gray-300 mb-4">}</p>
               <//p> <//p><div>
                </div> </div> </div><h4 className="text-sm font-semibold text-cyan-400 mb-2">Examples</h4 className="text-sm font-semibold text-cyan-400 mb-2">:</h4 className="text-sm font-semibold text-cyan-400 mb-2"><ul className="space-y-1">{cookieType.examples.map((example, exampleIndex) =></ul className="space-y-1"> </ul className="space-y-1">(</ul>
                     <//ul> <//ul><li key={exampleIndex} className="flex items-start text-sm text-gray-300">
                       </li key={exampleIndex} className="flex items-start text-sm text-gray-300"> </li key={exampleIndex} className="flex items-start text-sm text-gray-300"><span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-2 flex-shrink-0">{examp</span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-2 flex-shrink-0">l</span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-2 flex-shrink-0">e</span>}</span>
                    ))}
                <//span> <//span> </ul>
              <//ul> <//ul> </div>
            <//div> <//div> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </section>

        {/* Cookie Details Table */}
       <//section> <//section><section className="mb-16">
         </section className="mb-16"> </section className="mb-16"><div className="cyber-card p-8">
          </div className="cyber-card p-8"> </div className="cyber-card p-8"> </div><h2 className="text-2xl font-bold text-white mb-6 neon-text">Specific Cookies We U</h2 className="text-2xl font-bold text-white mb-6 neon-text">s</h2 className="text-2xl font-bold text-white mb-6 neon-text">e</h2>
           <//h2> <//h2><div className="overflow-x-auto">
            </div className="overflow-x-auto"> </div className="overflow-x-auto"> </div><table className="w-full text-left">
               </table className="w-full text-left"> </table className="w-full text-left"><thead>
                 </thead> </thead><tr className="border-b border-gray-700">
                   </tr className="border-b border-gray-700"> </tr className="border-b border-gray-700"><th className="pb-3 text-cyan-400 font-semibold">Cookie Nam</th className="pb-3 text-cyan-400 font-semibold">e</th className="pb-3 text-cyan-400 font-semibold"><th className="pb-3 text-cyan-400 font-semibold">Purpo</th className="pb-3 text-cyan-400 font-semibold">s</th className="pb-3 text-cyan-400 font-semibold">e</th>
                   <//th> <//th><th className="pb-3 text-cyan-400 font-semibold">Duratio</th className="pb-3 text-cyan-400 font-semibold">n</th className="pb-3 text-cyan-400 font-semibold"><th className="pb-3 text-cyan-400 font-semibold">Typ</th className="pb-3 text-cyan-400 font-semibold">e</th className="pb-3 text-cyan-400 font-semibold"><tbody>{cookieDetails.map((cookie, index) =></tbody> </tbody>(</tbody>
                   <//tbody> <//tbody><tr key={index} className="border-b border-gray-800">
                     </tr key={index} className="border-b border-gray-800"> </tr key={index} className="border-b border-gray-800"><td className="py-3 text-white font-mono">{cookie.name</td className="py-3 text-white font-mono">}</td className="py-3 text-white font-mono"><td className="py-3 text-gray-300">{cookie.purpose</td className="py-3 text-gray-300">}</td className="py-3 text-gray-300"><td className="py-3 text-gray-300">{cookie.duratio</td className="py-3 text-gray-300">n</td className="py-3 text-gray-300">}</td>
                     <//td> <//td><td className="py-3">
                       </td className="py-3"> </td className="py-3"><span className={`px-2 py-1 rounded text-xs font-medium ${
                          cookie.type === 'Essential' ? 'bg-green-500/20 text-green-400' :
                          cookie.type === 'Analytics' ? 'bg-blue-500/20 text-blue-400' :
                          'bg-purple-500/20 text-purple-400'
                        }`}>{cookie.ty</span className={`px-2 py-1 rounded text-xs font-medium ${
                          cookie.type === 'Essential' ? 'bg-green-500/20 text-green-400' :
                          cookie.type === 'Analytics' ? 'bg-blue-500/20 text-blue-400' :
                          'bg-purple-500/20 text-purple-400'
                        }`}>p</span className={`px-2 py-1 rounded text-xs font-medium ${
                          cookie.type === 'Essential' ? 'bg-green-500/20 text-green-400' :
                          cookie.type === 'Analytics' ? 'bg-blue-500/20 text-blue-400' :
                          'bg-purple-500/20 text-purple-400'
                        }`}>e</span>}</span>
                    <//span> <//span> </td>
                  <//td> <//td> </tr>
                  ))}
              <//tr> <//tr> </tbody>
            <//tbody> <//tbody> </table>
          <//table> <//table> </div>
        <//div> <//div> </div>
      <//div> <//div> </section>

        {/* Cookie Management */}
       <//section> <//section><section className="mb-16">
         </section className="mb-16"> </section className="mb-16"><div className="cyber-card p-8">
          </div className="cyber-card p-8"> </div className="cyber-card p-8"> </div><h2 className="text-2xl font-bold text-white mb-6 neon-text">Managing Your Cookie Preferenc</h2 className="text-2xl font-bold text-white mb-6 neon-text">e</h2 className="text-2xl font-bold text-white mb-6 neon-text">s</h2>
           <//h2> <//h2><div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             </div className="grid grid-cols-1 md:grid-cols-2 gap-8"> </div className="grid grid-cols-1 md:grid-cols-2 gap-8"><div>
              </div> </div> </div><h3 className="text-xl font-semibold text-cyan-400 mb-4">Browser Settin</h3 className="text-xl font-semibold text-cyan-400 mb-4">g</h3 className="text-xl font-semibold text-cyan-400 mb-4">s</h3>
                 <//h3> <//h3><p className="text-gray-300 mb-4">Most web browsers allow you to control cookies through their settings preferences. You can set your browser to refuse cookies or delete certain cookie</p className="text-gray-300 mb-4">s</p className="text-gray-300 mb-4">.</p>
               <//p> <//p><ul className="space-y-2 text-gray-300">
                 </ul className="space-y-2 text-gray-300"> </ul className="space-y-2 text-gray-300"><li className="flex items-start">
                   </li className="flex items-start"> </li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                   </CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" /> </CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" /><span>Chrome: Settings → Privacy and Security → Cookies and other site d</span>a</span>t</span>a</span>
                <//span> <//span> </li>
                 <//li> <//li><li className="flex items-start">
                   </li className="flex items-start"> </li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                   </CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" /> </CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" /><span>Firefox: Options → Privacy & Security → Cookies and Site D</span>a</span>t</span>a</span>
                <//span> <//span> </li>
                 <//li> <//li><li className="flex items-start">
                   </li className="flex items-start"> </li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                   </CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" /> </CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" /><span>Safari: Preferences → Privacy → Manage Website D</span>a</span>t</span>a</span>
                <//span> <//span> </li>
                 <//li> <//li><li className="flex items-start">
                   </li className="flex items-start"> </li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                   </CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" /> </CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" /><span>Edge: Settings → Cookies and site permissi</span>o</span>n</span>s</span>
                <//span> <//span> </li>
              <//li> <//li> </ul>
            <//ul> <//ul> </div>
             <//div> <//div><div>
              </div> </div> </div><h3 className="text-xl font-semibold text-cyan-400 mb-4">Cookie Conse</h3 className="text-xl font-semibold text-cyan-400 mb-4">n</h3 className="text-xl font-semibold text-cyan-400 mb-4">t</h3>
                 <//h3> <//h3><p className="text-gray-300 mb-4">When you first visit our website, you'll see a cookie consent banner where you can choose which types of cookies to accep</p className="text-gray-300 mb-4">t</p className="text-gray-300 mb-4">.</p>
               <//p> <//p><div className="space-y-3">
                 </div className="space-y-3"> </div className="space-y-3"><div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                  </div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg"> </div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg"> </div><span className="text-white">Essential Cooki</span className="text-white">e</span className="text-white">s</span><span className="text-green-400 text-sm">Always Act</span className="text-green-400 text-sm">i</span className="text-green-400 text-sm">v</span>e</span>
                <//span> <//span> </div>
                 <//div> <//div><div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                  </div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg"> </div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg"> </div><span className="text-white">Analytics Cooki</span className="text-white">e</span className="text-white">s</span><button className="text-cyan-400 hover:text-cyan-300 text-sm">Mana</button className="text-cyan-400 hover:text-cyan-300 text-sm">g</button className="text-cyan-400 hover:text-cyan-300 text-sm">e</button>
                <//button> <//button> </div>
                 <//div> <//div><div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                  </div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg"> </div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg"> </div><span className="text-white">Marketing Cooki</span className="text-white">e</span className="text-white">s</span><button className="text-cyan-400 hover:text-cyan-300 text-sm">Mana</button className="text-cyan-400 hover:text-cyan-300 text-sm">g</button className="text-cyan-400 hover:text-cyan-300 text-sm">e</button>
                <//button> <//button> </div>
              <//div> <//div> </div>
            <//div> <//div> </div>
          <//div> <//div> </div>
        <//div> <//div> </div>
      <//div> <//div> </section>

        {/* Third-Party Cookies */}
       <//section> <//section><section className="mb-16">
         </section className="mb-16"> </section className="mb-16"><div className="cyber-card p-8">
          </div className="cyber-card p-8"> </div className="cyber-card p-8"> </div><h2 className="text-2xl font-bold text-white mb-6 neon-text">Third-Party Cooki</h2 className="text-2xl font-bold text-white mb-6 neon-text">e</h2 className="text-2xl font-bold text-white mb-6 neon-text">s</h2>
           <//h2> <//h2><p className="text-gray-300 mb-6">Some cookies on our site are set by third-party services that appear on our pages. We have no control over these cookie</p className="text-gray-300 mb-6">s</p className="text-gray-300 mb-6">.</p>
           <//p> <//p><div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             </div className="grid grid-cols-1 md:grid-cols-2 gap-6"> </div className="grid grid-cols-1 md:grid-cols-2 gap-6"><div>
              </div> </div> </div><h3 className="text-lg font-semibold text-cyan-400 mb-3">Google Analytic</h3 className="text-lg font-semibold text-cyan-400 mb-3">s</h3 className="text-lg font-semibold text-cyan-400 mb-3"><p className="text-gray-300 text-sm mb-2">We use Google Analytics to understand how visitors interact with our website</p className="text-gray-300 text-sm mb-2">.</p className="text-gray-300 text-sm mb-2"><a href="https://policies.google.com/privacy" className="text-cyan-400 hover:text-cyan-300 text-sm">Google Privacy Policy</a href="https://policies.google.com/privacy" className="text-cyan-400 hover:text-cyan-300 text-sm"> </a href="https://policies.google.com/privacy" className="text-cyan-400 hover:text-cyan-300 text-sm">→</a>
              <//a> <//a> </a>
            <//a> <//a> </div>
             <//div> <//div><div>
              </div> </div> </div><h3 className="text-lg font-semibold text-cyan-400 mb-3">Social Medi</h3 className="text-lg font-semibold text-cyan-400 mb-3">a</h3 className="text-lg font-semibold text-cyan-400 mb-3"><p className="text-gray-300 text-sm mb-2">Social media platforms may set cookies when you share content or visit our social media pages</p className="text-gray-300 text-sm mb-2">.</p className="text-gray-300 text-sm mb-2"><a href="https://www.facebook.com/privacy/explanation" className="text-cyan-400 hover:text-cyan-300 text-sm">Facebook Privacy Policy</a href="https://www.facebook.com/privacy/explanation" className="text-cyan-400 hover:text-cyan-300 text-sm"> </a href="https://www.facebook.com/privacy/explanation" className="text-cyan-400 hover:text-cyan-300 text-sm">→</a>
              <//a> <//a> </a>
            <//a> <//a> </div>
          <//div> <//div> </div>
        <//div> <//div> </div>
      <//div> <//div> </section>

        {/* Contact Information */}
       <//section> <//section><section className="mb-16">
         </section className="mb-16"> </section className="mb-16"><div className="cyber-card p-8">
          </div className="cyber-card p-8"> </div className="cyber-card p-8"> </div><h2 className="text-2xl font-bold text-white mb-6 neon-text">Questions About Cookie</h2 className="text-2xl font-bold text-white mb-6 neon-text">s</h2 className="text-2xl font-bold text-white mb-6 neon-text">?</h2>
           <//h2> <//h2><p className="text-gray-300 mb-6">If you have any questions about our use of cookies or this Cookie Policy, please contact u</p className="text-gray-300 mb-6">s</p className="text-gray-300 mb-6">:</p>
           <//p> <//p><div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             </div className="grid grid-cols-1 md:grid-cols-2 gap-6"> </div className="grid grid-cols-1 md:grid-cols-2 gap-6"><div>
              </div> </div> </div><h3 className="text-lg font-semibold text-cyan-400 mb-3">Zion Tech Gro</h3 className="text-lg font-semibold text-cyan-400 mb-3">u</h3 className="text-lg font-semibold text-cyan-400 mb-3">p</h3>
               <//h3> <//h3><div className="space-y-2 text-gray-300">
                </div className="space-y-2 text-gray-300"> </div className="space-y-2 text-gray-300"> </div><p>364 E Main St STE 100</p>8</p><p>Middletown, DE 1970</p>9</p><p>United Stat</p>e</p>s</p>
              <//p> <//p> </div>
            <//div> <//div> </div>
             <//div> <//div><div>
              </div> </div> </div><h3 className="text-lg font-semibold text-cyan-400 mb-3">Contact Informati</h3 className="text-lg font-semibold text-cyan-400 mb-3">o</h3 className="text-lg font-semibold text-cyan-400 mb-3">n</h3>
               <//h3> <//h3><div className="space-y-2 text-gray-300">
                </div className="space-y-2 text-gray-300"> </div className="space-y-2 text-gray-300"> </div><p>Email:</p> </p><a href="mailto:privacy@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">privacy@ziontechgroup.c</a href="mailto:privacy@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">o</a href="mailto:privacy@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">m</a>
                 <//a> <//a><p>Phone:</p> </p><a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 09</a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">5</a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">0</a>
              <//a> <//a> </div>
            <//div> <//div> </div>
          <//div> <//div> </div>
        <//div> <//div> </div>
      <//div> <//div> </section>
    <//section> <//section> </main>

     <//main> <//main><Footer />
  </Footer /> </Footer /> </div>
  );
};

export default CookiesPage<//div>;<//div>