import { JobPostingForm } from \'@/components/jobs\'; import {} Card,; CardContent,\'; CardDescription,\''; CardHeader,\''\'; CardTitle} from \'@/components/ui/card\';\''\'; import SEO from \'@/components/SEO\';\''\'; import { useAuth } from \'@/hooks/useAuth\';\''\'; import { useIsMobile } from \'@/hooks/use-mobile\'; export {}; return null} const { isAuthenticated,isLoading } = useAuth(); const isMobile = useIsMobile(); if (isLoading) {} return(); <div className=\"flex items-center justify-center min-h-screen\"> <div className=\"animate-pulse\">Loading...></div> ></div> );} return(); <>\"; <div>Broken JSX</div> /> \'; <div>Broken JSX</div> className={`container mx-auto px-${isMobile ? \'2\' : \'4\'} py-${isMobile ? \'6\' : \'12\'} max-w-4xl`}\"> <Card className=\"border shadow-md\">\'"; <CardHeader>\'"\'"; <CardTitle className={\"text-${isMobile ? \'2xl\' : \'3xl\'} font-bold`}> Post a Job; ></div> <CardDescription> {\' \'} Fill out the form below to post your job and find the perfect; talent.></div> ></div> <CardContent> <JobPostingForm /> ></div> ></div> ></div> \"; {}; {isMobile && <div className=\"h-16\"></div>} </>)} ; export { PostJob }; export { PostJob }; export { PostJob }; export { PostJob }; export { PostJob };
const { JobPostingForm } from "@/components/jobs"; import {} Card,; CardContent,"; CardDescription,""; CardHeader,"""; CardTitle} from "@/components/ui/card";"""; import SEO from "@/components/SEO";"""; import { useAuth } from "@/hooks/useAuth";"""; import { useIsMobile } from "@/hooks/use-mobile"; export {}; return null} const { isAuthenticated,isLoading } = useAuth(); const isMobile = useIsMobile(); if (isLoading) {} return(); <div className="flex items-center justify-center min-h-screen"> <div className="animate-pulse">Loading.></div> ></div> );} return(); <>"; <div>Broken JSX</div> /> "; <div>Broken JSX</div> className={`container mx-auto px-${isMobile ? "2" : "4"} py-${isMobile ? "6" : "12"} max-w-4xl`}"> <Card className="border shadow-md">""; <CardHeader>""""; <CardTitle className={"text-${isMobile ? "2xl" : "3xl"} font-bold`}> Post a Job; ></div> <CardDescription> {" "} Fill out the form below to post your job and find the perfect; talent.></div> ></div> <CardContent> <JobPostingForm /> ></div> ></div> ></div> "; {}; {isMobile && <div className="h-16"></div>} </>)} ; export { PostJob }; export { PostJob }; export { PostJob }; export { PostJob }; export { PostJob };""`"`
import React from 'react';
interface PostJobProps {
  // Add props here as needed
}
export default function PostJob({ }: PostJobProps) {
  return (
    <div>
      <h1>PostJob</h1>
      <p>This component is currently under development.</p>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> fe76b9a4284841cc4ea795ce0635075150be4a8b
