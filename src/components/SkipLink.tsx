import React from 'react';
interface SkipLinkProps {
<<<<<<< HEAD
    to: string,
  children: React.ReactNode
  }
const SkipLink: React.FC<SkipLinkProps> = ({ to, children }) => {</SkipLinkProps>return</SkipLinkProps> (
    <a
      href={to}
=======
  to: string
}
  children: React.ReactNode};
;
const SkipLink: React.FC<SkipLinkProps> = ({ to, children }) => {
return (
</SkipLinkProps>return</SkipLinkProps> (
    <a href={to}
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      className="skip-link"
      style={{
        position: 'absolute',
        top: '-40 px',
        left: '6 px',
        background: '#000',
        color: '#fff',
        padding: '8 px',
        textDecoration: 'none',
        zIndex: 1000,
        transition: 'top 0.3 s',
        borderRadius: '4 px',
        fontSize: '14 px',
        fontWeight: 'bold'
      }}
<<<<<<< HEAD
      onFocus={
    (e) => {
        e.currentTarget.style.top = '6 px'
  }}
      onBlur={
    (e) => {
        e.currentTarget.style.top = '-40 px'
  }}
    >
      {children}
    </a>
  );
}
=======
      onFocus={(e) =>
);
} {
        e.currentTarget.style.top = '6 px'}};
      onBlur={(e) => {
        e.currentTarget.style.top = '-40 px'}}
    >
      {children}
    </a>
  )};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
export default SkipLink;