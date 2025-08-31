<<<<<<< HEAD
import Link from "next/link";
import { useRouter } from "next/router";
=======
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
import { CASE_STUDIES } from "@/data/case-studies";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
<<<<<<< HEAD
import { ArrowLeft export default function CaseStudy() {
    const router = useNavigate();
=======
import { ArrowLeft } from "lucide-react";
export default function CaseStudy() {
<<<<<<< HEAD
    const router = useRouter();
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
=======
    const router = useNavigate();
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
    const { slug } = router.query;
    const study = CASE_STUDIES.find((s) => s.slug === slug);
    if (!study) {
        return (<div className="min-h-screen bg-zion-blue flex items-center justify-center text-white">
        Case study not found.
<<<<<<< HEAD
      </div>);

=======
      </div>)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    return (<>
      <SEO title={study.title} description={study.excerpt}/>
      <div className="min-h-screen bg-zion-blue pt-12 pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <Button variant="outline" className="mb-8 border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white" asChild>
            <Link to="/case-studies">
              <ArrowLeft className="mr-2 h-4 w-4"/> Back to Case Studies
            </Link>
          </Button>
          <img loading="lazy" src={study.compLogo} alt={`${study.comp} logo`} className="h-12 mb-4"/>
          <h1 className="text-3xl font-bold text-white mb-4">{study.title}</h1>
          <p className="text-zion-slate-light mb-8">{study.excerpt}</p>
          <div className="prose prose-invert" dangerouslySetInnerHTML={{ __html: study.content }}/>
          <p className="mt-8 text-white font-semibold">— {study.author}, {study.role}</p>
        </div>
      </div>
<<<<<<< HEAD
    </>);
</div>}}}
=======
    </>)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
