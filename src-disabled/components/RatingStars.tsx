<<<<<<< HEAD
=======
<<<<<<< HEAD
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { Star, StarHalf } from 'lucide-react'

export function RatingStars({ value = 0, count }: { value?: number, count?: number }) {
  const filled = Math.floor(value),
  const half = value - filled >= 0.5,
  const total = 5,

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
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

        if (i === filled && half) {;
          return (;
            <StarHalf;

<<<<<<< HEAD
=======
<<<<<<< HEAD:src-disabled/components/RatingStars.tsx
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/RatingStars.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

}

=======
<<<<<<< HEAD
      )}
    </div>
  )
  const total = 5;
}
}
;

const half = value - filled >= 0 && 0.5;
  const total = 5;
}
}
}
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
=======

<<<<<<< HEAD:src-disabled/components/RatingStars.tsx
}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              className="h-4 w-4 fill-zion-cyan text-zion-cyan";
            />;
          );
        }
        return <Star key={i} className="h-4 w-4 text-zion-slate" />;
      })}
      {typeof count === 'number' && (;
        <span className="text-xs ml-1">({count})</span>;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/RatingStars.tsx

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      )}

    </div>
  )

}
}
}
  const half = value - filled >= 0.5;
  const total = 5;
}
}

<<<<<<< HEAD
=======
<<<<<<< HEAD:src-disabled/components/RatingStars.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
;

  );

});
}{";
  typeof count === 'number' && (<span className="text-xs ml-1" > ({;
  count ;
}) </span> ;
}</div>) ;
<<<<<<< HEAD
}'"
=======
}'"
=======
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/RatingStars.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
