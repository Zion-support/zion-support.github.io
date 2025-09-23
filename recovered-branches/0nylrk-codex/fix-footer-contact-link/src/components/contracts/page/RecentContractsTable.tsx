
import { Button } from "@/components/ui/button";

interface Contract {
  id: string;
  title: string;
  client: string;
  talent: string;
  date: string;
  isSmartContract: boolean;
}

interface RecentContractsTableProps {
  contracts: Contract[];
  onViewContract: (contractId: string) => void;
}

