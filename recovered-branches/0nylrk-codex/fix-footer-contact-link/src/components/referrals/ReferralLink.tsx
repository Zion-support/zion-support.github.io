<<<<<<< HEAD
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {useState} from "react";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Copy, Facebook, Link, Share, Twitter} from "lucide-react";

<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { useState } from "react",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Input } from "@/components/ui/input",
import { Copy, Facebook, Link, Share, Twitter } from "lucide-react",




<<<<<<< HEAD

<<<<<<< HEAD
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card
  CardContent
  CardDescription
  CardFooter
  CardHeader
  CardTitle
} from "@/components/ui/card";
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {useState} from "react";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Copy, Facebook, Link, Share, Twitter} from "lucide-react";
import { useState } from "react",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Input } from "@/components/ui/input",
import { Copy, Facebook, Link, Share, Twitter } from "lucide-react",

<<<<<<< HEAD
import { Input } from "@/components/ui/input";
import { Copy, Facebook, Link, Share, Twitter } from "lucide-react";
=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface ReferralLinkProps {
  referralLink: string;
  onCopy: () => void;
  onShare: (platform: 'twitter' | 'facebook' | 'linkedin') => void
}



<<<<<<< HEAD
<<<<<<< HEAD
export function ReferralLink({ referralLink, onCopy, onShare }: ReferralLinkProps) {;
  const [copied, setCopied] = useState(false);

export function ReferralLink({ referralLink, onCopy, onShare }: ReferralLinkProps) {
  const [copied, setCopied] = useState(false),

  
export function ReferralLink({
  referralLink
  onCopy
  onShare
}: ReferralLinkProps) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    onCopy();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export function ReferralLink({ referralLink, onCopy, onShare }: ReferralLinkProps) {;
  const [copied, setCopied] = useState(false);
export function ReferralLink({ referralLink, onCopy, onShare }: ReferralLinkProps) {
  const [copied, setCopied] = useState(false),
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
export function ReferralLink({ referralLink, onCopy, onShare }: ReferralLinkProps) {;
  const [copied, setCopied] = useState(false);

=======
export function ReferralLink({ referralLink, onCopy, onShare }: ReferralLinkProps) {
  const [copied, setCopied] = useState(false),
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  
  const handleCopy = () => {
    onCopy(),
    setCopied(true),
    setTimeout(() => setCopied(false), 2000)
  },
<<<<<<< HEAD
<<<<<<< HEAD

  };
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Link className="h-5 w-5" />
          Your Referral Link
        </CardTitle>
        <CardDescription>
          Share this link with others to earn rewards when they join and
          complete onboarding
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-3">
          <div className="flex space-x-2">
<<<<<<< HEAD
<<<<<<< HEAD

import { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Input } from "@/components/ui/input",;
import { Copy, Facebook, Link, Share, Twitter } from "lucide-react",;
;
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface ReferralLinkProps {;
  referralLink:string,;
  onCopy:() => void,;
  onShare:(platform:'twitter' | 'facebook' | 'linkedin') => void;
}
;
export function ReferralLink({ referralLink, onCopy, onShare } ReferralLinkProps) {;
  const [copied, setCopied] = useState(false),;
  ;
  const handleCopy = () => {;
    onCopy(),;
    setCopied(true),;
    setTimeout(() => setCopied(false), 2000),;
  },;
;
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <Input
              value={referralLink}
              readOnly
              className="font-mono text-sm"
<<<<<<< HEAD
            />
            <Button variant="outline" size="icon" onClick={handleCopy}>
              <Copy className="h-4 w-4" />
              <span className="sr-only">Copy</span>
            </Button>
          </div>

          {copied && (
            <p className="text-sm text-green-600 dark:text-green-500">
              Copied to clipboard!
            </p>
          )}
        </div>
      </CardContent>
      <CardFooter className="border-t bg-muted/50 p-4">
        <div className="flex flex-col sm:flex-row w-full justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            Share on social media:
          </p>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
              onClick={() => onShare("twitter")}
            >
              <Twitter className="h-4 w-4" />
              Twitter
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
              onClick={() => onShare("facebook")}
            >
              <Facebook className="h-4 w-4" />
              Facebook
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
              onClick={() => onShare("linkedin")}
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
  )
  )
}
import { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Input } from "@/components/ui/input",;
import { Copy, Facebook, Link, Share, Twitter } from "lucide-react",;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface ReferralLinkProps {;
  referralLink: string,;
  onCopy: () => void,;
  onShare: (platform: 'twitter' | 'facebook' | 'linkedin') => void;
}

export function ReferralLink(): any ({ referralLink, onCopy, onShare }: ReferralLinkProps) {;
  const [copied, setCopied] = useState(false);
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const handleCopy = () => {;
    onCopy();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Input
              value={referralLink}
              readOnly
              className="font-mono text-sm"

<<<<<<< HEAD
            <Input;
              value={referralLink}
              readOnly;
              className="font-mono text-sm";
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            />;
            <Button variant="outline" size="icon" onClick={handleCopy}>;
              <Copy className="h-4 w-4" />;
              <span className="sr-only">Copy</span>;
            </Button>;
          </div>;
<<<<<<< HEAD
          ;
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
            <Button ;
              variant="outline" ;
              size="sm";
              className="flex items-center gap-2";
=======
            <Button
              variant="outline" 
              size="sm"
              className="flex items-center gap-2"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              onClick={() => onShare('twitter')}
            >;
              <Twitter className="h-4 w-4" />;
              Twitter;
            </Button>;
<<<<<<< HEAD
            <Button ;
              variant="outline" ;
              size="sm";
              className="flex items-center gap-2";
=======
            <Button
              variant="outline" 
              size="sm"
              className="flex items-center gap-2"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              onClick={() => onShare('facebook')}
            >;
              <Facebook className="h-4 w-4" />;
              Facebook;
            </Button>;
<<<<<<< HEAD
            <Button ;
              variant="outline" ;
              size="sm";
              className="flex items-center gap-2";
              onClick={() => onShare('linkedin')}
            >;
              <Share className="h-4 w-4" />;
=======
            <Button
              variant="outline" 
              size="sm"
              className="flex items-center gap-2"
              onClick={() => onShare('linkedin')}
            >;
              <Share className="h-4 w-4" />;
=======
import { useState  } from './react';
import { Button  } from '@/components / ui / button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components / ui / card';
import { Input  } from '@/components / ui / input';
import { Copy, Facebook, Link, Share, Twitter  } from './lucide-react';
interface ReferralLinkProps {
  referral_link: string;
  on_copy: () => void;
  on_share: (platform: "twitter" | "facebook" | "linkedin") => void;
}
export /**
 * ReferralLink - Function description
 */
function ReferralLink() {
  const [copied, set_copied] = useState (false);
;
  const handle_copy = () =>: any {
    on_copy ();
    set_copied (true);
    set_timeout (() => set_copied (false), 2000);
  }
;
  return (
    <Card className="mt - 6">;
      <CardHeader>;
        <CardTitle className="flex items - center gap - 2">;
          <Link className="h - 5 w - 5" />;
          Your Referral Link;
        </CardTitle>;
        <CardDescription>;
          Share this link with others to earn rewards when they join and;
          complete onboarding;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;
        <div className="flex flex - col space - y-3">;
          <div className="flex space - x-2">;
            <Input;
              value={referral_link}
              read_only;
              className="font - mono text - sm";
            />;
            <Button variant="outline" size="icon" on_click={handle_copy}>;
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
      <CardFooter className="border - t bg - muted / 50 p - 4">;
        <div className="flex flex - col sm:flex - row w - full justify - between items - center gap - 4">;
          <p className="text - sm text - muted - foreground">;
            Share on social media:;
          </p>;
          <div className="flex space - x-2">;
            <Button;
              variant="outline";
              size="sm";
              className="flex items - center gap - 2";
              on_click={() => on_share ("twitter")}
            >;
              <Twitter className="h - 4 w - 4" />;
              Twitter;
            </Button>;
            <Button;
              variant="outline";
              size="sm";
              className="flex items - center gap - 2";
              on_click={() => on_share ("facebook")}
            >;
              <Facebook className="h - 4 w - 4" />;
              Facebook;
            </Button>;
            <Button;
              variant="outline";
              size="sm";
              className="flex items - center gap - 2";
              on_click={() => on_share ("linkedin")}
            >;
              <Share className="h - 4 w - 4" />;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              LinkedIn;
            </Button>;
          </div>;
        </div>;
      </CardFooter>;

<<<<<<< HEAD

  )
  )

    </Card>;
  ),;}
 interface ReferralLinkProps {
  referralLink: string;
onCopy: () => void;
onShare: (platform: 'twitter' | 'facebook' | 'linkedin') => void 
}export function ReferralLink ({
  referralLink, onCopy, onShare 
}: ReferralLinkProps) {
  const [copied, setCopied] = useState (false);
const handleCopy = () => {
  onCopy ();
setCopied (true);
setTimeout ( () => setCopied (false), 2000) 
};
mt-6"> <CardHeader> <CardTitle className=" flex items-center gap-2"> <Link className=" h-5 w-5"/> Your Referral Link </CardTitle> <CardDescription> Share this link with others to earn rewards when they join and complete onboarding </CardDescription> </CardHeader> <CardContent> <div className=" flex flex-col space-y-3"> <div className=" flex space-x-2"> <Input value= {
  referralLink 
}readOnly className=" font-mono text-sm"/> Copied to clipboard! </p>) 
}</div> </CardContent> <CardFooter className=" border-t bg-muted/50 p-4"> <div className=" flex flex-col sm:flex-row w-full justify-between items-center gap-4"> <p className=" text-sm text-muted-foreground">Share on social media:</p> <div className=" flex space-x-2"> <Button > <Twitter className=" h-4 w-4"/> Twitter </Button> <Button > <Facebook className=" h-4 w-4"/> Facebook </Button> <Button > <Share className=" h-4 w-4" /> LinkedIn </Button> </div> </div> </CardFooter> </Card>) 
}
<<<<<<< HEAD
  );
}
;
=======
=======
    </Card>);
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

=======

  )
=======
  )

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
