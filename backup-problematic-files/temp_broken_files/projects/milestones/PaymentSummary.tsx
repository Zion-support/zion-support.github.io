
import { CreditCard } from 'lucide-react';

;
interface PaymentSummaryProps {;
  milestones: Milestone[];,;
  paymentTerms:string | null;
}
export const PaymentSummary: React.FC<PaymentSummaryProps> = ({ milestones;, paymentTerms }) => {;

    <Card className="mb-8 bg-muted/30">;"
"
      <CardHeader className="pb-3">;"
        <CardTitle className="text-lg flex items-center">;"
          <CreditCard className="h-5 w-5 mr-2 text-primary" /> Payment Summary;"
      <CardContent>;
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">;"
</div>
          <div>;
</div>"
            <p className="text-sm text-muted-foreground mb-1">Total Payment</p>;""
            <p className="text-2xl font-semibold">;"
</p>
            </p>;
          </div>;

},; const paidAmount = milestones .filter (m => m.status === 'paid') return (<Card className="mb-8 bg-muted/30" > <CardHeader className="pb-3" > <CardTitle className="text-lg flex items-center" > <CreditCard className="h-5 w-5 mr-2 text-primary" /> Payment Summary </CardTitle> </CardHeader> <CardContent> <div className="grid grid-cols-1 md:grid-cols-3 gap-6" > <div> <p className="text-sm text-muted-foreground mb-1" >Total Payment</p> <p className="text-2xl font-semibold" > $ {;
  totalPayment ;
}</p> </div> <div> </p> </div> <div> </p> </div> </div> </CardContent> </Card>) ;


