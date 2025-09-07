<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
import { useState } from "react",;
=======
import { useState } from "react";""
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { Menu } from 'lucide-react';
import Link from "next/link";"
;
export function EnterpriseStickyNav() {;
  const [open, setOpen] = useState(false),;
  return (;"
    <nav className="sticky top-16 z-40 bg-card border-b border-border">;"
</nav>"
      <div className="container mx-auto px-4 md:px-6">;"
</div>"
        <div className="flex items-center justify-between h-12">;"
</div>
          <button;"
            className="md:hidden p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary";")
            onClick={() => setOpen(!open)}
<<<<<<< HEAD
import { useState } from "react",;
import { Menu } from 'lucide-react';
import Link from "next/link",;
;
export function EnterpriseStickyNav() {;
  const [open, setOpen] = useState(false),;
  return (;
    <nav className="sticky top-16 z-40 bg-card border-b border-border">;
      <div className="container mx-auto px-4 md:px-6">;
        <div className="flex items-center justify-between h-12">;
          <button;
            className="md:hidden p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary";
            onClick={() => setOpen(!open)}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            aria-label="Toggle navigation";
            aria-expanded={open}
          >;
            <Menu className="h-6 w-6" />;
          </button>;
<<<<<<< HEAD

=======
          <ul className={`${open ? "flex" :"hidden"} flex-col gap-4 md:flex md:flex-row md:gap-8 w-full md:w-auto`}>;
            <li>;
              <Link href="#features" className="text-sm font-medium hover:text-primary">Features</Link>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            </li>;
            <li>;
              <Link href="#pricing" className="text-sm font-medium hover:text-primary">Pricing</Link>;
            </li>;
            <li>;
              <Link href="#testimonials" className="text-sm font-medium hover:text-primary">Testimonials</Link>;
            </li>;
            <li>;
              <Link href="#contact" className="text-sm font-medium hover:text-primary">Contact Us</Link>;
<<<<<<< HEAD

=======
=======
</button>"
            className="md:hidden p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary";"
            <Menu className="h-6 w-6" />;"

          </button>;"
          <ul className={`${open ? "flex" :"hidden"} flex-col gap-4 md: flex md:flex-row md:gap-8 w-full md:w-auto`;}>;"
</ul>
            <li>;
</li>"
              <Link href="#features" className="text-sm font-medium hover:text-primary">Features;"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            </li>;
              <Link href="#pricing" className="text-sm font-medium hover:text-primary">Pricing;"
              <Link href="#testimonials" className="text-sm font-medium hover:text-primary">Testimonials;"
              <Link href="#contact" className="text-sm font-medium hover:text-primary">Contact Us;"
          </ul>;
        </div>;
<<<<<<< HEAD
      </div>;
    </nav>;
  );}
 export function EnterpriseStickyNav () {;
  const [open, setOpen] = useState (false);
return (<nav className="sticky top-16 z-40 bg-card border-b border-border" > <div className="container mx-auto px-4 md:px-6" > <div className="flex items-center justify-between h-12" > md:hidden p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"onClick={;
  () => setOpen (!open) ";
}> <Menu className=" h-6 w-6"/> </button> <li> </li> <li> <Link href=" #pricing"className=" text-sm font-medium hover:text-primary">Pricing</Link> </li> <li> <Link href=" #testimonials"className=" text-sm font-medium hover:text-primary">Testimonials</Link> </li> <li> <Link href=" #contact"className=" text-sm font-medium hover:text-primary" >Contact Us</Link> </li> </ul> </div> </div> </nav>) ;
}"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    </nav>;"
return (<nav className="sticky top-16 z-40 bg-card border-b border-border" > <div className="container mx-auto px-4 md:px-6" > <div className="flex items-center justify-between h-12" > md:hidden p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"onClick={;"
</nav>)"
}> <Menu className=" h-6 w-6"/> </button> <li> </li> <li> <Link href=" #pricing"className=" text-sm font-medium hover:text-primary">Pricing </li> <li> <Link href=" #testimonials"className=" text-sm font-medium hover:text-primary">Testimonials </li> <li> <Link href=" #contact"className=" text-sm font-medium hover:text-primary" >Contact Us </li> </ul> </div> </div> </nav>) ;"
"`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
