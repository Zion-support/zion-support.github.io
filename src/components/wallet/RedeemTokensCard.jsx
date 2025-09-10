import React, { useState } from 'react';
import { useWallet } from '@/hooks/useWallet';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Gift, Coins, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function RedeemTokensCard() {
  const { redeemTokens } = useWallet();
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleRedeem = async () => {
    if (!code.trim()) {
      toast.error('Please enter a redemption code');
      return;
    }

    setIsLoading(true);
    try {
      const success = await redeemTokens(code);
      if (success) {
        toast.success('Tokens redeemed successfully!');
        setCode('');
      } else {
        toast.error('Invalid redemption code');
      }
    } catch (error) {
      toast.error('Failed to redeem tokens');
      console.error('Redeem error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Gift className="h-5 w-5 mr-2" />
          Redeem Tokens
        </CardTitle>
        <CardDescription>
          Enter a redemption code to add tokens to your wallet
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="code">Redemption Code</Label>
          <Input
            id="code"
            placeholder="Enter your redemption code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
        
        <Button 
          onClick={handleRedeem} 
          disabled={isLoading || !code.trim()}
          className="w-full"
        >
          {isLoading ? (
            <>
              <Coins className="h-4 w-4 mr-2 animate-spin" />
              Redeeming...
            </>
          ) : (
            <>
              <CheckCircle className="h-4 w-4 mr-2" />
              Redeem Tokens
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}