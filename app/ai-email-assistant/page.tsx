'use client';
import React from \'react\';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Zap, Shield, BarChart3, Users, MessageSquare, Brain, Settings } from 'lucide-react';
import React from \'react\';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Star, Zap, Shield, BarChart3, Users, MessageSquare, Brain, Settings} from 'lucide-react';
'use client';
                  </div>
                  <h3 className="text-xl font-boldtext-whitemb-4"   />{feature.title}</h3>
                  <p className="text-gray-300leading-relaxed" />{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-gradient-to-rfrom-slate-800/30to-slate-900/30" />
          <div className="containermx-autopx-4" />
            <div className="text-centermb-16" />
              <h2 className="text-4 xl font-boldtext-whitemb-6" />
                Use <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"   />Cases</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xlmx-auto" />
                Discover how our AI email assistant can transform your communication workflows
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8" />
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 grouphover:transformhover:scale-105" />
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110transition-transformduration-300" />
                    {useCase.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3group-hover:text-cyan-400transition-colors"  />{useCase.title}
                  </h3>
                  <p className="text-gray-300text-smleading-relaxed" />
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20" />
          <div className="containermx-autopx-4" />
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2 xlp-12text-center" />
              <h2 className="text-4 xl font-boldtext-whitemb-6"  />Ready to Transform Your Email Management?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xlmx-auto" />
                Start automating your email workflows and boost productivity with AI-powered assistance.
              </p>
              <div className="flex flex-col sm:flex-rowgap-4justify-center" />
                <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300transformhover:scale-105">Start Building Now
                </Link>
                <Link to="/about" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105">Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIEmailAssistantPage;