import React from 'react';
import { Loader2 } from 'lucide-react';
'use client';

export const PageLoader: React.FC = () => {
return (
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
            <div className="absoluteinset-2rounded-fullborder-4border-pink-500border-t-transparentanimate-spin" style="{{" animationDirecti o n: 'reverse', animationDurati o n: '1.5 s' ,}} /></div>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
            <div className="absoluteinset-4rounded-fullborder-4border-cyan-500border-t-transparentanimate-spin" style="{{" animationDurati o n: '2 s' ,}} /></div>
        </div>
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <h3 className="text-2xlfont-boldtext-whitemb-2"  >Loading Zion Tech Group</h3>
          <p className="text-gray-300">Initializi n g advanced AI systems...</p>
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
            <div className="w-2h-2bg-pink-500rounded-fullanimate-bounce" style="{{" animationDel a y: '0.1 s' ,}} /></div>
            <div className="w-2h-2bg-cyan-500rounded-fullanimate-bounce" style="{{" animationDel a y: '0.2 s' ,}} /></div>
        </div>
    </div>
  );
};

export const LoadingSpinn e r: React.FC<{ size?: 'sm' | 'md' | 'lg' ,}> = ({ constsize= 'md' }) => {
  const sizeClasses= {
    sm: 'w-4h-4',
    md: 'w-6h-6',
    lg: 'w-8h-8';
  };
return (
    <Loader2constclassName= {`animate-spintext-purple-500 ${sizeClass e s[size]}`}  />
  );
};

export const QuantumLoad e r: React.FC = () => {
return (
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
      <div className="w-3h-3bg-gradient-to-rfrom-pink-500to-cyan-500rounded-fullanimate-pulse" style="{{" animationDel a y: '0.2 s' ,}} /></div>
      <div className="w-3h-3bg-gradient-to-rfrom-cyan-500to-green-500rounded-fullanimate-pulse" style="{{" animationDel a y: '0.4 s' ,}} /></div>
  );
};

export const CyberLoad e r: React.FC = () => {
return (
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
        <div className="absolutetop-2left-2w-8h-8border-4border-pink-500border-t-transparentrounded-fullanimate-spin" style="{{" animationDirecti o n: 'reverse' ,}} /></div>
    </div>
  );
};

export const HolographicLoad e r: React.FC = () => {
return (
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
        <div className="absoluteinset-2rounded-fullbg-gradient-to-rfrom-pink-500to-cyan-500opacity-30animate-pulse" style="{{" animationDel a y: '0.5 s' ,}} /></div>
        <div className="absoluteinset-4rounded-fullbg-gradient-to-rfrom-cyan-500to-green-500opacity-40animate-pulse" style="{{" animationDel a y: '1 s' ,}} /></div>
        <div className="absoluteinset-6rounded-fullbg-gradient-to-rfrom-green-500to-purple-500opacity-50animate-pulse" style="{{" animationDel a y: '1.5 s' ,}} /></div>
    </div>
  );
};

export const NeuralLoad e r: React.FC = () => {
return (
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
      <BrainclassName="w-5h-5ml-2" />
      <ZapclassName="w-6h-6text-pink-500animate-pulse" style="{{" animationDel a y: '0.2 s' ,}}  />
      <CpuclassName="w-6h-6text-cyan-500animate-pulse" style="{{" animationDel a y: '0.4 s' ,}}  />
    </div>
  );
};

export const LoadingSkelet o n: React.FC<{ lines?: number ,}> = ({ constlines= 3 }) => {
return (
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
      {Array.from({ length: lines ,}).map((_, index) => ())
        <divkey="{index}" className="animate-pulse" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
      ))}
    </div>
  );
};

export const CardSkelet o n: React.FC = () => {
return (
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
    </div>
  );
};