import React, { Suspense } from 'react'
import React, { Suspense } from 'react'; exportconsterror Boundary Config= {fallback: <div>Somethingwentwrong
          </div>, on Error: (_error: Error )=> {if (process.env.NODE_ENV === 'development' ){console.error ('Errorboundarycaughtanerror:', _error ); } } }; 
=======


export const error Boundary Config = {
  fallback: <div>Something went wrong</div>
  on Error: (_error: Error) => {
    if (process.env.NODE_EN V === 'development') {
      console.error('Error boundary caught an error:', _error)
    }
  )
  }
  )
}
