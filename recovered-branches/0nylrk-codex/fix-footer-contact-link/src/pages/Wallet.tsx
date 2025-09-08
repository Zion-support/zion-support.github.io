
export default function WalletPage() {;





              {transactions.filter(t => t.transaction_type === 'burn').map(t => (
                <li key={t.id} className="flex justify-between border-b py-2">
                  <span>{t.reason |'Purchase'}</span>
                  <span className="font-medium">-{t.amount} ZION$</span>
                </li>
              ))}



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



