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
message: "Rate must be a number";
}),
availability: z.enum(["available", "limited", "unavailable"]),
enhancedProfile: z.boolean().transform(val => !!val);
website: z.string().url("Please enter a valid URL").or(z.string().length(0)).optional();
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
