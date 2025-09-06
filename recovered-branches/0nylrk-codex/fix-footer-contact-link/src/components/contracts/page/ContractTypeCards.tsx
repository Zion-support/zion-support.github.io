<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import { Button } from "@/components/ui/button";
import {
<<<<<<< HEAD
  Card
  CardContent
  CardDescription
  CardFooter
  CardHeader
  CardTitle
=======
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

import { Button } from "@/components/ui/button";
import {


>>>>>>> main
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
<<<<<<< HEAD
  CardTitle,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
} from "@/components/ui/card";
<<<<<<< HEAD
=======
import { FileText, ShieldCheck } from "lucide-react";
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { FileText, ShieldCheck } from "lucide-react",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

<<<<<<< HEAD
import { FileText, ShieldCheck } from "lucide-react";
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface ContractTypeCardsProps {
<<<<<<< HEAD
  onStandardClick: () => void;
  onSmartClick: () => void
}
export function ContractTypeCards({
  onStandardClick
  onSmartClick
}: ContractTypeCardsProps) {
=======
=======

interface ContractTypeCardsProps {;

  onStandardClick: () => void;
  onSmartClick: () => void
}

  CardTitle,;

} from "@/components/ui/card";

import { FileText, ShieldCheck } from "lucide-react";





interface ContractTypeCardsProps {

>>>>>>> main
  onStandardClick: () => void,
  onSmartClick: () => void
}

export function ContractTypeCards({ onStandardClick, onSmartClick }: ContractTypeCardsProps) {
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
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
<<<<<<< HEAD
=======
      
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


      


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
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
<<<<<<< HEAD
          <Button
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600"
            onClick={onSmartClick}
          >
            Create Smart Contract
          </Button>
        </CardFooter>
      </Card>
<<<<<<< HEAD
    </div>
  );
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


export function ContractTypeCards(): any ({;
  onStandardClick,;
  onSmartClick,;
}: ContractTypeCardsProps) {;
  return (
=======


>>>>>>> main
=======
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
=======

>>>>>>> main
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
>>>>>>> main
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

>>>>>>> main
            Create Standard Contract;
          </Button>;
        </CardFooter>;
      </Card>;
<<<<<<< HEAD
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

>>>>>>> main
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
>>>>>>> main
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

>>>>>>> main
            Create Smart Contract;
          </Button>;
        </CardFooter>;
      </Card>;
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
    </div>;
  );
}
<<<<<<< HEAD
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

    </div>);

}
=======
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
