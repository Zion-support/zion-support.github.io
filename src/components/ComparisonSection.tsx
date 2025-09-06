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

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                  <TableHead className="text-white">Service</TableHead>
                  <TableHead className="text-white text-center">Traditional Providers</TableHead>
                  <TableHead className="text-white text-center">With Zion</TableHead>
                  <TableHead className="text-white text-center">Savings</TableHead>
<<<<<<< HEAD
=======

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

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                  </TableRow>

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
                  { service: "Storage Solutions", traditional: "$800/mo", zion: "$350/mo", savings: "56%" },
                  { service: "Marketplace Listings", traditional: "$99/mo", zion: "Free", savings: "100%" }].map((item, index) => (
                  <TableRow key={index} className="border-b border-zion-blue">
                    <TableCell className="font-medium text-white">{item.service}</TableCell>
                    <TableCell className="text-center text-zion-slate-light">{item.traditional}</TableCell>
                    <TableCell className="text-center text-zion-cyan font-semibold">{item.zion}</TableCell>
                    <TableCell className="text-center text-green-400 font-bold">{item.savings}</TableCell>
                  </TableRow>
<<<<<<< HEAD
<<<<<<< HEAD
=======

                  </TableRow>
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                ))}
              </TableBody>
            </Table>
          </div>

<<<<<<< HEAD


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

          <div className="mt-8 flex justify-between items-center bg-zion-blue p-6 rounded-lg border border-zion-purple/20">
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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

<<<<<<< HEAD
              Calculate Your Savings

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
            </Button>
          </div>
        </div>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    </section>
  )
import { GradientHeading } from "./GradientHeading",;
import { Button } from "./ui/button",;
=======



    </section>


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

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                  <TableHead className="text-white">Service</TableHead>;
                  <TableHead className="text-white text-center">Traditional Providers</TableHead>;
                  <TableHead className="text-white text-center">With Zion</TableHead>;
                  <TableHead className="text-white text-center">Savings</TableHead>;
<<<<<<< HEAD
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
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                ))}
              </TableBody>;
            </Table>;
          </div>;
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
            </Button>;
          </div>;
        </div>;
      </div>;
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

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
