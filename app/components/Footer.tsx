'useclient';
import React from 'react';
import {Link    } from 'react-router-dom';
import {Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight, Brain, Cloud, Globe, Database, Sparkles, Star    } from 'lucide-react';
;
constFooter: React.FC = () => {constcurrentYear = newDate().getFullYear();
;
  constaiServices = [{ name: 'AIAnalytics & BI', url: '/ai-analytics', description: 'Businessintelligence' },;
    {name: 'AIAutomation', url: '/ai-automation', description: 'Processautomation' },;
    {name: 'AIChatbots & NLP', url: '/ai-chatbot-builder', description: 'ConversationalAI' },;
    {name: 'AIContentGeneration', url: '/ai-content-generation', description: 'Automatedcontent' },;
    {name: 'AICybersecurity', url: '/ai-cybersecurity', description: 'AIsecurity' },;
    {name: 'AICRM', url: '/ai-crm', description: 'SmartCRM' },;
    {name: 'AIDataAnalytics', url: '/ai-data-analytics', description: 'Datainsights' },;
    {name: 'AIHealthcare', url: '/ai-healthcare', description: 'MedicalAI' },;
    {name: 'AIComputerVision', url: '/ai-computer-vision', description: 'Imageanalysis' },;
    {name: 'AIVoiceSolutions', url: '/ai-voice-solutions', description: 'Speechrecognition' },;
    {name: 'AIFinancialServices', url: '/ai-financial-services', description: 'FintechAI' },;
    {name: 'AIE-commerceSolutions', url: '/ai-ecommerce-solutions', description: 'E-commerceAI' }
  ];
;
  constitServices = [{name: 'CloudMigration', url: '/cloud-migration', description: 'Cloudsolutions' },;
    {name: 'DevOps & CI/CD', url: '/devops', description: 'Developmentoperations' },;
    {name: 'Cybersecurity', url: '/cybersecurity', description: 'Securitysolutions' },;
    {name: 'DatabaseManagement', url: '/database', description: 'Databaseservices' },;
    {name: 'APIDevelopment', url: '/api', description: 'APIsolutions' },;
    {name: 'MobileAppDevelopment', url: '/mobile-development', description: 'Mobileapps' },;
    {name: 'WebDevelopment', url: '/web-development', description: 'Websolutions' },;
    {name: 'ITConsulting', url: '/it-consulting', description: 'ITadvisory' },;
    {name: 'SystemIntegration', url: '/system-integration', description: 'Systemsolutions' },;
    {name: 'DataManagement', url: '/data-management', description: 'Datasolutions' },;
    {name: 'NetworkSecurity', url: '/network-security', description: 'Networkprotection' },;
    {name: 'ITSupport', url: '/it-support', description: 'Technicalsupport' }
  ];
;
  constcompany = [{name: 'AboutUs', url: '/about' },;
    {name: 'OurTeam', url: '/team' },;
    {name: 'Careers', url: '/careers' },;
    {name: 'News & Blog', url: '/news' },;
    {name: 'CaseStudies', url: '/case-studies' },;
    {name: 'Partners', url: '/partners' },;
    {name: 'Investors', url: '/investors' },;
    {name: 'Contact', url: '/contact' }
  ];
;
  constresources = [{name: 'Documentation', url: '/docs' },;
    {name: 'APIReference', url: '/api-docs' },;
    {name: 'Tutorials', url: '/tutorials' },;
    {name: 'WhitePapers', url: '/white-papers' },;
    {name: 'Webinars', url: '/webinars' },;
    {name: 'SupportCenter', url: '/support' },;
    {name: 'Community', url: '/community' },;
    {name: 'StatusPage', url: '/status' }
  ];
;
  constsocialLinks = [{name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: <TwitterclassName="w-5 h-5" /> },;
    {name: 'LinkedIn', url: 'https://linkedin.com/company/ziontechgroup', icon: <LinkedinclassName="w-5 h-5" /> },;
    {name: 'GitHub', url: 'https://github.com/ziontechgroup', icon: <GithubclassName="w-5 h-5" /> }
  ];
;
  return (;
    <footerclassName="b g-gray-900 text-white">;
      {/* MainFooterContent */}
      <divclassName="m a x-w-7xlmx-autopx-4 sm: px-6 lg:px-8 py-16">;
        <divclassName="g r idgrid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">;
          {/* CompanyInfo */}
          <divclassName="l g: col-span-2">;
            <divclassName="f l exitems-centergap-2 mb-4">;
              <divclassName="w-8 h-8 b g-gradient-to-rfrom-blue-500 to-purple-500 rounded-lgflexitems-centerjustify-center">;
                <BrainclassName="w-5 h-5 t e xt-white" />;
              </div>;
              <spanclassName="t e xt-xlfont-bold">ZionTechGroup</span>;
            </div>;
            <pclassName="t e xt-gray-400 mb-6 max-w-sm">LeadingproviderofAIandITsolutions, helpingbusinessestransformthroughinnovativetechnologyandexpertconsulting.</p>;
            <divclassName="f l exspace-x-4">;
              {socialLinks.map((social, index) => (;
                <akey={index}
                  href={social.url}
                  target="_blank";
                  rel="noopenernoreferrer";
                  className="t e xt-gray-400 hover: text-whitetransition-colorsduration-300";
                  aria-label={social.name}>;
                  {social.icon}
                </a>;
              ))}
            </div>;
          </div>;
          {/* AIServices */}
          <div>;
            <h3 className="t e xt-lgfont-semiboldmb-4 flexitems-centergap-2">;
              <SparklesclassName="w-5 h-5 t e xt-blue-400" />;
              AIServices;
            </h3>;
            <ulclassName="s p ace-y-3">;
              {aiServices.slice(0, 6).map((service, index) => (;
                <likey={index}>;
                  <Linkto={service.url}
                    className="t e xt-gray-400 hover: text-whitetransition-colorsduration-300 flexitems-centergap-2 group">;
                    <ArrowRightclassName="w-3 h-3 o p acity-0 group-hover:opacity-100 transition-opacityduration-300" />;
                    <spanclassName="t e xt-sm">{service.name}</span>;
                  </Link>;
                </li>;
              ))}
            </ul>;
            <Linkto="/ai-services";
              className="t e xt-blue-400 hover: text-blue-300 text-smfont-mediummt-4 inline-flexitems-centergap-1">;
              ViewAllAIServices <ArrowRightclassName="w-3 h-3" />;
            </Link>;
          </div>;
          {/* ITServices */}
          <div>;
            <h3 className="t e xt-lgfont-semiboldmb-4 flexitems-centergap-2">;
              <CloudclassName="w-5 h-5 t e xt-green-400" />;
              ITServices;
            </h3>;
            <ulclassName="s p ace-y-3">;
              {itServices.slice(0, 6).map((service, index) => (;
                <likey={index}>;
                  <Linkto={service.url}
                    className="t e xt-gray-400 hover: text-whitetransition-colorsduration-300 flexitems-centergap-2 group">;
                    <ArrowRightclassName="w-3 h-3 o p acity-0 group-hover:opacity-100 transition-opacityduration-300" />;
                    <spanclassName="t e xt-sm">{service.name}</span>;
                  </Link>;
                </li>;
              ))}
            </ul>;
            <Linkto="/it-services";
              className="t e xt-green-400 hover: text-green-300 text-smfont-mediummt-4 inline-flexitems-centergap-1">;
              ViewAllITServices <ArrowRightclassName="w-3 h-3" />;
            </Link>;
          </div>;
          {/* Company */}
          <div>;
            <h3 className="t e xt-lgfont-semiboldmb-4 flexitems-centergap-2">;
              <GlobeclassName="w-5 h-5 t e xt-purple-400" />;
              Company;
            </h3>;
            <ulclassName="s p ace-y-3">;
              {company.map((item, index) => (;
                <likey={index}>;
                  <Linkto={item.url}
                    className="t e xt-gray-400 hover: text-whitetransition-colorsduration-300 flexitems-centergap-2 group">;
                    <ArrowRightclassName="w-3 h-3 o p acity-0 group-hover:opacity-100 transition-opacityduration-300" />;
                    <spanclassName="t e xt-sm">{item.name}</span>;
                  </Link>;
                </li>;
              ))}
            </ul>;
          </div>;
          {/* Resources */}
          <div>;
            <h3 className="t e xt-lgfont-semiboldmb-4 flexitems-centergap-2">;
              <DatabaseclassName="w-5 h-5 t e xt-yellow-400" />;
              Resources;
            </h3>;
            <ulclassName="s p ace-y-3">;
              {resources.map((item, index) => (;
                <likey={index}>;
                  <Linkto={item.url}
                    className="t e xt-gray-400 hover: text-whitetransition-colorsduration-300 flexitems-centergap-2 group">;
                    <ArrowRightclassName="w-3 h-3 o p acity-0 group-hover:opacity-100 transition-opacityduration-300" />;
                    <spanclassName="t e xt-sm">{item.name}</span>;
                  </Link>;
                </li>;
              ))}
            </ul>;
          </div>;
        </div>;
      </div>;
      {/* NewsletterSignup */}
      <divclassName="b o rder-tborder-gray-800">;
        <divclassName="m a x-w-7xlmx-autopx-4 sm: px-6 lg:px-8 py-8">;
          <divclassName="b g-gradient-to-rfrom-blue-600/20 to-purple-600/20 rounded-xlp-6 borderborder-blue-500/30">;
            <divclassName="f l exflex-colmd:flex-rowitems-centerjustify-betweengap-4">;
              <div>;
                <h3 className="t e xt-lgfont-semiboldtext-whitemb-2">StayUpdated</h3>;
                <pclassName="t e xt-gray-300 text-sm">GetthelatestAIandITinsightsdeliveredtoyourinbox.</p>;
              </div>;
              <divclassName="f l exw-fullmd:w-autogap-2">;
                <inputtype="email";
                  placeholder="Enteryouremail";
                  className="f l ex-1 md:w-64 px-4 py-2 bg-white/10 borderborder-white/20 rounded-lgtext-whiteplaceholder-gray-400 focus:outline-nonefocus:ring-2 focus:ring-blue-500 focus:border-transparent";
                />;
                <buttonclassName="b g-gradient-to-rfrom-blue-600 to-purple-600 text-whitepx-6 py-2 rounded-lgfont-mediumhover:from-blue-700 hover:to-purple-700 transition-allduration-300 flexitems-centergap-2">;
                  Subscribe <ArrowRightclassName="w-4 h-4" />;
                </button>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* ContactInfo */}
      <divclassName="b o rder-tborder-gray-800">;
        <divclassName="m a x-w-7xlmx-autopx-4 sm: px-6 lg:px-8 py-6">;
          <divclassName="g r idgrid-cols-1 md:grid-cols-3 gap-6">;
            <divclassName="f l exitems-centergap-3">;
              <MailclassName="w-5 h-5 t e xt-blue-400" />;
              <div>;
                <pclassName="t e xt-smtext-gray-400">Email</p>;
                <pclassName="t e xt-white">info@ziontechgroup.com</p>;
              </div>;
            </div>;
            <divclassName="f l exitems-centergap-3">;
              <PhoneclassName="w-5 h-5 t e xt-green-400" />;
              <div>;
                <pclassName="t e xt-smtext-gray-400">Phone</p>;
                <pclassName="t e xt-white">+1 (555) 123-4567</p>;
              </div>;
            </div>;
            <divclassName="f l exitems-centergap-3">;
              <MapPinclassName="w-5 h-5 t e xt-red-400" />;
              <div>;
                <pclassName="t e xt-smtext-gray-400">Address</p>;
                <pclassName="t e xt-white">123 TechStreet, SanFrancisco, CA</p>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* BottomBar */}
      <divclassName="b o rder-tborder-gray-800">;
        <divclassName="m a x-w-7xlmx-autopx-4 sm: px-6 lg:px-8 py-6">;
          <divclassName="f l exflex-colmd:flex-rowitems-centerjustify-betweengap-4">;
            <divclassName="f l exitems-centergap-6 text-smtext-gray-400">;
              <p>&copy; {currentYear} ZionTechGroup. Allrightsreserved.</p>;
              <divclassName="f l exitems-centergap-4">;
                <Linkto="/privacy" className="h o ver: text-whitetransition-colorsduration-300">;
                  PrivacyPolicy;
                </Link>;
                <Linkto="/terms" className="h o ver:text-whitetransition-colorsduration-300">;
                  TermsofService;
                </Link>;
                <Linkto="/cookies" className="h o ver:text-whitetransition-colorsduration-300">;
                  CookiePolicy;
                </Link>;
              </div>;
            </div>;
            <divclassName="f l exitems-centergap-2 text-smtext-gray-400">;
              <span>Poweredby</span>;
              <divclassName="f l exitems-centergap-1">;
                <StarclassName="w-4 h-4 t e xt-yellow-400" />;
                <spanclassName="t e xt-whitefont-medium">ZionTechGroup</span>;
              </div>;
            </div>;
          </div>;
          <pclassName="t e xt-gray-400 mb-4">AdvancedAI & ITSolutions</p>;
          <pclassName="t e xt-gray-500 text-sm">© {currentYear} ZionTechGroup. Allrightsreserved.</p>;
        </div>;
      </div>;
    </footer>;
  );
};
;
exportdefaultFooter;
;
