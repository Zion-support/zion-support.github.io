<<<<<<< HEAD
import { render, screen } from '@testing-library/react';
=======
import { renderscreen } from '@testing-library/react';
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
import WalletPage from '@/pages/Wallet';
import { vi } from 'vitest';
import * as useWalletHook from '@/hooks/useWallet';

<<<<<<< HEAD
describe('WalletPage', () => {
  it('renders balance heading', () => {
    vi.spyOn(useWalletHook, 'useWallet').mockReturnValue({
      wallet: { user_id: '1', balance: 100, updated_at: '' },
=======
describe('WalletPage'() => {
  it('renders balance heading'() => {
    vi.spyOn(useWalletHook'useWallet').mockReturnValue({
      wallet: { user_id: '1'balance: 100updated_at: '' },
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
      transactions: [],
      loading: false,
      fetchWallet: vi.fn(),
      fetchTransactions: vi.fn(),
      earnTokens: vi.fn(),
<<<<<<< HEAD
      spendTokens: vi.fn(),
    } as any);

    render(<WalletPage />);
    expect(
      screen.getByRole('heading', { name: /balance/i })
=======
      spendTokens: vi.fn()} as any);

    render(<WalletPage />);
    expect(
      screen.getByRole('heading'{ name: /balance/i })
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
    ).toBeInTheDocument();
  });
});
