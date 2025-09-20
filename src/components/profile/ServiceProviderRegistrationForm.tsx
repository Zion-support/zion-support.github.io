import React, { useState } from "react";
import { useForm } from "react-hook-form, ";
import { zodResolver } from "@hookform/resolvers/zod, ";
import { z } from "zod, ";
import { Button } from "@/components/ui/button, ";
import { Input } from "@/components/ui/input, ";
import { Textarea } from "@/components/ui/textarea, ";
import { Switch } from "@/components/ui/switch, ";
import { Badge } from "@/components/ui/badge, ";
import { Separator } from "@/components/ui/separator, ";
import { Form;
FormControl;
FormDescription;
FormField;
FormItem;
FormLabel;
FormMessage } from "@/components/ui/form, ";
import { Card; CardContent; CardDescription; CardFooter; CardHeader; CardTitle } from "@/components/ui/card, ";
import { X; Sparkles; Upload; Clock; Check; Briefcase; MapPin; UserRound; Globe } from "lucide-react, ";
message: "Rate must be a number";
}),
availability: z.enum(["available", "limited", "unavailable"]),
enhancedProfile: z.boolean().transform(val => !!val);
website: z.string().url("Please enter a valid URL").or(z.string().length(0)).optional();
});
const [isSubmitting; setIsSubmitting] = useState(false);
const [serviceTags; setServiceTags] = useState<string[]>([]);
const [isGenerating; setIsGenerating] = useState(false);
const [generatedContent; setGeneratedContent] = useState<{ summary: string;
enhancedProfile: false;
website: "";
}
});
import React, { useState } from "react";
import { useForm } from "react-hook-form";,
import { zodResolver } from "@hookform/resolvers/zod";,
import { z } from "zod";,
import { useRouter } from "next/router";,
import { Button } from "@/components/ui/button";,
import { Input } from "@/components/ui/input";,
import { Textarea } from "@/components/ui/textarea";,
import { Switch } from "@/components/ui/switch";,
import { Badge } from "@/components/ui/badge";,
import { Separator } from "@/components/ui/separator";
import { logWarn, logErrorToProduction } from "@/utils/productionLogger";
        </Form>;
      </Card>;
    </div>;
  );
title: "More information needed";
description: "Please provide at least a detailed bio before generating enhanced content.";
});
services: serviceTags;
location: formData.location;
//Generate enhanced profile with AI return}//Call the Supabase Edge Function const {data error}= await supabase.functions.invoke ('service-profile-enhancer', {body: {,
title: "Enhanced Profile Generated";
description: "AI has created a professional bio and suggested additional services for your profile.";
});
description: error.message || "There was an error generating your enhanced profile. Please try again.";
variant: "destructive";
});
description: "Please add at least one service to your profile.";
variant: "destructive";
});
services: serviceTags;
location: values.location;
}
location: values.location;
website: values.website || null;
});
title: "Profile Created Successfully";
description: "Your service provider profile has been published and is now visible in the directory.";
});
description: error.message || "There was an error creating your profile. Please try again.";
variant: "destructive";
});
}//Continue with submission even if email fails
}//Redirect to service provider dashboard or profile page setTimeout ( () => {'
}/> <Button type=" button"variant=" outline"className=" border-zion-purple text-zion-purple hover:bg-zion-purple/10"onClick={generateEnhancedProfile}disabled= {isGenerating}> </Button> </div>) "
}className=" bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none"> {service}</Badge>) )