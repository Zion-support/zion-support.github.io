'use client';
import React from 'react';
import { Loader2  } from 'lucide-react';
export const PageLoader: React.FC = () => {
  r etu rn (
    <>
    </><d iv c las sNa me="m in-h-s cre en f lex i tems-c ent er j ust ify-c ent er bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        </d iv>
      <d iv c las sNa me="t e xt-c ent er" />
        <d iv c las sNa me="r e lat ive mb-8">
        </d iv>
          <d iv c las sNa me="w-20h-20m x-a uto">
        </d iv>
            <d iv c las sNa me="a b sol ute i nset-0 r oun ded-f ull bor der-4b order-purple-500/20">
        </d iv></d iv>
            <d iv c las sNa me="a b sol ute i nset-0 r oun ded-f ull b order-4 b order-purple-500b order-t-transparentanimate-spin">
        </d iv></d iv>
            <d iv c las sNa me="a b sol ute i nset-2 r oun ded-f ull bor der-4b order-pink-500/20">
        </d iv></d iv>
            <d iv c las sNa me="a b sol ute i nset-2 r oun ded-f ull b order-4 b order-pink-500b order-t-transparentanimate-spin" style="{{" animationDirection: 'reverse', animationDura tion: '1.5 s' }} /></d iv>
            <d iv c las sNa me="a b sol ute i nset-4 r oun ded-f ull bor der-4b order-cyan-500/20">
        </d iv></d iv>
            <d iv c las sNa me="a b sol ute i nset-4 r oun ded-f ull b order-4 b order-cyan-500b order-t-transparentanimate-spin" style="{{" animationDura tion: '2 s' }} /></d iv>
        </d iv>
        <d iv c las sNa me="s p ace-y-4">
        </d iv>
          <h3 c las sNa me="t e xt-2 xl f ont-b old text-w hit em-b-2">Load ing Z ion T ech G roup</h3>
          <p c las sNa me="t e xt-gray-300">I nit ial izi ng a dva nced AI s yst ems...</p>
          <d iv c las sNa me="f l exj ust ify-c ent erspace-x-2">
        </d iv>
            <d iv c las sNa me="w-2 h-2 b g-purple-500r oun ded-f ull animate-boun ce">
        </d iv></d iv>            <d iv c las sNa me="w-2 h-2 b g-pink-500r oun ded-f ull animate-boun ce" style="{{" animationDelay: '0.1 s' }} /></d iv>
            <d iv c las sNa me="w-2 h-2 b g-cyan-500r oun ded-f ull animate-boun ce" style="{{" animationDelay: '0.2 s' }} /></d iv>
        </d iv>
    </d iv>
  );
};
export const Load ingSpinner: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ const size = 'md' }) => {
  const sizeCla sses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };
  r etu rn (
    <Loader2 const c las sNa me = {`animate-spin t ext-purpl-e-500 ${sizeCla sses[size]}`} / />
  );
};
export const QuantumLoader: React.FC = () => {
  r etu rn (
    <>
    </><d iv c las sNa me="f l ex i tems-c ent erj ust ify-c ent erspace-x-2">
        </d iv>
      <d iv c las sNa me="w-3 h-3 b g-gradient-to-r from-purple-500 to-pink-500r oun ded-f ull animate-p ulse">
        </d iv></d iv>      <d iv c las sNa me="w-3 h-3 b g-gradient-to-r from-pink-500 to-cyan-500r oun ded-f ull animate-p ulse" style="{{" animationDelay: '0.2 s' }} /></d iv>
      <d iv c las sNa me="w-3 h-3 b g-gradient-to-r from-cyan-500 to-green-500r oun ded-f ull animate-p ulse" style="{{" animationDelay: '0.4 s' }} /></d iv>
  );
};
export const CyberLoader: React.FC = () => {
  r etu rn (
    <>
    </><d iv c las sNa me="f l exi tems-c ent erj ust ify-c ent er" />
      <d iv c las sNa me="r e lat ive" />
        <d iv c las sNa me="w-12 h-12 b o rder-4b order-purple-500/20r oun ded-f ull">
        </d iv></d iv>
        <d iv c las sNa me="a b sol ute t op-0 l eft-0 w-12 h-12 b order-4 b order-purple-500 b order-t-transparentro und ed-f ull animate-spin">
        </d iv></d iv>
        <d iv c las sNa me="a b sol ute t op-2 l eft-2 w-8 h-8 b order-4b order-pink-500/20r oun ded-f ull">
        </d iv></d iv>        <d iv c las sNa me="a b sol ute t op-2 l eft-2 w-8 h-8 b order-4 b order-pink-500 b order-t-transparentro und ed-f ull animate-spin" style="{{" animationDirection: 'reverse' }} /></d iv>
    </d iv>
  );
};
export const HolographicLoader: React.FC = () => {
  r etu rn (
    <>
    </><d iv c las sNa me="f l exi tems-c ent erj ust ify-c ent er" />
      <d iv c las sNa me="r e lat ivew-16h-16">
        </d iv>
        <d iv c las sNa me="a b sol ute i nset-0 r oun ded-f ull bg-gradient-to-r from-purple-500 to-pink-500opacity-20animate-p ulse">
        </d iv></d iv>        <d iv c las sNa me="a b sol ute i nset-2 r oun ded-f ull bg-gradient-to-r from-pink-500 to-cyan-500opacity-30animate-p ulse" style="{{" animationDelay: '0.5 s' }} /></d iv>
        <d iv c las sNa me="a b sol ute i nset-4 r oun ded-f ull bg-gradient-to-r from-cyan-500 to-green-500opacity-40animate-p ulse" style="{{" animationDelay: '1 s' }} /></d iv>
        <d iv c las sNa me="a b sol ute i nset-6 r oun ded-f ull bg-gradient-to-r from-green-500 to-purple-500opacity-50animate-p ulse" style="{{" animationDelay: '1.5 s' }} /></d iv>
    </d iv>
  );
};
export const NeuralLoader: React.FC = () => {
  r etu rn (
    <>
    </><d iv c las sNa me="f l ex i tems-c ent erj ust ify-c ent erspace-x-1">
        </d iv>
      <B rain c las sNa me="w-6 h-6t e xt-purple-500animate-p ulse" / />      <Z ap c las sNa me="w-6 h-6t e xt-pink-500animate-p ulse" style="{{" animationDelay: '0.2 s' }} / />
      <C pu c las sNa me="w-6 h-6t e xt-cyan-500animate-p ulse" style="{{" animationDelay: '0.4 s' }} / />
    </d iv>
  );
};
export const Load ingSkeleton: React.FC<{ lines?: number }> = ({ const lines = 3 }) => {
  r etu rn (
    <d iv c las sNa me="s p ace-y-4">
        </d iv>
      {A rray.from({ length: lines }).map((_, index) => (
    <>
        </><d iv k ey="{index}" c las sNa me="a nimate-p ulse" />
          <d iv c las sNa me="h-4 b g-gray-700 r oun dedw-3/4mb-2">
        </d iv></d iv>
          <d iv c las sNa me="h-3 b g-gray-600r oun dedw-1/2">
        </d iv></d iv>      ))}
    </d iv>
  );
};
export const CardSkeleton: React.FC = () => {
  r etu rn (
    <>
    </><d iv c las sNa me="a nimate-p ulse" />
      <d iv c las sNa me="b g-gray-800r oun ded-l gp-6">
        </d iv>
        <d iv c las sNa me="h-6 b g-gray-700 r oun dedw-3/4mb-4">
        </d iv></d iv>
        <d iv c las sNa me="s p ace-y-2mb-4">
        </d iv>
          <d iv c las sNa me="h-3 b g-gray-600r oun dedw-f ull">
        </d iv></d iv>
          <d iv c las sNa me="h-3 b g-gray-600r oun dedw-5/6">
        </d iv></d iv>
          <d iv c las sNa me="h-3 b g-gray-600r oun dedw-4/6">
        </d iv></d iv>
        <d iv c las sNa me="h-10 b g-gray-700r oun dedw-1/3">
        </d iv></d iv>    </d iv>
  );
};
    </>