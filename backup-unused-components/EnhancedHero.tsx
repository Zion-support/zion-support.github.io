import React from 'react';
interface EnhancedHeroProps {
import React from "react"lucide-react";
import { Link } from ";
interface EnhancedHeroProps;
  title?: string;
  subtitle?: string;
  description?: string;
  primaryCta?: ,
    text: string;,
    href: string;
;
  secondaryCta?: ,
    text: string;,
    href: string;
;
  benefits?: string[];
  backgroundImage?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function EnhancedHero({ className = '', children }: EnhancedHeroProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
    <div;
const EnhancedHero: React.FC<EnhancedHeroProps> = (
  title = "Transform Your Business with AI"Leading Provider of AI Solutions",
  description = ",
  primaryCta =
  primaryCta = ,
    text: "Get Started"/contact",
,
  secondaryCta = ,
    text: ",
      href: "/about"Get Started",
//     href: ",
  },
  secondaryCta = {
//     text: "Learn More"/about",
  },
  benefits = [
//     ",
//     "Real-time processing and analytics"Enterprise-grade security and compliance",
//     ",
//     "24/7 technical support"Custom implementation and training",
//   ],
  backgroundImage = ",
  className = "",
      details: "+1 (555) 123-4567"Mon-Fri 9 AM-6 PM PST",
  const contactInfo = [,
    icon: Phone,
        title: ",
        details: "+1 (555) 123-4567"Mon-Fri 9 AM-6 PM PST",
,
    ,
    icon: Mail,
        title: ",
        details: "info@ziontechgroup.com"We respond within 24 hours",
,
    ,
    icon: MapPin,
        title: ",
        details: "123 Tech Street, San Francisco, CA"Schedule a meeting",
,
    {
//       icon: Phone,
//       title: ",
      details: "+1 (555) 123-4567"Mon-Fri 9 AM-6 PM PST",
    },
    {
//       icon: Mail,
//       title: ",
//       details: "info@ziontechgroup.com"We respond within 24 hours",
    },
    {
//       icon: MapPin,
//       title: ",
//       details: "123 Tech Street, San Francisco, CA"Schedule a meeting",
    },
  ];
  return (
    <div
      className="{`relative" min-h-screen flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style=" backgroundImage: `url(${backgroundImage})` {}
          <div>
  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" backgroundImage: `url(${backgroundImage})` {}
          />
  </div>
//     <div
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}
//     >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
            style={{ backgroundImage: `url(${backgroundImage})` }
//           />
        )}
</div>

      </div>
      {/* Content */}
      <div className="relative z-10 max-w-7 xl mx-auto px-4 py-20"></div>
          {/* Left Column */}
          <div className="space-y-8"></h1>
                {title}
              </h1>
              <p className="text-xl text-cyan-400 mb-4 font-semibold">
//             <div>
              <h1 className="text-4 xl md:text-5 xl lg:text-6 xl font-bold text-white mb-6">
                {subtitle}
</p>
              <p className="text-lg text-gray-300 mb-8"></div>
              <Link;
            </div>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
//               <Link
                to={primaryCta.href}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                {primaryCta.text}
                <ArrowRight className="w-5 h-5 ml-2"
//               >
              <Link>
  to={secondaryCta.href}>
  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"></div>

                <div key="{index}"flex items-center text-gray-300"w-5 h-5 text-green-400 mr-3 flex-shrink-0"text-sm"space-y-6"bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"text-xl font-semibold text-white mb-6 text-center"space-y-4"{index}"flex items-start space-x-4"flex-shrink-0"w-6 h-6 text-cyan-400"space-y-6"bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"text-xl font-semibold text-white mb-6 text-center"space-y-4"flex items-start space-x-4"flex-shrink-0"w-6 h-6 text-cyan-400"text-white font-medium"text-gray-300"text-gray-400 text-sm"grid grid-cols-3 gap-4"text-center"text-2 xl font-bold text-white"text-gray-400 text-sm"text-center"text-2 xl font-bold text-white"text-gray-400 text-sm"text-center"text-center"text-2 xl font-bold text-white"text-gray-400 text-sm"text-center"text-2 xl font-bold text-white"text-gray-400 text-sm">Support</div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
</div>
</div>
</div>
</div>
</div>
</div>
className?: string;
  children?: React.ReactNode;
}

  );
