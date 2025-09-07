import React, { useState } from 'react';
type Props = $2;
  onChange: (val: number) => void,
  size?: number,
  readOnly?: boolean
},

export const StarRating: React.FC<Props> = ({ value, onChange, size = 24, readOnly }) => {
  const [hovered, setHovered] = useState<number | null>(null),

  const stars = [1, 2, 3, 4, 5],

  return (
    <div className = $2;
        return (
          <button
            key = $2;
export default StarRating,