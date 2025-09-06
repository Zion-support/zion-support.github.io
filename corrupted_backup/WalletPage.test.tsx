<<<<<<< HEAD
import { render, screen } from '@testing-library/react';
import WalletPage from '@/pages/Wallet';
import { vi } from 'vitest';
import * as useWalletHook from '@/hooks/useWallet';

describe('WalletPage', () => {
  it('renders balance heading', () => {
    vi.spyOn(useWalletHook, 'useWallet').mockReturnValue({
      wallet: { user_id: '1', balance: 100, updated_at: '' },
      transactions: [],
      loading: false,
      fetchWallet: vi.fn(),
      fetchTransactions: vi.fn(),
      earnTokens: vi.fn(),
      spendTokens: vi.fn(),
    } as any);

    render(<WalletPage />);
    expect(
      screen.getByRole('heading', { name: /balance/i })
    ).toBeInTheDocument();
  });
});
=======
 transactions: [];
loading: false;
fetchWallet: vi.fn ();
fetchTransactions: vi.fn ();
earnTokens: vi.fn ();
spendTokens: vi.fn () 
}as any);
render (<WalletPage />);
expect (
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
