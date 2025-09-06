<<<<<<< HEAD
<<<<<<< HEAD
=======

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
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
  return (
    <div className='grid md:grid-cols-2 gap-6 mb-10'>
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
  onStandardClick: () => void;
  onSmartClick: () => void
}
export function ContractTypeCards({ onStandardClick, onSmartClick }: ContractTypeCardsProps) {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-10">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
=======
<CardTitle className="flex items-center gap-2">
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
            <FileText className="h-5 w-5" />
            Standard Contracts
          </CardTitle>
          <CardDescription>
            Generate traditional legal agreements for your projects
          </CardDescription>
        </CardHeader>
        <CardContent>
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
          <ul className="space-y-2">
            <li className="text-sm">✓ Legally binding templates</li>
            <li className="text-sm">✓ Milestone-based payment terms</li>
            <li className="text-sm">✓ IP rights and confidentiality clauses</li>
            <li className="text-sm">✓ DocuSign integration</li>
          </ul>
        </CardContent>
        <CardFooter>
<<<<<<< HEAD
=======
          <Button variant="outline" onClick={onStandardClick}>


          <Button variant="outline" onClick={onStandardClick}>

=======
<ul className='space-y-2'>
            <li className='text-sm'>✓ Legally binding templates</li>
            <li className='text-sm'>✓ Milestone-based payment terms</li>
            <li className='text-sm'>✓ IP rights and confidentiality clauses</li>
            <li className='text-sm'>✓ DocuSign integration</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button variant='outline' onClick={onStandardClick}>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
            Create Standard Contract
          </Button>
        </CardFooter>
      </Card>
<<<<<<< HEAD
      
      <Card>
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d



        <CardHeader className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-t-lg">
          <div className="flex justify-between items-center">
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary" />
              Smart Contracts
            </CardTitle>
            <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
=======
<Card>
        <CardHeader className='bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-t-lg'>
          <div className='flex justify-between items-center'>
            <CardTitle className='flex items-center gap-2'>
              <ShieldCheck className='h-5 w-5 text-primary' />
              Smart Contracts
            </CardTitle>
            <span className='px-2 py-1 bg-primary/10 text-primary text-xs rounded-full'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
              Blockchain Powered
            </span>
          </div>
          <CardDescription>
            Deploy agreements on Ethereum or Polygon with escrow capabilities
          </CardDescription>
        </CardHeader>
        <CardContent>
<<<<<<< HEAD
<<<<<<< HEAD
=======

          <ul className="space-y-2">

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
            onClick={onSmartClick}

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
<ul className='space-y-2'>
            <li className='text-sm'>✓ All standard contract features</li>
            <li className='text-sm'>✓ Automatic escrow payment release</li>
            <li className='text-sm'>✓ Transaction verification</li>
            <li className='text-sm'>✓ Permanent on-chain record</li>
            <li className='text-sm'>✓ Multi-signature approval flow</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button
            className='w-full bg-gradient-to-r from-blue-600 to-indigo-600'
            onClick={onSmartClick}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
          >
            Create Smart Contract
          </Button>
        </CardFooter>
      </Card>
    </div>
<<<<<<< HEAD


import { Button } from '@/components/ui/button';
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;
  CardTitle,;
} from '@/components/ui/card';
<<<<<<< HEAD
=======


>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
          <Button 
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600" 
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { FileText, ShieldCheck } from 'lucide-react';
interface ContractTypeCardsProps {;
  onStandardClick: () => void;
  onSmartClick: () => void;
<<<<<<< HEAD
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
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
            Standard Contracts;
          </CardTitle>;
          <CardDescription>;
            Generate traditional legal agreements for your projects;
          </CardDescription>;
        </CardHeader>;
        <CardContent>;
<<<<<<< HEAD
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
          </Button>;
        </CardFooter>;
      </Card>;
      <Card>;
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

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
              Blockchain Powered;
            </span>;
          </div>;
          <CardDescription>;
            Deploy agreements on Ethereum or Polygon with escrow capabilities;
          </CardDescription>;
        </CardHeader>;
        <CardContent>;
<<<<<<< HEAD
=======

          <ul className='space - y-2'>;
            <li className='text - sm'>✓ All standard contract features</li>;
            <li className='text - sm'>✓ Automatic escrow payment release</li>;
            <li className='text - sm'>✓ Transaction verification</li>;
            <li className='text - sm'>✓ Permanent on - chain record</li>;
            <li className='text - sm'>✓ Multi - signature approval flow</li>;
          </ul>;
        </CardContent>;
        <CardFooter>;
          <Button;
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

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
            Create Smart Contract;
          </Button>;
        </CardFooter>;
      </Card>;
<<<<<<< HEAD
    </div>;
  );
};
}
=======

  );
}

    </div>);
}

;
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
