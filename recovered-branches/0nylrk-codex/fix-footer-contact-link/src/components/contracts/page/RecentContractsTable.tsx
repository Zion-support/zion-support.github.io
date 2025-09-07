<<<<<<< HEAD
import { Button } from "@/components/ui/button";
interface Contract {
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
import { Button } from "@/components/ui/button";
interface Contract {
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { Button  } from '@/components / ui / button';
interface Contract {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  id: string;
  title: string;
  client: string;
  talent: string;
  date: string;
<<<<<<< HEAD
=======
  isSmartContract: boolean
}
<<<<<<< HEAD
interface RecentContractsTableProps {

import { Button } from "@/components/ui/button",
interface Contract {
>>>>>>> merged-prs-20250907-203621
  id: string,
  title: string,
  client: string,
  talent: string,
  date: string,
<<<<<<< HEAD
  isSmartContract: boolean}

interface RecentContractsTableProps {
  contracts: Contract[],
=======
  isSmartContract: boolean
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
import { Button  } from '@/components / ui / button';
interface Contract {




=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

interface RecentContractsTableProps {;

interface RecentContractsTableProps {

import { Button } from "@/components/ui/button",

interface Contract {

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

  contracts: Contract[];
  onViewContract: (contractId: string) => void;

interface RecentContractsTableProps {;

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  contracts: Contract[];
  onViewContract: (contractId: string) => void

}

  return (
;

export function RecentContractsTable({ contracts, onViewContract }: RecentContractsTableProps) {

<<<<<<< HEAD
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
=======

<<<<<<< HEAD
interface RecentContractsTableProps {;
  contracts: Contract[];
  onViewContract: (contractId: string) => void
}
export function RecentContractsTable(): any ({;
  contracts,;
  onViewContract,;
}: RecentContractsTableProps) {;
  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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
<<<<<<< HEAD
  return (

=======
=======
  return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    <>;
      <h2 className="text-2xl font-bold mb-4">Recent Contracts</h2>;
      <div className="overflow-x-auto rounded-md border">;
        <table className="min-w-full divide-y divide-border">;
          <thead className="bg-muted">;
            <tr>;
<<<<<<< HEAD

=======
<<<<<<< HEAD
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
=======
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">;
                Contract Title;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                Type;
              </th>;"
              <th scope="col" className="relative px-6 py-3">;"
                <span className="sr-only">Actions</span>;
              </th>;
            </tr>;
          </thead>;"
          <tbody className="bg-card divide-y divide-border">;
<<<<<<< HEAD

                    onClick={() => onViewContract(contract && contract.id)}
interface RecentContractsTableProps {}
=======
<<<<<<< HEAD
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      Standard;
                    </span>;
                  )}
                </td>;
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm">;
<<<<<<< HEAD
  contracts: Contract[];
>>>>>>> merged-prs-20250907-203621
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
=======
                  <Button
                    variant="ghost"
                    size="sm"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    onClick={() => onViewContract(contract && contract.id)}
interface RecentContractsTableProps {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  contracts: Contract[];
  onViewContract: (contract_id: string) => void;
}
export /**;
 * RecentContractsTable - Function description;
 */
function RecentContractsTable() {}
  return (

                  <Button ;

                    variant="ghost" ;
                    size="sm";
<<<<<<< HEAD
                    onClick={() => onViewContract(contract.id)}

=======
                    on_click={() => onViewContract (contract.id)}
                  <Button ;
                    variant="ghost" ;
                    size="sm";
                    onClick={() => onViewContract(contract.id)}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  >;
                    View;
                  </Button>;
                </td>;

<<<<<<< HEAD
=======
              </tr>;
            ))}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          </tbody>;
        </table>;
      </div>;
    </>;

<<<<<<< HEAD
=======



  );
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              </tr>))}
          </tbody>;
        </table>;
      </div>;
    </>);
<<<<<<< HEAD
}

=======
<<<<<<< HEAD
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD

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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
          </tbody>
        </table>
      </div>
    </>
<<<<<<< HEAD
  )
}
=======
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          </tbody>;
        </table>;
      </div>;
    </>;
  );
<<<<<<< HEAD
});
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
=======
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
