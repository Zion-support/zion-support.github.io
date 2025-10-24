'use client'
import { ArrowRig, h, t } from 'lucide-react'
import React from 'react'
<<<<<<< HEAD
<<<<<<< HEAD
import { CheckCircle, Star, ArrowRight } from "lucide-react";
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-dbdf

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2f6c
interface MicroSAASCardProps {
  service: {
    title: string;
    description: string;
    icon: string;
    price: string;
    features: string[]
    benefits: string[]
    marketPrice?: string;
    category: string;
    technologies: string[]
    contactInfo: string
    link?: string
    popular?: boolean
 , }
}

const MicroSAASCard: React.FC<MicroSAASCardProps> = ({ service, }) => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          MicroSAASCard
        </h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600">
            This page is under construction. Please check back later.
          </p>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1c80
        </div>
      </div>
    </div>
  )
}

=======
import React from "react";
interface MicroSAASCardProps { className?: string }
}
}
}

const MicroSAASCard: "React.FC<MicroSAASCardProps> = ({ className=" "}) => { return (</MicroSAASCardProps> }
    <divclassName = {className} / />
      <h2>MicroSAASCard</h2>
      <p>This component is under construction.</p>
      </div>
        </>
  );
  )
}

export const MicroSAASCard: React.FC<MicroSAASCardProps> = ({ className = '', children }) => { return ( }
    <div className={`microsaascard ${className}`}>
      {children}
    </div>
  );
import React from 'react';
interface MicroSAASCardProps { ;
className?: string; }
}
}
}'
const MicroSAASCard: "React.FC<MicroSAASCardProps> = ({ className = '' "}) => { ;
return(</>; }
    <div className={className} /  />
      <h2>MicroSAASCard</h2>
      <p>This component is under construction.</p>);
      </div>);
  )}
export default MicroSAASCard}";'
};

>>>>>>> d05312d5d680673ba2e628470e93a08bc6917172
export default MicroSAASCard;
"`