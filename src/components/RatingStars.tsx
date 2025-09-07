import { Star, StarHalf  } from 'lucide-react';'

export function RatingStars({ value;
<<<<<<< HEAD:src/components/RatingStars.tsx
  }
  return (<div className="flex items-center text-zion-slate">;"
      {[...Array(total)].map((_, i) => {if (i < filled) {return (<Star;
              }
              key={i}
              className="h-4 w-4 fill-zion-cyan text-zion-cyan";" />;
          )}if (i = == filled && half) ;
  return (<StarHalf;key={i}
              className="h-4 w-4 fill-zion-cyan text-zion-cyan";" />;
          )}
        return <Star key={i} className="h-4 w-4 text-zion-slate" />;"
      })}
      {typeof count === 'number' && (<span className="text-xs ml-1">({count})</span>;"
      )}
    </div>;
  )}className="h-4 w-4 fill-zion-cyan text-zion-cyan";"
            />;
          )}
        return <Star key={i} className="h-4 w-4 text-zion-slate" />;"
      })}
      {typeof count === 'number' && (<span className="text-xs ml-1">({count})</span>;)}"
=======
  return (<div className=\"flex items-center text-zion-slate\" />;}
      {[...Array(total)].map((_, i) => {if (i < filled) {return (<Star;}
              key={i}"
              className=\"h-4 w-4 fill-zion-cyan text-zion-cyan\";
            />;
          )}if (i = == filled && half) ;
  return (<StarHalf;key={i}"
              className=\"h-4 w-4 fill-zion-cyan text-zion-cyan\";
            />;
          )}"
        return <Star key={i} className=\"h-4 w-4 text-zion-slate\" />;
      })}"
      {typeof count === 'number' && (<span className=\"text-xs ml-1\" />({count})</span>;
      )}
    </div>;"
  )}className=\"h-4 w-4 fill-zion-cyan text-zion-cyan\";
            />;
          )}"
        return <Star key={i} className=\"h-4 w-4 text-zion-slate\" />;
      })}"
      {typeof count === 'number' && (<span className=\"text-xs ml-1\" />({count})</span>;)}
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91:temp-disabled/src/components/RatingStars.tsx
    </div>;
  )const half = value - filled >= 0 && 0.5;

const total = 5;
}
}}

const half = value - filled >= 0.5;

const total = 5;
<<<<<<< HEAD:src/components/RatingStars.tsx
}
})})}{";"
  }
  typeof count === 'number' && (<span className="text-xs ml-1" > ({count ;"
}) </span> ;
}</div>)}'";
=======
}"
})})}{\";}"
  typeof count === 'number' && (<span className=\"text-xs ml-1\"  /> ({count ;}
}) </span> ;"
}</div>)}'\";"
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91:temp-disabled/src/components/RatingStars.tsx
