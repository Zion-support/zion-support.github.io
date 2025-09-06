

})
}</div>)
};

> <polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" /> </svg> </button>)
})
}</div>)
}
export const StarRating: React.FC<Props> = ({

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
type Props = {
  value: number,
  onChange: (val: number) => void,

=======
  value
  onChange
  size = 24
  readOnly
}) => {  const [hovered, setHovered] = useState<number | null>(null);import React, { useState } from 'react';
:components/reviews/StarRating.tsx
type Props = {
  value: number
  onChange: (val: number) => void
main:components/reviews/StarRating.tsx

  value,
  onChange,
  size = 24,
  readOnly,;
}) => {  const [hovered, setHovered] = useState<number | null>(null);import React, { useState } from 'react';
:components/reviews/StarRating.tsx
main:components/reviews/StarRating.tsx

:backup-problematic-files/reviews/StarRating.tsx
type Props = {
  value: number,
  onChange: (val: number) => void,
:backup-problematic-files/reviews/StarRating.tsx
  size?: number,
  readOnly?: boolean
},


  const stars = [1, 2, 3, 4, 5],

  return (
    <div className="flex items-center gap-1">
      {stars.map((star) => {
        const active = (hovered ?? value) >= star,
        return (
          <button
            key={star}
            type="button"
            className={`transition-transform ${readOnly ? 'cursor-default' : 'hover:scale-110'}`}
            onMouseEnter={() => !readOnly && setHovered(star)}
:backup-problematic-files/reviews/StarRating.tsx
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  size?: number;
  readOnly?: boolean
}
export const StarRating: React.FC<Props> = ({ value, onChange, size = 24, readOnly }) => {

  const stars = [1, 2, 3, 4, 5];
  return (
    <div className='flex items-center gap-1'>
      {stars.map(star => {
        const active = (hovered ?? value) >= star;
                    onMouseEnter={() => !readOnly && setHovered(star)}        return (
          <button
            key={star}
            type="button"
            className={`transition-transform ${readOnly ? 'cursor-default' : 'hover: scale-110'}`}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
            onMouseLeave={() => !readOnly && setHovered(null)}
            onClick={() => !readOnly && onChange(star)}
            aria-label={`${star} star`}
          >
            <svg

}
export default StarRating;              width={size}
              height={size}

              viewBox="0 0 24 24"

            </svg>
          </button>
        )
      })}

    </div>
  )
    </div>
  )
}
export default StarRating;


>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035:backup-problematic-files/reviews/StarRating.tsx
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/reviews/StarRating.tsx
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
