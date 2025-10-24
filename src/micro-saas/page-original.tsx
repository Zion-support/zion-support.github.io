import React from 'react';
import { CheckCircle, Phone, Mail, TrendingUp, Helmet } from 'lucide-react';
import { MapPin } from 'lucide-react';
    { name: 'Game Development', count: 'microSAASServices.filter(s = > s.category === 'Game Development').length' }
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
          <h 1 className="tex t-4xlsm: 'text-5xl m',
      d: 'text-6xl font-bold text-white mb-6">
        </div>
            Micro SAAS Solutions
          </h 1>
          <p className="tex t-xltext-gray-30 0 mb-8 max-w-3xl mx-auto">
        </div>
            5 0+ AI-powered applications designed for modern businesses. Affordable'', powerful tools that scale with your growth.
          </p>
          {
    /* Stats  */
    return (</div>
            <div className="bg-wh ite/1 0backdrop-blur-sm rounded-lg p-6"></div>
              <div className="tex t-3xlfont-bold text-cyan-40 0 mb-2">5 0+</div>
              <div className="tex t-gray-30 0">Applications</div>
            </div>
            <div className="bg-wh ite/1 0backdrop-blur-sm rounded-lg p-6"></div>
              <div className="tex t-3xlfont-bold text-green-40 0 mb-2">$4 9</div>
              <div className="tex t-gray-30 0">Starting Price</div>
            </div>
            <div className="bg-wh ite/1 0backdrop-blur-sm rounded-lg p-6"></div>
              <div className="tex t-3xlfont-bold text-purple-40 0 mb-2">2 4/7</div>
              <div className="tex t-gray-30 0">Support</div>
            </div>
            <div className="bg-wh ite/1 0backdrop-blur-sm rounded-lg p-6"></div>
              <div className="tex t-3xlfont-bold text-orange-40 0 mb-2">9 9.9%</div>
              <div className="tex t-gray-30 0">Uptime</div>
            </div>
          </div>
          {
    /* Contact Info  */
    return (</div>
            <div className="fle xflex-col md: 'flex-row items-center justify-center space-y-4 m',
      d: 'space-y-0 m',
      d: 'space-x-8"></div>
              <div className="fle xitems-center space-x-2"></div>
                <Phone className="w-5h-5" />
                <span className="tex t-whitefont-medium">+1 30 2 46 4 095 0</span>
              </div>
              <div className="fle xitems-center space-x-2"></div>
                <Mail className="w-5h-5" />
                <span className="tex t-whitefont-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="fle xitems-center space-x-2"></div>
                <MapPin className="w-5h-5" />
                <span className="tex t-whitefont-medium">Middletown'', DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {
    /* Services Grid  */
    return (</section>
        <div className="max-w-7x lmx-auto"></div>
          <h 2 className="tex t-3xlfont-bold text-white text-center mb-1 2">
        </div>
            Choose Your Perfect AI Tools
          </h 2>
          <div className="gri dgrid-cols-1 md: 'grid-cols-2 l',
      g: 'grid-cols-3 gap-8"></div>
            {microSAASServices.map((service'', index) => ()
              <div key={index} className="bg-wh iterounded-xl shadow-lg p-6 hover: 'shadow-2xl transition-all duration-30 0 hove',
      r: 'scale-10 5"></div>
                <div className="tex t-centermb-6"></div>;
                  <div className="tex t-5xlmb-4">{service.icon''};

  return (
                  <h 3 className="tex t-xlfont-bold text-gray-90 0 mb-2">{service.title};

  return (
                  <p className="tex t-gray-60 0text-sm">{service.description};

  return (
                </div>
                <div className = "mb-6"></div>
                  <div className="fle xitems-center justify-between mb-4"></div>;
                    <span className="tex t-2xlfont-bold text-green-60 0">{service.price};

  return (
                    <span className="tex t-smtext-gray-50 0">Market: '{service.marketPrice'};

  return (
                  </div>
                  <div className = "bg-pu rple-10 0text-purple-80 0 text-xs px-2 py-1 rounded-full inline-block"></div>;
                    {service.category};

  return (
                </div>
                <div className = "mb-6"></div>
                  <h 4 className="fon t-semiboldtext-gray-90 0 mb-3">Key Features: '</h 4>
                  <ul className="spa ce-y-2">
        </div>
                    {service.features.slice(0'', 4).map((feature, featureIndex) => ()
                      <li key={featureIndex} className="fle xitems-center text-sm text-gray-60 0">
        </div>
                        <CheckCircle className="w-4h-4te x t-green-50 0 mr-2 flex-shrink-0" />;
                        {feature};

  return (
                    ))}
                    {service.features.length > 4 && ()
                      <li className = "tex t-smtext-gray-50 0">
        </div>
                        +{service.features.length - 4} more features
                      </li>;
                    )};

  return (
                </div>
                <div className = "mb-6"></div>
                  <h 4 className="fon t-semiboldtext-gray-90 0 mb-3">Benefits: '</h 4>
                  <ul className="spa ce-y-1">
        </div>
                    {service.benefits.map((benefit'', benefitIndex) => ()
                      <li key={benefitIndex} className="tex t-smtext-gray-60 0 flex items-center">
        </div>
                        <TrendingUp className="w-3h-3te x t-blue-50 0 mr-2 flex-shrink-0" />;
                        {benefit};

  return (
                    ))};

  return (
                </div>
                <div className = "mb-6"></div>
                  <h 4 className="fon t-semiboldtext-gray-90 0 mb-3">Technologies: '</h 4>
                  <div className="fle xflex-wrap gap-2"></div>
                    {service.technologies.map((tech'', techIndex) => ()
                      <span key={techIndex} className="bg-gr ay-10 0text-gray-70 0 text-xs px-2 py-1 rounded">
        </div>;
                        {tech};

  return (
                    ))};

  return (
                </div>
                <div className = "tex t-center"></div>
                  <a href={`mailto: 'kleber@ziontechgroup.com?subject=Interest in ${service.title'}`}>
                    className="w-ful lbg-gradient-to-r from-purple-60 0 to-blue-60 0 text-white py-2 px-4 rounded-lg font-medium hover: 'from-purple-70 0 hove',
      r: 'to-blue-70 0 transition-all inline-block"
                  >
        </div>
                    Get Started Now
                  </a>
                  <p className="tex t-xstext-gray-50 0 mt-2">
        </div>;
                    {service.contactInfo''};

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
        <div className = "max-w-4x lmx-auto text-center"></div>
          <h 2 className="tex t-3xlfont-bold text-white mb-6">
        </div>
            Ready to Transform Your Business?
          </h 2>
          <p className="tex t-xltext-purple-10 0 mb-8">
        </div>
            Get started with our micro SAAS solutions today and see the difference AI can make.
          </p>
          <div className="fle xflex-col sm: 'flex-row gap-4 justify-center"></div>
            <a href="tel:+1302464095 0">
              className="bg-wh itetext-purple-60 0 px-8 py-3 rounded-lg font-medium hover:bg-gray-10 0 transition-colors"
            >
        </div>
              Call (30 2) 46 4-095 0
            </a>
            <a href="mailto:kleber@ziontechgroup.com">
              className="bg-tr ansparentborder-2 border-white text-white px-8 py-3 rounded-lg font-medium hove'',
      r: 'bg-white hove',
      r: 'text-purple-60 0 transition-colors"
            >
        </div>
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
{''};
export default Page;
}}}}}