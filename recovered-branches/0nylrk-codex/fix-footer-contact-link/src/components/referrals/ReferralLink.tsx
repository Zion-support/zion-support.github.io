<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

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


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {useState} from "react";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Copy, Facebook, Link, Share, Twitter} from "lucide-react";
<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
=======





import {useState} from "react";"
import {Button} from "@/components/ui/button";"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";"
import {Input} from "@/components/ui/input";"
import {Copy, Facebook, Link, Share, Twitter} from "lucide-react";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


"
import { useState } from "react","
import { Button } from "@/components/ui/button","
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card","
import { Input } from "@/components/ui/input","
import { Copy, Facebook, Link, Share, Twitter } from "lucide-react",




<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { useState } from "react";
=======
";
import { useState } from "react";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Button } from "@/components/ui/button";
import {}
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
<<<<<<< HEAD
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Copy, Facebook, Link, Share, Twitter } from "lucide-react";
interface ReferralLinkProps {
  referralLink: string;
=======
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {



>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  onCopy: () => void;
  onShare: (platform: "twitter" | "facebook" | "linkedin") => void;
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
export function ReferralLink({ referralLink, onCopy, onShare }: ReferralLinkProps) {;
=======
export function ReferralLink({
  referralLink,
  onCopy,
  onShare,
}: ReferralLinkProps) {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const [copied, setCopied] = useState(false);
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export function ReferralLink({ referralLink, onCopy, onShare }: ReferralLinkProps) {;
  const [copied, setCopied] = useState(false);

export function ReferralLink({ referralLink, onCopy, onShare }: ReferralLinkProps) {;
  const [copied, setCopied] = useState(false);

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export function ReferralLink({ referralLink, onCopy, onShare }: ReferralLinkProps) {
  const [copied, setCopied] = useState(false),
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  
  const handleCopy = () => {
    onCopy(),
    setCopied(true),
    setTimeout(() => setCopied(false), 2000)
  },
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
export function ReferralLink({
  referralLink,
  onCopy,
  onShare,
}: ReferralLinkProps) {
=======
export function ReferralLink({ referralLink, onCopy, onShare }: ReferralLinkProps) {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export function ReferralLink({ referralLink, onCopy, onShare }: ReferralLinkProps) {;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  const [copied, setCopied] = useState(false);


  return (
=======
  CardTitle,";
} from "@/components/ui/card";"
import { Input } from "@/components/ui/input";"
import { Copy, Facebook, Link, Share, Twitter } from "lucide-react";

interface ReferralLinkProps {}
  referralLink: string;
  onCopy: () => void;"
  onShare: (platform: "twitter" | "facebook" | "linkedin") => void;
}

export function ReferralLink({}
  referralLink,
  onCopy,
  onShare,
}: ReferralLinkProps) {};
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {}
    onCopy();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    <Card className="mt-6">
      <CardHeader>"
        <CardTitle className="flex items-center gap-2">"
          <Link className="h-5 w-5" />
          Your Referral Link;
        </CardTitle>
        <CardDescription>
          Share this link with others to earn rewards when they join and;
          complete onboarding;
        </CardDescription>
      </CardHeader>
<<<<<<< HEAD
      <CardContent>
        <div className="flex flex-col space-y-3">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="flex space-x-2">
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
interface ReferralLinkProps {;
  referralLink: string,;
  onCopy: () => void,;
  onShare: (platform: 'twitter' | 'facebook' | 'linkedin') => void;
}
=======
      <CardContent>"
        <div className="flex flex-col space-y-3">"
          <div className="flex space-x-2">
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



<<<<<<< HEAD
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            <Input
=======
            <Input;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              value={referralLink}
              readOnly"
              className="font-mono text-sm"
            />"
            <Button variant="outline" size="icon" onClick={handleCopy}>"
              <Copy className="h-4 w-4" />"
=======
          <div className="flex space-x-2">
interface ReferralLinkProps {;
  referralLink: string,;
  onCopy: () => void,;
  onShare: (platform: 'twitter' | 'facebook' | 'linkedin') => void;
          <div className="flex space-x-2">  )
  )

  CardTitle,"
} from "@/components/ui/card";""
import { Input } from "@/components/ui/input";""
import { Copy, Facebook, Link, Share, Twitter } from "lucide-react";"
interface ReferralLinkProps {
  // TODO: Implement
  referralLink: string;,
  onCopy: () => void;"
  onShare: (platform: "twitter" | "facebook" | "linkedin") => void;"

}

export function ReferralLink({
  referralLink,

  onCopy,
  onShare,)

}: ReferralLinkProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (
    onCopy();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);) => {
  return $3;}
}
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
            <Input
              value={referralLink}
              readOnly
              className="font-mono text-sm"
            />
            <Button variant="outline" size="icon" onClick={handleCopy}>
              <Copy className="h-4 w-4" />
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              <span className="sr-only">Copy</span>
            </Button>
          </div>

<<<<<<< HEAD
<<<<<<< HEAD
          {copied && ("
=======
          {copied && (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <p className="text-sm text-green-600 dark:text-green-500">
              Copied to clipboard!
            </p>
          )}
        </div>
<<<<<<< HEAD
      </CardContent>"
      <CardFooter className="border-t bg-muted/50 p-4">"
        <div className="flex flex-col sm:flex-row w-full justify-between items-center gap-4">"
          <p className="text-sm text-muted-foreground">
            Share on social media:
          </p>"
          <div className="flex space-x-2">
            <Button"
              variant="outline""
              size="sm""
              className="flex items-center gap-2""
              onClick={() => onShare("twitter")}
            >"
              <Twitter className="h-4 w-4" />
              Twitter;
            </Button>
            <Button"
              variant="outline""
              size="sm""
              className="flex items-center gap-2""
              onClick={() => onShare("facebook")}
            >"
              <Facebook className="h-4 w-4" />
              Facebook;
            </Button>
            <Button"
              variant="outline""
              size="sm""
              className="flex items-center gap-2""
              onClick={() => onShare("linkedin")}
            >"
              <Share className="h-4 w-4" />
              LinkedIn;
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  return ("
    <Card className="mt-6">"

      <CardHeader>
"
        <CardTitle className="flex items-center gap-2">"
          <Link className="h-5 w-5" />"

        <CardDescription>

      <CardContent>
        <div className="flex flex-col space-y-3">"
</div>"
          <div className="flex space-x-2">"
</div>
            <Input;
              value={referralLink}
              readOnly;"
              className="font-mono text-sm""
            />
            <Button variant="outline" size="icon" onClick={handleCopy}>"
              <Copy className="h-4 w-4" />"
              <span className="sr-only">Copy</span>"
            <p className="text-sm text-green-600 dark:text-green-500">"
</p>
      <CardFooter className="border-t bg-muted/50 p-4">"
        <div className="flex flex-col sm:flex-row w-full justify-between items-center gap-4">"
          <p className="text-sm text-muted-foreground">"
          </p>"
            <Button;"
              variant="outline"""
              size="sm"""
              className="flex items-center gap-2"")"
              onClick={() => onShare("twitter")}"
              <Twitter className="h-4 w-4" />"

              className="flex items-center gap-2"""
              onClick={() => onShare("facebook")}"
              <Facebook className="h-4 w-4" />"

              onClick={() => onShare("linkedin")}"
              <Share className="h-4 w-4" />"

</Share>

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            </Button>
          </div>
        </div>
      </CardFooter>
<<<<<<< HEAD
    </Card>
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  )
  )
}
import { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Input } from "@/components/ui/input",;
import { Copy, Facebook, Link, Share, Twitter } from "lucide-react",;
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface ReferralLinkProps {;
  referralLink: string,;
  onCopy: () => void,;
  onShare: (platform: 'twitter' | 'facebook' | 'linkedin') => void;
}

export function ReferralLink(): any ({ referralLink, onCopy, onShare }: ReferralLinkProps) {;
  const [copied, setCopied] = useState(false);

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
            <Input
              value={referralLink}
              readOnly
              className="font-mono text-sm"
<<<<<<< HEAD

            <Input;
              value={referralLink}
              readOnly;
              className="font-mono text-sm";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            />;
            <Button variant="outline" size="icon" onClick={handleCopy}>;
              <Copy className="h-4 w-4" />;
              <span className="sr-only">Copy</span>;
            </Button>;
          </div>;
<<<<<<< HEAD

=======
          ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
            <Button
              variant="outline" 
              size="sm"
              className="flex items-center gap-2"
=======
            <Button ;
              variant="outline" ;
              size="sm";
              className="flex items-center gap-2";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              onClick={() => onShare('twitter')}
            >;
              <Twitter className="h-4 w-4" />;
              Twitter;
            </Button>;
<<<<<<< HEAD
            <Button
              variant="outline" 
              size="sm"
              className="flex items-center gap-2"
=======
            <Button ;
              variant="outline" ;
              size="sm";
              className="flex items-center gap-2";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              onClick={() => onShare('facebook')}
            >;
              <Facebook className="h-4 w-4" />;
              Facebook;
            </Button>;
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
export /**
 * ReferralLink - Function description
=======
export /**;
 * ReferralLink - Function description;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
 */
function ReferralLink() {}
  const [copied, set_copied] = useState (false);
;
  const handle_copy = () =>: any {}
=======
export /**
 * ReferralLink - Function description
 */
function ReferralLink() {
  const [copied, set_copied] = useState (false);
;
  const handle_copy = () =>: any {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    on_copy ();
    set_copied (true);
    set_timeout (() => set_copied (false), 2000);
  }
;
<<<<<<< HEAD
  return ("
    <Card className="mt - 6">;
      <CardHeader>;"
        <CardTitle className="flex items - center gap - 2">;"
=======
  return (
    <Card className="mt - 6">;
      <CardHeader>;
        <CardTitle className="flex items - center gap - 2">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <Link className="h - 5 w - 5" />;
          Your Referral Link;
        </CardTitle>;
        <CardDescription>;
          Share this link with others to earn rewards when they join and;
          complete onboarding;
        </CardDescription>;
      </CardHeader>;
<<<<<<< HEAD
      <CardContent>;"
        <div className="flex flex - col space - y-3">;"
          <div className="flex space - x-2">;
            <Input;
              value={referral_link}
              read_only;"
              className="font - mono text - sm";
            />;"
            <Button variant="outline" size="icon" on_click={handle_copy}>;"
              <Copy className="h - 4 w - 4" />;"
              <span className="sr - only">Copy</span>;
            </Button>;
          </div>;
          {copied && ("
=======
=======

    </Card>"
    <Card className="mt - 6">;"

      <CardHeader>;
        <CardTitle className="flex items - center gap - 2">;"
          <Link className="h - 5 w - 5" />;"

        ;
        <CardDescription>;

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      <CardContent>;
        <div className="flex flex - col space - y-3">;"
          <div className="flex space - x-2">;"
              value={referral_link}
              read_only;"
              className="font - mono text - sm";"
            />;
<<<<<<< HEAD
            <Button variant="outline" size="icon" on_click={handle_copy}>;
              <Copy className="h - 4 w - 4" />;
              <span className="sr - only">Copy</span>;
            </Button>;
          </div>;
          {copied && (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <p className="text - sm text - green - 600 dark:text - green - 500">;
              Copied to clipboard!;
            </p>)}
        </div>;
<<<<<<< HEAD
      </CardContent>;"
      <CardFooter className="border - t bg - muted / 50 p - 4">;"
        <div className="flex flex - col sm:flex - row w - full justify - between items - center gap - 4">;"
          <p className="text - sm text - muted - foreground">;
            Share on social media:;
          </p>;"
          <div className="flex space - x-2">;
            <Button;"
              variant="outline";"
              size="sm";"
              className="flex items - center gap - 2";"
              on_click={() => on_share ("twitter")}
            >;"
              <Twitter className="h - 4 w - 4" />;
              Twitter;
            </Button>;
            <Button;"
              variant="outline";"
              size="sm";"
              className="flex items - center gap - 2";"
              on_click={() => on_share ("facebook")}
            >;"
              <Facebook className="h - 4 w - 4" />;
              Facebook;
            </Button>;
            <Button;"
              variant="outline";"
              size="sm";"
              className="flex items - center gap - 2";"
              on_click={() => on_share ("linkedin")}
            >;"
              <Share className="h - 4 w - 4" />;


            <Button ;"
              variant="outline" ;"
              size="sm";"
              className="flex items-center gap-2";
              onClick={() => onShare('linkedin')}
            >;"
              <Share className="h-4 w-4" />;



=======
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
=======
            <Button variant="outline" size="icon" on_click={handle_copy}>;"
              <Copy className="h - 4 w - 4" />;"
              <span className="sr - only">Copy</span>;"
          </div>;"
            <p className="text - sm text - green - 600 dark:text - green - 500">;"
            </p>)}
        </div>;
      ;"
      <CardFooter className="border - t bg - muted / 50 p - 4">;"
        <div className="flex flex - col sm:flex - row w - full justify - between items - center gap - 4">;"
          <p className="text - sm text - muted - foreground">;"
          </p>;"
              variant="outline";""
              size="sm";""
              className="flex items - center gap - 2";""
              on_click={() => on_share ("twitter")}"
              <Twitter className="h - 4 w - 4" />;"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

            <Button ;
              variant="outline" ;
              size="sm";
              className="flex items-center gap-2";
              onClick={() => onShare('linkedin')}
            >;
              <Share className="h-4 w-4" />;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              LinkedIn;
            </Button>;
          </div>;
        </div>;
      </CardFooter>;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    </Card>);
}
<<<<<<< HEAD
;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

=======
    </Card>);
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

)
  )
  )
  )

    </Card>;
  ),;}
<<<<<<< HEAD
 interface ReferralLinkProps {}
  referralLink: string;
onCopy: () => void;'
onShare: (platform: 'twitter' | 'facebook' | 'linkedin') => void;
}export function ReferralLink ({};
  referralLink, onCopy, onShare;
}: ReferralLinkProps) {}
  const [copied, setCopied] = useState (false);
const handleCopy = () => {}
  onCopy ();
setCopied (true);
setTimeout ( () => setCopied (false), 2000) 
};"
mt-6"> <CardHeader> <CardTitle className=" flex items-center gap-2"> <Link className=" h-5 w-5"/> Your Referral Link </CardTitle> <CardDescription> Share this link with others to earn rewards when they join and complete onboarding </CardDescription> </CardHeader> <CardContent> <div className=" flex flex-col space-y-3"> <div className=" flex space-x-2"> <Input value= {}
  referralLink "
}readOnly className=" font-mono text-sm"/> Copied to clipboard! </p>) "
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}</div> </CardContent> <CardFooter className=" border-t bg-muted/50 p-4"> <div className=" flex flex-col sm:flex-row w-full justify-between items-center gap-4"> <p className=" text-sm text-muted-foreground">Share on social media:</p> <div className=" flex space-x-2"> <Button > <Twitter className=" h-4 w-4"/> Twitter </Button> <Button > <Facebook className=" h-4 w-4"/> Facebook </Button> <Button > <Share className=" h-4 w-4" /> LinkedIn </Button> </div> </div> </CardFooter> </Card>) 
}
  );
}
;
<<<<<<< HEAD


  )
)
              on_click={() => on_share ("facebook")}"
              <Facebook className="h - 4 w - 4" />;"

              on_click={() => on_share ("linkedin")}"
              <Share className="h - 4 w - 4" />;"

            <Button ;"
              variant="outline" ;""
              className="flex items-center gap-2";""
              onClick={() => onShare('linkedin')}

              <Share className="h-4 w-4" />;"

    );
mt-6"> <CardHeader> <CardTitle className=" flex items-center gap-2"> <Link className=" h-5 w-5"/> Your Referral Link  <CardDescription> Share this link with others to earn rewards when they join and complete onboarding   <CardContent> <div className=" flex flex-col space-y-3"> <div className=" flex space-x-2"> <Input value= {"
  referralLink;"
}readOnly className=" font-mono text-sm"/> Copied to clipboard! </p>)""
}</div>  <CardFooter className=" border-t bg-muted/50 p-4"> <div className=" flex flex-col sm:flex-row w-full justify-between items-center gap-4"> <p className=" text-sm text-muted-foreground">Share on social media:</p> <div className=" flex space-x-2"> <Button > <Twitter className=" h-4 w-4"/> Twitter  <Button > <Facebook className=" h-4 w-4"/> Facebook  <Button > <Share className=" h-4 w-4" /> LinkedIn  </div> </div>  )""
pr-12325
}</div> </CardContent> <CardFooter className=" border-t bg-muted/50 p-4"> <div className=" flex flex-col sm:flex-row w-full justify-between items-center gap-4"> <p className=" text-sm text-muted-foreground">Share on social media:</p> <div className=" flex space-x-2"> <Button > <Twitter className=" h-4 w-4"/> Twitter </Button> <Button > <Facebook className=" h-4 w-4"/> Facebook </Button> <Button > <Share className=" h-4 w-4" /> LinkedIn </Button> </div> </div> </CardFooter> </Card>)""

<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
          <div className="flex space-x-2">  )
=======
  )
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  )

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          <div className="flex space-x-2">  )
  )

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
