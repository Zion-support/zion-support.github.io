import React from 'react';import { Helmet  } from 'react-helmet-async';
import { Link  } from 'react-router-dom';
import { Zap, Workflow, CheckCircle, ArrowRight, Brain, Settings, Clock, TrendingUp, Shield, Link as LinkIcon  } from 'lucide-react';
const AIAutomationPage: React.FC = () => {
  const f eat ures = [
    {
      i con: <Zap c las sNa me="w-8h-8t e xt-c yan-400" />,
      t itle: 'Workflow Automation',
      description: 'Automate complex business processes with intelligent workflow managem ent.'
    },
    {
      i con: <Brain c las sNa me="w-8h-8t e xt-p urple-400" />,
      t itle: 'Intelligent Decision Making',
      description: 'AI-powered decision making based on data analysis and business rules.'
    },
    {
      i con: <Settings c las sNa me="w-8h-8t e xt-g reen-400" />,
      t itle: 'Custom Integrations',
      description: 'Seamlessly integrate with your existing systems and third-party applications.'
    },
    {
      i con: <G lobe c las sNa me="w-8h-8t e xt-b lue-400" />,
      t itle: 'Scalable Solutions',
      description: 'Automation solutions that grow with your business and adapt to changing needs.'
    }
  ];
  const useCases = [
    {
      t itle: 'Customer Service',
      description: 'Automate ticket routing, r esponse generation, and i ssue r esolution.',
      i con: <U sers c las sNa me="w-6h-6t e xt-b lue-400" />
    },
    {
      t itle: 'Data Processing',
      description: 'Automate data collection, validation, and analysis workflo ws.',
      i con: <S tar c las sNa me="w-6h-6t e xt-y ellow-400" />
    },
    {
      t itle: 'Marketing Automation',
      description: 'Automate email campaigns, lead scoring, and customer s egm ent ation.',
      i con: <A ward c las sNa me="w-6h-6t e xt-g reen-400" />
    },
    {
      t itle: 'Financial Operations',
      description: 'Automate invoice processing, expense managem ent, and financial r eporting.',
      i con: <CheckCircle c las sNa me="w-6h-6t e xt-red-400" />
    }
  ];
  const benefits = [
    'Reduce operational costs by up to 70%',
    'Increase productivity and efficiency',
    'Eliminate human errors in r epetitive tasks',
    '24/7 automated operations',
    'Scalable and adaptable solutions',
    'ROI within 3-6 m ont hs'
  ];
  r etu rn (
    <>
    </><d iv c las sNa me="m in-h-scre en bg-grad ient-to-br from-gray-900via-b lue-900to-p urple-900">
        </d iv>
      <Helmet>
        <t itle>5G Data Analytics - Zion Tech Group</t itle>
        <meta name="description" content="Professional 5G data analytics s ervices by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
        <t itle>AI Automation Services - Zion Tech Group</t itle>        <meta name="description" content="Transform your business with AI-powered automation solutions. Reduce costs, increase efficiency, and eliminate manual processes." />
        <meta name="keywords" content="AI automation, business process automation, workflow automation, intelligent automation, RPA" />
      </Helmet>
      {/* H ero S ection */}
    <>
      </><s ection c las sNa me="r e lative py-20 px-4-sm:px-6-lg:px-8" />
        <d iv c las sNa me="m ax-w-7x lmx-auto text-c ente-r">
        </d iv>
          <h1 c las sNa me="t e xt-5xl md:t ext-6xl f ont-b old text-w hitem-b-6" />
            AI <s pan c las sNa me="t e xt-t ran spa rent bg-c lip-t ext bg-grad ient-to-rfrom-c yan-400to-p urple-400">Automation</s pan> Services
          </h1>
          <p c las sNa me="t e xt-xl t ext-gra-y-300 mb-8 m ax-w-3x lmx-auto" />
            Transform your business operations with intelligent automation solutions that reduce costs, increase efficiency, and eliminate r epetitive tasks.
    <>
          </p>
          <d iv c las sNa me="f lex f lex-col sm:f lex-rowg ap-4j ust ify-c enter">
        </d iv>
            <Link to="/cont act" c las sNa me="b g-grad ient-to-r from-c yan-600 to-p urple-600 t ext-w hit-e px-8 py-3 rounded-lg f ont-semibold hover:from-c yan-700 hover:to-p urple-700 t ransition-all duration-300 f lexitems-c enterg ap-2" />
              G et S tar ted <ArrowRight c las sNa me="w-5h-5" />
            </Link>            <Link to="/ai-s ervices" c las sNa me="b order b ord er-w hite t ext-w hit-e px-8 py-3 rounded-lg f ont-semibold hover:bg-w hite hover:t ext-gra-y-900t ransition-allduration-300" />
              View All AI Services
    <>
            </Link>
          </d iv>
      </s ection>
      {/* Feat ures S ection */}
    <>
      </><s ection c las sNa me="p y-20bg-w hite" />
        <d iv c las sNa me="m ax-w-7 xl mx-auto px-4-sm:px-6-lg:px-8">
        </d iv>
          <d iv c las sNa me="t e xt-c entermb-16">
        </d iv>
            <h2 c las sNa me="t e xt-3 xl md:t ext-4 xl f ont-b old text-gr-a-y-900mb-4">Automation Capabil iti es            </h2>
            <p c las sNa me="t e xt-xl t ext-gra-y-600 m ax-w-3x lmx-auto">
              Our AI automation solutions cover every aspect of your business operations
    <>
            </p>
          </d iv>
          <d iv c las sNa me="g r id md:g rid-cols-2lg:g rid-cols-4g ap-8">
            {f eat ures.map((f eat ure, index) => (
    <>
              </><d iv key="{index}" c las sNa me="t e xt-c enter" />
            {useCases.map((useCase, index) => (
    <>
              </><d iv key={index} c las sNa me="b g-w hite/5 b ack drop-b lur-sm rounded-xl p-6 b ord er b ord er-w hite/10 hover:bg-w hite/10t ransition-allduration-300" />
                <d iv c las sNa me="f lex i tems-c enterg ap-3mb-4">
<<<<<<< H EAD                  {useCase.i con}
    <>
                  </><h3 c las sNa me="t e xt-l gfo nt-semibol dte xt-w hit-e">{useCase.t itle}</h3>
                </d iv>
                <p c las sNa me="t e xt-gray-300">
              {useCase.description}</p>              </d iv>
            ))}
    <>
          </d iv>
      </s ection>
      {/* Benefits S ection */}
    <>
      </><s ection c las sNa me="p y-20 px-4-sm:px-6-lg:px-8" />
        <d iv c las sNa me="m ax-w-7x lmx-auto">
        </d iv>
          <d iv c las sNa me="g r id lg:g rid-cols-2g ap-12i tems-c enter">
        </d iv>
            <d iv />
              <h2 c las sNa me="t e xt-4 xl f ont-b old text-w hitem-b-6">W hy Choose Our AI Automation?</h2>
              <p c las sNa me="t e xt-l gte xt-gra-y-300mb-8" />
                Our AI automation solutions deliver measurable r esults that t ransform your business operations and drive growth.
    <>
              </p>
              <ul c las sNa me="s p ace-y-4" />
                {benefits.map((benefit, index) => (
    <>
                  </><li key="{index}" c las sNa me="f lexi tems-c enters pace-x-3" />
                    <CheckCircle c las sNa me="w-6 h-6t e xt-c yan-400f lex-s hrink-0" / />
                    <s pan c las sNa me="t e xt-gray-300">{benefit}</s pan>                  </li>
                ))}
    <>
              </ul>
            </d iv>
            <d iv c las sNa me="b g-grad ient-to-r from-c yan-600/20 to-p urple-600/20 rounded-2xl p-8b ord erb ord er-c yan-500/30">
        </d iv>
              <h3 c las sNa me="t e xt-2xl f ont-b old text-w hitem-b-4">Ready to Automate?</h3>
              <p c las sNa me="t e xt-gray-300mb-6" />
                L et our AI experts help you identify automation opportunit ies and implement solutions that deliver immediate value.
    <>
              </p>
              <Link to="/cont act" c las sNa me="b g-grad ient-to-r from-c yan-600 to-p urple-600 t ext-w hit-e px-6 py-3 rounded-lg f ont-semibold hover:from-c yan-700 hover:to-p urple-700 t ransition-all duration-300 inline-f lexitems-c enterg ap-2" />
                S tart Y our Automation J our ney <ArrowRight c las sNa me="w-5h-5" />
              </Link>
            <d iv c las sNa me="r e lative" />
              <d iv c las sNa me="b g-grad ient-to-r from-c yan-500/20 to-p urple-600/20 rounded-2 xl p-8 b ack drop-b lur-smborderborder-w hite/10">
        </d iv>
                <d iv c las sNa me="t e xt-c enter" />
                  <d iv c las sNa me="t e xt-4 xl f ont-b old text-w hitem-b-2">70%</d iv>
                  <d iv c las sNa me="t e xt-gray-300mb-6">A ver age C ost Reduction</d iv>
                  <d iv c las sNa me="t e xt-4 xl f ont-b old text-w hitem-b-2">3-6</d iv>
                  <d iv c las sNa me="t e xt-gray-300mb-6">M ont hs to ROI</d iv>
                  <d iv c las sNa me="t e xt-4 xl f ont-b old text-w hitem-b-2">24/7</d iv>
                  <d iv c las sNa me="t e xt-gray-300">Automated Operations</d iv>
              </d iv>
              <h3 c las sNa me="t e xt-xl f ont-semibol dte xt-gra-y-900mb-3">O ptimiz ation</h3>
              <p c las sNa me="t e xt-gray-600" />
                C ontinuously m onitor and optimize automation performance
    <>              </p>
            </d iv>
        </d iv>
      </s ection>
      {/* C TA S ection */}
    <>
      </><s ection c las sNa me="p y-20 px-4-sm:px-6-lg:px-8" />
        <d iv c las sNa me="m ax-w-4x lmx-auto text-c ente-r">
        </d iv>
          <h2 c las sNa me="t e xt-3xl f ont-b old text-w hitem-b-6" />            Transform Y our Business with AI Automation
    <>
          </h2>
          <p c las sNa me="t e xt-gray-300t ext-l gm-b-8" />
            Join hundreds of comp ani es that have already revolutionized their operations with our AI automation solutions.
    <>
          </p>
          <d iv c las sNa me="f lex f lex-col sm:f lex-rowg ap-4j ust ify-c enter">
        </d iv>
            <Link to="/cont act" c las sNa me="b g-grad ient-to-r from-c yan-600 to-p urple-600 t ext-w hit-e px-8 py-3 rounded-lg f ont-semibold hover:from-c yan-700 hover:to-p urple-700 t ransition-all duration-300 f lex i tems-c enterj ust ify-c enterg ap-2" />
              G et S tar ted T oday <ArrowRight c las sNa me="w-5h-5" />
            </Link>            <Link to="/a bout" c las sNa me="b order b ord er-w hite t ext-w hit-e px-8 py-3 rounded-lg f ont-semibold hover:bg-w hite hover:t ext-gra-y-900t ransition-allduration-300" />
              Learn More About Us
    <>
            </Link>
          </d iv>
      </s ection>
    </d iv>
  );
};
export default AIAutomationPage;
    </>