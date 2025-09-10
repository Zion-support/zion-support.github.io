<<<<<<< HEAD
import React from 'react';'
<<<<<<< HEAD
const Card = (props: any) => {}
=======
const Card = (props: any) => {}
  return()
    <div;
      className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
    >
      {children}
    </div>
    );
};'
const CardHeader = (props: any) => {}
`
``
```
  return()````
    <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>
      {children}
    </div>
    );
};'
const CardTitle = (props: any) => {}
  return()`
    <h3``
      className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
    >
      {children}
    );
};'
const CardDescription = (props: any) => {}
`
  return()``
    <p className={`text-sm text-muted-foreground ${className}`}>{children}</p>
  );
};'
const CardContent = (props: any) => {}
`
``
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>;
};'
const CardFooter = (props: any) => {}
`
``
```
  return()````
    <div className={`flex items-center p-6 pt-0 ${className}`}>{children}</div>
    </div>
  );
    );
};
    </div>;
  );
};
;
export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
const CardDescription = (props: any) => {
=======
import React from 'react';
const Card = ({ children, className = '' }) => {
    return (<div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}>
      {children}
    </div>);
};
const CardHeader = ({ children, className = '' }) => {
    return (<div className={`flex flex-col space-y-1.5 p-6 ${className}`}>
      {children}
    </div>);
};
const CardTitle = ({ children, className = '' }) => {
    return (<h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`}>
      {children}
    </h3>);
};
const CardDescription = ({ children, className = '' }) => {
>>>>>>> origin/backup-improvements-20250827-015311
    return (<p className={`text-sm text-muted-foreground ${className}`}>
      {children}
    </p>);
};
<<<<<<< HEAD

const CardFooter = ({ className, children, ...props }) => {
  return (
    <div className={`flex items-center p-6 pt-0 ${className || ''}`} {...props}>
const CardContent = (props: any) => {
    return (
        <div className={`p-6 pt-0 ${className}`}>
      {children}
    </div>
    );
};
const CardFooter = (props: any) => {
    return (
        <div className={`flex items-center p-6 pt-0 ${className}`}>
      {children}
    </div>
    );
};
export {Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter};

export {Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter};

export {Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter};

export {Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter};

export {Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter};


export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
export {Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardDescription, CardContent, CardFooter};
=======
const CardContent = ({ children, className = '' }) => {
    return (<div className={`p-6 pt-0 ${className}`}>
      {children}
    </div>);
};
const CardFooter = ({ children, className = '' }) => {
    return (<div className={`flex items-center p-6 pt-0 ${className}`}>
      {children}
    </div>);
};

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
>>>>>>> origin/backup-improvements-20250827-015311
>>>>>>> 51ecdee898e0f4ef436b73e6c8197c3d4a98485c
