<<<<<<< HEAD:src_backup/components/ComparisonSection.tsx
<<<<<<< HEAD:src/components/ComparisonSection.tsx
<<<<<<< HEAD
export function ComparisonSection() {
=======
export function ComparisonSection() {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ComparisonSection.tsx
  return (
    <section className='py-20 bg-zion-blue-dark'>'
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>'
        <div className='text-center mb-12'>
          <GradientHeading>Compare & Save</GradientHeading>'
          <p className='mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto'>;
            See how Zion can drastically reduce your IT costs compared to;
            traditional providers;
          </p>
        </div>'
        <div className='max-w-4xl mx-auto'>'
          <div className='bg-zion-blue-light rounded-lg border border-zion-purple/20 overflow-hidden'>
            <Table>
              <TableHeader>'
                <TableRow className='border-b border-zion-purple/20'>'
                  <TableHead className='text-white'>Service</TableHead>'
                  <TableHead className='text-white text-center'>
                    Traditional Providers;
                  </TableHead>'
                  <TableHead className='text-white text-center'>
                    With Zion;
                  </TableHead>'
                  <TableHead className='text-white text-center'>
                    Savings;
                  </TableHead>                </TableRow>
              </TableHeader>
              <TableBody>
                {[                <TableRow className="border-b border-zion-purple/20">
<<<<<<< HEAD:src_backup/components/ComparisonSection.tsx

<<<<<<< HEAD:src_backup/components/ComparisonSection.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ComparisonSection.tsx
import { GradientHeading } from "./GradientHeading";
import { Button } from "./ui/button";
import { CheckCircle2 } from 'lucide-react'
=======
"
import { GradientHeading } from "./GradientHeading";"
import { Button } from "./ui/button";'
import { CheckCircle2 } from 'lucide-react'";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ComparisonSection.tsx
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

export function ComparisonSection() {}
  return ("
    <section className="py-20 bg-zion-blue-dark">"
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">"
        <div className="text-center mb-12">
          <GradientHeading>Compare & Save</GradientHeading>"
          <p className="mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto">;
            See how Zion can drastically reduce your IT costs compared to traditional providers;
          </p>
        </div>
"
        <div className="max-w-4xl mx-auto">"
          <div className="bg-zion-blue-light rounded-lg border border-zion-purple/20 overflow-hidden">
            <Table>
<<<<<<< HEAD:src_backup/components/ComparisonSection.tsx
              <TableHeader>
                <TableRow className="border-b border-zion-purple/20">
<<<<<<< HEAD:src/components/ComparisonSection.tsx
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ComparisonSection.tsx
                  <TableHead className="text-white">Service</TableHead>
                  <TableHead className="text-white text-center">Traditional Providers</TableHead>
                  <TableHead className="text-white text-center">With Zion</TableHead>
                  <TableHead className="text-white text-center">Savings</TableHead>

<<<<<<< HEAD
=======
import { GradientHeading } from './GradientHeading';
import { Button } from './ui / button';
=======
              <TableHeader>"
                <TableRow className="border-b border-zion-purple/20">"
                  <TableHead className="text-white">Service</TableHead>"
                  <TableHead className="text-white text-center">Traditional Providers</TableHead>"
                  <TableHead className="text-white text-center">With Zion</TableHead>"
                  <TableHead className="text-white text-center">Savings</TableHead>
'
import { GradientHeading } from './GradientHeading';'
import { Button } from './ui / button';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ComparisonSection.tsx
import { CheckCircle2 } from 'lucide-react';
import {}
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,';
} from './ui / table';
export /**;
 * ComparisonSection - Function description;
 */
function ComparisonSection() {}
  return ('
    <section className='py - 20 bg - zion - blue - dark'>;'
      <div className='container mx - auto px - 4 sm:px - 6 lg:px - 8'>;'
        <div className='text - center mb - 12'>;
          <GradientHeading > Compare & Save</GradientHeading>;'
          <p className='mt - 4 text - zion - slate - light text - xl max - w-2xl mx - auto'>;
            See how Zion can drastically reduce your IT costs compared to;
            traditional providers;
          </p>;
        </div>;'
        <div className='max - w-4xl mx - auto'>;'
          <div className='bg - zion - blue - light rounded - lg border border - zion - purple / 20 overflow - hidden'>;
            <Table>;
              <TableHeader>;'
                <TableRow className='border - b border - zion - purple / 20'>;'
                  <TableHead className='text - white'>Service</TableHead>;'
                  <TableHead className='text - white text - center'>;
                    Traditional Providers;
                  </TableHead>;'
                  <TableHead className='text - white text - center'>;
                    With Zion;
                  </TableHead>;'
                  <TableHead className='text - white text - center'>;
                    Savings;
                  </TableHead>                </TableRow>;
              </TableHeader>;
              <TableBody>;"
                {[                <TableRow className="border - b border - zion - purple / 20">;"
                  <TableHead className="text - white">Service</TableHead>;"
                  <TableHead className="text - white text - center">Traditional Providers</TableHead>;"
                  <TableHead className="text - white text - center">With Zion</TableHead>;"
                  <TableHead className="text - white text - center">Savings</TableHead>;
              </TableHeader>;
              <TableBody>;
                {[;
                  {'
                    service: 'Server Hosting','
                    traditional: '$1, 200 / mo','
                    zion: '$650 / mo','
                    savings: '45%',
                  },

<<<<<<< HEAD:src_backup/components/ComparisonSection.tsx

import { GradientHeading } from './GradientHeading';
import { Button } from './ui/button';
import { CheckCircle2 } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,;
} from './ui/table';

import { GradientHeading } from "./GradientHeading",
import { Button } from "./ui/button";
import { CheckCircle2 } from 'lucide-react'
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
{
                    service: 'Server Hosting',
                    traditional: '$1,200/mo',
                    zion: '$650/mo',
                    savings: '45%',
                  },
<<<<<<< HEAD:src/components/ComparisonSection.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ComparisonSection.tsx
                  {
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                    service: 'IT Equipment'
                    traditional: 'Full Purchase'
                    zion: 'Flexible Rental'
                    savings: '60%'
                  }
                  {

<<<<<<< HEAD
                    service: '24 / 7 Support',
                    traditional: '$2, 500 / mo',
                    zion: '$950 / mo',
=======
                  {'
                    service: 'IT Equipment''
                    traditional: 'Full Purchase''
                    zion: 'Flexible Rental''
                    savings: '60%'
                  }
                  {}
'
                    service: '24 / 7 Support','
                    traditional: '$2, 500 / mo','
                    zion: '$950 / mo','
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ComparisonSection.tsx
                    savings: '62%',
                  },
                  {'
                    service: 'Storage Solutions','
                    traditional: '$800 / mo','
                    zion: '$350 / mo','
                    savings: '56%',
                  },
                  {'
                    service: 'Marketplace Listings','
                    traditional: '$99 / mo','
                    zion: 'Free','
                    savings: '100%',
                  },
                ].map ((item, index) => ('
                  <TableRow key={index} className='border - b border - zion - blue'>;'
                    <TableCell className='font - medium text - white'>;

<<<<<<< HEAD:src/components/ComparisonSection.tsx
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ComparisonSection.tsx
                      {item.service}
                    </TableCell>;'
                    <TableCell className='text - center text - zion - slate - light'>;
                      {item.traditional}
                    </TableCell>;'
                    <TableCell className='text - center text - zion - cyan font - semibold'>;
                      {item.zion}
                    </TableCell>;'
                    <TableCell className='text - center text - green - 400 font - bold'>;
                      {item.savings}
<<<<<<< HEAD:src_backup/components/ComparisonSection.tsx
                    </TableCell>
                  </TableRow>
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ComparisonSection.tsx
                  <TableRow key={index} className="border-b border-zion-blue">
                    <TableCell className="font-medium text-white">{item.service}</TableCell>
                    <TableCell className="text-center text-zion-slate-light">{item.traditional}</TableCell>
                    <TableCell className="text-center text-zion-cyan font-semibold">{item.zion}</TableCell>
=======
"
                  <TableRow key={index} className="border-b border-zion-blue">"
                    <TableCell className="font-medium text-white">{item.service}</TableCell>"
                    <TableCell className="text-center text-zion-slate-light">{item.traditional}</TableCell>"
                    <TableCell className="text-center text-zion-cyan font-semibold">{item.zion}</TableCell>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ComparisonSection.tsx
                    <TableCell className="text-center text-green-400 font-bold">{item.savings}</TableCell>

<<<<<<< HEAD:src/components/ComparisonSection.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

<<<<<<< HEAD:src_backup/components/ComparisonSection.tsx

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ComparisonSection.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ComparisonSection.tsx
                  </TableRow>
<<<<<<< HEAD:src_backup/components/ComparisonSection.tsx

<<<<<<< HEAD:src_backup/components/ComparisonSection.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { GradientHeading } from "./GradientHeading",
import { Button } from "./ui/button",
import { CheckCircle2 } from 'lucide-react'
=======
"
import { GradientHeading } from "./GradientHeading","
import { Button } from "./ui/button",'
import { CheckCircle2 } from 'lucide-react'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ComparisonSection.tsx
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table",
=======
import { GradientHeading } from "./GradientHeading",;
import { Button } from "./ui/button",;
import { CheckCircle2 } from 'lucide-react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table",;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ComparisonSection.tsx

export function ComparisonSection() {}
  return ("
    <section className="py-20 bg-zion-blue-dark">"
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">"
        <div className="text-center mb-12">
          <GradientHeading>Compare & Save</GradientHeading>";
          <p className="mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto">;
            See how Zion can drastically reduce your IT costs compared to traditional providers;
          </p>
        </div>
"
        <div className="max-w-4xl mx-auto">"
          <div className="bg-zion-blue-light rounded-lg border border-zion-purple/20 overflow-hidden">
            <Table>
              <TableHeader>"
                <TableRow className="border-b border-zion-purple/20">"
                  <TableHead className="text-white">Service</TableHead>"
                  <TableHead className="text-white text-center">Traditional Providers</TableHead>"
                  <TableHead className="text-white text-center">With Zion</TableHead>"
                  <TableHead className="text-white text-center">Savings</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
<<<<<<< HEAD:src_backup/components/ComparisonSection.tsx
                {[
                  { service: "Server Hosting", traditional: "$1,200/mo", zion: "$650/mo", savings: "45%" },
                  { service: "IT Equipment", traditional: "Full Purchase", zion: "Flexible Rental", savings: "60%" },
                  { service: "24/7 Support", traditional: "$2,500/mo", zion: "$950/mo", savings: "62%" },
                  { service: "Storage Solutions", traditional: "$800/mo", zion: "$350/mo", savings: "56%" },
                  { service: "Marketplace Listings", traditional: "$99/mo", zion: "Free", savings: "100%" }].map((item, index) => (
                  <TableRow key={index} className="border-b border-zion-blue">
                    <TableCell className="font-medium text-white">{item.service}</TableCell>
                    <TableCell className="text-center text-zion-slate-light">{item.traditional}</TableCell>
                    <TableCell className="text-center text-zion-cyan font-semibold">{item.zion}</TableCell>
=======
                {["
                  { service: "Server Hosting", traditional: "$1,200/mo", zion: "$650/mo", savings: "45%" },"
                  { service: "IT Equipment", traditional: "Full Purchase", zion: "Flexible Rental", savings: "60%" },"
                  { service: "24/7 Support", traditional: "$2,500/mo", zion: "$950/mo", savings: "62%" },"
                  { service: "Storage Solutions", traditional: "$800/mo", zion: "$350/mo", savings: "56%" };"
                  { service: "Marketplace Listings", traditional: "$99/mo", zion: "Free", savings: "100%" }].map((item, index) => ("
                  <TableRow key={index} className="border-b border-zion-blue">"
                    <TableCell className="font-medium text-white">{item.service}</TableCell>"
                    <TableCell className="text-center text-zion-slate-light">{item.traditional}</TableCell>"
                    <TableCell className="text-center text-zion-cyan font-semibold">{item.zion}</TableCell>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ComparisonSection.tsx
                    <TableCell className="text-center text-green-400 font-bold">{item.savings}</TableCell>
<<<<<<< HEAD:src_backup/components/ComparisonSection.tsx
                  </TableRow>
<<<<<<< HEAD:src/components/ComparisonSection.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======

                  </TableRow>
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

                  </TableRow>


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ComparisonSection.tsx
=======
                  </TableRow>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ComparisonSection.tsx
                ))}
              </TableBody>
            </Table>
          </div>
<<<<<<< HEAD:src_backup/components/ComparisonSection.tsx
<<<<<<< HEAD:src/components/ComparisonSection.tsx

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ComparisonSection.tsx


<<<<<<< HEAD:src_backup/components/ComparisonSection.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

          <div className="mt-8 flex justify-between items-center bg-zion-blue p-6 rounded-lg border border-zion-purple/20">
<<<<<<< HEAD:src/components/ComparisonSection.tsx
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ComparisonSection.tsx
=======
          <div className="mt-8 flex justify-between items-center bg-zion-blue p-6 rounded-lg border border-zion-purple/20">"
            <div className="flex items-start">"
              <CheckCircle2 className="mr-2 h-6 w-6 text-green-400 flex-shrink-0 mt-1" />"
              <p className="text-white">"
                <span className="font-bold">Total Annual Savings: </span>"
                <span className="text-green-400 font-bold text-xl">Up to 65%</span>"
                <span className="block text-sm text-zion-slate-light mt-1">Results may vary based on specific requirements and service levels</span>"
              </p>
            </div>
            <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white whitespace-nowrap">",
              Calculate Your Savings

          <div className="mt-8 flex justify-between items-center bg-zion-blue p-6 rounded-lg border border-zion-purple/20">
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ComparisonSection.tsx
            <div className="flex items-start">
              <CheckCircle2 className="mr-2 h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
              <p className="text-white">
                <span className="font-bold">Total Annual Savings: </span>
                <span className="text-green-400 font-bold text-xl">Up to 65%</span>
                <span className="block text-sm text-zion-slate-light mt-1">Results may vary based on specific requirements and service levels</span>
              </p>
            </div>
<<<<<<< HEAD
            
            <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white whitespace-nowrap">
              Calculate Your Savings
=======
            <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white whitespace-nowrap">
              Calculate Your Savings

<<<<<<< HEAD:src/components/ComparisonSection.tsx
<<<<<<< HEAD
              Calculate Your Savings

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======
              Calculate Your Savings


<<<<<<< HEAD:src_backup/components/ComparisonSection.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ComparisonSection.tsx

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ComparisonSection.tsx
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

            <Button className='bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white whitespace-nowrap'>
              Calculate Your Savings
<<<<<<< HEAD:src/components/ComparisonSection.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ComparisonSection.tsx
=======

"
          <div className="mt-8 flex justify-between items-center bg-zion-blue p-6 rounded-lg border border-zion-purple/20">"
            <div className="flex items-start">"
              <CheckCircle2 className="mr-2 h-6 w-6 text-green-400 flex-shrink-0 mt-1" />"
              <p className="text-white">"
                <span className="font-bold">Total Annual Savings: </span>"
                <span className="text-green-400 font-bold text-xl">Up to 65%</span>"
                <span className="block text-sm text-zion-slate-light mt-1">Results may vary based on specific requirements and service levels</span>
              </p>
            </div>"
            <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white whitespace-nowrap">

              Calculate Your Savings;
              Calculate Your Savings;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ComparisonSection.tsx
            </Button>
          </div>
        </div>
      </div>
<<<<<<< HEAD:src_backup/components/ComparisonSection.tsx
<<<<<<< HEAD:src/components/ComparisonSection.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    </section>
  )
import { GradientHeading } from "./GradientHeading",;
import { Button } from "./ui/button",;
=======
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ComparisonSection.tsx



    </section>
<<<<<<< HEAD:src_backup/components/ComparisonSection.tsx

<<<<<<< HEAD:src_backup/components/ComparisonSection.tsx

import { GradientHeading } from './GradientHeading';
import { Button } from './ui/button';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import { GradientHeading } from "./GradientHeading",;
import { Button } from "./ui/button",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
                <TableRow className="border-b border-zion-purple/20">;
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ComparisonSection.tsx

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


    </section>
<<<<<<< HEAD:src/components/ComparisonSection.tsx
<<<<<<< HEAD


import { GradientHeading } from './GradientHeading';
import { Button } from './ui/button';
=======
'
import { GradientHeading } from './GradientHeading';'
import { Button } from './ui/button';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ComparisonSection.tsx
=======
import { GradientHeading } from './GradientHeading';
import { Button } from './ui/button';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ComparisonSection.tsx
import { CheckCircle2 } from 'lucide-react';
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
<<<<<<< HEAD:src_backup/components/ComparisonSection.tsx
  TableRow,;'
} from './ui/table';

<<<<<<< HEAD:src_backup/components/ComparisonSection.tsx
=======
  TableRow,;
} from './ui/table';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ComparisonSection.tsx
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
<<<<<<< HEAD:src_backup/components/ComparisonSection.tsx

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ComparisonSection.tsx
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
<<<<<<< HEAD:src_backup/components/ComparisonSection.tsx
              </TableHeader>;
              <TableBody>;
                {[                <TableRow className="border-b border-zion-purple/20">;
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  <TableHead className="text-white">Service</TableHead>;
                  <TableHead className="text-white text-center">Traditional Providers</TableHead>;
                  <TableHead className="text-white text-center">With Zion</TableHead>;
                  <TableHead className="text-white text-center">Savings</TableHead>;
<<<<<<< HEAD
                </TableRow>;
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ComparisonSection.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ComparisonSection.tsx
              </TableHeader>;
              <TableBody>;
                {[                <TableRow className="border-b border-zion-purple/20">;,
  )
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
              </TableHeader>;
              <TableBody>;,
                {[;
                  { service: "Server Hosting", traditional: "$1,200/mo", zion: "$650/mo", savings: "45%" },;
                  { service: "IT Equipment", traditional: "Full Purchase", zion: "Flexible Rental", savings: "60%" },;
                  { service: "24/7 Support", traditional: "$2,500/mo", zion: "$950/mo", savings: "62%" };
                  { service: "Storage Solutions", traditional: "$800/mo", zion: "$350/mo", savings: "56%" };
                  { service: "Marketplace Listings", traditional: "$99/mo", zion: "Free", savings: "100%" }].map((item, index) => (;
                  <TableRow key={index} className="border-b border-zion-blue">;
<<<<<<< HEAD:src/components/ComparisonSection.tsx
                    <TableCell className="font-medium text-white">{item.service}</TableCell>;
                    <TableCell className="text-center text-zion-slate-light">{item.traditional}</TableCell>;
                    <TableCell className="text-center text-zion-cyan font-semibold">{item.zion}</TableCell>;
                    <TableCell className="text-center text-green-400 font-bold">{item.savings}</TableCell>;
                  </TableRow>;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
                    <TableCell className="font-medium text-white">{item && item.service}</TableCell>;
                    <TableCell className="text-center text-zion-slate-light">{item && item.traditional}</TableCell>;
                    <TableCell className="text-center text-zion-cyan font-semibold">{item && item.zion}</TableCell>;
=======
export function ComparisonSection() { return null; }
                  },;
                  {;'
                    service: 'IT Equipment',;'
                    traditional: 'Full Purchase',;'
                    zion: 'Flexible Rental',;'
                    savings: '60%',;
                  },;
                  {;'
                    service: '24/7 Support',;'
                    traditional: '$2,500/mo',;'
                    zion: '$950/mo',;'
                    savings: '62%',;
                  },;
                  {;'
                    service: 'Storage Solutions',;'
                    traditional: '$800/mo',;'
                    zion: '$350/mo',;'
                    savings: '56%',;
                  },;
                  {;'
                    service: 'Marketplace Listings',;'
                    traditional: '$99/mo',;'
                    zion: 'Free',;'
                    savings: '100%',;
                  },;
                ].map((item, index) => (;'
                  <TableRow key={index} className='border-b border-zion-blue'>;'
                    <TableCell className='font-medium text-white'>;
                      {item && item.service}
                    </TableCell>;'
                    <TableCell className='text-center text-zion-slate-light'>;
                      {item && item.traditional}
                    </TableCell>;'
                    <TableCell className='text-center text-zion-cyan font-semibold'>;
                      {item && item.zion}
                    </TableCell>;'
                    <TableCell className='text-center text-green-400 font-bold'>;
                      {item && item.savings}
                    </TableCell>                  </TableRow>;"
                  { service: "Marketplace Listings", traditional: "$99/mo", zion: "Free", savings: "100%" }].map((item, index) => (                  { service: "Marketplace Listings", traditional: "$99/mo", zion: "Free", savings: "100%" }].map((item, index) => (;"
                  <TableRow key={index} className="border-b border-zion-blue">;"
                    <TableCell className="font-medium text-white">{item && item.service}</TableCell>;"
                    <TableCell className="text-center text-zion-slate-light">{item && item.traditional}</TableCell>;"
                    <TableCell className="text-center text-zion-cyan font-semibold">{item && item.zion}</TableCell>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ComparisonSection.tsx
                    <TableCell className="text-center text-green-400 font-bold">{item && item.savings}</TableCell>;
<<<<<<< HEAD:src_backup/components/ComparisonSection.tsx

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ComparisonSection.tsx
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ComparisonSection.tsx
                ))}
              </TableBody>;
            </Table>;
          </div>;
<<<<<<< HEAD:src_backup/components/ComparisonSection.tsx
<<<<<<< HEAD:src_backup/components/ComparisonSection.tsx
<<<<<<< HEAD:src/components/ComparisonSection.tsx
<<<<<<< HEAD
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

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ComparisonSection.tsx
          <div className='mt-8 flex justify-between items-center bg-zion-blue p-6 rounded-lg border border-zion-purple/20'>;
            <div className='flex items-start'>;
              <CheckCircle2 className='mr-2 h-6 w-6 text-green-400 flex-shrink-0 mt-1' />;
              <p className='text-white'>;
                <span className='font-bold'>Total Annual Savings: </span>;
=======
'
          <div className='mt-8 flex justify-between items-center bg-zion-blue p-6 rounded-lg border border-zion-purple/20'>;'
            <div className='flex items-start'>;'
              <CheckCircle2 className='mr-2 h-6 w-6 text-green-400 flex-shrink-0 mt-1' />;'
              <p className='text-white'>;'
                <span className='font-bold'>Total Annual Savings: </span>;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ComparisonSection.tsx
                <span className='text-green-400 font-bold text-xl'>;
                  Up to 65%;
                </span>;'
                <span className='block text-sm text-zion-slate-light mt-1'>;
<<<<<<< HEAD:src_backup/components/ComparisonSection.tsx
                    </TableCell>                  </TableRow>;"
                  { service: "Marketplace Listings", traditional: "$99 / mo", zion: "Free", savings: "100%" }].map ((item, index) => (                  { service: "Marketplace Listings", traditional: "$99 / mo", zion: "Free", savings: "100%" }].map ((item, index) => ("
                  <TableRow key={index} className="border - b border - zion - blue">;"
                    <TableCell className="font - medium text - white">{item.service}</TableCell>;"
                    <TableCell className="text - center text - zion - slate - light">{item.traditional}</TableCell>;"
                    <TableCell className="text - center text - zion - cyan font - semibold">{item.zion}</TableCell>;"
                    <TableCell className="text - center text - green - 400 font - bold">{item.savings}</TableCell>))}
=======
                    </TableCell>                  </TableRow>;
                  { service: "Marketplace Listings", traditional: "$99 / mo", zion: "Free", savings: "100%" }].map ((item, index) => (                  { service: "Marketplace Listings", traditional: "$99 / mo", zion: "Free", savings: "100%" }].map ((item, index) => ("
                  <TableRow key={index} className="border - b border - zion - blue">;
                    <TableCell className="font - medium text - white">{item.service}</TableCell>;
                    <TableCell className="text - center text - zion - slate - light">{item.traditional}</TableCell>;
                    <TableCell className="text - center text - zion - cyan font - semibold">{item.zion}</TableCell>;
                    <TableCell className="text - center text - green - 400 font - bold">{item.savings}</TableCell>))}"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ComparisonSection.tsx
              </TableBody>;
            </Table>;
          </div>;'
          <div className='mt - 8 flex justify - between items - center bg - zion - blue p - 6 rounded - lg border border - zion - purple / 20'>;'
            <div className='flex items - start'>;'
              <CheckCircle2 className='mr - 2 h - 6 w - 6 text - green - 400 flex - shrink - 0 mt - 1' />;'
              <p className='text - white'>;'
                <span className='font - bold'>Total Annual Savings: </span>;'
                <span className='text - green - 400 font - bold text - xl'>;
                  Up to 65%;
                </span>;'
                <span className='block text - sm text - zion - slate - light mt - 1'>;
                  Results may vary based on specific requirements and service;
                  levels;
                </span>;
              </p>;
            </div>;
<<<<<<< HEAD:src_backup/components/ComparisonSection.tsx
'"
            <Button className='bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white whitespace - nowrap'>              Calculate Your Savings          <div className="mt - 8 flex justify - between items - center bg - zion - blue p - 6 rounded - lg border border - zion - purple / 20">;"
            <div className="flex items - start">;"
              <CheckCircle2 className="mr - 2 h - 6 w - 6 text - green - 400 flex - shrink - 0 mt - 1" />;"
              <p className="text - white">;"
                <span className="font - bold">Total Annual Savings: </span>;"
                <span className="text - green - 400 font - bold text - xl">Up to 65%</span>;"
=======
            <Button className='bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white whitespace - nowrap'>              Calculate Your Savings          <div className="mt - 8 flex justify - between items - center bg - zion - blue p - 6 rounded - lg border border - zion - purple / 20">;
            <div className="flex items - start">;
              <CheckCircle2 className="mr - 2 h - 6 w - 6 text - green - 400 flex - shrink - 0 mt - 1" />;
              <p className="text - white">;
                <span className="font - bold">Total Annual Savings: </span>;
                <span className="text - green - 400 font - bold text - xl">Up to 65%</span>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ComparisonSection.tsx
                <span className="block text - sm text - zion - slate - light mt - 1">Results may vary based on specific requirements and service levels</span>;
              </p>;
            </div>;"
            <Button className="bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white whitespace - nowrap">;
<<<<<<< HEAD:src_backup/components/ComparisonSection.tsx


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ComparisonSection.tsx
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ComparisonSection.tsx
            </Button>;
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD:src_backup/components/ComparisonSection.tsx
<<<<<<< HEAD:src/components/ComparisonSection.tsx
<<<<<<< HEAD
    </section>;
  );
}
<<<<<<< HEAD
;
=======

    </section>);
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
                <TableRow className="border-b border-zion-purple/20">;                  <TableHead className="text-white">Service</TableHead>;
                  <TableHead className="text-white text-center">Traditional Providers</TableHead>;
                  <TableHead className="text-white text-center">With Zion</TableHead>;
                  <TableHead className="text-white text-center">Savings</TableHead>;                ))}
              </TableBody>;
            </Table>;
          </div>;
          </div>;
        </div>;
      </div>;

    </section>);
}
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======

=======

    </section>);
}
;
  );
}
    </section>);
}
}}}}}})))))))))))
    </section>;
  );
}
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ComparisonSection.tsx
  );
}
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ComparisonSection.tsx

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
    </section>);
<<<<<<< HEAD:src_backup/components/ComparisonSection.tsx
}

  );
}
<<<<<<< HEAD:src/components/ComparisonSection.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ComparisonSection.tsx
=======
}'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ComparisonSection.tsx
