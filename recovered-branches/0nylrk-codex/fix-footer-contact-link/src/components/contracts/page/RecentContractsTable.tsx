
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Button } from "@/components/ui/button";
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

import { Button  } from '@/components / ui / button';
interface Contract {

<<<<<<< HEAD
<<<<<<< HEAD
=======
import { Button } from "@/components/ui/button";
interface Contract {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


import { Button  } from '@/components / ui / button';
interface Contract {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  id: string;
  title: string;
  client: string;
  talent: string;
  date: string;
  isSmartContract: boolean;
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

interface RecentContractsTableProps {}
import { Button } from "@/components/ui/button",
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
interface RecentContractsTableProps {;import { Button } from "@/components/ui/button",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
interface RecentContractsTableProps {;import { Button } from "@/components/ui/button",
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

interface RecentContractsTableProps {;

interface RecentContractsTableProps {

import { Button } from "@/components/ui/button",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
interface Contract {
=======
interface Contract {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  id: string,
  title: string,
  client: string,
  talent: string,
  date: string,
  isSmartContract: boolean";
import { Button } from "@/components/ui/button",;
interface Contract {;
  id: string,;
  title: string,;
  client: string,;
  talent: string,;
  date: string,;
  isSmartContract: boolean;
}
;
interface RecentContractsTableProps {;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  contracts: Contract[];
  onViewContract: (contractId: string) => void
}

<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
interface RecentContractsTableProps {;


<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  contracts: Contract[];
  onViewContract: (contractId: string) => void;
=======

interface RecentContractsTableProps {;


  contracts: Contract[];
  onViewContract: (contractId: string) => void
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}



<<<<<<< HEAD
<<<<<<< HEAD
export function RecentContractsTable({ contracts, onViewContract }: RecentContractsTableProps) {
<<<<<<< HEAD


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD


<<<<<<< HEAD
=======
export function RecentContractsTable({ contracts, onViewContract }: RecentContractsTableProps) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  return (
;
<<<<<<< HEAD
interface Contract {;
  id:string,;
  title:string,;
  client:string,;
  talent:string,;
  date:string,;
  isSmartContract:boolean;}
;
interface RecentContractsTableProps {;
  contracts:Contract[],;
  onViewContract:(contractId:string) => void;
}
;
export function RecentContractsTable({ contracts, onViewContract } RecentContractsTableProps) {;
  return (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  return (
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
interface RecentContractsTableProps {;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
interface RecentContractsTableProps {;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
export function RecentContractsTable({ contracts, onViewContract }: RecentContractsTableProps) {


  return (
  return (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    <>;
      <h2 className="text-2xl font-bold mb-4">Recent Contracts</h2>;
      <div className="overflow-x-auto rounded-md border">;
        <table className="min-w-full divide-y divide-border">;
          <thead className="bg-muted">;
            <tr>;
<<<<<<< HEAD
=======
    <>;"
      <h2 className="text-2xl font-bold mb-4">Recent Contracts</h2>;"
      <div className="overflow-x-auto rounded-md border">;"
        <table className="min-w-full divide-y divide-border">;"
          <thead className="bg-muted">;
            <tr>;

              <th"
                scope="col""
                className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">;
                Contract Title;
=======
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">;
                Contract Title;
              </th>;
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">;
                Client;
              </th>;
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">;
                Talent;
              </th>;
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">;
                Date;
              </th>;
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">;
                Type;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              </th>;
              <th"
                scope="col""
                className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">;
                Client;
              </th>;
              <th"
                scope="col""
                className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">;
                Talent;
              </th>;
              <th"
                scope="col""
                className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">;
                Date;
              </th>;
              <th"
                scope="col""
                className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">;



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                Type;
              </th>;"
              <th scope="col" className="relative px-6 py-3">;"
                <span className="sr-only">Actions</span>;
              </th>;
            </tr>;
          </thead>;"
          <tbody className="bg-card divide-y divide-border">;
<<<<<<< HEAD
<<<<<<< HEAD
=======

            {contracts && contracts.map((contract) => (;
              <tr key={contract && contract.id}>;"
                <td className="px-6 py-4 whitespace-nowrap text-sm">;
                  {contract && contract.title}
                </td>;"
                <td className="px-6 py-4 whitespace-nowrap text-sm">;
                  {contract && contract.client}
                </td>;"
                <td className="px-6 py-4 whitespace-nowrap text-sm">;
                  {contract && contract.talent}
                </td>;"
                <td className="px-6 py-4 whitespace-nowrap text-sm">;
                  {new Date(contract && contract.date).toLocaleDateString()}
                </td>;"
                <td className="px-6 py-4 whitespace-nowrap text-sm">;
                  {contract && contract.isSmartContract ? (;"
                    <span className="inline-flex items-center px-2 && 2.5 py-0 && 0.5 rounded-full bg-primary/10 text-primary text-xs">;
                      Smart Contract;
                    </span>;
                  ) : (;"
                    <span className="inline-flex items-center px-2 && 2.5 py-0 && 0.5 rounded-full bg-muted text-muted-foreground text-xs">;



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
            {contracts && contracts.map((contract) => (;
              <tr key={contract && contract.id}>;
                <td className="px-6 py-4 whitespace-nowrap text-sm">;
                  {contract && contract.title}
                </td>;
                <td className="px-6 py-4 whitespace-nowrap text-sm">;
                  {contract && contract.client}
                </td>;
                <td className="px-6 py-4 whitespace-nowrap text-sm">;
                  {contract && contract.talent}
                </td>;
                <td className="px-6 py-4 whitespace-nowrap text-sm">;
                  {new Date(contract && contract.date).toLocaleDateString()}
                </td>;
                <td className="px-6 py-4 whitespace-nowrap text-sm">;
                  {contract && contract.isSmartContract ? (;
                    <span className="inline-flex items-center px-2 && 2.5 py-0 && 0.5 rounded-full bg-primary/10 text-primary text-xs">;
                      Smart Contract;
                    </span>;
                  ) : (;
                    <span className="inline-flex items-center px-2 && 2.5 py-0 && 0.5 rounded-full bg-muted text-muted-foreground text-xs">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                      Standard;
                    </span>;
                  )}
                </td>;"
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm">;
<<<<<<< HEAD
                  <Button
                    variant="ghost"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                    size="sm"
=======
  contracts: Contract[];
  onViewContract: (contractId: string) => void
}
export function RecentContractsTable({
  contracts
  onViewContract
}: RecentContractsTableProps) {

export function RecentContractsTable({ contracts, onViewContract }: RecentContractsTableProps) {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Recent Contracts</h2>
      <div className="overflow-x-auto rounded-md border">
        <table className="min-w-full divide-y divide-border">
          <thead className="bg-muted">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Contract Title
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Client
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Talent
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Type
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-card divide-y divide-border">
            {contracts.map((contract) => (
              <tr key={contract.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {contract.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {contract.client}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {contract.talent}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {new Date(contract.date).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {contract.isSmartContract ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs">
                      Smart Contract
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground text-xs">
                      Standard
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                  <Button 
                    variant="ghost" 
                    size="sm"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                    onClick={() => onViewContract(contract.id)}
                  >
                    View
                  </Button>
                </td>
              </tr>
            ))}
<<<<<<< HEAD

    </>;

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
                  <Button
=======
                    size="sm"                  <Button
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                    size="sm"                  <Button
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                    size="sm"
                  <Button
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                    variant="ghost"
                    size="sm"
    </>
=======


                  <Button"
                    variant="ghost""
                    size="sm"
    </>

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    onClick={() => onViewContract(contract && contract.id)}
interface RecentContractsTableProps {}
  contracts: Contract[];
  onViewContract: (contract_id: string) => void;
}
export /**;
 * RecentContractsTable - Function description;
 */
function RecentContractsTable() {}
  return (
<<<<<<< HEAD
    <>;
      <h2 className="text - 2xl font - bold mb - 4">Recent Contracts</h2>;
      <div className="overflow - x-auto rounded - md border">;
        <table className="min - w-full divide - y divide - border">;
          <thead className="bg - muted">;
            <tr>;
              <th;
                scope="col";
                className="px - 6 py - 3 text - left text - xs font - medium text - muted - foreground uppercase tracking - wider";
              >;
                Contract Title;
              </th>;
              <th;
                scope="col";
                className="px - 6 py - 3 text - left text - xs font - medium text - muted - foreground uppercase tracking - wider";
              >;
                Client;
              </th>;
              <th;
                scope="col";
                className="px - 6 py - 3 text - left text - xs font - medium text - muted - foreground uppercase tracking - wider";
              >;
                Talent;
              </th>;
              <th;
                scope="col";
                className="px - 6 py - 3 text - left text - xs font - medium text - muted - foreground uppercase tracking - wider";
              >;
                Date;
              </th>;
              <th;
                scope="col";
                className="px - 6 py - 3 text - left text - xs font - medium text - muted - foreground uppercase tracking - wider";
              >;
                Type;
              </th>;
              <th scope="col" className="relative px - 6 py - 3">;
                <span className="sr - only">Actions</span>;
              </th>;
            </tr>;
          </thead>;
          <tbody className="bg - card divide - y divide - border">;
            {contracts.map ((contract) => (
              <tr key={contract.id}>;
                <td className="px - 6 py - 4 whitespace - nowrap text - sm">;
                  {contract.title}
                </td>;
                <td className="px - 6 py - 4 whitespace - nowrap text - sm">;
                  {contract.client}
                </td>;
                <td className="px - 6 py - 4 whitespace - nowrap text - sm">;
                  {contract.talent}
                </td>;
                <td className="px - 6 py - 4 whitespace - nowrap text - sm">;
                  {new Date (contract.date).toLocaleDateString ()}
                </td>;
                <td className="px - 6 py - 4 whitespace - nowrap text - sm">;
                  {contract.isSmartContract ? (
                    <span className="inline - flex items - center px - 2.5 py - 0.5 rounded - full bg - primary / 10 text - primary text - xs">;
                      Smart Contract;
                    </span>) : (
                    <span className="inline - flex items - center px - 2.5 py - 0.5 rounded - full bg - muted text - muted - foreground text - xs">;
                      Standard;
                    </span>)}
                </td>;
                <td className="px - 6 py - 4 whitespace - nowrap text - right text - sm">;
                  <Button;
                    variant="ghost";
                    size="sm";
                    on_click={() => onViewContract (contract.id)}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  <Button ;
                    variant="ghost" ;
                    size="sm";
                    onClick={() => onViewContract(contract.id)}
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    <>;"
      <h2 className="text - 2xl font - bold mb - 4">Recent Contracts</h2>;"
      <div className="overflow - x-auto rounded - md border">;"
        <table className="min - w-full divide - y divide - border">;"
          <thead className="bg - muted">;
            <tr>;
              <th;"
                scope="col";"
                className="px - 6 py - 3 text - left text - xs font - medium text - muted - foreground uppercase tracking - wider";
              >;
                Contract Title;
              </th>;
              <th;"
                scope="col";"
                className="px - 6 py - 3 text - left text - xs font - medium text - muted - foreground uppercase tracking - wider";
              >;
                Client;
              </th>;
              <th;"
                scope="col";"
                className="px - 6 py - 3 text - left text - xs font - medium text - muted - foreground uppercase tracking - wider";
              >;
                Talent;
              </th>;
              <th;"
                scope="col";"
                className="px - 6 py - 3 text - left text - xs font - medium text - muted - foreground uppercase tracking - wider";
              >;
                Date;
              </th>;
              <th;"
                scope="col";"
                className="px - 6 py - 3 text - left text - xs font - medium text - muted - foreground uppercase tracking - wider";
              >;
                Type;
              </th>;"
              <th scope="col" className="relative px - 6 py - 3">;"
                <span className="sr - only">Actions</span>;
              </th>;
            </tr>;
          </thead>;"
          <tbody className="bg - card divide - y divide - border">;
            {contracts.map ((contract) => (
              <tr key={contract.id}>;"
                <td className="px - 6 py - 4 whitespace - nowrap text - sm">;
                  {contract.title}
                </td>;"
                <td className="px - 6 py - 4 whitespace - nowrap text - sm">;
                  {contract.client}
                </td>;"
                <td className="px - 6 py - 4 whitespace - nowrap text - sm">;
                  {contract.talent}
                </td>;"
                <td className="px - 6 py - 4 whitespace - nowrap text - sm">;
                  {new Date (contract.date).toLocaleDateString ()}
                </td>;"
                <td className="px - 6 py - 4 whitespace - nowrap text - sm">;
                  {contract.isSmartContract ? ("
                    <span className="inline - flex items - center px - 2.5 py - 0.5 rounded - full bg - primary / 10 text - primary text - xs">;
                      Smart Contract;
                    </span>) : ("
                    <span className="inline - flex items - center px - 2.5 py - 0.5 rounded - full bg - muted text - muted - foreground text - xs">;
                      Standard;
                    </span>)}
                </td>;"
                <td className="px - 6 py - 4 whitespace - nowrap text - right text - sm">;
                  <Button;"
                    variant="ghost";"
                    size="sm";
                    on_click={() => onViewContract (contract.id)}



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  >;
                    View;
                  </Button>;
                </td>;
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
=======
=======

=======
              </tr>;
            ))}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          </tbody>;
        </table>;
      </div>;
    </>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31




<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  );
}
=======
  );

}
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  );
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              </tr>))}
          </tbody>;
        </table>;
      </div>;
    </>);
}
<<<<<<< HEAD
  ),;}
 interface Contract {
  id: string;
title: string;
client: string;
talent: string;
date: string;
isSmartContract: boolean 
}interface RecentContractsTableProps {
  contracts: Contract[];
onViewContract: (contractId: string) => void 
}export function RecentContractsTable ({
  contracts, onViewContract 
}: RecentContractsTableProps) {
  return (<> <h2 className="text-2xl font-bold mb-4" >Recent Contracts</h2> <div className="overflow-x-auto rounded-md border" > <table className="min-w-full divide-y divide-border" > <thead className="bg-muted" > col"className=" px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider"> Contract Title </th> <th scope=" col"className=" px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider"> Client </th> <th scope=" col"className=" px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider"> Talent </th> <th scope=" col"className=" px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider"> Date </th> <th scope=" col"className=" px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider"> Type </th> <th scope=" col"className=" relative px-6 py-3"> <span className=" sr-only">Actions</span> </th> </tr> </thead> <tbody className=" bg-card divide-y divide-border"> {
  contracts.map ( (contract) => (<tr key= {
  contract.id 
}> Smart Contract </span>) : (<span className=" inline-flex items-center px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground text-xs"> Standard </span>) 
}</td> <td className=" px-6 py-4 whitespace-nowrap text-right text-sm" > <Button > View </Button> </td> </tr>) ) 
}</tbody> </table> </div> </>) 
}
          </tbody>
        </table>
      </div>
    </>
          </tbody>;
        </table>;
      </div>;
    </>;
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
