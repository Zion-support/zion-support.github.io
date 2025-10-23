'use client'
import React from 'react'
constEnhancedSkipLink: React.FC= () =>{return(<ahref="#main-content"className="skip-link sr-onlyfocus:not-sr-onlyfocus: absolutefocus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-whitefocus:rounded-mdfocus:shado w-lgfocus:outline-nonefocus:ring-2 focus:ring-blue-300 focus:ring-offset-2focus:ring-offset-slate-900"
onClick={(e) =>{
  
e.preventDefault()
constmain= do cument.querySelector('#main-content')
if (mai n) {
main.focus()
main.scrollIntoView({ behavior: 'smooth'})
}
}}
>
Skip to maincontent</a>
)
}
export default EnhancedSkipLink