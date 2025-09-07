<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card
  CardContent
  CardDescription
  CardFooter
  CardHeader
<<<<<<< HEAD
  CardTitle
} from "@/components/ui/card";

import {useState} from "react";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Copy, Facebook, Link, Share, Twitter} from "lucide-react";

"
import { useState } from "react","
import { Button } from "@/components/ui/button","
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card","
import { Input } from "@/components/ui/input","
import { Copy, Facebook, Link, Share, Twitter } from "lucide-react",

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {}
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,

  onCopy: () => void;
  onShare: (platform: "twitter" | "facebook" | "linkedin") => void;
}

  const [copied, setCopied] = useState(false);

export function ReferralLink({ referralLink, onCopy, onShare }: ReferralLinkProps) {;
  const [copied, setCopied] = useState(false);

export function ReferralLink({ referralLink, onCopy, onShare }: ReferralLinkProps) {;

export function ReferralLink({ referralLink, onCopy, onShare }: ReferralLinkProps) {
  const [copied, setCopied] = useState(false),

  const handleCopy = () => {
    onCopy(),
    setCopied(true),
    setTimeout(() => setCopied(false), 2000)
  },

export function ReferralLink({
  referralLink,
  onCopy,
  onShare,
}: ReferralLinkProps) {

  const [copied, setCopied] = useState(false);

  return (

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

            <Input

              value={referralLink}
              readOnly"
              className="font-mono text-sm"
            />"
            <Button variant="outline" size="icon" onClick={handleCopy}>"
              <Copy className="h-4 w-4" />"

=======
<<<<<<< HEAD
  CardTitle
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Copy, Facebook, Link, Share, Twitter } from "lucide-react";
interface ReferralLinkProps {
  referralLink: string,
  onCopy: () => void,
  onShare: (platform: 'twitter' | 'facebook' | 'linkedin') => void
}

export function ReferralLink({ referralLink, onCopy, onShare }: ReferralLinkProps) {
  const [copied, setCopied] = useState($2);
  const handleCopy = () => {
    onCopy($2);
    setCopied($2);
    setTimeout(() => setCopied(false), 2000)
  },

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
            <Input
              value={referralLink}
              readOnly
              className="font-mono text-sm"
            />
            <Button variant="outline" size="icon" onClick={handleCopy}>
              <Copy className="h-4 w-4" />
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              <span className="sr-only">Copy</span>
            </Button>
          </div>

<<<<<<< HEAD
=======
          {copied && (
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <p className="text-sm text-green-600 dark:text-green-500">
              Copied to clipboard!
            </p>
          )}
        </div>
<<<<<<< HEAD

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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            </Button>
          </div>
        </div>
      </CardFooter>
<<<<<<< HEAD

=======
    </Card>
  )
}
=======
  CardTitle
} from "@/components/ui/card";

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import {useState} from "react";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Copy, Facebook, Link, Share, Twitter} from "lucide-react";

<<<<<<< HEAD
"
import { useState } from "react","
import { Button } from "@/components/ui/button","
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card","
import { Input } from "@/components/ui/input","
=======
import { useState } from "react",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Input } from "@/components/ui/input",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { Copy, Facebook, Link, Share, Twitter } from "lucide-react",

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {}
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,

<<<<<<< HEAD
=======


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
interface ReferralLinkProps {
  referralLink: string;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  onCopy: () => void;
  onShare: (platform: "twitter" | "facebook" | "linkedin") => void;
}

  const [copied, setCopied] = useState(false);

<<<<<<< HEAD
export function ReferralLink({ referralLink, onCopy, onShare }: ReferralLinkProps) {;
  const [copied, setCopied] = useState(false);

<<<<<<< HEAD
export function ReferralLink({ referralLink, onCopy, onShare }: ReferralLinkProps) {;

export function ReferralLink({ referralLink, onCopy, onShare }: ReferralLinkProps) {
  const [copied, setCopied] = useState(false),

=======
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
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const handleCopy = () => {
    onCopy(),
    setCopied(true),
    setTimeout(() => setCopied(false), 2000)
  },
<<<<<<< HEAD

export function ReferralLink({
  referralLink,
  onCopy,
  onShare,
}: ReferralLinkProps) {

  const [copied, setCopied] = useState(false);
=======
<<<<<<< HEAD

  };
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  return (

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

            <Input

              value={referralLink}
              readOnly"
              className="font-mono text-sm"
            />"
            <Button variant="outline" size="icon" onClick={handleCopy}>"
              <Copy className="h-4 w-4" />"

=======
      <CardContent>
        <div className="flex flex-col space-y-3">
          <div className="flex space-x-2">
<<<<<<< HEAD

>>>>>>> merged-prs-20250907-203621
import { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Input } from "@/components/ui/input",;
import { Copy, Facebook, Link, Share, Twitter } from "lucide-react",;
;
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
interface ReferralLinkProps {;
  referralLink:string,;
  onCopy:() => void,;
  onShare:(platform:'twitter' | 'facebook' | 'linkedin') => void;
}
<<<<<<< HEAD

export function ReferralLink(): any ({ referralLink, onCopy, onShare }: ReferralLinkProps) {;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {;
    onCopy();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
            <Input
              value={referralLink}
              readOnly
              className="font-mono text-sm"

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              <span className="sr-only">Copy</span>
            </Button>
          </div>

<<<<<<< HEAD
=======
          {copied && (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            <p className="text-sm text-green-600 dark:text-green-500">
              Copied to clipboard!
            </p>
          )}
        </div>
<<<<<<< HEAD

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            </Button>
          </div>
        </div>
      </CardFooter>
<<<<<<< HEAD

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface ReferralLinkProps {;
  referralLink: string,;
  onCopy: () => void,;
  onShare: (platform: 'twitter' | 'facebook' | 'linkedin') => void;
}

export function ReferralLink(): any ({ referralLink, onCopy, onShare }: ReferralLinkProps) {;
  const [copied, setCopied] = useState(false);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
=======
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
          ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

=======
<<<<<<< HEAD

=======
            <Button ;
              variant="outline" ;
              size="sm";
              className="flex items-center gap-2";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              onClick={() => onShare('twitter')}
            >;
              <Twitter className="h-4 w-4" />;
              Twitter;
            </Button>;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
            <Button ;
              variant="outline" ;
              size="sm";
              className="flex items-center gap-2";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              onClick={() => onShare('facebook')}
            >;
              <Facebook className="h-4 w-4" />;
              Facebook;
            </Button>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

export /**
 * ReferralLink - Function description

 */
function ReferralLink() {}
  const [copied, set_copied] = useState (false);
;
  const handle_copy = () =>: any {}

    on_copy ();
    set_copied (true);
    set_timeout (() => set_copied (false), 2000);
  }
;

          <Link className="h - 5 w - 5" />;
          Your Referral Link;
        </CardTitle>;
        <CardDescription>;
          Share this link with others to earn rewards when they join and;
          complete onboarding;
        </CardDescription>;
      </CardHeader>;

      <CardContent>;
        <div className="flex flex - col space - y-3">;"
          <div className="flex space - x-2">;"
              value={referral_link}
              read_only;"
              className="font - mono text - sm";"
            />;

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <Button ;
              variant="outline" ;
              size="sm";
              className="flex items-center gap-2";
              onClick={() => onShare('linkedin')}
            >;
              <Share className="h-4 w-4" />;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              LinkedIn;
            </Button>;
          </div>;
        </div>;
      </CardFooter>;
<<<<<<< HEAD

)
  )
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
)
  )
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  )
  )

>>>>>>> merged-prs-20250907-203621
    </Card>;
  ),;}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

}</div> </CardContent> <CardFooter className=" border-t bg-muted/50 p-4"> <div className=" flex flex-col sm:flex-row w-full justify-between items-center gap-4"> <p className=" text-sm text-muted-foreground">Share on social media:</p> <div className=" flex space-x-2"> <Button > <Twitter className=" h-4 w-4"/> Twitter </Button> <Button > <Facebook className=" h-4 w-4"/> Facebook </Button> <Button > <Share className=" h-4 w-4" /> LinkedIn </Button> </div> </div> </CardFooter> </Card>) 
});
}
;

<<<<<<< HEAD
  )
=======
  )
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
}</div> </CardContent> <CardFooter className=" border-t bg-muted/50 p-4"> <div className=" flex flex-col sm:flex-row w-full justify-between items-center gap-4"> <p className=" text-sm text-muted-foreground">Share on social media:</p> <div className=" flex space-x-2"> <Button > <Twitter className=" h-4 w-4"/> Twitter </Button> <Button > <Facebook className=" h-4 w-4"/> Facebook </Button> <Button > <Share className=" h-4 w-4" /> LinkedIn </Button> </div> </div> </CardFooter> </Card>) 
}
<<<<<<< HEAD
  );
}
<<<<<<< HEAD
;
=======
;
=======

=======

  )
=======
  )

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
