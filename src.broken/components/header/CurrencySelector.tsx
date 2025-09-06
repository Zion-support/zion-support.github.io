<<<<<<< HEAD
import React from 'react';
import { Button } from '@/components/ui/button';
=======
import React from 'react',
import { Button } from '@/components/ui/button',
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
<<<<<<< HEAD
  DropdownMenuTrigger,;
} from '@/components/ui/dropdown-menu';
import { useCurrency, SupportedCurrency } from '@/context/CurrencyContext';
import { DollarSign } from 'lucide-react';

const SUPPORTED: { code: SupportedCurrency; symbol: string }[] = [
  { code: 'USD', symbol: '$' },
  { code: 'EUR', symbol: '€' },
  { code: 'GBP', symbol: '£' },
];
}

export function CurrencySelector() {
  const { currency, setCurrency } = useCurrency();
=======
  DropdownMenuTrigger} from '@/components/ui/dropdown-menu',
import { useCurrency, SupportedCurrency } from '@/context/CurrencyContext',
import { DollarSign } from 'lucide-react',
const SUPPORTED: { code: SupportedCurrency, symbol: string }[] = [
  { code: 'USD', symbol: '$' },
  { code: 'EUR', symbol: '€' },
  { code: 'GBP', symbol: '£' }],

export function CurrencySelector() {
  const { currency, setCurrency } = useCurrency(),
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
<<<<<<< HEAD
        <Button
          variant='ghost'
          size='icon'
          className='text-white hover:bg-zion-purple/10'
        >
          <DollarSign className='h-5 w-5' />
          <span className='sr-only'>Select currency</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align='end'
        className='bg-zion-blue-dark border border-zion-purple/20'
      >
=======
        <Button variant="ghost" size="icon" className="text-white hover:bg-zion-purple/10">
          <DollarSign className="h-5 w-5" />
          <span className="sr-only">Select currency</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-zion-blue-dark border border-zion-purple/20">
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
        {SUPPORTED.map(c => (
          <DropdownMenuItem
            key={c.code}
            className={`cursor-pointer ${currency.code === c.code ? 'bg-zion-purple/20 text-zion-cyan' : 'text-white hover:bg-zion-purple/10'}`}
            onClick={() => setCurrency(c.code)}
<<<<<<< HEAD
          >
            {c.symbol} {c.code}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
=======
          >;
            {c.symbol} {c.code}
          </DropdownMenuItem>;
        ))}
      </DropdownMenuContent>;
    </DropdownMenu>;
  );
}
;
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
