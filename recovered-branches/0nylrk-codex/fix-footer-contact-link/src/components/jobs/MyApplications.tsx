import {useState} from "react";"
import {useJobApplications} from "@/hooks/useJobApplications";"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";"
import {Badge} from "@/components/ui/badge";"
import {Button} from "@/components/ui/button";"
import {Loader2, MessageSquare, ExternalLink} from "lucide-react";"
import {formatDistanceToNow} from "date-fns";"
import {Link} from "react-router-dom";"
import {ApplicationStatus} from "@/types/jobs";"
export function MyApplications() {;
  }
  const { applications, isLoading, error } = useJobApplications();
  const getStatusBadge = ("status": ApplicationStatus) => {;
    }
    switch (status) {;
    }
    switch (status) {

      </div>
    )
  }
  if (error) {

        <p>{error}</p>
      </div>
    )
  }
  if (applications.length === 0) {

          </Button>
        </CardContent>
      </Card>
    )

  },
  

  if (isLoading) {

    }
  }


      </div>;
    );
  }


        <p>{error}</p>;
      </div>;
    );
  }


          </Button>;
        </CardContent>;
      </Card>;
    );
  }

        <p>{error}</p>;
      </div>;
    );
  }

          </Button>;
        </CardContent>;
      </Card>;
    );
  }
              </CardTitle>
              {getStatusBadge(application.status)}
            </div>

