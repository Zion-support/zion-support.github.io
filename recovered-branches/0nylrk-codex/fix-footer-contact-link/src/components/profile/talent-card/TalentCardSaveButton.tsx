


}


      }),
      return
import React from "react",;
import { Heart } from "lucide-react",;
import { cn } from "@/lib/utils",;
import { useToast } from "@/hooks/use-toast",;












    toast({

      title: localIsSaved ? "Removed from favorites" : "Added to favorites",
      description: localIsSaved
        ? `${profileName} has been removed from your favorites`
        : `${profileName} has been added to your favorites`,
      variant: "default"
    })
  },

    toast({;
      title: localIsSaved ? "Removed from favorites" : "Added to favorites",;
      description: localIsSaved ;
        ? `${profileName} has been removed from your favorites` ;
        : `${profileName} has been added to your favorites`;
      variant: "default";
    });
  };




  return (
    <button
      className="absolute top-2 right-2 z-10 p-2 rounded-full bg-zion-blue-dark/80 hover:bg-zion-blue-light/30 transition-colors"
      onClick={handleSaveToggle}


      aria-label={localIsSaved ? "Remove from favorites" : "Save to favorites"}>;


      <Heart
        className={cn(
          "h-4 w-4 transition-colors"

          localIsSaved ? "fill-red-500 text-red-500" : "text-zion-slate"



        )} 
      />;
    </button>;
  );








  const [localIsSaved, setLocalIsSaved] = React.useState (is_saved);
;
  // Handle save toggle;
  const handleSaveToggle = (e: React.MouseEvent) =>: any {
    e.stop_propagation (),
    // Check condition
if ( {) {
  $2
}
      toast ({
        title: "Authentication required",
        description: "Please log in to save talents to your favorites",
        variant: "destructive";
      });
      return;
    }
    setLocalIsSaved (!localIsSaved);
    // Check condition
if ( {) {
  $2
}
      onToggleSave (profile_id, !localIsSaved);
    }
    toast ({
      title: localIsSaved ? "Removed from favorites" : "Added to favorites",
      description: localIsSaved;
        ? `${profile_name} has been removed from your favorites`;
        : `${profile_name} has been added to your favorites`;
      variant: "default";
    });
  }
;
  return (
    <button;
      className="absolute top - 2 right - 2 z - 10 p - 2 rounded - full bg - zion - blue - dark / 80 hover:bg - zion - blue - light / 30 transition - colors";
      on_click={handleSaveToggle}
      aria - label={localIsSaved ? "Remove from favorites" : "Save to favorites"}
    >;
      <Heart;
        className={cn (
          "h - 4 w - 4 transition - colors",
          localIsSaved ? "fill - red - 500 text - red - 500" : "text - zion - slate")}
      />;
    </button>);
}



