'use client'
import React from 'react'
const SkipLink: React.FC = () => {
return (
<a
href=&quot;#main-content&quot;
className=&quot;sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-600 text-white px-4 py-2 rounded-md z-50 font-medium transition-all duration-200 hover:bg-cyan-700&quot;
>
Skip to main content
</a>
)
}
export default SkipLink