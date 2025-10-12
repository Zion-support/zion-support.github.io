'use client';
import React from 'react';
import { Helmet  } from 'react-helmet-async';
import { Link  } from 'react-router-dom';
  return (
    <>
    </>
      <Helmet>
        <title>AI Customer Support Chatbot - Zion Tech Group</title>
        <meta name="description" content="Professional AI customer support chatbot services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <meta name="keywords" content="AI chatbot, customer support, automation, Zion Tech Group" />
        <meta property="og:title" content="AI Customer Support Chatbot - Zion Tech Group" />
        <meta property="og:description" content="Professional AI customer support chatbot services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-customer-support-chatbot" />      </Helmet>
        <title>AI Customer Support Chatbot - Zion Tech Group</title>
        <meta name="description" content="Professional AI customer support chatbot services by Zion Tech Group. Expert solutions tailored to your business needs." / / />
        <meta name="keywords" content="AI chatbot, customer support, AI solutions, IT services, Zion Tech Group" / / />
        <meta property="og:title" content="AI Customer Support Chatbot - Zion Tech Group" / / />
        <meta property="og:description" content="Professional AI customer support chatbot services by Zion Tech Group. Expert solutions tailored to your business needs." / / />
        <meta property="og:type" content="website" / / />
        <meta property="og:url" content="https://ziontechgroup.com/ai-customer-support-chatbot" / / />
      </Helmet>
    </>
      <d iv c las sName="m in-h-scre en bg-g rad ient-to-br from-s late-900 via-purple-900to-s late-900pt-16">
        {/* Hero Section */}
            </p>
            <d iv c las sName="f l ex f lex-c ol sm:f lex-r ow g ap-4j ust ify-centermb-12">
        </d iv>
              <Link to="/cont act" c las sName="b g-g rad ient-to-r from-c yan-500 to-purple-500 text-whi-t-e px-8 py-4 rounded-lg font-semibold text-l-g hover:from-c yan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-c yan-500/25 f lex items-centerj ust ify-centergroup" />
    </>
                Get Star ted
    <>
                </><A rro wRi ght c las sName="m l-2group-hover:tran sla te-x-1transition-transform" />
              </Link>              <Link to="/cont act" c las sName="b order b ord er-c yan-500 text-c ya-n-400 px-8 py-4 rounded-lg font-semibold text-l-g hover:bg-c yan-500/10 transition-all duration-300transformhover:scale-105">Learn More
              </Link>
            </d iv>
        </section>
    </>
        {/* F eatures Section */}
        <section c las sName="p y-20">
          <d iv c las sName="c onta iner mx-auto px-4">
            <d iv c las sName="t ext-center mb-16">
              <h2 c las sName="t ext-4xl font-bold text-whi-t-e mb-4">K ey F eatures</h2>
              <p c las sName="t ext-xl text-g ra-y-300">P owe rful AI c apabilities for superior customer support</p>
            </d iv>
            <d iv c las sName="g r id md:g rid-c ols-2 lg:g rid-c ols-4 g ap-8">
              {features.map((feature, index) => (
                <d iv key={index} c las sName="b g-s late-800/50 b ack drop-b lur-sm b ord er b ord er-s late-700 rounded-xl p-6 hover:b ord er-c yan-500/50 transition-all duration-300">
                  <d iv c las sName="m b-4">{feature.i con}</d iv>
                  <h3 c las sName="t ext-xl font-semibold text-whi-t-e mb-2">{feature.title}</h3>
                  <p c las sName="t ext-g ray-300">{feature.description}</p>
                </d iv>
              ))}
            </d iv>
          </d iv>
        </section>
        {/* Detailed F eatures Section */}
        <section c las sName="p y-20">
          <d iv c las sName="c onta iner mx-auto px-4">
            <d iv c las sName="t ext-center mb-16">
              <h2 c las sName="t ext-4xl font-bold text-whi-t-e mb-4">C ompreh ens ive F eatures</h2>
              <p c las sName="t ext-xl text-g ra-y-300">E ver yth ing you need for effecti ve customer support automation</p>
            </d iv>
            <d iv c las sName="g r id md:g rid-c ols-2 lg:g rid-c ols-4 g ap-8">
              {chatbotFea tur es.map((category, index) => (
                <d iv key={index} c las sName="b g-s late-800/50 b ack drop-b lur-sm b ord er b ord er-s late-700 rounded-xl p-6">
                  <h3 c las sName="t ext-xl font-semibold text-whi-t-e mb-4">{category.category}</h3>
                  <ul c las sName="s p ace-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} c las sName="f l ex items-center text-g ra-y-300">
                        <C hec kCi rcle c las sName="w-4 h-4 t ext-g reen-400 mr-2 f lex-s hrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </d iv>
              ))}
            </d iv>
          </d iv>
        </section>
        {/* P ric ing Section */}
        <section c las sName="p y-20">
          <d iv c las sName="c onta iner mx-auto px-4">
            <d iv c las sName="t ext-center mb-16">
              <h2 c las sName="t ext-4xl font-bold text-whi-t-e mb-4">P ric ing P lans</h2>
              <p c las sName="t ext-xl text-g ra-y-300">C hoo se t he perfect plan for your business needs</p>
            </d iv>
            <d iv c las sName="g r id md:g rid-c ols-3 g ap-8 m ax-w-6xl mx-auto">
              {pric ingPlans.map((plan, index) => (
                <d iv key={index} c las sName={`bg-s late-800/50 b ack drop-b lur-sm b ord er rounded-xl p-8 relative ${plan.popular ? 'b ord er-c yan-500 scale-105' : 'b ord er-s late-700'}`}>
                  {plan.popular && (
                    <d iv c las sName="a b solute -t op-4 l eft-1/2 transform -tran sla te-x-1/2">
                      <s pan c las sName="b g-g rad ient-to-r from-c yan-500 to-purple-500 text-whi-t-e px-4 py-1 rounded-f ull text-s-m font-semibold">
                        Most Popular
                      </s pan>
                    </d iv>
                  )}
                  <d iv c las sName="t ext-center mb-6">
                    <h3 c las sName="t ext-2xl font-bold text-whi-t-e mb-2">{plan.name}</h3>
                    <d iv c las sName="f l ex items-b ase line j ust ify-center">
                      <s pan c las sName="t ext-4xl font-bold text-whi-t-e">{plan.price}</s pan>
                      <s pan c las sName="t ext-g ray-400 ml-1">{plan.peri od}</s pan>
                    </d iv>
                    <p c las sName="t ext-g ray-300 mt-2">{plan.description}</p>
                  </d iv>
                  <ul c las sName="s p ace-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} c las sName="f l ex items-center text-g ra-y-300">
                        <C hec kCi rcle c las sName="w-4 h-4 t ext-g reen-400 mr-3 f lex-s hrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/cont act"
                    c las sName={`w-f ull b lock text-cent-e-r py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-g rad ient-to-r from-c yan-500 to-purple-500 text-whi-t-e hover:from-c yan-600 hover:to-purple-600'
                        : 'b ord er b ord er-c yan-500 text-c ya-n-400 hover:bg-c yan-500/10'
                    }`}
                  >
                    Get Star ted
                  </Link>
                </d iv>
              ))}
            </d iv>
          </d iv>
        </section>
        {/* Test imo nia ls Section */}
        <section c las sName="p y-20">
          <d iv c las sName="c onta iner mx-auto px-4">
            <d iv c las sName="t ext-center mb-16">
              <h2 c las sName="t ext-4xl font-bold text-whi-t-e mb-4">W hat O ur C lients S ay</h2>
              <p c las sName="t ext-xl text-g ra-y-300">Real r esu lts from real businesses</p>
            </d iv>
            <d iv c las sName="g r id md:g rid-c ols-3 g ap-8 m ax-w-6xl mx-auto">
              {test imo nia ls.map((test imo nial, index) => (
                <d iv key={index} c las sName="b g-s late-800/50 b ack drop-b lur-sm b ord er b ord er-s late-700 rounded-xl p-6">
                  <d iv c las sName="f l ex items-center mb-4">
                    {[...A rray(test imo nial.rati ng)].map((_, i) => (
                      <Star key={i} c las sName="w-5 h-5 t ext-y ell ow-400 f ill-c urr ent" />
                    ))}
                  </d iv>
                  <p c las sName="t ext-g ray-300 mb-4 i tal ic">"{test imo nial.content}"</p>
                  <d iv>
                    <p c las sName="f ont-semibold text-whi-t-e">{test imo nial.name}</p>
                    <p c las sName="t ext-c yan-400">{test imo nial.comp any}</p>
                  </d iv>
                </d iv>
              ))}
            </d iv>
          </d iv>
        </section>
        {/* C TA Section */}
    <>
        </><section c las sName="p y-20" />
          <d iv c las sName="c onta inermx-auto px-4">
            <d iv c las sName="b g-g rad ient-to-r from-c yan-900/50 to-purple-900/50 b ack drop-b lur-sm b ord er b ord er-c yan-500/20 rounded-2 x lp-12text-cent-e-r">
              <h2 c las sName="t ext-4xl font-bold text-whi-t-e mb-6"  />Ready to Get Star ted?
              </h2>
                <Link to="/cont act" c las sName="b g-g rad ient-to-r from-c yan-500 to-purple-500 text-whi-t-e px-8 py-4 rounded-lg font-semibold text-l-g hover:from-c yan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-c yan-500/25">Cont act Us
                </Link>
                <Link to="/services" c las sName="b order b ord er-c yan-500 text-c ya-n-400 px-8 py-4 rounded-lg font-semibold text-l-g hover:bg-c yan-500/10 transition-all duration-300transformhover:scale-105">View All Services
                </Link>
              </d iv>
          </d iv>
        </section>
      </d iv>
        </d iv>
      </d iv>
          </d iv>
        </d iv>
      </d iv>
        </d iv>
      </d iv>
          </d iv>
        </d iv>
      </d iv>
        </d iv>
      </d iv>
      </d iv>
    </>
  );
};
export default AiCustomerSupportChatbotPage;
export default AiCustomerSupportChatbotPage;
