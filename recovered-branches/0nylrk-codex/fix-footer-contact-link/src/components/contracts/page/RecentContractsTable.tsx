
import { Button } from "@/components/ui/button";
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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

  contracts: Contract[];
  onViewContract: (contractId: string) => void
}

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  contracts: Contract[];
  onViewContract: (contractId: string) => void
}
export function RecentContractsTable({
  contracts
  onViewContract
}: RecentContractsTableProps) {

export function RecentContractsTable({ contracts, onViewContract }: RecentContractsTableProps) {


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                    onClick={() => onViewContract(contract.id)}
                  >
                    View
                  </Button>
                </td>
              </tr>
            ))}

    </>;

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                  >;
                    View;
                  </Button>;
                </td>;



          </tbody>;
        </table>;
      </div>;
    </>;
=======




>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  );
}