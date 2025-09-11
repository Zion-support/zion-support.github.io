
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { render, screen } from '@testing-library/react',;
import WalletPage from '@/pages/Wallet',;
import { vi } from 'vitest',;
import * as useWalletHook from '@/hooks/useWallet',;
<<<<<<< HEAD
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
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
