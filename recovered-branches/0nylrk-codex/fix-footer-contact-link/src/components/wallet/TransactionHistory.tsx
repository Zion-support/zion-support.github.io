    return (
      <Card>;
        <CardHeader>;
          <CardTitle>Transaction History</CardTitle>;
          <CardDescription>Loading transactions...</CardDescription>;
        </CardHeader>;
      </Card>;
    );
  }

  const earnTransactions = transactions && transactions.filter(tx => tx && tx.transaction_type === 'earn');
  const burnTransactions = transactions && transactions.filter(tx => tx && tx.transaction_type === 'burn');

  return (
                  ))}
                </div>;
              )}
                  ))}
                </div>;
              )}
            </ScrollArea>;
          </TabsContent>;
        </Tabs>;
      </CardContent>;
=======
    </Card>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
