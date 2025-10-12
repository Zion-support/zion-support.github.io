import React from 'react';
import {Loader2} from 'lucide-react';
'use client';

export const Page Loader: React.FC = () => {
  return (
    <div className ="min-h-screen flex items-center justify-centerbg-gradient-to-brfrom-slate-900via-purple-900to-slate-900" />
      <div className ="text-center" />
        <div className ="relativemb-8" />
          <div className ="w-20h-20mx-auto" />
            <div className ="absoluteinset-0 rounded-fullborder-4border-purple-500/20" /></div>
            <div className ="absoluteinset-0 rounded-fullborder-4 border-purple-500border-t-transparentanimate-spin" /></div>
            <div className ="absoluteinset-2 rounded-fullborder-4border-pink-500/20" /></div>
            <div className ="absoluteinset-2 rounded-fullborder-4 border-pink-500border-t-transparentanimate-spin" style="{{" animationDirection: 'reverse', animationDuration: '1.5 s' }} /></div>
            <div className ="absoluteinset-4 rounded-fullborder-4border-cyan-500/20" /></div>
            <div className ="absoluteinset-4 rounded-fullborder-4 border-cyan-500border-t-transparentanimate-spin" style="{{" animationDuration: '2 s' }} /></div>
          </div>
        </div>
        <div className ="space-y-4" />
          <h3className ="text-2 xlfont-boldtext-whitemb-2"  >LoadingZion TechGroup</h3>
          <pclassName ="text-gray-300">Initializingadvanced AIsystems...</p>
          <div className ="flexjustify-centerspace-x-2" />
            <div className ="w-2 h-2 bg-purple-500rounded-fullanimate-bounce" /></div>
            <div className ="w-2 h-2 bg-pink-500rounded-fullanimate-bounce" style="{{" animationDelay: '0.1 s' }} /></div>
            <div className ="w-2 h-2 bg-cyan-500rounded-fullanimate-bounce" style="{{" animationDelay: '0.2 s' }} /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Loading Spinner: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ constsize = 'md' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };
  return (
    <Loader2const className = {`animate-spintext-purple-500 ${sizeClasses[size]}`} / />
  );
};

export const Quantum Loader: React.FC = () => {
  return (
    <div className ="flexitems-centerjustify-centerspace-x-2" />
      <div className ="w-3 h-3 bg-gradient-to-rfrom-purple-500 to-pink-500rounded-fullanimate-pulse" /></div>
      <div className ="w-3 h-3 bg-gradient-to-rfrom-pink-500 to-cyan-500rounded-fullanimate-pulse" style="{{" animationDelay: '0.2 s' }} /></div>
      <div className ="w-3 h-3 bg-gradient-to-r from-cyan-500 to-green-500rounded-fullanimate-pulse" style="{{" animationDelay: '0.4 s' }} /></div>
    </div>
  );
};

export const Cyber Loader: React.FC = () => {
  return (
    <div className ="flexitems-centerjustify-center" />
      <div className ="relative" />
        <div className ="w-12 h-12 border-4border-purple-500/20rounded-full" /></div>
        <div className ="absolutetop-0 left-0 w-12 h-12 border-4 border-purple-500 border-t-transparentrounded-fullanimate-spin" /></div>
        <div className ="absolutetop-2 left-2 w-8 h-8 border-4border-pink-500/20rounded-full" /></div>
        <div className ="absolutetop-2 left-2 w-8 h-8 border-4 border-pink-500 border-t-transparentrounded-fullanimate-spin" style="{{" animationDirection: 'reverse' }} /></div>
      </div>
    </div>
  );
};

export const Holographic Loader: React.FC = () => {
  return (
    <div className ="flexitems-centerjustify-center" />
      <div className ="relativew-16h-16" />
        <div className ="absoluteinset-0 rounded-fullbg-gradient-to-rfrom-purple-500 to-pink-500opacity-20animate-pulse" /></div>
        <div className ="absoluteinset-2 rounded-fullbg-gradient-to-rfrom-pink-500 to-cyan-500opacity-30animate-pulse" style="{{" animationDelay: '0.5 s' }} /></div>
        <div className ="absoluteinset-4 rounded-fullbg-gradient-to-r from-cyan-500 to-green-500opacity-40animate-pulse" style="{{" animationDelay: '1 s' }} /></div>
        <div className ="absoluteinset-6 rounded-fullbg-gradient-to-rfrom-green-500 to-purple-500opacity-50animate-pulse" style="{{" animationDelay: '1.5 s' }} /></div>
      </div>
    </div>
  );
};

export const Neural Loader: React.FC = () => {
  return (
    <div className ="flexitems-centerjustify-centerspace-x-1" />
      <Brainclass Name ="w-6 h-6text-purple-500animate-pulse" / />
      <Zapclass Name ="w-6 h-6text-pink-500animate-pulse" style="{{" animationDelay: '0.2 s' }} / />
      <Cpuclass Name ="w-6 h-6text-cyan-500animate-pulse" style="{{" animationDelay: '0.4 s' }} / />
    </div>
  );
};

export const Loading Skeleton: React.FC<{ lines?: number }> = ({ constlines = 3 }) => {
  return (
    <div className ="space-y-4" />
      {Array.from({ length: lines }).map((_, index) => (
        <divkey ="{index}" className="animate-pulse" />
          <div className ="h-4 bg-gray-700 roundedw-3/4mb-2" /></div>
          <div className ="h-3 bg-gray-600roundedw-1/2" /></div>
        </div>
      ))}
    </div>
  );
};

export const Card Skeleton: React.FC = () => {
  return (
    <div className ="animate-pulse" />
      <div className ="bg-gray-800rounded-lgp-6" />
        <div className ="h-6 bg-gray-700 roundedw-3/4mb-4" /></div>
        <div className ="space-y-2mb-4" />
          <div className ="h-3 bg-gray-600roundedw-full" /></div>
          <div className ="h-3 bg-gray-600roundedw-5/6" /></div>
          <div className ="h-3 bg-gray-600roundedw-4/6" /></div>
        </div>
        <div className ="h-10 bg-gray-700roundedw-1/3" /></div>
      </div>
    </div>
  );
};