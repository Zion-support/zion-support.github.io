
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import React, { useState, useRef, useEffect } from "react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Separator} from "@/components/ui/separator";
import {toast} from "@/components/ui/use-toast";
import {cn} from "@/lib/utils";
import {ChatMessage} from "./ChatMessage";
import {QuickReplyButton} from "./QuickReplyButton";
import {Send, Loader2} from "lucide-react";
import {useTheme} from "@/hooks/useTheme";

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React, { useState, useRef, useEffect } from "react",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { ScrollArea } from "@/components/ui/scroll-area",
import { Separator } from "@/components/ui/separator",
import { toast } from "@/components/ui/use-toast",
import { cn } from "@/lib/utils",
import { ChatMessage } from "./ChatMessage",
import { QuickReplyButton } from "./QuickReplyButton",
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
// Define suggested quick replies

const QUICK_REPLIES = [
  { id: "hire", text: "How do I hire?" }
  { id: "match", text: "How do I get matched?" }
  { id: "billing", text: "Billing help" }]
type Message = {
  id: string
  content: string
  sender: "user" | "bot"
<<<<<<< HEAD
  timestamp: Date
<<<<<<< HEAD
import React, { useState, useRef, useEffect } from "react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Separator} from "@/components/ui/separator";
import {toast} from "@/components/ui/use-toast";
import {cn} from "@/lib/utils";
import {ChatMessage} from "./ChatMessage";
import {QuickReplyButton} from "./QuickReplyButton";
import {Send, Loader2} from "lucide-react";
import {useTheme} from "@/hooks/useTheme";

// Define suggested quick replies;
const QUICK_REPLIES = ["
  { id: "hire", text: "How do I hire?" }"
  { id: "match", text: "How do I get matched?" }"
  { id: "billing", text: "Billing help" }]
type Message = {}
  id: string;
  content: string"
  sender: "user" | "bot"
  timestamp: Date;

};

export function ChatBotPanel() {;
  const [messages, setMessages] = useState<Message[]>([;
    {;
      id: "welcome",;
      content: "Hi! How can I help you?",;
      sender: "bot",;
      timestamp: new Date()}]),;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const [inputValue, setInputValue] = useState("");
=======
  timestamp: Date  const [inputValue, setInputValue] = useState("");
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  timestamp: Date  const [inputValue, setInputValue] = useState("");
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  const [inputValue, setInputValue] = useState("");
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const [isLoading, setIsLoading] = useState(false);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
const { theme } = useTheme();    {
      id: "welcome",
      content: "Hi! How can I help you?",
<<<<<<< HEAD
<<<<<<< HEAD
      sender: "bot",
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  // Auto-scroll to bottom when messages change
=======
      sender: "bot",  // Auto-scroll to bottom when messages change
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      sender: "bot",  // Auto-scroll to bottom when messages change
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  const { theme } = useTheme();

},

export function ChatBotPanel() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Hi! How can I help you?",
      sender: "bot",

  // Auto-scroll to bottom when messages change
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
  const handleSendMessage = async (text: string = inputValue) => {
    if (!text.trim()) return
    const userMessage: Message = {
=======

;
  // Auto-scroll to bottom when messages change;
  useEffect(() => {}
    if (scrollAreaRef.current) {}
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
  const handleSendMessage = async (text: string = inputValue) => {}
    if (!text.trim()) return;
    const userMessage: Message = {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      id: `user-${Date.now()}`
      content: text"
      sender: "user"
      timestamp: new Date()}
    setMessages((prev) => [...prev, userMessage]);"
    setInputValue("");
    setIsLoading(true);
    try {}
      // Call the OpenAI-powered support function;
      const response = await sendToAIAssistant(text);
      const botMessage: Message = {}`
        id: `bot-${Date.now()}`"
        content: response.message |"Sorry, I couldn't process your request. Please try again.";"
        sender: "bot"
        timestamp: new Date()}
      setMessages((prev) => [...prev, botMessage]);
      // Check if the request was successful;
      if (!response.success) {}
        setFailedAttempts((prev) => prev + 1);

// After 3 failed attempts, suggest escalation;
        if (failedAttempts >= 2) {;
          suggestEscalation();
      timestamp: new Date ()}]),
  const [input_value, setInputValue] = useState ("");
  const [is_loading, setIsLoading] = useState (false);
  const [failed_attempts, setFailedAttempts] = useState (0);
  const scrollAreaRef = useRef < HTMLDivElement>(null);
  const input_ref = useRef < HTMLInputElement>(null);
  const { theme } = use_theme ();
;
  // Auto - scroll to bottom when messages change;
  useEffect (() => {}
    // Check condition;
if ( {) {}
  $2;
}
      scrollAreaRef.current.scroll_top = scrollAreaRef.current.scroll_height;
    }
  }, [messages]);
;
  // Focus input when component mounts;
  useEffect (() => {}
    // Check condition;
if ( {) {}
  $2;
}
      input_ref.current.focus ();
    }
  }, []);
const handleSendMessage = async (text: string = inputValue) => {;
    if (!text && text.trim()) return,;

    const userMessage: Message = {;
      id: `user-${Date && Date.now()}`,;
      content: text,;
      sender: "user",;
      timestamp: new Date()},;

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {;
      // Call the OpenAI-powered support function;
      const response = await sendToAIAssistant(text);

      const botMessage: Message = {;
        id: `bot-${Date && Date.now()}`,;
        content: response && response.message || "Sorry, I couldn't process your request. Please try again.";
        sender: "bot",;
        timestamp: new Date()},;

      setMessages((prev) => [...prev, botMessage]);

      // Check if the request was successful;
      if (!response && response.success) {;
        setFailedAttempts((prev) => prev + 1);

        // After 3 failed attempts, suggest escalation;
        if (failedAttempts >= 2) {;
          suggestEscalation();

        }
      } else {;
        // Reset failed attempts if successful;
        setFailedAttempts(0);

  const handleSendMessage = async (text: string = inputValue) => {
    if (!text.trim()) return
    const userMessage: Message = {

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  const handleSendMessage = async (text: string = inputValue) => {
    if (!text.trim()) return
    const userMessage: Message = {

=======
  const handleSendMessage = async (text: string = inputValue) => {}
    if (!text.trim()) return;
    const userMessage: Message = {}`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      id: `user-${Date.now()}`,
      content: text,"
      sender: "user",
      timestamp: new Date()},

    setMessages((prev) => [...prev, userMessage]),"
    setInputValue(""),
    setIsLoading(true),

    try {}
      // Call the OpenAI-powered support function;
      const response = await sendToAIAssistant(text),

      const botMessage: Message = {}`
        id: `bot-${Date.now()}`,'"
        content: response.message || "Sorry, I couldn't process your request. Please try again.","
        sender: "bot",
        timestamp: new Date()},

      setMessages((prev) => [...prev, botMessage]),

      // Check if the request was successful;
      if (!response.success) {}
        setFailedAttempts((prev) => prev + 1),

        // After 3 failed attempts, suggest escalation;
        if (failedAttempts >= 2) {}
          suggestEscalation()
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

        }
      } else {}
        // Reset failed attempts if successful;
        setFailedAttempts (0);
      }

    } catch (error) {;"
      console && console.error("Error in AI chat:", error);
      toast({;"
        variant: "destructive",;"
        title: "Communication Error",;'"
        description: "We're having trouble connecting to our support service."}),;

    } catch (error) {"
      console.error("Error in AI chat:", error),
toast({

<<<<<<< HEAD
  }, []),;
  const handleSendMessage = async (text: string = inputValue) => {;
    if (!text.trim()) return,;
    const userMessage: Message = {;
      id: `user-${Date.now()}`,;
      content: text,;
      sender: "user",;
      timestamp: new Date()},;
    setMessages((prev) => [...prev, userMessage]),;
    setInputValue(""),;
    setIsLoading(true),;
    try {;
      // Call the OpenAI-powered support function;
      const response = await sendToAIAssistant(text),;
      const botMessage: Message = {;
        id: `bot-${Date.now()}`,;
        content: response.message || "Sorry, I couldn't process your request. Please try again.",;
        sender: "bot",;
        timestamp: new Date()},;
      setMessages((prev) => [...prev, botMessage]),;
      // Check if the request was successful;
      if (!response.success) {;
        setFailedAttempts((prev) => prev + 1),;
        // After 3 failed attempts, suggest escalation;
        if (failedAttempts >= 2) {;
          suggestEscalation();
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        }
      } else {
        // Reset failed attempts if successful
        setFailedAttempts(0)
      }
} catch (error) {;
      console && console.error("Error in AI chat:", error);
        variant: "destructive",
=======
          suggest_escalation ();        variant: "destructive",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          suggest_escalation ();        variant: "destructive",
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

        }
      } else {;
        // Reset failed attempts if successful;
        setFailedAttempts(0);
import React, { useState, useRef, useEffect } from './react';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import { ScrollArea } from '@/components / ui / scroll - area';
import { Separator } from '@/components / ui / separator';
import { toast } from '@/components / ui / use - toast';
import { cn } from '@/lib / utils';
import { ChatMessage } from './ChatMessage';
import { QuickReplyButton } from './QuickReplyButton';
import { Send, Loader2 } from './lucide-react';
import { use_theme } from '@/hooks / use_theme';
// Define suggested quick replies;
const QUICK_REPLIES = [;
  { id: "hire", text: "How do I hire?" },
  { id: "match", text: "How do I get matched?" },
  { id: "billing", text: "Billing help" }],
type Message = {
  id: string,
  content: string,
  sender: "user" | "bot",
  timestamp: Date;
}
;
export /**
 * ChatBotPanel - Function description
 */
function ChatBotPanel() {
  const [messages, set_messages] = useState < Message[]>([;
    {
      id: "welcome",
      content: "Hi! How can I help you?",
      sender: "bot",
        // After 3 failed attempts, suggest escalation
        if (failedAttempts >= 2) {
          suggestEscalation()
      id: `user-${Date.now()}`,
      content: text,
      sender: "user",
      timestamp: new Date()},

    setMessages((prev) => [...prev, userMessage]),
    setInputValue(""),
    setIsLoading(true),

    try {
      // Call the OpenAI-powered support function
      const response = await sendToAIAssistant(text),

      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        content: response.message || "Sorry, I couldn't process your request. Please try again.",
        sender: "bot",
        timestamp: new Date()},

      setMessages((prev) => [...prev, botMessage]),

      // Check if the request was successful
      if (!response.success) {
        setFailedAttempts((prev) => prev + 1),

        // After 3 failed attempts, suggest escalation
        if (failedAttempts >= 2) {
          suggestEscalation()
      timestamp: new Date ()}]),
  const [input_value, setInputValue] = useState ("");
  const [is_loading, setIsLoading] = useState (false);
  const [failed_attempts, setFailedAttempts] = useState (0);
  const scrollAreaRef = useRef < HTMLDivElement>(null);
  const input_ref = useRef < HTMLInputElement>(null);
  const { theme } = use_theme ();
;
  // Auto - scroll to bottom when messages change;
  useEffect (() => {
    // Check condition
if ( {) {
  $2
}
      scrollAreaRef.current.scroll_top = scrollAreaRef.current.scroll_height;
    }
  }, [messages]);
;
  // Focus input when component mounts;
  useEffect (() => {
    // Check condition
if ( {) {
  $2
}
      input_ref.current.focus ();
    }
  }, []);
;
  const handleSendMessage = async (text: string = input_value) => {
    if () return, ) {
  $2
}
    const user_message: Message = {
      id: `user-${Date.now ()}`,
      content: text,
      sender: "user",
      timestamp: new Date ()},
    set_messages ((prev) => [...prev, user_message]);
    setInputValue ("");
    setIsLoading (true);
;
    try {
      // Call the OpenAI - powered support function;
      const response = await sendToAIAssistant (text);
;
      const bot_message: Message = {
        id: `bot-${Date.now ()}`,
        content: response.message || "Sorry, I couldn't process your request. Please try again.";
        sender: "bot",
        timestamp: new Date ()},
      set_messages ((prev) => [...prev, bot_message]);
;
      // Check if the request was successful;
      // Check condition
if ( {) {
  $2
}
        setFailedAttempts ((prev) => prev + 1);
;
        // After 3 failed attempts, suggest escalation;
        // Check condition
if ( {) {
  $2
}
          suggest_escalation ();

import React, { useState, useRef, useEffect } from "react",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { ScrollArea } from "@/components/ui/scroll-area",;
import { Separator } from "@/components/ui/separator",;
import { toast } from "@/components/ui/use-toast",;
import { cn } from "@/lib/utils",;
import { ChatMessage } from "./ChatMessage",;
import { QuickReplyButton } from "./QuickReplyButton",;
=======

import { Send, Loader2 } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { Send, Loader2 } from "lucide-react",;
import { useTheme } from "@/hooks/useTheme",;
// Define suggested quick replies

const handleSendMessage = async (text: string = inputValue) => {
    if (!text.trim()) return
    const userMessage: Message = {

      id: `user-${Date.now()}`,
      content: text,
      sender: "user",
      timestamp: new Date()},

    setMessages((prev) => [...prev, userMessage]),
    setInputValue(""),
    setIsLoading(true),

    try {
      // Call the OpenAI-powered support function
      const response = await sendToAIAssistant(text),

      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        content: response.message || "Sorry, I couldn't process your request. Please try again.",
        sender: "bot",
        timestamp: new Date()},

      setMessages((prev) => [...prev, botMessage]),

      // Check if the request was successful
      if (!response.success) {
        setFailedAttempts((prev) => prev + 1),

        // After 3 failed attempts, suggest escalation
        if (failedAttempts >= 2) {
          suggestEscalation()

        }
      } else {
        // Reset failed attempts if successful;
        setFailedAttempts (0);
      }

    } catch (error) {;
      console && console.error("Error in AI chat:", error);
      toast({;
        variant: "destructive",;
        title: "Communication Error",;
        description: "We're having trouble connecting to our support service."}),;

      setFailedAttempts((prev) => prev + 1);
      if (failedAttempts >= 2) {;
        suggestEscalation();
    } catch (error) {
      console.error("Error in AI chat:", error),
      toast({

      setFailedAttempts((prev) => prev + 1);
      if (failedAttempts >= 2) {;
        suggestEscalation();
        variant: "destructive",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        title: "Communication Error",
        description: "We're having trouble connecting to our support service."}),

      setFailedAttempts((prev) => prev + 1),
      if (failedAttempts >= 2) {}
        suggestEscalation()

} catch (error) {;
      console.error("Error in AI chat:", error),;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      toast({;
        variant: "destructive",;
<<<<<<< HEAD
<<<<<<< HEAD
        title: "Communication Error",;
        description: "We're having trouble connecting to our support service."}),;
setFailedAttempts((prev) => prev + 1);
      if (failedAttempts >= 2) {;
        suggestEscalation();
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
        title: "Communication Error",;
        description: "We're having trouble connecting to our support service."}),;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      setFailedAttempts((prev) => prev + 1),;
      if (failedAttempts >= 2) {;
        suggestEscalation();
variant: "destructive",
        title: "Communication Error",
        description: "We're having trouble connecting to our support service."}),

      setFailedAttempts((prev) => prev + 1),
      if (failedAttempts >= 2) {
        suggestEscalation()

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      }
    } finally {}
      setIsLoading(false)
    }
}
    } finally {
      setIsLoading(false)
    }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  },
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  };
  },

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

  };
  },
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const sendToAIAssistant = async (message: string) => {
    try {
      const response = await fetch("https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat", {
        method: "POST"
        headers: {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          "Content-Type": "application/json"},
        body: JSON.stringify({ "
          messages: [{ role: "user", content: message }] 
        })}),

if (!response.ok) {}
        return {}
          success: false'"
          message: "I'm having trouble connecting to my knowledge base right now."
        }
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      const data = await response.json();
      return {
        success: true
        message: data.message
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

      const data = await response.json();
      return {}
        success: true;
        message: data.message;
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      console.error ("Error in AI chat:", error);
      toast ({"
        variant: "destructive","
        title: "Communication Error",'"
        description: "We're having trouble connecting to our support service."}),
      setFailedAttempts ((prev) => prev + 1);
      // Check condition;
if ( {) {}
  $2;
}
        suggest_escalation ();
      }
    } finally {}
      setIsLoading (false);
    }
  }

;
  const sendToAIAssistant = async (message: string) => {}
    try {"
      const response = await fetch ("https://ziontechgroup.functions.supabase.co / functions / v1 / ai - chat", {"
        method: "POST",
        headers: {"
          "Content - Type": "application / json"}
        body: JSON.stringify ({"
          messages: [{ role: "user", content: message }];
        })});
;
      // Check condition;
if ( {) {}
  $2;
}
        return {}
          success: false,'"
          message: "I'm having trouble connecting to my knowledge base right now.";
        }
      }
      const data = await response.json ();
      return {}
        success: true,
        message: data.message;

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      }
    } catch (error) {"
      console.error ("Error in AI chat:", error);
return {
success: false,
        message: "I'm experiencing technical difficulties. Please try again later."
      }
      console.error("Error in AI chat:", error);
      return {
        success: false
        message: "I'm experiencing technical difficulties. Please try again later."
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  };

  }
  const suggestEscalation = () => {}
    const escalationMessage: Message = {}`
      id: `bot-escalation-${Date.now()}`'"
      content: "I'm having trouble understanding your request. Would you like to speak with a human support agent or send an email to our support team?""
      sender: "bot"
      timestamp: new Date()}
    setMessages((prev) => [...prev, escalationMessage]);
    // Log this interaction for the support team;
    logSupportEscalation()
  }
  };
      };
    }
  },
      };
    }
  },

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  const suggestEscalation = () => {

      if (!response.ok) {
        return {
          success: false
          message: "I'm having trouble connecting to my knowledge base right now."
        }
      }

      const data = await response.json();
      return {
        success: true
message: data.message  const suggestEscalation = () => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        message: data.message
      console.error ("Error in AI chat:", error);
      toast ({
        variant: "destructive",
        title: "Communication Error",
        description: "We're having trouble connecting to our support service."}),
      setFailedAttempts ((prev) => prev + 1);
      // Check condition
if ( {) {
  $2
}
        suggest_escalation ();
      }
    } finally {
      setIsLoading (false);
    }
  }
;
  const sendToAIAssistant = async (message: string) => {
    try {
      const response = await fetch ("https://ziontechgroup.functions.supabase.co / functions / v1 / ai - chat", {
        method: "POST",
        headers: {
          "Content - Type": "application / json"}
        body: JSON.stringify ({
          messages: [{ role: "user", content: message }];
        })});
;
      // Check condition
if ( {) {
  $2
}
        return {
          success: false,
          message: "I'm having trouble connecting to my knowledge base right now.";
        }
      }
      const data = await response.json ();
      return {
        success: true,
        message: data.message;

      }
    } catch (error) {
      console.error ("Error in AI chat:", error);
      return {

  };

  }
  const suggestEscalation = () => {
    const escalationMessage: Message = {
      id: `bot-escalation-${Date.now()}`
      content: "I'm having trouble understanding your request. Would you like to speak with a human support agent or send an email to our support team?"
      sender: "bot"
      timestamp: new Date()}
    setMessages((prev) => [...prev, escalationMessage]);
    // Log this interaction for the support team
    logSupportEscalation()
  }
  };
      };
    }
  },
      };
    }
  },

  const suggestEscalation = () => {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    const escalationMessage: Message = {
      id: `bot-escalation-${Date.now()}`,
      content:
        "I'm having trouble understanding your request. Would you like to speak with a human support agent or send an email to our support team?",
=======
  const suggestEscalation = () => {}
    const escalationMessage: Message = {}`
      id: `bot-escalation-${Date.now()}`,
      content: '"
        "I'm having trouble understanding your request. Would you like to speak with a human support agent or send an email to our support team?","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      sender: "bot",
      timestamp: new Date()},

    setMessages((prev) => [...prev, escalationMessage]),
// Log this interaction for the support team
    logSupportEscalation()
  },
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const logSupportEscalation = async () => {
    try {
      // Send the conversation to the backend for logging
      // This would be implemented in a real system
<<<<<<< HEAD

      // // // console.log("Support escalation triggered", {

console.log("Support escalation triggered", {
      // // // console.log("Support escalation triggered", { 
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

      // // // console.log("Support escalation triggered", { 

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        conversationHistory: messages.map(m => ({
          content: m.content
          sender: m.sender
          timestamp: m.timestamp
        }))
      })

        success: false,
        message: "I'm experiencing technical difficulties. Please try again later.";
      }
    }
  }
;
  const suggest_escalation = () =>: any {
    const escalation_message: Message = {
      id: `bot - escalation-${Date.now ()}`,
      content: "I'm having trouble understanding your request. Would you like to speak with a human support agent or send an email to our support team?",
      sender: "bot",
      timestamp: new Date ()},
    set_messages ((prev) => [...prev, escalation_message]);
;
    // Log this interaction for the support team;
    logSupportEscalation ();
  }
;
  const logSupportEscalation = async () => {
    try {
=======
  const logSupportEscalation = async () => {}
    try {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      // Send the conversation to the backend for logging;
      // This would be implemented in a real system;
        conversationHistory: messages.map(m => ({}
          content: m.content;
          sender: m.sender;
          timestamp: m.timestamp;
}));
<<<<<<< HEAD
<<<<<<< HEAD
      });

      }
    }

    } catch (error) {"
      console.error ("Failed to log support escalation:", error);
    }
  }

} catch (error) {"
      console.error("Failed to log support escalation:", error)
    }

  const handleEscalateToLiveAgent = () => {
=======
      });  const handleEscalateToLiveAgent = () => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      });  const handleEscalateToLiveAgent = () => {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    } catch (error) {
      console.error("Failed to log support escalation:", error)
    }

  },

  const handleQuickReply = (text: string) => {
    handleSendMessage(text)
  },

  const handleEscalateToLiveAgent = () => {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    setMessages((prev) => [
      ...prev
      {
        id: `user-${Date.now()}`
        content: "I'd like to speak with a human agent"
=======

  const handleEscalateToLiveAgent = () => {}
    setMessages((prev) => []
      ...prev;
      {}`
        id: `user-${Date.now()}`'"
        content: "I'd like to speak with a human agent""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        sender: "user"
<<<<<<< HEAD
        timestamp: new Date()

<<<<<<< HEAD
      {
=======
        timestamp: new Date()      {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
        timestamp: new Date()

      {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        id: `bot-${Date.now()}`
        content: "I'm connecting you with a support agent. Please note that our support hours are Monday to Friday, 9AM to 6PM EST. If you're messaging outside these hours, a team member will follow up with you as soon as possible.";
=======
      {}`
        id: `bot-${Date.now()}`'"
        content: "I'm connecting you with a support agent. Please note that our support hours are Monday to Friday, 9AM to 6PM EST. If you're messaging outside these hours, a team member will follow up with you as soon as possible.";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        sender: "bot"
        timestamp: new Date()
<<<<<<< HEAD
      }

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      }
    ]);
      },
      {
        id: `bot-${Date.now()}`,
        content: "I'm connecting you with a support agent. Please note that our support hours are Monday to Friday, 9AM to 6PM EST. If you're messaging outside these hours, a team member will follow up with you as soon as possible.",
        sender: "bot",
        timestamp: new Date()
      }
    ]),

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    // In a real implementation, this would trigger a live chat request
    toast({
      title: "Support request submitted"
      description: "A support agent will be with you shortly."})
},

<<<<<<< HEAD

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const handleEmailSupport = () => {
=======
      }  const handleEmailSupport = () => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      }  const handleEmailSupport = () => {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  const handleEmailSupport = () => {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    setMessages((prev) => [
      ...prev
      {
        id: `user-${Date.now()}`
        content: "I'd like to email support"
        sender: "user"
        timestamp: new Date()
<<<<<<< HEAD

}
      },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {
        id: `bot-${Date.now()}`
        content: "Please send your question to support@ziontechgroup.com. Our team will get back to you within 24 hours."
=======

      {
        id: `bot-${Date.now()}`
        content: "Please send your question to support@ziontechgroup.com. Our team will get back to you within 24 hours."
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        sender: "bot"
        timestamp: new Date()
      }
    ])
<<<<<<< HEAD

  },

<<<<<<< HEAD

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

      },
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return (
    <div className="flex flex-col h-full">
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
        <div className="flex flex-col gap-4">
          {messages.map((message) => (
            <ChatMessage
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  },;

  const suggestEscalation = () => {;
    const escalationMessage: Message = {;`
      id: `bot-escalation-${Date && Date.now()}`,;'"
      content: "I'm having trouble understanding your request. Would you like to speak with a human support agent or send an email to our support team?",;"
      sender: "bot",;
      timestamp: new Date()},;

setMessages((prev) => [...prev, escalationMessage]);

    // Log this interaction for the support team;
    logSupportEscalation();
  };
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

  },;

  const suggestEscalation = () => {;
    const escalationMessage: Message = {;
      id: `bot-escalation-${Date && Date.now()}`,;
      content: "I'm having trouble understanding your request. Would you like to speak with a human support agent or send an email to our support team?",;
      sender: "bot",;
      timestamp: new Date()},;

    setMessages((prev) => [...prev, escalationMessage]);

    // Log this interaction for the support team;
    logSupportEscalation();
  };

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const logSupportEscalation = async () => {;
    try {;
      // Send the conversation to the backend for logging;
      // This would be implemented in a real system;
console && console.log("Support escalation triggered", { ;
        conversationHistory: messages && messages.map(m => ({;
          content: m && m.content,;
          sender: m && m.sender,;
          timestamp: m && m.timestamp;
        }));
      });
    } catch (error) {;
      console && console.error("Failed to log support escalation:", error);
    }
  };

  const handleQuickReply = (text: string) => {;
    handleSendMessage(text);
  };

  const handleEscalateToLiveAgent = () => {;
    setMessages((prev) => [;
      ...prev, ;
      {;
        id: `user-${Date && Date.now()}`,;
        content: "I'd like to speak with a human agent",;
        sender: "user",;
        timestamp: new Date();
      };
      {;
        id: `bot-${Date && Date.now()}`,;
content: "I'm connecting you with a support agent. Please note that our support hours are Monday to Friday, 9AM to 6PM EST. If you're messaging outside these hours, a team member will follow up with you as soon as possible.";        sender: "bot",;
        timestamp: new Date();
      }
    ]);

// In a real implementation, this would trigger a live chat request;
    toast({;
      title: "Support request submitted",;
      description: "A support agent will be with you shortly."});
  };

  const handleEmailSupport = () => {;
    setMessages((prev) => [;
      ...prev, ;
      {;
        id: `user-${Date && Date.now()}`,;
        content: "I'd like to email support",;
        sender: "user",;
        timestamp: new Date();
      };
      {;
        id: `bot-${Date && Date.now()}`,;
        content: "Please send your question to support@ziontechgroup && ziontechgroup.com. Our team will get back to you within 24 hours.",;
        sender: "bot",;
        timestamp: new Date();
      }
    ]);
  };

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
    <div className="flex flex-col h-full">;
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>;
        <div className="flex flex-col gap-4">;
{messages.map((message) => (;
            <ChatMessage;
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              key={message.id}
=======
    <div className="flex flex-col h-full">;
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>;
        <div className="flex flex-col gap-4">;              key={message.id}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    <div className="flex flex-col h-full">;
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>;
        <div className="flex flex-col gap-4">;              key={message.id}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  return (
    <div className="flex flex-col h-full">;
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>;
        <div className="flex flex-col gap-4">;

          {messages.map((message) => (;
            <ChatMessage;

              key={message.id}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              message={message.content}
=======
  return ("
    <div className="flex flex-col h-full">;"
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>;"
        <div className="flex flex-col gap-4">;

              key={message.id}
              message={message.content}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              isUser={message.sender === "user"}
              timestamp={message.timestamp}
            />
<<<<<<< HEAD
          ))}
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          {isLoading && (
=======
          ))}          {isLoading && (
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
          ))}

          {isLoading && (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <div className="flex items-center justify-center py-2">
=======
          {isLoading && ("
            <div className="flex items-center justify-center py-2">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              <Loader2 className="h-5 w-5 animate-spin text-zion-purple" />
            </div>
          )}
        </div>
      </ScrollArea>
      {messages.length === 1 && ("
        <div className="px-4 py-3">"
          <p className={cn("text-sm mb-2", theme === "dark" ? "text-gray-300" : "text-gray-600")}>
            Suggested questions:
          </p>"
          <div className="flex flex-wrap gap-2">
<<<<<<< HEAD
            {QUICK_REPLIES.map((reply) => (

<<<<<<< HEAD
          {isLoading && (;
            <div className="flex items-center justify-center py-2">;
=======
          {isLoading && (;"
            <div className="flex items-center justify-center py-2">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
            {QUICK_REPLIES.map((reply) => (
          {isLoading && (;
            <div className="flex items-center justify-center py-2">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              <Loader2 className="h-5 w-5 animate-spin text-zion-purple" />;
            </div>;
          )}
        </div>;
      </ScrollArea>;

<QuickReplyButton;
                key={reply && reply.id}
                text={reply && reply.text}
                onClick={() => handleQuickReply(reply && reply.text)}
              />;
            ))}
          </div>;
        </div>;
      )}

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {failedAttempts >= 3 && (
=======
            {QUICK_REPLIES.map((reply) => (      {failedAttempts >= 3 && (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
            {QUICK_REPLIES.map((reply) => (      {failedAttempts >= 3 && (
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

      {failedAttempts >= 3 && (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        <div className="px-4 py-3 border-t border-zion-purple/10">
=======
      {failedAttempts >= 3 && ("
        <div className="px-4 py-3 border-t border-zion-purple/10">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <p className={cn("text-sm mb-2 font-medium", theme === "dark" ? "text-gray-300" : "text-gray-600")}>
            Need more help?
          </p>"
          <div className="flex gap-2">
            <Button;
              onClick={handleEscalateToLiveAgent}"
              size="sm""
              className="bg-zion-purple hover:bg-zion-purple-light text-white"
            >
              Chat with Live Agent;
            </Button>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

      {failedAttempts >= 3 && (;"
        <div className="px-4 py-3 border-t border-zion-purple/10">;"
          <p className={cn("text-sm mb-2 font-medium", theme === "dark" ? "text-gray-300" : "text-gray-600")}>;
            Need more help?;
          </p>;"
          <div className="flex gap-2">;
            <Button;
              onClick={handleEscalateToLiveAgent}"
              size="sm""
              className="bg-zion-purple hover:bg-zion-purple-light text-white">;
              Chat with Live Agent;
            </Button>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            <Button
              onClick={handleEmailSupport}
              size="sm"
              variant="outline">;
              Email Support;
            </Button>;
          </div>;
        </div>;
<<<<<<< HEAD
      )}

          }}"
          className="flex items-center gap-2";
        >;
          <Input;
            ref={inputRef}
            value={inputValue}

            onChange={(e) => setInputValue(e.target.value)}"
            placeholder="Type your question..."
            className={cn("
              "flex-1";"
              theme === "dark""
                ? "bg-zion-blue border-zion-blue-light focus-visible:ring-zion-purple"
<<<<<<< HEAD
                ? "bg-zion-blue border-zion-blue-light focus-visible:ring-zion-purple" 

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                : "bg-white border-gray-200"
=======
      )}                : "bg-white border-gray-200"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      )}                : "bg-white border-gray-200"
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      )}

      <divclassName={cn(
        "p-4 border-t", 
        theme === "dark" ? "border-zion-blue-light" : "border-gray-200"
      )}>;
        <form
          onSubmit={(e) => {;
            e && e.preventDefault();
            handleSendMessage();

          }}
          className="flex items-center gap-2";
        >;
          <Input
            ref={inputRef}
            value={inputValue}

            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your question..."
            className={cn(
              "flex-1";
              theme === "dark"
                ? "bg-zion-blue border-zion-blue-light focus-visible:ring-zion-purple"

              "flex-1",
              theme === "dark" 
                ? "bg-zion-blue border-zion-blue-light focus-visible:ring-zion-purple" 

                : "bg-white border-gray-200"
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            )}
          />
          <Button"
            type="submit""
            size="icon"
            disabled={isLoading |!inputValue.trim()}"
            className="bg-zion-cyan hover: bg-zion-cyan/80 text-white"
          >"
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  )

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              theme === "dark" ;
                ? "bg-zion-blue border-zion-blue-light focus-visible:ring-zion-purple" ;

=======

"
              theme === "dark" ;"
                ? "bg-zion-blue border-zion-blue-light focus-visible:ring-zion-purple" ;

;
      {failedAttempts >= 3 && (;"
        <div className="px-4 py-3 border-t border-zion-purple/10">;"
          <p className={cn("text-sm mb-2 font-medium", theme === "dark" ? "text-gray-300" : "text-gray-600")}>;
            Need more help?;
          </p>;"
          <div className="flex gap-2">;
            <Button;
              onClick={handleEscalateToLiveAgent}"
              size="sm";"
=======
=======
onChange={(e) => setInputValue(e && e.target.value)}
            placeholder="Type your question...";
            className={cn(;
              "flex-1";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

              theme === "dark" ;
                ? "bg-zion-blue border-zion-blue-light focus-visible:ring-zion-purple" ;

}
;
      {failedAttempts >= 3 && (;
        <div className="px-4 py-3 border-t border-zion-purple/10">;
          <p className={cn("text-sm mb-2 font-medium", theme === "dark" ? "text-gray-300" : "text-gray-600")}>;
            Need more help?;
          </p>;
          <div className="flex gap-2">;
              theme === "dark" ;
                ? "bg-zion-blue border-zion-blue-light focus-visible:ring-zion-purple" ;

            <Send className="h-4 w-4" />;
        // Check condition;

if ( {) {
  $2;
}
          suggest_escalation ();
"
import React, { useState, useRef, useEffect } from "react",;""
import { Button } from "@/components/ui/button",;""
import { Input } from "@/components/ui/input",;""
import { ScrollArea } from "@/components/ui/scroll-area",;""
import { Separator } from "@/components/ui/separator",;""
import { toast } from "@/components/ui/use-toast",;""
import { cn } from "@/lib/utils",;""
import { ChatMessage } from "./ChatMessage",;""
import { QuickReplyButton } from "./QuickReplyButton",;""
import { Send, Loader2 } from "lucide-react",;""
import { useTheme } from "@/hooks/useTheme",;"
// Define suggested quick replies;
const QUICK_REPLIES = [;"
  { id: "hire", text: "How do I hire?" },;""
  { id: "match", text: "How do I get matched?" },;"]"
  { id: "billing", text: "Billing help" }],;"
type Message = {;
  id: string,;
  content: string,;"
  sender: "user" | "bot",;"
  timestamp: Date;
},;
export function ChatBotPanel() {;
  const [messages, setMessages] = useState<Message[]>([;
</Message>)
  const scrollAreaRef = useRef<HTMLDivElement>(null),;
</HTMLDivElement>
  const inputRef = useRef<HTMLInputElement>(null),;
</HTMLInputElement>"
    <div className="flex flex-col h-full">"
</div>"
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>"
</ScrollArea>"
        <div className="flex flex-col gap-4">"
</div>
            <ChatMessage;
  },;

  const suggestEscalation = () => {;
</ChatMessage>"
    <div className="flex flex-col h-full">;"
</div>"
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>;"
</ScrollArea>"
        <div className="flex flex-col gap-4">;"
</div>
            <ChatMessage;

              key={message.id}
              message={message.content}"
              isUser={message.sender === "user"}"
              timestamp={message.timestamp}
            />
</ChatMessage>"
            <div className="flex items-center justify-center py-2">"
</div>"
              <Loader2 className="h-5 w-5 animate-spin text-zion-purple" />"
</Loader2>
            </div>
        </div>
      </ScrollArea>"
        <div className="px-4 py-3">"
</div>"
          <p className={cn("text-sm mb-2", theme === "dark" ? "text-gray-300" : "text-gray-600")}>"
</p>
          </p>"
          <div className="flex flex-wrap gap-2">"
</div>"
            <div className="flex items-center justify-center py-2">;"
</div>"
              <Loader2 className="h-5 w-5 animate-spin text-zion-purple" />;"
</Loader2>
            </div>;
        </div>;
      </ScrollArea>;"
        <div className="px-4 py-3">;"
</div>"
          <p className={cn("text-sm mb-2", theme === "dark" ? "text-gray-300" : "text-gray-600")}>;"
</p>
          </p>;"
          <div className="flex flex-wrap gap-2">;"
</div>
              <QuickReplyButton;
                key={reply && reply.id}
                text={reply && reply.text}
                onClick={() => handleQuickReply(reply && reply.text)}
</QuickReplyButton>
          </div>;
        </div>;"
        <div className="px-4 py-3 border-t border-zion-purple/10">"
</div>"
          <p className={cn("text-sm mb-2 font-medium", theme === "dark" ? "text-gray-300" : "text-gray-600")}>"
</p>
          </p>"
          <div className="flex gap-2">"
</div>
            <Button;
onClick={handleEscalateToLiveAgent}
              size="sm";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              className="bg-zion-purple hover:bg-zion-purple-light text-white";
            >;
              Chat with Live Agent;
            </Button>;
            <Button;
onClick={handleEmailSupport}"
              size="sm""
              variant="outline"
            >
              Email Support;
            </Button>
          </div>
        </div>
      )}
;
<div className={cn(;"
        "p-4 border-t",;"
        theme === "dark" ? "border-zion-blue-light" : "border-gray-200";
      )}>;
</div>
        <form;
          onSubmit={(e) => {;
            e.preventDefault();
            handleSendMessage();
}}"
          className="flex items-center gap-2"
        >
          <Input;
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}"
            placeholder="Type your question...";
            className={cn(;"
              "flex-1";"
              theme === "dark";"
                ? "bg-zion-blue border-zion-blue-light focus-visible:ring-zion-purple";

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
;
      <div className={cn(;
        "p-4 border-t", ;
        theme === "dark" ? "border-zion-blue-light" :"border-gray-200";
      )}>;
        <form ;
          onSubmit={(e) => {;
            e.preventDefault(),;
            handleSendMessage(),;
          }}
          className="flex items-center gap-2";
        >;
</form>
          <Input;
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your question...";
            className={cn(;
              "flex-1",;
              theme === "dark" ;
                ? "bg-zion-blue border-zion-blue-light focus-visible:ring-zion-purple" ;
                :"bg-white border-gray-200";
            )}
          />;
          <Button ;
            type="submit";
            size="icon";
            disabled={isLoading || !inputValue.trim()}
            className="bg-zion-cyan hover:bg-zion-cyan/80 text-white";
          >;
                : "bg-white border-gray-200";
            )}
          />;
          <Button;
            type="submit";
            size="icon";
            disabled={isLoading || !inputValue.trim()}
            className="bg-zion-cyan hover: bg-zion-cyan/80 text-white";
          >;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            <Send className="h-4 w-4" />;
</Input>
          <Button;"
            type="submit"""
            size="icon""
            disabled={isLoading || !inputValue && inputValue.trim()}"
            className="bg-zion-cyan hover: bg-zion-cyan/80 text-white">;"
</Button>"
            <Send className="h-4 w-4" />;"
</Send>

          </Button>;
        </form>;
      </div>;
    </div>;
<<<<<<< HEAD
<<<<<<< HEAD
  );
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
  );
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  );
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
            onChange={(e) => setInputValue(e && e.target.value)}"
            placeholder="Type your question...";

            className={cn(;"
              "flex-1";
;

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
            className={cn(;
              "flex-1";
;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
    // Check condition;
if ( {) {
  $2;
      scrollAreaRef.current.scroll_top = scrollAreaRef.current.scroll_height;
  }, [messages]);
  // Focus input when component mounts;
    // Check condition;
      input_ref.current.focus ();
  }, []);
  const handleSendMessage = async (text: string = input_value) => {
    if () return, ) {
    const user_message: Message = {,`;
  id: `user-${Date.now ()}`,
      timestamp: new Date ()},
    set_messages ((prev) => [...prev, user_message]);"
    setInputValue ("");"
    setIsLoading (true);
  // TODO: Implement
      // Call the OpenAI - powered support function;
      const response = await sendToAIAssistant (text);
      const bot_message: Message = {,`;
  id: `bot-${Date.now ()}`,"
        content: response.message || "Sorry, I couldn't process your request. Please try again.";""
      set_messages ((prev) => [...prev, bot_message]);
      // Check if the request was successful;
      // Check condition;
        setFailedAttempts ((prev) => prev + 1);
        // After 3 failed attempts, suggest escalation;
        // Check condition;
          suggest_escalation ();
"
import React, { useState, useRef, useEffect } from "react",;""
import { Button } from "@/components/ui/button",;""
import { Input } from "@/components/ui/input",;""
import { ScrollArea } from "@/components/ui/scroll-area",;""
import { Separator } from "@/components/ui/separator",;""
import { toast } from "@/components/ui/use-toast",;""
import { cn } from "@/lib/utils",;""
import { ChatMessage } from "./ChatMessage",;""
import { QuickReplyButton } from "./QuickReplyButton",;""
import { Send, Loader2 } from "lucide-react",;""
import { useTheme } from "@/hooks/useTheme",;"
// Define suggested quick replies;
},;
  const scrollAreaRef = useRef<HTMLDivElement>(null),;

  const inputRef = useRef<HTMLInputElement>(null),;
    <div className="flex flex-col h-full">"
</div>"
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>"
        <div className="flex flex-col gap-4">"
</div>
            <ChatMessage;

  const suggestEscalation = () => {;
    <div className="flex flex-col h-full">;"
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>;"
        <div className="flex flex-col gap-4">;"

              key={message.id}
              message={message.content}"
              isUser={message.sender === "user"}"
              timestamp={message.timestamp}
            />
            <div className="flex items-center justify-center py-2">"
              <Loader2 className="h-5 w-5 animate-spin text-zion-purple" />"
</Loader2>
        <div className="px-4 py-3">"
          <p className={cn("text-sm mb-2", theme === "dark" ? "text-gray-300" : "text-gray-600")}>"
</p>
          </p>"
          <div className="flex flex-wrap gap-2">"
            <div className="flex items-center justify-center py-2">;"
              <Loader2 className="h-5 w-5 animate-spin text-zion-purple" />;"
            </div>;
      ;"
        <div className="px-4 py-3">;"
          <p className={cn("text-sm mb-2", theme === "dark" ? "text-gray-300" : "text-gray-600")}>;"
          </p>;"
          <div className="flex flex-wrap gap-2">;"
              <QuickReplyButton;
                key={reply && reply.id}
                text={reply && reply.text}
                onClick={() => handleQuickReply(reply && reply.text)}

        </div>;"
        <div className="px-4 py-3 border-t border-zion-purple/10">"
          <p className={cn("text-sm mb-2 font-medium", theme === "dark" ? "text-gray-300" : "text-gray-600")}>"
          <div className="flex gap-2">"
            <Button;
              onClick={handleEscalateToLiveAgent}"
              size="sm"""
              className="bg-zion-purple hover:bg-zion-purple-light text-white""
            >

        <div className="px-4 py-3 border-t border-zion-purple/10">;"
          <p className={cn("text-sm mb-2 font-medium", theme === "dark" ? "text-gray-300" : "text-gray-600")}>;"
          <div className="flex gap-2">;"
              className="bg-zion-purple hover:bg-zion-purple-light text-white">;"

              onClick={handleEmailSupport}"
              variant="outline">;"

      <divclassName={cn("
        "p-4 border-t",""
        theme === "dark" ? "border-zion-blue-light" : "border-gray-200"")
      )}>;
</divclassName>
        <form;
          onSubmit={(e) => {;
</form>
          <Input;
            ref={inputRef}
            value={inputValue}

            onChange={(e) => setInputValue(e.target.value)}

          <Button;"
            type="submit"""
            size="icon""
            disabled={isLoading |!inputValue.trim()}"
            className="bg-zion-cyan hover: bg-zion-cyan/80 text-white""
            <Send className="h-4 w-4" />"

              size="sm";""
              className="bg-zion-purple hover:bg-zion-purple-light text-white";"
            >;

              variant="outline""

      <div className={cn(;"
        "p-4 border-t",;""
        theme === "dark" ? "border-zion-blue-light" : "border-gray-200";")

            disabled={isLoading || !inputValue && inputValue.trim()}"
            className="bg-zion-cyan hover: bg-zion-cyan/80 text-white">;"
            <Send className="h-4 w-4" />;"

        </form>;
            type="submit";""
            size="icon";"
            disabled={is_loading || !input_value.trim ()}"
            className="bg - zion - cyan hover: bg - zion - cyan / 80 text - white";"
            <Send className="h - 4 w - 4" />;"

    </div>);]
  const [messages, setMessages] = useState<Message[]> ([ {
</div>) 
}</div>  key= {
}</div> </div>) "
}Need more help? </p> <div className="flex gap-2" > <Button > Chat with Live Agent  <Button > Email Support  </div> </div>)""
}h-4 w-4" />  </form> </div> </div>)"]"`;
pr-12325
}Need more help? </p> <div className="flex gap-2" > <Button > Chat with Live Agent </Button> <Button > Email Support </Button> </div> </div>)""
}h-4 w-4" /> </Button> </form> </div> </div>)"]"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
