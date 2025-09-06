
import { Twitter, Facebook, Linkedin, Link as LinkIcon } from 'lucide-react'
import { toast } from '@/hooks/use-toast';
interface SocialShareButtonsProps {
  title: string

import { Button } from '@/components/ui/button';
import { Twitter, Facebook, Linkedin, Link as LinkIcon } from 'lucide-react';
import { toast } from '@/hooks/use-toast',;
interface SocialShareButtonsProps {;
  title: string;
}

export function SocialShareButtons({ title }: SocialShareButtonsProps) {

  const shareUrl =

  const shareToTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`
      '_blank'
    )

  const copyLink = () => {
    if (typeof window === 'undefined') return,

    navigator.clipboard
      .writeText(window.location.href)
      .then(() => toast.success('Link copied to clipboard'))
      .catch(() => toast.error('Failed to copy link'))
