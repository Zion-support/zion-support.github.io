import React from 'react'
interface SkipLinkProps {
  to: string
  children: React.ReactNode
}
const SkipLink: React.FC<SkipLinkProps> = ({ to, children }) => {</SkipLinkProps>return</SkipLinkProps> (
    <a>{
        e.currentTarget.style.top = '6 px'
      }}
      onBlur={(e) => {
        e.currentTarget.style.top = '-40 px'
      }}
    </a>
      {children}
    </a>
  )
}
export default SkipLink