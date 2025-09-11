import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

export default function StarRating({ value = 0, onChange, size = 20 }) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => {
        const idx = i + 1;
        return value >= idx ? (
          <FaStar 
            key={idx} 
            data-testid="full-star" 
            className="text-yellow-400" 
            size={size}
            onClick={() => onChange && onChange(idx)}
          />
        ) : value >= idx - 0.5 ? (
          <FaStarHalfAlt 
            key={idx} 
            data-testid="half-star" 
            className="text-yellow-400" 
            size={size}
            onClick={() => onChange && onChange(idx)}
          />
        ) : (
          <FaRegStar 
            key={idx} 
            data-testid="empty-star" 
            className="text-yellow-400" 
            size={size}
            onClick={() => onChange && onChange(idx)}
          />
        );
      })}
    </div>
  );
}