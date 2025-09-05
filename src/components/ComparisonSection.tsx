
<<<<<<< HEAD
import { GradientHeading } from "./GradientHeading",;
import { Button } from "./ui/button",;
import { CheckCircle2 } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table",;
;
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
;
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
                  { service:"Server Hosting", traditional:"$1,200/mo", zion:"$650/mo", savings:"45%" },;
                  { service:"IT Equipment", traditional:"Full Purchase", zion:"Flexible Rental", savings:"60%" },;
                  { service:"24/7 Support", traditional:"$2,500/mo", zion:"$950/mo", savings:"62%" },;
                  { service:"Storage Solutions", traditional:"$800/mo", zion:"$350/mo", savings:"56%" },;
                  { service:"Marketplace Listings", traditional:"$99/mo", zion:"Free", savings:"100%" }].map((item, index) => (;
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
;
          <div className="mt-8 flex justify-between items-center bg-zion-blue p-6 rounded-lg border border-zion-purple/20">;
            <div className="flex items-start">;
              <CheckCircle2 className="mr-2 h-6 w-6 text-green-400 flex-shrink-0 mt-1" />;
              <p className="text-white">;
                <span className="font-bold">Total Annual Savings:</span>;
                <span className="text-green-400 font-bold text-xl">Up to 65%</span>;
                <span className="block text-sm text-zion-slate-light mt-1">Results may vary based on specific requirements and service levels</span>;
              </p>;
            </div>;
            ;
            <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white whitespace-nowrap">;
              Calculate Your Savings;
            </Button>;
          </div>;
        </div>;
      </div>;
    </section>;
  );
=======
import { GradientHeading } from "./GradientHeading",
import { Button } from "./ui/button",
import { CheckCircle2 } from 'lucide-react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table",
export function ComparisonSection() {
  return (
    <section className=&quot;py-20 bg-zion-blue-dark&quot;>
      <div className=&quot;container mx-auto px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;text-center mb-12&quot;>

export function ComparisonSection() {_return (_<section className="py-20 bg-zion-blue-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <GradientHeading>Compare & Save</GradientHeading>
          <p className=&quot;mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto&quot;>
            See how Zion can drastically reduce your IT costs compared to traditional providers
          </p>
        </div>

        <div className=&quot;max-w-4xl mx-auto&quot;>
          <div className=&quot;bg-zion-blue-light rounded-lg border border-zion-purple/20 overflow-hidden&quot;>
            <Table>
              <TableHeader>
                <TableRow className=&quot;border-b border-zion-purple/20&quot;>
                  <TableHead className=&quot;text-white&quot;>Service</TableHead>
                  <TableHead className=&quot;text-white text-center&quot;>Traditional Providers</TableHead>
                  <TableHead className=&quot;text-white text-center&quot;>With Zion</TableHead>
                  <TableHead className=&quot;text-white text-center&quot;>Savings</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { service: &quot;Server Hosting&quot;, traditional: &quot;$1,200/mo&quot;, zion: &quot;$650/mo&quot;, savings: &quot;45%&quot; },
                  { service: &quot;IT Equipment&quot;, traditional: &quot;Full Purchase&quot;, zion: &quot;Flexible Rental&quot;, savings: &quot;60%&quot; },
                  { service: &quot;24/7 Support&quot;, traditional: &quot;$2,500/mo&quot;, zion: &quot;$950/mo&quot;, savings: &quot;62%&quot; },
                  { service: &quot;Storage Solutions&quot;, traditional: &quot;$800/mo&quot;, zion: &quot;$350/mo&quot;, savings: &quot;56%&quot; },
                  { service: &quot;Marketplace Listings&quot;, traditional: &quot;$99/mo&quot;, zion: &quot;Free&quot;, savings: &quot;100%&quot; }].map((item, index) => (
                  <TableRow key={index} className=&quot;border-b border-zion-blue&quot;>
                    <TableCell className=&quot;font-medium text-white&quot;>{item.service}</TableCell>
                    <TableCell className=&quot;text-center text-zion-slate-light&quot;>{item.traditional}</TableCell>
                    <TableCell className=&quot;text-center text-zion-cyan font-semibold&quot;>{item.zion}</TableCell>
                    <TableCell className=&quot;text-center text-green-400 font-bold&quot;>{item.savings}</TableCell>                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className=&quot;mt-8 flex justify-between items-center bg-zion-blue p-6 rounded-lg border border-zion-purple/20&quot;>
            <div className=&quot;flex items-start&quot;>
              <CheckCircle2 className=&quot;mr-2 h-6 w-6 text-green-400 flex-shrink-0 mt-1&quot; />
              <p className=&quot;text-white&quot;>
                <span className=&quot;font-bold&quot;>Total Annual Savings: </span>
                <span className=&quot;text-green-400 font-bold text-xl&quot;>Up to 65%</span>
                <span className=&quot;block text-sm text-zion-slate-light mt-1&quot;>Results may vary based on specific requirements and service levels</span>
              </p>
            </div>
            
            <Button className=&quot;bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white whitespace-nowrap&quot;>
              Calculate Your Savings
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
