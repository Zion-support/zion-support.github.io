<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/contracts/page/ContractTypeCards.tsx

<<<<<<< HEAD

=======
=======
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { FileText, ShieldCheck } from 'lucide-react'

<<<<<<< HEAD

export function ContractTypeCards({ onStandardClick, onSmartClick }: ContractTypeCardsProps) {
<<<<<<< HEAD

=======
interface ContractTypeCardsProps {
  onStandardClick: () => void,
  onSmartClick: () => void
}

export function ContractTypeCards({ onStandardClick, onSmartClick }: ContractTypeCardsProps) {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-10">
      <Card>
        <CardHeader>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>   return (
    <div className="grid md:grid-cols-2 gap-6 mb-10">
      <Card>
        <CardHeader>
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <CardTitle className='flex items-center gap-2'>
            <FileText className='h-5 w-5' />            Standard Contracts
          <CardTitle className="flex items-center gap-2">
=======
<CardTitle className="flex items-center gap-2">
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            <FileText className="h-5 w-5" />
<<<<<<< HEAD
========
<<<<<<< HEAD
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, ShieldCheck } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/page/ContractTypeCards.tsx
interface ContractTypeCardsProps {
  onStandardClick: () => void
=======
interface ContractTypeCardsProps {

  onStandardClick: () => void

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  onSmartClick: () => void
}
export function ContractTypeCards({ onStandardClick, onSmartClick }: ContractTypeCardsProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-10">
      <Card>
        <CardHeader>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>           <CardTitle className="flex items-center gap-2">
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          <CardTitle className="flex items-center gap-2">
>>>>>>>             <FileText className="h-5 w-5" />
=======
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            Standard Contracts
          </CardTitle>
          <CardDescription>
            Generate traditional legal agreements for your projects
          </CardDescription>
        </CardHeader>
        <CardContent>
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/contracts/page/ContractTypeCards.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <ul className="space-y-2">
            <li className="text-sm">✓ Legally binding templates</li>
            <li className="text-sm">✓ Milestone-based payment terms</li>
            <li className="text-sm">✓ IP rights and confidentiality clauses</li>
            <li className="text-sm">✓ DocuSign integration</li>
          </ul>
        </CardContent>
        <CardFooter>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <Button variant='outline' onClick={onStandardClick}>            Create Standard Contract
          </Button>
        </CardFooter>
      </Card>
<<<<<<< HEAD
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/page/ContractTypeCards.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/contracts/page/ContractTypeCards.tsx
========
            Create Standard Contract
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/page/ContractTypeCards.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </Button>
        </CardFooter>
      </Card>
      <Card>
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/contracts/page/ContractTypeCards.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <CardHeader className='bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-t-lg'>
          <div className='flex justify-between items-center'>
            <CardTitle className='flex items-center gap-2'>
              <ShieldCheck className='h-5 w-5 text-primary' />
              Smart Contracts
            </CardTitle>
            <span className='px-2 py-1 bg-primary/10 text-primary text-xs rounded-full'>              Blockchain Powered      <Card>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>         <CardHeader className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-t-lg">
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/page/ContractTypeCards.tsx
        <CardHeader className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-t-lg">
>>>>>>>           <div className="flex justify-between items-center">
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          <Button variant="outline" onClick={onStandardClick}>
            Create Standard Contract
          </Button>
        </CardFooter>
      </Card>
      
      <Card>
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        <CardHeader className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-t-lg">
          <div className="flex justify-between items-center">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<<< HEAD:src/components/contracts/page/ContractTypeCards.tsx

          <ul className="space-y-2">

========
          <ul className="space-y-2">
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/page/ContractTypeCards.tsx
=======
          <ul className="space-y-2">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<<< HEAD:src/components/contracts/page/ContractTypeCards.tsx
<<<<<<< HEAD

=======
    </div>
  )
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          <Button 
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600" 
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
========
          <Button 
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600" 
            onClick={onSmartClick}
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          >
            Create Smart Contract
          </Button>
        </CardFooter>
      </Card>
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
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/page/ContractTypeCards.tsx
=======
<<<<<<< HEAD
    </div>
  )
}
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          <Button 
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600" 
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
import { FileText, ShieldCheck } from 'lucide-react';
interface ContractTypeCardsProps {;
  onStandardClick: () => void;
  onSmartClick: () => void;
<<<<<<< HEAD
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
=======

import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { FileText, ShieldCheck } from 'lucide-react';
;
interface ContractTypeCardsProps {;
  onStandardClick:() => void,;
  onSmartClick:() => void;
}
;
export function ContractTypeCards({ onStandardClick, onSmartClick } ContractTypeCardsProps) {;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
}
;
export function ContractTypeCards({ onStandardClick, onSmartClick }: ContractTypeCardsProps) {;
  return (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <div className="grid md:grid-cols-2 gap-6 mb-10">;
      <Card>;
        <CardHeader>;
          <CardTitle className="flex items-center gap-2">;
            <FileText className="h-5 w-5" />;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/contracts/page/ContractTypeCards.tsx
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/page/ContractTypeCards.tsx
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            Standard Contracts;
          </CardTitle>;
          <CardDescription>;
            Generate traditional legal agreements for your projects;
          </CardDescription>;
        </CardHeader>;
        <CardContent>;
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/contracts/page/ContractTypeCards.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/page/ContractTypeCards.tsx
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
<<<<<<<< HEAD:src/components/contracts/page/ContractTypeCards.tsx

========
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
          </Button>;
        </CardFooter>;
      </Card>;
<<<<<<< HEAD
      ;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <Card>;
        <CardHeader className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-t-lg">;
          <div className="flex justify-between items-center">;
            <CardTitle className="flex items-center gap-2">;
              <ShieldCheck className="h-5 w-5 text-primary" />;
              Smart Contracts;
            </CardTitle>;
            <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">;
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/page/ContractTypeCards.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              Blockchain Powered;
            </span>;
          </div>;
          <CardDescription>;
            Deploy agreements on Ethereum or Polygon with escrow capabilities;
          </CardDescription>;
        </CardHeader>;
        <CardContent>;
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/contracts/page/ContractTypeCards.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/page/ContractTypeCards.tsx
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
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <ul className="space-y-2">;
            <li className="text-sm">✓ All standard contract features</li>;
            <li className="text-sm">✓ Automatic escrow payment release</li>;
            <li className="text-sm">✓ Transaction verification</li>;
            <li className="text-sm">✓ Permanent on-chain record</li>;
            <li className="text-sm">✓ Multi-signature approval flow</li>;
          </ul>;
        </CardContent>;
        <CardFooter>;
<<<<<<< HEAD
          <Button ;
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600" ;
            onClick={onSmartClick}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          >;
<<<<<<<< HEAD:src/components/contracts/page/ContractTypeCards.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/page/ContractTypeCards.tsx
=======
          <Button;
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600";
            onClick={onSmartClick}
          >;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            Create Smart Contract;
          </Button>;
        </CardFooter>;
      </Card>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/contracts/page/ContractTypeCards.tsx

    </div>;
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/page/ContractTypeCards.tsx
  );
};
}
<<<<<<<< HEAD:src/components/contracts/page/ContractTypeCards.tsx

<<<<<<< HEAD
=======
>>>>>>>     </div>;
  );
};
}
}
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
    </div>);
}
=======
    </div>;
  ),;}
 import {;
  {;
  {;
  FileText, ShieldCheck ;
}from 'lucide-react' interface ContractTypeCardsProps {;
  onStandardClick: () => void;
onSmartClick: () => void ;
}export function ContractTypeCards ({;
  onStandardClick, onSmartClick ;
}: ContractTypeCardsProps) {;
  return (<div className="grid md:grid-cols-2 gap-6 mb-10" > flex items-center gap-2"> <FileText className=" h-5 w-5"/> Standard Contracts </CardTitle> <CardDescription> Generate traditional legal agreements for your projects </CardDescription> </CardHeader> <CardContent> <ul className=" space-y-2"> <li className=" text-sm">✓ Legally binding templates</li> <li className=" text-sm">✓ Milestone-based payment terms</li> <li className=" text-sm">✓ IP rights and confidentiality clauses</li> <li className=" text-sm">✓ DocuSign integration</li> </ul> </CardContent> <CardFooter> <Button variant=" outline"onClick={;
  onStandardClick ";
}> Create Standard Contract </Button> </CardFooter> </Card> <Card> <CardHeader className=" bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-t-lg"> <div className=" flex justify-between items-center"> <CardTitle className=" flex items-center gap-2"> <ShieldCheck className=" h-5 w-5 text-primary"/> Smart Contracts </CardTitle> <span className=" px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"> Blockchain Powered </span> </div> <CardDescription> Deploy agreements on Ethereum or Polygon with escrow capabilities </CardDescription> </CardHeader> <CardContent> <ul className=" space-y-2"> <li className=" text-sm">✓ All standard contract features</li> <li className=" text-sm">✓ Automatic escrow payment release</li> <li className=" text-sm">✓ Transaction verification</li> <li className=" text-sm">✓ Permanent on-chain record</li> <li className=" text-sm" >✓ Multi-signature approval flow</li> </ul> </CardContent> <CardFooter> <Button > Create Smart Contract </Button> </CardFooter> </Card> </div>) ;
}'"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/page/ContractTypeCards.tsx
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    </div>;
  );
};
}
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
    </div>);
}

;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
