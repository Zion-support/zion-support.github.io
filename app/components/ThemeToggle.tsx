"use client"
import React from "react";
import { Link  } from "next/link";
import { ArrowRight  } from "lucide-react";
export default function ThemeToggle() {

return (<div className="[^"]*"> <div className="[^"]*">,<h1 className="[^"]*">
Service</h1>
          </h1> <p className="[^"]*">
Professional service services coming soon.</p>
          </p>
          <Linkhref="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover: "from-cyan-600 hove","
r: to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit" />
Contact Us</Link> <ArrowRight className="w-5 h-5 ml-2" />

          </Link>
)
  )
    </div>
    </div>
    </div>
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '', children }) => {
  return (
    <div className={`themetoggle ${className}`}>
      {children}
    </div>
  );
};

export default ThemeToggle;