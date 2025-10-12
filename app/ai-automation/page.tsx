import React from 'react';
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {ArrowRight, Zap, Brain, Settings, Globe, Users, Star, Award, CheckCircle} from 'lucide-react';

const AIAutomation Page: React.FC = () => {
  constfeatures = [
    {
      icon: <Zapclass Name ="w-8h-8text-cyan-400" />,
      title: 'Workflow Automation',
      description: 'Automate complex business processes with intelligent workflow management.'
    },
    {
      icon: <Brainclass Name ="w-8h-8text-purple-400" />,
      title: 'Intelligent Decision Making',
      description: 'AI-powered decision making based on data analysis and business rules.'
    },
    {
      icon: <Settingsclass Name ="w-8h-8text-green-400" />,
      title: 'Custom Integrations',
      description: 'Seamlessly integrate with your existing systems and third-party applications.'
    },
    {
      icon: <Globeclass Name ="w-8h-8text-blue-400" />,
      title: 'Scalable Solutions',
      description: 'Automation solutions that grow with your business and adapt to changing needs.'
    }
  ];
  const useCases = [
    {
      title: 'Customer Service',
      description: 'Automate ticket routing, response generation, and issue resolution.',
      icon: <Usersclass Name ="w-6h-6text-blue-400" />
    },
    {
      title: 'Data Processing',
      description: 'Automate data collection, validation, and analysis workflows.',
      icon: <Starclass Name ="w-6h-6text-yellow-400" />
    },
    {
      title: 'Marketing Automation',
      description: 'Automate email campaigns, lead scoring, and customer segmentation.',
      icon: <Awardclass Name ="w-6h-6text-green-400" />
    },
    {
      title: 'Financial Operations',
      description: 'Automate invoice processing, expense management, and financial reporting.',
      icon: <Check Circleclass Name="w-6h-6text-red-400" />
    }
  ];
  constbenefits = [
    'Reduce operational costs by up to 70%',
    'Increase productivity and efficiency',
    'Eliminate human errors in repetitive tasks',
    '24/7 automated operations',
    'Scalable and adaptable solutions',
    'ROI within 3-6 months'
  ];
  return (
    <div className ="min-h-screenbg-gradient-to-brfrom-gray-900via-blue-900to-purple-900">
      <Helmet>
        <title />AIAutomation Services - ZionTech Group</title>
        <meta name ="description" content="Transformyour businesswith AI-poweredautomation solutions. Reducecosts, increaseefficiency, andeliminate manualprocesses." />
        <meta name ="keywords" content="AIautomation, businessprocess automation, workflowautomation, intelligentautomation, RPA" />
      </Helmet>

      {/* HeroSection */}
      <sectionclassName ="relativepy-20 px-4sm:px-6lg:px-8" />
        <div className ="max-w-7xlmx-autotext-center" />
          <h1className ="text-5xlmd:text-6xlfont-boldtext-whitemb-6" />
            AI <spanclassName ="text-transparentbg-clip-textbg-gradient-to-rfrom-cyan-400to-purple-400" />Automation</span> Services
          </h1>
          <pclassName ="text-xltext-gray-300 mb-8 max-w-3xlmx-auto" />
            Transformyour businessoperations withintelligent automationsolutions thatreduce costs, increaseefficiency, andeliminate repetitivetasks.
          </p>
          <div className ="flexflex-colsm:flex-rowgap-4justify-center" />
            <Link to ="/contact" className="bg-gradient-to-rfrom-cyan-600 to-purple-600 text-white px-8 py-3 rounded-lgfont-semiboldhover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flexitems-centergap-2" />
              GetStarted <Arrow Rightclass Name="w-5h-5" />
            </Link>
            <Link to ="/ai-services" className="borderborder-whitetext-white px-8 py-3 rounded-lgfont-semiboldhover:bg-whitehover:text-gray-900transition-allduration-300" />
              ViewAll AIServices
            </Link>
          </div>
        </div>
      </section>

      {/* FeaturesSection */}
      <sectionclassName ="py-20bg-white" />
        <div className ="max-w-7 xlmx-autopx-4sm:px-6lg:px-8" />
          <div className ="text-centermb-16" />
            <h2className ="text-3 xlmd:text-4 xlfont-boldtext-gray-900mb-4"  />AutomationCapabilities
            </h2>
            <pclassName ="text-xltext-gray-600 max-w-3xlmx-auto" />
              OurAI automationsolutions coverevery aspectof yourbusiness operations
            </p>
          </div>
          <div className ="gridmd:grid-cols-2lg:grid-cols-4gap-8" />
            {features.map((feature, index) => (
              <divkey ="{index}" className="text-center" />
                <div className ="w-16 h-16 bg-blue-100 rounded-fullflex items-centerjustify-centermx-automb-4" />
                  <feature.iconclassName ="h-8w-8text-blue-600" / />
                </div>
                <h3className ="text-xlfont-semiboldtext-gray-900mb-3"   />{feature.title}</h3>
                <pclassName ="text-gray-600" />{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <sectionclassName ="py-20bg-gray-50" />
        <div className ="max-w-7 xl mx-auto px-4sm:px-6lg:px-8" />
          <div className ="text-centermb-16" />
            <h2className ="text-3 xl md:text-4 xl font-boldtext-gray-900mb-4"  />Common Use Cases
            </h2>
            <pclassName ="text-xl text-gray-600 max-w-3xlmx-auto" />
              See how AI automation can transform different areas of your business
            </p>
          </div>
          <div className ="grid md:grid-cols-2lg:grid-cols-4gap-8" />
            {use Cases.map((useCase, index) => (
              <divkey ={index} className="bg-white/5 backdrop-blur-smrounded-xlp-6 borderborder-white/10 hover:bg-white/10transition-allduration-300" />
                <div className ="flexitems-centergap-3mb-4" />
                  {useCase.icon}
                  <h3className ="text-lgfont-semiboldtext-white" />{useCase.title}</h3>
                </div>
                <pclassName ="text-gray-300" />{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <sectionclassName ="py-20 px-4sm:px-6lg:px-8" />
        <div className ="max-w-7xlmx-auto" />
          <div className ="grid lg:grid-cols-2gap-12items-center" />
            <div />
              <h2className ="text-4 xl font-boldtext-whitemb-6"   />Why Choose Our AI Automation?</h2>
              <pclassName ="text-lg text-gray-300 mb-8" />
                Our AI automation solutions deliver measurable results that transform your business operations and drive growth.
              </p>
              <ulclassName ="space-y-4" />
                {benefits.map((benefit, index) => (
                  <likey ="{index}" className="flexitems-centerspace-x-3" />
                    <Check Circleclass Name="w-6 h-6text-cyan-400flex-shrink-0" / />
                    <spanclassName ="text-gray-300"   />{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className ="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-2xl p-8borderborder-cyan-500/30" />
              <h3className ="text-2xl font-boldtext-whitemb-4" />Ready to Automate?</h3>
              <pclassName ="text-gray-300mb-6" />
                Let our AI experts help you identify automation opportunities and implement solutions that deliver immediate value.
              </p>
              <Link to ="/contact" className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 inline-flexitems-centergap-2" />
                Start Your Automation Journey <Arrow Rightclass Name="w-5h-5" />
              </Link>
            <div className ="relative" />
              <div className ="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-2 xl p-8 backdrop-blur-smborderborder-white/10" />
                <div className ="text-center" />
                  <div className ="text-4 xl font-boldtext-whitemb-2"   />70%</div>
                  <div className ="text-gray-300mb-6"   />Average Cost Reduction</div>
                  <div className ="text-4 xl font-boldtext-whitemb-2"   />3-6</div>
                  <div className ="text-gray-300mb-6"   />Months to ROI</div>
                  <div className ="text-4 xl font-boldtext-whitemb-2"   />24/7</div>
                  <div className ="text-gray-300"   />Automated Operations</div>
                </div>
              </div>
              <h3className ="text-xl font-semiboldtext-gray-900mb-3"   />Optimization</h3>
              <pclassName ="text-gray-600" />
                Continuously monitor and optimize automation performance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <sectionclassName ="py-20 px-4sm:px-6lg:px-8" />
        <div className ="max-w-4xlmx-autotext-center" />
          <h2className ="text-3xl font-boldtext-whitemb-6" />
            Transform Your Business with AI Automation
          </h2>
          <pclassName ="text-gray-300text-lgmb-8" />
            Join hundreds of companies that have already revolutionized their operations with our AI automation solutions.
          </p>
          <div className ="flex flex-col sm:flex-rowgap-4justify-center" />
            <Link to ="/contact" className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-centerjustify-centergap-2" />
              Get Started Today <Arrow Rightclass Name="w-5h-5" />
            </Link>
            <Link to ="/about" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900transition-allduration-300" />
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutomation Page;