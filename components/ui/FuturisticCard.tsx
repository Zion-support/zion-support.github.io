import React from 'react'
type Props = {
  title: string,
  description: string,
  cta?: React.ReactNode
},

export default function FuturisticCard({ title, description, cta }: Props) {
  return (
    <div className=&quot;futuristic-card&quot;>
      <div className=&quot;futuristic-card-glow&quot; />
      <div className=&quot;relative z-10&quot;>
        <h3 className=&quot;font-semibold text-gray-100&quot;>{title}</h3>
        <p className=&quot;text-sm text-gray-300 mt-1&quot;>{description}</p>
        {cta && <div className=&quot;mt-3&quot;>{cta}</div>}
import React from 'react';

type Props = {_title: string;
  description: string;
  cta?: React.ReactNode;};

export default function FuturisticCard(_{_title, _description, _cta}: Props) {_return (
    <div className="futuristic-card">
      <div className="futuristic-card-glow" />
      <div className="relative z-10">
        <h3 className="font-semibold text-gray-100">{title}</h3>
        <p className="text-sm text-gray-300 mt-1">{_description}</p>
        {_cta && <div className="mt-3">{cta}</div>}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </div>
    </div>
  )
}
