
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useWhitelabelTenant, WhitelabelTenant } from '@/hooks/
  //
 // The context may be undefined if the provider is not mounted. By declaring // the generic as `WhitelabelContextType | null` we get proper type checking // without falling back to an empty object which triggers TS2740 errors. // Cast is used here because the context default is `null` until provided by //