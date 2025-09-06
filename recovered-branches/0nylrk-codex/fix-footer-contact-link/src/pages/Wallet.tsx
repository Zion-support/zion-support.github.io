<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Wallet.tsx

<<<<<<< HEAD

  const { wallet, transactions, loading } = useWallet();

=======

import { useWallet  } from '@/hooks/useWallet';
import { Card, CardContent, CardHeader, CardTitle, CardDescription  } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent  } from '@/components/ui/tabs';
import { BadgeDollarSign } from 'lucide-react';
export default function WalletPage() {
import {useWallet} from '@/hooks/useWallet';
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from '@/components/ui/card';
import {Tabs, TabsList, TabsTrigger, TabsContent} from '@/components/ui/tabs';
import {BadgeDollarSign} from 'lucide-react';
export default function WalletPage() {;
  const { wallet, transactions, loading } = useWallet();
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useWallet } from '@/hooks/useWallet',
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card',
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs',
import { BadgeDollarSign } from 'lucide-react',
export default function WalletPage() {
  const { wallet, transactions, loading } = useWallet(),
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======



========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Wallet.tsx
import {useWallet} from '@/hooks/useWallet';
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from '@/components/ui/card';
import {Tabs, TabsList, TabsTrigger, TabsContent} from '@/components/ui/tabs';
import {BadgeDollarSign} from 'lucide-react';
export default function WalletPage() {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Wallet.tsx



========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Wallet.tsx
  const { wallet, transactions, loading } = useWallet();
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return (
=======

import { useWallet } from '@/hooks/useWallet',;
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card',;
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs',;
import { BadgeDollarSign } from 'lucide-react',;
;
export default function WalletPage() {;
  const { wallet, transactions, loading } = useWallet(),;
;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <div className="container max-w-4xl py-10">;
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">;
        <BadgeDollarSign className="h-6 w-6" /> Wallet;
      </h1>;
      <Card className="mb-6">;
        <CardHeader>;
          <CardTitle className="flex items-center gap-2">;
            <BadgeDollarSign className="h-5 w-5" /> Balance;
          </CardTitle>;
          <CardDescription>Your current ZION$ balance</CardDescription>;
        </CardHeader>;
        <CardContent>;
          {loading ? (;
            <div className="h-8 w-8 rounded-full border-4 border-primary border-t-transparent animate-spin" />;
<<<<<<< HEAD
          ) : (;
=======
          ) :(;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            <p className="text-2xl font-bold">{wallet?.balance ?? 0} ZION$</p>;
          )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Wallet.tsx
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

  return (
    <div className="container max-w-4xl py-10">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <BadgeDollarSign className="h-6 w-6" /> Wallet
      </h1>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BadgeDollarSign className="h-5 w-5" /> Balance
          </CardTitle>
          <CardDescription>Your current ZION$ balance</CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="h-8 w-8 rounded-full border-4 border-primary border-t-transparent animate-spin" />
          ) : (
            <p className="text-2xl font-bold">{wallet?.balance ?? 0} ZION$</p>
          )}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        </CardContent>
      </Card>
      <Tabs defaultValue="earnings">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="earnings">Earnings</TabsTrigger>
          <TabsTrigger value="spending">Spending</TabsTrigger>
        </TabsList>
        <TabsContent value="earnings">
          {transactions.filter(t => t.transaction_type === 'earn').length === 0 ? (
            <p className="text-muted-foreground">No earnings yet</p>
          ) : (
            <ul className="space-y-2">
              {transactions.filter(t => t.transaction_type === 'earn').map(t => (
                <li key={t.id} className="flex justify-between border-b py-2">
                  <span>{t.reason |'Reward'}</span>
                  <span className="font-medium">+{t.amount} ZION$</span>
                </li>
              ))}
            </ul>
          )}
        </TabsContent>
        <TabsContent value="spending">
          {transactions.filter(t => t.transaction_type === 'burn').length === 0 ? (
            <p className="text-muted-foreground">No spending yet</p>
          ) : (
            <ul className="space-y-2">
              {transactions.filter(t => t.transaction_type === 'burn').map(t => (
                <li key={t.id} className="flex justify-between border-b py-2">
                  <span>{t.reason |'Purchase'}</span>
                  <span className="font-medium">-{t.amount} ZION$</span>
                </li>
              ))}
            </ul>
          )}
        </TabsContent>
      </Tabs>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">On-chain Export (Beta)</h2>
        <p className="text-sm text-muted-foreground mb-4">Export your ZION$ to an external crypto wallet.</p>
        <button className="px-4 py-2 bg-zion-purple text-white rounded-md">Connect Wallet</button>
      </div>
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Wallet.tsx
        </CardContent>;
      </Card>;
<<<<<<< HEAD
      <Tabs defaultValue="earnings">;
        <TabsList className="grid w-full grid-cols-2 mb-4">;
import {use_wallet} from '@/hooks / use_wallet';
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from '@/components / ui / card';
import {Tabs, TabsList, TabsTrigger, TabsContent} from '@/components / ui / tabs';
import {BadgeDollarSign} from 'lucide-react';
export default /**
 * WalletPage - Function description
 */
function WalletPage() {
  const { wallet, transactions, loading } = use_wallet ();
;
  return (
    <div className="container max - w-4xl py - 10">;
      <h1 className="text - 3xl font - bold mb - 6 flex items - center gap - 2">;
        <BadgeDollarSign className="h - 6 w - 6" /> Wallet;
      </h1>;
      <Card className="mb - 6">;
        <CardHeader>;
          <CardTitle className="flex items - center gap - 2">;
            <BadgeDollarSign className="h - 5 w - 5" /> Balance;
          </CardTitle>;
          <CardDescription > Your current ZION$ balance</CardDescription>;
        </CardHeader>;
        <CardContent>;
          {loading ? (
            <div className="h - 8 w - 8 rounded - full border - 4 border - primary border - t-transparent animate - spin" />) : (
            <p className="text - 2xl font - bold">{wallet?.balance ?? 0} ZION$</p>)}
        </CardContent>;
      </Card>;
      <Tabs default_value="earnings">;
        <TabsList className="grid w - full grid - cols - 2 mb - 4">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Wallet.tsx

========
=======
;
      <Tabs defaultValue="earnings">;
        <TabsList className="grid w-full grid-cols-2 mb-4">;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Wallet.tsx
          <TabsTrigger value="earnings">Earnings</TabsTrigger>;
          <TabsTrigger value="spending">Spending</TabsTrigger>;
        </TabsList>;
        <TabsContent value="earnings">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Wallet.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Wallet.tsx
        </TabsContent>;
        <TabsContent value="spending">;
          {transactions && transactions.filter(t => t && t.transaction_type === 'burn').length === 0 ? (;
            <p className="text-muted-foreground">No spending yet</p>;
          ) : (;
            <ul className="space-y-2">;
              {transactions && transactions.filter(t => t && t.transaction_type === 'burn').map(t => (;
                <li key={t && t.id} className="flex justify-between border-b py-2">;
                  <span>{t && t.reason || 'Purchase'}</span>;
                  <span className="font-medium">-{t && t.amount} ZION$</span>;
                </li>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Wallet.tsx

              ))}
            </ul>;
          )}

========
              ))}
            </ul>;
          )}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Wallet.tsx
        </TabsContent>;
      </Tabs>;
=======
          {transactions.filter(t => t.transaction_type === 'earn').length === 0 ? (;
            <p className="text-muted-foreground">No earnings yet</p>;
          ) :(;
            <ul className="space-y-2">;
              {transactions.filter(t => t.transaction_type === 'earn').map(t => (;
                <li key={t.id} className="flex justify-between border-b py-2">;
                  <span>{t.reason || 'Reward'}</span>;
                  <span className="font-medium">+{t.amount} ZION$</span>;
                </li>;              ))}
            </ul>;
          )}
        </TabsContent>;
        <TabsContent value="spending">;
          {transactions.filter(t => t.transaction_type === 'burn').length === 0 ? (;
            <p className="text-muted-foreground">No spending yet</p>;
          ) :(;
            <ul className="space-y-2">;
              {transactions.filter(t => t.transaction_type === 'burn').map(t => (;
                <li key={t.id} className="flex justify-between border-b py-2">;
                  <span>{t.reason || 'Purchase'}</span>;
                  <span className="font-medium">-{t.amount} ZION$</span>;
                </li>;              ))}
            </ul>;
          )}
        </TabsContent>;
      </Tabs>;
;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      <div className="mt-8">;
        <h2 className="text-xl font-semibold mb-2">On-chain Export (Beta)</h2>;
        <p className="text-sm text-muted-foreground mb-4">Export your ZION$ to an external crypto wallet.</p>;
        <button className="px-4 py-2 bg-zion-purple text-white rounded-md">Connect Wallet</button>;
      </div>;
    </div>;
<<<<<<< HEAD
  );
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Wallet.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Wallet.tsx
          {transactions.filter (t => t.transaction_type === 'earn').length === 0 ? (
            <p className="text - muted - foreground">No earnings yet</p>) : (
            <ul className="space - y-2">;
              {transactions.filter (t => t.transaction_type === 'earn').map (t => (
                <li key={t.id} className="flex justify - between border - b py - 2">;
                  <span>{t.reason || 'Reward'}</span>;
                  <span className="font - medium">+{t.amount} ZION$</span>;
                </li>))}
            </ul>)}
        </TabsContent>;
        <TabsContent value="spending">;
          {transactions.filter (t => t.transaction_type === 'burn').length === 0 ? (
            <p className="text - muted - foreground">No spending yet</p>) : (
            <ul className="space - y-2">;
              {transactions.filter (t => t.transaction_type === 'burn').map (t => (
                <li key={t.id} className="flex justify - between border - b py - 2">;
                  <span>{t.reason || 'Purchase'}</span>;
                  <span className="font - medium">-{t.amount} ZION$</span>;
                </li>))}
            </ul>)}
        </TabsContent>;
      </Tabs>;
      <div className="mt - 8">;
        <h2 className="text - xl font - semibold mb - 2">On - chain Export (Beta)</h2>;
        <p className="text - sm text - muted - foreground mb - 4">Export your ZION$ to an external crypto wallet.</p>;
        <button className="px - 4 py - 2 bg - zion - purple text - white rounded - md">Connect Wallet</button>;
      </div>;
    </div>);
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Wallet.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
  ),;}
 return (<div className="container max-w-4xl py-10" > <h1 className="text-3xl font-bold mb-6 flex items-center gap-2" > <BadgeDollarSign className="h-6 w-6" /> Wallet </h1> <Card className="mb-6" > <CardHeader> <CardTitle className="flex items-center gap-2" > <BadgeDollarSign className="h-5 w-5" /> Balance </CardTitle> <CardDescription>Your current ZION$ balance</CardDescription> </CardHeader> <CardContent>) : (<p className="text-2xl font-bold" > {
  wallet?.balance ?? 0 
}ZION$</p>) 
}</CardContent> </Card> <Tabs defaultValue="earnings" > <TabsList className="grid w-full grid-cols-2 mb-4" > <TabsTrigger value="earnings" >Earnings</TabsTrigger> <TabsTrigger value="spending" >Spending</TabsTrigger> </TabsList>) : (<ul className="space-y-2" > {
  transactions.filter (t => t.transaction type === 'earn') .map (t => (</li>) ) 
}</ul>) 
}</TabsContent>) : (<ul className="space-y-2" > {
  transactions.filter (t => t.transaction type === 'burn') .map (t => (</li>) ) 
}</ul>) 
}</TabsContent> </Tabs> </div> </div>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Wallet.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
