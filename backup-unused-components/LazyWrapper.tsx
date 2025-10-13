import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
interface LazyWrapperProps 
  children: React.ReactNode;
  className?: string;

export default function LazyWrapper(
  children,
  className = "",
: LazyWrapperProps) 
  return (
    <>
      <div className="{`lazy-wrapper" ${className}`}></div>
        {children}
        <Link
          to="/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
        >
          Contact Us
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </>
  );
