import { Copy, Facebook, Link, Share, Twitter } from "lucide-react";
interface ReferralLinkProps {referralLink: string;
onCopy: () => void;
  onShare: (platform: 'twitter' | 'facebook' | 'linkedin') => void,
export function ReferralLink({
  referralLink
}
onCopy}
            <Input
value = {referralLink}
              readOnly className='font-mono text-sm'