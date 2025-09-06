<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,;
} from '@/components/ui/card';
import { FileText, ShieldCheck } from 'lucide-react';
<<<<<<< HEAD
=======
=======

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, ShieldCheck } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

interface ContractTypeCardsProps {
  onStandardClick: () => void;
  onSmartClick: () => void;

export function ContractTypeCards({
  onStandardClick,
  onSmartClick,
}: ContractTypeCardsProps) {
  return (
    <div className='grid md:grid-cols-2 gap-6 mb-10'>
      <Card>
        <CardHeader>
<<<<<<< HEAD
          <CardTitle className='flex items-center gap-2'>
            <FileText className='h-5 w-5' />            Standard Contracts
=======
<<<<<<< HEAD
          <CardTitle className='flex items-center gap-2'>
            <FileText className='h-5 w-5' />
=======

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, ShieldCheck } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';

interface ContractTypeCardsProps {
  onStandardClick: () => void,
  onSmartClick: () => void
}

export function ContractTypeCards({ onStandardClick, onSmartClick }: ContractTypeCardsProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-10">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            Standard Contracts
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          </CardTitle>
          <CardDescription>
            Generate traditional legal agreements for your projects
          </CardDescription>
        </CardHeader>
        <CardContent>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          <ul className='space-y-2'>
            <li className='text-sm'>✓ Legally binding templates</li>
            <li className='text-sm'>✓ Milestone-based payment terms</li>
            <li className='text-sm'>✓ IP rights and confidentiality clauses</li>
            <li className='text-sm'>✓ DocuSign integration</li>
          </ul>
        </CardContent>
        <CardFooter>
<<<<<<< HEAD
          <Button variant='outline' onClick={onStandardClick}>            Create Standard Contract
          </Button>
        </CardFooter>
      </Card>

=======
          <Button variant='outline' onClick={onStandardClick}>
=======
          <ul className="space-y-2">
            <li className="text-sm">✓ Legally binding templates</li>
            <li className="text-sm">✓ Milestone-based payment terms</li>
            <li className="text-sm">✓ IP rights and confidentiality clauses</li>
            <li className="text-sm">✓ DocuSign integration</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button variant="outline" onClick={onStandardClick}>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <ul className="space-y-2">
            <li className="text-sm">✓ Legally binding templates</li>
            <li className="text-sm">✓ Milestone-based payment terms</li>
            <li className="text-sm">✓ IP rights and confidentiality clauses</li>
            <li className="text-sm">✓ DocuSign integration</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button variant="outline" onClick={onStandardClick}>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            Create Standard Contract
          </Button>
        </CardFooter>
      </Card>
<<<<<<< HEAD
<<<<<<< HEAD

=======
      
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      <Card>
        <CardHeader className='bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-t-lg'>
          <div className='flex justify-between items-center'>
            <CardTitle className='flex items-center gap-2'>
              <ShieldCheck className='h-5 w-5 text-primary' />
              Smart Contracts
            </CardTitle>
<<<<<<< HEAD
            <span className='px-2 py-1 bg-primary/10 text-primary text-xs rounded-full'>              Blockchain Powered
=======
<<<<<<< HEAD
            <span className='px-2 py-1 bg-primary/10 text-primary text-xs rounded-full'>
=======
      
      <Card>
        <CardHeader className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-t-lg">
          <div className="flex justify-between items-center">
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary" />
              Smart Contracts
            </CardTitle>
            <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              Blockchain Powered
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            </span>
          </div>
          <CardDescription>
            Deploy agreements on Ethereum or Polygon with escrow capabilities
          </CardDescription>
        </CardHeader>
        <CardContent>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
<<<<<<< HEAD
            className='w-full bg-gradient-to-r from-blue-600 to-indigo-600'            onClick={onSmartClick}
=======
            className='w-full bg-gradient-to-r from-blue-600 to-indigo-600'
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
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
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            onClick={onSmartClick}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          >
            Create Smart Contract
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
