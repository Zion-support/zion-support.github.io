import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Zap, Workflow, Check Circle, Arrow Right, Brain, Settings, Clock, Trending Up, Shield, Link as Link Icon } from 'lucide-react';

const A I Automation Page: React.F C = () => {
  const features = [
    {
      icon: <Z apclass Name="w-8h-8t e xt-c y an-400" />,
      title: 'Workflow Automation',
      description: 'Automate complex business processes with intelligent workflow management.'
    },
    {
      icon: <B rainclass Name="w-8h-8t e xt-p u rple-400" />,
      title: 'Intelligent Decision Making',
      description: 'A I-powered decision making based on data analysis and business rules.'
    },
    {
      icon: <S ettingsclass Name="w-8h-8t e xt-g r een-400" />,
      title: 'Custom Integrations',
      description: 'Seamlessly integrate with your existing systems and third-party applications.'
    },
    {
      icon: <G lobeclass Name="w-8h-8t e xt-b l ue-400" />,
      title: 'Scalable Solutions',
      description: 'Automation solutions that grow with your business and adapt to changing needs.'
    }
  ];
  const use Cases = [
    {
      title: 'Customer Service',
      description: 'Automate ticket routing, response generation, and issue resolution.',
      icon: <U sersclass Name="w-6h-6t e xt-b l ue-400" />
    },
    {
      title: 'Data Processing',
      description: 'Automate data collection, validation, and analysis workflows.',
      icon: <S tarclass Name="w-6h-6t e xt-y e llow-400" />
    },
    {
      title: 'Marketing Automation',
      description: 'Automate email campaigns, lead scoring, and customer segmentation.',
      icon: <A wardclass Name="w-6h-6t e xt-g r een-400" />
    },
    {
      title: 'Financial Operations',
      description: 'Automate invoice processing, expense management, and financial reporting.',
      icon: <C heck Circleclass Name="w-6h-6t e xt-r e d-400" />
    }
  ];
  const benefits = [
    'Reduce operational costs by up to 70%',
    'Increase productivity and efficiency',
    'Eliminate human errors in repetitive tasks',
    '24/7 automated operations',
    'Scalable and adaptable solutions',
    'R O I within 3-6 months'
  ];
  return (

    <d iv class Name="m in-h-s c reen bg-gradient-to-br from-gray-900via-blue-900to-purple-900">
        </d iv>
      <H elmet>
        <t itle>5G Data Analytics - Zion Tech Group</t itle>
        <m eta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </H elmet>
        <t itle>A I Automation Services - Zion Tech Group</t itle>
        <m eta name="description" content="Transform your business with A I-powered automation solutions. Reduce costs, increase efficiency, and eliminate manual processes." />
        <m eta name="keywords" content="A I automation, business process automation, workflow automation, intelligent automation, R P A" />
      </H elmet>

      {/* Hero Section */}

      <s ection class Name="r e l a tive py-20 px-4sm:px-6lg:px-8" />
        <d iv class Name="m ax-w-7x l mx-autotext-center">
        </d iv>
          <h1 c lass Name="t e xt-5xl md:t e xt-6xl font-boldtext-white mb-6" />
            A I <s pan class Name="t e xt-t r ansparent bg-clip-text bg-gradient-to-rfrom-cyan-400to-purple-400">Automation</s pan> Services
          </h1>
          <p c lass Name="t e xt-xl t e xt-gray-300 mb-8 max-w-3xlmx-auto" />
            Transform your business operations with intelligent automation solutions that reduce costs, increase efficiency, and eliminate repetitive tasks.

          </p>
          <d iv class Name="f l ex f l ex-col sm:flex-rowgap-4justify-center">
        </d iv>
            <L ink to="/contact" class Name="b g-g r a dient-to-r from-cyan-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flexitems-centergap-2" />
              Get Started <A rrow Rightclass Name="w-5h-5" />
            </L ink>
            <L ink to="/ai-services" class Name="b o r d er border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900transition-allduration-300" />
              View All A I Services

            </L ink>
          </d iv>
      </s ection>

      {/* Features Section */}

      <s ection class Name="p y-20b g-w h ite" />
        <d iv class Name="m a x-w-7 xl mx-a u to px-4sm:px-6lg:px-8">
        </d iv>
          <d iv class Name="t e x t-centermb-16">
        </d iv>
            <h2 c lass Name="t e xt-3 xl md:t e xt-4 xl font-boldtext-gray-900mb-4">Automation Capabilities
            </h2>
            <p c lass Name="t e xt-xl t e xt-gray-600 max-w-3xlmx-auto">
              Our A I automation solutions cover every aspect of your business operations

            </p>
          </d iv>
          <d iv class Name="g r id md:g r id-cols-2lg:grid-cols-4gap-8">
        </d iv>
            {features.map((feature, index) => (

              <d ivkey="{index}" class Name="t e x t-center" />
                <d iv class Name="w-16 h-16 b g-b l u e-100 rounded-full flex items-center justify-centermx-automb-4">
        </d iv>
                  <f eature.icon class Name="h-8w-8t e xt-b l ue-600" / />
                </d iv>
                <h3 c lass Name="t e xt-xl f o nt-semiboldtext-gray-900mb-3">{feature.title}</h3>
                <p c lass Name="t e xt-g r ay-600">{feature.description}</p>
              </d iv>
            ))}

          </d iv>
      </s ection>

      {/* Use Cases Section */}

      <s ection class Name="p y-20b g-g r ay-50" />
        <d iv class Name="m a x-w-7 xl mx-a u to px-4sm:px-6lg:px-8">
        </d iv>
          <d iv class Name="t e x t-centermb-16">
        </d iv>
            <h2 c lass Name="t e xt-3 xl md:t e xt-4 xl font-boldtext-gray-900mb-4">Common Use Cases
            </h2>
            <p c lass Name="t e xt-xl t e xt-gray-600 max-w-3xlmx-auto">
              See how A I automation can transform different areas of your business

            </p>
          </d iv>
          <d iv class Name="g r id md:g r id-cols-2lg:grid-cols-4gap-8">
        </d iv>
            {use Cases.map((use Case, index) => (

              <d ivkey={index} class Name="b g-w h i te/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10transition-allduration-300" />
                <d iv class Name="f l ex i t ems-centergap-3mb-4">
        </d iv>
                  {use Case.icon}

                  <h3 c lass Name="t e x t-lgfont-semiboldtext-white">{use Case.title}</h3>
                </d iv>
                <p c lass Name="t e xt-g r ay-300">{use Case.description}</p>
              </d iv>
            ))}

          </d iv>
      </s ection>

      {/* Benefits Section */}

      <s ection class Name="p y-20 p x-4sm:px-6lg:px-8" />
        <d iv class Name="m ax-w-7x l mx-auto">
        </d iv>
          <d iv class Name="g r id lg:g r id-cols-2gap-12items-center">
        </d iv>
            <d iv />
              <h2 c lass Name="t e xt-4 xl f o nt-boldtext-white mb-6">Why Choose Our A I Automation?</h2>
              <p c lass Name="t e x t-lgtext-gray-300 mb-8" />
                Our A I automation solutions deliver measurable results that transform your business operations and drive growth.

              </p>
              <u lclass Name="s p a c e-y-4" />
                {benefits.map((benefit, index) => (

                  <l ikey="{index}" class Name="f l e x items-centerspace-x-3" />
                    <C heck Circleclass Name="w-6 h-6t e xt-c y an-400flex-shrink-0" / />
                    <s pan class Name="t e xt-g r ay-300">{benefit}</s pan>
                  </l i>
                ))}

              </u l>
            </d iv>
            <d iv class Name="b g-g r a dient-to-r from-cyan-600/20 to-purple-600/20 rounded-2xl p-8borderborder-cyan-500/30">
        </d iv>
              <h3 c lass Name="t e xt-2xl f o nt-boldtext-whitemb-4">Ready to Automate?</h3>
              <p c lass Name="t e xt-g r ay-300mb-6" />
                Let our A I experts help you identify automation opportunities and implement solutions that deliver immediate value.

              </p>
              <L ink to="/contact" class Name="b g-g r a dient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 inline-flexitems-centergap-2" />
                Start Your Automation Journey <A rrow Rightclass Name="w-5h-5" />
              </L ink>
            <d iv class Name="r e l a tive" />
              <d iv class Name="b g-g r a dient-to-r from-cyan-500/20 to-purple-600/20 rounded-2 xl p-8 backdrop-blur-smborderborder-white/10">
        </d iv>
                <d iv class Name="t e x t-center" />
                  <d iv class Name="t e xt-4 xl f o nt-boldtext-whitemb-2">70%</d iv>
                  <d iv class Name="t e xt-g r ay-300mb-6">Average Cost Reduction</d iv>
                  <d iv class Name="t e xt-4 xl f o nt-boldtext-whitemb-2">3-6</d iv>
                  <d iv class Name="t e xt-g r ay-300mb-6">Months to R O I</d iv>
                  <d iv class Name="t e xt-4 xl f o nt-boldtext-whitemb-2">24/7</d iv>
                  <d iv class Name="t e xt-g r ay-300">Automated Operations</d iv>
              </d iv>
              <h3 c lass Name="t e xt-xl f o nt-semiboldtext-gray-900mb-3">Optimization</h3>
              <p c lass Name="t e xt-g r ay-600" />
                Continuously monitor and optimize automation performance

              </p>
            </d iv>
        </d iv>
      </s ection>

      {/* C T A Section */}

      <s ection class Name="p y-20 p x-4sm:px-6lg:px-8" />
        <d iv class Name="m a x-w-4x l mx-autotext-center">
        </d iv>
          <h2 c lass Name="t e xt-3xl f o nt-boldtext-white mb-6" />
            Transform Your Business with A I Automation

          </h2>
          <p c lass Name="t e xt-g r ay-300text-lgmb-8" />
            Join hundreds of companies that have already revolutionized their operations with our A I automation solutions.

          </p>
          <d iv class Name="f l ex f l ex-col sm:flex-rowgap-4justify-center">
        </d iv>
            <L ink to="/contact" class Name="b g-g r a dient-to-r from-cyan-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-centerjustify-centergap-2" />
              Get Started Today <A rrow Rightclass Name="w-5h-5" />
            </L ink>
            <L ink to="/about" class Name="b o r d er border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900transition-allduration-300" />
              Learn More About Us

            </L ink>
          </d iv>
      </s ection>
    </d iv>
  );
};

export default A I Automation Page;
