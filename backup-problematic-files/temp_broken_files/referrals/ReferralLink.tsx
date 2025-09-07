import { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Input } from "@/components/ui/input",;
<<<<<<< HEAD
import { Copy, Facebook, Link, Share, Twitter } from 'lucide-react';
;
interface ReferralLinkProps {;
  referralLink:string,;
  onCopy:() => void,;
  onShare:(platform:'twitter' | 'facebook' | 'linkedin') => void;
}
;
=======

import { Copy, Facebook, Link, Share, Twitter } from 'lucide-react';

;
interface ReferralLinkProps {;
  referralLink: string;,;
  onCopy: () => void;,;
  onShare:(platform:'twitter' | 'facebook' | 'linkedin') => void;
}
>>>>>>> merged-prs-20250907-203621
export function ReferralLink({ referralLink, onCopy, onShare } ReferralLinkProps) {;
  const [copied, setCopied] = useState(false),;
  const handleCopy = () => {;
    onCopy(),;
    setCopied(true),;
    setTimeout(() => setCopied(false), 2000),;
  },;
  return (;
<<<<<<< HEAD
    <Card className="mt-6">;
      <CardHeader>;
        <CardTitle className="flex items-center gap-2">;
          <Link className="h-5 w-5" />;
          Your Referral Link;
        </CardTitle>;
=======

    <Card className="mt-6">;

      <CardHeader>;
"
        <CardTitle className="flex items-center gap-2">;"
          <Link className="h-5 w-5" />;"

>>>>>>> merged-prs-20250907-203621
        <CardDescription>;

      <CardContent>;
<<<<<<< HEAD
        <div className="flex flex-col space-y-3">;
          <div className="flex space-x-2">;
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
          ;
=======

            <Input;
              value={referralLink}
              readOnly;"
              className="font-mono text-sm";"
            />;

>>>>>>> merged-prs-20250907-203621
          {copied && (;
            <p className="text-sm text-green-600 dark:text-green-500">;
              Copied to clipboard!;

            </p>;
        </div>;
<<<<<<< HEAD
      </CardContent>;
      <CardFooter className="border-t bg-muted/50 p-4">;
        <div className="flex flex-col sm:flex-row w-full justify-between items-center gap-4">;
          <p className="text-sm text-muted-foreground">Share on social media:</p>;
          <div className="flex space-x-2">;
=======

>>>>>>> merged-prs-20250907-203621
            <Button ;
              variant="outline" ;
              size="sm";
              className="flex items-center gap-2";
<<<<<<< HEAD
=======

>>>>>>> merged-prs-20250907-203621
              onClick={() => onShare('twitter')}
            >;
              <Twitter className="h-4 w-4" />;
              Twitter;
            </Button>;

            <Button ;
              variant="outline" ;
              size="sm";
              className="flex items-center gap-2";
<<<<<<< HEAD
=======

>>>>>>> merged-prs-20250907-203621
              onClick={() => onShare('facebook')}
            >;
              <Facebook className="h-4 w-4" />;
              Facebook;
            </Button>;

            <Button ;
              variant="outline" ;
              size="sm";
              className="flex items-center gap-2";
<<<<<<< HEAD
              onClick={() => onShare('linkedin')}
            >;
              <Share className="h-4 w-4" />;
=======

              onClick={() => onShare('linkedin')}
            >;
              <Share className="h-4 w-4" />;

>>>>>>> merged-prs-20250907-203621
              LinkedIn;
            </Button>;
          </div>;
        </div>;
      </CardFooter>;

    </Card>;
  ),;}
 import {;
  {;
  {;
  Copy, Facebook, Link,  Share, Twitter ;
}from 'lucide-react' interface ReferralLinkProps {;
  referralLink: string;
onCopy: () => void;';
onShare: (platform: 'twitter' | 'facebook' | 'linkedin') => void ;
}export function ReferralLink ({;
  referralLink,  onCopy, onShare ;
}: ReferralLinkProps) {;
  const [copied,  setCopied] = useState (false);
<<<<<<< HEAD
const handleCopy = () => {;
=======
<<<<<<< HEAD
  }
=======
const handleCopy = () => {;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
  onCopy ();
setCopied (true);
<<<<<<< HEAD

};
:temp_broken_files/referrals/ReferralLink.tsx
mt-6"> <CardHeader> <CardTitle className=" flex items-center gap-2"> <Link className=" h-5 w-5"/> Your Referral Link </CardTitle> <CardDescription> Share this link with others to earn rewards when they join and complete onboarding </CardDescription> </CardHeader> <CardContent> <div className=" flex flex-col space-y-3"> <div className=" flex space-x-2"> <Input value= {;"  referralLink ";"}readOnly className=" font-mono text-sm"/> Copied to clipboard! </p>) ";"}</div> </CardContent> <CardFooter className=" border-t bg-muted/50 p-4"> <div className=" flex flex-col sm:flex-row w-full justify-between items-center gap-4"> <p className=" text-sm text-muted-foreground">Share on social media:</p> <div className=" flex space-x-2"> <Button > <Twitter className=" h-4 w-4"/> Twitter </Button> <Button > <Facebook className=" h-4 w-4"/> Facebook </Button> <Button > <Share className=" h-4 w-4" /> LinkedIn </Button> </div> </div> </CardFooter> </Card>) ;"}'"
=======
setTimeout ( () => setCopied (false), 2000) ;
};
<<<<<<< HEAD
mt-6"> <CardHeader> <CardTitle className=" flex items-center gap-2"> <Link className=" h-5 w-5"/> Your Referral Link </CardTitle> <CardDescription> Share this link with others to earn rewards when they join and complete onboarding </CardDescription> </CardHeader> <CardContent> <div className=" flex flex-col space-y-3"> <div className=" flex space-x-2"> <Input value= {;"  referralLink ";"}readOnly className=" font-mono text-sm"/> Copied to clipboard! </p>) ";"}</div> </CardContent> <CardFooter className=" border-t bg-muted/50 p-4"> <div className=" flex flex-col sm:flex-row w-full justify-between items-center gap-4"> <p className=" text-sm text-muted-foreground">Share on social media:</p> <div className=" flex space-x-2"> <Button > <Twitter className=" h-4 w-4"/> Twitter </Button> <Button > <Facebook className=" h-4 w-4"/> Facebook </Button> <Button > <Share className=" h-4 w-4" /> LinkedIn </Button> </div> </div> </CardFooter> </Card>) ;"}'"
=======
<<<<<<< HEAD
:temp_broken_files/referrals/ReferralLink.tsx
mt-6"> <CardHeader> <CardTitle className=" flex items-center gap-2"> <Link className=" h-5 w-5"/> Your Referral Link </CardTitle> <CardDescription> Share this link with others to earn rewards when they join and complete onboarding </CardDescription> </CardHeader> <CardContent> <div className=" flex flex-col space-y-3"> <div className=" flex space-x-2"> <Input value= {;"  referralLink ";"}readOnly className=" font-mono text-sm"/> Copied to clipboard! </p>) ";"}</div> </CardContent> <CardFooter className=" border-t bg-muted/50 p-4"> <div className=" flex flex-col sm:flex-row w-full justify-between items-center gap-4"> <p className=" text-sm text-muted-foreground">Share on social media:</p> <div className=" flex space-x-2"> <Button > <Twitter className=" h-4 w-4"/> Twitter </Button> <Button > <Facebook className=" h-4 w-4"/> Facebook </Button> <Button > <Share className=" h-4 w-4" /> LinkedIn </Button> </div> </div> </CardFooter> </Card>) ;"}'"
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
mt-6"> <CardHeader> <CardTitle className=" flex items-center gap-2"> <Link className=" h-5 w-5"/> Your Referral Link </CardTitle> <CardDescription> Share this link with others to earn rewards when they join and complete onboarding </CardDescription> </CardHeader> <CardContent> <div className=" flex flex-col space-y-3"> <div className=" flex space-x-2"> <Input value= {;
  referralLink ";
}readOnly className=" font-mono text-sm"/> Copied to clipboard! </p>) ";
}</div> </CardContent> <CardFooter className=" border-t bg-muted/50 p-4"> <div className=" flex flex-col sm:flex-row w-full justify-between items-center gap-4"> <p className=" text-sm text-muted-foreground">Share on social media:</p> <div className=" flex space-x-2"> <Button > <Twitter className=" h-4 w-4"/> Twitter </Button> <Button > <Facebook className=" h-4 w-4"/> Facebook </Button> <Button > <Share className=" h-4 w-4" /> LinkedIn </Button> </div> </div> </CardFooter> </Card>) ;
}'"
<<<<<<< HEAD
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/referrals/ReferralLink.tsx
=======
<<<<<<< HEAD
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/referrals/ReferralLink.tsx
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
