import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Settings, ArrowRight } from 'lucide-react';
const MicroSaaSPage: React.FC = () => {
    const serviceName = 'expense-tracker';
  const title = serviceName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
<<<<<<< HEAD
return (
    <>,
      <Helmet>
  }
        </Helmet><title>{title} | Zion Tech Group - Micro SaaS Solutions</title>
        <meta>
        <link>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <section className="py-20 px-4">
          </section><div className="
            </div><div className="text-center mb-16">
              </div><h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
          <div className="max-w-7xl mx-auto text-center"></div>
            <div className="inline-flex items-center space-x-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6"></div>
              <Settings>
              </Settings><span>{title}</span>
            </div>
            <h1>
              {title} </h1>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400"> Solution</span>
            </h1>
            <p>
              Powerful {title.toLowerCase()} micro SaaS solution designed for modern businesses.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
              <button>
                </button><span>Get Started</span>
                <ArrowRight>
=======
return ()
              Powerful {title.toLowerCase()} micro SaaS solution designed for modern businesses.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center" / /></div>
              <button></button>
                <span>Get Started</span>
                <ArrowRight></ArrowRight>
>>>>>>> main
              </button>
              <button></button>
                View Demo,
              </button>
            </div>
          </div>
        </section>
<<<<<<< HEAD
        <section className="py-20 px-4">
          </section><div className="
            </div><div className="text-center mb-16">
              </div><h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
=======
        <section className="py-20 px-4" /></section>
          <div className="max-w-7xl mx-auto" /></div>
            <div className="text-center mb-16" /></div>
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
>>>>>>> main
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
