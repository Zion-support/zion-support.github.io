import React from "
import Link from "
import { MessageSquare } from "
import { Button } from "
import import { Tooltip;, TooltipContent;, TooltipProvider;, TooltipTrigger } from "

interface EmptyStateProps {
title: string;
subtitle: string;
cta: string;
href: string;,
hasSession: boolean;,
}
const EmptyState: React.FC<EmptyStateProps> = ({ title; subtitle; cta; href; hasSession }) => {
return (
<div className="text-center py-16">
<div className="bg-zion-blue/30 p-6 rounded-full mb-6 inline-flex">
<MessageSquare className="h-10 w-10 text-zion-purple" />
</div>
<h2 className="text-xl font-medium mb-2">{title}</h2>
<p className="text-muted-foreground mb-6">{subtitle}</p>
<TooltipProvider>
<Tooltip>
<TooltipTrigger asChild>
{hasSession ? (
<Button asChild>
<Link href={href}>{cta}</Link>
</Button>
) : (
<Button disabled>{cta}</Button>
)}
</TooltipTrigger>
{!hasSession && <TooltipContent>Login required</TooltipContent>}
</Tooltip>
</TooltipProvider>
</div>
)
}

export export default EmptyState;
<//div><///div>
import React from 'react',
import import Link from 'next/link';
import { MessageSquare,,  } from 'lucide-react'
interface EmptyStateProps {
  title: string;,
subtitle: string;
  cta: string;,
href: string;
  hasSession: boolean
