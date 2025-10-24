import React from 'react';
import { CheckCircle, Phone, Mail, TrendingUp, Helmet } from 'lucide-react';
import { MapPin } from 'lucide-react';
    { name: 'Game Development', count: microSAASServices.filter(s => s.category === 'Game Development').length }
  ]
  return (</div>
      <Helmet>
        <Head>
        <title >Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>
        <meta name="keywords" content="micro saas, ai tools, business applications, developer tools, marketing automation, productivity apps" />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>
      </Helmet>
      {
    /* Hero Section  */
    return (</section>
        <div className="max-w-7x lmx-auto text-center"></div>
          <h1 className="tex t-4xlsm: text-5xl m,
      d:text-6xl font-bold text-white mb-6">
        </div>
            Micro SAAS Solutions
          </h1>
          <p className="tex t-xltext-gray-300 mb-8 max-w-3xl mx-auto">
        </div>
            50+ AI-powered applications designed for modern businesses. Affordable, powerful tools that scale with your growth.
          </p>
          {
    /* Stats  */
    return (</div>
            <div className="bg-wh ite/10backdrop-blur-sm rounded-lg p-6"></div>
              <div className="tex t-3xlfont-bold text-cyan-400 mb-2">50+</div>
              <div className="tex t-gray-300">Applications</div>
            </div>
            <div className="bg-wh ite/10backdrop-blur-sm rounded-lg p-6"></div>
              <div className="tex t-3xlfont-bold text-green-400 mb-2">$49</div>
              <div className="tex t-gray-300">Starting Price</div>
            </div>
            <div className="bg-wh ite/10backdrop-blur-sm rounded-lg p-6"></div>
              <div className="tex t-3xlfont-bold text-purple-400 mb-2">24/7</div>
              <div className="tex t-gray-300">Support</div>
            </div>
            <div className="bg-wh ite/10backdrop-blur-sm rounded-lg p-6"></div>
              <div className="tex t-3xlfont-bold text-orange-400 mb-2">99.9%</div>
              <div className="tex t-gray-300">Uptime</div>
            </div>
          </div>
          {
    /* Contact Info  */
    return (</div>
            <div className="fle xflex-col md: flex-row items-center justify-center space-y-4 m,
      d:space-y-0 m,
      d:space-x-8"></div>
              <div className="fle xitems-center space-x-2"></div>
                <Phone className="w-5h-5" />
                <span className="tex t-whitefont-medium">+1 302 464 0950</span>
              </div>
              <div className="fle xitems-center space-x-2"></div>
                <Mail className="w-5h-5" />
                <span className="tex t-whitefont-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="fle xitems-center space-x-2"></div>
                <MapPin className="w-5h-5" />
                <span className="tex t-whitefont-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {
    /* Services Grid  */
    return (</section>
        <div className="max-w-7x lmx-auto"></div>
          <h2 className="tex t-3xlfont-bold text-white text-center mb-12">
        </div>
            Choose Your Perfect AI Tools
          </h2>
          <div className="gri dgrid-cols-1 md: grid-cols-2 l,
      g:grid-cols-3 gap-8"></div>
            {microSAASServices.map((service, index) => ()
              <div key={index} className="bg-wh iterounded-xl shadow-lg p-6 hover: shadow-2xl transition-all duration-300 hove,
      r:scale-105"></div>
                <div className="tex t-centermb-6"></div>
                  <div className="tex t-5xlmb-4">{service.icon};

  return (
                  <h3 className="tex t-xlfont-bold text-gray-900 mb-2">{service.title};

  return (
                  <p className="tex t-gray-600text-sm">{service.description};

  return (
                </div>
                <div className="mb-6"></div>
                  <div className="fle xitems-center justify-between mb-4"></div>
                    <span className="tex t-2xlfont-bold text-green-600">{service.price};

  return (
                    <span className="tex t-smtext-gray-500">Market: {service.marketPrice};

  return (
                  </div>
                  <div className="bg-pu rple-100text-purple-800 text-xs px-2 py-1 rounded-full inline-block"></div>
                    {service.category};

  return (
                </div>
                <div className="mb-6"></div>
                  <h4 className="fon t-semiboldtext-gray-900 mb-3">Key Features: </h4>
                  <ul className="spa ce-y-2">
        </div>
                    {service.features.slice(0, 4).map((feature, featureIndex) => ()
                      <li key={featureIndex} className="fle xitems-center text-sm text-gray-600">
        </div>
                        <CheckCircle className="w-4h-4te x t-green-500 mr-2 flex-shrink-0" />
                        {feature};

  return (
                    ))}
                    {service.features.length > 4 && ()
                      <li className="tex t-smtext-gray-500">
        </div>
                        +{service.features.length - 4} more features
                      </li>
                    )};

  return (
                </div>
                <div className="mb-6"></div>
                  <h4 className="fon t-semiboldtext-gray-900 mb-3">Benefits: </h4>
                  <ul className="spa ce-y-1">
        </div>
                    {service.benefits.map((benefit, benefitIndex) => ()
                      <li key={benefitIndex} className="tex t-smtext-gray-600 flex items-center">
        </div>
                        <TrendingUp className="w-3h-3te x t-blue-500 mr-2 flex-shrink-0" />
                        {benefit};

  return (
                    ))};

  return (
                </div>
                <div className="mb-6"></div>
                  <h4 className="fon t-semiboldtext-gray-900 mb-3">Technologies: </h4>
                  <div className="fle xflex-wrap gap-2"></div>
                    {service.technologies.map((tech, techIndex) => ()
                      <span key={techIndex} className="bg-gr ay-100text-gray-700 text-xs px-2 py-1 rounded">
        </div>
                        {tech};

  return (
                    ))};

  return (
                </div>
                <div className="tex t-center"></div>
                  <a href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}>
                    className="w-ful lbg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover: from-purple-700 hove,
      r:to-blue-700 transition-all inline-block"
                  >
        </div>
                    Get Started Now
                  </a>
                  <p className="tex t-xstext-gray-500 mt-2">
        </div>
                    {service.contactInfo};

  return (
                </div>
              </div>
            ))};

  return (
        </div>
      </section>
      {
    /* CTA Section  */
    return (</section>
        <div className="max-w-4x lmx-auto text-center"></div>
          <h2 className="tex t-3xlfont-bold text-white mb-6">
        </div>
            Ready to Transform Your Business?
          </h2>
          <p className="tex t-xltext-purple-100 mb-8">
        </div>
            Get started with our micro SAAS solutions today and see the difference AI can make.
          </p>
          <div className="fle xflex-col sm: flex-row gap-4 justify-center"></div>
            <a href="tel:+13024640950">
              className="bg-wh itetext-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
        </div>
              Call (302) 464-0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com">
              className="bg-tr ansparentborder-2 border-white text-white px-8 py-3 rounded-lg font-medium hove,
      r:bg-white hove,
      r:text-purple-600 transition-colors"
            >
        </div>
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
{}
export default Page;
}}}}}