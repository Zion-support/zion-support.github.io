<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,;
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Copy, Facebook, Link, Share, Twitter } from 'lucide-react';
<<<<<<< HEAD
=======
=======

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Copy, Facebook, Link, Share, Twitter } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

interface ReferralLinkProps {
  referralLink: string;
  onCopy: () => void;
  onShare: (platform: 'twitter' | 'facebook' | 'linkedin') => void;

export function ReferralLink({
  referralLink,
  onCopy,
  onShare,
}: ReferralLinkProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    onCopy();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className='mt-6'>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <Link className='h-5 w-5' />
          Your Referral Link
        </CardTitle>
        <CardDescription>
          Share this link with others to earn rewards when they join and
          complete onboarding
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex flex-col space-y-3'>
          <div className='flex space-x-2'>
            <Input
              value={referralLink}
              readOnly
              className='font-mono text-sm'
            />
            <Button
              variant='outline'
              size='icon'
              onClick={handleCopy}
              aria-label='Copy referral link'
            >
              <Copy className='h-4 w-4' />
              <span className='sr-only'>Copy</span>
            </Button>
          </div>

          {copied && (
<<<<<<< HEAD
            <p className='text-sm text-green-600 dark:text-green-500'>              Copied to clipboard!
=======
<<<<<<< HEAD
            <p className='text-sm text-green-600 dark:text-green-500'>
=======

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
    onCopy();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000)
  };


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
          
          {copied && (
            <p className="text-sm text-green-600 dark:text-green-500">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <p className="text-sm text-green-600 dark:text-green-500">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              Copied to clipboard!
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            </p>
          )}
        </div>
      </CardContent>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
<<<<<<< HEAD
=======
=======
      <CardFooter className="border-t bg-muted/50 p-4">
        <div className="flex flex-col sm:flex-row w-full justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">Share on social media:</p>
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="sm"
              className="flex items-center gap-2"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              onClick={() => onShare('twitter')}
            >
              <Twitter className='h-4 w-4' />
              Twitter
            </Button>
            <Button
              variant='outline'
              size='sm'
              className='flex items-center gap-2'
              onClick={() => onShare('facebook')}
            >
              <Facebook className='h-4 w-4' />
              Facebook
            </Button>
            <Button
              variant='outline'
              size='sm'
              className='flex items-center gap-2'
              onClick={() => onShare('linkedin')}
            >
<<<<<<< HEAD
              <Share className='h-4 w-4' />              LinkedIn
=======
<<<<<<< HEAD
              <Share className='h-4 w-4' />
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
            >
              <Twitter className="h-4 w-4" />
              Twitter
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              className="flex items-center gap-2"
              onClick={() => onShare('facebook')}
            >
              <Facebook className="h-4 w-4" />
              Facebook
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              className="flex items-center gap-2"
              onClick={() => onShare('linkedin')}
            >
              <Share className="h-4 w-4" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <Share className="h-4 w-4" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              LinkedIn
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
