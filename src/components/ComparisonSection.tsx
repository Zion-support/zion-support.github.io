<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/ComparisonSection.tsx

<<<<<<< HEAD
=======
import { GradientHeading } from "./GradientHeading",
import { Button } from "./ui/button";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

import { GradientHeading } from "./GradientHeading",
import { Button } from "./ui/button";
import { GradientHeading } from './GradientHeading'
import { Button } from './ui/button'
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { CheckCircle2 } from 'lucide-react'

import {
  Table
  TableBody
  TableCell
  TableHead
  TableHeader
  TableRow
} from './ui/table'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

export function ComparisonSection() {
=======
xport function ComparisonSection() {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export function ComparisonSection() {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <section className='py-20 bg-zion-blue-dark'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <GradientHeading>Compare & Save</GradientHeading>
          <p className='mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto'>
            See how Zion can drastically reduce your IT costs compared to
            traditional providers
          </p>
        </div>
        <div className='max-w-4xl mx-auto'>
          <div className='bg-zion-blue-light rounded-lg border border-zion-purple/20 overflow-hidden'>
            <Table>
              <TableHeader>
                <TableRow className='border-b border-zion-purple/20'>
                  <TableHead className='text-white'>Service</TableHead>
                  <TableHead className='text-white text-center'>
                    Traditional Providers
                  </TableHead>
                  <TableHead className='text-white text-center'>
                    With Zion
                  </TableHead>
                  <TableHead className='text-white text-center'>
                    Savings
                  </TableHead>                </TableRow>
              </TableHeader>
              <TableBody>
                {[                <TableRow className="border-b border-zion-purple/20">
<<<<<<< HEAD
<<<<<<< HEAD
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/ComparisonSection.tsx
import { GradientHeading } from "./GradientHeading";
import { Button } from "./ui/button";
import { CheckCircle2 } from 'lucide-react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
export function ComparisonSection() {
  return (
    <section className="py-20 bg-zion-blue-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <GradientHeading>Compare & Save</GradientHeading>
          <p className="mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto">
            See how Zion can drastically reduce your IT costs compared to traditional providers
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-zion-blue-light rounded-lg border border-zion-purple/20 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-zion-purple/20">
<<<<<<<< HEAD:src/components/ComparisonSection.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/ComparisonSection.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  <TableHead className="text-white">Service</TableHead>
                  <TableHead className="text-white text-center">Traditional Providers</TableHead>
                  <TableHead className="text-white text-center">With Zion</TableHead>
                  <TableHead className="text-white text-center">Savings</TableHead>
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/ComparisonSection.tsx
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </TableHeader>
              <TableBody>
                {[
                  {
                    service: 'Server Hosting'
                    traditional: '$1,200/mo'
                    zion: '$650/mo'
                    savings: '45%'
                  }
<<<<<<< HEAD
=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/ComparisonSection.tsx
import { GradientHeading } from './GradientHeading';
import { Button } from './ui / button';
import { CheckCircle2 } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui / table';
export /**
 * ComparisonSection - Function description
 */
function ComparisonSection() {
  return (
    <section className='py - 20 bg - zion - blue - dark'>;
      <div className='container mx - auto px - 4 sm:px - 6 lg:px - 8'>;
        <div className='text - center mb - 12'>;
          <GradientHeading > Compare & Save</GradientHeading>;
          <p className='mt - 4 text - zion - slate - light text - xl max - w-2xl mx - auto'>;
            See how Zion can drastically reduce your IT costs compared to;
            traditional providers;
          </p>;
        </div>;
        <div className='max - w-4xl mx - auto'>;
          <div className='bg - zion - blue - light rounded - lg border border - zion - purple / 20 overflow - hidden'>;
            <Table>;
              <TableHeader>;
                <TableRow className='border - b border - zion - purple / 20'>;
                  <TableHead className='text - white'>Service</TableHead>;
                  <TableHead className='text - white text - center'>;
                    Traditional Providers;
                  </TableHead>;
                  <TableHead className='text - white text - center'>;
                    With Zion;
                  </TableHead>;
                  <TableHead className='text - white text - center'>;
                    Savings;
                  </TableHead>                </TableRow>;
              </TableHeader>;
              <TableBody>;
                {[                <TableRow className="border - b border - zion - purple / 20">;
                  <TableHead className="text - white">Service</TableHead>;
                  <TableHead className="text - white text - center">Traditional Providers</TableHead>;
                  <TableHead className="text - white text - center">With Zion</TableHead>;
                  <TableHead className="text - white text - center">Savings</TableHead>;
              </TableHeader>;
              <TableBody>;
                {[;
                  {
                    service: 'Server Hosting',
                    traditional: '$1, 200 / mo',
                    zion: '$650 / mo',
                    savings: '45%',
                  },
<<<<<<<< HEAD:src/components/ComparisonSection.tsx

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/ComparisonSection.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  {
                    service: 'IT Equipment'
                    traditional: 'Full Purchase'
                    zion: 'Flexible Rental'
                    savings: '60%'
                  }
                  {
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/ComparisonSection.tsx
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    service: '24/7 Support'
                    traditional: '$2,500/mo'
                    zion: '$950/mo'
                    savings: '62%'
                  }
                  {
                    service: 'Storage Solutions'
                    traditional: '$800/mo'
                    zion: '$350/mo'
                    savings: '56%'
                  }
                  {
                    service: 'Marketplace Listings'
                    traditional: '$99/mo'
                    zion: 'Free'
                    savings: '100%'
                  }
                ].map((item, index) => (
                  <TableRow key={index} className='border-b border-zion-blue'>
                    <TableCell className='font-medium text-white'>
                      {item.service}
                    </TableCell>
                    <TableCell className='text-center text-zion-slate-light'>
                      {item.traditional}
                    </TableCell>
                    <TableCell className='text-center text-zion-cyan font-semibold'>
                      {item.zion}
                    </TableCell>
                    <TableCell className='text-center text-green-400 font-bold'>
                      {item.savings}
                    </TableCell>                  </TableRow>
                  { service: "Marketplace Listings", traditional: "$99/mo", zion: "Free", savings: "100%" }].map((item, index) => (                  { service: "Marketplace Listings", traditional: "$99/mo", zion: "Free", savings: "100%" }].map((item, index) => (
<<<<<<< HEAD
=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/ComparisonSection.tsx
                    service: '24 / 7 Support',
                    traditional: '$2, 500 / mo',
                    zion: '$950 / mo',
                    savings: '62%',
                  },
                  {
                    service: 'Storage Solutions',
                    traditional: '$800 / mo',
                    zion: '$350 / mo',
                    savings: '56%',
                  },
                  {
                    service: 'Marketplace Listings',
                    traditional: '$99 / mo',
                    zion: 'Free',
                    savings: '100%',
                  },
                ].map ((item, index) => (
                  <TableRow key={index} className='border - b border - zion - blue'>;
                    <TableCell className='font - medium text - white'>;
<<<<<<<< HEAD:src/components/ComparisonSection.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/ComparisonSection.tsx
                      {item.service}
                    </TableCell>;
                    <TableCell className='text - center text - zion - slate - light'>;
                      {item.traditional}
                    </TableCell>;
                    <TableCell className='text - center text - zion - cyan font - semibold'>;
                      {item.zion}
                    </TableCell>;
                    <TableCell className='text - center text - green - 400 font - bold'>;
                      {item.savings}
<<<<<<<< HEAD:src/components/ComparisonSection.tsx
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

========
=======

                  <TableRow key={index} className="border-b border-zion-blue">
                    <TableCell className="font-medium text-white">{item.service}</TableCell>
                    <TableCell className="text-center text-zion-slate-light">{item.traditional}</TableCell>
                    <TableCell className="text-center text-zion-cyan font-semibold">{item.zion}</TableCell>
                    <TableCell className="text-center text-green-400 font-bold">{item.savings}</TableCell>

                  </TableRow>

import { GradientHeading } from "./GradientHeading",
import { Button } from "./ui/button",
import { CheckCircle2 } from 'lucide-react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table",

export function ComparisonSection() {
  return (
    <section className="py-20 bg-zion-blue-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <GradientHeading>Compare & Save</GradientHeading>
          <p className="mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto">
            See how Zion can drastically reduce your IT costs compared to traditional providers
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-zion-blue-light rounded-lg border border-zion-purple/20 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-zion-purple/20">
                  <TableHead className="text-white">Service</TableHead>
                  <TableHead className="text-white text-center">Traditional Providers</TableHead>
                  <TableHead className="text-white text-center">With Zion</TableHead>
                  <TableHead className="text-white text-center">Savings</TableHead>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { service: "Server Hosting", traditional: "$1,200/mo", zion: "$650/mo", savings: "45%" },
                  { service: "IT Equipment", traditional: "Full Purchase", zion: "Flexible Rental", savings: "60%" },
                  { service: "24/7 Support", traditional: "$2,500/mo", zion: "$950/mo", savings: "62%" },
<<<<<<< HEAD
                  { service: "Storage Solutions", traditional: "$800/mo", zion: "$350/mo", savings: "56%" };
                  { service: "Marketplace Listings", traditional: "$99/mo", zion: "Free", savings: "100%" }].map((item, index) => (
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/ComparisonSection.tsx
=======
                  { service: "Storage Solutions", traditional: "$800/mo", zion: "$350/mo", savings: "56%" },
                  { service: "Marketplace Listings", traditional: "$99/mo", zion: "Free", savings: "100%" }].map((item, index) => (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  <TableRow key={index} className="border-b border-zion-blue">
                    <TableCell className="font-medium text-white">{item.service}</TableCell>
                    <TableCell className="text-center text-zion-slate-light">{item.traditional}</TableCell>
                    <TableCell className="text-center text-zion-cyan font-semibold">{item.zion}</TableCell>
                    <TableCell className="text-center text-green-400 font-bold">{item.savings}</TableCell>
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/ComparisonSection.tsx
<<<<<<< HEAD

========
                  </TableRow>
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/ComparisonSection.tsx
=======
                  </TableRow>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                ))}
              </TableBody>
            </Table>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/ComparisonSection.tsx

            </Button>
          </div>
        </div>
      </div>

=======
>>>>>>>                 ))}
              </TableBody>
            </Table>
          </div>
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <div className='mt-8 flex justify-between items-center bg-zion-blue p-6 rounded-lg border border-zion-purple/20'>
            <div className='flex items-start'>
              <CheckCircle2 className='mr-2 h-6 w-6 text-green-400 flex-shrink-0 mt-1' />
              <p className='text-white'>
                <span className='font-bold'>Total Annual Savings: </span>
                <span className='text-green-400 font-bold text-xl'>
                  Up to 65%
                </span>
                <span className='block text-sm text-zion-slate-light mt-1'>
                  Results may vary based on specific requirements and service
                  levels
                </span>
              </p>
            </div>
            <Button className='bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white whitespace-nowrap'>              Calculate Your Savings          <div className="mt-8 flex justify-between items-center bg-zion-blue p-6 rounded-lg border border-zion-purple/20">
<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
                ))}
              </TableBody>
            </Table>
          </div>



          <div className="mt-8 flex justify-between items-center bg-zion-blue p-6 rounded-lg border border-zion-purple/20">
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>>             <div className="flex items-start">
========
          <div className="mt-8 flex justify-between items-center bg-zion-blue p-6 rounded-lg border border-zion-purple/20">
            <div className="flex items-start">
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/ComparisonSection.tsx
=======
            <div className="flex items-start">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <CheckCircle2 className="mr-2 h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
              <p className="text-white">
                <span className="font-bold">Total Annual Savings: </span>
                <span className="text-green-400 font-bold text-xl">Up to 65%</span>
                <span className="block text-sm text-zion-slate-light mt-1">Results may vary based on specific requirements and service levels</span>
              </p>
            </div>
            <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white whitespace-nowrap">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/ComparisonSection.tsx
>>>>>>>             </Button>
          </div>
        </div>
      </div>
    </section>;
  );
};
}
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import { GradientHeading } from "./GradientHeading",;
import { Button } from "./ui/button",;
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
========
              Calculate Your Savings
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/ComparisonSection.tsx
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

          <div className="mt-8 flex justify-between items-center bg-zion-blue p-6 rounded-lg border border-zion-purple/20">
            <div className="flex items-start">
              <CheckCircle2 className="mr-2 h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
              <p className="text-white">
                <span className="font-bold">Total Annual Savings: </span>
                <span className="text-green-400 font-bold text-xl">Up to 65%</span>
                <span className="block text-sm text-zion-slate-light mt-1">Results may vary based on specific requirements and service levels</span>
              </p>
            </div>
            
            <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white whitespace-nowrap">
              Calculate Your Savings
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            </Button>
          </div>
        </div>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD



    </section>
<<<<<<<< HEAD:src/components/ComparisonSection.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/ComparisonSection.tsx
import { GradientHeading } from './GradientHeading';
import { Button } from './ui/button';
>>>>>>> import { CheckCircle2 } from 'lucide-react';
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
  TableRow,;
} from './ui/table';
export function ComparisonSection() {;
  return (
    <section className='py-20 bg-zion-blue-dark'>;
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>;
        <div className='text-center mb-12'>;
          <GradientHeading>Compare & Save</GradientHeading>;
          <p className='mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto'>;
            See how Zion can drastically reduce your IT costs compared to;
            traditional providers;
          </p>;
        </div>;
        <div className='max-w-4xl mx-auto'>;
          <div className='bg-zion-blue-light rounded-lg border border-zion-purple/20 overflow-hidden'>;
            <Table>;
              <TableHeader>;
                <TableRow className='border-b border-zion-purple/20'>;
                  <TableHead className='text-white'>Service</TableHead>;
                  <TableHead className='text-white text-center'>;
                    Traditional Providers;
                  </TableHead>;
                  <TableHead className='text-white text-center'>;
                    With Zion;
                  </TableHead>;
                  <TableHead className='text-white text-center'>;
                    Savings;
                  </TableHead>                </TableRow>;
              </TableHeader>;
              <TableBody>;
                {[                <TableRow className="border-b border-zion-purple/20">;
                  <TableHead className="text-white">Service</TableHead>;
                  <TableHead className="text-white text-center">Traditional Providers</TableHead>;
                  <TableHead className="text-white text-center">With Zion</TableHead>;
                  <TableHead className="text-white text-center">Savings</TableHead>;
              </TableHeader>;
              <TableBody>;
                {[;
                  {;
                    service: 'Server Hosting',;
                    traditional: '$1,200/mo',;
                    zion: '$650/mo',;
                    savings: '45%',;
                  },;
                  {;
                    service: 'IT Equipment',;
                    traditional: 'Full Purchase',;
                    zion: 'Flexible Rental',;
                    savings: '60%',;
                  },;
                  {;
                    service: '24/7 Support',;
                    traditional: '$2,500/mo',;
                    zion: '$950/mo',;
                    savings: '62%',;
                  },;
                  {;
                    service: 'Storage Solutions',;
                    traditional: '$800/mo',;
                    zion: '$350/mo',;
                    savings: '56%',;
                  },;
                  {;
                    service: 'Marketplace Listings',;
                    traditional: '$99/mo',;
                    zion: 'Free',;
                    savings: '100%',;
                  },;
                ].map((item, index) => (;
                  <TableRow key={index} className='border-b border-zion-blue'>;
                    <TableCell className='font-medium text-white'>;
                      {item && item.service}
                    </TableCell>;
                    <TableCell className='text-center text-zion-slate-light'>;
                      {item && item.traditional}
                    </TableCell>;
                    <TableCell className='text-center text-zion-cyan font-semibold'>;
                      {item && item.zion}
                    </TableCell>;
                    <TableCell className='text-center text-green-400 font-bold'>;
                      {item && item.savings}
                    </TableCell>                  </TableRow>;
                  { service: "Marketplace Listings", traditional: "$99/mo", zion: "Free", savings: "100%" }].map((item, index) => (                  { service: "Marketplace Listings", traditional: "$99/mo", zion: "Free", savings: "100%" }].map((item, index) => (;
                  <TableRow key={index} className="border-b border-zion-blue">;
                    <TableCell className="font-medium text-white">{item && item.service}</TableCell>;
                    <TableCell className="text-center text-zion-slate-light">{item && item.traditional}</TableCell>;
                    <TableCell className="text-center text-zion-cyan font-semibold">{item && item.zion}</TableCell>;
                    <TableCell className="text-center text-green-400 font-bold">{item && item.savings}</TableCell>;
                ))}
              </TableBody>;
            </Table>;
          </div>;
          <div className='mt-8 flex justify-between items-center bg-zion-blue p-6 rounded-lg border border-zion-purple/20'>;
            <div className='flex items-start'>;
              <CheckCircle2 className='mr-2 h-6 w-6 text-green-400 flex-shrink-0 mt-1' />;
              <p className='text-white'>;
                <span className='font-bold'>Total Annual Savings: </span>;
                <span className='text-green-400 font-bold text-xl'>;
                  Up to 65%;
                </span>;
                <span className='block text-sm text-zion-slate-light mt-1'>;
                    </TableCell>                  </TableRow>;
                  { service: "Marketplace Listings", traditional: "$99 / mo", zion: "Free", savings: "100%" }].map ((item, index) => (                  { service: "Marketplace Listings", traditional: "$99 / mo", zion: "Free", savings: "100%" }].map ((item, index) => (
                  <TableRow key={index} className="border - b border - zion - blue">;
                    <TableCell className="font - medium text - white">{item.service}</TableCell>;
                    <TableCell className="text - center text - zion - slate - light">{item.traditional}</TableCell>;
                    <TableCell className="text - center text - zion - cyan font - semibold">{item.zion}</TableCell>;
                    <TableCell className="text - center text - green - 400 font - bold">{item.savings}</TableCell>))}
              </TableBody>;
            </Table>;
          </div>;
          <div className='mt - 8 flex justify - between items - center bg - zion - blue p - 6 rounded - lg border border - zion - purple / 20'>;
            <div className='flex items - start'>;
              <CheckCircle2 className='mr - 2 h - 6 w - 6 text - green - 400 flex - shrink - 0 mt - 1' />;
              <p className='text - white'>;
                <span className='font - bold'>Total Annual Savings: </span>;
                <span className='text - green - 400 font - bold text - xl'>;
                  Up to 65%;
                </span>;
                <span className='block text - sm text - zion - slate - light mt - 1'>;
                  Results may vary based on specific requirements and service;
                  levels;
                </span>;
              </p>;
            </div>;
<<<<<<<< HEAD:src/components/ComparisonSection.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/ComparisonSection.tsx
            <Button className='bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white whitespace - nowrap'>              Calculate Your Savings          <div className="mt - 8 flex justify - between items - center bg - zion - blue p - 6 rounded - lg border border - zion - purple / 20">;
            <div className="flex items - start">;
              <CheckCircle2 className="mr - 2 h - 6 w - 6 text - green - 400 flex - shrink - 0 mt - 1" />;
              <p className="text - white">;
                <span className="font - bold">Total Annual Savings: </span>;
                <span className="text - green - 400 font - bold text - xl">Up to 65%</span>;
                <span className="block text - sm text - zion - slate - light mt - 1">Results may vary based on specific requirements and service levels</span>;
              </p>;
            </div>;
            <Button className="bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white whitespace - nowrap">;
<<<<<<<< HEAD:src/components/ComparisonSection.tsx

========
=======

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    </section>;
  );
};
}
    </section>
  )
}
<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { GradientHeading } from "./GradientHeading",;
import { Button } from "./ui/button",;
import { CheckCircle2 } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table",;
<<<<<<< HEAD
;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export function ComparisonSection() {;
  return (;
    <section className="py-20 bg-zion-blue-dark">;
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
        <div className="text-center mb-12">;
          <GradientHeading>Compare & Save</GradientHeading>;
          <p className="mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto">;
            See how Zion can drastically reduce your IT costs compared to traditional providers;
          </p>;
        </div>;
<<<<<<< HEAD
;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className="max-w-4xl mx-auto">;
          <div className="bg-zion-blue-light rounded-lg border border-zion-purple/20 overflow-hidden">;
            <Table>;
              <TableHeader>;
                <TableRow className="border-b border-zion-purple/20">;
                  <TableHead className="text-white">Service</TableHead>;
                  <TableHead className="text-white text-center">Traditional Providers</TableHead>;
                  <TableHead className="text-white text-center">With Zion</TableHead>;
                  <TableHead className="text-white text-center">Savings</TableHead>;
                </TableRow>;
              </TableHeader>;
              <TableBody>;
                {[;
<<<<<<< HEAD
                  { service:"Server Hosting", traditional:"$1,200/mo", zion:"$650/mo", savings:"45%" },;
                  { service:"IT Equipment", traditional:"Full Purchase", zion:"Flexible Rental", savings:"60%" },;
                  { service:"24/7 Support", traditional:"$2,500/mo", zion:"$950/mo", savings:"62%" },;
                  { service:"Storage Solutions", traditional:"$800/mo", zion:"$350/mo", savings:"56%" },;
                  { service:"Marketplace Listings", traditional:"$99/mo", zion:"Free", savings:"100%" }].map((item, index) => (;
=======
                  { service: "Server Hosting", traditional: "$1,200/mo", zion: "$650/mo", savings: "45%" },;
                  { service: "IT Equipment", traditional: "Full Purchase", zion: "Flexible Rental", savings: "60%" },;
                  { service: "24/7 Support", traditional: "$2,500/mo", zion: "$950/mo", savings: "62%" };
                  { service: "Storage Solutions", traditional: "$800/mo", zion: "$350/mo", savings: "56%" };
                  { service: "Marketplace Listings", traditional: "$99/mo", zion: "Free", savings: "100%" }].map((item, index) => (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  <TableRow key={index} className="border-b border-zion-blue">;
                    <TableCell className="font-medium text-white">{item.service}</TableCell>;
                    <TableCell className="text-center text-zion-slate-light">{item.traditional}</TableCell>;
                    <TableCell className="text-center text-zion-cyan font-semibold">{item.zion}</TableCell>;
                    <TableCell className="text-center text-green-400 font-bold">{item.savings}</TableCell>;
                  </TableRow>;
                ))}
              </TableBody>;
            </Table>;
          </div>;
<<<<<<< HEAD
;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <div className="mt-8 flex justify-between items-center bg-zion-blue p-6 rounded-lg border border-zion-purple/20">;
            <div className="flex items-start">;
              <CheckCircle2 className="mr-2 h-6 w-6 text-green-400 flex-shrink-0 mt-1" />;
              <p className="text-white">;
<<<<<<< HEAD
                <span className="font-bold">Total Annual Savings:</span>;
=======
                <span className="font-bold">Total Annual Savings: </span>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <span className="text-green-400 font-bold text-xl">Up to 65%</span>;
                <span className="block text-sm text-zion-slate-light mt-1">Results may vary based on specific requirements and service levels</span>;
              </p>;
            </div>;
<<<<<<< HEAD
            ;
            <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white whitespace-nowrap">;
              Calculate Your Savings;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/ComparisonSection.tsx
=======
            <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white whitespace-nowrap">;
              Calculate Your Savings;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </Button>;
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD

=======
    </section>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/ComparisonSection.tsx

=======
>>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
  );
}
    </section>);
}
=======
    </section>;
  );}
 export function ComparisonSection () {;
  return (<section className="py-20 bg-zion-blue-dark" > <div className="container mx-auto px-4 sm:px-6 lg:px-8" > <div className="text-center mb-12" > mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto"> See how Zion can drastically reduce your IT costs compared to traditional providers </p> </div> <div className=" max-w-4xl mx-auto"> <div className=" bg-zion-blue-light rounded-lg border border-zion-purple/20 overflow-hidden"> <Table> <TableHeader> <TableRow className=" border-b border-zion-purple/20"> <TableHead className=" text-white">Service</TableHead> <TableHead className=" text-white text-center">Traditional Providers</TableHead> <TableHead className=" text-white text-center">With Zion</TableHead> <TableHead className=" text-white text-center">Savings</TableHead> </TableRow> </TableHeader> <TableBody> {;
  [ </TableRow>) ) ";
}</TableBody> </Table> </div> <div className=" mt-8 flex justify-between items-center bg-zion-blue p-6 rounded-lg border border-zion-purple/20"> <div className=" flex items-start"> <CheckCircle2 className=" mr-2 h-6 w-6 text-green-400 flex-shrink-0 mt-1"/> <p className=" text-white"> <span className=" font-bold">Total Annual Savings: </span> <span className=" text-green-400 font-bold text-xl">Up to 65%</span> <span className=" block text-sm text-zion-slate-light mt-1">Results may vary based on specific requirements and service levels</span> </p> </div> <Button className=" bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white whitespace-nowrap" > Calculate Your Savings </Button> </div> </div> </div> </section>) ;
}"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/ComparisonSection.tsx
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
