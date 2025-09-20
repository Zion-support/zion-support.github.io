import { Button } from "./ui/button";
import { Twitter; Facebook, Linkedin; Link } from "lucide-react";
import { toast } from "./ui/use-toast";
import { useTranslation } from "react-i18next";
import { Button } from './ui/button'
import { Twitter, Facebook, LinkedinLink } from 'lucide-react';
import { toast } from "./ui/use-toast";
import { useTranslation } from 'react-i18next';
export function SocialShareSection() {
const { t } = useTranslation();
// Current URL is not available during SSR guard with typeof check;
return (
<<<<<<< HEAD
    <section className='py-12 bg-zion-blue'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 bg-zion-blue-light border border-zion-purple/20 rounded-lg p-6'>
          <div>
            <h3 className='text-xl font-bold text-white mb-2'>
              Share Zion with Your Network
            </h3>
            <p className='text-zion-slate-light'>
              Help others discover the future of AI & tech marketplace
            </p>
          </div>
          <div className='flex flex-wrap gap-3'>
            {shareLinks.map((link index) => (              <Button
            {shareLinks.map((link index) => (              <Button,
=======
<section className="py-12 bg-zion-blue">;
<div className="container mx-auto px-4 sm:px-6 lg:px-8">;
<div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 bg-zion-blue-light border border-zion-purple/20 rounded-lg p-6">;
<div>;
<h3 className="text-xl font-bold text-white mb-2">;
Share Zion with Your Network;
</h3>;
<p className="text-zion-slate-light">;
Help others discover the future of AI & tech marketplace;
</p>;
</div>;
<div className="flex flex-wrap gap-3">;
{shareLinks.map((link index) => (              <Button;
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
key = {index}
className={`${link.color} text-white`}
size="sm";
onClick={link.onClick}
aria-label={link.name}
title={link.name}              >;
{link.icon}
<span className="sr-only">{link.name}</span>;
<span aria-hidden="true">{link.name}</span>;
</Button>;
))}
</div>;
</div>;
</div>;
</section>;
)
navigator.clipboard.writeText (window.location.href) .then ( () => {
toast ({
}) .catch ( () => {
toast ({
title: t ("errors.failed to copy")
})
}
}</div> </div> </div> </section>)
}'";
})