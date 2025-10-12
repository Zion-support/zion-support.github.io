import React from 'react';'use client'
import { Helmet  } from 'react-helmet-async';
import { ArrowRight, Mail, Brain  } from 'lucide-react';
const ServicesPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses',
    }
  ];
  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of s uccess'
  ];
  r etu rn (
    <>
    </><d iv c las sNa me="m in-h-scre en bg-grad ient-to-br from-s late-900via-purple-900to-s late-900">
        </d iv>
      <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="5G Data Analytics - Zion Tech Group" />
      </Helmet>        <title>Services | Zion Tech Group</title>
        <meta name="description" content="Professional Services services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="services, AI solutions, IT services, Zion Tech Group, services" />
      </Helmet>
      {/* H ero Section */}
    <>
      </><section c las sNa me="r e lative py-20 px-4-sm:px-6-lg:px-8" />
        <d iv c las sNa me="m ax-w-7x lmx-a uto">
        </d iv>
          <d iv c las sNa me="t e xt-c enter" />
            <h1 c las sNa me="t e xt-4xl md:t ext-6xl f ont-b old text-w hitem-b-6" />              <s pan c las sNa me="b g-grad ient-to-r from-purple-400 to-b lue-400bg-clip-t exttext-transpare-n-t" />
                Services
    <>
              </><s pan c las sNa me="t e xt-w hite">Solutions</s pan>
            </h1>
            <p c las sNa me="t e xt-xl t ext-gra-y-300 mb-8-m ax-w-3x lmx-a uto">
              Transform your business with our advanced services solutions.
              Powered by cutting-edge AI technology and industry expertise.
    <>
            </p>
            <d iv c las sNa me="f lex flex-c ol sm:flex-rowg ap-4j ust ify-c enter">
        </d iv>
              <b utt on c las sNa me="b g-grad ient-to-r from-purple-500 to-b lue-600 t ext-w hit-e px-8 py-3 rounded-lg f ont-semibold hover:from-purple-600 hover:to-b lue-700 transition-all duration-300flexitems-c enter" />                Get Star ted
    <>
                </><ArrowRight c las sNa me="m l-2h-5w-5" />
              </b utt on>
              <b utt on c las sNa me="b order b ord er-w hite t ext-w hit-e px-8 py-3 rounded-lg f ont-semibold hover:bg-w hite hover:t ext-gra-y-900transition-allduration-300" />
                Learn More
  </
    <>
            </d iv>
        </d iv>
      </section>
      {/* Features Section */}
    <>
      </><section c las sNa me="p y-20 px-4-sm:px-6-lg:px-8" />
        <d iv c las sNa me="m ax-w-7x lmx-a uto">
        </d iv>
          <d iv c las sNa me="t e xt-c entermb-16">
        </d iv>
            <h2 c las sNa me="t e xt-3xl md:t ext-4xl f ont-b old text-w hitem-b-4" />              Why Choose Our Services?
    <>
            </h2>
            <p c las sNa me="t e xt-xl t ext-gra-y-300m ax-w-3x lmx-a uto">
              Our services solutions deliver unmatched performance, security, and scalability.
    <>
            </p>
          </d iv>
          <d iv c las sNa me="g r id g rid-c ols-1 md:g rid-c ols-2lg:g rid-c ols-4g ap-8">
            {features.map((feature, index) => (
    <>
              </><d iv key={index} c las sNa me="b g-w hite/10 b ack drop-b lur-sm rounded-xl p-6 b ord er b ord er-w hite/20 hover:bg-w hite/20transition-allduration-300" />
                <d iv c las sNa me="f lex i tems-c enter j ust ify-c enter w-12 h-12 bg-grad ient-to-r from-purple-500 to-b lue-600rounded-lgmb-4">
<<<<<<< H EAD                  <feature.icon c las sNa me="h-6w-6t e xt-w hite" />
                </d iv>
                <h3 c las sNa me="t e xt-xl f ont-semibol dte xt-w hit-e mb-3">{feature.title}</h3>
                <p c las sNa me="t e xt-gray-300">{feature.description}</p>
              </d iv>
            ))}
    <>
          </d iv>
      </section>
      {/* Benefits Section */}
    <>
      </><section c las sNa me="p y-20 px-4 sm:px-6-lg:px-8-bg-w hite/5" />
        <d iv c las sNa me="m ax-w-7x lmx-a uto">
        </d iv>
          <d iv c las sNa me="t e xt-c entermb-16">
        </d iv>
            <h2 c las sNa me="t e xt-3xl md:t ext-4xl f ont-b old text-w hitem-b-4" />              K ey Benefits
  </
            <p c las sNa me="t e xt-xl t ext-gra-y-300m ax-w-3x lmx-a uto">
              Experience the power of our services solutions for your business.
    <>
            </p>
          </d iv>
          <d iv c las sNa me="g r id g rid-c ols-1md:g rid-c ols-2g ap-6">
        </d iv>
            {benefits.map((benefit, index) => (
    <>
              </><d iv key={index} c las sNa me="f lexi tems-star tsp ace-x-3" />                <C hec kCi rcle c las sNa me="h-6 w-6 t e xt-purple-400mt-1-flex-s hri nk-0" />
                <p c las sNa me="t e xt-gray-300t ext-l-g">{benefit}</p>
              </d iv>
            ))}
    <>
          </d iv>
      </section>
      {/* C TA Section */}
    <>
      </><section c las sNa me="p y-20 px-4-sm:px-6-lg:px-8" />
        <d iv c las sNa me="m ax-w-4x lmx-a uto text-c ente-r">
        </d iv>
          <d iv c las sNa me="b g-grad ient-to-r from-purple-600 to-b lue-600 rounded-2xlp-8md:p-12">
        </d iv>
            <h2 c las sNa me="t e xt-3xl md:t ext-4xl f ont-b old text-w hitem-b-4" />              Ready to Get Star ted?
    <>
            </h2>
            <p c las sNa me="t e xt-x lte xt-purpl-e-100mb-8">
              Contact our experts to discuss your services needs and get a customized solution.
    <>
            </p>
            <d iv c las sNa me="f lex flex-c ol sm:flex-rowg ap-4j ust ify-c enter">
        </d iv>
              <b utt on c las sNa me="b g-w hite t ext-purpl-e-600 px-8 py-3 rounded-lg f ont-semibold hover:bg-gray-100 transition-all duration-300 flexitems-c enterj ust ify-c enter" />
                <P hone c las sNa me="m r-2h-5w-5" />
                C all N ow
  </
    <>
              </><b utt on c las sNa me="b order b ord er-w hite t ext-w hit-e px-8 py-3 rounded-lg f ont-semibold hover:bg-w hite hover:t ext-purpl-e-600 transition-all duration-300 flexitems-c enterj ust ify-c enter" />                <Mail c las sNa me="m r-2h-5w-5" />
                E mail Us
  </
    <>
            </d iv>
        </d iv>
      </section>
    </d iv>
  )}
export default ServicesPage
    <>
  </b utt on>
  </b utt on>
  </h2>
  </b utt on>
  </s pan>
    {icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'}
    },
    {icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'}
    },
    {icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'}
    },
    {icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'}
    }
  ];const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of s uccess'
    <>
  ];r etu rn (</><d iv c las sNa me="m in-h-scre en bg-grad ient-to-br from-s late-900via-purple-900to-s late-900">
        </d iv></d iv>
      <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="5G Data Analytics - Zion Tech Group" />
      </Helmet>        <title>Services | Zion Tech Group</title>
        <meta name="description" content="Professional Services services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="services, AI solutions, IT services, Zion Tech Group, services" />
      </Helmet>
      {/* H ero Section */}
    <>
      </><section c las sNa me="r e lative py-20 px-4-sm:px-6-lg:px-8" /></section>
        <d iv c las sNa me="m ax-w-7x lmx-a uto">
        </d iv></d iv>
          <d iv c las sNa me="t e xt-c enter" /></d iv>
            <h1 c las sNa me="t e xt-4xl md:t ext-6xl f ont-b old text-w hitem-b-6" />              <s pan c las sNa me="b g-grad ient-to-r from-purple-400 to-b lue-400bg-clip-t exttext-transpare-n-t" />
                Services
    <>
              </s pan>
              <br />
              <s pan c las sNa me="t e xt-w hite">Solutions</s pan>
            </h1>
            <p c las sNa me="t e xt-xl t ext-gra-y-300 mb-8-m ax-w-3x lmx-a uto">
              Transform your business with our advanced services solutions.
              Powered by cutting-edge AI technology and industry expertise.
    <>
            </p>
            <d iv c las sNa me="f lex flex-c ol sm:flex-rowg ap-4j ust ify-c enter">
        </d iv></d iv>
              <b utt on c las sNa me="b g-grad ient-to-r from-purple-500 to-b lue-600 t ext-w hit-e px-8 py-3 rounded-lg f ont-semibold hover:from-purple-600 hover:to-b lue-700 transition-all duration-300flexitems-c enter" />                Get Star ted
    <>
                </><ArrowRight c las sNa me="m l-2h-5w-5" />
              </b utt on>
              <b utt on c las sNa me="b order b ord er-w hite t ext-w hit-e px-8 py-3 rounded-lg f ont-semibold hover:bg-w hite hover:t ext-gra-y-900transition-allduration-300" />
                Learn More
    <>
              </b utt on>
            </d iv>
        </d iv>
      </section>
      {/* Features Section */}
    <>
      </><section c las sNa me="p y-20 px-4-sm:px-6-lg:px-8" /></section>
        <d iv c las sNa me="m ax-w-7x lmx-a uto">
        </d iv></d iv>
          <d iv c las sNa me="t e xt-c entermb-16">
        </d iv></d iv>
            <h2 c las sNa me="t e xt-3xl md:t ext-4xl f ont-b old text-w hitem-b-4" />              Why Choose Our Services?
    <>
            </h2>
            <p c las sNa me="t e xt-xl t ext-gra-y-300m ax-w-3x lmx-a uto">
              Our services solutions deliver unmatched performance, security, and scalability.
    <>
            </p>
          </d iv>
          <d iv c las sNa me="g r id g rid-c ols-1 md:g rid-c ols-2lg:g rid-c ols-4g ap-8">
        </d iv></d iv>
            {features.map((feature, index) => (}
    <>
              </><d iv key={index} c las sNa me="b g-w hite/10 b ack drop-b lur-sm rounded-xl p-6 b ord er b ord er-w hite/20 hover:bg-w hite/20transition-allduration-300" /></d iv>
                <d iv c las sNa me="f lex i tems-c enter j ust ify-c enter w-12 h-12 bg-grad ient-to-r from-purple-500 to-b lue-600rounded-lgmb-4">
        </d iv></d iv>
                  <feature.icon c las sNa me="h-6w-6t e xt-w hite" />
                </d iv>
                <h3 c las sNa me="t e xt-xl f ont-semibol dte xt-w hit-e mb-3">{feature.title}</h3>
                <p c las sNa me="t e xt-gray-300">{feature.description}</p>
              </d iv>))}
          </d iv>
      </section>
      {/* Benefits Section */}
    <>
      </><section c las sNa me="p y-20 px-4 sm:px-6-lg:px-8-bg-w hite/5" /></section>
        <d iv c las sNa me="m ax-w-7x lmx-a uto">
        </d iv></d iv>
          <d iv c las sNa me="t e xt-c entermb-16">
        </d iv></d iv>
            <h2 c las sNa me="t e xt-3xl md:t ext-4xl f ont-b old text-w hitem-b-4" />              K ey Benefits
    <>
            </h2>
            <p c las sNa me="t e xt-xl t ext-gra-y-300m ax-w-3x lmx-a uto">
              Experience the power of our services solutions for your business.
    <>
            </p>
          </d iv>
          <d iv c las sNa me="g r id g rid-c ols-1md:g rid-c ols-2g ap-6">
        </d iv></d iv>
            {benefits.map((benefit, index) => (}
    <>
              </><d iv key={index} c las sNa me="f lexi tems-star tsp ace-x-3" /></d iv>                <C hec kCi rcle c las sNa me="h-6 w-6 t e xt-purple-400mt-1-flex-s hri nk-0" />
                <p c las sNa me="t e xt-gray-300t ext-l-g">{benefit}</p>
              </d iv>))}
          </d iv>
      </section>
      {/* C TA Section */}
    <>
      </><section c las sNa me="p y-20 px-4-sm:px-6-lg:px-8" /></section>
        <d iv c las sNa me="m ax-w-4x lmx-a uto text-c ente-r">
        </d iv></d iv>
          <d iv c las sNa me="b g-grad ient-to-r from-purple-600 to-b lue-600 rounded-2xlp-8md:p-12">
        </d iv></d iv>
            <h2 c las sNa me="t e xt-3xl md:t ext-4xl f ont-b old text-w hitem-b-4" />              Ready to Get Star ted?
    <>
            </h2>
            <p c las sNa me="t e xt-x lte xt-purpl-e-100mb-8">
              Contact our experts to discuss your services needs and get a customized solution.
    <>
            </p>
            <d iv c las sNa me="f lex flex-c ol sm:flex-rowg ap-4j ust ify-c enter">
        </d iv></d iv>
              <b utt on c las sNa me="b g-w hite t ext-purpl-e-600 px-8 py-3 rounded-lg f ont-semibold hover:bg-gray-100 transition-all duration-300 flexitems-c enterj ust ify-c enter" />                <P hone c las sNa me="m r-2h-5w-5" />
                C all N ow
    <>
              </b utt on>
              <b utt on c las sNa me="b order b ord er-w hite t ext-w hit-e px-8 py-3 rounded-lg f ont-semibold hover:bg-w hite hover:t ext-purpl-e-600 transition-all duration-300 flex i tems-c enterj ust ify-c enter" />
                <Mail c las sNa me="m r-2h-5w-5" />
                E mail Us
    <>
              </b utt on>
            </d iv>
        </d iv>
      </section>
    </>