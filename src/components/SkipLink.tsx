import React from 'react';'
interface SkipLinkProps {
  // TODO: Add properties
}
  // TODO: Add properties
}
    to: string,
  children: React.ReactNode
  }
const SkipLink: React.FC<SkipLinkProps> = ({ to, children }) => {</SkipLinkProps>return</SkipLinkProps> (
  // TODO: Add parameters
)
    <$2 />
      href={to}
      className="skip-link"
      style={{
  // TODO: Add properties
}
  // TODO: Add properties
}
        position: 'absolute','
        top: '-40 px','
        left: '6 px','
        background: '#000','
        color: '#fff','
        padding: '8 px','
        textDecoration: 'none','
        zIndex: 1000,
        transition: 'top 0.3 s','
        borderRadius: '4 px','
        fontSize: '14 px','
        fontWeight: 'bold''
      }
      onFocus={
  // TODO: Add properties
}
  // TODO: Add properties
}
    (e) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
        e.currentTarget.style.top = '6 px''
  }
      onBlur={
  // TODO: Add properties
}
  // TODO: Add properties
}
    (e) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
        e.currentTarget.style.top = '-40 px''
  }
    >
      {children}
    </a>
  )
}
export default SkipLink;