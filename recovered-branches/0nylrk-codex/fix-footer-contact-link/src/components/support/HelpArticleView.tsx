
articleId: string;
}
  // Find the article in all categories,
let article,;

  for (const category of HELP_CATEGORIES) {
    const found = category.articles.find($2);
    if (found) {
      article = $2;
      break
    }
  }
  if (!article) {
    return <div>Article not found</div>
  }
  const handleFeedback = (type: "helpful" | "not-helpful") => {
    setFeedbackGiven($2);
    // In a real implementation, this would send feedback to the server
    toast({
      title: "Thank you for your feedback!",
      description: type = $2;
  return (
    <div>
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">{article.title}</h2>
        <div className="flex items-center text-sm text-zion-slate-light mb-6">
          <span>Last updated: {formatDate(article.lastUpdated)}</span>
        </div>
        <div className="prose dark:prose-invert max-w-none mb-8">
break;
import { Card } from "@/components/ui/card",;"
import { ThumbsUp, ThumbsDown } from "lucide-react",;"
import { toast } from "@/components/ui/use-toast",;"
import { HELP_CATEGORIES } from "./help-content",;"
interface HelpArticleViewProps {;
  }
  let article;
  for (const category of HELP_CATEGORIES) {
    }
    const found = category.articles.find((a) => a.id === articleId);
    if (found) {
      }


  articleId: string;
}

export function HelpArticleView({ articleId }: HelpArticleViewProps) {

  const [feedbackGiven, setFeedbackGiven] = useState<
    "helpful" | "not-helpful" | null
  >(null);

  // Find the article in all categories


      article = found;
      break;

    }
  }
  if (!article) {
    return <div>Article not found</div>;
  }

export /**
 * HelpArticleView - Function description
 */
function HelpArticleView() {
  const [feedback_given, setFeedbackGiven] = useState<;
    "helpful" | "not - helpful" | null;
  >(null);
;
  // Find the article in all categories;
  let article;
  for (const category of HELP_CATEGORIES) {
    const found = category.articles.find ((a) => a.id === article_id);
    // Check condition
if ( {) {
  $2
}
      article = found;
      break;
      article = found;
      break;




    }
  }



    }
  }


  const handleFeedback = (type: "helpful" | "not-helpful") => {
    (setFeedbackGiven(type)
      // In a real implementation, this would send feedback to the server
      toast({
        title: "Thank you for your feedback!"
        description:
          type === "helpful"
            ? "We're glad this article was helpful."
            : "We'll work on improving this article."
      }));
  }

  
  const handleFeedback = (type: "helpful" | "not-helpful") => {
    setFeedbackGiven(type),
    
    // In a real implementation, this would send feedback to the server
    toast({
      title: "Thank you for your feedback!",
      description: type === "helpful" 
        ? "We're glad this article was helpful." 
        : "We'll work on improving this article."})
  },


  articleId: string

}

export function HelpArticleView({ articleId }: HelpArticleViewProps) {
  const [feedbackGiven, setFeedbackGiven] = useState<
    "helpful" | "not-helpful" | null
  >(null);

            : "We'll work on improving this article.",
      }));
  };

    setFeedbackGiven(type),
    
    // In a real implementation, this would send feedback to the server
    toast({
      title: "Thank you for your feedback!",
      description: type === "helpful" 
        ? "We're glad this article was helpful." 
        : "We'll work on improving this article."})
  },
    return (


    <div>
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">{article.title}</h2>


        <div className="flex items-center text-sm text-zion-slate-light mb-6">
          <span>Last updated: {formatDate(article.lastUpdated)}</span>
        </div>

        <div className="prose dark:prose-invert max-w-none mb-8">

          {article.content.split("\n").map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>


        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="text-sm text-zion-slate-light mb-4 sm:mb-0">
              Was this article helpful?
            </div>


            <div className="flex items-center space-x-3">

  if (!article) {;
    return <div>Article not found</div>;
  }
  const handleFeedback = (type: "helpful" | "not-helpful") => {;
    setFeedbackGiven(type),;
    // In a real implementation, this would send feedback to the server;

        : "We'll work on improving this article."});
  };
  return (

                onClick={() => handleFeedback("helpful")}
                disabled={feedbackGiven !== null}
              >"
                <ThumbsUp className="h-4 w-4 mr-2" />
                Yes;
              </Button>

              <Button
                variant="outline"

                size="sm"
                className={"
                  feedbackGiven === "not-helpful""
                    ? "bg-red-100 dark:bg-red-900/30""
                    : ""
                }"
                onClick={() => handleFeedback("not-helpful")}
                disabled={feedbackGiven !== null}

                <ThumbsDown className="h - 4 w - 4 mr - 2" />;

                No;
              </Button>;
            </div>;

              >;

            </div>)}

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

}
