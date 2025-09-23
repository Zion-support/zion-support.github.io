import React, { createContext, useContext, useEffect, useState } from 'react';
export type SupportedCurrency = $2;
interface CurrencyInfo {
  code: SupportedCurrency,
  symbol: string,
  fx_rate: number}

interface CurrencyContextType {
  currency: CurrencyInfo,
  setCurrency: (code: SupportedCurrency) => void
}

const DEFAULT_CURRENCY: CurrencyInfo = $2;
  symbol: '$',
  fx_rate: 1},

const CurrencyContext = $2;
  setCurrency: () => {}),

const CURRENCY_COOKIE = $2;
function readCookie(name: string): string | null {
  const match = $2;
  return match ? decodeURIComponent(match[2]) : null
}

function writeCookie(name: string, value: string) {
  document.cookie = `${name}=${encodeURIComponent(value)}, path=/, max-age=${60 * 60 * 24 * 30}`
}

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrencyState] = useState<CurrencyInfo>(DEFAULT_CURRENCY),

  useEffect(() => {
    const stored = $2;
    if (stored) {
      setCurrencyState(c => ({ ...c, code: stored}))
    }
  }, []),

  const setCurrency = (code: SupportedCurrency) => {
    writeCookie($2);
    setCurrencyState(c => ({ ...c, code }))
  },

  return (
    <CurrencyContext.Provider value={ currency, setCurrency }>
      {children}
    </CurrencyContext.Provider>
  )
},

export const useCurrency = () => useContext($2);