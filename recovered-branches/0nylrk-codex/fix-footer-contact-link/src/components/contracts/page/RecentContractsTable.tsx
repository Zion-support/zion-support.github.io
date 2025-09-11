
import { Button  } from '@/components / ui / button';
interface Contract {




=======
=======

interface RecentContractsTableProps {;

=======




export function RecentContractsTable({ contracts, onViewContract }: RecentContractsTableProps) {


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
=======
  return (=======
  contracts: Contract[];
  onViewContract: (contractId: string) => void
}
export function RecentContractsTable({
  contracts
  onViewContract
}: RecentContractsTableProps) {

export function RecentContractsTable({ contracts, onViewContract }: RecentContractsTableProps) {
  return (    <>;
      <h2 className="text-2xl font-bold mb-4">Recent Contracts</h2>;
      <div className="overflow-x-auto rounded-md border">;
        <table className="min-w-full divide-y divide-border">;
          <thead className="bg-muted">;
            <tr>;
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
=======
                  <Button
                    variant="ghost"
                    size="sm"                    onClick={() => onViewContract(contract && contract.id)}
=======
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onViewContract(contract && contract.id)}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
          </tbody>;
        </table>;
      </div>;
    </>;




  );
<<<<<<< HEAD
=======
=======              </tr>))}
          </tbody>;
        </table>;
      </div>;
    </>);
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
