'use client'
import React from 'react'
const EnhancedSkipLink: React.FC = () => {
return (
<a>{
e.preventDefault()
const main = document.querySelector('#main-content')
if (main) {
main.focus()
main.scrollIntoView({ behavior: 'smooth' })
}
}}
>
Skip to main content
</a>
)
}
export default EnhancedSkipLink
