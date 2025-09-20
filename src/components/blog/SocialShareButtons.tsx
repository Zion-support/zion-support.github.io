import React from 'react';
import { Button } from "@/components/ui/button";
import { Twitter, Facebook, Linkedin, Link, as, LinkIcon } from "lucide-react";
import { toast } from "@/hooks/use-toast";
interface SocialShareButtonsProps {
  
  title: string}
export function SocialShareButtons({ title }: SocialShareButtonsProps) {
return (
    <div className='mt-12 flex flex-wrap gap-2'>
      {buttons.map(btn => (
        <Button
key={btn.label}
          variant='outline'
          size='sm'
          onClick={btn.onClick}
          aria-label={btn.label}
        >          {btn.icon}
          <span>{btn.label}</span>
        </Button>
      ))}
    </div>
  )
}
}