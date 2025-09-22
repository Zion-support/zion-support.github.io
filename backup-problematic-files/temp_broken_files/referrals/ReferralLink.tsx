
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/referrals/ReferralLink.tsx
=======
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/referrals/ReferralLink.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Input } from "@/components/ui/input",;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/referrals/ReferralLink.tsx
import { Copy, Facebook, Link, Share, Twitter } from "lucide-react",;
=======
=======
import { useState } from "react";""
import { Button } from "@/components/ui/button";""
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";""
import { Input } from "@/components/ui/input";""
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { Copy, Facebook, Link, Share, Twitter } from 'lucide-react';
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/referrals/ReferralLink.tsx
=======
import { Copy, Facebook, Link, Share, Twitter } from 'lucide-react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
;
interface ReferralLinkProps {;
  referralLink: string;,;
  onCopy: () => void;,;
  onShare:(platform:'twitter' | 'facebook' | 'linkedin') => void;
}
export function ReferralLink({ referralLink, onCopy, onShare } ReferralLinkProps) {;
  const [copied, setCopied] = useState(false),;
  const handleCopy = () => {;
    onCopy(),;
    setCopied(true),;
    setTimeout(() => setCopied(false), 2000),;
  },;
  return (;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/referrals/ReferralLink.tsx
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/referrals/ReferralLink.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    <Card className="mt-6">;
=======
    <Card className="mt-6">;"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      <CardHeader>;
"
        <CardTitle className="flex items-center gap-2">;"
          <Link className="h-5 w-5" />;"

        <CardDescription>;

      <CardContent>;
<<<<<<< HEAD
        <div className="flex flex-col space-y-3">;
          <div className="flex space-x-2">;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/referrals/ReferralLink.tsx

            />;
            <Button variant="outline" size="icon" onClick={handleCopy}>;
=======
=======
        <div className="flex flex-col space-y-3">;"
</div>"
          <div className="flex space-x-2">;"
</div>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            <Input;
              value={referralLink}
              readOnly;"
              className="font-mono text-sm";"
            />;
<<<<<<< HEAD
            <Button variant="outline" size="icon" onClick={handleCopy} aria-label="Copy referral link">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              <Copy className="h-4 w-4" />;
              <span className="sr-only">Copy</span>;
            </Button>;
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/referrals/ReferralLink.tsx

=======
          ;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/referrals/ReferralLink.tsx
=======
          ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          {copied && (;
            <p className="text-sm text-green-600 dark:text-green-500">;
              Copied to clipboard!;
=======
            <Button variant="outline" size="icon" onClick={handleCopy} aria-label="Copy referral link">;"
              <Copy className="h-4 w-4" />;"
              <span className="sr-only">Copy</span>;"
          </div>;"
            <p className="text-sm text-green-600 dark:text-green-500">;"
</p>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            </p>;
        </div>;
<<<<<<< HEAD
      </CardContent>;
      <CardFooter className="border-t bg-muted/50 p-4">;
        <div className="flex flex-col sm:flex-row w-full justify-between items-center gap-4">;
          <p className="text-sm text-muted-foreground">Share on social media:</p>;
          <div className="flex space-x-2">;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/referrals/ReferralLink.tsx

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            <Button ;
              variant="outline" ;
              size="sm";
              className="flex items-center gap-2";
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/referrals/ReferralLink.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              onClick={() => onShare('twitter')}
            >;
              <Twitter className="h-4 w-4" />;
              Twitter;
            </Button>;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/referrals/ReferralLink.tsx

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            <Button ;
              variant="outline" ;
              size="sm";
              className="flex items-center gap-2";
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/referrals/ReferralLink.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              onClick={() => onShare('facebook')}
            >;
              <Facebook className="h-4 w-4" />;
              Facebook;
            </Button>;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/referrals/ReferralLink.tsx

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            <Button ;
              variant="outline" ;
              size="sm";
              className="flex items-center gap-2";
=======
      ;"
      <CardFooter className="border-t bg-muted/50 p-4">;"
        <div className="flex flex-col sm:flex-row w-full justify-between items-center gap-4">;"
          <p className="text-sm text-muted-foreground">Share on social media:</p>;""
            <Button ;"
              variant="outline" ;""
              size="sm";""
              className="flex items-center gap-2";")"
              onClick={() => onShare('twitter')}

              <Twitter className="h-4 w-4" />;"

              className="flex items-center gap-2";""
              onClick={() => onShare('facebook')}

              <Facebook className="h-4 w-4" />;"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              onClick={() => onShare('linkedin')}
            >;
              <Share className="h-4 w-4" />;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/referrals/ReferralLink.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              LinkedIn;
            </Button>;
          </div>;
        </div>;
      </CardFooter>;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/referrals/ReferralLink.tsx

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
const handleCopy = () => {;
  onCopy ();
setCopied (true);
<<<<<<< HEAD
setTimeout ( () => setCopied (false), 2000) ;
=======
setTimeout ( () => setCopied (false), 2000) 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};
:temp_broken_files/referrals/ReferralLink.tsx
mt-6"> <CardHeader> <CardTitle className=" flex items-center gap-2"> <Link className=" h-5 w-5"/> Your Referral Link </CardTitle> <CardDescription> Share this link with others to earn rewards when they join and complete onboarding </CardDescription> </CardHeader> <CardContent> <div className=" flex flex-col space-y-3"> <div className=" flex space-x-2"> <Input value= {;"  referralLink ";"}readOnly className=" font-mono text-sm"/> Copied to clipboard! </p>) ";"}</div> </CardContent> <CardFooter className=" border-t bg-muted/50 p-4"> <div className=" flex flex-col sm:flex-row w-full justify-between items-center gap-4"> <p className=" text-sm text-muted-foreground">Share on social media:</p> <div className=" flex space-x-2"> <Button > <Twitter className=" h-4 w-4"/> Twitter </Button> <Button > <Facebook className=" h-4 w-4"/> Facebook </Button> <Button > <Share className=" h-4 w-4" /> LinkedIn </Button> </div> </div> </CardFooter> </Card>) ;"}'"
mt-6"> <CardHeader> <CardTitle className=" flex items-center gap-2"> <Link className=" h-5 w-5"/> Your Referral Link </CardTitle> <CardDescription> Share this link with others to earn rewards when they join and complete onboarding </CardDescription> </CardHeader> <CardContent> <div className=" flex flex-col space-y-3"> <div className=" flex space-x-2"> <Input value= {;
  referralLink ";
}readOnly className=" font-mono text-sm"/> Copied to clipboard! </p>) ";
}</div> </CardContent> <CardFooter className=" border-t bg-muted/50 p-4"> <div className=" flex flex-col sm:flex-row w-full justify-between items-center gap-4"> <p className=" text-sm text-muted-foreground">Share on social media:</p> <div className=" flex space-x-2"> <Button > <Twitter className=" h-4 w-4"/> Twitter </Button> <Button > <Facebook className=" h-4 w-4"/> Facebook </Button> <Button > <Share className=" h-4 w-4" /> LinkedIn </Button> </div> </div> </CardFooter> </Card>) ;
}'"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/referrals/ReferralLink.tsx
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/referrals/ReferralLink.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

              <Share className="h-4 w-4" />;"

mt-6"> <CardHeader> <CardTitle className=" flex items-center gap-2"> <Link className=" h-5 w-5"/> Your Referral Link  <CardDescription> Share this link with others to earn rewards when they join and complete onboarding   <CardContent> <div className=" flex flex-col space-y-3"> <div className=" flex space-x-2"> <Input value= {;"  referralLink ";"}readOnly className=" font-mono text-sm"/> Copied to clipboard! </p>) ";"}</div>  <CardFooter className=" border-t bg-muted/50 p-4"> <div className=" flex flex-col sm:flex-row w-full justify-between items-center gap-4"> <p className=" text-sm text-muted-foreground">Share on social media:</p> <div className=" flex space-x-2"> <Button > <Twitter className=" h-4 w-4"/> Twitter  <Button > <Facebook className=" h-4 w-4"/> Facebook  <Button > <Share className=" h-4 w-4" /> LinkedIn  </div> </div>  ) ;"}'"""
mt-6"> <CardHeader> <CardTitle className=" flex items-center gap-2"> <Link className=" h-5 w-5"/> Your Referral Link  <CardDescription> Share this link with others to earn rewards when they join and complete onboarding   <CardContent> <div className=" flex flex-col space-y-3"> <div className=" flex space-x-2"> <Input value= {;""
  referralLink ";""
}readOnly className=" font-mono text-sm"/> Copied to clipboard! </p>) ";""
}</div>  <CardFooter className=" border-t bg-muted/50 p-4"> <div className=" flex flex-col sm:flex-row w-full justify-between items-center gap-4"> <p className=" text-sm text-muted-foreground">Share on social media:</p> <div className=" flex space-x-2"> <Button > <Twitter className=" h-4 w-4"/> Twitter  <Button > <Facebook className=" h-4 w-4"/> Facebook  <Button > <Share className=" h-4 w-4" /> LinkedIn  </div> </div>  ) ;""
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
