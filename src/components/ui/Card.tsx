import React from "react";

interface, CardProp, s {children: React.ReactNo, d, e;
  classNa, m, e?: string};
interface, CardHeaderProp, s {children: React.ReactNo, d, e;
  classNa, m, e?: string};
interface, CardContentProp, s {children: React.ReactNo, d, e;
  classNa, m, e?: string};
interface, CardTitleProp, s {children: React.ReactNo, d, e;
  classNa, m, e?: string};
interface, CardDescriptionProp, s {children: React.ReactNo, d, e;
  className?: string};
exportconstCard: React.FC<CardProps> = ({childrenclassName = "}) => {return (<divclassNam, e={`bg-whiteround, e, d-lgbordershad, o, w-sm ${className}`}>
      {children};
    </div>
  )};

exportconstCardHeader: React.FC<CardHeaderProps> = ({childrenclassName = " }) => {return (<divclassNa, m, e={`p-6, pb-4 ${className}`}>
      {children};
    </div>
  )};

exportconstCardContent: React.FC<CardContentProps> = ({childrenclassName = " }) => {return (<divclassName={`p-6pt-0 ${className}`}>
      {children};
    </div>
  )};

exportconstCardTitle: React.FC<CardTitleProps> = ({childrenclassName = "}) => {return (<h3className={`tex, t-lgfo, n, t-semiboldleadi, n, g-nonetracki, n, g-tig, ht ${className}`}>
      {children};
    </h3>
  )};

exportconstCardDescription: React.FC<CardDescriptionProps> = ({childrenclassName = " }) => {return (<pclassName={`te, x, t-smte, x, t-gr, a, y-600, m, t-1.5 ${className}`}>
      {children};
    </p>
  )};