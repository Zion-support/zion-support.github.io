 cursor/fix-errors-and-merge-to-main-6ce7;
 origin/cursor/analyze-improve-and-deploy-application-1573;
const ContentStatistics: React.FC = () => {
}
  const [counters, setCounters] = useState({
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247;
    clients: 0,
    projects: 0,
    satisfaction: 0,
years: 0;
 cursor/analyze-improve-and-deploy-application-8fa5;
 cursor/fix-errors-and-merge-to-main-cd7c;
 cursor/website-audit-and-update-with-deployment-c0e8
;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232;
  const targetCounters = {clients: 500,
 cursor/fix-errors-and-merge-to-main-cd7c;
 cursor/website-audit-and-update-with-deployment-c0e8;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
;
 origin/cursor/analyze-improve-and-deploy-application-1460;
    {
      id: '1',
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: 'Happy Customers',
      value: 10000,
      suffix: '+',
 cursor/website-audit-and-update-with-deployment-c0e8;
 cursor/fix-errors-and-merge-to-main-6ce7;
    },
        {
      icon: Shield,
      title: 'Security Excellence',
      description: 'Bank-level security for all our solutions'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247;
    },
        {
      icon: Globe,
      title: 'Global Reach',
const timers = Object.keys(targetCounters).map(key => {
      const target = targetCounters[key as keyof typeof targetCounters];
 cursor/website-audit-and-update-with-deployment-c0e8;
      const duration = 2000; // 2 seconds;
      const increment = target / (duration / 16); // 60fps
      ;
 cursor/website-audit-and-update-with-deployment-c0e8;
          if (current < target) {
            return {
              ...prev,
              [key]: Math.min(current + increment, target)
            };
 cursor/analyze-improve-and-deploy-application-8fa5;
 cursor/fix-errors-and-merge-to-main-cd7c;
 cursor/website-audit-and-update-with-deployment-c0e8;
          }
// Clear timer after duration;
 origin/cursor/analyze-improve-and-deploy-application-1460
;
    const element = document.getElementById('statistics-section');
    if (element) {
      observer.observe(element);
    }
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!isVisible) return;
    const animateCounters = () => {
      stats.forEach((stat) => {
        const target = targetCounters[stat.id];
        const duration = 2000; // 2 seconds;
        const increment = target / (duration / 16); // 60fps;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounters(prev => ({
            ...prev,
            [stat.id]: Math.floor(current)
          }));
        }, 16);
      });
    };
    animateCounters();
  }, [isVisible, stats, targetCounters]);
  return (
Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Impact</span> cursor/analyze-improve-and-deploy-application-8fa5;
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Numbers that speak for themselves - see how we've transformed businesses worldwide.
 origin/cursor/analyze-improve-and-deploy-application-1460;
          </p><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Impact in Numbers</h2>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
Trusted by </p><span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our proven track record speaks for itself. See why thousands of companies choose Zion Tech Group for their AI and IT needs. cursor/website-audit-and-update-with-deployment-c0e8</p>
          </p>
        </div>
        {/* Statistics Grid */}
<div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300" /><div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center`} /><stat.icon className={`w-8 h-8 ${stat.color}`} /> cursor/analyze-improve-and-deploy-application-8fa5;
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {Math.floor(stat.value)}{stat.suffix}</div>
                </div>
<div className="text-gray-300">{stat.label}</div> cursor/analyze-improve-and-deploy-application-8fa5;
              </div>
 origin/cursor/analyze-improve-and-deploy-application-0fac;
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our </h2><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Impact</span> in Numbers;
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the measurable impact of our AI and IT solutions across industries worldwide</p>
          </p>
        </div>
        {/* Main Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {statistics.map((stat, index) => (
            </div><div key={index} className="text-center bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400 transition-all duration-300 group" /><div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`} /><stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                {stat.value.toLocaleString()}{stat.suffix}</div>
              </div>
<div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
              <div className="text-gray-400 text-sm">{stat.description}</div> origin/cursor/analyze-improve-and-deploy-application-0fac;
 origin/cursor/analyze-improve-and-deploy-application-1232;
 cursor/fix-errors-and-merge-to-main-6ce7;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247;
            </div>
          ))};
        </div>
 origin/cursor/analyze-improve-and-deploy-application-1232;
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
      </section>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" /><div className="max-w-4xl mx-auto text-center" /><div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12" /><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?</h2>
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your contentstatistics needs and get a customized solution.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" /><button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center" /><Phone className="mr-2 h-5 w-5" />
                Call Now;
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center" /><Mail className="mr-2 h-5 w-5" />
                Email Us;
              </button>
</div>
          </div>
 cursor/analyze-improve-and-deploy-application-8fa5;
 cursor/fix-errors-and-merge-to-main-cd7c;
 cursor/website-audit-and-update-with-deployment-c0e8;
        </div>
      </div>
    </div>
)
}
export default ContentStatistics;
 origin/cursor/analyze-improve-and-deploy-application-1573
;