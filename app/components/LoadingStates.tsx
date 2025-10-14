import React from "react";

interface LoadingStatesProps {
  type?: 'spinner' | 'skeleton' | 'dots' | 'pulse';
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
}

const LoadingStates: React.FC<LoadingStatesProps> = ({ 
  type = 'spinner', 
  size = 'md', 
  text = 'Loading...',
  className = ''
}) => {
  if (variant === 'minimal') {''
    return (
<>      <div className="min-h-screen flex items-center justify-center bg-slate-900"></div>
        <div className="flex items-center space-x-3"></div>
          <Loader2 className="w-6 h-6 animate-spin text-cyan-400" /></Loader2>
          <span className="text-white">{message}</span>
        </>
      </div>
    );
  }

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  const renderLoader = () => {
    switch (type) {
      case 'spinner':
        return (
          <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-cyan-500 ${sizeClasses[size]}`}></div>
        );
      
      case 'skeleton':
        return (
          <div className="animate-pulse">
            <div className="bg-gray-300 rounded h-4 w-3/4 mb-2"></div>
            <div className="bg-gray-300 rounded h-4 w-1/2"></div>
          </div>
        );
      
      case 'dots':
        return (
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
"
          <h2 className="text-2xl font-bold text-white mb-2">Zion Tech Group</h2>"
          <p className="text-gray-300 mb-6">{message || getDefaultMessage()}</p>"
          <div className="flex justify-center space-x-2"></div>"
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"></div>"
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>"'"'"
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>'"'"

          </div>
        </div>
      </div>
    );
  }
import React from "react";

const LoadingStates: React.FC = () => {
  return (
<>    </div>
            LoadingStates</h1>
          <p className="text-xl text-gray-600 mb-8">"
            Professional loadingstates solutions tailored to your business needs.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">"
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">"
              <h3 className="text-lg font-semibold text-blue-900 mb-2">"
                Expert Solutions</h3>
              <p className="text-blue-700">"
                Our team of experts delivers cutting-edge loadingstates solutions.</div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">"
              <h3 className="text-lg font-semibold text-green-900 mb-2">"
                Custom Implementation</h3>
              <p className="text-green-700">"
                Tailored loadingstates implementations for your specific requirements.</div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">"
              <h3 className="text-lg font-semibold text-purple-900 mb-2">"
                24/7 Support</h3>
              <p className="text-purple-700">"
                Round-the-clock support for all your loadingstates needs.</div>
          <div className="mt-12">"
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">"
              Get Started Today</div></div>
  )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingStates;
