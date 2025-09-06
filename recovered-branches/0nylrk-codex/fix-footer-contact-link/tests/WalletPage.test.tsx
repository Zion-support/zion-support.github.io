<<<<<<< HEAD

import { render, screen  } from '@testing-library/react';
import WalletPage from '@/pages/Wallet';
import { vi  } from 'vitest';
import * as useWalletHook from '@/hooks/useWallet';
import { render, screen } from '@testing-library/react',;
import WalletPage from '@/pages/Wallet',;
import { vi } from 'vitest',;
import * as useWalletHook from '@/hooks/useWallet',;
describe('WalletPage', () => {
  it('renders balance heading', () => {
    vi.spyOn(useWalletHook, 'useWallet').mockReturnValue({
      wallet: { user_id: '1', balance: 100, updated_at: '' },
      transactions: [],
      loading: false,
      fetchWallet: vi.fn();
      fetchTransactions: vi.fn();
      earnTokens: vi.fn();
      spendTokens: vi.fn()
    } as any);

    render(<WalletPage />);
    expect(
      screen.getByRole('heading', { name: /balance/i })
    ).toBeInTheDocument();

  });
});
=======

import { render, screen } from '@testing - library / react';
import WalletPage from '@/pages / Wallet';
import { vi } from 'vitest';
import * as useWalletHook from '@/hooks / use_wallet';
describe ('WalletPage', () => {
  it ('renders balance heading', () => {
    vi.spy_on (useWalletHook, 'use_wallet').mockReturnValue ({
      wallet: { user_id: '1', balance: 100, updated_at: '' }
      transactions: [];
      loading: false;
      fetch_wallet: vi.fn ();
      fetch_transactions: vi.fn ();
      earn_tokens: vi.fn ();
      spend_tokens: vi.fn ()} as any);
    render (<WalletPage />);
    expect (
      screen.getByRole ('heading', { name: /balance / i })).toBeInTheDocument ();
  });
});

=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
import { render, screen } from '@testing-library/react',;
import WalletPage from '@/pages/Wallet',;
import { vi } from 'vitest',;
import * as useWalletHook from '@/hooks/useWallet',;

<<<<<<< HEAD
    ).toBeInTheDocument()
  })
}),
describe('WalletPage', () => {;
  it('renders balance heading', () => {;
    vi.spyOn(useWalletHook, 'useWallet').mockReturnValue({;
      wallet: { user_id: '1', balance: 100, updated_at: '' },;
      transactions: [],;
      loading: false,;
      fetchWallet: vi.fn(),;
      fetchTransactions: vi.fn(),;
      earnTokens: vi.fn(),;
      spendTokens: vi.fn()} as any),;
    render(<WalletPage />),;
    expect(;
      screen.getByRole('heading', { name: /balance/i });
    ).toBeInTheDocument();
  });
});

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
