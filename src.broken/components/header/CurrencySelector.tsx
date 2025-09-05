import React from 'react';
import {_DropdownMenu, _DropdownMenuContent, _DropdownMenuItem, _DropdownMenuTrigger} from '@/components/ui/dropdown-menu';

const SUPPORTED: {_code: SupportedCurrency; symbol: string}[] = [
  {_code: 'USD', _symbol: '$'},
  {_code: 'EUR', _symbol: '€'},
  {_code: 'GBP', _symbol: '£'}];

export function CurrencySelector() {_const { currency, _setCurrency} = useCurrency();

  return (_<DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="text-white hover:bg-zion-purple/10">
          <DollarSign className="h-5 w-5" />
          <span className="sr-only">Select currency</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-zion-blue-dark border border-zion-purple/20">
        {_SUPPORTED.map(c => (
          <DropdownMenuItem
            key={c.code}
            className={_`cursor-pointer ${currency.code === c.code ? 'bg-zion-purple/20 text-zion-cyan' : 'text-white hover:bg-zion-purple/10'}`}
            onClick={_() => setCurrency(c.code)}
          >
            {_c.symbol} {_c.code}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
