
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react'
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react'
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
interface FraudTabContentProps {
  tab_value: string;
export const FraudTabContent: React.FC < FraudTabContentProps> = ({
  tab_value,
}) => {
=======
  switch (tabValue) {    case 'pending':
      return (

    case 'dangerous':
      return (
        <div className="bg-red-50 dark:bg-red-950/20 p-8 rounded-lg text-center">
          <AlertCircle className="mx-auto h-12 w-12 text-red-500 mb-4" />
          <h3 className="text-xl font-medium mb-4">Dangerous Flags</h3>
          <p className="text-muted-foreground">
            This tab shows high-priority dangerous flags requiring immediate attention.
          </p>
        </div>

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}


        <div className='bg - green - 50 dark:bg - green - 950 / 20 p - 8 rounded - lg text - center'>;
          <CheckCircle className='mx - auto h - 12 w - 12 text - green - 500 mb - 4' />;
          <h3 className='text - xl font - medium mb - 4'>Actioned Flags</h3>;
          <p className='text - muted - foreground'>;
            This tab shows flags where action has already been taken.;
          </p>;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        </div>);
    case 'dangerous':;

        <div className='bg-amber-50 dark:bg-amber-950/20 p-8 rounded-lg text-center'>
          <AlertTriangle className='mx-auto h-12 w-12 text-amber-500 mb-4' />
          <h3 className='text-xl font-medium mb-4'>Pending Review Flags</h3>
          <p className='text-muted-foreground'>
            This tab will show fraud flags that are still pending admin review.
          </p>
        </div>
      )
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea

    case 'actioned':
<<<<<<< HEAD
      return (
        <div className="bg-green-50 dark:bg-green-950/20 p-8 rounded-lg text-center">
          <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-4" />
          <h3 className="text-xl font-medium mb-4">Actioned Flags</h3>
          <p className="text-muted-foreground">
            This tab shows flags where action has already been taken.
          </p>
        </div>
