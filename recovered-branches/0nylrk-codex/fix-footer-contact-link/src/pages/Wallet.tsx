<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD

  const { wallet, transactions, loading } = useWallet();
=======
<<<<<<< HEAD
=======



=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { useWallet  } from '@/hooks/useWallet';
import { Card, CardContent, CardHeader, CardTitle, CardDescription  } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent  } from '@/components/ui/tabs';
import { BadgeDollarSign } from 'lucide-react';
<<<<<<< HEAD
<<<<<<< HEAD
export default function WalletPage() {
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {useWallet} from '@/hooks/useWallet';
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from '@/components/ui/card';
import {Tabs, TabsList, TabsTrigger, TabsContent} from '@/components/ui/tabs';
import {BadgeDollarSign} from 'lucide-react';
<<<<<<< HEAD
export default function WalletPage() {;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD



=======
import { useWallet } from "@/hooks/useWallet";
import {}
=======
import { useWallet } from "@/hooks/useWallet";
import {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  Card,
  CardContent,
  CardHeader,
  CardTitle,
<<<<<<< HEAD
  CardDescription,";
} from "@/components/ui/card";"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";"
import { BadgeDollarSign } from "lucide-react";
<<<<<<< HEAD
export default function WalletPage() {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  const { wallet, transactions, loading } = useWallet();
=======
export default function WalletPage() {
import {useWallet} from '@/hooks/useWallet';
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from '@/components/ui/card';
import {Tabs, TabsList, TabsTrigger, TabsContent} from '@/components/ui/tabs';
import {BadgeDollarSign} from 'lucide-react';
export default function WalletPage() {;  const { wallet, transactions, loading } = useWallet();
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export default function WalletPage() {;  const { wallet, transactions, loading } = useWallet();
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  return (
    <div className="container max-w-4xl py-10">;
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">;
=======
export default function WalletPage() {};
  const { wallet, transactions, loading } = useWallet();
  return ("
    <div className="container max-w-4xl py-10">;"
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <BadgeDollarSign className="h-6 w-6" /> Wallet;
      </h1>;"
      <Card className="mb-6">;
        <CardHeader>;"
          <CardTitle className="flex items-center gap-2">;"
            <BadgeDollarSign className="h-5 w-5" /> Balance;
          </CardTitle>;
          <CardDescription>Your current ZION$ balance</CardDescription>;
        </CardHeader>;
        <CardContent>;
          {loading ? (;"
            <div className="h-8 w-8 rounded-full border-4 border-primary border-t-transparent animate-spin" />;
          ) : (;"
            <p className="text-2xl font-bold">{wallet?.balance ?? 0} ZION$</p>;
          )}
<<<<<<< HEAD
<<<<<<< HEAD

        </CardContent>;
      </Card>;
"
      <Tabs defaultValue="earnings">;"
        <TabsList className="grid w-full grid-cols-2 mb-4">;

import {use_wallet} from '@/hooks / use_wallet';'
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from '@/components / ui / card';'
import {Tabs, TabsList, TabsTrigger, TabsContent} from '@/components / ui / tabs';'
import {BadgeDollarSign} from 'lucide-react';
export default /**;
 * WalletPage - Function description;
 */
function WalletPage() {}
  const { wallet, transactions, loading } = use_wallet ();
;
  return ("
    <div className="container max - w-4xl py - 10">;"
      <h1 className="text - 3xl font - bold mb - 6 flex items - center gap - 2">;"
        <BadgeDollarSign className="h - 6 w - 6" /> Wallet;
      </h1>;"
      <Card className="mb - 6">;
        <CardHeader>;"
          <CardTitle className="flex items - center gap - 2">;"
            <BadgeDollarSign className="h - 5 w - 5" /> Balance;
          </CardTitle>;
          <CardDescription > Your current ZION$ balance</CardDescription>;
        </CardHeader>;
        <CardContent>;
          {loading ? ("
            <div className="h - 8 w - 8 rounded - full border - 4 border - primary border - t-transparent animate - spin" />) : ("
            <p className="text - 2xl font - bold">{wallet?.balance ?? 0} ZION$</p>)}
        </CardContent>;
      </Card>;"
      <Tabs default_value="earnings">;"
        <TabsList className="grid w - full grid - cols - 2 mb - 4">;
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const { wallet, transactions, loading } = useWallet();
import { useWallet } from '@/hooks/useWallet',
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card',
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs',
import { BadgeDollarSign } from 'lucide-react',
export default function WalletPage() {
  const { wallet, transactions, loading } = useWallet(),

=======
  CardDescription,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { BadgeDollarSign } from "lucide-react";
export default function WalletPage() {
  const { wallet, transactions, loading } = useWallet();
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return (
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
          ) : (;
            <p className="text-2xl font-bold">{wallet?.balance ?? 0} ZION$</p>;
=======
export default function WalletPage() {

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          )}
<<<<<<< HEAD
              ))}
=======
      <Tabs defaultValue="earnings">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="earnings">Earnings</TabsTrigger>
=======
"
      <Tabs defaultValue="earnings">"
        <TabsList className="grid w-full grid-cols-2 mb-4">"
          <TabsTrigger value="earnings">Earnings</TabsTrigger>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <TabsTrigger value="spending">Spending</TabsTrigger>
        </TabsList>"
        <TabsContent value="earnings">"
          {transactions.filter((t) => t.transaction_type === "earn").length ===
          0 ? ("
            <p className="text-muted-foreground">No earnings yet</p>
          ) : ("
            <ul className="space-y-2">
              {transactions"
                .filter((t) => t.transaction_type === "earn")
                .map((t) => ("
                  <li key={t.id} className="flex justify-between border-b py-2">"
                    <span>{t.reason || "Reward"}</span>"
                    <span className="font-medium">+{t.amount} ZION$</span>
                  </li>
                ))}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
            </ul>
          )}
        </TabsContent>"
        <TabsContent value="spending">"
          {transactions.filter((t) => t.transaction_type === "burn").length ===
          0 ? ("
            <p className="text-muted-foreground">No spending yet</p>
          ) : ("
            <ul className="space-y-2">
              {transactions"
                .filter((t) => t.transaction_type === "burn")
                .map((t) => ("
                  <li key={t.id} className="flex justify-between border-b py-2">"
                    <span>{t.reason || "Purchase"}</span>"
                    <span className="font-medium">-{t.amount} ZION$</span>
                  </li>
                ))}
            </ul>
          )}
        </TabsContent>
      </Tabs>
"
      <div className="mt-8">"
        <h2 className="text-xl font-semibold mb-2">On-chain Export (Beta)</h2>"
        <p className="text-sm text-muted-foreground mb-4">
          Export your ZION$ to an external crypto wallet.
        </p>"
        <button className="px-4 py-2 bg-zion-purple text-white rounded-md">
          Connect Wallet;
        </button>
      </div>
    </div>
<<<<<<< HEAD
  )
<<<<<<< HEAD
=======

}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

        </CardContent>;
      </Card>;
;
      <Tabs defaultValue="earnings">;
        <TabsList className="grid w-full grid-cols-2 mb-4">;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          <TabsTrigger value="earnings">Earnings</TabsTrigger>;
          <TabsTrigger value="spending">Spending</TabsTrigger>;
        </TabsList>;
        <TabsContent value="earnings">;
<<<<<<< HEAD

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

              ))}
            </ul>;
          )}

        </TabsContent>;
      </Tabs>;

=======
              ))}
            </ul>;
          )}
        </TabsContent>;
      </Tabs>;
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <div className="mt-8">;
        <h2 className="text-xl font-semibold mb-2">On-chain Export (Beta)</h2>;
        <p className="text-sm text-muted-foreground mb-4">Export your ZION$ to an external crypto wallet.</p>;
        <button className="px-4 py-2 bg-zion-purple text-white rounded-md">Connect Wallet</button>;
      </div>;
    </div>;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  );
}

<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          {transactions.filter (t => t.transaction_type === 'earn').length === 0 ? (
            <p className="text - muted - foreground">No earnings yet</p>) : (
            <ul className="space - y-2">;
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              ))}
            </ul>
          )}          {transactions.filter (t => t.transaction_type === 'earn').length === 0 ? (
            <p className="text - muted-foreground">No earnings yet</p>) : (
            <ul className="space-y-2">;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

        </CardContent>;
      </Card>;

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

      <Tabs defaultValue="earnings">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="earnings">Earnings</TabsTrigger>
          <TabsTrigger value="spending">Spending</TabsTrigger>
        </TabsList>
        <TabsContent value="earnings">
          {transactions.filter((t) => t.transaction_type === "earn").length ===
          0 ? (
            <p className="text-muted-foreground">No earnings yet</p>
          ) : (
            <ul className="space-y-2">
              {transactions
                .filter((t) => t.transaction_type === "earn")
                .map((t) => (
                  <li key={t.id} className="flex justify-between border-b py-2">
                    <span>{t.reason || "Reward"}</span>
                    <span className="font-medium">+{t.amount} ZION$</span>
                  </li>
                ))}
            </ul>
          )}
        </TabsContent>
        <TabsContent value="spending">
          {transactions.filter((t) => t.transaction_type === "burn").length ===
          0 ? (
            <p className="text-muted-foreground">No spending yet</p>
          ) : (
            <ul className="space-y-2">
              {transactions
                .filter((t) => t.transaction_type === "burn")
                .map((t) => (
                  <li key={t.id} className="flex justify-between border-b py-2">
                    <span>{t.reason || "Purchase"}</span>
                    <span className="font-medium">-{t.amount} ZION$</span>
                  </li>
                ))}
            </ul>
          )}
        </TabsContent>
      </Tabs>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">On-chain Export (Beta)</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Export your ZION$ to an external crypto wallet.
        </p>
        <button className="px-4 py-2 bg-zion-purple text-white rounded-md">
          Connect Wallet
        </button>
      </div>
    </div>
  );
}

          {transactions.filter (t => t.transaction_type === 'earn').length === 0 ? (
            <p className="text - muted - foreground">No earnings yet</p>) : (
            <ul className="space - y-2">;
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
              ))}
            </ul>
          )}          {transactions.filter (t => t.transaction_type === 'earn').length === 0 ? (
            <p className="text - muted-foreground">No earnings yet</p>) : (
            <ul className="space-y-2">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              {transactions.filter (t => t.transaction_type === 'earn').map (t => (
                <li key={t.id} className="flex justify - between border - b py-2">;
                  <span>{t.reason || 'Reward'}</span>;
                  <span className="font-medium">+{t.amount} ZION$</span>;
                </li>))}
            </ul>)}
        </TabsContent>;
        <TabsContent value="spending">;
          {transactions.filter (t => t.transaction_type === 'burn').length === 0 ? (
            <p className="text - muted-foreground">No spending yet</p>) : (
            <ul className="space-y-2">;
              {transactions.filter (t => t.transaction_type === 'burn').map (t => (
                <li key={t.id} className="flex justify - between border - b py-2">;
                  <span>{t.reason || 'Purchase'}</span>;
                  <span className="font-medium">-{t.amount} ZION$</span>;
                </li>))}
            </ul>)}
        </TabsContent>;
      </Tabs>;
      <div className="mt-8">;
        <h2 className="text - xl font - semibold mb-2">On - chain Export (Beta)</h2>;
        <p className="text - sm text - muted - foreground mb-4">Export your ZION$ to an external crypto wallet.</p>;
        <button className="px - 4 py - 2 bg - zion - purple text - white rounded-md">Connect Wallet</button>;
      </div>;
    </div>);
}

}
;
}
;

  ),;}
 return (<div className="container max-w-4xl py-10" > <h1 className="text-3xl font-bold mb-6 flex items-center gap-2" > <BadgeDollarSign className="h-6 w-6" /> Wallet </h1> <Card className="mb-6" > <CardHeader> <CardTitle className="flex items-center gap-2" > <BadgeDollarSign className="h-5 w-5" /> Balance </CardTitle> <CardDescription>Your current ZION$ balance</CardDescription> </CardHeader> <CardContent>) : (<p className="text-2xl font-bold" > {
  wallet?.balance ?? 0 
}ZION$</p>) 
}</CardContent> </Card> <Tabs defaultValue="earnings" > <TabsList className="grid w-full grid-cols-2 mb-4" > <TabsTrigger value="earnings" >Earnings</TabsTrigger> <TabsTrigger value="spending" >Spending</TabsTrigger> </TabsList>) : (<ul className="space-y-2" > {
=======


'
          {transactions.filter (t => t.transaction_type === 'earn').length === 0 ? ("
            <p className="text - muted - foreground">No earnings yet</p>) : ("
            <ul className="space - y-2">;'
              {transactions.filter (t => t.transaction_type === 'earn').map (t => ("
                <li key={t.id} className="flex justify - between border - b py - 2">;'
                  <span>{t.reason || 'Reward'}</span>;"
                  <span className="font - medium">+{t.amount} ZION$</span>;
                </li>))}
            </ul>)}
        </TabsContent>;"
        <TabsContent value="spending">;'
          {transactions.filter (t => t.transaction_type === 'burn').length === 0 ? ("
            <p className="text - muted - foreground">No spending yet</p>) : ("
            <ul className="space - y-2">;'
              {transactions.filter (t => t.transaction_type === 'burn').map (t => ("
                <li key={t.id} className="flex justify - between border - b py - 2">;'
                  <span>{t.reason || 'Purchase'}</span>;"
                  <span className="font - medium">-{t.amount} ZION$</span>;
                </li>))}
            </ul>)}
        </TabsContent>;
      </Tabs>;"
      <div className="mt - 8">;"
        <h2 className="text - xl font - semibold mb - 2">On - chain Export (Beta)</h2>;"
        <p className="text - sm text - muted - foreground mb - 4">Export your ZION$ to an external crypto wallet.</p>;"
        <button className="px - 4 py - 2 bg - zion - purple text - white rounded - md">Connect Wallet</button>;
      </div>;
    </div>);
}



}
;

  ),;}"
 return (<div className="container max-w-4xl py-10" > <h1 className="text-3xl font-bold mb-6 flex items-center gap-2" > <BadgeDollarSign className="h-6 w-6" /> Wallet </h1> <Card className="mb-6" > <CardHeader> <CardTitle className="flex items-center gap-2" > <BadgeDollarSign className="h-5 w-5" /> Balance </CardTitle> <CardDescription>Your current ZION$ balance</CardDescription> </CardHeader> <CardContent>) : (<p className="text-2xl font-bold" > {}
  wallet?.balance ?? 0;
}ZION$</p>) "
}</CardContent> </Card> <Tabs defaultValue="earnings" > <TabsList className="grid w-full grid-cols-2 mb-4" > <TabsTrigger value="earnings" >Earnings</TabsTrigger> <TabsTrigger value="spending" >Spending</TabsTrigger> </TabsList>) : (<ul className="space-y-2" > {'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  transactions.filter (t => t.transaction type === 'earn') .map (t => (</li>) ) 
}</ul>) "
}</TabsContent>) : (<ul className="space-y-2" > {'
  transactions.filter (t => t.transaction type === 'burn') .map (t => (</li>) ) 
}</ul>) 
}</TabsContent> </Tabs> </div> </div>) 
}
}
}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
import { useWallet } from "@/hooks/useWallet";"
import {
  // TODO: Implement
}
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,"
} from "@/components/ui/card";""
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";""
import { BadgeDollarSign } from "lucide-react";"
export default function WalletPage() {
  const { wallet, transactions, loading } = useWallet();
  return ("
    <div className="container max-w-4xl py-10">;"
</CardContent>"
            <div className="h-8 w-8 rounded-full border-4 border-primary border-t-transparent animate-spin" />;"
</div>"
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">;"
</h1>"
        <BadgeDollarSign className="h-6 w-6" /> Wallet;"

      </h1>;"
      <Card className="mb-6">;"

        <CardHeader>;
"
          <CardTitle className="flex items-center gap-2">;"
            <BadgeDollarSign className="h-5 w-5" /> Balance;"

          ;
          <CardDescription>Your current ZION$ balance;
</CardHeader>"
          <CardTitle className="flex items - center gap - 2">;"
</CardTitle>"
            <BadgeDollarSign className="h - 5 w - 5" /> Balance;"
</BadgeDollarSign>

          </CardTitle>;
          <CardDescription />Your current ZION$ balance</CardDescription>;
        </CardHeader>;

        <CardContent>;
            <div className="h-8 w-8 rounded-full border-4 border-primary border-t-transparent animate-spin" />;"
            <p className="text-2xl font-bold">{wallet?.balance ?? 0} ZION$</p>;"
      ;"
      <Tabs defaultValue="earnings">;"
        <TabsList className="grid w-full grid-cols-2 mb-4">;"
    <div className="container max - w-4xl py - 10">;"
      <h1 className="text - 3xl font - bold mb - 6 flex items - center gap - 2">;"
        <BadgeDollarSign className="h - 6 w - 6" /> Wallet;"

      <Card className="mb - 6">;"

          <CardTitle className="flex items - center gap - 2">;"
            <BadgeDollarSign className="h - 5 w - 5" /> Balance;"

          <CardDescription > Your current ZION$ balance;
)"
            <div className="h - 8 w - 8 rounded - full border - 4 border - primary border - t-transparent animate - spin" />) : ("
</div>)"
            <p className="text - 2xl font - bold">{wallet?.balance ?? 0} ZION$</p>)}"
      <Tabs default_value="earnings">;"
        <TabsList className="grid w - full grid - cols - 2 mb - 4">;"
      <Tabs defaultValue="earnings">"
        <TabsList className="grid w-full grid-cols-2 mb-4">"
          <TabsTrigger value="earnings">Earnings""
          <TabsTrigger value="spending">Spending"
        <TabsContent value="earnings">"
            <p className="text-muted-foreground">No earnings yet</p>""
            <ul className="space-y-2">"
</ul>"
                  <li key={t.id} className="flex justify-between border-b py-2">"
</li>"
                    <span>{t.reason || "Reward"}</span>""
                    <span className="font-medium">+{t.amount} ZION$</span>"
                  </li>
            </ul>
        <TabsContent value="spending">"
            <p className="text-muted-foreground">No spending yet</p>""
                    <span>{t.reason || "Purchase"}</span>""
                    <span className="font-medium">-{t.amount} ZION$</span>"
      <div className="mt-8">"
        <h2 className="text-xl font-semibold mb-2">On-chain Export (Beta)</h2>""
        <p className="text-sm text-muted-foreground mb-4">"
</p>
        </p>"
        <button className="px-4 py-2 bg-zion-purple text-white rounded-md">"
</button>
      </div>
            <p className="text - muted - foreground">No earnings yet</p>) : (""
            <ul className="space - y-2">;"
                <li key={t.id} className="flex justify - between border - b py - 2">;"
                  <span>{t.reason || 'Reward'}</span>;
                  <span className="font - medium">+{t.amount} ZION$</span>;")
                </li>))}
            </ul>)}
        <TabsContent value="spending">;"
            <p className="text - muted - foreground">No spending yet</p>) : (""
                  <span>{t.reason || 'Purchase'}</span>;
                  <span className="font - medium">-{t.amount} ZION$</span>;")
      <div className="mt - 8">;"
        <h2 className="text - xl font - semibold mb - 2">On - chain Export (Beta)</h2>;""
        <p className="text - sm text - muted - foreground mb - 4">Export your ZION$ to an external crypto wallet.</p>;""
        <button className="px - 4 py - 2 bg - zion - purple text - white rounded - md">Connect Wallet</button>;"
      </div>;
    </div>);"
 return (<div className="container max-w-4xl py-10" > <h1 className="text-3xl font-bold mb-6 flex items-center gap-2" > <BadgeDollarSign className="h-6 w-6" /> Wallet </h1> <Card className="mb-6" > <CardHeader> <CardTitle className="flex items-center gap-2" > <BadgeDollarSign className="h-5 w-5" /> Balance  <CardDescription>Your current ZION$ balance  <CardContent>) : (<p className="text-2xl font-bold" > {"
</div>)
}ZION$</p>) "
}  <Tabs defaultValue="earnings" > <TabsList className="grid w-full grid-cols-2 mb-4" > <TabsTrigger value="earnings" >Earnings <TabsTrigger value="spending" >Spending ) : (<ul className="space-y-2" > {"
  transactions.filter (t => t.transaction type === 'earn') .map (t => (</li>) )
}</ul>) 
}) : (<ul className="space-y-2" > {"
</ul>)"
  transactions.filter (t => t.transaction type === 'burn') .map (t => (</li>) )
}  </div> </div>) 
pr-12325
}</TabsContent> </Tabs> </div> </div>) '

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
