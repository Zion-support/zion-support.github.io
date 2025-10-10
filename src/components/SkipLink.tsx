<<<<<<< HEAD
import React from 'react';
interface SkipLinkProps {}
=======
import React from react;

interface SkipLinkProps {
>>>>>>> origin/main
  to: string;

  children: React.ReactNode}

;
<<<<<<< HEAD
const SkipLink: React.FC<SkipLinkProps> = ({ to, children }) => {}
return (
</SkipLinkProps>return</SkipLinkProps> (
    <a href="{to}></a>"
      className=""skip-link""
      style="{{}"
        position: 'absolute',
        top: '-40 px',
        left: '6 px',
        background: '#000',
        color: '#fff',
        padding: '8 px',
        textDecoration: 'none',
=======

const SkipLink: React.FC<SkipLinkProps> = ({ to, children }) => {
  return (

</SkipLinkProps>return</SkipLinkProps> (

    <a
      href={to}

      className=skip-link
      style={{
        position: absolute,
        top: -40 px,
        left: 6 px,
        background: #000,
        color: #fff,
        padding: 8 px,
        textDecoration: none,
>>>>>>> origin/main
        zIndex: 1000,
        transition: top 0.3 s,
        borderRadius: 4 px,
        fontSize: 14 px,
        fontWeight: bold
      }}

      onFocus={(e) =>
);
<<<<<<< HEAD
} {}
        e.currentTarget.style.top = "'6 px'}}"
      onBlur={(e) => {}
        e.currentTarget.style.top = "'-40 px'}}>"
=======

} {
        e.currentTarget.style.top = 6 px}}

      onBlur={(e) => {
        e.currentTarget.style.top = -40 px}}

    >
>>>>>>> origin/main
      {children}

    </a>
  )};
<<<<<<< HEAD
export default SkipLink;
=======

export default SkipLink;
>>>>>>> origin/main
