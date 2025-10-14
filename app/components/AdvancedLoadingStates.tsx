import React from 'react;
interface AdvancedLoadingStatesProps {
  type?: string;
  fullScreen?: boolean;
  message?: string;

}
;
const AdvancedLoadingStates: React.FC<AdvancedLoadingStatesProps> = ({ 
  type = ';;spinner', 
  fullScreen, 
  message )
}) => {;
const getLoadingIcon = () => {
    switch (type) {
      case 'pulse':
        return <div />
      case 'wave':"
        return <div />
      case 'skeleton':"
        return <div />
      case 'dots':"
        return <div className="flex space-x-1 justify-center mb-4">
        <div />"
          <div />"
          <div />
        </div>;
      default:"""
        return <div />;""
    }
  };

const AdvancedLoadingStatesPage = () => {
  return (
    <div className={`${fullScreen ? 'fixed inset-0' : ''} flex items-center justify-center bg-slate-900 text-white`}>"""
      <div className="text-center">)""
        {getLoadingIcon()}
        <p>{message || 'Loading...'}</p>
      </div>
    
    </div>
  );
};

export default AdvancedLoadingStates;

}