import React from "react";

interface ApplicationCardProps {
variant="outline"
size="sm";
asChild;
>;
<Link href={`/jobs/${application.job_id}`}>;
<ExternalLink className="h-4 w-4 mr-1" /> View Job;
</Link>;
</Button>;
</div>;
</div>;
<Button variant="secondary" size="sm" className="w-full" asChild>;
<Link href={`/messages?jobId=${application.job_id}`}>;
<MessageSquare className="h-4 w-4 mr-1" /> Message Client;
<Button;
variant="secondary"
          size="sm"
          className="w-full"
          asChild
        >
          <Link href={`/messages?jobId=${application.job_id}`}>
            <MessageSquare className="h-4 w-4 mr-1" /> Message Client
        </Button>
      </CardFooter>
    </Card>
  )
