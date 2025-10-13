};

export default PagePage;
          {/* Tabs */} <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-4">{[</div>
                { id: 'overview', name: 'Overview' ,},
                {id: 'events', name: 'Events' ,},
                {id: 'forums', name: 'Forums' ,},
                {id: 'benefits', name: 'Benefits' ,}].map((tab) => (
                <button;
                  key={tab.id}onClick={() =>setActiveTab(tab.id)</button>}className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === tab.id;
          {/* Overview Tab */}{activeTab === 'overview' && (
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                        Be respectful and inclusive;
                      </li>
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                        Share knowledge generously;
                      </li>
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                        Help others learn and grow;
                      </li>
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                        Keep discussions relevant and constructive;
          )}

          {/* Events Tab */}{activeTab === 'events' && (
                          <span className="px-3 py-1 bg-cyan-600 text-white text-xs font-semibold rounded">{event.type</span>} </span>
                        </div>
                      </div>
                      <a;
                        Register Now;
                        <ArrowRight className="w-4 h-4 ml-2" />
          )}

          {/* Forums Tab */}{activeTab === 'forums' && (
                        Visit Forum;
                        <ArrowRight className="w-4 h-4 ml-1" />
          )}

          {/* Benefits Tab */}{activeTab === 'benefits' && (
          )}

          {/* Join Community CTA */} <div id="join" className="cyber-card-enhanced p-8 mt-16 text-center">
              <a;
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover: bg-cyan-400 hover:text-slate-900 transition-all duration-300",
              >
                Learn More;
          {/* Contact Information */} <div className="cyber-card-enhanced p-8 mt-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Get in Touch</h2>
            <div className="grid grid-cols-1 md: grid-cols-3 gap-6">,</div>
              <div className="flex items-center space-x-3">
                <Mail className="w-6 h-6 text-cyan-400" />
                <div>
                  <div className="text-white font-semibold">Email</div>
                  <a href="mailto: community@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">,
                    community@ziontechgroup.com;
                  <div className="text-white font-semibold">Phone</div>
                  <a href="tel: +13024640950" className="text-cyan-400 hover:text-cyan-300">,
                    +1 (302) 464-0950;
