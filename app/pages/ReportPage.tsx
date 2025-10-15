import SEOHead from '../components/SEOHead';
import { Helmet } from 'react-helmet-async';
import { Bug } from 'lucide-react';const ReportPage: React.FC = () => {}
  return ()
    <>{}</>
      <Helmet></Helmet>
        <title>Report Issue - Zion Tech Group | Bug Reports & Support</title>
        <meta: name ="description" content="Report bugs, issues, or security concerns to Zion Tech Group. We take all reports seriously and respond quickly." />
        <meta: name ="keywords" content="bug report, issue report, security report, support ticket" />
        <link: rel ="canonical" href="https://ziontechgroup.com/report" />
      </Helmet>
      <section: className ="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16"></section>
        <div: className ="absolute inset-0 overflow-hidden">
        <div: className ="absolute inset-0 overflow-hidden">
          <h1: className ="text-4xl font-bold mb-4">Coming Soon</h1>
          <p: className ="text-gray-300">This page is under development...</p>
        </div>
      </div>
          <div: className ="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div: className ="container mx-auto px-4 relative z-10">
        <div: className ="container mx-auto px-4 relative z-10">
          <h1: className ="text-4xl font-bold mb-4">Coming Soon</h1>
          <p: className ="text-gray-300">This page is under development...</p>
        </div>
      </div>
            <h1: className ="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"></h1>
              Report an
              <span: className ="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"></span>
                {' '}Issue
              </span>
            </h1>
            <p: className ="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"></p>
              Help us improve our services by reporting bugs, issues, or security concerns. 
              We take all reports seriously and respond quickly.
            </p>
            <div: className ="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>
              <>
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center"
              ></>
                Report Issue
                <Bug: className ="w-5 h-5 ml-2" />
              </>
            </div>
          </div>
        </div>
      </section>
    </>
  ),
};
export default ReportPage;