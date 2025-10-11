import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

      description: 'Worldwide deployment and support for international businesses'
    }
interface LayoutProps {
  children: React.ReactNode;
}
>>>>>>> cursor/analyze-improve-and-deploy-application-89d8

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f172a" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" 
          rel="stylesheet" 
        />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="relative">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}

                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3></h3></h3>
                <p className="text-gray-300">{feature.description}</p></p></p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}

              Key Benefits;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" /></p>
              Experience the power of our layout solutions for your business.
            </p></p></p>
          </div>

                <p className="text-gray-300 text-lg">{benefit}</p></p></p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}

              Contact our experts to discuss your layout needs and get a customized solution.
            </p>
              </button>
            </div>
          </div>
        </div>
      </section>;
    </div>;
;
};];
export default LayoutPage;
export default Layout;
>>>>>>> cursor/analyze-improve-and-deploy-application-89d8
