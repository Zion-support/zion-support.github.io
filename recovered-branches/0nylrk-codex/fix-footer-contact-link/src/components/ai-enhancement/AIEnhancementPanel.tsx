<<<<<<< HEAD
  onClose?: () => void;
  showInstructions?: boolean;
  initialContent?: string;
}



export function AIEnhancementPanel({;

export function AIEnhancementPanel(): any ({;

<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter  } from '@/components/ui/card';
import { Textarea  } from '@/components/ui/textarea';
import { Button  } from '@/components/ui/button';
import { Input  } from '@/components/ui/input';
import { Sparkles, Loader2, Copy, Check  } from '@/components/icons';
import { useAIContentEnhancer, AIEnhancementOptions } from '@/hooks/useAIContentEnhancer';
interface AIEnhancementPanelProps {

<<<<<<< HEAD
  title: string
  defaultOptions: AIEnhancementOptions
  onApply: (content: string) => void

  onClose?: () => void;
  showInstructions?: boolean;
  initialContent?: string
}
export function AIEnhancementPanel({

export function AIEnhancementPanel({;
=======
import {Card, CardContent, CardHeader, CardTitle, CardFooter} from '@/components/ui/card';
import {Textarea} from '@/components/ui/textarea';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Sparkles, Loader2, Copy, Check} from '@/components/icons';
import {useAIContentEnhancer, AIEnhancementOptions} from '@/hooks/useAIContentEnhancer';

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface AIEnhancementPanelProps {;
  title: string,;
  defaultOptions: AIEnhancementOptions,;
  onApply: (content: string) => void,;

  onClose?: () => void;
  showInstructions?: boolean;
  initialContent?: string;
}


export function AIEnhancementPanel(): any ({;

=======



export function AIEnhancementPanel({;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  title;
  defaultOptions;
  onApply;
  onClose;
<<<<<<< HEAD
    content: initialContent || defaultOptions && defaultOptions.content}),;
  const [generatedContent, setGeneratedContent] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const { enhanceContent, isEnhancing } = useAIContentEnhancer();

  showInstructions = true;
<<<<<<< HEAD
  initialContent = ''
}: AIEnhancementPanelProps) {
  const [options, setOptions] = useState<AIEnhancementOptions>({
    ...defaultOptions;
    content: initialContent |defaultOptions.content})
  const [generatedContent, setGeneratedContent] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const { enhanceContent, isEnhancing } = useAIContentEnhancer();
  const handleGenerate = async () => {
=======
=======

  showInstructions = true;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  initialContent = '';
}: AIEnhancementPanelProps) {;
  const [options, setOptions] = useState<AIEnhancementOptions>({;
    ...defaultOptions;

    content: initialContent || defaultOptions && defaultOptions.content}),;
  const [generatedContent, setGeneratedContent] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const { enhanceContent, isEnhancing } = useAIContentEnhancer();

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const result = await enhanceContent(options);
    if (result) {
      setGeneratedContent(result)
    }
<<<<<<< HEAD
<<<<<<< HEAD
  };

  }
  };
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  };

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState } from 'react',;
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card',;
import { Textarea } from '@/components/ui/textarea',;
import { Button } from '@/components/ui/button',;
import { Input } from '@/components/ui/input',;
import { Sparkles, Loader2, Copy, Check } from '@/components/icons',;
import { useAIContentEnhancer, AIEnhancementOptions } from '@/hooks/useAIContentEnhancer',;
interface AIEnhancementPanelProps {;
  title: string,;
  defaultOptions: AIEnhancementOptions,;
  onApply: (content: string) => void,;
  onClose?: () => void,;
  showInstructions?: boolean,;
  initialContent?: string;
}
;
export function AIEnhancementPanel({;
  title,;
  defaultOptions,;
  onApply,;
  onClose,;
  showInstructions = true,;
  initialContent = '';
}: AIEnhancementPanelProps) {;
  const [options, setOptions] = useState<AIEnhancementOptions>({;
    ...defaultOptions,;
    content: initialContent || defaultOptions.content}),;
  const [generatedContent, setGeneratedContent] = useState<string>(''),;
  const [copied, setCopied] = useState(false),;
  const { enhanceContent, isEnhancing } = useAIContentEnhancer(),;
<<<<<<< HEAD
<<<<<<< HEAD
  const handleGenerate = async () => {;
=======

  const handleGenerate = async () => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

  const handleGenerate = async () => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const result = await enhanceContent(options);
    if (result) {;
      setGeneratedContent(result);
    }

<<<<<<< HEAD
<<<<<<< HEAD



  const handleGenerate = async () => {;
    const result = await enhanceContent(options),;
    if (result) {;
      setGeneratedContent(result);
    }
  },

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  },




<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    field: keyof AIEnhancementOptions
  ) => {
    setOptions({
      ...options
      [field]: e.target.value})
<<<<<<< HEAD


  },



  const handleApply = () => {
    onApply(generatedContent);
    if (onClose) onClose()


  },



=======
  }
  },

  const handleApply = () => {
    onApply(generatedContent);
    if (onClose) onClose()
  }
  },

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000)
<<<<<<< HEAD

  };
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const handleInputChange = (;
    e: React && React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,;
    field: keyof AIEnhancementOptions;
  ) => {;
    setOptions({;
      ...options,;
      [field]: e && e.target.value});
  };
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const handleApply = () => {;
    onApply(generatedContent);
    if (onClose) onClose();
  };
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const handleCopy = () => {;
    navigator && navigator.clipboard.writeText(generatedContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

<<<<<<< HEAD
  },


  return (

import React, { useState } from 'react',;
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card',;
import { Textarea } from '@/components/ui/textarea',;
import { Button } from '@/components/ui/button',;
import { Input } from '@/components/ui/input',;
import { Sparkles, Loader2, Copy, Check } from '@/components/icons',;
import { useAIContentEnhancer, AIEnhancementOptions } from '@/hooks/useAIContentEnhancer',;
;
interface AIEnhancementPanelProps {;
  title:string,;
  defaultOptions:AIEnhancementOptions,;
  onApply:(content:string) => void,;
  onClose?:() => void,;
  showInstructions?:boolean,;
  initialContent?:string;
}
;
export function AIEnhancementPanel({;
  title,;
  defaultOptions,;
  onApply,;
  onClose,;
  showInstructions = true,;
  initialContent = '';
} AIEnhancementPanelProps) {;
  const [options, setOptions] = useState<AIEnhancementOptions>({;
    ...defaultOptions,;
    content:initialContent || defaultOptions.content}),;
  const [generatedContent, setGeneratedContent] = useState<string>(''),;
  const [copied, setCopied] = useState(false),;
  const { enhanceContent, isEnhancing } = useAIContentEnhancer(),;
;
  const handleGenerate = async () => {;
    const result = await enhanceContent(options),;
    if (result) {;
      setGeneratedContent(result),;
    }
  },;
;
  const handleInputChange = (;
    e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,;
    field:keyof AIEnhancementOptions;
  ) => {;
    setOptions({;
      ...options,;
      [field]:e.target.value}),;
  },;
;
  const handleApply = () => {;
    onApply(generatedContent),;
    if (onClose) onClose(),;
  },;
;
  const handleCopy = () => {;
    navigator.clipboard.writeText(generatedContent),;
    setCopied(true),;
    setTimeout(() => setCopied(false), 2000),;
  },;
;
  return (;
=======
=======

  },

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

  return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  }
  },

  return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <Card className="w-full max-w-2xl mx-auto">;
      <CardHeader>;
        <CardTitle className="flex items-center gap-2">;
          <Sparkles className="h-5 w-5 text-primary" />;
          {title}
        </CardTitle>;
      </CardHeader>;
      <CardContent className="space-y-4">;
        {/* Input area */}
        <div className="space-y-2">;
          <label className="text-sm font-medium">Content to enhance</label>;
<<<<<<< HEAD
<<<<<<< HEAD
          />;
        </div>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <Textarea
            placeholder="Enter your content to enhance..."
            className="min-h-[100px]"
            value={options && options.content}
            onChange={(e) => handleInputChange(e, 'content')}

          />;
        </div>;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Context input */}
        <div className="space-y-2">;
          <label className="text-sm font-medium">Context (optional)</label>;
          <Textarea
            placeholder="Add any relevant context to guide the AI..."
            className="min-h-[60px]"
            value={options && options.context}
            onChange={(e) => handleInputChange(e, 'context')}
<<<<<<< HEAD
<<<<<<< HEAD
          />;
        </div>;
          <Textarea;
            placeholder="Enter your content to enhance...";
            className="min-h-[100px]";            value={options.content}
            onChange={(e) => handleInputChange(e, 'content')}
          />;
        </div>;
;
        {/* Context input */}
        <div className="space-y-2">;
          <label className="text-sm font-medium">Context (optional)</label>;
          <Textarea;
            placeholder="Add any relevant context to guide the AI...";
            className="min-h-[60px]";            value={options.context}
            onChange={(e) => handleInputChange(e, 'context')}
          />;
        </div>;
;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          />;
        </div>;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Instructions input (optional) */}
        {showInstructions && (;
          <div className="space-y-2">;
            <label className="text-sm font-medium">Special instructions (optional)</label>;
<<<<<<< HEAD
<<<<<<< HEAD
            <Input;
              placeholder="E.g., 'Make it more conversational' or 'Focus on leadership skills'";
              value={options.instructions}
=======
            <Input
              placeholder="E && E.g., 'Make it more conversational' or 'Focus on leadership skills'"
              value={options && options.instructions}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            <Input
              placeholder="E && E.g., 'Make it more conversational' or 'Focus on leadership skills'"
              value={options && options.instructions}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              onChange={(e) => handleInputChange(e, 'instructions')}
            />;
          </div>;
        )}
<<<<<<< HEAD


<<<<<<< HEAD

  }
  },

  const handleApply = () => {
    onApply(generatedContent),
    if (onClose) onClose()
  }
  },

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent),
    setCopied(true),
    setTimeout(() => setCopied(false), 2000)
  }
  },

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Input area */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Content to enhance</label>
          <Textarea
            placeholder="Enter your content to enhance..."
            className="min-h-[100px]"
            value={options.content}
            onChange={(e) => handleInputChange(e, 'content')}
          />
        </div>
        {/* Context input */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Context (optional)</label>
          <Textarea
            placeholder="Add any relevant context to guide the AI..."
            className="min-h-[60px]"
            value={options.context}
            onChange={(e) => handleInputChange(e, 'context')}
          />
        </div>
        {/* Instructions input (optional) */}
        {showInstructions && (
          <div className="space-y-2">
            <label className="text-sm font-medium">Special instructions (optional)</label>
            <Input
              placeholder="E.g., 'Make it more conversational' or 'Focus on leadership skills'"
              value={options.instructions}
              onChange={(e) => handleInputChange(e, 'instructions')}
            />
          </div>
        )}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Generate button */}
        <Button
          onClick={handleGenerate}
          className="w-full"
          disabled={isEnhancing |!options.content && !options.context}
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        {/* Generate button */}
        <Button 
          onClick={handleGenerate} 
          className="w-full" 
          disabled={isEnhancing || !options.content && !options.context}
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        >
          {isEnhancing ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Enhancing...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-4 w-4" />
              Generate Enhanced Content
            </>
          )}
        </Button>
        {/* Output area */}
        {generatedContent && (
          <div className="space-y-2 mt-4">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium">Generated content</label>
              <Button
                variant="ghost"
                size="sm"
<<<<<<< HEAD
<<<<<<< HEAD
;
        {/* Generate button */}
        <Button ;
          onClick={handleGenerate} ;
          className="w-full" ;
          disabled={isEnhancing || !options.content && !options.context}
        >;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
          onClick={handleGenerate} 
          className="w-full" 
          disabled={isEnhancing || !options && options.content && !options && options.context}>;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {isEnhancing ? (;
            <>;
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
              Enhancing...;
            </>;
<<<<<<< HEAD
          ) :(;
            <>;
              <Sparkles className="mr-2 h-4 w-4" />;
              Generate Enhanced Content;
            </>;          )}
        </Button>;
;
=======
          ) : (;
            <>;
              <Sparkles className="mr-2 h-4 w-4" />;
              Generate Enhanced Content;
            </>;
          )}
        </Button>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Output area */}
        {generatedContent && (;
          <div className="space-y-2 mt-4">;
            <div className="flex justify-between items-center">;
              <label className="text-sm font-medium">Generated content</label>;
<<<<<<< HEAD
              <Button ;
                variant="ghost" ;
                size="sm" ;
                onClick={handleCopy}
                className="h-8";
              >;
                {copied ? (;
                  <><Check className="h-4 w-4 mr-1" /> Copied</>;
                ) :(;
=======
              <Button
                variant="ghost" 
                size="sm" 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                onClick={handleCopy}
                className="h-8">;
                {copied ? (;
                  <><Check className="h-4 w-4 mr-1" /> Copied</>;
                ) : (;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <><Copy className="h-4 w-4 mr-1" /> Copy</>;
                )}
              </Button>;
            </div>;
            <div className="relative">;
<<<<<<< HEAD
              <Textarea;
                value={generatedContent}
                onChange={(e) => setGeneratedContent(e.target.value)}
=======
              <Textarea
                value={generatedContent}
                onChange={(e) => setGeneratedContent(e && e.target.value)}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                className="min-h-[200px]";
              />;
            </div>;
          </div>;
        )}
<<<<<<< HEAD
      </CardContent>;
      ;
=======

      </CardContent>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {generatedContent && (;
        <CardFooter className="flex justify-between">;
          {onClose && (;
            <Button variant="outline" onClick={onClose}>;
              Cancel;
<<<<<<< HEAD
          )}
            </Button>;          )}
=======
            </Button>;

          )}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <Button onClick={handleApply}>;
            Apply to Form;
          </Button>;
        </CardFooter>;
      )}
<<<<<<< HEAD
    </Card>;
=======

    </Card>;
  );
}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {Card, CardContent, CardHeader, CardTitle, CardFooter} from '@/components / ui / card';
import {Textarea} from '@/components / ui / textarea';
import {Button} from '@/components / ui / button';
import {Input} from '@/components / ui / input';
import {Sparkles, Loader2, Copy, Check} from '@/components / icons';
import {useAIContentEnhancer, AIEnhancementOptions} from '@/hooks / useAIContentEnhancer';
interface AIEnhancementPanelProps {
  title: string,
  default_options: AIEnhancementOptions,
  on_apply: (content: string) => void,
  on_close?: () => void;
  show_instructions?: boolean;
  initial_content?: string;
}
export /**
 * AIEnhancementPanel - Function description
 */
function AIEnhancementPanel() {
  const [options, set_options] = useState < AIEnhancementOptions>({
    ...default_options;
    content: initial_content || default_options.content}),
  const [generated_content, setGeneratedContent] = useState < string>('');
  const [copied, set_copied] = useState (false);
  const { enhance_content, is_enhancing } = useAIContentEnhancer ();
;
  const handle_generate = async () => {
    const result = await enhance_content (options);
    // Check condition
if ( {) {
  $2
}
      setGeneratedContent (result);
    }
  }
;
  const handleInputChange = (
    e: React.ChangeEvent < HTMLInputElement | HTMLTextAreaElement>,
    field: keyof AIEnhancementOptions) =>: any {
    set_options ({
      ...options,
      [field]: e.target.value});
  }
;
  const handle_apply = () =>: any {
    on_apply (generated_content);
    if (on_close ()) {
  $2
}
  }
;
  const handle_copy = () =>: any {
    navigator.clipboard.write_text (generated_content);
    set_copied (true);
    set_timeout (() => set_copied (false), 2000);
  }
;
  return (
    <Card className="w - full max - w-2xl mx - auto">;
      <CardHeader>;
        <CardTitle className="flex items - center gap - 2">;
          <Sparkles className="h - 5 w - 5 text - primary" />;
          {title}
        </CardTitle>;
      </CardHeader>;
      <CardContent className="space - y-4">;
        {/* Input area */}
        <div className="space - y-2">;
          <label className="text - sm font - medium">Content to enhance</label>;
          <Textarea;
            placeholder="Enter your content to enhance...";
            className="min - h-[100px]";
            value={options.content}
            on_change={(e) => handleInputChange (e, 'content')}
          />;
        </div>;
        {/* Context input */}
        <div className="space - y-2">;
          <label className="text - sm font - medium">Context (optional)</label>;
          <Textarea;
            placeholder="Add any relevant context to guide the AI...";
            className="min - h-[60px]";
            value={options.context}
            on_change={(e) => handleInputChange (e, 'context')}
          />;
        </div>;
        {/* Instructions input (optional) */}
        {show_instructions && (
          <div className="space - y-2">;
            <label className="text - sm font - medium">Special instructions (optional)</label>;
            <Input;
              placeholder="E.g., 'Make it more conversational' or 'Focus on leadership skills'";
              value={options.instructions}
              on_change={(e) => handleInputChange (e, 'instructions')}
            />;
          </div>)}
        {/* Generate button */}
        <Button;
          on_click={handle_generate}
          className="w - full";
          disabled={is_enhancing || !options.content && !options.context}
        >;
          {is_enhancing ? (
            <>;
              <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" />;
              Enhancing...;
            </>) : (
            <>;
              <Sparkles className="mr - 2 h - 4 w - 4" />;
              Generate Enhanced Content;
            </>)}
        </Button>;
        {/* Output area */}
        {generated_content && (
          <div className="space - y-2 mt - 4">;
            <div className="flex justify - between items - center">;
              <label className="text - sm font - medium">Generated content</label>;
              <Button;
                variant="ghost";
                size="sm";
                on_click={handle_copy}
                className="h - 8";
              >;
                {copied ? (
                  <><Check className="h - 4 w - 4 mr - 1" /> Copied</>) : (
                  <><Copy className="h - 4 w - 4 mr - 1" /> Copy</>)}
              </Button>;
            </div>;
            <div className="relative">;
              <Textarea;
                value={generated_content}
                on_change={(e) => setGeneratedContent (e.target.value)}
                className="min - h-[200px]";
              />;
            </div>;
          </div>)}
      </CardContent>;
      {generated_content && (
        <CardFooter className="flex justify - between">;
          {on_close && (
            <Button variant="outline" on_click={on_close}>;
              Cancel;
            </Button>)}
          <Button on_click={handle_apply}>;
            Apply to Form;
          </Button>;
        </CardFooter>)}
    </Card>);
}
<<<<<<< HEAD
<<<<<<< HEAD
  ),;}
 value= {
  options.instructions 
}onChange= {
  (e) => handleInputChange (e, 'instructions') 
}/> </div>) 
}{
  /* Generate button */ 
}<Button > {
  isEnhancing ? (<> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Enhancing... </>) : (<> <Sparkles className="mr-2 h-4 w-4" /> Generate Enhanced Content </>) 
}</Button> <Button variant="ghost" size="sm" onClick= {
  handleCopy 
}className="h-8" >) : (<><Copy className="h-4 w-4 mr-1" /> Copy</>) 
}</Button> </div> <div className="relative" > <Textarea /> </div> </div>) 
}</CardContent> {
  onClose && (<Button variant="outline" onClick= {
  onClose 
}> Cancel </Button>) 
}<Button onClick= {
  handleApply 
}> Apply to Form </Button> </CardFooter>) 
}</Card>) 
}
                onClick={handleCopy}
                className="h-8"
              >
                {copied ? (
                  <><Check className="h-4 w-4 mr-1" /> Copied</>
                ) : (
                  <><Copy className="h-4 w-4 mr-1" /> Copy</>
                )}
              </Button>
            </div>
            <div className="relative">
              <Textarea
                value={generatedContent}
                onChange={(e) => setGeneratedContent(e.target.value)}
                className="min-h-[200px]"
              />
            </div>
          </div>
        )}
      </CardContent>
      {generatedContent && (
        <CardFooter className="flex justify-between">
          {onClose && (
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
          )}
          <Button onClick={handleApply}>
            Apply to Form
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
