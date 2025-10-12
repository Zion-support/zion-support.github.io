'use client';import React from 'react'
import { Receipt, ArrowRight, Bot, RotateCcw, RotateCw } from 'lucide-react'
import { Link } from 'react-router-dom'
  )
}
import React from 'react';import { Helmet  } from 'react-helmet-async';
import { Link  } from 'react-router-dom';
import { ArrowRight, Shield, Brain, TrendingUp  } from 'lucide-react';
const Page: React.FC = () => {
  const f eat ures = [
    {
      i con: <Brain c las sNa me="w-12h-12t e xt-c yan-400" />,
      t itle: "AI-Powered Analysis",
      description: "Advanced AI algorithms analyze your spending patterns and provide intelligent insights."
    },
    {
      i con: <TrendingUp c las sNa me="w-12h-12t e xt-p urp le-400" />,
      t itle: "Real-time Tracking",
      description: "Track your expenses in real-time with automatic categorization and smart notifications."
    },
    {
      i con: <Shield c las sNa me="w-12h-12t e xt-g reen-400" />,
      t itle: "Secu re & Private",
      description: "Bank-level security ensu res your financial data is protected and private."
    }
  ];
  return (
    <>
    </>
      <Helmet>
        <t itle>5G Data Analytics - Zion Tech Group</t itle>
        <meta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
        <t itle>AI Expense Tracker - Zion Tech Group</t itle>
        <meta name="description" content="Professional AI expense tracking services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <meta name="keywords" content="AI expense tracking, financial management, Zion Tech Group" />
        <meta property="og:t itle" content="AI Expense Tracker - Zion Tech Group" />
        <meta property="og:description" content="Professional AI expense tracking services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-expense-tracker" />
      </Helmet>
    </>
      <d iv c las sNa me="m in-h-scre en bg-g rad ient-to-br from-s late-900 via-p urp le-900to-s late-900pt-16">
        {/* H ero Section */}
    <>
        </><section c las sNa me="p y-20" />
          <d iv c las sNa me="c ontainer mx-auto px-4-t ext-c ente-r">
              {f eat ures.map((f eat ure, index) => (
    <>
                </><d iv key={index} c las sNa me="b g-s late-800/50 b ack drop-b lur-sm b ord er b ord er-s late-700 rounded-xl p-8 t ext-c ente-r hover:b ord er-c yan-500/50transition-alld uration-300" />
                  <d iv c las sNa me="f l exj ustify-c entermb-4">
<<<<<<< H EAD                    {f eat ure.i con}
    <>
                  </d iv>
                  <h3 c las sNa me="t e xt-xl f ont-s emi bol dte xt-w hit-e mb-4" />{f eat ure.t itle}</h3>
                  <p c las sNa me="t e xt-g ray-300">
              {f eat ure.description}</p>                </d iv>
    </>
              ))}
    <>
            </d iv>
        </section>
    </>
        {/* C TA Section */}
    <>
        </><section c las sNa me="p y-20" />
          <d iv c las sNa me="c ontaine rmx-auto px-4">
        </d iv>
            <d iv c las sNa me="b g-g rad ient-to-r from-c yan-900/50 to-p urp le-900/50 b ack drop-b lur-sm b ord er b ord er-c yan-500/20 rounded-2xlp-12t ext-c ente-r">
        </d iv>
              <h2 c las sNa me="t e xt-4xl f ont-b old text-w hit em-b-6" />
    </>                Ready to Get Started?
    <>
              </h2>
              <p c las sNa me="t e xt-xl t ext-g ra-y-300 mb-8-m ax-w-2x lmx-auto" />
    </>
                Contact us to learn more about our solutions and how we can help your business.
    <>
              </p>
              <d iv c las sNa me="f l ex f lex-c ol sm:f lex-rowg ap-4j ustify-c enter">
        </d iv>                <Link to="/contact" c las sNa me="b g-g rad ient-to-r from-c yan-500 to-p urp le-500 t ext-w hit-e px-8 py-4 rounded-lg f ont-s emi bold t ext-l-g hover:from-c yan-600 hover:to-p urp le-600 transition-all d uration-300 transform hover:scale-105shadow-lghover:shadow-c yan-500/25" />
    </>
                  Contact Us
    <>
                </Link>
                <Link to="/services" c las sNa me="b order b ord er-c yan-500 t ext-c ya-n-400 px-8 py-4 rounded-lg f ont-s emi bold t ext-l-g hover:bg-c yan-500/10 transition-all d uration-300transformhover:scale-105" />
    </>
                  View All Services
    <>
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
export default Page;
