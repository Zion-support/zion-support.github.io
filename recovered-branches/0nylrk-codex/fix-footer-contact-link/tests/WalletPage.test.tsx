<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
});
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


import { render, screen } from '@testing-library/react',;'
import WalletPage from '@/pages/Wallet',;'
import { vi } from 'vitest',;'
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
=======
import { render, screen } from '@testing-library/react';
import WalletPage from '@/pages/Wallet';
import { vi } from 'vitest';
import * as useWalletHook from '@/hooks/useWallet';
>>>>>>> main
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
describe('WalletPage', () => {
=======
});describe('WalletPage', () => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
});describe('WalletPage', () => {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
});

import { render, screen } from '@testing-library/react',;
import WalletPage from '@/pages/Wallet',;
import { vi } from 'vitest',;
import * as useWalletHook from '@/hooks/useWallet',;

describe('WalletPage', () => {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  it('renders balance heading', () => {
    vi.spyOn(useWalletHook, 'useWallet').mockReturnValue({
=======


'
describe('WalletPage', () => {'
  it('renders balance heading', () => {'
    vi.spyOn(useWalletHook, 'useWallet').mockReturnValue({'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      wallet: { user_id: '1', balance: 100, updated_at: '' };
      transactions: [];
      loading: false;
      fetchWallet: vi.fn();
      fetchTransactions: vi.fn();
      earnTokens: vi.fn();
      spendTokens: vi.fn()} as any);
    render(<WalletPage />);
    expect('
      screen.getByRole('heading', { name: /balance/i })
    ).toBeInTheDocument()
  })
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
});
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
});
>>>>>>> main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
});
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
});
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======




'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
});
});
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
