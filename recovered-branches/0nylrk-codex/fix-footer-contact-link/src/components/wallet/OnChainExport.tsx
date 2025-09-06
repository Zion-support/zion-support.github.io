  const [isConnected, setIsConnected] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [exportStatus, setExportStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle'),
  const { toast } = useToast();
  const { user } = useAuth();

  const handleConnectWallet = async () => {
    try {
      // Check if wallet is available;
      const ethereum = (window as any).ethereum;
        });
        return;
      }
    } finally {
      setIsExporting (false);
    }
  }

  return (
    <Card>;
      <CardHeader>;
        <CardTitle className="flex items-center gap-2">;
          {isConnected ? (;
            <Wallet className="h-5 w-5 text-primary" />;
          ) : (;
            <Wallet className="h-5 w-5" />;
          )}
              </TooltipContent>;
            </Tooltip>;
          </TooltipProvider>;
        </CardTitle>;
                {isExporting ? "Processing..." : "Export Tokens"}
                {!isExporting && <ArrowUpRight className="ml-2 h-4 w-4" />}
              </Button>;
            )}
          </div>;
        ) : (;
          <div className="space-y-2">;
            <p className="text-sm text-muted-foreground mb-3">;
              Connect your web3 wallet to export tokens to the blockchain.;
            </p>;
            <Button onClick={handleConnectWallet} className="w-full">;
              Connect Wallet;
            </Button>;
          </div>;
        )}
=======
        <CardDescription > Export your ZION$ to an external wallet</CardDescription>;
      </CardHeader>;
      <CardContent>;
        {is_connected ? (
          <div className="space - y-4">;
            <div className="flex justify - between text - sm">;
              <span > Available to export:</span>;
              <span className="font - medium">250 ZION$</span>;
            </div>;
            {export_status === 'success' ? (
              <Button className="w - full bg - green - 600 hover:bg - green - 700" disabled>;
                <Check className="mr - 2 h - 4 w - 4" />;
                Tokens Exported;
              </Button>) : (
              <Button;
                className="w - full";
                on_click={handleExportTokens}
                disabled={is_exporting}
              >;
                {is_exporting ? "Processing..." : "Export Tokens"}
                {!is_exporting && <ArrowUpRight className="ml - 2 h - 4 w - 4" />}
              </Button>)}
          </div>) : (
          <div className="space - y-2">;
            <p className="text - sm text - muted - foreground mb - 3">;
              Connect your web3 wallet to export tokens to the blockchain.;
            </p>;
            <Button on_click={handleConnectWallet} className="w - full">;
              Connect Wallet;
            </Button>;
          </div>)}
      </CardContent>;
    </Card>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
