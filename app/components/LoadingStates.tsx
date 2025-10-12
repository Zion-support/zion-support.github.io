import React from 'react';
import { Loader2    } from 'lucide-react';
exportconstPageLoader: React.FC = () => {
  return (
    <divclassName="m in-h-screenflexitems-centerjustify-centerbg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900">
      <divclassName="t e xt-center">
        <divclassName="r e lativemb-8">
          <divclassName="w-20h-20m x-auto">
            <divclassName="a b soluteinset-0 rounded-fullborder-4border-purple-500/20"></div>
            <divclassName="a b soluteinset-0 rounded-fullborder-4 border-purple-500border-t-transparentanimate-spin"></div>
            <divclassName="a b soluteinset-2 rounded-fullborder-4border-pink-500/20"></div>
            <divclassName="a b soluteinset-2 rounded-fullborder-4 border-pink-500border-t-transparentanimate-spin" style="{{" animationDirection: 'reverse', animationDuration: '1.5 s' }} /></div>
            <divclassName="a b soluteinset-4 rounded-fullborder-4border-cyan-500/20"></div>
            <divclassName="a b soluteinset-4 rounded-fullborder-4 border-cyan-500border-t-transparentanimate-spin" style="{{" animationDuration: '2 s' }} /></div>
        </div>
        <divclassName="s p ace-y-4">
          <h3 className="t e xt-2 xlfont-boldtext-whitemb-2"  >LoadingZionTechGroup</h3>
          <pclassName="t e xt-gray-300">InitializingadvancedAIsystems...</p>
          <divclassName="f l exjustify-centerspace-x-2">
            <divclassName="w-2 h-2 b g-purple-500rounded-fullanimate-bounce"></div>
            <divclassName="w-2 h-2 b g-pink-500rounded-fullanimate-bounce" style="{{" animationDelay: '0.1 s' }} /></div>
            <divclassName="w-2 h-2 b g-cyan-500rounded-fullanimate-bounce" style="{{" animationDelay: '0.2 s' }} /></div>
        </div>
    </div>
  );
};

exportconstLoadingSpinner: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ constsize = 'md' }) => {
  constsizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };
  return (
    <Loader2 constclassName = {`animate-spintext-purple-500 ${sizeClasses[size]}`} / />
  );
};

exportconstQuantumLoader: React.FC = () => {
  return (
    <divclassName="f l exitems-centerjustify-centerspace-x-2">
      <divclassName="w-3 h-3 b g-gradient-to-rfrom-purple-500 to-pink-500rounded-fullanimate-pulse"></div>
      <divclassName="w-3 h-3 b g-gradient-to-rfrom-pink-500 to-cyan-500rounded-fullanimate-pulse" style="{{" animationDelay: '0.2 s' }} /></div>
      <divclassName="w-3 h-3 b g-gradient-to-rfrom-cyan-500 to-green-500rounded-fullanimate-pulse" style="{{" animationDelay: '0.4 s' }} /></div>
  );
};

exportconstCyberLoader: React.FC = () => {
  return (
    <divclassName="f l exitems-centerjustify-center">
      <divclassName="r e lative">
        <divclassName="w-12 h-12 b o rder-4border-purple-500/20rounded-full"></div>
        <divclassName="a b solutetop-0 left-0 w-12 h-12 border-4 border-purple-500 border-t-transparentrounded-fullanimate-spin"></div>
        <divclassName="a b solutetop-2 left-2 w-8 h-8 border-4border-pink-500/20rounded-full"></div>
        <divclassName="a b solutetop-2 left-2 w-8 h-8 border-4 border-pink-500 border-t-transparentrounded-fullanimate-spin" style="{{" animationDirection: 'reverse' }} /></div>
    </div>
  );
};

exportconstHolographicLoader: React.FC = () => {
  return (
    <divclassName="f l exitems-centerjustify-center">
      <divclassName="r e lativew-16h-16">
        <divclassName="a b soluteinset-0 rounded-fullbg-gradient-to-rfrom-purple-500 to-pink-500opacity-20animate-pulse"></div>
        <divclassName="a b soluteinset-2 rounded-fullbg-gradient-to-rfrom-pink-500 to-cyan-500opacity-30animate-pulse" style="{{" animationDelay: '0.5 s' }} /></div>
        <divclassName="a b soluteinset-4 rounded-fullbg-gradient-to-rfrom-cyan-500 to-green-500opacity-40animate-pulse" style="{{" animationDelay: '1 s' }} /></div>
        <divclassName="a b soluteinset-6 rounded-fullbg-gradient-to-rfrom-green-500 to-purple-500opacity-50animate-pulse" style="{{" animationDelay: '1.5 s' }} /></div>
    </div>
  );
};

exportconstNeuralLoader: React.FC = () => {
  return (
    <divclassName="f l exitems-centerjustify-centerspace-x-1">
      <BrainclassName="w-6 h-6t e xt-purple-500animate-pulse" />
      <ZapclassName="w-6 h-6t e xt-pink-500animate-pulse" style="{{" animationDelay: '0.2 s' }} / />
      <CpuclassName="w-6 h-6t e xt-cyan-500animate-pulse" style="{{" animationDelay: '0.4 s' }} / />
    </div>
  );
};

exportconstLoadingSkeleton: React.FC<{ lines?: number }> = ({ constlines = 3 }) => {
  return (
    <divclassName="s p ace-y-4">
      {Array.from({ length: lines }).map((_, index) => (
        <divkey="{index}" className="a n imate-pulse" />
          <divclassName="h-4 b g-gray-700 roundedw-3/4mb-2"></div>
          <divclassName="h-3 b g-gray-600roundedw-1/2"></div>
      ))}
    </div>
  );
};

exportconstCardSkeleton: React.FC = () => {
  return (
    <divclassName="a n imate-pulse">
      <divclassName="b g-gray-800rounded-lgp-6">
        <divclassName="h-6 b g-gray-700 roundedw-3/4mb-4"></div>
        <divclassName="s p ace-y-2mb-4">
          <divclassName="h-3 b g-gray-600roundedw-full"></div>
          <divclassName="h-3 b g-gray-600roundedw-5/6"></div>
          <divclassName="h-3 b g-gray-600roundedw-4/6"></div>
        <divclassName="h-10 b g-gray-700roundedw-1/3"></div>
    </div>
  );
};
    </>
