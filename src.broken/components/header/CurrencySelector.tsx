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

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant=&quot;ghost&quot; size=&quot;icon&quot; className=&quot;text-white hover:bg-zion-purple/10&quot;>
          <DollarSign className=&quot;h-5 w-5&quot; />
          <span className=&quot;sr-only&quot;>Select currency</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align=&quot;end&quot; className=&quot;bg-zion-blue-dark border border-zion-purple/20&quot;>
        {SUPPORTED.map(c => (
          <DropdownMenuItem
            key={c.code}
            className={`cursor-pointer ${currency.code === c.code ? 'bg-zion-purple/20 text-zion-cyan' : 'text-white hover:bg-zion-purple/10'}`}
            onClick={() => setCurrency(c.code)}
          >
            {c.symbol} {c.code}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
