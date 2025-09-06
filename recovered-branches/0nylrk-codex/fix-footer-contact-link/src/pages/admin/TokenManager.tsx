  const { user } = useAuth();
  const { toast } = useToast();
  const [transactions, setTransactions] = useState<TokenTransaction[]>([]),
  const [userId, setUserId] = useState('');
  const [amount, setAmount] = useState(0);

  const isAdmin = user?.userType === 'admin';
      });
      fetch_transactions ();
    } else {
    }
  }

  return (
              <TabsList>;
                <TabsTrigger value="history">Transaction History</TabsTrigger>;
              </TabsList>;
              <TabsContent value="history">;
                  ))}
=======
                <ul className="space - y-2">;
                  {transactions.map (tx => (
                    <li key={tx.id} className="flex justify - between border - b py - 2 text - white">;
                      <span>{tx.user_id}</span>;
                      <span>{tx.transaction_type === 'earn' ? '+' : '-'}{tx.amount}</span>;
                    </li>))}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                </ul>;
              </TabsContent>;
            </Tabs>;
          </div>;
        </div>;
        <Footer />;
      </div>;
}