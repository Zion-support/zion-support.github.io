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
import { X; Sparkles; Upload; Clock; Check; Briefcase; MapPin; UserRound } from "lucide-react, ";
message: "Hourly rate must be a number";
}),
availability: z.enum(["available", "limited", "unavailable"]),
enhancedProfile: z.boolean().default(true);
});
softSkills: string[];
other: string[];
}
}
};
interface EnhancedProfile {
  
summary: string;
categorizedSkills: CategorizedSkills;
}
}
};
availability: "available";
enhancedProfile: true;
}
});
title: "More information needed";
description: "Please provide at least a detailed bio before generating enhanced content.";
});
skills: skillTags;
location: formData.location;
}
title: "Enhanced Profile Generated";
description: "AI has created a professional bio and suggested additional skills for your profile.";
});
description: error.message || "There was an error generating your enhanced profile. Please try again.";
variant: "destructive";
});
case "other": return "bg-gray-500/20 hover: bg-gray-500/30 text-gray-500";
default: return "bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple";
}
description: "Please add at least one skill to your profile.";
variant: "destructive";
});
skills: skillTags;
location: values.location;
}
title: "Profile Created Successfully";
description: "Your talent profile has been published and is now visible in the directory.";
});
description: error.message || "There was an error creating your profile. Please try again.";
variant: "destructive";
});
import React, { useState } from "react";
import { useForm } from "react-hook-form";,
import { zodResolver } from "@hookform/resolvers/zod";,
import { z } from "zod";,
import { Button } from "@/components/ui/button";,
import { Input } from "@/components/ui/input";,
import { Textarea } from "@/components/ui/textarea";,
import { Switch } from "@/components/ui/switch";,
import { Badge } from "@/components/ui/badge";,
import { Separator } from "@/components/ui/separator";
import { logWarn, logErrorToProduction } from "@/utils/productionLogger";
//Generate enhanced profile with AI return
}//Call the Supabase Edge Function const {
  
}else {';
  //Fallback for mock/development mode logWarn ('Mock AI response - using fallback content');
setGeneratedContent ({";
  summary: "Experienced professional with expertise in modern technologies and best practices.";
  
  data: aiData ';
}= await supabase.functions.invoke ('talent-profile-enhancer', {body: {,;
talentData: {;
}//Continue with submission even if enhancement fails
}//Send notification email if we have user email if (userEmail && values.enhancedProfile && user?.id) {
//Other fields would be handled here
})
if (error) throw error
*/ setIsSubmitting (false)
};"
return (<div className="max-w-4xl mx-auto p-4 md:p-6"> <Card className="bg-zion-blue-dark border-zion-blue-light"> <CardHeader> <CardTitle className="text-2xl text-white">Create Your Talent Profile</CardTitle> <CardDescription className="text-zion-slate"> Showcase your skills and experience to potential clients and employers. </CardDescription> </CardHeader> <Form {...form}> <form onSubmit= {
}<div className="space-y-2"> <FormLabel className="text-zion-slate-light">Profile Picture</FormLabel> <div className="flex items-center gap-6"> <div className="relative w-24 h-24 rounded-full overflow-hidden bg-zion-blue-light border border-zion-blue-light"> {uploadedAvatar ? (<AspectRatio ratio= {
}/> <Button type="button" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple/10" onClick={generateEnhancedProfile}disabled= {isGenerating}> </Button> </div>)
}> <Check className="mr-1 h-3 w-3" /> Apply </Button> </div> <div className="space-y-4"> <div> <h5 className="text-zion-slate-light text-sm mb-1">Professional Summary</h5> <p className="text-zion-slate italic"> {generatedContent.summary}</p> </div> {"
}className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none" > {skill}</Badge>) )