
import { format } from "date-fns";
import Link from "next/link";
import {logErrorToProduction} from '@/utils/productionLogger';
interface JobsListProps {

      if (!user) return,



  },

  },



          className={`overflow-hidden cursor-pointer transition-shadow hover:shadow-md ${
    },;
            </div>
          </CardFooter>
    </div>
  )
        </Card>;
      ))};
    </div>;
  );
};"
return (<div className="grid gap-6 md:grid-cols-2" > {
  jobs.map ( (job) => (<Card key= {
  job.id
}className= {
  `overflow-hidden cursor-pointer transition-shadow hover:shadow-md $ {"
  onSelectJob ? "cursor-pointer" : ""
}`
}onClick={
  () => onSelectJob?. (job.id, job.title)
}job.description
}</p> + {
  job.skills.length - 3
}more </Badge>) "
}</div> <div className="mt-3 text-sm"> <span className="font-medium">Budget:</span> $ {
  job.budget.min
}- $ {
  job.budget.max "
}</div> <div className="mt-1 text-sm"> </Link> </Button> <Button variant=" outline"size=" sm"> <X className="h-4 w-4" /> </Button> </div> </CardFooter> </Card>) )
}</div>)
}'"}
    </div>;
  );
}
;
