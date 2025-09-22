<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Button } from "@/components/ui/button";
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

import { Button  } from '@/components / ui / button';
interface Contract {

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
=======
import { Button  } from '@/components / ui / button';
interface Contract {

import { Button } from "@/components/ui/button";
interface Contract {

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  id: string;
  title: string;
  client: string;
  talent: string;
  date: string;
isSmartContract: boolean;
}

<<<<<<< HEAD
<<<<<<< HEAD

interface RecentContractsTableProps {}
import { Button } from "@/components/ui/button",
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======

}

interface RecentContractsTableProps {;import { Button } from "@/components/ui/button",;
interface Contract {

import { Button  } from '@/components / ui / button';
interface Contract {
  // TODO: Implement
}
  id: string;,

  title: string;
  client: string;,
  talent: string;

  date: string;,
  isSmartContract: boolean;

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

interface RecentContractsTableProps {;

interface RecentContractsTableProps {

import { Button } from "@/components/ui/button",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
interface Contract {

=======
  // TODO: Implement
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  id: string,
  title: string,
  client: string,
  talent: string,

  date: string,
  isSmartContract: boolean";
import { Button } from "@/components/ui/button",;
  isSmartContract: boolean;"
import { Button } from "@/components/ui/button",;"
pr-12325
  isSmartContract: boolean;"
import { Button } from "@/components/ui/button",;"

interface Contract {;
  id: string,;
  title: string,;
  client: string,;
  talent: string,;
  date: string,;}
  isSmartContract: boolean;}
}
;
interface RecentContractsTableProps {;

<<<<<<< HEAD
<<<<<<< HEAD
  contracts: Contract[];
  onViewContract: (contractId: string) => void
}

<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  contracts: Contract[];
  onViewContract: (contractId: string) => void;
=======

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
interface RecentContractsTableProps {;

  contracts: Contract[];
  onViewContract: (contractId: string) => void
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}

<<<<<<< HEAD
export function RecentContractsTable({ contracts, onViewContract }: RecentContractsTableProps) {
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  return (
;
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
interface RecentContractsTableProps {;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export function RecentContractsTable({ contracts, onViewContract }: RecentContractsTableProps) {

  return (
interface RecentContractsTableProps {;
  contracts: Contract[];
  onViewContract: (contractId: string) => void
}
export function RecentContractsTable(): any ({;
  contracts,;
  onViewContract,;
}: RecentContractsTableProps) {;
  return (

import { Button } from "@/components/ui/button",;
;
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
  return (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    <>;
      <h2 className="text-2xl font-bold mb-4">Recent Contracts</h2>;
      <div className="overflow-x-auto rounded-md border">;
        <table className="min-w-full divide-y divide-border">;
          <thead className="bg-muted">;
            <tr>;

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

                      Standard;
                    </span>;
                  )}
                </td>;"
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm">;
<Button
                    variant="ghost"
<<<<<<< HEAD
<<<<<<< HEAD
                    size="sm"
                    onClick={() => onViewContract(contract.id)}
                  >
                    View
                  </Button>
                </td>
              </tr>
            ))}
</>;

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
                    size="sm"                  <Button
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                    size="sm"
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
                    onClick={() => onViewContract(contract.id)}
                  >
                    View
                  </Button>
                </td>
              </tr>
            ))}
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
<>;
      <h2 className="text - 2xl font - bold mb-4">Recent Contracts</h2>;
      <div className="overflow - x-auto rounded-md border">;
        <table className="min - w-full divide - y divide-border">;
          <thead className="bg-muted">;
            <tr>;
              <th;
                scope="col";
                className="px - 6 py - 3 text - left text - xs font - medium text - muted - foreground uppercase tracking-wider";
              >;
                Contract Title;
              </th>;
              <th;
                scope="col";
                className="px - 6 py - 3 text - left text - xs font - medium text - muted - foreground uppercase tracking-wider";
              >;
                Client;
              </th>;
              <th;
                scope="col";
                className="px - 6 py - 3 text - left text - xs font - medium text - muted - foreground uppercase tracking-wider";
              >;
                Talent;
              </th>;
              <th;
                scope="col";
                className="px - 6 py - 3 text - left text - xs font - medium text - muted - foreground uppercase tracking-wider";
              >;
                Date;
              </th>;
              <th;
                scope="col";
                className="px - 6 py - 3 text - left text - xs font - medium text - muted - foreground uppercase tracking-wider";
              >;
                Type;
              </th>;
              <th scope="col" className="relative px - 6 py-3">;
                <span className="sr-only">Actions</span>;
              </th>;
            </tr>;
          </thead>;
          <tbody className="bg - card divide - y divide-border">;
            {contracts.map ((contract) => (
              <tr key={contract.id}>;
                <td className="px - 6 py - 4 whitespace - nowrap text-sm">;
                  {contract.title}
                </td>;
                <td className="px - 6 py - 4 whitespace - nowrap text-sm">;
                  {contract.client}
                </td>;
                <td className="px - 6 py - 4 whitespace - nowrap text-sm">;
                  {contract.talent}
                </td>;
                <td className="px - 6 py - 4 whitespace - nowrap text-sm">;
                  {new Date (contract.date).toLocaleDateString ()}
                </td>;
                <td className="px - 6 py - 4 whitespace - nowrap text-sm">;
                  {contract.isSmartContract ? (
                    <span className="inline - flex items - center px - 2.5 py - 0.5 rounded - full bg - primary / 10 text - primary text-xs">;
                      Smart Contract;
                    </span>) : (
                    <span className="inline - flex items - center px - 2.5 py - 0.5 rounded - full bg - muted text - muted - foreground text-xs">;
                      Standard;
                    </span>)}
                </td>;
                <td className="px - 6 py - 4 whitespace - nowrap text - right text-sm">;
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
                  <Button ;
                    variant="ghost" ;
                    size="sm";
                    onClick={() => onViewContract(contract.id)}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

</tr>;
            ))}

  contracts: Contract[];,
  onViewContract: (contractId: string) => void;
}

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

export function RecentContractsTable({ contracts, onViewContract }: RecentContractsTableProps) {

  return (
  return (
    <>;"
      <h2 className="text-2xl font-bold mb-4">Recent Contracts</h2>;""
      <div className="overflow-x-auto rounded-md border">;"
</div>"
        <table className="min-w-full divide-y divide-border">;"
</table>"
          <thead className="bg-muted">;"
</thead>
            <tr>;
</tr>
              <th;"
                scope="col"""
                className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">;"
</th>
              </th>;
              <th;"
                scope="col"""
                className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">;"
</th>
              </th>;
              <th;"
                scope="col"""
                className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">;"
</th>
              </th>;
              <th;"
                scope="col"""
                className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">;"
</th>
              </th>;
              <th;"
                scope="col"""
                className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">;"
</th>
              </th>;"
              <th scope="col" className="relative px-6 py-3">;"
</th>"
                <span className="sr-only">Actions</span>;"
              </th>;
            </tr>;
          </thead>;"
          <tbody className="bg-card divide-y divide-border">;"
</tbody>
              <tr key={contract && contract.id}>;
</tr>"
                <td className="px-6 py-4 whitespace-nowrap text-sm">;"
</td>
                </td>;"
                <td className="px-6 py-4 whitespace-nowrap text-sm">;"
</td>
                </td>;"
                <td className="px-6 py-4 whitespace-nowrap text-sm">;"
</td>
                </td>;"
                <td className="px-6 py-4 whitespace-nowrap text-sm">;"
</td>
                </td>;"
                <td className="px-6 py-4 whitespace-nowrap text-sm">;"
</td>"
                    <span className="inline-flex items-center px-2 && 2.5 py-0 && 0.5 rounded-full bg-primary/10 text-primary text-xs">;"
</span>
                    </span>;"
                    <span className="inline-flex items-center px-2 && 2.5 py-0 && 0.5 rounded-full bg-muted text-muted-foreground text-xs">;"
</span>
                    </span>;
                </td>;"
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm">;"
</td>
                  <Button;"
                    variant="ghost"""
                    size="sm""
                  <Button;"
                    variant="ghost"""
                    size="sm""
    </>
</Button>
    <>;"
      <h2 className="text - 2xl font - bold mb - 4">Recent Contracts</h2>;""
      <div className="overflow - x-auto rounded - md border">;"
</div>"
        <table className="min - w-full divide - y divide - border">;"
</table>"
          <thead className="bg - muted">;"
</thead>
            <tr>;
</tr>
              <th;"
                scope="col";""
                className="px - 6 py - 3 text - left text - xs font - medium text - muted - foreground uppercase tracking - wider";"
              >;
</th>
              </th>;
              <th;"
                scope="col";""
                className="px - 6 py - 3 text - left text - xs font - medium text - muted - foreground uppercase tracking - wider";"
              >;
</th>
              </th>;
              <th;"
                scope="col";""
                className="px - 6 py - 3 text - left text - xs font - medium text - muted - foreground uppercase tracking - wider";"
              >;
</th>
              </th>;
              <th;"
                scope="col";""
                className="px - 6 py - 3 text - left text - xs font - medium text - muted - foreground uppercase tracking - wider";"
              >;
</th>
              </th>;
              <th;"
                scope="col";""
                className="px - 6 py - 3 text - left text - xs font - medium text - muted - foreground uppercase tracking - wider";"
              >;
</th>
              </th>;"
              <th scope="col" className="relative px - 6 py - 3">;"
</th>"
                <span className="sr - only">Actions</span>;"
              </th>;
            </tr>;
          </thead>;"
          <tbody className="bg - card divide - y divide - border">;"
</tbody>
              <tr key={contract.id}>;
</tr>"
                <td className="px - 6 py - 4 whitespace - nowrap text - sm">;"
</td>
                </td>;"
                <td className="px - 6 py - 4 whitespace - nowrap text - sm">;"
</td>
                </td>;"
                <td className="px - 6 py - 4 whitespace - nowrap text - sm">;"
</td>
                </td>;"
                <td className="px - 6 py - 4 whitespace - nowrap text - sm">;"
</td>
                </td>;"
                <td className="px - 6 py - 4 whitespace - nowrap text - sm">;"
</td>"
                    <span className="inline - flex items - center px - 2.5 py - 0.5 rounded - full bg - primary / 10 text - primary text - xs">;"
</span>)
                    </span>) : ("
                    <span className="inline - flex items - center px - 2.5 py - 0.5 rounded - full bg - muted text - muted - foreground text - xs">;"
</span>)
                    </span>)}
                </td>;"
                <td className="px - 6 py - 4 whitespace - nowrap text - right text - sm">;"
</td>
                  <Button;"
                    variant="ghost";""
                    size="sm";"
                    on_click={() => onViewContract (contract.id)}
</Button>
                  <Button ;"
                    variant="ghost" ;""
                    size="sm";"
                    onClick={() => onViewContract(contract.id)}
</Button>
                  </Button>;
                </td>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          </tbody>;
        </table>;
      </div>;
    </>;

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  );
}
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  );
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  );
}

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              </tr>))}
          </tbody>;
        </table>;
      </div>;
    </>);
}
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

  // TODO: Implement
}
  id: string;,
  title: string;
client: string;,
  talent: string;
date: string;,
  isSmartContract: boolean;
}interface RecentContractsTableProps {
  // TODO: Implement
}
          </tbody>
        </table>
      </div>
    </>
;

  contracts: Contract[];,
  onViewContract: (contractId: string) => void;

export function RecentContractsTable({ contracts, onViewContract }: RecentContractsTableProps) {

  return (
    <>;"
      <h2 className="text-2xl font-bold mb-4">Recent Contracts</h2>;""
      <div className="overflow-x-auto rounded-md border">;"
</div>"
        <table className="min-w-full divide-y divide-border">;"
</table>"
          <thead className="bg-muted">;"
</thead>
            <tr>;
</tr>
              <th;"
                scope="col"""
                className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">;"
</th>
              </th>;
              </th>;"
              <th scope="col" className="relative px-6 py-3">;"
</th>"
                <span className="sr-only">Actions</span>;"
            </tr>;
          </thead>;"
          <tbody className="bg-card divide-y divide-border">;"
</tbody>
              <tr key={contract && contract.id}>;
</tr>"
                <td className="px-6 py-4 whitespace-nowrap text-sm">;"
</td>
                </td>;"
</td>"
                    <span className="inline-flex items-center px-2 && 2.5 py-0 && 0.5 rounded-full bg-primary/10 text-primary text-xs">;"
</span>
                    </span>;"
                    <span className="inline-flex items-center px-2 && 2.5 py-0 && 0.5 rounded-full bg-muted text-muted-foreground text-xs">;"
                    </span>;
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm">;"
                  <Button;"
                    variant="ghost"""
                    size="sm""
    </>

      <h2 className="text - 2xl font - bold mb - 4">Recent Contracts</h2>;""
      <div className="overflow - x-auto rounded - md border">;"
        <table className="min - w-full divide - y divide - border">;"
          <thead className="bg - muted">;"
                scope="col";""
                className="px - 6 py - 3 text - left text - xs font - medium text - muted - foreground uppercase tracking - wider";"
              >;
              <th scope="col" className="relative px - 6 py - 3">;"
                <span className="sr - only">Actions</span>;"
          <tbody className="bg - card divide - y divide - border">;"
              <tr key={contract.id}>;
                <td className="px - 6 py - 4 whitespace - nowrap text - sm">;"
                    <span className="inline - flex items - center px - 2.5 py - 0.5 rounded - full bg - primary / 10 text - primary text - xs">;"
</span>)
                    </span>) : ("
                    <span className="inline - flex items - center px - 2.5 py - 0.5 rounded - full bg - muted text - muted - foreground text - xs">;"
                    </span>)}
                <td className="px - 6 py - 4 whitespace - nowrap text - right text - sm">;"
                    variant="ghost";""
                    size="sm";"
                    on_click={() => onViewContract (contract.id)}

                  <Button ;"
                    variant="ghost" ;""
                    onClick={() => onViewContract(contract.id)}

                </td>;
pr-12325
          </tbody>;
        </table>;
      </div>;
    </>;
  );
}

  );
              </tr>))}
    </>);
  ),;}
  // TODO: Implement
}interface RecentContractsTableProps {
  // TODO: Implement
}export function RecentContractsTable ({
  contracts, onViewContract;)
}: RecentContractsTableProps) {"
  return (<> <h2 className="text-2xl font-bold mb-4" >Recent Contracts</h2> <div className="overflow-x-auto rounded-md border" > <table className="min-w-full divide-y divide-border" > <thead className="bg-muted" > col"className=" px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider"> Contract Title </th> <th scope=" col"className=" px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider"> Client </th> <th scope=" col"className=" px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider"> Talent </th> <th scope=" col"className=" px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider"> Date </th> <th scope=" col"className=" px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider"> Type </th> <th scope=" col"className=" relative px-6 py-3"> <span className=" sr-only">Actions</span> </th> </tr> </thead> <tbody className=" bg-card divide-y divide-border"> {")
  contracts.map ( (contract) => (<tr key= {
  contract.id;)"
}> Smart Contract </span>) : (<span className=" inline-flex items-center px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground text-xs"> Standard </span>)"
}</td> <td className=" px-6 py-4 whitespace-nowrap text-right text-sm" > <Button > View  </td> </tr>) )"
</tr>"
}</td> <td className=" px-6 py-4 whitespace-nowrap text-right text-sm" > <Button > View </Button> </td> </tr>) )"

}</tbody> </table> </div> </>) 
        </table>
      </div>
"
pr-12325
    </>
          </tbody>;
        </table>;
      </div>;
    </>;
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
