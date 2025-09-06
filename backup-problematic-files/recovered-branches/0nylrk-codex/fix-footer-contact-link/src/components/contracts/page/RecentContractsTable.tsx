<<<<<<< HEAD
import { Button  } from '@/components / ui / button';
interface Contract {
  id: string;
  title: string;
  client: string;
  talent: string;
  date: string;
  isSmartContract: boolean
}
interface RecentContractsTableProps {;
  contracts: Contract[];
  onViewContract: (contractId: string) => void
}
export function RecentContractsTable(): any ({;
  contracts,;
  onViewContract,;
}: RecentContractsTableProps) {;
  return (
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <>;
      <h2 className="text-2xl font-bold mb-4">Recent Contracts</h2>;
      <div className="overflow-x-auto rounded-md border">;
        <table className="min-w-full divide-y divide-border">;
          <thead className="bg-muted">;
            <tr>;
<<<<<<< HEAD
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
=======
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">;
                Contract Title;
              </th>;
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">;
                Client;
              </th>;
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">;
                Talent;
              </th>;
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">;
                Date;
              </th>;
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                Type;
              </th>;
              <th scope="col" className="relative px-6 py-3">;
                <span className="sr-only">Actions</span>;
              </th>;
            </tr>;
          </thead>;
          <tbody className="bg-card divide-y divide-border">;
<<<<<<< HEAD
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
=======
            {contracts.map((contract) => (;
              <tr key={contract.id}>;
                <td className="px-6 py-4 whitespace-nowrap text-sm">;
                  {contract.title}
                </td>;
                <td className="px-6 py-4 whitespace-nowrap text-sm">;
                  {contract.client}
                </td>;
                <td className="px-6 py-4 whitespace-nowrap text-sm">;
                  {contract.talent}
                </td>;
                <td className="px-6 py-4 whitespace-nowrap text-sm">;
                  {new Date(contract.date).toLocaleDateString()}
                </td>;
                <td className="px-6 py-4 whitespace-nowrap text-sm">;
                  {contract.isSmartContract ? (;
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs">;
                      Smart Contract;
                    </span>;
                  ) :(;
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground text-xs">;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                      Standard;
                    </span>;
                  )}
                </td>;
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm">;
<<<<<<< HEAD
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onViewContract(contract && contract.id)}
interface RecentContractsTableProps {
  contracts: Contract[];
  onViewContract: (contract_id: string) => void;
}
export /**
 * RecentContractsTable - Function description
 */
function RecentContractsTable() {
  return (
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
=======
                  <Button ;
                    variant="ghost" ;
                    size="sm";
                    onClick={() => onViewContract(contract.id)}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  >;
                    View;
                  </Button>;
                </td>;
<<<<<<< HEAD
              </tr>))}
          </tbody>;
        </table>;
      </div>;
    </>);
}
=======
              </tr>;
            ))}
          </tbody>;
        </table>;
      </div>;
    </>;
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
