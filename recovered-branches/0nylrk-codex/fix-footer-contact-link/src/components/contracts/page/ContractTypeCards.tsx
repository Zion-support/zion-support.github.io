<<<<<<< HEAD

<<<<<<< HEAD

import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;
  CardTitle,;

} from "@/components/ui/card";


import { Button  } from '@/components / ui / button';
import {
=======
=======
} from "@/components/ui/card";
import { Button  } from '@/components / ui / button';
import {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

import { Button } from "@/components/ui/button";
import {
<<<<<<< HEAD
=======


<<<<<<< HEAD
=======

import { Button } from "@/components/ui/button";
import {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  Card
  CardContent
  CardDescription
  CardFooter
  CardHeader
  CardTitle
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
<<<<<<< HEAD
  CardTitle,;
} from "@/components/ui/card";
import { FileText, ShieldCheck } from "lucide-react";
=======
<<<<<<< HEAD
<<<<<<< HEAD

interface ContractTypeCardsProps {;

  onStandardClick: () => void;
  onSmartClick: () => void
}

  CardTitle,;

} from "@/components/ui/card";

import { FileText, ShieldCheck } from "lucide-react";





interface ContractTypeCardsProps {

=======
  CardTitle,;
} from "@/components/ui/card";
import { FileText, ShieldCheck } from "lucide-react";
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { FileText, ShieldCheck } from "lucide-react",

<<<<<<< HEAD
interface ContractTypeCardsProps {

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  onStandardClick: () => void;
  onSmartClick: () => void
}
export function ContractTypeCards({
  onStandardClick
  onSmartClick
}: ContractTypeCardsProps) {
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  onStandardClick: () => void,
  onSmartClick: () => void
}

export function ContractTypeCards({ onStandardClick, onSmartClick }: ContractTypeCardsProps) {
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-10">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Standard Contracts
          </CardTitle>
          <CardDescription>
            Generate traditional legal agreements for your projects
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="text-sm">✓ Legally binding templates</li>
            <li className="text-sm">✓ Milestone-based payment terms</li>
            <li className="text-sm">✓ IP rights and confidentiality clauses</li>
            <li className="text-sm">✓ DocuSign integration</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button variant="outline" onClick={onStandardClick}>
            Create Standard Contract
          </Button>
        </CardFooter>
      </Card>
<<<<<<< HEAD

      
=======
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

      


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
      
      
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      <Card>
        <CardHeader className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-t-lg">
          <div className="flex justify-between items-center">
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary" />
              Smart Contracts
            </CardTitle>
            <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
              Blockchain Powered
            </span>
          </div>
          <CardDescription>
            Deploy agreements on Ethereum or Polygon with escrow capabilities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="text-sm">✓ All standard contract features</li>
            <li className="text-sm">✓ Automatic escrow payment release</li>
            <li className="text-sm">✓ Transaction verification</li>
            <li className="text-sm">✓ Permanent on-chain record</li>
            <li className="text-sm">✓ Multi-signature approval flow</li>
          </ul>
        </CardContent>
        <CardFooter>
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD

=======
  CardTitle,
} from '@/components / ui / card';
import { FileText, ShieldCheck  } from './lucide-react';
interface ContractTypeCardsProps {
interface ContractTypeCardsProps {;
  onStandardClick: () => void;
  onSmartClick: () => void
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export function ContractTypeCards(): any ({;
  onStandardClick,;
  onSmartClick,;
}: ContractTypeCardsProps) {;
  return (
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <Button
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600"
            onClick={onSmartClick}
          >
            Create Smart Contract
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <Button 
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600" 
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { FileText, ShieldCheck } from "lucide-react",;
interface ContractTypeCardsProps {;
  onStandardClick: () => void;
  onSmartClick: () => void;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
}
<<<<<<< HEAD
=======
;
export function ContractTypeCards({ onStandardClick, onSmartClick }: ContractTypeCardsProps) {;
  return (;
<<<<<<< HEAD
<<<<<<< HEAD

=======
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { FileText, ShieldCheck } from "lucide-react",;
;
interface ContractTypeCardsProps {;
  onStandardClick:() => void,;
  onSmartClick:() => void;
}
;
export function ContractTypeCards({ onStandardClick, onSmartClick } ContractTypeCardsProps) {;
  return (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    <div className="grid md:grid-cols-2 gap-6 mb-10">;
      <Card>;
        <CardHeader>;
          <CardTitle className="flex items-center gap-2">;
            <FileText className="h-5 w-5" />;
<<<<<<< HEAD
<<<<<<< HEAD
=======
export /**
 * ContractTypeCards - Function description
 */
function ContractTypeCards() {
  return (
    <div className="grid md:grid - cols - 2 gap - 6 mb - 10">;
      <Card>;
        <CardHeader>;
          <CardTitle className="flex items - center gap - 2">;
            <FileText className="h - 5 w - 5" />;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
} from "@/components/ui/card";

interface ContractTypeCardsProps {
interface ContractTypeCardsProps {;
  onStandardClick: () => void;
  onSmartClick: () => void
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            Standard Contracts;
          </CardTitle>;
          <CardDescription>;
            Generate traditional legal agreements for your projects;
          </CardDescription>;
        </CardHeader>;
        <CardContent>;
<<<<<<< HEAD
<<<<<<< HEAD

          <ul className="space - y-2">;
            <li className="text - sm">✓ Legally binding templates</li>;
            <li className="text - sm">✓ Milestone - based payment terms</li>;
            <li className="text - sm">✓ IP rights and confidentiality clauses</li>;
            <li className="text - sm">✓ DocuSign integration</li>;
          </ul>;
        </CardContent>;
        <CardFooter>;
          <Button variant="outline" on_click={onStandardClick}>;

=======
          <ul className="space-y-2">;
            <li className="text-sm">✓ Legally binding templates</li>;
            <li className="text-sm">✓ Milestone-based payment terms</li>;
            <li className="text-sm">✓ IP rights and confidentiality clauses</li>;
            <li className="text-sm">✓ DocuSign integration</li>;
          </ul>;
        </CardContent>;
        <CardFooter>;
          <Button variant="outline" onClick={onStandardClick}>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            Create Standard Contract;
          </Button>;
        </CardFooter>;
      </Card>;
<<<<<<< HEAD
<<<<<<< HEAD

      <Card>;
        <CardHeader className="bg - gradient - to - r from - blue - 500 / 10 to - purple - 500 / 10 rounded - t-lg">;
          <div className="flex justify - between items - center">;
            <CardTitle className="flex items - center gap - 2">;
              <ShieldCheck className="h - 5 w - 5 text - primary" />;
              Smart Contracts;
            </CardTitle>;
            <span className="px - 2 py - 1 bg - primary / 10 text - primary text - xs rounded - full">;

=======
      ;
      <Card>;
        <CardHeader className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-t-lg">;
          <div className="flex justify-between items-center">;
            <CardTitle className="flex items-center gap-2">;
              <ShieldCheck className="h-5 w-5 text-primary" />;
              Smart Contracts;
            </CardTitle>;
            <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              Blockchain Powered;
            </span>;
          </div>;
          <CardDescription>;
            Deploy agreements on Ethereum or Polygon with escrow capabilities;
          </CardDescription>;
        </CardHeader>;
        <CardContent>;
<<<<<<< HEAD
<<<<<<< HEAD

          <ul className="space - y-2">;
            <li className="text - sm">✓ All standard contract features</li>;
            <li className="text - sm">✓ Automatic escrow payment release</li>;
            <li className="text - sm">✓ Transaction verification</li>;
            <li className="text - sm">✓ Permanent on - chain record</li>;
            <li className="text - sm">✓ Multi - signature approval flow</li>;
=======
          <ul className="space-y-2">;
            <li className="text-sm">✓ All standard contract features</li>;
            <li className="text-sm">✓ Automatic escrow payment release</li>;
            <li className="text-sm">✓ Transaction verification</li>;
            <li className="text-sm">✓ Permanent on-chain record</li>;
            <li className="text-sm">✓ Multi-signature approval flow</li>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          </ul>;
        </CardContent>;
        <CardFooter>;
          <Button;
<<<<<<< HEAD
<<<<<<< HEAD
            className="w - full bg - gradient - to - r from - blue - 600 to - indigo - 600";
            on_click={onSmartClick}
          >;

=======
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600";
            onClick={onSmartClick}
          >;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
          >;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            Create Smart Contract;
          </Button>;
        </CardFooter>;
      </Card>;
<<<<<<< HEAD
    </div>;
  );
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD

    </div>);

}
=======
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
    </div>);

}
}


    </div>);
}
    </div>;
  ),;}
 interface ContractTypeCardsProps {
  onStandardClick: () => void;
onSmartClick: () => void 
}export function ContractTypeCards ({
  onStandardClick, onSmartClick 
}: ContractTypeCardsProps) {
  return (<div className="grid md:grid-cols-2 gap-6 mb-10" > flex items-center gap-2"> <FileText className=" h-5 w-5"/> Standard Contracts </CardTitle> <CardDescription> Generate traditional legal agreements for your projects </CardDescription> </CardHeader> <CardContent> <ul className=" space-y-2"> <li className=" text-sm">✓ Legally binding templates</li> <li className=" text-sm">✓ Milestone-based payment terms</li> <li className=" text-sm">✓ IP rights and confidentiality clauses</li> <li className=" text-sm">✓ DocuSign integration</li> </ul> </CardContent> <CardFooter> <Button variant=" outline"onClick= {
  onStandardClick 
}> Create Standard Contract </Button> </CardFooter> </Card> <Card> <CardHeader className=" bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-t-lg"> <div className=" flex justify-between items-center"> <CardTitle className=" flex items-center gap-2"> <ShieldCheck className=" h-5 w-5 text-primary"/> Smart Contracts </CardTitle> <span className=" px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"> Blockchain Powered </span> </div> <CardDescription> Deploy agreements on Ethereum or Polygon with escrow capabilities </CardDescription> </CardHeader> <CardContent> <ul className=" space-y-2"> <li className=" text-sm">✓ All standard contract features</li> <li className=" text-sm">✓ Automatic escrow payment release</li> <li className=" text-sm">✓ Transaction verification</li> <li className=" text-sm">✓ Permanent on-chain record</li> <li className=" text-sm" >✓ Multi-signature approval flow</li> </ul> </CardContent> <CardFooter> <Button > Create Smart Contract </Button> </CardFooter> </Card> </div>) 
}
    </div>;
  );
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
