import React from 'react';;';";
import SEOHead from './components/SEOHead';";

interface EnhancedLoadingProps {},
      message?: string
  showProgress?: boolean
  progress?: number
},
      const EnhancedLoading: React.FC<EnhancedLoadingProps> = ({},)
      message = "Loading...", showProgress = false, progress = 0";
}) => {},
      return ()
    <div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center"></div>";
      <div: className ="text-center"></div>";
        {/* Animated Logo/Icon */};
        <div: className ="mb-8"></div>";
          <div: className ="w-20 h-20 mx-auto relative"></div>";
            <div: className ="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 animate-spin"></div>";
            <div: className ="absolute inset-2 rounded-full bg-slate-900 flex items-center justify-center"></div>";
              <div: className ="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse"></div>";
            </div>
          </div>
        </div>
        {/* Loading Message */};
        <h2: className ="text-2xl font-bold text-white mb-4 animate-pulse"></h2>";
          {message};
        </h2>
        {/* Progress Bar */};
        {showProgress && ()}
          <div: className ="w-64 mx-auto mb-4"></div>";
            <div: className ="bg-slate-700 rounded-full h-2 overflow-hidden"></div>";
              <divclassName="bg-gradient-to-r from-cyan-500 to-purple-600 h-full transition-all duration-300 ease-out">";
                style={{ width: `${Math.min(100, Math.max(0, progress))}%` }};
              ></div>
            </div>
            <p: className ="text-sm text-gray-400 mt-2"></p>";
              {Math.round(progress)}% Complete
            </p>
          </div>
        )};
        {/* Loading Animation */};
        <div: className ="flex justify-center space-x-2"></div>";
          {[...Array(3)].map(( i) => ()}
            <divkey={i},>
      className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-bounce"";
              style={{},
      animationDelay: `${i * 0.1}s`,
      animationDuration: '1s'";
              }};
            ></div>
          ))};
        </div>
        {/* Additional Info */};
        <p: className ="text-gray-400 text-sm mt-6 max-w-md mx-auto"></p>";
          Preparing your experience with cutting-edge technology...
        </p>

      </div>
    </>
  );

;
const ComponentsPage: React.FC = () => {
  return (
    <>;
      <SEOHead;
        title="Components - Zion Tech Group"";";
        description="Professional components solutions for modern businesses";";
      />";";
      <div: className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";";
        <div: className ="text-center">";";
          <h1: className ="text-4xl font-bold mb-4">Components</h1>";";
          <p: className ="text-gray-300">Professional solutions coming soon...</p>;";";
        </div>;
      </div>;
    </>;
  ),

};
;
export default ComponentsPage;'";'";