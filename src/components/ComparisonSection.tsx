<<<<<<< HEAD
<<<<<<< HEAD
import { GradientHeading } from "./GradientHeading",
import { Button } from "./ui/button";

import { GradientHeading } from "./GradientHeading",
import { Button } from "./ui/button";
import { GradientHeading } from './GradientHeading'
import { Button } from './ui/button'
import { CheckCircle2 } from 'lucide-react'

import {
  Table
  TableBody
  TableCell
  TableHead
  TableHeader
  TableRow
} from './ui/table'
export function ComparisonSection() {
xport function ComparisonSection() {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

import { GradientHeading } from "./GradientHeading";
import { Button } from "./ui/button";
import { CheckCircle2 } from 'lucide-react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="max-w-4xl mx-auto">
          <div className="bg-zion-blue-light rounded-lg border border-zion-purple/20 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-zion-purple/20">
                  <TableHead className="text-white">Service</TableHead>
                  <TableHead className="text-white text-center">Traditional Providers</TableHead>
                  <TableHead className="text-white text-center">With Zion</TableHead>
                  <TableHead className="text-white text-center">Savings</TableHead>
<<<<<<< HEAD
<<<<<<< HEAD
              </TableHeader>
              <TableBody>
                {[
                  {
                    service: 'Server Hosting'
                    traditional: '$1,200/mo'
                    zion: '$650/mo'
                    savings: '45%'
                  }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  {
                    service: 'IT Equipment'
                    traditional: 'Full Purchase'
                    zion: 'Flexible Rental'
                    savings: '60%'
                  }
                  {
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

                  <TableRow key={index} className="border-b border-zion-blue">
                    <TableCell className="font-medium text-white">{item.service}</TableCell>
                    <TableCell className="text-center text-zion-slate-light">{item.traditional}</TableCell>
                    <TableCell className="text-center text-zion-cyan font-semibold">{item.zion}</TableCell>
                    <TableCell className="text-center text-green-400 font-bold">{item.savings}</TableCell>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { service: "Server Hosting", traditional: "$1,200/mo", zion: "$650/mo", savings: "45%" },
                  { service: "IT Equipment", traditional: "Full Purchase", zion: "Flexible Rental", savings: "60%" },
                  { service: "24/7 Support", traditional: "$2,500/mo", zion: "$950/mo", savings: "62%" },
<<<<<<< HEAD
<<<<<<< HEAD
                  { service: "Storage Solutions", traditional: "$800/mo", zion: "$350/mo", savings: "56%" },
=======
                  { service: "Storage Solutions", traditional: "$800/mo", zion: "$350/mo", savings: "56%" };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                  { service: "Storage Solutions", traditional: "$800/mo", zion: "$350/mo", savings: "56%" };
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  { service: "Marketplace Listings", traditional: "$99/mo", zion: "Free", savings: "100%" }].map((item, index) => (
                  <TableRow key={index} className="border-b border-zion-blue">
                    <TableCell className="font-medium text-white">{item.service}</TableCell>
                    <TableCell className="text-center text-zion-slate-light">{item.traditional}</TableCell>
                    <TableCell className="text-center text-zion-cyan font-semibold">{item.zion}</TableCell>
                    <TableCell className="text-center text-green-400 font-bold">{item.savings}</TableCell>
<<<<<<< HEAD
<<<<<<< HEAD
                  </TableRow>
                  </TableRow>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                  </TableRow>

                  </TableRow>

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                ))}
              </TableBody>
            </Table>
          </div>
<<<<<<< HEAD
              </TableBody>
            </Table>
          </div>
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

                  </TableRow>

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                ))}
              </TableBody>
            </Table>
          </div>

<<<<<<< HEAD
          <div className="mt-8 flex justify-between items-center bg-zion-blue p-6 rounded-lg border border-zion-purple/20">
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



          <div className="mt-8 flex justify-between items-center bg-zion-blue p-6 rounded-lg border border-zion-purple/20">
            <div className="flex items-start">
<<<<<<< HEAD
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
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

          <div className="mt-8 flex justify-between items-center bg-zion-blue p-6 rounded-lg border border-zion-purple/20">
            <div className="flex items-start">
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <CheckCircle2 className="mr-2 h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
              <p className="text-white">
                <span className="font-bold">Total Annual Savings: </span>
                <span className="text-green-400 font-bold text-xl">Up to 65%</span>
                <span className="block text-sm text-zion-slate-light mt-1">Results may vary based on specific requirements and service levels</span>
              </p>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
            
            <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white whitespace-nowrap">
              Calculate Your Savings

              Calculate Your Savings

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white whitespace-nowrap">

              Calculate Your Savings

              Calculate Your Savings

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </Button>
          </div>
        </div>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



    </section>


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { GradientHeading } from './GradientHeading';
import { Button } from './ui/button';
=======
import { GradientHeading } from './GradientHeading';
import { Button } from './ui/button';
import { CheckCircle2 } from 'lucide-react';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
  TableRow,;
} from './ui/table';
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
<<<<<<< HEAD
    </section>;
  );
};
}
    </section>
  )
}
import { GradientHeading } from "./GradientHeading",;
import { Button } from "./ui/button",;
import { CheckCircle2 } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table",;
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
                  { service: "Server Hosting", traditional: "$1,200/mo", zion: "$650/mo", savings: "45%" },;
                  { service: "IT Equipment", traditional: "Full Purchase", zion: "Flexible Rental", savings: "60%" },;
                  { service: "24/7 Support", traditional: "$2,500/mo", zion: "$950/mo", savings: "62%" };
                  { service: "Storage Solutions", traditional: "$800/mo", zion: "$350/mo", savings: "56%" };
                  { service: "Marketplace Listings", traditional: "$99/mo", zion: "Free", savings: "100%" }].map((item, index) => (;
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </Button>;
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
    </section>;
  );
}
;
ursor/fix-website-loading-errors-and-merge-6662
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  );
}
    </section>);
<<<<<<< HEAD
}
    </section>;
  );}
 export function ComparisonSection () {;
  return (<section className="py-20 bg-zion-blue-dark" > <div className="container mx-auto px-4 sm:px-6 lg:px-8" > <div className="text-center mb-12" > mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto"> See how Zion can drastically reduce your IT costs compared to traditional providers </p> </div> <div className=" max-w-4xl mx-auto"> <div className=" bg-zion-blue-light rounded-lg border border-zion-purple/20 overflow-hidden"> <Table> <TableHeader> <TableRow className=" border-b border-zion-purple/20"> <TableHead className=" text-white">Service</TableHead> <TableHead className=" text-white text-center">Traditional Providers</TableHead> <TableHead className=" text-white text-center">With Zion</TableHead> <TableHead className=" text-white text-center">Savings</TableHead> </TableRow> </TableHeader> <TableBody> {;
  [ </TableRow>) ) ";
}</TableBody> </Table> </div> <div className=" mt-8 flex justify-between items-center bg-zion-blue p-6 rounded-lg border border-zion-purple/20"> <div className=" flex items-start"> <CheckCircle2 className=" mr-2 h-6 w-6 text-green-400 flex-shrink-0 mt-1"/> <p className=" text-white"> <span className=" font-bold">Total Annual Savings: </span> <span className=" text-green-400 font-bold text-xl">Up to 65%</span> <span className=" block text-sm text-zion-slate-light mt-1">Results may vary based on specific requirements and service levels</span> </p> </div> <Button className=" bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white whitespace-nowrap" > Calculate Your Savings </Button> </div> </div> </div> </section>) ;
}"
    </section>);
}
=======
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

  );
}

    </section>);
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
