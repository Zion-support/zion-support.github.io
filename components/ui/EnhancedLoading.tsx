import React from 'react',
type EnhancedLoadingProps = {
  lines?: number
},

export default function EnhancedLoading({ lines = 3 }: EnhancedLoadingProps) {
  return (
    <div className=&quot;space-y-2&quot;>
      {Array.from({ length: lines }).map((_, idx) => (
        <div key={idx} className=&quot;skeleton h-4 rounded&quot; />
      ))}
    </div>
  )
}