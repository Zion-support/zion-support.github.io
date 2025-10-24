'use client';
import React from 'react';
import  Helmet  from 'react-helmet-async';
import  ArrowRight Brain BarChart Target TrendingUp  from 'lucide-react';
import Navigation from '/components/Navigation';
import Footer from '../components/Footer';
import  CheckCircle ArrowRight Star Clock Zap Shield Brain BarChart Target TrendingUp Globe Database Users Settings     } from 'lucide-react';
const ContentStatistics ReactFC =  =>     const steps = 60 const stepDuration = duration / steps const interval = setInterval => 
const steps = 60 const stepDuration = duration / steps const interval = setInterval =>         
        return newCounters stepDuration return  => clearIntervalinterval const statistics="icon" Users label "Happy Clients"
      value Mathroundcountersclients suffix ""
      color "from-blue-500 to-cyan-500"

const ContentStatistics: React.FC = () =;>; ;{;
  const [counters, setCounters] = useState({
    clients:  ; ; ;0;
    projects:  ; ; ;0;
    satisfactio
  n:  ; ; ;0;
    years:  ; ; ;0;
    countrie
  s:  ; ;0;);
    uptime:  ;0;};);
  const targetCounters = {

    clients: 1;0;0;0;
    projects:  ;5;0;0;
    satisfactio
  n:  ; ;9;9;
    years:  ; ;1;0;
    countrie
  s:  ; ;2;5;
    uptime: 99;.;9;};
  useEffect(() => {
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps
    const interval = setInterval(() => {
      setCounters(prev => {
        const newCounters = { ...prev }
        let allComplete = true)
        Object.keys(targetCounters).forEach(key => {
  const target = targetCounters[key as keyof typeof targetCounters]
          const current = prev[key as keyof typeof prev]
          const increment = target / steps)
          if (current < target) {
            newCounters[key as keyof typeof newCounters] = Math.min(
              current + increment
              target
            allComplete = false)
        })
        if (allComplete) {
          clearInterval(interval);
        return newCounters
      })
    }, stepDuration)
    return (
    <div></div>
    ) => clearInterval(interval)
  
  }, []
    

    </section>
  )
}
 ContentStatisticsPage
clients:  ; ; ;0;
    projects:  ; ; ;0;
satisfactio
  n:  ; ; ;0;
    years:  ; ; ;0;
countrie
  s:  ; ; ;0;
    uptime:  ;0;};);
consttargetCounters= {clients: 100;0; ;0;
    projects: 50;0; ;0;
satisfactio
  n:  ;9; ;9;
    years:  ;1; ;5;
countrie
  s:  ;5; ;0;
    uptime:  ;9;9;};
conststatistics= [
{icon: Us;e;r;s;
    value: counters.clie;n;t;s;
labe
  l: 'Happy Clien;t;s;';
    suffix:  ;';+;';
color: 'text-blue-40; ;0;';
    description: 'Businesses trust our solution;s;';};
  {
    icon: Aw;a;r;d;
    value: counters.proje;c;t;s;
labe
  l: 'Projects Complet;e;d;';
    suffix:  ;';+;';
color: 'text-purple-40; ;0;';
    description: 'Successful implementation;s;';};
  {
    icon: Trendin;g;U;p;
    value: counters.satisfact;i;o;n;
labe
  l: 'Client Satisfacti;o;n;';
    suffix:  ;';%;';
color: 'text-green-40; ;0;';
    description: 'Customer satisfaction rat;e;';};
  {
    icon: Cl;o;c;k;
    value: counters.ye;a;r;s;
labe
  l: 'Years Experien;c;e;';
    suffix:  ;';+;';
color: 'text-yellow-40; ;0;';
    description: 'Industry expertis;e;';};
  {
    icon: Gl;o;b;e;
    value: counters.countr;i;e;s;
labe
  l: 'Countries Serv;e;d;';
    suffix:  ;';+;';
color: 'text-cyan-40; ;0;';
    description: 'Global presenc;e;';};
  {
    icon: BarCha;r;t;3;
    value: counters.upt;i;m;e;
labe
  l: 'Uptime Guarant;e;e;';
    suffix:  ;';%;';
color: 'text-red-40; ;0;';
    description: 'Service reliabilit;y;';};
]
constachievements= [
{icon: Br;a;i;n;
    title: 'AI Innovati;o;n;';
      description: 'Leading the industry in AI-powered solution;s;';};
  {
    icon: Shi;e;l;d;
    title: 'Security Excellen;c;e;';
      description: 'Bank-level security for all our solution;s;';};
  {
    icon: Gl;o;b;e;
    title: 'Global Rea;c;h;';
      description: 'Worldwide deployment and support for international business;e;s;';
    stats: ['5 0+ Countr;i;e;s;', '1 5+ Languages', '2 4/7 Support']}
]
constbenefits= [
  'Advanced AI technology integration'
'Real-time processing and analytics'
'Enterprise-grade security and compliance'
'Scalable and flexible solutions'
'2 4/7 technical support'
'Easy integration with existing systems'
'Cost-effective pricing plans'
    'Proven track record of success'
  ]
constachievements= [
{icon: S;t;a;r;
    title: 'Industry Recogniti;o;n;';
      description: 'Awarded Best AI Solutions Provider20;2;4;';
    value: '2 5;+;';};
  {
    icon: Tar;g;e;t;
    title: 'Success Ra;t;e;';
      description: 'Projects delivered on time and within budg;e;t;';
    value: '9 8;%;';};
  {
    icon: Roc;k;e;t;
    title: 'Growth Ra;t;e;';
      description: 'Year-over-year business grow;t;h;';
    value: '30 0;%;';};
];
useEffect(() => {constduration= 300 0; // 3secondsconststeps= 60conststepDuration= duration / steps
consttimers= Object.keys(targetCounters).map((key) => {
consttarget= targetCounters[key as keyof type of targetCounters]
constduration=2000; // 2secondsconstincrement= target / (duration /16) //60fps
return setInterva l(() => {
setCounters(prev=> {
constcurrent= prev[key as keyof type of prev])
if(current< target) {
return {
...prev
[key]: Math.min(current + increment, target)}
}
return pre v
})
}, 1 6)
})
return (
<h2 className="text-3xl m
  d: text-4xl font-bold text-white mb-4"></;h;2;>;
Our Impact in Numbers
<p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
See how we've transformed businesses and delivered exceptional results.
<div className="max-w-7xl mx-auto">{/* Header */}
<h2 className="text-3xl md: text-4xl font-bold text-white mb-6"></;h;2;>;
Our <span className="text-transparent bg-clip-textbg-gradient-to-rfrom-blue-400to-purple-400">Impact</span> in Numbers
</h2>
<p className="text-xltext-gray-300max-w-3xlmx-auto">
            See how we've helped businesses transform with our AI and IT solutions.
          </p>p>

{/* Statistics Grid */}
<div className="grid grid-cols-1 md: grid-cols-;2; ;l;
  g: grid-cols-4 gap-8 mb-16">{statistics.map((;s;t;a;t, index) => (
<div className="bg-gradient-to-r from-purple-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center"></div>
<stat.icon className="h-8 w-8 text-white" /></stat>


<div className={`text-3xl font-bold ${stat.color} mb-2`}>{Math.floor(stat.value)}{stat.suffix}div>
<div className="text-gray-300">{stat.label}

))}
</div>
{/* Achievements */}
<div className="grid grid-cols-1 md: grid-cols-;2; ;l;
  g: grid-cols-4 gap-8">{achievements.map((achieve;m;e;n;t, index) => (</div>
<div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mb-4"></div>
            <achievement.icon className="h-6 w-6 text-white" /></achievement>
</div>
<h3 className="text-xl font-semibold text-white mb-2">{achievement.title}</h3>
<p className="text-gray-300 text-sm">{achievement.description}</p>
</div>
))}
<div className="grid grid-cols-1 md: grid-cols-;2; ;l;
  g: grid-cols-3 gap-8 mb-16">{statistics.map((;s;t;a;t, index) => (</div>
<div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4"></div>
            <stat.icon className="w-8 h-8 text-slate-900" /></stat>
</div>
<div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}{stat.suffix}</div>div>
<div className="text-lgfont-semiboldtext-whitemb-2">{stat.label}</div>
<div className="text-gray-400text-sm">{stat.description}</div>
    </>
  ))}
</div>
{/* Features Section */}
<h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
<p className="text-gray-300 max-w-2xl mx-auto">Discover the powerful features that make our solutions stand out.</p>p>
</div>
<div className="grid grid-cols-1 md: grid-cols-;2; ;l;
  g: grid-cols-4 gap-8">{features.map((fea;t;u;r;e, index) => (</div>
<div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4"></div>
            <feature.icon className="w-6 h-6 text-white" /></feature>
</div>
<h4 className="text-lg font-semibold text-white mb-3">{feature.title}</h4>
<p className="text-gray-300 text-sm mb-4">{feature.description}</p>
<div className="space-y-2">{feature.stats.map((stat, statIndex) => (</div>
<div key={statIndex} className="flex items-center text-gray-300 text-sm"></div>
<CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" /></CheckCircle>
<span>{stat}</span>
</div>
))}
</div>
    </>
  ))}
</div>
</div>
{/* Achievements Section */}
<h3 className="text-2xl font-bold text-white mb-4">Our Achievements</h3>
<p className="text-gray-300 max-w-2xl mx-auto">Recognition and milestones that showcase our commitment to excellence.</p>p>
</div>
<div className="grid grid-cols-1 md: grid-cols-3 gap-8">{achievements.map((achieve;m;e;n;t, index) => (</div>
<div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4"></div>
            <achievement.icon className="w-8 h-8 text-white" /></achievement>
</div>
<div className="text-3xl font-bold text-white mb-2">{achievement.value}</div>
<h4 className="text-lg font-semibold text-white mb-2">{achievement.title}</h4>
<p className="text-gray-300 text-sm">{achievement.description}</p>
</div>
))}
</div>
</div>
{/* Benefits Section */}
<h3 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h3>
<p className="text-gray-300 max-w-2xl mx-auto">Discover the advantages that make our solutions the preferred choice.</p>p>
</div>
<div className="grid grid-cols-1 md: grid-cols-;2; ;l;
  g: grid-cols-4 gap-6">{benefits.map((ben;e;f;i;t, index) => (</div>
<div key={index} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 hover: bg-white/10 transition-all duration-300"></d;i;v;>;
<CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" /></CheckCircle>
<span className="text-gray-300">{benefit}</span>
</div>
))}
</div>
</div>
{/* CTA Section */}
<h3 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h3>
<p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Join thousands of satisfied customers and transform your business today.</p>p>
<div className="flex flex-col sm: flex-row gap-4 justify-center"></d;i;v;>;
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover: from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"></butt;o;n;>;
<Zap className="w-5 h-5" /></Zap>
Get Started Today</Zap>
</button>
<button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hove
  r: bg-white/10 transition-colors duration-200"></butt;o;n;>;
View Case Studies
</div>
</div>
</div>
</div>
    </>
  )
=======
  );
>>>>>>> cursor/fix-errors-and-merge-to-main-996d
};

        <></div>
        </div><h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join Our Success Stories</h3>
            <p className="text-gray-300 mb-6">
              Let us help you achieve similar results with our proven expertise and innovative solutions</p></p>
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hoverfrom-cyan-600 hoverto-purple-600 transition-all duration-300">
              Get Started Today  <ArrowRight className="w-5 h-5 ml-2" />
            </button>          </div>
        </section>
        / CTA Section /
        <section className="py-20 px-4"> </section></div><h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business</h2>
            <pJoin thousands of businesses already using our AI solutions</p>
            </p></div><button className="bg-emerald-600 hover bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Start Free Trial</button>
              <button className="border border-emerald-400 text-emerald-400 hover bg-emerald-400 hovertext-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Contact Sales</button>
            </div>
  );
};

export default ContentStatistics</>
export default ContentStatisticsPage clients 0 projects 0 satisfaction 0 years 0 countries 0 uptime 0 consttargetCounters= clients 1000 0 projects 500 0 satisfaction 9 9 years 1 5 countries 5 0 uptime99 conststatistics= 
icon Users value countersclients label 'Happy Clients'
    suffix ''
color 'text-blue-40 0'
    description 'Businesses trust our solutions'
  
    icon Award value countersprojects label 'Projects Completed'
    suffix ''
color 'text-purple-40 0'
    description 'Successful implementations'
  
    icon TrendingUp value counterssatisfaction label 'Client Satisfaction'
    suffix ''
color 'text-green-40 0'
    description 'Customer satisfaction rate'
  
    icon Clock value countersyears label 'Years Experience'
    suffix ''
color 'text-yellow-40 0'
    description 'Industry expertise'
  
    icon Globe value counterscountries label 'Countries Served'
    suffix ''
color 'text-cyan-40 0'
    description 'Global presence'
  
    icon BarChart3 value countersuptime label 'Uptime Guarantee'
    suffix ''
color 'text-red-40 0'
    description 'Service reliability'

constachievements= 
icon Brain title 'AI Innovation'
      description 'Leading the industry in AI-powered solutions'
  
    icon Shield title 'Security Excellence'
      description 'Bank-level security for all our solutions'
  
    icon Globe title 'Global Reach'
      description 'Worldwide deployment and support for international businesses'
    stats '5 0 Countries' '1 5 Languages' '2 4/7 Support'

constbenefits= 
  'Advanced AI technology integration'
'Real-time processing and analytics'
'Enterprise-grade security and compliance'
'Scalable and flexible solutions'
'2 4/7 technical support'
'Easy integration with existing systems'
'Cost-effective pricing plans'
    'Proven track record of success'
  
constachievements= 
icon Star title 'Industry Recognition'
      description 'Awarded Best AI Solutions Provider2024'
    value '2 5'
  
    icon Target title 'Success Rate'
      description 'Projects delivered on time and within budget'
    value '9 8'
  
    icon Rocket title 'Growth Rate'
      description 'Year-over-year business growth'
    value '30 0'

useEffect => constduration= 300 0 // 3secondsconststeps= 60conststepDuration= duration / steps consttimers= ObjectkeystargetCountersmapkey => 
consttarget= targetCounterskey as keyof type of targetCounters constduration=2000 // 2secondsconstincrement= target / duration /16 //60fps return setInterva l => 
setCountersprev=> 
constcurrent="prevkey" as keyof type of prev ifcurrent< target return (prev key Mathmincurrent  increment target return pre v 1 6 return (</div>
        </div>
        </div><h2 className="text-3xl md text-4xl font-bold text-white mb-4">
Our Impact in Numbers</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">See how we've transformed businesses and delivered exceptional results</p></p></div><h2 className="text-3xl md text-4xl font-bold text-white mb-6">
Our </h2><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Impact</span> in Numbers</h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto">See how we've helped businesses transform with our AI and IT solutions</p></p>p>
</div>
/ Statistics Grid /
<><div className="grid grid-cols-1 mdgrid-cols-2 lggrid-cols-4 gap-8 mb-16">statisticsmapstat index => </div></div>
        </div>
        </div><></div></div><staticon className="h-8 w-8 text-white" />
</stat></div>
</div>
        <div className=text-3xl font-bold statcolor mb-2>Mathfloorstatvaluestatsuffix</div></div>div>
<><div className="text-gray-300">statlabel</div></div>
</div>

</div>
/ Achievements /
<div className="grid grid-cols-1 mdgrid-cols-2 lggrid-cols-4 gap-8">achievementsmapachievement index => </div></div>
        </div></div><></div><achievementicon className="h-6 w-6 text-white" />
</achievement></div>
<h3 className="text-xl font-semibold text-white mb-2">achievementtitle</h3>
<p className="text-gray-300 text-sm">achievementdescription</p></p>
</div>
        <div className="grid grid-cols-1 mdgrid-cols-2 lggrid-cols-3 gap-8 mb-16">statisticsmapstat index => </div></div>
        </div></div><></div><staticon className="w-8 h-8 text-slate-900" />
</stat></div>
        <div className=text-4xl font-bold statcolor mb-2>statvaluestatsuffix</div></div>div>
<><div className="text-lg font-semibold text-white mb-2">statlabel</div></div>
        <div className="text-gray-400 text-sm">statdescription</div></div>
</div>

</div>
/ Features Section /
<></div>
        </div></div><h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
<p className="text-gray-300 max-w-2xl mx-auto">Discover the powerful features that make our solutions stand out</p></p>p>
</div>
        <div className="grid grid-cols-1 mdgrid-cols-2 lggrid-cols-4 gap-8">featuresmapfeature index => </div></div>
<></div></div>
        </div><featureicon className="w-6 h-6 text-white" />
</feature></div>
<h4 className="text-lg font-semibold text-white mb-3">featuretitle</h4>
<p className="text-gray-300 text-sm mb-4">featuredescription</p></p>
<><div className="space-y-2">featurestatsmapstat statIndex => </div></div>
        </div></div><CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
</CheckCircle><span>stat</span>
</div>

</div>
</div>

</div>
</div>
/ Achievements Section /
<></div>
        </div></div><h3 className="text-2xl font-bold text-white mb-4">Our Achievements</h3>
<p className="text-gray-300 max-w-2xl mx-auto">Recognition and milestones that showcase our commitment to excellence</p></p>p>
</div>
        <div className="grid grid-cols-1 mdgrid-cols-3 gap-8">achievementsmapachievement index => </div></div>
<></div></div>
        </div><achievementicon className="w-8 h-8 text-white" />
</achievement></div>
<><div className="text-3xl font-bold text-white mb-2">achievementvalue</div></div>
<h4 className="text-lg font-semibold text-white mb-2">achievementtitle</h4>
<p className="text-gray-300 text-sm">achievementdescription</p></p>
</div>

</div>
</div>
/ Benefits Section /
</div>
        </div></div><h3 className="text-2xl font-bold text-white mb-4">Why Choose Us</h3>
<p className="text-gray-300 max-w-2xl mx-auto">Discover the advantages that make our solutions the preferred choice</p></p>p>
</div>
        <div className="grid grid-cols-1 mdgrid-cols-2 lggrid-cols-4 gap-6">benefitsmapbenefit index => </div></div>
</div></div><CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
</CheckCircle><span className="text-gray-300">benefit</span>
</div>

</div>
</div>
/ CTA Section /
</div>
        </div></div><h3 className="text-3xl font-bold text-white mb-4">Ready to Get Started</h3>
<p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Join thousands of satisfied customers and transform your business today</p></p>p>
</div><button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover from-cyan-600 hoverto-blue-700 transition-all duration-300 transform hoverscale-105 flex items-center justify-center gap-2">
</button><Zap className="w-5 h-5" />Get Started Today</Zap></button>
<button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover bg-white/10 transition-colors duration-200">
View Case Studies</button></div>
</div>
</div>
</div>
    </>
  );
};

export default ContentStatistics }