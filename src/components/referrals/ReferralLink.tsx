<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card
  CardContent
  CardDescription
  CardFooter
  CardHeader
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5

=======
import { useState } from "react",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Input } from "@/components/ui/input",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Copy, Facebook, Link, Share, Twitter } from 'lucide-react'
interface ReferralLinkProps {
  referralLink: string;
  onCopy: () => void;
  onShare: (platform: 'twitter' | 'facebook' | 'linkedin') => void
export function ReferralLink({
  referralLink
  onCopy
  onShare
}: ReferralLinkProps) {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    onCopy()
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;
  CardTitle,;
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Copy, Facebook, Link, Share, Twitter } from 'lucide-react';
interface ReferralLinkProps {;
  referralLink: string;
  onCopy: () => void;
  onShare: (platform: 'twitter' | 'facebook' | 'linkedin') => void;

<<<<<<< HEAD
export function ReferralLink(): any ({;
  referralLink,;
  onCopy,;
  onShare,;
}: ReferralLinkProps) {;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {;
    onCopy();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <Card className='mt-6'>;
      <CardHeader>;
        <CardTitle className='flex items-center gap-2'>;
          <Link className='h-5 w-5' />;
          Your Referral Link;
        </CardTitle>;
        <CardDescription>;
          Share this link with others to earn rewards when they join and;
          complete onboarding;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;
        <div className='flex flex-col space-y-3'>;
          <div className='flex space-x-2'>;
            <Input
              value = {referralLink,}
              readOnly
              className='font-mono text-sm'
            />;
            <Button
              variant='outline'
              size='icon'
              onClick={handleCopy}
              aria-label='Copy referral link'>;
              <Copy className='h-4 w-4' />;
              <span className='sr-only'>Copy</span>;
            </Button>;
          </div>;

          {copied && (
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
              value={referralLink}
              readOnly
              className="font-mono text-sm"
            />
            <Button variant="outline" size="icon" onClick={handleCopy} aria-label="Copy referral link">
              <Copy className="h-4 w-4" />
              <span className="sr-only">Copy</span>
            </Button>
          </div>
<<<<<<< HEAD
          {copied && (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
            <p className='text-sm text-green-600 dark:text-green-500'>              Copied to clipboard!
            <p className="text-sm text-green-600 dark:text-green-500">
  const handleCopy = () => {
    onCopy()
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
        <div className='flex flex - col space - y-3'>;
          <div className='flex space - x-2'>;
            <Input;
              value = {referral_link, }
              read_only;
              className='font - mono text - sm';
            />;
            <Button;
              variant='outline';
              size='icon';
              on_click={handle_copy}
              aria - label='Copy referral link';
            >;
              <Copy className='h - 4 w - 4' />;
              <span className='sr - only'>Copy</span>;
            </Button>;
          </div>;
          {copied && (
            <p className='text - sm text - green - 600 dark:text - green - 500'>              Copied to clipboard!;
            <p className="text - sm text - green - 600 dark:text - green - 500">;
  const handle_copy = () =>: any {
    on_copy ();
    set_copied (true);
    set_timeout (() => set_copied (false), 2000);
  }
          {copied && (;
            <p className='text-sm text-green-600 dark:text-green-500'>              Copied to clipboard!;
            <p className="text-sm text-green-600 dark:text-green-500">;

  const handleCopy = () => {;
    onCopy();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
<<<<<<< HEAD

  return (
=======
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
              value={referralLink}
              readOnly
              className="font-mono text-sm"
            />
            <Button variant="outline" size="icon" onClick={handleCopy} aria-label="Copy referral link">
              <Copy className="h-4 w-4" />
              <span className="sr-only">Copy</span>
            </Button>
          </div>
<<<<<<< HEAD
          {copied && (
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
          {copied && (
=======
          
          {copied && (
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            <p className="text-sm text-green-600 dark:text-green-500">
              Copied to clipboard!
            </p>
          )}
        </div>
      </CardContent>
<<<<<<< HEAD
      <CardFooter className='border-t bg-muted/50 p-4'>
        <div className='flex flex-col sm:flex-row w-full justify-between items-center gap-4'>
          <p className='text-sm text-muted-foreground'>
            Share on social media:
          </p>
          <div className='flex space-x-2'>
            <Button
              variant='outline'
              size='sm'
              className='flex items-center gap-2'
              onClick={() => onShare('twitter')}            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
              onClick = {() => onShare('twitter'),}
=======
      <CardFooter className="border-t bg-muted/50 p-4">
        <div className="flex flex-col sm:flex-row w-full justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">Share on social media:</p>
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="sm"
              className="flex items-center gap-2"
              onClick={() => onShare('twitter')}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            >
              <Twitter className="h-4 w-4" />
              Twitter
            </Button>
<<<<<<< HEAD
            <Button
              variant='outline'
              size='sm'
              className='flex items-center gap-2'              onClick={() => onShare('facebook')}
<<<<<<< HEAD
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
              onClick = {() => onShare('facebook'),}
=======
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            <Button 
              variant="outline" 
              size="sm"
              className="flex items-center gap-2"
<<<<<<< HEAD
              onClick={() => onShare('facebook')}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
              onClick = {() => onShare('facebook'),}
=======
              onClick={() => onShare('facebook')}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            >
              <Facebook className="h-4 w-4" />
              Facebook
            </Button>
<<<<<<< HEAD
            <Button
              variant='outline'
              size='sm'
              className='flex items-center gap-2'
              onClick={() => onShare('linkedin')}            >
              <Share className='h-4 w-4' />              LinkedIn              <Share className="h-4 w-4" />
=======
            <Button 
              variant="outline" 
              size="sm"
              className="flex items-center gap-2"
              onClick={() => onShare('linkedin')}
            >
              <Share className="h-4 w-4" />
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              LinkedIn
            </Button>
          </div>
        </div>
<<<<<<< HEAD
      </CardFooter>;
    </Card>;
  );
};
}
}
=======
      </CardFooter>
    </Card>
  )
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Input } from "@/components/ui/input",;
import { Copy, Facebook, Link, Share, Twitter } from 'lucide-react';
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
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
            <Input
              value={referralLink}
              readOnly
              className="font-mono text-sm"
            />
            <Button variant="outline" size="icon" onClick={handleCopy} aria-label="Copy referral link">
              <Copy className="h-4 w-4" />
              <span className="sr-only">Copy</span>
            </Button>
          </div>
          {copied && (
            <p className="text-sm text-green-600 dark:text-green-500">
              Copied to clipboard!
            </p>
            />;
            <Button variant="outline" size="icon" onClick={handleCopy} aria-label="Copy referral link">;
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
      <CardFooter className='border-t bg-muted/50 p-4'>;
        <div className='flex flex-col sm:flex-row w-full justify-between items-center gap-4'>;
          <p className='text-sm text-muted-foreground'>;
            Share on social media:;
          </p>;
          <div className='flex space-x-2'>;
            <Button
              variant='outline'
              size='sm'
              className='flex items-center gap-2'
              onClick={() => onShare('twitter')}            <Button
              variant="outline"
              variant="outline" 
              size="sm"
              className="flex items-center gap-2"
              onClick = {() => onShare('twitter'),}
            >;
              <Twitter className='h-4 w-4' />;
              Twitter;
            </Button>;
            <Button
              variant='outline'
              size='sm'
              className='flex items-center gap-2'              onClick={() => onShare('facebook')}
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
              onClick = {() => onShare('facebook'),}
            >;
              <Facebook className='h-4 w-4' />;
              Facebook;
            </Button>;
            <Button
              variant='outline'
              size='sm'
              className='flex items-center gap-2'
              onClick={() => onShare('linkedin')}            >;
              <Share className='h-4 w-4' />              LinkedIn              <Share className="h-4 w-4" />;
              onClick={() => onShare('linkedin')}            >
              <Share className='h-4 w-4' />              LinkedIn              <Share className="h-4 w-4" />
              LinkedIn
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
              LinkedIn;
            </Button>;
          </div>;
        </div>;
      </CardFooter>;
    </Card>;
  );
}
  );
}
<<<<<<< HEAD
    </Card>);
}
=======
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
