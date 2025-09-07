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
</div>"
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">;"
</h1>"
        <BadgeDollarSign className="h-6 w-6" /> Wallet;"
</BadgeDollarSign>
      </h1>;"
      <Card className="mb-6">;"
</Card>
        <CardHeader>;
</CardHeader>"
          <CardTitle className="flex items-center gap-2">;"
</CardTitle>"
            <BadgeDollarSign className="h-5 w-5" /> Balance;"
</BadgeDollarSign>
          </CardTitle>;
          <CardDescription>Your current ZION$ balance</CardDescription>;
        </CardHeader>;
        <CardContent>;
</CardContent>"
            <div className="h-8 w-8 rounded-full border-4 border-primary border-t-transparent animate-spin" />;"
</div>"
            <p className="text-2xl font-bold">{wallet?.balance ?? 0} ZION$</p>;"
        </CardContent>;
      </Card>;"
      <Tabs defaultValue="earnings">;"
</Tabs>"
        <TabsList className="grid w-full grid-cols-2 mb-4">;"
</TabsList>"
    <div className="container max - w-4xl py - 10">;"
</div>"
      <h1 className="text - 3xl font - bold mb - 6 flex items - center gap - 2">;"
</h1>"
        <BadgeDollarSign className="h - 6 w - 6" /> Wallet;"
</BadgeDollarSign>
      </h1>;"
      <Card className="mb - 6">;"
</Card>
        <CardHeader>;
</CardHeader>"
          <CardTitle className="flex items - center gap - 2">;"
</CardTitle>"
            <BadgeDollarSign className="h - 5 w - 5" /> Balance;"
</BadgeDollarSign>
          </CardTitle>;
          <CardDescription > Your current ZION$ balance</CardDescription>;
        </CardHeader>;
        <CardContent>;
</CardContent>)"
            <div className="h - 8 w - 8 rounded - full border - 4 border - primary border - t-transparent animate - spin" />) : ("
</div>)"
            <p className="text - 2xl font - bold">{wallet?.balance ?? 0} ZION$</p>)}"
        </CardContent>;
      </Card>;"
      <Tabs default_value="earnings">;"
</Tabs>"
        <TabsList className="grid w - full grid - cols - 2 mb - 4">;"
</TabsList>"
      <Tabs defaultValue="earnings">"
</Tabs>"
        <TabsList className="grid w-full grid-cols-2 mb-4">"
</TabsList>"
          <TabsTrigger value="earnings">Earnings</TabsTrigger>""
          <TabsTrigger value="spending">Spending</TabsTrigger>"
        </TabsList>"
        <TabsContent value="earnings">"
</TabsContent>"
            <p className="text-muted-foreground">No earnings yet</p>""
            <ul className="space-y-2">"
</ul>"
                  <li key={t.id} className="flex justify-between border-b py-2">"
</li>"
                    <span>{t.reason || "Reward"}</span>""
                    <span className="font-medium">+{t.amount} ZION$</span>"
                  </li>
            </ul>
        </TabsContent>"
        <TabsContent value="spending">"
</TabsContent>"
            <p className="text-muted-foreground">No spending yet</p>""
            <ul className="space-y-2">"
</ul>"
                  <li key={t.id} className="flex justify-between border-b py-2">"
</li>"
                    <span>{t.reason || "Purchase"}</span>""
                    <span className="font-medium">-{t.amount} ZION$</span>"
                  </li>
            </ul>
        </TabsContent>
      </Tabs>
"
      <div className="mt-8">"
</div>"
        <h2 className="text-xl font-semibold mb-2">On-chain Export (Beta)</h2>""
        <p className="text-sm text-muted-foreground mb-4">"
</p>
        </p>"
        <button className="px-4 py-2 bg-zion-purple text-white rounded-md">"
</button>
        </button>
      </div>
    </div>"
            <p className="text - muted - foreground">No earnings yet</p>) : (""
            <ul className="space - y-2">;"
</ul>"
                <li key={t.id} className="flex justify - between border - b py - 2">;"
</li>"
                  <span>{t.reason || 'Reward'}</span>;''
                  <span className="font - medium">+{t.amount} ZION$</span>;")
                </li>))}
            </ul>)}
        </TabsContent>;"
        <TabsContent value="spending">;"
</TabsContent>"
            <p className="text - muted - foreground">No spending yet</p>) : (""
            <ul className="space - y-2">;"
</ul>"
                <li key={t.id} className="flex justify - between border - b py - 2">;"
</li>"
                  <span>{t.reason || 'Purchase'}</span>;''
                  <span className="font - medium">-{t.amount} ZION$</span>;")
                </li>))}
            </ul>)}
        </TabsContent>;
      </Tabs>;"
      <div className="mt - 8">;"
</div>"
        <h2 className="text - xl font - semibold mb - 2">On - chain Export (Beta)</h2>;""
        <p className="text - sm text - muted - foreground mb - 4">Export your ZION$ to an external crypto wallet.</p>;""
        <button className="px - 4 py - 2 bg - zion - purple text - white rounded - md">Connect Wallet</button>;"
      </div>;
    </div>);"
 return (<div className="container max-w-4xl py-10" > <h1 className="text-3xl font-bold mb-6 flex items-center gap-2" > <BadgeDollarSign className="h-6 w-6" /> Wallet </h1> <Card className="mb-6" > <CardHeader> <CardTitle className="flex items-center gap-2" > <BadgeDollarSign className="h-5 w-5" /> Balance </CardTitle> <CardDescription>Your current ZION$ balance</CardDescription> </CardHeader> <CardContent>) : (<p className="text-2xl font-bold" > {"
</div>)
}ZION$</p>) "
}</CardContent> </Card> <Tabs defaultValue="earnings" > <TabsList className="grid w-full grid-cols-2 mb-4" > <TabsTrigger value="earnings" >Earnings</TabsTrigger> <TabsTrigger value="spending" >Spending</TabsTrigger> </TabsList>) : (<ul className="space-y-2" > {"
</Tabs>)"
  transactions.filter (t => t.transaction type === 'earn') .map (t => (</li>) )'
}</ul>) '
}</TabsContent>) : (<ul className="space-y-2" > {"
</ul>)"
  transactions.filter (t => t.transaction type === 'burn') .map (t => (</li>) )'
}</ul>) 
}</TabsContent> </Tabs> </div> </div>) '