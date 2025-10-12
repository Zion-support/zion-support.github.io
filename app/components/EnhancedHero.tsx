import React from 'react';
import {ArrowRight    } from 'lucide-react';
'useclient';
constEnhancedHero: React.FC = () => {constbenefits = ['AdvancedAItechnologyintegration',;
    'Real-timeprocessingandanalytics',;
    'Enterprise-gradesecurityandcompliance',;
    'Scalableandflexiblesolutions',;
    '24/7 technicalsupport',;
    'Customimplementationandtraining';
  ];
  constcontactInfo = [{
      icon: Phone,;
      title: 'CallUs',;
      details: '+1 (555) 123-4567',;
      description: 'Mon-Fri 9 AM-6 PMPST';
    },;
    {icon: Mail,;
      title: 'EmailUs',;
      details: 'contact@ziontechgroup.com',;
      description: 'Werespondwithin 24 hours';
    },;
    {icon: MapPin,;
      title: 'VisitUs',;
      details: 'SanFrancisco, CA',;
      description: 'Scheduleameeting';
    }
  ];
  return (;
    <divclassName="r e lativemin-h-screenbg-gradient-to-brfrom-slate-900 via-purple-900to-slate-900overflow-hidden">;
      {/* BackgroundEffects */}
      <divclassName="a b soluteinset-0bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)]animate-pulse" />;
      <divclassName="a b soluteinset-0bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)]animate-pulse" style="{{" animationDelay: '1 s' }} / />;
      {/* MainContent */}
      <divclassName="r e lativez-10 flexflex-collg: flex-rowitems-centermin-h-screen">;
        {/* LeftContent */}
        <divclassName="f l ex-1 px-4 sm: px-6lg:px-8py-20">;
          <divclassName="m a x-w-2xl">;
            <h1 className="t e xt-4xlsm:text-5 xlmd:text-6 xlfont-boldtext-whitemb-6leading-tight" />;
              TransformYourBusinesswith{' '}
    <>;
              <spanclassName="b g-gradient-to-rfrom-cyan-400 to-purple-400bg-clip-texttext-transparent">AI & ITSolutions;
              </span>;
            </h1>;
            <pclassName="t e xt-lgsm: text-xltext-gray-300 mb-8leading-relaxed">Harnessthepowerofcutting-edgeartificialintelligenceandinformationtechnologytodriveinnovation, efficiency, andgrowthinyourorganization.</p>;
            {/* BenefitsList */}
            <divclassName="m b-8">;
              <h3 className="t e xt-lgfont-semiboldtext-whitemb-4"  >WhyChooseUs?</h3>;
              <divclassName="g r idgrid-cols-1sm: grid-cols-2gap-3">;
                {benefits.map((benefit, index) => (;
                  <divkey="{index}" className="f l exitems-centertext-gray-300" />;
                    <CheckCircleclassName="h-5 w-5 t e xt-cyan-400mr-3flex-shrink-0" />;
                    <spanclassName="t e xt-sm"  >{benefit}</span>;
                  </div>;
                ))}
    <>;
              </div>;
            {/* CTAButtons */}
            <divclassName="f l exflex-colsm: flex-rowgap-4mb-8">;
              <buttonclassName="c y ber-buttonpx-8 py-4 text-lgfont-semiboldinline-flexitems-centerjustify-center" />;
                GetStarted;
    <>;
                <ArrowRightclassName="m l-2h-5w-5" />;
              </button>;
              <buttonclassName="c y ber-button-secondarypx-8 py-4text-lgfont-semibold">LearnMore;
              </button>;
            </div>;
            {/* ContactInfo */}
            <divclassName="g r idgrid-cols-1sm: grid-cols-3gap-4">;
              {contactInfo.map((contact, index) => (;
                <divkey="{index}" className="f l exitems-centertext-gray-300" />;
                  <contact.iconclassName="h-5 w-5 t e xt-cyan-400mr-3flex-shrink-0" />;
                  <div />;
                    <divclassName="t e xt-smfont-mediumtext-white"  >{contact.title}</div>;
                    <divclassName="t e xt-xstext-gray-400"  >{contact.details}</div>;
                </div>;
              ))}
    <>;
            </div>;
        </div>;
        {/* RightContent - VisualElements */}
        <divclassName="f l ex-1 px-4 sm: px-6lg:px-8py-20">;
          <divclassName="r e lative">;
            {/* FloatingCards */}
            <divclassName="a b solutetop-0 left-0 w-64 h-40 bg-gradient-to-brfrom-cyan-500/20 to-purple-500/20 rounded-2 xlbackdrop-blur-smborderborder-cyan-500/30animate-float">;
              <divclassName="p-6">;
                <BrainclassName="h-8 w-8t e xt-cyan-400mb-3" />;
                <h3 className="t e xt-lgfont-boldtext-whitemb-2"  >AISolutions</h3>;
                <pclassName="t e xt-smtext-gray-300">MachineLearning & Analytics</p>;
              </div>;
    <>;
            <divclassName="a b solutetop-20 right-0 w-64 h-40 bg-gradient-to-brfrom-purple-500/20 to-pink-500/20 rounded-2 xlbackdrop-blur-smborderborder-purple-500/30animate-float" style="{{" animationDelay: '1 s' }} />;
              <divclassName="p-6">;
                <ShieldclassName="h-8 w-8t e xt-purple-400mb-3" />;
                <h3 className="t e xt-lgfont-boldtext-whitemb-2"  >Security</h3>;
                <pclassName="t e xt-smtext-gray-300">Cybersecurity & Compliance</p>;
              </div>;
    <>;
            <divclassName="a b solutetop-40 left-1/2 transform -translate-x-1/2 w-64 h-40 bg-gradient-to-brfrom-green-500/20 to-blue-500/20 rounded-2 xlbackdrop-blur-smborderborder-green-500/30animate-float" style="{{" animationDelay: '2 s' }} />;
              <divclassName="p-6">;
                <GlobeclassName="h-8 w-8t e xt-green-400mb-3" />;
                <h3 className="t e xt-lgfont-boldtext-whitemb-2"  >CloudServices</h3>;
                <pclassName="t e xt-smtext-gray-300">Infrastructure & Migration</p>;
              </div>;
          </div>;
      </div>;
  );
};
    </>;
