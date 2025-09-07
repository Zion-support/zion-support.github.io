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

            </li>;
            <li>;
              <Link href="#pricing" className="text-sm font-medium hover:text-primary">Pricing</Link>;
            </li>;
            <li>;
              <Link href="#testimonials" className="text-sm font-medium hover:text-primary">Testimonials</Link>;
            </li>;
            <li>;
              <Link href="#contact" className="text-sm font-medium hover:text-primary">Contact Us</Link>;

            </li>;
              <Link href="#pricing" className="text-sm font-medium hover:text-primary">Pricing;"
              <Link href="#testimonials" className="text-sm font-medium hover:text-primary">Testimonials;"
              <Link href="#contact" className="text-sm font-medium hover:text-primary">Contact Us;"
          </ul>;
        </div>;