

:src_backup/components/contracts/page/ContractTypeCards.tsx
:src/components/contracts/page/ContractTypeCards.tsx
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
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { FileText, ShieldCheck } from 'lucide-react'
:src_backup/components/contracts/page/ContractTypeCards.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {


:src_backup/components/contracts/page/ContractTypeCards.tsx
origin/cursor/automate-test-improve-and-merge-code-2533


:src_backup/components/contracts/page/ContractTypeCards.tsx
          <CardTitle className="flex items-center gap-2">
:src_backup/components/contracts/page/ContractTypeCards.tsx
<CardTitle className="flex items-center gap-2">


<CardTitle className="flex items-center gap-2">
          <CardTitle className="flex items-center gap-2">
<CardTitle className="flex items-center gap-2">
          <CardTitle className=flex items-center gap-2">
<CardTitle className="flex items-center gap-2>


<CardTitle className=flex items-center gap-2">



          <ul className=space-y-2">
            <li className="text-sm>✓ Legally binding templates</li>
            <li className=text-sm">✓ Milestone-based payment terms</li>
            <li className="text-sm>✓ IP rights and confidentiality clauses</li>
            <li className=text-sm">✓ DocuSign integration</li>
          </ul>
        </CardContent>
        <CardFooter>


:src_backup/components/contracts/page/ContractTypeCards.tsx



:src_backup/components/contracts/page/ContractTypeCards.tsx

          <Button variant="outline" onClick={onStandardClick}>


          <Button variant="outline" onClick={onStandardClick}>

:src_backup/components/contracts/page/ContractTypeCards.tsx

:src/components/contracts/page/ContractTypeCards.tsx
          <Button variant="outline" onClick={onStandardClick}>
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
          <Button variant='outline' onClick={onStandardClick}>
:src_backup/components/contracts/page/ContractTypeCards.tsx
:src_backup/components/contracts/page/ContractTypeCards.tsx


:src_backup/components/contracts/page/ContractTypeCards.tsx
      
      <Card>



        <CardHeader className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-t-lg">
          <div className="flex justify-between items-center">
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary" />
              Smart Contracts
            </CardTitle>
            <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
:src_backup/components/contracts/page/ContractTypeCards.tsx


:src_backup/components/contracts/page/ContractTypeCards.tsx


<ul className='space-y-2>
            <li className=text-sm'>✓ All standard contract features</li>
            <li className='text-sm>✓ Automatic escrow payment release</li>
            <li className=text-sm'>✓ Transaction verification</li>
            <li className='text-sm>✓ Permanent on-chain record</li>
            <li className=text-sm'>✓ Multi-signature approval flow</li>


:src_backup/components/contracts/page/ContractTypeCards.tsx
origin/cursor/automate-test-improve-and-merge-code-2533
:src_backup/components/contracts/page/ContractTypeCards.tsx

:src_backup/components/contracts/page/ContractTypeCards.tsx

:src_backup/components/contracts/page/ContractTypeCards.tsx

          <Button 
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600" 
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { FileText, ShieldCheck } from 'lucide-react';
interface ContractTypeCardsProps {;
:src_backup/components/contracts/page/ContractTypeCards.tsx
  onStandardClick: () => void;
  onSmartClick: () => void;
:src_backup/components/contracts/page/ContractTypeCards.tsx


    <div className='grid md:grid-cols-2 gap-6 mb-10'>;
;
import { Button  } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle  } from '@/components/ui/card';
    <div className='grid md:grid-cols-2 gap-6 mb-10'>;
    <div className='grid md:grid-cols-2 gap-6 mb-10>;
import { Button  } from @/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle  } from '@/components/ui/card;
import { Card;
  CardContent;
  CardDescription;
  CardFooter;
  CardHeader;
  CardTitle;
 } from '@/components/ui/card';
import { FileText, ShieldCheck  } from 'lucide-react';
interface ContractTypeCardsProps  {onStandardClick: () => void;
  onSmartClick: () => void;
export function ContractTypeCards() {return (<div className='grid md:grid-cols-2 gap-6 mb-10'>;
      <Card>;
        <CardHeader>;
          <CardTitle className='flex items-center gap-2'>;
  onStandardClick: () => void;
  onSmartClick: () => void;
}
export function ContractTypeCards() {return (<div className="grid md:grid-cols-2 gap-6 mb-10">;
      <Card>;
        <CardHeader>;
          <CardTitle className="flex items-center gap-2">;
            <FileText className="h-5 w-5" />;
            Standard Contracts;
          </CardTitle>;
          <CardDescription>Generate traditional legal agreements for your projects;
          </CardDescription>;
        </CardHeader>;
        <CardContent>;
          <ul className="space-y-2">;
            <li className="text-sm">✓ Legally binding templates</li>;
            <li className="text-sm">✓ Milestone-based payment terms</li>;
            <li className="text-sm">✓ IP rights and confidentiality clauses</li>;
            <li className="text-sm">✓ DocuSign integration</li>;
          </ul>;
        </CardContent>;
        <CardFooter>;
          <Button variant="outline" onClick={onStandardClick}>;
<ul className='space-y-2'>;
            <li className='text-sm'>✓ Legally binding templates</li>;
            <li className='text-sm'>✓ Milestone-based payment terms</li>;
            <li className='text-sm'>✓ IP rights and confidentiality clauses</li>;
            <li className='text-sm'>✓ DocuSign integration</li>;
          </ul>;
        </CardContent>;
        <CardFooter>;
          <Button variant='outline' onClick={onStandardClick}>;
            Create Standard Contract;
          </Button>;
        </CardFooter>;
      </Card>;
      <Card>;
        <CardHeader className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-t-lg">;
          <div className="flex justify-between items-center">;
            <CardTitle className="flex items-center gap-2">;
              <ShieldCheck className="h-5 w-5 text-primary" />;
              Smart Contracts;
            </CardTitle>;
            <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">;
<Card>;
        <CardHeader className='bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-t-lg'>;
          <div className='flex justify-between items-center'>;
            <CardTitle className='flex items-center gap-2'>;
              <ShieldCheck className='h-5 w-5 text-primary' />;
              Smart Contracts;
            </CardTitle>;
            <span className='px-2 py-1 bg-primary/10 text-primary text-xs rounded-full'>;
              Blockchain Powered;
            </span>;
          </div>;
          <CardDescription>Deploy agreements on Ethereum or Polygon with escrow capabilities;
          </CardDescription>;
        </CardHeader>;
        <CardContent>;
          <ul className="space-y-2">;
            <li className="text-sm">✓ All standard contract features</li>;
            <li className="text-sm">✓ Automatic escrow payment release</li>;
            <li className="text-sm">✓ Transaction verification</li>;
            <li className="text-sm">✓ Permanent on-chain record</li>;
            <li className="text-sm">✓ Multi-signature approval flow</li>;
          </ul>;
        </CardContent>;
        <CardFooter>;
          <Button;
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600";
            onClick={onSmartClick}<ul className='space-y-2'>;
            <li className='text-sm'>✓ All standard contract features</li>;
            <li className='text-sm'>✓ Automatic escrow payment release</li>;
            <li className='text-sm'>✓ Transaction verification</li>;
            <li className='text-sm'>✓ Permanent on-chain record</li>;
            <li className='text-sm'>✓ Multi-signature approval flow</li>;
          </ul>;
        </CardContent>;
        <CardFooter>;
          <Button;
            className='w-full bg-gradient-to-r from-blue-600 to-indigo-600';
            onClick={onSmartClick}>;
            Create Smart Contract;
          </Button>;
        </CardFooter>;
      </Card>;
    </div>;
import {Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle} from '@/components/ui/card';
          <Button;
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600";
import { Button } from "@/components/ui/button",import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",interface ContractTypeCardsProps  {onStandardClick: () => void;
  onSmartClick: () => void;export function ContractTypeCards(): any ({onStandardClick,onSmartClick}: ContractTypeCardsProps) {return (<div className='grid md:grid-cols-2 gap-6 mb-10'>;
:src_backup/components/contracts/page/ContractTypeCards.tsx
            <FileText className="h-5 w-5" />;
interface ContractTypeCardsProps {;
  onStandardClick: () => void,;
:src_backup/components/contracts/page/ContractTypeCards.tsx



    <div className="grid md:grid-cols-2 gap-6 mb-10">;

      <Card>;
        <CardHeader>;
          <CardTitle className="flex items-center gap-2">;
            <FileText className="h-5 w-5" />;
:src_backup/components/contracts/page/ContractTypeCards.tsx

import { Button } from '@/components / ui / button';
import { Button } from '@/components/ui/ button';
import {



  CardTitle,
} from '@/components/ui/ card';
import { FileText, ShieldCheck } from 'lucide-react';
interface ContractTypeCardsProps {
:src_backup/components/contracts/page/ContractTypeCards.tsx
  CardTitle,
} from '@/components / ui / card';
import { FileText, ShieldCheck } from 'lucide-react';
interface ContractTypeCardsProps {
  CardTitle} from @/components/ui/ card';
import { FileText, ShieldCheck } from 'lucide-react;
interface ContractTypeCardsProps {
  onStandardClick: () => void;
            <FileText className="h-5 w-5" />;interface ContractTypeCardsProps  {onStandardClick: () => void,onSmartClick: () => void;
}export function ContractTypeCards(): any ({ onStandardClick, onSmartClick }: ContractTypeCardsProps) {return (<div className="grid md:grid-cols-2 gap-6 mb-10">;
      <Card>;
        <CardHeader>;
          <CardTitle className="flex items-center gap-2">;
            <FileText className="h-5 w-5" />;import { Button  } from '@/components / ui / button';
import { Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle} from '@/components / ui / card';
interface ContractTypeCardsProps  {onStandardClick: () => void;
  onSmartClick: () => void;
export /**;
 * ContractTypeCards - Function description;
 */;
function ContractTypeCards() {return (<div className='grid md:grid - cols - 2 gap - 6 mb - 10'>;


          <CardTitle className='flex items - center gap - 2'>;
            <FileText className='h - 5 w - 5' />            Standard Contracts;
          <CardTitle className="flex items - center gap - 2">;
            <FileText className="h - 5 w - 5" />;
          <CardTitle className=flex items - center gap - 2'>;
            <FileText className='h - 5 w - 5 />            Standard Contracts;
          <CardTitle className="flex items - center gap - 2>;
            <FileText className=h - 5 w - 5" />;
interface ContractTypeCardsProps  {onStandardClick: () => void,onSmartClick: () => void;
}
export /**;
 * ContractTypeCards - Function description;
 */;
function ContractTypeCards() {return (<div className="grid md:grid - cols - 2 gap - 6 mb - 10">;
      <Card>;
        <CardHeader>;
          <CardTitle className="flex items - center gap - 2">;
:src_backup/components/contracts/page/ContractTypeCards.tsx
            <FileText className="h - 5 w - 5" />;

:src_backup/components/contracts/page/ContractTypeCards.tsx
            Standard Contracts;
            <FileText className="h - 5 w - 5" />;Standard Contracts;


            Standard Contracts;
            <FileText className="h - 5 w - 5 />;Standard Contracts;
:src_backup/components/contracts/page/ContractTypeCards.tsx
        <CardContent>;
:src_backup/components/contracts/page/ContractTypeCards.tsx


          <ul className='space - y-2'>;
        <CardContent>;<ul className='space - y-2'>;


:src_backup/components/contracts/page/ContractTypeCards.tsx

              Blockchain Powered;
            <span className='px - 2 py - 1 bg - primary / 10 text - primary text - xs rounded - full'>              Blockchain Powered      <Card>;
        <CardHeader className="bg - gradient - to - r from - blue - 500 / 10 to - purple - 500 / 10 rounded - t-lg">;
          <div className="flex justify - between items - center">;
            <CardTitle className="flex items - center gap - 2">;
              <ShieldCheck className="h - 5 w - 5 text - primary" />;
              Smart Contracts;
            </CardTitle>;
:src_backup/components/contracts/page/ContractTypeCards.tsx
            <span className="px - 2 py - 1 bg - primary / 10 text - primary text - xs rounded - full">;

:src_backup/components/contracts/page/ContractTypeCards.tsx


              Blockchain Powered;
            <span className="px - 2 py - 1 bg - primary / 10 text - primary text - xs rounded - full">;Blockchain Powered;
:src_backup/components/contracts/page/ContractTypeCards.tsx
        <CardContent>;
:src_backup/components/contracts/page/ContractTypeCards.tsx

          <ul className='space - y-2'>;
        <CardContent>;<ul className='space - y-2'>;

:src_backup/components/contracts/page/ContractTypeCards.tsx
            on_click = {onSmartClick, }
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600";
            onClick={onSmartClick}
          >;

:src_backup/components/contracts/page/ContractTypeCards.tsx


            Create Smart Contract;
          </Button>;
        </CardFooter>;
      </Card>;
:src_backup/components/contracts/page/ContractTypeCards.tsx



:src/components/contracts/page/ContractTypeCards.tsx
}

;

;
  );
}
:src_backup/components/contracts/page/ContractTypeCards.tsx
