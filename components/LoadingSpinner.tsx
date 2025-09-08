<<<<<<< HEAD





interface LoadingSpinnerProps {



  size?: 'sm' | 'md' | 'lg' | 'xl';

  color?: 'blue' | 'white' | 'gray' | 'slate';
=======
import React from 'react';'

interface LoadingSpinnerProps  {size?: 'sm' | 'md' | 'lg';'
  }
  className?: string;
}const 'LoadingSpinner': React.FC<LoadingSpinnerProps> = ({size = 'md',className = '';'
}) => {const sizeClasses = {'sm': 'w-4 h-4','md': 'w-8 h-8','lg': 'w-12 h-12';'
  }const 'LoadingSpinner': React.FC<LoadingSpinnerProps> = ({size = 'md', text,className = '' }) => {const sizeClasses = {'sm': 'w-4 h-4', 'md': 'w-8 h-8','lg': 'w-12 h-12' }'sm': 'h-4 w-4','md': 'h-8 w-8','lg': 'h-12 w-12';'
  }return (<div className={`inline-block ${className}`}>;`      <div;
        className={`${sizeClasses[size]} border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin`}`        role='status';'
        aria-label='Loading';'
      >;
        <span className='sr-only'>Loading...</span>;'
      </div>;
    </div>;
  )}export default LoadingSpinner;
  )React from, react'';'
import { Loader2  } from 'lucide-react'';interface LoadingSpinnerProps {';'
  }
  size?: 'sm ' | 'md ' | 'lg ';'
   text?: string;
   className?: string;
}const 'LoadingSpinner': React.FC<LoadingSpinnerProps> = ({size =, md', text, '  className = ''}) => {'  const sizeClasses = {'    'sm': 'w-4 h-4, 'md':, w-8 h-8', '    'lg': 'w-12 h-12}'  return (';'
    <div className={`flex flex-col items-center justify-center ${className}`}>`      <Loader2 className={`${sizeClasses[size]} animate-spin text-blue-600`} />`      {text && (<p className='mt-2 text-sm text-gray-600 animate-pulse'>{text}</p>'      )}'    </div>)}interface LoadingSpinnerProps  {interface LoadingSpinnerProps  {size?: 'sm' | 'md' | 'lg' | 'xl';'  }
  color?: 'blue' | 'white' | 'gray' | 'slate';'
>>>>>>> origin/cursor/delete-old-data-records-6bba
  text?: string;
  full_screen?: boolean;
  class_name?: string;
}
    </div>;
  )return (<div className='fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50'>;'
        {spinner}
      </div>;
    )}
  return spinner;
}
const 'LoadingSpinner': React.FC < LoadingSpinnerProps> = ({size = 'md',text = 'Loading...',class_name = '' }) => {const size_classes = {'sm': 'w - 4 h - 4','md': 'w - 8 h - 8','lg': 'w - 12 h - 12';'
  }
  class_name = '' }) => {const size_classes = {'sm': 'w - 4 h - 4','md': 'w - 8 h - 8','lg': 'w - 12 h - 12';'
  }const color_classes = {'blue': 'text - blue - 600','white': 'text - white','gray': 'text - gray - 600','slate': 'text - slate - 600';'
  }const spinner = (<div className={`flex flex - col items - center justify - center ${class_name}`}>;`      <div className={`animate - spin rounded - full border - 2 border - gray - 300 border - t-transparent ${size_classes[size]} ${color_classes[color]}`} />;`      {text && (<p className={`mt - 2 text - sm ${color_classes[color]}`}>;`          {text}
        </p>)}
    </div>)// Check condition;
if ( {) {$2;
}
    return (<div className='fixed inset - 0 bg - white bg - opacity - 90 flex items - center justify - center z - 50'>;'
        {spinner}
      </div>)}
  return spinner;
}export default LoadingSpinner;
import React from 'react;'
import { Loader2 } from 'lucide-react;'
interface LoadingSpinnerProps  {size?: 'sm' | 'md' | 'lg;'
  }
  text?: string;'  class_name?: string;'
}
<<<<<<< HEAD
const LoadingSpinner: React.FC < LoadingSpinnerProps> = ({size = 'md', text, '  class_name = ; }) => {'  const size_classes = {'    sm: 'w - 4 h - 4',}
  md: 'w - 8 h - 8',md: '    lg: 'w - 12 h - 12' }
    md: '    lg: 'w - 12 h - 12' }
  return (<div className={`flex flex - col items - center justify - center ${class_name}}    />      <Loader2 className={`${size_classes[size]} animate - spin text - blue - 600`}    />`      {text && (<p className=\"mt - 2 text - sm text - gray - 600 animate - pulse    />{text}</p>      )}\"    </div>)}
    <div className={`flex flex-col items-center justify-center ${className}}    />      <Loader2 className={`${sizeClasses[size]} animate-spin text-blue-600`}    />`      {text && (<p className=\"mt-2 text-sm text-gray-600 animate-pulse    />{text}</p>      )}\"    </div>)}
export default LoadingSpinner;
export default function LoadingSpinner() {return (<div className=\"min-h-screen bg-slate-950 flex items-center justify-center\"    />;
      <div className=\"text-center text-white\"    />;
        <div className=\"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4\"    /></div>;
        <p className=\"text-lg\"    />Loading...</p>;
      </div>;}
    </div>;}
  )} catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" })}

=======
const 'LoadingSpinner': React.FC < LoadingSpinnerProps> = ({size = 'md', text, '  class_name = ; }) => {'  const size_classes = {'    'sm': 'w - 4 h - 4','md': 'w - 8 h - 8','md': '    'lg': 'w - 12 h - 12' }'
    'md': '    'lg': 'w - 12 h - 12' }'
  return (<div className={`flex flex - col items - center justify - center ${class_name}>      <Loader2 className={`${size_classes[size]} animate - spin text - blue - 600`} />`      {text && (<p className='mt - 2 text - sm text - gray - 600 animate - pulse>{text}</p>      )}'    </div>)}'    <div className={`flex flex-col items-center justify-center ${className}>      <Loader2 className={`${sizeClasses[size]} animate-spin text-blue-600`} />`      {text && (<p className='mt-2 text-sm text-gray-600 animate-pulse>{text}</p>      )}'    </div>)}'export default LoadingSpinner;
export default function LoadingSpinner() {return (<div className='min-h-screen bg-slate-950 flex items-center justify-center'>;'
      <div className='text-center text-white'>;'
        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4'></div>;'
        <p className='text-lg'>Loading...</p>;'
      </div>;
    </div>;
  )} catch (error) {console.error(''Error':', error)return res.status(500).json({ 'error': 'Internal server error' })}'
>>>>>>> origin/cursor/delete-old-data-records-6bba
}

}

const 'LoadingSpinner': React.FC<LoadingSpinnerProps> = ({ size = 'md',className = '';'
   }) => {


}


const sizeClasses = {'sm': 'w-4 h-4','md': 'w-8 h-8','lg': 'w-12 h-12';'
  }

const 'LoadingSpinner': React.FC<LoadingSpinnerProps> = ({size = 'md', text,className = '' }) => ;'
const sizeClasses = {'sm': 'w-4 h-4', 'md': 'w-8 h-8','lg': 'w-12 h-12',;'
}'sm': 'h-4 w-4','md': 'h-8 w-8','lg': 'h-12 w-12';'
  }return (<div className={`inline-block ${className}`}>`
      <div;
        className={`${sizeClasses[size]} border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin`}`        role='status';'
        aria-label='Loading'>'

        <span className='sr-only'>Loading...</span>;'
      </div>;
    </div>;
  )}

export default LoadingSpinner;
  )React from, react'';'
import { Loader2  } from 'lucide-react'';'

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
interface LoadingSpinnerProps {
  ';'
  }
  size?: 'sm ' | 'md ' | 'lg ';'
   text?: string;
<<<<<<< HEAD
   className?: string;}
}
=======
   className?: string;
>>>>>>> origin/cursor/delete-old-data-records-6bba

}

const 'LoadingSpinner': React.FC<LoadingSpinnerProps> = ({ size = , md', text, '  className = ''   }) => {'


' ;'
}
const sizeClasses = {'    'sm': 'w-4 h-4, 'md':, w-8 h-8', '    'lg': 'w-12 h-1,;'
}' ;'
  return (';'
    <div className = {`flex flex-col items-center justify-center ${className}`}>`      <Loader2 className={`${sizeClasses[size]} animate-spin text-blue-600`} />`      {text && (<p className='mt-2 text-sm text-gray-600 animate-pulse'>{text}</p>'      )}'    </div>;'}

interface LoadingSpinnerProps  {interface LoadingSpinnerProps  {size?: 'sm' | 'md' | 'lg' | 'xl';'
  }
  color?: 'blue' | 'white' | 'gray' | 'slate';'
  text?: string;
  full_screen?: boolean;
  class_name?: string;
}
    </div>;
  )return (<div className='fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50'>;'
        {spinner}
      </div>;
    )}
  return spinner;
}

<<<<<<< HEAD

const LoadingSpinner: React.FC < LoadingSpinnerProps> = ({size = 'md',text = 'Loading...',class_name = '' }) => ;
  const size_classes = {sm: 'w - 4 h - 4',}
  md: 'w - 8 h - 8',lg: 'w - 12 h - 12';}
  class_name = '' }) => ;
  const size_classes = {sm: 'w - 4 h - 4',}
  md: 'w - 8 h - 8',lg: 'w - 12 h - 12';}

=======
const 'LoadingSpinner': React.FC < LoadingSpinnerProps> = ({size = 'md',text = 'Loading...',class_name = '' }) => ;'
  const size_classes = {'sm': 'w - 4 h - 4','md': 'w - 8 h - 8','lg': 'w - 12 h - 12';'
  }
  class_name = '' }) => ;'
  const size_classes = {'sm': 'w - 4 h - 4','md': 'w - 8 h - 8','lg': 'w - 12 h - 12';'
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }

const color_classes = {'blue': 'text - blue - 600','white': 'text - white','gray': 'text - gray - 600','slate': 'text - slate - 600';'
  }

const spinner = (<div className={`flex flex - col items - center justify - center ${class_name}`}>`
      <div className={`animate - spin rounded - full border - 2 border - gray - 300 border - t-transparent ${size_classes[size]} ${color_classes[color]}`} />;`      {text && (<p className={`mt - 2 text - sm ${color_classes[color]}`}>`
          {text}
        </p>)}
    </div>)// Check condition;
if ( {) {$2;
}
    return (<div className='fixed inset - 0 bg - white bg - opacity - 90 flex items - center justify - center z - 50'>;'
        {spinner}
      </div>)}
  return spinner;
}

export default LoadingSpinner;
import React from 'react;'
import { Loader2 } from 'lucide-react;'

interface LoadingSpinnerProps {
  }
  size?: 'sm' | 'md' | 'lg;'
  text?: string;'  class_name?: string;'

}

const 'LoadingSpinner': React.FC < LoadingSpinnerProps> = ({ size = 'md', text, '  class_name = ;    }) => {'


'  const size_classes = {'    'sm': 'w - 4 h - 4','md': 'w - 8 h - 8','md': '    'lg': 'w - 12 h - 12' }'
    'md': '    'lg': 'w - 12 h - 12','
}
 ;
  return (<div className={`flex flex - col items - center justify - center ${class_name}>      <Loader2 className={`${size_classes[size]} animate - spin text - blue - 600`} />`      {text && (<p className='mt - 2 text - sm text - gray - 600 animate - pulse>{text}</p>      )}'    </div>)}'    <div className={`flex flex-col items-center justify-center ${className}>      <Loader2 className={`${sizeClasses[size]} animate-spin text-blue-600`} />`      {text && (<p className='mt-2 text-sm text-gray-600 animate-pulse>{text}</p>      )}'    </div>;'}

export default LoadingSpinner;

export default function LoadingSpinner() {return (<div className='min-h-screen bg-slate-950 flex items-center justify-center'>;'
      <div className='text-center text-white'>;'
        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4'></div>;'
        <p className='text-lg'>Loading...</p>;'
      </div>;
    </div>;
  )} catch (error) {console.error(''Error':', error)return res.status(500).json({ 'error': 'Internal server error' })}'
}
}

<<<<<<< HEAD


=======
const 'LoadingSpinner': React.FC<LoadingSpinnerProps> = ({ size = 'md',;'
  }
  className = '' '
   }) => {



 ;
  }
  const sizeClasses = {
    }
    'sm': 'w-4 h-4','
    'md': 'w-8 h-8','
    'lg': 'w-12 h-12''
 
};

return (;
    <div className={`inline-block ${className}`}>`      <div,
className={`${sizeClasses[size]} border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin`}`
        role='status''
        aria-label='Loading''
      >
        <span className='sr-only'>Loading...</span>'
      </div>
    </div>
  );
};

export default LoadingSpinner;
  )
React from, react''
import { Loader2  } from 'lucide-react'';interface LoadingSpinnerProps {'
  size?: 'sm ' | 'md ' | 'lg '
   text?: string
   className?: string
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size =, md', text, '  className = ''}) => {
  '  const sizeClasses = {'    sm: 'w-4 h-4, md:, w-8 h-8', '    lg: 'w-12 h-12}'  return ('
    <div className={`flex flex-col items-center justify-center ${className}`}>`      <Loader2 className={`${sizeClasses[size]} animate-spin text-blue-600`} />`      {text && (
        <p className='mt-2 text-sm text-gray-600 animate-pulse'>{text}</p>'      )}'    </div>)
}
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

import React from 'react';
;

interface LoadingSpinnerProps {




interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'blue' | 'white' | 'gray' | 'slate';
  text?: string;
  full_screen?: boolean;
  class_name?: string;
}
    </div>;
  );
>>>>>>> origin/cursor/delete-old-data-records-6bba
    return (
      <div className='fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50'>;
        {spinner}
      </div>;
    );
  }
  return spinner;
}
const LoadingSpinner: React.FC < LoadingSpinnerProps> = ({
  size = 'md',
  text = 'Loading...',
  class_name = '', }) => {
  const size_classes = {
    sm: 'w - 4 h - 4',
    md: 'w - 8 h - 8',
    lg: 'w - 12 h - 12',
  }
;
  const color_classes = {
    blue: 'text - blue - 600',
    white: 'text - white',
    gray: 'text - gray - 600',
    slate: 'text - slate - 600';
  }
;
  const spinner = (
    <div className={`flex flex - col items - center justify - center ${class_name}`}>;
      <div className={`animate - spin rounded - full border - 2 border - gray - 300 border - t-transparent ${size_classes[size]} ${color_classes[color]}`} />;
      {text && (
        <p className={`mt - 2 text - sm ${color_classes[color]}`}>;
          {text}
        </p>)}
    </div>);
;
  // Check condition
if ( {) {
  $2
}
    return (
      <div className='fixed inset - 0 bg - white bg - opacity - 90 flex items - center justify - center z - 50'>;
        {spinner}
      </div>);
  }
  return spinner;
}
<<<<<<< HEAD

;

=======
;
>>>>>>> origin/cursor/delete-old-data-records-6bba
export default LoadingSpinner;
import React from 'react;
import { Loader2 } from 'lucide-react;
interface LoadingSpinnerProps {;
  size?: 'sm' | 'md' | 'lg;
  text?: string;'  class_name?: string;
}
const LoadingSpinner: React.FC < LoadingSpinnerProps> = ({
  size = 'md', text, '  class_name = ; }) => {'  const size_classes = {'    sm: 'w - 4 h - 4',
    md: 'w - 8 h - 8',
    md: '    lg: 'w - 12 h - 12', }
  return (
    <div className={`flex flex - col items - center justify - center ${class_name}>      <Loader2 className={`${size_classes[size]} animate - spin text - blue - 600`} />`      {text && (
        <p className='mt - 2 text - sm text - gray - 600 animate - pulse>{text}</p>      )}'    </div>);
}
<<<<<<< HEAD


    <div className={`flex flex-col items-center justify-center ${className}}>      <Loader2 className={`${sizeClasses[size]} animate-spin text-blue-600`} />`      {text && (;
        <p className="mt-2 text-sm text-gray-600 animate-pulse>{text}</p>      )}    </div>);
}
export default LoadingSpinner;



=======
    <div className={`flex flex-col items-center justify-center ${className}>      <Loader2 className={`${sizeClasses[size]} animate-spin text-blue-600`} />`      {text && (;
        <p className='mt-2 text-sm text-gray-600 animate-pulse>{text}</p>      )}'    </div>);
}
export default LoadingSpinner;
>>>>>>> origin/cursor/delete-old-data-records-6bba
export default function LoadingSpinner() {
  return (
    <div className='min-h-screen bg-slate-950 flex items-center justify-center'>
      <div className='text-center text-white'>
        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4'></div>
        <p className='text-lg'>Loading...</p>
      </div>

<<<<<<< HEAD



    </div>
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  );
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}


<<<<<<< HEAD

const LoadingSpinner: React.FC < LoadingSpinnerProps> = ({ size = 'md', text, '  class_name = ;    }) => {
}
}
'  const size_classes = {'    sm: 'w - 4 h - 4',}
  md: 'w - 8 h - 8',md: '    lg: 'w - 12 h - 12' }
    md: '    lg: 'w - 12 h - 12'}
  return (<div className={`flex flex - col items - center justify - center ${class_name}}    />      <Loader2 className={`${size_classes[size]} animate - spin text - blue - 600`}    />`      {text && (<p className=\"mt - 2 text - sm text - gray - 600 animate - pulse    />{text}</p>      )}\"    </div>)}
    <div className={`flex flex-col items-center justify-center ${className}}    />      <Loader2 className={`${sizeClasses[size]} animate-spin text-blue-600`}    />`      {text && (<p className=\"mt-2 text-sm text-gray-600 animate-pulse    />{text}</p>      )}\"    </div>;
}

export default LoadingSpinner;

export default function LoadingSpinner() {return (<div className=\"min-h-screen bg-slate-950 flex items-center justify-center\"    />;
      <div className=\"text-center text-white\"    />;
        <div className=\"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4\"    /></div>;
        <p className=\"text-lg\"    />Loading...</p>;
      </div>;}
    </div>;}
  )} catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" })}
},
}

const LoadingSpinner: React.FC<LoadingSpinnerProps    /> = ({ size = 'md', }
  className = '' }
   }) => {



 ;
  const sizeClasses = {
    sm: 'w-4 h-4',
  md: 'w-8 h-8',
    lg: 'w-12 h-12'}
 ,}
};

  return (
    <div className={`inline-block ${className}`}    />
      <div;
className={`${sizeClasses[size]} border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin`}
        role=\"status\"
        aria-label=\"Loading\"
          />
        <span className=\"sr-only\"    />Loading...</span>
      </div>
    </div>
  )
};


export default LoadingSpinner;






=======
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({;
  size = 'md', text,'  className = ; }) => {'  const sizeClasses = {'    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    md: '    lg: 'w-12 h-12', };
  return (;
    <div className={`flex flex-col items-center justify-center ${className}}>      <Loader2 className={`${sizeClasses[size]} animate-spin text-blue-600`} />`      {text && (;
        <p className="mt-2 text-sm text-gray-600 animate-pulse>{text}</p>      )}"    </div>);
};
export default LoadingSpinner;
>>>>>>> origin/cursor/delete-old-data-records-6bba
