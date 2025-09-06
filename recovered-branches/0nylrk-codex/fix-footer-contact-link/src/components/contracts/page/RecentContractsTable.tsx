<<<<<<< HEAD


import { Button  } from '@/components / ui / button';
=======
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
import { Button } from "@/components/ui/button";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
interface Contract {

  id: string;
  title: string;
  client: string;
  talent: string;
  date: string;
  isSmartContract: boolean
}
<<<<<<< HEAD


interface RecentContractsTableProps {;

=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
interface RecentContractsTableProps {
=======
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Button } from "@/components/ui/button",
interface Contract {
  id: string,
  title: string,
  client: string,
  talent: string,
  date: string,
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  contracts: Contract[];
  onViewContract: (contractId: string) => void
}



export function RecentContractsTable({ contracts, onViewContract }: RecentContractsTableProps) {


  return (
    <>;
      <h2 className="text-2xl font-bold mb-4">Recent Contracts</h2>;
      <div className="overflow-x-auto rounded-md border">;
        <table className="min-w-full divide-y divide-border">;
          <thead className="bg-muted">;
            <tr>;
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
              </th>;
              <th scope="col" className="relative px-6 py-3">;
                <span className="sr-only">Actions</span>;
              </th>;
            </tr>;
          </thead>;
          <tbody className="bg-card divide-y divide-border">;
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
                      Standard;
                    </span>;
                  )}
                </td>;
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm">;
                  <Button
                    variant="ghost"
                    size="sm"
<<<<<<< HEAD
                    onClick={() => onViewContract(contract && contract.id)}
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                  >;
                    View;
                  </Button>;
                </td>;



=======
                    onClick={() => onViewContract(contract.id)}
                  >
                    View
                  </Button>
                </td>
              </tr>
            ))}
<<<<<<< HEAD
          </tbody>
        </table>
      </div>
<<<<<<< HEAD
    </>
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

          </tbody>;
        </table>;
      </div>;
    </>;
<<<<<<< HEAD




=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  );
=======
              </tr>))}
          </tbody>;
        </table>;
      </div>;
    </>);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}