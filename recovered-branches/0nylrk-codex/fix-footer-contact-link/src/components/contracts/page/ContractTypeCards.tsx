
<<<<<<< HEAD
} from "@/components/ui/card";
import { Button  } from '@/components / ui / button';
import {
=======

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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import { Button } from "@/components/ui/button";
import {


<<<<<<< HEAD

import { Button } from "@/components/ui/button";
import {
  Card
  CardContent
  CardDescription
  CardFooter
  CardHeader
  CardTitle
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
<<<<<<< HEAD
  CardTitle,;
} from "@/components/ui/card";
import { FileText, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { FileText, ShieldCheck } from "lucide-react",

import { FileText, ShieldCheck } from "lucide-react";
interface ContractTypeCardsProps {
  onStandardClick: () => void;
  onSmartClick: () => void
}
export function ContractTypeCards({
  onStandardClick
  onSmartClick
}: ContractTypeCardsProps) {
=======

interface ContractTypeCardsProps {;

  onStandardClick: () => void;
  onSmartClick: () => void
}

  CardTitle,;

} from "@/components/ui/card";

import { FileText, ShieldCheck } from "lucide-react";





interface ContractTypeCardsProps {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  onStandardClick: () => void,
  onSmartClick: () => void
}

export function ContractTypeCards({ onStandardClick, onSmartClick }: ContractTypeCardsProps) {
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      


<<<<<<< HEAD
      
      
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
  CardTitle,
} from '@/components / ui / card';
import { FileText, ShieldCheck  } from './lucide-react';
interface ContractTypeCardsProps {
interface ContractTypeCardsProps {;
  onStandardClick: () => void;
  onSmartClick: () => void
}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export function ContractTypeCards(): any ({;
  onStandardClick,;
  onSmartClick,;
}: ContractTypeCardsProps) {;
  return (
<<<<<<< HEAD

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
=======
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <Button 
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600" 
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { FileText, ShieldCheck } from "lucide-react",;
interface ContractTypeCardsProps {;
  onStandardClick: () => void;
  onSmartClick: () => void;
}
;
export function ContractTypeCards({ onStandardClick, onSmartClick }: ContractTypeCardsProps) {;
  return (;
<<<<<<< HEAD
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <div className="grid md:grid-cols-2 gap-6 mb-10">;
      <Card>;
        <CardHeader>;
          <CardTitle className="flex items-center gap-2">;
            <FileText className="h-5 w-5" />;
<<<<<<< HEAD
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            Standard Contracts;
          </CardTitle>;
          <CardDescription>;
            Generate traditional legal agreements for your projects;
          </CardDescription>;
        </CardHeader>;
        <CardContent>;
<<<<<<< HEAD
          <ul className="space-y-2">;
            <li className="text-sm">✓ Legally binding templates</li>;
            <li className="text-sm">✓ Milestone-based payment terms</li>;
            <li className="text-sm">✓ IP rights and confidentiality clauses</li>;
            <li className="text-sm">✓ DocuSign integration</li>;
          </ul>;
        </CardContent>;
        <CardFooter>;
          <Button variant="outline" onClick={onStandardClick}>;
=======

          <ul className="space - y-2">;
            <li className="text - sm">✓ Legally binding templates</li>;
            <li className="text - sm">✓ Milestone - based payment terms</li>;
            <li className="text - sm">✓ IP rights and confidentiality clauses</li>;
            <li className="text - sm">✓ DocuSign integration</li>;
          </ul>;
        </CardContent>;
        <CardFooter>;
          <Button variant="outline" on_click={onStandardClick}>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            Create Standard Contract;
          </Button>;
        </CardFooter>;
      </Card>;
<<<<<<< HEAD
      ;
      <Card>;
        <CardHeader className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-t-lg">;
          <div className="flex justify-between items-center">;
            <CardTitle className="flex items-center gap-2">;
              <ShieldCheck className="h-5 w-5 text-primary" />;
              Smart Contracts;
            </CardTitle>;
            <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">;
=======

      <Card>;
        <CardHeader className="bg - gradient - to - r from - blue - 500 / 10 to - purple - 500 / 10 rounded - t-lg">;
          <div className="flex justify - between items - center">;
            <CardTitle className="flex items - center gap - 2">;
              <ShieldCheck className="h - 5 w - 5 text - primary" />;
              Smart Contracts;
            </CardTitle>;
            <span className="px - 2 py - 1 bg - primary / 10 text - primary text - xs rounded - full">;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              Blockchain Powered;
            </span>;
          </div>;
          <CardDescription>;
            Deploy agreements on Ethereum or Polygon with escrow capabilities;
          </CardDescription>;
        </CardHeader>;
        <CardContent>;
<<<<<<< HEAD
          <ul className="space-y-2">;
            <li className="text-sm">✓ All standard contract features</li>;
            <li className="text-sm">✓ Automatic escrow payment release</li>;
            <li className="text-sm">✓ Transaction verification</li>;
            <li className="text-sm">✓ Permanent on-chain record</li>;
            <li className="text-sm">✓ Multi-signature approval flow</li>;
=======

          <ul className="space - y-2">;
            <li className="text - sm">✓ All standard contract features</li>;
            <li className="text - sm">✓ Automatic escrow payment release</li>;
            <li className="text - sm">✓ Transaction verification</li>;
            <li className="text - sm">✓ Permanent on - chain record</li>;
            <li className="text - sm">✓ Multi - signature approval flow</li>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          </ul>;
        </CardContent>;
        <CardFooter>;
          <Button;
<<<<<<< HEAD
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600";
            onClick={onSmartClick}
          >;
=======
            className="w - full bg - gradient - to - r from - blue - 600 to - indigo - 600";
            on_click={onSmartClick}
          >;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            Create Smart Contract;
          </Button>;
        </CardFooter>;
      </Card>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    </div>);

}
}


<<<<<<< HEAD
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
