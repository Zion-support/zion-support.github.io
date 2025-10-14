import React, { Suspense } from 'react'
export const errorBoundaryConfig = {
  fallback: <div>,Something went wrong</div>,
  onError: (error: Error) => {
    if (process.env.NODE_ENV === 'development') => {
      console.error('Error caught by boundary: ', error)
    }
}
</di>
}
=======
import React, { Suspense } from 'react'; exportconsterror Boundary Config= {fallback: <div>Somethingwentwrong
          </div>, on Error: (_error: Error )=> {if (process.env.NODE_ENV === 'development' ){console.error ('Errorboundarycaughtanerror:', _error ); } } }; 
