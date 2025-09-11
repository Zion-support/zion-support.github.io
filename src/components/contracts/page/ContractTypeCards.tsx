<<<<<<< HEAD
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


import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { FileText, ShieldCheck } from 'lucide-react'

interface ContractTypeCardsProps {
  onStandardClick: () => void,
  onSmartClick: () => void
}

export function ContractTypeCards({ onStandardClick, onSmartClick }: ContractTypeCardsProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-10">
      <Card>
        <CardHeader>
    <div className="grid md:grid-cols-2 gap-6 mb-10">
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <FileText className='h-5 w-5' />            Standard Contracts
          <CardTitle className="flex items-center gap-2">
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
          <CardTitle className="flex items-center gap-2">
=======
<CardTitle className="flex items-center gap-2">
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <FileText className="h-5 w-5" />
=======
<CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <ul className="space-y-2">
            <li className="text-sm">✓ Legally binding templates</li>
            <li className="text-sm">✓ Milestone-based payment terms</li>
            <li className="text-sm">✓ IP rights and confidentiality clauses</li>
            <li className="text-sm">✓ DocuSign integration</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button variant='outline' onClick={onStandardClick}>            Create Standard Contract
          </Button>
        </CardFooter>
      </Card>
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
            Create Standard Contract
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
        <CardHeader className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-t-lg">


          <Button variant="outline" onClick={onStandardClick}>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


          <Button variant="outline" onClick={onStandardClick}>

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            Create Standard Contract
          </Button>
        </CardFooter>
      </Card>
      
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
<<<<<<< HEAD
<<<<<<< HEAD
          <ul className="space-y-2">
          <ul className="space-y-2">
=======

          <ul className="space-y-2">

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

          <ul className="space-y-2">

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
    </div>
  )
}
          <Button 
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600" 
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
          <Button 
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600" 
            onClick={onSmartClick}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

          <Button 
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600" 
            onClick={onSmartClick}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          >
            Create Smart Contract
          </Button>
        </CardFooter>
      </Card>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  onStandardClick: () => void;
  onSmartClick: () => void;

<<<<<<< HEAD
<<<<<<< HEAD
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
}
;
export function ContractTypeCards({ onStandardClick, onSmartClick }: ContractTypeCardsProps) {;
  return (;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <div className="grid md:grid-cols-2 gap-6 mb-10">;
      <Card>;
        <CardHeader>;
          <CardTitle className="flex items-center gap-2">;
            <FileText className="h-5 w-5" />;
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
            Standard Contracts;
          </CardTitle>;
          <CardDescription>;
            Generate traditional legal agreements for your projects;
          </CardDescription>;
        </CardHeader>;
        <CardContent>;
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </Button>;
        </CardFooter>;
      </Card>;
      <Card>;
<<<<<<< HEAD
<<<<<<< HEAD
        <CardHeader className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-t-lg">;
          <div className="flex justify-between items-center">;
            <CardTitle className="flex items-center gap-2">;
              <ShieldCheck className="h-5 w-5 text-primary" />;
              Smart Contracts;
            </CardTitle>;
            <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
          <ul className="space-y-2">;
            <li className="text-sm">✓ All standard contract features</li>;
            <li className="text-sm">✓ Automatic escrow payment release</li>;
            <li className="text-sm">✓ Transaction verification</li>;
            <li className="text-sm">✓ Permanent on-chain record</li>;
            <li className="text-sm">✓ Multi-signature approval flow</li>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          <ul className='space - y-2'>;
            <li className='text - sm'>✓ All standard contract features</li>;
            <li className='text - sm'>✓ Automatic escrow payment release</li>;
            <li className='text - sm'>✓ Transaction verification</li>;
            <li className='text - sm'>✓ Permanent on - chain record</li>;
            <li className='text - sm'>✓ Multi - signature approval flow</li>;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </ul>;
        </CardContent>;
        <CardFooter>;
          <Button;
<<<<<<< HEAD
<<<<<<< HEAD
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600";
            onClick={onSmartClick}
          >;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            Create Smart Contract;
          </Button>;
        </CardFooter>;
      </Card>;
<<<<<<< HEAD
<<<<<<< HEAD
  );
};
}
  );
};
}
}
    </div>);
}
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    </div>;
  );
};
}
<<<<<<< HEAD
}
;
    </div>);
}

;
=======

  );
}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    </div>);
}

<<<<<<< HEAD
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
