});describe('WalletPage', () => {
  it('renders balance heading', () => {
    vi.spyOn(useWalletHook, 'useWallet').mockReturnValue({
      wallet: { user_id: '1', balance: 100, updated_at: '' };
      transactions: [];
      loading: false;
      fetchWallet: vi.fn();
      fetchTransactions: vi.fn();
      earnTokens: vi.fn();
      spendTokens: vi.fn()} as any);
    render(<WalletPage />);
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
});
}),
