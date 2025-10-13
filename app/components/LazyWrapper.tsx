import React from "react";
import { Link , ArrowRight  } from "react-router-dom";
interface LazyWrapperProps {
  children: React.ReactNode;
  className?: string;
}
export default function LazyWrapper({
  children,
  className = "",
}: LazyWrapperProps) {
  return (
    <React.Fragment /><div className={`lazy-wrapper ${className}`}>
        {children}
        </div><Link;
          to="/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
        >
          Contact Us;
          </Link><ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </React.Fragment>
  );
}
