<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
import { Button } from '@/components/ui/button'
import {
  Card
  CardContent
  CardDescription
  CardFooter
  CardHeader
  CardTitle
} from '@/components/ui/card'

import { FileText, ShieldCheck } from 'lucide-react'
interface ContractTypeCardsProps {
  onStandardClick: () => void
  onSmartClick: () => void
export function ContractTypeCards({
  onStandardClick
  onSmartClick
}: ContractTypeCardsProps) {
=======
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { FileText, ShieldCheck } from 'lucide-react'

interface ContractTypeCardsProps {
  onStandardClick: () => void,
  onSmartClick: () => void
}

export function ContractTypeCards({ onStandardClick, onSmartClick }: ContractTypeCardsProps) {
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-10">
      <Card>
        <CardHeader>
<<<<<<< HEAD
          <CardTitle className='flex items-center gap-2'>
            <FileText className='h-5 w-5' />            Standard Contracts
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
interface ContractTypeCardsProps {

  onStandardClick: () => void

  onSmartClick: () => void
}
export function ContractTypeCards({ onStandardClick, onSmartClick }: ContractTypeCardsProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-10">
      <Card>
        <CardHeader>
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          <CardTitle className="flex items-center gap-2">
=======
<CardTitle className="flex items-center gap-2">
>>>>>>> main
            <FileText className="h-5 w-5" />
            Standard Contracts
          </CardTitle>
          <CardDescription>
            Generate traditional legal agreements for your projects
          </CardDescription>
        </CardHeader>
        <CardContent>
<<<<<<< HEAD
          <ul className="space-y-2">
            <li className="text-sm">✓ Legally binding templates</li>
            <li className="text-sm">✓ Milestone-based payment terms</li>
            <li className="text-sm">✓ IP rights and confidentiality clauses</li>
            <li className="text-sm">✓ DocuSign integration</li>
          </ul>
        </CardContent>
        <CardFooter>
<<<<<<< HEAD
          <Button variant='outline' onClick={onStandardClick}>            Create Standard Contract
          </Button>
        </CardFooter>
      </Card>
=======


>>>>>>> main
          <ul className="space-y-2">
            <li className="text-sm">✓ Legally binding templates</li>
            <li className="text-sm">✓ Milestone-based payment terms</li>
            <li className="text-sm">✓ IP rights and confidentiality clauses</li>
            <li className="text-sm">✓ DocuSign integration</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button variant="outline" onClick={onStandardClick}>
<<<<<<< HEAD
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader className='bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-t-lg'>
          <div className='flex justify-between items-center'>
            <CardTitle className='flex items-center gap-2'>
              <ShieldCheck className='h-5 w-5 text-primary' />
              Smart Contracts
            </CardTitle>
            <span className='px-2 py-1 bg-primary/10 text-primary text-xs rounded-full'>              Blockchain Powered      <Card>
=======
          <Button variant="outline" onClick={onStandardClick}>
=======


          <Button variant="outline" onClick={onStandardClick}>

>>>>>>> main
            Create Standard Contract
          </Button>
        </CardFooter>
      </Card>
      
      <Card>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======



>>>>>>> main
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
<<<<<<< HEAD
          <ul className="space-y-2">
=======

          <ul className="space-y-2">

>>>>>>> main
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
            className='w-full bg-gradient-to-r from-blue-600 to-indigo-600'            onClick={onSmartClick}          <ul className="space-y-2">
            <li className="text-sm">✓ All standard contract features</li>
            <li className="text-sm">✓ Automatic escrow payment release</li>
            <li className="text-sm">✓ Transaction verification</li>
            <li className="text-sm">✓ Permanent on-chain record</li>
            <li className="text-sm">✓ Multi-signature approval flow</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600"
            onClick = {onSmartClick,}
=======

          <Button 
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600" 
            onClick={onSmartClick}

>>>>>>> main
          >
            Create Smart Contract
          </Button>
        </CardFooter>
      </Card>
<<<<<<< HEAD
<<<<<<< HEAD
    </div>
  )
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
    </div>


import { Button } from '@/components/ui/button';
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;
  CardTitle,;
} from '@/components/ui/card';


>>>>>>> main
          <Button 
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600" 
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { FileText, ShieldCheck } from 'lucide-react';
interface ContractTypeCardsProps {;
  onStandardClick: () => void;
  onSmartClick: () => void;
<<<<<<< HEAD
}
;
export function ContractTypeCards({ onStandardClick, onSmartClick }: ContractTypeCardsProps) {;
  return (;
=======

export function ContractTypeCards(): any ({;
  onStandardClick,;
  onSmartClick,;
}: ContractTypeCardsProps) {;
  return (
    <div className='grid md:grid-cols-2 gap-6 mb-10'>;
      <Card>;
        <CardHeader>;
          <CardTitle className='flex items-center gap-2'>;
            <FileText className='h-5 w-5' />            Standard Contracts;
          <CardTitle className="flex items-center gap-2">;
            <FileText className="h-5 w-5" />;

interface ContractTypeCardsProps {;
  onStandardClick: () => void,;
  onSmartClick: () => void;
}

export function ContractTypeCards(): any ({ onStandardClick, onSmartClick }: ContractTypeCardsProps) {;
  return (
>>>>>>> main
    <div className="grid md:grid-cols-2 gap-6 mb-10">;
      <Card>;
        <CardHeader>;
          <CardTitle className="flex items-center gap-2">;
            <FileText className="h-5 w-5" />;
<<<<<<< HEAD
=======
import { Button } from '@/components / ui / button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components / ui / card';
import { FileText, ShieldCheck } from 'lucide-react';
interface ContractTypeCardsProps {
  onStandardClick: () => void;
  onSmartClick: () => void;
export /**
 * ContractTypeCards - Function description
 */
function ContractTypeCards() {
  return (
    <div className='grid md:grid - cols - 2 gap - 6 mb - 10'>;
      <Card>;
        <CardHeader>;
          <CardTitle className='flex items - center gap - 2'>;
            <FileText className='h - 5 w - 5' />            Standard Contracts;
          <CardTitle className="flex items - center gap - 2">;
            <FileText className="h - 5 w - 5" />;
interface ContractTypeCardsProps {
  onStandardClick: () => void,
  onSmartClick: () => void;
}
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
            Create Standard Contract;
=======

          <ul className='space - y-2'>;
            <li className='text - sm'>✓ Legally binding templates</li>;
            <li className='text - sm'>✓ Milestone - based payment terms</li>;
            <li className='text - sm'>✓ IP rights and confidentiality clauses</li>;
            <li className='text - sm'>✓ DocuSign integration</li>;
          </ul>;
        </CardContent>;
        <CardFooter>;
          <Button variant='outline' on_click={onStandardClick}>            Create Standard Contract;
          </Button>;
        </CardFooter>;
      </Card>;
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
          </Button>;
        </CardFooter>;
      </Card>;
      <Card>;
<<<<<<< HEAD
        <CardHeader className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-t-lg">;
          <div className="flex justify-between items-center">;
            <CardTitle className="flex items-center gap-2">;
              <ShieldCheck className="h-5 w-5 text-primary" />;
              Smart Contracts;
            </CardTitle>;
            <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">;
=======
        <CardHeader className='bg - gradient - to - r from - blue - 500 / 10 to - purple - 500 / 10 rounded - t-lg'>;
          <div className='flex justify - between items - center'>;
            <CardTitle className='flex items - center gap - 2'>;
              <ShieldCheck className='h - 5 w - 5 text - primary' />;
              Smart Contracts;
            </CardTitle>;
            <span className='px - 2 py - 1 bg - primary / 10 text - primary text - xs rounded - full'>              Blockchain Powered      <Card>;
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

          <ul className='space - y-2'>;
            <li className='text - sm'>✓ All standard contract features</li>;
            <li className='text - sm'>✓ Automatic escrow payment release</li>;
            <li className='text - sm'>✓ Transaction verification</li>;
            <li className='text - sm'>✓ Permanent on - chain record</li>;
            <li className='text - sm'>✓ Multi - signature approval flow</li>;
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
            className='w - full bg - gradient - to - r from - blue - 600 to - indigo - 600'            on_click={onSmartClick}          <ul className="space - y-2">;
            <li className="text - sm">✓ All standard contract features</li>;
            <li className="text - sm">✓ Automatic escrow payment release</li>;
            <li className="text - sm">✓ Transaction verification</li>;
            <li className="text - sm">✓ Permanent on - chain record</li>;
            <li className="text - sm">✓ Multi - signature approval flow</li>;
          </ul>;
        </CardContent>;
        <CardFooter>;
          <Button;
            className="w - full bg - gradient - to - r from - blue - 600 to - indigo - 600";
            on_click = {onSmartClick, }
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
};
}
<<<<<<< HEAD
}
=======
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

  );
}

    </div>);
}

;
>>>>>>> main
