        {/* Search and Filters */}
        <motion.div;
          initial = {;
  { opacity: 0,
  y: 20;
}}
          animate = {;
  { opacity: 1,
  y: 0;
}}
          transition={{ delay: 0.2 }}
          className="mb-12">;
          <div  className="flex flex - col lg:flex - row gap-6 items - center justify -between">;
            {/* Search Bar */}
            <div  className="relative flex - 1 max - w-md">              <input;
                type="text";
                placeholder="Search AI services...";
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent";
              />;
            </div>;

            {/* Sort Options */}
            <select;
              value={sortBy}
              onChange={ (e) => setSortBy(e.target.value as 'name' | 'price' | 'popularity') }
              className="px-4 py-3 bg-white / 10 backdrop - blur - sm border border-white / 20 rounded-lg text-white focus:outline - none focus:ring - 2 focus:ring - purple -500">;
              <option value="popularity">Most Popular</option>;
              <option value="name">Name A - Z</option>;
              <option value="price">Price: Low to High</option>;
            </select>;
          </div>;
        </motion.div>;

        {/* Category Filters */}
        <motion.div;
          initial = {;
  { opacity: 0,
  y: 20;
}}
          animate = {;
  { opacity: 1,
  y: 0;
}}
          transition={{ delay: 0.3 }}
          className="mb-12">;
          <div  className="flex flex - wrap gap-4 justify -center">;
            {categories.map((category) => (<button     key={category.id}
                onClick={ () => setSelectedCategory(category.id) }
                className={`flex items - center gap-2 px-6 py-3 rounded-full border transition - all duration - 300 ${selectedCategory === category.id;
                    ? 'bg-purple - 600 border-purple - 500 text-white';
                    : 'bg-white / 10 border-white / 20 text-gray - 300 hover:bg-white / 20';
}`}              >;
                {categories.map(category => (;
                  <option key={category.id} value={category.id}>;
                    {category.name}
                  </option>;
                ))}
              </select>;
              <select;
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">;
                <option value="popularity">Sort by Popularity</option>;
                <option value="name">Sort by Name</option>;
                <option value="price">Sort by Price</option>;
              </select>;
            </div>;
          </div>;
        </div>;

        {/* Services Grid */}
        <motion.div;
          initial = {;
  { opacity: 0,
  y: 20;
}}
          animate = {;
  { opacity: 1,
  y: 0;
}}
          transition={{ delay: 0.4 }}
          className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap-8">;
          <AnimatePresence>;
            {sortedServices.map((service, index) => (<motion.div;
                key={service.id}
                initial = {;
  { opacity: 0,
  y: 20;
}}
                animate = {;
  { opacity: 1,
  y: 0;
}}
                exit = {;
  { opacity: 0,
  y: -20;
}}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white / 5 backdrop - blur - sm border border-white / 10 rounded-2xl p - 6 hover:bg-white / 10 transition - all duration - 300 hover:border-purple -500 / 50">;
                {/* Status Badge */}
                <div  className="absolute top - 4 right -4">;
                  <span className={`px-3 py-1 rounded-full text-xs font - medium ${service.status === 'active' ? 'bg-green - 500 / 20 text-green - 400' :;
                    service.status === 'beta' ? 'bg-yellow-500 / 20 text-yellow-400' :;
                    'bg-gray - 500 / 20 text-gray - 400';
}`}>;
                    {service.status === 'active' ? 'Active' : service.status === 'beta' ? 'Beta' : 'Coming Soon'}
                  </span>;
                </div>;

                {/* Service Icon */}
                <div  className="mb-4">;
                  <div  className="w-16 h-16 bg-gradient - to - br from - purple - 500 to - blue - 500 rounded-2xl flex items - center justify - center group - hover:scale - 110 transition - transform duration -300">;
                    <service.icon className="w-8 h-8 text-white" />                  </div>;
                </div>;

                {/* Description */}
                <p className="text-slate-600 mb-4 line-clamp-3">{service.description}</p>;

                {/* Features */}
                <div className="mb-4">;
                  <h4 className="text-sm font-medium text-slate-900 mb-2">Key Features:</h4>;
                  <div className="space-y-1">;
                    {service.features.slice(0, 3).map((feature, index) => (;
                      <div key={index} className="flex items-center space-x-2">;
                        <CheckCircle className="w-4 h-4 text-green-500"  />;
                        <span className="text-sm text-slate-600">{feature}</span>;
                      </div>;
                    ))}
                  </div>;
                </div>;

                {/* Pricing */}
                <div className="mb-4">;
                  <h4 className="text-sm font-medium text-slate-900 mb-2">Starting at:</h4>;
                  <div className="text-2xl font-bold text-blue-600">${service.pricing.starter}/mo</div>;
                </div>;

                {/* Action Button */}
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">;
                  <span>Learn More</span>;
                  <ArrowRight className="w-4 h-4"  />;
                </button>;
              </div>;
            </motion.div>;
          ))}
        </div>;

        {/* Call to Action */}
        <motion.div;
          initial = {;
  { opacity: 0,
  y: 20;
}}
          animate = {;
  { opacity: 1,
  y: 0;
}}
          transition={{ delay: 0.6 }}
          className="text-center mt-20">;
          <div  className="bg-gradient - to - r from - purple - 600 / 20 to - blue - 600 / 20 backdrop - blur - sm border border-purple - 500 / 30 rounded-2xl p -12">;
            <h2 className="text-3xl font - bold text-white mb-4">;
              Ready to Transform Your Business?;
            </h2>;
            <p className="text-gray - 300 mb-8 max - w-2xl mx -auto">;
              Our AI - powered solutions are designed to streamline operations, boost productivity, and drive growth.Get started today and experience the future of business automation.</p>;
            <div  className="flex flex - col sm:flex - row gap-4 justify -center">;
              <button     className="px-8 py-4 bg-gradient - to - r from - purple - 600 to - blue - 600 text-white font - semibold rounded-lg hover:from - purple - 700 hover:to - blue - 700 transition - all duration - 300 flex items - center gap-2">;
                <Rocket className="w-5 h-5" />;
                Get Started;
              </button>;
              <button     className="px-8 py-4 bg-white / 10 backdrop - blur - sm border border-white / 20 text-white font - semibold rounded-lg hover:bg-white / 20 transition - all duration -300">;
                Schedule Demo;
              </button>;
            </div>;
          </div>;
        </motion.div>;
      </div>;
    </div>;) ;
};
import { Link } from 'react-router-dom'; export default function Page(props: any) { }}} import { motion,AnimatePresence } from 'framer-motion'; export default function Page(props: any) { ,{ id: 'ai-customer-support',name: 'AI Customer Support Automation',description: 'Automated customer service with intelligent chatbots,ticket routing,and sentiment analysis.',category: 'customer-support',features: ['Intelligent Chatbots','Automated Ticket Routing','Sentiment Analysis','24/7 Support'],pricing: { starter: 7 9,professional: 19 9,enterprise: 39 9 },icon: User s,route: '/services/ai-customer-support-automation',status: 'active' },{ id: 'ai-financial-analytics',name: 'AI Financial Analytics Platform',description: 'Advanced financial forecasting,risk assessment,and compliance monitoring powered by AI.',category: 'finance',features: ['Financial Forecasting','Risk Assessment','Compliance Monitoring','Real-time Analytics'],pricing: { starter: 14 9,professional: 39 9,enterprise: 79 9 },icon: TrendingU p,route: '/services/ai-financial-analytics',status: 'active' },{ id: 'ai-marketing-automation',name: 'AI Marketing Automation',description: 'Intelligent audience segmentation,content personalization,and multi-channel campaign orchestration.',category: 'marketing',features: ['Audience Segmentation','Content Personalization','Multi-channel Campaigns','ROI Optimization'],pricing: { starter: 12 9,professional: 34 9,enterprise: 69 9 },icon: Glob e,route: '/services/ai-marketing-automation',status: 'active' },{ id: 'ai-data-analytics',name: 'AI Data Analytics Engine',description: 'Advanced data processing,pattern recognition,and predictive modeling for business intelligence.',category: 'analytics',features: ['Data Processing','Pattern Recognition','Predictive Modeling','Business Intelligence'],pricing: { starter: 19 9,professional: 49 9,enterprise: 99 9 },icon: Databas e,route: '/services/ai-data-analytics',status: 'beta' },{ id: 'ai-cybersecurity',name: 'AI Cybersecurity Suite',description: 'Intelligent threat detection,automated response,and proactive security monitoring.',category: 'security',features: ['Threat Detection','Automated Response','Security Monitoring','Incident Prevention'],pricing: { starter: 17 9,professional: 44 9,enterprise: 89 9 },icon: Shiel d,route: '/services/ai-cybersecurity',status: 'coming-soon' } ]; return matchesCategory && matchesSearch}); case 'price': return a.pricing.starter - b.pricing.starter; case 'popularity': return 0; default: return 0} }); case 'beta': return 'bg-yellow-100 text-yellow-800'; case 'coming-soon': return 'bg-gray-100 text-gray-800'; default: retur n 'bg-gray-100 text-gray-800'} }; case 'beta': return 'Beta'; case 'coming-soon': return 'Coming Soon'; default: retur n 'Unknown'} }; return (<div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12"> <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8"> {} <motion.div initial = { { opacity: 0,y: 2 0 }} animate = { { opacity: 1,y: 0 }} className="text-center mb-16" > <h1 className="text-5xl md: tex t-7xl font - bold text-white mb-6"> AI Services Hub </h1> <p className="text-xl text-slate-600 max-w-3xl mx-auto"> Discover our cutting-edge AI-powered solutions designed to transform your business operations </p> </div> {} <motion.div initial = { { opacity: 0,y: 2 0 }} animate = { { opacity: 1,y: 0 }} transition={{ delay: 0.2 }} className="mb-12" > <div className="flex flex - col lg: fle x - row gap-6 items - center justify -between"> {} <div className="relative flex - 1 max - w-md"> <input type="text" placeholder="Search AI services..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent" /> </div> {} <select value={sortBy} onChange={ (e) => setSortBy(e.target.value as 'name' | 'price' | 'popularity') } className="px-4 py-3 bg-white / 10 backdrop - blur - sm border border-white / 20 rounded-lg text-white focus: outlin e - none focus: rin g - 2 focus: rin g - purple -500" > <option value="popularity">Most Popular</option> <option value="name">Name A - Z</option> <option value="price">Price: Low to High</option> </select> </div> </motion.div> {} <motion.div initial = { { opacity: 0,y: 2 0 }} animate = { { opacity: 1,y: 0 }} transition={{ delay: 0.3 }} className="mb-12" > <div className="flex flex - wrap gap-4 justify -center"> {categories.map((category) => (<button key={category.id} onClick={ () => setSelectedCategory(category.id) } className={`flex items - center gap-2 px-6 py-3 rounded-full border transition - all duration - 300 ${selectedCategory === category.id ? 'bg-purple - 600 border-purple - 500 text-white' : 'bg-white / 10 border-white / 20 text-gray - 300 hover: b g-white / 20' }`} > {categories.map(category => ( <option key={category.id} value={category.id}> {category.name} </option> ))} </select> <select value={sortBy} onChange={(e) => setSortBy(e.target.value as any)} className="px-4 py-3 border border-slate-300 rounded-lg focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent" > <option value="popularity">Sort by Popularity</option> <option value="name">Sort by Name</option> <option value="price">Sort by Price</option> </select> </div> </div> </div> {} <motion.div initial = { { opacity: 0,y: 2 0 }} animate = { { opacity: 1,y: 0 }} transition={{ delay: 0.4 }} className="grid grid - cols - 1 md: gri d - cols - 2 lg: gri d - cols - 3 gap-8" > <AnimatePresence> {sortedServices.map((service,index) => (<motion.div key={service.id} initial = { { opacity: 0,y: 2 0 }} animate = { { opacity: 1,y: 0 }} exit = { { opacity: 0,y: -20 }} transition={{ delay: inde x * 0.1 }} className="group relative bg-white / 5 backdrop - blur - sm border border-white / 10 rounded-2xl p - 6 hover: b g-white / 10 transition - all duration - 300 hover: borde r-purple -500 / 50" > {} <div className="absolute top - 4 right -4"> <span className={`px-3 py-1 rounded-full text-xs font - medium ${service.status === 'active' ? 'bg-green - 500 / 20 text-green - 400' : service.status === 'beta' ? 'bg-yellow-500 / 20 text-yellow-400' : 'bg-gray - 500 / 20 text-gray - 400' }`}> {service.status === 'active' ? 'Active' : service.status === 'beta' ? 'Beta' : 'Coming Soon'} </span> </div> {} <div className="mb-4"> <div className="w-16 h-16 bg-gradient - to - br from - purple - 500 to - blue - 500 rounded-2xl flex items - center justify - center group - hover: scal e - 110 transition - transform duration -300"> <service.icon className="w-8 h-8 text-white" /> </div> </div> {} <p className="text-slate-600 mb-4 line-clamp-3">{service.description}</p> {} <div className="mb-4"> <h4 className="text-sm font-medium text-slate-900 mb-2">Key Features:</h4> <div className="space-y-1"> {service.features.slice(0,3).map((feature,index) => ( <div key={index} className="flex items-center space-x-2"> <CheckCircle className="w-4 h-4 text-green-500" /> <span className="text-sm text-slate-600">{feature}</span> </div> ))} </div> </div> {} <div className="mb-4"> <h4 className="text-sm font-medium text-slate-900 mb-2">Starting at:</h4> <div className="text-2xl font-bold text-blue-600">${service.pricing.starter}/mo</div> </div> {} <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover: b g-blue-700 transition-colors flex items-center justify-center space-x-2"> <span>Learn More</span> <ArrowRight className="w-4 h-4" /> </button> </div> </motion.div> ))} </div> {} <motion.div initial = { { opacity: 0,y: 2 0 }} animate = { { opacity: 1,y: 0 }} transition={{ delay: 0.6 }} className="text-center mt-20" > <div className="bg-gradient - to - r from - purple - 600 / 20 to - blue - 600 / 20 backdrop - blur - sm border border-purple - 500 / 30 rounded-2xl p -12"> <h2 className="text-3xl font - bold text-white mb-4"> Ready to Transform Your Business? </h2> <p className="text-gray - 300 mb-8 max - w-2xl mx -auto"> Our AI - powered solutions are designed to streamline operations,boost productivity,and drive growth.Get started today and experience the future of business automation.</p> <div className="flex flex - col sm: fle x - row gap-4 justify -center"> <button className="px-8 py-4 bg-gradient - to - r from - purple - 600 to - blue - 600 text-white font - semibold rounded-lg hover: fro m - purple - 700 hover: t o - blue - 700 transition - all duration - 300 flex items - center gap-2"> <Rocket className="w-5 h-5" /> Get Started </button> <button className="px-8 py-4 bg-white / 10 backdrop - blur - sm border border-white / 20 text-white font - semibold rounded-lg hover: b g-white / 20 transition - all duration -300"> Schedule Demo; </button>; </div>; </div>; </motion.div>; </div>; </div>;) }; </motion> </motion> </AnimatePresence> </motion> </button> </motion> </motion> </motion>