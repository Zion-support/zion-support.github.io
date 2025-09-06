<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { render, screen  } from '@testing-library/react';
import WalletPage from '@/pages/Wallet';
import { vi  } from 'vitest';
import * as useWalletHook from '@/hooks/useWallet';
=======
import { render, screen } from '@testing-library/react',;
import WalletPage from '@/pages/Wallet',;
import { vi } from 'vitest',;
import * as useWalletHook from '@/hooks/useWallet',;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
    ).toBeInTheDocument();
  });
});
=======
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

>>>>>>> main
import { render, screen } from '@testing-library/react',;
import WalletPage from '@/pages/Wallet',;
import { vi } from 'vitest',;
import * as useWalletHook from '@/hooks/useWallet',;
<<<<<<< HEAD
=======
    ).toBeInTheDocument()
  })
}),
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
