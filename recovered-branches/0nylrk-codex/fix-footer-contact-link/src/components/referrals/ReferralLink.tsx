import { useState } from "react";
import { Button } from "@/components/ui/button";
import {


import {useState} from "react";""
import {Button} from "@/components/ui/button";""
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";""
import {Input} from "@/components/ui/input";""
import {Copy, Facebook, Link, Share, Twitter} from "lucide-react";""
import { useState } from "react",""
import { Button } from "@/components/ui/button",""
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",""
import { Input } from "@/components/ui/input",""
import { Copy, Facebook, Link, Share, Twitter } from "lucide-react",""
import { useState } from "react";""
import { Button } from "@/components/ui/button";"
import {
  // TODO: Implement
}
pr-12325
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Copy, Facebook, Link, Share, Twitter } from "lucide-react";  referralLink: string;
  onCopy: () => void;
  onShare: (platform: "twitter" | "facebook" | "linkedin") => void;
}

export function ReferralLink({ referralLink, onCopy, onShare }: ReferralLinkProps) {;
  const [copied, setCopied] = useState(false);

export function ReferralLink({ referralLink, onCopy, onShare }: ReferralLinkProps) {;
  const [copied, setCopied] = useState(false);

export function ReferralLink({ referralLink, onCopy, onShare }: ReferralLinkProps) {
  const [copied, setCopied] = useState(false),
  
  const handleCopy = () => {
    onCopy(),
    setCopied(true),
    setTimeout(() => setCopied(false), 2000)
  },
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Link className="h-5 w-5" />
          Your Referral Link
        </CardTitle>
        <CardDescription>
          Share this link with others to earn rewards when they join and
          complete onboarding
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-3">
          <div className="flex space-x-2">  )
  )

  CardTitle,"
} from "@/components/ui/card";""
import { Input } from "@/components/ui/input";""
import { Copy, Facebook, Link, Share, Twitter } from "lucide-react";"
interface ReferralLinkProps {
  // TODO: Implement
  referralLink: string;,
  onCopy: () => void;"
  onShare: (platform: "twitter" | "facebook" | "linkedin") => void;"

export function ReferralLink({
  referralLink,
  onCopy,
  onShare,)
}: ReferralLinkProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    onCopy();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return ("
    <Card className="mt-6">"

      <CardHeader>
"
        <CardTitle className="flex items-center gap-2">"
          <Link className="h-5 w-5" />"

        
        <CardDescription>

        
      
      <CardContent>
        <div className="flex flex-col space-y-3">"
</div>"
          <div className="flex space-x-2">"
</div>
            <Input;
              value={referralLink}
              readOnly;"
              className="font-mono text-sm""
            />
            <Button variant="outline" size="icon" onClick={handleCopy}>"
              <Copy className="h-4 w-4" />"
              <span className="sr-only">Copy</span>"
            
            <p className="text-sm text-green-600 dark:text-green-500">"
</p>
      <CardFooter className="border-t bg-muted/50 p-4">"
        <div className="flex flex-col sm:flex-row w-full justify-between items-center gap-4">"
          <p className="text-sm text-muted-foreground">"
          </p>"
            <Button;"
              variant="outline"""
              size="sm"""
              className="flex items-center gap-2"")"
              onClick={() => onShare("twitter")}"
              <Twitter className="h-4 w-4" />"

            
              className="flex items-center gap-2"""
              onClick={() => onShare("facebook")}"
              <Facebook className="h-4 w-4" />"

            
              onClick={() => onShare("linkedin")}"
              <Share className="h-4 w-4" />"

            
      
    <Card className="mt - 6">;"

      <CardHeader>;
        <CardTitle className="flex items - center gap - 2">;"
          <Link className="h - 5 w - 5" />;"

        ;
        <CardDescription>;

      <CardContent>;
        <div className="flex flex - col space - y-3">;"
          <div className="flex space - x-2">;"
              value={referral_link}
              read_only;"
              className="font - mono text - sm";"
            />;
            <Button variant="outline" size="icon" on_click={handle_copy}>;"
              <Copy className="h - 4 w - 4" />;"
              <span className="sr - only">Copy</span>;"
          </div>;"
            <p className="text - sm text - green - 600 dark:text - green - 500">;"
            </p>)}
        </div>;
      ;"
      <CardFooter className="border - t bg - muted / 50 p - 4">;"
        <div className="flex flex - col sm:flex - row w - full justify - between items - center gap - 4">;"
          <p className="text - sm text - muted - foreground">;"
          </p>;"
              variant="outline";""
              size="sm";""
              className="flex items - center gap - 2";""
              on_click={() => on_share ("twitter")}"
              <Twitter className="h - 4 w - 4" />;"

              on_click={() => on_share ("facebook")}"
              <Facebook className="h - 4 w - 4" />;"

              on_click={() => on_share ("linkedin")}"
              <Share className="h - 4 w - 4" />;"

            <Button ;"
              variant="outline" ;""
              className="flex items-center gap-2";""
              onClick={() => onShare('linkedin')}

              <Share className="h-4 w-4" />;"

    );
mt-6"> <CardHeader> <CardTitle className=" flex items-center gap-2"> <Link className=" h-5 w-5"/> Your Referral Link  <CardDescription> Share this link with others to earn rewards when they join and complete onboarding   <CardContent> <div className=" flex flex-col space-y-3"> <div className=" flex space-x-2"> <Input value= {"
  referralLink;"
}readOnly className=" font-mono text-sm"/> Copied to clipboard! </p>)""
}</div>  <CardFooter className=" border-t bg-muted/50 p-4"> <div className=" flex flex-col sm:flex-row w-full justify-between items-center gap-4"> <p className=" text-sm text-muted-foreground">Share on social media:</p> <div className=" flex space-x-2"> <Button > <Twitter className=" h-4 w-4"/> Twitter  <Button > <Facebook className=" h-4 w-4"/> Facebook  <Button > <Share className=" h-4 w-4" /> LinkedIn  </div> </div>  )""
pr-12325
