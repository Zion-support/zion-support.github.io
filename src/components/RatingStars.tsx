<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
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
=======
>>>>>>> main
import { Star, StarHalf } from 'lucide-react'

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
<<<<<<< HEAD
        if (i === filled && half) {
          return (
            <StarHalf
=======
        if (i === filled && half) {;
          return (;
            <StarHalf;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======


        if (i === filled && half) {;
          return (;
            <StarHalf;


>>>>>>> main
              key={i}
              className="h-4 w-4 fill-zion-cyan text-zion-cyan"
            />
          )
        }
        return <Star key={i} className="h-4 w-4 text-zion-slate" />
      })}
      {typeof count === 'number' && (
        <span className="text-xs ml-1">({count})</span>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======


>>>>>>> main
              className="h-4 w-4 fill-zion-cyan text-zion-cyan";
            />;
          );
        }
        return <Star key={i} className="h-4 w-4 text-zion-slate" />;
      })}
      {typeof count === 'number' && (;
        <span className="text-xs ml-1">({count})</span>;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      )}
    </div>
  )
}
<<<<<<< HEAD
}
=======
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


      )}
    </div>
  )
  const half = value - filled >= 0 && 0.5;
  const total = 5;
}
}

}


  const half = value - filled >= 0.5;
  const total = 5;
}
}

;
>>>>>>> main
