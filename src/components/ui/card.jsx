import React from 'react';

const Card = ({ className, children, ...props }) => {
  return (
    <div
      className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className || ''}`}
      {...props}
    >
      {children}
<<<<<<< HEAD
    </div>';
  );';';
};'
const CardHeader = (props: any) => {}
`
``
```
  return()````
    <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>
      {children}
    </div>';
  );';';
};'
const CardTitle = (props: any) => {}
  return()`
    <h3``
      className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
    >
      {children}
    </h3>';
  );';';
};'
const CardDescription = (props: any) => {}
`
  return()``
    <p className={`text-sm text-muted-foreground ${className}`}>{children}</p>';
  );';';
};'
const CardContent = (props: any) => {}
`
``';
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>;';';
};'
const CardFooter = (props: any) => {}
`
``
```
  return()````
    <div className={`flex items-center p-6 pt-0 ${className}`}>{children}</div>
=======
    </div>
  );
};

const CardHeader = ({ className, children, ...props }) => {
  return (
    <div className={`flex flex-col space-y-1.5 p-6 ${className || ''}`} {...props}>
      {children}
    </div>
  );
};

const CardTitle = ({ className, children, ...props }) => {
  return (
    <h3
      className={`text-2xl font-semibold leading-none tracking-tight ${className || ''}`}
      {...props}
    >
      {children}
    </h3>
  );
};

const CardDescription = ({ className, children, ...props }) => {
  return (
    <p className={`text-sm text-muted-foreground ${className || ''}`} {...props}>
      {children}
    </p>
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
  );
};

const CardContent = ({ className, children, ...props }) => {
  return (
    <div className={`p-6 pt-0 ${className || ''}`} {...props}>
      {children}
    </div>
  );
};
<<<<<<< HEAD
const CardContent = (props: any) => {
    return (
    <div className="min-h-screen bg-white">
=======

const CardFooter = ({ className, children, ...props }) => {
  return (
    <div className={`flex items-center p-6 pt-0 ${className || ''}`} {...props}>
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
      {children}
    </div>
  );
};
<<<<<<< HEAD
const CardFooter = (props: any) => {
    return (
    <div className="min-h-screen bg-white">
      {children}
    </div>);
};
export {Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter};

export {Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter};

export {Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter};

export {Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter};

export {Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter};

export {Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardDescription, CardContent, CardFooter};';
;';;';
=======

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
