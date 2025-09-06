<<<<<<< HEAD
<<<<<<< HEAD
=======
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

import { useState } from "react",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Input } from "@/components/ui/input",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
  }
  },

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

import { useState } from 'react';
import { Button } from '@/components / ui / button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components / ui / card';
import { Input } from '@/components / ui / input';
import { Copy, Facebook, Link, Share, Twitter } from 'lucide-react';
interface ReferralLinkProps {
  referral_link: string;
  on_copy: () => void;
  on_share: (platform: 'twitter' | 'facebook' | 'linkedin') => void;
export /**
 * ReferralLink - Function description
 */
function ReferralLink() {
  const [copied, set_copied] = useState (false);
  const handle_copy = () =>: any {
    on_copy ();
    set_copied (true);
    set_timeout (() => set_copied (false), 2000);

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

    <Card className='mt - 6'>;
      <CardHeader>;
        <CardTitle className='flex items - center gap - 2'>;
          <Link className='h - 5 w - 5' />;

          Your Referral Link;
        </CardTitle>;
        <CardDescription>;
          Share this link with others to earn rewards when they join and;
          complete onboarding;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;


            <p className='text-sm text-green-600 dark:text-green-500'>              Copied to clipboard!
            <p className="text-sm text-green-600 dark:text-green-500">

=======

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
<<<<<<< HEAD
  }
=======
  return (
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
  },

  return (

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Copy, Facebook, Link, Share, Twitter } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';

interface ReferralLinkProps {
  referralLink: string,
  onCopy: () => void,
  onShare: (platform: 'twitter' | 'facebook' | 'linkedin') => void
}

export function ReferralLink({ referralLink, onCopy, onShare }: ReferralLinkProps) {

  const [ copied, setCopied ] = useState(false),

  
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




  return (
<<<<<<< HEAD

    <Card className="mt - 6">;
      <CardHeader>;
        <CardTitle className="flex items - center gap - 2">;
          <Link className="h - 5 w - 5" />;

          Your Referral Link;
        </CardTitle>;
        <CardDescription>;
          Share this link with others to earn rewards when they join and complete onboarding;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;


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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            <Input
              value={referralLink}
              readOnly
              className="font-mono text-sm"
<<<<<<< HEAD


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

          )}
        </div>
      </CardContent>


          {copied && (
          
          {copied && (

=======
            />
            <Button variant="outline" size="icon" onClick={handleCopy} aria-label="Copy referral link">
              <Copy className="h-4 w-4" />
              <span className="sr-only">Copy</span>
            </Button>
          </div>
          {copied && (
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            <p className='text-sm text-green-600 dark:text-green-500'>              Copied to clipboard!
            <p className="text-sm text-green-600 dark:text-green-500">
  const handleCopy = () => {
    onCopy()
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
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
          {copied && (
          
          {copied && (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            <p className="text-sm text-green-600 dark:text-green-500">
<<<<<<< HEAD
          {copied && (
          {copied && (
          
          {copied && (
              Copied to clipboard!
            </p>
<<<<<<< HEAD
=======
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
    <Card className="mt - 6">;
      <CardHeader>;
        <CardTitle className="flex items - center gap - 2">;
          <Link className="h - 5 w - 5" />;

          Your Referral Link;
        </CardTitle>;
        <CardDescription>;
          Share this link with others to earn rewards when they join and complete onboarding;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;


            <Input
              value={referralLink}
              readOnly
              className="font-mono text-sm"


>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          )}
        </div>
      </CardContent>

<<<<<<< HEAD
=======
          {copied && (
          
          {copied && (

            <p className="text-sm text-green-600 dark:text-green-500">
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              Copied to clipboard!
            </p>
          )}
        </div>
      </CardContent>
<<<<<<< HEAD

              variant="outline"
              size="sm"
              className="flex items-center gap-2"
              onClick = {() => onShare('twitter'),}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <CardFooter className="border-t bg-muted/50 p-4">
        <div className="flex flex-col sm:flex-row w-full justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">Share on social media:</p>
          <div className="flex space-x-2">
            <Button 
<<<<<<< HEAD

              variant="outline" 

              size="sm"
              className="flex items-center gap-2"


=======
              variant="outline" 
              size="sm"
              className="flex items-center gap-2"
              onClick={() => onShare('twitter')}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            >
              <Twitter className="h-4 w-4" />
              Twitter
            </Button>
<<<<<<< HEAD
            <Button
              variant='outline'
              size='sm'
              className='flex items-center gap-2'              onClick={() => onShare('facebook')}
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
              onClick = {() => onShare('facebook'),}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            <Button 
              variant="outline" 
              size="sm"
              className="flex items-center gap-2"
<<<<<<< HEAD
<<<<<<< HEAD


=======
              onClick={() => onShare('facebook')}
              onClick = {() => onShare('facebook'),}
              onClick={() => onShare('facebook')}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            >
              <Facebook className="h-4 w-4" />
              Facebook
            </Button>
<<<<<<< HEAD
<<<<<<< HEAD



=======
            <Button
              variant='outline'
              size='sm'
              className='flex items-center gap-2'
              onClick={() => onShare('linkedin')}            >
              <Share className='h-4 w-4' />              LinkedIn              <Share className="h-4 w-4" />
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            <Button 
              variant="outline" 
              size="sm"
              className="flex items-center gap-2"
              onClick={() => onShare('linkedin')}
            >
              <Share className="h-4 w-4" />
<<<<<<< HEAD



=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              LinkedIn
            </Button>
          </div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD

              onClick={() => onShare('linkedin')}            >;
              <Share className='h-4 w-4' />              LinkedIn              <Share className="h-4 w-4" />;
        <div className="flex flex - col space - y-3">;
          <div className="flex space - x-2">;
=======
      </CardFooter>;
    </Card>;
  );
};
}
}
      </CardFooter>
    </Card>
  )
}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
    onCopy();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

    <Card className="mt - 6">;
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
<<<<<<< HEAD
        <div className="flex flex-col space-y-3">;
          <div className="flex space-x-2">;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            <Input;
              value={referral_link}
              read_only;
              className="font - mono text - sm";
            />;
            <Button variant="outline" size="icon" on_click={handle_copy} aria - label="Copy referral link">;
              <Copy className="h - 4 w - 4" />;
              <span className="sr - only">Copy</span>;
            </Button>;
          </div>;
          {copied && (
            <p className="text - sm text - green - 600 dark:text - green - 500">;
              Copied to clipboard!;
            </p>)}
        </div>;
      </CardContent>;
      <CardFooter className='border - t bg - muted / 50 p - 4'>;
        <div className='flex flex - col sm:flex - row w - full justify - between items - center gap - 4'>;
          <p className='text - sm text - muted - foreground'>;
            Share on social media:;
          </p>;
          <div className='flex space - x-2'>;
            <Button;
              variant='outline';
              size='sm';
              className='flex items - center gap - 2';
              on_click={() => on_share ('twitter')}            <Button;
              variant="outline";
              size="sm";
              className="flex items - center gap - 2";
              on_click = {() => on_share ('twitter'), }
            >;
              <Twitter className='h - 4 w - 4' />;
              Twitter;
            </Button>;
            <Button;
              variant='outline';
              size='sm';
              className='flex items - center gap - 2'              on_click={() => on_share ('facebook')}
            <Button;
              variant="outline";
              size="sm";
              className="flex items - center gap - 2";
              on_click = {() => on_share ('facebook'), }
            >;
              <Facebook className='h - 4 w - 4' />;
              Facebook;
            </Button>;
            <Button;
<<<<<<< HEAD
              variant='outline';
              size='sm';
              className='flex items - center gap - 2';
              on_click={() => on_share ('linkedin')}            >;
              <Share className='h - 4 w - 4' />              LinkedIn              <Share className="h - 4 w - 4" />;

=======
              variant="outline";
              size="sm";
              className="flex items-center gap-2";
              onClick={() => onShare('linkedin')}
            >;
              <Share className="h-4 w-4" />;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              LinkedIn;
            </Button>;
          </div>;
        </div>;
      </CardFooter>;
<<<<<<< HEAD


=======
    </Card>;
  );
}
;
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  );
}
    </Card>);
}

      </CardFooter>
    </Card>
<<<<<<< HEAD
  )
=======
  )
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
