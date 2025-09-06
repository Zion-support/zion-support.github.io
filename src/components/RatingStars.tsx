<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import React from 'react',
  const half = value - filled >= 0 && 0.5;
=======
import { Star, StarHalf } from 'lucide-react'
import React from 'react';
import React from 'react',
import React from 'react';
  const half = value - filled >= 0.5
  const total = 5
}
}
;
import React from 'react',
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
        if (i === filled && half) {
          return (
            <StarHalf
        if (i === filled && half) {
          return (
            <StarHalf
        if (i === filled && half) {;
          return (;
            <StarHalf;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              key={i}
              className="h-4 w-4 fill-zion-cyan text-zion-cyan"
            />
          )
        }
        return <Star key={i} className="h-4 w-4 text-zion-slate" />
      })}
      {typeof count === 'number' && (
        <span className="text-xs ml-1">({count})</span>
      )}
    </div>
  )
<<<<<<< HEAD
  const total = 5;
}
}
;

const half = value - filled >= 0 && 0.5;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const total = 5;
}
}
}
<<<<<<< HEAD


  const half = value - filled >= 0.5;
  const total = 5;
=======
  const half = value - filled >= 0.5;
  const total = 5;
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
}
}) ;
}{";
  typeof count === 'number' && (<span className="text-xs ml-1" > ({;
  count ;
}) </span> ;
}</div>) ;
}'"
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
  const half = value - filled >= 0 && 0.5;
  const total = 5;
}
}

}


  const half = value - filled >= 0.5;
  const total = 5;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}
}

;
=======
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
