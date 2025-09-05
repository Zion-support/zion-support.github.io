
<<<<<<< HEAD
import { useWallet } from '@/hooks/useWallet',
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card',
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs',
import { BadgeDollarSign } from 'lucide-react',
export default function WalletPage() {
  const { wallet, transactions, loading } = useWallet(),
=======

export default function WalletPage() {_const { wallet, _transactions, _loading} = useWallet();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <div className=&quot;container max-w-4xl py-10&quot;>
      <h1 className=&quot;text-3xl font-bold mb-6 flex items-center gap-2&quot;>
        <BadgeDollarSign className=&quot;h-6 w-6&quot; /> Wallet
      </h1>
      <Card className=&quot;mb-6&quot;>
        <CardHeader>
          <CardTitle className=&quot;flex items-center gap-2&quot;>
            <BadgeDollarSign className=&quot;h-5 w-5&quot; /> Balance
          </CardTitle>
          <CardDescription>Your current ZION$ balance</CardDescription>
        </CardHeader>
        <CardContent>
<<<<<<< HEAD
          {loading ? (
            <div className=&quot;h-8 w-8 rounded-full border-4 border-primary border-t-transparent animate-spin&quot; />
=======
          {_loading ? (
            <div className="h-8 w-8 rounded-full border-4 border-primary border-t-transparent animate-spin" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          ) : (
            <p className=&quot;text-2xl font-bold&quot;>{wallet?.balance ?? 0} ZION$</p>
          )}
        </CardContent>
      </Card>

      <Tabs defaultValue=&quot;earnings&quot;>
        <TabsList className=&quot;grid w-full grid-cols-2 mb-4&quot;>
          <TabsTrigger value=&quot;earnings&quot;>Earnings</TabsTrigger>
          <TabsTrigger value=&quot;spending&quot;>Spending</TabsTrigger>
        </TabsList>
<<<<<<< HEAD
        <TabsContent value=&quot;earnings&quot;>
          {transactions.filter(t => t.transaction_type === 'earn').length === 0 ? (
            <p className=&quot;text-muted-foreground&quot;>No earnings yet</p>
=======
        <TabsContent value="earnings">
          {_transactions.filter(t => t.transaction_type === 'earn').length === 0 ? (
            <p className="text-muted-foreground">No earnings yet</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          ) : (
            <ul className=&quot;space-y-2&quot;>
              {transactions.filter(t => t.transaction_type === 'earn').map(t => (
<<<<<<< HEAD
                <li key={t.id} className=&quot;flex justify-between border-b py-2&quot;>
                  <span>{t.reason || 'Reward'}</span>
                  <span className=&quot;font-medium&quot;>+{t.amount} ZION$</span>
=======
                <li key={t.id} className="flex justify-between border-b py-2">
                  <span>{_t.reason || 'Reward'}</span>
                  <span className="font-medium">+{_t.amount} ZION$</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </li>
              ))}
            </ul>
          )}
        </TabsContent>
<<<<<<< HEAD
        <TabsContent value=&quot;spending&quot;>
          {transactions.filter(t => t.transaction_type === 'burn').length === 0 ? (
            <p className=&quot;text-muted-foreground&quot;>No spending yet</p>
=======
        <TabsContent value="spending">
          {_transactions.filter(t => t.transaction_type === 'burn').length === 0 ? (
            <p className="text-muted-foreground">No spending yet</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          ) : (
            <ul className=&quot;space-y-2&quot;>
              {transactions.filter(t => t.transaction_type === 'burn').map(t => (
<<<<<<< HEAD
                <li key={t.id} className=&quot;flex justify-between border-b py-2&quot;>
                  <span>{t.reason || 'Purchase'}</span>
                  <span className=&quot;font-medium&quot;>-{t.amount} ZION$</span>
=======
                <li key={t.id} className="flex justify-between border-b py-2">
                  <span>{_t.reason || 'Purchase'}</span>
                  <span className="font-medium">-{_t.amount} ZION$</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </li>
              ))}
            </ul>
          )}
        </TabsContent>
      </Tabs>

<<<<<<< HEAD
      <div className=&quot;mt-8&quot;>
        <h2 className=&quot;text-xl font-semibold mb-2&quot;>On-chain Export (Beta)</h2>
        <p className=&quot;text-sm text-muted-foreground mb-4&quot;>Export your ZION$ to an external crypto wallet.</p>
        <button className=&quot;px-4 py-2 bg-zion-purple text-white rounded-md&quot;>Connect Wallet</button>
=======
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">On-chain Export (Beta)</h2>
        <p className="text-sm text-muted-foreground mb-4">Export your ZION$ to an external window.crypto wallet.</p>
        <button className="px-4 py-2 bg-zion-purple text-white rounded-md">Connect Wallet</button>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </div>
    </div>
  )
}
