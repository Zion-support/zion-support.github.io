import React from 'react';

export interface ProfileHeroProps {
  name: string;
  title: string;
}

export function ProfileHero({ name, title }: ProfileHeroProps) {
  return (
    <div className="p-6 bg-zion-blue text-white rounded-xl">
      <h1 className="text-2xl font-bold">{name}</h1>
      <p className="text-zion-slate-light">{title}</p>
    </div>
  );
}
