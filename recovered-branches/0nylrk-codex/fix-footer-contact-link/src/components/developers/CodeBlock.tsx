
import { useState  } from 'react';
import { Check, Copy  } from 'lucide-react';
import { cn } from "@/lib/utils";
interface CodeBlockProps {




  language = 'bash';
  showLineNumbers = false;



interface CodeBlockProps {









  const handleCopyClick = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);









'
import {useState} from 'react';'
import {Check, Copy} from 'lucide-react';'


export default CodeBlock;
;



