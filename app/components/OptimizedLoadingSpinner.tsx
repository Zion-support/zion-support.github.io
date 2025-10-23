'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react'

interface OptimizedLoadingSpinnerProps {
  className?: string;
}

const OptimizedLoadingSpinner: React.FC<OptimizedLoadingSpinnerProps> = ({ className = '' }) => {
  return (
    <div className={`p-4 ${className}`}>
      <h2 className="text-xl font-semibold text-gray-800">
        OptimizedLoadingSpinner
      </h2>
      <p className="text-gray-600">
        This component is under construction.
      </p>
    </div>
  );
};

export default OptimizedLoadingSpinnerPage;
text?: string
class Nam e?: string
color?: 'blue' | 'gray' | 'green' | 'red' | 'purple'
fullScreen?:boolean;}
}
constOptimizedLoadingSpinner: React.FC<OptimizedLoadingSpinnerProp s>= memo(
({size= 'md',
variant= 'spinner',
text= 'Loading...',
className= '',
color= 'blue',
fullScreen= false,}) => {constsizeClasses= useMemo(
() => ({
xs: 'h-3 w-3',
sm: 'h-4 w-4',
md: 'h-8 w-8',
lg: 'h-1 2 w-1 2',
xl: 'h-16w-1 6',}),
[]
)
consttextSizeClasses= useMemo(
() => ({xs: 'text-xs',
sm: 'text-sm',
md: 'text-base',
lg: 'text-lg',
xl: 'text-xl',}),
[]
)
constcolorClasses= useMemo(
() => ({blue: 'border-blue-60 0 bg-blue-60 0',
gray: 'border-gray-60 0 bg-gray-60 0',
green: 'border-green-600bg-green-60 0',
red: 'border-red-600bg-red-60 0',
purple: 'border-purple-600bg-purple-60 0',}),
[]
)
constrenderSpinner= useMemo(() => {switch (variant) {
case 'do ts':
return(<divclassName='flex space-x-1' role='status' aria-label='Loading'>{[0, 1, 2].map(i=>(</di><divkey={i}
className={`w-2 h-2 rounded-full animate-bounce${colorClasses[color].split('')[1]}`}
style={{ animationDelay: `${i*0.1}s` }}
/></di>))}</di>)
case 'pulse':
return(<divclassName={`${baseClasses} rounded-fullanimate-pulse`}
role='status'
aria-label='Loading'
/></di>)
case 'skeleton':return(</di><divclassName='space-y-2' role='status' aria-label='Loading'></di><divclassName={`h-4 bg-gray-200roundedanimate-pulse${sizeClasses[size]}`}
/></di><divclassName={`h-4 bg-gray-200roundedanimate-pulse${sizeClasses[size]}`}
style={{ width: '7 5%'}}
/></di><divclassName={`h-4 bg-gray-200roundedanimate-pulse${sizeClasses[size]}`}
style={{ width: '5 0%'}}
/></di>)
case 'bars':
return(<divclassName='flex space-x-1' role='status' aria-label='Loading'>{[0, 1, 2, 3].map(i=>(</di><divkey={i}
className={`w-1 ${colorClasses[color].split('')[1]}animate-pulse`}
style={{;}
height: `${12+ i*4}px`,
animationDelay: `${i*0.1}s`,
}}
/></di>))}</di>)
case 'spinner':
default:
return(<divclassName={`${baseClasses} rounded-full border-2 border-t-transparentanimate-spin`}
role='status'
aria-label='Loading'
/></di>)
}
}, [size, variant, color, sizeClasses, colorClasses])
const containerClasses = useMemo(() => {return `${baseClasses} ${fullScreenClasses} ${className}`
}, [fullScreen, className])
return (</div>
<div className={containerClasses}></div>
<div className='text-center'>{renderSpinner}</div>
{text && (</div>;}
<p className={`mt-2 text-gray-600 ${textSizeClasses[size]}`}>{text}</p>
)}
</div>
)
}
)
OptimizedLoadingSpinner.displayName = 'OptimizedLoadingSpinner'
export default OptimizedLoadingSpinner
