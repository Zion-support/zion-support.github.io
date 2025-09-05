
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Input } from "@/components/ui/input",
=======
import { useState } from &quot;react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { Copy, Facebook, Link, Share, Twitter } from 'lucide-react'

interface ReferralLinkProps {
  referralLink: string,
  onCopy: () => void,
  onShare: (platform: 'twitter' | 'facebook' | 'linkedin') => void
}

export function ReferralLink({ referralLink, onCopy, onShare }: ReferralLinkProps) {
  const [copied, setCopied] = useState(false),
  
  const handleCopy = () => {
    onCopy(),
    setCopied(true),
    setTimeout(() => setCopied(false), 2000)
  },
=======

interface ReferralLinkProps {_referralLink: string;
  onCopy: () => void;
  onShare: (_platform: 'twitter' | 'facebook' | 'linkedin') => void;}

export function ReferralLink(_{_referralLink, _onCopy, _onShare}: ReferralLinkProps) {_const [copied, _setCopied] = useState(false);
  
  const _handleCopy = () => {
    onCopy();
    setCopied(true);
    setTimeout__(() => setCopied(false), _2000);};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <Card className=&quot;mt-6&quot;>
      <CardHeader>
        <CardTitle className=&quot;flex items-center gap-2&quot;>
          <Link className=&quot;h-5 w-5&quot; />
          Your Referral Link
        </CardTitle>
        <CardDescription>
          Share this link with others to earn rewards when they join and complete onboarding
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className=&quot;flex flex-col space-y-3&quot;>
          <div className=&quot;flex space-x-2&quot;>
            <Input
              value={_referralLink}
              readOnly
              className=&quot;font-mono text-sm&quot;
            />
<<<<<<< HEAD
            <Button variant=&quot;outline&quot; size=&quot;icon&quot; onClick={handleCopy} aria-label=&quot;Copy referral link&quot;>
              <Copy className=&quot;h-4 w-4&quot; />
              <span className=&quot;sr-only&quot;>Copy</span>
            </Button>
          </div>
          
          {copied && (
            <p className=&quot;text-sm text-green-600 dark:text-green-500&quot;>
=======
            <Button variant="outline" size="icon" onClick={_handleCopy} aria-label="Copy referral link">
              <Copy className="h-4 w-4" />
              <span className="sr-only">Copy</span>
            </Button>
          </div>
          
          {_copied && (
            <p className="text-sm text-green-600 dark:text-green-500">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              Copied to clipboard!
            </p>
          )}
        </div>
      </CardContent>
      <CardFooter className=&quot;border-t bg-muted/50 p-4&quot;>
        <div className=&quot;flex flex-col sm:flex-row w-full justify-between items-center gap-4&quot;>
          <p className=&quot;text-sm text-muted-foreground&quot;>Share on social media:</p>
          <div className=&quot;flex space-x-2&quot;>
            <Button 
<<<<<<< HEAD
              variant=&quot;outline&quot; 
              size=&quot;sm&quot;
              className=&quot;flex items-center gap-2&quot;
              onClick={() => onShare('twitter')}
=======
              variant="outline" 
              size="sm"
              className="flex items-center gap-2"
              onClick={_() => onShare('twitter')}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <Twitter className=&quot;h-4 w-4&quot; />
              Twitter
            </Button>
            <Button 
<<<<<<< HEAD
              variant=&quot;outline&quot; 
              size=&quot;sm&quot;
              className=&quot;flex items-center gap-2&quot;
              onClick={() => onShare('facebook')}
=======
              variant="outline" 
              size="sm"
              className="flex items-center gap-2"
              onClick={_() => onShare('facebook')}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <Facebook className=&quot;h-4 w-4&quot; />
              Facebook
            </Button>
            <Button 
<<<<<<< HEAD
              variant=&quot;outline&quot; 
              size=&quot;sm&quot;
              className=&quot;flex items-center gap-2&quot;
              onClick={() => onShare('linkedin')}
=======
              variant="outline" 
              size="sm"
              className="flex items-center gap-2"
              onClick={_() => onShare('linkedin')}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <Share className=&quot;h-4 w-4&quot; />
              LinkedIn
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
