'useclient';
importReact, {useState, useEffect } from 'react';
import {Helmet   } from 'react-helmet-async';
import {Phone, Mail, MapPin, Clock, Send, CheckCircle, Star, Shield, Cloud, MessageCircle   } from 'lucide-react';
;
constContactPage: React.FC = () => {const [formData, setFormData] = useState({
    name: '',;
    email: '',;
    company: '',;
    phone: '',;
    service: '',;
    message: '';
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
;
  consthandleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {setFormData({
      ...formData,;
      [e.target.name]: e.target.value;
    });
  };
;
  consthandleSubmit = async (e: React.FormEvent) => {e.preventDefault();
    setIsLoading(true);
;
    // SimulateformsubmissionawaitnewPromise(resolve => setTimeout(resolve, 2000));
;
    setIsSubmitted(true);
    setIsLoading(false);
  };
;
  constcontactInfo = [{icon: <PhoneclassName="w-6 h-6 t e xt-cyan-400" />,;
      title: 'Phone',;
      details: '+1 302 464 0950',;
      description: 'Callusforimmediateassistance',;
      href: 'tel:+13024640950';
    },;
    {icon: <MailclassName="w-6 h-6 t e xt-purple-400" />,;
      title: 'Email',;
      details: 'kleber@ziontechgroup.com',;
      description: 'Sendusanemailanytime',;
      href: 'mailto:kleber@ziontechgroup.com';
    },;
    {icon: <MapPinclassName="w-6 h-6 t e xt-green-400" />,;
      title: 'Address',;
      details: '364 EMainStSTE 1008',;
      description: 'MiddletownDE 19709, USA',;
      href: '#';
    },;
    {icon: <ClockclassName="w-6 h-6 t e xt-yellow-400" />,;
      title: 'BusinessHours',;
      details: '24/7 Support',;
      description: 'We\'realwaysheretohelp',;
      href: '#';
    }
  ];
;
  constservices = ['AIServices',;
    'ITServices',;
    'MicroSAASProducts',;
    'CloudInfrastructure',;
    'Cybersecurity',;
    'WebDevelopment',;
    'MobileDevelopment',;
    'CustomSoftware',;
    'Consultation',;
    'Other';
  ];
;
  conststats = [{number: '< 2 hours', label: 'AverageResponseTime', icon: <ClockclassName="w-6 h-6 t e xt-cyan-400" /> },;
    {number: '99%', label: 'ClientSatisfaction', icon: <StarclassName="w-6 h-6 t e xt-green-400" /> },;
    {number: '24/7', label: 'SupportAvailable', icon: <ShieldclassName="w-6 h-6 t e xt-purple-400" /> },;
    {number: '500+', label: 'ProjectsCompleted', icon: <CheckCircleclassName="w-6 h-6 t e xt-yellow-400" /> }
  ];
;
  if (isSubmitted) {return (;
      <>;
        <Helmet>;
          <title>ThankYou - ZionTechGroup | MessageReceived</title>;
          <metaname="description" content="ThankyouforcontactingZionTechGroup. Wehavereceivedyourmessageandwillgetbacktoyouwithin 2 hours." />;
        </Helmet>;
        <divclassName="m in-h-screenbg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 flexitems-centerjustify-centerpx-4">;
          <divclassName="m a x-w-2xlmx-autotext-center">;
            <divclassName="w-24 h-24 b g-gradient-to-rfrom-green-500 to-emerald-600 rounded-fullflexitems-centerjustify-centermx-automb-8">;
              <CheckCircleclassName="w-12 h-12 t e xt-white" />;
            </div>;
            <h1 className="t e xt-4xlmd: text-5xlfont-boldtext-whitemb-6">ThankYou!</h1>;
            <pclassName="t e xt-xltext-gray-300 mb-8">We'vereceivedyourmessageandwillgetbacktoyouwithin 2 hours.;
              Ourteamisexcitedtoworkwithyou!</p>;
            <divclassName="f l exflex-colsm:flex-rowgap-4 justify-center">;
              <ahref="/";
                className="b g-gradient-to-rfrom-cyan-500 to-purple-600 text-whitepx-8 py-4 rounded-lgfont-semiboldhover:from-cyan-600 hover:to-purple-700 transition-allduration-300 transformhover:scale-105">;
                ReturnHome;
              </a>;
              <ahref="tel:+13024640950";
                className="b o rderborder-cyan-500 text-cyan-400 px-8 py-4 rounded-lgfont-semiboldhover:bg-cyan-500/10 transition-allduration-300 transformhover:scale-105">;
                CallUsNow;
              </a>;
      <divclassName="m in-h-screenbg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900">;
        <divclassName="m a x-w-7-xlmx-autopx-4 sm:px-6 lg:px-8 pt-20 pb-16">;
          <divclassName="t e xt-center">;
            <h1 className="t e xt-4-xlmd:text-6xlfont-boldtext-whitemb-6">ContactUs</h1>;
            <pclassName="t e xt-xltext-gray-300 mb-8 max-w-3-xlmx-auto">Readytotransformyourbusiness? Getintouchwithourteamofexperts.</p>;
            <divclassName="m a x-w-mdmx-auto">;
              <formclassName="s p ace-y-4">;
                <inputtype="text";
                  placeholder="YourName";
                  className="w-f u llpx-4 py-3 rounded-lgbg-gray-800 text-whiteborderborder-gray-600 focus:border-cyan-400 focus:outline-none";
                />;
                <inputtype="email";
                  placeholder="YourEmail";
                  className="w-f u llpx-4 py-3 rounded-lgbg-gray-800 text-whiteborderborder-gray-600 focus:border-cyan-400 focus:outline-none";
                />;
                <textareaplaceholder="YourMessage";
                  rows={4}
                  className="w-f u llpx-4 py-3 rounded-lgbg-gray-800 text-whiteborderborder-gray-600 focus: border-cyan-400 focus:outline-none";
                />;
                <buttontype="submit";
                  className="w-f u llbg-gradient-to-rfrom-cyan-500 to-purple-600 text-whitepx-8 py-3 rounded-lgfont-semiboldhover:from-cyan-600  hover:to-purple-700 transition-allduration-300">;
                  SendMessage;
                </button>;
              </form>;
            </div>;
          </div>;
        </div>;
      </>;
    );
    </>;
  }
;
  return (;
    <>;
      <Helmet>;
        <title>ContactUs - ZionTechGroup | GetinTouchforAI & ITSolutions</title>;
        <metaname="description" content="ContactZionTechGroupforAIsolutions, cloudinfrastructure, cybersecurity, andcustomsoftwaredevelopment. Call +1 302 464 0950 oremailkleber@ziontechgroup.com" />;
        <metaname="keywords" content="contactziontechgroup, AIconsulting, ITservices, cloudsolutions, cybersecurity, softwaredevelopment" />;
        <linkrel="canonical" href="https: //ziontechgroup.com/contact" />;
      </Helmet>;
      <divclassName="m in-h-screenbg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900">;
        {/* HeroSection */}
        <sectionclassName="r e lativepy-20 px-4 overflow-hidden">;
          <divclassName="a b soluteinset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.4)_0%,transparent_50%)] animate-pulse" />;
          <divclassName="a b soluteinset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />;
          <divclassName="r e lativemax-w-7xlmx-autotext-center">;
            <divclassName="i n line-flexitems-centerspace-x-2 bg-gradient-to-rfrom-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-fulltext-smfont-mediummb-8 borderborder-cyan-400/30">;
              <MessageCircleclassName="w-4 h-4" />;
              <span>GetinTouch</span>;
            </div>;
            <h1 className="t e xt-4xlsm: text-6xlmd:text-7xlfont-boldtext-whitemb-8 leading-tight">;
              Let'sBuildSomething{' '}
              <spanclassName="b g-gradient-to-rfrom-cyan-400 via-purple-400 to-pink-400 bg-clip-texttext-transparent">;
                AmazingTogether;
              </span>;
            </h1>;
            <pclassName="t e xt-lgsm: text-xlmd:text-2xltext-gray-300 mb-12 max-w-4xlmx-autoleading-relaxed">Readytotransformyourbusinesswithcutting-edgeAIandITsolutions?;
              Getintouchwithourexpertteamandlet'sdiscussyourproject.</p>;
          </div>;
        </section>;
        {/* StatsSection */}
        <sectionclassName="p y-20 px-4 relative">;
          <divclassName="a b soluteinset-0 bg-gradient-to-rfrom-cyan-500/5 to-purple-500/5" />;
          <divclassName="r e lativemax-w-7xlmx-auto">;
            <divclassName="g r idgrid-cols-2 md: grid-cols-4 gap-8">;
              {stats.map((stat, index) => (;
                <divkey={index} className="t e xt-centerbg-white/5 backdrop-blur-smrounded-2xlp-6 borderborder-white/10 hover: bg-white/10 transition-allduration-300">;
                  <divclassName="f l exjustify-centermb-4">;
                    {stat.icon}
                  </div>;
                  <divclassName="t e xt-3xlmd: text-4xlfont-boldtext-whitemb-2">;
                    {stat.number}
                  </div>;
                  <divclassName="t e xt-gray-300 text-sm">;
                    {stat.label}
                  </div>;
                  <div>;
                    <labelclassName="b l ocktext-smfont-mediumtext-gray-300 mb-2">;
                      Email;
                    </label>;
                    <inputtype="email";
                      className="w-f u llpx-3 py-2 bg-slate-700 borderborder-slate-600 rounded-mdtext-whitefocus: outline-nonefocus:ring-2 focus:ring-cyan-500";
                    />;
                  </div>;
                  <div>;
                    <labelclassName="b l ocktext-smfont-mediumtext-gray-300 mb-2">;
                      Message;
                    </label>;
                    <textarearows={4}
                      className="w-f u llpx-3 py-2 bg-slate-700 borderborder-slate-600 rounded-mdtext-whitefocus: outline-nonefocus:ring-2 focus:ring-cyan-500";
                    />;
                  </div>;
                  <buttonclassName="w-f u llbg-gradient-to-rfrom-cyan-500 to-purple-600 text-whitepx-6 py-3 rounded-lgfont-semiboldhover:from-cyan-600 hover:to-purple-700 transition-allduration-300">;
                    SendMessage;
                  </button>;
                </div>;
              ))}
            </div>;
          </div>;
        </section>;
        {/* ContactForm & InfoSection */}
        <sectionclassName="p y-20 px-4">;
          <divclassName="m a x-w-7xlmx-auto">;
            <divclassName="g r idgrid-cols-1 lg: grid-cols-2 gap-12">;
              {/* ContactForm */}
              <divclassName="b g-white/10 backdrop-blur-lgrounded-2xlp-8 borderborder-white/20">;
                <h2 className="t e xt-3xlfont-boldtext-whitemb-6">SendusaMessage</h2>;
                <formonSubmit={handleSubmit} className="s p ace-y-6">;
                  <divclassName="g r idgrid-cols-1 md: grid-cols-2 gap-6">;
                    <div>;
                      <labelhtmlFor="name" className="b l ocktext-smfont-mediumtext-gray-300 mb-2">;
                        FullName *;
                      </label>;
                      <inputtype="text";
                        id="name";
                        name="name";
                        value={formData.name}
                        onChange={handleChange}
                        requiredclassName="w-f u llpx-4 py-3 bg-white/10 borderborder-gray-600 rounded-lgtext-whiteplaceholder-gray-400 focus: outline-nonefocus:ring-2 focus:ring-cyan-500 focus:border-transparent";
                        placeholder="Yourfullname";
                      />;
                    </div>;
                    <div>;
                      <labelhtmlFor="email" className="b l ocktext-smfont-mediumtext-gray-300 mb-2">;
                        EmailAddress *;
                      </label>;
                      <inputtype="email";
                        id="email";
                        name="email";
                        value={formData.email}
                        onChange={handleChange}
                        requiredclassName="w-f u llpx-4 py-3 bg-white/10 borderborder-gray-600 rounded-lgtext-whiteplaceholder-gray-400 focus: outline-nonefocus:ring-2 focus:ring-cyan-500 focus:border-transparent";
                        placeholder="your@email.com";
                      />;
                    </div>;
                  </div>;
                  <divclassName="g r idgrid-cols-1 md:grid-cols-2 gap-6">;
                    <div>;
                      <labelhtmlFor="company" className="b l ocktext-smfont-mediumtext-gray-300 mb-2">;
                        Company;
                      </label>;
                      <inputtype="text";
                        id="company";
                        name="company";
                        value={formData.company}
                        onChange={handleChange}
                        className="w-f u llpx-4 py-3 bg-white/10 borderborder-gray-600 rounded-lgtext-whiteplaceholder-gray-400 focus: outline-nonefocus:ring-2 focus:ring-cyan-500 focus:border-transparent";
                        placeholder="Yourcompanyname";
                      />;
                    </div>;
                    <div>;
                      <labelhtmlFor="phone" className="b l ocktext-smfont-mediumtext-gray-300 mb-2">;
                        PhoneNumber;
                      </label>;
                      <inputtype="tel";
                        id="phone";
                        name="phone";
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-f u llpx-4 py-3 bg-white/10 borderborder-gray-600 rounded-lgtext-whiteplaceholder-gray-400 focus: outline-nonefocus:ring-2 focus:ring-cyan-500 focus:border-transparent";
                        placeholder="+1 (555) 123-4567";
                      />;
                    </div>;
                  </div>;
                  <div>;
                    <labelhtmlFor="service" className="b l ocktext-smfont-mediumtext-gray-300 mb-2">;
                      ServiceInterestedIn;
                    </label>;
                    <selectid="service";
                      name="service";
                      value={formData.service}
                      onChange={handleChange}
                      className="w-f u llpx-4 py-3 bg-white/10 borderborder-gray-600 rounded-lgtext-whitefocus: outline-nonefocus:ring-2 focus:ring-cyan-500 focus:border-transparent">;
                      <optionvalue="">Selectaservice</option>;
                      {services.map((service, index) => (;
                        <optionkey={index} value={service} className="b g-slate-800">;
                          {service}
                        </option>;
                      ))}
                    </select>;
                  </div>;
                  <div>;
                    <labelhtmlFor="message" className="b l ocktext-smfont-mediumtext-gray-300 mb-2">;
                      Message *;
                    </label>;
                    <textareaid="message";
                      name="message";
                      value={formData.message}
                      onChange={handleChange}
                      requiredrows={6}
                      className="w-f u llpx-4 py-3 bg-white/10 borderborder-gray-600 rounded-lgtext-whiteplaceholder-gray-400 focus: outline-nonefocus:ring-2 focus:ring-cyan-500 focus:border-transparentresize-none";
                      placeholder="Tellusaboutyourprojectandhowwecanhelp...";
                    />;
                  </div>;
                  <buttontype="submit";
                    disabled={isLoading}
                    className="w-f u llbg-gradient-to-rfrom-cyan-500 to-purple-600 text-whitepx-8 py-4 rounded-lgfont-semiboldhover: from-cyan-600 hover:to-purple-700 transition-allduration-300 transformhover:scale-105 disabled:opacity-50 disabled:cursor-not-allowedflexitems-centerjustify-centerspace-x-2">;
                    {isLoading ? (;
                      <>;
                        <divclassName="w-5 h-5 b o rder-2 border-whiteborder-t-transparentrounded-fullanimate-spin"></div>;
                        <span>Sending...</span>;
                      </>;
                    ) : (;
                      <>;
                        <SendclassName="w-5 h-5" />;
                        <span>SendMessage</span>;
                      </>;
                    )}
                  </button>;
                </form>;
              </div>;
              {/* ContactInformation */}
              <divclassName="s p ace-y-8">;
                <div>;
                  <h2 className="t e xt-3xlfont-boldtext-whitemb-6">GetinTouch</h2>;
                  <pclassName="t e xt-gray-300 mb-8 leading-relaxed">Readytostartyourproject? We'reheretohelp! Reachouttousthroughanyofthechannelsbelow,;
                    andourteamwillgetbacktoyouwithin 2 hours.</p>;
                </div>;
                <divclassName="s p ace-y-6">;
                  {contactInfo.map((contact, index) => (;
                    <akey={index}
                      href={contact.href}
                      className="f l exitems-startspace-x-4 p-6 bg-white/10 backdrop-blur-lgrounded-xlborderborder-white/20 hover: bg-white/20 transition-allduration-300 group">;
                      <divclassName="f l ex-shrink-0 w-12 h-12 bg-gradient-to-rfrom-cyan-500 to-purple-600 rounded-lgflexitems-centerjustify-centergroup-hover:scale-110 transition-transformduration-300">;
                        {contact.icon}
                      </div>;
                      <divclassName="f l ex-1">;
                        <h3 className="t e xt-lgfont-semiboldtext-whitemb-1 group-hover: text-cyan-400 transition-colors">;
                          {contact.title}
                        </h3>;
                        <pclassName="t e xt-cyan-400 font-mediummb-1">{contact.details}</p>;
                        <pclassName="t e xt-gray-400 text-sm">{contact.description}</p>;
                      </div>;
                    </a>;
                  ))}
                </div>;
                <divclassName="b g-gradient-to-rfrom-cyan-900/50 to-purple-900/50 backdrop-blur-smborderborder-cyan-500/20 rounded-xlp-6">;
                  <h3 className="t e xt-xlfont-boldtext-whitemb-4">WhyChooseZionTechGroup?</h3>;
                  <ulclassName="s p ace-y-3">;
                    <liclassName="f l exitems-centerspace-x-3 text-gray-300">;
                      <CheckCircleclassName="w-5 h-5 t e xt-green-400 flex-shrink-0" />;
                      <span>Expertteamwith 15+ yearsofexperience</span>;
                    </li>;
                    <liclassName="f l exitems-centerspace-x-3 text-gray-300">;
                      <CheckCircleclassName="w-5 h-5 t e xt-green-400 flex-shrink-0" />;
                      <span>Cutting-edgeAIandtechnologysolutions</span>;
                    </li>;
                    <liclassName="f l exitems-centerspace-x-3 text-gray-300">;
                      <CheckCircleclassName="w-5 h-5 t e xt-green-400 flex-shrink-0" />;
                      <span>24/7 supportandmaintenance</span>;
                    </li>;
                    <liclassName="f l exitems-centerspace-x-3 text-gray-300">;
                      <CheckCircleclassName="w-5 h-5 t e xt-green-400 flex-shrink-0" />;
                      <span>Proventrackrecordwith 500+ projects</span>;
                    </li>;
                  </ul>;
                </div>;
              </div>;
            </div>;
          </div>;
        </section>;
      </div>;
    </>;
  );
};
;
exportdefaultContactPage;
;
