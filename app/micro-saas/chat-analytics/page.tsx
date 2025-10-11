import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Settings, ArrowRight } from 'lucide-react';
const MicroSaaSPage: React.FC = () => {
    const serviceName = 'chat-analytics';
  const title = serviceName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
return ()
              Powerful {title.toLowerCase()} micro SaaS solution designed for modern businesses.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center" / /></div>
              <button></button>
                <span>Get Started</span>
                <ArrowRight></ArrowRight>
              </button>
              <button></button>
                View Demo,
              </button>
            </div>
          </div>
        </section>
        <section className="py-20 px-4" /></section>
          <div className="max-w-7xl mx-auto" /></div>
            <div className="text-center mb-16" /></div>
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
          <div className="max-w-7xl mx-auto" / /></div>
            <div className="text-center mb-16" / /></div>
              <h2 className="text-4xl font-bold text-white mb-4">Coming Soon</h2>
              <p></p>
                We're developing powerful {title.toLowerCase()} solutions. Stay tuned for updates!
              </p>
            </div>
          </div>
        </section>;
      </div>;
    </>;
  );
};

export default MicroSaaSPage;
