
import React from "react",;
import { cn } from "@/lib/utils",;
import { Button } from "@/components/ui/button",;
import { Link } from "react-router-dom",;
;
interface EmptyStateProps {;
  icon:React.ReactNode,;
  title:string,;
  description:string,;
  action?:{;
    text:string,;
    href?:string,;
    onClick?:() => void;
  },;
  secondaryAction?:{;
    text:string,;
    href?:string,;
    onClick?:() => void;
  },;
  className?:string,;
}
;
export function EmptyState({;
  icon,;
  title,;
  description,;
  action,;
  secondaryAction,;
  className} EmptyStateProps) {;
  return (;
    <div;
      className={cn(;
        "flex flex-col items-center justify-center text-center p-6 md:p-10 rounded-lg border border-zion-blue-light bg-zion-blue-dark/50",;
        className;
      )}
    >;
      <div className="bg-zion-blue/30 p-6 rounded-full mb-6">;
        {icon}
      </div>;
      <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>;
      <p className="text-zion-slate text-lg mb-8 max-w-md">{description}</p>;

            </Button>;
          );
        )}
      </div>;
    </div>;
