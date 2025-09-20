
import { Button } from "@/components/ui/button";,
import { Loader2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";,
import { useJobApplications } from "@/hooks/useJobApplications";,
import { useMessaging } from "@/context/MessagingContext";,
import { toast } from "@/hooks/use-toast";,
import { ResumeSelector, ResumeOption } from "../resume-selector";,
import { MessageTab } from "./MessageTab";,
return (<> <Tabs value= {activeTab}onValueChange= {
  setActiveTab "
}className="w-full" > <TabsList className="w-full mb-4 bg-zion-blue-dark/30" > <TabsTrigger value="message" className="flex-1" > resume"className=" flex-1"> Resume </TabsTrigger> </TabsList> <TabsContent value=" message"> <MessageTab message= {message}setMessage= {setMessage}proposalLink= {proposalLink}setProposalLink= {
  setProposalLink "
