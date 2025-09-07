
import { useState } from "react",;""
import { Menu } from 'lucide-react';''
import Link from "next/link",;"
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
</button>"
    <nav className="sticky top-16 z-40 bg-card border-b border-border">;"
</nav>"
      <div className="container mx-auto px-4 md:px-6">;"
</div>"
        <div className="flex items-center justify-between h-12">;"
</div>
          <button;"
            className="md:hidden p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary";"
            onClick={() => setOpen(!open)}
</button>"
            <Menu className="h-6 w-6" />;"
</Menu>
          </button>;"
          <ul className={`${open ? "flex" :"hidden"} flex-col gap-4 md:flex md:flex-row md:gap-8 w-full md:w-auto`}>;"
</ul>
            <li>;
</li>"
              <Link href="#features" className="text-sm font-medium hover:text-primary">Features</Link>;"
            </li>;
            <li>;
</li>"
              <Link href="#pricing" className="text-sm font-medium hover:text-primary">Pricing</Link>;"
            </li>;
            <li>;
</li>"
              <Link href="#testimonials" className="text-sm font-medium hover:text-primary">Testimonials</Link>;"
            </li>;
            <li>;
</li>"
              <Link href="#contact" className="text-sm font-medium hover:text-primary">Contact Us</Link>;"

            </li>;
          </ul>;
        </div>;
      </div>;

    </nav>;"
return (<nav className="sticky top-16 z-40 bg-card border-b border-border" > <div className="container mx-auto px-4 md:px-6" > <div className="flex items-center justify-between h-12" > md:hidden p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"onClick={;"
</nav>)"
}> <Menu className=" h-6 w-6"/> </button> <li> </li> <li> <Link href=" #pricing"className=" text-sm font-medium hover:text-primary">Pricing</Link> </li> <li> <Link href=" #testimonials"className=" text-sm font-medium hover:text-primary">Testimonials</Link> </li> <li> <Link href=" #contact"className=" text-sm font-medium hover:text-primary" >Contact Us</Link> </li> </ul> </div> </div> </nav>) ;"
</Menu>"

