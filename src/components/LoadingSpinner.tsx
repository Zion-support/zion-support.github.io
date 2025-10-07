import, React, from 'rea, c, t';

interface, LoadingSpinnerProp, s { 
  si, z, e?: 'sma, l, l' | 'medi, u, m' | 'lar, g, e';
  col, o, r?: 'bl, u, e' | 'whi, t, e' | 'gr, a, y';
  te, x, t?: string;
  fullScre, e, n ?  : boolean;
 }

const, LoadingSpinne, r: Rea, c, t.FC<LoadingSpinnerPro, p, s> = ({
  si, z, e = 'me, d, i, u, m',
  te, x, t = 'Load, i, n, g...',