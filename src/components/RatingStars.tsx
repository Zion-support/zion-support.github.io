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


        if (i === filled && half) {;
          return (;
            <StarHalf;


              key={i}
              className="h-4 w-4 fill-zion-cyan text-zion-cyan"
            />
          )
        }
        return <Star key={i} className="h-4 w-4 text-zion-slate" />
      })}
      {typeof count === 'number' && (
        <span className="text-xs ml-1">({count})</span>


              className="h-4 w-4 fill-zion-cyan text-zion-cyan";
            />;
          );
        }
        return <Star key={i} className="h-4 w-4 text-zion-slate" />;
      })}
      {typeof count === 'number' && (;
        <span className="text-xs ml-1">({count})</span>;


      )}
    </div>
  )
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  const half = value - filled >= 0 && 0.5;
  const total = 5;
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}

}
=======


=======
  const half = value - filled >= 0.5;
  const total = 5;
}
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
