import React from 'react';
<<<<<<< HEAD
=======

>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
const Card = ({ children, className = '' }) => {
    return (<div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}>
      {children}
    </div>);
};
<<<<<<< HEAD
=======

>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
const CardHeader = ({ children, className = '' }) => {
    return (<div className={`flex flex-col space-y-1.5 p-6 ${className}`}>
      {children}
    </div>);
};
<<<<<<< HEAD
=======

>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
const CardTitle = ({ children, className = '' }) => {
    return (<h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`}>
      {children}
    </h3>);
};
<<<<<<< HEAD
=======

>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
const CardDescription = ({ children, className = '' }) => {
    return (<p className={`text-sm text-muted-foreground ${className}`}>
      {children}
    </p>);
};
<<<<<<< HEAD
=======

>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
const CardContent = ({ children, className = '' }) => {
    return (<div className={`p-6 pt-0 ${className}`}>
      {children}
    </div>);
};
<<<<<<< HEAD
=======

>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
const CardFooter = ({ children, className = '' }) => {
    return (<div className={`flex items-center p-6 pt-0 ${className}`}>
      {children}
    </div>);
};

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
