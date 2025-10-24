interface LinkProps {
href: string,
children: React.ReactNode
interface LinkProps {}
href: string,
children: React.ReactNode
className?: string
target?: string
rel?: string
onClick?: () => void
'aria-label'?: string;}
}
export const Link: React.FC<LinkProps>= ({
export const Link: React.FC<LinkProps> = ({}
href,
href: string,
children: React.ReactNode
className?: string
target?: string
rel?: string
onClick?: () => void
'aria-label'?: string;}
}
export const Link: React.FC<LinkProps>= ({;}
export const Link: React.FC<LinkProps> = ({}
href,
href: string,
children: React.ReactNode
className?: string
target?: string
rel?: string
onClick?: () => void
'aria-label'?: string;}
}
export const Link: React.FC<LinkProps> = ({,
href
children,
className,
target,
rel,
onClick,
'aria-label': ariaLabel,;}
...props}
}) => {}
const handleClick = useCallback((...args) => {}
if (onClick) {}
onClick();}
}
// Handle internal navigation
if (href.startsWith('/') && !href.startsWith('//')) {
// Handle internal navigation;}
if (href.startsWith('/') && !href.startsWith('//')) {}
e.preventDefault()
window.location.href = href;}
}
}</LinkProps>
return (<a
}
return(<a
import React from 'react'

