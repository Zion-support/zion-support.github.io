import, React, from 'rea, c, t';

interface, LoadingProp, s { 
  si, z, e?: 'sm' | 'md' | 'lg';
  te, x, t ?  : stri, n, g;
 }

const, Loadin, g: Rea, c, t.FC<LoadingPro, p, s> = ({
  si, z, e = ', m, d',
  te, x, t = 'Load, i, n, g...',
}) => {
  const, sizeClasse, s = {
    sm: 'w-4 , h-, 4',
    md: 'w-8 h-, 8',
    lg: 'w-1, 2, h-1, 2',
  }; retu, r, n (
    <div, classNam, e = 'flex, fle, x-col, item, s-center, justif, y-cente, r, p-8'>
      <div, classNam, e = { `${sizeClass, e, s[s, i, z, e] }, anima, t, e-spin, rounde, d-full, borde, r-2, borde, r-gr, a, y-300, borde, r-t-bl, u, e-6, 0, 0`}
       />
      {  te, x, t  && <p, classNam, e = 'mt-4, tex, t-sm, tex, t-gr, a, y-6, 0, 0' > {te, x, t  }</p>}
    </di, v>
  );
};

export, default, Loading;
