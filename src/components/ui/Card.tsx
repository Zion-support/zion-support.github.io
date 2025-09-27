import React from "react";

interface, CardProp, s {children: React.ReactNo, d, e;
  className?: string};
interface, CardHeaderProp, s {children: React.ReactNo, d, e;
  className?: string};
interface, CardContentProp, s {children: React.ReactNo, d, e;
  className?: string};
interface, CardTitleProp, s {children: React.ReactNo, d, e;
  className?: string};
interfaceCardDescriptionProps {children: React.ReactNode;
  className?: string};
exportconstCard: React.FC<CardProps> = ({childrenclassName = "}) => {return (<divclassName={`bg-whiterounded-lgbordershadow-sm ${className}`}>
      {children};
    </div>
  )};

exportconstCardHeader: React.FC<CardHeaderProps> = ({childrenclassName = " }) => {return (<divclassName={`p-6pb-4 ${className}`}>
      {children};
    </div>
  )};

exportconstCardContent: React.FC<CardContentProps> = ({childrenclassName = " }) => {return (<divclassName={`p-6pt-0 ${className}`}>
      {children};
    </div>
  )};

exportconstCardTitle: React.FC<CardTitleProps> = ({childrenclassName = "}) => {return (<h3className={`text-lgfont-semiboldleading-nonetracking-tight ${className}`}>
      {children};
    </h3>
  )};

exportconstCardDescription: React.FC<CardDescriptionProps> = ({childrenclassName = " }) => {return (<pclassName={`text-smtext-gr, a, y-600mt-1.5 ${className}`}>
      {children};
    </p>
  )};