'use client';
import React from 'react';
interface Load ing Ske let onP rops {
  l ines?: n umb er;
  c las sNa me?: s tri ng;
}
c onst Load ing Ske let on: React.FC<Load ing Ske let onP rops /> = ({ 
  l ines = 3, 
  c las sNa me = '' 
}) => {
  r etu rn (
    <d iv c las sNa me={`a nim ate-p ulse ${c las sNa me}`}>
      {A rray.from({ l eng th: l ines }).map((_, index) => (
        <d iv
          k ey={index}
          c las sNa me="h-4 b g-g ray-300 r ounded mb-2"
        />
      ))}
    </d iv>
  );
};
export default Load ing Ske let on;