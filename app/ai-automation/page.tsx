import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Zap, Workflow, CheckCircle, ArrowRight, Brain, Settings, Clock, Trending Up, Shield, Link as LinkIcon } from 'lucide-react';

const A IAutomation Page: React.F C = () => {
  const features = [
    {
      icon: <Z ap class Name="w-8h-8t ext-cyan-400" />,
      title: 'Workflow Automation',
      description: 'Automate complex business processes with intelligent workflow management.'
    },
    {
      icon: <B rain class Name="w-8h-8t ext-purple-400" />,
      title: 'Intelligent Decision Making',
      description: 'A I-powered decision making based on data analysis and business rules.'
    },
    {
      icon: <S ettings class Name="w-8h-8t ext-green-400" />,
      title: 'Custom Integrations',
      description: 'Seamlessly integrate with your existing systems and third-party applications.'
    },
    {
      icon: <G lobe class Name="w-8h-8t ext-blue-400" />,
      title: 'Scalable Solutions',
      description: 'Automation solutions that grow with your business and adapt to changing needs.'
    }
  ];
  const use Cases = [
    {
      title: 'Customer Service',
      description: 'Automate ticket routing, response generation, and issue resolution.',
      icon: <U sers class Name="w-6h-6t ext-blue-400" />
    },
    {
      title: 'Data Processing',
      description: 'Automate data collection, validation, and analysis workflows.',
      icon: <S tar class Name="w-6h-6t ext-yellow-400" />
    },
    {
      title: 'Marketing Automation',
      description: 'Automate email campaigns, lead scoring, and customer segmentation.',
      icon: <A ward class Name="w-6h-6t ext-green-400" />
    },
    {
      title: 'Financial Operations',
      description: 'Automate invoice processing, expense management, and financial reporting.',
      icon: <C heck Circle class Name="w-6h-6t ext-red-400" />
    }
  ];
  const benefits = [
    'Reduce operational costs by up to 70%',
    'Increase productivity and efficiency',
    'Eliminate human errors in repetitive tasks',
    '24/7 automated operations',
    'Scalable and adaptable solutions',
    'R OI within 3-6 months'
  ];
  return (

    <d iv class Name="m in-h-screen bg-gradient-to-br from-gray-900via-blue-900to-purple-900">
        </d iv>
      <H elmet>
        <t itle>5 G Data Analytics - Zion Tech Group</t itle>
        <m eta name="description" content="Professional 5 G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </H elmet>
        <t itle>A I Automation Services - Zion Tech Group</t itle>
        <m eta name="description" content="Transform your business with A I-powered automation solutions. Reduce costs, increase efficiency, and eliminate manual processes." />
        <m eta name="keywords" content="A I automation, business process automation, workflow automation, intelligent automation, R PA" />
      </H elmet>

      {/* Hero Section */}

      <s ection class Name="r elative py-20 px-4sm:px-6lg:px-8" />
        <d iv class Name="m ax-w-7xlmx-autotext-center">
        </d iv>
          <h1 c lass Name="t ext-5xl md:text-6xl font-boldtext-whitemb-6" />
            A I <s pan class Name="t ext-transparent bg-clip-text bg-gradient-to-rfrom-cyan-400to-purple-400">Automation</s pan> Services
          </h1>
          <p c lass Name="t ext-xl text-gray-300 mb-8 max-w-3xlmx-auto" />
            Transform your business operations with intelligent automation solutions that reduce costs, increase efficiency, and eliminate repetitive tasks.

          </p>
          <d iv class Name="f lex flex-col sm:flex-rowgap-4justify-center">
        </d iv>
            <L ink to="/contact" class Name="b g-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flexitems-centergap-2" />
              Get Started <A rrow Right class Name="w-5h-5" />
            </L ink>
            <L ink to="/ai-services" class Name="b order border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900transition-allduration-300" />
              View All A I Services

            </L ink>
          </d iv>
      </s ection>

      {/* Features Section */}

      <s ection class Name="p y-20bg-white" />
        <d iv class Name="m ax-w-7 xl mx-auto px-4sm:px-6lg:px-8">
        </d iv>
          <d iv class Name="t ext-centermb-16">
        </d iv>
            <h2 c lass Name="t ext-3 xl md:text-4 xl font-boldtext-gray-900mb-4">Automation Capabilities
            </h2>
            <p c lass Name="t ext-xl text-gray-600 max-w-3xlmx-auto">
              Our A I automation solutions cover every aspect of your business operations

            </p>
          </d iv>
          <d iv class Name="g rid md:grid-cols-2lg:grid-cols-4gap-8">
        </d iv>
            {features.map((feature, index) => (

              <d iv key="{index}" class Name="t ext-center" />
                <d iv class Name="w-16 h-16 b g-blue-100 rounded-full flex items-center justify-centermx-automb-4">
        </d iv>
                  <f eature.icon class Name="h-8w-8t ext-blue-600" / />
                </d iv>
                <h3 c lass Name="t ext-xl font-semiboldtext-gray-900mb-3">{feature.title}</h3>
                <p c lass Name="t ext-gray-600">{feature.description}</p>
              </d iv>
            ))}

          </d iv>
      </s ection>

      {/* Use Cases Section */}

      <s ection class Name="p y-20bg-gray-50" />
        <d iv class Name="m ax-w-7 xl mx-auto px-4sm:px-6lg:px-8">
        </d iv>
          <d iv class Name="t ext-centermb-16">
        </d iv>
            <h2 c lass Name="t ext-3 xl md:text-4 xl font-boldtext-gray-900mb-4">Common Use Cases
            </h2>
            <p c lass Name="t ext-xl text-gray-600 max-w-3xlmx-auto">
              See how A I automation can transform different areas of your business

            </p>
          </d iv>
          <d iv class Name="g rid md:grid-cols-2lg:grid-cols-4gap-8">
        </d iv>
            {use Cases.map((use Case, index) => (

              <d iv key={index} class Name="b g-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10transition-allduration-300" />
                <d iv class Name="f lex items-centergap-3mb-4">
        </d iv>
                  {use Case.icon}

                  <h3 c lass Name="t ext-lgfont-semiboldtext-white">{use Case.title}</h3>
                </d iv>
                <p c lass Name="t ext-gray-300">{use Case.description}</p>
              </d iv>
            ))}

          </d iv>
      </s ection>

      {/* Benefits Section */}

      <s ection class Name="p y-20 px-4sm:px-6lg:px-8" />
        <d iv class Name="m ax-w-7xlmx-auto">
        </d iv>
          <d iv class Name="g rid lg:grid-cols-2gap-12items-center">
        </d iv>
            <d iv />
              <h2 c lass Name="t ext-4 xl font-boldtext-whitemb-6">Why Choose Our A I Automation?</h2>
              <p c lass Name="t ext-lgtext-gray-300mb-8" />
                Our A I automation solutions deliver measurable results that transform your business operations and drive growth.

              </p>
              <u l class Name="s pace-y-4" />
                {benefits.map((benefit, index) => (

                  <l i key="{index}" class Name="f lexitems-centerspace-x-3" />
                    <C heck Circle class Name="w-6 h-6t ext-cyan-400flex-shrink-0" / />
                    <s pan class Name="t ext-gray-300">{benefit}</s pan>
                  </l i>
                ))}

              </u l>
            </d iv>
            <d iv class Name="b g-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-2xl p-8borderborder-cyan-500/30">
        </d iv>
              <h3 c lass Name="t ext-2xl font-boldtext-whitemb-4">Ready to Automate?</h3>
              <p c lass Name="t ext-gray-300mb-6" />
                Let our A I experts help you identify automation opportunities and implement solutions that deliver immediate value.

              </p>
              <L ink to="/contact" class Name="b g-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 inline-flexitems-centergap-2" />
                Start Your Automation Journey <A rrow Right class Name="w-5h-5" />
              </L ink>
            <d iv class Name="r elative" />
              <d iv class Name="b g-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-2 xl p-8 backdrop-blur-smborderborder-white/10">
        </d iv>
                <d iv class Name="t ext-center" />
                  <d iv class Name="t ext-4 xl font-boldtext-whitemb-2">70%</d iv>
                  <d iv class Name="t ext-gray-300mb-6">Average Cost Reduction</d iv>
                  <d iv class Name="t ext-4 xl font-boldtext-whitemb-2">3-6</d iv>
                  <d iv class Name="t ext-gray-300mb-6">Months to R OI</d iv>
                  <d iv class Name="t ext-4 xl font-boldtext-whitemb-2">24/7</d iv>
                  <d iv class Name="t ext-gray-300">Automated Operations</d iv>
              </d iv>
              <h3 c lass Name="t ext-xl font-semiboldtext-gray-900mb-3">Optimization</h3>
              <p c lass Name="t ext-gray-600" />
                Continuously monitor and optimize automation performance

              </p>
            </d iv>
        </d iv>
      </s ection>

      {/* C TA Section */}

      <s ection class Name="p y-20 px-4sm:px-6lg:px-8" />
        <d iv class Name="m ax-w-4xlmx-autotext-center">
        </d iv>
          <h2 c lass Name="t ext-3xl font-boldtext-whitemb-6" />
            Transform Your Business with A I Automation

          </h2>
          <p c lass Name="t ext-gray-300text-lgmb-8" />
            Join hundreds of companies that have already revolutionized their operations with our A I automation solutions.

          </p>
          <d iv class Name="f lex flex-col sm:flex-rowgap-4justify-center">
        </d iv>
            <L ink to="/contact" class Name="b g-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-centerjustify-centergap-2" />
              Get Started Today <A rrow Right class Name="w-5h-5" />
            </L ink>
            <L ink to="/about" class Name="b order border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900transition-allduration-300" />
              Learn More About Us

            </L ink>
          </d iv>
      </s ection>
    </d iv>
  );
};

export default A IAutomation Page;
