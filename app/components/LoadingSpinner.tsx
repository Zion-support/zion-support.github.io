<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';;";";"

interface LoadingSpinnerProps {
  fullScreen?: boolean
  text?: string;';';";"
  size?: 'sm' | 'md' | 'lg';";"
}
';';";"
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ '';";"
  size = 'md', text = 'Loading...', className = '', fullScreen = false;: value;";";"
}) => {: value';';";"
  const  sizeClasses = {': value';";"
    sm: 'h-4 w-4','';";"
    md= 'h-8 w-8','';";"
    lg: 'h-12 w-12';";"
  },
      return (
    <div  className ={`flex flex-col items-center justify-center p-8 ${className}`}>: value
      <div;>
        data-testid="loading-spinner">: value;";"
        className={`animate-spin rounded-full border-2 border-gray-300 border-t-purple-600 ${sizeClasses[size]}`}>: value";";"
      ></div>"";"
      {text && <p  className ="mt-2 text-gray-600">{text}</p>}: value;";"
    </div>
  )
    }
{
=======
<<<<<<< HEAD
import React from 'react",";";
      interface LoadingSpinnerProps {}";";";
  size?: 'sm' | 'md' | 'lg",
      text?: string,
      className?: string,;
      fullScreen?: boolean;";
};";";
const LoadingSpinner: React.FC<LoadingSpinnerProps>  =  ({)}";";";
  size = 'md', text = 'Loading...', className = '", fullScreen = false";
}) => {};";";
  const sizeClasses = {}";";";
    sm: 'h-4 w-4",";";";
    md: 'h-8 w-8",";";";
    lg: 'h-12 w-12"
  },";
      return ()";";
    <div className={`flex flex-col items-center justify-center p-8 ${className}`}>";";";
      <divdata-testid="loading-spinner">";";
        className={`animate-spin rounded-full border-2 border-gray-300 border-t-purple-600 ${sizeClasses[size]}`}";";";
      ></div>"
      {text && <p className="mt-2 text-gray-600">{text}</p>};
    </div>
  )
    },";
    {};";";
export default Component;";";";
import React from 'react";
";
interface LoadingSpinnerProps {";";
  fullScreen?: boolean;";";";
  text?: string;';";";";";
  size?: 'sm' | 'md' | 'lg";";";
}";";";
';";";";
const LoadingSpinner: React.FC<LoadingSpinnerProps>  =  ({";";,";
    '',";";";";
  size = 'md', text = 'Loading...', className = '', fullScreen = false;: value;";";";
  ";";";
  }) => {: value';";";";";
  const sizeClasses = {': value";";";";
    sm: 'h-4 w-4','";";";";
    md: 'h-8 w-8','";";";";
    lg: 'h-12 w-12",
  },;";
      return (";";
    <div className ={`flex flex-col items-center justify-center p-8 ${className}`}>: value;";";";
      <div;>;"
        data-testid="loading-spinner">: value`;"
        className={`animate-spin rounded-full border-2 border-gray-300 border-t-purple-600 ${sizeClasses[size]}`}>: value";"
      ></div>"";"
      {text && <p className ="mt-2 text-gray-600">{text}</p>}: value;";
    </div>;";
  );";";
    };";";";
{"
  const spinner = (";"
    <div className ="flex flex-col items-center justify-center space-y-4">`;"
      <div className ={`${sizeClasses[size]} border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin`} />";"
      {text && <p className ="text-gray-600">{text}</p>}";
    </div>;";
  );";";
";";";
  if (fullScreen) {"
    return (";"
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">`;
        {spinner};
      </div>;
    );
  };
  return spinner;";
    <div className={`flex flex-col items-center justify-center ${className}`}>";";
      <div className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-gray-300 border-t-purple-600`}></div>";";";
      {text && ("
        <p className="mt-2 text-sm text-gray-400">{text}</p>""
      )};
    </div>
  );";
};";";
export default LoadingSpinner;";";";
;"
export default LoadingSpinner;'";'";";";";
"
=======
import React from 'react;'
=======
import React from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-df8b

interface LoadingSpinnerProps {
  fullScreen?: boolean;
  text?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  text = 'Loading...', 
  className = '', 
  fullScreen = false 
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  const spinner = (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div 
        className={`${sizeClasses[size]} border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin`} 
        data-testid="loading-spinner"
      />
      {text && <p className="text-gray-600">{text}</p>}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        {spinner}
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      {spinner}
    </div>
  );
};
>>>>>>> main

  const  spinner = (";";"
    <div  className ="flex flex-col items-center justify-center space-y-4">;";"
      <div  className ={`${sizeClasses[size]} border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin`} />";";"
      {text && <p  className ="text-gray-600">{text}</p>}";"
    </div>
  )

<<<<<<< HEAD
  if (fullScreen) {
    return (";";"
      <div  className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">;";"
        {spinner}
      </div>
    )
  }
<<<<<<< HEAD

  return spinner
}

export default LoadingSpinner;'";'";"
=======
;
  return spinner;
};
;
export default LoadingSpinner;'";'";";";
>>>>>>> main
>>>>>>> main
=======
export default LoadingSpinner;
>>>>>>> cursor/fix-errors-and-merge-to-main-df8b
