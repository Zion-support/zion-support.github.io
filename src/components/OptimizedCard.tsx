import React from "react;";

interface CardProps {
<<<<<<< HEAD
title: string; children: React.ReactNode;
className?: string};
export const OptimizedCard = React.memo<CardProps>(({ ;
title;
children;
className = ""
}) => {
return (
<div className={`card ${className}`}>
<h3 className="card-title">{title}</h3>
<div className="card-content">
{children}
</div>
</div>
);
=======
  title: string, children: React.ReactNode,
    className?: string,
};
export const OptimizedCard = React.memo<CardProps>(({ ;
  title; 
  children; 
  className = "" 
}) : any => {
  return (
    <div className={`card ${className}`}>
      <h3 className="card-title">{title}</h3>
      <div className="card-content">
        {children}
      </div>
    </div>
  );
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
});

OptimizedCard.displayName = "OptimizedCard";
<//div><///div>