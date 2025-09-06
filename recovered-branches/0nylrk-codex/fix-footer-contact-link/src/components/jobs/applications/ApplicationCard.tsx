      case "shortlisted": return (
          <Button variant="default" size="sm">;
            <Calendar className="h-4 w-4 mr-1" /> Prepare for Interview;
          </Button>;
        );
      case "interview":;
        return (
          <Button variant="default" size="sm">;
            <Calendar className="h-4 w-4 mr-1" /> View Interview Details;
          </Button>;
        );
      case "hired":;
        return (
          <Button variant="secondary" size="sm" className="bg-green-100 text-green-800 hover: bg-green-200 hover:text-green-900">;
            <FileText className="h-4 w-4 mr-1" /> View Offer;
          </Button>;
        );
      case "rejected":;
        return (
    }
  }

  return (
        {expanded && (
          <div className="mt - 4 space - y-3">;
            {application.cover_letter && (
            )}
          </div>;
        )}
            {expanded ? "Show Less" : "Show More"}
          </Button>;
          <div className="flex gap-2">;
            {renderActionButtons()}
            <Button
              </Link>;
            </Button>;
          </div>;
        </div>;
=======
        <Button;
          variant="secondary";
          size="sm";
          className="w - full";
          as_child;
        >;
          <Link to={`/messages?job_id=${application.job_id}`}>;
            <MessageSquare className="h - 4 w - 4 mr - 1" /> Message Client;
          </Link>;
        </Button>;
      </CardFooter>;
    </Card>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
