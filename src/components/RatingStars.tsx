<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/RatingStars.tsx


import React from 'react',

=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
import { Star, StarHalf } from 'lucide-react'
=======
import React from 'react';
import React from 'react',
>>>>>>> import { Star, StarHalf } from 'lucide-react'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react';
  const half = value - filled >= 0.5
  const total = 5
}
}
;
import React from 'react',
import { Star, StarHalf } from 'lucide-react'
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

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
<<<<<<< HEAD

=======
        if (i === filled && half) {
          return (
            <StarHalf
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        if (i === filled && half) {
          return (
            <StarHalf
        if (i === filled && half) {;
          return (;
            <StarHalf;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      )}
    </div>
  )
>>>>>>>   const half = value - filled >= 0 && 0.5;
  const total = 5;
}
<<<<<<< HEAD

=======
}
>>>>>>> 
;

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
const half = value - filled >= 0 && 0.5;
  const total = 5;
}
}
}
  const half = value - filled >= 0.5;
  const total = 5;
=======
import React from 'react',;
import { Star, StarHalf } from 'lucide-react';
;
export function RatingStars({ value = 0, count } { value?:number, count?:number }) {;
  const filled = Math.floor(value),;
  const half = value - filled >= 0.5,;
  const total = 5,;
;
  return (;
    <div className="flex items-center text-zion-slate">;
      {[...Array(total)].map((_, i) => {;
        if (i < filled) {;
          return (;
            <Star;
              key={i}
              className="h-4 w-4 fill-zion-cyan text-zion-cyan";
            />;
          ),;
        }
        if (i === filled && half) {;
          return (;
            <StarHalf;
              key={i}
              className="h-4 w-4 fill-zion-cyan text-zion-cyan";
            />;
          ),;
        }
        return <Star key={i} className="h-4 w-4 text-zion-slate" />,;
      })}
      {typeof count === 'number' && (;
        <span className="text-xs ml-1">({count})</span>;
      )}
    </div>;
  ),; if (i < filled) {;
  return (<Star key= {;
  i ;
}className="h-4 w-4 fill-zion-cyan text-zion-cyan" />) ;
}if (i === filled && half) {;
  return (<StarHalf key= {;
  i ";
}className="h-4 w-4 fill-zion-cyan text-zion-cyan" />) ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
}) ;
}{";
  typeof count === 'number' && (<span className="text-xs ml-1" > ({;
  count ;
}) </span> ;
}</div>) ;
}'"
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/RatingStars.tsx
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
}
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
