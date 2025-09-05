<<<<<<< HEAD
import React from 'react',
import { Button } from '@/components/ui/button',
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger} from '@/components/ui/dropdown-menu',
import { useCurrency, SupportedCurrency } from '@/context/CurrencyContext',
import { DollarSign } from 'lucide-react',
const SUPPORTED: { code: SupportedCurrency, symbol: string }[] = [
  { code: 'USD', symbol: '$' },
  { code: 'EUR', symbol: '€' },
  { code: 'GBP', symbol: '£' }],

export function CurrencySelector() {
  const { currency, setCurrency } = useCurrency(),
=======
import React from 'react';
import {_DropdownMenu, _DropdownMenuContent, _DropdownMenuItem, _DropdownMenuTrigger} from '@/components/ui/dropdown-menu';

const SUPPORTED: {_code: SupportedCurrency; symbol: string}[] = [
  {_code: 'USD', _symbol: '$'},
  {_code: 'EUR', _symbol: '€'},
  {_code: 'GBP', _symbol: '£'}];

export function CurrencySelector() {_const { currency, _setCurrency} = useCurrency();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (_<DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant=&quot;ghost&quot; size=&quot;icon&quot; className=&quot;text-white hover:bg-zion-purple/10&quot;>
          <DollarSign className=&quot;h-5 w-5&quot; />
          <span className=&quot;sr-only&quot;>Select currency</span>
        </Button>
      </DropdownMenuTrigger>
<<<<<<< HEAD
      <DropdownMenuContent align=&quot;end&quot; className=&quot;bg-zion-blue-dark border border-zion-purple/20&quot;>
        {SUPPORTED.map(c => (
=======
      <DropdownMenuContent align="end" className="bg-zion-blue-dark border border-zion-purple/20">
        {_SUPPORTED.map(c => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
  )
}
