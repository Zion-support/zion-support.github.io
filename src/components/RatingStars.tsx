<<<<<<< HEAD
import React from 'react',
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        if (i === filled && half) {;
          return (;
            <StarHalf;

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
      )}
<<<<<<< HEAD
    </div>;
  );
}
=======
    </div>
  )
<<<<<<< HEAD
  const half = value - filled >= 0 && 0.5;
  const total = 5;
}
}

}


  const half = value - filled >= 0.5;
  const total = 5;
}
}

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
