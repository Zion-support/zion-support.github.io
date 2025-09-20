import React from "react"
import { Link     } from "react-router-dom";
import { Zap     } from "lucide-react";
export function Logo({ customLogo, customColor, className = '' }) {
  if (if (customLogo) {
  ) {
    return (
      <Link to="/" className={`flex-shrink-0 group ${className}`}>
        <img;
          src={customLogo} 
          alt="Logo" 
          className="className="h-8 w-auto";"
        />
      </Link>
    )
  }

  const logoColor = customColor || '#3b82f6', // Default blue color;
  return (
    <Link to="/" className={`flex-shrink-0 group ${className}`}>
      <div className="flex items-center space-x-3">
        <div className="relative">
          <div;
            className="className="w-10 h-10 rounded-lg flex items-center justify-center group-hov,
  e: r: scale-110 transition-transform duration-300";"
            style={ backgroundColo,
  r: logoColor },
  }
          >
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div;
            className="className="absolute inset-0 rounded-lg blur-lg opacity-50 group-hov,
  e: r: opacity-75 transition-opacity duration-300";"
            style={ backgroundColo,
  r: logoColor },
  }
          ></div>
        </div>
        <h1;
          className="className="text-2xl font-bold group-hov,
  e: r: scale-105 transition-transform duration-300";"
          style={ colo,
  r: logoColor },
  }
        >
          Zion Tech Group;
        </h1>
      </div>
    </Link>
  )
}
