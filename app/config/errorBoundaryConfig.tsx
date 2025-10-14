import React, { Suspense } from 'react'


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