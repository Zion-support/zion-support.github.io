<<<<<<< HEAD
import { render, screen } from '@testing-library/react',
import WalletPage from '@/pages/Wallet',
import { vi } from 'vitest',
import * as useWalletHook from '@/hooks/useWallet',
describe('WalletPage', () => {
  it('renders balance heading', () => {
    vi.spyOn(useWalletHook, 'useWallet').mockReturnValue({
      wallet: { user_id: '1', balance: 100, updated_at: '' },
=======
import WalletPage from '@/pages/Wallet';
import * as useWalletHook from '@/hooks/useWallet';

describe(_'WalletPage', _() => {_it(_'renders balance heading', _() => {
    vi.spyOn(useWalletHook, _'useWallet').mockReturnValue({
      wallet: { user_id: '1', _balance: 100, _updated_at: ''},
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      transactions: [],
      loading: false,
      fetchWallet: vi.fn(),
      fetchTransactions: vi.fn(),
      earnTokens: vi.fn(),
      spendTokens: vi.fn()} as any),

    render(<WalletPage />),
    expect(
<<<<<<< HEAD
      screen.getByRole('heading', { name: /balance/i })
    ).toBeInTheDocument()
  })
}),
=======
      screen.getByRole('heading', {_name: /balance/i})
    ).toBeInTheDocument();
  });
});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
