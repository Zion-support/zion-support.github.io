'use client';
import React, {useState}from 'react';
import {Helmet}}from 'react-helmet-async';
import {ChevronDown, ChevronUp}}from 'lucide-react';
const FAQPage: React.FC = () => {,
  const [openItems, setOpenItems] = useState<number[]>([]);
        <title>FAQ - Zion Tech Group | Frequently Asked Questions</title>
        <meta name="description" content="Find answers to frequently asked questions about our AI and IT services, pricing, implementation, and support." />
        <meta name="keywords" content="FAQ, frequently asked questions, AI services, IT services, support, pricing" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        </div></div>
        <section className="py-20 px-4">
          </section></section><div className="max-w-7xl mx-auto text-center">
            </div></div><h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Frequently Asked </h1></h1><span className="text-cyan-400">Questions</span></span></span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Find answers to common questions about our AI and IT services, pricing, and implementation.
            </p></p></p>
          </div>
        </section>
        <section className="py-16 px-4">
          </section></section><div className="max-w-4xl mx-auto">)</div></div><div className="space-y-4">)
              {faqs.map((faq, index) => (
                </div></div><div key=index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-cyan-500/20">)</div></div><button)
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors">
                    </button></button><h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3></h3></h3>
                    {openItems.includes(index) ? ()
                      <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />)
                    ) : ()
                      <ChevronDown className="w-5 h-5 text-cyan-400 flex-shrink-0" />)
                    )}
                  </button>
                  {openItems.includes(index) && (
                    <div className="px-6 pb-4">
                      </div></div><p className="text-gray-300 leading-relaxed">faq.answer}</p></p></p>)
                    </div>)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQPage;
