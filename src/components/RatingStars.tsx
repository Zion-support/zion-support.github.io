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
=======


        if (i === filled && half) {;
          return (;
            <StarHalf;


>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
    </div>
  )
}
=======


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
}
}

;
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
