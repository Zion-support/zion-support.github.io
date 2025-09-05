import React from 'react';

type Props = {
  title: string;
  description: string;
  cta?: React.ReactNode;
};

export default function FuturisticCard({ title, description, cta }: Props) {
  return (
    <div className=&quot;futuristic-card&quot;>
      <div className=&quot;futuristic-card-glow&quot; />
      <div className=&quot;relative z-10&quot;>
        <h3 className=&quot;font-semibold text-gray-100&quot;>{title}</h3>
        <p className=&quot;text-sm text-gray-300 mt-1&quot;>{description}</p>
        {cta && <div className=&quot;mt-3&quot;>{cta}</div>}
      </div>
    </div>
  );
}
