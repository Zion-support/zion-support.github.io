'use client'
import React from 'react'

import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

const ErrorBoundary: React.FC<{ children: React.ReactNode }> = ({ children }) => ,{
  return <React.Fragment>
    </React>{children}</React.Fragment>
}

const App: React.FC = () => ,{
  return (
    <ErrorBoundary>
    </ErrorBoundar>
      <HelmetProvider>
    </HelmetProvide>
        <BrowserRouter>
    </BrowserRoute>
          <div className="App">
    </di>
            {/* App content goes here */}

          </div>
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  )
}

export default App;