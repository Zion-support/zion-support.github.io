<<<<<<< HEAD
:src/components/contracts/page/ContractTypeCards.tsx
import { Button } from '@/components/ui/button
import {
  Card
  CardContent
  CardDescription
  CardFooter
  CardHeader
  CardTitle
} from @/components/ui/card'

import { FileText, ShieldCheck } from 'lucide-react
interface ContractTypeCardsProps {
  onStandardClick: () => void
  onSmartClick: () => void
export function ContractTypeCards({
  onStandardClick
  onSmartClick
}: ContractTypeCardsProps) {
import { Button } from "@/components/ui/button,
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from @/components/ui/card",
import { FileText, ShieldCheck } from lucide-react'
=======
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { FileText, ShieldCheck } from 'lucide-react'
>>>>>>> origin/chore/fix-lint-and-merge

interface ContractTypeCardsProps {
  onStandardClick: () => void,
  onSmartClick: () => void
}

export function ContractTypeCards({ onStandardClick, onSmartClick }: ContractTypeCardsProps) {

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
import { Button } from "@/components/ui/button;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from @/components/ui/card";
  Card
  CardContent
  CardDescription
  CardFooter
  CardHeader
  CardTitle
} from '@/components/ui/card

  onStandardClick: () => void;
  onSmartClick: () => void
}
export function ContractTypeCards({ onStandardClick, onSmartClick }: ContractTypeCardsProps) {
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/chore/fix-lint-and-merge

  return (
    <div className="grid md:grid-cols-2 gap-6 mb-10>
      <Card>
        <CardHeader>
<<<<<<< HEAD
          <CardTitle className="flex items-center gap-2">
<CardTitle className="flex items-center gap-2">
          <CardTitle className=flex items-center gap-2">
<CardTitle className="flex items-center gap-2>


<CardTitle className=flex items-center gap-2">
=======
>>>>>>> origin/chore/fix-lint-and-merge

            <FileText className="h-5 w-5 />

            Standard Contracts
          </CardTitle>
          <CardDescription>
            Generate traditional legal agreements for your projects
          </CardDescription>
        </CardHeader>
        <CardContent>
<<<<<<< HEAD



=======
>>>>>>> origin/chore/fix-lint-and-merge

          <ul className=space-y-2">
            <li className="text-sm>✓ Legally binding templates</li>
            <li className=text-sm">✓ Milestone-based payment terms</li>
            <li className="text-sm>✓ IP rights and confidentiality clauses</li>
            <li className=text-sm">✓ DocuSign integration</li>
          </ul>
        </CardContent>
        <CardFooter>
<<<<<<< HEAD

          <Button variant="outline onClick={onStandardClick}>


          <Button variant=outline" onClick={onStandardClick}>

=======
>>>>>>> origin/chore/fix-lint-and-merge

          <Button variant="outline onClick={onStandardClick}>

<ul className='space-y-2>
            <li className=text-sm'>✓ Legally binding templates</li>
            <li className='text-sm>✓ Milestone-based payment terms</li>
            <li className=text-sm'>✓ IP rights and confidentiality clauses</li>
            <li className='text-sm>✓ DocuSign integration</li>
          </ul>
        </CardContent>
        <CardFooter>
<<<<<<< HEAD
:src/components/contracts/page/ContractTypeCards.tsx
          <Button variant=outline" onClick={onStandardClick}>
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader className=bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-t-lg'>
          <div className='flex justify-between items-center>
            <CardTitle className=flex items-center gap-2'>
              <ShieldCheck className='h-5 w-5 text-primary />
              Smart Contracts
            </CardTitle>
            <span className='px-2 py-1 bg-primary/10 text-primary text-xs rounded-full'>              Blockchain Powered      <Card>
          <Button variant='outline' onClick={onStandardClick}>
origin/cursor/automate-test-improve-and-merge-code-2533
=======
          <Button variant='outline' onClick={onStandardClick}>
>>>>>>> origin/chore/fix-lint-and-merge

            Create Standard Contract
          </Button>
        </CardFooter>
      </Card>

        <CardHeader className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-t-lg>
          <div className=flex justify-between items-center">
            <CardTitle className="flex items-center gap-2>
              <ShieldCheck className=h-5 w-5 text-primary" />
              Smart Contracts
            </CardTitle>
            <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full>

<Card>
        <CardHeader className=bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-t-lg'>
          <div className='flex justify-between items-center>
            <CardTitle className=flex items-center gap-2'>
              <ShieldCheck className='h-5 w-5 text-primary />
              Smart Contracts
            </CardTitle>
            <span className=px-2 py-1 bg-primary/10 text-primary text-xs rounded-full'>
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
      
      <Card>



        <CardHeader className=bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-t-lg">
          <div className="flex justify-between items-center>
            <CardTitle className=flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary />
              Smart Contracts
            </CardTitle>
            <span className=px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
=======
>>>>>>> origin/chore/fix-lint-and-merge
              Blockchain Powered
            </span>
          </div>
          <CardDescription>
            Deploy agreements on Ethereum or Polygon with escrow capabilities
          </CardDescription>
        </CardHeader>

          <ul className="space-y-2">
            <li className="text-sm">✓ All standard contract features</li>
            <li className="text-sm">✓ Automatic escrow payment release</li>
            <li className="text-sm">✓ Transaction verification</li>
            <li className="text-sm">✓ Permanent on-chain record</li>
            <li className="text-sm">✓ Multi-signature approval flow</li>
          <ul className="space-y-2>
            <li className=text-sm">✓ All standard contract features</li>
            <li className="text-sm>✓ Automatic escrow payment release</li>
            <li className=text-sm">✓ Transaction verification</li>
            <li className="text-sm>✓ Permanent on-chain record</li>
            <li className=text-sm">✓ Multi-signature approval flow</li>
          </ul>
        </CardContent>
        <CardFooter>

            onClick={onSmartClick}

<<<<<<< HEAD

<ul className='space-y-2>
            <li className=text-sm'>✓ All standard contract features</li>
            <li className='text-sm>✓ Automatic escrow payment release</li>
            <li className=text-sm'>✓ Transaction verification</li>
            <li className='text-sm>✓ Permanent on-chain record</li>
            <li className=text-sm'>✓ Multi-signature approval flow</li>
=======
<ul className='space-y-2'>
            <li className='text-sm'>✓ All standard contract features</li>
            <li className='text-sm'>✓ Automatic escrow payment release</li>
            <li className='text-sm'>✓ Transaction verification</li>
            <li className='text-sm'>✓ Permanent on-chain record</li>
            <li className='text-sm'>✓ Multi-signature approval flow</li>
>>>>>>> origin/chore/fix-lint-and-merge
          </ul>
        </CardContent>
        <CardFooter>
          <Button
            className='w-full bg-gradient-to-r from-blue-600 to-indigo-600
            onClick={onSmartClick}
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/chore/fix-lint-and-merge

          >
            Create Smart Contract
          </Button>
        </CardFooter>
      </Card>
    </div>
<<<<<<< HEAD
:src/components/contracts/page/ContractTypeCards.tsx
  )
}


=======
>>>>>>> origin/chore/fix-lint-and-merge

import { Button } from '@/components/ui/button';
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;
  CardTitle,;
} from '@/components/ui/card';

          <Button 
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600" 
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { FileText, ShieldCheck } from 'lucide-react';
interface ContractTypeCardsProps {;
<<<<<<< HEAD

          <Button 
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 
import { Button } from @/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card,
import { FileText, ShieldCheck } from lucide-react';
interface ContractTypeCardsProps {
  onStandardClick: () => void;
  onSmartClick: () => void;

=======
>>>>>>> origin/chore/fix-lint-and-merge

export function ContractTypeCards(): any ({
  onStandardClick,
  onSmartClick}:,  ContractTypeCardsProps) {
  return (
<<<<<<< HEAD
    <div className='grid md:grid-cols-2 gap-6 mb-10>;
import { Button  } from @/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle  } from '@/components/ui/card;
import { Card;
  CardContent;
  CardDescription;
  CardFooter;
  CardHeader;
  CardTitle;
 } from @/components/ui/card';
import { FileText, ShieldCheck  } from 'lucide-react;
interface ContractTypeCardsProps  {onStandardClick: () => void;
  onSmartClick: () => void;
export function ContractTypeCards() {return (<div className=grid md:grid-cols-2 gap-6 mb-10'>;
      <Card>;
        <CardHeader>;
          <CardTitle className='flex items-center gap-2>;
  onStandardClick: () => void;
  onSmartClick: () => void;
}
export function ContractTypeCards() {return (<div className=grid md:grid-cols-2 gap-6 mb-10">;
      <Card>;
        <CardHeader>;
          <CardTitle className="flex items-center gap-2>;
<CardTitle className=flex items-center gap-2">;
            <FileText className="h-5 w-5 />;
            Standard Contracts;
          </CardTitle>;
          <CardDescription>Generate traditional legal agreements for your projects;
          </CardDescription>;
        </CardHeader>;
        <CardContent>;
          <ul className=space-y-2">;
            <li className="text-sm>✓ Legally binding templates</li>;
            <li className=text-sm">✓ Milestone-based payment terms</li>;
            <li className="text-sm>✓ IP rights and confidentiality clauses</li>;
            <li className=text-sm">✓ DocuSign integration</li>;
          </ul>;
        </CardContent>;
        <CardFooter>;
          <Button variant="outline onClick={onStandardClick}>;
          <Button variant=outline" onClick={onStandardClick}>;
<ul className=space-y-2'>;
            <li className='text-sm>✓ Legally binding templates</li>;
            <li className=text-sm'>✓ Milestone-based payment terms</li>;
            <li className='text-sm>✓ IP rights and confidentiality clauses</li>;
            <li className=text-sm'>✓ DocuSign integration</li>;
          </ul>;
        </CardContent>;
        <CardFooter>;
          <Button variant='outline onClick={onStandardClick}>;
            Create Standard Contract;
          </Button>;
        </CardFooter>;
      </Card>;
      <Card>;
        <CardHeader className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-t-lg>;
          <div className=flex justify-between items-center">;
            <CardTitle className="flex items-center gap-2>;
              <ShieldCheck className=h-5 w-5 text-primary" />;
              Smart Contracts;
            </CardTitle>;
            <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full>;
<Card>;
        <CardHeader className=bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-t-lg'>;
          <div className='flex justify-between items-center>;
            <CardTitle className=flex items-center gap-2'>;
              <ShieldCheck className='h-5 w-5 text-primary />;
              Smart Contracts;
            </CardTitle>;
            <span className=px-2 py-1 bg-primary/10 text-primary text-xs rounded-full'>;
              Blockchain Powered;
            </span>;
          </div>;
          <CardDescription>Deploy agreements on Ethereum or Polygon with escrow capabilities;
          </CardDescription>;
        </CardHeader>;
        <CardContent>;
          <ul className=space-y-2">;
            <li className="text-sm>✓ All standard contract features</li>;
            <li className=text-sm">✓ Automatic escrow payment release</li>;
            <li className="text-sm>✓ Transaction verification</li>;
            <li className=text-sm">✓ Permanent on-chain record</li>;
            <li className="text-sm>✓ Multi-signature approval flow</li>;
          </ul>;
        </CardContent>;
        <CardFooter>;
          <Button;
            className=w-full bg-gradient-to-r from-blue-600 to-indigo-600";
            onClick={onSmartClick}<ul className='space-y-2>;
            <li className=text-sm'>✓ All standard contract features</li>;
            <li className='text-sm>✓ Automatic escrow payment release</li>;
            <li className=text-sm'>✓ Transaction verification</li>;
            <li className='text-sm>✓ Permanent on-chain record</li>;
            <li className=text-sm'>✓ Multi-signature approval flow</li>;
          </ul>;
        </CardContent>;
        <CardFooter>;
          <Button;
            className='w-full bg-gradient-to-r from-blue-600 to-indigo-600;
            onClick={onSmartClick}>;
            Create Smart Contract;
          </Button>;
        </CardFooter>;
      </Card>;
    </div>;
import {Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle} from @/components/ui/card';
          <Button;
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600;
import { Button } from @/components/ui/button",import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card,interface ContractTypeCardsProps  {onStandardClick: () => void;
  onSmartClick: () => void;export function ContractTypeCards(): any ({onStandardClick,onSmartClick}: ContractTypeCardsProps) {return (<div className='grid md:grid-cols-2 gap-6 mb-10>;
=======
    <div className='grid md:grid-cols-2 gap-6 mb-10'>;
>>>>>>> origin/chore/fix-lint-and-merge
      <Card>;
        <CardHeader>;
          <CardTitle className='flex items-center gap-2'>;
            <FileText className='h-5 w-5' />            Standard Contracts;
          <CardTitle className="flex items-center gap-2">;
            <FileText className="h-5 w-5" />;
interface ContractTypeCardsProps {;
  onStandardClick: () => void,;
            <FileText className="h-5 w-5 />;
interface ContractTypeCardsProps {
  onStandardClick: () => void,
  onSmartClick: () => void;
}
export function ContractTypeCards(): any ({ onStandardClick, onSmartClick }:,  ContractTypeCardsProps) {
  return (
<<<<<<< HEAD

=======
>>>>>>> origin/chore/fix-lint-and-merge

    <div className=grid md:grid-cols-2 gap-6 mb-10">;

      <Card>;
        <CardHeader>;
          <CardTitle className="flex items-center gap-2">;
            <FileText className="h-5 w-5" />;

<<<<<<< HEAD
import { Button } from @/components / ui / button';
import { Button } from '@/components/ui/ button;
=======
import { Button } from '@/components / ui / button';
import {
>>>>>>> origin/chore/fix-lint-and-merge
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
<<<<<<< HEAD
  CardTitle} from @/components/ui/ card';
import { FileText, ShieldCheck } from 'lucide-react;
interface ContractTypeCardsProps {
  onStandardClick: () => void;
            <FileText className="h-5 w-5 />;interface ContractTypeCardsProps  {onStandardClick: () => void,onSmartClick: () => void;
}export function ContractTypeCards(): any ({ onStandardClick, onSmartClick }: ContractTypeCardsProps) {return (<div className=grid md:grid-cols-2 gap-6 mb-10">;
      <Card>;
        <CardHeader>;
          <CardTitle className="flex items-center gap-2>;
            <FileText className=h-5 w-5" />;import { Button  } from @/components / ui / button';
import { Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle} from '@/components / ui / card;
interface ContractTypeCardsProps  {onStandardClick: () => void;
  onSmartClick: () => void;
export /**;
 * ContractTypeCards - Function description;
 */;
function ContractTypeCards() {return (<div className=grid md:grid - cols - 2 gap - 6 mb - 10'>;
=======
  CardTitle,
} from '@/components / ui / card';
import { FileText, ShieldCheck } from 'lucide-react';
interface ContractTypeCardsProps {
>>>>>>> origin/chore/fix-lint-and-merge
  onStandardClick: () => void;,
  onSmartClick: () => void;,
export /**
 * ContractTypeCards - Function description
 */
  return (
    <div className='grid md:grid - cols - 2 gap - 6 mb - 10>;
      <Card>;
        <CardHeader>;
<<<<<<< HEAD
          <CardTitle className=flex items - center gap - 2'>;
            <FileText className='h - 5 w - 5 />            Standard Contracts;
          <CardTitle className="flex items - center gap - 2>;
            <FileText className=h - 5 w - 5" />;
interface ContractTypeCardsProps  {onStandardClick: () => void,onSmartClick: () => void;
}
export /**;
 * ContractTypeCards - Function description;
 */;
=======
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
>>>>>>> origin/chore/fix-lint-and-merge
      <Card>;
        <CardHeader>;
          <CardTitle className="flex items - center gap - 2">;
            <FileText className="h - 5 w - 5" />;
            <FileText className=h - 5 w - 5" />;

<<<<<<< HEAD
            Standard Contracts;
            <FileText className="h - 5 w - 5 />;Standard Contracts;
=======
>>>>>>> origin/chore/fix-lint-and-merge
            Standard Contracts;

          </CardTitle>;
          <CardDescription>;
            Generate traditional legal agreements for your projects;
          </CardDescription>;
        </CardHeader>;
        <CardContent>;
<<<<<<< HEAD


          <ul className=space - y-2'>;
        <CardContent>;<ul className='space - y-2>;
            <li className=text - sm'>✓ Legally binding templates</li>;
            <li className='text - sm>✓ Milestone - based payment terms</li>;
            <li className=text - sm'>✓ IP rights and confidentiality clauses</li>;
            <li className='text - sm>✓ DocuSign integration</li>;
=======

          <ul className='space - y-2'>;
            <li className='text - sm'>✓ Legally binding templates</li>;
            <li className='text - sm'>✓ Milestone - based payment terms</li>;
            <li className='text - sm'>✓ IP rights and confidentiality clauses</li>;
            <li className='text - sm'>✓ DocuSign integration</li>;
>>>>>>> origin/chore/fix-lint-and-merge

          </ul>;
        </CardContent>;
        <CardFooter>;

          </Button>;
        </CardFooter>;
      </Card>;
      <Card>;
        <CardHeader className=bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-t-lg">;
          <div className="flex justify-between items-center>;
            <CardTitle className=flex items-center gap-2">;
              <ShieldCheck className="h-5 w-5 text-primary />;
              Smart Contracts;
            </CardTitle>;
<<<<<<< HEAD
            <span className='px - 2 py - 1 bg - primary / 10 text - primary text - xs rounded - full'>              Blockchain Powered      <Card>;
        <CardHeader className="bg - gradient - to - r from - blue - 500 / 10 to - purple - 500 / 10 rounded - t-lg">;
          <div className="flex justify - between items - center">;
            <CardTitle className="flex items - center gap - 2">;
              <ShieldCheck className="h - 5 w - 5 text - primary" />;
              Smart Contracts;
            </CardTitle>;
            <span className="px - 2 py - 1 bg - primary / 10 text - primary text - xs rounded - full">;
            <span className=px - 2 py - 1 bg - primary / 10 text - primary text - xs rounded - full'>              Blockchain Powered      <Card>;
        <CardHeader className=bg - gradient - to - r from - blue - 500 / 10 to - purple - 500 / 10 rounded - t-lg">;
          <div className="flex justify - between items - center>;
            <CardTitle className=flex items - center gap - 2">;
              <ShieldCheck className="h - 5 w - 5 text - primary />;
              Smart Contracts;
            </CardTitle>;
            <span className=px - 2 py - 1 bg - primary / 10 text - primary text - xs rounded - full">;



              Blockchain Powered;
            <span className="px - 2 py - 1 bg - primary / 10 text - primary text - xs rounded - full>;Blockchain Powered;
=======

              Blockchain Powered;
>>>>>>> origin/chore/fix-lint-and-merge
            </span>;
          </div>;
          <CardDescription>;
            Deploy agreements on Ethereum or Polygon with escrow capabilities;
          </CardDescription>;
        </CardHeader>;
        <CardContent>;
<<<<<<< HEAD

          <ul className='space - y-2>;
        <CardContent>;<ul className=space - y-2'>;
=======
>>>>>>> origin/chore/fix-lint-and-merge

          <ul className='space - y-2>;
        <CardFooter>;

          <Button variant=outline' on_click={onStandardClick}>            Create Standard Contract;

          <ul className=space - y-2">;"
            <li className=text - sm>✓ Legally binding templates</li>;""
            <li className=text - sm>✓ Milestone - based payment terms</li>;""
            <li className=text - sm>✓ IP rights and confidentiality clauses</li>;""
            <li className=text - sm>✓ DocuSign integration</li>;"
          <Button variant="outline on_click={onStandardClick}>;

        <CardHeader className='bg - gradient - to - r from - blue - 500 / 10 to - purple - 500 / 10 rounded - t-lg>;

          <div className=flex justify - between items - center'>;

              <ShieldCheck className='h - 5 w - 5 text - primary />;

            <span className=px - 2 py - 1 bg - primary / 10 text - primary text - xs rounded - full'>              Blockchain Powered      <Card>;
        <CardHeader className="bg - gradient - to - r from - blue - 500 / 10 to - purple - 500 / 10 rounded - t-lg">;
          <div className=flex justify - between items - center">;"
              <ShieldCheck className=h - 5 w - 5 text - primary />;"

            ;"
            <span className=px - 2 py - 1 bg - primary / 10 text - primary text - xs rounded - full>;"
            </span>;
          </div>;

pr-12325
            <li className='text - sm>✓ All standard contract features</li>;
            <li className=text - sm'>✓ Automatic escrow payment release</li>;
            <li className='text - sm>✓ Transaction verification</li>;
            <li className=text - sm'>✓ Permanent on - chain record</li>;
            <li className='text - sm>✓ Multi - signature approval flow</li>;
          <ul className="space-y-2>;
            <li className=text-sm">✓ All standard contract features</li>;
            <li className="text-sm>✓ Automatic escrow payment release</li>;
            <li className=text-sm">✓ Transaction verification</li>;
            <li className="text-sm>✓ Permanent on-chain record</li>;
            <li className=text-sm">✓ Multi-signature approval flow</li>;
          </ul>;
        </CardContent>;
        <CardFooter>;
          <Button;
            className=w - full bg - gradient - to - r from - blue - 600 to - indigo - 600'            on_click={onSmartClick}          <ul className="space - y-2>;
            <li className=text - sm">✓ All standard contract features</li>;
            <li className="text - sm>✓ Automatic escrow payment release</li>;
            <li className=text - sm">✓ Transaction verification</li>;
            <li className="text - sm>✓ Permanent on - chain record</li>;
            <li className=text - sm">✓ Multi - signature approval flow</li>;
          </ul>;
        </CardContent>;
        <CardFooter>;
          <Button;
            className="w - full bg - gradient - to - r from - blue - 600 to - indigo - 600";
            on_click = {onSmartClick, }
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600";
            on_click = {onSmartClick}
            className=w-full bg-gradient-to-r from-blue-600 to-indigo-600";
            onClick={onSmartClick}
          >;

<<<<<<< HEAD

=======
>>>>>>> origin/chore/fix-lint-and-merge
            Create Smart Contract;
          </Button>;
        </CardFooter>;
      </Card>;
<<<<<<< HEAD

  );
}

    </div>);
}

  );
}
origin/cursor/automate-test-improve-and-merge-code-2533
            on_click = {onSmartClick }
          >;Create Smart Contract;
          </Button>;
        </CardFooter>;
      </Card>;</div>;
  )}})}</div>)})}
=======
>>>>>>> origin/chore/fix-lint-and-merge
    </div>;
  );
}
}
<<<<<<< HEAD
:src/components/contracts/page/ContractTypeCards.tsx
}
  );
}
origin/cursor/automate-test-improve-and-merge-code-2533
=======

;

;
  );
}
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/chore/fix-lint-and-merge
