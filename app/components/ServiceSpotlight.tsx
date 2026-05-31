'use client';
import { useState } from 'react';

interface Service {
  name?: string;
  title?: string;
  description?: string;
  icon?: string;
  href?: string;
  category?: string;
}

interface ServiceSpotlightProps {
  services: Service[];
}

export default function ServiceSpotlight({ services }: ServiceSpotlightProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleServices = services.slice(0, 5);

  if (!visibleServices.length) return null;

  const active = visibleServices[activeIndex];

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
      <h3 className="text-2xl font-bold text-white mb-6 text-center">🌟 Service Spotlight</h3>
      
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {visibleServices.map((s, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeIndex === i
                ? 'bg-indigo-600 text-white'
                : 'bg-white/5 text-gray-400 hover:bg-white/10'
            }`}
          >
            {s.icon || '⭐'} {s.name || s.title}
          </button>
        ))}
      </div>

      <div className="text-center">
        <div className="text-4xl mb-3">{active.icon || '⭐'}</div>
        <h4 className="text-xl font-bold text-white mb-2">{active.name || active.title}</h4>
        <p className="text-gray-300 max-w-2xl mx-auto mb-4">{active.description}</p>
        {active.href && (
          <a
            href={active.href}
            className="inline-block px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
          >
            Learn More →
          </a>
        )}
      </div>
    </div>
  );
}
