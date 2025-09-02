import React, { Suspense, lazy } from 'react';"'"'
import React from 'react';'"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';"'"'"
import { AppHeader } from './layout/AppHeader.jsx';"'"'"
import { Footer } from './components/Footer.jsx';"''
import { ChatAssistant } from './components/ChatAssistant.tsx';"
"'"
// Home and main pages"'"'"
const Home = lazy(() => import('./pages/Home.tsx'));"'"'"
const About = lazy(() => import('./pages/About.tsx'));"'"'"
const Contact = lazy(() => import('./pages/Contact.tsx'));"'"'"
const BlogPage = lazy(() => import('./pages/BlogPage.tsx'));"'"'"
const PartnersPage = lazy(() => import('./pages/Partners.tsx'));"'"'"
const Login = lazy(() => import('./pages/Login.tsx'));"'"'"
const FAQ = lazy(() => import('./pages/FAQ.tsx'));"'"'"
const Careers = lazy(() => import('./pages/Careers.tsx'));"''
const Sitemap = lazy(() => import('./pages/Sitemap.jsx'));"
// Services pages"'"
const ComprehensivePricing = lazy(() =>"''
  import('./pages/ComprehensivePricing2025.tsx');
);"
// Loading component"'"
const LoadingSpinner = () => ("'"'"
  <div className='flex items-center justify-center min-h-screen'></div>"''
    <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-zion-cyan'></di></div>
  </div>;
);"
// Simple Services page component"'"
const ServicesPage = () => ("'"'"
  <div className='min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-24'></div>"'"'"
    <div className='container mx-auto px-4 py-16'></div>"'"'"
      <div className='text-center mb-16'></div>"'"'"
        <h1 className='text-4xl md:text-6xl font-bold mb-6'></h1>"'"'"
          Our{' '}"''
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400'></span>
            Services"
          </span>"'"
        </h1>"''
        <p className='text-xl text-gray-300 max-w-3xl mx-auto'></p>
          Comprehensive technology solutions to drive your business forward"
        </p>"'"
      </div>"'"'"
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'></div>"'"'"
        <div className='bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20'></div>"''
          <h3 className='text-xl font-bold text-white mb-4'></h3>"
            AI & Machine Learning"'"
          </h3>"''
          <p className='text-gray-300'></p>
            Cutting-edge artificial intelligence solutions for business
            automation and insights."
          </p>"'"
        </div>"'"'"
        <div className='bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20'></div>"'"'"
          <h3 className='text-xl font-bold text-white mb-4'></h>Cybersecurity</h3>"''
          <p className='text-gray-300'></p>
            Advanced security solutions with zero-trust architecture and threat
            detection."
          </p>"'"
        </div>"'"'"
        <div className='bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20'></div>"'"'"
          <h3 className='text-xl font-bold text-white mb-4'></h>Cloud & DevOps</h3>"''
          <p className='text-gray-300'></p>
            Scalable cloud infrastructure and automated deployment solutions.
          </p>
        </div>
      </div>
    </div>
  </div>;
);

function App() {"
  return ("'"
    <Router></Router>"''"
      <div className='min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light'></div>"'"
        <AppHeader /" ></AppHeader>"''"
        <main className='flex-1'></main>""
          <Suspense fallback={<LoadingSpinner /" ></Suspense>}>"'"
            <Routes></Routes>"'"'"
              <Route path='/' element={<Home /" ></Route>} />"'"'"
              <Route path='/about' element={<About /" ></Route>} />"'"'"
              <Route path='/contact' element={<Contact /" ></Route>} />"'"'"
              <Route path='/blog' element={<BlogPage /" ></Route>} />"'"'"
              <Route path='/partners' element={<PartnersPage /" ></Route>} />"'"'"
              <Route path='/login' element={<Login /" ></Route>} />"'"'"
              <Route path='/faq' element={<FAQ /" ></Route>} />"'"'"
              <Route path='/careers' element={<Careers /" ></Route>} />"'"'"
              <Route path='/sitemap' element={<Sitemap /" ></Route>} />"'"'"
              <Route path='/pricing' element={<ComprehensivePricing /" ></Route>} />"'"
              {/* Services routes */}"'"'"
              <Route path='/services' element={<ServicesPage /" ></Route>} />"
              {/* Catch-all route for 404 */}"'"
              <Route"''"
                path='*'"'"
                element={"'"'"
                  <div className='flex items-center justify-center min-h-screen'></Route>"'"'"
                    <div className='text-center'></div>"''
                      <h1 className='text-4xl font-bold text-zion-cyan mb-4'></h1>"
                        404 - Page Not Found"'"
                      </h1>"'"'"
                      <p className='text-zion-slate-light mb-6'></p>"''
                        The page you're looking for doesn't exist."
                      </p>"'"
                      <a "''"
                        href='/"'"
                        className='bg-zion-purple text-white px-6 py-3 rounded-lg hover:bg-zion-purple-dark transition-colors'" ></a>
                        Go Home
                      </a>
                    </div>
                  </div>,
}
              />
            </Routes>
          </Suspense>"
        </main>""
        <Footer /" ></Footer>""
        <ChatAssistant /" ></ChatAssistant>
      </div>
    </Router>
  ),
}
"
export default App;"'"
"'"'"