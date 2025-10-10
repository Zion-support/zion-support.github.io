import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Settings, ArrowRight } from 'lucide-react'
const MicroSaaSPage: React.FC = () => {
  const serviceName = 'content-generator'
  const title = serviceName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

  return (
    <></>;}
        <title>{title} | Zion Tech Group - Micro SaaS Solutions</title></$1></div></section></div></div>{title}</span></$1>
              {title} </h1> Solution</span></$1>
              Powerful {title.toLowerCase()} micro SaaS solution designed for modern businesses.</$1></div>Get Started</span></$1>
                View Demo</$1></$1></$1></$1></section></div></div>Coming Soon</h2>
                We're developing powerful {title.toLowerCase()} solutions. Stay tuned for updates!</$1></$1></$1></$1></$1>
  )
}

export default MicroSaaSPage
