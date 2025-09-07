<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
});describe('WalletPage', () => {
  it('renders balance heading', () => {
    vi.spyOn(useWalletHook, 'useWallet').mockReturnValue({
=======
<<<<<<< HEAD
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

import { render, screen } from '@testing-library/react',;'
import WalletPage from '@/pages/Wallet',;'
import { vi } from 'vitest',;'
import * as useWalletHook from '@/hooks/useWallet',;

=======

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

<<<<<<< HEAD
import { render, screen } from '@testing-library/react',;'
import WalletPage from '@/pages/Wallet',;'
import { vi } from 'vitest',;'
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { render, screen } from '@testing-library/react',;
import WalletPage from '@/pages/Wallet',;
import { vi } from 'vitest',;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
describe('WalletPage', () => {

  it('renders balance heading', () => {
    vi.spyOn(useWalletHook, 'useWallet').mockReturnValue({

>>>>>>> origin/chore/fix-lint-and-merge
      wallet: { user_id: '1', balance: 100, updated_at: '' };
      transactions: [];
      loading: false;
      fetchWallet: vi.fn();
      fetchTransactions: vi.fn();
      earnTokens: vi.fn();
      spendTokens: vi.fn()} as any);
    render(<WalletPage />);
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { render, screen } from '@testing-library/react';
import WalletPage from '@/pages/Wallet';
import { vi } from 'vitest';
import * as useWalletHook from '@/hooks/useWallet';
describe('WalletPage', () => {
  it('renders balance heading', () => {
    vi.spyOn(useWalletHook, 'useWallet').mockReturnValue($2);
      fetchTransactions: vi.fn($2);
      earnTokens: vi.fn($2);
      spendTokens: vi.fn()} as any),

    render($2);
    expect(
      screen.getByRole('heading', { name: /balance/i })
    ).toBeInTheDocument()
  })
<<<<<<< HEAD
=======
<<<<<<< HEAD
}),
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
});
}),
=======
    expect('
      screen.getByRole('heading', { name: /balance/i })
    ).toBeInTheDocument()
  })

});
});
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
