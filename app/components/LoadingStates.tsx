import React from 'react' </div> </div>
)'
export const LoadingSpinner = ({ size = 'md' }) => {'} const sizes = {} sm: 'h-4 w-4',' md: 'h-8 w-8',' lg: 'h-12 w-12' } return ( <div className={`animate-spin rounded-full border-b-2 border-blue-500 ${sizes[size]}`}></div>` )
}'