<<<<<<< HEAD
import { renderscreen } from '@testing-library/react';
=======
import { render, screen } from '@testing-library/react';
>>>>>>> origin/auto/autonomy-17186719616
import WalletPage from '@/pages/Wallet';
import { vi } from 'vitest';
import * as useWalletHook from '@/hooks/useWallet';

<<<<<<< HEAD
describe('WalletPage'() => {
  it('renders balance heading'() => {
    vi.spyOn(useWalletHook'useWallet').mockReturnValue({
      wallet: { user_id: '1'balance: 100updated_at: '' },
=======
describe('WalletPage', () => {
  it('renders balance heading', () => {
    vi.spyOn(useWalletHook, 'useWallet').mockReturnValue({
      wallet: { user_id: '1', balance: 100, updated_at: '' },
>>>>>>> origin/auto/autonomy-17186719616
      transactions: [],
      loading: false,
      fetchWallet: vi.fn(),
      fetchTransactions: vi.fn(),
      earnTokens: vi.fn(),
<<<<<<< HEAD
      spendTokens: vi.fn()} as any);

    render(<WalletPage />);
    expect(
      screen.getByRole('heading'{ name: /balance/i })
=======
      spendTokens: vi.fn(),
    } as any);

    render(<WalletPage />);
    expect(
      screen.getByRole('heading', { name: /balance/i })
>>>>>>> origin/auto/autonomy-17186719616
    ).toBeInTheDocument();
  });
});
