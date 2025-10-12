import React from 'react';
;
interfaceLoadingProps {size?: 'sm' | 'md' | 'lg';
  text?: stringfullScreen?: booleancolor?: string;
}
;
constEnhancedLoading: React.FC<LoadingProps /> = ({constsize = 'md',;
  text = 'Loading...',;
  fullScreen = false,;
  color = 'cyan';
}) => {constsizeClasses = {
    sm: 'w-4 h-4',;
    md: 'w-8 h-8',;
    lg: 'w-12 h-12';
  }
;
  constcolorClasses = {cyan: 'border-cyan-400',;
    purple: 'border-purple-400',;
    pink: 'border-pink-400',;
    blue: 'border-blue-400',;
    green: 'border-green-400';
  }
;
  constspinner = (;
    <divclassName="f l exflex-colitems-centerjustify-centerspace-y-4">;
      <divclassName="{`${s i zeClasses[size]}" ${colorClasses[coloraskeyoftypeof, colorClasses]} border-2 border-t-transparentrounded-fullanimate-spin`} / />;
      {text && (;
    <>;
        <divclassName="t e xt-smtext-gray-300animate-pulse">{text}
        </div>;
      )}
    </div>;
  );
  if (fullScreen) {return (;
    <>;
      <divclassName="f i xedinset-0 bg-gray-900 bg-opacity-90 flexitems-centerjustify-centerz-50">{spinner}
      </div>;
    );
  }
;
  returnspinner;
}
;
exportdefaultEnhancedLoading;
    </>;
