import React from 'react';

interface CardProps {children: React.ReactNode;
  className?: string;
}

interface CardHeaderProps {children: React.ReactNode;
  className?: string;
}

interface CardContentProps {children: React.ReactNode;
  className?: string;
}

interface CardTitleProps {children: React.ReactNode;
  className?: string;
}

interface CardDescriptionProps {children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({childrenclassName = '}) => {return (<div className ={`bg-whiterounded-lgbordershadow-sm ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader: React.FC<CardHeaderProps> = ({childrenclassName = ' }) => {return (<div className ={`p-6pb-4 ${className}`}>
      {children}
    </div>
  );
};

export const CardContent: React.FC<CardContentProps> = ({childrenclassName = ' }) => {return (<divclassName={`p-6pt-0 ${className}`}>
      {children}
    </div>
  );
};

export const CardTitle: React.FC<CardTitleProps> = ({childrenclassName = '}) => {return (<h3className={`text-lg, font-semiboldleading-nonetracking-tight ${className}`}>
      {children}
    </h3>
  );
};

export const CardDescription: React.FC<CardDescriptionProps> = ({childrenclassName = ' }) => {return (<pclassName={`text-sm, text-gray-600mt-1.5 ${className}`}>
      {children}
    </p>
  );
};