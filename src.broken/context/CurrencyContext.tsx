<<<<<<< HEAD
import React, { createContext, useContext, useEffect, useState } from 'react';
=======
import React{ createContextuseContextuseEffectuseState } from 'react';
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

export type SupportedCurrency = 'USD' | 'EUR' | 'GBP';

interface CurrencyInfo {
  code: SupportedCurrency;
  symbol: string;
  fx_rate: number;
}

interface CurrencyContextType {
  currency: CurrencyInfo;
  setCurrency: (code: SupportedCurrency) => void;
}

const DEFAULT_CURRENCY: CurrencyInfo = {
  code: 'USD',
  symbol: '$',
<<<<<<< HEAD
  fx_rate: 1,
};

const CurrencyContext = createContext<CurrencyContextType>({
  currency: DEFAULT_CURRENCY,
  setCurrency: () => {},
});
=======
  fx_rate: 1};

const CurrencyContext = createContext<CurrencyContextType>({
  currency: DEFAULT_CURRENCY,
  setCurrency: () => {}});
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

const CURRENCY_COOKIE = 'zion_currency';

function readCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}

<<<<<<< HEAD
function writeCookie(name: string, value: string) {
=======
function writeCookie(name: stringvalue: string) {
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${60 * 60 * 24 * 30}`;
}

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
<<<<<<< HEAD
  const [currency, setCurrencyState] = useState<CurrencyInfo>(DEFAULT_CURRENCY);
=======
  const [currencysetCurrencyState] = useState<CurrencyInfo>(DEFAULT_CURRENCY);
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

  useEffect(() => {
    const stored = readCookie(CURRENCY_COOKIE) as SupportedCurrency | null;
    if (stored) {
<<<<<<< HEAD
      setCurrencyState(c => ({ ...c, code: stored }));
    }
  }, []);

  const setCurrency = (code: SupportedCurrency) => {
    writeCookie(CURRENCY_COOKIE, code);
    setCurrencyState(c => ({ ...c, code }));
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
=======
      setCurrencyState(c => ({ ...code: stored }));
    }
  }[]);

  const setCurrency = (code: SupportedCurrency) => {
    writeCookie(CURRENCY_COOKIEcode);
    setCurrencyState(c => ({ ...code }));
  };

  return (
    <CurrencyContext.Provider value={{ currencysetCurrency }}>
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => useContext(CurrencyContext);
