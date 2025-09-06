import React, {createContext, useCallback, useContext, useMemo, useState} from 'react'
export type ToastVariant = 'default' | 'success' | 'error' | 'info'
  addToast: (toast: any