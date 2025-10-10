'use client';
import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
interface ServiceCardProps {
    title: string;
  description: string;
  features: string[]
  price?: string
  popular?: boolean
  onSelect?: () => void,
  className?: string
  }
const ServiceCard: React.FC<ServiceCardProps> = ()
}) => {
  return ()
      )}
      <div className="mb-4" /></div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors" /></h3>
          {title}
        </h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
      <div className="space-y-2 mb-6" /></div>
        {features.map((feature, index) => ()
        ))}
      </div>
      {price && ()
      )},
    {onSelect && ()
      )}
    </div>
  );
};

export default ServiceCard
  </ServiceCardProps>
