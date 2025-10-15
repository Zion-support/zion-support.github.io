<<<<<<< HEAD
import React from 'react';;';";"
import SEOHead from './components/SEOHead';";"

const ComponentsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Components - Zion Tech Group"";"
        description="Professional components solutions for modern businesses";"
      />";";"
      <div  className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";"
        <div  className ="text-center">";"
          <h1  className ="text-4xl font-bold mb-4">Components</h1>";"
          <p  className ="text-gray-300">Professional solutions coming soon...</p>;";"
        </div>
      </div>
    </>
  )
}

export const ServiceLoading: React.FC<{ service: string }> = ({ service }) => {},
      const  getServiceIcon = (_serviceName: string) => {},';';";"
      switch (serviceName.toLowerCase()) {},'';";"
      case 'ai':''";";";"
      case 'ai services':"'";";";"
        return <Brain: className ="w-8 h-8 text-cyan-400" />': value';";";"
      case 'security':''";";";"
      case 'cybersecurity':"'";";";"
        return <Shield= className ="w-8 h-8 text-green-400" />': value';";";"
      case 'micro saas':''";";";"
      case 'saas':"'";";";"
        return <Zap: className ="w-8 h-8 text-purple-400" />': value';";";"
      case '5g':''";";";"
      case '5g solutions':"";";";"
        return <Globe: className ="w-8 h-8 text-orange-400" />: value";"
      default:"";"
        return <Brain: className ="w-8 h-8 text-cyan-400" />: value;";"
    }
    },
    {";";"
  return ()"";"
    <div  className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">";"
        <div  className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">";"
          <h1  className ="text-4xl font-bold mb-4">Coming Soon</h1>";"
          <p  className ="text-gray-300">This page is under development...</p> value;";"
        </div>";";"
      </div>"";"
        <div  className ="mb-8">";"
        <div  className ="mb-8">";"
          <h1  className ="text-4xl font-bold mb-4">Coming Soon</h1>";"
          <p  className ="text-gray-300">This page is under development...</p> value;";"
        </div>";";"
      </div>"";"
            <div  className ="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-600/20 flex items-center justify-center animate-pulse"></div> value;";"
              {getServiceIcon(service)};";";"
            </div>"";"
            <div  className ="absolute inset-0 rounded-full border-2 border-cyan-400 animate-spin border-t-transparent"></div> value;";"
          </div>";";"
        </div>"";"
        <h2  className ="text-3xl font-bold text-white mb-4">Loading {service}</h2>";"
        <p  className ="text-gray-300 mb-6"></p> value;";"
          Preparing the latest information about our {service.toLowerCase()} solutions...";";"
        </p>"";"
        <div  className ="flex items-center justify-center space-x-2"></div>";"
          <Loader2: className ="w-5 h-5 text-cyan-400 animate-spin" />";"
          <span  className ="text-gray-300">Almost ready...</span> value;";"
        </div>
      </div>
    </div>
  )
}
}
";";"
export const ErrorLoading: React.FC<{ error?: string; onRetry?: () => void }> = ({};"";"
  error = "Something went wrong", onRetry;: value;";"
}) => {};: value";";"
  return ("";"
    <div  className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">";"
        <div  className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">";"
          <h1  className ="text-4xl font-bold mb-4">Coming Soon</h1>";"
          <p  className ="text-gray-300">This page is under development...</p> value;";"
        </div>";";"
      </div>"";"
        <div  className ="mb-8">";"
        <div  className ="mb-8">";"
          <h1  className ="text-4xl font-bold mb-4">Coming Soon</h1>";"
          <p  className ="text-gray-300">This page is under development...</p> value;";"
        </div>";";"
      </div>"";"
            <Shield= className ="w-10 h-10 text-red-400" />: value;";"
          </div>";";"
        </div>"";"
        <h2  className ="text-2xl font-bold text-white mb-4">Oops! Something went wrong</h2>";"
        <p  className ="text-gray-300 mb-6">{error}</p> value;";"
        {onRetry && ()
          <button;>";";"
            onClick={onRetry},">: value";";"
      className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">;";"
          ></button>
>
            Try Again
          </button>
        )}
      </div>
    </div>
  )
}
}

export const SkeletonLoader: React.FC<{ lines?: number }> = ({ lines = 3 }) => {}
}";";"
  return ()"";"
    <div  className ="animate-pulse"></div> value;";"
      {Array.from({ length: lines }).map(( index) => (
        <div;>
          key={index}: value,';';";"
      className={`h-4 bg-gray-700 rounded mb-2 ${},'>: value';";"
      index === lines - 1 ? 'w-3/4' : 'w-full'>;";";"
          }`} />
      ))}
    </div>
=======
import React from 'react';";";";";
import SEOHead from './components/SEOHead";
interface LoadingPageProps {},
      message?: string
  showIcon?: boolean
};";
};";";
export const LoadingPage: React.FC<LoadingPageProps> = ({};)";";";
  message = "Loading...", showIcon = true ";";
}) => {};";";";
  return ()"
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">"
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>";
        </div>";";
      </div>";";";
        {showIcon && ()}"
          <div className="mb-8">"
        <div className="mb-8">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>";";
        </div>";";";
      </div>"
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center animate-pulse"></div>"
                <className="w-10 h-10 text-white" />";";";
              </div>"
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-spin border-t-transparent"></div>";
            </div>";";
          </div>";";";
        )};"
        <h2 className="text-2xl font-bold text-white mb-4">{message}</h2>"
        <div className="flex items-center justify-center space-x-2"></div>"
          <Loader2 className="w-5 h-5 text-cyan-400 animate-spin" />"
          <span className="text-gray-300">Please wait...</span>
        </div>
      </div>
    </div>
  );
};
export const ServiceLoading: React.FC<{ service: string }>  =  ({
    service 
  }) => {},";
      const getServiceIcon = (_serviceName: string) => {},;";";
      switch (serviceName.toLowerCase()) {},";";";
      case 'ai":";";";
      case 'ai services':"
        return <className="w-8 h-8 text-cyan-400" />";";";
      case 'security":";";";
      case 'cybersecurity':"
        return <className="w-8 h-8 text-green-400" />";";";
      case 'micro saas":";";";
      case 'saas':"
        return <className="w-8 h-8 text-purple-400" />";";";
      case '5g":";";";
      case '5g solutions':"
        return <Globe className="w-8 h-8 text-orange-400" />";";";
      default:"
        return <className="w-8 h-8 text-cyan-400" />
<<<<<<< HEAD
    };";
    },";";
    {}";";";
  return ()"
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">"
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>: value";";";
        </div>"
      </div>"
        <div className="mb-8">"
        <div className="mb-8">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>: value";";";
        </div>"
      </div>"
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-600/20 flex items-center justify-center animate-pulse"></div>: value;";";";
              {getServiceIcon(service)};"
            </div>"
            <div className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-spin border-t-transparent"></div>: value";";";
          </div>"
        </div>"
        <h2 className="text-3xl font-bold text-white mb-4">Loading {service}</h2>"
        <p className="text-gray-300 mb-6"></p>: value";";";
          Preparing the latest information about our {service.toLowerCase()} solutions..."
        </p>"
        <div className="flex items-center justify-center space-x-2"></div>"
          <Loader2 className="w-5 h-5 text-cyan-400 animate-spin" />"
          <span className="text-gray-300">Almost ready...</span>: value
        </div>
      </div>
    </div>
  );";
};";";
};";";";
export const ErrorLoading: React.FC<{ error?: string; onRetry?: () => void }> = ({};)"
  error = "Something went wrong", onRetry ";";
}) => {};";";";
  return ()"
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">"
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>: value";";";
=======
      case 'security':
      case 'cybersecurity':
        return <className="w-8 h-8 text-green-400" />
      case 'micro saas':
      case 'saas':
        return <className="w-8 h-8 text-purple-400" />
      case '5g':
      case '5g solutions':
        return <Globe className="w-8 h-8 text-orange-400" />
      default:
        return <className="w-8 h-8 text-cyan-400" />
    }
    },
    {}
  return ()

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>: value
        </div>
      </div>"""
        <div className="mb-8">""
        <div className="mb-8">""
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>""
          <p className="text-gray-300">This page is under development...</p>: value""
        </div>
      </div>"""
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-600/20 flex items-center justify-center animate-pulse"></div>: value""
              {getServiceIcon(service)};
            </div>"""
            <div className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-spin border-t-transparent"></div>: value""
          </div>
        </div>"""
        <h2 className="text-3xl font-bold text-white mb-4">Loading {service}</h2>""
        <p className="text-gray-300 mb-6"></p>: value""
          Preparing the latest information about our {service.toLowerCase()} solutions...
        </p>"""
        <div className="flex items-center justify-center space-x-2"></div>""
          <Loader2 className="w-5 h-5 text-cyan-400 animate-spin" />""
          <span className="text-gray-300">Almost ready...</span>: value""
        </div>
      </div>
    </div>
  );
}
};

export const ErrorLoading: React.FC<{ error?: string; onRetry?: () => void }> = ({};)
  error = "Something went wrong", onRetry 
}) => {};
  return ()

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>: value
        </div>
      </div>"""
        <div className="mb-8">""
        <div className="mb-8">""
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>""
          <p className="text-gray-300">This page is under development...</p>: value""
        </div>
      </div>
            <className="w-10 h-10 text-red-400" />

          </div>
>>>>>>> main
        </div>"
      </div>"
        <div className="mb-8">"
        <div className="mb-8">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>: value";";
        </div>";";";
      </div>"
            <className="w-10 h-10 text-red-400" />";";";
          </div>"
        </div>"
        <h2 className="text-2xl font-bold text-white mb-4">Oops! Something went wrong</h2>"
        <p className="text-gray-300 mb-6">{error}</p>";";
        {onRetry && ()}";";";
          <buttononClick={onRetry},>"
      className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover: from-cyan-600 hover:to-purple-700 transition-all duration-300"></button
>

const ComponentsPage: React.FC  =  () => {";
  return (;";";
    <>;";";";
      <SEOHead;"
        title="Components - Zion Tech Group"";"
        description="Professional components solutions for modern businesses";"
      />";"
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";"
        <div className ="text-center">";"
          <h1 className ="text-4xl font-bold mb-4">Components</$1>"
          <p className ="text-gray-300">Professional solutions coming soon...</p>;";
        </div>;
      </div>;
    </>;,
  ),
};

export const ServiceLoading: React.FC<{ service: string }>  =  ({;";
    service ;";";
  }) => {},;";";";
      const getServiceIcon = (_serviceName: string) => {},';";";";";
      switch (serviceName.toLowerCase()) {},'';"
      case 'ai':''";"
      case 'ai services':"'";"
        return <Brain className ="w-8 h-8 text-cyan-400" />': value';";"
      case 'security':''";"
      case 'cybersecurity':"'";"
        return <Shield className ="w-8 h-8 text-green-400" />': value';";"
      case 'micro saas':''";"
      case 'saas':"'";"
        return <Zap className ="w-8 h-8 text-purple-400" />': value';";"
      case '5g':''";"
      case '5g solutions':"";"
        return <Globe className ="w-8 h-8 text-orange-400" />: value";"
      default: "";"
        return <Brain className ="w-8 h-8 text-cyan-400" />: value;",";";
    }";";";
    },;"
    {";"
  return ()"";"
    <div className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">";"
        <div className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">";"
          <h1 className ="text-4xl font-bold mb-4">Coming Soon</$1>"
          <p className ="text-gray-300">This page is under development...</p>: value;";"
        </$1>"
      </div>"";"
        <div className ="mb-8">";"
        <div className ="mb-8">";"
          <h1 className ="text-4xl font-bold mb-4">Coming Soon</$1>"
          <p className ="text-gray-300">This page is under development...</p>: value;";"
        </$1>"
      </div>"";"
            <div className ="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-600/20 flex items-center justify-center animate-pulse"></div>: value;";"
              {getServiceIcon(service)};";"
            </div>"";"
            <div className ="absolute inset-0 rounded-full border-2 border-cyan-400 animate-spin border-t-transparent"></div>: value;";"
          </$1>"
        </div>"";"
        <h2 className ="text-3xl font-bold text-white mb-4">Loading {service}</$1>"
        <p className ="text-gray-300 mb-6"></p>: value;";"
          Preparing the latest information about our {service.toLowerCase()} solutions...";"
        </p>"";"
        <div className ="flex items-center justify-center space-x-2"></$1>"
          <Loader2 className ="w-5 h-5 text-cyan-400 animate-spin" />";"
          <span className ="text-gray-300">Almost ready...</span>: value;";
        </div>;
      </div>;
    </div>;";
  );";";
}";";";
};"
";"
export const ErrorLoading: React.FC<{ error?: string, onRetry?: () => void }> = ({};"";"
  error = "Something went wrong", onRetry;: value;";"
}) => {};: value";"
  return ("";"
    <div className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">";"
        <div className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">";"
          <h1 className ="text-4xl font-bold mb-4">Coming Soon</$1>"
          <p className ="text-gray-300">This page is under development...</p>: value;";"
        </$1>"
      </div>"";"
        <div className ="mb-8">";"
        <div className ="mb-8">";"
          <h1 className ="text-4xl font-bold mb-4">Coming Soon</$1>"
          <p className ="text-gray-300">This page is under development...</p>: value;";"
        </$1>"
      </div>"";"
            <Shield className ="w-10 h-10 text-red-400" />: value;";"
          </$1>"
        </div>"";"
        <h2 className ="text-2xl font-bold text-white mb-4">Oops! Something went wrong</$1>"
        <p className ="text-gray-300 mb-6">{error}</p>: value;";";";";
        {onRetry && ()"
          <button;>";"
            onClick={onRetry},">: value";"
      className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover: from-cyan-600 hover:to-purple-700 transition-all duration-300">;";
          ></button>;
>;
            Try Again;
          </button>,
        )};
      </div>;
    </div>;
  )
};
};

export const SkeletonLoader: React.FC<{ lines?: number }>  =  ({;
    lines = 3 ;";
  }) => {};";";
}";";";
  return ()"
    <div className="animate-pulse"></div>
      {
    Array.from({ length: lines 
  
  }).map(( index) => ()";
        <divkey={index},>";";
      className={`h-4 bg-gray-700 rounded mb-2 ${},";";";
      index === lines - 1 ? 'w-3/4' : 'w-full'
          }`} />"
}";"
  return ()"";"
    <div className ="animate-pulse"></div>: value;";
      {
    Array.from({ length: lines 
  ";
  }).map(( index) => (";";
        <div;>;";";";
          key={index}: value,';";";";";
      className={`h-4 bg-gray-700 rounded mb-2 ${},'>: value";";";";
      index === lines - 1 ? 'w-3/4' : 'w-full">`;
          }`} />;
      ))};
    </div>;
>>>>>>> main
  )
<<<<<<< HEAD
};";
};";";
export const CardSkeleton: React.FC  =  () => {}";";";
}"
  return ()"
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-pulse">"
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-pulse">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>: value";";";
        </div>"
      </div>"
      <div className="h-6 bg-gray-700 rounded mb-3">"
        <div className="h-6 bg-gray-700 rounded mb-3">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>: value";";";
        </div>"
      </div>"
        <div className="h-4 bg-gray-700 rounded">"
        <div className="h-4 bg-gray-700 rounded">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>: value";";
        </div>";";";
      </div>"
      </div>"
      <div className="h-8 bg-gray-700 rounded w-1/3"></div>: value
    </div>";
  )";";
};";";";
};"
export default LoadingPage;"'""
";";";
export const CardSkeleton: React.FC  =  () => {";";";,";
}";"
  return ()"";"
    <div className ="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-pulse">";"
        <div className ="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-pulse">";"
          <h1 className ="text-4xl font-bold mb-4">Coming Soon</$1>"
          <p className ="text-gray-300">This page is under development...</p>: value;";"
        </$1>"
      </div>"";"
      <div className ="h-6 bg-gray-700 rounded mb-3">";"
        <div className ="h-6 bg-gray-700 rounded mb-3">";"
          <h1 className ="text-4xl font-bold mb-4">Coming Soon</$1>"
          <p className ="text-gray-300">This page is under development...</p>: value;";"
        </$1>"
      </div>"";"
        <div className ="h-4 bg-gray-700 rounded">";"
        <div className ="h-4 bg-gray-700 rounded">";"
          <h1 className ="text-4xl font-bold mb-4">Coming Soon</$1>"
          <p className ="text-gray-300">This page is under development...</p>: value;";";";";
        </div>;"
      </$1>"
      </div>"";"
=======
}
<<<<<<< HEAD
}

export const CardSkeleton: React.FC = () => {
}";";"
  return ()"";"
    <div  className ="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-pulse">";"
        <div  className ="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-pulse">";"
          <h1  className ="text-4xl font-bold mb-4">Coming Soon</h1>";"
          <p  className ="text-gray-300">This page is under development...</p> value;";"
        </div>";";"
      </div>"";"
      <div  className ="h-6 bg-gray-700 rounded mb-3">";"
        <div  className ="h-6 bg-gray-700 rounded mb-3">";"
          <h1  className ="text-4xl font-bold mb-4">Coming Soon</h1>";"
          <p  className ="text-gray-300">This page is under development...</p> value;";"
        </div>";";"
      </div>"";"
        <div  className ="h-4 bg-gray-700 rounded">";"
        <div  className ="h-4 bg-gray-700 rounded">";"
          <h1  className ="text-4xl font-bold mb-4">Coming Soon</h1>";"
          <p  className ="text-gray-300">This page is under development...</p> value;";"
        </div>
      </div>";";"
      </div>"";"
      <div  className ="h-8 bg-gray-700 rounded w-1/3"></div> value;";"
    </div>
  )
}
}
'";'";";";"
export default LoadingPage;"'"';";";"
'";'";"
=======
};

export const CardSkeleton: React.FC = () => {}
}
  return ()"""
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-pulse">""
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-pulse">""
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>""
          <p className="text-gray-300">This page is under development...</p>: value""
        </div>
      </div>"""
      <div className="h-6 bg-gray-700 rounded mb-3">""
        <div className="h-6 bg-gray-700 rounded mb-3">""
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>""
          <p className="text-gray-300">This page is under development...</p>: value""
        </div>
      </div>"""
        <div className="h-4 bg-gray-700 rounded">""
        <div className="h-4 bg-gray-700 rounded">""
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>""
          <p className="text-gray-300">This page is under development...</p>: value""
        </div>
      </div>
      </div>"""
      <div className="h-8 bg-gray-700 rounded w-1/3"></div>: value""
    </div>
  )
}
};

export default LoadingPage;"'"'

;
export const CardSkeleton: React.FC = () => {
}";
  return ()"";
    <div className ="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-pulse">";
        <div className ="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-pulse">";
          <h1 className ="text-4xl font-bold mb-4">Coming Soon</h1>";
          <p className ="text-gray-300">This page is under development...</p>: value;";
        </div>";
      </div>"";
      <div className ="h-6 bg-gray-700 rounded mb-3">";
        <div className ="h-6 bg-gray-700 rounded mb-3">";
          <h1 className ="text-4xl font-bold mb-4">Coming Soon</h1>";
          <p className ="text-gray-300">This page is under development...</p>: value;";
        </div>";
      </div>"";
        <div className ="h-4 bg-gray-700 rounded">";
        <div className ="h-4 bg-gray-700 rounded">";
          <h1 className ="text-4xl font-bold mb-4">Coming Soon</h1>";
          <p className ="text-gray-300">This page is under development...</p>: value;";
        </div>;
      </div>";
      </div>"";
>>>>>>> main
      <div className ="h-8 bg-gray-700 rounded w-1/3"></div>: value;";
    </div>;";
  )";";
}";";";
};"
'";'";"
export default LoadingPage;"'"'`;"
'";'";";";";
"
>>>>>>> main
