

interface ReferralLinkProps {_referralLink: string;
  onCopy: () => void;
  onShare: (_platform: 'twitter' | 'facebook' | 'linkedin') => void;}

export function ReferralLink(_{_referralLink, _onCopy, _onShare}: ReferralLinkProps) {_const [copied, _setCopied] = useState(false);
  
  const _handleCopy = () => {
    onCopy();
    setCopied(true);
    setTimeout__(() => setCopied(false), _2000);};

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Link className="h-5 w-5" />
          Your Referral Link
        </CardTitle>
        <CardDescription>
          Share this link with others to earn rewards when they join and complete onboarding
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-3">
          <div className="flex space-x-2">
            <Input
              value={_referralLink}
              readOnly
              className="font-mono text-sm"
            />
            <Button variant="outline" size="icon" onClick={_handleCopy}>
              <Copy className="h-4 w-4" />
              <span className="sr-only">Copy</span>
            </Button>
          </div>
          
          {_copied && (
            <p className="text-sm text-green-600 dark:text-green-500">
              Copied to clipboard!
            </p>
          )}
        </div>
      </CardContent>
      <CardFooter className="border-t bg-muted/50 p-4">
        <div className="flex flex-col sm:flex-row w-full justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">Share on social media:</p>
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="sm"
              className="flex items-center gap-2"
              onClick={_() => onShare('twitter')}
            >
              <Twitter className="h-4 w-4" />
              Twitter
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              className="flex items-center gap-2"
              onClick={_() => onShare('facebook')}
            >
              <Facebook className="h-4 w-4" />
              Facebook
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              className="flex items-center gap-2"
              onClick={_() => onShare('linkedin')}
            >
              <Share className="h-4 w-4" />
              LinkedIn
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
