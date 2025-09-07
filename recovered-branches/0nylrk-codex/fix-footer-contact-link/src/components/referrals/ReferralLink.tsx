


import {useState} from "react";""
import {Button} from "@/components/ui/button";""
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";""
import {Input} from "@/components/ui/input";""
import {Copy, Facebook, Link, Share, Twitter} from "lucide-react";""
import { useState } from "react",""
import { Button } from "@/components/ui/button",""
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",""
import { Input } from "@/components/ui/input",""
import { Copy, Facebook, Link, Share, Twitter } from "lucide-react",""
import { useState } from "react";""
import { Button } from "@/components/ui/button";"

import {
  // TODO: Implement
}
  Card,
  CardContent,
  CardDescription,
  CardFooter,

  CardHeader,
  CardTitle,"
} from "@/components/ui/card";""
import { Input } from "@/components/ui/input";""
import { Copy, Facebook, Link, Share, Twitter } from "lucide-react";"
interface ReferralLinkProps {
  // TODO: Implement
}
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


  return ("
    <Card className="mt-6">"
</Card>
      <CardHeader>
</CardHeader>"
        <CardTitle className="flex items-center gap-2">"
</CardTitle>"
          <Link className="h-5 w-5" />"
</Link>
        </CardTitle>
        <CardDescription>
</CardDescription>
        </CardDescription>
      </CardHeader>
      <CardContent>
</CardContent>"
        <div className="flex flex-col space-y-3">"
</div>"
          <div className="flex space-x-2">"
</div>
            <Input;
              value={referralLink}
              readOnly;"
              className="font-mono text-sm""
            />
</Input>"
            <Button variant="outline" size="icon" onClick={handleCopy}>"
</Button>"
              <Copy className="h-4 w-4" />"
</Copy>"
              <span className="sr-only">Copy</span>"
            </Button>
          </div>"
            <p className="text-sm text-green-600 dark:text-green-500">"
</p>
            </p>
        </div>
      </CardContent>"
      <CardFooter className="border-t bg-muted/50 p-4">"
</CardFooter>"
        <div className="flex flex-col sm:flex-row w-full justify-between items-center gap-4">"
</div>"
          <p className="text-sm text-muted-foreground">"
</p>
          </p>"
          <div className="flex space-x-2">"
</div>
            <Button;"
              variant="outline"""
              size="sm"""
              className="flex items-center gap-2"")"
              onClick={() => onShare("twitter")}"
</Button>"
              <Twitter className="h-4 w-4" />"
</Twitter>
            </Button>
            <Button;"
              variant="outline"""
              size="sm"""
              className="flex items-center gap-2"""
              onClick={() => onShare("facebook")}"
</Button>"
              <Facebook className="h-4 w-4" />"
</Facebook>
            </Button>
            <Button;"
              variant="outline"""
              size="sm"""
              className="flex items-center gap-2"""
              onClick={() => onShare("linkedin")}"
</Button>"
              <Share className="h-4 w-4" />"
</Share>

            </Button>
          </div>
        </div>
      </CardFooter>

    </Card>"
    <Card className="mt - 6">;"
</Card>
      <CardHeader>;
</CardHeader>"
        <CardTitle className="flex items - center gap - 2">;"
</CardTitle>"
          <Link className="h - 5 w - 5" />;"
</Link>
        </CardTitle>;
        <CardDescription>;
</CardDescription>
        </CardDescription>;
      </CardHeader>;
      <CardContent>;
</CardContent>"
        <div className="flex flex - col space - y-3">;"
</div>"
          <div className="flex space - x-2">;"
</div>
            <Input;
              value={referral_link}
              read_only;"
              className="font - mono text - sm";"
            />;
</Input>"
            <Button variant="outline" size="icon" on_click={handle_copy}>;"
</Button>"
              <Copy className="h - 4 w - 4" />;"
</Copy>"
              <span className="sr - only">Copy</span>;"
            </Button>;
          </div>;"
            <p className="text - sm text - green - 600 dark:text - green - 500">;"
</p>
            </p>)}
        </div>;
      </CardContent>;"
      <CardFooter className="border - t bg - muted / 50 p - 4">;"
</CardFooter>"
        <div className="flex flex - col sm:flex - row w - full justify - between items - center gap - 4">;"
</div>"
          <p className="text - sm text - muted - foreground">;"
</p>
          </p>;"
          <div className="flex space - x-2">;"
</div>
            <Button;"
              variant="outline";""
              size="sm";""
              className="flex items - center gap - 2";""
              on_click={() => on_share ("twitter")}"
</Button>"
              <Twitter className="h - 4 w - 4" />;"
</Twitter>
            </Button>;
            <Button;"
              variant="outline";""
              size="sm";""
              className="flex items - center gap - 2";""
              on_click={() => on_share ("facebook")}"
</Button>"
              <Facebook className="h - 4 w - 4" />;"
</Facebook>
            </Button>;
            <Button;"
              variant="outline";""
              size="sm";""
              className="flex items - center gap - 2";""
              on_click={() => on_share ("linkedin")}"
</Button>"
              <Share className="h - 4 w - 4" />;"
</Share>
            <Button ;"
              variant="outline" ;""
              size="sm";""
              className="flex items-center gap-2";""
              onClick={() => onShare('linkedin')}'
</Button>'
              <Share className="h-4 w-4" />;"
</Share>
            </Button>;
          </div>;
        </div>;
      </CardFooter>;
    </Card>);
    </Card>;"
mt-6"> <CardHeader> <CardTitle className=" flex items-center gap-2"> <Link className=" h-5 w-5"/> Your Referral Link </CardTitle> <CardDescription> Share this link with others to earn rewards when they join and complete onboarding </CardDescription> </CardHeader> <CardContent> <div className=" flex flex-col space-y-3"> <div className=" flex space-x-2"> <Input value= {"
  referralLink;"
}readOnly className=" font-mono text-sm"/> Copied to clipboard! </p>)""
}</div> </CardContent> <CardFooter className=" border-t bg-muted/50 p-4"> <div className=" flex flex-col sm:flex-row w-full justify-between items-center gap-4"> <p className=" text-sm text-muted-foreground">Share on social media:</p> <div className=" flex space-x-2"> <Button > <Twitter className=" h-4 w-4"/> Twitter </Button> <Button > <Facebook className=" h-4 w-4"/> Facebook </Button> <Button > <Share className=" h-4 w-4" /> LinkedIn </Button> </div> </div> </CardFooter> </Card>)""

