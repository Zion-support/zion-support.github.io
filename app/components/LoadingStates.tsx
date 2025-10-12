'use client';
import React from 'react';
import { Loader2 } from 'lucide-react';

export const PageLoader: React.F C = () => {
  return (

    <d iv class Name="m in-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        </d iv>
      <d iv class Name="t ext-center" />
        <d iv class Name="r elativemb-8">
        </d iv>
          <d iv class Name="w-20h-20m x-auto">
        </d iv>
            <d iv class Name="a bsolute inset-0 rounded-fullborder-4border-purple-500/20">
        </d iv></d iv>
            <d iv class Name="a bsolute inset-0 rounded-full border-4 border-purple-500border-t-transparentanimate-spin">
        </d iv></d iv>
            <d iv class Name="a bsolute inset-2 rounded-fullborder-4border-pink-500/20">
        </d iv></d iv>
            <d iv class Name="a bsolute inset-2 rounded-full border-4 border-pink-500border-t-transparentanimate-spin" style="{{" animation Direction: 'reverse', animation Duration: '1.5 s' }} /></d iv>
            <d iv class Name="a bsolute inset-4 rounded-fullborder-4border-cyan-500/20">
        </d iv></d iv>
            <d iv class Name="a bsolute inset-4 rounded-full border-4 border-cyan-500border-t-transparentanimate-spin" style="{{" animation Duration: '2 s' }} /></d iv>
        </d iv>
        <d iv class Name="s pace-y-4">
        </d iv>
          <h3 c lass Name="t ext-2 xl font-boldtext-whitemb-2">Loading Zion Tech Group</h3>
          <p c lass Name="t ext-gray-300">Initializing advanced A I systems...</p>
          <d iv class Name="f lexjustify-centerspace-x-2">
        </d iv>
            <d iv class Name="w-2 h-2 b g-purple-500rounded-fullanimate-bounce">
        </d iv></d iv>
            <d iv class Name="w-2 h-2 b g-pink-500rounded-fullanimate-bounce" style="{{" animation Delay: '0.1 s' }} /></d iv>
            <d iv class Name="w-2 h-2 b g-cyan-500rounded-fullanimate-bounce" style="{{" animation Delay: '0.2 s' }} /></d iv>
        </d iv>
    </d iv>
  );
};

export const Loading Spinner: React.F C<{ s ize?: 'sm' | 'md' | 'lg' }> = ({ const size = 'md' }) => {
  const size Classes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };
  return (
    <L oader2 const class Name = {`animate-spin text-purple-500 ${size Classes[size]}`} / />
  );
};

export const Quantum Loader: React.F C = () => {
  return (

    <d iv class Name="f lex items-centerjustify-centerspace-x-2">
        </d iv>
      <d iv class Name="w-3 h-3 b g-gradient-to-r from-purple-500 to-pink-500rounded-fullanimate-pulse">
        </d iv></d iv>
      <d iv class Name="w-3 h-3 b g-gradient-to-r from-pink-500 to-cyan-500rounded-fullanimate-pulse" style="{{" animation Delay: '0.2 s' }} /></d iv>
      <d iv class Name="w-3 h-3 b g-gradient-to-r from-cyan-500 to-green-500rounded-fullanimate-pulse" style="{{" animation Delay: '0.4 s' }} /></d iv>
  );
};

export const Cyber Loader: React.F C = () => {
  return (

    <d iv class Name="f lexitems-centerjustify-center" />
      <d iv class Name="r elative" />
        <d iv class Name="w-12 h-12 b order-4border-purple-500/20rounded-full">
        </d iv></d iv>
        <d iv class Name="a bsolute top-0 left-0 w-12 h-12 border-4 border-purple-500 border-t-transparentrounded-fullanimate-spin">
        </d iv></d iv>
        <d iv class Name="a bsolute top-2 left-2 w-8 h-8 border-4border-pink-500/20rounded-full">
        </d iv></d iv>
        <d iv class Name="a bsolute top-2 left-2 w-8 h-8 border-4 border-pink-500 border-t-transparentrounded-fullanimate-spin" style="{{" animation Direction: 'reverse' }} /></d iv>
    </d iv>
  );
};

export const Holographic Loader: React.F C = () => {
  return (

    <d iv class Name="f lexitems-centerjustify-center" />
      <d iv class Name="r elativew-16h-16">
        </d iv>
        <d iv class Name="a bsolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500opacity-20animate-pulse">
        </d iv></d iv>
        <d iv class Name="a bsolute inset-2 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500opacity-30animate-pulse" style="{{" animation Delay: '0.5 s' }} /></d iv>
        <d iv class Name="a bsolute inset-4 rounded-full bg-gradient-to-r from-cyan-500 to-green-500opacity-40animate-pulse" style="{{" animation Delay: '1 s' }} /></d iv>
        <d iv class Name="a bsolute inset-6 rounded-full bg-gradient-to-r from-green-500 to-purple-500opacity-50animate-pulse" style="{{" animation Delay: '1.5 s' }} /></d iv>
    </d iv>
  );
};

export const Neural Loader: React.F C = () => {
  return (

    <d iv class Name="f lex items-centerjustify-centerspace-x-1">
        </d iv>
      <B rain class Name="w-6 h-6t ext-purple-500animate-pulse" / />
      <Z ap class Name="w-6 h-6t ext-pink-500animate-pulse" style="{{" animation Delay: '0.2 s' }} / />
      <C pu class Name="w-6 h-6t ext-cyan-500animate-pulse" style="{{" animation Delay: '0.4 s' }} / />
    </d iv>
  );
};

export const Loading Skeleton: React.F C<{ l ines?: number }> = ({ const lines = 3 }) => {
  return (
    <d iv class Name="s pace-y-4">
        </d iv>
      {Array.from({ length: lines }).map((_, index) => (

        <d iv key="{index}" class Name="a nimate-pulse" />
          <d iv class Name="h-4 b g-gray-700 roundedw-3/4mb-2">
        </d iv></d iv>
          <d iv class Name="h-3 b g-gray-600roundedw-1/2">
        </d iv></d iv>
      ))}
    </d iv>
  );
};

export const Card Skeleton: React.F C = () => {
  return (

    <d iv class Name="a nimate-pulse" />
      <d iv class Name="b g-gray-800rounded-lgp-6">
        </d iv>
        <d iv class Name="h-6 b g-gray-700 roundedw-3/4mb-4">
        </d iv></d iv>
        <d iv class Name="s pace-y-2mb-4">
        </d iv>
          <d iv class Name="h-3 b g-gray-600roundedw-full">
        </d iv></d iv>
          <d iv class Name="h-3 b g-gray-600roundedw-5/6">
        </d iv></d iv>
          <d iv class Name="h-3 b g-gray-600roundedw-4/6">
        </d iv></d iv>
        <d iv class Name="h-10 b g-gray-700roundedw-1/3">
        </d iv></d iv>
    </d iv>
  );
};
