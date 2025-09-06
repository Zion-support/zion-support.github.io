<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
  const half = value - filled >= 0.5
  const total = 5
}
}
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import React from 'react',
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
import { Star, StarHalf } from 'lucide-react'
=======
import { Star, StarHalf } from 'lucide-react';
}

export function RatingStars({
  value = 0,
  count,
}: {
  value?: number;
  count?: number;
}) {
  const filled = Math.floor(value);
  const half = value - filled >= 0.5;
  const total = 5;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b

export function RatingStars({ value;
  return (
    <div className="flex items-center text-zion-slate">
      {[...Array(total)].map((_, i) => {
        if (i < filled) {
          return (
            <Star
              key={i}
              className="h-4 w-4 fill-zion-cyan text-zion-cyan"
            />
          )
        }
<<<<<<< HEAD
        if (i === filled && half) {
<<<<<<< HEAD
          return (
            <StarHalf
=======
        if (i === filled && half) {;
          return (;
            <StarHalf;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
              key={i}
              className="h-4 w-4 fill-zion-cyan text-zion-cyan"
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
            />
          )
        }
        return <Star key={i} className="h-4 w-4 text-zion-slate" />
      })}
      {typeof count === 'number' && (
        <span className="text-xs ml-1">({count})</span>
<<<<<<< HEAD
=======
              className="h-4 w-4 fill-zion-cyan text-zion-cyan";
            />;
          );
        }
        return <Star key={i} className="h-4 w-4 text-zion-slate" />;
      })}
      {typeof count === 'number' && (;
        <span className="text-xs ml-1">({count})</span>;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      )}
    </div>
<<<<<<< HEAD
  )
}
<<<<<<< HEAD
}
=======
  );

}) ;
}{";
  typeof count === 'number' && (<span className="text-xs ml-1" > ({;
  count ;
}) </span> ;
}</div>) ;
}'"
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
}
=======
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
