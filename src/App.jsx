

import { ChatAssistant } from './components/ChatAssistant.tsx';



const Home = lazy(() => import('./pages/Home.tsx'));
const About = lazy(() => import('./pages/About.tsx'));
const Contact = lazy(() => import('./pages/Contact.tsx'));
const BlogPage = lazy(() => import('./pages/BlogPage.tsx'));
const PartnersPage = lazy(() => import('./pages/Partners.tsx'));
const Login = lazy(() => import('./pages/Login.tsx'));
const FAQ = lazy(() => import('./pages/FAQ.tsx'));
const Careers = lazy(() => import('./pages/Careers.tsx'));

const Sitemap = lazy(() => import('./pages/Sitemap.jsx'));

// Loading component
const LoadingSpinner = () => ('
  <div className='flex items-center justify-center min-h-screen>

    <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-zion-cyan'></div>
  </div>

);

// Simple Services page component

          Our{' '}



          <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400'>
            Services
          </span>

          <h3 className='text-xl font-bold text-white mb-4'>
            AI & Machine Learning
          </h3>""

          <p className='text-gray-300'>
            Cutting-edge artificial intelligence solutions for business
            automation and insights.
          </p>

          <p className='text-gray-300'>
            Advanced security solutions with zero-trust architecture and threat
            detection.
          </p>

          <p className='text-gray-300'>
            Scalable cloud infrastructure and automated deployment solutions.

          </p>
        </div>
      </div>
    </div>
  </div>
);


    <Router>
      <div className=&apos;min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light&apos;>&apos;


        <AppHeader />
        <main className=&apos;flex-1&apos;>&apos;
          <Suspense fallback={}<LoadingSpinner />}>



                        Go Home

                      </a>
                    </div>
                  </div> }
              />
            </Routes>
          </Suspense>
        </main>

      </div>
    </Router>
  ) }


export default App;





