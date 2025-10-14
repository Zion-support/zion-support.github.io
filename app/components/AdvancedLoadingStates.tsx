import React from 'react';

interface AdvancedLoadingStatesProps {
  type?: string;
  fullScreen?: boolean;
  message?: string;
}
;
const AdvancedLoadingStates: React.FC<AdvancedLoadingStatesProps> = ({ 
  type = 'spinner', 
  fullScreen, 
  message )
}) => {;
const getLoadingIcon = () => {
    switch (type) {
      case 'pulse':
        return <div className="animate-pulse rounded-full h-12 w-12 bg-white mx-auto mb-4"></div></div>;
      case 'wave':"
        return <div className="animate-bounce rounded-full h-12 w-12 bg-white mx-auto mb-4"></div></div>;
      case 'skeleton':"
        return <div className="animate-pulse rounded h-12 w-12 bg-gray-400 mx-auto mb-4"></div></div>;
      case 'dots':"
        return <div className="flex space-x-1 justify-center mb-4">
        <div className="animate-bounce w-2 h-2 bg-white rounded-full"></div></div>"
          <div className="animate-bounce w-2 h-2 bg-white rounded-full" style={{ animationDelay: '0.1s' }}></div></div>"
          <div className="animate-bounce w-2 h-2 bg-white rounded-full" style={{ animationDelay: '0.2s' }}></div></div>
        </div>;
      default:"
        return <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div></div>;
    }
  };

  return (
    <div className={`${fullScreen ? 'fixed inset-0' : ''} flex items-center justify-center bg-slate-900 text-white`}></div>"
      <div className="text-center"></div>)
        {getLoadingIcon()}
        <p>{message || 'Loading...'}</p>
      </div>
    </div>
  );
};
;
export default AdvancedLoadingStates;"
