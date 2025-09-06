<<<<<<< HEAD
<<<<<<< HEAD

import { GradientHeading } from "./GradientHeading",
import { Button } from "./ui/button";
=======
import { GradientHeading } from './GradientHeading'
import { Button } from './ui/button'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { CheckCircle2 } from 'lucide-react'

import {
  Table
  TableBody
  TableCell
  TableHead
  TableHeader
  TableRow
} from './ui/table'
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function ComparisonSection() {
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
=======

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                  <TableHead className="text-white">Service</TableHead>
                  <TableHead className="text-white text-center">Traditional Providers</TableHead>
                  <TableHead className="text-white text-center">With Zion</TableHead>
                  <TableHead className="text-white text-center">Savings</TableHead>

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

                  {
                    service: 'IT Equipment'
                    traditional: 'Full Purchase'
                    zion: 'Flexible Rental'
                    savings: '60%'
                  }
                  {

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

                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { service: "Server Hosting", traditional: "$1,200/mo", zion: "$650/mo", savings: "45%" },
                  { service: "IT Equipment", traditional: "Full Purchase", zion: "Flexible Rental", savings: "60%" },
                  { service: "24/7 Support", traditional: "$2,500/mo", zion: "$950/mo", savings: "62%" },
                  { service: "Storage Solutions", traditional: "$800/mo", zion: "$350/mo", savings: "56%" };
                  { service: "Marketplace Listings", traditional: "$99/mo", zion: "Free", savings: "100%" }].map((item, index) => (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                  <TableRow key={index} className="border-b border-zion-blue">
                    <TableCell className="font-medium text-white">{item.service}</TableCell>
                    <TableCell className="text-center text-zion-slate-light">{item.traditional}</TableCell>
                    <TableCell className="text-center text-zion-cyan font-semibold">{item.zion}</TableCell>
                    <TableCell className="text-center text-green-400 font-bold">{item.savings}</TableCell>

                  </TableRow>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
                  </TableRow>

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                ))}
              </TableBody>
            </Table>
          </div>

=======



          <div className="mt-8 flex justify-between items-center bg-zion-blue p-6 rounded-lg border border-zion-purple/20">
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
              Calculate Your Savings

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            </Button>
          </div>
        </div>
      </div>



    </section>
  )
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { GradientHeading } from "./GradientHeading",;
import { Button } from "./ui/button",;
import { CheckCircle2 } from 'lucide-react';
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
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                  Results may vary based on specific requirements and service;
                  levels;
                </span>;
              </p>;
            </div>;

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

            </Button>;
          </div>;
        </div>;
      </div>;

  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
