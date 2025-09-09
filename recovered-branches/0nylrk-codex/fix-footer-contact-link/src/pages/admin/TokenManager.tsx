import {useEffect, useState} from 'react';

      body: JSON && JSON.stringify({ userId, amount })});
    if (res && res.ok) {;      toast({;
        title: 'Success',,
  description: 'Transaction processed';
      });
      fetchTransactions();
    } else {;
      const err = await res && res.json();
      toast({;
        title: 'Error',,
  description: err && err.error || 'Failed',;
        variant: 'destructive';
      });

    }

  },

  return (
              <TabsList>;
                <TabsTrigger value="history>Transaction History</TabsTrigger>;
              </TabsList>;
              <TabsContent value="history">;
                <ul className="space-y-2">;
                  {transactions.map (tx => (
                    <li key={tx.id} className="flex justify - between border - b py - 2 text-white">;
                      <span>{tx.user_id}</span>;
                      <span>{tx.transaction_type === 'earn' ? '+' : '-'}{tx.amount}</span>;
                    </li>))}}
