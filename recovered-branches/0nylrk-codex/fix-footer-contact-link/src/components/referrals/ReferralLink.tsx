
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Input } from "@/components/ui/input",
import { Copy, Facebook, Link, Share, Twitter } from "lucide-react",
=======
import { useState } from &quot;react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Copy, Facebook, Link, Share, Twitter } from &quot;lucide-react&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

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
              value={referralLink}
              readOnly
              className=&quot;font-mono text-sm&quot;
            />
            <Button variant=&quot;outline&quot; size=&quot;icon&quot; onClick={handleCopy}>
              <Copy className=&quot;h-4 w-4&quot; />
              <span className=&quot;sr-only&quot;>Copy</span>
            </Button>
          </div>
          
          {copied && (
            <p className=&quot;text-sm text-green-600 dark:text-green-500&quot;>
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
              variant=&quot;outline&quot; 
              size=&quot;sm&quot;
              className=&quot;flex items-center gap-2&quot;
              onClick={() => onShare('twitter')}
            >
              <Twitter className=&quot;h-4 w-4&quot; />
              Twitter
            </Button>
            <Button 
              variant=&quot;outline&quot; 
              size=&quot;sm&quot;
              className=&quot;flex items-center gap-2&quot;
              onClick={() => onShare('facebook')}
            >
              <Facebook className=&quot;h-4 w-4&quot; />
              Facebook
            </Button>
            <Button 
              variant=&quot;outline&quot; 
              size=&quot;sm&quot;
              className=&quot;flex items-center gap-2&quot;
              onClick={() => onShare('linkedin')}
            >
              <Share className=&quot;h-4 w-4&quot; />
              LinkedIn
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
=======
import { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Input } from "@/components/ui/input",;
import { Copy, Facebook, Link, Share, Twitter } from "lucide-react",;
interface ReferralLinkProps {;
  referralLink: string,;
  onCopy: () => void,;
  onShare: (platform: 'twitter' | 'facebook' | 'linkedin') => void;
}
;
export function ReferralLink({ referralLink, onCopy, onShare }: ReferralLinkProps) {;
  const [copied, setCopied] = useState(false),;
  const handleCopy = () => {;
    onCopy(),;
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (;
    <Card className="mt-6">;
      <CardHeader>;
        <CardTitle className="flex items-center gap-2">;
          <Link className="h-5 w-5" />;
          Your Referral Link;
        </CardTitle>;
        <CardDescription>;
          Share this link with others to earn rewards when they join and complete onboarding;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;
        <div className="flex flex-col space-y-3">;
          <div className="flex space-x-2">;
            <Input;
              value={referralLink}
              readOnly;
              className="font-mono text-sm";
            />;
            <Button variant="outline" size="icon" onClick={handleCopy}>;
              <Copy className="h-4 w-4" />;
              <span className="sr-only">Copy</span>;
            </Button>;
          </div>;
          {copied && (;
            <p className="text-sm text-green-600 dark:text-green-500">;
              Copied to clipboard!;
            </p>;
          )}
        </div>;
      </CardContent>;
      <CardFooter className="border-t bg-muted/50 p-4">;
        <div className="flex flex-col sm:flex-row w-full justify-between items-center gap-4">;
          <p className="text-sm text-muted-foreground">Share on social media:</p>;
          <div className="flex space-x-2">;
            <Button;
              variant="outline";
              size="sm";
              className="flex items-center gap-2";
              onClick={() => onShare('twitter')}
            >;
              <Twitter className="h-4 w-4" />;
              Twitter;
            </Button>;
            <Button;
              variant="outline";
              size="sm";
              className="flex items-center gap-2";
              onClick={() => onShare('facebook')}
            >;
              <Facebook className="h-4 w-4" />;
              Facebook;
            </Button>;
            <Button;
              variant="outline";
              size="sm";
              className="flex items-center gap-2";
              onClick={() => onShare('linkedin')}
            >;
              <Share className="h-4 w-4" />;
              LinkedIn;
            </Button>;
          </div>;
        </div>;
      </CardFooter>;
    </Card>;
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;