import WalletPage from '@/pages/Wallet';
import * as useWalletHook from '@/hooks/useWallet';

describe(_'WalletPage', _() => {_it(_'renders balance heading', _() => {
    vi.spyOn(useWalletHook, _'useWallet').mockReturnValue({
      wallet: { user_id: '1', _balance: 100, _updated_at: ''},
      transactions: [],
      loading: false,
      fetchWallet: vi.fn(),
      fetchTransactions: vi.fn(),
      earnTokens: vi.fn(),
      spendTokens: vi.fn()} as any);

    render(<WalletPage />);
    expect(
      screen.getByRole('heading', {_name: /balance/i})
    ).toBeInTheDocument();
  });
});
