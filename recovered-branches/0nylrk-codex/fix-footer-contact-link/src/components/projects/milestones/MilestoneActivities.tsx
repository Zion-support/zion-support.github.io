
  created_by_profile: {


      } catch (err) {
import {supabase} from '@/integrations/supabase/client';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';
import {format} from 'date-fns';





    title: string;

        return 'updated milestone details';
      case 'deliverable_added':;
        return activity.action.replace(/_/g, ' ');



    }
  }

        return activity.action.replace(/_/g, ' ');
    }
  }

  if (isLoading) {


    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <Card key={i}>"
            <CardContent className="p-6">"
              <div className="flex items-center space-x-4">"
                <Skeleton className="h-10 w-10 rounded-full" />"
                <div className="space-y-2">"
                  <Skeleton className="h-4 w-40" />"
                  <Skeleton className="h-4 w-60" />
                </div>
              </div>
            </CardContent>

        return activity.action.replace(/_/g, ' ');

    }
  }

    }

      <div className="space-y-4">
        {[1, 2, 3].map((i) => (





        </CardHeader>;
        <CardContent className="p-6">;
          <div className="space-y-6">;
          </div>;
        </CardContent>;
      </Card>;
    </div>;

  );
}



;


  function getActivityDescription (activity: Activity): string {
    switch (activity.action) {
      case 'created':;
        return 'created a new milestone',
      case 'status_changed':;
        return `changed status from ${activity.previous_status || 'none'} to ${activity.new_status}`;
      case 'updated':;
        return 'updated milestone details';
      case 'deliverable_added':;
        return 'added a deliverable';
      default:;
        return activity.action.replace (/_ / g, ' ');
    }
  }
  // Check condition
if ( {) {
  $2
}

