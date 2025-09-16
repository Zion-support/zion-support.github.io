
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

const CURRENCY_COOKIE = 'zion_currency';

function readCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}

  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${60 * 60 * 24 * 30}`;
}

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  useEffect(() => {
    const stored = readCookie(CURRENCY_COOKIE) as SupportedCurrency | null;
    if (stored) {
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => useContext(CurrencyContext);
