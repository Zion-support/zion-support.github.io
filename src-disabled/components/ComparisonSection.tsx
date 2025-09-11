

:src_backup/components/ComparisonSection.tsx

:src_backup/components/ComparisonSection.tsx

import { GradientHeading } from "./GradientHeading";
import { Button } from "./ui/button";
import { CheckCircle2 } from 'lucide-react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
    <section className='py-20 bg-zion-blue-dark'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
:src_backup/components/ComparisonSection.tsx
:src_backup/components/ComparisonSection.tsx

:src_backup/components/ComparisonSection.tsx

import { GradientHeading } from './GradientHeading';
import { Button } from './ui / button';
import { CheckCircle2 } from 'lucide-react';



:src_backup/components/ComparisonSection.tsx
function ComparisonSection() {
  return (
    <section className='py - 20 bg - zion - blue - dark'>;
export function ComparisonSection() {return (<section className='py-20 bg-zion-blue-dark'>;
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
import { GradientHeading  } from './GradientHeading';
import { Button  } from './ui/button';
import { CheckCircle2  } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow  } from './ui/table';
export function ComparisonSection() {return (<section className="py-20 bg-zion-blue-dark">;
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
        <div className="text-center mb-12">;
          <GradientHeading>Compare & Save</GradientHeading>;
          <p className="mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto">;
            See how Zion can drastically reduce your IT costs compared to traditional providers;
          </p>;
        </div>;
        <div className="max-w-4xl mx-auto">;
          <div className="bg-zion-blue-light rounded-lg border border-zion-purple/20 overflow-hidden">;
            <Table>;
              <TableHeader>;
                <TableRow className="border-b border-zion-purple/20">;
                  <TableHead className="text-white">Service</TableHead>;
                  <TableHead className="text-white text-center">Traditional Providers</TableHead>;
                  <TableHead className="text-white text-center">With Zion</TableHead>;
                  <TableHead className="text-white text-center">Savings</TableHead>;
import { Button  } from './ui / button';
import { Table,TableBody,TableCell,TableHead,TableHeader,TableRow} from './ui / table';
export /**;
 * ComparisonSection - Function description;
 */;
function ComparisonSection() {return (<section className='py - 20 bg - zion - blue - dark'>;
:src_backup/components/ComparisonSection.tsx
                  {
                    service: 'Server Hosting,
                    traditional: $1, 200 / mo',
                    zion: '$650 / mo,
                  {
                    service: 'Server Hosting',
                    traditional: '$1, 200 / mo',
                    zion: '$650 / mo',
                  {'
                    service: 'Server Hosting','
                    traditional: '$1, 200 / mo','
                    zion: '$650 / mo','
                    savings: '45%',
                  },

:src_backup/components/ComparisonSection.tsx
:src_backup/components/ComparisonSection.tsx

:src_backup/components/ComparisonSection.tsx

                    service: '24 / 7 Support',
                    traditional: '$2, 500 / mo',
                    zion: '$950 / mo',
                    savings: '62%',
                  },



:src_backup/components/ComparisonSection.tsx
                  {service: 'Server Hosting',traditional: '$1, 200 / mo',zion: '$650 / mo',savings: '45%'},TableBody,TableCell,TableHead,TableHeader,TableRow} from './ui/table';
import { GradientHeading } from "./GradientHeading",</TableHead>;
                  {service: 'Server Hosting',traditional: '$1, 200 / mo',zion: '$650 / mo',savings: '45%'},TableBody,TableCell,TableHead,TableHeader,TableRow} from './ui/table';
import { GradientHeading } from "./GradientHeading",</TableHead>;
                  {service: Server Hosting',traditional: '$1, 200 / mo,zion: $650 / mo',savings: '45%},TableBody,TableCell,TableHead,TableHeader,TableRow} from ./ui/table';
import { GradientHeading } from ./GradientHeading,</TableHead>;
                </TableRow>;
              </TableHeader>;
              <TableBody>;
                {[;
{service: 'Server Hosting',traditional: '$1,200/mo',zion: '$650/mo',savings: '45%'},{service: 'IT Equipment';
                    traditional: 'Full Purchase';
                    zion: 'Flexible Rental';
                    savings: '60%';
                  }
                  {service: '24 / 7 Support',traditional: '$2, 500 / mo',zion: '$950 / mo',savings: '62%'},{service: 'Storage Solutions',traditional: '$800 / mo',zion: '$350 / mo',savings: '56%'},{service: 'Marketplace Listings',traditional: '$99 / mo',zion: 'Free',savings: '100%'}].map ((item, index) => (<TableRow key={index} className='border - b border - zion - blue'>;
                    <TableCell className='font - medium text - white'>;{item.service}
                    </TableCell>;
:src_backup/components/ComparisonSection.tsx
                      {item.savings}
:src_backup/components/ComparisonSection.tsx


                    </TableCell>
                  </TableRow>
origin/cursor/automate-test-improve-and-merge-code-2533
:src_backup/components/ComparisonSection.tsx
                  </TableRow>


                ))}
              </TableBody>
            </Table>
          </div>




:src_backup/components/ComparisonSection.tsx
            <div className="flex items-start">
              <CheckCircle2 className="mr-2 h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
              <p className="text-white">
                <span className="font-bold">Total Annual Savings: </span>
                <span className="text-green-400 font-bold text-xl">Up to 65%</span>
                <span className="block text-sm text-zion-slate-light mt-1">Results may vary based on specific requirements and service levels</span>
              </p>
            </div>



          <div className="mt-8 flex justify-between items-center bg-zion-blue p-6 rounded-lg border border-zion-purple/20">

            <div className="flex items-start">
              <CheckCircle2 className="mr-2 h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
              <p className="text-white">
                <span className="font-bold">Total Annual Savings: </span>
                <span className="text-green-400 font-bold text-xl">Up to 65%</span>
                <span className="block text-sm text-zion-slate-light mt-1">Results may vary based on specific requirements and service levels</span>
              </p>
            </div>
:src_backup/components/ComparisonSection.tsx
            <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white whitespace-nowrap">

              Calculate Your Savings

:src_backup/components/ComparisonSection.tsx
:src_backup/components/ComparisonSection.tsx



    </section>
import { Button } from "./ui/button",import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table",export function ComparisonSection() {return (<section className="py-20 bg-zion-blue-dark">;
:src_backup/components/ComparisonSection.tsx
                  <TableHead className="text-white text-center">Traditional Providers</TableHead>;
                  <TableHead className="text-white text-center">With Zion</TableHead>;
                  <TableHead className="text-white text-center">Savings</TableHead>;


              </TableHeader>;
                  <TableHead className="text-white text-center>Traditional Providers</TableHead>;
                  <TableHead className=text-white text-center">With Zion</TableHead>;
                  <TableHead className="text-white text-center>Savings</TableHead>;
                </TableRow>;
              </TableHeader>;
              <TableBody>;
                {[;
                  { service: "Server Hosting", traditional: "$1,200/mo", zion: "$650/mo", savings: "45%" },{ service: "IT Equipment", traditional: "Full Purchase", zion: "Flexible Rental", savings: "60%" },{ service: "24/7 Support", traditional: "$2,500/mo", zion: "$950/mo", savings: "62%" },{ service: "Storage Solutions", traditional: "$800/mo", zion: "$350/mo", savings: "56%" }{ service: "Marketplace Listings", traditional: "$99/mo", zion: "Free", savings: "100%" }].map((item, index) => (<TableRow key={index} className="border-b border-zion-blue">;
                    <TableCell className="font-medium text-white">{item.service}</TableCell>;
                    <TableCell className="text-center text-zion-slate-light">{item.traditional}</TableCell>;
                    <TableCell className="text-center text-zion-cyan font-semibold">{item.zion}</TableCell>;
                    <TableCell className="text-center text-green-400 font-bold">{item.savings}</TableCell>;
                  </TableRow>;
                ))}
              </TableBody>;
            </Table>;
          </div>;
          <div className="mt-8 flex justify-between items-center bg-zion-blue p-6 rounded-lg border border-zion-purple/20">;
            <div className="flex items-start">;
              <CheckCircle2 className="mr-2 h-6 w-6 text-green-400 flex-shrink-0 mt-1" />;
              <p className="text-white">;
                <span className="font-bold">Total Annual Savings: </span>;
                <span className="text-green-400 font-bold text-xl">Up to 65%</span>;
                <span className="block text-sm text-zion-slate-light mt-1">Results may vary based on specific requirements and service levels</span>;
              </p>;
            </div>;
            <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white whitespace-nowrap">;
              Calculate Your Savings;
<div className='mt-8 flex justify-between items-center bg-zion-blue p-6 rounded-lg border border-zion-purple/20'>;
            <div className='flex items-start'>;
              <CheckCircle2 className='mr-2 h-6 w-6 text-green-400 flex-shrink-0 mt-1' />;
              <p className='text-white'>;
                <span className='font-bold'>Total Annual Savings: </span>;
                <span className='text-green-400 font-bold text-xl'>;
                  Up to 65%;
                </span>;
                <span className='block text-sm text-zion-slate-light mt-1'>;
                  Results may vary based on specific requirements and service;
                  levels;
                </span>;
              </p>;
            </div>;
            <Button className='bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white whitespace-nowrap'>;
              Calculate Your Savings;
            </Button>;
          </div>;
export function ComparisonSection() {return (<section className="py-20 bg-zion-blue-dark">;
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
        <div className="text-center mb-12">;
          <GradientHeading>Compare & Save</GradientHeading>;
          <p className="mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto">;
            See how Zion can drastically reduce your IT costs compared to traditional providers;
          </p>;
        </div>;
        <div className="max-w-4xl mx-auto">;
          <div className="bg-zion-blue-light rounded-lg border border-zion-purple/20 overflow-hidden">;
            <Table>;
              <TableHeader>;
                <TableRow className="border-b border-zion-purple/20">;</section>;
import {Table,TableBody,TableCell,TableHead,TableHeader,TableRow} from './ui/table';
export function ComparisonSection() {return (<section className='py-20 bg-zion-blue-dark'>;
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>;
        <div className='text-center mb-12'>;
          <GradientHeading>Compare & Save</GradientHeading>;
          <p className='mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto'>;
            See how Zion can drastically reduce your IT costs compared to;
            traditional providers;
          </p>;
        </div>;<div className='max-w-4xl mx-auto'>;
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
                {[                <TableRow className="border-b border-zion-purple/20">;<TableHead className="text-white">Service</TableHead>;
                  <TableHead className="text-white text-center">Traditional Providers</TableHead>;
                  <TableHead className="text-white text-center">With Zion</TableHead>;
                  <TableHead className="text-white text-center">Savings</TableHead>;</TableHeader>;
                  <TableHead className="text-white text-center">Traditional Providers</TableHead>;
                  <TableHead className="text-white text-center">With Zion</TableHead>;
                  <TableHead className="text-white text-center">Savings</TableHead>;
              </TableHeader>;
:src_backup/components/ComparisonSection.tsx
:src_backup/components/ComparisonSection.tsx


:src_backup/components/ComparisonSection.tsx

          <div className='mt-8 flex justify-between items-center bg-zion-blue p-6 rounded-lg border border-zion-purple/20'>;
                    <TableCell className="text-center text-green-400 font-bold">{item && item.savings}</TableCell>;))}
              </TableBody>;
            </Table>;
          </div>;<div className='mt-8 flex justify-between items-center bg-zion-blue p-6 rounded-lg border border-zion-purple/20'>;


:src_backup/components/ComparisonSection.tsx
                <span className='text-green-400 font-bold text-xl'>;
                <span className='text-green-400 font-bold text-xl'>;
                <span className=text-green-400 font-bold text-xl>;
                  Up to 65%;
                </span>;
                <span className='block text-sm text-zion-slate-light mt-1'>;
                    </TableCell>                  </TableRow>;
                  { service: "Marketplace Listings", traditional: "$99 / mo", zion: "Free", savings: "100%" }].map ((item, index) => (                  { service: "Marketplace Listings", traditional: "$99 / mo", zion: "Free", savings: "100%" }].map ((item, index) => (<TableRow key={index} className="border - b border - zion - blue">;
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

                <span className='text-green-400 font-bold text-xl'>;
:src_backup/components/ComparisonSection.tsx
            </div>;<Button className='bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white whitespace - nowrap'>              Calculate Your Savings          <div className="mt - 8 flex justify - between items - center bg - zion - blue p - 6 rounded - lg border border - zion - purple / 20">;
            <div className="flex items - start">;
              <CheckCircle2 className="mr - 2 h - 6 w - 6 text - green - 400 flex - shrink - 0 mt - 1" />;
              <p className="text - white">;
                <span className="font - bold">Total Annual Savings: </span>;
                <span className="text - green - 400 font - bold text - xl">Up to 65%</span>;
                <span className="block text - sm text - zion - slate - light mt - 1">Results may vary based on specific requirements and service levels</span>;
              </p>;
            </div>;
:src_backup/components/ComparisonSection.tsx
            <Button className="bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white whitespace - nowrap">;
:src_backup/components/ComparisonSection.tsx
  );
};