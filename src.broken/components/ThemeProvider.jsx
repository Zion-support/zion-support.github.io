<<<<<<< HEAD
import React, { useState } from 'react',
=======
'use client',
import * as React from 'react',

const ThemeContext = React.createContext({

  theme: 'dark',
  setTheme: () => null}),

export const ThemeProvider = ({ children }) => {

  const [theme, setTheme] = React.useState('dark'),

  React.useEffect(() => {
    const root = window.document.documentElement,
    root.classList.remove('light',dark'),
    root.classList.add(theme),
  }, [theme]),

  const value = {

    theme,
    setTheme},

  return ()
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  ),
},

    const value = {
      theme,
      setTheme
    },

    return (<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>) ,
  },

  const context = React.useContext(ThemeContext) ,
  if(context === null) {

    throw new Error('useTheme must be used within a ThemeProvider'),
  }
  return context,
},
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-0cd1
