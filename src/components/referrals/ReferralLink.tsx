<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  }
  },

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  },

  return (
=======

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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
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
=======

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


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <Input
              value={referralLink}
              readOnly
              className="font-mono text-sm"
<<<<<<< HEAD
            />
            <Button variant="outline" size="icon" onClick={handleCopy} aria-label="Copy referral link">
              <Copy className="h-4 w-4" />
              <span className="sr-only">Copy</span>
            </Button>
          </div>
          {copied && (
            <p className='text-sm text-green-600 dark:text-green-500'>              Copied to clipboard!
            <p className="text-sm text-green-600 dark:text-green-500">
  const handleCopy = () => {
    onCopy()
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
          {copied && (
          
          {copied && (
            <p className="text-sm text-green-600 dark:text-green-500">
          {copied && (
          {copied && (
          
          {copied && (
              Copied to clipboard!
            </p>
=======


          )}
        </div>
      </CardContent>
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
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

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

          )}
        </div>
      </CardContent>

          {copied && (
          
          {copied && (

=======
=======
          {copied && (
=======
          
          {copied && (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <p className="text-sm text-green-600 dark:text-green-500">
              Copied to clipboard!
            </p>
          )}
        </div>
      </CardContent>
<<<<<<< HEAD

<<<<<<< HEAD
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
              onClick = {() => onShare('twitter'),}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <CardFooter className="border-t bg-muted/50 p-4">
        <div className="flex flex-col sm:flex-row w-full justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">Share on social media:</p>
          <div className="flex space-x-2">
            <Button 
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              variant="outline" 
              size="sm"
              className="flex items-center gap-2"
              onClick={() => onShare('twitter')}
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
=======

              variant="outline" 

              size="sm"
              className="flex items-center gap-2"


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Button 
              variant="outline" 
              size="sm"
              className="flex items-center gap-2"
<<<<<<< HEAD
<<<<<<< HEAD
              onClick={() => onShare('facebook')}
              onClick = {() => onShare('facebook'),}
              onClick={() => onShare('facebook')}
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              onClick={() => onShare('facebook')}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            >
              <Facebook className="h-4 w-4" />
              Facebook
            </Button>
<<<<<<< HEAD
<<<<<<< HEAD
            <Button
              variant='outline'
              size='sm'
              className='flex items-center gap-2'
              onClick={() => onShare('linkedin')}            >
              <Share className='h-4 w-4' />              LinkedIn              <Share className="h-4 w-4" />
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Button 
              variant="outline" 
              size="sm"
              className="flex items-center gap-2"
              onClick={() => onShare('linkedin')}
            >
              <Share className="h-4 w-4" />
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              LinkedIn
            </Button>
          </div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
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
      </CardFooter>
    </Card>
  )
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
    <Card className="mt-6">;
<<<<<<< HEAD
      <CardHeader>;
        <CardTitle className="flex items-center gap-2">;
          <Link className="h-5 w-5" />;
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

    <Card className="mt - 6">;
      <CardHeader>;
        <CardTitle className="flex items - center gap - 2">;
          <Link className="h - 5 w - 5" />;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======

              onClick={() => onShare('linkedin')}            >;
              <Share className='h-4 w-4' />              LinkedIn              <Share className="h-4 w-4" />;
        <div className="flex flex - col space - y-3">;
          <div className="flex space - x-2">;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <Input;
              value={referralLink}
              readOnly;
              className="font-mono text-sm";
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
<<<<<<< HEAD
              variant="outline";
              size="sm";
              className="flex items-center gap-2";
              onClick={() => onShare('linkedin')}
            >;
              <Share className="h-4 w-4" />;
=======
              variant='outline';
              size='sm';
              className='flex items - center gap - 2';
              on_click={() => on_share ('linkedin')}            >;
              <Share className='h - 4 w - 4' />              LinkedIn              <Share className="h - 4 w - 4" />;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              LinkedIn;
            </Button>;
          </div>;
        </div>;
      </CardFooter>;
<<<<<<< HEAD
    </Card>;
  );
}
;
ursor/fix-website-loading-errors-and-merge-6662
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


            <Input
              value={referralLink}
              readOnly
              className="font-mono text-sm"


          )}
        </div>
      </CardContent>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
