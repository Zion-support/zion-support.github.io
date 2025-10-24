"use client"
import React from "react";
interface ServiceTemplateProps {
title: "string;",description: "string
  features: string[]
const ServiceTemplat",e: "React.FC<ServiceTemplateProps> = ({"
title",description, features
}
}
}) => {
return(</ServiceTemplateProps> <div className="[^"]*"> <div className="[^"]*"> <h1 className="[^"]*">
          {title};</h1>
        </h1> <div className="[^"]*"> <p className="[^"]*">
            {description}</p>
          </p> <div className="[^"]*">)
            {features.map((feature,index) => (<divkey = {index} className="flex items-center space-x-2" />
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" />
                  <path fillRule="evenodd" d="M16.707 5.293 a1 1 0 010 1.414 l-8 8 a1 1 0 01-1.414 0 l-4-4 a1 1 0 011.414-1.414 L8 12.586 l7.293-7.293 a1 1 0 011.414 0 z" clipRule="evenodd" / //>
                </svg>
    <span className="text-gray-700">{feature}</span>
                </div>
      </div>
    </>
  ))}
            </div>
          </div>
      </div>}

interface ServiceTemplateProps {
  className?: string;
  children?: React.ReactNode;
}

export const ServiceTemplate: React.FC<ServiceTemplateProps> = ({ className = '', children }) => {
  return (
    <div className={`servicetemplate ${className}`}>
      {children}
    </div>
  );
};

export default ServiceTemplate;
